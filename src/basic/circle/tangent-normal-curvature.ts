import { Bezier, Ellipse, Geometry, Geomtoy, Point, Relationship, ShapeArray, Vector } from "@geomtoy/core";
import { Angle, Maths, Polynomial } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement } from "@geomtoy/view";
import { lightStrokeFill, lightStrokeOnly, strokeOnly, thinStrokeOnly } from "../../assets/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Common tangent lines of two circles");

{
    const card = tpl.addCard({ className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    const centerPoint1 = new Point([10, 20]);
    const centerPoint2 = new Point([+4.195673479387756 + 20, 10.410596250601506]);

    const ellipse1 = new Ellipse().bind([centerPoint1, "any"], function (e) {
        this.copyFrom(new Ellipse(e.target, 30, 15));
    });
    const ellipse2 = new Ellipse().bind([centerPoint2, "any"], function (e) {
        this.copyFrom(new Ellipse(e.target, 20, 10, Maths.PI / 4));
    });

    // const bezier1 = new Bezier([50, 6], [70, 6], [50, 20], [70, 40]);
    // const bezier2 = new Bezier([50, 6], [90, 6], [50, 34], [90, 74]);
    const bezier1 = new Bezier([50, 6], [70, 6], [60, -6], [80, -40]);
    const bezier2 = new Bezier([50, 6], [70, 6], [60, -6], [80, -36]);
    bezier1.reverse();
    bezier2.reverse();
    // const t = new Transformation();
    // t.setScale(2, 2, [50, 6]);
    // console.log(t.transformCoordinates([70, 6]));
    // console.log(t.transformCoordinates([50, 20]));
    // console.log(t.transformCoordinates([70, 40]));

    const shapeb1 = [bezier1.getTangentVectorAtTime(0), secondary(bezier1, 0)];
    const shapeb2 = [bezier2.getTangentVectorAtTime(0), secondary(bezier2, 0)];

    const rs = new Relationship();
    const epsilon = Geomtoy.getOptions().epsilon;

    const shapeArray = new ShapeArray().bind([ellipse1, "any"], [ellipse2, "any"], function (e1, e2) {
        console.log(rs.intersect(e1.target, e2.target));
        this.items = rs.intersect(e1.target, e2.target);
    });

    // const circle1 = new Circle().bind(
    //     [
    //         [centerPoint1, "any"],
    //     ],
    //     function ([e]) {
    //         this.copyFrom(new Circle(e.target,20));
    //     }
    // );
    // const circle2 = new Circle().bind(
    //     [
    //         [centerPoint2, "any"]
    //     ],
    //     function ([e]) {
    //         this.copyFrom(new Circle(e.target,10));
    //     }
    // );
    let shape1: Geometry[] = [];
    let shape2: Geometry[] = [];

    function third(b: Bezier, t: number) {
        const [polyX, polyY] = b.getPolynomial();
        const [polyXD3, polyYD3] = [Polynomial.derivative(polyX, 3), Polynomial.derivative(polyY, 3)];
        const c = b.getParametricEquation()(t);
        const tv = [Polynomial.evaluate(polyXD3, t), Polynomial.evaluate(polyYD3, t)] as [number, number];
        return new Vector(c, tv);
    }

    function secondary(b: Bezier, t: number) {
        const [polyX, polyY] = b.getPolynomial();
        const [polyXD2, polyYD2] = [Polynomial.derivative(polyX, 2), Polynomial.derivative(polyY, 2)];
        const c = b.getParametricEquation()(t);
        const tv = [Polynomial.evaluate(polyXD2, t), Polynomial.evaluate(polyYD2, t)] as [number, number];
        return new Vector(c, tv);
    }

    function findThird(e: Ellipse, a: number) {
        const { rotation: phi, radiusX: rx, radiusY: ry } = e;
        const cosPhi = Maths.cos(phi);
        const sinPhi = Maths.sin(phi);
        const pxD3 = rx * Maths.sin(a) * cosPhi + ry * Maths.cos(a) * sinPhi;
        const pyD3 = rx * Maths.sin(a) * sinPhi - ry * Maths.cos(a) * cosPhi;
        const tv = [pxD3, pyD3] as [number, number];
        const c = e.getParametricEquation()(a);
        return new Vector(c, tv);
    }
    function findSecondary(e: Ellipse, a: number) {
        a = Angle.simplify(a);
        const { rotation: phi, radiusX: rx, radiusY: ry } = e;
        const cosPhi = Maths.cos(phi);
        const sinPhi = Maths.sin(phi);
        // derivative of parametric equation
        //cos'(x) = -sin(x)
        //sin(x)  = cos(x)
        // const pxD = -rx * Maths.sin(a) * cosPhi - ry * Maths.cos(a) * sinPhi;
        // const pyD = -rx * Maths.sin(a) * sinPhi + ry * Maths.cos(a) * cosPhi;
        const pxD2 = -rx * Maths.cos(a) * cosPhi + ry * Maths.sin(a) * sinPhi;
        const pyD2 = -rx * Maths.cos(a) * sinPhi - ry * Maths.sin(a) * cosPhi;
        const tv = [pxD2, pyD2] as [number, number];
        const c = e.getParametricEquation()(a);
        return new Vector(c, tv);
    }

    const shapeArray1 = new ShapeArray().bind([ellipse1, "any"], [ellipse2, "any"], function (e1, e2) {
        // const c = [-19.327685579086896, 23.15780218562763] as [number, number];
        const c = [39.32768557908696, 23.15780218562747] as [number, number];
        // const c = [-10, 20] as [number, number];
        const a1 = e1.target.getAngleOfPoint(c);
        const a2 = e2.target.getAngleOfPoint(c);
        console.log(a1, a2);
        shape1 = [
            e1.target.getTangentVectorAtAngle(a1),
            findSecondary(e1.target, a1)!
            // findThird(e1.target, 6.071078308229927)!
        ];
        shape2 = [
            e2.target.getTangentVectorAtAngle(a2),
            findSecondary(e2.target, a2)!
            // findThird(e2.target, a1)!
        ];
    });

    view.add(new ViewElement(centerPoint1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("red") }));
    view.add(new ViewElement(centerPoint2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFill("blue") }));

    view.add(new ViewElement(ellipse1, { interactMode: ViewElementInteractMode.None, ...strokeOnly("red") }));
    view.add(new ViewElement(ellipse2, { interactMode: ViewElementInteractMode.None, ...strokeOnly("blue") }));

    view.add(new ViewElement(bezier1, { interactMode: ViewElementInteractMode.None, ...strokeOnly("red") }));
    view.add(new ViewElement(bezier2, { interactMode: ViewElementInteractMode.None, ...strokeOnly("blue") }));

    view.add(new ViewElement(shapeb1[0], { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("red") }));
    view.add(new ViewElement(shapeb2[0], { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("blue") }));
    view.add(new ViewElement(shapeb1[1], { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("red") }));
    view.add(new ViewElement(shapeb2[1], { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("blue") }));

    view.add(new ViewElement(shapeArray, { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("purple") }));
    view.add(new ViewElement(shape1, { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("red") }));
    view.add(new ViewElement(shape2, { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("blue") }));
}
