import { j as BooleanOperation, k as Path, U as Utility, V as View, C as CanvasRenderer, a as ViewElement } from '../js/geomtoy.js';
import { t as tpl, s as strokeFill } from '../js/multiple-canvas-renderer.js';
import { r as randomPathCommand, s as strokeFillByIndex } from '../js/_common.js';
import 'https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js';
import 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';
import '../js/color.js';

tpl.title("Path self-union");
const bo = new BooleanOperation();
{
  tpl.addSection("Common case");
  tpl.addParagraph("Refresh to random");
  const path = new Path(Utility.range(0, 20).map(_ => randomPathCommand()), true);
  const desc = bo.describe(path);
  const selected = bo.selectSelfUnion(desc);
  console.time();
  const compound = bo.chain(selected);
  console.timeEnd();
  const card1 = tpl.addCard({
    title: "original",
    canvasId: Utility.uuid(),
    className: "col-6"
  });
  const view1 = new View({}, new CanvasRenderer(card1.canvas, {}, {
    density: 10,
    zoom: 0.2,
    yAxisPositiveOnBottom: false
  }));
  const card2 = tpl.addCard({
    title: "self-union",
    canvasId: Utility.uuid(),
    className: "col-6"
  });
  const view2 = new View({}, new CanvasRenderer(card2.canvas, {}, {
    density: 10,
    zoom: 0.2,
    yAxisPositiveOnBottom: false
  }));
  view1.startResponsive((width, height) => view1.renderer.display.origin = [width / 2, height / 2]);
  view1.startInteractive();
  view2.startResponsive((width, height) => view2.renderer.display.origin = [width / 2, height / 2]);
  view2.startInteractive();
  view1.add(new ViewElement(path, {
    interactable: false,
    ...strokeFill("red")
  }));
  compound.items.forEach((item, index) => {
    view2.add(new ViewElement(item, {
      interactable: false,
      ...strokeFillByIndex(index)
    }));
  });
}
