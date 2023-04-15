import { Dynamic, Polygon } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { codeHtml, strokeFill } from "../../assets/scripts/common";
import { appendSVGElement } from "../../assets/scripts/svg-append";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Polygon length and simple area");

tpl.addSection("length");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.25, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const lengths = {
        lengthByGeomtoy: 0,
        lengthBySVG: 0
    };

    const polygon = Polygon.fromSVGString("50,0 21,90 98,35 2,35 79,90");
    const svgPolygon = appendSVGElement("polygon");
    svgPolygon.setAttribute("points", "50,0 21,90 98,35 2,35 79,90");
    lengths.lengthByGeomtoy = polygon.getLength();
    lengths.lengthBySVG = svgPolygon.getTotalLength();

    card.appendDescription(
        "code",
        `
const polygon = Polygon.fromSVGString("50,0 21,90 98,35 2,35 79,90");
const svgPolygon = appendSVGElement("polygon");
svgPolygon.setAttribute("points", "50,0 21,90 98,35 2,35 79,90");
lengths.lengthByGeomtoy = polygon.getLength()
lengths.lengthBySVG= svgPolygon.getTotalLength()
        `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const lengthFolder = pane.addFolder({ title: "Length" });
    lengthFolder.addMonitor(lengths, "lengthByGeomtoy", { label: " length by Geomtoy", format: (v: any) => v.toFixed(10) });
    lengthFolder.addMonitor(lengths, "lengthBySVG", { label: " length by SVG", format: (v: any) => v.toFixed(10) });
    // #endregion
    view.add(new ViewElement(polygon, { ...strokeFill("brown") }));
}

tpl.addSection("area");
tpl.addMarkdown(
    "\
For simple(non-self-intersecting) polygons, `getArea` returns correct results, but for complex(​​self-intersecting) polygons, `getArea` cannot be directly used, but perform a self union boolean operation first. \
And the fill rule that affects the final graphics will also be processed in self union.\
"
);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.25, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const polygon = Polygon.fromSVGString("50,0 0,50 -50,0 0,0");
    const area = polygon.getArea();

    card.appendDescription(
        "code",
        `
const polygon = Polygon.fromSVGString("50,0 0,50 -50,0 0,0");
const area = polygon.getArea();
        `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const areaFolder = pane.addFolder({ title: "Area" });
    areaFolder.addMonitor({ area }, "area");
    // #endregion

    view.add(new ViewElement(polygon, { ...strokeFill("brown") }));
}
