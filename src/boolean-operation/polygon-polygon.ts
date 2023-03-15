import { BooleanOperation, Polygon } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement } from "@geomtoy/view";
import { strokeFill } from "../assets/common";
import tpl from "../assets/templates/tpl-renderer";
import { randomPolygonVertex, strokeFillByIndex } from "./_common";

tpl.title("Polygon-polygon boolean operation");

const bo = new BooleanOperation();
const polygon1 = new Polygon([{"x":-90.23110712404501,"y":-12.993568063787947,"uuid":"011a73d9-20c4-4618-bbe1-a84cb7d0dace"},{"x":7.188768846322176,"y":36.65639324662121,"uuid":"265e83c1-1e42-4d8a-831f-0134957eb4e1"},{"x":76.92961075082758,"y":61.72309917870322,"uuid":"268b06f6-a866-4f9e-9c7a-0cfa2caef9d9"},{"x":34.922263092425425,"y":73.16008597529128,"uuid":"4742af2e-956a-49a8-b278-eb707feb6550"},{"x":-16.446212113151987,"y":-67.9752961723366,"uuid":"987ab2ab-a1ba-4c2e-a427-0290c416aec7"},{"x":-10.527474286118064,"y":53.6228886111692,"uuid":"3a8dc6a8-a184-4c0d-8de1-3ca6de6ec2e0"},{"x":30.844466691766797,"y":97.72738405002812,"uuid":"492ed35d-9685-41ef-ac10-0d180f2959fe"},{"x":-14.000911844508707,"y":29.46854551522486,"uuid":"b82c6329-b108-4f50-86f9-d16c595a51f9"},{"x":4.341658719591294,"y":-83.5538126178157,"uuid":"13f6d053-1be0-47b4-81ee-761d5ccf86ca"},{"x":10.51595650107977,"y":17.928806745682152,"uuid":"b261fb6a-8c3f-45b8-a604-1bafeacd80ec"}],true)
const polygon2 = new Polygon([{"x":44.237078866972155,"y":48.13978138406202,"uuid":"f20c6a19-e6c1-4f8a-9d70-9f782be49f2e"},{"x":83.5616450439789,"y":-15.582767987856144,"uuid":"48040341-b320-49e5-ae51-fb710b08e4df"},{"x":36.67813907122604,"y":89.24616737461787,"uuid":"9275ae83-e5cc-4078-8b2a-7e75b68b790b"},{"x":-68.9166021907611,"y":66.1970582771713,"uuid":"595f293f-107b-426a-b62a-f23a8986e607"},{"x":-68.73012759143298,"y":-99.92895984021727,"uuid":"0c860116-6e4b-42b3-827b-4d14867ad395"},{"x":-42.6939141775533,"y":54.85697298643345,"uuid":"ac2c126b-ba3d-41c5-aca2-61afc3d074b6"},{"x":74.0492252581991,"y":-67.53713918117943,"uuid":"a0418260-2acd-4624-a207-2a3788f64d2a"},{"x":31.03247829130771,"y":-39.50204906365143,"uuid":"37bd9ea3-b6e5-4642-9ebd-0bc9d7797b64"},{"x":18.903051818148683,"y":-95.517652335431,"uuid":"a0a224c9-9b7b-46bd-9898-554f6f260397"},{"x":-30.092025665484684,"y":50.98347889715399,"uuid":"ad257176-df11-4f9b-97bc-b779ec4bea92"}],true)


