import { Bezier, Circle, Dynamic, LineSegment, Point, Vector } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, SubView, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { codeHtml, dashedThinStroke, lightStrokeFill, lightStrokeOnly, strokeOnly, thinStrokeOnly } from "../../assets/scripts/common";
import { twoPointsLineSegment } from "../../assets/scripts/general-construction";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Bezier tangent, normal vector and curvature");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const point1 = new Point([-25, 0]);
    const point2 = new Point([10, 10]);
    const controlPoint1 = new Point([-10, 5]);
    const controlPoint2 = new Point([10, -20]);
    const bezier = new Bezier().bind([point1, "any"], [point2, "any"], [controlPoint1, "any"], [controlPoint2, "any"], function (e1, e2, e3, e4) {
        this.copyFrom(new Bezier(e1.target, e2.target, e3.target, e4.target));
    });

    const steps = 100;
    const deltaTime = 1 / steps;
    const times = Utility.range(0, 100 + 1).map(n => deltaTime * n);

    const stepParams = new (new Dynamic().create({
        step: 0
    }))();

    const tangentNormalSubView = new SubView();

    bezier.on("any", function () {
        if (!bezier.isValid()) return (tangentNormalSubView.elements = []);
        const tvs: Vector[] = [];
        const nvs: Vector[] = [];
        for (const t of times) {
            tvs.push(this.getTangentVectorAtTime(t));
            nvs.push(this.getNormalVectorAtTime(t).scalarMultiply(this.getCurvatureAtTime(t) * 10));
        }
        tangentNormalSubView.elements = [
            ...tvs.map(v => new ViewElement(v, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("red") })),
            ...nvs.map(v => new ViewElement(v, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("blue") }))
        ];
    });

    const osculatingCircle = new Circle().bind([bezier, "any"], [stepParams, "step"], function (e1, e2) {
        this.copyFrom(e1.target.isValid() ? e1.target.getOsculatingCircleAtTime(deltaTime * e2.target.step) : null);
    });

    card.setDescription(
        "code",
        `
const point1 = new Point([-25, 0]);
const point2 = new Point([10, 10]);
const controlPoint1 = new Point([-10, 5]);
const controlPoint2 = new Point([10, -20]);
const bezier = new Bezier().bind([point1, "any"], [point2, "any"], [controlPoint1, "any"], [controlPoint2, "any"], function (e1, e2, e3, e4) {
    this.copyFrom(new Bezier(e1.target, e2.target, e3.target, e4.target));
});

const steps = 100;
const deltaTime = 1 / steps;
const times = Utility.range(0, 100 + 1).map(n => deltaTime * n);

const stepParams = new (new Dynamic().create({
    step: 0
}))();

const tangentNormalSubView = new SubView();

bezier.on("any", function () {
    if (!bezier.isValid()) return (tangentNormalSubView.elements = []);
    const tvs: Vector[] = [];
    const nvs: Vector[] = [];
    for (const t of times) {
        tvs.push(this.getTangentVectorAtTime(t));
        nvs.push(this.getNormalVectorAtTime(t).scalarMultiply(this.getCurvatureAtTime(t) * 10));
    }
    tangentNormalSubView.elements = [
        ...tvs.map(v => new ViewElement(v, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("red") })),
        ...nvs.map(v => new ViewElement(v, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("blue") }))
    ];
});

const osculatingCircle = new Circle().bind([bezier, "any"], [stepParams, "step"], function (e1, e2) {
    this.copyFrom(e1.target.isValid() ? e1.target.getOsculatingCircleAtTime(deltaTime * e2.target.step) : null);
});
        `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const stepFolder = pane.addFolder({ title: "Osculating circle step" });
    stepFolder.addInput(stepParams, "step", { step: 1, min: 0, max: steps });
    // #endregion

    const controlLineSegment1 = new LineSegment().bind([point1, "any"], [controlPoint1, "any"], twoPointsLineSegment);
    const controlLineSegment2 = new LineSegment().bind([controlPoint1, "any"], [controlPoint2, "any"], twoPointsLineSegment);
    const controlLineSegment3 = new LineSegment().bind([controlPoint2, "any"], [point2, "any"], twoPointsLineSegment);

    view.addSubView(tangentNormalSubView);
    view.add(new ViewElement(point1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlPoint1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlPoint2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlLineSegment1, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(controlLineSegment2, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(controlLineSegment3, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(bezier, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
    view.add(new ViewElement(osculatingCircle, { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("orange") }));
}
