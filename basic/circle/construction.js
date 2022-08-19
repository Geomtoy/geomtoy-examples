import { U as Utility, V as View, C as CanvasRenderer, P as Point, e as Circle, b as ShapeArray, a as ViewElement, c as ViewGroupElement } from '../../js/geomtoy.js';
import { t as tpl, s as strokeFill, l as lightStrokeFill, e as lightStroke } from '../../js/multiple-canvas-renderer.js';
import 'https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js';
import 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';
import '../../js/color.js';

tpl.title("Inversion: inverse of circle");
{
  const card = tpl.addCard({
    canvasId: Utility.uuid(),
    aspectRatio: "1:1",
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
  const centerPoint1 = new Point(10, 0);
  const centerPoint2 = new Point(15, 0);
  const circle1 = new Circle().bind([[centerPoint1, "any"]], function ([e1]) {
    this.copyFrom(new Circle(e1.target, 10));
  });
  const circle2 = new Circle().bind([[centerPoint2, "any"]], function ([e1]) {
    this.copyFrom(new Circle(e1.target, 15));
  });
  const point = new Point(0, 0);
  const circles = new ShapeArray().bind([[circle1, "any"], [circle2, "any"], [point, "any"]], function ([e1, e2, e3]) {
    this.shapes = Circle.getCommonTangentCirclesOfTwoCirclesThroughPoint(e1.target, e2.target, e3.target);
  });
  view.add(new ViewElement(circle1, {
    interactable: false,
    ...strokeFill("red")
  }));
  view.add(new ViewElement(circle2, {
    interactable: false,
    ...strokeFill("blue")
  }));
  view.add(new ViewElement(point, {
    interactable: true,
    ...lightStrokeFill("teal")
  }), true);
  view.add(new ViewGroupElement(circles.shapes, {
    interactable: false,
    ...lightStroke("brown")
  }), true);
}
