import { Bezier, Dynamic, LineSegment, Point, ShapeArray } from "@geomtoy/core";
import { Maths, Utility } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Line segment construction");

tpl.addSection(`constructor`);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();
    const point1 = new Point([-20, 40]);
    const point2 = new Point([10, 20]);

    const lineSegment = new LineSegment().bind([point1, "any"], [point2, "any"], function (e1, e2) {
        this.copyFrom(new LineSegment(e1.target, e2.target));
    });
    card.setDescription(
        "code",
        `
    const point1 = new Point([-20, 40]);
    const point2 = new Point([10, 20]);

    const lineSegment = new LineSegment().bind([point1, "any"], [point2, "any"], function (e1, e2) {
        this.copyFrom(new LineSegment(e1.target, e2.target));
    });
    `
    );

    view.add(new ViewElement(point1, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(lineSegment, { type: ViewElementType.None, ...strokeOnly("brown") }));
}

tpl.addSection(`fromPointAndAngleAndLength`);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const point = new Point(-80, -80);
    const restParams = new (new Dynamic().create({
        angle: 0,
        length: 100
    }))();
    const lineSegment = new LineSegment().bind([point, "any"], [restParams, "any"], function (e1, e2) {
        const { angle, length } = e2.target;
        const ls = LineSegment.fromPointAndAngleAndLength(e1.target, angle, length);
        if (ls !== null) this.copyFrom(ls);
    });

    card.setDescription(
        "code",
        `
    const point = new Point(-80, -80);
    const restParams = new (new Dynamic().create({
        angle: 0,
        length: 100
    }))();
    const lineSegment = new LineSegment().bind([point, "any"], [restParams, "any"], function (e1, e2) {
        const { angle, length } = e2.target;
        const ls = LineSegment.fromPointAndAngleAndLength(e1.target, angle, length);
        if (ls !== null) this.copyFrom(ls);
    });
    `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Construction-2", container: card.pane });
    const inputPoint = pane.addInput({ point }, "point", { y: { inverted: true } });
    point.on("any", () => inputPoint.refresh());

    pane.addInput(restParams, "angle", { min: 0, max: Maths.PI * 2 });
    pane.addInput(restParams, "length", { min: 0 });
    // #endregion

    view.add(new ViewElement(point, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(lineSegment, { type: ViewElementType.None, ...strokeOnly("brown") }));
}
