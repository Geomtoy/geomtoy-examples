import { Dynamic, Ellipse, Point } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Ellipse construction");

tpl.addSection("constructor", true);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const restParams = new (new Dynamic().create({ radiusX: 10, radiusY: 20, rotation: Maths.PI / 4 }))();
    const center = new Point([10, 0]);
    const ellipse = new Ellipse().bind([center, "any"], [restParams, "any"], function (e1, e2) {
        const { radiusX, radiusY, rotation } = e2.target;
        this.copyFrom(new Ellipse(e1.target, radiusX, radiusY, rotation));
    });

    card.setDescription(
        "code",
        ` 
const restParams = new (new Dynamic().create({ radiusX: 10, radiusY: 20, rotation: Maths.PI / 4 }))();
const center = new Point([10, 0]);
const ellipse = new Ellipse().bind([center, "any"], [restParams, "any"], function (e1, e2) {
    const {radiusX, radiusY, rotation} = e2.target
    this.copyFrom(new Ellipse(e1.target, radiusX, radiusY, rotation));
});
    `
    );
    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const ellipseFolder = pane.addFolder({ title: "Ellipse" });
    ellipseFolder.addInput(restParams, "radiusX", { min: 0 });
    ellipseFolder.addInput(restParams, "radiusY", { min: 0 });
    ellipseFolder.addInput(restParams, "rotation", { min: 0, max: 2 * Math.PI });
    // #endregion

    view.add(new ViewElement(center, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(ellipse, { type: ViewElementType.None, ...strokeOnly("brown") }));
}

tpl.addSection("fromTwoFociAndDistanceSum", true);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const restParams = new (new Dynamic().create({ distanceSum: 40 }))();
    const focusPoint1 = new Point([10, 0]);
    const focusPoint2 = new Point([-10, 0]);

    const ellipse = new Ellipse().bind([focusPoint1, "any"], [focusPoint2, "any"], [restParams, "any"], function (e1, e2, e3) {
        this.copyFrom(Ellipse.fromTwoFociAndDistanceSum(e1.target, e2.target, e3.target.distanceSum));
    });

    card.setDescription(
        "code",
        ` 
const restParams = new (new Dynamic().create({ distanceSum: 40 }))();
const focusPoint1 = new Point([10, 0]);
const focusPoint2 = new Point([-10, 0]);

const ellipse = new Ellipse().bind([focusPoint1, "any"], [focusPoint2, "any"], [restParams, "any"], function (e1, e2, e3) {
    this.copyFrom(Ellipse.fromTwoFociAndDistanceSum(e1.target, e2.target, e3.target.distanceSum));
});
    `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const ellipseFolder = pane.addFolder({ title: "Ellipse" });
    ellipseFolder.addInput(restParams, "distanceSum", { min: 0 });
    // #endregion

    view.add(new ViewElement(ellipse, { type: ViewElementType.None, ...strokeOnly("brown") }));
    view.add(new ViewElement(focusPoint1, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(focusPoint2, { ...lightStrokeFill("brown") }));
}

tpl.addSection("fromTwoFociAndPointOn", true);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();
    const point = new Point(2, 10);
    const focusPoint1 = new Point([10, 0]);
    const focusPoint2 = new Point([-10, 0]);

    const ellipse = new Ellipse().bind([focusPoint1, "any"], [focusPoint2, "any"], [point, "any"], function (e1, e2, e3) {
        this.copyFrom(Ellipse.fromTwoFociAndPointOn(e1.target, e2.target, e3.target));
    });

    card.setDescription(
        "code",
        ` 
const point = new Point(2, 0);
const focusPoint1 = new Point([10, 0]);
const focusPoint2 = new Point([-10, 0]); 

const ellipse = new Ellipse().bind([focusPoint1, "any"], [focusPoint2, "any"], [point, "any"], function (e1, e2, e3) {
    this.copyFrom(Ellipse.fromTwoFociAndPointOn(e1.target, e2.target, e3.target));
});
    `
    );
    view.add(new ViewElement(ellipse, { type: ViewElementType.None, ...strokeOnly("brown") }));
    view.add(new ViewElement(point, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(focusPoint1, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(focusPoint2, { ...lightStrokeFill("brown") }));
}

tpl.addSection("fromTwoFociAndEccentricity", true);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const restParams = new (new Dynamic().create({ eccentricity: 0.5 }))();
    const focusPoint1 = new Point([10, 0]);
    const focusPoint2 = new Point([-10, 0]);

    const ellipse = new Ellipse().bind([focusPoint1, "any"], [focusPoint2, "any"], [restParams, "any"], function (e1, e2, e3) {
        this.copyFrom(Ellipse.fromTwoFociAndEccentricity(e1.target, e2.target, e3.target.eccentricity));
    });

    card.setDescription(
        "code",
        ` 
const restParams = new (new Dynamic().create({ eccentricity: 0.5 }))();
const focusPoint1 = new Point([10, 0]);
const focusPoint2 = new Point([-10, 0]);

const ellipse = new Ellipse().bind([focusPoint1, "any"], [focusPoint2, "any"], [restParams, "any"], function (e1, e2, e3) {
    this.copyFrom(Ellipse.fromTwoFociAndEccentricity(e1.target, e2.target, e3.target.eccentricity));
});
    `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const ellipseFolder = pane.addFolder({ title: "Ellipse" });
    ellipseFolder.addInput(restParams, "eccentricity", { min: 0, max: 1 });
    // #endregion

    view.add(new ViewElement(ellipse, { type: ViewElementType.None, ...strokeOnly("brown") }));
    view.add(new ViewElement(focusPoint1, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(focusPoint2, { ...lightStrokeFill("brown") }));
}

tpl.addSection("fromCenterAndConjugateDiametersEndPoints", true);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const center = new Point([10, 10]);
    const endPoint1 = new Point([5, 20]);
    const endPoint2 = new Point([-10, 3]);

    const ellipse = new Ellipse().bind([center, "any"], [endPoint1, "any"], [endPoint2, "any"], function (e1, e2, e3) {
        this.copyFrom(Ellipse.fromCenterAndConjugateDiametersEndPoints(e1.target, e2.target, e3.target));
    });

    card.setDescription(
        "code",
        ` 
const center = new Point([10, 10]);
const endPoint1 = new Point([5, 20]);
const endPoint2 = new Point([-10, 3]);

const ellipse = new Ellipse().bind([center, "any"], [endPoint1, "any"], [endPoint2, "any"], function (e1, e2, e3) {
    this.copyFrom(Ellipse.fromCenterAndConjugateDiametersEndPoints(e1.target, e2.target, e3.target));
});
    `
    );

    view.add(new ViewElement(ellipse, { type: ViewElementType.None, ...strokeOnly("brown") }));
    view.add(new ViewElement(center, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(endPoint1, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(endPoint2, { ...lightStrokeFill("brown") }));
}
