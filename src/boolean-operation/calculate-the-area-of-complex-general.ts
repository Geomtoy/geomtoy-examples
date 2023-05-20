import { BooleanOperation, Compound, Geomtoy, Polygon } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Calculate the area of complex general geometries");

tpl.addMarkdown(`
Whether it is polygon, path, or compound, after performing self union, 
a result compound will be obtained. The calculation of the area is very simple, 
just add up the area of all the items in the result compound.

Since we correctly handle the winding of each item, holes are negative winding and have their area calculated as negative, 
while islands are positive winding and have their area calculated as positive, etc. 
So you don't have to check the winding to determine whether each item area should be added or subtracted, just add them all up.
`);

tpl.addCode(`
const gg = ... // Polygon, Path, Compound
const bo = new BooleanOperation()
const selfUnion = bo.selfUnion(gg)
let area = 0;
selfUnion.items.forEach(item => (area += item.getArea()));
`);

tpl.addNote(`
That's why we don't provide a \`getArea\` method on \`Compound\`, 
because the area calculation of \`Compound\` is basically in complex situations.
\n
If you care about the **sign** of the area, you can take the sign of the original area of general geometries.
\n
If you are dealing with simple paths or simple polygons, 
consider the need for \`selfUnion\` as appropriate, it will take more time after all.
`);

Geomtoy.setOptions({
    graphics: {
        polygonSegmentArrow: true
    }
});

const bo = new BooleanOperation();

tpl.addNote(`
Here we use \`Polygon\` and \`Compound\` full of polygons for examples, because they are convenient for visual verification.
Of course, the area calculation of \`Path\` or \`Compound\` full of paths or arbitrary \`Compound\` is the same, 
but they is not convenient for visual verification.
`);

function getArea(c: Compound) {
    let area = 0;
    c.items.forEach(item => (area += item.getArea()));
    return area;
}

tpl.addSection("Example 1: Ordinary self-intersecting");
{
    const polygon = new Polygon([
        Polygon.vertex([-50, 0]),
        Polygon.vertex([-50, 50]),
        Polygon.vertex([50, -50]),
        Polygon.vertex([0, -100]),
        Polygon.vertex([-50, -25]),
        Polygon.vertex([-50, -50]),
        Polygon.vertex([50, 50]),
        Polygon.vertex([50, 0]),
        Polygon.vertex([0, 50])
    ]);
    polygon.fillRule = "nonzero";

    const compound = bo.selfUnion(polygon);
    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "self union", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();

    view2.startResponsive(View.centerOrigin);
    view2.startInteractive();

    view1.add(new ViewElement(polygon, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));

    card1.setDescription(
        "code",
        `
const polygon = new Polygon([
    Polygon.vertex([-50, 0]),
    Polygon.vertex([-50, 50]),
    Polygon.vertex([50, -50]),
    Polygon.vertex([0, -100]),
    Polygon.vertex([-50, -25]),
    Polygon.vertex([-50, -50]),
    Polygon.vertex([50, 50]),
    Polygon.vertex([50, 0]),
    Polygon.vertex([0, 50])
]);
polygon.fillRule = "nonzero"; 
    `
    );
    card2.setDescription("markdown", ` Area: ${getArea(compound)}`);
}

