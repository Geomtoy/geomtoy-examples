import { Arc, Point, SealedShapeObject, ShapeArray } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import { CanvasRenderer, SubView, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { codeHtml, lightStrokeOnly, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Arc portion and split");

tpl.addSection("portion");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const arc = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 20, 10, 0, (3 * Maths.PI) / 2, true, Maths.PI / 4);
    const arcPortion = new SealedShapeObject({
        arc: new Arc(),
        arcPoint1: new Point(),
        arcPoint2: new Point()
    }).bind([arc, "any"], function (e) {
        this.items.arc.copyFrom(e.target.portionOf(Maths.PI / 3, Maths.PI));
        this.items.arcPoint1 = this.items.arc.point1;
        this.items.arcPoint2 = this.items.arc.point2;
    });

    card.setDescription(
        "code",
        ` 
const arc = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 20, 10, 0, (3 * Maths.PI) / 2, true, Maths.PI / 4);
const arcPortion = new SealedShapeObject({
    arc: new Arc(),
    arcPoint1: new Point(),
    arcPoint2: new Point()
}).bind([arc, "any"], function (e) {
    this.items.arc.copyFrom(e.target.portionOf(Maths.PI / 3, Maths.PI));
    this.items.arcPoint1 = this.items.arc.point1;
    this.items.arcPoint2 = this.items.arc.point2;
});
    `
    );
    view.add(new ViewElement(arcPortion, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeOnly("orange") }));
    view.add(new ViewElement(arc, { interactMode: ViewElementInteractMode.Activation, ...strokeOnly("brown") }));
}

tpl.addSection("split");
tpl.addSubSection("splitAtAngle");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const arc = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 20, 10, 0, (3 * Maths.PI) / 2, true, Maths.PI / 4);

    const arcPortions = new SealedShapeObject({
        first: new SealedShapeObject({
            arc: new Arc(),
            arcPoint1: new Point(),
            arcPoint2: new Point()
        }),
        second: new SealedShapeObject({
            arc: new Arc(),
            arcPoint1: new Point(),
            arcPoint2: new Point()
        })
    }).bind([arc, "any"], function (e) {
        const splitted = arc.splitAtAngle(Maths.PI / 4);
        this.items.first.items.arc = splitted[0];
        this.items.first.items.arcPoint1 = this.items.first.items.arc.point1;
        this.items.first.items.arcPoint2 = this.items.first.items.arc.point2;

        this.items.second.items.arc = splitted[1];
        this.items.second.items.arcPoint1 = this.items.second.items.arc.point1;
        this.items.second.items.arcPoint2 = this.items.second.items.arc.point2;
    });

    card.setDescription(
        "code",
        ` 
const arc = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 20, 10, 0, (3 * Maths.PI) / 2, true, Maths.PI / 4);

const arcPortions = new SealedShapeObject({
    first: new SealedShapeObject({
        arc: new Arc(),
        arcPoint1: new Point(),
        arcPoint2: new Point()
    }),
    second: new SealedShapeObject({
        arc: new Arc(),
        arcPoint1: new Point(),
        arcPoint2: new Point()
    })
}).bind([arc, "any"], function (e) {
    const splitted = arc.splitAtAngle(Maths.PI / 4);
    this.items.first.items.arc = splitted[0];
    this.items.first.items.arcPoint1 = this.items.first.items.arc.point1;
    this.items.first.items.arcPoint2 = this.items.first.items.arc.point2;

    this.items.second.items.arc = splitted[1];
    this.items.second.items.arcPoint1 = this.items.second.items.arc.point1;
    this.items.second.items.arcPoint2 = this.items.second.items.arc.point2;
});    
    `
    );

    view.add(new ViewElement(arcPortions.items.first, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeOnly("lime") }));
    view.add(new ViewElement(arcPortions.items.second, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeOnly("green") }));
    view.add(new ViewElement(arc, { interactMode: ViewElementInteractMode.Activation, ...strokeOnly("brown") }));
}
tpl.addSubSection("splitAtAngles");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const arc = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 20, 10, 0, (3 * Maths.PI) / 2, true, Maths.PI / 4);

    const stylesFn = function (index: number) {
        const colors = ["lime", "green", "amber", "teal", "orange"];
        return lightStrokeOnly(colors[index % colors.length] as any);
    };

    const splittedArcSubView = new SubView();
    arc.on("any", function (e) {
        const arcPortions = e.target.splitAtAngles([Maths.PI / 4, Maths.PI / 2, (2 * Maths.PI) / 3, Maths.PI]);
        splittedArcSubView.elements = arcPortions.map((p, i) => new ViewElement(new ShapeArray([p, p.point1, p.point2]), { interactMode: ViewElementInteractMode.Activation, ...stylesFn(i) }));
    });
    card.setDescription(
        "code",
        ` 
const arc = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 20, 10, 0, (3 * Maths.PI) / 2, true, Maths.PI / 4);

const stylesFn = function (index: number) {
    const colors = ["lime", "green", "amber", "teal", "orange"];
    return lightStrokeOnly(colors[index % colors.length] as any);
};

const splittedArcSubView = new SubView();
arc.on("any", function (e) {
    const arcPortions = e.target.splitAtAngles([Maths.PI / 4, Maths.PI / 2, (2 * Maths.PI) / 3, Maths.PI]);
    splittedArcSubView.elements = arcPortions.map((p, i) => new ViewElement(new ShapeArray([p, p.point1, p.point2]), { interactMode: ViewElementInteractMode.Activation, ...styleFn(i) }));
});
    `
    );
    view.addSubView(splittedArcSubView);
    view.add(new ViewElement(arc, { zIndex: -1, interactMode: ViewElementInteractMode.Activation, ...strokeOnly("brown") }));
}
