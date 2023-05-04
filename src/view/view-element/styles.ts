import tpl from "../../assets/templates/tpl-renderer";

tpl.title("View element styles");

tpl.addMarkdown(`
The view element has a base style, called \`style\`, which is the default base.
Depending on the current interaction state of the view element, different interactive styles are used.
And there are three types of interactive styles, \`clickStyle\`, \`hoverStyle\` and \`activeStyle\`.
`);

tpl.addNote(`
The interactive style settings are limited, as shown in the following code, which is designed for simplicity and visual stability.
`);

tpl.addCode(`
export type Style = {
    paintOrder: PaintOrderType;
    noStroke: boolean;
    noFill: boolean;
    fill: string;
    stroke: string;
    strokeWidth: number;
    strokeDash: number[];
    strokeDashOffset: number;
    strokeLineJoin: StrokeLineJoinType;
    strokeMiterLimit: number;
    strokeLineCap: StrokeLineCapType;
};

export type InteractiveStyle = {
    fill: string;
    stroke: string;
    strokeWidth: number;
};
`);

tpl.addSection(`Set styles at the initialization`);
tpl.addCode(`
const viewElement = new ViewElement(shape, {
    style: Partial&lt;Style&gt;,
    hoverStyle: Partial&lt;InteractiveStyle&gt;,
    clickStyle: Partial&lt;InteractiveStyle&gt;, 
    activeStyle: Partial&lt;InteractiveStyle&gt;
});
`);

tpl.addSection(`Change styles later`);
tpl.addCode(` 
viewElement.style(value: Partial&lt;Style&gt;);
viewElement.hoverStyle(value: Partial&lt;InteractiveStyle&gt;);
viewElement.clickStyle(value: Partial&lt;InteractiveStyle&gt;);
viewElement.activeStyle(value: Partial&lt;InteractiveStyle&gt;);
`);

tpl.addSection(`Style settings`);
tpl.addSubSection(`paintOrder`, true);
tpl.addCode(`
export type PaintOrderType = "stroke" | "fill";
`);
tpl.addMarkdown(`
This is somewhat similar to the [SVG paint-order attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/paint-order)
but with the "markers" value removed.
`);

tpl.addSubSection(`noStroke`, true);
tpl.addMarkdown(`
When this is set to **true**, The stroke will not be drawn regardless of the other settings, and collision detection is not performed with the stroke.
`);

tpl.addSubSection(`noFill`, true);
tpl.addMarkdown(`
When this is set to **true**, The fill will not be drawn regardless of the other settings, and collision detection is not performed with the fill.
`);

tpl.addSubSection(`fill`, true);
tpl.addMarkdown(`The fill color.`);

tpl.addSubSection(`stroke`, true);
tpl.addMarkdown(`The stroke color.`);

tpl.addSubSection(`strokeWidth`, true);
tpl.addMarkdown(`The stroke width.`);

tpl.addSubSection(`strokeDash`, true);
tpl.addSubSection(`strokeDashOffset`, true);
tpl.addSubSection(`strokeLineJoin`, true);
tpl.addCode(`
export type StrokeLineJoinType = "bevel" | "miter" | "round";
`);

tpl.addSubSection(`strokeMiterLimit`, true);
tpl.addSubSection(`strokeLineCap`, true);
tpl.addCode(`
export type StrokeLineCapType = "butt" | "round" | "square";
`);
