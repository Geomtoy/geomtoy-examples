import { Dynamic, Point } from "@geomtoy/core";
import { SVGRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { strokeFill, fillOnly, strokeOnly } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Dynamic");

tpl.addMarkdown("When a `Geometry` or other `EventTarget` needs to be associated with dependencies that are not a `Geometry`, dynamic event target can be used.");

tpl.addSection("Simple steps");

tpl.addMarkdown("**Create the dynamic event target creator.**");
tpl.addCode(`
const dynamic = new Dynamic();
`);

tpl.addMarkdown("**Create the dynamic event target class via a template object.**");
tpl.addCode(`
const RestParamsClass = dynamic.create({
    radiusX: 20,
    radiusY: 10
});
`);

tpl.addMarkdown("**Create the dynamic event target instance.**");
tpl.addCode(`
const restParams = new RestParamsClass();
// reassign the property
const restParams = new RestParamsClass({ radiusX: 2, radiusY: 1 });
`);

tpl.addSection("One-step");
tpl.addCode(`
const restParams = new (new Dynamic().create({
    radiusX: 20,
    radiusY: 10
}))();
`);

tpl.addNote(`
Limitations:
- You cannot use "_" as the start or end character of a property name.
- Properties on the \`EventTarget\` prototype chain cannot be overridden, so these property names cannot be used. These are: **name**, **id**, **data**, **toString**, **toJSON**, **muted**, **mute**, **unmute**, **on**, **off**, **clear**, **clearOn**, **clearBind**, **bind**, **unbind**, **unbindAlt**, **unbindAll**
`);

tpl.addSection("Example");
const dynamic = new Dynamic();
const PointStructClass = dynamic.create({
    x: 0,
    y: 0
});
const ps1 = new PointStructClass({ x: 10, y: 10 });
const ps2 = new PointStructClass({ x: 20, y: 0 });

const pointA = new Point().bind([ps1, "any"], function (e) {
    this.copyFrom(new Point(e.target.x, e.target.y));
});
const pointB = new Point().bind([ps2, "any"], function (e) {
    this.copyFrom(new Point(e.target.x, e.target.y));
});

const pointM = new Point().bind([ps1, "any"], [ps2, "any"], function (e1, e2) {
    this.copyFrom(new Point((e1.target.x + e2.target.x) / 2, (e1.target.y + e2.target.y) / 2));
});

const card = tpl.addCard({ aspectRatio: "2:1", rendererType: "svg", className: "col-12", withPane: true });
const view = new View({}, new SVGRenderer(card.svg!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false, xAxisPositiveOnRight: true }));
view.startResponsive(View.centerOrigin);
view.startInteractive();

card.setDescription(
    "code",
    `
const dynamic = new Dynamic();
const PointStructClass = dynamic.create({
    x: 0,
    y: 0
});
const ps1 = new PointStructClass({ x: 10, y: 10 });
const ps2 = new PointStructClass({ x: 20, y: 0 });

const pointA = new Point().bind([ps1, "any"], function (e) {
    this.copyFrom(new Point(e.target.x, e.target.y));
});
const pointB = new Point().bind([ps2, "any"], function (e) {
    this.copyFrom(new Point(e.target.x, e.target.y));
});

const pointM = new Point().bind([ps1, "any"], [ps2, "any"], function (e1, e2) {
    this.copyFrom(new Point((e1.target.x + e2.target.x) / 2, (e1.target.y + e2.target.y) / 2));
});

// ...

view.add(
    new ViewElement(pointA, { type: ViewElementType.None, ...strokeFill("teal") }),
    new ViewElement(pointB, { type: ViewElementType.None, ...strokeFill("indigo") }),
    new ViewElement(pointM, { type: ViewElementType.None, ...strokeFill("orange") })
);
`
);

// #region Pane
// @ts-expect-error
const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });
const psFolder = pane.addFolder({ title: "Point struct" });
psFolder.addInput({ ps1 }, "ps1", { y: { inverted: true } });
psFolder.addInput({ ps2 }, "ps2", { y: { inverted: true } });
// #endregion

view.add(
    new ViewElement(pointA, { type: ViewElementType.None, ...strokeFill("teal") }),
    new ViewElement(pointB, { type: ViewElementType.None, ...strokeFill("indigo") }),
    new ViewElement(pointM, { type: ViewElementType.None, ...strokeFill("orange") })
);
