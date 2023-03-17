import { Circle, GeometryArray, Line, Point, SealedGeometryArray } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Common tangent circles of two circles through a point");

{
    const card = tpl.addCard({ aspectRatio: "1.5:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const centerPoint = new Point([0, 0]);
    const radiusControlPoint = new Point([5, 0]);
    const point = new Point([0, 10]);

    const circle = new Circle().bind([centerPoint, "any"], [radiusControlPoint, "any"], function (e1, e2) {
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
const centerPoint = new Point([0, 0]);
const radiusControlPoint = new Point([5, 0]);
const point = new Point([0, 10]);

const circle = new Circle().bind([centerPoint, "any"], [radiusControlPoint, "any"], function (e1, e2) {
    this.copyFrom(Circle.fromTwoPoints(e1.target, e2.target));
});
const twoLines = new SealedGeometryArray([new Line(), new Line()]).bind([circle, "any"], [point, "any"], function (e1, e2) {
    const lines = e1.target.getTangentLinesFromPoint(e2.target);
    this.items[0].copyFrom(lines[0]?.[0] ?? null);
    this.items[1].copyFrom(lines[1]?.[0] ?? null);
});
    `
    );

    view.add(new ViewElement(centerPoint, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(radiusControlPoint, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(twoLines, { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("teal") }));
    view.add(new ViewElement(point, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("teal") }));
    view.add(new ViewElement(circle, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}
