import { Rectangle } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Coordinate system");

const rectangle = new Rectangle([10, 10], [20, 20]);

tpl.addCode(`
// Here is a rectangle:
const rectangle = new Rectangle([10, 10], [20, 20]);
`);

{
    const card = tpl.addCard({ title: "x-axis positive on the right, y-axis positive on the top, origin automatically centered", className: "col-12", aspectRatio: "3:1" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { xAxisPositiveOnRight: true, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();
    view.add(new ViewElement(rectangle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    card.setDescription("markdown", "This is commonly used in mathematic, a right-handed coordinate system.");
    card.appendDescription("markdown", `![](https://assets.geomtoy.com/images/positive-rotation-mathematic.png)`);
    card.appendDescription(
        "code",
        `
const view = new View({}, new CanvasRenderer(card.canvas!, {}, { xAxisPositiveOnRight: true, yAxisPositiveOnBottom: false }));
view.startResponsive(View.centerOrigin);
view.startInteractive();
view.add(new ViewElement(rectangle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    `
    );
}
{
    const card = tpl.addCard({ title: "x-axis positive on the right, y-axis positive on the bottom, origin at the left-top([0, 0])", className: "col-12", aspectRatio: "3:1" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { xAxisPositiveOnRight: true, yAxisPositiveOnBottom: true }));
    view.startResponsive();
    view.startInteractive();
    view.add(new ViewElement(rectangle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    card.setDescription("markdown", "This is commonly used in computer graphics, a left-handed coordinate system.");
    card.appendDescription("markdown", ` ![](https://assets.geomtoy.com/images/positive-rotation-computer.png)`);
    card.appendDescription(
        "code",
        `
const view = new View({}, new CanvasRenderer(card.canvas!, {}, { xAxisPositiveOnRight: true, yAxisPositiveOnBottom: true }));
view.startResponsive();
view.startInteractive();
view.add(new ViewElement(rectangle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
        `
    );
}
{
    const card = tpl.addCard({ title: "x-axis positive on the left, y-axis positive on the top, origin at [50, 50]", className: "col-12", aspectRatio: "3:1" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { xAxisPositiveOnRight: false, yAxisPositiveOnBottom: false, origin: [50, 50] }));
    view.startResponsive();
    view.startInteractive();
    view.add(new ViewElement(rectangle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    card.setDescription("markdown", "This is not commonly used, a left-handed coordinate system.");
    card.appendDescription(
        "code",
        `
const view = new View({}, new CanvasRenderer(card.canvas!, {}, { xAxisPositiveOnRight: false, yAxisPositiveOnBottom: false, origin: [50, 50] }));
view.startResponsive();
view.startInteractive();
view.add(new ViewElement(rectangle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
        `
    );
}
{
    const card = tpl.addCard({ title: "x-axis positive on the left, y-axis positive on the bottom, origin at [100, 0]", className: "col-12", aspectRatio: "3:1" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { xAxisPositiveOnRight: false, yAxisPositiveOnBottom: true, origin: [100, 0] }));
    view.startResponsive();
    view.startInteractive();
    view.add(new ViewElement(rectangle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    card.setDescription("markdown", "This is not commonly used, a right-handed coordinate system.");
    card.appendDescription(
        "code",
        `
const view = new View({}, new CanvasRenderer(card.canvas!, {}, { xAxisPositiveOnRight: false, yAxisPositiveOnBottom: false, origin: [100, 0] }));
view.startResponsive();
view.startInteractive();
view.add(new ViewElement(rectangle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
        `
    );
}

tpl.addNote(`
Since we can set the axes like this, obviously **clockwise** and **counterclockwise** don't make any sense any more.
Geomtoy does not care about the coordinate system for displaying when do geometric computing.
So there will be NO **clockwise** or **counterclockwise** anywhere, but instead **positive** and **negative**.
\n
***Positive** is the direction of rotation from the positive x-axis to the positive y-axis*.
\n
Of course you can also remember this: **positive** is **counterclockwise** in the right-handed coordinate system; **positive** is **clockwise** in the left-handed coordinate system.
`);
