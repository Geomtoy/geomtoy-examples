import { BooleanOperation, Geomtoy, Polygon } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { newElement, lightStrokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";
import { randomPolygonVertex } from "./_common";

tpl.title("Random polygon-polygon boolean operation");

const bo = new BooleanOperation("sweep-line");

const polygon1 = new Polygon(Utility.range(0, 10).map(_ => randomPolygonVertex()));
const polygon2 = new Polygon(Utility.range(0, 10).map(_ => randomPolygonVertex()));
const description = bo.describe(polygon1, polygon2);

const viewCollection: View[] = [];
{
    const checkWrapper = newElement(`
    <p>
        Refresh to random. Each of the two polygons contain 10 random vertices. 
        <input class="form-check-input" type="checkbox" id="check">
        <label class="form-check-label" for="check">Show winding</label>
    </p>
    `);
    const checkbox = checkWrapper.querySelector("input[type=checkbox]")!;
    checkbox.addEventListener("change", function (this: HTMLInputElement) {
        Geomtoy.setOptions({
            graphics: {
                polygonSegmentArrow: this.checked
            }
        });
        viewCollection.forEach(view => view.render());
    });
    tpl.addHtmlElement(checkWrapper);
}
{
    tpl.addSection("Union");
    const compound = bo.chain(bo.selectUnion(description));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();
    viewCollection.push(view1, view2);

    view1.add(new ViewElement(polygon1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(polygon2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}
{
    tpl.addSection("Intersection");
    const compound = bo.chain(bo.selectIntersection(description));
    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();
    viewCollection.push(view1, view2);

    view1.add(new ViewElement(polygon1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(polygon2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}

{
    tpl.addSection("Difference");
    const compound = bo.chain(bo.selectDifference(description));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();
    viewCollection.push(view1, view2);

    view1.add(new ViewElement(polygon1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(polygon2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}

{
    tpl.addSection("DifferenceRev");
    const compound = bo.chain(bo.selectDifferenceRev(description));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();
    viewCollection.push(view1, view2);

    view1.add(new ViewElement(polygon1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(polygon2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}

{
    tpl.addSection("Exclusion");
    const compound = bo.chain(bo.selectExclusion(description));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();
    viewCollection.push(view1, view2);

    view1.add(new ViewElement(polygon1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(polygon2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}
