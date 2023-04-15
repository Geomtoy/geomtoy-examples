import { Rectangle } from "@geomtoy/core";
import { CanvasRenderer, Renderer, View, ViewElement } from "@geomtoy/view";
import { strokeFill } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Renderer interface");

tpl.addMarkdown(`
The interface refers to the additional rendering of axes, grids and labels in renderers to assist the view.
`);

tpl.addSubSection("API");
tpl.addCode(`
// initialization 
const CanvasRenderer = new CanvasRenderer(canvas, Partial&lt;InterfaceSettings&gt;)
const SVGRenderer = new SVGRenderer(svg, Partial&lt;InterfaceSettings&gt;)

// runtime modification
renderer.interface.&lt;keyof InterfaceSettings&gt; = &lt;value&gt;;
// or
view.renderer.interface.&lt;keyof InterfaceSettings&gt; = &lt;value&gt;;
`);

tpl.addCode(`
type InterfaceSettings = {
	showAxis: boolean;
	axisColor: string;
	showLabel: boolean;
	labelFillColor: string;
	labelStrokeColor: string;
	showGrid: boolean;
	showPrimaryGridOnly: boolean;
	primaryGridColor: string;
	secondaryGridColor: string;
};
`);
tpl.addSubSection("Customize the color of the axis, grid and label");
{
    const rectangle = new Rectangle(0, 0, 200, 200);
    const card = tpl.addCard({ className: "col-12", aspectRatio: "2:1", rendererType: "canvas" });
    const canvasRenderer = new CanvasRenderer(card.canvas!, {
        axisColor: "red",
        labelFillColor: "cyan",
        labelStrokeColor: "black",
        primaryGridColor: "blue",
        secondaryGridColor: "green"
    });

    const view = new View({}, canvasRenderer);
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    view.add(new ViewElement(rectangle, { ...strokeFill("brown") }));
    card.setDescription(
        "code",
        `
const canvasRenderer = new CanvasRenderer(card.canvas!, {
    axisColor: "red",
    labelFillColor: "cyan",
    labelStrokeColor: "black",
    primaryGridColor: "blue",
    secondaryGridColor: "green"
});
    `
    );
}
tpl.addSubSection("Hide the secondary grid");
{
    const rectangle = new Rectangle(0, 0, 200, 200);
    const card = tpl.addCard({ className: "col-12", aspectRatio: "2:1", rendererType: "canvas" });
    const canvasRenderer = new CanvasRenderer(card.canvas!, {
        showGrid: true,
        showPrimaryGridOnly: true
    });

    const view = new View({}, canvasRenderer);
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    view.add(new ViewElement(rectangle, { ...strokeFill("brown") }));
    card.setDescription(
        "code",
        `
const canvasRenderer = new CanvasRenderer(card.canvas!, {
    showGrid: true,
    showPrimaryGridOnly: true
});
    `
    );
}
tpl.addSubSection("Hide the axis, grid and label");
{
    const rectangle = new Rectangle(0, 0, 200, 200);
    const card = tpl.addCard({ className: "col-12", aspectRatio: "2:1", rendererType: "canvas" });
    const canvasRenderer = new CanvasRenderer(card.canvas!, {
        showAxis: false,
        showGrid: false,
        showLabel: false
    });

    const view = new View({}, canvasRenderer);
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    view.add(new ViewElement(rectangle, { ...strokeFill("brown") }));
    card.setDescription(
        "code",
        `
const canvasRenderer = new CanvasRenderer(card.canvas!, {
    showAxis: false,
    showGrid: false,
    showLabel: false
});
    `
    );
}
