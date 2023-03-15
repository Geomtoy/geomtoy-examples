import { Circle, Dynamic, LineSegment, Point, SealedShapeObject } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { codeHtml, dashedThinStroke, lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Circle closest point");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const point = new Point([-10, 5]);
    const restParams = new (new Dynamic().create({ radius: 10 }))();

    const centerPoint = new Point(10, 0);
    const circle = new Circle().bind([centerPoint, "any"], [restParams, "any"], function (e1, e2) {
        this.copyFrom(new Circle(e1.target, e2.target.radius));
    });

    const closestPointLineSegment = new SealedShapeObject({
        point: new Point("cross"),
        lineSegment: new LineSegment()
    }).bind([point, "any"], [circle, "any"], function (e1, e2) {
        this.items.point.copyFrom(e2.target.isValid() ? e2.target.getClosestPointFrom(e1.target)[0] : null);
        this.items.lineSegment.copyFrom(new LineSegment(e1.target, this.items.point));
    });

    card.setDescription(
        codeHtml(`
const point1 = new Point([0, 10]);
const point2 = new Point([10, 22]);
const controlPoint1 = new Point([2, 7]);
const controlPoint2 = new Point([6, -20]);
const point = new Point([0, 0]);
const bezier = new Bezier().bind([point1, "any"], [point2, "any"], [controlPoint1, "any"], [controlPoint2, "any"], function (e1, e2, e3, e4) {
    this.copyFrom(new Bezier(e1.target, e2.target, e3.target, e4.target));
});

const closestPointLineSegment = new SealedShapeObject({
    point: new Point("cross"),
    lineSegment: new LineSegment()
}).bind([point, "any"], [bezier, "any"], function (e1, e2) {
    this.items.point.copyFrom(e2.target.isValid() ? e2.target.getClosestPointFrom(e1.target) : null);
    this.items.lineSegment.copyFrom(new LineSegment(e1.target, this.items.point));
});
    `)
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const circleFolder = pane.addFolder({ title: "Circle" });
    circleFolder.addInput(restParams, "radius", { min: 0 });
    const closestPointFolder = pane.addFolder({ title: "Closest point" });
    closestPointFolder.addMonitor(closestPointLineSegment.items.point, "x");
    closestPointFolder.addMonitor(closestPointLineSegment.items.point, "y");
    // #endregion

    view.add(new ViewElement(centerPoint, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("pink") }));
    view.add(new ViewElement(closestPointLineSegment.items.point, { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("pink") }));
    view.add(new ViewElement(closestPointLineSegment.items.lineSegment, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(circle, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}
