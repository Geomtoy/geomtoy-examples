import { Circle, GeometryArray, Point } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Common tangent circles of two circles through a point");

{
    const card = tpl.addCard({ aspectRatio: "1.5:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const center1 = new Point([-20, 20]);
    const radiusControlPoint1 = new Point([0, 0]);
    const center2 = new Point([10, 20]);
    const radiusControlPoint2 = new Point([10, 5]);
    const point = new Point([0, 50]);

    const circle1 = new Circle().bind([center1, "any"], [radiusControlPoint1, "any"], function (e1, e2) {
        this.copyFrom(Circle.fromTwoPoints(e1.target, e2.target));
    });
    const circle2 = new Circle().bind([center2, "any"], [radiusControlPoint2, "any"], function (e1, e2) {
        this.copyFrom(Circle.fromTwoPoints(e1.target, e2.target));
    });

    const geometryArray = new GeometryArray().bind([circle1, "any"], [circle2, "any"], [point, "any"], function (e1, e2, e3) {
        this.items = Circle.getCommonTangentCirclesOfTwoCirclesThroughPoint(e1.target, e2.target, e3.target);
    });

    card.setDescription(
        "code",
        ` 
    const center1 = new Point([-20, 20]);
    const radiusControlPoint1 = new Point([0, 0]);
    const center2 = new Point([10, 20]);
    const radiusControlPoint2 = new Point([10, 5]);
    const point = new Point([0, 50]);

    const circle1 = new Circle().bind([center1, "any"], [radiusControlPoint1, "any"], function (e1, e2) {
        this.copyFrom(Circle.fromTwoPoints(e1.target, e2.target));
    });
    const circle2 = new Circle().bind([center2, "any"], [radiusControlPoint2, "any"], function (e1, e2) {
        this.copyFrom(Circle.fromTwoPoints(e1.target, e2.target));
    });

    const geometryArray = new GeometryArray().bind([circle1, "any"], [circle2, "any"], [point, "any"], function (e1, e2, e3) {
        this.items = Circle.getCommonTangentCirclesOfTwoCirclesThroughPoint(e1.target, e2.target, e3.target);
    });
    `
    );

    view.add(new ViewElement(center1, { ...lightStrokeFill("red") }));
    view.add(new ViewElement(radiusControlPoint1, { ...lightStrokeFill("red") }));
    view.add(new ViewElement(center2, { ...lightStrokeFill("blue") }));
    view.add(new ViewElement(radiusControlPoint2, { ...lightStrokeFill("blue") }));
    view.add(new ViewElement(point, { ...lightStrokeFill("teal") }));

    view.add(new ViewElement(circle1, { type: ViewElementType.None, ...strokeOnly("red") }));
    view.add(new ViewElement(circle2, { type: ViewElementType.None, ...strokeOnly("blue") }));
    view.add(new ViewElement(geometryArray, { type: ViewElementType.None, ...lightStrokeOnly("orange") }));
}
