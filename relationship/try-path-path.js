import { n as Relationship, k as Path, U as Utility, V as View, C as CanvasRenderer, a as ViewElement } from '../js/geomtoy.js';
import { t as tpl } from '../js/multiple-canvas-renderer.js';
import 'https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js';
import 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';
import '../js/color.js';

tpl.title("Path-Path relationship");
new Relationship();
const commands = [Path.moveTo([0, 0]), Path.bezierTo([20, 20], [-10, 40], [80, 90])];
const path = new Path(commands, true);

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
view.add(new ViewElement(path, {
  interactable: false
}));
showBezierControlPoints(view, path, path.getUuidOfIndex(1));