tpl.addSection("Example 2: Self-intersecting having hole NOT BY fill rule");
{
    const polygon1 = new Polygon([
        Polygon.vertex([50, 50]),
        Polygon.vertex([0, 50]),
        Polygon.vertex([0, 0]),
        Polygon.vertex([20, 0]),
        Polygon.vertex([20, 10]),
        Polygon.vertex([30, 10]),
        Polygon.vertex([30, 0]),
        Polygon.vertex([10, 10]),
        Polygon.vertex([10, 30]),
        Polygon.vertex([20, 30]),
        Polygon.vertex([20, 10]),
        Polygon.vertex([20, -20]),
        Polygon.vertex([50, -20])
    ]);
    polygon1.fillRule = "nonzero";
    const polygon2 = polygon1.clone().move(75, 0);
    polygon2.fillRule = "evenodd";

    const compound1 = bo.selfUnion(polygon1);
    const compound2 = bo.selfUnion(polygon2);

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, pan: [-100, 0], yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "self union", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, pan: [-100, 0], yAxisPositiveOnBottom: false }));

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
    Polygon.vertex([50, 50]),
    Polygon.vertex([0, 50]),
    Polygon.vertex([0, 0]),
    Polygon.vertex([20, 0]),
    Polygon.vertex([20, 10]),
    Polygon.vertex([30, 10]),
    Polygon.vertex([30, 0]),
    Polygon.vertex([10, 10]),
    Polygon.vertex([10, 30]),
    Polygon.vertex([20, 30]),
    Polygon.vertex([20, 10]),
    Polygon.vertex([20, -20]),
    Polygon.vertex([50, -20])
]);
polygon1.fillRule = "nonzero";
const polygon2 = polygon1.clone().move(75, 0);
polygon2.fillRule = "evenodd";
    `
    );

    card2.setDescription("markdown", `Area1: ${getArea(compound1)}\n\nArea2: ${getArea(compound2)}`);
}

tpl.addSection("Example 3: Self-intersecting having hole BY fill rule");
{
    const polygon1 = new Polygon([
        Polygon.vertex([0, 0]),
        Polygon.vertex([50, 0]),
        Polygon.vertex([50, 40]),
        Polygon.vertex([10, 40]),
        Polygon.vertex([10, 20]),
        Polygon.vertex([30, 20]),
        Polygon.vertex([30, 30]),
        Polygon.vertex([20, 30]),
        Polygon.vertex([20, 10]),
        Polygon.vertex([40, 10]),
        Polygon.vertex([40, 50]),
        Polygon.vertex([0, 50])
    ]);
    polygon1.fillRule = "nonzero";
    const polygon2 = polygon1.clone().move(75, 0);
    polygon2.fillRule = "evenodd";

    const compound1 = bo.selfUnion(polygon1);
    const compound2 = bo.selfUnion(polygon2);
    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, pan: [-100, 0], yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "self union", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, pan: [-100, 0], yAxisPositiveOnBottom: false }));

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
    Polygon.vertex([0, 0]),
    Polygon.vertex([50, 0]),
    Polygon.vertex([50, 40]),
    Polygon.vertex([10, 40]),
    Polygon.vertex([10, 20]),
    Polygon.vertex([30, 20]),
    Polygon.vertex([30, 30]),
    Polygon.vertex([20, 30]),
    Polygon.vertex([20, 10]),
    Polygon.vertex([40, 10]),
    Polygon.vertex([40, 50]),
    Polygon.vertex([0, 50])
]);
polygon1.fillRule = "nonzero";
const polygon2 = polygon1.clone().move(75, 0);
polygon2.fillRule = "evenodd";
    `
    );

    card2.setDescription("markdown", `Area1: ${getArea(compound1)}\n\nArea2: ${getArea(compound2)}`);
}

tpl.addSection("Example 4: Ordinary coincident");
{
    const polygon = new Polygon([
        Polygon.vertex([0, 0]),
        Polygon.vertex([0, 50]),
        Polygon.vertex([50, 50]),
        Polygon.vertex([50, 0]),
        Polygon.vertex([100, 0]),
        Polygon.vertex([100, 70]),
        Polygon.vertex([50, 70]),
        Polygon.vertex([50, 0])
    ]);
    polygon.fillRule = "nonzero";

    const compound = bo.selfUnion(polygon);
    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, pan: [-100, 0], yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "self union", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, pan: [-100, 0], yAxisPositiveOnBottom: false }));

    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();

    view2.startResponsive(View.centerOrigin);
    view2.startInteractive();

    view1.add(new ViewElement(polygon, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));

    card1.setDescription(
        "code",
        `
const polygon = new Polygon([
    Polygon.vertex([0, 0]),
    Polygon.vertex([0, 50]),
    Polygon.vertex([50, 50]),
    Polygon.vertex([50, 0]),
    Polygon.vertex([100, 0]),
    Polygon.vertex([100, 70]),
    Polygon.vertex([50, 70]),
    Polygon.vertex([50, 0])
]);
polygon.fillRule = "nonzero";
    `
    );
    card2.setDescription("markdown", `Area: ${getArea(compound)}`);
}

