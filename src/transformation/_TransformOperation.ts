import { Anchor, Geometry, Image, Point, Rectangle, Transformation } from "@geomtoy/core";
import { Box, Vector2 } from "@geomtoy/util";
import { SubView, View, ViewElement, ViewElementEventType, ViewElementInteractMode, ViewEventObject, ViewEventType } from "@geomtoy/view";
import color from "../assets/scripts/color";
import { fillTransOnly, thinStrokeOnly } from "../assets/scripts/common";

export class TransformOperation {
    private _iconUrls = {
        iconHUrl: "assets/img/icons/h.svg",
        iconNeSwUrl: "assets/img/icons/ne-sw.svg",
        iconNwSeUrl: "assets/img/icons/nw-se.svg",
        iconVUrl: "assets/img/icons/v.svg",
        iconCUrl: "assets/img/icons/c.svg",
        iconDotUrl: "assets/img/icons/dot.svg",
        iconNeUrl: "assets/img/icons/ne.svg",
        iconNwUrl: "assets/img/icons/nw.svg",
        iconSeUrl: "assets/img/icons/se.svg",
        iconSwUrl: "assets/img/icons/sw.svg"
    };
    constructor(public view: View) {
        this._preloadIconImages();
        this._initIconSets();
        this._initOperation();
    }

    private _preloadIconImages() {
        // preload the image
        this.view.renderer.imageSourceManager.load(this._iconUrls.iconHUrl);
        this.view.renderer.imageSourceManager.load(this._iconUrls.iconNeSwUrl);
        this.view.renderer.imageSourceManager.load(this._iconUrls.iconNwSeUrl);
        this.view.renderer.imageSourceManager.load(this._iconUrls.iconVUrl);
        this.view.renderer.imageSourceManager.load(this._iconUrls.iconCUrl);
        this.view.renderer.imageSourceManager.load(this._iconUrls.iconDotUrl);
        this.view.renderer.imageSourceManager.load(this._iconUrls.iconNeUrl);
        this.view.renderer.imageSourceManager.load(this._iconUrls.iconNwUrl);
        this.view.renderer.imageSourceManager.load(this._iconUrls.iconSeUrl);
        this.view.renderer.imageSourceManager.load(this._iconUrls.iconSwUrl);
    }
    private _iconSet1!: {
        scaleNw: ViewElement<Image>;
        scaleN: ViewElement<Image>;
        scaleNe: ViewElement<Image>;
        scaleE: ViewElement<Image>;
        scaleSe: ViewElement<Image>;
        scaleS: ViewElement<Image>;
        scaleSw: ViewElement<Image>;
        scaleW: ViewElement<Image>;
        translate: ViewElement<Image>;
    };
    private _iconSet1SubView = new SubView();

    private _iconSet2!: {
        rotateNw: ViewElement<Image>;
        skewN: ViewElement<Image>;
        rotateNe: ViewElement<Image>;
        skewE: ViewElement<Image>;
        rotateSe: ViewElement<Image>;
        skewS: ViewElement<Image>;
        rotateSw: ViewElement<Image>;
        skewW: ViewElement<Image>;
        dot: ViewElement<Image>;
    };
    private _iconSet2SubView = new SubView();
    private _operationOrigin!: ViewElement<Point>;
    private _operationAction!: ViewElement<Point>;
    private _operationBox!: ViewElement<Rectangle>;

    private _operationType!: "translate" | "scale" | "scaleX" | "scaleY" | "skewX" | "skewY" | "rotate";
    private _initial!: [number, number];
    private _origin!: [number, number];
    private _currentIconSet: 1 | 2 = 1;

