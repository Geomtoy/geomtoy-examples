import { Bezier, Dynamic, Ellipse, LineSegment, Point, ShapeArray } from "@geomtoy/core";
import { Maths, Utility } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewGroupElement } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, stroke, thinStroke } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Ellipse point and angle");

tpl.addSection(`Get point at angle`);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();
    const ellipse = new Ellipse(0, 0, 40, 10, 0);
    const angle = Maths.PI / 4;
    const point = ellipse.getPointAtAngle(angle);

    view.add(new ViewElement(ellipse, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point, { ...lightStrokeFill("brown") }));
}

tpl.addSection(`Get angle of point`);
{
    // const card = tpl.addCard({   aspectRatio: "2:1", className: "col-12", withPane: true });
    // const view = new View({}, new CanvasRenderer(card.canvas, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    // view.startResponsive(View.centerOrigin);
    // view.startInteractive();
    // const point1 = new Point(-80, -80);
    // const point2 = new Point(-60, 30);
    // const point3 = new Point(10, 10);
    // const point4 = new Point(50, 60);
    // const times = new Dynamic({
    //     time1: 1 / 3,
    //     time2: 2 / 3
    // });
    // const bezier = new Bezier().bind(
    //     [
    //         [point1, "any"],
    //         [point2, "any"],
    //         [point3, "any"],
    //         [point4, "any"],
    //         [times, "any"]
    //     ],
    //     function ([e1, e2, e3, e4, e5]) {
    //         const { time1, time2 } = e5.target;
    //         const b = Bezier.fromFourPointsAndTimes(e1.target, e2.target, e3.target, e4.target, [time1, time2]);
    //         if (b !== null) this.copyFrom(b);
    //     }
    // );
    // card.setDescription(
    //     "code",(`
    // const point1 = new Point(-80, -80);
    // const point2 = new Point(-60, 30);
    // const point3 = new Point(10, 10);
    // const point4 = new Point(50, 60);
    // const times = new Dynamic({
    //     time1: 1 / 3,
    //     time2: 2 / 3
    // });
    // const bezier = new Bezier().bind(
    //     [
    //         [point1, "any"],
    //         [point2, "any"],
    //         [point3, "any"],
    //         [point4, "any"],
    //         [times, "any"]
    //     ],
    //     function ([e1, e2, e3, e4, e5]) {
    //         const { time1, time2 } = e5.target;
    //         const b = Bezier.fromFourPointsAndTimes(e1.target, e2.target, e3.target, e4.target, [time1, time2]);
    //         if (b.isValid()) this.copyFrom(b);
    //     }
    // );
    // `)
    // );
    // // #region Pane
    // // @ts-expect-error
    // const pane = new Tweakpane.Pane({ title: "Construction-2", container: card.pane });
    // const p1Input = pane.addInput({ point1 }, "point1", { y: { inverted: true } });
    // const p2Input = pane.addInput({ point2 }, "point2", { y: { inverted: true } });
    // const p3Input = pane.addInput({ point3 }, "point3", { y: { inverted: true } });
    // const p4Input = pane.addInput({ point4 }, "point4", { y: { inverted: true } });
    // point1.on("any", () => p1Input.refresh());
    // point2.on("any", () => p2Input.refresh());
    // point3.on("any", () => p3Input.refresh());
    // point4.on("any", () => p4Input.refresh());
    // pane.addInput(times, "time1", { min: 0, max: 1   });
    // pane.addInput(times, "time2", { min: 0, max: 1   });
    // // #endregion
    // const shapeArray = new ShapeArray().bind([[bezier, "any"]], function ([e]) {
    //     this.items = [
    //         e.target.point1,
    //         e.target.point2,
    //         e.target.controlPoint1,
    //         e.target.controlPoint2,
    //         new LineSegment(e.target.point1, e.target.controlPoint1),
    //         new LineSegment(e.target.controlPoint1, e.target.controlPoint2),
    //         new LineSegment(e.target.controlPoint2, e.target.point2)
    //     ];
    // });
    // view.add(new ViewElement(point1, { ...lightStrokeFill("brown") }));
    // view.add(new ViewElement(point2, { ...lightStrokeFill("brown") }));
    // view.add(new ViewElement(point3, { ...lightStrokeFill("brown") }));
    // view.add(new ViewElement(point4, { ...lightStrokeFill("brown") }));
    // view.add(new ViewGroupElement(shapeArray.items, { ...thinStroke("gray") }));
    // view.add(new ViewElement(bezier, { type: ViewElementType.None, ...stroke("brown") }));
}
