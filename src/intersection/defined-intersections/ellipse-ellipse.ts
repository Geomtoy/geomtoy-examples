import { Ellipse, Intersection } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import tpl from "../../assets/templates/tpl-renderer";
import { arrayResult, trileanResult } from "./_common";

tpl.title("Ellipse-ellipse intersection");

const inter = new Intersection();

{
    tpl.addSection("equal", true);
    {
        const card = tpl.addCard({ title: "equal" });
        const ellipse1 = new Ellipse([0, 0], 5, 10, Maths.PI / 2);
        const ellipse2 = new Ellipse([0, 0], 10, 5);
        trileanResult(card, ellipse1, ellipse2, inter.equal(ellipse1, ellipse2));
    }
}
{
    tpl.addSection("separate", true);
    {
        const card = tpl.addCard({ title: "not containing separate" });
        const ellipse1 = new Ellipse([10, 0], 5, 10);
        const ellipse2 = new Ellipse([-10, 0], 10, 5);
        trileanResult(card, ellipse1, ellipse2, inter.separate(ellipse1, ellipse2));
    }
    {
        const card = tpl.addCard({ title: "containing separate" });
        const ellipse1 = new Ellipse([-2.5, 0], 5, 2.5);
        const ellipse2 = new Ellipse([-5, 0], 10, 5);
        trileanResult(card, ellipse1, ellipse2, inter.separate(ellipse1, ellipse2));
    }
}
{
    tpl.addSection("intersect", true);
    {
        const card = tpl.addCard({ title: "1 point intersect" });
        const ellipse1 = new Ellipse([0, 0], 10, 5);
        const ellipse2 = new Ellipse([0, 3], 5, 2);
        arrayResult(card, ellipse1, ellipse2, inter.intersect(ellipse1, ellipse2));
    }
    {
        const card = tpl.addCard({ title: "2 points intersect" });
        const ellipse1 = new Ellipse([0, 0], 10, 5);
        const ellipse2 = new Ellipse([-10, 0], 20, 5, Maths.PI / 4);
        arrayResult(card, ellipse1, ellipse2, inter.intersect(ellipse1, ellipse2));
    }
    {
        const card = tpl.addCard({ title: "3 points intersect" });
        const ellipse1 = new Ellipse([0, 0], 5, 10, Maths.PI / 2);
        const ellipse2 = new Ellipse([0, -5], 10, 5, Maths.PI / 2);
        arrayResult(card, ellipse1, ellipse2, inter.intersect(ellipse1, ellipse2));
    }
    {
        const card = tpl.addCard({ title: "4 points intersect" });
        const ellipse1 = new Ellipse([0, 2], 10, 5);
        const ellipse2 = new Ellipse([-2, 0], 20, 5, Maths.PI / 4);
        arrayResult(card, ellipse1, ellipse2, inter.intersect(ellipse1, ellipse2));
    }
    {
        const card = tpl.addCard({ title: "squashed ellipse intersect" });
        const ellipse1 = new Ellipse([0, 0], 0.0002, 5);
        const ellipse2 = new Ellipse([0, 0], 0.0005, 5, Maths.PI / 4);
        arrayResult(card, ellipse1, ellipse2, inter.intersect(ellipse1, ellipse2));
    }
}
{
    tpl.addSection("strike/cross", true);
    {
        const card = tpl.addCard({ title: "strike and cross" });
        const ellipse1 = new Ellipse([0, 0], 10, 5);
        const ellipse2 = new Ellipse([5, 0], 10, 5, Maths.PI / 4);
        arrayResult(card, ellipse1, ellipse2, inter.strike(ellipse1, ellipse2));
    }
}
{
    tpl.addSection("contact/touch", true);
    {
        const card = tpl.addCard({ title: "contact and touch" });
        const ellipse1 = new Ellipse([0, 2.193357483982], 5, 10);
        const ellipse2 = new Ellipse([-10, -10], 10, 5);
        arrayResult(card, ellipse1, ellipse2, inter.contact(ellipse1, ellipse2));
    }
}
{
    tpl.addSection("coincide", true);
    {
        const card = tpl.addCard({ title: "equal coincide" });
        const ellipse1 = new Ellipse([0, 0], 10, 5, 0);
        const ellipse2 = new Ellipse([0, 0], 10, 5, 0);
        arrayResult(card, ellipse1, ellipse2, inter.coincide(ellipse1, ellipse2));
    }
}
