import { U as Utility, V as View, C as CanvasRenderer, P as Point, D as Dynamic, M as Maths, A as Arc, S as SealedShapeObject, L as LineSegment, a as ViewElement } from '../../js/geomtoy.js';
import { t as tpl, c as codeHtml, l as lightStrokeFill, s as strokeFill, a as stroke, b as thinStroke } from '../../js/multiple-canvas-renderer.js';
import 'https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js';
import 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';
import '../../js/color.js';

tpl.title("Arc closest point");
{
  const card = tpl.addCard({
    canvasId: Utility.uuid(),
    aspectRatio: "2:1",
    className: "col-12",
    withPane: true
  });
  const view = new View({}, new CanvasRenderer(card.canvas, {}, {
    density: 10,
    zoom: 1,
    yAxisPositiveOnBottom: false
  }));
  view.startResponsive((width, height) => view.renderer.display.origin = [width / 2, height / 2]);
  view.startInteractive();
  const centerPoint = new Point([0, 0]);
  const point = new Point([10, 15]);
  const restParams = new Dynamic({
    radiusX: 20,
    radiusY: 10,
    startAngle: Maths.PI / 4,
    endAngle: 5 * Maths.PI / 4,
    positive: true,
    rotation: 0
  });
  const arc = new Arc().bind([[centerPoint, "any"], [restParams, "any"]], function ([e1, e2]) {
    const {
      radiusX,
      radiusY,
      startAngle,
      endAngle,
      positive,
      rotation
    } = e2.target;
    this.copyFrom(Arc.fromCenterPointAndStartEndAnglesEtc(e1.target, radiusX, radiusY, startAngle, endAngle, positive, rotation));
  });
  const closestPointLineSegment = new SealedShapeObject({
    point: new Point([0, 0], "plus"),
    lineSegment: new LineSegment()
  }).bind([[point, "any"], [arc, "any"]], function ([e1, e2]) {
    this.shapes.point.copyFrom(e2.target.getClosestPointFrom(e1.target));
    this.shapes.lineSegment.copyFrom(new LineSegment(e1.target, this.shapes.point));
  });
  card.setDescription(codeHtml(` 
    const centerPoint = new Point([0, 0]);
    const point = new Point([10, 15]);
    const restParams = new Dynamic({
        radiusX: 20,
        radiusY: 10,
        startAngle: Maths.PI / 4,
        endAngle: (5 * Maths.PI) / 4,
        positive: true,
        rotation: 0
    });

    const arc = new Arc().bind(
        [
            [centerPoint, "any"],
            [restParams, "any"]
        ],
        function ([e1, e2]) {
            const { radiusX, radiusY, startAngle, endAngle, positive, rotation } = e2.target;
            this.copyFrom(Arc.fromCenterPointAndStartEndAnglesEtc(e1.target, radiusX, radiusY, startAngle, endAngle, positive, rotation));
        }
    );
    const closestPointLineSegment = new SealedShapeObject({
        point: new Point([0, 0], "plus"),
        lineSegment: new LineSegment()
    }).bind(
        [
            [point, "any"],
            [arc, "any"]
        ],
        function ([e1, e2]) {
            this.shapes.point.copyFrom(e2.target.getClosestPointFrom(e1.target));
            this.shapes.lineSegment.copyFrom(new LineSegment(e1.target, this.shapes.point));
        }
    );
    `));
  const pane = new Tweakpane.Pane({
    title: "Arc closest point",
    container: card.pane
  });
  const arcFolder = pane.addFolder({
    title: "Arc"
  });
  const cpInput = arcFolder.addInput({
    centerPoint
  }, "centerPoint", {
    y: {
      inverted: true
    }
  });
  centerPoint.on("any", () => cpInput.refresh());
  arcFolder.addInput(restParams, "radiusX", {
    min: Number.EPSILON
  });
  arcFolder.addInput(restParams, "radiusY", {
    min: Number.EPSILON
  });
  arcFolder.addInput(restParams, "startAngle", {
    format: v => v.toFixed(2)
  });
  arcFolder.addInput(restParams, "endAngle", {
    format: v => v.toFixed(2)
  });
  arcFolder.addInput(restParams, "positive");
  arcFolder.addInput(restParams, "rotation", {
    min: 0,
    max: 2 * Math.PI
  });
  const pointFolder = pane.addFolder({
    title: "Point"
  });
  const pInput = pointFolder.addInput({
    point
  }, "point", {
    y: {
      inverted: true
    }
  });
  point.on("any", () => pInput.refresh());
  const closestPointFolder = pane.addFolder({
    title: "Closest point"
  });
  closestPointFolder.addMonitor(closestPointLineSegment.shapes.point, "x");
  closestPointFolder.addMonitor(closestPointLineSegment.shapes.point, "y");
  view.add(new ViewElement(centerPoint, {
    interactable: true,
    ...lightStrokeFill("brown")
  }));
  view.add(new ViewElement(point, {
    interactable: true,
    ...strokeFill("pink")
  }));
  view.add(new ViewElement(closestPointLineSegment.shapes.point, {
    interactable: false,
    ...stroke("pink")
  }));
  view.add(new ViewElement(closestPointLineSegment.shapes.lineSegment, {
    interactable: false,
    ...thinStroke("gray")
  }));
  view.add(new ViewElement(arc, {
    interactable: false,
    ...stroke("brown")
  }));
}
