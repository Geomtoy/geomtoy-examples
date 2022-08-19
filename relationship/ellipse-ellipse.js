import { n as Relationship, U as Utility, E as Ellipse, M as Maths } from '../js/geomtoy.js';
import { t as tpl } from '../js/multiple-canvas-renderer.js';
import { t as trileanResult, a as arrayResult } from '../js/_common2.js';
import 'https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js';
import 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';
import '../js/color.js';

tpl.title("Ellipse-ellipse relationship");
const rs = new Relationship();
{
  tpl.addSection("Equal");
  {
    const card = tpl.addCard({
      title: "equal",
      canvasId: Utility.uuid()
    });
    const ellipse1 = new Ellipse([0, 0], 5, 10, Maths.PI / 2);
    const ellipse2 = new Ellipse([0, 0], 10, 5);
    trileanResult(card, ellipse1, ellipse2, rs.equal(ellipse1, ellipse2));
  }
}
{
  tpl.addSection("Separate");
  {
    const card = tpl.addCard({
      title: "separate",
      canvasId: Utility.uuid()
    });
    const ellipse1 = new Ellipse([10, 0], 5, 10);
    const ellipse2 = new Ellipse([-10, 0], 10, 5);
    trileanResult(card, ellipse1, ellipse2, rs.separate(ellipse1, ellipse2));
  }
}
{
  tpl.addSection("Contain/ContainedBy");
  {
    const card = tpl.addCard({
      title: "contain",
      canvasId: Utility.uuid()
    });
    const ellipse1 = new Ellipse([0, 0], 20, 10);
    const ellipse2 = new Ellipse([-5, 0], 10, 5);
    trileanResult(card, ellipse1, ellipse2, rs.contain(ellipse1, ellipse2));
  }
  {
    const card = tpl.addCard({
      title: "contained by",
      canvasId: Utility.uuid()
    });
    const ellipse1 = new Ellipse([-5, 0], 10, 5);
    const ellipse2 = new Ellipse([0, 0], 20, 10);
    trileanResult(card, ellipse1, ellipse2, rs.containedBy(ellipse1, ellipse2));
  }
}
{
  tpl.addSection("Intersect");
  {
    const card = tpl.addCard({
      title: "1 point Intersect",
      canvasId: Utility.uuid()
    });
    const ellipse1 = new Ellipse([0, 0], 10, 5);
    const ellipse2 = new Ellipse([0, 3], 5, 2);
    arrayResult(card, ellipse1, ellipse2, rs.intersect(ellipse1, ellipse2));
  }
  {
    const card = tpl.addCard({
      title: "2 points Intersect",
      canvasId: Utility.uuid()
    });
    const ellipse1 = new Ellipse([0, 0], 10, 5);
    const ellipse2 = new Ellipse([-10, 0], 20, 5, Maths.PI / 4);
    arrayResult(card, ellipse1, ellipse2, rs.intersect(ellipse1, ellipse2));
  }
  {
    const card = tpl.addCard({
      title: "3 points Intersect",
      canvasId: Utility.uuid()
    });
    const ellipse1 = new Ellipse([0, 0], 5, 10, Maths.PI / 2);
    const ellipse2 = new Ellipse([0, -5], 10, 5, Maths.PI / 2);
    arrayResult(card, ellipse1, ellipse2, rs.intersect(ellipse1, ellipse2));
  }
  {
    const card = tpl.addCard({
      title: "4 points Intersect",
      canvasId: Utility.uuid()
    });
    const ellipse1 = new Ellipse([0, 2], 10, 5);
    const ellipse2 = new Ellipse([-2, 0], 20, 5, Maths.PI / 4);
    arrayResult(card, ellipse1, ellipse2, rs.intersect(ellipse1, ellipse2));
  }
  {
    const card = tpl.addCard({
      title: "squashed ellipse Intersect",
      canvasId: Utility.uuid()
    });
    const ellipse1 = new Ellipse([0, 0], 0.0002, 5);
    const ellipse2 = new Ellipse([0, 0], 0.0005, 5, Maths.PI / 4);
    arrayResult(card, ellipse1, ellipse2, rs.intersect(ellipse1, ellipse2));
  }
}
{
  tpl.addSection("Strike/Cross");
  {
    const card = tpl.addCard({
      title: "strike and cross",
      canvasId: Utility.uuid()
    });
    const ellipse1 = new Ellipse([0, 0], 10, 5);
    const ellipse2 = new Ellipse([5, 0], 10, 5, Maths.PI / 4);
    arrayResult(card, ellipse1, ellipse2, rs.strike(ellipse1, ellipse2));
  }
}
{
  tpl.addSection("Contact/Touch");
  {
    const card = tpl.addCard({
      title: "contact and touch",
      canvasId: Utility.uuid()
    });
    const ellipse1 = new Ellipse([0, 2.193357483982], 5, 10);
    const ellipse2 = new Ellipse([-10, -10], 10, 5);
    arrayResult(card, ellipse1, ellipse2, rs.contact(ellipse1, ellipse2));
  }
}
{
  tpl.addSection("Coincide");
  {
    const card = tpl.addCard({
      title: "coincide",
      canvasId: Utility.uuid()
    });
    const ellipse1 = new Ellipse([0, 0], 10, 5, 0);
    const ellipse2 = new Ellipse([0, 0], 10, 5, 0);
    arrayResult(card, ellipse1, ellipse2, rs.coincide(ellipse1, ellipse2));
  }
}