    private _initIconSets() {
        const t = this;

        this._iconSet1 = {
            scaleNw: new ViewElement(new Image(0, 0, 20, 20, this._iconUrls.iconNwSeUrl, true, Anchor.RightBottom), { zIndex: 2, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
            scaleN: new ViewElement(new Image(0, 0, 20, 20, this._iconUrls.iconVUrl, true, Anchor.CenterBottom), { zIndex: 2, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
            scaleNe: new ViewElement(new Image(0, 0, 20, 20, this._iconUrls.iconNeSwUrl, true, Anchor.LeftBottom), { zIndex: 2, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
            scaleE: new ViewElement(new Image(0, 0, 20, 20, this._iconUrls.iconHUrl, true, Anchor.LeftCenter), { zIndex: 2, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
            scaleSe: new ViewElement(new Image(0, 0, 20, 20, this._iconUrls.iconNwSeUrl, true, Anchor.LeftTop), { zIndex: 2, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
            scaleS: new ViewElement(new Image(0, 0, 20, 20, this._iconUrls.iconVUrl, true, Anchor.CenterTop), { zIndex: 2, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
            scaleSw: new ViewElement(new Image(0, 0, 20, 20, this._iconUrls.iconNeSwUrl, true, Anchor.RightTop), { zIndex: 2, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
            scaleW: new ViewElement(new Image(0, 0, 20, 20, this._iconUrls.iconHUrl, true, Anchor.RightCenter), { zIndex: 2, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
            translate: new ViewElement(new Image(0, 0, 20, 20, this._iconUrls.iconCUrl, true, Anchor.CenterCenter), { zIndex: 2, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() })
        };

        this._iconSet1.translate.on(ViewElementEventType.DragStart, function () {
            t._initial = this.shape.coordinates;
            t._origin = this.shape.coordinates;
            t._operationType = "translate";
            t._startOp();
        });
        this._iconSet1.scaleNw.on(ViewElementEventType.DragStart, function () {
            t._initial = this.shape.coordinates;
            t._origin = t._iconSet1.scaleSe.shape.coordinates;
            t._operationType = "scale";
            t._startOp();
        });
        this._iconSet1.scaleN.on(ViewElementEventType.DragStart, function () {
            t._initial = this.shape.coordinates;
            t._origin = t._iconSet1.scaleS.shape.coordinates;
            t._operationType = "scaleY";
            t._startOp();
        });
        this._iconSet1.scaleNe.on(ViewElementEventType.DragStart, function () {
            t._initial = this.shape.coordinates;
            t._origin = t._iconSet1.scaleSw.shape.coordinates;
            t._operationType = "scale";
            t._startOp();
        });
        this._iconSet1.scaleE.on(ViewElementEventType.DragStart, function () {
            t._initial = this.shape.coordinates;
            t._origin = t._iconSet1.scaleW.shape.coordinates;
            t._operationType = "scaleX";
            t._startOp();
        });
        this._iconSet1.scaleSe.on(ViewElementEventType.DragStart, function () {
            t._initial = this.shape.coordinates;
            t._origin = t._iconSet1.scaleNw.shape.coordinates;
            t._operationType = "scale";
            t._startOp();
        });
        this._iconSet1.scaleS.on(ViewElementEventType.DragStart, function () {
            t._initial = this.shape.coordinates;
            t._origin = t._iconSet1.scaleN.shape.coordinates;
            t._operationType = "scaleY";
            t._startOp();
        });
        this._iconSet1.scaleSw.on(ViewElementEventType.DragStart, function () {
            t._initial = this.shape.coordinates;
            t._origin = t._iconSet1.scaleNe.shape.coordinates;
            t._operationType = "scale";
            t._startOp();
        });
        this._iconSet1.scaleW.on(ViewElementEventType.DragStart, function () {
            t._initial = this.shape.coordinates;
            t._origin = t._iconSet1.scaleE.shape.coordinates;
            t._operationType = "scaleX";
            t._startOp();
        });

        this._iconSet1SubView.add(...Object.values(this._iconSet1));

        this._iconSet2 = {
            rotateNw: new ViewElement(new Image(0, 0, 20, 20, this._iconUrls.iconNwUrl, true, Anchor.RightBottom), { zIndex: 2, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
            skewN: new ViewElement(new Image(0, 0, 20, 20, this._iconUrls.iconHUrl, true, Anchor.CenterBottom), { zIndex: 2, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
            rotateNe: new ViewElement(new Image(0, 0, 20, 20, this._iconUrls.iconNeUrl, true, Anchor.LeftBottom), { zIndex: 2, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
            skewE: new ViewElement(new Image(0, 0, 20, 20, this._iconUrls.iconVUrl, true, Anchor.LeftCenter), { zIndex: 2, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
            rotateSe: new ViewElement(new Image(0, 0, 20, 20, this._iconUrls.iconSeUrl, true, Anchor.LeftTop), { zIndex: 2, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
            skewS: new ViewElement(new Image(0, 0, 20, 20, this._iconUrls.iconHUrl, true, Anchor.CenterTop), { zIndex: 2, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
            rotateSw: new ViewElement(new Image(0, 0, 20, 20, this._iconUrls.iconSwUrl, true, Anchor.RightTop), { zIndex: 2, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
            skewW: new ViewElement(new Image(0, 0, 20, 20, this._iconUrls.iconVUrl, true, Anchor.RightCenter), { zIndex: 2, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() }),
            dot: new ViewElement(new Image(0, 0, 20, 20, this._iconUrls.iconDotUrl, true, Anchor.CenterCenter), { zIndex: 3, interactMode: ViewElementInteractMode.Operation, ...fillTransOnly() })
        };

        this._iconSet2.dot
            .on(ViewElementEventType.DragEnd, function () {
                t._origin = this.shape.coordinates;
            })
            .on(ViewElementEventType.Click, function () {
                const [x, y, w, h] = t._elementsBBox;
                this.shape.coordinates = t._origin = [x + w / 2, y + h / 2];
            });

        this._iconSet2.rotateNw.on(ViewElementEventType.DragStart, function () {
            t._initial = this.shape.coordinates;
            t._operationType = "rotate";
            t._startOp();
        });
        this._iconSet2.rotateNe.on(ViewElementEventType.DragStart, function () {
            t._initial = this.shape.coordinates;
            t._operationType = "rotate";
            t._startOp();
        });
        this._iconSet2.rotateSe.on(ViewElementEventType.DragStart, function () {
            t._initial = this.shape.coordinates;
            t._operationType = "rotate";
            t._startOp();
        });
        this._iconSet2.rotateSw.on(ViewElementEventType.DragStart, function () {
            t._initial = this.shape.coordinates;
            t._operationType = "rotate";
            t._startOp();
        });
        this._iconSet2.skewN.on(ViewElementEventType.DragStart, function () {
            t._initial = this.shape.coordinates;
            t._operationType = "skewX";
            t._startOp();
        });
        this._iconSet2.skewS.on(ViewElementEventType.DragStart, function () {
            t._initial = this.shape.coordinates;
            t._operationType = "skewX";
            t._startOp();
        });
        this._iconSet2.skewE.on(ViewElementEventType.DragStart, function () {
            t._initial = this.shape.coordinates;
            t._operationType = "skewY";
            t._startOp();
        });
        this._iconSet2.skewW.on(ViewElementEventType.DragStart, function () {
            t._initial = this.shape.coordinates;
            t._operationType = "skewY";
            t._startOp();
        });

        this._iconSet2SubView.add(...Object.values(this._iconSet2));
    }
    private _initOperation() {
        const t = this;
        this._operationOrigin = new ViewElement(new Point("plus"), { zIndex: 3, interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("red") });
        this._operationAction = new ViewElement(new Point("cross"), { zIndex: 3, interactMode: ViewElementInteractMode.Operation, ...thinStrokeOnly("green") });

        this._operationAction.on(ViewElementEventType.DragEnd, function () {
            t._stopOp();
        });
        this._operationAction.shape.on("any", function () {
            let ot: Transformation;
            if (t._operationType === "translate") {
                const [initX, initY] = t._initial;
                const [currX, currY] = this.coordinates;
                const offsetX = currX - initX;
                const offsetY = currY - initY;
                ot = new Transformation().setTranslate(offsetX, offsetY);
            }

            if (t._operationType === "scale") {
                const [initX, initY] = Vector2.from(t._origin, t._initial);
                const [currX, currY] = Vector2.from(t._origin, this.coordinates);
                const scaleX = currX / initX;
                const scaleY = currY / initY;
                ot = new Transformation().setScale(scaleX, scaleY, t._origin);
            }
            if (t._operationType === "scaleX") {
                const [initX] = Vector2.from(t._origin, t._initial);
                const [currX] = Vector2.from(t._origin, this.coordinates);
                const scaleX = currX / initX;
                ot = new Transformation().setScale(scaleX, 1, t._origin);
            }
            if (t._operationType === "scaleY") {
                const [, initY] = Vector2.from(t._origin, t._initial);
                const [, currY] = Vector2.from(t._origin, this.coordinates);
                const scaleY = currY / initY;
                ot = new Transformation().setScale(1, scaleY, t._origin);
            }
            if (t._operationType === "rotate") {
                const init = Vector2.from(t._origin, t._initial);
                const curr = Vector2.from(t._origin, this.coordinates);
                const angle = Vector2.angleTo(init, curr);
                ot = new Transformation().setRotate(angle, t._origin);
            }
            if (t._operationType === "skewX") {
                const init = Vector2.from(t._origin, t._initial);
                const curr = Vector2.from(t._origin, this.coordinates);
                const angle = Vector2.angleTo(init, curr);
                // According to the definition of shear/skew angle of x-axis, here must be negative.
                ot = new Transformation().setSkew(-angle, 0, t._origin);
            }
            if (t._operationType === "skewY") {
                const init = Vector2.from(t._origin, t._initial);
                const curr = Vector2.from(t._origin, this.coordinates);
                const angle = Vector2.angleTo(init, curr);
                ot = new Transformation().setSkew(0, angle, t._origin);
            }

            t._elements.forEach(ve => {
                const t = ve.shape.data("transform") as Transformation;
                const bkt = ve.shape.data("bkTransform") as Transformation;
                t.setMatrix(...bkt.clone().addMatrix(...ot.matrix, "pre").matrix);
            });
        });

        this._operationBox = new ViewElement(new Rectangle(), {
            zIndex: 1,
            interactMode: ViewElementInteractMode.Operation,
            noDrag: true,
            style: {
                stroke: color("gray"),
                strokeWidth: 1,
                strokeDash: [2],
                noFill: true,
                fill: "transparent"
            },
            hoverStyle: { strokeWidth: 1, fill: "transparent", stroke: color("gray") },
            clickStyle: { strokeWidth: 1, fill: "transparent", stroke: color("yellow") }
        });
    }

    private _showIconSet1() {
        this.view.removeSubView(this._iconSet2SubView);
        this.view.addSubView(this._iconSet1SubView);
        const [x, y, w, h] = this._elementsBBox;
        this._iconSet1.scaleNw.shape.coordinates = [x, y];
        this._iconSet1.scaleN.shape.coordinates = [x + w / 2, y];
        this._iconSet1.scaleNe.shape.coordinates = [x + w, y];
        this._iconSet1.scaleE.shape.coordinates = [x + w, y + h / 2];
        this._iconSet1.scaleSe.shape.coordinates = [x + w, y + h];
        this._iconSet1.scaleS.shape.coordinates = [x + w / 2, y + h];
        this._iconSet1.scaleSw.shape.coordinates = [x, y + h];
        this._iconSet1.scaleW.shape.coordinates = [x, y + h / 2];
        this._iconSet1.translate.shape.coordinates = [x + w / 2, y + h / 2];
        this._origin = [x + w / 2, y + h / 2];
        this._currentIconSet = 1;
    }
    private _showIconSet2() {
        this.view.removeSubView(this._iconSet1SubView);
        this.view.addSubView(this._iconSet2SubView);
        const [x, y, w, h] = this._elementsBBox;
        this._iconSet2.rotateNw.shape.coordinates = [x, y];
        this._iconSet2.skewN.shape.coordinates = [x + w / 2, y];
        this._iconSet2.rotateNe.shape.coordinates = [x + w, y];
        this._iconSet2.skewE.shape.coordinates = [x + w, y + h / 2];
        this._iconSet2.rotateSe.shape.coordinates = [x + w, y + h];
        this._iconSet2.skewS.shape.coordinates = [x + w / 2, y + h];
        this._iconSet2.rotateSw.shape.coordinates = [x, y + h];
        this._iconSet2.skewW.shape.coordinates = [x, y + h / 2];
        this._iconSet2.dot.shape.coordinates = this._origin;
        this._currentIconSet = 2;
    }
    private switchUI() {
        if (this._currentIconSet === 1) this._showIconSet2();
        else this._showIconSet1();
    }
    private _showUI() {
        this.view.add(this._operationBox);
        this._showIconSet1();
    }
    private _hideUI() {
        this.view.remove(this._operationBox);
        this.view.removeSubView(this._iconSet1SubView, this._iconSet2SubView);
    }

    private _stopOp() {
        // show Op UI
        this.view.remove(this._operationOrigin);
        this.view.remove(this._operationAction);
        if (this._currentIconSet === 1) this._showIconSet1();
        else this._showIconSet2();
        //
        this._elements.forEach(ve => {
            const t = ve.shape.data("transform") as Transformation;
            const bkt = ve.shape.data("bkTransform") as Transformation;
            bkt.setMatrix(...t.matrix);
        });
    }
    private _startOp() {
        // hide Op UI
        this.view.removeSubView(this._iconSet1SubView, this._iconSet2SubView);
        this.view.add(this._operationOrigin);
        this.view.add(this._operationAction);
        //
        this.view.operate(this._operationAction);
        this._operationAction.shape.mute();
        this._operationAction.shape.coordinates = this._initial;
        this._operationAction.shape.unmute();
        this._operationOrigin.shape.coordinates = this._origin;
    }

    private _elements: ViewElement[] = [];
    private _elementsBBox: [number, number, number, number] = Box.nullBox();

    private _getElementsBBox() {
        const box = this._elements.reduce((acc, el) => Box.extend(acc, (el.shape as Geometry).getBoundingBox()), Box.nullBox());
        if (box[2] === 0 || box[3] === 0) {
            box[0] -= 2;
            box[1] -= 2;
            box[3] += 4;
            box[2] += 4;
        }
        return box;
    }

    private _firstShow = false;
    private _viewActiveDeactivateCallback = function (this: TransformOperation) {
        this._elements.forEach(ve => (ve.noDrag = false));
        this._elements = this.view.activeElements;
        this._operationBox.shape.unbindAll();

        if (this._elements.length > 0) {
            this._elements.forEach(ve => {
                ve.noDrag = true;
                if (ve.shape.data("bkTransform") === undefined) ve.shape.data("bkTransform", (ve.shape.data("transform") as Transformation).clone());
            });
            const t = this;
            this._operationBox.shape.bind({ immediately: true }, ...this._elements.map(el => [el.shape, "any"] as [Geometry, "any"]), function () {
                t._elementsBBox = t._getElementsBBox();
                this.copyFrom(new Rectangle(...t._elementsBBox));
            });
            // reset the origin to current center
            if (this._firstShow) {
                const [x, y, w, h] = t._elementsBBox;
                t._origin = [x + w / 2, y + h / 2];
            }
            this._showUI();
        } else {
            this._hideUI();
            this._firstShow = true;
        }
    }.bind(this);
    private _viewClickCallback = function (this: TransformOperation, e: ViewEventObject) {
        if (this._elements.includes(e.currentElement!) && !this._firstShow) this.switchUI();
        this._firstShow = false;
    }.bind(this);

    disable() {
        this.view.deactivate(...this.view.activeElements);
        this._viewActiveDeactivateCallback();
        this.view.off(ViewEventType.Activate, this._viewActiveDeactivateCallback);
        this.view.off(ViewEventType.Deactivate, this._viewActiveDeactivateCallback);
        this.view.off(ViewEventType.Click, this._viewClickCallback);
    }
    enable() {
        this.view.on(ViewEventType.Activate, this._viewActiveDeactivateCallback);
        this.view.on(ViewEventType.Deactivate, this._viewActiveDeactivateCallback);
        this.view.on(ViewEventType.Click, this._viewClickCallback);
        this._viewActiveDeactivateCallback();
    }
}
