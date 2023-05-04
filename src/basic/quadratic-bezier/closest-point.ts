import { LineSegment, Point, QuadraticBezier, SealedShapeObject } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { codeHtml, dashedThinStroke, lightStrokeOnly, strokeFill, strokeOnly } from "../../assets/scripts/common";
import { twoPointsLineSegment } from "../../assets/scripts/general-construction";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Quadratic bezier closest point");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const point1 = new Point([-20, 0]);
    const point2 = new Point([20, -10]);
    const controlPoint = new Point([20, 30]);
    const quadraticBezier = new QuadraticBezier().bind([point1, "any"], [point2, "any"], [controlPoint, "any"], function (e1, e2, e3) {
        this.copyFrom(new QuadraticBezier(e1.target, e2.target, e3.target));
    });

    const point = new Point([10, 0]);

    const closestPointLineSegment = new SealedShapeObject({
        point: new Point("cross"),
        lineSegment: new LineSegment()
    }).bind([point, "any"], [quadraticBezier, "any"], function (e1, e2) {
        this.items.point.copyFrom(e2.target.isValid() ? e2.target.getClosestPointFromPoint(e1.target)[0] : null);
        this.items.lineSegment.copyFrom(new LineSegment(e1.target, this.items.point));
    });

    card.setDescription(
        "code",
        `
const point1 = new Point([-20, 0]);
const point2 = new Point([20, -10]);
const controlPoint = new Point([20, 30]);
const quadraticBezier = new QuadraticBezier().bind([point1, "any"], [point2, "any"], [controlPoint, "any"], function (e1, e2, e3) {
    this.copyFrom(new QuadraticBezier(e1.target, e2.target, e3.target));
});

const point = new Point([10, 0]);

const closestPointLineSegment = new SealedShapeObject({
    point: new Point("plus"),
    lineSegment: new LineSegment()
}).bind([point, "any"], [quadraticBezier, "any"], function (e1, e2) {
    this.items.point.copyFrom(e2.target.isValid() ? e2.target.getClosestPointFromPoint(e1.target) : null);
    this.items.lineSegment.copyFrom(new LineSegment(e1.target, this.items.point));
});
    `
    );

    const controlLineSegment1 = new LineSegment().bind([point1, "any"], [controlPoint, "any"], twoPointsLineSegment);
    const controlLineSegment2 = new LineSegment().bind([controlPoint, "any"], [point2, "any"], twoPointsLineSegment);

    view.add(new ViewElement(point1, { ...strokeFill("brown") }));
    view.add(new ViewElement(point2, { ...strokeFill("brown") }));
    view.add(new ViewElement(controlPoint, { ...strokeFill("brown") }));
    view.add(new ViewElement(controlLineSegment1, { type: ViewElementType.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(controlLineSegment2, { type: ViewElementType.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(point, { ...strokeFill("pink") }));
    view.add(new ViewElement(closestPointLineSegment.items.point, { type: ViewElementType.None, ...lightStrokeOnly("pink") }));
    view.add(new ViewElement(closestPointLineSegment.items.lineSegment, { type: ViewElementType.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(quadraticBezier, { type: ViewElementType.None, ...strokeOnly("brown") }));
}
