import { Dynamic, Line, Point, Ray, Rectangle } from "@geomtoy/core";
import { CanvasRenderer, SvgRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Rectangle construction");

tpl.addSection("constructor");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const point = new Point([0, 0]);

    const restParams = new (new Dynamic().create({
        width: 10,
        height: 20,
        rotation: 0
    }))();

    const rectangle = new Rectangle().bind([point, "any"], [restParams, "any"], function (e1, e2) {
        const { width, height, rotation } = e2.target;
        this.copyFrom(new Rectangle(e1.target, width, height, rotation));
    });

    card.setDescription(
        codeHtml(`
 
    `)
    );
    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const rectFolder = pane.addFolder({ title: "Rectangle" });
    rectFolder.addInput(restParams, "width");
    rectFolder.addInput(restParams, "height");
    rectFolder.addInput(restParams, "rotation", { min: 0, max: 2 * Math.PI });
    // #endregion

    view.add(new ViewElement(point, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(rectangle, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}

tpl.addSection("fromTwoPointsAndRotation");
{
    const card = tpl.addCard({ aspectRatio: "2:1", rendererType: "svg", className: "col-12", withPane: true });
    const view = new View({}, new SvgRenderer(card.svg!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const point1 = new Point([0, 0]);
    const point2 = new Point([10, 5]);
    const restParams = new (new Dynamic().create({
        rotation: 0
    }))();
    const rectangle = new Rectangle().bind([point1, "any"], [point2, "any"], [restParams, "any"], function (e1, e2, e3) {
        const { rotation } = e3.target;
        this.copyFrom(Rectangle.fromTwoPointsAndRotation(e1.target, e2.target, rotation));
    });

    const ray = new Ray().bind([rectangle, "any"], function (e) {
        this.copyFrom(new Ray(e.target.point, e.target.rotation));
    });
    const point = new Point("cross").bind([rectangle, "any"], function (e) {
        this.copyFrom(e.target.point);
    });
    card.setDescription(
        codeHtml(`
const point1 = new Point([0, 0]);
const point2 = new Point([10, 5]);
const restParams = new (new Dynamic().create({
    rotation: 0
}))();
const rectangle = new Rectangle().bind([point1, "any"], [point2, "any"], [restParams, "any"], function (e1, e2, e3) {
    const { rotation } = e3.target;
    this.copyFrom(Rectangle.fromTwoPointsAndRotation(e1.target, e2.target, rotation));
});

const ray = new Ray().bind([rectangle, "any"], function (e) {
    this.copyFrom(new Ray(e.target.point, e.target.rotation));
});
const point = new Point("cross").bind([rectangle, "any"], function (e) {
    this.copyFrom(e.target.point);
});
        `)
    );
    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const rectFolder = pane.addFolder({ title: "Rectangle" });
    rectFolder.addInput(restParams, "rotation", { min: 0, max: 2 * Math.PI });
    // #endregion
    view.add(new ViewElement(point, { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("gray") }));
    view.add(new ViewElement(ray, { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("gray") }));
    view.add(new ViewElement(point1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(rectangle, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}

tpl.addSection("fromCenterPointEtc");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const centerPoint = new Point([20, 5]);
    const restParams = new (new Dynamic().create({
        width: 20,
        height: 20,
        rotation: 0
    }))();
    const rectangle = new Rectangle().bind([centerPoint, "any"], [restParams, "any"], function (e1, e2) {
        const { width, height, rotation } = e2.target;
        this.copyFrom(Rectangle.fromCenterPointEtc(e1.target, width, height, rotation));
    });
    const point = new Point("cross").bind([rectangle, "any"], function (e) {
        this.copyFrom(e.target.point);
    });

    card.setDescription(
        codeHtml(`  
    `)
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const rectFolder = pane.addFolder({ title: "Rectangle" });
    rectFolder.addInput(restParams, "width", { min: 10, max: 100 });
    rectFolder.addInput(restParams, "height", { min: 10, max: 100 });
    rectFolder.addInput(restParams, "rotation", { min: 0, max: 2 * Math.PI });
    // #endregion
    view.add(new ViewElement(point, { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("gray") }));
    view.add(new ViewElement(centerPoint, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(rectangle, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}
