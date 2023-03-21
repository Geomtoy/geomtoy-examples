import { Path, PathCommandType, Point, Polygon, ShapeArray } from "@geomtoy/core";
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
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    // prettier-ignore
    const path = new Path([ 
        {type: PathCommandType.MoveTo, x: 4.392304845413264, y: 1},
        {type: PathCommandType.LineTo, x: 100.00000000000003, y: 173.57110616067214},
        {type: PathCommandType.LineTo, x: -65.59738560230093, y: 273.2050807568878},
        {type: PathCommandType.LineTo, x: -161.2050807568877, y: 100.63397459621562} 
    ], true);

    path.getSegments().forEach(seg => {
        console.log(seg, seg.getBoundingBox());
    });
    console.log(path.getBoundingBox());

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
