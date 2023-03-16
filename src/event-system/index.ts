import { SvgRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import tpl from "../assets/templates/tpl-renderer";

import { Line, LineSegment, Point, Text, Vector } from "@geomtoy/core";
import { codeHtml, fillOnly, lightStrokeFill, mathFont, strokeFill, strokeFillTrans, strokeOnly } from "../assets/common";
import { locateLabel } from "../assets/general-construction";

tpl.addSection("Complex association between geometries");

tpl.addParagraph(`
Complex geometry associations can be easily implemented with Geomtoy's event system built specifically for geometries.<br><br>
Here is an example. All the geometry in the view is interactive (excluding the letter labels).
`);

tpl.addMarkdown(` 
- Move point \`A\` and point \`B\` to determine line \`L\`.
- Move point \`A\`, point \`P\` will follow to keep its distance to point \`A\` and the direction according to point \`B\`.
- Move point \`P\`, it will be constrained on line \`L\`.
- Move point \`P\` to determine the distance between it and point \`A\`. The distance will be kept until you move point \`P\`.
- Move line \`L\`, point \`A\`, point \`B\` and point \`P\` will follow.</li>
`);
{
    const card = tpl.addCard({ aspectRatio: "2:1", rendererType: "svg", className: "col-12", withPane: true });
    const view = new View({}, new SvgRenderer(card.svg!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: true, xAxisPositiveOnRight: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const pointA = new Point(-25, -12);
    const pointB = new Point(-20, 25);

    const lineL = new Line()
        .bind([pointA, "any"], [pointB, "any"], function (e1, e2) {
            this.copyFrom(Line.fromTwoPoints(e1.target, e2.target, true));
        })

        .on("x|y", function () {
            const dx = this.x - pointA.x;
            const dy = this.y - pointA.y;
            pointA.x += dx;
            pointB.x += dx;
            pointA.y += dy;
            pointB.y += dy;
        });

    const pointP = new Point()
        .data("distToPointA", 5)
        .bind([pointA, "any"], [pointB, "any"], function (e1, e2) {
            const v = Vector.fromTwoPoints(e1.target, e2.target);
            this.copyFrom(v.normalize().scalarMultiply(this.data("distToPointA")).point2);
        })
        .on("any", function () {
            this.copyFrom(lineL.isValid() ? lineL.getClosestPointFrom(this)[0] : null);
            const d = this.getDistanceBetweenPoint(pointA);
            const vectorAP = Vector.fromTwoPoints(pointA, this);
            const vectorAB = Vector.fromTwoPoints(pointA, pointB);
            this.data("distToPointA", vectorAP.dotProduct(vectorAB) > 0 ? d : -d);
        });

    const labelL = new Text(0, 0, 10, 10, "L", mathFont).bind([pointA, "any"], [pointB, "any"], function (e1, e2) {
        this.coordinates = new LineSegment(e1.target, e2.target).getMiddlePoint().coordinates;
    });
    const labelA = new Text(0, 0, 10, 10, "A", mathFont).bind([pointA, "any"], locateLabel);
    const labelB = new Text(0, 0, 10, 10, "B", mathFont).bind([pointB, "any"], locateLabel);
    const labelP = new Text(0, 0, 10, 10, "P", mathFont).bind({ priority: 0 }, [pointP, "any"], locateLabel);

    card.setDescription(
        codeHtml(` 
const pointA = new Point(-25, -12);
const pointB = new Point(-20, 25);

const lineL = new Line()
    .bind([pointA, "any"], [pointB, "any"], function (e1, e2) {
        this.copyFrom(Line.fromTwoPoints(e1.target, e2.target, true));
    })

    .on("x|y", function () {
        const dx = this.x - pointA.x;
        const dy = this.y - pointA.y;
        pointA.x += dx;
        pointB.x += dx;
        pointA.y += dy;
        pointB.y += dy;
    });

const pointP = new Point()
    .data("distToPointA", 5)
    .bind([pointA, "any"], [pointB, "any"], function (e1, e2) {
        const v = Vector.fromTwoPoints(e1.target, e2.target);
        this.copyFrom(v.normalize().scalarMultiply(this.data("distToPointA")).point2);
    })
    .on("any", function () {
        this.copyFrom(lineL.isValid() ? lineL.getClosestPointFrom(this) : null);
        const d = this.getDistanceBetweenPoint(pointA);
        const vectorAP = Vector.fromTwoPoints(pointA, this);
        const vectorAB = Vector.fromTwoPoints(pointA, pointB);
        this.data("distToPointA", vectorAP.dotProduct(vectorAB) > 0 ? d : -d);
    });
    `)
    );

    view.add(
        new ViewElement(pointA, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("orange") }),
        new ViewElement(labelA, { interactMode: ViewElementInteractMode.None, ...fillOnly("orange") }),
        new ViewElement(pointB, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("indigo") }),
        new ViewElement(labelB, { interactMode: ViewElementInteractMode.None, ...fillOnly("indigo") }),
        new ViewElement(pointP, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("green") }),
        new ViewElement(labelP, { interactMode: ViewElementInteractMode.None, ...fillOnly("green") }),
        new ViewElement(lineL, { interactMode: ViewElementInteractMode.Activation, ...strokeOnly("brown") }),
        new ViewElement(labelL, { interactMode: ViewElementInteractMode.None, ...fillOnly("brown") })
    );
}
