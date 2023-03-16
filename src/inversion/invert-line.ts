import { Arbitrary, Dynamic, Inversion, Line, Point } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, lightStrokeFillTrans, strokeOnly, strokeFill, thinStrokeOnly } from "../assets/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Inversion: inverse of line");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    const point1 = new Point([-5, 6]);
    const point2 = new Point([5, 9]);
    const line = new Line().bind([point1, "any"], [point2, "any"], function (e1, e2) {
        const line = Line.fromTwoPoints(e1.target, e2.target);
        if (line !== null) this.copyFrom(line);
    });

    const inversionCenterPoint = new Point([0, 0]);
    const inversionPowerParam = new (new Dynamic().create({
        power: 100
    }))();

    const inversion = new Inversion().bind([inversionCenterPoint, "any"], [inversionPowerParam, "any"], function (e1, e2) {
        this.centerPoint = e1.target;
        this.power = e2.target.power;
    });

    const lineInverse = new Arbitrary().bind([line, "any"], [inversion, "any"], function (e1, e2) {
        this.copyFrom(e2.target.invertLine(e1.target));
    });

    card.setDescription(
        codeHtml(`
    const point1 = new Point([-5, 6]);
    const point2 = new Point([5, 9]);
    const line = new Line().bind([point1, "any"], [point2, "any"], function (e1, e2) {
        const line = Line.fromTwoPoints(e1.target, e2.target);
        if (line !== null) this.copyFrom(line);
    });

    const inversionCenterPoint = new Point([0, 0]);
    const inversionPowerParam = new (new Dynamic().create({
        power: 100
    }))();

    const inversion = new Inversion().bind([inversionCenterPoint, "any"], [inversionPowerParam, "any"], function (e1, e2) {
        this.centerPoint = e1.target;
        this.power = e2.target.power;
    });

    const lineInverse = new Arbitrary().bind([line, "any"], [inversion, "any"], function (e1, e2) {
        this.copyFrom(e2.target.invertLine(e1.target));
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

    const folderPoint = pane.addFolder({ title: "Line" });
    const inputPoint1 = folderPoint.addInput({ point1 }, "point1", { y: { inverted: true } });
    const inputPoint2 = folderPoint.addInput({ point2 }, "point2", { y: { inverted: true } });
    point1.on("any", () => inputPoint1.refresh());
    point2.on("any", () => inputPoint2.refresh());
    // #endregion

    view.add(new ViewElement(point1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("teal") }));
    view.add(new ViewElement(point2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("teal") }));
    view.add(new ViewElement(line, { interactMode: ViewElementInteractMode.None, ...strokeOnly("teal") }));
    view.add(new ViewElement(inversionCenterPoint, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") }));
    view.add(new ViewElement(lineInverse, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("gray") }));
}
