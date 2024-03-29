import { Path, Point, Polygon, ShapeArray } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, SubView, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, markdownHtml, strokeFill, strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Path construction");
tpl.addMarkdown(`
The \`Path\` in \`Geomtoy\` is not the same as the &lt;path&gt; in SVG. It can basically be understood as a single one-stroke figure in the &lt;path&gt;, starting from \`[mM]\` 
to the next \`[mM]\` or ending at \`[zZ]\`]) , while the &lt;path&gt; in SVG is a compound path (can be drawn with multiple strokes). For more information please see 
[About general geometry](/general/about.html)
`);
tpl.addSection("constructor");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-6" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    // prettier-ignore
    const path = new Path([
        Path.moveTo([0, 100]), 
        Path.lineTo([40, -10]), 
        Path.bezierTo([-9, 30], [0, 6], [-10, 7]), 
        Path.quadraticBezierTo([8, -20], [55, 20]), 
        Path.arcTo(10, 20, 0, true, false, [0, 80])
    ], true);
    card.setDescription("markdown", 'property `closed`: false - like SVG &lt;path d="..."&gt; **without** final `[zZ]`');
    card.appendDescription(
        "code",
        `
const path = new Path([
    Path.moveTo([0, 100]), 
    Path.lineTo([40, -10]), 
    Path.bezierTo([-9, 30], [0, 6], [-10, 7]), 
    Path.quadraticBezierTo([8, -20], [55, 20]), 
    Path.arcTo(10, 20, 0, true, false, [0, 80])
], true);
        `
    );
    view.add(new ViewElement(path, { ...strokeFill("brown") }));
}
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-6" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    // prettier-ignore
    const path = new Path([
        Path.moveTo([0, 100]), 
        Path.lineTo([40, -10]), 
        Path.bezierTo([-9, 30], [0, 6], [-10, 7]), 
        Path.quadraticBezierTo([8, -20], [55, 20]), 
        Path.arcTo(10, 20, 0, true, false, [0, 80])
    ], false);
    card.setDescription("markdown", 'property `closed`: false - like SVG &lt;path d="..."&gt; **with** final `[zZ]`');
    card.appendDescription(
        "code",
        `
const path = new Path([
    Path.moveTo([0, 100]), 
    Path.lineTo([40, -10]), 
    Path.bezierTo([-9, 30], [0, 6], [-10, 7]), 
    Path.quadraticBezierTo([8, -20], [55, 20]), 
    Path.arcTo(10, 20, 0, true, false, [0, 80])
], false);
        `
    );
    view.add(new ViewElement(path, { ...strokeFill("brown") }));
}

tpl.addSection("fromSVGString");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: true }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [0, 0]));
    view.startInteractive();

    const path = Path.fromSVGString("M 10,30A 20,20 0,0,1 50,30A 20,20 0,0,1 90,30Q 90,60 50,90Q 10,60 10,30 z");

    card.setDescription(
        "code",
        `
const polygon = Polygon.fromSVGString("0,100 50,25 50,7 100,0", true);
        `
    );

    view.add(new ViewElement(path, { ...strokeFill("brown") }));
}
