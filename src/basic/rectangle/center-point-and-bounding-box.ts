import { Dynamic, Point, Rectangle } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Rectangle center point and bounding box");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const point = new Point([0, 0]);
    const restParams = new (new Dynamic().create({
        width: 20,
        height: 20,
        rotation: 0
    }))();
    const rectangle = new Rectangle().bind([point, "any"], [restParams, "any"], function (e1, e2) {
        const { width, height, rotation } = e2.target;
        this.copyFrom(new Rectangle(e1.target, width, height, rotation));
    });

    const center = new Point().bind([rectangle, "any"], function (e) {
        this.copyFrom(e.target.isValid() ? e.target.getCenter() : null);
    });

    const boundingBox = new Rectangle().bind([rectangle, "any"], function (e) {
        this.copyFrom(new Rectangle(...e.target.degenerate(false)!.getBoundingBox()));
    });

    card.setDescription(
        "code",
        ` 
const point = new Point([0, 0]);
const restParams = new (new Dynamic().create({
    width: 20,
    height: 20,
    rotation: 0
}))();
const rectangle = new Rectangle().bind([point, "any"], [restParams, "any"], function (e1, e2) {
    const { width, height, rotation } = e2.target;
    this.copyFrom(new Rectangle(e1.target, width, height, rotation));
});

const center = new Point().bind([rectangle, "any"], function (e) {
    this.copyFrom(e.target.isValid() ? e.target.getCenter() : null);
});

const boundingBox = new Rectangle().bind([rectangle, "any"], function (e) {
    this.copyFrom(new Rectangle(...e.target.degenerate(false)!.getBoundingBox()));
});
    `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const rectFolder = pane.addFolder({ title: "Rectangle" });
    rectFolder.addInput(restParams, "width", { min: 0, max: 100 });
    rectFolder.addInput(restParams, "height", { min: 0, max: 100 });
    rectFolder.addInput(restParams, "rotation", { min: 0, max: 2 * Math.PI });
    // #endregion

    view.add(new ViewElement(point, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(center, { type: ViewElementType.None, ...lightStrokeFill("pink") }));
    view.add(new ViewElement(boundingBox, { type: ViewElementType.None, ...lightStrokeOnly("purple") }));
    view.add(new ViewElement(rectangle, { type: ViewElementType.None, ...strokeOnly("brown") }));
}
