import { Dynamic, Inversion, Point, Ray } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill, strokeFill, strokeOnly, thinStrokeOnly } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Inversion: inverse of point");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();
    const point = new Point([-5, 6]);
    const inversionCenter = new Point([0, 0]);
    const inversionPowerParam = new (new Dynamic().create({
        power: 100
    }))();

    const inversion = new Inversion().bind([inversionCenter, "any"], [inversionPowerParam, "any"], function (e1, e2) {
        this.center = e1.target;
        this.power = e2.target.power;
    });
    const ray = new Ray().bind([inversionCenter, "any"], [point, "any"], function (e1, e2) {
        this.copyFrom(Ray.fromTwoPoints(e1.target, e2.target));
    });

    const pointInverse = new Point("plus").bind([point, "any"], [inversion, "any"], function (e1, e2) {
        this.copyFrom(e2.target.invertPoint(e1.target));
    });

    card.setDescription(
        "code",
        `
    const point = new Point([-5, 6]);
    const inversionCenter = new Point([0, 0]);
    const inversionPowerParam = new (new Dynamic().create({
        power: 100
    }))();

    const inversion = new Inversion().bind([inversionCenter, "any"], [inversionPowerParam, "any"], function (e1, e2) {
        this.center = e1.target;
        this.power = e2.target.power;
    });
    const ray = new Ray().bind([inversionCenter, "any"], [point, "any"], function (e1, e2) {
        this.copyFrom(Ray.fromTwoPoints(e1.target, e2.target));
    });

    const pointInverse = new Point("plus").bind([point, "any"], [inversion, "any"], function (e1, e2) {
        this.copyFrom(e2.target.invertPoint(e1.target));
    });
    `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Inversion", container: card.pane });
    const folderInversion = pane.addFolder({ title: "Inversion" });
    const inputInversionCenter = folderInversion.addInput({ inversionCenter }, "inversionCenter", { y: { inverted: true } });
    inversionCenter.on("any", () => inputInversionCenter.refresh());
    folderInversion.addInput(inversionPowerParam, "power", { min: 1, max: 10000, step: 10 });

    const folderPoint = pane.addFolder({ title: "Point" });
    const inputPoint = folderPoint.addInput({ point }, "point", { y: { inverted: true } });
    point.on("any", () => inputPoint.refresh());
    // #endregion

    view.add(new ViewElement(point, { ...lightStrokeFill("teal") }));
    view.add(new ViewElement(inversionCenter, { ...strokeFill("brown") }));
    view.add(new ViewElement(pointInverse, { type: ViewElementType.None, ...strokeOnly("gray") }));
    view.add(new ViewElement(ray, { type: ViewElementType.None, ...thinStrokeOnly("gray") }));
}