tpl.addSection("Example 5: Coincident having hole NOT BY fill rule");
{
    const polygon1 = new Polygon([
        Polygon.vertex([-20, 20]),
        Polygon.vertex([-20, 0]),
        Polygon.vertex([-10, 0]),
        Polygon.vertex([-10, -10]),
        Polygon.vertex([0, -10]),
        Polygon.vertex([0, 10]),
        Polygon.vertex([0, -10]),
        Polygon.vertex([-10, -10]),
        Polygon.vertex([-10, 0]),
        Polygon.vertex([0, 0]),
        Polygon.vertex([0, 20])
    ]);
    polygon1.fillRule = "nonzero";
    const polygon2 = polygon1.clone().move(25, 0);
    polygon2.fillRule = "evenodd";

    const compound1 = bo.selfUnion(polygon1);
    const compound2 = bo.selfUnion(polygon2);
    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "self union", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));

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
    Polygon.vertex([-20, 20]),
    Polygon.vertex([-20, 0]),
    Polygon.vertex([-10, 0]),
    Polygon.vertex([-10, -10]),
    Polygon.vertex([0, -10]),
    Polygon.vertex([0, 10]),
    Polygon.vertex([0, -10]),
    Polygon.vertex([-10, -10]),
    Polygon.vertex([-10, 0]),
    Polygon.vertex([0, 0]),
    Polygon.vertex([0, 20])
]);
polygon1.fillRule = "nonzero";
const polygon2 = polygon1.clone().move(25, 0);
polygon2.fillRule = "evenodd";
    `
    );
    card2.setDescription("markdown", `Area1: ${getArea(compound1)}\n\nArea2: ${getArea(compound2)}`);
}

tpl.addSection("Example 6: Coincident having hole BY fill rule");
{
    const polygon1 = new Polygon([
        Polygon.vertex([0, 0]),
        Polygon.vertex([0, -20]),
        Polygon.vertex([20, -20]),
        Polygon.vertex([20, 0]),
        Polygon.vertex([0, 0]),
        Polygon.vertex([0, -40]),
        Polygon.vertex([40, -40]),
        Polygon.vertex([40, 0]),
        Polygon.vertex([0, 0]),
        Polygon.vertex([0, -60]),
        Polygon.vertex([60, -60]),
        Polygon.vertex([60, 0])
    ]);
    polygon1.fillRule = "nonzero";
    const polygon2 = polygon1.clone().move(75, 0);
    polygon2.fillRule = "evenodd";

    const compound1 = bo.selfUnion(polygon1);
    const compound2 = bo.selfUnion(polygon2);

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, pan: [-100, 0], yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "self union", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, pan: [-100, 0], yAxisPositiveOnBottom: false }));

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
    Polygon.vertex([0, 0]),
    Polygon.vertex([0, -20]),
    Polygon.vertex([20, -20]),
    Polygon.vertex([20, 0]),
    Polygon.vertex([0, 0]),
    Polygon.vertex([0, -40]),
    Polygon.vertex([40, -40]),
    Polygon.vertex([40, 0]),
    Polygon.vertex([0, 0]),
    Polygon.vertex([0, -60]),
    Polygon.vertex([60, -60]),
    Polygon.vertex([60, 0])
]);
polygon1.fillRule = "nonzero";
const polygon2 = polygon1.clone().move(75, 0);
polygon2.fillRule = "evenodd";
    `
    );
    card2.setDescription("markdown", `Area1: ${getArea(compound1)}\n\nArea2: ${getArea(compound2)}`);
}

