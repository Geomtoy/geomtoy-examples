import { BooleanOperation, Compound, Path, Polygon } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Respect for fill rule from Geomtoy boolean operation");

tpl.addMarkdown(`
Currently most libraries or software boolean operations do not respect the fill rule. Of course, this is not a problem 
for the user who designs graphics, because he/she can choose these libraries or software's default fill rule to 
design graphics. 
\n
For a serious library, the fill rule should not be ignored unless you do not allow it to be changed. 
\n
The fill rule is so important that it should not be disrespected, otherwise there is no way to 
perform true WYSIWYG boolean operations.
Because boolean operations are boolean operations of **filling region or filling area**.
Let's take examples to illustrate why.
`);

const bo = new BooleanOperation();

tpl.addSection("Example 1");
{
    // prettier-ignore
    const polygon1 = new Polygon(
        [
            Polygon.vertex([-25, 25]),
            Polygon.vertex([25, 25]),
            Polygon.vertex([25, -25]),
            Polygon.vertex([-25, -25])
        ],
        true
    );
    const polygon2 = polygon1.clone();
    const compound1 = new Compound([polygon1, polygon2]);
    compound1.fillRule = "nonzero";
    // prettier-ignore
    const polygon3 = new Polygon(
        [
            Polygon.vertex([-25, 25]),
            Polygon.vertex([25, 25]),
            Polygon.vertex([25, -25]),
            Polygon.vertex([-25, -25])
        ],
        true
    );
    const polygon4 = polygon1.clone();
    const compound2 = new Compound([polygon3, polygon4]);
    compound2.fillRule = "evenodd";

    {
        const card1 = tpl.addCard({ title: "compound1", className: "col-6" });
        const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));
        const card2 = tpl.addCard({ title: "compound2", className: "col-6" });
        const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

        view1.startResponsive(View.centerOrigin);
        view1.startInteractive();
        view2.startResponsive(View.centerOrigin);
        view2.startInteractive();

        card1.setDescription(
            "code",
            `
const polygon1 = new Polygon(
    [
        Polygon.vertex([-25, 25]),
        Polygon.vertex([25, 25]),
        Polygon.vertex([25, -25]),
        Polygon.vertex([-25, -25])
    ],
    true
);
const polygon2 = polygon1.clone();
const compound1 = new Compound([polygon1, polygon2]);
compound1.fillRule = "nonzero";
    `
        );

        card2.setDescription(
            "code",
            `
const polygon3 = new Polygon(
    [
        Polygon.vertex([-25, 25]),
        Polygon.vertex([25, 25]),
        Polygon.vertex([25, -25]),
        Polygon.vertex([-25, -25])
    ],
    true
);     
const polygon4 = polygon1.clone();
const compound2 = new Compound([polygon3, polygon4]);
compound1.fillRule = "evenodd";
    `
        );

        view1.add(new ViewElement(compound1, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
        view2.add(new ViewElement(compound2, { type: ViewElementType.None, ...lightStrokeFill("teal") }));
    }

    tpl.addMarkdown(`
The above two compounds are exactly the same, except for fill rule, think about what the result will be 
if they perform \`selfUnion\` boolean operation.
`);

    {
        const card1 = tpl.addCard({ title: "compound1-self union", className: "col-6" });
        const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));
        const card2 = tpl.addCard({ title: "compound2-self union", className: "col-6" });
        const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

        view1.startResponsive(View.centerOrigin);
        view1.startInteractive();
        view2.startResponsive(View.centerOrigin);
        view2.startInteractive();

        const selfUnion1 = bo.selfUnion(compound1);
        const selfUnion2 = bo.selfUnion(compound2);

        view1.add(new ViewElement(selfUnion1, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
        view2.add(new ViewElement(selfUnion2, { type: ViewElementType.None, ...lightStrokeFill("teal") }));
    }

    tpl.addMarkdown(`
Is this result surprise you a little bit?
The indigo colored \`compound1\` successfully get a filled self union(Of course the coincident segment has been eliminated), because it originally has filling region.
The teal colored \`compound2\` will get an empty self union because it originally has no filling region. And this difference is only caused by the 
different fill rule they have.
`);
}

