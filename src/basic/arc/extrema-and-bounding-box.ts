import { Arc, Dynamic, GeometryArray, LineSegment, Point, Rectangle } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Arc extrema and bounding box");
{
    const card = tpl.addCard({ className: "col-12", aspectRatio: "2:1", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const centerPoint = new Point([0, 0]);
    const restParams = new (new Dynamic().create({
        radiusX: 20,
        radiusY: 10,
        startAngle: Maths.PI / 4,
        endAngle: (5 * Maths.PI) / 4,
        positive: true,
        rotation: 0
    }))();

    const arc = new Arc().bind([centerPoint, "any"], [restParams, "any"], function (e1, e2) {
        const { radiusX, radiusY, startAngle, endAngle, positive, rotation } = e2.target;
        this.copyFrom(Arc.fromCenterPointAndStartEndAnglesEtc(e1.target, radiusX, radiusY, startAngle, endAngle, positive, rotation));
    });
    const extremePoints = new GeometryArray().bind([arc, "any"], function (e) {
        this.items = e.target.isValid() ? e.target.extrema().map(([p]) => ((p.appearance = "cross"), p)) : [];
    });
    const boundingBoxRectangle = new Rectangle().bind([arc, "any"], function (e) {
        const dg = e.target.degenerate(false);
        if (dg instanceof LineSegment) return this.copyFrom(new Rectangle(...dg.getBoundingBox()));
        if (dg instanceof Arc) return this.copyFrom(new Rectangle(...e.target.getBoundingBox()));
        this.copyFrom(null);
    });

    card.setDescription(
        "code",
        ` 
const centerPoint = new Point([0, 0]);
const restParams = new (new Dynamic().create({
    radiusX: 20,
    radiusY: 10,
    startAngle: Maths.PI / 4,
    endAngle: (5 * Maths.PI) / 4,
    positive: true,
    rotation: 0
}))();

const arc = new Arc().bind([centerPoint, "any"], [restParams, "any"], function (e1, e2) {
    const { radiusX, radiusY, startAngle, endAngle, positive, rotation } = e2.target;
    this.copyFrom(Arc.fromCenterPointAndStartEndAnglesEtc(e1.target, radiusX, radiusY, startAngle, endAngle, positive, rotation));
});
const extremePoints = new GeometryArray().bind([arc, "any"], function (e) {
    this.items = e.target.isValid() ? e.target.extrema().map(([p]) => ((p.appearance = "cross"), p)) : [];
});
const boundingBoxRectangle = new Rectangle().bind([arc, "any"], function (e) {
    const dg = e.target.degenerate(false);
    if (dg instanceof LineSegment) return this.copyFrom(new Rectangle(...dg.getBoundingBox()));
    if (dg instanceof Arc) return this.copyFrom(new Rectangle(...e.target.getBoundingBox()));
    this.copyFrom(null);
}); 
    `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const arcFolder = pane.addFolder({ title: "Arc" });
    arcFolder.addInput(restParams, "radiusX", { min: 0 });
    arcFolder.addInput(restParams, "radiusY", { min: 0 });
    arcFolder.addInput(restParams, "startAngle", { format: (v: number) => v.toFixed(2) });
    arcFolder.addInput(restParams, "endAngle", { format: (v: number) => v.toFixed(2) });
    arcFolder.addInput(restParams, "positive");
    arcFolder.addInput(restParams, "rotation", { min: 0, max: 2 * Math.PI });
    // #endregion

    view.add(new ViewElement(centerPoint, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(arc, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
    view.add(new ViewElement(extremePoints, { interactMode: ViewElementInteractMode.None, zIndex: 2, ...lightStrokeFill("green") }));
    view.add(new ViewElement(boundingBoxRectangle, { interactMode: ViewElementInteractMode.None, zIndex: 1, ...lightStrokeOnly("purple") }));
}
