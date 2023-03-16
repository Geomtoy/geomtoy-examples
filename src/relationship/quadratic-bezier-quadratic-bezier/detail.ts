import Geomtoy, { Relationship, QuadraticBezier } from "@geomtoy/core";
import { Maths, Polynomial, Utility } from "@geomtoy/util";
import { View, ViewElement, CanvasRenderer } from "@geomtoy/view";

import color from "../../assets/scripts/color";
import { strokeOnly } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";
import { trileanResult } from "../_common";

tpl.title("Quadratic bezier&#8211;quadratic bezier relationship");

const rs = new Relationship();
// const redStrokeStyle = { stroke: color("red", 0.75), strokeWidth: 4 };
// const blueStrokeStyle = { stroke: color("blue", 0.75), strokeWidth: 4 };
// const purpleStrokeStyle = { stroke: color("purple", 0.75), strokeWidth: 4 };
// const purpleFillStyle = { fill: color("purple", 0.75) };

{
    tpl.addSection("Equal");
    {
        const card = tpl.addCard({ title: "equal" });
        const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
        view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
        view.startInteractive();
        const quadraticBezier1 = new QuadraticBezier([2, -10], [2, 10], [3, 1]);
        const quadraticBezier2 = new QuadraticBezier([-30, -4], [20, 6], [20, 10]);
        console.log(quadraticBezier1.getPolynomial());
        console.log(Polynomial.monic(quadraticBezier1.getImplicitFunctionCoefs()));
        console.log(quadraticBezier2.getPolynomial());
        console.log(Polynomial.monic(quadraticBezier2.getImplicitFunctionCoefs()));
        view.add(new ViewElement(quadraticBezier1, { interactMode: ViewElementInteractMode.None, ...strokeOnly("red") }));
        view.add(new ViewElement(quadraticBezier2, { interactMode: ViewElementInteractMode.None, ...strokeOnly("blue") }));
        trileanResult(card, quadraticBezier1, quadraticBezier2, rs.equal(quadraticBezier1, quadraticBezier2));
    }
}
{
    tpl.addSection("Separate");
    {
        const card = tpl.addCard({ title: "separate-on same curve" });
        const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
        view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
        view.startInteractive();
        const quadraticBezier = g.QuadraticBezier([10, 0], [-10, 0], [0, -10]);
        const quadraticBezier1 = quadraticBezier.portionOfExtend(-0.1, 0.4);
        const quadraticBezier2 = quadraticBezier.portionOfExtend(0.6, 1.1);
        view.add(new ViewElement(quadraticBezier1, false, redStrokeStyle));
        view.add(new ViewElement(quadraticBezier2, false, blueStrokeStyle));
        const result = rs.separate(quadraticBezier1, quadraticBezier2);
        card.setDescription("markdown", "Result: " + result.toString());
    }
    {
        const card = tpl.addCard({ title: "separate-not on same curve" });
        const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
        view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
        view.startInteractive();
        const quadraticBezier1 = g.QuadraticBezier([10, 0], [-10, 0], [0, -10]);
        const quadraticBezier2 = g.QuadraticBezier([-2, 0], [10, 2], [15, -2]);
        view.add(new ViewElement(quadraticBezier1, false, redStrokeStyle));
        view.add(new ViewElement(quadraticBezier2, false, blueStrokeStyle));
        const result = rs.separate(quadraticBezier1, quadraticBezier2);
        card.setDescription("markdown", "Result: " + result.toString());
    }
}
{
    tpl.addSection("Merge");
    {
        const card = tpl.addCard("merge-overlap", "", Utility.uuid());
        const view = new View(g, {}, new CanvasRenderer(card.canvas, g, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
        view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
        view.startInteractive();
        const quadraticBezier = g.QuadraticBezier([10, 0], [-10, 0], [0, -10]);
        const quadraticBezier1 = quadraticBezier.portionOfExtend(-0.1, 0.4);
        const quadraticBezier2 = quadraticBezier.portionOfExtend(0.6, 1.1);
        const group = g.Group();
        view.add(new ViewElement(group, false, purpleStrokeStyle));
        view.add(new ViewElement(quadraticBezier1, false, redStrokeStyle));
        view.add(new ViewElement(quadraticBezier2, false, blueStrokeStyle));
        const result = rs.merge(quadraticBezier1, quadraticBezier2);
        group.items = result;
        card.setDescription("markdown", "Result: " + result.map(p => `<p>${p.toString()}</p>`).join(""));
    }
    {
        const card = tpl.addCard("merge-contain", "", Utility.uuid());
        const view = new View(g, {}, new CanvasRenderer(card.canvas, g, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
        view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
        view.startInteractive();
        const arc1 = g.Arc.fromCenterPointAndStartEndAnglesEtc([0, -10], 10, 5, Maths.PI / 2, -Maths.PI / 2, false, 0);
        const arc2 = g.Arc.fromCenterPointAndStartEndAnglesEtc([0, -10], 10, 5, -Maths.PI / 3, Maths.PI / 3, true, 0);
        const group = g.Group();
        view.add(new ViewElement(group, false, purpleStrokeStyle));
        view.add(new ViewElement(arc1, false, redStrokeStyle));
        view.add(new ViewElement(arc2, false, blueStrokeStyle));
        const result = rs.merge(arc1, arc2);
        group.items = result;
        card.setDescription("markdown", "Result: " + result.map(p => `<p>${p.toString()}</p>`).join(""));
    }
    {
        const card = tpl.addCard("merge-equal", "", Utility.uuid());
        const view = new View(g, {}, new CanvasRenderer(card.canvas, g, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
        view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
        view.startInteractive();
        const arc1 = g.Arc.fromCenterPointAndStartEndAnglesEtc([0, -10], 10, 5, Maths.PI / 2, -Maths.PI / 2, false, 0);
        const arc2 = g.Arc.fromCenterPointAndStartEndAnglesEtc([0, -10], 10, 5, Maths.PI / 2, -Maths.PI / 2, false, 0);
        const group = g.Group();
        view.add(new ViewElement(group, false, purpleStrokeStyle));
        view.add(new ViewElement(arc1, false, redStrokeStyle));
        view.add(new ViewElement(arc2, false, blueStrokeStyle));
        const result = rs.merge(arc1, arc2);
        group.items = result;
        card.setDescription("markdown", "Result: " + result.map(p => `<p>${p.toString()}</p>`).join(""));
    }
}
{
    tpl.addSection("Cross");
    {
        const card = tpl.addCard("cross-1 point", "", Utility.uuid());
        const view = new View(g, {}, new CanvasRenderer(card.canvas, g, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
        view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
        view.startInteractive();
        const quadraticBezier1 = g.QuadraticBezier([2, -10], [2, 10], [2, 1]);
        const quadraticBezier2 = g.QuadraticBezier([-30, -4], [20, 6], [40, 10]);
        const group = g.Group();
        view.add(new ViewElement(group, false, purpleFillStyle));
        view.add(new ViewElement(quadraticBezier1, false, redStrokeStyle));
        view.add(new ViewElement(quadraticBezier2, false, blueStrokeStyle));
        const result = rs.cross(quadraticBezier1, quadraticBezier2);
        group.items = result;
        card.setDescription("markdown", "Result: <br>" + result.map(p => `<p>${p.toString()}</p>`).join(""));
    }
    {
        const card = tpl.addCard("cross-2 points", "", Utility.uuid());
        const view = new View(g, {}, new CanvasRenderer(card.canvas, g, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
        view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
        view.startInteractive();
        const arc1 = g.Arc.fromCenterPointAndStartEndAnglesEtc([0, -10], 10, 5, Maths.PI, -Maths.PI / 4, true, 0);
        const arc2 = g.Arc.fromCenterPointAndStartEndAnglesEtc([-10, -10], 10, 5, Maths.PI, -Maths.PI / 2, false, Maths.PI / 4);
        const group = g.Group();
        view.add(new ViewElement(group, false, purpleFillStyle));
        view.add(new ViewElement(arc1, false, redStrokeStyle));
        view.add(new ViewElement(arc2, false, blueStrokeStyle));
        const result = rs.cross(arc1, arc2);
        group.items = result;
        card.setDescription("markdown", "Result: <br>" + result.map(p => `<p>${p.toString()}</p>`).join(""));
    }
    {
        const card = tpl.addCard("cross-3 points", "", Utility.uuid());
        const view = new View(g, {}, new CanvasRenderer(card.canvas, g, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
        view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
        view.startInteractive();
        const arc1 = g.Arc.fromCenterPointAndStartEndAnglesEtc([0, -10], 10, 5, Maths.PI, (3 * Maths.PI) / 4, true, 0);
        const arc2 = g.Arc.fromCenterPointAndStartEndAnglesEtc([0, -10], 10, 5, Maths.PI, -Maths.PI / 2, false, Maths.PI / 4);
        const group = g.Group();
        view.add(new ViewElement(group, false, purpleFillStyle));
        view.add(new ViewElement(arc1, false, redStrokeStyle));
        view.add(new ViewElement(arc2, false, blueStrokeStyle));
        const result = rs.cross(arc1, arc2);
        group.items = result;
        card.setDescription("markdown", "Result: <br>" + result.map(p => `<p>${p.toString()}</p>`).join(""));
    }
    {
        const card = tpl.addCard("cross-4 points", "", Utility.uuid());
        const view = new View(g, {}, new CanvasRenderer(card.canvas, g, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
        view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
        view.startInteractive();
        const arc1 = g.Arc.fromCenterPointAndStartEndAnglesEtc([0, -10], 10, 5, Maths.PI, (3 * Maths.PI) / 4, true, 0);
        const arc2 = g.Arc.fromCenterPointAndStartEndAnglesEtc([0, -10], 10, 5, Maths.PI, (-2 * Maths.PI) / 3, false, Maths.PI / 4);
        const group = g.Group();
        view.add(new ViewElement(group, false, purpleFillStyle));
        view.add(new ViewElement(arc1, false, redStrokeStyle));
        view.add(new ViewElement(arc2, false, blueStrokeStyle));
        const result = rs.cross(arc1, arc2);
        group.items = result;
        card.setDescription("markdown", "Result: <br>" + result.map(p => `<p>${p.toString()}</p>`).join(""));
    }
}
{
    tpl.addSection("Touch");
    {
        const card = tpl.addCard("touch-only touch", "", Utility.uuid());
        const view = new View(g, {}, new CanvasRenderer(card.canvas, g, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
        view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
        view.startInteractive();
        const arc1 = g.Arc.fromCenterPointAndStartEndAnglesEtc([-10, 0], 10, 5, Maths.PI / 2, -Maths.PI / 4, false, 0);
        const arc2 = g.Arc.fromCenterPointAndStartEndAnglesEtc([10, 0], 10, 5, (4 * Maths.PI) / 3, -Maths.PI / 3, false, 0);
        const group = g.Group();
        view.add(new ViewElement(group, false, purpleFillStyle));
        view.add(new ViewElement(arc1, false, redStrokeStyle));
        view.add(new ViewElement(arc2, false, blueStrokeStyle));
        const result = rs.touch(arc1, arc2);
        group.items = result;
        card.setDescription("markdown", "Result: <br>" + result.map(p => `<p>${p.toString()}</p>`).join(""));
    }
    {
        const card = tpl.addCard("touch-touch and cross", "", Utility.uuid());
        const view = new View(g, {}, new CanvasRenderer(card.canvas, g, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
        view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
        view.startInteractive();
        const arc1 = g.Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 4, false, 0);
        const arc2 = g.Arc.fromCenterPointAndStartEndAnglesEtc([5, 0], 5, 5, (4 * Maths.PI) / 3, -Maths.PI / 3, false, 0);
        const group = g.Group();
        view.add(new ViewElement(group, false, purpleFillStyle));
        view.add(new ViewElement(arc1, false, redStrokeStyle));
        view.add(new ViewElement(arc2, false, blueStrokeStyle));
        const result = rs.touch(arc1, arc2);
        group.items = result;
        card.setDescription("markdown", "Result: <br>" + result.map(p => `<p>${p.toString()}</p>`).join(""));
    }
}
{
    tpl.addSection("Block/BlockedBy");
    {
        const card = tpl.addCard("block", "", Utility.uuid());
        const view = new View(g, {}, new CanvasRenderer(card.canvas, g, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
        view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
        view.startInteractive();
        const arc1 = g.Arc.fromCenterPointAndStartEndAnglesEtc([-10, 0], 10, 5, Maths.PI / 2, -Maths.PI / 4, false, 0);
        const arc2 = g.Arc.fromCenterPointAndStartEndAnglesEtc([10, 0], 10, 5, Maths.PI, -Maths.PI / 3, false, 0);
        const group = g.Group();
        view.add(new ViewElement(group, false, purpleFillStyle));
        view.add(new ViewElement(arc1, false, redStrokeStyle));
        view.add(new ViewElement(arc2, false, blueStrokeStyle));
        const result = rs.block(arc1, arc2);
        group.items = result;
        card.setDescription("markdown", "Result: <br>" + result.map(p => `<p>${p.toString()}</p>`).join(""));
    }
}
{
    tpl.addSection("Extend");
    {
        const card = tpl.addCard("extend-1 point", "", Utility.uuid());
        const view = new View(g, {}, new CanvasRenderer(card.canvas, g, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
        view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
        view.startInteractive();
        const arc1 = g.Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 4, false, 0);
        const arc2 = g.Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI, -Maths.PI / 4, true, 0);
        const group = g.Group();
        view.add(new ViewElement(group, false, purpleFillStyle));
        view.add(new ViewElement(arc1, false, redStrokeStyle));
        view.add(new ViewElement(arc2, false, blueStrokeStyle));
        const result = rs.extend(arc1, arc2);
        group.items = result;
        card.setDescription("markdown", "Result: <br>" + result.map(p => `<p>${p.toString()}</p>`).join(""));
    }
    {
        const card = tpl.addCard("extend-2 points", "", Utility.uuid());
        const view = new View(g, {}, new CanvasRenderer(card.canvas, g, {}, { density: 10, zoom: 1, yAxisPositiveOnBottom: false }));
        view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
        view.startInteractive();
        const arc1 = g.Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 4, false, 0);
        const arc2 = g.Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 4, true, 0);
        const group = g.Group();
        view.add(new ViewElement(group, false, purpleFillStyle));
        view.add(new ViewElement(arc1, false, redStrokeStyle));
        view.add(new ViewElement(arc2, false, blueStrokeStyle));
        const result = rs.extend(arc1, arc2);
        group.items = result;
        card.setDescription("markdown", "Result: <br>" + result.map(p => `<p>${p.toString()}</p>`).join(""));
    }
}
