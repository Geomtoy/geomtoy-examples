import { BooleanOperation, Geomtoy, Polygon } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Polygon self union");
Geomtoy.setOptions({
    graphics: { polygonSegmentArrow: true }
});

const bo = new BooleanOperation();
tpl.addSection("Self-intersecting case");
{
    const polygon1 = new Polygon([
        Polygon.vertex([0, 0]),
        Polygon.vertex([5, 0]),
        Polygon.vertex([5, 4]),
        Polygon.vertex([1, 4]),
        Polygon.vertex([1, 2]),
        Polygon.vertex([3, 2]),
        Polygon.vertex([3, 3]),
        Polygon.vertex([2, 3]),
        Polygon.vertex([2, 1]),
        Polygon.vertex([4, 1]),
        Polygon.vertex([4, 5]),
        Polygon.vertex([0, 5])
    ]);
    polygon1.fillRule = "nonzero";

    const polygon2 = polygon1.clone();
    polygon2.move(7.5, 0);
    polygon2.fillRule = "evenodd";

    const compound1 = bo.selfUnion(polygon1);
    const compound2 = bo.selfUnion(polygon2);
    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 3, pan: [-150, 100], yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "self union", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 3, pan: [-150, 100], yAxisPositiveOnBottom: false }));
    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();

    view2.startResponsive(View.centerOrigin);
    view2.startInteractive();

    card1.setDescription(
        "code",
        `
const polygon1 = new Polygon([
    Polygon.vertex([0, 0]),
    Polygon.vertex([5, 0]),
    Polygon.vertex([5, 4]),
    Polygon.vertex([1, 4]),
    Polygon.vertex([1, 2]),
    Polygon.vertex([3, 2]),
    Polygon.vertex([3, 3]),
    Polygon.vertex([2, 3]),
    Polygon.vertex([2, 1]),
    Polygon.vertex([4, 1]),
    Polygon.vertex([4, 5]),
    Polygon.vertex([0, 5])
]);
polygon1.fillRule = "nonzero";

const polygon2 = polygon1.clone()
polygon2.move(7.5,0);
polygon2.fillRule = "evenodd";
    `
    );

    card2.setDescription(
        "code",
        `
const compound1 = bo.selfUnion(polygon1);
const compound2 = bo.selfUnion(polygon2);
    `
    );
    card2.appendDescription(
        "markdown",
        `
    More info about how Geomtoy boolean operation respect the fill rule, see [Respect for fill rule](boolean-operation/respect-for-fill-rule.html).`
    );

    view1.add(new ViewElement(polygon1, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
    view1.add(new ViewElement(polygon2, { type: ViewElementType.None, ...lightStrokeFill("teal") }));
    view2.add(new ViewElement(compound1, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
    view2.add(new ViewElement(compound2, { type: ViewElementType.None, ...lightStrokeFill("teal") }));
}

tpl.addSection("Coincident case");
{
    {
        // prettier-ignore
        const polygon = new Polygon([
            Polygon.vertex([0, 0]),
            Polygon.vertex([5, 0]),
            Polygon.vertex([0, 0]),
            Polygon.vertex([9, 0]),
            Polygon.vertex([10, 0]),
            Polygon.vertex([-11, 0]),
            Polygon.vertex([-11, 3]),
            Polygon.vertex([3, 3])
        ]);
        polygon.fillRule = "nonzero";

        const compound = bo.selfUnion(polygon);
        const card1 = tpl.addCard({ title: "original", className: "col-6" });
        const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 2, yAxisPositiveOnBottom: false }));

        const card2 = tpl.addCard({ title: "self union", className: "col-6" });
        const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 2, yAxisPositiveOnBottom: false }));
        view1.startResponsive(View.centerOrigin);
        view1.startInteractive();

        view2.startResponsive(View.centerOrigin);
        view2.startInteractive();

        card1.setDescription(
            "code",
            `
const polygon = new Polygon([
    Polygon.vertex([0, 0]),
    Polygon.vertex([5, 0]),
    Polygon.vertex([0, 0]),
    Polygon.vertex([9, 0]),
    Polygon.vertex([10, 0]),
    Polygon.vertex([-11, 0]),
    Polygon.vertex([-11, 3]),
    Polygon.vertex([3, 3])
]);
polygon.fillRule = "nonzero";
    `
        );

        card2.setDescription(
            "code",
            `
const compound = bo.selfUnion(polygon);
    `
        );

        view1.add(new ViewElement(polygon, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
        view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
    }
    {
        const polygon = new Polygon([
            Polygon.vertex([0, 0]),
            Polygon.vertex([5, 0]),
            Polygon.vertex([5, 5]),
            Polygon.vertex([5, -5]),
            Polygon.vertex([5, 3]),
            Polygon.vertex([5, -3]),
            Polygon.vertex([5, 2]),
            Polygon.vertex([5, -2]),
            Polygon.vertex([5, 0]),
            Polygon.vertex([10, 0]),
            Polygon.vertex([10, 4]),
            Polygon.vertex([0, 4])
        ]);
        polygon.fillRule = "nonzero";

        const compound = bo.selfUnion(polygon);
        const card1 = tpl.addCard({ title: "original", className: "col-6" });
        const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 2, pan: [-100, 0], yAxisPositiveOnBottom: false }));

        const card2 = tpl.addCard({ title: "self union", className: "col-6" });
        const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 2, pan: [-100, 0], yAxisPositiveOnBottom: false }));

        view1.startResponsive(View.centerOrigin);
        view1.startInteractive();

        view2.startResponsive(View.centerOrigin);
        view2.startInteractive();

        card1.setDescription(
            "code",
            `
const polygon = new Polygon([
    Polygon.vertex([0, 0]),
    Polygon.vertex([5, 0]),
    Polygon.vertex([5, 5]),
    Polygon.vertex([5, -5]),
    Polygon.vertex([5, 3]),
    Polygon.vertex([5, -3]),
    Polygon.vertex([5, 2]),
    Polygon.vertex([5, -2]),
    Polygon.vertex([5, 0]),
    Polygon.vertex([10, 0]),
    Polygon.vertex([10, 4]),
    Polygon.vertex([0, 4])
]);
polygon.fillRule = "nonzero";
    `
        );

        card2.setDescription(
            "code",
            `
const compound = bo.selfUnion(polygon);
    `
        );

        view1.add(new ViewElement(polygon, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
        view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
    }
    {
        const polygon1 = new Polygon([
            Polygon.vertex([-50, 25]),
            Polygon.vertex([-50, -25]),
            Polygon.vertex([-25, -25]),
            Polygon.vertex([-25, 25]),
            Polygon.vertex([-50, 25]),
            Polygon.vertex([-50, -25]),
            Polygon.vertex([-25, -25]),
            Polygon.vertex([-25, 25])
        ]);
        polygon1.fillRule = "nonzero";
        const polygon2 = polygon1.clone();
        polygon2.move(75, 0);
        polygon2.fillRule = "evenodd";

        const compound1 = bo.selfUnion(polygon1);
        const compound2 = bo.selfUnion(polygon2);

        const card1 = tpl.addCard({ title: "original", className: "col-6" });
        const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

        const card2 = tpl.addCard({ title: "self union", className: "col-6" });
        const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

        view1.startResponsive(View.centerOrigin);
        view1.startInteractive();

        view2.startResponsive(View.centerOrigin);
        view2.startInteractive();

        view1.add(new ViewElement(polygon1, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
        view1.add(new ViewElement(polygon2, { type: ViewElementType.None, ...lightStrokeFill("teal") }));

        view2.add(new ViewElement(compound1, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
        view2.add(new ViewElement(compound2, { type: ViewElementType.None, ...lightStrokeFill("teal") }));

        card1.setDescription(
            "code",
            ` 
const polygon1 = new Polygon([
    Polygon.vertex([-50, 25]),
    Polygon.vertex([-50, -25]),
    Polygon.vertex([-25, -25]),
    Polygon.vertex([-25, 25]),
    Polygon.vertex([-50, 25]),
    Polygon.vertex([-50, -25]),
    Polygon.vertex([-25, -25]),
    Polygon.vertex([-25, 25])
]);
polygon1.fillRule = "nonzero"; 
const polygon2 = polygon1.clone();
polygon2.move(75, 0);
polygon2.fillRule = "evenodd"; 
        `
        );

        card2.setDescription(
            "code",
            `
const compound1 = bo.selfUnion(polygon1);
const compound2 = bo.selfUnion(polygon2);
        `
        );

        card2.appendDescription(
            "markdown",
            `
        More info about how Geomtoy boolean operation respect the fill rule, see [Respect for fill rule](boolean-operation/respect-for-fill-rule.html).
        `
        );
    }
}
