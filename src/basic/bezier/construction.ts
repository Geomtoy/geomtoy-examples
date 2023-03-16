import { Bezier, Dynamic, LineSegment, Point, SealedShapeObject, GeometryArray } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { dashedThinStroke, lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/scripts/common";
import { twoPointsLineSegment } from "../../assets/scripts/general-construction";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Bezier construction");

tpl.addSection("constructor", true);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const point1 = new Point([-20, 20]);
    const point2 = new Point([10, 20]);
    const controlPoint1 = new Point([10, -10]);
    const controlPoint2 = new Point([40, 20]);
    const bezier = new Bezier().bind([point1, "any"], [point2, "any"], [controlPoint1, "any"], [controlPoint2, "any"], function (e1, e2, e3, e4) {
        this.copyFrom(new Bezier(e1.target, e2.target, e3.target, e4.target));
    });

    card.setDescription(
        "code",
        `
const point1 = new Point([-20, 20]);
const point2 = new Point([10, 20]);
const controlPoint1 = new Point([10, -10]);
const controlPoint2 = new Point([40, 20]);
const bezier = new Bezier().bind([point1, "any"], [point2, "any"], [controlPoint1, "any"], [controlPoint2, "any"], function (e1, e2, e3, e4) {
    this.copyFrom(new Bezier(e1.target, e2.target, e3.target, e4.target));
});
    `
    );

    const controlLineSegment1 = new LineSegment().bind([point1, "any"], [controlPoint1, "any"], twoPointsLineSegment);
    const controlLineSegment2 = new LineSegment().bind([controlPoint1, "any"], [controlPoint2, "any"], twoPointsLineSegment);
    const controlLineSegment3 = new LineSegment().bind([controlPoint2, "any"], [point2, "any"], twoPointsLineSegment);

    view.add(new ViewElement(point1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlPoint1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlPoint2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlLineSegment1, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(controlLineSegment2, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(controlLineSegment3, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(bezier, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}

tpl.addSection("fromFourPointsAndTimes", true);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const point1 = new Point(-80, -80);
    const point2 = new Point(-60, 30);
    const point3 = new Point(10, 10);
    const point4 = new Point(50, 60);
    const times = new (new Dynamic().create({
        time1: 1 / 3,
        time2: 2 / 3
    }))();

    const bezier = new Bezier().bind([point1, "any"], [point2, "any"], [point3, "any"], [point4, "any"], [times, "any"], function (e1, e2, e3, e4, e5) {
        const { time1, time2 } = e5.target;
        this.copyFrom(Bezier.fromFourPointsAndTimes(e1.target, e2.target, e3.target, e4.target, [time1, time2]));
    });

    card.setDescription(
        "code",
        `
const point1 = new Point(-80, -80);
const point2 = new Point(-60, 30);
const point3 = new Point(10, 10);
const point4 = new Point(50, 60);
const times = new (new Dynamic().create({
    time1: 1 / 3,
    time2: 2 / 3
}))();

const bezier = new Bezier().bind([point1, "any"], [point2, "any"], [point3, "any"], [point4, "any"], [times, "any"], function (e1, e2, e3, e4, e5) {
    const { time1, time2 } = e5.target;
    this.copyFrom(Bezier.fromFourPointsAndTimes(e1.target, e2.target, e3.target, e4.target, [time1, time2]));
});
    `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const timesFolder = pane.addFolder({ title: "Times" });
    timesFolder.addInput(times, "time1", { min: 0, max: 1 });
    timesFolder.addInput(times, "time2", { min: 0, max: 1 });

    // #endregion
    const bindingShapeObject = new SealedShapeObject({
        controlPoints: new GeometryArray(),
        controlLineSegments: new GeometryArray()
    }).bind([bezier, "any"], function (e) {
        if (e.target.isValid()) {
            const p1 = e.target.point1;
            const p2 = e.target.point2;
            const cp1 = e.target.controlPoint1;
            const cp2 = e.target.controlPoint2;
            cp1.appearance = "cross";
            cp2.appearance = "cross";
            this.items.controlPoints.items = [cp1, cp2];
            this.items.controlLineSegments.items = [new LineSegment(p1, cp1), new LineSegment(cp1, cp2), new LineSegment(cp2, p2)];
        } else {
            this.items.controlPoints.items = [];
            this.items.controlLineSegments.items = [];
        }
    });

    view.add(new ViewElement(point1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point3, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point4, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(bindingShapeObject.items.controlPoints, { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("gray") }));
    view.add(new ViewElement(bindingShapeObject.items.controlLineSegments, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(bezier, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}
