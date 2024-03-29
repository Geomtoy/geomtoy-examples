import { LineSegment, Point } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Line segment length");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();
    const point1 = new Point([-20, 40]);
    const point2 = new Point([10, 20]);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const lengths = {
        lengthByGeomtoy: 0,
        lengthBySVG: 0
    };

    const lineSegment = new LineSegment().bind([point1, "any"], [point2, "any"], function (e1, e2) {
        this.copyFrom(new LineSegment(e1.target, e2.target));
        lengths.lengthByGeomtoy = this.getLength();
        path.setAttribute("d", `M${e1.target.x},${e1.target.y}L${e2.target.x},${e2.target.y}`);
        lengths.lengthBySVG = path.getTotalLength();
    });

    card.setDescription(
        "code",
        `
    const point1 = new Point([-20, 40]);
    const point2 = new Point([10, 20]);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const lengths = {
        lengthByGeomtoy: 0,
        lengthBySVG: 0
    };

    const lineSegment = new LineSegment().bind(
        [
            [point1, "any"],
            [point2, "any"]
        ],
        function ([e1, e2]) {
            this.copyFrom(new LineSegment(e1.target, e2.target));
            lengths.lengthByGeomtoy = this.getLength();
            path.setAttribute("d", \`M\${e1.target.x},\${e1.target.y}L\${e2.target.x},\${e2.target.y}\`);
            lengths.lengthBySVG = path.getTotalLength();
        }
    );
    `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Length", container: card.pane });
    pane.addMonitor(lengths, "lengthByGeomtoy", { label: " length by Geomtoy", format: (v: any) => v.toFixed(10) });
    pane.addMonitor(lengths, "lengthBySVG", { label: " length by SVG", format: (v: any) => v.toFixed(10) });
    // #endregion

    view.add(new ViewElement(point1, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(lineSegment, { type: ViewElementType.None, ...strokeOnly("brown") }));
}
