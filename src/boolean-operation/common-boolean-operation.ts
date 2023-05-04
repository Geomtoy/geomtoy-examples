import { BooleanOperation, Rectangle } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Common boolean operation");

const rectangle1 = new Rectangle(-30, -20, 40, 40).toPolygon();
const rectangle2 = new Rectangle(0, 0, 30, 30).toPolygon();
const bo = new BooleanOperation();

tpl.addSection("Union");
tpl.addMarkdown(`
Union boolean operation is defined as \`A or B\`, to get the total filling region belongs to \`A\` or belongs to \`B\`.
`);
{
    const compound = bo.union(rectangle1, rectangle2);

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "union", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();
    view2.startResponsive(View.centerOrigin);
    view2.startInteractive();
    card2.appendDescription(
        "code",
        `
const compound = bo.union(rectangle1, rectangle2);
    `
    );
    view1.add(new ViewElement(rectangle1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(rectangle2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}

tpl.addSection("Intersection");
tpl.addMarkdown(`
Intersection boolean operation is defined as \`A and B\`, to get the common/overlapped/coincident filling region belongs to \`A\` and also belongs to \`B\`.
`);
{
    const compound = bo.intersection(rectangle1, rectangle2);

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "intersection", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();
    view2.startResponsive(View.centerOrigin);
    view2.startInteractive();
    card2.appendDescription(
        "code",
        `
const compound = bo.intersection(rectangle1, rectangle2);
    `
    );
    view1.add(new ViewElement(rectangle1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(rectangle2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}

tpl.addSection("Difference");
tpl.addMarkdown(`
Difference boolean operation is defined as \`A not B\`, to get the filling region belongs to \`A\` but not belongs to \`B\`.
`);
{
    const compound = bo.difference(rectangle1, rectangle2);

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "difference", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();
    view2.startResponsive(View.centerOrigin);
    view2.startInteractive();
    card2.appendDescription(
        "code",
        `
const compound = bo.difference(rectangle1, rectangle2);
    `
    );
    view1.add(new ViewElement(rectangle1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(rectangle2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}

tpl.addSection("Difference reverse");
tpl.addMarkdown(`
Difference reverse boolean operation is defined as \`B not A\`, to get the filling region belongs to \`B\` but not belongs to \`A\`.
`);
{
    const compound = bo.differenceReverse(rectangle1, rectangle2);

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "difference reverse", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();
    view2.startResponsive(View.centerOrigin);
    view2.startInteractive();
    card2.appendDescription(
        "code",
        `
const compound = bo.differenceReverse(rectangle1, rectangle2);
    `
    );
    view1.add(new ViewElement(rectangle1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(rectangle2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}

tpl.addSection("Exclusion");
tpl.addMarkdown(`
Exclusion boolean operation is defined as \`A xor(exclusive or) B\`, to get the filling region belongs to \`A\` or belongs to \`B\` but excluding
the filling region that belongs to \`A\` and also belongs to \`B\`.
`);
{
    const compound = bo.exclusion(rectangle1, rectangle2);

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "exclusion", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();
    view2.startResponsive(View.centerOrigin);
    view2.startInteractive();
    card2.appendDescription(
        "code",
        `
const compound = bo.exclusion(rectangle1, rectangle2);
    `
    );
    view1.add(new ViewElement(rectangle1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(rectangle2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}
