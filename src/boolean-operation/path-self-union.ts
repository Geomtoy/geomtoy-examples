import { BooleanOperation, Geomtoy, Path } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Path self union");
Geomtoy.setOptions({
    graphics: { pathSegmentArrow: true }
});

const bo = new BooleanOperation();
tpl.addSection("Self-intersecting case");
{
    const path1 = new Path([
        Path.moveTo([-7, -5]),
        Path.bezierTo([5, 5], [-6, -3], [-9, 1]),
        Path.quadraticBezierTo([-7, -4], [-2, 7]),
        Path.bezierTo([4, -4], [-6, 3], [7, -1]),
        Path.quadraticBezierTo([-4, -2], [6, -7]),
        Path.lineTo([1, -1]),
        Path.lineTo([-1, -7]),
        Path.lineTo([8, 3]),
        Path.arcTo(2, 4, 0, true, true, [-6, -9]),
        Path.lineTo([6, 4])
    ]);

    path1.fillRule = "nonzero";

    const path2 = path1.clone();
    path2.move(20, 0);
    path2.fillRule = "evenodd";

    const compound1 = bo.selfUnion(path1);
    const compound2 = bo.selfUnion(path2);
    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 1, pan: [-50, 75], yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "self union", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 1, pan: [-50, 75], yAxisPositiveOnBottom: false }));
    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();

    view2.startResponsive(View.centerOrigin);
    view2.startInteractive();

    card1.setDescription(
        "code",
        `
const path1 = new Path([
    Path.moveTo([-7, -5]),
    Path.bezierTo([5, 5], [-6, -3], [-9, 1]),
    Path.quadraticBezierTo([-7, -4], [-2, 7]),
    Path.bezierTo([4, -4], [-6, 3], [7, -1]),
    Path.quadraticBezierTo([-4, -2], [6, -7]),
    Path.lineTo([1, -1]),
    Path.lineTo([-1, -7]),
    Path.lineTo([8, 3]),
    Path.arcTo(2, 4, 0, true, true, [-6, -9]),
    Path.lineTo([6, 4])
]);

path1.fillRule = "nonzero";

const path2 = path1.clone();
path2.move(20, 0);
path2.fillRule = "evenodd";
    `
    );

    card2.setDescription(
        "code",
        `
const compound1 = bo.selfUnion(path1);
const compound2 = bo.selfUnion(path2);
    `
    );
    card2.appendDescription(
        "markdown",
        `
    More info about how Geomtoy boolean operation respect the fill rule, see [Respect for fill rule](boolean-operation/respect-for-fill-rule.html).`
    );

    view1.add(new ViewElement(path1, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
    view1.add(new ViewElement(path2, { type: ViewElementType.None, ...lightStrokeFill("teal") }));
    view2.add(new ViewElement(compound1, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
    view2.add(new ViewElement(compound2, { type: ViewElementType.None, ...lightStrokeFill("teal") }));
}

tpl.addSection("Coincident case");
{
    {
        const path = new Path([
            Path.moveTo([0, 1]),
            Path.quadraticBezierTo([-2, 2], [-3, 1]),
            Path.quadraticBezierTo([-1, -4], [0, 2]),
            Path.quadraticBezierTo([-1, -4], [-3, 1]),
            Path.bezierTo([-4, 0], [-1, -3], [-4, -3])
        ]);
        path.fillRule = "nonzero";

        const compound = bo.selfUnion(path);
        const card1 = tpl.addCard({ title: "original", className: "col-6" });
        const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 3, yAxisPositiveOnBottom: false }));

        const card2 = tpl.addCard({ title: "self union", className: "col-6" });
        const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 3, yAxisPositiveOnBottom: false }));
        view1.startResponsive(View.centerOrigin);
        view1.startInteractive();

        view2.startResponsive(View.centerOrigin);
        view2.startInteractive();

        card1.setDescription(
            "code",
            `
const path = new Path([
    Path.moveTo([0, 1]),
    Path.quadraticBezierTo([-2, 2], [-3, 1]),
    Path.quadraticBezierTo([-1, -4], [0, 2]),
    Path.quadraticBezierTo([-1, -4], [-3, 1]),
    Path.bezierTo([-4, 0], [-1, -3], [-4, -3])
]);
path.fillRule = "nonzero";
    `
        );

        card2.setDescription(
            "code",
            `
const compound = bo.selfUnion(path);
    `
        );
        view1.add(new ViewElement(path, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
        view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
    }
    {
        const path1 = new Path([
            Path.moveTo([-50, 25]),
            Path.quadraticBezierTo([-75, 0], [-50, -25]),
            Path.bezierTo([-40, -40], [-30, -30], [-25, -25]),
            Path.bezierTo([-20, -20], [-20, 20], [-25, 25]),
            Path.lineTo([-50, 25]),
            Path.quadraticBezierTo([-75, 0], [-50, -25]),
            Path.bezierTo([-40, -40], [-30, -30], [-25, -25]),
            Path.bezierTo([-20, -20], [-20, 20], [-25, 25])
        ]);
        path1.fillRule = "nonzero";
        const path2 = path1.clone();
        path2.move(75, 0);
        path2.fillRule = "evenodd";

        const compound1 = bo.selfUnion(path1);
        const compound2 = bo.selfUnion(path2);

        const card1 = tpl.addCard({ title: "original", className: "col-6" });
        const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

        const card2 = tpl.addCard({ title: "self union", className: "col-6" });
        const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

        view1.startResponsive(View.centerOrigin);
        view1.startInteractive();

        view2.startResponsive(View.centerOrigin);
        view2.startInteractive();

        view1.add(new ViewElement(path1, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
        view1.add(new ViewElement(path2, { type: ViewElementType.None, ...lightStrokeFill("teal") }));

        view2.add(new ViewElement(compound1, { type: ViewElementType.None, ...lightStrokeFill("indigo") }));
        view2.add(new ViewElement(compound2, { type: ViewElementType.None, ...lightStrokeFill("teal") }));

        card1.setDescription(
            "code",
            ` 
const path1 = new Path([
    Path.moveTo([-50, 25]),
    Path.quadraticBezierTo([-75, 0], [-50, -25]),
    Path.bezierTo([-40, -40], [-30, -30], [-25, -25]),
    Path.bezierTo([-20, -20], [-20, 20], [-25, 25]),
    Path.lineTo([-50, 25]),
    Path.quadraticBezierTo([-75, 0], [-50, -25]),
    Path.bezierTo([-40, -40], [-30, -30], [-25, -25]),
    Path.bezierTo([-20, -20], [-20, 20], [-25, 25])
]);
path1.fillRule = "nonzero";
const path2 = path1.clone();
path2.move(75, 0);
path2.fillRule = "evenodd";
        `
        );

        card2.setDescription(
            "code",
            `
const compound1 = bo.selfUnion(path1);
const compound2 = bo.selfUnion(path2);
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
