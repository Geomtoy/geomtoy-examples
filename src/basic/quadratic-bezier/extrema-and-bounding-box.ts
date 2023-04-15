import { Bezier, EventObject, GeometryArray, LineSegment, Point, QuadraticBezier, Rectangle, ShapeArray } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, strokeOnly, thinStrokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Quadratic bezier extrema and bounding box");

{
    const card = tpl.addCard({ className: "col-12", aspectRatio: "2:1", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const point1 = new Point([-20, 6]);
    const point2 = new Point([0, 15]);
    const controlPoint = new Point([10, 20]);
    const quadraticBezier = new QuadraticBezier().bind([point1, "any"], [point2, "any"], [controlPoint, "any"], function (e1, e2, e3) {
        this.copyFrom(new QuadraticBezier(e1.target, e2.target, e3.target));
    });

    const extremePoints = new GeometryArray().bind([quadraticBezier, "any"], function (e) {
        this.items = e.target.isValid() ? e.target.extrema().map(t => new Point(e.target.getParametricEquation()(t), "cross")) : [];
    });

    const boundingBoxRectangle = new Rectangle().bind([quadraticBezier, "any"], function (e) {
        this.copyFrom(new Rectangle(...e.target.getBoundingBox()));
    });

    card.setDescription(
        "code",
        ` 
const point1 = new Point([-20, 6]);
const point2 = new Point([0, 15]);
const controlPoint = new Point([10, 20]);
const quadraticBezier = new QuadraticBezier().bind([point1, "any"], [point2, "any"], [controlPoint, "any"], function (e1, e2, e3) {
    this.copyFrom(new QuadraticBezier(e1.target, e2.target, e3.target));
});

const extremePoints = new GeometryArray().bind([quadraticBezier, "any"], function (e) {
    this.items = e.target.isValid() ? e.target.extrema().map(t => new Point(e.target.getParametricEquation()(t), "cross")) : [];
});

const boundingBoxRectangle = new Rectangle().bind([quadraticBezier, "any"], function (e) {
    this.copyFrom(new Rectangle(...e.target.getBoundingBox()));
});
    `
    );

    const twoPointLineSegmentFn = function (this: LineSegment, e1: EventObject<Point>, e2: EventObject<Point>) {
        this.copyFrom(new LineSegment(e1.target, e2.target));
    };

    const controlLineSegment1 = new LineSegment().bind([point1, "any"], [controlPoint, "any"], twoPointLineSegmentFn);
    const controlLineSegment2 = new LineSegment().bind([controlPoint, "any"], [point2, "any"], twoPointLineSegmentFn);

    view.add(new ViewElement(point1, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlPoint, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlLineSegment1, { type: ViewElementType.None, ...thinStrokeOnly("gray") }));
    view.add(new ViewElement(controlLineSegment2, { type: ViewElementType.None, ...thinStrokeOnly("gray") }));
    view.add(new ViewElement(quadraticBezier, { type: ViewElementType.None, ...strokeOnly("brown") }));
    view.add(new ViewElement(extremePoints, { type: ViewElementType.None, ...strokeOnly("green") }));
    view.add(new ViewElement(boundingBoxRectangle, { type: ViewElementType.None, ...strokeOnly("cyan") }));
}
