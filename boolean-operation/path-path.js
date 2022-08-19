import { j as BooleanOperation, k as Path, U as Utility, V as View, C as CanvasRenderer, a as ViewElement } from '../js/geomtoy.js';
import { t as tpl, s as strokeFill } from '../js/multiple-canvas-renderer.js';
import { r as randomPathCommand } from '../js/_common.js';
import 'https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js';
import 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';
import '../js/color.js';

tpl.title("Path-path boolean operation");
const bo = new BooleanOperation();
const path1 = new Path(Utility.range(0, 10).map(_ => randomPathCommand()), true);
const path2 = new Path(Utility.range(0, 10).map(_ => randomPathCommand()), true);
const desc1 = bo.describe(path1);
const desc2 = bo.describe(path2);
console.log(desc1);
console.log(desc2);
const combined = bo.combine(desc1, desc2);
{
  tpl.addSection("Union");
  bo.chain(bo.selectUnion(combined));
  const card1 = tpl.addCard({
    title: "original",
    canvasId: Utility.uuid(),
    className: "col-6"
  });
  const view1 = new View({}, new CanvasRenderer(card1.canvas, {}, {
    density: 10,
    zoom: 0.18,
    yAxisPositiveOnBottom: false
  }));
  const card2 = tpl.addCard({
    title: "boolean",
    canvasId: Utility.uuid(),
    className: "col-6"
  });
  const view2 = new View({}, new CanvasRenderer(card2.canvas, {}, {
    density: 10,
    zoom: 0.18,
    yAxisPositiveOnBottom: false
  }));
  view1.startResponsive((width, height) => view1.renderer.display.origin = [width / 2, height / 2]);
  view1.startInteractive();
  view2.startResponsive((width, height) => view2.renderer.display.origin = [width / 2, height / 2]);
  view2.startInteractive();
  view1.add(new ViewElement(path1, {
    interactable: false,
    ...strokeFill("red")
  }));
  desc1.annotators.forEach(sfa => {
    view2.add(new ViewElement(sfa.segment.point1, {
      interactable: false,
      autoUpdateView: true,
      style: {
        noFill: true,
        stroke: "red"
      }
    }));
    view2.add(new ViewElement(sfa.segment.point2, {
      interactable: false,
      autoUpdateView: true,
      style: {
        noFill: true,
        stroke: "blue"
      }
    }));
    view2.add(new ViewElement(sfa.segment, {
      interactable: false,
      autoUpdateView: true,
      style: {
        noFill: true,
        stroke: "purple"
      }
    }));
  });
}
