import { Circle, Point, GeometryArray } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Common tangent lines of two circles");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    const centerPoint1 = new Point([-20, 40]);
    const radiusControlPoint1 = new Point([0, 0]);
    const centerPoint2 = new Point([10, 20]);
    const radiusControlPoint2 = new Point([10, 5]);

    const circle1 = new Circle().bind([centerPoint1, "any"], [radiusControlPoint1, "any"], function (e1, e2) {
        this.copyFrom(Circle.fromTwoPoints(e1.target, e2.target));
    });
    const circle2 = new Circle().bind([centerPoint2, "any"], [radiusControlPoint2, "any"], function (e1, e2) {
        this.copyFrom(Circle.fromTwoPoints(e1.target, e2.target));
    });

    const geometryArray = new GeometryArray().bind([circle1, "any"], [circle2, "any"], function (e1, e2) {
        const result = Circle.getCommonTangentLinesOfTwoCircles(e1.target, e2.target);
        this.items = result.map(data => data[0]);
    });

    card.setDescription(
        "code",
        ` 
    const centerPoint1 = new Point([-20, 40]);
    const radiusControlPoint1 = new Point([0, 0]);
    const centerPoint2 = new Point([10, 20]);
    const radiusControlPoint2 = new Point([10, 5]);

    const circle1 = new Circle().bind([centerPoint1, "any"], [radiusControlPoint1, "any"], function (e1, e2) {
        this.copyFrom(Circle.fromTwoPoints(e1.target, e2.target));
    });
    const circle2 = new Circle().bind([centerPoint2, "any"], [radiusControlPoint2, "any"], function (e1, e2) {
        this.copyFrom(Circle.fromTwoPoints(e1.target, e2.target));
    });

    const geometryArray = new GeometryArray().bind([circle1, "any"], [circle2, "any"], function (e1, e2) {
        const result = Circle.getCommonTangentLinesOfTwoCircles(e1.target, e2.target);
        this.items = result.map(data => data[0]);
    });
    `
    );

    view.add(new ViewElement(centerPoint1, { ...lightStrokeFill("red") }));
    view.add(new ViewElement(radiusControlPoint1, { ...lightStrokeFill("red") }));
    view.add(new ViewElement(centerPoint2, { ...lightStrokeFill("blue") }));
    view.add(new ViewElement(radiusControlPoint2, { ...lightStrokeFill("blue") }));
    view.add(new ViewElement(circle1, { type: ViewElementType.None, ...strokeOnly("red") }));
    view.add(new ViewElement(circle2, { type: ViewElementType.None, ...strokeOnly("blue") }));
    view.add(new ViewElement(geometryArray, { type: ViewElementType.None, ...lightStrokeOnly("orange") }));
}