// const polygon1 = new Polygon(
//     [
//         { x: -88.42470628999224, y: -99.49063440589595, uuid: "38f902a6-4cc5-493b-b299-0fdf7783f7b6" },
//         { x: 47.88595880153369, y: -88.66590128435719, uuid: "4850b12c-64d7-45b6-b9db-690711ed8e70" },
//         { x: -6.8186406472106995, y: 29.41565476872873, uuid: "698db8b0-bd0e-4cc2-9892-94362a7c97e5" },
//         { x: 54.18608468825252, y: 9.572077992259992, uuid: "62de0397-39a7-42e5-bdd2-51fc30023c62" },
//         { x: 90.1178069382459, y: -65.12266443595638, uuid: "a9d2a2fd-45c4-474d-aca2-82405616dba4" },
//         { x: -10.506599103815844, y: -98.35241784190929, uuid: "339227f7-b276-4fa1-bfa9-ba88727b3e74" },
//         { x: -37.21233355862425, y: 88.40587607911596, uuid: "20468857-cd73-46b7-b39c-52833b100af1" },
//         { x: 32.19258691277446, y: -97.29280931712587, uuid: "eea7123b-c8e7-4b8e-9291-8e6d6a228c39" },
//         { x: -10.082593500198158, y: 51.87864705612148, uuid: "0e082f13-5743-44d5-851f-c655a741fb6a" },
//         { x: 36.247185669677634, y: 21.611474709621262, uuid: "76a350a4-924c-474b-8f64-e543099d4cde" }
//     ],
//     true,"nonzero"
// );
// const polygon2 = new Polygon(
//     [
//         { x: 22.623483397578028, y: -59.70939983360033, uuid: "a70ebb38-e8ed-4c67-8714-3236a1f4c090" },
//         { x: 3.067017788598079, y: -68.89189652966388, uuid: "02d82888-ccfc-4177-9304-700cf7980f4d" },
//         { x: -86.04573953503501, y: -51.00533625837498, uuid: "134a69b9-c1f5-4b36-b3b6-e74646f737e0" },
//         { x: -97.7874868156435, y: -11.164725156702374, uuid: "7ac24a7a-c73b-4d4a-b5dc-5ca8241c7ce6" },
//         { x: -31.193715380705015, y: 81.215250697859, uuid: "420ed18f-8047-45ac-b9e8-578bb6529694" },
//         { x: -32.37217753466655, y: 24.33378569180067, uuid: "71259fe1-d2cc-44cf-827a-ce0fccb21a6b" },
//         { x: 96.77954641927289, y: 46.04253768084513, uuid: "9a137ea0-c51f-4ad3-9c9c-f073824acb4c" },
//         { x: 22.177364365059134, y: 52.64327075410566, uuid: "0b2bc0d4-4c05-45d0-b4cc-0a42e939a068" },
//         { x: -45.210077363080316, y: 68.0037933228804, uuid: "beba823c-18b4-4fc6-90c7-55e37489f257" },
//         { x: -50.66337024751939, y: -42.207837158660546, uuid: "6ac524d6-3a33-4836-a103-6e001352938b" }
//     ],
//     true,"nonzero"
// );
 
 
 
const description = bo.describe(polygon1, polygon2);

{
    tpl.addSection("Union");
    const compound = bo.chain(bo.selectUnion(description));

    const card1 = tpl.addCard({ title: "original",  className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean",  className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(polygon1, { interactMode: ViewElementInteractMode.None, ...strokeFill("red") }));
    view1.add(new ViewElement(polygon2, { interactMode: ViewElementInteractMode.None, ...strokeFill("blue") }));
    // view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...strokeFill("purple") }));

    compound.items.forEach((item, index) => {
        view2.add(new ViewElement(item, { interactMode: ViewElementInteractMode.None, ...strokeFillByIndex(index) }));
    });
}
{
    tpl.addSection("Intersection");
    const compound = bo.chain(bo.selectIntersection(description));
    const card1 = tpl.addCard({ title: "original",  className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean",  className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(polygon1, { interactMode: ViewElementInteractMode.None, ...strokeFill("red") }));
    view1.add(new ViewElement(polygon2, { interactMode: ViewElementInteractMode.None, ...strokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...strokeFill("purple") }));
}

{
    tpl.addSection("Difference");
    const compound = bo.chain(bo.selectDifference(description));

    const card1 = tpl.addCard({ title: "original",  className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean",  className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(polygon1, { interactMode: ViewElementInteractMode.None, ...strokeFill("red") }));
    view1.add(new ViewElement(polygon2, { interactMode: ViewElementInteractMode.None, ...strokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...strokeFill("purple") }));
}

{
    tpl.addSection("DifferenceRev");
    const compound = bo.chain(bo.selectDifferenceRev(description));

    const card1 = tpl.addCard({ title: "original",  className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean",  className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(polygon1, { interactMode: ViewElementInteractMode.None, ...strokeFill("red") }));
    view1.add(new ViewElement(polygon2, { interactMode: ViewElementInteractMode.None, ...strokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...strokeFill("purple") }));
}

{
    tpl.addSection("Exclusion");
    const compound = bo.chain(bo.selectExclusion(description));

    const card1 = tpl.addCard({ title: "original",  className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean",  className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(polygon1, { interactMode: ViewElementInteractMode.None, ...strokeFill("red") }));
    view1.add(new ViewElement(polygon2, { interactMode: ViewElementInteractMode.None, ...strokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...strokeFill("purple") }));
}
