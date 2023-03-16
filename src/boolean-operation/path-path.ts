import { BooleanOperation, Path } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { strokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";
import { randomPathCommand } from "./_common";

tpl.title("Path-path boolean operation");

const bo = new BooleanOperation();

const path1 = new Path(
    Utility.range(0, 10).map(_ => randomPathCommand()),
    true
);
const path2 = path1.clone();
// const path2 = new Path(
//     Utility.range(0, 10).map(_ => randomPathCommand()),
//     true
// );

const combined = bo.describe(path1, path2);

// console.log(combined)
{
    tpl.addSection("Union");
    const compound = bo.chain(bo.selectUnion(combined));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(path1, { interactMode: ViewElementInteractMode.None, ...strokeFill("red") }));
    view1.add(new ViewElement(path2, { interactMode: ViewElementInteractMode.None, ...strokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...strokeFill("purple") }));
}

{
    tpl.addSection("Intersection");
    const compound = bo.chain(bo.selectIntersection(combined));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(path1, { interactMode: ViewElementInteractMode.None, ...strokeFill("red") }));
    view1.add(new ViewElement(path2, { interactMode: ViewElementInteractMode.None, ...strokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...strokeFill("purple") }));
}

{
    tpl.addSection("Difference");
    const compound = bo.chain(bo.selectDifference(combined));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(path1, { interactMode: ViewElementInteractMode.None, ...strokeFill("red") }));
    view1.add(new ViewElement(path2, { interactMode: ViewElementInteractMode.None, ...strokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...strokeFill("purple") }));
}

{
    tpl.addSection("DifferenceRev");
    const compound = bo.chain(bo.selectDifferenceRev(combined));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(path1, { interactMode: ViewElementInteractMode.None, ...strokeFill("red") }));
    view1.add(new ViewElement(path2, { interactMode: ViewElementInteractMode.None, ...strokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...strokeFill("purple") }));
}

{
    tpl.addSection("Exclusion");
    const compound = bo.chain(bo.selectExclusion(combined));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(path1, { interactMode: ViewElementInteractMode.None, ...strokeFill("red") }));
    view1.add(new ViewElement(path2, { interactMode: ViewElementInteractMode.None, ...strokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...strokeFill("purple") }));
}
