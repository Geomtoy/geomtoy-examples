import { Arc, Bezier, Intersection } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import tpl from "../../assets/templates/tpl-renderer";
import { arrayResult, trileanResult } from "./_common";

tpl.title("Bezier-arc intersection");

const inter = new Intersection();

{
    tpl.addSection("equal", true);
}
{
    tpl.addSection("separate", true);
    {
        const card = tpl.addCard({ title: "separate" });
        const bezier = new Bezier([0, 0], [-5, -5], [0, 5], [-4, -2]);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 4, -Maths.PI / 6, false);
        trileanResult(card, bezier, arc, inter.separate(bezier, arc));
    }
}
{
    tpl.addSection("intersect", true);
    {
        const card = tpl.addCard({ title: "1 point intersect" });
        const bezier = new Bezier([19, 12], [-13, -7], [-1, -6], [-13, -4]);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([-10, -10], 10, 5, 0, Maths.PI, true, Maths.PI / 5);
        arrayResult(card, bezier, arc, inter.intersect(bezier, arc));
    }
    {
        const card = tpl.addCard({ title: "2 points intersect" });
        const bezier = new Bezier([19, 12], [-13, -7], [-1, -6], [-13, 4]);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 4, -Maths.PI / 6, true);
        arrayResult(card, bezier, arc, inter.intersect(bezier, arc));
    }
    {
        const card = tpl.addCard({ title: "3 points intersect" });
        const bezier = new Bezier([19, 12], [-13, -7], [-1, -6], [-13, 4]);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([-2, -2], 20, 5, Maths.PI / 4, -Maths.PI / 6, true);
        arrayResult(card, bezier, arc, inter.intersect(bezier, arc));
    }
    {
        const card = tpl.addCard({ title: "4 points intersect" });
        const bezier = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 5, 15, -Maths.PI / 2, (-2 * Maths.PI) / 3, true);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([2, 2], 20, 5, Maths.PI / 4, -Maths.PI / 6, true);
        arrayResult(card, bezier, arc, inter.intersect(bezier, arc));
    }
    {
        const card = tpl.addCard({ title: "5 points intersect" });
        const bezier = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 5, 15, -Maths.PI / 2, (-2 * Maths.PI) / 3, true);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([2, 2], 20, 5, Maths.PI / 4, -Maths.PI / 6, true);
        arrayResult(card, bezier, arc, inter.intersect(bezier, arc));
    }
    {
        const card = tpl.addCard({ title: "6 points intersect" });
        const bezier = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 5, 15, -Maths.PI / 2, (-2 * Maths.PI) / 3, true);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([2, 2], 20, 5, Maths.PI / 4, -Maths.PI / 6, true);
        arrayResult(card, bezier, arc, inter.intersect(bezier, arc));
    }
}
{
    tpl.addSection("strike/cross", true);
    {
        const card = tpl.addCard({ title: "at end strike" });
        const bezier = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, (4 * Maths.PI) / 3, -Maths.PI / 4, false);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([-10, -10], 10, 5, 0, Maths.PI, true, Maths.PI / 2);
        arrayResult(card, bezier, arc, inter.strike(bezier, arc));
    }
    {
        const card = tpl.addCard({ title: "not at end strike = cross" });
        const bezier = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, (4 * Maths.PI) / 3, -Maths.PI / 4, false);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([-10, -10], 10, 5, Maths.PI / 2, Maths.PI, false, Maths.PI / 2);
        arrayResult(card, bezier, arc, inter.cross(bezier, arc));
    }
}
{
    tpl.addSection("contact/touch", true);
    {
        const card = tpl.addCard({ title: "at end contact" });
        const bezier = Arc.fromCenterPointAndStartEndAnglesEtc([-10, 0], 10, 5, Maths.PI / 2, 0, false);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([10, 0], 10, 5, (4 * Maths.PI) / 3, -Maths.PI / 3, false);
        arrayResult(card, bezier, arc, inter.contact(bezier, arc));
    }
    {
        const card = tpl.addCard({ title: "not at end contact = touch" });
        const bezier = Arc.fromCenterPointAndStartEndAnglesEtc([0, 2.193357483982], 5, 10, (4 * Maths.PI) / 3, -Maths.PI / 4, false, Maths.PI / 2);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([-10, -10], 10, 5, Maths.PI / 2, Maths.PI, false, Maths.PI / 2);
        arrayResult(card, bezier, arc, inter.intersect(bezier, arc));
    }
}
{
    tpl.addSection("block", true);
    {
        const card = tpl.addCard({ title: "block" });
        const bezier = Arc.fromCenterPointAndStartEndAnglesEtc([-10, 0], 10, 5, Maths.PI / 2, -Maths.PI / 4, false);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([10, 0], 10, 5, Maths.PI, -Maths.PI / 3, false);
        arrayResult(card, bezier, arc, inter.block(bezier, arc));
    }
}
{
    tpl.addSection("blockedBy", true);
    {
        const card = tpl.addCard({ title: "blocked by" });
        const bezier = Arc.fromCenterPointAndStartEndAnglesEtc([0, 5], 10, 5, Maths.PI, -Maths.PI / 2, false);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([-10, 0], 10, 5, Maths.PI / 2, -Maths.PI / 4, false);
        arrayResult(card, bezier, arc, inter.blockedBy(bezier, arc));
    }
}
{
    tpl.addSection("connect", true);
    {
        const card = tpl.addCard({ title: "strike connect" });
        const bezier = Arc.fromCenterPointAndStartEndAnglesEtc([-10, 0], 10, 5, Maths.PI / 2, -Maths.PI / 4, false);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([0, 5], 10, 5, Maths.PI, -Maths.PI / 2, false);
        arrayResult(card, bezier, arc, inter.connect(bezier, arc));
    }
    {
        const card = tpl.addCard({ title: "contact connect" });
        const bezier = Arc.fromCenterPointAndStartEndAnglesEtc([-11, 0], 10, 5, 0, -Maths.PI / 2, false);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([-11, 0], 10, 10, Maths.PI / 2, 0, false);
        arrayResult(card, bezier, arc, inter.connect(bezier, arc));
    }
}
{
    tpl.addSection("coincide", true);
    {
        const card = tpl.addCard({ title: "1 point coincide" });
        const bezier = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 4, false);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI, -Maths.PI / 4, true);
        arrayResult(card, bezier, arc, inter.coincide(bezier, arc));
    }
    {
        const card = tpl.addCard({ title: "2 points coincide" });
        const bezier = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 4, false);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 4, true);
        arrayResult(card, bezier, arc, inter.coincide(bezier, arc));
    }
    {
        const card = tpl.addCard({ title: "1 segment coincide" });
        const bezier = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 3, true);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 4, -Maths.PI / 2, false);
        arrayResult(card, bezier, arc, inter.coincide(bezier, arc));
    }
    {
        const card = tpl.addCard({ title: "2 segments coincide" });
        const bezier = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 3, -Maths.PI / 3, true);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, (3 * Maths.PI) / 4, -Maths.PI / 2, false);
        arrayResult(card, bezier, arc, inter.coincide(bezier, arc));
    }
    {
        const card = tpl.addCard({ title: "1 segment within coincide" });
        const bezier = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 2, false);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, -Maths.PI / 3, Maths.PI / 3, true);
        arrayResult(card, bezier, arc, inter.coincide(bezier, arc));
    }
    {
        const card = tpl.addCard({ title: "equal coincide" });
        const bezier = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 2, false);
        const arc = Arc.fromCenterPointAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 2, false);
        arrayResult(card, bezier, arc, inter.coincide(bezier, arc));
    }
}
