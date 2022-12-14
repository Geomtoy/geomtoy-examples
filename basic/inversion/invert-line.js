import { U as Utility, V as View, C as CanvasRenderer, P as Point, f as Line, D as Dynamic, I as Inversion, g as Arbitrary, a as ViewElement } from '../../js/geomtoy.js';
import { t as tpl, c as codeHtml, l as lightStrokeFill, a as stroke, s as strokeFill, b as thinStroke } from '../../js/multiple-canvas-renderer.js';
import 'https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js';
import 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';
import '../../js/color.js';

tpl.title("Inversion: inverse of line");
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
  const point1 = new Point([-5, 6]);
  const point2 = new Point([5, 9]);
  const line = new Line().bind([[point1, "any"], [point2, "any"]], function ([e1, e2]) {
    const line = Line.fromTwoPoints(e1.target, e2.target);
    if (line !== null) this.copyFrom(line);
  });
  const inversionCenterPoint = new Point([0, 0]);
  const inversionPower = new Dynamic({
    power: 100
  });
  const inversion = new Inversion().bind([[inversionCenterPoint, "any"], [inversionPower, "any"]], function ([e1, e2]) {
    this.centerPoint = e1.target;
    this.power = e2.target.power;
  });
  const lineInverse = new Arbitrary().bind([[line, "any"], [inversion, "any"]], function ([e1, e2]) {
    this.copyFrom(e2.target.invertLine(e1.target));
  });
  card.setDescription(codeHtml(`
    const point1 = new Point([-5, 6]);
    const point2 = new Point([5, 9]);
    const line = new Line().bind(
        [
            [point1, "any"],
            [point2, "any"]
        ],
        function ([e1, e2]) {
            const line = Line.fromTwoPoints(e1.target, e2.target);
            if (line !== null) this.copyFrom(line);
        }
    );

    const inversionCenterPoint = new Point([0, 0]);
    const inversionPower = new Dynamic({
        power: 100
    });

    const inversion = new Inversion().bind(
        [
            [inversionCenterPoint, "any"],
            [inversionPower, "any"]
        ],
        function ([e1, e2]) {
            this.centerPoint = e1.target;
            this.power = e2.target.power;
        }
    );

    const lineInverse = new Arbitrary().bind(
        [
            [line, "any"],
            [inversion, "any"]
        ],
        function ([e1, e2]) {
            this.copyFrom(e2.target.invertLine(e1.target));
        }
    );
    `));
  const pane = new Tweakpane.Pane({
    title: "Inversion",
    container: card.pane
  });
  const folderInversion = pane.addFolder({
    title: "Inversion"
  });
  const inputInversionCenterPoint = folderInversion.addInput({
    inversionCenterPoint
  }, "inversionCenterPoint", {
    y: {
      inverted: true
    }
  });
  inversionCenterPoint.on("any", () => inputInversionCenterPoint.refresh());
  folderInversion.addInput(inversionPower, "power", {
    min: Number.EPSILON,
    max: 10000,
    step: 10
  });
  const folderPoint = pane.addFolder({
    title: "Line"
  });
  const inputPoint1 = folderPoint.addInput({
    point1
  }, "point1", {
    y: {
      inverted: true
    }
  });
  const inputPoint2 = folderPoint.addInput({
    point2
  }, "point2", {
    y: {
      inverted: true
    }
  });
  point1.on("any", () => inputPoint1.refresh());
  point2.on("any", () => inputPoint2.refresh());
  view.add(new ViewElement(point1, {
    interactable: true,
    ...lightStrokeFill("teal")
  }));
  view.add(new ViewElement(point2, {
    interactable: true,
    ...lightStrokeFill("teal")
  }));
  view.add(new ViewElement(line, {
    interactable: false,
    ...stroke("teal")
  }));
  view.add(new ViewElement(inversionCenterPoint, {
    interactable: true,
    ...strokeFill("brown")
  }));
  view.add(new ViewElement(lineInverse, {
    interactable: false,
    ...thinStroke("gray")
  }));
}
