import { BooleanOperation, Geomtoy, Path } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement } from "@geomtoy/view";
import { elementFromString, lightStrokeFill } from "../assets/common";
import tpl from "../assets/templates/tpl-renderer";
import { randomPathCommand } from "./_common";

tpl.title("Random path-path boolean operation");

const bo = new BooleanOperation();
const path1 = new Path(Utility.range(0, 10).map(_ => randomPathCommand()));
const path2 = new Path(Utility.range(0, 10).map(_ => randomPathCommand()));
const description = bo.describe(path1, path2);

const viewCollection: View[] = [];
{
    const checkWrapper = elementFromString(`
    <p>
        Refresh to random. Each of the two paths contain 10 random commands. 
        <input class="form-check-input" type="checkbox" id="check">
        <label class="form-check-label" for="check">Show winding</label>
    </p>
    `);
    const checkbox = checkWrapper.querySelector("input[type=checkbox]")!;
    checkbox.addEventListener("change", function (this: HTMLInputElement) {
        Geomtoy.setOptions({
            graphics: {
                pathSegmentArrow: this.checked
            }
        });
        viewCollection.forEach(view => view.render());
    });
    tpl.addHTMLElement(checkWrapper);
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

    view1.add(new ViewElement(path1, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(path2, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("purple") }));
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

    view1.add(new ViewElement(path1, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(path2, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("purple") }));
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

    view1.add(new ViewElement(path1, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(path2, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("purple") }));
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

    view1.add(new ViewElement(path1, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(path2, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("purple") }));
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

    view1.add(new ViewElement(path1, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(path2, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("purple") }));
}
