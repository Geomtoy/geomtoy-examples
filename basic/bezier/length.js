import { U as Utility, V as View, C as CanvasRenderer, P as Point, B as Bezier, L as LineSegment, a as ViewElement } from '../../js/geomtoy.js';
import { t as tpl, c as codeHtml, l as lightStrokeFill, b as thinStroke, a as stroke } from '../../js/multiple-canvas-renderer.js';
import 'https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js';
import 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';
import '../../js/color.js';

tpl.title("Bezier length");
{
  const card = tpl.addCard({
    canvasId: Utility.uuid(),
    aspectRatio: "2:1",
    className: "col-12",
    withPane: true
  });
  const view = new View({}, new CanvasRenderer(card.canvas, {}, {
    density: 10,
    zoom: 0.5,
    yAxisPositiveOnBottom: false
  }));
  view.startResponsive((width, height) => view.renderer.display.origin = [width / 2, height / 2]);
  view.startInteractive();
  const point1 = new Point([-20, 40]);
  const point2 = new Point([10, 20]);
  const controlPoint1 = new Point([30, 70]);
  const controlPoint2 = new Point([40, 20]);
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const lengths = {
    lengthByGeomtoy: 0,
    lengthBySvg: 0
  };
  const bezier = new Bezier().bind([[point1, "any"], [point2, "any"], [controlPoint1, "any"], [controlPoint2, "any"]], function ([e1, e2, e3, e4]) {
    this.copyFrom(new Bezier(e1.target, e2.target, e3.target, e4.target));
    lengths.lengthByGeomtoy = this.getLength();
    path.setAttribute("d", `M${e1.target.x},${e1.target.y}C${e3.target.x},${e3.target.y} ${e4.target.x},${e4.target.y} ${e2.target.x},${e2.target.y}`);
    lengths.lengthBySvg = path.getTotalLength();
  });
  card.setDescription(codeHtml(`
    const point1 = new Point([-20, 40]);
    const point2 = new Point([10, 20]);
    const controlPoint1 = new Point([30, 70]);
    const controlPoint2 = new Point([40, 20]);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const lengths = {
        lengthByGeomtoy: 0,
        lengthBySvg: 0
    };

    const bezier = new Bezier().bind(
        [
            [point1, "any"],
            [point2, "any"],
            [controlPoint1, "any"],
            [controlPoint2, "any"]
        ],
        function ([e1, e2, e3, e4]) {
            this.copyFrom(new Bezier(e1.target, e2.target, e3.target, e4.target));
            lengths.lengthByGeomtoy = this.getLength();
            path.setAttribute("d", \`M\${e1.target.x},\${e1.target.y}C\${e3.target.x},\${e3.target.y} \${e4.target.x},\${e4.target.y} \${e2.target.x},\${e2.target.y}\`);
            lengths.lengthBySvg = path.getTotalLength();
        }
    );
    `));
  const controlLineSegment1 = new LineSegment().bind([[point1, "any"], [controlPoint1, "any"]], function ([e1, e2]) {
    this.copyFrom(new LineSegment(e1.target, e2.target));
  });
  const controlLineSegment2 = new LineSegment().bind([[controlPoint1, "any"], [controlPoint2, "any"]], function ([e1, e2]) {
    this.copyFrom(new LineSegment(e1.target, e2.target));
  });
  const controlLineSegment3 = new LineSegment().bind([[controlPoint2, "any"], [point2, "any"]], function ([e1, e2]) {
    this.copyFrom(new LineSegment(e1.target, e2.target));
  });
  const pane = new Tweakpane.Pane({
    title: "Length",
    container: card.pane
  });
  pane.addMonitor(lengths, "lengthByGeomtoy", {
    label: " length by Geomtoy",
    format: v => v.toFixed(10)
  });
  pane.addMonitor(lengths, "lengthBySvg", {
    label: " length by SVG",
    format: v => v.toFixed(10)
  });
  view.add(new ViewElement(point1, {
    interactable: true,
    ...lightStrokeFill("brown")
  }));
  view.add(new ViewElement(point2, {
    interactable: true,
    ...lightStrokeFill("brown")
  }));
  view.add(new ViewElement(controlPoint1, {
    interactable: true,
    ...lightStrokeFill("brown")
  }));
  view.add(new ViewElement(controlPoint2, {
    interactable: true,
    ...lightStrokeFill("brown")
  }));
  view.add(new ViewElement(controlLineSegment1, {
    interactable: false,
    ...thinStroke("gray")
  }));
  view.add(new ViewElement(controlLineSegment2, {
    interactable: false,
    ...thinStroke("gray")
  }));
  view.add(new ViewElement(controlLineSegment3, {
    interactable: false,
    ...thinStroke("gray")
  }));
  view.add(new ViewElement(bezier, {
    interactable: false,
    ...stroke("brown")
  }));
}
