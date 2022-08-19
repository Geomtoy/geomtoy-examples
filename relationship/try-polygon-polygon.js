import { n as Relationship, U as Utility, P as Point, l as Polygon, V as View, C as CanvasRenderer, a as ViewElement } from '../js/geomtoy.js';
import { t as tpl } from '../js/multiple-canvas-renderer.js';
import 'https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js';
import 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';
import '../js/color.js';

var _ref, _result;
tpl.title("Polygon-polygon relationship");
new Relationship();
const points = Utility.range(0, 20).map(_ => Point.random([-100, -100, 200, 200]));
new Polygon(points.map(p => Polygon.vertex(p))).bind(points.map(p => [p, "any"]), function ([...evs]) {});
tpl.addSection("Try");
const card = tpl.addCard({
  canvasId: Utility.uuid()
});
const view = new View({}, new CanvasRenderer(card.canvas, {}, {
  density: 10,
  zoom: 1,
  yAxisPositiveOnBottom: false
}));
view.startResponsive((width, height) => view.renderer.display.origin = [width / 2, height / 2]);
view.startInteractive();
view.add(new ViewElement(g1, {
  interactable: false,
  autoUpdateView: true,
  style: redStrokeStyle
}));
view.add(new ViewElement(g2, {
  interactable: false,
  autoUpdateView: true,
  style: blueStrokeStyle
}));
card.setDescription((_ref = "Result: " + ((_result = result) == null ? void 0 : _result.toString())) != null ? _ref : "undefined");
