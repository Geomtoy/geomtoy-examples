import { Circle, Line, Point, SealedGeometryArray } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement } from "@geomtoy/view";
import { tagToEntity } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Tutorial");

tpl.addMarkdown(`
In this tutorial, we will make an interactive simple demo, which will guide you through the demo step by step. 
This tutorial requires you to have basic \`html\` and \`js\` knowledge.
`);

tpl.addSection("Requirement");
tpl.addMarkdown(`
We want to demonstrate and solve the following problems:

- Given three points on the plane, if they are not collinear, find the circle formed by them.
- Given another point, find the tangent line from this point to the above circle, if existed.
`);

tpl.addSection("Step 1: Setup the web page");

tpl.addMarkdown(`
We're going to use a web page to present this interactive demo, so let's build a web page first.
`);
tpl.addNote(`
Geomtoy can use \`<svg>\`(SVGSVGElement) or \`<canvas>\`(HTMLCanvasElement) as render for drawing.
`);
tpl.addMarkdown(`
Let's choose to use \`<canvas>\` this time.
`);

tpl.addCode(
    tagToEntity(`
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Let its width and height be 500px -->
    <canvas id="demo" width="500" height="500"></canvas>
</body>
</html>
`),
    "html"
);
tpl.addSection("Step 2: Import Geomtoy");
tpl.addMarkdown(`
Because we are using it directly on the web page, we can import the all-in-one bundle package.
And our entire demo is done in canvas, so we have to prepare a place to write scripts. 
Adding up the above, we should make the page look like this.
`);
tpl.addCode(
    tagToEntity(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Let its width and height be 500px -->
    <canvas id="demo" width="500" height="500"></canvas>
    <script src="https://cdn.jsdelivr.net/npm/geomtoy@latest/dist/index.min.js"></script> 
    <script>
        // here we code
    </script> 
</body>
</html>
`),
    "html"
);
tpl.addSection("Step 3: Setup the view");
tpl.addMarkdown(`
First, we have to declare that this canvas is our renderer

`);
tpl.addCode(`
const demoCanvas = document.querySelector("#demo")
const renderer = new Geomtoy.CanvasRenderer(demoCanvas, {/* interface options */}, {/* display options */}) 
`);

tpl.addMarkdown(`
Second, we need to construct a view on this new build renderer.
`);
tpl.addCode(`
const view = new Geomtoy.View({/* view options */}, renderer);
// Make the view interactive.
view.startInteractive();
`);
tpl.addMarkdown(`
And now the web page should look like this:
`);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, {}));
    view.startResponsive();
    view.startInteractive();
}

tpl.addSection("Step 4: Add the points");
tpl.addCode(`
const pointA = new Geomtoy.Point(110, 120, "cross");
const pointB = new Geomtoy.Point(50, 200, "cross");
const pointC = new Geomtoy.Point(250, 120, "cross");
const pointD = new Geomtoy.Point(400, 300, "plus");

view.add(new Geomtoy.ViewElement(pointA, { style: { stroke: "red" } }));
view.add(new Geomtoy.ViewElement(pointB, { style: { stroke: "red" } }));
view.add(new Geomtoy.ViewElement(pointC, { style: { stroke: "red" } }));
view.add(new Geomtoy.ViewElement(pointD, { style: { stroke: "blue" } }));
`);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, {}));
    view.startResponsive();
    view.startInteractive();

    const pointA = new Point(110, 120, "cross");
    const pointB = new Point(50, 200, "cross");
    const pointC = new Point(250, 120, "cross");
    const pointD = new Point(400, 300, "plus");

    view.add(new ViewElement(pointA, { style: { stroke: "red" } }));
    view.add(new ViewElement(pointB, { style: { stroke: "red" } }));
    view.add(new ViewElement(pointC, { style: { stroke: "red" } }));
    view.add(new ViewElement(pointD, { style: { stroke: "blue" } }));
}

tpl.addSection("Step 5: Add the circle and write the geometric associations");
tpl.addCode(`
const circle = new Geomtoy.Circle().bind([pointA, "any"], [pointB, "any"], [pointC, "any"], function (e1, e2, e3) {
    this.copyFrom(Geomtoy.Circle.fromThreePoints(e1.target, e2.target, e3.target));
});
const lines = new Geomtoy.SealedGeometryArray([new Geomtoy.Line(), new Geomtoy.Line()]).bind([circle, "any"], [pointD, "any"], function (e1, e2) {
    const [lp1, lp2] = e1.target.getTangentLinesFromPoint(e2.target);
    this.items[0].copyFrom(lp1?.[0] ?? null);
    this.items[1].copyFrom(lp2?.[0] ?? null);
});
view.add(new Geomtoy.ViewElement(circle, { style: { stroke: "red", noFill: true } }));
view.add(new Geomtoy.ViewElement(lines, { style: { stroke: "blue" } }));
`);

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, {}));
    view.startResponsive();
    view.startInteractive();

    const pointA = new Point(110, 120, "cross");
    const pointB = new Point(50, 200, "cross");
    const pointC = new Point(250, 120, "cross");
    const pointD = new Point(400, 300, "plus");

    const circle = new Circle().bind([pointA, "any"], [pointB, "any"], [pointC, "any"], function (e1, e2, e3) {
        this.copyFrom(Circle.fromThreePoints(e1.target, e2.target, e3.target));
    });
    const lines = new SealedGeometryArray([new Line(), new Line()]).bind([circle, "any"], [pointD, "any"], function (e1, e2) {
        const [lp1, lp2] = e1.target.getTangentLinesFromPoint(e2.target);
        this.items[0].copyFrom(lp1?.[0] ?? null);
        this.items[1].copyFrom(lp2?.[0] ?? null);
    });

    view.add(new ViewElement(pointA, { style: { stroke: "red" } }));
    view.add(new ViewElement(pointB, { style: { stroke: "red" } }));
    view.add(new ViewElement(pointC, { style: { stroke: "red" } }));
    view.add(new ViewElement(pointD, { style: { stroke: "blue" } }));
    view.add(new ViewElement(circle, { style: { stroke: "red", noFill: true } }));
    view.add(new ViewElement(lines, { style: { stroke: "blue" } }));
}

tpl.addSection("Final code");
tpl.addCode(
    tagToEntity(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Let its width and height be 500px -->
    <canvas id="demo" width="500" height="500"></canvas>
    <script src="https://cdn.jsdelivr.net/npm/geomtoy@latest/dist/index.min.js"></script> 
    <script>
        const demoCanvas = document.querySelector("#demo");
        const renderer = new Geomtoy.CanvasRenderer(demoCanvas);
        const view = new Geomtoy.View({}, renderer);
        view.startInteractive();

        const pointA = new Geomtoy.Point(110, 120, "cross");
        const pointB = new Geomtoy.Point(50, 200, "cross");
        const pointC = new Geomtoy.Point(250, 120, "cross");
        const pointD = new Geomtoy.Point(400, 300, "plus");

        const circle = new Geomtoy.Circle().bind([pointA, "any"], [pointB, "any"], [pointC, "any"], function (e1, e2, e3) {
            this.copyFrom(Geomtoy.Circle.fromThreePoints(e1.target, e2.target, e3.target));
        });
        const lines = new Geomtoy.SealedGeometryArray([new Geomtoy.Line(), new Geomtoy.Line()]).bind([circle, "any"], [pointD, "any"], function (e1, e2) {
            const [lp1, lp2] = e1.target.getTangentLinesFromPoint(e2.target);
            this.items[0].copyFrom(lp1?.[0] ?? null);
            this.items[1].copyFrom(lp2?.[0] ?? null);
        });

        view.add(new Geomtoy.ViewElement(pointA, { style: { stroke: "red" } }));
        view.add(new Geomtoy.ViewElement(pointB, { style: { stroke: "red" } }));
        view.add(new Geomtoy.ViewElement(pointC, { style: { stroke: "red" } }));
        view.add(new Geomtoy.ViewElement(pointD, { style: { stroke: "blue" } }));
        view.add(new Geomtoy.ViewElement(circle, { style: { stroke: "red", noFill: true } }));
        view.add(new Geomtoy.ViewElement(lines, { style: { stroke: "blue" } }));

    </script> 
</body>
</html>
`),
    "html"
);
