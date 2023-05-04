import { Anchor, Image } from "@geomtoy/core";
import { SVGRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { codeHtml, lightStrokeFillTrans, markdownHtml } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Image explanation");

tpl.addMarkdown("The construction of Geomtoy's Image is slightly complex, with a total of 14 overloads.");
tpl.addSection("Constructor overloads");
tpl.addCode(`
constructor(x: number, y: number, width: number, height: number, source: string, consistent?: boolean, anchor?: Anchor);
constructor(coordinates: [number, number], width: number, height: number, source: string, consistent?: boolean, anchor?: Anchor);
constructor(point: Point, width: number, height: number, source: string, consistent?: boolean, anchor?: Anchor);
constructor(x: number, y: number, size: [number, number], source: string, consistent?: boolean, anchor?: Anchor);
constructor(coordinates: [number, number], size: [number, number], source: string, consistent?: boolean, anchor?: Anchor);
constructor(point: Point, size: [number, number], source: string, consistent?: boolean, anchor?: Anchor);
constructor(x: number, y: number, width: number, height: number, sourceX: number, sourceY: number, sourceWidth: number, sourceHeight: number, sourceing, consistent?: boolean, anchor?: Anchor);
constructor(coordinates: [number, number], width: number, height: number, sourceCoordinates: [number, number], sourceWidth: number, sourceHeight: number, source: string, consistent?: boolean, anchor?: Anchor);
constructor(point: Point, width: number, height: number, sourcePoint: Point, sourceWidth: number, sourceHeight: number, source: string, consistent?: boolean, anchor?: Anchor);
constructor(x: number, y: number, size: [number, number], sourceX: number, sourceY: number, sourceSize: [number, number], source: string, consistent?: boolean, anchor?: Anchor);
constructor(coordinates: [number, number], size: [number, number], sourceCoordinates: [number, number], sourceSize: [number, number], source: string, consistent?: boolean, anchor?: Anchor);
constructor(point: Point, size: [number, number], sourcePoint: Point, sourceSize: [number, number], source: string, consistent?: boolean, anchor?: Anchor);
constructor(source: string, consistent?: boolean, anchor?: Anchor);
constructor(consistent?: boolean, anchor?: Anchor);
`);
tpl.addSection("Parameters");
tpl.addMarkdown("Although there are so many overloads, the main parameters are as follows:");
tpl.addMarkdown(`
- \`x\`:<br>
The x-axis coordinate of the image anchor in the view coordinate system.

- \`y\`:<br>
The y-axis coordinate of the image anchor in the view coordinate system.

- \`width\`:<br>
The width to draw the image. This allows scaling of the drawn image.

- \`height\`:<br>
The height to draw the image. This allows scaling of the drawn image.
`);
tpl.addNote(` 
If \`consistent\` is false, then \`width\` and \`height\` are specific to the view coordinate system, 
so the image can be correctly aligned to the coordinate tick in the view. **ONLY IN THIS CASE**, the \`width\` and \`height\` of the image are in the same unit with the other shapes in the view coordinate system.

If \`consistent\` is true, then \`width\` and \`height\` are specific to the screen coordinate system (of Canvas or SVG), 
so the size of the image does not change when you zooming the view(hence the name \`consistent\`) and the image is displayed on the screen with the actual \`width\` and \`height\`.
`);

tpl.addMarkdown(`
- \`sourceX\`:<br>
The x-axis coordinate of the **left top corner** of the sub-rectangle of the source image to draw.

- \`sourceY\`:<br>
The y-axis coordinate of the **left top corner** of the sub-rectangle of the source image to draw.

- \`sourceWidth\`:<br>
The width of the sub-rectangle of the source image to draw.

- \`sourceHeight\`:<br>
The height of the sub-rectangle of the source image to draw.
`);

tpl.addNote(` 
If one of \`sourceX\`, \`sourceY\`, \`sourceWidth\`, \`sourceHeight\` is not assigned, all four parameters are considered as \`NaN\` and no image cropping will be done.
`);

tpl.addMarkdown(`
The above parameters can basically refer to [CanvasRenderingContext2D.drawImage](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage), 
except for the effect of \`consistent\` on \`width\` and \`height\` and the effect  of \`anchor\` on \`x\` and \`y\`.

- \`source\`:<br>
The source of the image, which is an URL, supports all forms of URLs, including blob URL(\`blob:\`) and data URL(\`data:\`).

- \`consistent\`:<br>
The \`consistent\` controls whether \`width\` and \`height\` are for the view coordinate system or screen coordinate system.

- \`anchor\`:<br>
Which position of the image will correspond to the \`x\`, \`y\`.
`);

tpl.addCode(`
export const enum Anchor {
    LeftTop = "leftTop",
    LeftCenter = "leftCenter",
    LeftBottom = "leftBottom",
    CenterTop = "centerTop",
    CenterCenter = "centerCenter",
    CenterBottom = "centerBottom",
    RightTop = "rightTop",
    RightCenter = "rightCenter",
    RightBottom = "rightBottom"
}
`);

tpl.addSection("Example");
const imageUrl = "assets/img/emoji-icons-set-flat-design-free-vector.jpg";

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", rendererType: "svg", withPane: true });
    const view = new View({}, new SVGRenderer(card.svg!, {}, { density: 1, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive(View.centerOrigin);
    view.startInteractive();

    // This is the original image, not cropped, but scaled to 240x240, `consistent` is false - follow the `zoom`.
    const image = new Image(0, 0, 240, 240, imageUrl, false);
    // This is the first cropped image, scaled to 36x36, relocated to [100,100] and `consistent` is true - does not follow `zoom`.
    const image1 = new Image(100, 100, 36, 36, 120, 60, 360, 360, imageUrl, true);
    // This is the second cropped image, scaled to 72x72, relocated to [200,200], `consistent` is true - does not follow `zoom`, and anchored at the right bottom.
    const image2 = new Image(200, 200, 72, 72, 1440, 540, 360, 360, imageUrl, true, Anchor.RightBottom);
    card.setDescription(
        "code",
        `
// This is the original image, not cropped, but scaled to 240x240, \`consistent\` is false - follow the \`zoom\`.
const image = new Image(0, 0, 240, 240, imageUrl, false);
// This is the first cropped image, scaled to 36x36, relocated to [100,100] and \`consistent\` is true - does not follow \`zoom\`.
const image1 = new Image(100, 100, 36, 36, 120, 60, 360, 360, imageUrl, true);
// This is the second cropped image, scaled to 72x72, relocated to [200,200], \`consistent\` is true - does not follow \`zoom\`, and anchored at the right bottom.
const image2 = new Image(200, 200, 72, 72, 1440, 540, 360, 360, imageUrl, true, Anchor.RightBottom);
        `
    );
    view.add(new ViewElement(image, { ...lightStrokeFillTrans("blue") }));
    view.add(new ViewElement(image1, { ...lightStrokeFillTrans("blue") }));
    view.add(new ViewElement(image2, { ...lightStrokeFillTrans("blue") }));
}
tpl.addNote(`The emoji image is from [Vecteezy](https://www.vecteezy.com/vector-art/2209647-emoji-icons-set-flat-design).`);
