import { Arc, Dynamic, Point } from "@geomtoy/core";
import { Angle } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, strokeOnly } from "../../assets/scripts/common";
import { appendSvgElement } from "../../assets/scripts/svg-append";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Arc length");

tpl.addMarkdown(`
    There is no exact formula for the perimeter of an ellipse, so of course neither does an elliptical arc.<br>
    For higher accuracy, Geomtoy uses the <a href="https://en.wikipedia.org/wiki/Elliptic_integral">elliptic integral</a> to calculate <a href="https://en.wikipedia.org/wiki/Ellipse#Arc_length">arc length</a>.
`);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const point1 = new Point([6, 2]);
    const point2 = new Point([0, 3]);
    const restParams = new (new Dynamic().create({
        radiusX: 5,
        radiusY: 7,
        largeArc: true,
        positive: true,
        rotation: 0
    }))();

    const svgPath = appendSvgElement("path");
    const lengths = {
        lengthByGeomtoy: 0,
        lengthBySvg: 0
    };

    const arc = new Arc().bind([point1, "any"], [point2, "any"], [restParams, "any"], function (e1, e2, e3) {
        const { radiusX, radiusY, largeArc, positive, rotation } = e3.target;
        this.copyFrom(new Arc(e1.target, e2.target, radiusX, radiusY, largeArc, positive, rotation));
        lengths.lengthByGeomtoy = this.getLength();
        const { radiusX: correctedRadiusX, radiusY: correctedRadiusY } = this;
        svgPath.setAttribute(
            "d",
            `M${e1.target.x},${e1.target.y}A${correctedRadiusX} ${correctedRadiusY} ${Angle.radianToDegree(rotation)} ${largeArc ? "1" : "0"} ${positive ? "1" : "0"} ${e2.target.x},${e2.target.y}`
        );
        lengths.lengthBySvg = svgPath.getTotalLength();
    });

    card.setDescription(
        "code",
        `
const point1 = new Point([6, 2]);
const point2 = new Point([0, 3]);
const restParams = new (new Dynamic().create({
    radiusX: 5,
    radiusY: 7,
    largeArc: true,
    positive: true,
    rotation: 0
}))();

const svgPath = appendSvgElement("path");
const lengths = {
    lengthByGeomtoy: 0,
    lengthBySvg: 0
};

const arc = new Arc().bind([point1, "any"], [point2, "any"], [restParams, "any"], function (e1, e2, e3) {
    const { radiusX, radiusY, largeArc, positive, rotation } = e3.target;
    this.copyFrom(new Arc(e1.target, e2.target, radiusX, radiusY, largeArc, positive, rotation));
    lengths.lengthByGeomtoy = this.getLength();
    const { radiusX: correctedRadiusX, radiusY: correctedRadiusY } = this;
    svgPath.setAttribute(
        "d",
        \`M\${e1.target.x},\${e1.target.y}A\${correctedRadiusX} \${correctedRadiusY} \${Angle.radianToDegree(rotation)} \${largeArc ? "1" : "0"} \${positive ? "1" : "0"} \${e2.target.x},\${e2.target.y}\`
    );
    lengths.lengthBySvg = svgPath.getTotalLength();
});
    `
    );
    // `Arc` may correct its own radiusX and radiusY by itself.
    restParams.bind([arc, "radiusX|radiusY"], function (e) {
        restParams.radiusX = e.target.radiusX;
        restParams.radiusY = e.target.radiusY;
    });
    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const arcFolder = pane.addFolder({ title: "Arc" });
    const inputRadiusX = arcFolder.addInput(restParams, "radiusX", { min: 0 });
    arc.on("radiusX", () => inputRadiusX.refresh());

    const inputRadiusY = arcFolder.addInput(restParams, "radiusY", { min: 0 });
    arc.on("radiusY", () => inputRadiusY.refresh());

    arcFolder.addInput(restParams, "largeArc");
    arcFolder.addInput(restParams, "positive");
    arcFolder.addInput(restParams, "rotation", { min: 0, max: 2 * Math.PI });
    const lengthFolder = pane.addFolder({ title: "Length" });
    lengthFolder.addMonitor(lengths, "lengthByGeomtoy", { label: " length by Geomtoy", format: (v: any) => v.toFixed(10) });
    lengthFolder.addMonitor(lengths, "lengthBySvg", { label: " length by SVG", format: (v: any) => v.toFixed(10) });
    // #endregion

    view.add(new ViewElement(point1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(arc, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}
