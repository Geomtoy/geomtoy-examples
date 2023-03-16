import { Bezier, EventObject, LineSegment, Point } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { codeHtml, dashedThinStroke, lightStrokeFill, strokeOnly } from "../../assets/common";
import { appendSvgElement } from "../../assets/svg-append";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Circle length and area");

tpl.addParagraph(`
    Geomtoy use <a href="https://en.wikipedia.org/wiki/Gauss–Legendre_quadrature">Gauss–Legendre quadrature</a> integral 
    approximation to calculate bezier length, and use the \`n=24\` values of the table 
    here <a href="https://pomax.github.io/bezierinfo/legendre-gauss.html">https://pomax.github.io/bezierinfo/legendre-gauss.html</a>.
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
        lengths.lengthByGeomtoy = this.getLength();
        svgPath.setAttribute("d", `M${e1.target.x},${e1.target.y}C${e3.target.x},${e3.target.y} ${e4.target.x},${e4.target.y} ${e2.target.x},${e2.target.y}`);
        lengths.lengthBySvg = svgPath.getTotalLength();
    });

    card.setDescription(
        codeHtml(`
    const point1 = new Point([-20, 40]);
    const point2 = new Point([10, 20]);
    const controlPoint1 = new Point([30, 70]);
    const controlPoint2 = new Point([40, 20]);

    const svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const lengths = {
        lengthByGeomtoy: 0,
        lengthBySvg: 0
    };

    const bezier = new Bezier().bind(
        [
            [point1, "any"],
            [point2, "any"],
            [controlPoint1, "any"],
            [controlPoint2, "any"]
        ],
        function ([e1, e2, e3, e4]) {
            this.copyFrom(new Bezier(e1.target, e2.target, e3.target, e4.target));
            lengths.lengthByGeomtoy = this.getLength();
            svgPath.setAttribute("d", \`M\${e1.target.x},\${e1.target.y}C\${e3.target.x},\${e3.target.y} \${e4.target.x},\${e4.target.y} \${e2.target.x},\${e2.target.y}\`);
            lengths.lengthBySvg = svgPath.getTotalLength();
        }
    );
    `)
    );

    const twoPointLineSegmentFn = function (this: LineSegment, e1: EventObject<Point>, e2: EventObject<Point>) {
        this.copyFrom(new LineSegment(e1.target, e2.target));
    };

    const controlLineSegment1 = new LineSegment().bind([point1, "any"], [controlPoint1, "any"], twoPointLineSegmentFn);
    const controlLineSegment2 = new LineSegment().bind([controlPoint1, "any"], [controlPoint2, "any"], twoPointLineSegmentFn);
    const controlLineSegment3 = new LineSegment().bind([controlPoint2, "any"], [point2, "any"], twoPointLineSegmentFn);

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Length", container: card.pane });
    const lengthFolder = pane.addFolder({ title: "Length" });
    lengthFolder.addMonitor(lengths, "lengthByGeomtoy", { label: " length by Geomtoy", format: (v: any) => v.toFixed(10) });
    lengthFolder.addMonitor(lengths, "lengthBySvg", { label: " length by SVG", format: (v: any) => v.toFixed(10) });
    // #endregion

    view.add(new ViewElement(point1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlPoint1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlPoint2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlLineSegment1, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(controlLineSegment2, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(controlLineSegment3, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(bezier, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}
