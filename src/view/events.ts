import { Point } from "@geomtoy/core";
import { CanvasRenderer, SVGRenderer, View, ViewElement, ViewElementEventType, ViewElementType } from "@geomtoy/view";
import color from "../assets/scripts/color";
import { strokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("View scope events and view element scope events");

tpl.addMarkdown(`
There are two scopes of event handling, one for the view scope and one for the view element scope.
\n
The view scope events are emitted for all interactions on the view, regardless of whether the interaction is with a view element.
The view element scope, of course, responds to the interaction with a view element.
\n
Both \`View\` and \`ViewElement\` provide \`on\` API to attach event callback.
An event callback looks like this:
`);
tpl.addCode(`
(this: this, e: ViewEventObject) => void
`);

tpl.addMarkdown(`
In the view's event callback, \`this\` points to the view itself.
In the view element's event callback, \`this\` points to the view element itself.
\n
And \`ViewEventObject\` looks like this:
`);

tpl.addCode(`
export interface ViewEventObject {
    isTouch: boolean;  // Indicates whether the interaction is currently on the touch device.
    viewportX: number; // The x coordinate where the event occurred, in the screen coordinate system.
    viewportY: number; // The y coordinate where the event occurred, in the screen coordinate system.
    x: number; // The x coordinate where the event occurred, in the view coordinate system.
    y: number; // The y coordinate where the event occurred, in the view coordinate system.
    currentElement?: ViewElement | null; // see below
}
`);
tpl.addMarkdown(`
If the event is a view scope event, then the \`currentElement\` is always \`undefined\` because we don't provide.
If the event is a view element scope event, then the \`currentElement\` is typed \`ViewElement | null\`. **Note**: The \`currentElement\` 
is not necessarily the view element itself, and may not even exist. It is only used to indicate whether the interaction involves a view element, 
and if so, which one is it.
`);

tpl.addNote(`
The event callbacks will be invoked according to the order in which they were added, without prioritization.
`);

tpl.addSection("View scope event types");

tpl.addCode(`
view.on(eventType: ViewEventType, callback: (this: this, e: ViewEventObject) => void)

export const enum ViewEventType {
    PointerEnter = "pointerEnter",
    PointerLeave = "pointerLeave",
    PointerMove = "pointerMove",
    PointerDown = "pointerDown",
    PointerUp = "pointerUp",
    PointerCancel = "pointerCancel",
    Wheel = "wheel",

    DragStart = "dragStart",
    Dragging = "dragging",
    DragEnd = "dragEnd",
    PanStart = "panStart",
    Panning = "panning",
    PanEnd = "panEnd",
    ZoomStart = "zoomStart",
    Zooming = "zooming",
    ZoomEnd = "zoomEnd",

    Activate = "activate",
    Deactivate = "deactivate",
    Click = "click",
    Hover = "hover",
    Unhover = "unhover"
}
`);
tpl.addSection("View element scope event types");
tpl.addCode(`
viewElement.on(eventType: ViewElementEventType, callback: (this: this, e: ViewEventObject) => void)  

export const enum ViewElementEventType {
    DragStart = "dragStart",
    DragEnd = "dragEnd",
    Activate = "activate",
    Deactivate = "deactivate",
    Click = "click",
    Hover = "hover",
    Unhover = "unhover"
}
`);

tpl.addMarkdown(`
In order to simplify the event handling of view elements, we only provide the above transient events.
You must be wondering, where is **dragging**. When you drag a view element to move its shape, the \`Shape.prototype.move\` method is invoked, 
so you should follow the event system in Geomtoy core.
`);

tpl.addMarkdown(`
You should also note that not all view elements have all the events:
- For \`ViewElement\` with type \`ViewElementType.None\`, all events above will **NOT** be emitted because it is not interactable.
- For \`ViewElement\` with type \`ViewElementType.Operation\`, **dragStart**, **dragEnd**, **click**, **hover**, **unhover** will be emitted when it should.
- For \`ViewElement\` with type \`ViewElementType.Activation\`, all events above will be emitted when it should.
`);

tpl.addSection("Example");

function showType(type: ViewElementType) {
    return type === 0 ? "None" : type === 1 ? "Activation" : type === 2 ? "Operation" : "";
}

function attachViewElementEvents(ve: ViewElement) {
    ve.on(ViewElementEventType.DragStart, function (e) {
        console.log(showType(this.type), "dragStart");
    })
        .on(ViewElementEventType.DragEnd, function (e) {
            console.log(showType(this.type), "dragEnd");
        })
        .on(ViewElementEventType.Activate, function (e) {
            console.log(showType(this.type), "activate");
        })
        .on(ViewElementEventType.Deactivate, function (e) {
            console.log(showType(this.type), "deactivate");
        })

        .on(ViewElementEventType.Click, function (e) {
            console.log(showType(this.type), "click");
        })
        .on(ViewElementEventType.Hover, function (e) {
            console.log(showType(this.type), "hover");
        })
        .on(ViewElementEventType.Unhover, function (e) {
            console.log(showType(this.type), "unhover");
        });
}

tpl.addMarkdown(`
Open the browser devtool and see the console. 

<span style="color:${color("brown")};">&#9635;</span> Type \`ViewElementType.Activation\`<br>
<span style="color:${color("gray")};">&#9635;</span> Type \`ViewElementType.Operation\`<br>
<span style="color:${color("black")};">&#9635;</span> Type \`ViewElementType.None\` 
`);
{
    const card = tpl.addCard({ aspectRatio: "2:1", rendererType: "svg", className: "col-12" });
    const view = new View({}, new SVGRenderer(card.svg!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const ve1 = new ViewElement(Point.random([-100, -100, 200, 200]), { ...strokeFill("brown") });
    const ve2 = new ViewElement(Point.random([-100, -100, 200, 200]), { ...strokeFill("brown") });
    const ve3 = new ViewElement(Point.random([-100, -100, 200, 200]), { ...strokeFill("brown") });
    const ve4 = new ViewElement(Point.random([-100, -100, 200, 200]), { type: ViewElementType.Operation, ...strokeFill("gray") });
    const ve5 = new ViewElement(Point.random([-100, -100, 200, 200]), { type: ViewElementType.Operation, ...strokeFill("gray") });
    const ve6 = new ViewElement(Point.random([-100, -100, 200, 200]), { type: ViewElementType.Operation, ...strokeFill("gray") });
    const ve7 = new ViewElement(Point.origin(), { type: ViewElementType.None, ...strokeFill("black") });

    view.add(ve1, ve2, ve3, ve4, ve5, ve6, ve7);
    card.setTitle("View element events on SVG renderer");
    attachViewElementEvents(ve1);
    attachViewElementEvents(ve2);
    attachViewElementEvents(ve3);
    attachViewElementEvents(ve4);
    attachViewElementEvents(ve5);
    attachViewElementEvents(ve6);
    attachViewElementEvents(ve7);
}
{
    const card = tpl.addCard({ aspectRatio: "2:1", rendererType: "canvas", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const ve1 = new ViewElement(Point.random([-100, -100, 200, 200]), { ...strokeFill("brown") });
    const ve2 = new ViewElement(Point.random([-100, -100, 200, 200]), { ...strokeFill("brown") });
    const ve3 = new ViewElement(Point.random([-100, -100, 200, 200]), { ...strokeFill("brown") });
    const ve4 = new ViewElement(Point.random([-100, -100, 200, 200]), { type: ViewElementType.Operation, ...strokeFill("gray") });
    const ve5 = new ViewElement(Point.random([-100, -100, 200, 200]), { type: ViewElementType.Operation, ...strokeFill("gray") });
    const ve6 = new ViewElement(Point.random([-100, -100, 200, 200]), { type: ViewElementType.Operation, ...strokeFill("gray") });
    const ve7 = new ViewElement(Point.origin(), { type: ViewElementType.None, ...strokeFill("black") });

    view.add(ve1, ve2, ve3, ve4, ve5, ve6, ve7);
    card.setTitle("View element events on Canvas renderer");
    attachViewElementEvents(ve1);
    attachViewElementEvents(ve2);
    attachViewElementEvents(ve3);
    attachViewElementEvents(ve4);
    attachViewElementEvents(ve5);
    attachViewElementEvents(ve6);
    attachViewElementEvents(ve7);
}
