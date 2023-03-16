import Geomtoy, { Arc, Transformation, Point, Arbitrary } from "@geomtoy/core";
import { Maths, Utility } from "@geomtoy/util";
import { View, ViewElement, CanvasRenderer, ViewElementInteractMode } from "@geomtoy/view";

import color from "../assets/scripts/color";
import { codeHtml, lightStrokeOnly, lightStrokeFill, strokeOnly } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Transformation");

tpl.addMarkdown(`
\`Transformation\` here stands for the affine transformation. But unlike the browser's handling of transformations(SVG or Canvas...),
\`Geomtoy\` treats transformations as a separate and independent entity, not a property of \`Geometries\`, because we are mainly aiming at computing, not displaying.
\n
All \`Geometries\` have an \`apply\` method that accepts a \`Transformation\` parameter. The \`apply\` method implements the \`Transformation\` on the current \`Geometry\` and return the transformed \`Geometry\`.
`);

tpl.addSection("Example");
{
    tpl.addMarkdown("Here is an `Arc` transformation demo.");

    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const arc = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, (3 * Maths.PI) / 4, -Maths.PI / 6, true, 0);
    const t = new Transformation();
    t.addTranslate(20, 20);
    t.addScale(1, -0.5);
    t.addRotate(Maths.PI / 3);

    const tArc = new Arc().bind([arc, "any"], [t, "any"], function (e1, e2) {
        this.copyFrom(e1.target.apply(e2.target));
    });

    card.appendDescription(
        codeHtml(`
    const arc = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, (3 * Maths.PI) / 4, -Maths.PI / 6, true, 0);
    const t = new Transformation();
    t.addTranslate(20, 20);
    t.addScale(1, -0.5);
    t.addRotate(Maths.PI / 3);

    const tArc = new Arc().bind([arc, "any"], [t, "any"], function (e1,e2) {
        this.copyFrom(e1.target.apply(e2.target));
    });
    `)
    );

    view.add(new ViewElement(arc, { interactMode: ViewElementInteractMode.Activation, ...strokeOnly("red") }));
    view.add(new ViewElement(tArc, { interactMode: ViewElementInteractMode.None, ...lightStrokeOnly("blue") }));
}
