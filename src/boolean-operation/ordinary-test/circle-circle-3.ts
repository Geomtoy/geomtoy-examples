import { BooleanOperation, Circle } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Circle-circle boolean operation 2");

const circle1 = new Circle(-20, -20, 20);
const circle2 = new Circle(20, 20, 20);

const bo = new BooleanOperation();

const description = bo.describe(circle1.toPath(), circle2.toPath());
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

    view1.add(new ViewElement(circle1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(circle2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
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

    view1.add(new ViewElement(circle1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(circle2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
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

    view1.add(new ViewElement(circle1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(circle2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}

{
    tpl.addSection("Difference reverse");
    const compound = bo.chain(bo.selectDifferenceReverse(description));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "difference reverse", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();

    view2.startResponsive(View.centerOrigin);
    view2.startInteractive();

    view1.add(new ViewElement(circle1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(circle2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
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

    view1.add(new ViewElement(circle1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(circle2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}
