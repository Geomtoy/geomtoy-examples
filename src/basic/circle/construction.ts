import { Circle, Dynamic, Point, SealedGeometryArray } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill, strokeFill, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Circle construction");

tpl.addSection("constructor", true);

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const restParams = new (new Dynamic().create({ radius: 10 }))();

    const center = new Point(10, 0);
    const circle = new Circle().bind([center, "any"], [restParams, "any"], function (e1, e2) {
        this.copyFrom(new Circle(e1.target, e2.target.radius));
    });

    card.setDescription(
        "code",
        ` 
const restParams = new (new Dynamic().create({ radius: 10 }))();

const center = new Point(10, 0);
const circle = new Circle().bind([center, "any"], [restParams, "any"], function (e1, e2) {
    this.copyFrom(new Circle(e1.target, e2.target.radius));
});
    `
    );
    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const circleFolder = pane.addFolder({ title: "Circle" });
    circleFolder.addInput(restParams, "radius", { min: 0 });
    // #endregion

    view.add(new ViewElement(center, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(circle, { type: ViewElementType.None, ...strokeOnly("brown") }));
}

tpl.addSection("fromTwoPoints", true);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();
    const center = new Point(0, 0);
    const radiusControlPoint = new Point(3, 5);

    const circle = new Circle().bind([center, "any"], [radiusControlPoint, "any"], function (e1, e2) {
        this.copyFrom(Circle.fromTwoPoints(e1.target, e2.target));
    });

    card.setDescription(
        "code",
        ` 
const center = new Point(0, 0);
const radiusControlPoint = new Point(3, 5);

const circle = new Circle().bind([center, "any"], [radiusControlPoint, "any"], function (e1, e2) {
    this.copyFrom(Circle.fromTwoPoints(e1.target, e2.target));
});
    `
    );

    view.add(new ViewElement(circle, { type: ViewElementType.None, ...strokeOnly("brown") }));
    view.add(new ViewElement(center, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(radiusControlPoint, { ...lightStrokeFill("brown") }));
}

tpl.addSection("fromTwoPointsAndRadius", true);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();
    const point1 = new Point(2, 0);
    const point2 = new Point(3, 5);
    const restParams = new (new Dynamic().create({ radius: 10 }))();

    const circle = new SealedGeometryArray([new Circle(), new Circle()]).bind([point1, "any"], [point2, "any"], [restParams, "any"], function (e1, e2, e3) {
        const [circle1, circle2] = Circle.fromTwoPointsAndRadius(e1.target, e2.target, e3.target.radius);
        this.items[0].copyFrom(circle1);
        this.items[1].copyFrom(circle2);
    });

    card.setDescription(
        "code",
        ` 
const point1 = new Point(2, 0);
const point2 = new Point(3, 5);
const restParams = new (new Dynamic().create({ radius: 10 }))();

const circle = new SealedGeometryArray([new Circle(), new Circle()]).bind([point1, "any"], [point2, "any"], [restParams, "any"], function (e1, e2, e3) {
    const [circle1, circle2] = Circle.fromTwoPointsAndRadius(e1.target, e2.target, e3.target.radius);
    this.items[0].copyFrom(circle1);
    this.items[1].copyFrom(circle2);
});
    `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const circleFolder = pane.addFolder({ title: "Circle" });
    circleFolder.addInput(restParams, "radius", { min: 0 });
    // #endregion

    view.add(new ViewElement(circle, { type: ViewElementType.None, ...strokeOnly("brown") }));
    view.add(new ViewElement(point1, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { ...lightStrokeFill("brown") }));
}

tpl.addSection("fromThreePoints", true);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();
    const point1 = new Point(2, 0);
    const point2 = new Point(3, 5);
    const point3 = new Point(6, -10);

    const circle = new Circle().bind([point1, "any"], [point2, "any"], [point3, "any"], function (e1, e2, e3) {
        this.copyFrom(Circle.fromThreePoints(e1.target, e2.target, e3.target));
    });

    card.setDescription(
        "code",
        ` 
const point1 = new Point(20, 0);
const point2 = new Point(3, 5);
const point3 = new Point(6, -10);

const circle = new Circle().bind([point1, "any"], [point2, "any"], [point3, "any"], function (e1, e2, e3) {
    this.copyFrom(Circle.fromThreePoints(e1.target, e2.target, e3.target));
});
    `
    );

    view.add(new ViewElement(circle, { type: ViewElementType.None, ...strokeOnly("brown") }));
    view.add(new ViewElement(point1, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point3, { ...lightStrokeFill("brown") }));
}
