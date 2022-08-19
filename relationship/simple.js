import { C as CanvasRenderer, V as View, a as ViewElement } from '../js/geomtoy.js';
import { c as color } from '../js/color.js';
import { t as tpl } from '../js/simple-canvas-renderer.js';

const canvas = tpl.getCanvas();
tpl.setDescription(``);
const canvasRenderer = new CanvasRenderer(canvas, g);
canvasRenderer.display.density = 10;
canvasRenderer.display.zoom = 1;
canvasRenderer.display.yAxisPositiveOnBottom = false;
canvasRenderer.display.xAxisPositiveOnRight = false;
const view = new View(g, {
  hoverForemost: false
}, canvasRenderer);
view.startResponsive((width, height) => view.renderer.display.origin = [width / 2, height / 2]);
view.startInteractive();

const main = () => {
  const pA = g.Point(-25, -12);
  const pB = g.Point(-20, 25);
  const pC = g.Point(0, 0);
  const pD = g.Point(20, 40);
  const pE = g.Point(20, 60);

  const lsAB = g.LineSegment().bind([[pA, "any"], [pB, "any"]], function ([e1, e2]) {
    this.copyFrom(g.LineSegment(e1.target, e2.target));
  });
  const qbCDE = g.QuadraticBezier().bind([[pC, "any"], [pD, "any"], [pE, "any"]], function ([e1, e2, e3]) {
    this.copyFrom(g.QuadraticBezier(e1.target, e2.target, e3.target));
  });
  const rs = g.Relationship();
  const group = g.Group().bind([[lsAB, "any"], [qbCDE, "any"]], function ([e1, e2]) {
    const cs = rs.cross.lineSegmentQuadraticBezier(e1.target, e2.target);
    this.items = cs;
  });
  view.add(new ViewElement(pA, true, {
    fill: color("black", 0.2)
  }, hoverStyle, activeStyle)).add(new ViewElement(pB, true, {
    fill: color("black", 0.2)
  }, hoverStyle, activeStyle)).add(new ViewElement(pC, true, {
    fill: color("black", 0.2)
  }, hoverStyle, activeStyle)).add(new ViewElement(pD, true, {
    fill: color("black", 0.2)
  }, hoverStyle, activeStyle)).add(new ViewElement(pE, true, {
    fill: color("gray")
  }, hoverStyle, activeStyle)).add(new ViewElement(lsAB, false, {
    stroke: color("red")
  }, hoverStyle, activeStyle)).add(new ViewElement(qbCDE, false, {
    stroke: color("purple")
  }, hoverStyle, activeStyle)).add(new ViewElement(group, false, {
    fill: color("pink")
  }, hoverStyle, activeStyle)).add(new ViewElement(g.Point.zero(), false, {
    fill: color("gray")
  }, hoverStyle, activeStyle));
};

main();
