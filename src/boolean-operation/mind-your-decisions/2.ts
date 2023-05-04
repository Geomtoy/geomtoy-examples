import { BooleanOperation, Circle, Compound, Geomtoy, Triangle } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("A very challenging question");

tpl.addMarkdown(`
[Youtube](https://www.youtube.com/watch?v=t3Dib1etTL4)
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

const triangle = new Triangle([-2, 0], [2, 0], [0, 2 * Maths.sqrt(3)]);
const circle1 = new Circle([-2, 0], 2).toPath().reverse();
const circle2 = new Circle([2, 0], 2).toPath().reverse();
const circle3 = new Circle([0, 2 * Maths.sqrt(3)], 2).toPath().reverse();
const triangleCenter = triangle.getCentroidPoint();
const dist = triangleCenter.getDistanceBetweenPoint([0, 2 + 2 * Maths.sqrt(3)]);
const outerCircle = new Circle(triangleCenter, dist).toPath();

const origCompound = new Compound([triangle.toPath(), circle1, circle2, circle3, outerCircle]);
origCompound.fillRule = "evenodd";

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
const triangle = new Triangle([-2, 0], [2, 0], [0, 2 * Maths.sqrt(3)]);
const circle1 = new Circle([-2, 0], 2).toPath().reverse();
const circle2 = new Circle([2, 0], 2).toPath().reverse();
const circle3 = new Circle([0, 2 * Maths.sqrt(3)], 2).toPath().reverse();
const triangleCenter = triangle.getCentroidPoint();
const dist = triangleCenter.getDistanceBetweenPoint([0, 2 + 2 * Maths.sqrt(3)]);
const outerCircle = new Circle(triangleCenter, dist).toPath();

const origCompound = new Compound([triangle.toPath(), circle1, circle2, circle3, outerCircle]);
origCompound.fillRule = "evenodd";
    `
);

card2.setDescription(
    "code",
    `
const compound = bo.selfUnion(origCompound);
`
);
card2.appendDescription("markdown", ` Area: ${getArea(compound)}`);
