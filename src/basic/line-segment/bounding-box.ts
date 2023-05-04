import { LineSegment, Point, Rectangle } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, lightStrokeOnly, strokeFill, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Line segment bounding box");
{
    const card = tpl.addCard({ className: "col-12", aspectRatio: "2:1" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const point1 = new Point([-20, 6]);
    const point2 = new Point([0, 15]);

    const lineSegment = new LineSegment().bind([point1, "any"], [point2, "any"], function (e1, e2) {
        this.copyFrom(new LineSegment(e1.target, e2.target));
    });

    const boundingBoxRectangle = new Rectangle().bind([lineSegment, "any"], function (e) {
        this.copyFrom(e.target.isValid() ? new Rectangle(...e.target.getBoundingBox()) : null);
    });

    card.setDescription(
        "code",
        ` 
const point1 = new Point([-20, 6]);
const point2 = new Point([0, 15]);

const lineSegment = new LineSegment().bind([point1, "any"], [point2, "any"], function (e1, e2) {
    this.copyFrom(new LineSegment(e1.target, e2.target));
});

const boundingBoxRectangle = new Rectangle().bind([lineSegment, "any"], function (e) {
    this.copyFrom(e.target.isValid() ? new Rectangle(...e.target.getBoundingBox()) : null);
});
    `
    );

    view.add(new ViewElement(point1, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(point2, { ...lightStrokeFill("brown") }));
    view.add(new ViewElement(boundingBoxRectangle, { type: ViewElementType.None, ...lightStrokeOnly("purple") }));
    view.add(new ViewElement(lineSegment, { type: ViewElementType.None, ...strokeOnly("brown") }));
}
