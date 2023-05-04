import { Arc, Intersection } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import tpl from "../../assets/templates/tpl-renderer";
import { arrayResult, trileanResult } from "./_common";

tpl.title("Arc-arc intersection");

const inter = new Intersection();

{
    tpl.addSection("equal", true);
    {
        const card = tpl.addCard({ title: "equal" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 6, false);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 6, false);
        trileanResult(card, arc1, arc2, inter.equal(arc1, arc2));
    }
}
{
    tpl.addSection("separate", true);
    {
        const card = tpl.addCard({ title: "on same trajectory separate" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, (3 * Maths.PI) / 4, -Maths.PI / 3, true);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 4, -Maths.PI / 6, false);
        trileanResult(card, arc1, arc2, inter.separate(arc1, arc2));
    }
    {
        const card = tpl.addCard({ title: "not on same trajectory separate" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, (3 * Maths.PI) / 4, -Maths.PI / 3, true);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([5, 5], 10, 5, Maths.PI / 4, -Maths.PI / 6, true);
        trileanResult(card, arc1, arc2, inter.separate(arc1, arc2));
    }
}
{
    tpl.addSection("intersect", true);
    {
        const card = tpl.addCard({ title: "1 point intersect" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, (4 * Maths.PI) / 3, -Maths.PI / 4, false, Maths.PI / 3);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([-10, -10], 10, 5, 0, Maths.PI, true, Maths.PI / 5);
        arrayResult(card, arc1, arc2, inter.intersect(arc1, arc2));
    }
    {
        const card = tpl.addCard({ title: "2 points intersect" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, (3 * Maths.PI) / 4, -Maths.PI / 3, true, Maths.PI / 2);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 4, -Maths.PI / 6, true);
        arrayResult(card, arc1, arc2, inter.intersect(arc1, arc2));
    }
    {
        const card = tpl.addCard({ title: "3 points intersect" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 20, 5, 0, -Maths.PI / 2, true, Maths.PI / 3);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([-2, -2], 20, 5, Maths.PI / 4, -Maths.PI / 6, true);
        arrayResult(card, arc1, arc2, inter.intersect(arc1, arc2));
    }
    {
        const card = tpl.addCard({ title: "4 points intersect" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 5, 15, -Maths.PI / 2, (-2 * Maths.PI) / 3, true);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([2, 2], 20, 5, Maths.PI / 4, -Maths.PI / 6, true);
        arrayResult(card, arc1, arc2, inter.intersect(arc1, arc2));
    }
}
{
    tpl.addSection("strike/cross", true);
    {
        const card = tpl.addCard({ title: "at end strike" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, (4 * Maths.PI) / 3, -Maths.PI / 4, false);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([-10, -10], 10, 5, 0, Maths.PI, true, Maths.PI / 2);
        arrayResult(card, arc1, arc2, inter.strike(arc1, arc2));
    }
    {
        const card = tpl.addCard({ title: "not at end strike = cross" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, (4 * Maths.PI) / 3, -Maths.PI / 4, false);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([-10, -10], 10, 5, Maths.PI / 2, Maths.PI, false, Maths.PI / 2);
        arrayResult(card, arc1, arc2, inter.cross(arc1, arc2));
    }
}
{
    tpl.addSection("contact/touch", true);
    {
        const card = tpl.addCard({ title: "at end contact" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([-10, 0], 10, 5, Maths.PI / 2, 0, false);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([10, 0], 10, 5, (4 * Maths.PI) / 3, -Maths.PI / 3, false);
        arrayResult(card, arc1, arc2, inter.contact(arc1, arc2));
    }
    {
        const card = tpl.addCard({ title: "not at end contact = touch" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([0, 2.193357483982], 5, 10, (4 * Maths.PI) / 3, -Maths.PI / 4, false, Maths.PI / 2);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([-10, -10], 10, 5, Maths.PI / 2, Maths.PI, false, Maths.PI / 2);
        arrayResult(card, arc1, arc2, inter.intersect(arc1, arc2));
    }
}
{
    tpl.addSection("block", true);
    {
        const card = tpl.addCard({ title: "block" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([-10, 0], 10, 5, Maths.PI / 2, -Maths.PI / 4, false);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([10, 0], 10, 5, Maths.PI, -Maths.PI / 3, false);
        arrayResult(card, arc1, arc2, inter.block(arc1, arc2));
    }
}
{
    tpl.addSection("blockedBy", true);
    {
        const card = tpl.addCard({ title: "blocked by" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([0, 5], 10, 5, Maths.PI, -Maths.PI / 2, false);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([-10, 0], 10, 5, Maths.PI / 2, -Maths.PI / 4, false);
        arrayResult(card, arc1, arc2, inter.blockedBy(arc1, arc2));
    }
}
{
    tpl.addSection("connect", true);
    {
        const card = tpl.addCard({ title: "strike connect" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([-10, 0], 10, 5, Maths.PI / 2, -Maths.PI / 4, false);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([0, 5], 10, 5, Maths.PI, -Maths.PI / 2, false);
        arrayResult(card, arc1, arc2, inter.connect(arc1, arc2));
    }
    {
        const card = tpl.addCard({ title: "contact connect" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([-11, 0], 10, 5, 0, -Maths.PI / 2, false);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([-11, 0], 10, 10, Maths.PI / 2, 0, false);
        arrayResult(card, arc1, arc2, inter.connect(arc1, arc2));
    }
}
{
    tpl.addSection("coincide", true);
    {
        const card = tpl.addCard({ title: "1 point coincide" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 4, false);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI, -Maths.PI / 4, true);
        arrayResult(card, arc1, arc2, inter.coincide(arc1, arc2));
    }
    {
        const card = tpl.addCard({ title: "2 points coincide" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 4, false);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 4, true);
        arrayResult(card, arc1, arc2, inter.coincide(arc1, arc2));
    }
    {
        const card = tpl.addCard({ title: "1 segment coincide" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 3, true);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 4, -Maths.PI / 2, false);
        arrayResult(card, arc1, arc2, inter.coincide(arc1, arc2));
    }
    {
        const card = tpl.addCard({ title: "2 segments coincide" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 3, -Maths.PI / 3, true);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, (3 * Maths.PI) / 4, -Maths.PI / 2, false);
        arrayResult(card, arc1, arc2, inter.coincide(arc1, arc2));
    }
    {
        const card = tpl.addCard({ title: "1 segment within coincide" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 2, false);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, -Maths.PI / 3, Maths.PI / 3, true);
        arrayResult(card, arc1, arc2, inter.coincide(arc1, arc2));
    }
    {
        const card = tpl.addCard({ title: "equal coincide" });
        const arc1 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 2, false);
        const arc2 = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 2, false);
        arrayResult(card, arc1, arc2, inter.coincide(arc1, arc2));
    }
}
