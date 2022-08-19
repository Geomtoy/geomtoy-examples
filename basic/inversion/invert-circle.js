import { U as Utility, V as View, C as CanvasRenderer, P as Point, D as Dynamic, e as Circle, I as Inversion, g as Arbitrary, h as geomtoy, a as ViewElement } from '../../js/geomtoy.js';
import { t as tpl, c as codeHtml, l as lightStrokeFill, a as stroke, s as strokeFill, b as thinStroke } from '../../js/multiple-canvas-renderer.js';
import 'https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js';
import 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';
import '../../js/color.js';

tpl.title("Inversion: inverse of circle");
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
  const centerPoint = new Point([2, 10]);
  const radius = new Dynamic({
    radius: 10
  });
  const circle = new Circle().bind([[centerPoint, "any"], [radius, "any"]], function ([e1, e2]) {
    this.copyFrom(new Circle(e1.target, e2.target.radius));
  });
  const inversionCenterPoint = new Point([0, 0]);
  const inversionPower = new Dynamic({
    power: 100
  });
  const inversion = new Inversion().bind([[inversionCenterPoint, "any"], [inversionPower, "any"]], function ([e1, e2]) {
    this.centerPoint = e1.target;
    this.power = e2.target.power;
  });
  const circleInverse = new Arbitrary().bind([[circle, "any"], [inversion, "any"]], function ([e1, e2]) {
    this.copyFrom(e2.target.invertCircle(e1.target));
  });
  card.setDescription(codeHtml(`
    const centerPoint = new Point([2, 10]);
    const radius = new Dynamic({
        radius: 10
    });
    const circle = new Circle().bind(
        [
            [centerPoint, "any"],
            [radius, "any"]
        ],
        function ([e1, e2]) {
            this.copyFrom(new Circle(e1.target, e2.target.radius));
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

    const circleInverse = new Arbitrary().bind(
        [
            [circle, "any"],
            [inversion, "any"]
        ],
        function ([e1, e2]) {
            this.copyFrom(e2.target.invertCircle(e1.target));
        }
    );
    `));
  const epsilon = geomtoy.getOptions().epsilon;
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
    min: epsilon,
    max: 10000
  });
  const folderPoint = pane.addFolder({
    title: "Circle"
  });
  const inputCenterPoint = folderPoint.addInput({
    centerPoint
  }, "centerPoint", {
    y: {
      inverted: true
    }
  });
  centerPoint.on("any", () => inputCenterPoint.refresh());
  folderPoint.addInput(radius, "radius", {
    min: epsilon,
    max: 500,
    step: 0.01
  });
  view.add(new ViewElement(centerPoint, {
    interactable: true,
    ...lightStrokeFill("teal")
  }));
  view.add(new ViewElement(circle, {
    interactable: false,
    ...stroke("teal")
  }));
  view.add(new ViewElement(inversionCenterPoint, {
    interactable: true,
    ...strokeFill("brown")
  }));
  view.add(new ViewElement(circleInverse, {
    interactable: false,
    ...thinStroke("gray")
  }));
}
