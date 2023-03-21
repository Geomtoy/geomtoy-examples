import { Dynamic, FontConfig, Geomtoy, Point, Polygon, Text } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { codeHtml, fillOnly, mathFont, strokeFill } from "../../assets/scripts/common";
import { locateLabel } from "../../assets/scripts/general-construction";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Polygon point inside/on/outside");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.25, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const fillRule = new (new Dynamic().create({
        fillRule: "nonzero" as const
    }))();

    const polygon = Polygon.fromSVGString("50,0 21,90 98,35 2,35 79,90").bind([fillRule, "any"], function (e) {
        this.fillRule = e.target.fillRule;
    });
    const point = new Point(20, 35);
    const label = new Text(0, 0, 16, -10, "", { ...mathFont, fontSize: 16, fontItalic: false }).bind([point, "any"], [polygon, "any"], function (e1, e2) {
        this.coordinates = e1.target.coordinates;
        if (polygon.isPointInside(e1.target)) this.content = "IN";
        if (polygon.isPointOutside(e1.target)) this.content = "OUT";
        if (polygon.isPointOn(e1.target)) this.content = "ON";
    });

    card.appendDescription(
        "code",
        `
const fillRule = new (new Dynamic().create({
    fillRule: "nonzero" as const
}))();

const polygon = Polygon.fromSVGString("50,0 21,90 98,35 2,35 79,90").bind([fillRule, "any"], function (e) {
    this.fillRule = e.target.fillRule;
});
const point = new Point(20, 35);
const label = new Text(0, 0, 16, -10, "", { ...mathFont, fontSize: 16, fontItalic: false }).bind([point, "any"], [polygon, "any"], function (e1, e2) {
    this.coordinates = e1.target.coordinates;
    if (polygon.isPointInside(e1.target)) this.content = "IN";
    if (polygon.isPointOutside(e1.target)) this.content = "OUT";
    if (polygon.isPointOn(e1.target)) this.content = "ON";
});
        `
    );

    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
    const arcFolder = pane.addFolder({ title: "Fill rule" });
    arcFolder.addInput(fillRule, "fillRule", { options: { nonzero: "nonzero", evenodd: "evenodd" } });

    // #endregion

    view.add(new ViewElement(point, { ...strokeFill("pink") }));
    view.add(new ViewElement(label, { type: ViewElementType.None, ...fillOnly("pink") }));
    view.add(new ViewElement(polygon, { type: ViewElementType.None, ...strokeFill("brown") }));
}
