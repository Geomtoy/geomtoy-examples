import { Arc, Dynamic, LineSegment, Point, SealedShapeObject } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { codeHtml, dashedThinStroke, lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Arc closest point");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const centerPoint = new Point([0, 0]);
    const point = new Point([10, 15]);
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

    const closestPointLineSegment = new SealedShapeObject({
        point: new Point("cross"),
        lineSegment: new LineSegment()
    }).bind([point, "any"], [arc, "any"], function (e1, e2) {
        this.items.point.copyFrom(e2.target.isValid() ? e2.target.getClosestPointFrom(e1.target)[0] : null);
        this.items.lineSegment.copyFrom(new LineSegment(e1.target, this.items.point));
    });

    card.setDescription(
        "code",
        ` 
const centerPoint = new Point([0, 0]);
const point = new Point([10, 15]);
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

const closestPointLineSegment = new SealedShapeObject({
    point: new Point("cross"),
    lineSegment: new LineSegment()
}).bind([point, "any"], [arc, "any"], function (e1, e2) {
    this.items.point.copyFrom(e2.target.isValid() ? e2.target.getClosestPointFrom(e1.target) : null);
    this.items.lineSegment.copyFrom(new LineSegment(e1.target, this.items.point));
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
    const closestPointFolder = pane.addFolder({ title: "Closest point" });
    closestPointFolder.addMonitor(closestPointLineSegment.items.point, "x");
    closestPointFolder.addMonitor(closestPointLineSegment.items.point, "y");
    // #endregion
    view.add(new ViewElement(point, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("pink") }));
    view.add(new ViewElement(closestPointLineSegment.items.point, { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("pink") }));
    view.add(new ViewElement(closestPointLineSegment.items.lineSegment, { interactMode: ViewElementInteractMode.None, ...dashedThinStroke("gray") }));
    view.add(new ViewElement(centerPoint, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("brown") }));
    view.add(new ViewElement(arc, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
}
