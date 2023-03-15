import { Bezier, LineSegment, Point, QuadraticBezier, Rectangle, ShapeArray } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { codeHtml, dashedThinStroke, lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/common";
import { twoPointsLineSegment } from "../../assets/general-construction";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Bezier extrema and bounding box");

{
    const card = tpl.addCard({ className: "col-12", aspectRatio: "2:1" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const point1 = new Point([-20, 6]);
    const point2 = new Point([0, 15]);
    const controlPoint1 = new Point([20, 2]);
    const controlPoint2 = new Point([10, 20]);
    const bezier = new Bezier().bind([point1, "any"], [point2, "any"], [controlPoint1, "any"], [controlPoint2, "any"], function (e1, e2, e3, e4) {
        this.copyFrom(new Bezier(e1.target, e2.target, e3.target, e4.target));
    });

    const extremePoints = new ShapeArray().bind([bezier, "any"], function (e) {
        this.items = e.target.isValid() ? e.target.extrema().map(([p]) => ((p.appearance = "cross"), p)) : [];
    });
    const boundingBoxRectangle = new Rectangle().bind([bezier, "any"], function (e) {
        const dg = e.target.degenerate(false);
        if (dg instanceof LineSegment) return this.copyFrom(new Rectangle(...dg.getBoundingBox()));
        if (dg instanceof QuadraticBezier) return this.copyFrom(new Rectangle(...dg.getBoundingBox()));
        if (dg instanceof Bezier) return this.copyFrom(new Rectangle(...e.target.getBoundingBox()));
        this.copyFrom(null);
    });

    card.setDescription(
        codeHtml(` 
const point1 = new Point([-20, 6]);
const point2 = new Point([0, 15]);
const controlPoint1 = new Point([20, 2]);
const controlPoint2 = new Point([10, 20]);
const bezier = new Bezier().bind([point1, "any"], [point2, "any"], [controlPoint1, "any"], [controlPoint2, "any"], function (e1, e2, e3, e4) {
    this.copyFrom(new Bezier(e1.target, e2.target, e3.target, e4.target));
});

const extremePoints = new ShapeArray().bind([bezier, "any"], function (e) {
    this.items = e.target.isValid() ? e.target.extrema().map(([p]) => ((p.appearance = "cross"), p)) : [];
});
const boundingBoxRectangle = new Rectangle().bind([bezier, "any"], function (e) {
    const dg = e.target.degenerate(false);
    if (dg instanceof LineSegment) return this.copyFrom(new Rectangle(...dg.getBoundingBox()));
    if (dg instanceof QuadraticBezier) return this.copyFrom(new Rectangle(...dg.getBoundingBox()));
    if (dg instanceof Bezier) return this.copyFrom(new Rectangle(...e.target.getBoundingBox()));
    this.copyFrom(null);
});
    `)
    );
    const controlLineSegment1 = new LineSegment().bind([point1, "any"], [controlPoint1, "any"], twoPointsLineSegment);
    const controlLineSegment2 = new LineSegment().bind([controlPoint1, "any"], [controlPoint2, "any"], twoPointsLineSegment);
    const controlLineSegment3 = new LineSegment().bind([controlPoint2, "any"], [point2, "any"], twoPointsLineSegment);

    view.add(new ViewElement(point1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlPoint1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlPoint2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(extremePoints, { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("green") }));
    view.add(new ViewElement(boundingBoxRectangle, { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("purple") }));
    view.add(new ViewElement(controlLineSegment1, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(controlLineSegment2, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(controlLineSegment3, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(bezier, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}
