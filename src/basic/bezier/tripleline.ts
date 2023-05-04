import { Bezier, LineSegment, Point, Text } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { dashedThinStroke, fillOnly, lightStrokeFill, normalFont, strokeOnly } from "../../assets/scripts/common";
import { twoPointsLineSegment } from "../../assets/scripts/general-construction";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Bezier triple line");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const point1 = new Point([-10, 0]);
    const point2 = new Point([0, 10]);
    const controlPoint1 = new Point([-20, -10]);
    const controlPoint2 = new Point([10, 20]);
    const bezier = new Bezier().bind([point1, "any"], [point2, "any"], [controlPoint1, "any"], [controlPoint2, "any"], function (e1, e2, e3, e4) {
        this.copyFrom(new Bezier(e1.target, e2.target, e3.target, e4.target));
    });

    const label = new Text(0, 0, 10, 10, "", normalFont).bind([bezier, "any"], function (e) {
        if (e.target.isValid()) {
            this.content = e.target.isTripleLine() ? "Triple line? yes." : "Triple line? no.";
            this.point = e.target.getPointAtTime(0.5);
        } else {
            this.content = "";
        }
    });

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
    view.add(new ViewElement(label, { type: ViewElementType.None, ...fillOnly("brown") }));
    view.add(new ViewElement(bezier, { type: ViewElementType.None, ...strokeOnly("brown") }));
}
