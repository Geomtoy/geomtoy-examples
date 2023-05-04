import { Arbitrary, Circle, Dynamic, Geomtoy, Inversion, Point } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill, strokeFill, strokeOnly, thinStrokeOnly } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Inversion: inverse of circle");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();
    const center = new Point([0, 0]);
    const radiusParam = new (new Dynamic().create({
        radius: 10
    }))();
    const circle = new Circle().bind([center, "any"], [radiusParam, "any"], function (e1, e2) {
        this.copyFrom(new Circle(e1.target, e2.target.radius));
    });

    const inversionCenter = new Point([10, 0]);
    const inversionPowerParam = new (new Dynamic().create({
        power: 100
    }))();

    const inversion = new Inversion().bind([inversionCenter, "any"], [inversionPowerParam, "any"], function (e1, e2) {
        this.center = e1.target;
        this.power = e2.target.power;
    });

    const circleInverse = new Arbitrary().bind([circle, "any"], [inversion, "any"], function (e1, e2) {
        this.copyFrom(e2.target.invertCircle(e1.target));
    });

    card.setDescription(
        "code",
        `
    const center = new Point([2, 10]);
    const radiusParam = new (new Dynamic().create({
        radius: 10
    }))();
    const circle = new Circle().bind([center, "any"], [radiusParam, "any"], function (e1, e2) {
        this.copyFrom(new Circle(e1.target, e2.target.radius));
    });

    const inversionCenter = new Point([0, 0]);
    const inversionPowerParam = new (new Dynamic().create({
        power: 100
    }))();

    const inversion = new Inversion().bind([inversionCenter, "any"], [inversionPowerParam, "any"], function (e1, e2) {
        this.center = e1.target;
        this.power = e2.target.power;
    });

    const circleInverse = new Arbitrary().bind([circle, "any"], [inversion, "any"], function (e1, e2) {
        this.copyFrom(e2.target.invertCircle(e1.target));
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

    const folderPoint = pane.addFolder({ title: "Circle" });
    const inputCenter = folderPoint.addInput({ center }, "center", { y: { inverted: true } });
    center.on("any", () => inputCenter.refresh());
    folderPoint.addInput(radiusParam, "radius", { min: 10, max: 500, step: 1 });
    // #endregion

    view.add(new ViewElement(center, { ...lightStrokeFill("teal") }));
    view.add(new ViewElement(circle, { type: ViewElementType.None, ...strokeOnly("teal") }));
    view.add(new ViewElement(inversionCenter, { ...strokeFill("brown") }));
    view.add(new ViewElement(circleInverse, { type: ViewElementType.None, ...thinStrokeOnly("gray") }));
}
