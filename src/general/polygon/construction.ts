import { Point, Polygon, ShapeArray } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, SubView, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, markdownHtml, strokeFill, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Polygon construction");
tpl.addSection("constructor");
{
    const card = tpl.addCard({ aspectRatio: "1:1", className: "col-6" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    // prettier-ignore
    const polygon = new Polygon([
        Polygon.vertex([0, 100]), 
        Polygon.vertex([40, -10]), 
        Polygon.vertex([-9, 30]), 
        Polygon.vertex([55, 20]), 
        Polygon.vertex([0, 80])
    ], true);
    card.setDescription("markdown", "property `closed`: true - like SVG &lt;polygon&gt;");
    card.appendDescription(
        "code",
        `
const polygon = new Polygon([
    Polygon.vertex([0, 100]), 
    Polygon.vertex([40, -10]), 
    Polygon.vertex([-9, 30]), 
    Polygon.vertex([55, 20]), 
    Polygon.vertex([0, 80])
], true);
        `
    );
    view.add(new ViewElement(polygon, { ...strokeFill("brown") }));
}
{
    const card = tpl.addCard({ aspectRatio: "1:1", className: "col-6" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    // prettier-ignore
    const polygon = new Polygon([
        Polygon.vertex([0, 100]), 
        Polygon.vertex([40, -10]), 
        Polygon.vertex([-9, 30]), 
        Polygon.vertex([55, 20]), 
        Polygon.vertex([0, 80])
    ], false);
    card.setDescription("markdown", "property `closed`: false - like SVG &lt;polyline&gt;");
    card.appendDescription(
        "code",
        `
const polygon = new Polygon([
    Polygon.vertex([0, 100]), 
    Polygon.vertex([40, -10]), 
    Polygon.vertex([-9, 30]), 
    Polygon.vertex([55, 20]), 
    Polygon.vertex([0, 80])
], false);
        `
    );
    view.add(new ViewElement(polygon, { ...strokeFill("brown") }));
}

tpl.addSection("fromSVGString");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const polygon = Polygon.fromSVGString("0,100 50,25 50,7 100,0", true);

    card.setDescription(
        "code",
        `
const polygon = Polygon.fromSVGString("0,100 50,25 50,7 100,0", true);
        `
    );

    view.add(new ViewElement(polygon, { ...strokeFill("brown") }));
}

tpl.addSection("fromPoints");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const points = Utility.range(0, 10).map(_ => Point.random([-100, -100, 200, 200]));

    const polygon = new Polygon(false).bind(...points.map(p => [p, "any"] as [Point, string]), function (...es) {
        this.copyFrom(Polygon.fromPoints(es.map(e => e.target)));
    });

    card.setDescription(
        "code",
        `
const points = Utility.range(0, 10).map(_ => Point.random([-100, -100, 200, 200])); 

const polygon = new Polygon(false).bind(...points.map(p => [p, "any"] as [Point, string]), function (...es) {
    this.copyFrom(Polygon.fromPoints(es.map(e => e.target)));
});
        `
    );
    view.add(...points.map(p => new ViewElement(p, { ...strokeFill("brown") })));
    view.add(new ViewElement(polygon, { type: ViewElementType.None, ...strokeOnly("brown") }));
}

tpl.addSection("fromPointsConvexHull");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const points = Utility.range(0, 10).map(_ => Point.random([-100, -100, 200, 200]));

    const polygon = new Polygon().bind(...points.map(p => [p, "any"] as [Point, string]), function (...es) {
        this.copyFrom(Polygon.fromPointsConvexHull(es.map(e => e.target)));
    });

    card.setDescription(
        "code",
        `
const points = Utility.range(0, 10).map(_ => Point.random([-100, -100, 200, 200])); 

const polygon = new Polygon().bind(...points.map(p => [p, "any"] as [Point, string]), function (...es) {
    this.copyFrom(Polygon.fromPointsConvexHull(es.map(e => e.target)));
});
        `
    );
    view.add(...points.map(p => new ViewElement(p, { ...strokeFill("brown") })));
    view.add(new ViewElement(polygon, { type: ViewElementType.None, ...strokeFill("brown") }));
}
