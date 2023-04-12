import { Rectangle } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement } from "@geomtoy/view";
import { strokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("View responsive and interactive");

tpl.addSection("Responsive");
tpl.addMarkdown(`
The view can automatically adjust its size on the web page, according to the size of the parent element on the web page, that is, 
its size is responsive.
\n
Geomtoy implements this function internally through \`ResizeObserver\`, so for browsers that do not support it, this function will not work. 
`);
tpl.addSubSection("API");
tpl.addCode(`
view.startResponsive(cb);
view.stopResponsive();
`);

tpl.addCode(`
/**
 * Always align the origin of the view coordinate system to the center of 
 * the \`&lt;svg&gt;\`(SVGSVGElement) or \`&lt;canvas&gt;\`(HTMLCanvasElement)
 * where the renderer is established.
 */
view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
`);

tpl.addSection("Interactive");
tpl.addMarkdown(`
A view can be interactive or not interactive. When the view is interactive, then all interactions are available.
When the view is not interactive, all interactions are disabled, and the view looks like a picture.
`);
tpl.addSubSection("API");
tpl.addCode(`
view.startInteractive();
view.stopInteractive();
`);
tpl.addSubSection("Example");

{
    const rectangle1 = new Rectangle([-10, -10], [20, 20]);
    const rectangle2 = rectangle1.clone();

    const card1 = tpl.addCard({ className: "col-6", aspectRatio: "2:1", rendererType: "canvas" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    const card2 = tpl.addCard({ className: "col-6", aspectRatio: "2:1", rendererType: "canvas" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));

    view1.add(new ViewElement(rectangle1, { ...strokeFill("brown") }));
    card1.setTitle("interactive");

    view2.add(new ViewElement(rectangle2, { ...strokeFill("brown") }));
    card2.setTitle("not interactive");
}

tpl.addMarkdown(`
The not interactive case is designed for rendering certain results. In this case you may need some pan and zoom of the view.
This can be achieved by:
`);
tpl.addCode(`
view.renderer.display.pan = [number, number]
view.renderer.display.zoom = number  
`);

{
    const rectangle = new Rectangle([-10, -10], [20, 20]);

    const card = tpl.addCard({ className: "col-12", aspectRatio: "2:1", rendererType: "canvas" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.renderer.display.pan = [-200, 0];
    view.renderer.display.zoom = 1;
    view.add(new ViewElement(rectangle, { ...strokeFill("brown") }));

    card.setTitle("not interactive with pan and zoom");
}
