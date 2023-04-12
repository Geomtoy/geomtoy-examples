import { Bezier, LineSegment, Intersection } from "@geomtoy/core";
import { Maths, Utility } from "@geomtoy/util";
import { View, ViewElement, CanvasRenderer } from "@geomtoy/view";
import tpl from "../../assets/templates/tpl-renderer";
import { arrayResult, trileanResult } from "./_common";

tpl.title("Line segment-line segment intersection");

const inter = new Intersection();
{
    tpl.addSection("Equal");
    {
        const card = tpl.addCard({ title: "equal" });
        const lineSegment1 = new LineSegment([-5, -5], [5, 5]);
        const lineSegment2 = new LineSegment([5, 5], [-5, -5]);
        trileanResult(card, lineSegment1, lineSegment2, inter.equal(lineSegment1, lineSegment2));
    }
}
{
    tpl.addSection("Separate");
    {
        const card = tpl.addCard({ title: "on same trajectory separate" });
        const lineSegment1 = new LineSegment([-4, -4], [0, 0]);
        const lineSegment2 = new LineSegment([2, 2], [7, 7]);
        trileanResult(card, lineSegment1, lineSegment2, inter.separate(lineSegment1, lineSegment2));
    }
    {
        const card = tpl.addCard({ title: "not on same trajectory separate" });
        const lineSegment1 = new LineSegment([0, -2], [10, 5]);
        const lineSegment2 = new LineSegment([5, 5], [-5, -5]);
        trileanResult(card, lineSegment1, lineSegment2, inter.separate(lineSegment1, lineSegment2));
    }
}
{
    tpl.addSection("Intersect");
    {
        const card = tpl.addCard({ title: "intersect" });
        const lineSegment1 = new LineSegment([-4, -4], [4, 4]);
        const lineSegment2 = new LineSegment([-5, 2], [7, -7]);
        arrayResult(card, lineSegment1, lineSegment2, inter.intersect(lineSegment1, lineSegment2));
    }
}
{
    tpl.addSection("Strike/Cross");
    {
        const card = tpl.addCard({ title: "at end strike" });
        const lineSegment1 = new LineSegment([-10, -10], [10, 10]);
        const lineSegment2 = new LineSegment([-10, -10], [-10, 10]);
        arrayResult(card, lineSegment1, lineSegment2, inter.strike(lineSegment1, lineSegment2));
    }
    {
        const card = tpl.addCard({ title: "not at end strike = cross" });
        const lineSegment1 = new LineSegment([-10, -10], [10, 10]);
        const lineSegment2 = new LineSegment([10, -10], [-10, 10]);
        arrayResult(card, lineSegment1, lineSegment2, inter.cross(lineSegment1, lineSegment2));
    }
}
{
    tpl.addSection("Block/BlockedBy");
    {
        const card = tpl.addCard({ title: "block" });
        const lineSegment1 = new LineSegment([-10, -10], [10, 10]);
        const lineSegment2 = new LineSegment([0, 0], [10, 5]);
        arrayResult(card, lineSegment1, lineSegment2, inter.block(lineSegment1, lineSegment2));
    }
    {
        const card = tpl.addCard({ title: "blocked by" });
        const lineSegment1 = new LineSegment([-10, 0], [10, 5]);
        const lineSegment2 = new LineSegment([10, 0], [10, 10]);
        arrayResult(card, lineSegment1, lineSegment2, inter.blockedBy(lineSegment1, lineSegment2));
    }
}
{
    tpl.addSection("Connect");
    {
        const card = tpl.addCard({ title: "connect" });
        const lineSegment1 = new LineSegment([-10, 0], [10, 5]);
        const lineSegment2 = new LineSegment([10, 0], [10, 5]);
        arrayResult(card, lineSegment1, lineSegment2, inter.connect(lineSegment1, lineSegment2));
    }
}
{
    tpl.addSection("Coincide");
    {
        const card = tpl.addCard({ title: "1 point coincide" });
        const lineSegment1 = new LineSegment([0, 0], [10, 5]);
        const lineSegment2 = new LineSegment([0, 0], [-10, -5]);
        arrayResult(card, lineSegment1, lineSegment2, inter.coincide(lineSegment1, lineSegment2));
    }
    {
        const card = tpl.addCard({ title: "1 segment coincide" });
        const lineSegment1 = new LineSegment([-4, -4], [5, 5]);
        const lineSegment2 = new LineSegment([-10, -10], [2, 2]);
        arrayResult(card, lineSegment1, lineSegment2, inter.coincide(lineSegment1, lineSegment2));
    }
    {
        const card = tpl.addCard({ title: "1 segment within coincide" });
        const lineSegment1 = new LineSegment([-4, -4], [5, 5]);
        const lineSegment2 = new LineSegment([0, 0], [2, 2]);
        arrayResult(card, lineSegment1, lineSegment2, inter.coincide(lineSegment1, lineSegment2));
    }
    {
        const card = tpl.addCard({ title: "equal coincide" });
        const lineSegment1 = new LineSegment([0, 0], [10, 5]);
        const lineSegment2 = new LineSegment([10, 5], [0, 0]);
        arrayResult(card, lineSegment1, lineSegment2, inter.coincide(lineSegment1, lineSegment2));
    }
}
