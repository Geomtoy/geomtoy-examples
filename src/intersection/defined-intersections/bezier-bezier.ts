import { Bezier, Intersection } from "@geomtoy/core";
import tpl from "../../assets/templates/tpl-renderer";
import { arrayResult, trileanResult } from "./_common";

tpl.title("Bezier-bezier intersection");

const inter = new Intersection();

{
    tpl.addSection("equal", true);
    {
        const card = tpl.addCard({ title: "common bezier equal" });
        const bezier1 = new Bezier([0, 0], [10, 20], [10, 5], [-10, -10]);
        const bezier2 = new Bezier([0, 0], [10, 20], [10, 5], [-10, -10]);
        trileanResult(card, bezier1, bezier2, inter.equal(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "triple line bezier equal" });
        const bezier1 = new Bezier([0, 0], [20, 20], [10, 10], [-10, -10]);
        const bezier2 = new Bezier([0, 0], [20, 20], [30, 30], [-20, -20]);
        trileanResult(card, bezier1, bezier2, inter.equal(bezier1, bezier2));
    }
}
{
    tpl.addSection("separate", true);
    {
        const card = tpl.addCard({ title: "on same trajectory separate" });
        const bezier1 = new Bezier([-10, -20], [20, 30], [30, 30], [-20, -50]);
        const bezier2 = bezier1.portionOfExtend(-0.01, -0.05);
        trileanResult(card, bezier1, bezier2, inter.separate(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "triple line bezier separate" });
        const bezier1 = new Bezier([10, 10], [20, 20], [-10, -10], [30, 30]);
        const bezier2 = new Bezier([-10, -10], [-20, -20], [10, 10], [-40, -40]);
        trileanResult(card, bezier1, bezier2, inter.separate(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "not on same trajectory separate" });
        const bezier1 = new Bezier([0, 0], [-10, 20], [10, 25], [-10, 2]);
        const bezier2 = new Bezier([2, -10], [66, 85], [50, 5], [0, -30]);
        trileanResult(card, bezier1, bezier2, inter.separate(bezier1, bezier2));
    }
}
{
    tpl.addSection("intersect", true);
    {
        const card = tpl.addCard({ title: "1 point intersect" });
        const bezier1 = new Bezier([6, -5], [-2, 10], [16, 6], [-19, -6]);
        const bezier2 = new Bezier([11, 7], [1, -6], [2, 13], [-19, -17]);
        arrayResult(card, bezier1, bezier2, inter.intersect(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "2 points intersect" });
        const bezier1 = new Bezier([19, 12], [-13, -7], [-1, -6], [-13, -4]);
        const bezier2 = new Bezier([-16, 19], [-2, -2], [4, -5], [-13, -13]);
        arrayResult(card, bezier1, bezier2, inter.intersect(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "3 points intersect" });
        const bezier1 = new Bezier([-13, 7], [2, 12], [-8, -18], [-2, 19]);
        const bezier2 = new Bezier([-10, -6], [-9, 8], [-3, 12], [-20, -8]);
        arrayResult(card, bezier1, bezier2, inter.intersect(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "4 points intersect" });
        const bezier1 = new Bezier([7, 19], [13, -2], [16, 19], [-18, -17]);
        const bezier2 = new Bezier([3, 15], [10, -10], [20, -17], [-21, 14]);
        arrayResult(card, bezier1, bezier2, inter.intersect(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "5 points intersect" });
        const bezier1 = new Bezier([-14, 4], [1, 7], [6, 2], [-15, 24]);
        const bezier2 = new Bezier([-15, 1], [5, 7], [20, 23], [-27, 17]);
        arrayResult(card, bezier1, bezier2, inter.intersect(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "6 points intersect" });
        const bezier1 = new Bezier([-15, -15], [9, 8], [34, 7], [-52, -19]);
        const bezier2 = new Bezier([0, -11], [3, -16], [-24, 13], [-4, 4]);
        arrayResult(card, bezier1, bezier2, inter.intersect(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "7 points intersect" });
        const bezier1 = new Bezier([9, 6], [-2, -5], [-19, -3], [17, 20]);
        const bezier2 = new Bezier([-8, 2], [8, 3], [19, -13], [-17, 17]);
        arrayResult(card, bezier1, bezier2, inter.intersect(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "8 points intersect" });
        const bezier1 = new Bezier([12, 6], [-11, 3], [-32, 52], [44, -44]);
        const bezier2 = new Bezier([-12, -4], [14, -3], [47, 53], [-26, -37]);
        arrayResult(card, bezier1, bezier2, inter.intersect(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "9 points intersect" });
        const bezier1 = new Bezier([-12, 11], [15, -18], [16, -55], [-21, 78]);
        const bezier2 = new Bezier([9, 18], [-10, -10], [-57, -26], [57, 36]);
        arrayResult(card, bezier1, bezier2, inter.intersect(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "degenerate to line segment and line segment intersect" });
        const bezier1 = new Bezier([-60, -60], [60, 60], [-20, -20], [20, 20]);
        const bezier2 = new Bezier([-60, 60], [60, -60], [-20, 20], [20, -20]);
        arrayResult(card, bezier1, bezier2, inter.intersect(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "degenerate to line segment and quadratic bezier intersect" });
        const bezier1 = new Bezier([-60, -60], [60, 60], [-20, -20], [20, 20]);
        const bezier2 = new Bezier([-10, -20], [20, 10], [0, 10], [10, 20]);
        arrayResult(card, bezier1, bezier2, inter.intersect(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "degenerate to quadratic bezier and quadratic bezier intersect" });
        const bezier1 = new Bezier([-10, -20], [20, 10], [0, 10], [10, 20]);
        const bezier2 = new Bezier([-10, 10], [20, -20], [0, 20], [10, 10]);
        arrayResult(card, bezier1, bezier2, inter.intersect(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "on same trajectory intersect and self-intersecting " });
        const bezier1 = new Bezier([5, -5], [5, -11], [-16, 7], [25, 13]);
        const bezier2 = bezier1.portionOfExtend(0, -0.1);
        arrayResult(card, bezier1, bezier2, inter.intersect(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "triple line bezier and triple line bezier intersect" });
        const bezier1 = new Bezier([-5, 10], [5, -10], [2, -4], [0, 0]);
        const bezier2 = new Bezier([1, 2], [5, 10], [-10, -20], [0, 0]);
        arrayResult(card, bezier1, bezier2, inter.intersect(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "common bezier and triple line bezier intersect" });
        const bezier1 = new Bezier([5, -5], [5, -11], [-16, 7], [25, 13]);
        const bezier2 = new Bezier([1, 2], [5, 10], [-10, -20], [0, 0]);
        arrayResult(card, bezier1, bezier2, inter.intersect(bezier1, bezier2));
    }
}
{
    tpl.addSection("strike/cross", true);
    {
        const card = tpl.addCard({ title: "at end strike" });
        const bezier1 = new Bezier([6, -5], [-2, 20], [16, 6], [-19, -6]);
        const bezier2 = new Bezier([6, -5], [1, -6], [2, 13], [-19, -17]);
        arrayResult(card, bezier1, bezier2, inter.strike(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "not at end strike = cross" });
        const bezier1 = new Bezier([6, -5], [-2, 10], [16, 6], [-19, -6]);
        const bezier2 = new Bezier([11, 7], [1, -6], [2, 13], [-19, -17]);
        arrayResult(card, bezier1, bezier2, inter.cross(bezier1, bezier2));
    }
}
{
    tpl.addSection("contact/touch", true);
    {
        const card = tpl.addCard({ title: "at end contact" });
        const bezier1 = new Bezier([0, 0], [10, 10], [0, 10], [10, 0]);
        const bezier2 = new Bezier([0, 0], [-10, -10], [0, -10], [-10, 0]);
        arrayResult(card, bezier1, bezier2, inter.contact(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "not at end contact = touch" });
        const bezier1 = new Bezier([-10, -10], [-10, 10], [0, -10], [0, 10]);
        const bezier2 = new Bezier([5, -10], [5, 10], [-5, -10], [-5, 10]);
        arrayResult(card, bezier1, bezier2, inter.touch(bezier1, bezier2));
    }
}
{
    tpl.addSection("block/blockedBy", true);
    {
        const card = tpl.addCard({ title: "common block" });
        const bezier1 = new Bezier([0, 0], [10, 10], [0, 10], [10, 0]).portionOfExtend(-0.1, 1.1);
        const bezier2 = new Bezier([0, 0], [-10, -10], [0, -10], [-10, 0]);
        arrayResult(card, bezier1, bezier2, inter.block(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "block and self-intersecting" });
        const bezier = new Bezier([5, -5], [5, -5], [-16, 7], [25, 13]);
        const bezier1 = bezier.portionOfExtend(-0.2, 0.9);
        const bezier2 = bezier.portionOfExtend(1, 1.1);
        arrayResult(card, bezier1, bezier2, inter.block(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "common blocked by" });
        const bezier1 = new Bezier([-10, -10], [-10, 10], [0, -10], [0, 10]).portionOfExtend(0, 0.5);
        const bezier2 = new Bezier([5, -10], [5, 10], [-5, -10], [-5, 10]);
        arrayResult(card, bezier1, bezier2, inter.blockedBy(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "blocked by and self-intersecting" });
        const bezier = new Bezier([5, -5], [5, -5], [-16, 7], [25, 13]);
        const bezier1 = bezier.portionOfExtend(1, 1.1);
        const bezier2 = bezier.portionOfExtend(-0.2, 0.9);
        arrayResult(card, bezier1, bezier2, inter.blockedBy(bezier1, bezier2));
    }
}
{
    tpl.addSection("connect", true);
    {
        const card = tpl.addCard({ title: "contact and connect" });
        const bezier1 = new Bezier([-10, -10], [-10, 10], [0, -10], [0, 10]).portionOfExtend(0, 0.5);
        const bezier2 = new Bezier([5, -10], [5, 10], [-5, -10], [-5, 10]).portionOfExtend(0, 0.5);
        arrayResult(card, bezier1, bezier2, inter.connect(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "strike and connect" });
        const bezier1 = new Bezier([0, 0], [-10, 10], [0, -10], [0, 10]);
        const bezier2 = new Bezier([0, 0], [5, 10], [-5, -10], [-5, 10]);
        arrayResult(card, bezier1, bezier2, inter.connect(bezier1, bezier2));
    }
}
{
    tpl.addSection("coincide", true);
    {
        const card = tpl.addCard({ title: "1 point coincide" });
        const bezier1 = new Bezier([-16, 22], [9, 8], [34, -19], [-23, -16]);
        const bezier2 = bezier1.portionOfExtend(0, -0.1);
        arrayResult(card, bezier1, bezier2, inter.coincide(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "1 point coincide and self-intersecting" });
        const bezier1 = new Bezier([-18, 3], [-18, 3], [-36, 29], [6, -7]);
        const bezier2 = bezier1.portionOfExtend(0, -0.1);
        arrayResult(card, bezier1, bezier2, inter.coincide(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "equal coincide and self-intersecting" });
        const bezier1 = new Bezier([-18, 3], [-18, 3], [-36, 29], [6, -7]);
        const bezier2 = bezier1.portionOfExtend(0, 1);
        arrayResult(card, bezier1, bezier2, inter.coincide(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "segment coincide" });
        const bezier1 = new Bezier([-10, -10], [-10, 10], [0, -10], [0, 10]);
        const bezier2 = bezier1.portionOfExtend(-0.1, 0.5);
        arrayResult(card, bezier1, bezier2, inter.coincide(bezier1, bezier2));
    }
    {
        const card = tpl.addCard({ title: "segment coincide and self-intersecting" });
        const bezier1 = new Bezier([-16, 22], [9, 8], [34, -19], [-23, -16]);
        const bezier2 = bezier1.portionOfExtend(-0.02, 0.8);
        arrayResult(card, bezier1, bezier2, inter.coincide(bezier1, bezier2));
    }
}
