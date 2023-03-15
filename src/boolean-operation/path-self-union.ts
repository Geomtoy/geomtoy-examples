import { BooleanOperation, Path } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement } from "@geomtoy/view";
import { lightStrokeFill, strokeFill } from "../assets/common";
import tpl from "../assets/templates/tpl-renderer";
import { randomPathCommand } from "./_common";

tpl.title("Path self-union");

const bo = new BooleanOperation();
{
    tpl.addSection("Common case");

    const path = new Path(
        Utility.range(0, 20).map(_ => randomPathCommand()),
        true
    )!;

    const desc = bo.describe(path);
    const selected = bo.selectSelfUnion(desc);
    const compound = bo.chain(selected);

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "self-union", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(path, { interactMode: ViewElementInteractMode.None, ...strokeFill("red") }));

    // selected.annotations.forEach(item=>{
    //     view2.add(new ViewElement(item.segment, { interactMode: ViewElementInteractMode.None, ...stroke("teal")}));
    //     view2.add(new ViewElement(item.segment.point1, { interactMode: ViewElementInteractMode.None, ...stroke("black")}));
    //     view2.add(new ViewElement(item.segment.point2, { interactMode: ViewElementInteractMode.None, ...stroke("green")}));
    // })
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("blue") }));

    // compound.items.forEach((item, index) => {
    //     view2.add(new ViewElement(item, { interactMode: ViewElementInteractMode.None, ...strokeFillByIndex(index) }));
    // });
}
