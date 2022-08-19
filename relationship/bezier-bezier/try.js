import { n as Relationship, U as Utility, V as View, C as CanvasRenderer, D as Dynamic, b as ShapeArray, h as geomtoy, P as Point, c as ViewGroupElement } from '../../js/geomtoy.js';
import { c as color } from '../../js/color.js';
import { t as tpl, e as lightStroke, f as lightStrokeFillTrans, l as lightStrokeFill, a as stroke } from '../../js/multiple-canvas-renderer.js';
import { b as bezierViewBundle, s as samePointsOffset } from '../../js/_common2.js';
import 'https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js';
import 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';

tpl.title("Try bezier-bezier relationship");
const rs = new Relationship();
const bezier1Bundle = bezierViewBundle(stroke("red"), lightStrokeFill("red"), lightStrokeFillTrans("red"), lightStroke("gray"));
const bezier2Bundle = bezierViewBundle(stroke("blue"), lightStrokeFill("blue"), lightStrokeFillTrans("blue"), lightStroke("gray"));
const card = tpl.addCard({
  canvasId: Utility.uuid(),
  className: "col-12",
  withIntroduction: true,
  withPane: true
});
const view = new View({}, new CanvasRenderer(card.canvas, {}, {
  density: 10,
  zoom: 1,
  yAxisPositiveOnBottom: false
}));
view.startResponsive((width, height) => view.renderer.display.origin = [width / 2, height / 2]);
view.startInteractive();
view.addBatch(Object.values(bezier1Bundle));
view.addBatch(Object.values(bezier2Bundle));
const pane = new Tweakpane.Pane({
  title: "Try",
  container: card.pane
});
{
  const f1 = pane.addFolder({
    title: "Bezier1"
  });
  const p1Input = f1.addInput(bezier1Bundle.point1, "shape", {
    y: {
      inverted: true
    },
    label: "point1"
  });
  const p2Input = f1.addInput(bezier1Bundle.point2, "shape", {
    y: {
      inverted: true
    },
    label: "point2"
  });
  const cp1Input = f1.addInput(bezier1Bundle.controlPoint1, "shape", {
    y: {
      inverted: true
    },
    label: "controlPoint1"
  });
  const cp2Input = f1.addInput(bezier1Bundle.controlPoint2, "shape", {
    y: {
      inverted: true
    },
    label: "controlPoint2"
  });
  bezier1Bundle.point1.shape.on("any", () => p1Input.refresh());
  bezier1Bundle.point2.shape.on("any", () => p2Input.refresh());
  bezier1Bundle.controlPoint1.shape.on("any", () => cp1Input.refresh());
  bezier1Bundle.controlPoint2.shape.on("any", () => cp2Input.refresh());
}
{
  const f2 = pane.addFolder({
    title: "Bezier2"
  });
  const p1Input = f2.addInput(bezier2Bundle.point1, "shape", {
    y: {
      inverted: true
    },
    label: "point1"
  });
  const p2Input = f2.addInput(bezier2Bundle.point2, "shape", {
    y: {
      inverted: true
    },
    label: "point2"
  });
  const cp1Input = f2.addInput(bezier2Bundle.controlPoint1, "shape", {
    y: {
      inverted: true
    },
    label: "controlPoint1"
  });
  const cp2Input = f2.addInput(bezier2Bundle.controlPoint2, "shape", {
    y: {
      inverted: true
    },
    label: "controlPoint2"
  });
  bezier2Bundle.point1.shape.on("any", () => p1Input.refresh());
  bezier2Bundle.point2.shape.on("any", () => p2Input.refresh());
  bezier2Bundle.controlPoint1.shape.on("any", () => cp1Input.refresh());
  bezier2Bundle.controlPoint2.shape.on("any", () => cp2Input.refresh());
}
const relObject = new Dynamic({
  equal: undefined,
  separate: undefined,
  intersect: new ShapeArray(),
  strike: new ShapeArray(),
  contact: new ShapeArray(),
  cross: new ShapeArray(),
  touch: new ShapeArray(),
  block: new ShapeArray(),
  blockedBy: new ShapeArray(),
  connect: new ShapeArray(),
  coincide: new ShapeArray()
});
const autoOffset = samePointsOffset(geomtoy.getOptions().epsilon);
relObject.bind([[bezier1Bundle.bezier.shape, "any"], [bezier2Bundle.bezier.shape, "any"]], function ([e1, e2]) {
  const relationship = rs.relate(e1.target, e2.target);
  autoOffset.clear();
  relObject.equal = relationship.equal;
  relObject.separate = relationship.separate;
  relationship.intersect.forEach(p => (p.appearance = "cross", autoOffset.check(p)));
  relObject.intersect.shapes = relationship.intersect;
  relationship.strike.forEach(p => (p.appearance = "cross", autoOffset.check(p)));
  relObject.strike.shapes = relationship.strike;
  relationship.contact.forEach(p => (p.appearance = "cross", autoOffset.check(p)));
  relObject.contact.shapes = relationship.contact;
  relationship.cross.forEach(p => (p.appearance = "cross", autoOffset.check(p)));
  relObject.cross.shapes = relationship.cross;
  relationship.touch.forEach(p => (p.appearance = "cross", autoOffset.check(p)));
  relObject.touch.shapes = relationship.touch;
  relationship.block.forEach(p => (p.appearance = "cross", autoOffset.check(p)));
  relObject.block.shapes = relationship.block;
  relationship.blockedBy.forEach(p => (p.appearance = "cross", autoOffset.check(p)));
  relObject.blockedBy.shapes = relationship.blockedBy;
  relationship.connect.forEach(p => (p.appearance = "cross", autoOffset.check(p)));
  relObject.connect.shapes = relationship.connect;
  relationship.coincide.forEach(p => p instanceof Point && (p.appearance = "cross", autoOffset.check(p)));
  relObject.coincide.shapes = relationship.coincide;
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
view.add(new ViewGroupElement(relObject.intersect.shapes, {
  interactable: false,
  ...stroke("amber")
}), true);
view.add(new ViewGroupElement(relObject.strike.shapes, {
  interactable: false,
  ...stroke("green")
}), true);
view.add(new ViewGroupElement(relObject.contact.shapes, {
  interactable: false,
  ...stroke("orange")
}), true);
view.add(new ViewGroupElement(relObject.cross.shapes, {
  interactable: false,
  ...stroke("lime")
}), true);
view.add(new ViewGroupElement(relObject.touch.shapes, {
  interactable: false,
  ...stroke("pink")
}), true);
view.add(new ViewGroupElement(relObject.block.shapes, {
  interactable: false,
  ...stroke("lightBlue")
}), true);
view.add(new ViewGroupElement(relObject.blockedBy.shapes, {
  interactable: false,
  ...stroke("teal")
}), true);
view.add(new ViewGroupElement(relObject.connect.shapes, {
  interactable: false,
  ...stroke("cyan")
}), true);
view.add(new ViewGroupElement(relObject.coincide.shapes, {
  interactable: false,
  ...stroke("purple")
}), true);
