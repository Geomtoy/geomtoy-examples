import { Point } from "@geomtoy/core";
import { CanvasRenderer, View } from "@geomtoy/view";
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

tpl.addSection("Step1: setup the web page");

tpl.addMarkdown(`
We're going to use a web page to present this interactive demo, so let's build a web page first.
`);
tpl.addNote(`
Geomtoy can use \`<svg>\`(SVGSVGElement) or \`<canvas>\`(HTMLCanvasElement) as render for drawing.
`);
tpl.addMarkdown(`
Let's choose to use \`<canvas>\` this time(it is said that its performance is better).
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
tpl.addSection("Step2: import Geomtoy");
tpl.addMarkdown(`
Because we are using it directly on the web page, we need to import the following two packages.
And our entire demo is done in canvas, so we have to prepare a place to write scripts. 
Adding up the above, we should make the page look like this
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
    <script src="https://cdn.jsdelivr.net/npm/@geomtoy/core/0.0.1/dist/index.min.cjs"></script> 
    <script src="https://cdn.jsdelivr.net/npm/@geomtoy/view/0.0.1/dist/index.min.cjs"></script> 
    <script>
        // here we code
    </script> 
</body>
</html>
`),
    "html"
);
tpl.addSection("Step3: setup the view");
tpl.addMarkdown(`

First of all, we have to admit that this canvas is our renderer

`);
tpl.addCode(`
const demoCanvas = document.querySelector("#demo")
const renderer = new Geomtoy.CanvasRenderer(demoCanvas, {/* interface options */}, {/* display options */}) 
`);

tpl.addMarkdown(`
Second we need to construct a view on this new build renderer.
`);
tpl.addCode(`
const view = new View({/* view options */}, renderer)
`);

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
}

tpl.addSection("Step4: put our points");
tpl.addCode(`
const point1 = new Point(10, 0);
const point2 = new Point(5, 1);
const point3 = new Point(8, -3);
`);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    const point1 = new Point(10, 0);
    const point2 = new Point(5, 1);
    const point3 = new Point(8, -3);
}
tpl.addMarkdown(`

`);

tpl.addCode(`
const point1ViewElement = new Point(10, 0);
const point2ViewElement = new Point(5, 1);
const point3ViewElement = new Point(8, -3);
`);
