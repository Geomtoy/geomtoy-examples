import { U as Utility, V as View, C as CanvasRenderer, f as Line, I as Inversion, c as ViewGroupElement, e as Circle } from '../../js/geomtoy.js';
import { t as tpl, l as lightStrokeFill, b as thinStroke } from '../../js/multiple-canvas-renderer.js';
import 'https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js';
import 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';
import '../../js/color.js';

tpl.title("Beauty of inversion");
{
  const card = tpl.addCard({
    canvasId: Utility.uuid(),
    aspectRatio: "2:1",
    className: "col-12",
    withPane: true
  });
  const view = new View({}, new CanvasRenderer(card.canvas, {}, {
    density: 100,
    zoom: 1,
    pan: [0, 200],
    yAxisPositiveOnBottom: false
  }));
  view.startResponsive((width, height) => view.renderer.display.origin = [width / 2, height / 2]);
  view.startInteractive();
  const lines = Utility.range(0, 11).map(index => {
    return new Line(-5 + index, 0, Infinity);
  });
  const inversion = new Inversion([0, 2], 5);
  const circles = lines.map(l => {
    return inversion.invertLine(l);
  });
  view.add(new ViewGroupElement(lines, {
    interactable: false,
    ...lightStrokeFill("red")
  }));
  view.add(new ViewGroupElement(circles, {
    interactable: false,
    ...lightStrokeFill("blue")
  }));
}
{
  const card = tpl.addCard({
    canvasId: Utility.uuid(),
    aspectRatio: "2:1",
    className: "col-12",
    withPane: true
  });
  const view = new View({}, new CanvasRenderer(card.canvas, {}, {
    density: 100,
    zoom: 1,
    pan: [-200, 200],
    yAxisPositiveOnBottom: false
  }));
  view.startResponsive((width, height) => view.renderer.display.origin = [width / 2, height / 2]);
  view.startInteractive();
  const circles = Utility.range(0, 6).map(index => {
    return new Circle(index, 2, 1);
  });
  const inversion = new Inversion([0, 0], 5);
  const invCircles = circles.map(circle => {
    return inversion.invertCircle(circle);
  });
  view.add(new ViewGroupElement(circles, {
    interactable: false,
    ...lightStrokeFill("red")
  }));
  view.add(new ViewGroupElement(invCircles, {
    interactable: false,
    ...lightStrokeFill("blue")
  }));
}
{
  const card = tpl.addCard({
    canvasId: Utility.uuid(),
    aspectRatio: "2:1",
    className: "col-12",
    withPane: true
  });
  const view = new View({}, new CanvasRenderer(card.canvas, {}, {
    density: 10,
    zoom: 100,
    yAxisPositiveOnBottom: false
  }));
  view.startResponsive((width, height) => view.renderer.display.origin = [width / 2, height / 2]);
  view.startInteractive();
  const lines = [];
  Utility.range(0, 20).forEach(i => {
    lines.push(new Line(-1 + 0.1 * i, 0, Infinity));
  });
  Utility.range(0, 20).map(j => {
    lines.push(new Line(0, -1 + 0.1 * j, 0));
  });
  const inversion = new Inversion([0, 0], 0.1);
  const inverses = lines.map(l => {
    return inversion.invertLine(l);
  });
  view.add(new ViewGroupElement(lines, {
    interactable: false,
    ...thinStroke("gray")
  }));
  view.add(new ViewGroupElement(inverses, {
    interactable: false,
    ...lightStrokeFill("teal")
  }), true);
}
