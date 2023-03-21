import { Bezier, LineSegment, Point } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { dashedThinStroke, lightStrokeFill, strokeOnly } from "../../assets/scripts/common";
import { twoPointsLineSegment } from "../../assets/scripts/general-construction";
import { appendSvgElement } from "../../assets/scripts/svg-append";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Bezier length");

tpl.addMarkdown(`
    Geomtoy use [Gauss–Legendre quadrature](https://en.wikipedia.org/wiki/Gauss–Legendre_quadrature) integral 
    approximation to calculate bezier length, and use the \`n=24\` values of the table 
    here https://pomax.github.io/bezierinfo/legendre-gauss.html.
`);

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    const point1 = new Point([-20, 40]);
    const point2 = new Point([10, 20]);
    const controlPoint1 = new Point([30, 70]);
    const controlPoint2 = new Point([40, 20]);

    const svgPath = appendSvgElement("path");
    const lengths = {
        lengthByGeomtoy: 0,
        lengthBySvg: 0
    };

    const bezier = new Bezier().bind([point1, "any"], [point2, "any"], [controlPoint1, "any"], [controlPoint2, "any"], function (e1, e2, e3, e4) {
        this.copyFrom(new Bezier(e1.target, e2.target, e3.target, e4.target));
        if (this.isValid()) {
            lengths.lengthByGeomtoy = this.getLength();
            svgPath.setAttribute("d", `M${e1.target.x},${e1.target.y}C${e3.target.x},${e3.target.y} ${e4.target.x},${e4.target.y} ${e2.target.x},${e2.target.y}`);
            lengths.lengthBySvg = svgPath.getTotalLength();
        }
    });

    card.setDescription(
        "code",
        `
const point1 = new Point([-20, 40]);
const point2 = new Point([10, 20]);
const controlPoint1 = new Point([30, 70]);
const controlPoint2 = new Point([40, 20]);

const svgPath = appendSvgElement("path");
const lengths = {
    lengthByGeomtoy: 0,
    lengthBySvg: 0
};

const bezier = new Bezier().bind([point1, "any"], [point2, "any"], [controlPoint1, "any"], [controlPoint2, "any"], function (e1, e2, e3, e4) {
    this.copyFrom(new Bezier(e1.target, e2.target, e3.target, e4.target));
    lengths.lengthByGeomtoy = this.getLength();
    svgPath.setAttribute("d", \`M\${e1.target.x},\${e1.target.y}C\${e3.target.x},\${e3.target.y} \${e4.target.x},\${e4.target.y} \${e2.target.x},\${e2.target.y}\`);
    lengths.lengthBySvg = svgPath.getTotalLength();
});
    `
    );

    const controlLineSegment1 = new LineSegment().bind([point1, "any"], [controlPoint1, "any"], twoPointsLineSegment);
    const controlLineSegment2 = new LineSegment().bind([controlPoint1, "any"], [controlPoint2, "any"], twoPointsLineSegment);
    const controlLineSegment3 = new LineSegment().bind([controlPoint2, "any"], [point2, "any"], twoPointsLineSegment);

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Length", container: card.pane });
    const lengthFolder = pane.addFolder({ title: "Length" });
    lengthFolder.addMonitor(lengths, "lengthByGeomtoy", { label: " length by Geomtoy", format: (v: any) => v.toFixed(10) });
    lengthFolder.addMonitor(lengths, "lengthBySvg", { label: " length by SVG", format: (v: any) => v.toFixed(10) });
    // #endregion

    view.add(new ViewElement(point1, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlPoint1, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlPoint2, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlLineSegment1, { type: ViewElementType.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(controlLineSegment2, { type: ViewElementType.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(controlLineSegment3, { type: ViewElementType.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(bezier, { type: ViewElementType.None, ...strokeOnly("brown") }));
}
