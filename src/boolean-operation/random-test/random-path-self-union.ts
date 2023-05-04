import { BooleanOperation, Path } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";
import { randomPathCommand, strokeFillByIndex } from "../_common";

tpl.title("Random path self union test");

tpl.addMarkdown("Refresh to random. The path contains 20 random commands.");
{
    const bo = new BooleanOperation();
    const path = new Path(Utility.range(0, 20).map(_ => randomPathCommand()));
    const compound = bo.selfUnion(path);

    const card1 = tpl.addCard({ title: "original path", className: "col-12", aspectRatio: "3:1" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));
    const card2 = tpl.addCard({ title: "self union compound", className: "col-6", aspectRatio: "1:1" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));
    const card3 = tpl.addCard({ title: "self union compound items", className: "col-6", aspectRatio: "1:1" });
    const view3 = new View({}, new CanvasRenderer(card3.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();
    view2.startResponsive(View.centerOrigin);
    view2.startInteractive();
    view3.startResponsive(View.centerOrigin);
    view3.startInteractive();

    view1.add(new ViewElement(path, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("blue") }));

    compound.items.forEach((item, index) => {
        view3.add(new ViewElement(item, { type: ViewElementType.None, ...strokeFillByIndex(index) }));
    });
}
