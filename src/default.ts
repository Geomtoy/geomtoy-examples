import { Circle, Geomtoy, Line, LineSegment, Path, Point, Ray, RegularPolygon, Relationship, Triangle, Vector } from "@geomtoy/core";
import { Maths, Utility } from "@geomtoy/util";
import { CanvasRenderer, Style, View, ViewElement } from "@geomtoy/view";
import { newElement } from "./assets/scripts/common";
import tpl from "./assets/templates/tpl-renderer";

tpl.title("Welcome to Geomtoy examples");

tpl.addMarkdown(`
Recommended topics to start with:
`);
tpl.addMarkdown(`
- [Coordinate system](/view/coordinate-system.html)
- [Renderer](/view/renderer.html)
- [Dynamic](/view/coordinate-system.html)
- [Event system](/view/coordinate-system.html)
`);

tpl.addMarkdown(`
Here's a crude playback example(but Geomtoy is not an animation library now.). Click "play" to see it.
`);

const buttonWrapper = newElement(`
    <p class="d-grid gap-1">
    <button class="btn btn-primary">Play</button> 
    </p>
    `);
buttonWrapper.querySelector("button")!.addEventListener("click", function (this: HTMLButtonElement) {
    if (this.innerHTML === "Play") {
        this.disabled = true;
        play().then(() => {
            this.disabled = false;
            this.classList.remove("btn-primary");
            this.classList.add("btn-secondary");
            this.innerHTML = "Reset";
        });
    } else {
        this.disabled = true;
        reset().then(() => {
            this.disabled = false;
            this.classList.remove("btn-secondary");
            this.classList.add("btn-primary");
            this.innerHTML = "Play";
        });
    }
});
tpl.addHtmlElement(buttonWrapper);

const sketchStyle: { style: Partial<Style> } = {
    style: {
        noFill: true,
        stroke: "rgba(77, 77, 77, 0.5)",
        strokeWidth: 1
    }
};
const sketchDashStyle: { style: Partial<Style> } = {
    style: {
        noFill: true,
        stroke: "rgba(77, 77, 77, 0.3)",
        strokeWidth: 1,
        strokeDash: [2]
    }
};
const sketchColoredStyle = function (colorIndex: number) {
    const colors = ["#900", "#090", "#009"];
    return {
        style: {
            noFill: true,
            stroke: `${colors[colorIndex]}`,
            strokeWidth: 1
        } as Partial<Style>
    };
};
const logoStyle: { style: Partial<Style> } = {
    style: {
        noFill: true,
        stroke: "rgba(255, 0, 0, 0.8)",
        strokeWidth: 4
    }
};

const wait = (wait: number) => {
    return new Promise<void>((resolve, reject) => {
        window.setTimeout(() => resolve(), wait);
    });
};

const card = tpl.addCard({ aspectRatio: "1:1", className: "col-12", withIntroduction: true });
const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.1, yAxisPositiveOnBottom: false }));
view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
view.startInteractive();
card.setIntroduction(`
<div class="card">
  <div class="card-body">
  The final figure is completely computed.
  This demonstrates the process of getting the final figure from the initial circle by means of a predefined computing logic.
  </div>
</div>
`);

const radius = 256;
const seven = 7;
const four = 4;
const three = 3;
const speed = 10;

Geomtoy.setOptions({
    graphics: {
        point: {
            appearance: "cross"
        }
    }
});

