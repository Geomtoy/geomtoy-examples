import { Bezier, LineSegment, Point, SealedShapeObject } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { dashedThinStroke, lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/scripts/common";
import { twoPointsLineSegment } from "../../assets/scripts/general-construction";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Bezier closest point");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

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
        this.items.point.copyFrom(e2.target.isValid() ? e2.target.getClosestPointFromPoint(e1.target)[0] : null);
        this.items.lineSegment.copyFrom(new LineSegment(e1.target, this.items.point));
    });

    card.setDescription(
        "code",
        `
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
    this.items.point.copyFrom(e2.target.isValid() ? e2.target.getClosestPointFromPoint(e1.target) : null);
    this.items.lineSegment.copyFrom(new LineSegment(e1.target, this.items.point));
});
    `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const closestPointFolder = pane.addFolder({ title: "Closest point" });
    closestPointFolder.addMonitor(closestPointLineSegment.items.point, "x");
    closestPointFolder.addMonitor(closestPointLineSegment.items.point, "y");
    // #endregion

    const controlLineSegment1 = new LineSegment().bind([point1, "any"], [controlPoint1, "any"], twoPointsLineSegment);
    const controlLineSegment2 = new LineSegment().bind([controlPoint1, "any"], [controlPoint2, "any"], twoPointsLineSegment);
    const controlLineSegment3 = new LineSegment().bind([controlPoint2, "any"], [point2, "any"], twoPointsLineSegment);

    view.add(new ViewElement(point1, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlPoint1, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlPoint2, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlLineSegment1, { type: ViewElementType.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(controlLineSegment2, { type: ViewElementType.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(controlLineSegment3, { type: ViewElementType.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(point, { ...lightStrokeFill("pink") }));
    view.add(new ViewElement(closestPointLineSegment.items.point, { type: ViewElementType.None, ...lightStrokeOnly("pink") }));
    view.add(new ViewElement(closestPointLineSegment.items.lineSegment, { type: ViewElementType.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(bezier, { type: ViewElementType.None, ...strokeOnly("brown") }));
}
