import { Dynamic, Inversion, Point, Ray } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, strokeOnly, strokeFill, thinStrokeOnly } from "../assets/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Inversion: inverse of point");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    const point = new Point([-5, 6]);
    const inversionCenterPoint = new Point([0, 0]);
    const inversionPowerParam = new (new Dynamic().create({
        power: 100
    }))();

    const inversion = new Inversion().bind([inversionCenterPoint, "any"], [inversionPowerParam, "any"], function (e1, e2) {
        this.centerPoint = e1.target;
        this.power = e2.target.power;
    });
    const ray = new Ray().bind([inversionCenterPoint, "any"], [point, "any"], function (e1, e2) {
        this.copyFrom(Ray.fromTwoPoints(e1.target, e2.target));
    });

    const pointInverse = new Point("plus").bind([point, "any"], [inversion, "any"], function (e1, e2) {
        this.copyFrom(e2.target.invertPoint(e1.target));
    });

    card.setDescription(
        codeHtml(`
    const point = new Point([-5, 6]);
    const inversionCenterPoint = new Point([0, 0]);
    const inversionPowerParam = new (new Dynamic().create({
        power: 100
    }))();

    const inversion = new Inversion().bind([inversionCenterPoint, "any"], [inversionPowerParam, "any"], function (e1, e2) {
        this.centerPoint = e1.target;
        this.power = e2.target.power;
    });
    const ray = new Ray().bind([inversionCenterPoint, "any"], [point, "any"], function (e1, e2) {
        this.copyFrom(Ray.fromTwoPoints(e1.target, e2.target));
    });

    const pointInverse = new Point("plus").bind([point, "any"], [inversion, "any"], function (e1, e2) {
        this.copyFrom(e2.target.invertPoint(e1.target));
    });
    `)
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Inversion", container: card.pane });
    const folderInversion = pane.addFolder({ title: "Inversion" });
    const inputInversionCenterPoint = folderInversion.addInput({ inversionCenterPoint }, "inversionCenterPoint", { y: { inverted: true } });
    inversionCenterPoint.on("any", () => inputInversionCenterPoint.refresh());
    folderInversion.addInput(inversionPowerParam, "power", { min: 1, max: 10000, step: 10 });

    const folderPoint = pane.addFolder({ title: "Point" });
    const inputPoint = folderPoint.addInput({ point }, "point", { y: { inverted: true } });
    point.on("any", () => inputPoint.refresh());
    // #endregion

    view.add(new ViewElement(point, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("teal") }));
    view.add(new ViewElement(inversionCenterPoint, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") }));
    view.add(new ViewElement(pointInverse, { interactMode: ViewElementInteractMode.None, ...strokeOnly("gray") }));
    view.add(new ViewElement(ray, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("gray") }));
}
