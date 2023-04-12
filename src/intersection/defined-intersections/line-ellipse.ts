import { Ellipse, Intersection, Line } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import tpl from "../../assets/templates/tpl-renderer";
import { arrayResult, trileanResult } from "./_common";

tpl.title("Line-ellipse intersection");

const inter = new Intersection();

{
    tpl.addSection("separate", true);
    {
        const card = tpl.addCard({ title: "separate" });
        const line = Line.fromTwoPoints([0, -10], [10, -2])!;
        const ellipse = new Ellipse([-10, 0], 10, 5);
        trileanResult(card, line, ellipse, inter.separate(line, ellipse));
    }
}
{
    tpl.addSection("intersect", true);
    {
        const card = tpl.addCard({ title: "1 point Intersect" });
        const line = Line.fromTwoPoints([0, 0], [0, -20])!;
        const ellipse = new Ellipse([-10, 0], 10, 5);
        arrayResult(card, line, ellipse, inter.intersect(line, ellipse));
    }
    {
        const card = tpl.addCard({ title: "2 points Intersect" });
        const line = Line.fromTwoPoints([0, -10], [10, -2])!;
        const ellipse = new Ellipse([5, 0], 10, 5, Maths.PI / 4);
        arrayResult(card, line, ellipse, inter.intersect(line, ellipse));
    }
}
{
    tpl.addSection("strike/cross", true);
    {
        const card = tpl.addCard({ title: "strike and cross" });
        const line = Line.fromTwoPoints([0, -10], [0, 0])!;
        const ellipse = new Ellipse([5, 0], 10, 5, Maths.PI / 4);
        arrayResult(card, line, ellipse, inter.strike(line, ellipse));
    }
}
{
    tpl.addSection("contact/touch", true);
    {
        const card = tpl.addCard({ title: "contact and touch" });
        const line = Line.fromTwoPoints([0, -10], [10, -10])!;
        const ellipse = new Ellipse([5, 0], 5, 10);
        arrayResult(card, line, ellipse, inter.contact(line, ellipse));
    }
}
