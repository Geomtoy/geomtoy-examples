import { LineSegment, Point, QuadraticBezier } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, strokeOnly, thinStrokeOnly } from "../../assets/scripts/common";
import { twoPointsLineSegment } from "../../assets/scripts/general-construction";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Quadratic bezier length");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();
    const point1 = new Point([-20, 40]);
    const point2 = new Point([10, 20]);
    const controlPoint = new Point([30, 70]);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const lengths = {
        lengthByGeomtoy: 0,
        lengthBySVG: 0
    };

    const quadraticBezier = new QuadraticBezier().bind([point1, "any"], [point2, "any"], [controlPoint, "any"], function (e1, e2, e3) {
        this.copyFrom(new QuadraticBezier(e1.target, e2.target, e3.target));
        lengths.lengthByGeomtoy = this.getLength();
        path.setAttribute("d", `M${e1.target.x},${e1.target.y}Q${e3.target.x},${e3.target.y} ${e2.target.x},${e2.target.y}`);
        lengths.lengthBySVG = path.getTotalLength();
    });

    card.setDescription(
        "code",
        `
    const point1 = new Point([-20, 40]);
    const point2 = new Point([10, 20]);
    const controlPoint = new Point([30, 70]);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const lengths = {
        lengthByGeomtoy: 0,
        lengthBySVG: 0
    };

    const quadraticBezier = new QuadraticBezier().bind(
        [
            [point1, "any"],
            [point2, "any"],
            [controlPoint, "any"]
        ],
        function ([e1, e2, e3]) {
            this.copyFrom(new QuadraticBezier(e1.target, e2.target, e3.target));
            lengths.lengthByGeomtoy = this.getLength();
            path.setAttribute("d", \`M\${e1.target.x},\${e1.target.y}Q\${e3.target.x},\${e3.target.y} \${e2.target.x},\${e2.target.y}\`);
            lengths.lengthBySVG = path.getTotalLength();
        }
    );
    `
    );

    const controlLineSegment1 = new LineSegment().bind([point1, "any"], [controlPoint, "any"], twoPointsLineSegment);
    const controlLineSegment2 = new LineSegment().bind([controlPoint, "any"], [point2, "any"], twoPointsLineSegment);

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Length", container: card.pane });
    pane.addMonitor(lengths, "lengthByGeomtoy", { label: " length by Geomtoy", format: (v: any) => v.toFixed(10) });
    pane.addMonitor(lengths, "lengthBySVG", { label: " length by SVG", format: (v: any) => v.toFixed(10) });
    // #endregion

    view.add(new ViewElement(point1, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlPoint, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(controlLineSegment1, { type: ViewElementType.None, ...thinStrokeOnly("gray") }));
    view.add(new ViewElement(controlLineSegment2, { type: ViewElementType.None, ...thinStrokeOnly("gray") }));
    view.add(new ViewElement(quadraticBezier, { type: ViewElementType.None, ...strokeOnly("brown") }));
}
