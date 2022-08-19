import { U as Utility, V as View, C as CanvasRenderer, E as Ellipse, a as ViewElement, M as Maths } from '../../js/geomtoy.js';
import { t as tpl, l as lightStrokeFill } from '../../js/multiple-canvas-renderer.js';
import 'https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js';
import 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';
import '../../js/color.js';

tpl.title("Ellipse point and angle");
tpl.addSection(`Get point at angle`);
{
  const card = tpl.addCard({
    canvasId: Utility.uuid(),
    aspectRatio: "2:1",
    className: "col-12"
  });
  const view = new View({}, new CanvasRenderer(card.canvas, {}, {
    density: 10,
    zoom: 0.5,
    yAxisPositiveOnBottom: false
  }));
  view.startResponsive((width, height) => view.renderer.display.origin = [width / 2, height / 2]);
  view.startInteractive();
  const ellipse = new Ellipse(0, 0, 40, 10, 0);
  const angle = Maths.PI / 4;
  const point = ellipse.getPointAtAngle(angle);
  view.add(new ViewElement(ellipse, {
    interactable: true,
    ...lightStrokeFill("brown")
  }));
  view.add(new ViewElement(point, {
    interactable: true,
    ...lightStrokeFill("brown")
  }));
}
tpl.addSection(`Get angle of point`);
