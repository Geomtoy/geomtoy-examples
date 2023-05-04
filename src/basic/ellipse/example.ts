import Geomtoy, { type EventObject, type Text, Point, type Arc, Ellipse, Dynamic, Circle } from "@geomtoy/core";
import { Maths, Polynomial, Utility } from "@geomtoy/util";
import { View, ViewElement, CanvasRenderer, SVGRenderer, ViewElementType } from "@geomtoy/view";
import color from "../../assets/scripts/color";
import { lightStrokeFill } from "../../assets/scripts/common";
// import { mathFont, hoverStyle, activeStyle, interactableStyles } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Ellipse radii explanation");

{
    const card = tpl.addCard({
        aspectRatio: "3:1",
        className: "col-12",
        withPane: true
    });

    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();
    const center = new Point(0, 0);

    const restParams = new (new Dynamic().create({
        radiusX: 10,
        radiusY: 20,
        on: "1"
    }))();

    const ellipse = new Ellipse().bind([center, "any"], [restParams, "any"], function (e1, e2) {
        const { radiusX, radiusY } = e2.target;
        this.copyFrom(new Ellipse(e1.target, radiusX, radiusY));
    });
    const circle1 = new Circle().bind([center, "any"], [restParams, "radiusX"], function (e1, e2) {
        const { radiusX } = e2.target;
        this.copyFrom(new Circle(e1.target, radiusX));
    });
    const circle2 = new Circle().bind([center, "any"], [restParams, "radiusY"], function (e1, e2) {
        const { radiusY } = e2.target;
        this.copyFrom(new Circle(e1.target, radiusY));
    });

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Ellipse", container: card.pane! });
    const restParamsFolder = pane.addFolder({ title: "radii" });
    restParamsFolder.addInput(restParams, "radiusX");
    restParamsFolder.addInput(restParams, "radiusY");
    // #endregion

    view.add(new ViewElement(center, { ...lightStrokeFill("green") }));
    view.add(new ViewElement(circle1, { type: ViewElementType.None, ...lightStrokeFill("lime") }));
    view.add(new ViewElement(circle2, { type: ViewElementType.None, ...lightStrokeFill("green") }));
    view.add(new ViewElement(ellipse, { type: ViewElementType.None, ...lightStrokeFill("green") }));
}
