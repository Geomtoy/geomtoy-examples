import { Line, Point, Intersection } from "@geomtoy/core";
import { CanvasRenderer, SvgRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { codeHtml, strokeOnly, strokeFill, strokeFillTrans } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Renderer");

tpl.addMarkdown(`
    Geomtoy view supports both svg and canvas as renderers. And we try to keep both the presentation and API consistency as much as possible, but SVG's performance is notoriously weaker. 
    So please choose the renderer according to your needs. It is also possible to use multiple renderers for multiple views to present at the same time and view can also switch the renderer.
    `);

const line1 = Line.fromTwoPoints([10, 10], [50, 4])!;
const line2 = Line.fromTwoPoints([10, 20], [22, 2])!;
const inter = new Intersection();
const point = new Point().bind([line1, "any"], [line2, "any"], function (e1, e2) {
    this.copyFrom(inter.intersect(e1.target, e2.target)[0]);
});

tpl.addMarkdown(`
    The following demonstrates two line intersecting, and present them in four views with four different renderers at the same time.
    All views are interactive, and the result of the interaction will be presented in all four views at the same time too.
`);

tpl.addCode(`
const line1 = Line.fromTwoPoints([10, 10], [50, 4])!;
const line2 = Line.fromTwoPoints([10, 20], [22, 2])!;
const inter = new Intersection();
const point = new Point().bind([line1, "any"], [line2, "any"], function (e1, e2) {
    this.copyFrom(inter.intersect(e1.target, e2.target)[0]);
});
`);

{
    const card = tpl.addCard({ aspectRatio: "1:1", rendererType: "svg", className: "col-6", withPane: true });
    const view = new View({}, new SvgRenderer(card.svg!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    view.add(new ViewElement(line1, { ...strokeOnly("red") }));
    view.add(new ViewElement(line2, { ...strokeOnly("blue") }));
    view.add(new ViewElement(point, { ...strokeFill("gray") }));
    card.setTitle("SVG renderer");
    card.setDescription(
        "code",
        `
const view = new View({}, new SvgRenderer(card.svg!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
view.startInteractive();

view.add(new ViewElement(line1, { ...strokeOnly("red") }));
view.add(new ViewElement(line2, { ...strokeOnly("blue") }));
view.add(new ViewElement(point, { ...strokeFill("gray") }));
    `
    );
}
{
    const card = tpl.addCard({ aspectRatio: "1:1", rendererType: "canvas", className: "col-6", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    view.add(new ViewElement(line1, { ...strokeOnly("red") }));
    view.add(new ViewElement(line2, { ...strokeOnly("blue") }));
    view.add(new ViewElement(point, { ...strokeFill("gray") }));
    card.setTitle("Canvas renderer");

    card.setDescription(
        "code",
        `
const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
view.startInteractive();

view.add(new ViewElement(line1, { ...strokeOnly("red") }));
view.add(new ViewElement(line2, { ...strokeOnly("blue") }));
view.add(new ViewElement(point, { ...strokeFill("gray") }));
    `
    );
}

{
    const card = tpl.addCard({ aspectRatio: "1:1", rendererType: "svg", className: "col-6", withPane: true });
    const view = new View({}, new SvgRenderer(card.svg!, {}, { density: 10, zoom: 0.2, xAxisPositiveOnRight: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    view.add(new ViewElement(line1, { ...strokeOnly("red") }));
    view.add(new ViewElement(line2, { ...strokeOnly("blue") }));
    view.add(new ViewElement(point, { ...strokeFill("gray") }));
    card.setTitle("SVG renderer 2");
    card.setDescription(
        "code",
        `
const view = new View({}, new SvgRenderer(card.svg!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));
view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
view.startInteractive();

view.add(new ViewElement(line1, { ...strokeOnly("red") }));
view.add(new ViewElement(line2, { ...strokeOnly("blue") }));
view.add(new ViewElement(point, { ...strokeFill("gray") }));
    `
    );
}

{
    const card = tpl.addCard({ aspectRatio: "1:1", rendererType: "canvas", className: "col-6", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: true }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    view.add(new ViewElement(line1, { ...strokeOnly("red") }));
    view.add(new ViewElement(line2, { ...strokeOnly("blue") }));
    view.add(new ViewElement(point, { ...strokeFill("gray") }));
    card.setTitle("Canvas renderer 2");
    card.setDescription(
        "code",
        `
const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
view.startInteractive();

view.add(new ViewElement(line1, { ...strokeOnly("red") }));
view.add(new ViewElement(line2, { ...strokeOnly("blue") }));
view.add(new ViewElement(point, { ...strokeFill("gray") }));
    `
    );
}
