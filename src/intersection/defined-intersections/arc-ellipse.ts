import { Arc, Ellipse, Intersection } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import tpl from "../../assets/templates/tpl-renderer";
import { arrayResult, trileanResult } from "./_common";

tpl.title("Arc-ellipse intersection");

const inter = new Intersection();

{
    tpl.addSection("equal", true);
    tpl.addMarkdown("always false");
}
{
    tpl.addSection("separate", true);
    {
        const card = tpl.addCard({ title: "separate" });
        const arc = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, (3 * Maths.PI) / 4, -Maths.PI / 3, true);
        const ellipse = new Ellipse([0, 0], 2.5, 5, Maths.PI / 4);
        trileanResult(card, arc, ellipse, inter.separate(arc, ellipse));
    }
}
{
    tpl.addSection("intersect", true);
    {
        const card = tpl.addCard({ title: "1 point intersect" });
        const arc = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, (4 * Maths.PI) / 3, -Maths.PI / 4, false, Maths.PI / 3);
        const ellipse = new Ellipse([5, 0], 10, 5, Maths.PI);
        arrayResult(card, arc, ellipse, inter.intersect(arc, ellipse));
    }
    {
        const card = tpl.addCard({ title: "2 points intersect" });
        const arc = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, (3 * Maths.PI) / 4, -Maths.PI / 3, true, Maths.PI / 2);
        const ellipse = new Ellipse([0, 0], 10, 5, Maths.PI / 4);
        arrayResult(card, arc, ellipse, inter.intersect(arc, ellipse));
    }
    {
        const card = tpl.addCard({ title: "3 points intersect" });
        const arc = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 20, 5, 0, -Maths.PI / 2, true, Maths.PI / 3);
        const ellipse = new Ellipse([-2, -2], 20, 5, Maths.PI / 4);
        arrayResult(card, arc, ellipse, inter.intersect(arc, ellipse));
    }
    {
        const card = tpl.addCard({ title: "4 points intersect" });
        const arc = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 5, 15, -Maths.PI / 2, (-2 * Maths.PI) / 3, true);
        const ellipse = new Ellipse([2, 2], 20, 5, Maths.PI / 4);
        arrayResult(card, arc, ellipse, inter.intersect(arc, ellipse));
    }
}
{
    tpl.addSection("strike/cross", true);
    {
        const card = tpl.addCard({ title: "at end strike" });
        const arc = Arc.fromCenterAndStartEndAnglesEtc([0, -5], 10, 5, Maths.PI, -Maths.PI / 2, false);
        const ellipse = new Ellipse([-10, -10], 10, 5, 0);
        arrayResult(card, arc, ellipse, inter.strike(arc, ellipse));
    }
    {
        const card = tpl.addCard({ title: "not at end strike = cross" });
        const arc = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, (4 * Maths.PI) / 3, -Maths.PI / 4, false);
        const ellipse = new Ellipse([-10, -10], 10, 5, Maths.PI / 2);
        arrayResult(card, arc, ellipse, inter.cross(arc, ellipse));
    }
}
{
    tpl.addSection("contact/touch", true);
    {
        const card = tpl.addCard({ title: "at end contact" });
        const arc = Arc.fromCenterAndStartEndAnglesEtc([-10, 0], 10, 5, Maths.PI / 2, 0, false);
        const ellipse = new Ellipse([10, 0], 10, 5, 0);
        arrayResult(card, arc, ellipse, inter.contact(arc, ellipse));
    }
    {
        const card = tpl.addCard({ title: "not at end contact = touch" });
        const arc = Arc.fromCenterAndStartEndAnglesEtc([0, 2.193357483982], 5, 10, (4 * Maths.PI) / 3, -Maths.PI / 4, false, Maths.PI / 2);
        const ellipse = new Ellipse([-10, -10], 10, 5, Maths.PI / 2);
        arrayResult(card, arc, ellipse, inter.intersect(arc, ellipse));
    }
}
{
    tpl.addSection("block", true);
}
{
    tpl.addSection("blockedBy", true);
    {
        const card = tpl.addCard({ title: "blocked by" });
        const arc = Arc.fromCenterAndStartEndAnglesEtc([-5, 5], 10, 5, 0, -Maths.PI / 2, false);
        const ellipse = new Ellipse([-10, 0], 10, 5, Maths.PI / 2);
        arrayResult(card, arc, ellipse, inter.blockedBy(arc, ellipse));
    }
}
{
    tpl.addSection("connect", true);
}
{
    tpl.addSection("coincide", true);
    {
        const card = tpl.addCard({ title: "1 segment within coincide" });
        const arc = Arc.fromCenterAndStartEndAnglesEtc([0, 0], 10, 5, Maths.PI / 2, -Maths.PI / 2, false);
        const ellipse = new Ellipse([0, 0], 10, 5, 0);
        arrayResult(card, arc, ellipse, inter.coincide(arc, ellipse));
    }
}
