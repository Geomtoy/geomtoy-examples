import { Circle, Point } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { strokeFill, strokeOnly } from "../../assets/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Circle construction");

tpl.addSection("constructor");

{
    const card = tpl.addCard({ aspectRatio: "1:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const centerPoint = new Point(10, 0);
    const circle = new Circle().bind([centerPoint, "any"], function (e) {
        this.copyFrom(new Circle(e.target, 10));
    });

    view.add(new ViewElement(centerPoint, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") }));
    view.add(new ViewElement(circle, { interactMode: ViewElementInteractMode.None, ...strokeFill("brown") }));
}

tpl.addSection("fromThreePoints");
{
    const card = tpl.addCard({ aspectRatio: "1:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    const point1 = new Point(20, 0);
    const point2 = new Point(3, 5);
    const point3 = new Point(6, -10);

    const circle = new Circle().bind([point1, "any"], [point2, "any"], [point3, "any"], function (e1, e2, e3) {
        this.copyFrom(Circle.fromThreePoints(e1.target, e2.target, e3.target));
    });

    view.add(new ViewElement(circle, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
    view.add(new ViewElement(point1, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") }));
    view.add(new ViewElement(point2, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") }));
    view.add(new ViewElement(point3, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("brown") }));
}