tpl.addSection("Example 2");

{
    const path1 = new Path([
        Path.moveTo([97, -3]),
        Path.quadraticBezierTo([9, 85], [33, -99]),
        Path.arcTo(7, 14, (Maths.PI * 3) / 4, true, true, [-87, -58]),
        Path.lineTo([-12, 31]),
        Path.lineTo([-34, -22])
    ]);
    path1.fillRule = "nonzero";
    const path2 = path1.clone();
    path2.fillRule = "evenodd";

    // prettier-ignore
    const polygon1 = new Polygon(
        [
            Polygon.vertex([48, -38]),
            Polygon.vertex([-70, -2]),
            Polygon.vertex([87, 36]),
            Polygon.vertex([0, 2]),
            Polygon.vertex([68, 52])
    ]);
    polygon1.fillRule = "nonzero";
    const polygon2 = polygon1.clone();
    polygon2.fillRule = "evenodd";

    {
        const card1 = tpl.addCard({ title: "path1 and polygon1", className: "col-6" });
        const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));
        const card2 = tpl.addCard({ title: "path2 and polygon2", className: "col-6" });
        const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

        view1.startResponsive(View.centerOrigin);
        view1.startInteractive();
        view2.startResponsive(View.centerOrigin);
        view2.startInteractive();

        card1.setDescription(
            "code",
            `
const path1 = new Path([
    Path.moveTo([97, -3]),
    Path.quadraticBezierTo([9, 85], [33, -99]),
    Path.arcTo(7, 14, (Maths.PI * 3) / 4, true, true, [-87, -58]),
    Path.lineTo([-12, 31]),
    Path.lineTo([-34, -22])
]);
path1.fillRule = "nonzero";
const polygon1 = new Polygon(
    [
        Polygon.vertex([48, -38]),
        Polygon.vertex([-70, -2]),
        Polygon.vertex([87, 36]),
        Polygon.vertex([0, 2]),
        Polygon.vertex([68, 52])
]);
polygon1.fillRule = "nonzero";
    `
        );

        card2.setDescription(
            "code",
            `
const path2 = path1.clone();
path2.fillRule = "evenodd";
const polygon2 = polygon1.clone();
polygon2.fillRule = "evenodd";
    `
        );

        view1.add(new ViewElement(path1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
        view1.add(new ViewElement(polygon1, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
        view2.add(new ViewElement(path2, { type: ViewElementType.None, ...lightStrokeFill("yellow") }));
        view2.add(new ViewElement(polygon2, { type: ViewElementType.None, ...lightStrokeFill("green") }));
    }

    tpl.addMarkdown(`
The above two paths and two polygons are exactly the same respectively, except for fill rule.
And according to different fill rules, their filling region are also different.
Think about what the result will be if the path and polygon perform \`intersection\` boolean operation.
    `);

    {
        const card1 = tpl.addCard({ title: "path1 and polygon1 intersection", className: "col-6" });
        const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));
        const card2 = tpl.addCard({ title: "path2 and polygon2 intersection", className: "col-6" });
        const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

        view1.startResponsive(View.centerOrigin);
        view1.startInteractive();
        view2.startResponsive(View.centerOrigin);
        view2.startInteractive();

        const intersection1 = bo.intersection(path1, polygon1);
        const intersection2 = bo.intersection(path2, polygon2);

        view1.add(new ViewElement(intersection1, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
        view2.add(new ViewElement(intersection2, { type: ViewElementType.None, ...lightStrokeFill("orange") }));
    }
}
tpl.addMarkdown(`
We get different but correct results of \`intersection\`, as same as the overlapped filling region they have on above.
\n
Well, let's stop with examples. 
\n
In summary, Geomtoy boolean operations strictly respect the fill rule, and can get WYSIWYG boolean results.
so before performing boolean operations, it is also important to check the fill rule of the input general geometries.
`);
