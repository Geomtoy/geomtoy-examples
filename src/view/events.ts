import { Point } from "@geomtoy/core";
import { CanvasRenderer, SvgRenderer, View, ViewElement, ViewElementEventType, ViewElementInteractMode } from "@geomtoy/view";
import color from "../assets/scripts/color";
import { strokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("View element events");

tpl.addMarkdown(`
To simplify \`View\` handling, \`ViewElement\` only supports the following transient events:
- \`ViewElementEventType.DragStart\` = "dragStart", 
- \`ViewElementEventType.DragEnd\` = "dragEnd", 
- \`ViewElementEventType.Activate\` = "activate",
- \`ViewElementEventType.Deactivate\` = "deactivate",
- \`ViewElementEventType.Click\` = "click",
- \`ViewElementEventType.Hover\` = "hover",
- \`ViewElementEventType.Unhover\` = "unhover"

For \`ViewElement\` with  interactMode = \`ViewElementInteractMode.None\`, all events above will not be triggered because it is not interactable.

For \`ViewElement\` with  interactMode = \`ViewElementInteractMode.Activation\`, **dragStart**, **dragEnd**, **activate**, **deactivate**, **hover**, **unhover** will be triggered when it should.

For \`ViewElement\` with  interactMode = \`ViewElementInteractMode.Operation\`, **dragStart**, **dragEnd**, **click**, **hover**, **unhover** will be triggered when it should.


`);

function activationEvents(ve: ViewElement) {
    ve.on(ViewElementEventType.Activate, function (e) {
        console.log("activationActivate");
    })
        .on(ViewElementEventType.Deactivate, function (e) {
            console.log("activationDeactivate");
        })
        .on(ViewElementEventType.DragEnd, function (e) {
            console.log("activationDragEnd");
        })
        .on(ViewElementEventType.DragStart, function (e) {
            console.log("activationDragStart");
        })
        .on(ViewElementEventType.Hover, function (e) {
            console.log("activationHover");
        })
        .on(ViewElementEventType.Unhover, function (e) {
            console.log("activationUnhover");
        });
}
function operationEvents(ve: ViewElement) {
    ve.on(ViewElementEventType.Click, function (e) {
        console.log("operationClick");
    })
        .on(ViewElementEventType.DragEnd, function (e) {
            console.log("operationDragEnd");
        })
        .on(ViewElementEventType.DragStart, function (e) {
            console.log("operationDragStart");
        })
        .on(ViewElementEventType.Hover, function (e) {
            console.log("operationHover");
        })
        .on(ViewElementEventType.Unhover, function (e) {
            console.log("operationUnhover");
        });
}

tpl.addMarkdown(`
Open the browser devtool and see the console. 

<span style="color:${color("brown")};">&#9635;</span> interactMode: \`ViewElementInteractMode.Activation\`<br>
<span style="color:${color("gray")};">&#9635;</span> interactMode: \`ViewElementInteractMode.Operation\`<br>
<span style="color:${color("black")};">&#9635;</span> interactMode: \`ViewElementInteractMode.None\` 
`);
{
    const card = tpl.addCard({ aspectRatio: "2:1", rendererType: "svg", className: "col-12" });
    const view = new View({}, new SvgRenderer(card.svg!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const ve1 = new ViewElement(Point.random([-100, -100, 200, 200]), { ...strokeFill("brown") });
    const ve2 = new ViewElement(Point.random([-100, -100, 200, 200]), { ...strokeFill("brown") });
    const ve3 = new ViewElement(Point.random([-100, -100, 200, 200]), { ...strokeFill("brown") });
    const ve4 = new ViewElement(Point.random([-100, -100, 200, 200]), { interactMode: ViewElementInteractMode.Operation, ...strokeFill("gray") });
    const ve5 = new ViewElement(Point.random([-100, -100, 200, 200]), { interactMode: ViewElementInteractMode.Operation, ...strokeFill("gray") });
    const ve6 = new ViewElement(Point.random([-100, -100, 200, 200]), { interactMode: ViewElementInteractMode.Operation, ...strokeFill("gray") });
    const ve7 = new ViewElement(Point.origin(), { interactMode: ViewElementInteractMode.None, ...strokeFill("black") });

    view.add(ve1, ve2, ve3, ve4, ve5, ve6, ve7);
    card.setTitle("View element events on SVG renderer");
    activationEvents(ve1);
    activationEvents(ve2);
    activationEvents(ve3);
    operationEvents(ve4);
    operationEvents(ve5);
    operationEvents(ve6);
}
{
    const card = tpl.addCard({ aspectRatio: "2:1", rendererType: "canvas", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const ve1 = new ViewElement(Point.random([-100, -100, 200, 200]), { ...strokeFill("brown") });
    const ve2 = new ViewElement(Point.random([-100, -100, 200, 200]), { ...strokeFill("brown") });
    const ve3 = new ViewElement(Point.random([-100, -100, 200, 200]), { ...strokeFill("brown") });
    const ve4 = new ViewElement(Point.random([-100, -100, 200, 200]), { interactMode: ViewElementInteractMode.Operation, ...strokeFill("gray") });
    const ve5 = new ViewElement(Point.random([-100, -100, 200, 200]), { interactMode: ViewElementInteractMode.Operation, ...strokeFill("gray") });
    const ve6 = new ViewElement(Point.random([-100, -100, 200, 200]), { interactMode: ViewElementInteractMode.Operation, ...strokeFill("gray") });
    const ve7 = new ViewElement(Point.origin(), { interactMode: ViewElementInteractMode.None, ...strokeFill("black") });

    view.add(ve1, ve2, ve3, ve4, ve5, ve6, ve7);
    card.setTitle("View element events on Canvas renderer");
    activationEvents(ve1);
    activationEvents(ve2);
    activationEvents(ve3);
    operationEvents(ve4);
    operationEvents(ve5);
    operationEvents(ve6);
}
