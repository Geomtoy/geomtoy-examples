import { Bezier, Dynamic, Geomtoy, Point, Relationship, ShapeArray, Trilean } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement } from "@geomtoy/view";
import color from "../../assets/color";
import { lightStrokeFill, lightStrokeFillTrans, lightStrokeOnly, strokeOnly } from "../../assets/common";
import tpl from "../../assets/templates/tpl-renderer";
import { bezierViewBundle, samePointsOffset } from "../_common";

tpl.title("Try bezier-bezier relationship");

const rs = new Relationship();

const bezier1Bundle = bezierViewBundle(strokeOnly("red"), lightStrokeFill("red"), lightStrokeFillTrans("red"), lightStrokeOnly("gray"));
const bezier2Bundle = bezierViewBundle(strokeOnly("blue"), lightStrokeFill("blue"), lightStrokeFillTrans("blue"), lightStrokeOnly("gray"));

const card = tpl.addCard({ className: "col-12", withIntroduction: true, withPane: true });
const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
view.startInteractive();

view.add(...Object.values(bezier1Bundle));
view.add(...Object.values(bezier2Bundle));

// #region Pane
// @ts-expect-error
const pane = new Tweakpane.Pane({ title: "Try", container: card.pane });
{
    const f1 = pane.addFolder({ title: "Bezier1" });
    const p1Input = f1.addInput(bezier1Bundle.point1, "shape", { y: { inverted: true }, label: "point1" });
    const p2Input = f1.addInput(bezier1Bundle.point2, "shape", { y: { inverted: true }, label: "point2" });
    const cp1Input = f1.addInput(bezier1Bundle.controlPoint1, "shape", { y: { inverted: true }, label: "controlPoint1" });
    const cp2Input = f1.addInput(bezier1Bundle.controlPoint2, "shape", { y: { inverted: true }, label: "controlPoint2" });
    bezier1Bundle.point1.shape.on("any", () => p1Input.refresh());
    bezier1Bundle.point2.shape.on("any", () => p2Input.refresh());
    bezier1Bundle.controlPoint1.shape.on("any", () => cp1Input.refresh());
    bezier1Bundle.controlPoint2.shape.on("any", () => cp2Input.refresh());
}
{
    const f2 = pane.addFolder({ title: "Bezier2" });
    const p1Input = f2.addInput(bezier2Bundle.point1, "shape", { y: { inverted: true }, label: "point1" });
    const p2Input = f2.addInput(bezier2Bundle.point2, "shape", { y: { inverted: true }, label: "point2" });
    const cp1Input = f2.addInput(bezier2Bundle.controlPoint1, "shape", { y: { inverted: true }, label: "controlPoint1" });
    const cp2Input = f2.addInput(bezier2Bundle.controlPoint2, "shape", { y: { inverted: true }, label: "controlPoint2" });
    bezier2Bundle.point1.shape.on("any", () => p1Input.refresh());
    bezier2Bundle.point2.shape.on("any", () => p2Input.refresh());
    bezier2Bundle.controlPoint1.shape.on("any", () => cp1Input.refresh());
    bezier2Bundle.controlPoint2.shape.on("any", () => cp2Input.refresh());
}
// #endregion

const relObject = new (new Dynamic().create({
    equal: undefined as Trilean,
    separate: undefined as Trilean,
    intersect: new ShapeArray(),
    strike: new ShapeArray(),
    contact: new ShapeArray(),
    cross: new ShapeArray(),
    touch: new ShapeArray(),
    block: new ShapeArray(),
    blockedBy: new ShapeArray(),
    connect: new ShapeArray(),
    coincide: new ShapeArray()
}))();

const autoOffset = samePointsOffset(Geomtoy.getOptions().epsilon);

relObject.bind([bezier1Bundle.bezier.shape as Bezier, "any"], [bezier2Bundle.bezier.shape as Bezier, "any"], function (e1, e2) {
    const relationship = rs.relate(e1.target, e2.target);
    autoOffset.clear();

    relObject.equal = relationship.equal;
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

    relationship.coincide.forEach(p => p instanceof Point && ((p.appearance = "cross"), autoOffset.check(p)));
    relObject.coincide.items = relationship.coincide;

    card.setIntroduction(` 
        <ul class="list-group shadow-sm">
            <li class="list-group-item">Equal: <span class="fw-bold">${relObject.equal}</span></li>
            <li class="list-group-item">Separate: <span class="fw-bold">${relObject.separate}</span></li>
            <li class="list-group-item">Intersect: <span style="color:${color("amber")}" class="fw-bold">&#x2716;</span> <span class="badge bg-secondary">${relationship.intersect.length}</span></li>
            <li class="list-group-item">Strike: <span style="color:${color("green")}" class="fw-bold">&#x2716;</span> <span class="badge bg-secondary">${relationship.strike.length}</span></li>
            <li class="list-group-item">Contact: <span style="color:${color("orange")}" class="fw-bold">&#x2716;</span> <span class="badge bg-secondary">${relationship.contact.length}</span></li>
            <li class="list-group-item">Cross: <span style="color:${color("lime")}" class="fw-bold">&#x2716;</span> <span class="badge bg-secondary">${relationship.cross.length}</span></li>
            <li class="list-group-item">Touch: <span style="color:${color("pink")}" class="fw-bold">&#x2716;</span> <span class="badge bg-secondary">${relationship.touch.length}</span></li>
            <li class="list-group-item">Block: <span style="color:${color("lightBlue")}" class="fw-bold">&#x2716;</span> <span class="badge bg-secondary">${relationship.block.length}</span></li>
            <li class="list-group-item">BlockedBy: <span style="color:${color("teal")}" class="fw-bold">&#x2716;</span> <span class="badge bg-secondary">${relationship.blockedBy.length}</span></li>
            <li class="list-group-item">Connect: <span style="color:${color("cyan")}" class="fw-bold">&#x2716;</span> <span class="badge bg-secondary">${relationship.connect.length}</span></li>
            <li class="list-group-item">Coincide: <span style="color:${color("purple")}" class="fw-bold">&#x2716;</span> <span class="badge bg-secondary">${relationship.coincide.length}</span></li>
        </ul>
        `);
});
view.add(new ViewElement(relObject.intersect, { interactMode: ViewElementInteractMode.None, ...strokeOnly("amber") }));
view.add(new ViewElement(relObject.strike, { interactMode: ViewElementInteractMode.None, ...strokeOnly("green") }));
view.add(new ViewElement(relObject.contact, { interactMode: ViewElementInteractMode.None, ...strokeOnly("orange") }));
view.add(new ViewElement(relObject.cross, { interactMode: ViewElementInteractMode.None, ...strokeOnly("lime") }));
view.add(new ViewElement(relObject.touch, { interactMode: ViewElementInteractMode.None, ...strokeOnly("pink") }));
view.add(new ViewElement(relObject.block, { interactMode: ViewElementInteractMode.None, ...strokeOnly("lightBlue") }));
view.add(new ViewElement(relObject.blockedBy, { interactMode: ViewElementInteractMode.None, ...strokeOnly("teal") }));
view.add(new ViewElement(relObject.connect, { interactMode: ViewElementInteractMode.None, ...strokeOnly("cyan") }));
view.add(new ViewElement(relObject.coincide, { interactMode: ViewElementInteractMode.None, ...strokeOnly("purple") }));
