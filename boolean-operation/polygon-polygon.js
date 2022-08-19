import { j as BooleanOperation, l as Polygon, U as Utility, V as View, C as CanvasRenderer, a as ViewElement } from '../js/geomtoy.js';
import { t as tpl, s as strokeFill } from '../js/multiple-canvas-renderer.js';
import { a as randomPolygonVertex } from '../js/_common.js';
import 'https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js';
import 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';
import '../js/color.js';

tpl.title("Polygon-polygon boolean operation");
const bo = new BooleanOperation();
const polygon1 = new Polygon(Utility.range(0, 10).map(_ => randomPolygonVertex()), true);
const polygon2 = new Polygon(Utility.range(0, 10).map(_ => randomPolygonVertex()));
const desc1 = bo.describe(polygon1);
const desc2 = bo.describe(polygon2);
const combined = bo.combine(desc1, desc2);
{
  tpl.addSection("Union");
  const compound = bo.chain(bo.selectUnion(combined));
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
    title: "boolean",
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
  view1.add(new ViewElement(polygon1, {
    interactable: false,
    ...strokeFill("red")
  }));
  view1.add(new ViewElement(polygon2, {
    interactable: false,
    ...strokeFill("blue")
  }));
  view2.add(new ViewElement(compound, {
    interactable: false,
    ...strokeFill("purple")
  }));
}
{
  tpl.addSection("Intersection");
  const compound = bo.chain(bo.selectIntersection(combined));
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
    title: "boolean",
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
  view1.add(new ViewElement(polygon1, {
    interactable: false,
    ...strokeFill("red")
  }));
  view1.add(new ViewElement(polygon2, {
    interactable: false,
    ...strokeFill("blue")
  }));
  view2.add(new ViewElement(compound, {
    interactable: false,
    ...strokeFill("purple")
  }));
}
{
  tpl.addSection("Difference");
  const compound = bo.chain(bo.selectDifference(combined));
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
    title: "boolean",
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
  view1.add(new ViewElement(polygon1, {
    interactable: false,
    ...strokeFill("red")
  }));
  view1.add(new ViewElement(polygon2, {
    interactable: false,
    ...strokeFill("blue")
  }));
  view2.add(new ViewElement(compound, {
    interactable: false,
    ...strokeFill("purple")
  }));
}
{
  tpl.addSection("DifferenceRev");
  const compound = bo.chain(bo.selectDifferenceRev(combined));
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
    title: "boolean",
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
  view1.add(new ViewElement(polygon1, {
    interactable: false,
    ...strokeFill("red")
  }));
  view1.add(new ViewElement(polygon2, {
    interactable: false,
    ...strokeFill("blue")
  }));
  view2.add(new ViewElement(compound, {
    interactable: false,
    ...strokeFill("purple")
  }));
}
{
  tpl.addSection("Exclusion");
  const compound = bo.chain(bo.selectExclusion(combined));
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
    title: "boolean",
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
  view1.add(new ViewElement(polygon1, {
    interactable: false,
    ...strokeFill("red")
  }));
  view1.add(new ViewElement(polygon2, {
    interactable: false,
    ...strokeFill("blue")
  }));
  view2.add(new ViewElement(compound, {
    interactable: false,
    ...strokeFill("purple")
  }));
}
