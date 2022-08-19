import { n as Relationship, U as Utility, V as View, C as CanvasRenderer, p as Polynomial, a as ViewElement } from '../../js/geomtoy.js';
import { c as color } from '../../js/color.js';
import { t as tpl } from '../../js/multiple-canvas-renderer.js';
import 'https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js';
import 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';

tpl.title("Quadratic bezier&#8211;quadratic bezier relationship");
const rs = new Relationship();
const redStrokeStyle = {
  stroke: color("red", 0.75),
  strokeWidth: 4
};
const blueStrokeStyle = {
  stroke: color("blue", 0.75),
  strokeWidth: 4
};
({
  stroke: color("purple", 0.75),
  strokeWidth: 4
});
const purpleFillStyle = {
  fill: color("purple", 0.75)
};
{
  tpl.addSection("Equal");
  {
    const card = tpl.addCard("equal", "", Utility.uuid());
    const view = new View(g, {}, new CanvasRenderer(card.canvas, g, {}, {
      density: 10,
      zoom: 1,
      yAxisPositiveOnBottom: false
    }));
    view.startResponsive((width, height) => view.renderer.display.origin = [width / 2, height / 2]);
    view.startInteractive();
    const quadraticBezier1 = g.QuadraticBezier([2, -10], [2, 10], [3, 1]);
    const quadraticBezier2 = g.QuadraticBezier([-30, -4], [20, 6], [20, 10]);
    console.log(quadraticBezier1.getPolynomial());
    console.log(Polynomial.monic(quadraticBezier1.getImplicitFunctionCoefs()));
    console.log(quadraticBezier2.getPolynomial());
    console.log(Polynomial.monic(quadraticBezier2.getImplicitFunctionCoefs()));
    view.add(new ViewElement(quadraticBezier1, false, redStrokeStyle));
    view.add(new ViewElement(quadraticBezier2, false, blueStrokeStyle));
    card.setDescription("Result: " + rs.equal(quadraticBezier1, quadraticBezier2).toString());
  }
}
{
  tpl.addSection("Cross");
  {
    const card = tpl.addCard("cross-1 point", "", Utility.uuid());
    const view = new View(g, {}, new CanvasRenderer(card.canvas, g, {}, {
      density: 10,
      zoom: 1,
      yAxisPositiveOnBottom: false
    }));
    view.startResponsive((width, height) => view.renderer.display.origin = [width / 2, height / 2]);
    view.startInteractive();
    const quadraticBezier1 = g.QuadraticBezier([2, -10], [2, 10], [2, 1]);
    const quadraticBezier2 = g.QuadraticBezier([-30, -4], [20, 6], [40, 10]);
    const group = g.Group();
    view.add(new ViewElement(group, false, purpleFillStyle));
    view.add(new ViewElement(quadraticBezier1, false, redStrokeStyle));
    view.add(new ViewElement(quadraticBezier2, false, blueStrokeStyle));
    const result = rs.cross(quadraticBezier1, quadraticBezier2);
    group.items = result;
    card.setDescription("Result: <br>" + result.map(p => `<p>${p.toString()}</p>`).join(""));
  }
}
