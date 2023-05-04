import { Arc, GeometryArray, Point, SealedShapeObject } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import { CanvasRenderer, SubView, View, ViewElement } from "@geomtoy/view";
import { lightStrokeOnly, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Arc portion and split");

tpl.addSection("Portion");
tpl.addSubSection("portionOf", true);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const arc = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 20, 10, 0, (3 * Maths.PI) / 2, true, Maths.PI / 4);
    const arcPortion = new SealedShapeObject({
        arc: new Arc(),
        arcPoint1: new Point("cross"),
        arcPoint2: new Point("cross")
    }).bind([arc, "any"], function (e) {
        this.items.arc.copyFrom(e.target.portionOf(Maths.PI / 3, Maths.PI));
        this.items.arcPoint1.copyFrom(this.items.arc.point1);
        this.items.arcPoint2.copyFrom(this.items.arc.point2);
    });

    card.setDescription(
        "code",
        ` 
const arc = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 20, 10, 0, (3 * Maths.PI) / 2, true, Maths.PI / 4);
const arcPortion = new SealedShapeObject({
    arc: new Arc(),
    arcPoint1: new Point("cross"),
    arcPoint2: new Point("cross")
}).bind([arc, "any"], function (e) {
    this.items.arc.copyFrom(e.target.portionOf(Maths.PI / 3, Maths.PI));
    this.items.arcPoint1.copyFrom(this.items.arc.point1);
    this.items.arcPoint2.copyFrom(this.items.arc.point2);
});
    `
    );
    view.add(new ViewElement(arcPortion, { ...lightStrokeOnly("orange") }));
    view.add(new ViewElement(arc, { ...strokeOnly("brown") }));
}
tpl.addSubSection("portionOfExtend", true);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const arc = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 20, 10, 0, (3 * Maths.PI) / 2, true, Maths.PI / 4);
    const arcPortion = new SealedShapeObject({
        arc: new Arc(),
        arcPoint1: new Point("cross"),
        arcPoint2: new Point("cross")
    }).bind([arc, "any"], function (e) {
        this.items.arc.copyFrom(e.target.portionOfExtend(-Maths.PI / 2, Maths.PI));
        this.items.arcPoint1.copyFrom(this.items.arc.point1);
        this.items.arcPoint2.copyFrom(this.items.arc.point2);
    });

    card.setDescription(
        "code",
        ` 
const arc = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 20, 10, 0, (3 * Maths.PI) / 2, true, Maths.PI / 4);
const arcPortion = new SealedShapeObject({
    arc: new Arc(),
    arcPoint1: new Point("cross"),
    arcPoint2: new Point("cross")
}).bind([arc, "any"], function (e) {
    this.items.arc.copyFrom(e.target.portionOfExtend(-Maths.PI / 2, Maths.PI));
    this.items.arcPoint1.copyFrom(this.items.arc.point1);
    this.items.arcPoint2.copyFrom(this.items.arc.point2);
});
    `
    );
    view.add(new ViewElement(arcPortion, { ...lightStrokeOnly("orange") }));
    view.add(new ViewElement(arc, { ...strokeOnly("brown") }));
}

tpl.addSection("Split");
tpl.addSubSection("splitAtAngle", true);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const arc = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 20, 10, 0, (3 * Maths.PI) / 2, true, Maths.PI / 4);

    const arcPortions = new SealedShapeObject({
        first: new SealedShapeObject({
            arc: new Arc(),
            arcPoint1: new Point("cross"),
            arcPoint2: new Point("cross")
        }),
        second: new SealedShapeObject({
            arc: new Arc(),
            arcPoint1: new Point("cross"),
            arcPoint2: new Point("cross")
        })
    }).bind([arc, "any"], function (e) {
        const [arc1, arc2] = e.target.splitAtAngle(Maths.PI / 4);
        this.items.first.items.arc.copyFrom(arc1);
        this.items.first.items.arcPoint1.copyFrom(arc1.point1);
        this.items.first.items.arcPoint2.copyFrom(arc1.point2);

        this.items.second.items.arc.copyFrom(arc2);
        this.items.second.items.arcPoint1.copyFrom(arc2.point1);
        this.items.second.items.arcPoint2.copyFrom(arc2.point2);
    });

    card.setDescription(
        "code",
        ` 
const arc = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 20, 10, 0, (3 * Maths.PI) / 2, true, Maths.PI / 4);

const arcPortions = new SealedShapeObject({
    first: new SealedShapeObject({
        arc: new Arc(),
        arcPoint1: new Point("cross"),
        arcPoint2: new Point("cross")
    }),
    second: new SealedShapeObject({
        arc: new Arc(),
        arcPoint1: new Point("cross"),
        arcPoint2: new Point("cross")
    })
}).bind([arc, "any"], function (e) {
    const [arc1, arc2] = e.target.splitAtAngle(Maths.PI / 4);
    this.items.first.items.arc.copyFrom(arc1);
    this.items.first.items.arcPoint1.copyFrom(arc1.point1);
    this.items.first.items.arcPoint2.copyFrom(arc1.point2);

    this.items.second.items.arc.copyFrom(arc2);
    this.items.second.items.arcPoint1.copyFrom(arc2.point1);
    this.items.second.items.arcPoint2.copyFrom(arc2.point2);
});
    `
    );

    view.add(new ViewElement(arcPortions.items.first, { ...lightStrokeOnly("cyan") }));
    view.add(new ViewElement(arcPortions.items.second, { ...lightStrokeOnly("lime") }));
    view.add(new ViewElement(arc, { ...strokeOnly("brown") }));
}
tpl.addSubSection("splitAtAngles", true);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const arc = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 20, 10, 0, (3 * Maths.PI) / 2, true, Maths.PI / 4);

    const stylesFn = (index: number) => {
        const colors = ["cyan", "lime"];
        return lightStrokeOnly(colors[index % colors.length] as Parameters<typeof lightStrokeOnly>[0]);
    };

    const arcPortionsSubView = new SubView();
    arc.on("any", function (e) {
        const arcPortions = e.target.splitAtAngles([Maths.PI / 4, Maths.PI / 2, (2 * Maths.PI) / 3, Maths.PI]);
        arcPortionsSubView.elements = arcPortions.map((arc, i) => {
            const p1 = arc.point1;
            p1.appearance = "cross";
            const p2 = arc.point2;
            p2.appearance = "cross";
            return new ViewElement(new GeometryArray([arc, p1, p2]), { ...stylesFn(i) });
        });
    });
    card.setDescription(
        "code",
        ` 
const arc = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 20, 10, 0, (3 * Maths.PI) / 2, true, Maths.PI / 4);

const stylesFn = (index: number) => {
    const colors = ["lime", "green"];
    return lightStrokeOnly(colors[index % colors.length] as Parameters<typeof lightStrokeOnly>[0]);
};

const arcPortionsSubView = new SubView();
arc.on("any", function (e) {
    const arcPortions = e.target.splitAtAngles([Maths.PI / 4, Maths.PI / 2, (2 * Maths.PI) / 3, Maths.PI]);
    arcPortionsSubView.elements = arcPortions.map((arc, i) => {
        const p1 = arc.point1;
        p1.appearance = "cross";
        const p2 = arc.point2;
        p2.appearance = "cross";
        return new ViewElement(new GeometryArray([arc, p1, p2]), { ...stylesFn(i) });
    });
});
    `
    );
    view.addSubView(arcPortionsSubView);
    view.add(new ViewElement(arc, { zIndex: -1, ...strokeOnly("brown") }));
}
