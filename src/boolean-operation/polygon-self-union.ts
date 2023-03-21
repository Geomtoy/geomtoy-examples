import { BooleanOperation, Geomtoy, Polygon } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { codeHtml, lightStrokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Polygon self-union");
Geomtoy.setOptions({
    graphics: { polygonSegmentArrow: true }
});

const bo = new BooleanOperation();
{
    tpl.addSection("Common case");
    const polygon = new Polygon([
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

    polygon.fillRule = "nonzero";

    const compound = bo.selfUnion(polygon);
    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 3, pan: [-100, 100], yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "self-union", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 3, pan: [-100, 100], yAxisPositiveOnBottom: false }));

    card1.setDescription(
        "code",
        `
    const polygon = new Polygon([
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

    polygon.fillRule = "nonzero";
    `
    );

    card2.setDescription(
        "code",
        `
    const compound = bo.selfUnion(polygon);
    `
    );

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(polygon, { type: ViewElementType.None, ...lightStrokeFill("brown") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("brown") }));
}
{
    tpl.addSection("Polygon has coincident segments");
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
        console.log(compound.items[0].getSegments());
        const card1 = tpl.addCard({ title: "original", className: "col-6" });
        const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 2, yAxisPositiveOnBottom: false }));

        const card2 = tpl.addCard({ title: "self-union", className: "col-6" });
        const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 2, yAxisPositiveOnBottom: false }));

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

        view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
        view1.startInteractive();

        view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
        view2.startInteractive();

        view1.add(new ViewElement(polygon, { type: ViewElementType.None, ...lightStrokeFill("brown") }));
        view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("brown") }));
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
        console.log(compound.items[0].getSegments());
        const card1 = tpl.addCard({ title: "original", className: "col-6" });
        const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 2, pan: [-100, 0], yAxisPositiveOnBottom: false }));

        const card2 = tpl.addCard({ title: "self-union", className: "col-6" });
        const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 2, pan: [-100, 0], yAxisPositiveOnBottom: false }));

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

        view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
        view1.startInteractive();

        view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
        view2.startInteractive();

        view1.add(new ViewElement(polygon, { type: ViewElementType.None, ...lightStrokeFill("brown") }));
        view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("brown") }));
    }
    {
        const polygon = new Polygon([
            Polygon.vertex([0, 0]),
            Polygon.vertex([0, 5]),
            Polygon.vertex([5, 5]),
            Polygon.vertex([5, 0]),
            Polygon.vertex([10, 0]),
            Polygon.vertex([10, 7]),
            Polygon.vertex([5, 7]),
            Polygon.vertex([5, 0])
        ]);

        polygon.fillRule = "nonzero";

        const compound = bo.selfUnion(polygon);
        console.log(compound.items[0].getSegments());
        const card1 = tpl.addCard({ title: "original", className: "col-6" });
        const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 2, pan: [-100, 50], yAxisPositiveOnBottom: false }));

        const card2 = tpl.addCard({ title: "self-union", className: "col-6" });
        const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 2, pan: [-100, 50], yAxisPositiveOnBottom: false }));

        card1.setDescription(
            "code",
            `
    const polygon = new Polygon([
        Polygon.vertex([0, 0]),
        Polygon.vertex([0, 5]),
        Polygon.vertex([5, 5]),
        Polygon.vertex([5, 0]),
        Polygon.vertex([10, 0]),
        Polygon.vertex([10, 7]),
        Polygon.vertex([5, 7]),
        Polygon.vertex([5, 0])
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

        view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
        view1.startInteractive();

        view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
        view2.startInteractive();

        view1.add(new ViewElement(polygon, { type: ViewElementType.None, ...lightStrokeFill("brown") }));
        view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("brown") }));
    }
}
{
    tpl.addSection("About fill rule");
    tpl.addMarkdown(`Case from <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule">https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule</a>`);
    // prettier-ignore
    const polygon1 = new Polygon([
        Polygon.vertex([50, 0]), 
        Polygon.vertex([21, 90]),
        Polygon.vertex([98, 35]), 
        Polygon.vertex([2, 35]),
        Polygon.vertex([79, 90])
    ]);
    polygon1.fillRule = "nonzero";
    // prettier-ignore
    const polygon2 = new Polygon([
        Polygon.vertex([150,0]), 
        Polygon.vertex([121,90]),
        Polygon.vertex([198,35]), 
        Polygon.vertex([102,35]),
        Polygon.vertex([179,90])
    ])
    polygon2.fillRule = "evenodd";

    const compound1 = bo.selfUnion(polygon1);
    const compound2 = bo.selfUnion(polygon2);
    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { pan: [50, 50], density: 10, zoom: 0.2 }));

    const card2 = tpl.addCard({ title: "self-union", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { pan: [50, 50], density: 10, zoom: 0.2 }));

    card1.setDescription(
        "code",
        `
    const polygon1 = new Polygon([
        Polygon.vertex([50, 0]), 
        Polygon.vertex([21, 90]),
        Polygon.vertex([98, 35]), 
        Polygon.vertex([2, 35]),
        Polygon.vertex([79, 90])
    ]);
    polygon1.fillRule = "nonzero";
    const polygon2 = new Polygon([
        Polygon.vertex([150,0]), 
        Polygon.vertex([121,90]),
        Polygon.vertex([198,35]), 
        Polygon.vertex([102,35]),
        Polygon.vertex([179,90])
    ])
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

    view1.startResponsive(() => {});
    view1.startInteractive();

    view2.startResponsive(() => {});
    view2.startInteractive();

    view1.add(new ViewElement(polygon1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(polygon2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view2.add(new ViewElement(compound2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
}
{
    tpl.addSection("Special case about fill rule");
    const polygon1 = new Polygon(
        [
            Polygon.vertex([-50, 25]),
            Polygon.vertex([-50, -25]),
            Polygon.vertex([-25, -25]),
            Polygon.vertex([-25, 25]),
            Polygon.vertex([-50, 25]),
            Polygon.vertex([-50, -25]),
            Polygon.vertex([-25, -25]),
            Polygon.vertex([-25, 25])
        ],
        true
    );
    polygon1.fillRule = "evenodd";

    const polygon2 = new Polygon(
        [
            Polygon.vertex([25, 25]),
            Polygon.vertex([25, -25]),
            Polygon.vertex([50, -25]),
            Polygon.vertex([50, 25]),
            Polygon.vertex([25, 25]),
            Polygon.vertex([25, -25]),
            Polygon.vertex([50, -25]),
            Polygon.vertex([50, 25])
        ],
        true
    );
    polygon2.fillRule = "nonzero";

    const compound1 = bo.selfUnion(polygon1);
    const compound2 = bo.selfUnion(polygon2);

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "self-union", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(polygon1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(polygon2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));

    view2.add(new ViewElement(compound1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view2.add(new ViewElement(compound2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));

    card1.setDescription(
        "code",
        `
    // red and blue polygons are both two loop closed polygon
    // red polygon
    const polygon1 = new Polygon(
        
        [
            Polygon.vertex([-50, 25]),
            Polygon.vertex([-50, -25]),
            Polygon.vertex([-25, -25]),
            Polygon.vertex([-25, 25]),
            Polygon.vertex([-50, 25]),
            Polygon.vertex([-50, -25]),
            Polygon.vertex([-25, -25]),
            Polygon.vertex([-25, 25])
        ],
        true
    );
    polygon1.fillRule = "evenodd";

    // blue polygon
    const polygon2 = new Polygon(
        
        [
            Polygon.vertex([25, 25]),
            Polygon.vertex([25, -25]),
            Polygon.vertex([50, -25]),
            Polygon.vertex([50, 25]),
            Polygon.vertex([25, 25]),
            Polygon.vertex([25, -25]),
            Polygon.vertex([50, -25]),
            Polygon.vertex([50, 25]),
        ],
        true
    );
    polygon2.fillRule = "nonzero";
    `
    );

    card2.setDescription(
        "code",
        `
    // red polygon after self-union is empty set 
    const compound1 = bo.selfUnion(polygon1);

    // blue polygon after self-union is normal polygon
    const compound2 = bo.selfUnion(polygon2); 
    `
    );
}
