import { Circle, Intersection } from "@geomtoy/core";
import tpl from "../../assets/templates/tpl-renderer";
import { arrayResult, trileanResult } from "./_common";

tpl.title("Circle-circle intersection");

const inter = new Intersection();

{
    tpl.addSection("equal", true);
    {
        const card = tpl.addCard({ title: "equal" });
        const circle1 = new Circle([0, 0], 10);
        const circle2 = new Circle([0, 0], 10);
        trileanResult(card, circle1, circle2, inter.equal(circle1, circle2));
    }
}
{
    tpl.addSection("separate", true);
    {
        const card = tpl.addCard({ title: "not containing separate" });
        const circle1 = new Circle([0, 0], 2);
        const circle2 = new Circle([5, 5], 3);
        trileanResult(card, circle1, circle2, inter.separate(circle1, circle2));
    }
    {
        const card = tpl.addCard({ title: "containing separate" });
        const circle1 = new Circle([0, 0], 10);
        const circle2 = new Circle([2, 0], 3);
        trileanResult(card, circle1, circle2, inter.separate(circle1, circle2));
    }
}
{
    tpl.addSection("intersect", true);
    {
        const card = tpl.addCard({ title: "1 point intersect" });
        const circle1 = new Circle([0, 10], 10);
        const circle2 = new Circle([0, 5], 5);
        arrayResult(card, circle1, circle2, inter.intersect(circle1, circle2));
    }
    {
        const card = tpl.addCard({ title: "2 points intersect" });
        const circle1 = new Circle([0, 0], 10);
        const circle2 = new Circle([-10, -10], 10);
        arrayResult(card, circle1, circle2, inter.intersect(circle1, circle2));
    }
}
{
    tpl.addSection("strike/cross", true);
    {
        const card = tpl.addCard({ title: "strike and cross" });
        const circle1 = new Circle([0, 2], 10);
        const circle2 = new Circle([0, -2], 10);
        arrayResult(card, circle1, circle2, inter.strike(circle1, circle2));
    }
}
{
    tpl.addSection("contact/touch", true);
    {
        const card = tpl.addCard({ title: "contact and touch" });
        const circle1 = new Circle([-10, 0], 10);
        const circle2 = new Circle([10, 0], 10);
        arrayResult(card, circle1, circle2, inter.contact(circle1, circle2));
    }
}
{
    tpl.addSection("coincide", true);
    {
        const card = tpl.addCard({ title: "equal coincide" });
        const circle1 = new Circle([0, 0], 10);
        const circle2 = new Circle([0, 0], 10);
        arrayResult(card, circle1, circle2, inter.coincide(circle1, circle2));
    }
}
