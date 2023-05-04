import { Rectangle } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement } from "@geomtoy/view";
import { strokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("View interactive");

tpl.addMarkdown(`
A view can be interactive or non-interactive. When the view is interactive, then all interactions are available.
When the view is non-interactive, all interactions are disabled, and the view looks like a picture.
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
    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();

    const card2 = tpl.addCard({ className: "col-6", aspectRatio: "2:1", rendererType: "canvas" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view2.startResponsive(View.centerOrigin);

    view1.add(new ViewElement(rectangle1, { ...strokeFill("brown") }));
    card1.setTitle("interactive");

    view2.add(new ViewElement(rectangle2, { ...strokeFill("brown") }));
    card2.setTitle("non-interactive");
}

tpl.addMarkdown(`
The non-interactive case is designed for rendering certain results. In this case you may need some pan and zoom of the view.
This can be achieved by:
`);
tpl.addCode(`
view.renderer!.display.pan = [number, number];
view.renderer!.display.zoom = number;
`);

{
    const rectangle = new Rectangle([-10, -10], [20, 20]);

    const card = tpl.addCard({ className: "col-12", aspectRatio: "2:1", rendererType: "canvas" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.renderer!.display.pan = [200, 100];
    view.renderer!.display.zoom = 1;
    view.add(new ViewElement(rectangle, { ...strokeFill("brown") }));
    card.setTitle("non-interactive with pan and zoom");
}
tpl.addMarkdown(`
Of course, you can also set other display settings, specific reference [Display](view/display/about.html).
`);
