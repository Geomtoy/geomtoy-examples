import { Dynamic, Line, Point, Ray, Rectangle } from "@geomtoy/core";
import { CanvasRenderer, SVGRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Rectangle construction");

tpl.addSection("constructor");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
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
        "code",
        `
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
    `
    );
    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const rectFolder = pane.addFolder({ title: "Rectangle" });
    rectFolder.addInput(restParams, "width");
    rectFolder.addInput(restParams, "height");
    rectFolder.addInput(restParams, "rotation", { min: 0, max: 2 * Math.PI });
    // #endregion

    view.add(new ViewElement(point, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(rectangle, { type: ViewElementType.None, ...strokeOnly("brown") }));
}

tpl.addSection("fromTwoPointsAndRotation");
{
    const card = tpl.addCard({ aspectRatio: "2:1", rendererType: "svg", className: "col-12", withPane: true });
    const view = new View({}, new SVGRenderer(card.svg!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
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
        "code",
        `
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
        `
    );
    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const rectFolder = pane.addFolder({ title: "Rectangle" });
    rectFolder.addInput(restParams, "rotation", { min: 0, max: 2 * Math.PI });
    // #endregion
    view.add(new ViewElement(point, { type: ViewElementType.None, ...lightStrokeOnly("gray") }));
    view.add(new ViewElement(ray, { type: ViewElementType.None, ...lightStrokeOnly("gray") }));
    view.add(new ViewElement(point1, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(rectangle, { type: ViewElementType.None, ...strokeOnly("brown") }));
}

tpl.addSection("fromCenterEtc");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const center = new Point([20, 5]);
    const restParams = new (new Dynamic().create({
        width: 20,
        height: 20,
        rotation: 0
    }))();
    const rectangle = new Rectangle().bind([center, "any"], [restParams, "any"], function (e1, e2) {
        const { width, height, rotation } = e2.target;
        this.copyFrom(Rectangle.fromCenterEtc(e1.target, width, height, rotation));
    });
    const point = new Point("cross").bind([rectangle, "any"], function (e) {
        this.copyFrom(e.target.point);
    });

    card.setDescription(
        "code",
        `  
    `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const rectFolder = pane.addFolder({ title: "Rectangle" });
    rectFolder.addInput(restParams, "width", { min: 10, max: 100 });
    rectFolder.addInput(restParams, "height", { min: 10, max: 100 });
    rectFolder.addInput(restParams, "rotation", { min: 0, max: 2 * Math.PI });
    // #endregion
    view.add(new ViewElement(point, { type: ViewElementType.None, ...lightStrokeOnly("gray") }));
    view.add(new ViewElement(center, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(rectangle, { type: ViewElementType.None, ...strokeOnly("brown") }));
}
