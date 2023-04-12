import { Bezier, GeometryArray, Point, SealedShapeObject } from "@geomtoy/core";
import { CanvasRenderer, SubView, View, ViewElement } from "@geomtoy/view";
import { lightStrokeOnly, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Bezier portion and split");

tpl.addSection("Portion");
tpl.addSection("portionOf", true);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const bezier = new Bezier([-10, -10], [20, 10], [-5, 3], [10, -2]);
    const bezierPortion = new SealedShapeObject({
        bezier: new Bezier(),
        bezierPoint1: new Point("cross"),
        bezierPoint2: new Point("cross")
    }).bind([bezier, "any"], function (e) {
        this.items.bezier.copyFrom(e.target.portionOf(0.5, 0.75));
        this.items.bezierPoint1.copyFrom(this.items.bezier.point1);
        this.items.bezierPoint2.copyFrom(this.items.bezier.point2);
    });

    card.setDescription(
        "code",
        ` 
const bezier = new Bezier([-10, -10], [20, 10], [-5, 3], [10, -2]);
const bezierPortion = new SealedShapeObject({
    bezier: new Bezier(),
    bezierPoint1: new Point("cross"),
    bezierPoint2: new Point("cross")
}).bind([bezier, "any"], function (e) {
    this.items.bezier.copyFrom(e.target.portionOf(0.5, 0.75));
    this.items.bezierPoint1.copyFrom(this.items.bezier.point1);
    this.items.bezierPoint2.copyFrom(this.items.bezier.point2);
});
    `
    );
    view.add(new ViewElement(bezierPortion, { ...lightStrokeOnly("orange") }));
    view.add(new ViewElement(bezier, { ...strokeOnly("brown") }));
}
tpl.addSection("portionOfExtend", true);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const bezier = new Bezier([-10, -10], [20, 10], [-5, 3], [10, -2]);
    const bezierPortion = new SealedShapeObject({
        bezier: new Bezier(),
        bezierPoint1: new Point("cross"),
        bezierPoint2: new Point("cross")
    }).bind([bezier, "any"], function (e) {
        this.items.bezier.copyFrom(e.target.portionOfExtend(-0.1, 1.2));
        this.items.bezierPoint1.copyFrom(this.items.bezier.point1);
        this.items.bezierPoint2.copyFrom(this.items.bezier.point2);
    });

    card.setDescription(
        "code",
        ` 
const bezier = new Bezier([-10, -10], [20, 10], [-5, 3], [10, -2]);
const bezierPortion = new SealedShapeObject({
    bezier: new Bezier(),
    bezierPoint1: new Point("cross"),
    bezierPoint2: new Point("cross")
}).bind([bezier, "any"], function (e) {
    this.items.bezier.copyFrom(e.target.portionOfExtend(-0.1, 1.2));
    this.items.bezierPoint1.copyFrom(this.items.bezier.point1);
    this.items.bezierPoint2.copyFrom(this.items.bezier.point2);
});
    `
    );
    view.add(new ViewElement(bezierPortion, { ...lightStrokeOnly("orange") }));
    view.add(new ViewElement(bezier, { ...strokeOnly("brown") }));
}

tpl.addSection("Split");
tpl.addSubSection("splitAtTime", true);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const bezier = new Bezier([-10, -10], [20, 10], [-5, 3], [10, -2]);
    const bezierPortions = new SealedShapeObject({
        first: new SealedShapeObject({
            bezier: new Bezier(),
            bezierPoint1: new Point("cross"),
            bezierPoint2: new Point("cross")
        }),
        second: new SealedShapeObject({
            bezier: new Bezier(),
            bezierPoint1: new Point("cross"),
            bezierPoint2: new Point("cross")
        })
    }).bind([bezier, "any"], function (e) {
        const [bezier1, bezier2] = e.target.splitAtTime(0.25);
        this.items.first.items.bezier.copyFrom(bezier1);
        this.items.first.items.bezierPoint1.copyFrom(bezier1.point1);
        this.items.first.items.bezierPoint2.copyFrom(bezier1.point2);

        this.items.second.items.bezier.copyFrom(bezier2);
        this.items.second.items.bezierPoint1.copyFrom(bezier2.point1);
        this.items.second.items.bezierPoint2.copyFrom(bezier2.point2);
    });

    card.setDescription(
        "code",
        ` 
const bezier = new Bezier([-10, -10], [20, 10], [-5, 3], [10, -2]);
const bezierPortions = new SealedShapeObject({
    first: new SealedShapeObject({
        bezier: new Bezier(),
        bezierPoint1: new Point("cross"),
        bezierPoint2: new Point("cross")
    }),
    second: new SealedShapeObject({
        bezier: new Bezier(),
        bezierPoint1: new Point("cross"),
        bezierPoint2: new Point("cross")
    })
}).bind([bezier, "any"], function (e) {
    const [bezier1, bezier2] = e.target.splitAtTime(0.25);
    this.items.first.items.bezier.copyFrom(bezier1);
    this.items.first.items.bezierPoint1.copyFrom(bezier1.point1);
    this.items.first.items.bezierPoint2.copyFrom(bezier1.point2);

    this.items.second.items.bezier.copyFrom(bezier2);
    this.items.second.items.bezierPoint1.copyFrom(bezier2.point1);
    this.items.second.items.bezierPoint2.copyFrom(bezier2.point2);
});
    `
    );

    view.add(new ViewElement(bezierPortions.items.first, { ...lightStrokeOnly("cyan") }));
    view.add(new ViewElement(bezierPortions.items.second, { ...lightStrokeOnly("lime") }));
    view.add(new ViewElement(bezier, { ...strokeOnly("brown") }));
}
tpl.addSubSection("splitAtTimes", true);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const bezier = new Bezier([-10, -10], [20, 10], [-5, 3], [10, -2]);

    const stylesFn = (index: number) => {
        const colors = ["cyan", "lime"];
        return lightStrokeOnly(colors[index % colors.length] as Parameters<typeof lightStrokeOnly>[0]);
    };

    const bezierPortionsSubView = new SubView();
    bezier.on("any", function (e) {
        const bezierPortions = e.target.splitAtTimes([0.3, 0.2, 0.1, 0.4]);
        bezierPortionsSubView.elements = bezierPortions.map((bezier, i) => {
            const p1 = bezier.point1;
            p1.appearance = "cross";
            const p2 = bezier.point2;
            p2.appearance = "cross";
            return new ViewElement(new GeometryArray([bezier, p1, p2]), { ...stylesFn(i) });
        });
    });
    card.setDescription(
        "code",
        ` 
const bezier = new Bezier([-10, -10], [20, 10], [-5, 3], [10, -2]);

const stylesFn = (index: number) => {
    const colors = ["cyan", "lime"];
    return lightStrokeOnly(colors[index % colors.length] as Parameters<typeof lightStrokeOnly>[0]);
};

const bezierPortionsSubView = new SubView();
bezier.on("any", function (e) {
    const bezierPortions = e.target.splitAtTimes([0.3, 0.2, 0.1, 0.4]);
    bezierPortionsSubView.elements = bezierPortions.map((bezier, i) => {
        const p1 = bezier.point1;
        p1.appearance = "cross";
        const p2 = bezier.point2;
        p2.appearance = "cross";
        return new ViewElement(new GeometryArray([bezier, p1, p2]), { ...stylesFn(i) });
    });
});
    `
    );
    view.addSubView(bezierPortionsSubView);
    view.add(new ViewElement(bezier, { zIndex: -1, ...strokeOnly("brown") }));
}
