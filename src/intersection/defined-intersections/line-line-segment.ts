import { Bezier, Line, LineSegment, Intersection } from "@geomtoy/core";
import tpl from "../../assets/templates/tpl-renderer";
import { arrayResult, trileanResult } from "./_common";

tpl.title("Line-line segment intersection");

const inter = new Intersection();
{
    tpl.addSection("separate", true);
    {
        const card = tpl.addCard({ title: "separate" });
        const line = new Line([0, 20], 1);
        const lineSegment = new LineSegment([5, 2], [0, 0]);
        trileanResult(card, line, lineSegment, inter.separate(line, lineSegment));
    }
}
{
    tpl.addSection("intersect", true);
    {
        const card = tpl.addCard({ title: "intersect" });
        const line = new Line([0, 0], 1);
        const lineSegment = new LineSegment([-5, 2], [2, -10]);
        arrayResult(card, line, lineSegment, inter.intersect(line, lineSegment));
    }
}
{
    tpl.addSection("strike/cross", true);
    {
        const card = tpl.addCard({ title: "at end strike" });
        const line = new Line([0, 0], 1);
        const lineSegment = new LineSegment([-5, 5], [-5, -5]);
        arrayResult(card, line, lineSegment, inter.intersect(line, lineSegment));
    }
    {
        const card = tpl.addCard({ title: "not at end strike = cross" });
        const line = new Line([0, 0], 1);
        const lineSegment = new LineSegment([-5, 2], [2, -10]);
        arrayResult(card, line, lineSegment, inter.intersect(line, lineSegment));
    }
}
{
    tpl.addSection("block", true);
    {
        const card = tpl.addCard({ title: "block" });
        const line = new Line(0, 0, 1);
        const lineSegment = new LineSegment([-2, 2], [0, 0]);
        arrayResult(card, line, lineSegment, inter.block(line, lineSegment));
    }
}
{
    tpl.addSection("coincide", true);
    {
        const card = tpl.addCard({ title: "coincide" });
        const line = new Line(0, 0, 1);
        const lineSegment = new LineSegment([2, 2], [5, 5]);
        arrayResult(card, line, lineSegment, inter.coincide(line, lineSegment));
    }
}
