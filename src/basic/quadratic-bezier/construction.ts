import { Bezier, Dynamic, EventObject, LineSegment, Point, QuadraticBezier, SealedShapeObject, ShapeArray } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { codeHtml, dashedThinStroke, lightStrokeFill, strokeFill, strokeOnly, thinStrokeOnly } from "../../assets/common";
import { twoPointsLineSegment } from "../../assets/general-construction";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Quadratic bezier construction");

tpl.addSection(`construction-1: constructor`);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const point1 = new Point([-2, 5]);
    const point2 = new Point([10, 6]);
    const controlPoint = new Point([5, 20]);
    const quadraticBezier = new QuadraticBezier().bind([point1, "any"], [point2, "any"], [controlPoint, "any"], function (e1, e2, e3) {
        this.copyFrom(new QuadraticBezier(e1.target, e2.target, e3.target));
    });

    card.setDescription(
        codeHtml(`
const point1 = new Point([-2, 5]);
const point2 = new Point([10, 6]);
const controlPoint = new Point([5, 20]);
const quadraticBezier = new QuadraticBezier().bind([point1, "any"], [point2, "any"], [controlPoint, "any"], function (e1, e2, e3) {
    this.copyFrom(new QuadraticBezier(e1.target, e2.target, e3.target));
});
    `)
    );

    const controlLineSegment1 = new LineSegment().bind([point1, "any"], [controlPoint, "any"], twoPointsLineSegment);
    const controlLineSegment2 = new LineSegment().bind([controlPoint, "any"], [point2, "any"], twoPointsLineSegment);

    view.add(new ViewElement(point1, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") }));
    view.add(new ViewElement(point2, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") }));
    view.add(new ViewElement(controlPoint, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") }));
    view.add(new ViewElement(controlLineSegment1, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(controlLineSegment2, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(quadraticBezier, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}

tpl.addSection(`construction-2: fromThreePointsAndTime`);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const point1 = new Point(-8, -8);
    const point2 = new Point(-6, 3);
    const point3 = new Point(10, 10);

    const time = new (new Dynamic().create({
        time: 1 / 2
    }))();

    const quadraticBezier = new QuadraticBezier().bind([point1, "any"], [point2, "any"], [point3, "any"], [time, "any"], function (e1, e2, e3, e4) {
        const { time } = e4.target;
        this.copyFrom(QuadraticBezier.fromThreePointsAndTime(e1.target, e2.target, e3.target, time));
    });

    card.setDescription(
        codeHtml(`
const point1 = new Point(-8, -8);
const point2 = new Point(-6, 3);
const point3 = new Point(10, 10);

const time = new (new Dynamic().create({
    time: 1 / 2
}))();

const quadraticBezier = new QuadraticBezier().bind([point1, "any"], [point2, "any"], [point3, "any"], [time, "any"], function (e1, e2, e3, e4) {
    const { time } = e4.target;
    this.copyFrom(QuadraticBezier.fromThreePointsAndTime(e1.target, e2.target, e3.target, time));
});
    `)
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Construction-2", container: card.pane });
    const p1Input = pane.addInput({ point1 }, "point1", { y: { inverted: true } });
    const p2Input = pane.addInput({ point2 }, "point2", { y: { inverted: true } });
    const p3Input = pane.addInput({ point3 }, "point3", { y: { inverted: true } });
    point1.on("any", () => p1Input.refresh());
    point2.on("any", () => p2Input.refresh());
    point3.on("any", () => p3Input.refresh());
    pane.addInput(time, "time", { min: 0, max: 1 });
    // #endregion

    const bindingShapeObject = new SealedShapeObject({
        controlPoint: new Point("cross"),
        controlLineSegments: new ShapeArray()
    }).bind([quadraticBezier, "any"], function (e) {
        if (e.target.isValid()) {
            const p1 = e.target.point1;
            const p2 = e.target.point2;
            const cp = e.target.controlPoint;
            this.items.controlPoint.copyFrom(cp);
            this.items.controlLineSegments.items = [new LineSegment(p1, cp), new LineSegment(cp, p2)];
        } else {
            this.items.controlPoint.copyFrom(null);
            this.items.controlLineSegments.items = [];
        }
    });

    view.add(new ViewElement(point1, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") }));
    view.add(new ViewElement(point2, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") }));
    view.add(new ViewElement(point3, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") }));
    view.add(new ViewElement(bindingShapeObject.items.controlPoint, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("gray") }));
    view.add(new ViewElement(bindingShapeObject.items.controlLineSegments, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(quadraticBezier, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}
