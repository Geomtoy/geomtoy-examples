import { BooleanOperation, Polygon } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { lightStrokeFill } from "../assets/common";
import tpl from "../assets/templates/tpl-renderer";
import { randomPolygonVertex, strokeFillByIndex } from "./_common";

tpl.title("Random polygon self-union");
tpl.addParagraph("Refresh to random");
{
    const bo = new BooleanOperation();
    const polygon = new Polygon(Utility.range(0, 20).map(_ => randomPolygonVertex()));
    const compound = bo.selfUnion(polygon);

    const card1 = tpl.addCard({ title: "original polygon", className: "col-12", aspectRatio: "3:1" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "self-union compound", className: "col-6", aspectRatio: "1:1" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card3 = tpl.addCard({ title: "self-union compound items", className: "col-6", aspectRatio: "1:1" });
    const view3 = new View({}, new CanvasRenderer(card3.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view3.startResponsive((width, height) => (view3.renderer.display.origin = [width / 2, height / 2]));
    view3.startInteractive();

    view1.add(new ViewElement(polygon, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("red") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("blue") }));

    compound.items.forEach((item, index) => {
        view3.add(new ViewElement(item, { interactMode: ViewElementInteractMode.None, ...strokeFillByIndex(index) }));
    });
}
