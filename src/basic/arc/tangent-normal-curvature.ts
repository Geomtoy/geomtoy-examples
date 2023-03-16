import { Arc, Circle, Dynamic, Point, Vector } from "@geomtoy/core";
import { Angle, Maths, Utility } from "@geomtoy/util";
import { CanvasRenderer, SubView, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { lightStrokeFill, lightStrokeOnly, strokeOnly, thinStrokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Arc tangent, normal vector and curvature");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const centerPoint = new Point([0, 0]);
    const dynamic = new Dynamic();
    const restParams = new (dynamic.create({
        radiusX: 40,
        radiusY: 10,
        positive: true,
        startAngle: 0,
        endAngle: (3 * Maths.PI) / 2,
        rotation: Maths.PI / 4
    }))();

    const steps = 100;
    const stepParams = new (dynamic.create({
        angles: [] as number[],
        step: 0
    }))().bind([restParams, "positive|startAngle|endAngle"], function (ev) {
        let { startAngle: s, endAngle: e, positive: p } = ev.target;
        s = Angle.simplify(s);
        e = Angle.simplify(e);
        if (!p) [s, e] = [e, s];
        const deltaAngle = (s > e ? e + Maths.PI * 2 - s : e - s) / steps;
        const angles = Utility.range(0, steps + 1).map(n => s + deltaAngle * n);
        this.angles = p ? angles : angles.reverse();
    });

    const arc = new Arc().bind([centerPoint, "any"], [restParams, "any"], function (e1, e2) {
        const { radiusX, radiusY, positive, rotation, startAngle, endAngle } = e2.target;
        this.copyFrom(Arc.fromCenterPointAndStartEndAnglesEtc(e1.target, radiusX, radiusY, startAngle, endAngle, positive, rotation));
    });

    const tangentNormalSubView = new SubView();

    arc.on("any", function () {
        if (!arc.isValid()) return (tangentNormalSubView.elements = []);
        const tvs: Vector[] = [];
        const nvs: Vector[] = [];
        const angles = stepParams.angles;
        for (const a of angles) {
            tvs.push(this.getTangentVectorAtAngle(a));
            nvs.push(this.getNormalVectorAtAngle(a).scalarMultiply(this.getCurvatureAtAngle(a) * 10));
        }
        tangentNormalSubView.elements = [
            ...tvs.map(v => new ViewElement(v, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("red") })),
            ...nvs.map(v => new ViewElement(v, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("blue") }))
        ];
    });

    const osculatingCircle = new Circle().bind([arc, "any"], [stepParams, "step"], function (e1, e2) {
        this.copyFrom(e1.target.isValid() ? e1.target.getOsculatingCircleAtAngle(e2.target.angles[e2.target.step]) : null);
    });

    card.setDescription(
        "code",
        ` 
const centerPoint = new Point([0, 0]);
const dynamic = new Dynamic();
const restParams = new (dynamic.create({
    radiusX: 40,
    radiusY: 10,
    positive: true,
    startAngle: 0,
    endAngle: (3 * Maths.PI) / 2,
    rotation: Maths.PI / 4
}))();

const steps = 100;
const stepParams = new (dynamic.create({
    angles: [] as number[],
    step: 0
}))().bind([restParams, "positive|startAngle|endAngle"], function (ev) {
    let { startAngle: s, endAngle: e, positive: p } = ev.target;
    s = Angle.simplify(s);
    e = Angle.simplify(e);
    if (!p) [s, e] = [e, s];
    const deltaAngle = (s > e ? e + Maths.PI * 2 - s : e - s) / steps;
    const angles = Utility.range(0, steps + 1).map(n => s + deltaAngle * n);
    this.angles = p ? angles : angles.reverse();
});

const arc = new Arc().bind([centerPoint, "any"], [restParams, "any"], function (e1, e2) {
    const { radiusX, radiusY, positive, rotation, startAngle, endAngle } = e2.target;
    this.copyFrom(Arc.fromCenterPointAndStartEndAnglesEtc(e1.target, radiusX, radiusY, startAngle, endAngle, positive, rotation));
});

const tangentNormalSubView = new SubView();

arc.on("any", function () {
    if (!arc.isValid()) return (tangentNormalSubView.elements = []);
    const tvs: Vector[] = [];
    const nvs: Vector[] = [];
    const angles = stepParams.angles;
    for (const a of angles) {
        tvs.push(this.getTangentVectorAtAngle(a));
        nvs.push(this.getNormalVectorAtAngle(a).scalarMultiply(this.getCurvatureAtAngle(a) * 10));
    }
    tangentNormalSubView.elements = [
        ...tvs.map(v => new ViewElement(v, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("red") })),
        ...nvs.map(v => new ViewElement(v, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("blue") }))
    ];
});

const osculatingCircle = new Circle().bind([arc, "any"], [stepParams, "step"], function (e1, e2) {
    this.copyFrom(e1.target.isValid() ? e1.target.getOsculatingCircleAtAngle(e2.target.angles[e2.target.step]) : null);
});
    `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const arcFolder = pane.addFolder({ title: "Arc" });
    arcFolder.addInput(restParams, "radiusX", { min: 0 });
    arcFolder.addInput(restParams, "radiusY", { min: 0 });
    arcFolder.addInput(restParams, "startAngle", { format: (v: number) => v.toFixed(2) });
    arcFolder.addInput(restParams, "endAngle", { format: (v: number) => v.toFixed(2) });
    arcFolder.addInput(restParams, "positive");
    arcFolder.addInput(restParams, "rotation", { min: 0, max: 2 * Math.PI });
    const stepFolder = pane.addFolder({ title: "Osculating circle step" });
    stepFolder.addInput(stepParams, "step", { step: 1, min: 0, max: steps });
    // #endregion
    view.addSubView(tangentNormalSubView);
    view.add(new ViewElement(arc, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
    view.add(new ViewElement(centerPoint, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(osculatingCircle, { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("orange") }));
}
