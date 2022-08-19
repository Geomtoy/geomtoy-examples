import { h as geomtoy, j as BooleanOperation, l as Polygon, U as Utility, V as View, C as CanvasRenderer, a as ViewElement } from '../js/geomtoy.js';
import { t as tpl, s as strokeFill } from '../js/multiple-canvas-renderer.js';
import { a as randomPolygonVertex } from '../js/_common.js';
import 'https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js';
import 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';
import '../js/color.js';

tpl.title("Polygon self-union");
geomtoy.setOptions({});
const bo = new BooleanOperation();
{
  tpl.addSection("Common case");
  tpl.addParagraph("Refresh to random");
  const polygon = new Polygon(Utility.range(0, 10).map(_ => randomPolygonVertex()));
  polygon.fillRule = "nonzero";
  const compound = bo.selfUnion(polygon);
  console.log(compound);
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
  view1.add(new ViewElement(polygon, {
    interactable: false,
    ...strokeFill("red")
  }));
  view2.add(new ViewElement(compound, {
    interactable: false,
    ...strokeFill("red")
  }));
}
{
  tpl.addSection("Special case about fill rule");
  const polygon1 = new Polygon([Polygon.vertex([-50, 25]), Polygon.vertex([-50, -25]), Polygon.vertex([-25, -25]), Polygon.vertex([-25, 25]), Polygon.vertex([-50, 25]), Polygon.vertex([-50, -25]), Polygon.vertex([-25, -25]), Polygon.vertex([-25, 25])], true);
  polygon1.fillRule = "evenodd";
  const polygon2 = new Polygon([Polygon.vertex([25, 25]), Polygon.vertex([25, -25]), Polygon.vertex([50, -25]), Polygon.vertex([50, 25]), Polygon.vertex([25, 25]), Polygon.vertex([25, -25]), Polygon.vertex([50, -25]), Polygon.vertex([50, 25])], true);
  polygon2.fillRule = "nonzero";
  const compound1 = bo.selfUnion(polygon1);
  const compound2 = bo.selfUnion(polygon2);
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
  view1.add(new ViewElement(polygon1, {
    interactable: false,
    ...strokeFill("red")
  }));
  view1.add(new ViewElement(polygon2, {
    interactable: false,
    ...strokeFill("blue")
  }));
  view2.add(new ViewElement(compound1, {
    interactable: false,
    ...strokeFill("red")
  }));
  view2.add(new ViewElement(compound2, {
    interactable: false,
    ...strokeFill("blue")
  }));
  card1.setDescription(`<pre><code class="language-js">
    // red and blue polygons are both two loop closed polygon

    // red polygon
    const polygon1 = new Polygon(
        
        [
            Polygon.vertex([-50, 25]),
            Polygon.vertex([-50, -25]),
            Polygon.vertex([-25, -25]),
            Polygon.vertex([-25, 25]),
            Polygon.vertex([-50, 25]),
            Polygon.vertex([-50, -25]),
            Polygon.vertex([-25, -25]),
            Polygon.vertex([-25, 25])
        ],
        true
    );
    polygon1.fillRule = "evenodd";

    // blue polygon
    const polygon2 = new Polygon(
        
        [
            Polygon.vertex([25, 25]),
            Polygon.vertex([25, -25]),
            Polygon.vertex([50, -25]),
            Polygon.vertex([50, 25]),
            Polygon.vertex([25, 25]),
            Polygon.vertex([25, -25]),
            Polygon.vertex([50, -25]),
            Polygon.vertex([50, 25]),
        ],
        true
    );
    polygon2.fillRule = "nonzero";
    </pre>`);
  card2.setDescription(`<pre><code class="language-js">
    // red polygon after self-union is empty set 
    const compound1 = bo.selfUnion(polygon1);

    // blue polygon after self-union is normal polygon
    const compound2 = bo.selfUnion(polygon2); 
    </pre>`);
}
