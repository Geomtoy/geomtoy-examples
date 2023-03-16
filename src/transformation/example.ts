import { Anchor, Arbitrary, Ellipse, EventObject, Image, Path, Point, Rectangle, SealedGeometryArray, Transformation } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import { CanvasRenderer, SvgRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { codeHtml, dashedThinStroke, fillOnly, fillTransOnly, lightStrokeFill, lightStrokeFillTrans, markdownHtml, strokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";
import { showTransformInterface } from "./_ui";

tpl.title("Transformation example");
{
    const card = tpl.addCard({ aspectRatio: "1:1", className: "col-12", rendererType: "svg", withPane: true });
    const view = new View({}, new SvgRenderer(card.svg!, {}, { density: 1, zoom: 1 }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();
    view.activeMode = "numerous";

    const rectangle = new Rectangle(-100, -100, 200, 200);
    const path = new Path(
        [Path.moveTo([0, 0]), Path.lineTo([20, 20]), Path.quadraticBezierTo([4, 25], [0, 20]), Path.bezierTo([-15, 15], [-10, 2], [-8, 0]), Path.arcTo(1, 1, 0, true, true, [20, 3])],
        true
    );

    const ellipse = new Ellipse([0, 0], 5, 10, Maths.PI / 2);
    const transform = new Transformation();

    const arbitrary = new Arbitrary().data("original", ellipse).data("transform", transform);
    // const arbitrary = new Arbitrary(rectangle).data("original", rectangle).data("transform", transform);

    const arbitraryViewElement = new ViewElement(arbitrary, { interactMode: ViewElementInteractMode.None, ...strokeFill("purple") });
    showTransformInterface(arbitraryViewElement as ViewElement<Arbitrary>, view);

    view.add(arbitraryViewElement);
    view.add(new ViewElement(ellipse, { interactMode: ViewElementInteractMode.None, ...strokeFill("teal") }));
}
