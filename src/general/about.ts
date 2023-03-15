import tpl from "../assets/templates/tpl-renderer";

tpl.title("About general geometry");

tpl.addSection("What is meant by general geometry");

tpl.addParagraph(`
General geometry refers to those 2D figures, they have no way to be constructed simply with geometric parameters and can only be described by drawing commands. 
For example, a circle can be easily specified by its center and radius, but the union of two intersecting circles cannot be specified by simple geometric parameters. 
I'm afraid you can only describe what the each arcs of the union looks like.
`);
tpl.addParagraph(`
Just like the browser SVG or Canvas drawing commands, the general geometry tries to describe a figure by only 1, 2, 3 degree bezier curves and elliptical arcs, which may involves curve fitting.
`);

tpl.addSection("Difference between Geomtoy and Web standard");
tpl.addParagraph(`
Geomtoy uses a completely different architecture than the browser standards (SVG and Canvas).
Here we will mainly use SVG as an example to illustrate:
`);

tpl.addMarkdown(`
| Figure Situation | SVG | Geomtoy |
| ---------------- | --- | ------- |
| one-stroke closed figure with only straight segments  | &lt;polygon&gt; | \`Polygon\` property \`closed\` = true
| one-stroke open figure with only straight segments  | &lt;polyline&gt; | \`Polygon\` property \`closed\` = false
| one-stroke closed figure with curved segments | &lt;path d="\`/^[mM][^mM]+[zZ]$/\`"&gt; | \`Path\` property \`closed\` = true
| one-stroke open figure with curved segments | &lt;path d="\`/^[mM][^mMzZ]+$/\`"&gt; | \`Path\` property \`closed\` = false
| multi-stroke figure with only straight segments | none or &lt;path d="\`/^([mM][\\d\\s\\.,-+eE]+([lhvLHV][\\d\\s\\.,-+eE]+)+[zZ]?)+$/\`"&gt; | \`Compound\` full of \`Polygon\`
| multi-stroke figure with curved segments | &lt;path&gt; | \`Compound\` full of \`Path\`
`);

tpl.addMarkdown(`
In other words:
- A one-stroke &lt;path&gt; will be treated as \`Path\`, but a multi-stroke &lt;path&gt; will be treated as \`Compound\`.
- &lt;polyline&gt; is removed and \`Polygon\` \`closed\`=false is used instead.
- &lt;path&gt; command \`[zZ]\` is removed and \`Path\` \`closed\`=true is used instead.
`);

tpl.addMarkdown(`
If we use a SVG **pseudocode** to represent \`Path\`, \`Polygon\` and \`Compound\`:
`);

tpl.addCode(
    `
&lt;!-- Path --&gt;
&lt;path closed="true | false" d="/^[mM][^mMzZ]+$/"&gt;&lt;/path&gt;

&lt;!-- Polygon --&gt;
&lt;polygon closed="true | false" points="" &gt;&lt;/polygon&gt;

&lt;!-- Compound --&gt;
&lt;compound&gt;
    &lt;polygon closed="true | false" points="" &gt;&lt;/polygon&gt;
    &lt;path closed="true | false" d="/^[mM][^mMzZ]+$/"&gt;&lt;/path&gt;
    &lt;path closed="true | false" d="/^[mM][^mMzZ]+$/"&gt;&lt;/path&gt;
    ...
&lt;/compound&gt;

`,
    "svg"
);

tpl.addParagraph(`
Such an architecture makes the call of method \`fromSvgString\` rather strange, so you must be careful when using.`);
