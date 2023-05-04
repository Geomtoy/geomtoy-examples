import { BooleanOperation, Circle, Compound, Geomtoy } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title('"Impossible" question stumps students');

tpl.addMarkdown(`
[Youtube](https://www.youtube.com/watch?v=bqbw9QpK2u4)
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

const circle1 = new Circle([0, 0], 4).toPath();
const circle2 = new Circle([-4, 0], 4).toPath();
const circle3 = new Circle([4, 0], 4).toPath();

const origCompound = new Compound([circle2, circle3]);

const compound = bo.difference(circle1, origCompound);

const card1 = tpl.addCard({ title: "original", className: "col-6" });
const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 2, yAxisPositiveOnBottom: false }));

const card2 = tpl.addCard({ title: "difference", className: "col-6" });
const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 2, yAxisPositiveOnBottom: false }));

view1.startResponsive(View.centerOrigin);
view1.startInteractive();
view2.startResponsive(View.centerOrigin);
view2.startInteractive();

view1.add(new ViewElement(circle1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
view1.add(new ViewElement(origCompound, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));

card1.setDescription(
    "code",
    `
const circle1 = new Circle([0, 0], 4).toPath();
const circle2 = new Circle([-4, 0], 4).toPath();
const circle3 = new Circle([4, 0], 4).toPath();

const origCompound = new Compound([circle2, circle3]);
    `
);

card2.setDescription(
    "code",
    `
const compound = bo.difference(circle1, origCompound);
`
);
card2.appendDescription("markdown", ` Area: ${getArea(compound)}`);
