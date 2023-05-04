import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Renderer");

tpl.addMarkdown(`
Class \`Renderer\` is the class that actually does the rendering.
`);

tpl.addSection("Coordinate system(space) transformation and viewport");
tpl.addMarkdown(`
The \`container\` property of the renderer corresponds to the \`<svg>\` or \`<canvas>\` element in the browser, and the space where 
these elements are located is called the screen space or the **screen coordinate system**.
\n
All the shapes will be wrapped as view elements and added to the view. The space in which these shapes reside is called the view space or the **view coordinate system**.
\n
As we know, space is supposed to expand infinitely, but the size of our screen is finite, so we can only see through it as if it were a window.
In our case, the \`<svg>\` or \`<canvas>\` element is the limitation of our vision, so it is the window. We can also think of them as the view's **viewport**.
This logic is similar to SVG's \`viewBox\`. Of course, we also have a similar property to describe the viewport, called \`globalViewBox\`.
There is a noteworthy property \`globalTransformation\` which is the transformation of the view coordinate system based on the screen coordinate system.
`);

tpl.addSection("API");
tpl.addMarkdown(` 
We don't need to construct a \`Display\` class, but pass in the display settings when constructing a renderer.
`);
tpl.addCode(`
const renderer = new CanvasRenderer(canvas, {}, {/* displaySettings */})
const renderer = new SVGRenderer(svg, {}, {/* displaySettings */})
`);
tpl.addMarkdown(`
We can also change the display settings at runtime, by accessing the renderer's \`display\` property.
`);
tpl.addCode(`
renderer.display.&lt;key&gt; = &lt;value&gt;
`);

tpl.addSection("Display settings");
tpl.addSubSection("width", true);
tpl.addMarkdown(`
The width of the display, equal to the width fo the renderer's container in the screen coordinate system.
Setting this is setting the container(\`<svg>\` Or \`<canvas>\` element)'s width. **Note**: If the view is responsive,
the width is automatically updated with the parent element, setting the width may not take effect.
`);
tpl.addSubSection("height", true);
tpl.addMarkdown(`
The height of the display, equal to the height fo the renderer's container in the screen coordinate system.
Setting this is setting the container(\`<svg>\` Or \`<canvas>\` element)'s height. **Note**: If the view is responsive,
the height is automatically updated with the parent element, setting the height may not take effect.
`);
tpl.addSubSection("density", true);
tpl.addMarkdown(`
**default**: 1.
\n
The density of the display, can be interpreted as the initial scale of the view coordinate system in the screen coordinate system.
`);
tpl.addSubSection("zoom", true);
tpl.addMarkdown(`
**default**: 1.
\n
The zoom is the scale based on the density, the zoom of the view.
`);
tpl.addMarkdown("See more info about [density and zoom](view/display/density-and-zoom.html)");

tpl.addSubSection("origin", true);
tpl.addMarkdown(`
**default**: [0, 0].
\n
The origin of the view coordinate system in the screen coordinate system, can be also interpreted as the initial offset 
of the view coordinate system in the screen coordinate system. It takes the units of the screen coordinate system.
`);
tpl.addSubSection("pan", true);
tpl.addMarkdown(`
**default**: [0, 0].
\n
The pan is the offset based on the origin, the pan of the view. 
It takes the units of the screen coordinate system.
`);
tpl.addMarkdown("See more info about [origin and pan](view/display/origin-and-pan.html)");

tpl.addSubSection("xAxisPositiveOnRight", true);
tpl.addMarkdown(`
**default**: true.
\n
Whether the x-axis of the view coordinate system is positive on the right.
`);
tpl.addSubSection("yAxisPositiveOnBottom", true);
tpl.addMarkdown(`
**default**: true.
\n
Whether the y-axis of the view coordinate system is positive on the bottom.
`);
tpl.addMarkdown("See more info about [coordinate system](view/display/coordinate-system.html)");

tpl.addSubSection("scale", true);
tpl.addMarkdown(`
***readonly***. The total scale of the view coordinate system.
`);
tpl.addSubSection("offset", true);
tpl.addMarkdown(`
***readonly***. The total offset of the view coordinate system. 
It takes the units of the screen coordinate system.
`);

tpl.addSubSection("globalTransformation", true);
tpl.addMarkdown(`
***readonly***. The transformation of the view coordinate system based on the screen coordinate system.
`);
tpl.addSubSection("globalViewBox", true);
tpl.addMarkdown(`
***readonly***. The position and dimensions of the renderer's container in the view coordinate system. 
It takes the units of the view coordinate system.
`);
