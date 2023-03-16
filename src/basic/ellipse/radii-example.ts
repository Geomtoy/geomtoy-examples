import Geomtoy, { type EventObject, type Text, Point, type Arc, Ellipse, Dynamic, Circle } from "@geomtoy/core";
import { Maths, Polynomial, Utility } from "@geomtoy/util";
import { View, ViewElement, CanvasRenderer, SvgRenderer, ViewElementInteractMode } from "@geomtoy/view";
import color from "../../assets/scripts/color";
import { dashedThinStroke, strokeFill, strokeOnly } from "../../assets/scripts/common";
// import { mathFont, hoverStyle, activeStyle, interactableStyles } from "../../assets/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Ellipse radiusX and radiusY explanation");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const centerPoint = Point.origin();
    const restParams = new (new Dynamic().create({
        radiusX: 20,
        radiusY: 10
    }))();

    const ellipse = new Ellipse().bind([centerPoint, "any"], [restParams, "any"], function (e1, e2) {
        const { radiusX, radiusY } = e2.target;
        this.copyFrom(new Ellipse(e1.target, radiusX, radiusY));
    });
    const circle1 = new Circle().bind([centerPoint, "any"], [restParams, "radiusX"], function (e1, e2) {
        const { radiusX } = e2.target;
        this.copyFrom(new Circle(e1.target, radiusX));
    });

    const circle2 = new Circle().bind([centerPoint, "any"], [restParams, "radiusY"], function (e1, e2) {
        const { radiusY } = e2.target;
        this.copyFrom(new Circle(e1.target, radiusY));
    });

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const restParamsFolder = pane.addFolder({ title: "Rest parameters" });
    restParamsFolder.addInput(restParams, "radiusX", { min: 0 });
    restParamsFolder.addInput(restParams, "radiusY", { min: 0 });
    // #endregion
    view.add(new ViewElement(circle1, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("red") }));
    view.add(new ViewElement(circle2, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("blue") }));
    view.add(new ViewElement(centerPoint, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") }));
    view.add(new ViewElement(ellipse, { interactMode: ViewElementInteractMode.None, ...strokeFill("brown") }));
}
