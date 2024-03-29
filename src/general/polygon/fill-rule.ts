import { Polygon } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { codeHtml, strokeFill } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Polygon fill rule");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.25, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const polygon = Polygon.fromSVGString("50,0 21,90 98,35 2,35 79,90");
    polygon.fillRule = "evenodd";

    card.appendDescription(
        codeHtml(`
const polygon = Polygon.fromSVGString("50,0 21,90 98,35 2,35 79,90"); 
polygon.fillRule = "evenodd"
        `)
    );
    view.add(new ViewElement(polygon, { ...strokeFill("brown") }));
}
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.25, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    const polygon = Polygon.fromSVGString("50,0 21,90 98,35 2,35 79,90");
    polygon.fillRule = "nonzero";

    card.appendDescription(
        codeHtml(`
const polygon = Polygon.fromSVGString("50,0 21,90 98,35 2,35 79,90"); 
polygon.fillRule = "nonzero"
        `)
    );
    view.add(new ViewElement(polygon, { ...strokeFill("brown") }));
}
