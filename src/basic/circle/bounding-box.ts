import { Circle, Dynamic, Point, Rectangle } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Circle bounding box");
{
    const card = tpl.addCard({ className: "col-12", aspectRatio: "2:1", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const restParams = new (new Dynamic().create({ radius: 10 }))();

    const centerPoint = new Point(10, 0);
    const circle = new Circle().bind([centerPoint, "any"], [restParams, "any"], function (e1, e2) {
        this.copyFrom(new Circle(e1.target, e2.target.radius));
    });

    const boundingBoxRectangle = new Rectangle().bind([circle, "any"], function (e) {
        this.copyFrom(e.target.isValid() ? new Rectangle(...e.target.getBoundingBox()) : null);
    });

    card.setDescription(
        "code",
        ` 
const point1 = new Point([-20, 6]);
const point2 = new Point([0, 15]);

const lineSegment = new LineSegment().bind([point1, "any"], [point2, "any"], function (e1, e2) {
    this.copyFrom(new LineSegment(e1.target, e2.target));
});

const boundingBoxRectangle = new Rectangle().bind([lineSegment, "any"], function (e) {
    this.copyFrom(e.target.isValid() ? new Rectangle(...e.target.getBoundingBox()) : null);
});
    `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const circleFolder = pane.addFolder({ title: "Circle" });
    circleFolder.addInput(restParams, "radius", { min: 0 });
    // #endregion

    view.add(new ViewElement(centerPoint, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(boundingBoxRectangle, { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("purple") }));
    view.add(new ViewElement(circle, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}
