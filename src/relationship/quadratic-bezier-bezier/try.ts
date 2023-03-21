import { Bezier, Dynamic, Geomtoy, QuadraticBezier, Relationship, ShapeArray, Trilean } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import color from "../../assets/scripts/color";
import { lightStrokeFill, lightStrokeFillTrans, lightStrokeOnly, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";
import { bezierViewBundle, quadraticBezierViewBundle, samePointsOffset } from "../_common";

tpl.title("Try quadratic bezier-bezier relationship");

const rs = new Relationship();

const quadraticBezierBundle = quadraticBezierViewBundle(strokeOnly("red"), lightStrokeFill("red"), lightStrokeFillTrans("red"), lightStrokeOnly("gray"));
const bezierBundle = bezierViewBundle(strokeOnly("blue"), lightStrokeFill("blue"), lightStrokeFillTrans("blue"), lightStrokeOnly("gray"));

const card = tpl.addCard({ className: "col-12", withIntroduction: true, withPane: true });
const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
view.startInteractive();

view.add(...Object.values(quadraticBezierBundle));
view.add(...Object.values(bezierBundle));

// #region Pane
// @ts-expect-error
const pane = new Tweakpane.Pane({ title: "Try", container: card.pane });
{
    const f1 = pane.addFolder({ title: "QuadraticBezier" });
    const p1Input = f1.addInput(quadraticBezierBundle.point1, "shape", { y: { inverted: true }, label: "point1" });
    const p2Input = f1.addInput(quadraticBezierBundle.point2, "shape", { y: { inverted: true }, label: "point2" });
    const cpInput = f1.addInput(quadraticBezierBundle.controlPoint, "shape", { y: { inverted: true }, label: "controlPoint" });
    quadraticBezierBundle.point1.shape.on("any", () => p1Input.refresh());
    quadraticBezierBundle.point2.shape.on("any", () => p2Input.refresh());
    quadraticBezierBundle.controlPoint.shape.on("any", () => cpInput.refresh());
}
{
    const f2 = pane.addFolder({ title: "Bezier" });
    const p1Input = f2.addInput(bezierBundle.point1, "shape", { y: { inverted: true }, label: "point1" });
    const p2Input = f2.addInput(bezierBundle.point2, "shape", { y: { inverted: true }, label: "point2" });
    const cp1Input = f2.addInput(bezierBundle.controlPoint1, "shape", { y: { inverted: true }, label: "controlPoint1" });
    const cp2Input = f2.addInput(bezierBundle.controlPoint2, "shape", { y: { inverted: true }, label: "controlPoint2" });
    bezierBundle.point1.shape.on("any", () => p1Input.refresh());
    bezierBundle.point2.shape.on("any", () => p2Input.refresh());
    bezierBundle.controlPoint1.shape.on("any", () => cp1Input.refresh());
    bezierBundle.controlPoint2.shape.on("any", () => cp2Input.refresh());
}
// #endregion

const autoOffset = samePointsOffset(Geomtoy.getOptions().epsilon);

const relObject = new (new Dynamic().create({
    separate: undefined as Trilean,
    intersect: new ShapeArray(),
    strike: new ShapeArray(),
    contact: new ShapeArray(),
    cross: new ShapeArray(),
    touch: new ShapeArray(),
    block: new ShapeArray(),
    blockedBy: new ShapeArray(),
    connect: new ShapeArray()
}))();

relObject.bind([quadraticBezierBundle.quadraticBezier.shape as QuadraticBezier, "any"], [bezierBundle.bezier.shape as Bezier, "any"], function (e1, e2) {
    const relationship = rs.relate(e1.target, e2.target);
    autoOffset.clear();

    relObject.separate = relationship.separate;

    relationship.intersect.forEach(p => ((p.appearance = "cross"), autoOffset.check(p)));
    relObject.intersect.items = relationship.intersect;

    relationship.strike.forEach(p => ((p.appearance = "cross"), autoOffset.check(p)));
    relObject.strike.items = relationship.strike;

    relationship.contact.forEach(p => ((p.appearance = "cross"), autoOffset.check(p)));
    relObject.contact.items = relationship.contact;

    relationship.cross.forEach(p => ((p.appearance = "cross"), autoOffset.check(p)));
    relObject.cross.items = relationship.cross;

    relationship.touch.forEach(p => ((p.appearance = "cross"), autoOffset.check(p)));
    relObject.touch.items = relationship.touch;

    relationship.block.forEach(p => ((p.appearance = "cross"), autoOffset.check(p)));
    relObject.block.items = relationship.block;

    relationship.blockedBy.forEach(p => ((p.appearance = "cross"), autoOffset.check(p)));
    relObject.blockedBy.items = relationship.blockedBy;

    relationship.connect.forEach(p => ((p.appearance = "cross"), autoOffset.check(p)));
    relObject.connect.items = relationship.connect;

    card.setIntroduction(` 
        <ul class="list-group shadow-sm">
            <li class="list-group-item">Separate: <span class="fw-bold">${relObject.separate}</span></li>
            <li class="list-group-item">Intersect: <span style="color:${color("amber")}" class="fw-bold">&#x2716;</span> <span class="badge bg-secondary">${relationship.intersect.length}</span></li>
            <li class="list-group-item">Strike: <span style="color:${color("green")}" class="fw-bold">&#x2716;</span> <span class="badge bg-secondary">${relationship.strike.length}</span></li>
            <li class="list-group-item">Contact: <span style="color:${color("orange")}" class="fw-bold">&#x2716;</span> <span class="badge bg-secondary">${relationship.contact.length}</span></li>
            <li class="list-group-item">Cross: <span style="color:${color("lime")}" class="fw-bold">&#x2716;</span> <span class="badge bg-secondary">${relationship.cross.length}</span></li>
            <li class="list-group-item">Touch: <span style="color:${color("pink")}" class="fw-bold">&#x2716;</span> <span class="badge bg-secondary">${relationship.touch.length}</span></li>
            <li class="list-group-item">Block: <span style="color:${color("lightBlue")}" class="fw-bold">&#x2716;</span> <span class="badge bg-secondary">${relationship.block.length}</span></li>
            <li class="list-group-item">BlockedBy: <span style="color:${color("teal")}" class="fw-bold">&#x2716;</span> <span class="badge bg-secondary">${relationship.blockedBy.length}</span></li>
            <li class="list-group-item">Connect: <span style="color:${color("cyan")}" class="fw-bold">&#x2716;</span> <span class="badge bg-secondary">${relationship.connect.length}</span></li> 
        </ul>
        `);
});

view.add(new ViewElement(relObject.intersect, { type: ViewElementType.None, ...strokeOnly("amber") }));
view.add(new ViewElement(relObject.strike, { type: ViewElementType.None, ...strokeOnly("green") }));
view.add(new ViewElement(relObject.contact, { type: ViewElementType.None, ...strokeOnly("orange") }));
view.add(new ViewElement(relObject.cross, { type: ViewElementType.None, ...strokeOnly("lime") }));
view.add(new ViewElement(relObject.touch, { type: ViewElementType.None, ...strokeOnly("pink") }));
view.add(new ViewElement(relObject.block, { type: ViewElementType.None, ...strokeOnly("lightBlue") }));
view.add(new ViewElement(relObject.blockedBy, { type: ViewElementType.None, ...strokeOnly("teal") }));
view.add(new ViewElement(relObject.connect, { type: ViewElementType.None, ...strokeOnly("cyan") }));
