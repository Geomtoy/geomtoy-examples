import { CanvasRenderer, View } from "@geomtoy/view";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("View responsive");

tpl.addMarkdown(` 
A view can have its viewport (the renderer's container) automatically resize itself according to the size of its parent element, i.e. the viewport of the view is responsive.
\n
Geomtoy implements this functionality internally through \`ResizeObserver\`, so it won't work for browsers that don't support it.
`);
tpl.addSubSection("API");
tpl.addCode(`
view.startResponsive(callback?: (width: number, height: number) => void) 
view.stopResponsive();
`);
tpl.addMarkdown(` 
Class \`View\` provides a static function property \`View.centerOrigin\`, that always keeps the origin centered.
`);
tpl.addCode(`
/**
 * Always keep the origin of the view coordinate system to the center of renderer's container.
 */
view.startResponsive(View.centerOrigin);
`);

tpl.addSection("Example");
const card1 = tpl.addCard({ className: "col-6", aspectRatio: "2:1", rendererType: "canvas" });
const view1 = new View({}, new CanvasRenderer(card1.canvas!));
view1.requestRender();
card1.setDescription(
    "code",
    `
const view1 = new View({}, new CanvasRenderer(card1.canvas!));
`
);

const card2 = tpl.addCard({ className: "col-6", aspectRatio: "2:1", rendererType: "canvas" });
const view2 = new View({}, new CanvasRenderer(card2.canvas!));
view2.startResponsive(View.centerOrigin);
card2.setDescription(
    "code",
    `
const view2 = new View({}, new CanvasRenderer(card2.canvas!));
view2.startResponsive(View.centerOrigin);
`
);
