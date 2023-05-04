import { Circle } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Density and zoom");
tpl.addMarkdown(`
The \`density\` is like a value that corrects the initial scale of zoom(when \`zoom\` is 1). You can also comprehend it as we have 
increased or decreased the pixel density in advance, note that this is 
**NOT** \`Window.devicePixelRatio\`, but the pre-scale processing.
It can make very small shape display normally when zoom is 1, and can also make very large shape see all of them when zoom is 1.
But unfortunately, for better display, density can only be set to the power of 10.
`);
tpl.addMarkdown(`
The \`zoom\` is the zoom of the view in the ordinary sense.
`);

const circle = new Circle([0, 0], 10);
tpl.addCode(`
// Here is a circle:
const circle = new Circle([0, 0], 10);
`);

{
    const card = tpl.addCard({ title: "density 10 and zoom 1", className: "col-12", aspectRatio: "3:1" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1 }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();
    view.add(new ViewElement(circle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    card.setDescription("markdown", "It actually has a radius of 100(px) on you screen.");
    card.appendDescription(
        "code",
        `
const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1 }));
view.startResponsive(View.centerOrigin);
view.startInteractive();
view.add(new ViewElement(circle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    `
    );
}
{
    const card = tpl.addCard({ title: "density 1 and zoom 1", className: "col-12", aspectRatio: "3:1" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 1, zoom: 1 }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();
    view.add(new ViewElement(circle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    card.setDescription("markdown", "It looks like what it should be.");
    card.appendDescription(
        "code",
        `
const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 1, zoom: 1  }));
view.startResponsive(() => {});
view.startInteractive();
view.add(new ViewElement(circle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
        `
    );
}
{
    const card = tpl.addCard({ title: "density 10 and zoom 0.1", className: "col-12", aspectRatio: "3:1" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1 }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();
    view.add(new ViewElement(circle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    card.setDescription("markdown", "The density and zoom cancel each other out. It still looks like what it should be.");
    card.appendDescription(
        "code",
        `
const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1 }));
view.startResponsive(View.centerOrigin);
view.startInteractive();
view.add(new ViewElement(circle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
        `
    );
}
{
    const card = tpl.addCard({ title: "density 1 and zoom 0.1", className: "col-12", aspectRatio: "3:1" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 1, zoom: 0.1 }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();
    view.add(new ViewElement(circle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    card.setDescription("markdown", "Oops!");
    card.appendDescription(
        "code",
        `
const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 1, zoom: 0.1 }));
view.startResponsive(View.centerOrigin);
view.startInteractive();
view.add(new ViewElement(circle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
        `
    );
}
