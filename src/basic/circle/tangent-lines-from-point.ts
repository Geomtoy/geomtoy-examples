import { Circle, GeometryArray, Line, Point, SealedGeometryArray } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Tangent lines of a circle through a point");

{
    const card = tpl.addCard({ aspectRatio: "1.5:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const center = new Point([0, 0]);
    const radiusControlPoint = new Point([5, 0]);
    const point = new Point([0, 10]);

    const circle = new Circle().bind([center, "any"], [radiusControlPoint, "any"], function (e1, e2) {
        this.copyFrom(Circle.fromTwoPoints(e1.target, e2.target));
    });
    const twoLines = new SealedGeometryArray([new Line(), new Line()]).bind([circle, "any"], [point, "any"], function (e1, e2) {
        const lines = e1.target.getTangentLinesFromPoint(e2.target);
        this.items[0].copyFrom(lines[0]?.[0] ?? null);
        this.items[1].copyFrom(lines[1]?.[0] ?? null);
    });

    card.setDescription(
        "code",
        `  
const center = new Point([0, 0]);
const radiusControlPoint = new Point([5, 0]);
const point = new Point([0, 10]);

const circle = new Circle().bind([center, "any"], [radiusControlPoint, "any"], function (e1, e2) {
    this.copyFrom(Circle.fromTwoPoints(e1.target, e2.target));
});
const twoLines = new SealedGeometryArray([new Line(), new Line()]).bind([circle, "any"], [point, "any"], function (e1, e2) {
    const lines = e1.target.getTangentLinesFromPoint(e2.target);
    this.items[0].copyFrom(lines[0]?.[0] ?? null);
    this.items[1].copyFrom(lines[1]?.[0] ?? null);
});
    `
    );

    view.add(new ViewElement(center, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(radiusControlPoint, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(twoLines, { type: ViewElementType.None, ...lightStrokeOnly("teal") }));
    view.add(new ViewElement(point, { ...lightStrokeFill("teal") }));
    view.add(new ViewElement(circle, { type: ViewElementType.None, ...strokeOnly("brown") }));
}
