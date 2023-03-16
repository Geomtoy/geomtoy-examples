import Geomtoy, { type EventObject, type Text, Point, type Arc, Ellipse, Dynamic, Transformation, Arbitrary } from "@geomtoy/core";
import { Maths, Polynomial, Utility } from "@geomtoy/util";
import { View, ViewElement, CanvasRenderer, SvgRenderer, ViewElementInteractMode } from "@geomtoy/view";
import color from "../../assets/color";
import { strokeFill, strokeOnly } from "../../assets/common";
// import { mathFont, hoverStyle, activeStyle, interactableStyles } from "../../assets/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Ellipse transformation");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 1, zoom: 1, yAxisPositiveOnBottom: true }));
    view.startResponsive(() => {});
    view.startInteractive();

    const restParams = new (new Dynamic().create({ radiusX: 5, radiusY: 10, rotation: Maths.PI / 4 }))();

    const centerPoint = new Point(100, 100);
    const ellipse = new Ellipse().bind([centerPoint, "any"], [restParams, "any"], function (e1, e2) {
        const { radiusX, radiusY, rotation } = e2.target;
        this.copyFrom(new Ellipse(e1.target, radiusX, radiusY, rotation));
    });
    const transformation = new Transformation();
    transformation
        .addTranslate(100, 100)
        .addScale(2, 2)
        .addRotate(Maths.PI / 4)
        .addSkew(0, Maths.PI / 6)
        .addTranslate(200, 0)
        .addRotate(-Maths.PI / 2);

    const arbitrary = new Arbitrary().bind([ellipse, "any"], [transformation, "any"], function (e1, e2) {
        this.copyFrom(e1.target.apply(e2.target));
    });
    console.log(arbitrary);

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const restParamsFolder = pane.addFolder({ title: "Rest parameters" });
    restParamsFolder.addInput(restParams, "radiusX", { min: 0 });
    restParamsFolder.addInput(restParams, "radiusY", { min: 0 });
    restParamsFolder.addInput(restParams, "rotation");
    // #endregion

    view.add(new ViewElement(centerPoint, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") }));
    view.add(new ViewElement(ellipse, { interactMode: ViewElementInteractMode.Activation, ...strokeOnly("brown") }));
    view.add(new ViewElement(arbitrary, { interactMode: ViewElementInteractMode.Activation, ...strokeOnly("red") }));
}
