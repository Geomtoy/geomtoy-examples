import { Bezier, EventObject, Geometry, LineSegment, Point, QuadraticBezier, ShapeArray, Trilean } from "@geomtoy/core";
import { Coordinates, Utility } from "@geomtoy/util";
import { CanvasRenderer, Style, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { strokeOnly } from "../assets/scripts/common";
import { twoPointsLineSegment } from "../assets/scripts/general-construction";
import tpl from "../assets/templates/tpl-renderer";

export function samePointsOffset(epsilon: number) {
    const ret = {
        samePoints: [] as [Point, number][],
        check(point: Point) {
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
export function trileanResult(card: ReturnType<typeof tpl.addCard>, g1: Geometry, g2: Geometry, result: Trilean) {
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    view.add(new ViewElement(g1, { interactMode: ViewElementInteractMode.None, ...strokeOnly("red") }));
    view.add(new ViewElement(g2, { interactMode: ViewElementInteractMode.None, ...strokeOnly("blue") }));
    card.setDescription("markdown", "Result: " + result?.toString() ?? "undefined");
    return view;
}
export function arrayResult(card: ReturnType<typeof tpl.addCard>, g1: Geometry, g2: Geometry, result: Geometry[]) {
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    const shapeArray = new ShapeArray(result);
    view.add(new ViewElement(shapeArray, { interactMode: ViewElementInteractMode.None, ...strokeOnly("purple") }));
    view.add(new ViewElement(g1, { interactMode: ViewElementInteractMode.None, ...strokeOnly("red") }));
    view.add(new ViewElement(g2, { interactMode: ViewElementInteractMode.None, ...strokeOnly("blue") }));

    const content = `Result: <button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${card.id}">
        View
    </button>
    <div class="collapse" id="collapse-${card.id}">
        ${shapeArray.items.map(p => `<pre style="tab-size: 4">${p.toString()}</pre>`).join("")} 
    </div>
    `;
    card.setDescription("html", content);
    return view;
}

function bezierCtor(this: Bezier, e1: EventObject<Point>, e2: EventObject<Point>, e3: EventObject<Point>, e4: EventObject<Point>) {
    this.copyFrom(new Bezier(e1.target, e2.target, e3.target, e4.target));
}
function quadraticBezierCtor(this: QuadraticBezier, e1: EventObject<Point>, e2: EventObject<Point>, e3: EventObject<Point>) {
    this.copyFrom(new QuadraticBezier(e1.target, e2.target, e3.target));
}

export function quadraticBezierViewBundle(
    curveStyle: { style: Partial<Style>; hoverStyle: Partial<Style>; activeStyle: Partial<Style> },
    endpointStyle: { style: Partial<Style>; hoverStyle: Partial<Style>; activeStyle: Partial<Style> },
    controlPointStyle: { style: Partial<Style>; hoverStyle: Partial<Style>; activeStyle: Partial<Style> },
    controlSegmentStyle: { style: Partial<Style>; hoverStyle: Partial<Style>; activeStyle: Partial<Style> }
) {
    const points = Utility.range(0, 3).map(_ => Point.random([-20, -20, 40, 40]));
    // prettier-ignore
    const quadraticBezier = new QuadraticBezier().bind( 
        ...points.map(point => [point, "any"]) as [[Point, string], [Point, string], [Point, string]],
        quadraticBezierCtor
    );
    const controlSegment1 = new LineSegment().bind([points[0], "any"], [points[2], "any"], twoPointsLineSegment);
    const controlSegment2 = new LineSegment().bind([points[1], "any"], [points[2], "any"], twoPointsLineSegment);

    return {
        quadraticBezier: new ViewElement(quadraticBezier, { interactMode: ViewElementInteractMode.None, ...curveStyle }),
        point1: new ViewElement(points[0], { interactMode: ViewElementInteractMode.Activation, ...endpointStyle }),
        point2: new ViewElement(points[1], { interactMode: ViewElementInteractMode.Activation, ...endpointStyle }),
        controlPoint: new ViewElement(points[2], { interactMode: ViewElementInteractMode.Activation, ...controlPointStyle }),
        controlSegment1: new ViewElement(controlSegment1, { interactMode: ViewElementInteractMode.None, ...controlSegmentStyle }),
        controlSegment2: new ViewElement(controlSegment2, { interactMode: ViewElementInteractMode.None, ...controlSegmentStyle })
    };
}

export function bezierViewBundle(
    curveStyle: { style: Partial<Style>; hoverStyle: Partial<Style>; activeStyle: Partial<Style> },
    endpointStyle: { style: Partial<Style>; hoverStyle: Partial<Style>; activeStyle: Partial<Style> },
    controlPointStyle: { style: Partial<Style>; hoverStyle: Partial<Style>; activeStyle: Partial<Style> },
    controlSegmentStyle: { style: Partial<Style>; hoverStyle: Partial<Style>; activeStyle: Partial<Style> }
) {
    const points = Utility.range(0, 4).map(_ => Point.random([-20, -20, 40, 40]));
    const bezier = new Bezier().bind(...(points.map(point => [point, "any"]) as [[Point, string], [Point, string], [Point, string], [Point, string]]), bezierCtor);
    const controlSegment1 = new LineSegment().bind([points[0], "any"], [points[2], "any"], twoPointsLineSegment);
    const controlSegment2 = new LineSegment().bind([points[1], "any"], [points[3], "any"], twoPointsLineSegment);
    const controlSegment3 = new LineSegment().bind([points[2], "any"], [points[3], "any"], twoPointsLineSegment);

    return {
        bezier: new ViewElement(bezier, { interactMode: ViewElementInteractMode.None, ...curveStyle }),
        point1: new ViewElement(points[0], { interactMode: ViewElementInteractMode.Activation, ...endpointStyle }),
        point2: new ViewElement(points[1], { interactMode: ViewElementInteractMode.Activation, ...endpointStyle }),
        controlPoint1: new ViewElement(points[2], { interactMode: ViewElementInteractMode.Activation, ...controlPointStyle }),
        controlPoint2: new ViewElement(points[3], { interactMode: ViewElementInteractMode.Activation, ...controlPointStyle }),
        controlSegment1: new ViewElement(controlSegment1, { interactMode: ViewElementInteractMode.None, ...controlSegmentStyle }),
        controlSegment2: new ViewElement(controlSegment2, { interactMode: ViewElementInteractMode.None, ...controlSegmentStyle }),
        controlSegment3: new ViewElement(controlSegment3, { interactMode: ViewElementInteractMode.None, ...controlSegmentStyle })
    };
}
