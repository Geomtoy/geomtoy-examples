import { BooleanOperation, Compound, Geomtoy, Path, Rectangle, Transformation } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("What is the blue area equal to? The blue slices puzzle");

tpl.addMarkdown(`
[Youtube](https://www.youtube.com/watch?v=DAsjIBfGp7c)
`);

Geomtoy.setOptions({
    graphics: {
        pathSegmentArrow: true,
        polygonSegmentArrow: true
    }
});

const bo = new BooleanOperation();

function getArea(c: Compound) {
    let area = 0;
    c.items.forEach(item => (area += item.getArea()));
    return area;
}

const polygon = new Rectangle([0, 0], 4, 4)
    .toPolygon()
    .apply(new Transformation().setRotate(Maths.PI / 4))
    .reverse();
// prettier-ignore
const halfCircle1 = new Path([
    Path.moveTo([0, 0]), 
    Path.arcTo(Maths.SQRT2, Maths.SQRT2, 0, false, true, [0, 2 * Maths.SQRT2])
]);
const halfCircle2 = halfCircle1.clone().apply(new Transformation().setRotate(Maths.PI / 2, [0, 2 * Maths.SQRT2]));
const halfCircle3 = halfCircle1.clone().apply(new Transformation().setRotate(Maths.PI, [0, 2 * Maths.SQRT2]));
const halfCircle4 = halfCircle1.clone().apply(new Transformation().setRotate(-Maths.PI / 2, [0, 2 * Maths.SQRT2]));

const origCompound = new Compound([polygon, halfCircle1, halfCircle2, halfCircle3, halfCircle4]);
origCompound.fillRule = "nonzero";

const compound = bo.selfUnion(origCompound);
const card1 = tpl.addCard({ title: "original", className: "col-6" });
const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 2, yAxisPositiveOnBottom: false }));

const card2 = tpl.addCard({ title: "self union", className: "col-6" });
const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 2, yAxisPositiveOnBottom: false }));

view1.startResponsive(View.centerOrigin);
view1.startInteractive();

view2.startResponsive(View.centerOrigin);
view2.startInteractive();

view1.add(new ViewElement(origCompound, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));

card1.setDescription(
    "code",
    `
const polygon = new Rectangle([0, 0], 4, 4)
    .toPolygon()
    .apply(new Transformation().setRotate(Maths.PI / 4))
    .reverse();
const halfCircle1 = new Path([
    Path.moveTo([0, 0]), 
    Path.arcTo(Maths.SQRT2, Maths.SQRT2, 0, false, true, [0, 2 * Maths.SQRT2])
]);
const halfCircle2 = halfCircle1.clone().apply(new Transformation().setRotate(Maths.PI / 2, [0, 2 * Maths.SQRT2]));
const halfCircle3 = halfCircle1.clone().apply(new Transformation().setRotate(Maths.PI, [0, 2 * Maths.SQRT2]));
const halfCircle4 = halfCircle1.clone().apply(new Transformation().setRotate(-Maths.PI / 2, [0, 2 * Maths.SQRT2]));

const origCompound = new Compound([polygon, halfCircle1, halfCircle2, halfCircle3, halfCircle4]);
origCompound.fillRule = "nonzero";
    `
);
card2.setDescription(
    "code",
    `
const compound = bo.selfUnion(origCompound);
`
);
card2.appendDescription("markdown", `Area: ${getArea(compound)}`);
