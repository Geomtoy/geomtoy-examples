import { Rectangle } from "@geomtoy/core";
import { Vector2 } from "@geomtoy/util";
import { CanvasRenderer, SvgRenderer, View, ViewElement } from "@geomtoy/view";
import { codeHtml, markdownHtml, strokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("View activation mode");

tpl.addSection("Introduction");
tpl.addMarkdown(`
The word **ac-element** is the abbreviation of \`ViewElement(type ==="ViewElementType.Activation")\` 
`);
tpl.addMarkdown(`
The view supports two kind, four activation modes for activating elements:
- **numerous** or **numerousAlt**: (This requires a modifier key to do multiple activating, so it' not suitable for touch devices.)
    - Click on an inactive ac-element to activate it.
    - **numerous**: Click on an ac-element of \`activeElements\` will do nothing.<br>
      **numerousAlt**: Click on an ac-element of \`activeElements\` will deactivate all \`activeElements\` except this one, unless start dragging.
    - Click on another inactive ac-element will deactivate all \`activeElements\` and activate the another ac-element.
    - Click on a blank area will deactivate all \`activeElements\`.
    - Hold modifier key and click on an inactive ac-element will activate this ac-element and keep current \`activeElements\`.
    - Hold modifier key and click on an active ac-element will remove this from \`activeElements\`.
    - Hold modifier key and click on a blank area will deactivate all \`activeElements\`.
<br>
<br>
- **continuous** or **continuousAlt** :(This does not require extra actions to do multiple activating, so it suitable for touch devices.)
    - Click on an inactive ac-element to activate it.
    - **continuous**: Click on an ac-element of \`activeElements\` will do nothing.<br>
      **continuousAlt**: Click on an ac-element of \`activeElements\` will deactivate this ac-element but keep the rest \`activeElements\`, unless start dragging.
    - Click on another inactive ac-element will activate the another ac-element and keep current \`activeElements\`.
    - Click on a blank area will deactivate all \`activeElements\`. 
`);

const rectangle1 = new Rectangle([10, 10], [20, 20]);
const rectangle2 = new Rectangle([-2, -5], [23, 20]);
const rectangle3 = new Rectangle([-10, 0], [10, 10]);

tpl.addSection("Try");
{
    const card = tpl.addCard({ className: "col-6", aspectRatio: "2:1", rendererType: "canvas" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    view.add(new ViewElement(rectangle1, { ...strokeFill("gray") }));
    view.add(new ViewElement(rectangle2, { ...strokeFill("purple") }));
    view.add(new ViewElement(rectangle3, { ...strokeFill("purple") }));
    view.activationMode = "numerous";
    card.setTitle("numerous");
    card.setDescription("code", `view.activationMode = "numerous";`);
}
{
    const card = tpl.addCard({ className: "col-6", aspectRatio: "2:1", rendererType: "canvas" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    view.add(new ViewElement(rectangle1, { ...strokeFill("gray") }));
    view.add(new ViewElement(rectangle2, { ...strokeFill("purple") }));
    view.add(new ViewElement(rectangle3, { ...strokeFill("purple") }));
    view.activationMode = "numerousAlt";
    card.setTitle("numerousAlt");
    card.setDescription("code", `view.activationMode = "numerousAlt";`);
}

{
    const card = tpl.addCard({ className: "col-6", aspectRatio: "2:1", rendererType: "canvas" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    view.add(new ViewElement(rectangle1, { ...strokeFill("gray") }));
    view.add(new ViewElement(rectangle2, { ...strokeFill("purple") }));
    view.add(new ViewElement(rectangle3, { ...strokeFill("purple") }));
    view.activationMode = "continuous";
    card.setTitle("continuous");
    card.setDescription("code", `view.activationMode = "continuous";`);
}

{
    const card = tpl.addCard({ className: "col-6", aspectRatio: "2:1", rendererType: "canvas" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    view.add(new ViewElement(rectangle1, { ...strokeFill("gray") }));
    view.add(new ViewElement(rectangle2, { ...strokeFill("purple") }));
    view.add(new ViewElement(rectangle3, { ...strokeFill("purple") }));
    view.activationMode = "continuousAlt";
    card.setTitle("continuousAlt");
    card.setDescription("code", `view.activationMode = "continuousAlt";`);
}
