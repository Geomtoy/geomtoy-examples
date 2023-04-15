import { Arbitrary, Ellipse, Geometry, Line, Path, Point, Polygon, Rectangle, Transformation } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { newElement, strokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";
import { TransformOperation } from "./_TransformOperation";

tpl.title("Transformation example");

function geometryWithTransform(geometry: Geometry) {
    const transform = new Transformation();
    const original = geometry;
    return new Arbitrary()
        .bind([original, "any"], [transform, "any"], function (e1, e2) {
            this.copyFrom(e1.target.apply(e2.target));
        })
        .data("original", original)
        .data("transform", transform);
}

function summary(arbitrary: Arbitrary) {
    return `
    <p class="text-primary">Original</p>
    <pre style="tab-size: 4">${arbitrary.data("original").toString()}</pre>
    <p class="text-primary">Transformation</p>
    <pre style="tab-size: 4">${arbitrary.data("transform").toString()}</pre>
    <p class="text-primary">Transformed</p>
    <pre style="tab-size: 4">${arbitrary.geometry?.toString()}</pre>
`;
}

tpl.addSection("Instruction");
tpl.addMarkdown(`

The \`activationMode\` of the view of the example is **"numerous"**. See more info about [activation mode](view/activation-mode.html).

- Click on the geometries will activate them. Hold <kbd>Shift</kbd> and click to start multiple activation.
- As long as there are active geometries, the operation UI will appear around them.
- There are two sets of operation UI, click on any active geometry to switch UI.
- The first set of UI is **Translate** and **Scale**:
    - The transform origin will auto assigned.
    - Drag <img src="assets/img/c.svg" width="20" height="20"> icon to translate.
    - Drag <img src="assets/img/h.svg" width="20" height="20"> icon to scale horizontally.
    - Drag <img src="assets/img/v.svg" width="20" height="20"> icon to scale vertically.
    - Drag <img src="assets/img/ne-sw.svg" width="20" height="20">, <img src="assets/img/nw-se.svg" width="20" height="20"> icons to scale.
- The second set of UI is **Rotate** and **Skew(Shear)**:
    - Drag <img src="assets/img/dot.svg" width="20" height="20"> icon to locate the transform origin.
    - Click <img src="assets/img/dot.svg" width="20" height="20"> icon to bring the transform origin back to the center.
    - Drag <img src="assets/img/ne.svg" width="20" height="20">, 
    <img src="assets/img/nw.svg" width="20" height="20">, 
    <img src="assets/img/se.svg" width="20" height="20">,
    <img src="assets/img/sw.svg" width="20" height="20"> icons to rotate.
    - Drag <img src="assets/img/h.svg" width="20" height="20"> icon to skew horizontally.
    - Drag <img src="assets/img/v.svg" width="20" height="20"> icon to skew vertically.
     


`);

tpl.addSection("Example");
tpl.addMarkdown(`
The summary below will display the original geometry, the transformation generated by your operation, and the transformed geometry.
`);
{
    const card = tpl.addCard({ aspectRatio: "1.5:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1 }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    view.activationMode = "numerous";

    const rectangleWithTransform = geometryWithTransform(new Rectangle(-20, -5, 10, 10));
    const ellipseWithTransform = geometryWithTransform(new Ellipse([10, 10], 5, 10, Maths.PI / 2));
    const pathWithTransform = geometryWithTransform(
        new Path([Path.moveTo([0, 0]), Path.lineTo([20, 20]), Path.quadraticBezierTo([4, -2], [0, 10]), Path.bezierTo([-15, 0], [-10, 23], [-8, -1]), Path.arcTo(1, 3, 0, true, true, [-9, 3])], true)
    );
    const polygonWithTransform = geometryWithTransform(new Polygon([Polygon.vertex([20, 20]), Polygon.vertex([0, 3]), Polygon.vertex([6, 3])], true));
    const lineWithTransform = geometryWithTransform(new Line(0, 0, 1));
    const pointWithTransform = geometryWithTransform(new Point(10, -10, "cross"));

    new TransformOperation(view).enable();

    view.add(new ViewElement(pointWithTransform, { ...strokeFill("green") }));
    view.add(new ViewElement(lineWithTransform, { ...strokeFill("teal") }));
    view.add(new ViewElement(rectangleWithTransform, { ...strokeFill("red") }));
    view.add(new ViewElement(ellipseWithTransform, { ...strokeFill("orange") }));
    view.add(new ViewElement(pathWithTransform, { ...strokeFill("purple") }));
    view.add(new ViewElement(polygonWithTransform, { ...strokeFill("indigo") }));

    card.setDescription("markdown", "See summary below:");

    const list = [rectangleWithTransform, ellipseWithTransform, pathWithTransform, polygonWithTransform, pointWithTransform, lineWithTransform];
    const wrapper = newElement(`
    <div class="col-12">
        <div class="row g-3">
            ${list
                .map(
                    ab => `
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-0 d-flex justify-content-between">
                            ${ab.data("original").name} 
                            <button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${ab.id}">View</button>
                        </h5>
                        <div class="card-text collapse" id="collapse-${ab.id}">
                            <div id="${ab.data("original").name}"></div>
                        </div>
                    </div>
                </div>
            </div>`
                )
                .join("")}
        </div>
    </div>
    `);
    list.forEach(ab => {
        const div = wrapper.querySelector(`#${ab.data("original").name}`)!;
        ab.on("any", function () {
            div.innerHTML = summary(this);
        });
    });
    tpl.addHtmlElement(wrapper);
}