let data = {} as {
    initCircle: Circle;
    centerPoint: Point;
    heptagonPoints: Point[];
    heptagonOffsetPoints: Point[];
    heptagonPQuarterPoints: Point[];
    heptagonNQuarterPoints: Point[];
    heptagonPEighthPoints: Point[];
    heptagonNEighthPoints: Point[];
    heptagonC1: {
        intPoints: Point[];
        circles: Circle[];
    };
    heptagonC2: {
        intPoints: Point[];
        circles: Circle[];
    };
    heptagonC3: {
        intPoints: Point[];
        circles: Circle[];
    };
    heptagonC4: {
        intPointLists: Point[][];
        circles: Circle[];
    };
    gap: number;
    heptagonC5: {
        circles: Circle[];
    };
    heptagonC6: {
        circles: Circle[];
    };
    heptagonC7: {
        intPoints: Point[];
        circles: Circle[];
    };
    innerBorderC1: Circle;
    innerBorderC2: Circle;
    outerBorderC1: Circle;
    outerBorderC2: Circle;
    trianglePoints: Point[];
    triangleC1: {
        intPoints: Point[];
        circles: Circle[];
    };
    triangleC2: {
        tanPoints: Point[];
        circles: Circle[];
    };
    quadrilateralPoints: Point[];
    quadrilateral: {
        int1Points: Point[];
        int2Points: Point[];
    };
};

const rs = new Relationship();

