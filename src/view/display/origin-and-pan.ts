import { Circle } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Origin and pan");
tpl.addMarkdown(`
The \`origin\` is used to represent the origin correspondence between the screen coordinate system and the view coordinate system, 
that is, which position/coordinates of the screen coordinate system corresponds to the origin of the view coordinate system. 
And, of course, this offset of the origin is the initial offset of the two coordinate system.
`);
tpl.addMarkdown(`
The \`pan\` is the pan of the view in the ordinary sense.
`);

const circle = new Circle([0, 0], 10);
tpl.addCode(`
// Here is a circle:
const circle = new Circle([0, 0], 10);
`);

{
    const card = tpl.addCard({ title: "origin at [0, 0] and no pan", className: "col-12", aspectRatio: "3:1" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { origin: [0, 0] }));
    view.startResponsive();
    view.startInteractive();
    view.add(new ViewElement(circle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    card.appendDescription(
        "code",
        `
const view = new View({}, new CanvasRenderer(card.canvas!, {}, { origin: [0, 0] }));
view.startResponsive();
view.startInteractive();
view.add(new ViewElement(circle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    `
    );
}
{
    const card = tpl.addCard({ title: "origin at [100, 100] and no pan", className: "col-12", aspectRatio: "3:1" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { origin: [100, 100] }));
    view.startResponsive();
    view.startInteractive();
    view.add(new ViewElement(circle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    card.appendDescription(
        "code",
        `
const view = new View({}, new CanvasRenderer(card.canvas!, {}, { origin: [100, 100] }));
view.startResponsive();
view.startInteractive();
view.add(new ViewElement(circle, { type: ViewElementType.None, ...lightStrokeFill("blue") })); 
        `
    );
}
{
    const card = tpl.addCard({ title: "origin at [0, 0] and pan [100, 100]", className: "col-12", aspectRatio: "3:1" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { origin: [0, 0], pan: [100, 100] }));
    view.startResponsive();
    view.startInteractive();
    view.add(new ViewElement(circle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    card.appendDescription(
        "code",
        `
const view = new View({}, new CanvasRenderer(card.canvas!, {}, { origin: [0, 0], pan: [100, 100] }));
view.startResponsive();
view.startInteractive();
view.add(new ViewElement(circle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
        `
    );
}
{
    const card = tpl.addCard({ title: "origin at [100, 100] and pan [100, 100]", className: "col-12", aspectRatio: "3:1" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { origin: [100, 100], pan: [100, 100] }));
    view.startResponsive();
    view.startInteractive();
    view.add(new ViewElement(circle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    card.appendDescription(
        "code",
        `
const view = new View({}, new CanvasRenderer(card.canvas!, {}, { origin: [100, 100], pan: [100, 100] }));
view.startResponsive();
view.startInteractive();
view.add(new ViewElement(circle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
        `
    );
}
tpl.addSection("Manually center the origin");
tpl.addMarkdown(`
If the view is not responsive(haven't called \`view.startResponsive()\`), you can center the origin directly by manually setting it as below:
`);
tpl.addCode(`
renderer.display.origin = [renderer.display.width / 2, renderer.display.height / 2];
`);

tpl.addSection("Automatically center the origin");
tpl.addMarkdown(`
If the view is to be responsive, you can center the origin by passing a responsive callback to \`view.startResponsive()\`:
`);
tpl.addCode(`
view.startResponsive((width, height) => {
    const renderer = this.renderer!;
    renderer.display.origin = [renderer.display.width / 2, renderer.display.height / 2];
});
`);
tpl.addMarkdown(`
Since this is a common requirement, there is already an static property of the view: \`View.centerOrigin\` that provides this callback function.
`);
tpl.addCode(`
view.startResponsive(View.centerOrigin);
`);
tpl.addMarkdown(`
See more info [Coordinate system](view/display/coordinate-system.html)
`);
