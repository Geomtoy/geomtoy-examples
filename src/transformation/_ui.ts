import { Anchor, Arbitrary, Geometry, Image, Point, Rectangle, Transformation } from "@geomtoy/core";
import { Vector2 } from "@geomtoy/util";
import { SubView, View, ViewElement, ViewElementEventType, ViewElementInteractMode } from "@geomtoy/view";
import color from "../assets/scripts/color";
import { fillTransOnly, thinStrokeOnly } from "../assets/scripts/common";

const iconHUrl = "assets/img/icons/h.svg";
const iconNeSwUrl = "assets/img/icons/ne-sw.svg";
const iconNwSeUrl = "assets/img/icons/nw-se.svg";
const iconVUrl = "assets/img/icons/v.svg";
const iconCUrl = "assets/img/icons/c.svg";
const iconDotUrl = "assets/img/icons/dot.svg";
const iconNeUrl = "assets/img/icons/ne.svg";
const iconNwUrl = "assets/img/icons/nw.svg";
const iconSeUrl = "assets/img/icons/se.svg";
const iconSwUrl = "assets/img/icons/sw.svg";

export function showTransformInterface(arbitraryViewElement: ViewElement<Arbitrary>, view: View) {
    const arbitrary = arbitraryViewElement.shape as Arbitrary;
    const original = arbitrary.data("original") as Geometry;
    const transform = arbitrary.data("transform") as Transformation;

    arbitrary.bind([transform, "any"], function (e) {
        this.copyFrom(original.apply(e.target));
    });

    const bkTransform = transform.clone();

    let operationType: "translate" | "scale" | "scaleX" | "scaleY" | "skewX" | "skewY" | "rotate";
    let initial: [number, number];
    let origin: [number, number];
    let currentIconSet = 1;

    const iconSet1 = {
        scaleNw: new ViewElement(new Image(0, 0, 20, 20, iconNwSeUrl, true, Anchor.RightBottom), { zIndex: 5, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
        scaleN: new ViewElement(new Image(0, 0, 20, 20, iconVUrl, true, Anchor.CenterBottom), { zIndex: 5, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
        scaleNe: new ViewElement(new Image(0, 0, 20, 20, iconNeSwUrl, true, Anchor.LeftBottom), { zIndex: 5, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
        scaleE: new ViewElement(new Image(0, 0, 20, 20, iconHUrl, true, Anchor.LeftCenter), { zIndex: 5, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
        scaleSe: new ViewElement(new Image(0, 0, 20, 20, iconNwSeUrl, true, Anchor.LeftTop), { zIndex: 5, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
        scaleS: new ViewElement(new Image(0, 0, 20, 20, iconVUrl, true, Anchor.CenterTop), { zIndex: 5, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
        scaleSw: new ViewElement(new Image(0, 0, 20, 20, iconNeSwUrl, true, Anchor.RightTop), { zIndex: 5, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
        scaleW: new ViewElement(new Image(0, 0, 20, 20, iconHUrl, true, Anchor.RightCenter), { zIndex: 5, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
        translate: new ViewElement(new Image(0, 0, 20, 20, iconCUrl, true, Anchor.CenterCenter), { zIndex: 5, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() })
    };
    iconSet1.translate.on(ViewElementEventType.DragStart, function () {
        initial = iconSet1.translate.shape.coordinates;
        origin = iconSet1.translate.shape.coordinates;
        operationType = "translate";
        prepareOperation();
    });
    iconSet1.scaleNw.on(ViewElementEventType.DragStart, function () {
        initial = iconSet1.scaleNw.shape.coordinates;
        origin = iconSet1.scaleSe.shape.coordinates;
        operationType = "scale";
        prepareOperation();
    });
    iconSet1.scaleN.on(ViewElementEventType.DragStart, function () {
        initial = iconSet1.scaleN.shape.coordinates;
        origin = iconSet1.scaleS.shape.coordinates;
        operationType = "scaleY";
        prepareOperation();
    });
    iconSet1.scaleNe.on(ViewElementEventType.DragStart, function () {
        initial = iconSet1.scaleNe.shape.coordinates;
        origin = iconSet1.scaleSw.shape.coordinates;
        operationType = "scale";
        prepareOperation();
    });
    iconSet1.scaleE.on(ViewElementEventType.DragStart, function () {
        initial = iconSet1.scaleE.shape.coordinates;
        origin = iconSet1.scaleW.shape.coordinates;
        operationType = "scaleX";
        prepareOperation();
    });
    iconSet1.scaleSe.on(ViewElementEventType.DragStart, function () {
        initial = iconSet1.scaleSe.shape.coordinates;
        origin = iconSet1.scaleNw.shape.coordinates;
        operationType = "scale";
        prepareOperation();
    });
    iconSet1.scaleS.on(ViewElementEventType.DragStart, function () {
        initial = iconSet1.scaleS.shape.coordinates;
        origin = iconSet1.scaleN.shape.coordinates;
        operationType = "scaleY";
        prepareOperation();
    });
    iconSet1.scaleSw.on(ViewElementEventType.DragStart, function () {
        initial = iconSet1.scaleSw.shape.coordinates;
        origin = iconSet1.scaleNe.shape.coordinates;
        operationType = "scale";
        prepareOperation();
    });
    iconSet1.scaleW.on(ViewElementEventType.DragStart, function () {
        initial = iconSet1.scaleW.shape.coordinates;
        origin = iconSet1.scaleE.shape.coordinates;
        operationType = "scaleX";
        prepareOperation();
    });

    const iconSet1SubView = new SubView().add(...Object.values(iconSet1));

    const iconSet2 = {
        rotateNw: new ViewElement(new Image(0, 0, 20, 20, iconNwUrl, true, Anchor.RightBottom), { zIndex: 5, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
        skewN: new ViewElement(new Image(0, 0, 20, 20, iconHUrl, true, Anchor.CenterBottom), { zIndex: 5, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
        rotateNe: new ViewElement(new Image(0, 0, 20, 20, iconNeUrl, true, Anchor.LeftBottom), { zIndex: 5, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
        skewE: new ViewElement(new Image(0, 0, 20, 20, iconVUrl, true, Anchor.LeftCenter), { zIndex: 5, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
        rotateSe: new ViewElement(new Image(0, 0, 20, 20, iconSeUrl, true, Anchor.LeftTop), { zIndex: 5, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
        skewS: new ViewElement(new Image(0, 0, 20, 20, iconHUrl, true, Anchor.CenterTop), { zIndex: 5, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
        rotateSw: new ViewElement(new Image(0, 0, 20, 20, iconSwUrl, true, Anchor.RightTop), { zIndex: 5, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
        skewW: new ViewElement(new Image(0, 0, 20, 20, iconVUrl, true, Anchor.RightCenter), { zIndex: 5, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
        dot: new ViewElement(new Image(0, 0, 20, 20, iconDotUrl, true, Anchor.CenterCenter), { zIndex: 6, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() })
    };
    iconSet2.dot
        .on(ViewElementEventType.DragEnd, function () {
            origin = this.shape.coordinates;
        })
        .on(ViewElementEventType.Click, function () {
            const [x, y, w, h] = box.shape.getBoundingBox();
            this.shape.coordinates = [x + w / 2, y + h / 2];
            origin = [x + w / 2, y + h / 2];
        });

    iconSet2.rotateNw.on(ViewElementEventType.DragStart, function () {
        initial = iconSet2.rotateNw.shape.coordinates;
        operationType = "rotate";
        prepareOperation();
    });
    iconSet2.rotateNe.on(ViewElementEventType.DragStart, function () {
        initial = iconSet2.rotateNe.shape.coordinates;
        operationType = "rotate";
        prepareOperation();
    });
    iconSet2.rotateSe.on(ViewElementEventType.DragStart, function () {
        initial = iconSet2.rotateSe.shape.coordinates;
        operationType = "rotate";
        prepareOperation();
    });
    iconSet2.rotateSw.on(ViewElementEventType.DragStart, function () {
        initial = iconSet2.rotateSw.shape.coordinates;
        operationType = "rotate";
        prepareOperation();
    });
    iconSet2.skewN.on(ViewElementEventType.DragStart, function () {
        initial = iconSet2.skewN.shape.coordinates;
        operationType = "skewX";
        prepareOperation();
    });
    iconSet2.skewS.on(ViewElementEventType.DragStart, function () {
        initial = iconSet2.skewS.shape.coordinates;
        operationType = "skewX";
        prepareOperation();
    });
    iconSet2.skewE.on(ViewElementEventType.DragStart, function () {
        initial = iconSet2.skewE.shape.coordinates;
        operationType = "skewY";
        prepareOperation();
    });
    iconSet2.skewW.on(ViewElementEventType.DragStart, function () {
        initial = iconSet2.skewW.shape.coordinates;
        operationType = "skewY";
        prepareOperation();
    });

    const iconSet2SubView = new SubView().add(...Object.values(iconSet2));

    const operationSet = {
        originPoint: new ViewElement(new Point("plus"), { zIndex: 7, interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("red") }),
        operationPoint: new ViewElement(new Point("cross"), { zIndex: 7, interactMode: ViewElementInteractMode.Operation, ...thinStrokeOnly("green") })
    };
    const operationSetSubView = new SubView().add(...Object.values(operationSet));

    const box = new ViewElement(new Rectangle(...arbitrary.getBoundingBox()), {
        zIndex: 4,
        interactMode: ViewElementInteractMode.Operation,
        noDrag: true,
        style: {
            stroke: color("gray"),
            strokeWidth: 1,
            strokeDash: [2],
            fill: "transparent"
        },
        hoverStyle: { fill: "transparent", stroke: color("gray") },
        clickStyle: { fill: "transparent", stroke: color("yellow") }
    });
    view.add(box);
    box.on(ViewElementEventType.Click, function (e) {
        if (currentIconSet === 1) showIconSet2();
        else showIconSet1();
    });
    box.shape.bind([arbitrary, "any"], function (e) {
        this.copyFrom(new Rectangle(...e.target.getBoundingBox()));
    });

    showIconSet1();

    function showIconSet1() {
        view.removeSubView(iconSet2SubView);
        view.addSubView(iconSet1SubView);
        const [x, y, w, h] = box.shape.getBoundingBox();
        iconSet1.scaleNw.shape.coordinates = [x, y];
        iconSet1.scaleN.shape.coordinates = [x + w / 2, y];
        iconSet1.scaleNe.shape.coordinates = [x + w, y];
        iconSet1.scaleE.shape.coordinates = [x + w, y + h / 2];
        iconSet1.scaleSe.shape.coordinates = [x + w, y + h];
        iconSet1.scaleS.shape.coordinates = [x + w / 2, y + h];
        iconSet1.scaleSw.shape.coordinates = [x, y + h];
        iconSet1.scaleW.shape.coordinates = [x, y + h / 2];
        iconSet1.translate.shape.coordinates = [x + w / 2, y + h / 2];
        currentIconSet = 1;
    }
    function showIconSet2() {
        view.removeSubView(iconSet1SubView);
        view.addSubView(iconSet2SubView);
        const [x, y, w, h] = box.shape.getBoundingBox();
        iconSet2.rotateNw.shape.coordinates = [x, y];
        iconSet2.skewN.shape.coordinates = [x + w / 2, y];
        iconSet2.rotateNe.shape.coordinates = [x + w, y];
        iconSet2.skewE.shape.coordinates = [x + w, y + h / 2];
        iconSet2.rotateSe.shape.coordinates = [x + w, y + h];
        iconSet2.skewS.shape.coordinates = [x + w / 2, y + h];
        iconSet2.rotateSw.shape.coordinates = [x, y + h];
        iconSet2.skewW.shape.coordinates = [x, y + h / 2];
        if (origin === undefined) iconSet2.dot.shape.coordinates = origin = [x + w / 2, y + h / 2];
        else iconSet2.dot.shape.coordinates = origin;
        currentIconSet = 2;
    }

    operationSet.operationPoint.on(ViewElementEventType.DragEnd, function (e) {
        endOperation();
    });

    function endOperation() {
        view.removeSubView(operationSetSubView);
        bkTransform.setMatrix(...transform.matrix);
        if (currentIconSet === 1) showIconSet1();
        else showIconSet2();
    }

    function prepareOperation() {
        view.removeSubView(iconSet1SubView, iconSet2SubView);
        view.addSubView(operationSetSubView);
        view.operate(operationSet.operationPoint);
        operationSet.operationPoint.shape.mute();
        operationSet.operationPoint.shape.coordinates = initial;
        operationSet.operationPoint.shape.unmute();
        operationSet.originPoint.shape.coordinates = origin;
    }

    operationSet.operationPoint.shape.on("any", function () {
        if (operationType === "translate") {
            const [initX, initY] = initial;
            const [currX, currY] = this.coordinates;
            const offsetX = currX - initX;
            const offsetY = currY - initY;
            transform.setMatrix(...bkTransform.clone().addTranslate(offsetX, offsetY, "pre").matrix);
        }

        if (operationType === "scale") {
            const [initX, initY] = Vector2.from(origin, initial);
            const [currX, currY] = Vector2.from(origin, this.coordinates);
            const scaleX = currX / initX;
            const scaleY = currY / initY;
            transform.setMatrix(...bkTransform.clone().addScale(scaleX, scaleY, origin, "pre").matrix);
        }
        if (operationType === "scaleX") {
            const [initX] = Vector2.from(origin, initial);
            const [currX] = Vector2.from(origin, this.coordinates);
            const scaleX = currX / initX;
            transform.setMatrix(...bkTransform.clone().addScale(scaleX, 1, origin, "pre").matrix);
        }
        if (operationType === "scaleY") {
            const [, initY] = Vector2.from(origin, initial);
            const [, currY] = Vector2.from(origin, this.coordinates);
            const scaleY = currY / initY;
            transform.setMatrix(...bkTransform.clone().addScale(1, scaleY, origin, "pre").matrix);
        }
        if (operationType === "rotate") {
            const init = Vector2.from(origin, initial);
            const curr = Vector2.from(origin, this.coordinates);
            const angle = Vector2.angleTo(init, curr);
            transform.setMatrix(...bkTransform.clone().addRotate(angle, origin, "pre").matrix);
        }
        if (operationType === "skewX") {
            const init = Vector2.from(origin, initial);
            const curr = Vector2.from(origin, this.coordinates);
            const angle = Vector2.angleTo(init, curr);
            transform.setMatrix(...bkTransform.clone().addSkew(-angle, 0, origin, "pre").matrix);
        }
        if (operationType === "skewY") {
            const init = Vector2.from(origin, initial);
            const curr = Vector2.from(origin, this.coordinates);
            const angle = Vector2.angleTo(init, curr);
            transform.setMatrix(...bkTransform.clone().addSkew(0, angle, origin, "pre").matrix);
        }
    });
}