function play() {
    return (
        Promise.resolve("Let's begin")
            // centerPoint, initCircle
            .then(async () => {
                data.centerPoint = Point.origin();
                view.add(new ViewElement(data.centerPoint, sketchStyle));

                data.initCircle = new Circle(data.centerPoint, radius);
                view.add(new ViewElement(data.initCircle, sketchDashStyle));

                await wait(100 * speed);
            })
            // heptagon
            .then(async () => {
                data.heptagonPoints = [];
                data.heptagonOffsetPoints = [];
                data.heptagonPQuarterPoints = [];
                data.heptagonNQuarterPoints = [];
                data.heptagonPEighthPoints = [];
                data.heptagonNEighthPoints = [];
                const heptagon = new RegularPolygon(data.centerPoint, radius, seven, -Math.PI / 2);
                const heptagonOffset = new RegularPolygon(data.centerPoint, radius, seven, Math.PI / seven - Math.PI / 2);
                const heptagonPQuarter = new RegularPolygon(data.centerPoint, radius, seven, Math.PI / seven / 2 - Math.PI / 2);
                const heptagonNQuarter = new RegularPolygon(data.centerPoint, radius, seven, -Math.PI / seven / 2 - Math.PI / 2);
                const heptagonPEighth = new RegularPolygon(data.centerPoint, radius, seven, Math.PI / seven / 4 - Math.PI / 2);
                const heptagonNEighth = new RegularPolygon(data.centerPoint, radius, seven, -Math.PI / seven / 4 - Math.PI / 2);

                data.heptagonPoints = heptagon.getVertices();
                data.heptagonOffsetPoints = heptagonOffset.getVertices();
                data.heptagonPQuarterPoints = heptagonPQuarter.getVertices();
                data.heptagonNQuarterPoints = heptagonNQuarter.getVertices();
                data.heptagonPEighthPoints = heptagonPEighth.getVertices();
                data.heptagonNEighthPoints = heptagonNEighth.getVertices();

                view.add(new ViewElement(heptagon, sketchColoredStyle(0)));
                await wait(100 * speed);

                await Promise.all(
                    Utility.range(0, seven).map(async index => {
                        view.add(new ViewElement(data.heptagonPoints[index], sketchStyle));
                        view.add(new ViewElement(new LineSegment(data.centerPoint, data.heptagonPoints[index]), sketchDashStyle));
                        await wait(50 * speed);

                        view.add(new ViewElement(data.heptagonOffsetPoints[index], sketchStyle));
                        view.add(new ViewElement(new LineSegment(data.centerPoint, data.heptagonOffsetPoints[index]), sketchDashStyle));
                        await wait(50 * speed);

                        view.add(new ViewElement(data.heptagonPQuarterPoints[index], sketchStyle));
                        view.add(new ViewElement(data.heptagonNQuarterPoints[index], sketchStyle));
                        await wait(50 * speed);

                        view.add(new ViewElement(new LineSegment(data.centerPoint, data.heptagonPQuarterPoints[index]), sketchDashStyle));
                        view.add(new ViewElement(new LineSegment(data.centerPoint, data.heptagonNQuarterPoints[index]), sketchDashStyle));
                        await wait(50 * speed);

                        view.add(new ViewElement(data.heptagonPEighthPoints[index], sketchStyle));
                        view.add(new ViewElement(data.heptagonNEighthPoints[index], sketchStyle));
                        await wait(50 * speed);

                        view.add(new ViewElement(new LineSegment(data.centerPoint, data.heptagonPEighthPoints[index]), sketchDashStyle));
                        view.add(new ViewElement(new LineSegment(data.centerPoint, data.heptagonNEighthPoints[index]), sketchDashStyle));
                        await wait(50 * speed);
                    })
                );
            })
            // heptagonC1
            .then(async () => {
                data.heptagonC1 = {
                    intPoints: [],
                    circles: []
                };
                await Promise.all(
                    Utility.range(0, seven).map(async index => {
                        const lA = Line.fromTwoPoints(Utility.nth(data.heptagonOffsetPoints, index - 1)!, data.centerPoint)!; //use nth to get index -1
                        const lB = Line.fromTwoPoints(Utility.nth(data.heptagonOffsetPoints, index)!, data.centerPoint)!;
                        const lC = data.initCircle.getTangentVectorAtAngle(data.initCircle.getAngleOfPoint(Utility.nth(data.heptagonPoints, index)!)).toLine()!;
                        const pA = rs.intersect(lA, lC)[0];
                        const pB = rs.intersect(lB, lC)[0];
                        const triangle = new Triangle(pA, pB, data.centerPoint);
                        const circle = triangle.getInscribedCircle();
                        data.heptagonC1.circles[index] = circle;

                        view.add(new ViewElement(triangle, sketchDashStyle));
                        view.add(new ViewElement(circle, sketchStyle));
                        await wait(20 * speed);

                        const lD = Line.fromTwoPoints(Utility.nth(data.heptagonPoints, index)!, data.centerPoint)!;
                        const ps = rs.intersect(lD, circle);

                        data.heptagonC1.intPoints[index] = ps.filter(p => !p.equalTo(Utility.nth(data.heptagonPoints, index)!))[0];

                        view.add(new ViewElement(data.heptagonC1.intPoints[index], sketchStyle));
                        await wait(20 * speed);
                    })
                );
            })
            // heptagonC2
            .then(async () => {
                data.heptagonC2 = {
                    intPoints: [],
                    circles: []
                };
                await Promise.all(
                    Utility.range(0, seven).map(async index => {
                        const lA = Line.fromTwoPoints(data.heptagonPEighthPoints[index], data.centerPoint)!;
                        const lB = Line.fromTwoPoints(data.heptagonNEighthPoints[index], data.centerPoint)!;
                        const lC = data.initCircle.getTangentVectorAtAngle(data.initCircle.getAngleOfPoint(Utility.nth(data.heptagonPoints, index)!)).toLine()!;
                        const pA = rs.intersect(lA, lC)[0];
                        const pB = rs.intersect(lB, lC)[0];
                        const triangle = new Triangle(pA, pB, data.centerPoint);
                        const circle = triangle.getInscribedCircle();
                        data.heptagonC2.circles[index] = circle;

                        view.add(new ViewElement(triangle, sketchDashStyle));
                        view.add(new ViewElement(circle, sketchStyle));
                        await wait(20 * speed);

                        const lD = Line.fromTwoPoints(Utility.nth(data.heptagonPoints, index)!, data.centerPoint)!;
                        const ps = rs.intersect(lD, circle);
                        data.heptagonC2.intPoints[index] = ps.filter(p => !p.equalTo(Utility.nth(data.heptagonPoints, index)!))[0];

                        view.add(new ViewElement(data.heptagonC2.intPoints[index], sketchStyle));
                        await wait(20 * speed);
                    })
                );
            })
            // heptagonC3
            .then(async () => {
                data.heptagonC3 = {
                    intPoints: [],
                    circles: []
                };
                await Promise.all(
                    Utility.range(0, seven).map(async index => {
                        const lA = Line.fromTwoPoints(data.heptagonPQuarterPoints[index], data.centerPoint)!;
                        const lB = Line.fromTwoPoints(data.heptagonNQuarterPoints[index], data.centerPoint)!;
                        const cC2 = data.heptagonC2.circles[index];

                        const lC = cC2.getTangentVectorAtAngle(cC2.getAngleOfPoint(data.heptagonC2.intPoints[index])).toLine()!;
                        const pA = rs.intersect(lA, lC)[0];
                        const pB = rs.intersect(lB, lC)[0];
                        const triangle = new Triangle(pA, pB, data.centerPoint);
                        const circle = triangle.getInscribedCircle();
                        data.heptagonC3.circles[index] = circle;

                        view.add(new ViewElement(triangle, sketchDashStyle));
                        view.add(new ViewElement(circle, sketchStyle));
                        await wait(20 * speed);

                        const lD = Line.fromTwoPoints(data.heptagonC2.intPoints[index], data.centerPoint)!;
                        const ps = rs.intersect(lD, circle);
                        data.heptagonC3.intPoints[index] = ps.filter(p => !p.equalTo(data.heptagonC2.intPoints[index]))[0];

                        view.add(new ViewElement(data.heptagonC3.intPoints[index], sketchStyle));
                        await wait(20 * speed);
                    })
                );
            })
            // heptagonC4
            .then(async () => {
                data.heptagonC4 = {
                    intPointLists: [],
                    circles: []
                };
                await Promise.all(
                    Utility.range(0, seven).map(async index => {
                        const p = data.heptagonC3.circles[index].centerPoint;
                        const c = new Circle(p, data.heptagonC2.circles[index].radius);
                        const l = Line.fromTwoPoints(data.centerPoint, data.heptagonPoints[index])!;
                        const ps = rs.intersect(l, c);
                        Utility.sortBy(ps, [p => p.getDistanceBetweenPoint(data.centerPoint)]); //ascending order
                        data.heptagonC4.circles[index] = c;
                        data.heptagonC4.intPointLists[index] = ps;

                        view.add(new ViewElement(p, sketchStyle));
                        view.add(new ViewElement(c, sketchStyle));
                        view.add(new ViewElement(ps[0], sketchStyle));
                        view.add(new ViewElement(ps[1], sketchStyle));
                        await wait(100 * speed);
                    })
                );

                data.gap = data.heptagonC3.circles[0].radius - data.heptagonC4.circles[0].radius;
            })
            // heptagonC5
            .then(async () => {
                data.heptagonC5 = {
                    circles: []
                };
                await Promise.all(
                    Utility.range(0, seven).map(async index => {
                        const pA = data.heptagonC1.intPoints[index];
                        const pB = data.heptagonC3.intPoints[index];
                        const r = pA.getDistanceBetweenPoint(pB) / 2;
                        const mp = new LineSegment(pA, pB).getMiddlePoint();
                        const c = new Circle(mp, r);
                        data.heptagonC5.circles[index] = c;

                        view.add(new ViewElement(c, sketchStyle));
                        await wait(100 * speed);
                    })
                );
            })
            // heptagonC6
            .then(async () => {
                data.heptagonC6 = {
                    circles: []
                };
                await Promise.all(
                    Utility.range(0, seven).map(async index => {
                        const pA = data.heptagonPoints[index];
                        const pB = data.heptagonC3.intPoints[index];
                        const r = pA.getDistanceBetweenPoint(pB) / 2;
                        const mp = new LineSegment(pA, pB).getMiddlePoint();
                        const c = new Circle(mp, r);
                        data.heptagonC6.circles[index] = c;

                        view.add(new ViewElement(c, sketchStyle));
                        await wait(100 * speed);
                    })
                );
            })
            // heptagonC7
            .then(async () => {
                data.heptagonC7 = {
                    intPoints: [],
                    circles: []
                };
                await Promise.all(
                    Utility.range(0, seven).map(async index => {
                        const p = data.heptagonOffsetPoints[index];
                        const r = data.heptagonC5.circles[index].radius;
                        const l = Line.fromTwoPoints(p, data.centerPoint)!;
                        const ps1 = rs.intersect(l, new Circle(p, r));
                        const ps2 = rs.intersect(l, new Circle(p, 2 * r));

                        Utility.sortBy(ps1, [p => p.getDistanceBetweenPoint(data.centerPoint)]); //ascending order
                        Utility.sortBy(ps2, [p => p.getDistanceBetweenPoint(data.centerPoint)]); //ascending order

                        const center = ps1[0];
                        const c = new Circle(center, r);
                        data.heptagonC7.intPoints[index] = ps2[0];
                        data.heptagonC7.circles[index] = c;

                        view.add(new ViewElement(c, sketchStyle));
                        await wait(100 * speed);
                    })
                );
            })
            // innerBorderC1, innerBorderC2
            .then(async () => {
                const r1 = radius - data.heptagonC1.circles[0].radius * 2;
                const r2 = r1 - data.gap;
                const c1 = new Circle(data.centerPoint, r1);
                const c2 = new Circle(data.centerPoint, r2);
                data.innerBorderC1 = c1;
                data.innerBorderC2 = c2;

                view.add(new ViewElement(c1, sketchDashStyle));
                view.add(new ViewElement(c2, sketchStyle));
                await wait(100 * speed);
            })
            // outerBorderC1, outerBorderC2
            .then(async () => {
                const r1 = radius + data.gap;
                const r2 = r1 + data.gap;
                const c1 = new Circle(data.centerPoint, r1);
                const c2 = new Circle(data.centerPoint, r2);
                data.outerBorderC1 = c1;
                data.outerBorderC2 = c2;

                view.add(new ViewElement(c1, sketchStyle));
                view.add(new ViewElement(c2, sketchStyle));
                await wait(100 * speed);
            })
            // triangle
            .then(async () => {
                data.trianglePoints = [];
                data.triangleC1 = {
                    intPoints: [],
                    circles: []
                };
                data.triangleC2 = {
                    tanPoints: [],
                    circles: []
                };

                const triangle = data.innerBorderC2.getInscribedRegularPolygon(three, Math.PI / 2);
                view.add(new ViewElement(triangle, sketchColoredStyle(1)));
                await wait(100 * speed);

                data.trianglePoints = triangle.getVertices();

                await Promise.all(
                    Utility.range(0, three).map(async index => {
                        view.add(new ViewElement(data.trianglePoints[index], sketchStyle));
                        await wait(50 * speed);

                        const l = Line.fromTwoPoints(data.trianglePoints[index], data.centerPoint)!;
                        const psWithIBC1 = rs.intersect(l, data.innerBorderC1);
                        Utility.sortBy(psWithIBC1, [p => p.getDistanceBetweenPoint(data.trianglePoints[index])]);

                        view.add(new ViewElement(psWithIBC1[0], sketchStyle));
                        await wait(50 * speed);

                        const c = new Circle(new LineSegment(psWithIBC1[0], data.centerPoint).getMiddlePoint(), psWithIBC1[0].getDistanceBetweenPoint(data.centerPoint) / 2);
                        view.add(new ViewElement(c, sketchStyle));
                        view.add(new ViewElement(c.centerPoint, sketchStyle));
                        await wait(50 * speed);

                        const ps = rs.intersect(c, data.innerBorderC2);
                        view.add(new ViewElement(ps[0], sketchStyle));
                        view.add(new ViewElement(ps[1], sketchStyle));
                        await wait(50 * speed);

                        data.triangleC1.circles[index] = c;
                        data.triangleC1.intPoints[index] = ps[0];
                    })
                );

                await Promise.all(
                    Utility.range(0, three).map(async index => {
                        const commonTangentCircles = Circle.getCommonTangentCirclesOfTwoCirclesThroughPoint(
                            Utility.nth(data.triangleC1.circles, index - 1)!,
                            Utility.nth(data.triangleC1.circles, index - 2)!,
                            data.trianglePoints[index]
                        );
                        Utility.sortBy(commonTangentCircles, [c => c.radius]);
                        const circle = commonTangentCircles[0];
                        data.triangleC2.circles[index] = circle;
                        view.add(new ViewElement(circle, sketchStyle));
                        await wait(50 * speed);

                        const ray = Ray.fromTwoPoints(circle.centerPoint, Utility.nth(data.triangleC1.circles, index - 2)!.centerPoint)!;
                        data.triangleC2.tanPoints[index] = rs.intersect(ray, circle)[0];

                        view.add(new ViewElement(data.triangleC2.tanPoints[index], sketchStyle));
                        await wait(50 * speed);
                    })
                );
            })
            // quadrilateral
            .then(async () => {
                data.quadrilateralPoints = [];
                data.quadrilateral = {
                    int1Points: [],
                    int2Points: []
                };

                const quadrilateral = new RegularPolygon(data.centerPoint, radius + data.gap * 2, four, Math.PI / 2);

                view.add(new ViewElement(quadrilateral, sketchColoredStyle(2)));
                await wait(100);

                const ls = quadrilateral.getSideLineSegments();

                await Promise.all(
                    Utility.range(0, four).map(async index => {
                        const ps = rs.intersect(ls[index].toLine(), data.outerBorderC1);
                        Utility.sortBy(ps, [p => (new Vector(data.centerPoint, p).angle + 1.5 * Math.PI) % (2 * Math.PI)]);
                        data.quadrilateral.int1Points.push(...ps);

                        view.add(new ViewElement(ps[0], sketchStyle));
                        view.add(new ViewElement(ps[1], sketchStyle));
                        await wait(100 * speed);
                    })
                );

                await Promise.all(
                    Utility.range(0 - 1, four - 1).map(async index => {
                        let toIndex;
                        if (Maths.abs(index % 2) == 1) {
                            toIndex = index - (four - 1);
                        } else {
                            toIndex = index + (four - 1);
                        }
                        const l = Line.fromTwoPoints(Utility.nth(data.quadrilateral.int1Points, index)!, Utility.nth(data.quadrilateral.int1Points, toIndex)!)!;
                        const ps = rs.intersect(l, data.outerBorderC2);
                        Utility.sortBy(ps, [p => (new Vector(data.centerPoint, p).angle + 1.5 * Math.PI) % (2 * Math.PI)]);

                        view.add(new ViewElement(ps[0], sketchStyle));
                        view.add(new ViewElement(ps[1], sketchStyle));
                        await wait(50 * speed);

                        let indexLessThan0 = index < 0;
                        index = (2 * four + index) % (2 * four);
                        toIndex = (2 * four + toIndex) % (2 * four);
                        if (indexLessThan0) {
                            data.quadrilateral.int2Points[index] = ps[1];
                            data.quadrilateral.int2Points[toIndex] = ps[0];
                        } else {
                            data.quadrilateral.int2Points[index] = ps[0];
                            data.quadrilateral.int2Points[toIndex] = ps[1];
                        }
                    })
                );
            })
            // Draw final image
            .then(() => {
                Utility.range(0, seven).forEach(index => {
                    const c1 = data.heptagonC1.circles[index];
                    const c2 = data.heptagonC2.circles[index];
                    const c3 = data.heptagonC3.circles[index];
                    const c4 = data.heptagonC4.circles[index];
                    const c6 = data.heptagonC6.circles[index];
                    const c7 = data.heptagonC7.circles[index];

                    const path1 = new Path(true);
                    path1.appendCommand(Path.moveTo(data.heptagonPoints[index]));
                    path1.appendCommand(Path.arcTo(c1.radius, c1.radius, 0, false, false, data.heptagonC1.intPoints[index]));
                    path1.appendCommand(Path.arcTo(c1.radius, c1.radius, 0, false, false, data.heptagonPoints[index]));
                    path1.appendCommand(Path.arcTo(c6.radius, c6.radius, 0, false, true, data.heptagonC3.intPoints[index]));
                    path1.appendCommand(Path.arcTo(c3.radius, c3.radius, 0, false, true, data.heptagonC2.intPoints[index]));
                    path1.appendCommand(Path.arcTo(c2.radius, c2.radius, 0, false, false, data.heptagonPoints[index]));

                    view.add(new ViewElement(path1, { zIndex: 1, ...logoStyle }));

                    const path2 = new Path(true);
                    path2.appendCommand(Path.moveTo(data.heptagonC4.intPointLists[index][0]));
                    path2.appendCommand(Path.arcTo(c4.radius, c4.radius, 0, false, false, data.heptagonC4.intPointLists[index][1]));
                    path2.appendCommand(Path.arcTo(c4.radius, c4.radius, 0, false, false, data.heptagonC4.intPointLists[index][0]));

                    view.add(new ViewElement(path2, { zIndex: 1, ...logoStyle }));

                    const path3 = new Path(true);
                    path3.appendCommand(Path.moveTo(data.heptagonOffsetPoints[index]));
                    path3.appendCommand(Path.arcTo(c7.radius, c7.radius, 0, false, false, data.heptagonC7.intPoints[index]));
                    path3.appendCommand(Path.arcTo(c7.radius, c7.radius, 0, false, false, data.heptagonOffsetPoints[index]));

                    view.add(new ViewElement(path3, { zIndex: 1, ...logoStyle }));
                });
                Utility.range(0, three).forEach(index => {
                    const c1 = data.triangleC1.circles[index];
                    const c2 = data.triangleC2.circles[index];
                    const ibc = data.innerBorderC2;

                    const path = new Path(true);
                    path.appendCommand(Path.moveTo(data.trianglePoints[index]));
                    path.appendCommand(Path.arcTo(c2.radius, c2.radius, 0, true, false, data.triangleC2.tanPoints[index]));
                    path.appendCommand(Path.arcTo(c1.radius, c1.radius, 0, false, true, Utility.nth(data.triangleC1.intPoints, index - three + 1)!));
                    path.appendCommand(Path.arcTo(ibc.radius, ibc.radius, 0, false, false, data.trianglePoints[index]));
                    view.add(new ViewElement(path, { zIndex: 1, ...logoStyle }));
                });
                const int1ps = data.quadrilateral.int1Points;
                const int2ps = data.quadrilateral.int2Points;
                const oc1 = data.outerBorderC1;
                const oc2 = data.outerBorderC2;

                Utility.range(0, four).forEach(index => {
                    const path = new Path(true);
                    path.appendCommand(Path.moveTo(int2ps[index * 2]));
                    path.appendCommand(Path.lineTo(int1ps[index * 2]));
                    path.appendCommand(Path.arcTo(oc1.radius, oc1.radius, 0, false, true, int1ps[index * 2 + 1]));
                    path.appendCommand(Path.lineTo(int2ps[index * 2 + 1]));
                    path.appendCommand(Path.arcTo(oc2.radius, oc2.radius, 0, false, false, int2ps[index * 2]));
                    view.add(new ViewElement(path, { zIndex: 1, ...logoStyle }));
                });
            })
    );
}

function reset() {
    data = {} as typeof data;
    view.empty();
    return Promise.resolve();
}
