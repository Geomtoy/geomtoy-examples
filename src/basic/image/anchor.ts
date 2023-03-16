import { Anchor, EventObject, Image, Point } from "@geomtoy/core";
import { CanvasRenderer, SvgRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, lightStrokeFillTrans, markdownHtml } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Image anchor");
const imageUrl = "assets/img/emoji-icons-set-flat-design-free-vector.jpg";
const image1 = new Image(50, 50, 36, 36, 560, 540, 360, 360, imageUrl, true, Anchor.LeftTop);
const image2 = new Image(50, 0, 36, 36, 560, 1020, 360, 360, imageUrl, true, Anchor.LeftCenter);
const image3 = new Image(50, -50, 36, 36, 560, 1500, 360, 360, imageUrl, true, Anchor.LeftBottom);
const image4 = new Image(0, 50, 36, 36, 1000, 540, 360, 360, imageUrl, true, Anchor.CenterTop);
const image5 = new Image(0, 0, 36, 36, 1000, 1020, 360, 360, imageUrl, true, Anchor.CenterCenter);
const image6 = new Image(0, -50, 36, 36, 1000, 1500, 360, 360, imageUrl, true, Anchor.CenterBottom);
const image7 = new Image(-50, 50, 36, 36, 1440, 540, 360, 360, imageUrl, true, Anchor.RightTop);
const image8 = new Image(-50, 0, 36, 36, 1440, 1020, 360, 360, imageUrl, true, Anchor.RightCenter);
const image9 = new Image(-50, -50, 36, 36, 1440, 1500, 360, 360, imageUrl, true, Anchor.RightBottom);
const pointBindAnchor = function (this: Point, e: EventObject<Image>) {
    this.coordinates = e.target.coordinates;
};
const point1 = new Point("circle").bind([image1, "x|y"], pointBindAnchor);
const point2 = new Point("circle").bind([image2, "x|y"], pointBindAnchor);
const point3 = new Point("circle").bind([image3, "x|y"], pointBindAnchor);
const point4 = new Point("circle").bind([image4, "x|y"], pointBindAnchor);
const point5 = new Point("circle").bind([image5, "x|y"], pointBindAnchor);
const point6 = new Point("circle").bind([image6, "x|y"], pointBindAnchor);
const point7 = new Point("circle").bind([image7, "x|y"], pointBindAnchor);
const point8 = new Point("circle").bind([image8, "x|y"], pointBindAnchor);
const point9 = new Point("circle").bind([image9, "x|y"], pointBindAnchor);

tpl.addCode(`
const image1 = new Image(50, 50, 36, 36, 560, 540, 360, 360, imageUrl, true, Anchor.LeftTop);
const image2 = new Image(50, 0, 36, 36, 560, 1020, 360, 360, imageUrl, true, Anchor.LeftCenter);
const image3 = new Image(50, -50, 36, 36, 560, 1500, 360, 360, imageUrl, true, Anchor.LeftBottom);
const image4 = new Image(0, 50, 36, 36, 1000, 540, 360, 360, imageUrl, true, Anchor.CenterTop);
const image5 = new Image(0, 0, 36, 36, 1000, 1020, 360, 360, imageUrl, true, Anchor.CenterCenter);
const image6 = new Image(0, -50, 36, 36, 1000, 1500, 360, 360, imageUrl, true, Anchor.CenterBottom);
const image7 = new Image(-50, 50, 36, 36, 1440, 540, 360, 360, imageUrl, true, Anchor.RightTop);
const image8 = new Image(-50, 0, 36, 36, 1440, 1020, 360, 360, imageUrl, true, Anchor.RightCenter);
const image9 = new Image(-50, -50, 36, 36, 1440, 1500, 360, 360, imageUrl, true, Anchor.RightBottom);
    `);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-6", rendererType: "svg", withPane: true });
    const view = new View({}, new SvgRenderer(card.svg!, {}, { density: 1, zoom: 1, yAxisPositiveOnBottom: true, xAxisPositiveOnRight: true }));
    view.activeMode = "numerous";
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    view.add(new ViewElement(point1, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point2, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point3, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point4, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point5, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point6, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point7, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point8, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point9, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));

    view.add(new ViewElement(image1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image3, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image4, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image5, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image6, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image7, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image8, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image9, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));

    card.setDescription("markdown", `\`yAxisPositiveOnBottom\`: true\n\n\`xAxisPositiveOnRight\`: true`);
}

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-6", rendererType: "svg", withPane: true });
    const view = new View({}, new SvgRenderer(card.svg!, {}, { density: 1, zoom: 1, yAxisPositiveOnBottom: true, xAxisPositiveOnRight: false }));
    view.activeMode = "numerous";
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    view.add(new ViewElement(point1, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point2, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point3, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point4, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point5, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point6, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point7, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point8, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point9, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));

    view.add(new ViewElement(image1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image3, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image4, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image5, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image6, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image7, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image8, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image9, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    card.setDescription("markdown", `\`yAxisPositiveOnBottom\`: true\n\n\`xAxisPositiveOnRight\`: false`);
}

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-6", rendererType: "svg", withPane: true });
    const view = new View({}, new SvgRenderer(card.svg!, {}, { density: 1, zoom: 1, yAxisPositiveOnBottom: false, xAxisPositiveOnRight: true }));
    view.activeMode = "numerous";
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    view.add(new ViewElement(point1, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point2, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point3, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point4, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point5, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point6, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point7, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point8, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point9, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));

    view.add(new ViewElement(image1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image3, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image4, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image5, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image6, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image7, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image8, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image9, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    card.setDescription("markdown", `\`yAxisPositiveOnBottom\`: false\n\n\`xAxisPositiveOnRight\`: true`);
}

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-6", rendererType: "svg", withPane: true });
    const view = new View({}, new SvgRenderer(card.svg!, {}, { density: 1, zoom: 1, yAxisPositiveOnBottom: false, xAxisPositiveOnRight: false }));
    view.activeMode = "numerous";
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    view.add(new ViewElement(point1, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point2, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point3, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point4, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point5, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point6, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point7, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point8, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));
    view.add(new ViewElement(point9, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("gray") }));

    view.add(new ViewElement(image1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image3, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image4, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image5, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image6, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image7, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image8, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image9, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    card.setDescription("markdown", `\`yAxisPositiveOnBottom\`: false\n\n\`xAxisPositiveOnRight\`: false`);
}
tpl.addMarkdown(`
The anchor position is trustworthy regardless of the coordinate system setting.
`);
tpl.addMarkdown(`See more info: [Image explanation](/basic/image/explanation.html)`);

tpl.addNote(markdownHtml(`The emoji image is from [Vecteezy](https://www.vecteezy.com/vector-art/2209647-emoji-icons-set-flat-design).`));
