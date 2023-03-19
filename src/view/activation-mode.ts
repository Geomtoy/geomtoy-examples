import { Rectangle } from "@geomtoy/core";
import { Vector2 } from "@geomtoy/util";
import { CanvasRenderer, SvgRenderer, View, ViewElement } from "@geomtoy/view";
import { codeHtml, markdownHtml, strokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("View activation mode");

tpl.addMarkdown(`
The view has two activation mode for activating elements:
- **"continuous"**: 
The main feature of this activation mode is that you can click an view element to activate it, click it again to deactivate it, 
or click a blank area to deactivate all active elements, and if there is no above-mentioned deactivation, the active element remains active. 
This activation mode is more suitable on the touch devices.
- **"numerous"**
The main feature of this activation mode is that without holding down the modifier key, clicking on any element will deactivate all current active elements then 
activate it, and when the modifier key is held down, multiple activations will be performed.
This activation mode is basically the standard on the PC.
`);

const rectangle = new Rectangle([10, 10], [20, 20]);
const rectangle1 = new Rectangle([-2, -5], [23, 20]);

{
    const card = tpl.addCard({ className: "col-12", aspectRatio: "1:1", rendererType: "canvas" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    view.add(new ViewElement(rectangle, { ...strokeFill("gray") }));
    view.add(new ViewElement(rectangle1, { ...strokeFill("purple") }));
    view.activeMode = "numerous";
    // view.startLasso();
}
