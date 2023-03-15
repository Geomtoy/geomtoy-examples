import { Dynamic, Point, Rectangle } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement } from "@geomtoy/view";
import { codeHtml, dashedLightStroke, lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Rectangle keep aspect ratio fit ");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const fitParams = new (new Dynamic().create({
        fitWidth: 20,
        fitHeight: 20,
        clamped: true
    }))();

    const rectangle = new Rectangle(0, 0, 10, 20).bind([fitParams, "any"], function (e) {
        const { fitWidth, fitHeight, clamped } = e.target;
        this.keepAspectRatioFit(fitWidth, fitHeight, clamped);
    });
    const rectangle2 = new Rectangle().bind([rectangle, "any"], [fitParams, "any"], function (e1, e2) {
        const { fitWidth, fitHeight } = e2.target;
        this.copyFrom(Rectangle.fromCenterPointEtc(e1.target.getCenterPoint(), fitWidth, fitHeight, e1.target.rotation));
    });

    const centerPoint = new Point(0, 0)
        .on("any", function () {
            rectangle.copyFrom(Rectangle.fromCenterPointEtc(this, rectangle.width, rectangle.height, rectangle.rotation));
            rectangle2.copyFrom(Rectangle.fromCenterPointEtc(this, rectangle2.width, rectangle2.height, rectangle2.rotation));
        })
        .bind([rectangle, "any"], function (e) {
            this.copyFrom(e.target.getCenterPoint());
        });

    card.setDescription(
        codeHtml(` 
const fitParams = new (new Dynamic().create({
    fitWidth: 20,
    fitHeight: 20,
    clamped: true
}))();

const rectangle = new Rectangle(0, 0, 10, 20).bind([fitParams, "any"], function (e) {
    const { fitWidth, fitHeight, clamped } = e.target;
    this.keepAspectRatioFit(fitWidth, fitHeight, clamped);
});
const rectangle2 = new Rectangle().bind([rectangle, "any"], [fitParams, "any"], function (e1, e2) {
    const { fitWidth, fitHeight } = e2.target;
    this.copyFrom(Rectangle.fromCenterPointEtc(e1.target.getCenterPoint(), fitWidth, fitHeight, e1.target.rotation));
});

const centerPoint = new Point(0, 0)
    .on("any", function () {
        rectangle.copyFrom(Rectangle.fromCenterPointEtc(this, rectangle.width, rectangle.height, rectangle.rotation));
        rectangle2.copyFrom(Rectangle.fromCenterPointEtc(this, rectangle2.width, rectangle2.height, rectangle2.rotation));
    })
    .bind([rectangle, "any"], function (e) {
        this.copyFrom(e.target.getCenterPoint());
    });
    `)
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const rectFolder = pane.addFolder({ title: "Rectangle" });
    rectFolder.addInput(rectangle, "rotation", { min: 0, max: 2 * Math.PI });
    const fitFolder = pane.addFolder({ title: "Fit" });
    fitFolder.addInput(fitParams, "fitWidth", { min: 10, max: 500 });
    fitFolder.addInput(fitParams, "fitHeight", { min: 10, max: 500 });
    fitFolder.addInput(fitParams, "clamped");
    const closestPointFolder = pane.addFolder({ title: "Rectangle new width & height" });
    closestPointFolder.addMonitor(rectangle, "height");
    closestPointFolder.addMonitor(rectangle, "width");
    // #endregion

    view.add(new ViewElement(centerPoint, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(rectangle2, { interactMode: ViewElementInteractMode.None, ...dashedLightStroke("gray") }));
    view.add(new ViewElement(rectangle, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}