tpl.addSection("Example 7: Compound hole NOT BY fill rule");
{
    // prettier-ignore
    const origCompound1 = new Compound([
        new Polygon([
            Polygon.vertex([-20,20]),
            Polygon.vertex([-20,-20]),
            Polygon.vertex([20,-20]),
            Polygon.vertex([20,20]),
        ]),
        new Polygon([
            Polygon.vertex([10,10]),
            Polygon.vertex([10,-10]),
            Polygon.vertex([-10,-10]),
            Polygon.vertex([-10,10])
        ])
    ])
    origCompound1.fillRule = "nonzero";
    const origCompound2 = origCompound1.deepClone().move(50, 0);
    origCompound2.fillRule = "evenodd";

    const compound1 = bo.selfUnion(origCompound1);
    const compound2 = bo.selfUnion(origCompound2);

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, pan: [-100, 0], yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "self union", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, pan: [-100, 0], yAxisPositiveOnBottom: false }));

    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();

    view2.startResponsive(View.centerOrigin);
    view2.startInteractive();

    view1.add(new ViewElement(origCompound1, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
    view1.add(new ViewElement(origCompound2, { type: ViewElementType.None, ...lightStrokeFill("teal") }));
    view2.add(new ViewElement(compound1, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
    view2.add(new ViewElement(compound2, { type: ViewElementType.None, ...lightStrokeFill("teal") }));

    card1.setDescription(
        "code",
        `
const origCompound1 = new Compound([
    new Polygon([
        Polygon.vertex([-20,20]),
        Polygon.vertex([-20,-20]),
        Polygon.vertex([20,-20]),
        Polygon.vertex([20,20]),
    ]),
    new Polygon([
        Polygon.vertex([10,10]),
        Polygon.vertex([10,-10]),
        Polygon.vertex([-10,-10]),
        Polygon.vertex([-10,10])
    ])
])
origCompound1.fillRule = "nonzero";
const origCompound2 = origCompound1.deepClone().move(50, 0);
origCompound2.fillRule = "evenodd";
    `
    );
    card2.setDescription("markdown", `Area1: ${getArea(compound1)}\n\nArea2: ${getArea(compound2)}`);
}

tpl.addSection("Example 8: Compound hole BY fill rule");
{
    // prettier-ignore
    const origCompound1 = new Compound([
        new Polygon([
            Polygon.vertex([-20,20]),
            Polygon.vertex([-20,-20]),
            Polygon.vertex([20,-20]),
            Polygon.vertex([20,20]),
        ]),
        new Polygon([
            Polygon.vertex([-10,10]),
            Polygon.vertex([-10,-10]),
            Polygon.vertex([10,-10]),
            Polygon.vertex([10,10])
        ])
    ])
    origCompound1.fillRule = "nonzero";
    const origCompound2 = origCompound1.deepClone().move(50, 0);
    origCompound2.fillRule = "evenodd";

    const compound1 = bo.selfUnion(origCompound1);
    const compound2 = bo.selfUnion(origCompound2);

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, pan: [-100, 0], yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "self union", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, pan: [-100, 0], yAxisPositiveOnBottom: false }));

    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();

    view2.startResponsive(View.centerOrigin);
    view2.startInteractive();

    view1.add(new ViewElement(origCompound1, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
    view1.add(new ViewElement(origCompound2, { type: ViewElementType.None, ...lightStrokeFill("teal") }));
    view2.add(new ViewElement(compound1, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
    view2.add(new ViewElement(compound2, { type: ViewElementType.None, ...lightStrokeFill("teal") }));

    card1.setDescription(
        "code",
        `
const origCompound1 = new Compound([
    new Polygon([
        Polygon.vertex([-20,20]),
        Polygon.vertex([-20,-20]),
        Polygon.vertex([20,-20]),
        Polygon.vertex([20,20]),
    ]),
    new Polygon([
        Polygon.vertex([-10,10]),
        Polygon.vertex([-10,-10]),
        Polygon.vertex([10,-10]),
        Polygon.vertex([10,10])
    ])
])
origCompound1.fillRule = "nonzero";
const origCompound2 = origCompound1.deepClone().move(50, 0);
origCompound2.fillRule = "evenodd";
    `
    );
    card2.setDescription("markdown", `Area1: ${getArea(compound1)}\n\nArea2: ${getArea(compound2)}`);
}

tpl.addSection("Example 9: Compound island");
{
    // prettier-ignore
    const origCompound = new Compound([
        new Polygon([
            Polygon.vertex([-30,30]),
            Polygon.vertex([-30,-30]),
            Polygon.vertex([30,-30]),
            Polygon.vertex([30,30])
        ]),
        new Polygon([
            Polygon.vertex([20,20]),
            Polygon.vertex([20,-20]),
            Polygon.vertex([-20,-20]),
            Polygon.vertex([-20,20])
        ]),
        new Polygon([
            Polygon.vertex([-10,10]),
            Polygon.vertex([-10,-10]),
            Polygon.vertex([10,-10]),
            Polygon.vertex([10,10])
        ]),
        new Polygon([
            Polygon.vertex([-5,5]),
            Polygon.vertex([-5,-5]),
            Polygon.vertex([5,-5]),
            Polygon.vertex([5,5])
        ])
    ])
    origCompound.fillRule = "nonzero";

    const compound = bo.selfUnion(origCompound);

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "self union", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();

    view2.startResponsive(View.centerOrigin);
    view2.startInteractive();

    view1.add(new ViewElement(origCompound, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));

    card1.setDescription(
        "code",
        `
const origCompound = new Compound([
    new Polygon([
        Polygon.vertex([-30,30]),
        Polygon.vertex([-30,-30]),
        Polygon.vertex([30,-30]),
        Polygon.vertex([30,30])
    ]),
    new Polygon([
        Polygon.vertex([20,20]),
        Polygon.vertex([20,-20]),
        Polygon.vertex([-20,-20]),
        Polygon.vertex([-20,20])
    ]),
    new Polygon([
        Polygon.vertex([-10,10]),
        Polygon.vertex([-10,-10]),
        Polygon.vertex([10,-10]),
        Polygon.vertex([10,10])
    ]),
    new Polygon([
        Polygon.vertex([-5,5]),
        Polygon.vertex([-5,-5]),
        Polygon.vertex([5,-5]),
        Polygon.vertex([5,5])
    ])
])
origCompound.fillRule = "nonzero";
    `
    );
    card2.setDescription("markdown", `Area: ${getArea(compound)}`);
}
