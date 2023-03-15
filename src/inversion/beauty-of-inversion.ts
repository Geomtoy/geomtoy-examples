import { Circle, Inversion, Line, ShapeArray } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement } from "@geomtoy/view";
import { codeHtml, lightStrokeFill, thinStrokeOnly } from "../assets/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Beauty of inversion");

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 100, zoom: 1, pan: [0, 200], yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const lines = new ShapeArray(
        Utility.range(0, 11).map(index => {
            return new Line(-5 + index, 0, Infinity);
        })
    );
    const inversion = new Inversion([0, 2], 5);
    const inverses = new ShapeArray(
        lines.items.map(l => {
            return inversion.invertLine(l);
        })
    );
    card.setDescription(
        codeHtml(`
const lines = new ShapeArray(
    Utility.range(0, 11).map(index => {
        return new Line(-5 + index, 0, Infinity);
    })
);
const inversion = new Inversion([0, 2], 5);
const inverses = new ShapeArray(
    lines.items.map(l => {
        return inversion.invertLine(l);
    })
);
    `)
    );

    view.add(new ViewElement(lines, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("red") }));
    view.add(new ViewElement(inverses, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("blue") }));
}

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 100, zoom: 1, pan: [-200, 200], yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const circles = new ShapeArray(
        Utility.range(0, 6).map(index => {
            return new Circle(index, 2, 1);
        })
    );

    const inversion = new Inversion([0, 0], 5);
    const inverses = new ShapeArray(
        circles.items.map(circle => {
            return inversion.invertCircle(circle);
        })
    );

    card.setDescription(
        codeHtml(`
const circles = new ShapeArray(
    Utility.range(0, 6).map(index => {
        return new Circle(index, 2, 1);
    })
);

const inversion = new Inversion([0, 0], 5);
const inverses = new ShapeArray(
    circles.items.map(circle => {
        return inversion.invertCircle(circle);
    })
);
    `)
    );
    view.add(new ViewElement(circles, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("red") }));
    view.add(new ViewElement(inverses, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("blue") }));
}

{
    const card = tpl.addCard({ aspectRatio: "2:1", className: "col-12" });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 20, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const lines = new ShapeArray([
        ...Utility.range(0, 20).map(i => {
            return new Line(-1 + 0.1 * i, 0, Infinity);
        }),
        ...Utility.range(0, 20).map(j => {
            return new Line(0, -1 + 0.1 * j, 0);
        })
    ]);

    const inversion = new Inversion([0, 0], 0.1);
    const inverses = new ShapeArray(
        lines.items.map(l => {
            return inversion.invertLine(l);
        })
    );
    card.setDescription(
        codeHtml(`
const lines = new ShapeArray([
    ...Utility.range(0, 20).map(i => {
        return new Line(-1 + 0.1 * i, 0, Infinity);
    }),
    ...Utility.range(0, 20).map(j => {
        return new Line(0, -1 + 0.1 * j, 0);
    })
]);

const inversion = new Inversion([0, 0], 0.1);
const inverses = new ShapeArray(
    lines.items.map(l => {
        return inversion.invertLine(l);
    })
);
    `)
    );
    view.add(new ViewElement(lines, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("gray") }));
    view.add(new ViewElement(inverses, { interactMode: ViewElementInteractMode.None, ...lightStrokeFill("teal") }));
}
