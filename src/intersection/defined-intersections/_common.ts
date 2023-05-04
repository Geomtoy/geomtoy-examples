import { Geometry, Point, Trilean } from "@geomtoy/core";
import { Coordinates } from "@geomtoy/util";
import { CanvasRenderer, SubView, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill, lightStrokeOnly, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

export function samePointsOffset(epsilon: number) {
    const ret = {
        samePoints: [] as [Point, number][],
        check(point: Point) {
            const offset = 0.5;
            const samePoints = ret.samePoints;
            const index = samePoints.findIndex(([p]) => Coordinates.equalTo(p.coordinates, point.coordinates, epsilon));
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
    view.startResponsive(View.centerOrigin);
    view.startInteractive();
    view.add(new ViewElement(g2, { type: ViewElementType.None, ...lightStrokeOnly("blue") }));
    view.add(new ViewElement(g1, { type: ViewElementType.None, ...strokeOnly("red") }));
    card.setDescription("markdown", "Result: " + result?.toString() ?? "undefined");
    return view;
}
export function arrayResult(card: ReturnType<typeof tpl.addCard>, g1: Geometry, g2: Geometry, result: Geometry[]) {
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();
    const resultSubView = new SubView();
    for (const g of result) {
        if (g instanceof Point) {
            resultSubView.add(new ViewElement(g, { zIndex: 1, type: ViewElementType.None, ...lightStrokeFill("purple") }));
        } else {
            resultSubView.add(new ViewElement(g, { zIndex: 1, type: ViewElementType.None, ...lightStrokeOnly("purple") }));
        }
    }
    view.addSubView(resultSubView);
    view.add(new ViewElement(g2, { type: ViewElementType.None, ...lightStrokeOnly("blue") }));
    view.add(new ViewElement(g1, { type: ViewElementType.None, ...strokeOnly("red") }));

    const content = `
    <div class="mb-2">
        Result: 
        <button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${card.id}">View</button>
    </div>
    <div class="collapse" id="collapse-${card.id}">
        ${result.map(g => `<pre style="tab-size: 4">${g.toString()}</pre>`).join("")} 
    </div>
    `;
    card.setDescription("html", content);
    return view;
}
