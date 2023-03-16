import { Point, Polygon, ShapeArray } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, SubView, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, markdownHtml, strokeFill, strokeOnly } from "../../assets/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Polygon construction");
tpl.addSection("constructor");
{
    const card = tpl.addCard({ aspectRatio: "1:1", className: "col-6" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    // prettier-ignore
    const polygon = new Polygon([
        Polygon.vertex([0, 100]), 
        Polygon.vertex([40, -10]), 
        Polygon.vertex([-9, 30]), 
        Polygon.vertex([55, 20]), 
        Polygon.vertex([0, 80])
    ], true);
    card.setDescription(markdownHtml("property `closed`: true - like SVG &lt;polygon&gt;"));
    card.appendDescription(
        codeHtml(`
const polygon = new Polygon([
    Polygon.vertex([0, 100]), 
    Polygon.vertex([40, -10]), 
    Polygon.vertex([-9, 30]), 
    Polygon.vertex([55, 20]), 
    Polygon.vertex([0, 80])
], true);
        `)
    );
    view.add(new ViewElement(polygon, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") }));
}
{
    const card = tpl.addCard({ aspectRatio: "1:1", className: "col-6" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    // prettier-ignore
    const polygon = new Polygon([
        Polygon.vertex([0, 100]), 
        Polygon.vertex([40, -10]), 
        Polygon.vertex([-9, 30]), 
        Polygon.vertex([55, 20]), 
        Polygon.vertex([0, 80])
    ], false);
    card.setDescription(markdownHtml("property `closed`: false - like SVG &lt;polyline&gt;"));
    card.appendDescription(
        codeHtml(`
const polygon = new Polygon([
    Polygon.vertex([0, 100]), 
    Polygon.vertex([40, -10]), 
    Polygon.vertex([-9, 30]), 
    Polygon.vertex([55, 20]), 
    Polygon.vertex([0, 80])
], false);
        `)
    );
    view.add(new ViewElement(polygon, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") }));
}

tpl.addSection("fromSVGString");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const polygon = Polygon.fromSVGString("0,100 50,25 50,7 100,0", true);

    card.setDescription(
        codeHtml(`
const polygon = Polygon.fromSVGString("0,100 50,25 50,7 100,0", true);
        `)
    );

    view.add(new ViewElement(polygon, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") }));
}

tpl.addSection("fromPoints");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const points = Utility.range(0, 10).map(_ => Point.random([-100, -100, 200, 200]));

    const polygon = new Polygon(false).bind(...points.map(p => [p, "any"] as [Point, string]), function (...es) {
        this.copyFrom(Polygon.fromPoints(es.map(e => e.target)));
    });

    card.setDescription(
        codeHtml(`
const points = Utility.range(0, 10).map(_ => Point.random([-100, -100, 200, 200])); 

const polygon = new Polygon(false).bind(...points.map(p => [p, "any"] as [Point, string]), function (...es) {
    this.copyFrom(Polygon.fromPoints(es.map(e => e.target)));
});
        `)
    );
    view.add(...points.map(p => new ViewElement(p, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") })));
    view.add(new ViewElement(polygon, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}

tpl.addSection("fromPointsConvexHull");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const points = Utility.range(0, 10).map(_ => Point.random([-100, -100, 200, 200]));

    const polygon = new Polygon().bind(...points.map(p => [p, "any"] as [Point, string]), function (...es) {
        this.copyFrom(Polygon.fromPointsConvexHull(es.map(e => e.target)));
    });

    card.setDescription(
        codeHtml(`
const points = Utility.range(0, 10).map(_ => Point.random([-100, -100, 200, 200])); 

const polygon = new Polygon().bind(...points.map(p => [p, "any"] as [Point, string]), function (...es) {
    this.copyFrom(Polygon.fromPointsConvexHull(es.map(e => e.target)));
});
        `)
    );
    view.add(...points.map(p => new ViewElement(p, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") })));
    view.add(new ViewElement(polygon, { interactMode: ViewElementInteractMode.None, ...strokeFill("brown") }));
}
