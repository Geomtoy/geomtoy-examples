import { Point } from "@geomtoy/core";
import { CanvasRenderer, SVGRenderer, View, ViewElement, ViewElementEventType, ViewElementType } from "@geomtoy/view";
import color from "../assets/scripts/color";
import { strokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("View");
tpl.addMarkdown(`
A view is the logical interaction layer, built on a renderer(the logical rendering layer).
it doesn't care how to render (so we can use the same API to support SVG and Canvas), 
but only focuses on interactions, and manages the sub views and view elements. 
`);

tpl.addSection("APIs");
tpl.addSubSection(`Renderer related`);
tpl.addCode(`
// the renderer readonly getter
const renderer = view.renderer;
// switch the renderer
view.use(renderer);
// cancel the renderer
view.halt(); 
`);

tpl.addSubSection(`View events`);
tpl.addCode(`
// add event callback
view.on(...);
// remove event callback
view.off(...);
// remove all event callbacks
view.clear(...);
`);
tpl.addMarkdown(`See more info about [View scope events and view element scope events](view/events.html)`);

tpl.addSubSection(`Lasso`);
tpl.addCode(`
// start lasso
view.startLasso();
// stop lasso
view.stopLasso();
`);

tpl.addSubSection(`View interactive`);
tpl.addCode(`
view.startInteractive();
view.stopInteractive();
`);
tpl.addMarkdown(`See more info about [View interactive](view/view-interactive.html)`);

tpl.addSubSection(`View responsive`);
tpl.addCode(`
view.startResponsive(...);
view.stopResponsive();
`);
tpl.addMarkdown(`See more info about [View responsive](view/view-responsive.html)`);

tpl.addSubSection(`Setting pan and zoom`);
tpl.addCode(
    `
view.zoom(keepViewCenter: boolean);
view.pan(panX: number, panY: number);
`,
    "ts"
);

tpl.addSubSection(`Sub-views and view elements management`);
tpl.addCode(
    `
// add a view element
view.add(ve: ViewElement);
// remove a view element
view.remove(ve: ViewElement);
// empty all view elements
view.empty();
// query if the view element is already added
view.has(ve: ViewElement);
// list all view elements added to the view
view.elements: ViewElement[];
 

// add a sub-view
view.addSubView(sv: SubView);
// remove a sub-view
view.removeSubView(sv: SubView);
// empty all sub-views
view.emptySubView();
// query if the sub-view is already added
view.hasSubView(sv: SubView);
// list all sub-views added to the view
view.subViews: SubView[];


// empty all view elements and sub-views
view.emptyAll();
`,
    "ts"
);

tpl.addSubSection(`Activate/deactivate the activation type view element`);
tpl.addCode(
    `
view.activate(ve: ViewElement);
view.deactivate(ve: ViewElement);
`,
    "ts"
);

tpl.addSubSection(`Operate the operation type view element`);
tpl.addCode(
    `
view.operate(ve: ViewElement)
`,
    "ts"
);

tpl.addSubSection(`The z-index related`);
tpl.addCode(
    `
// get the max z-index of view element type \`type\`
const zMax = view.maxZIndex(type: ViewElementType);
// get the min z-index of view element type \`type\`
const zMin = view.minZIndex(type: ViewElementType);


view.hoverForemost: boolean;
view.operativeForemost: boolean;
view.activeForemost: boolean;

view.forward(ve: ViewElement);
view.foremost(ve: ViewElement);
view.backward(ve: ViewElement);
view.backmost(ve: ViewElement);
 
`,
    "ts"
);

tpl.addNote(`
**Automatic layering of view elements**
\n
\`zIndex\` is only works for view elements of the same type.
And the view internally put the different type of view elements into different layer ordered like \`Operation -> Activation -> None\`.
So the operation type view elements are always above the activation type view elements, and 
the activation view elements are always above the none type view elements.
This is the logic of the view's automatic layering.
`);

tpl.addSubSection(`Request render`);
tpl.addCode(`
view.requestRender();
`);

tpl.addSubSection(`Activation mode`);
tpl.addCode(
    `
view.activationMode: "numerous" | "numerousAlt" | "continuous" | "continuousAlt" 
// Modifier keys in numerous activation mode
view.modifierKey: "Alt" | "Shift" | "Control" 
`,
    "ts"
);
tpl.addMarkdown(`See more info about [View activation mode](view/view-activation-mode.html)`);

tpl.addSubSection(`Other properties and options`);
tpl.addCode(
    `
// min zoom
view.minZoom: number;
// max zoom
view.maxZoom: number;
// inverse the mouse zoom in/zoom out
view.inverseWheelZoom: boolean;
// threshold for determining that dragging has started
view.dragThrottleDistance: number;
// the zoom change rate of mouse wheel rolling
view.wheelZoomDeltaRate: number;
// the cursor of the view
view.cursor;
`,
    "ts"
);

tpl.addSubSection(`Interaction status`);
tpl.addCode(
    `   
// returns the view element which is being hovered in the view
view.hoverElement
// returns all view elements that are currently active.
view.activeElements
// returns the view element which is being activated in the view
view.currentActivationElement
// returns the view element which is being operated in the view
view.currentOperationElement
// returns the dragging currently in progress is the dragging of activation type view elements
view.isActivationDrag 
`,
    "ts"
);
