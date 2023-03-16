import { Arbitrary, Circle, Dynamic, Geomtoy, Inversion, Point } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, strokeOnly, strokeFill, thinStrokeOnly } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Inversion: inverse of circle");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    const centerPoint = new Point([0, 0]);
    const radiusParam = new (new Dynamic().create({
        radius: 10
    }))();
    const circle = new Circle().bind([centerPoint, "any"], [radiusParam, "any"], function (e1, e2) {
        this.copyFrom(new Circle(e1.target, e2.target.radius));
    });

    const inversionCenterPoint = new Point([10, 0]);
    const inversionPowerParam = new (new Dynamic().create({
        power: 100
    }))();

    const inversion = new Inversion().bind([inversionCenterPoint, "any"], [inversionPowerParam, "any"], function (e1, e2) {
        this.centerPoint = e1.target;
        this.power = e2.target.power;
    });

    const circleInverse = new Arbitrary().bind([circle, "any"], [inversion, "any"], function (e1, e2) {
        this.copyFrom(e2.target.invertCircle(e1.target));
    });

    card.setDescription(
        "code",
        `
    const centerPoint = new Point([2, 10]);
    const radiusParam = new (new Dynamic().create({
        radius: 10
    }))();
    const circle = new Circle().bind([centerPoint, "any"], [radiusParam, "any"], function (e1, e2) {
        this.copyFrom(new Circle(e1.target, e2.target.radius));
    });

    const inversionCenterPoint = new Point([0, 0]);
    const inversionPowerParam = new (new Dynamic().create({
        power: 100
    }))();

    const inversion = new Inversion().bind([inversionCenterPoint, "any"], [inversionPowerParam, "any"], function (e1, e2) {
        this.centerPoint = e1.target;
        this.power = e2.target.power;
    });

    const circleInverse = new Arbitrary().bind([circle, "any"], [inversion, "any"], function (e1, e2) {
        this.copyFrom(e2.target.invertCircle(e1.target));
    });
    `
    );

    const epsilon = Geomtoy.getOptions().epsilon;
    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Inversion", container: card.pane });
    const folderInversion = pane.addFolder({ title: "Inversion" });
    const inputInversionCenterPoint = folderInversion.addInput({ inversionCenterPoint }, "inversionCenterPoint", { y: { inverted: true } });
    inversionCenterPoint.on("any", () => inputInversionCenterPoint.refresh());
    folderInversion.addInput(inversionPowerParam, "power", { min: epsilon, max: 10000 });

    const folderPoint = pane.addFolder({ title: "Circle" });
    const inputCenterPoint = folderPoint.addInput({ centerPoint }, "centerPoint", { y: { inverted: true } });
    centerPoint.on("any", () => inputCenterPoint.refresh());
    folderPoint.addInput(radiusParam, "radius", { min: epsilon, max: 500, step: 0.01 });
    // #endregion

    view.add(new ViewElement(centerPoint, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("teal") }));
    view.add(new ViewElement(circle, { interactMode: ViewElementInteractMode.None, ...strokeOnly("teal") }));
    view.add(new ViewElement(inversionCenterPoint, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") }));
    view.add(new ViewElement(circleInverse, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("gray") }));
}
