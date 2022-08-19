import { a as ViewElement, o as Coordinates, V as View, C as CanvasRenderer, b as ShapeArray, c as ViewGroupElement, U as Utility, P as Point, Q as QuadraticBezier, L as LineSegment, B as Bezier } from './geomtoy.js';
import { a as stroke } from './multiple-canvas-renderer.js';

function samePointsOffset(epsilon) {
  const ret = {
    samePoints: [],

    check(point) {
      const offset = 0.5;
      const samePoints = ret.samePoints;
      const index = samePoints.findIndex(([p]) => Coordinates.isEqualTo(p.coordinates, point.coordinates, epsilon));

      if (index === -1) {
        samePoints.push([point, 0]);
      } else {
        const theOffset = ++samePoints[index][1] * offset;
        point.move(theOffset, -theOffset);
      }
    },

    clear() {
      ret.samePoints = [];
    }

  };
  return ret;
}
function trileanResult(card, g1, g2, result) {
  var _ref;

  const view = new View({}, new CanvasRenderer(card.canvas, {}, {
    density: 10,
    zoom: 1,
    yAxisPositiveOnBottom: false
  }));
  view.startResponsive((width, height) => view.renderer.display.origin = [width / 2, height / 2]);
  view.startInteractive();
  view.add(new ViewElement(g1, {
    interactable: false,
    ...stroke("red")
  }));
  view.add(new ViewElement(g2, {
    interactable: false,
    ...stroke("blue")
  }));
  card.setDescription((_ref = "Result: " + (result == null ? void 0 : result.toString())) != null ? _ref : "undefined");
  return view;
}
function arrayResult(card, g1, g2, result) {
  const view = new View({}, new CanvasRenderer(card.canvas, {}, {
    density: 10,
    zoom: 1,
    yAxisPositiveOnBottom: false
  }));
  view.startResponsive((width, height) => view.renderer.display.origin = [width / 2, height / 2]);
  view.startInteractive();
  const shapeArray = new ShapeArray(result);
  view.add(new ViewGroupElement(shapeArray.shapes, {
    interactable: false,
    ...stroke("purple")
  }));
  view.add(new ViewElement(g1, {
    interactable: false,
    ...stroke("red")
  }));
  view.add(new ViewElement(g2, {
    interactable: false,
    ...stroke("blue")
  }));
  const content = `Result: <button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${card.canvasId}">
        View
    </button>
    <div class="collapse" id="collapse-${card.canvasId}"> 
        ${shapeArray.shapes.map(p => `<p><pre>${p.toString()}</pre></p>`).join("")} 
    </div>
    `;
  card.setDescription(content);
  new bootstrap.Collapse(document.querySelector(`#collapse-${card.canvasId}`), {
    toggle: false
  });
  return view;
}

function lineSegmentCtor([e1, e2]) {
  this.copyFrom(new LineSegment(e1.target, e2.target));
}

function bezierCtor([e1, e2, e3, e4]) {
  this.copyFrom(new Bezier(e1.target, e2.target, e3.target, e4.target));
}

function quadraticBezierCtor([e1, e2, e3]) {
  this.copyFrom(new QuadraticBezier(e1.target, e2.target, e3.target));
}

function quadraticBezierViewBundle(curveStyle, endpointStyle, controlPointStyle, controlSegmentStyle) {
  const points = Utility.range(0, 3).map(_ => Point.random([-20, -20, 40, 40]));
  const quadraticBezier = new QuadraticBezier().bind(points.map(point => [point, "any"]), quadraticBezierCtor);
  const controlSegment1 = new LineSegment().bind([[points[0], "any"], [points[2], "any"]], lineSegmentCtor);
  const controlSegment2 = new LineSegment().bind([[points[1], "any"], [points[2], "any"]], lineSegmentCtor);
  return {
    quadraticBezier: new ViewElement(quadraticBezier, {
      interactable: false,
      ...curveStyle
    }),
    point1: new ViewElement(points[0], {
      interactable: true,
      ...endpointStyle
    }),
    point2: new ViewElement(points[1], {
      interactable: true,
      ...endpointStyle
    }),
    controlPoint: new ViewElement(points[2], {
      interactable: true,
      ...controlPointStyle
    }),
    controlSegment1: new ViewElement(controlSegment1, {
      interactable: false,
      ...controlSegmentStyle
    }),
    controlSegment2: new ViewElement(controlSegment2, {
      interactable: false,
      ...controlSegmentStyle
    })
  };
}
function bezierViewBundle(curveStyle, endpointStyle, controlPointStyle, controlSegmentStyle) {
  const points = Utility.range(0, 4).map(_ => Point.random([-20, -20, 40, 40]));
  const bezier = new Bezier().bind(points.map(point => [point, "any"]), bezierCtor);
  const controlSegment1 = new LineSegment().bind([[points[0], "any"], [points[2], "any"]], lineSegmentCtor);
  const controlSegment2 = new LineSegment().bind([[points[1], "any"], [points[3], "any"]], lineSegmentCtor);
  const controlSegment3 = new LineSegment().bind([[points[2], "any"], [points[3], "any"]], lineSegmentCtor);
  return {
    bezier: new ViewElement(bezier, {
      interactable: false,
      ...curveStyle
    }),
    point1: new ViewElement(points[0], {
      interactable: true,
      ...endpointStyle
    }),
    point2: new ViewElement(points[1], {
      interactable: true,
      ...endpointStyle
    }),
    controlPoint1: new ViewElement(points[2], {
      interactable: true,
      ...controlPointStyle
    }),
    controlPoint2: new ViewElement(points[3], {
      interactable: true,
      ...controlPointStyle
    }),
    controlSegment1: new ViewElement(controlSegment1, {
      interactable: false,
      ...controlSegmentStyle
    }),
    controlSegment2: new ViewElement(controlSegment2, {
      interactable: false,
      ...controlSegmentStyle
    }),
    controlSegment3: new ViewElement(controlSegment3, {
      interactable: false,
      ...controlSegmentStyle
    })
  };
}

export { arrayResult as a, bezierViewBundle as b, quadraticBezierViewBundle as q, samePointsOffset as s, trileanResult as t };
