import { BooleanOperation, Geomtoy, Polygon } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill, newElement } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";
import { randomPolygonVertex } from "../_common";

tpl.title("Random polygon-polygon test");

const bo = new BooleanOperation("sweep-line");
const polygon1 = new Polygon(Utility.range(0, 10).map(_ => randomPolygonVertex()));
const polygon2 = new Polygon(Utility.range(0, 10).map(_ => randomPolygonVertex()));
const description = bo.describe(polygon1, polygon2);

const viewCollection: View[] = [];

tpl.addMarkdown(`
Refresh to random. Each of the two polygons contain 10 random vertices. 
`);
{
    const checkWrapper = newElement(`
    <div class="mt-0">
        <input class="form-check-input" type="checkbox" id="check">
        <label class="form-check-label" for="check">Show winding</label>
    </div>
    `);
    const checkbox = checkWrapper.querySelector("input[type=checkbox]")!;
    checkbox.addEventListener("change", function (this: HTMLInputElement) {
        Geomtoy.setOptions({
            graphics: {
                polygonSegmentArrow: this.checked
            }
        });
        viewCollection.forEach(view => view.requestRender());
    });
    tpl.addHtmlElement(checkWrapper);
}
{
    tpl.addSection("Union");
    const compound = bo.chain(bo.selectUnion(description));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "union", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();

    view2.startResponsive(View.centerOrigin);
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

    const card2 = tpl.addCard({ title: "intersection", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();

    view2.startResponsive(View.centerOrigin);
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

    const card2 = tpl.addCard({ title: "difference", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();

    view2.startResponsive(View.centerOrigin);
    view2.startInteractive();
    viewCollection.push(view1, view2);

    view1.add(new ViewElement(polygon1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(polygon2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}

{
    tpl.addSection("DifferenceReverse");
    const compound = bo.chain(bo.selectDifferenceReverse(description));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "difference reverse", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();

    view2.startResponsive(View.centerOrigin);
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

    const card2 = tpl.addCard({ title: "exclusion", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();

    view2.startResponsive(View.centerOrigin);
    view2.startInteractive();
    viewCollection.push(view1, view2);

    view1.add(new ViewElement(polygon1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(polygon2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}
