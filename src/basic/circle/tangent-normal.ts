import { Circle, Dynamic, Point, Vector } from "@geomtoy/core";
import { Maths, Utility } from "@geomtoy/util";
import { CanvasRenderer, SubView, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill, strokeOnly, thinStrokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Circle tangent, normal vector");

{
    const card = tpl.addCard({ className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const restParams = new (new Dynamic().create({ radius: 10 }))();

    const center = new Point(0, 0);
    const circle = new Circle().bind([center, "any"], [restParams, "any"], function (e1, e2) {
        this.copyFrom(new Circle(e1.target, e2.target.radius));
    });

    const tangentNormalSubView = new SubView();
    const angles = Utility.range(0, 100).map(i => (i * Maths.PI) / 50);

    circle.on("any", function () {
        if (!circle.isValid()) return (tangentNormalSubView.elements = []);
        const tvs: Vector[] = [];
        const nvs: Vector[] = [];
        for (const a of angles) {
            tvs.push(this.getTangentVectorAtAngle(a));
            nvs.push(this.getNormalVectorAtAngle(a));
        }
        tangentNormalSubView.elements = [
            ...tvs.map(v => new ViewElement(v, { type: ViewElementType.None, ...thinStrokeOnly("red") })),
            ...nvs.map(v => new ViewElement(v, { type: ViewElementType.None, ...thinStrokeOnly("blue") }))
        ];
    });

    card.setDescription(
        "code",
        `
const restParams = new (new Dynamic().create({ radius: 10 }))();

const center = new Point(0, 0);
const circle = new Circle().bind([center, "any"], [restParams, "any"], function (e1, e2) {
    this.copyFrom(new Circle(e1.target, e2.target.radius));
});

const tangentNormalSubView = new SubView();
const angles = Utility.range(0, 100).map(i => (i * Maths.PI) / 50);

circle.on("any", function () {
    if (!circle.isValid()) return (tangentNormalSubView.elements = []);
    const tvs: Vector[] = [];
    const nvs: Vector[] = [];
    for (const a of angles) {
        tvs.push(this.getTangentVectorAtAngle(a));
        nvs.push(this.getNormalVectorAtAngle(a));
    }
    tangentNormalSubView.elements = [
        ...tvs.map(v => new ViewElement(v, { type: ViewElementType.None, ...thinStrokeOnly("red") })),
        ...nvs.map(v => new ViewElement(v, { type: ViewElementType.None, ...thinStrokeOnly("blue") }))
    ];
});
        `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const circleFolder = pane.addFolder({ title: "Circle" });
    circleFolder.addInput(restParams, "radius", { min: 0 });
    // #endregion
    view.addSubView(tangentNormalSubView);
    view.add(new ViewElement(center, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(circle, { type: ViewElementType.None, ...strokeOnly("brown") }));
}
