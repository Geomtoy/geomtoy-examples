import { Point, Rectangle } from "@geomtoy/core";
import { CanvasRenderer, SVGRenderer, View, ViewElement } from "@geomtoy/view";
import { lightStrokeFill, newElement, strokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Relationship of views and renderers");

tpl.addSection(`Separation of interaction and rendering`);
tpl.addMarkdown(`
Geomtoy logically separates interaction and rendering.
The view is the interaction logic layer, responsible for all interactions, and managing sub-views and view elements.
It can be constructed independently without a renderer, but at this time it can only have the functionality of managing sub-views and view elements.
\n
The renderer is the rendering logic layer, which only focuses on rendering-related functionality.
`);

tpl.addNote(`
It's because of this logical separation of interaction and rendering that we can use the same set of code to support both SVG and Canvas.
`);

tpl.addSection("Example 1: Construct a view with a renderer");
{
    const card = tpl.addCard({ className: "col-12", aspectRatio: "2:1" });
    const renderer = new CanvasRenderer(card.canvas!);
    const view = new View({}, renderer);
    const viewElement1 = new ViewElement(new Point([0, 0]), { ...lightStrokeFill("red") });
    const viewElement2 = new ViewElement(new Point([50, 50]), { ...lightStrokeFill("blue") });
    view.startResponsive();
    view.add(viewElement1, viewElement2);

    card.setDescription(
        "code",
        `
const renderer = new CanvasRenderer(card.canvas!);
const view = new View({}, renderer);
const viewElement1 = new ViewElement(new Point([0, 0]), { ...lightStrokeFill("red") });
const viewElement2 = new ViewElement(new Point([50, 50]), { ...lightStrokeFill("blue") });
view.startResponsive();
view.add(viewElement1, viewElement2);
    `
    );
}

tpl.addSection("Example 2: Construct a view without specifying a renderer, and use one later");
{
    const card = tpl.addCard({ className: "col-12", aspectRatio: "2:1" });

    const view = new View();
    const viewElement1 = new ViewElement(new Point([0, 0]), { ...lightStrokeFill("red") });
    const viewElement2 = new ViewElement(new Point([50, 50]), { ...lightStrokeFill("blue") });
    view.startResponsive();
    view.add(viewElement1, viewElement2);
    const renderer = new CanvasRenderer(card.canvas!);
    view.use(renderer);

    card.setDescription(
        "code",
        `
const view = new View();
const viewElement1 = new ViewElement(new Point([0, 0]), { ...lightStrokeFill("red") });
const viewElement2 = new ViewElement(new Point([50, 50]), { ...lightStrokeFill("blue") });
view.startResponsive();
view.add(viewElement1, viewElement2);
const renderer = new CanvasRenderer(card.canvas!);
view.use(renderer);
    `
    );
}
tpl.addSection("Example 3: Construct a view with renderers of different type(SVG or Canvas)");
{
    const card1 = tpl.addCard({ className: "col-6", aspectRatio: "2:1" });
    const card2 = tpl.addCard({ className: "col-6", aspectRatio: "2:1", rendererType: "svg" });

    const view1 = new View({}, new CanvasRenderer(card1.canvas!));
    view1.startResponsive();
    view1.startInteractive();
    const viewElement1 = new ViewElement(new Point([0, 0]), { ...lightStrokeFill("red") });
    const viewElement2 = new ViewElement(new Point([50, 50]), { ...lightStrokeFill("blue") });
    view1.add(viewElement1, viewElement2);

    const view2 = new View({}, new SVGRenderer(card2.svg!));
    view2.startResponsive();
    view2.startInteractive();
    const viewElement3 = new ViewElement(new Point([0, 0]), { ...lightStrokeFill("red") });
    const viewElement4 = new ViewElement(new Point([50, 50]), { ...lightStrokeFill("blue") });
    view2.add(viewElement3, viewElement4);

    card1.setTitle("Canvas");
    card1.setDescription(
        "code",
        `
const view1 = new View({}, new CanvasRenderer(card1.canvas!));
view1.startResponsive();
view1.startInteractive();
const viewElement1 = new ViewElement(new Point([0, 0]), { ...lightStrokeFill("red") });
const viewElement2 = new ViewElement(new Point([50, 50]), { ...lightStrokeFill("blue") });
view1.add(viewElement1, viewElement2);
    `
    );

    card2.setTitle("SVG");
    card2.setDescription(
        "code",
        `
const view2 = new View({}, new SVGRenderer(card2.svg!));
view2.startResponsive();
view2.startInteractive();
const viewElement3 = new ViewElement(new Point([0, 0]), { ...lightStrokeFill("red") });
const viewElement4 = new ViewElement(new Point([50, 50]), { ...lightStrokeFill("blue") });
view2.add(viewElement3, viewElement4);
    `
    );
}

tpl.addSection("Example 4: Construct a view with renderers with different display settings");
{
    const card1 = tpl.addCard({ className: "col-6", aspectRatio: "2:1" });
    const card2 = tpl.addCard({ className: "col-6", aspectRatio: "2:1" });

    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { yAxisPositiveOnBottom: false }));
    view1.startResponsive(View.centerOrigin);
    view1.startInteractive();
    const viewElement1 = new ViewElement(new Point([0, 0]), { ...lightStrokeFill("red") });
    const viewElement2 = new ViewElement(new Point([50, 50]), { ...lightStrokeFill("blue") });
    view1.add(viewElement1, viewElement2);

    const view2 = new View({}, new CanvasRenderer(card2.canvas!));
    view2.startResponsive();
    view2.startInteractive();
    const viewElement3 = new ViewElement(new Point([0, 0]), { ...lightStrokeFill("red") });
    const viewElement4 = new ViewElement(new Point([50, 50]), { ...lightStrokeFill("blue") });
    view2.add(viewElement3, viewElement4);

    card1.setTitle("Mathematic");
    card1.setDescription(
        "code",
        `
const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { xAxisPositiveOnRight: false, yAxisPositiveOnBottom: false }));
view1.startResponsive(View.centerOrigin);
view1.startInteractive();
const viewElement1 = new ViewElement(new Point([0, 0]), { ...lightStrokeFill("red") });
const viewElement2 = new ViewElement(new Point([50, 50]), { ...lightStrokeFill("blue") });
view1.add(viewElement1, viewElement2);
    `
    );

    card2.setTitle("Computer Graphics");
    card2.setDescription(
        "code",
        `
const view2 = new View({}, new CanvasRenderer(card2.canvas!));
view2.startResponsive();
view2.startInteractive();
const viewElement3 = new ViewElement(new Point([0, 0]), { ...lightStrokeFill("red") });
const viewElement4 = new ViewElement(new Point([50, 50]), { ...lightStrokeFill("blue") });
view2.add(viewElement3, viewElement4);
    `
    );
}

