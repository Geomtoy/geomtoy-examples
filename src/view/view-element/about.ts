import { ViewElement, ViewElementType } from "@geomtoy/view";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("View element");

tpl.addMarkdown(`
A view element is, as its name implies, an element contained within a view.
A view element is also the basic unit of interaction and rendering.
It helps to set the shape's rendering styles, and they can be added to the view to participate in interaction.
`);
tpl.addNote(`
All of the \`Shape\` derived classes in Geomtoy are visible, because they have \`getGraphics\` methods.
So we can call the renderer's \`draw(shape: Shape)\` method directly. But the disadvantages of this approach are: 
- We need to set the Renderer's rendering style over and over again.
- There's no way to interact because renderers don't support interaction.
- There's no way to manage them.

So why not extend the \`Shape\`? Because:
- This extension is not very conformable to Geomtoy core's computing-only characteristics. 
- A shape doesn't necessarily need to be rendered, so why add rendering styles to it.
- On the contrary, shapes can be rendered multiple times, and the one-to-many relationship between shapes and view elements allows us to achieve this.
`);
tpl.addSection(`Construction`);

tpl.addCode(`
const viewElement = new ViewElement(shape);
// or
const viewElement = new ViewElement(shape, {
    type: ViewElementType.Activation,
    zIndex: 1,
    noDrag: false,
    noHover: false,
    style: {...},
    hoverStyle: {...},
    clickStyle: {...}, 
    activeStyle: {...}
});
`);

tpl.addSection(`Type`);
tpl.addMarkdown(`
There are three types of view elements:
- \`ViewElementType.None\`
- \`ViewElementType.Activation\`
- \`ViewElementType.Operation\` 
\n
See more info [View element type](view/view-element/type.html).
\n
The [Transformation example](transformation/example.html) is also a good example to illustrate the different types of view elements.
`);

tpl.addSection(`Styles`);
tpl.addMarkdown(`
View elements have four styles: \`style\`, \`hoverStyle\`, \`clickStyle\` and \`activeStyle\`. 
The \`style\` is the basic style of the view element, The last three styles correspond to the interaction status.
\n
See more info [View element styles](view/view-element/styles.html).
`);

tpl.addSection(`Other`);
tpl.addSubSection(`zIndex`, true);
tpl.addMarkdown(`
The z-index of the view element.
`);

tpl.addSubSection(`noDrag`, true);
tpl.addMarkdown(`
Disable the drag interaction and the drag event of the view element.
`);

tpl.addSubSection(`noHover`, true);
tpl.addMarkdown(`
Disable the hover event of the view element.
`);
