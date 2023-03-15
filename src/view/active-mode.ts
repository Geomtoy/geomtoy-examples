import { Rectangle } from "@geomtoy/core";
import { Vector2 } from "@geomtoy/util";
import { CanvasRenderer, SvgRenderer, View, ViewElement } from "@geomtoy/view";
import { codeHtml, markdownHtml, strokeFill } from "../assets/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Coordinate system");

const rectangle = new Rectangle([10, 10], [20, 20]);
const rectangle1 = new Rectangle([-2, -5], [23, 20]);

{
    const card = tpl.addCard({ className: "col-12", aspectRatio: "1:1", rendererType: "canvas" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    view.add(new ViewElement(rectangle, { ...strokeFill("gray") }));
    view.add(new ViewElement(rectangle1, { ...strokeFill("purple") }));
    view.activeMode = "continuous";
    // view.startLasso();
 
}
