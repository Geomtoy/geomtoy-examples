import { Anchor, EventObject, Image, Point, Text } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { codeHtml, fillOnly, lightStrokeFill, lightStrokeFillTrans, markdownHtml, normalFont, strokeFillTrans } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Image consistent");
const imageUrl = "assets/img/emoji-icons-set-flat-design-free-vector.jpg";

tpl.addMarkdown(`
See the [original image](assets/img/emoji-icons-set-flat-design-free-vector.jpg). The intrinsic size of the image is 1920 x 1920 px, and the size of each emoji icon is 360 x 360 px.
`);
{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12", withPane: true });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 1, zoom: 1 }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const image1 = new Image(0, 0, 36, 36, 560, 540, 360, 360, imageUrl, true, Anchor.RightCenter);
    const image2 = new Image(0, 0, 36, 36, 560, 540, 360, 360, imageUrl, false, Anchor.LeftCenter);

    card.setDescription(
        "markdown",
        `
- The image on the left is \`consistent\` = **true** \`, so when you zoom the view, its size from the screen does not changed(always 36 x 36 px on the screen).
- The image on the right is \`consistent\` = **false**\`, so when you zoom the view, it follows zooming, the size from the view does not changed(aligned on the same coordinate tick).
`
    );

    card.appendDescription(
        "code",
        `
const image1 = new Image(0, 0, 36, 36, 560, 540, 360, 360, imageUrl, true, Anchor.RightCenter);
const image2 = new Image(0, 0, 36, 36, 560, 540, 360, 360, imageUrl, false, Anchor.LeftCenter);
        `
    );

    card.appendDescription("markdown", `See more info: [Image explanation](/basic/image/explanation.html)`);

    view.add(new ViewElement(image1, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
    view.add(new ViewElement(image2, { interactMode: ViewElementInteractMode.Activation, ...lightStrokeFillTrans("gray") }));
}

tpl.addNote(markdownHtml(`The emoji image is from [Vecteezy](https://www.vecteezy.com/vector-art/2209647-emoji-icons-set-flat-design).`));
