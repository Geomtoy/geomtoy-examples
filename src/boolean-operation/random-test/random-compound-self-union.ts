import { BooleanOperation, Compound, Path } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";
import { randomPathCommand, strokeFillByIndex } from "../_common";

tpl.title("Random compound self union test");

tpl.addMarkdown("Refresh to random. The compound contains 2 paths, each with 10 random commands.");
{
    const bo = new BooleanOperation();
    const path1 = new Path(Utility.range(0, 10).map(_ => randomPathCommand()));
    const path2 = new Path(Utility.range(0, 10).map(_ => randomPathCommand()));
    const origCompound = new Compound([path1, path2]);
    const compound = bo.selfUnion(origCompound);

    const card1 = tpl.addCard({ title: "original compound", className: "col-6", aspectRatio: "1:1" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "original compound items", className: "col-6", aspectRatio: "1:1" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card3 = tpl.addCard({ title: "self union compound", className: "col-6", aspectRatio: "1:1" });
    const view3 = new View({}, new CanvasRenderer(card3.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card4 = tpl.addCard({ title: "self union compound items", className: "col-6", aspectRatio: "1:1" });
    const view4 = new View({}, new CanvasRenderer(card4.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();

    view2.startResponsive(View.centerOrigin);
    view2.startInteractive();

    view3.startResponsive(View.centerOrigin);
    view3.startInteractive();

    view4.startResponsive((width, height) => (view4.renderer.display.origin = [width / 2, height / 2]));
    view4.startInteractive();

    view1.add(new ViewElement(origCompound, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    origCompound.items.forEach((item, index) => {
        view2.add(new ViewElement(item, { type: ViewElementType.None, ...strokeFillByIndex(index) }));
    });
    view3.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    compound.items.forEach((item, index) => {
        view4.add(new ViewElement(item, { type: ViewElementType.None, ...strokeFillByIndex(index) }));
    });
}
