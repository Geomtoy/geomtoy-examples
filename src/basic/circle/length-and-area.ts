import { Circle, Dynamic, Point } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Circle length and area");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const restParams = new (new Dynamic().create({ radius: 10 }))();
    const lengthAndArea = {
        length: 0,
        area: 0
    };

    const centerPoint = new Point(10, 0);
    const circle = new Circle().bind([centerPoint, "any"], [restParams, "any"], function (e1, e2) {
        this.copyFrom(new Circle(e1.target, e2.target.radius));
        if (this.isValid()) {
            lengthAndArea.length = this.getLength();
            lengthAndArea.area = this.getArea();
        }
    });

    card.setDescription(
        "code",
        `
const restParams = new (new Dynamic().create({ radius: 10 }))();
const lengthAndArea = {
    length: 0,
    area: 0
};

const centerPoint = new Point(10, 0);
const circle = new Circle().bind([centerPoint, "any"], [restParams, "any"], function (e1, e2) {
    this.copyFrom(new Circle(e1.target, e2.target.radius));
    if (this.isValid()) {
        lengthAndArea.length = this.getLength();
        lengthAndArea.area = this.getArea();
    }
});
    `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Length", container: card.pane });
    const circleFolder = pane.addFolder({ title: "Circle" });
    const inputRadius = circleFolder.addInput(restParams, "radius", { min: 0 });
    circleFolder.add(inputRadius);
    const lengthFolder = pane.addFolder({ title: "Length" });
    lengthFolder.addMonitor(lengthAndArea, "length", { format: (v: any) => v.toFixed(10) });
    lengthFolder.addMonitor(lengthAndArea, "area", { format: (v: any) => v.toFixed(10) });
    // #endregion

    view.add(new ViewElement(centerPoint, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(circle, { type: ViewElementType.None, ...strokeOnly("brown") }));
}
