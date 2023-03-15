import { Arc, Dynamic, Point } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import { CanvasRenderer, SvgRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, strokeOnly } from "../../assets/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Arc construction");

tpl.addSection("constructor");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    card.setTitle("This is the way SVG describe an arc.");
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const point1 = new Point([0, 0]);
    const point2 = new Point([10, 1]);

    const restParams = new (new Dynamic().create({
        radiusX: 10,
        radiusY: 20,
        largeArc: true,
        positive: true,
        rotation: 0
    }))();

    const arc = new Arc().bind([point1, "any"], [point2, "any"], [restParams, "any"], function (e1, e2, e3) {
        const { radiusX, radiusY, largeArc, positive, rotation } = e3.target;
        this.copyFrom(new Arc(e1.target, e2.target, radiusX, radiusY, largeArc, positive, rotation));
    });

    card.setDescription(
        codeHtml(`
const point1 = new Point([0, 0]);
const point2 = new Point([10, 1]);

const restParams = new (new Dynamic().create({
    radiusX: 10,
    radiusY: 20,
    largeArc: true,
    positive: true,
    rotation: 0
}))();

const arc = new Arc().bind([point1, "any"], [point2, "any"], [restParams, "any"], function (e1, e2, e3) {
    const { radiusX, radiusY, largeArc, positive, rotation } = e3.target;
    this.copyFrom(new Arc(e1.target, e2.target, radiusX, radiusY, largeArc, positive, rotation));
});
    `)
    );

    // `Arc` may correct its own radiusX and radiusY by itself.
    restParams.bind([arc, "radiusX|radiusY"], function (e) {
        this.radiusX = e.target.radiusX;
        this.radiusY = e.target.radiusY;
    });

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const arcFolder = pane.addFolder({ title: "Arc" });
    const rxInput = arcFolder.addInput(restParams, "radiusX", { min: 0 });
    arc.on("radiusX", () => rxInput.refresh());
    const ryInput = arcFolder.addInput(restParams, "radiusY", { min: 0 });
    arc.on("radiusY", () => ryInput.refresh());
    arcFolder.addInput(restParams, "largeArc");
    arcFolder.addInput(restParams, "positive");
    arcFolder.addInput(restParams, "rotation", { min: 0, max: 2 * Math.PI });
    // #endregion

    view.add(new ViewElement(point1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(arc, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}

tpl.addSection("fromCenterPointAndStartEndAnglesEtc");
{
    const card = tpl.addCard({ aspectRatio: "2:1", rendererType: "svg", className: "col-12", withPane: true });
    card.setTitle("This is the way Canvas describe an arc.");
    const view = new View({}, new SvgRenderer(card.svg!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const centerPoint = new Point([0, 0]);
    const restParams = new (new Dynamic().create({
        radiusX: 20,
        radiusY: 10,
        startAngle: Maths.PI / 4,
        endAngle: (5 * Maths.PI) / 4,
        positive: true,
        rotation: 0
    }))();

    const arc = new Arc().bind([centerPoint, "any"], [restParams, "any"], function (e1, e2) {
        const { radiusX, radiusY, startAngle, endAngle, positive, rotation } = e2.target;
        this.copyFrom(Arc.fromCenterPointAndStartEndAnglesEtc(e1.target, radiusX, radiusY, startAngle, endAngle, positive, rotation));
    });

    card.setDescription(
        codeHtml(`
const centerPoint = new Point([0, 0]);
const restParams = new (new Dynamic().create({
    radiusX: 20,
    radiusY: 10,
    startAngle: Maths.PI / 4,
    endAngle: (5 * Maths.PI) / 4,
    positive: true,
    rotation: 0
}))();

const arc = new Arc().bind([centerPoint, "any"], [restParams, "any"], function (e1, e2) {
    const { radiusX, radiusY, startAngle, endAngle, positive, rotation } = e2.target;
    this.copyFrom(Arc.fromCenterPointAndStartEndAnglesEtc(e1.target, radiusX, radiusY, startAngle, endAngle, positive, rotation));
});
    `)
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
    // #endregion

    view.add(new ViewElement(centerPoint, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(arc, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}

tpl.addSection("fromThreePointsCircular");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const point1 = new Point([0, 10]);
    const point2 = new Point([10, 5]);
    const radiusControlPoint = new Point([10, 0]);

    const arc = new Arc().bind([point1, "any"], [point2, "any"], [radiusControlPoint, "any"], function (e1, e2, e3) {
        this.copyFrom(Arc.fromThreePointsCircular(e1.target, e2.target, e3.target));
    });

    card.setDescription(
        codeHtml(` 
const point1 = new Point([0, 10]);
const point2 = new Point([10, 5]);
const radiusControlPoint = new Point([10, 0]);

const arc = new Arc().bind([point1, "any"], [point2, "any"], [radiusControlPoint, "any"], function (e1, e2, e3) {
    this.copyFrom(Arc.fromThreePointsCircular(e1.target, e2.target, e3.target));
});
    `)
    );

    view.add(new ViewElement(point1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(radiusControlPoint, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(arc, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}
