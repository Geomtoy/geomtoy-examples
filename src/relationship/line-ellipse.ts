import { Ellipse, Relationship, Line } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import tpl from "../assets/templates/tpl-renderer";
import { arrayResult, trileanResult } from "./_common";

tpl.title("Line-ellipse relationship");

const rs = new Relationship();

{
    tpl.addSection("Separate");
    {
        const card = tpl.addCard({ title: "separate" });
        const line = Line.fromTwoPoints([0, -10], [10, -2])!;
        const ellipse = new Ellipse([-10, 0], 10, 5);
        trileanResult(card, line, ellipse, rs.separate(line, ellipse));
    }
}
{
    tpl.addSection("Contain/ContainedBy");
    {
        const card = tpl.addCard({ title: "contain" });
        const ellipse1 = new Ellipse([0, 0], 20, 10);
        const ellipse2 = new Ellipse([-5, 0], 10, 5);
        trileanResult(card, ellipse1, ellipse2, rs.contain(ellipse1, ellipse2));
    }
    {
        const card = tpl.addCard({ title: "contained by" });
        const ellipse1 = new Ellipse([-5, 0], 10, 5);
        const ellipse2 = new Ellipse([0, 0], 20, 10);
        trileanResult(card, ellipse1, ellipse2, rs.containedBy(ellipse1, ellipse2));
    }
}
{
    tpl.addSection("Intersect");
    {
        const card = tpl.addCard({ title: "1 point Intersect" });
        const ellipse1 = new Ellipse([0, 0], 10, 5);
        const ellipse2 = new Ellipse([0, 3], 5, 2);
        arrayResult(card, ellipse1, ellipse2, rs.intersect(ellipse1, ellipse2));
    }
    {
        const card = tpl.addCard({ title: "2 points Intersect" });
        const ellipse1 = new Ellipse([0, 0], 10, 5);
        const ellipse2 = new Ellipse([-10, 0], 20, 5, Maths.PI / 4);
        arrayResult(card, ellipse1, ellipse2, rs.intersect(ellipse1, ellipse2));
    }
    {
        const card = tpl.addCard({ title: "3 points Intersect" });
        const ellipse1 = new Ellipse([0, 0], 5, 10, Maths.PI / 2);
        const ellipse2 = new Ellipse([0, -5], 10, 5, Maths.PI / 2);
        arrayResult(card, ellipse1, ellipse2, rs.intersect(ellipse1, ellipse2));
    }
    {
        const card = tpl.addCard({ title: "4 points Intersect" });
        const ellipse1 = new Ellipse([0, 2], 10, 5);
        const ellipse2 = new Ellipse([-2, 0], 20, 5, Maths.PI / 4);
        arrayResult(card, ellipse1, ellipse2, rs.intersect(ellipse1, ellipse2));
    }
    {
        const card = tpl.addCard({ title: "squashed ellipse Intersect" });
        const ellipse1 = new Ellipse([0, 0], 0.0002, 5);
        const ellipse2 = new Ellipse([0, 0], 0.0005, 5, Maths.PI / 4);
        arrayResult(card, ellipse1, ellipse2, rs.intersect(ellipse1, ellipse2));
    }
}
{
    tpl.addSection("Strike/Cross");
    {
        const card = tpl.addCard({ title: "strike and cross" });
        const ellipse1 = new Ellipse([0, 0], 10, 5);
        const ellipse2 = new Ellipse([5, 0], 10, 5, Maths.PI / 4);
        arrayResult(card, ellipse1, ellipse2, rs.strike(ellipse1, ellipse2));
    }
}
{
    tpl.addSection("Contact/Touch");
    {
        const card = tpl.addCard({ title: "contact and touch" });
        const ellipse1 = new Ellipse([0, 2.193357483982], 5, 10);
        const ellipse2 = new Ellipse([-10, -10], 10, 5);
        arrayResult(card, ellipse1, ellipse2, rs.contact(ellipse1, ellipse2));
    }
}
{
    tpl.addSection("Coincide");
    {
        const card = tpl.addCard({ title: "coincide" });
        const ellipse1 = new Ellipse([0, 0], 10, 5, 0);
        const ellipse2 = new Ellipse([0, 0], 10, 5, 0);
        arrayResult(card, ellipse1, ellipse2, rs.coincide(ellipse1, ellipse2));
    }
}