tpl.addSection("Example 5: Change the renderer of the view");
tpl.addMarkdown(`Click "Use this" to use and switch renderers.`);
{
    const card1 = tpl.addCard({ className: "col-6", aspectRatio: "1:1", rendererType: "canvas" });
    const card2 = tpl.addCard({ className: "col-6", aspectRatio: "1:1", rendererType: "svg" });
    const render1 = new CanvasRenderer(card1.canvas!, {}, { xAxisPositiveOnRight: true });
    const render2 = new SVGRenderer(card2.svg!, {}, { xAxisPositiveOnRight: false });
    const view = new View();
    const viewElement1 = new ViewElement(new Point([0, 0]), { ...lightStrokeFill("red") });
    const viewElement2 = new ViewElement(new Point([50, 50]), { ...lightStrokeFill("blue") });
    view.add(viewElement1, viewElement2);
    view.startResponsive();
    view.startInteractive();

    card1.appendDescription("html", `<button class="btn btn-primary">Use this</button>`);
    card2.appendDescription("html", `<button class="btn btn-primary">Use this</button>`);

    card1.card.querySelector("button")!.addEventListener("click", function () {
        view.use(render1);
    });
    card2.card.querySelector("button")!.addEventListener("click", function () {
        view.use(render2);
    });

    tpl.addCode(`
const render1 = new CanvasRenderer(card1.canvas!);
const render2 = new SVGRenderer(card2.svg!);
const view = new View();
const viewElement1 = new ViewElement(new Point([0, 0]), { ...lightStrokeFill("red") });
const viewElement2 = new ViewElement(new Point([50, 50]), { ...lightStrokeFill("blue") });
view.add(viewElement1, viewElement2);
view.startResponsive();
view.startInteractive();
 
card1.card.querySelector("button")!.addEventListener("click", function () {
    view.use(render1);
});
card2.card.querySelector("button")!.addEventListener("click", function () {
    view.use(render2);
});
    `);
}
