import { Dynamic, Point, Rectangle } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Rectangle center point and bounding box");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const point = new Point([0, 0]);
    const restParams = new (new Dynamic().create({
        width: 20,
        height: 20,
        rotation: 0
    }))();
    const rectangle = new Rectangle().bind([point, "any"], [restParams, "any"], function (e1, e2) {
        const { width, height, rotation } = e2.target;
        this.copyFrom(new Rectangle(e1.target, width, height, rotation));
    });

    const centerPoint = new Point().bind([rectangle, "any"], function (e) {
        this.copyFrom(e.target.isValid() ? e.target.getCenterPoint() : null);
    });

    const boundingBox = new Rectangle().bind([rectangle, "any"], function (e) {
        this.copyFrom(new Rectangle(...e.target.degenerate(false)!.getBoundingBox()));
    });

    card.setDescription(
        codeHtml(` 
const point = new Point([0, 0]);
const restParams = new (new Dynamic().create({
    width: 20,
    height: 20,
    rotation: 0
}))();
const rectangle = new Rectangle().bind([point, "any"], [restParams, "any"], function (e1, e2) {
    const { width, height, rotation } = e2.target;
    this.copyFrom(new Rectangle(e1.target, width, height, rotation));
});

const centerPoint = new Point().bind([rectangle, "any"], function (e) {
    this.copyFrom(e.target.isValid() ? e.target.getCenterPoint() : null);
});

const boundingBox = new Rectangle().bind([rectangle, "any"], function (e) {
    this.copyFrom(new Rectangle(...e.target.degenerate(false)!.getBoundingBox()));
});
    `)
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const rectFolder = pane.addFolder({ title: "Rectangle" });
    rectFolder.addInput(restParams, "width", { min: 0, max: 100 });
    rectFolder.addInput(restParams, "height", { min: 0, max: 100 });
    rectFolder.addInput(restParams, "rotation", { min: 0, max: 2 * Math.PI });
    // #endregion

    view.add(new ViewElement(point, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(centerPoint, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("pink") }));
    view.add(new ViewElement(boundingBox, { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("purple") }));
    view.add(new ViewElement(rectangle, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}
