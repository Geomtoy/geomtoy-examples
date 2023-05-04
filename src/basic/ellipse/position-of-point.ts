import { Anchor, Ellipse, Point, Text } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { fillOnly, mathFont, strokeFill, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Position of a point with respect to a ellipse");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1 }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const ellipse = new Ellipse([0, 5], 20, 10, 0);
    const point = new Point([20, 20]);
    const label = new Text([0, 0], 10, 0, "", { ...mathFont, fontSize: 16, fontItalic: false }, Anchor.LeftCenter).bind([point, "any"], [ellipse, "any"], function (e1, e2) {
        this.coordinates = e1.target.coordinates;
        if (e2.target.isPointInside(e1.target)) this.content = "IN";
        if (e2.target.isPointOutside(e1.target)) this.content = "OUT";
        if (e2.target.isPointOn(e1.target)) this.content = "ON";
    });

    view.add(new ViewElement(point, { ...strokeFill("pink") }));
    view.add(new ViewElement(label, { type: ViewElementType.None, ...fillOnly("pink") }));
    view.add(new ViewElement(ellipse, { ...strokeOnly("brown") }));
}
