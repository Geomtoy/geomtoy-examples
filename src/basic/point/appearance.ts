import { Bezier, LineSegment, Point, SealedShapeObject } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { dashedThinStroke, lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/scripts/common";
import { twoPointsLineSegment } from "../../assets/scripts/general-construction";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Point appearance");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const point1 = new Point([-10, -10], "circle");
    const point2 = new Point([-5, -5], "cross");
    const point3 = new Point([0, 0], "diamond");
    const point4 = new Point([5, 5], "plus");
    const point5 = new Point([10, 10], "square");

    card.setDescription(
        "code",
        `
const point1 = new Point([-10, -10], "circle");
const point2 = new Point([-5, -5], "cross");
const point3 = new Point([0, 0], "diamond");
const point4 = new Point([5, 5], "plus");
const point5 = new Point([10, 10], "square");
    `
    );

    view.add(new ViewElement(point1, { type: ViewElementType.None, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { type: ViewElementType.None, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point3, { type: ViewElementType.None, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point4, { type: ViewElementType.None, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point5, { type: ViewElementType.None, ...lightStrokeFill("brown") }));
}
