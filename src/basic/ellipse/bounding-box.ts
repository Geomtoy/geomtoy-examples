import { Dynamic, Ellipse, Point, Rectangle } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Ellipse bounding box");
{
    const card = tpl.addCard({ className: "col-12", aspectRatio: "2:1", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const restParams = new (new Dynamic().create({ radiusX: 10, radiusY: 20, rotation: 0 }))();

    const center = new Point(10, 0);
    const ellipse = new Ellipse().bind([center, "any"], [restParams, "any"], function (e1, e2) {
        const { radiusX, radiusY, rotation } = e2.target;
        this.copyFrom(new Ellipse(e1.target, radiusX, radiusY, rotation));
    });

    const boundingBoxRectangle = new Rectangle().bind([ellipse, "any"], function (e) {
        this.copyFrom(e.target.isValid() ? new Rectangle(...e.target.getBoundingBox()) : null);
    });

    card.setDescription(
        "code",
        ` 
const restParams = new (new Dynamic().create({ radiusX: 10, radiusY: 20, rotation: 0 }))();

const center = new Point(10, 0);
const ellipse = new Ellipse().bind([center, "any"], [restParams, "any"], function (e1, e2) {
    const { radiusX, radiusY, rotation } = e2.target;
    this.copyFrom(new Ellipse(e1.target, radiusX, radiusY, rotation));
});

const boundingBoxRectangle = new Rectangle().bind([ellipse, "any"], function (e) {
    this.copyFrom(e.target.isValid() ? new Rectangle(...e.target.getBoundingBox()) : null);
});
    `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const ellipseFolder = pane.addFolder({ title: "Ellipse" });
    ellipseFolder.addInput(restParams, "radiusX", { min: 0 });
    ellipseFolder.addInput(restParams, "radiusY", { min: 0 });
    ellipseFolder.addInput(restParams, "rotation", { min: 0, max: 2 * Maths.PI });
    // #endregion

    view.add(new ViewElement(center, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(boundingBoxRectangle, { type: ViewElementType.None, ...lightStrokeOnly("purple") }));
    view.add(new ViewElement(ellipse, { type: ViewElementType.None, ...strokeOnly("brown") }));
}
