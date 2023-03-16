import { Line, LineSegment, Path, Point, SealedShapeArray, SealedShapeObject, Text, Anchor } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import color from "../../assets/color";
import { fillOnly, markdownHtml, mathFont, strokeFill, strokeOnly, thinStrokeOnly } from "../../assets/common";
import { locateLabel } from "../../assets/general-construction";
import tpl from "../../assets/templates/tpl-renderer";
import { showCommands } from "../_control";

tpl.title("Path control example");

tpl.addSection(`
How to use points to control arcs in path
`);
tpl.addMarkdown(`
The \`arcTo\` in \`Path\` commands is generally not easy to control, because it is not like 1, 2, 3 degree bezier curve, you can directly modify all parameters by control points, 
and the five parameters \`radiusX\`, \`radiusY\`, \`largeArc\`, \`positive\`, \`rotation\` in \`arcTo\` are generally not controllable by points.
`);
tpl.addNote(
    markdownHtml(`
The \`arcTo\` command here is Geomtoy's Path command, which basically corresponds to the \`A\` command in &lt;path d="..."&gt;, but there is a small difference: 
The \`positive\` is not the \`sweep\`. More info: [Coordinate system](/view/coordinate-system.html).\
`)
);
tpl.addParagraph(`
To solve this problem, we invented a method that is quite effective so far, but it is not necessarily intuitive and may be a little difficult to use.
`);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, pan: [-100, 100], yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const path = new Path([Path.moveTo([-10, -10]), Path.arcTo(10, 10, 0, true, true, [30, 30])], false);

    const { pathSubView, pathHelperSubView } = showCommands(path);
    view.addSubView(pathSubView, pathHelperSubView);

    const moveToLabel = new Text(0, 0, 0, 8, "moveTo", { ...mathFont, fontSize: 16, fontItalic: false }).bind([pathSubView.elements[0].shape as Point, "any"], locateLabel);
    const arcToLabel = new Text(0, 0, 0, 8, "arcTo", { ...mathFont, fontSize: 16, fontItalic: false }).bind([pathSubView.elements[1].shape as Point, "any"], locateLabel);

    const localCoordinateSystem = new SealedShapeObject({
        axes: new SealedShapeArray([new Line(), new Line()]),
        projections: new SealedShapeArray([new LineSegment(), new LineSegment()]),
        intros: new SealedShapeArray([
            new Text("\u2460", { ...mathFont, fontSize: 16, fontItalic: false }, Anchor.LeftBottom),
            new Text("\u2461", { ...mathFont, fontSize: 16, fontItalic: false }, Anchor.RightBottom),
            new Text("\u2462", { ...mathFont, fontSize: 16, fontItalic: false }, Anchor.RightTop),
            new Text("\u2463", { ...mathFont, fontSize: 16, fontItalic: false }, Anchor.LeftTop),
            new Text("ry", { ...mathFont, fontSize: 16, fontItalic: false }, Anchor.CenterCenter),
            new Text("rx", { ...mathFont, fontSize: 16, fontItalic: false }, Anchor.CenterCenter)
        ])
    }).bind([pathSubView.elements[1].shape as Point, "any"], [pathHelperSubView.elements[0].shape as Point, "any"], function (e1, e2) {
        const [x, y] = e1.target.coordinates;
        this.items.axes.items[0] = new Line(e1.target.coordinates, 0); // x-axis
        this.items.axes.items[1] = new Line(e1.target.coordinates, Infinity); // y-axis

        this.items.projections.items[0].copyFrom(new LineSegment(this.items.axes.items[0].getClosestPointFrom(e2.target)[0], e2.target));
        this.items.projections.items[1].copyFrom(new LineSegment(this.items.axes.items[1].getClosestPointFrom(e2.target)[0], e2.target));

        this.items.intros.items[4].point = this.items.projections.items[0].isValid() ? this.items.projections.items[0].getMiddlePoint() : new Point();
        this.items.intros.items[5].point = this.items.projections.items[1].isValid() ? this.items.projections.items[1].getMiddlePoint() : new Point();

        this.items.intros.items[0].coordinates = [x + 10, y + 10];
        this.items.intros.items[1].coordinates = [x - 10, y + 10];
        this.items.intros.items[2].coordinates = [x - 10, y - 10];
        this.items.intros.items[3].coordinates = [x + 10, y - 10];
    });

    card.setDescription(
        markdownHtml(`
 
First, assume that the point reached by the \`arcTo\` command is called **point**, 
from which a local coordinate system is established: the black<span style="color:${color("black")};">&#9635;</span> colored lines.

Second, create a point named **adjustPoint** of color <span style="color:${color("lime")};">&#9635;</span>. 
Now let this point be projected onto the two lines so that the two projection distances are \`radiusX(rx)\`, \`radiusY(ry)\` respectively.
If we consider \`rx\` and \`ry\` as distances regardless of the direction, then there will be 4 points in this local coordinate system that 
meet the condition of projection distance.
As it happens, we can choose 1 of these 4 points by the combination of the \`positive\` and \`largeArc\` parameters.<br>
If \`positive\` is *true* and \`largeArc\` is *true*, then we pick the point in the first quadrant labeled &#x2460;.<br>
If \`positive\` is *false* and \`largeArc\` is *true*, then we pick the point in the second quadrant labeled &#x2461;.<br>
If \`positive\` is *false* and \`largeArc\` is *false*, then we pick the point in the third quadrant labeled &#x2462;.<br>
If \`positive\` is *true* and \`largeArc\` is *false*, then we pick the point in the fourth quadrant labeled &#x2463;.<br>
With the opposite reasoning, **adjustPoint** controls the parameters of \`radiusX\`, \`radiusY\`, \`largeArc\`, \`positive\` at the same time.
   
Third, Let's deal with the last remaining \`rotation\`. create a point named **rotationPoint** of color <span style="color:${color("teal")};">&#9635;</span>.
In the local coordinate system of **point**, the \`rotationPoint\` coordinates can be considered as a vector, 
then its direction angle can be used to represent the \`rotation\`.
Then the \`rotationPoint\` also needs a magnitude, and we can use \`rx+ry\`, a non-negative number, as the magnitude to initialize it.

Now we can change \`radiusX\`, \`radiusY\`, \`largeArc\`, \`positive\`, \`rotation\` parameters by moving **adjustPoint** and **rotationPoint**.
But they are not independent, because they are built in the local coordinate system of the **point**. So when the **point** moves, these two points will follow.
`)
    );

    view.add(new ViewElement(path, { interactMode: ViewElementInteractMode.None, ...strokeOnly("brown") }));
    view.add(new ViewElement(moveToLabel, { interactMode: ViewElementInteractMode.None, ...fillOnly("brown") }));
    view.add(new ViewElement(arcToLabel, { interactMode: ViewElementInteractMode.None, ...fillOnly("brown") }));
    view.add(new ViewElement(localCoordinateSystem.items.axes, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("black") }));
    view.add(new ViewElement(localCoordinateSystem.items.projections, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("black") }));
    view.add(new ViewElement(localCoordinateSystem.items.intros, { interactMode: ViewElementInteractMode.None, ...fillOnly("black") }));
}
tpl.addNote(
    markdownHtml(`
According to the ellipse equation and Web specifications, the elliptical arc parametrized by the two endpoints has radii correction. 
When \`radiusX\` and \`radiusY\` can satisfy the ellipse equation, their values ​​are true values. When they cannot satisfy the ellipse equation, 
they will be corrected - They will be enlarged simultaneously according to the ratio between them.
`)
);

tpl.addSection("Overall of path control");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.75, pan: [0, 150], yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    // prettier-ignore
    const path = new Path([
        Path.moveTo([0,0]),
        Path.lineTo([20,20]),
        Path.quadraticBezierTo([4,25],[0,20]),
        Path.bezierTo([-15,15],[-10,2],[-8,0]),
        Path.arcTo(1,1,0,true,true,[20,3])
    ] 
    , true);

    card.setDescription(
        markdownHtml(`
<span style="color:${color("lime")};">&#9635;</span> \`arcTo\` adjustPoint<br>
<span style="color:${color("teal")};">&#9635;</span> \`arcTo\` rotationPoint<br>
<span style="color:${color("orange")};">&#9635;</span> \`bezierTo\` controlPoint<br>
<span style="color:${color("purple")};">&#9635;</span> \`quadraticBezierTo\` controlPoint
`)
    );

    const { pathSubView, pathHelperSubView } = showCommands(path);
    view.addSubView(pathSubView, pathHelperSubView);
    view.add(new ViewElement(path, { interactMode: ViewElementInteractMode.None, ...strokeFill("brown") }));
}
