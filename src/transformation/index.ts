import Geomtoy, { Arc, Transformation, Point, Arbitrary, Ellipse } from "@geomtoy/core";
import { Maths, Utility } from "@geomtoy/util";
import { View, ViewElement, CanvasRenderer, ViewElementInteractMode } from "@geomtoy/view";

import color from "../assets/scripts/color";
import { codeHtml, lightStrokeOnly, lightStrokeFill, strokeOnly } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Transformation");

tpl.addMarkdown(`
\`Transformation\` here stands for the affine transformation. But unlike the browser's handling of transformations(SVG or Canvas...),
Geomtoy treats transformations as a separate and independent entity, not a property of \`Geometry\`, because we are mainly aiming at computing, not displaying.
\n
All \`Geometry\`s have an \`apply\` method that accepts a \`Transformation\` parameter. The \`apply\` method implements the \`Transformation\` on the current \`Geometry\` and return the transformed \`Geometry\`.
`);

tpl.addMarkdown(`See a [charming example](transformation/example.html).`);

{
    tpl.addMarkdown("Here is an ellipse example:");

    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    // the red ellipse
    const ellipse = new Ellipse([0, 0], 10, 5, Maths.PI / 2);
    console.log(ellipse.toString());
    // Ellipse(Ellipse-0000000000000001){
    //     centerX: 0
    //     centerY: 0
    //     radiusX: 10
    //     radiusY: 5
    //     rotation: 1.5707963267948966
    // }

    const transformation = new Transformation();
    transformation.addTranslate(5, 10);
    transformation.addScale(1, -0.5);
    transformation.addSkew(0, Maths.PI / 4);
    transformation.addRotate(-Maths.PI / 2);

    // the blue ellipse
    const tEllipse = ellipse.apply(transformation);
    console.log(tEllipse.toString());
    // Ellipse(Ellipse-0000000000000002){
    //     centerX: 5
    //     centerY: 10
    //     radiusX: 11.238395103248116
    //     radiusY: 2.2245169145881434
    //     rotation: -0.4842544903299662
    // }
    card.appendDescription(
        "code",
        `
// the red ellipse
const ellipse = new Ellipse([0, 0], 10, 5, Maths.PI / 2);
console.log(ellipse.toString());
// Ellipse(Ellipse-0000000000000001){
//     centerX: 0
//     centerY: 0
//     radiusX: 10
//     radiusY: 5
//     rotation: 1.5707963267948966
// }

const transformation = new Transformation();
transformation.addTranslate(5, 10);
transformation.addScale(1, -0.5);
transformation.addSkew(0, Maths.PI / 4);
transformation.addRotate(-Maths.PI / 2);

// the blue ellipse
const tEllipse = ellipse.apply(transformation);
console.log(tEllipse.toString());
// Ellipse(Ellipse-0000000000000002){
//     centerX: 5
//     centerY: 10
//     radiusX: 11.238395103248116
//     radiusY: 2.2245169145881434
//     rotation: -0.4842544903299662
// }
    `
    );

    view.add(new ViewElement(ellipse, { interactMode: ViewElementInteractMode.None, ...strokeOnly("red") }));
    view.add(new ViewElement(tEllipse, { interactMode: ViewElementInteractMode.None, ...strokeOnly("blue") }));
}
