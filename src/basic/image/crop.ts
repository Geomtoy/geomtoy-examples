import { Anchor, Image } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { codeHtml, lightStrokeFillTrans, markdownHtml } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Image crop");

const imageUrl = "assets/img/emoji-icons-set-flat-design-free-vector.jpg";
tpl.addMarkdown(`
See the [original image](assets/img/emoji-icons-set-flat-design-free-vector.jpg). The intrinsic size of the image is 1920 x 1920 px, and the size of each emoji icon is 360 x 360 px.
`);
tpl.addMarkdown(`See more info: [Image explanation](/basic/image/explanation.html)`);
tpl.addSection("Resize only");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 1, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    // This image is not cropped, but scaled to 240 x 240, `consistent` is false - follow the `zoom`.
    const image = new Image(0, 0, 240, 240, imageUrl, false);

    card.setDescription(
        "code",
        `
// This is the original image, not cropped, but scaled to 240 x 240, \`consistent\` is false - follow the \`zoom\`.
const image = new Image(0, 0, 240, 240, imageUrl, false);
        `
    );
    view.add(new ViewElement(image, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("blue") }));
}
tpl.addSection("Crop only");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 1, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    // This image is cropped, but not scaled(the size is still the original 360 x 360), `consistent` is false - follow the `zoom`.
    const image = new Image(0, 0, 360, 360, 1000, 60, 360, 360, imageUrl, false);

    card.setDescription(
        "code",
        `
// This image is cropped, but not scaled(the size is still the original 360 x 360), \`consistent\` is false - follow the \`zoom\`.
const image = new Image(0, 0, 360, 360, 1000, 60, 360, 360, imageUrl, false);
        `
    );
    view.add(new ViewElement(image, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("blue") }));
}
tpl.addSection("Crop and resize");
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 1, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    // This image is cropped, and scaled to 84 x 80, `consistent` is false - follow the `zoom`.
    const image = new Image(0, 0, 80, 84, 560, 540, 800, 840, imageUrl, false);

    card.setDescription(
        "code",
        `
// This image is cropped, and scaled to 84 x 80, \`consistent\` is false - follow the \`zoom\`.
const image = new Image(0, 0, 80, 84, 560, 540, 800, 840, imageUrl, false);
        `
    );
    view.add(new ViewElement(image, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("blue") }));
}
tpl.addNote(markdownHtml(`The emoji image is from [Vecteezy](https://www.vecteezy.com/vector-art/2209647-emoji-icons-set-flat-design).`));
