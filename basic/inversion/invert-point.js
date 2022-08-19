import { U as Utility, V as View, C as CanvasRenderer, P as Point, D as Dynamic, I as Inversion, i as Ray, a as ViewElement } from '../../js/geomtoy.js';
import { t as tpl, c as codeHtml, l as lightStrokeFill, s as strokeFill, a as stroke, b as thinStroke } from '../../js/multiple-canvas-renderer.js';
import 'https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js';
import 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';
import '../../js/color.js';

tpl.title("Inversion: inverse of point");
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
  const point = new Point([-5, 6]);
  const inversionCenterPoint = new Point([0, 0]);
  const inversionPower = new Dynamic({
    power: 100
  });
  const inversion = new Inversion().bind([[inversionCenterPoint, "any"], [inversionPower, "any"]], function ([e1, e2]) {
    this.centerPoint = e1.target;
    this.power = e2.target.power;
  });
  const ray = new Ray().bind([[inversionCenterPoint, "any"], [point, "any"]], function ([e1, e2]) {
    this.copyFrom(Ray.fromTwoPoints(e1.target, e2.target));
  });
  const pointInverse = new Point(0, 0, "plus").bind([[point, "any"], [inversion, "any"]], function ([e1, e2]) {
    this.copyFrom(e2.target.invertPoint(e1.target));
  });
  card.setDescription(codeHtml(`
    const point = new Point([-5, 6]);
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
    const ray = new Ray().bind(
        [
            [inversionCenterPoint, "any"],
            [point, "any"]
        ],
        function ([e1, e2]) {
            this.copyFrom(Ray.fromTwoPoints(e1.target, e2.target));
        }
    );

    const pointInverse = new Point(0, 0, "plus").bind(
        [
            [point, "any"],
            [inversion, "any"]
        ],
        function ([e1, e2]) {
            this.copyFrom(e2.target.invertPoint(e1.target));
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
    title: "Point"
  });
  const inputPoint = folderPoint.addInput({
    point
  }, "point", {
    y: {
      inverted: true
    }
  });
  point.on("any", () => inputPoint.refresh());
  view.add(new ViewElement(point, {
    interactable: true,
    ...lightStrokeFill("teal")
  }));
  view.add(new ViewElement(inversionCenterPoint, {
    interactable: false,
    ...strokeFill("brown")
  }));
  view.add(new ViewElement(pointInverse, {
    interactable: false,
    ...stroke("gray")
  }));
  view.add(new ViewElement(ray, {
    interactable: false,
    ...thinStroke("gray")
  }));
}
