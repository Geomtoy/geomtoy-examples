import { LineSegment, Path, PathCommandType, Point, Polygon, Vector } from "@geomtoy/core";
import { Maths } from "@geomtoy/util";
import { SubView, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { dashedThinStroke, lightStrokeFill, strokeFill } from "../assets/scripts/common";
import { twoPointsLineSegment } from "../assets/scripts/general-construction";

export function showCommands(path: Path) {
    const pathSubView = new SubView();
    const pathHelperSubView = new SubView();

    const commands = path.commands;

    commands.forEach((cmd, index) => {
        if (cmd.type == PathCommandType.MoveTo) {
            const pointVe = new ViewElement(new Point(cmd.x, cmd.y), { interactMode: ViewElementInteractMode.Activation, zIndex: 10, ...strokeFill("brown") });
            pathSubView.add(pointVe);
            path.bind([pointVe.shape, "any"], function (e) {
                this.setCommand(index, Path.moveTo(e.target.coordinates));
            });
        }
        if (cmd.type === PathCommandType.LineTo) {
            const pointVe = new ViewElement(new Point(cmd.x, cmd.y), { interactMode: ViewElementInteractMode.Activation, zIndex: 10, ...strokeFill("brown") });
            pathSubView.add(pointVe);
            path.bind([pointVe.shape, "any"], function (e) {
                this.setCommand(index, Path.lineTo(e.target.coordinates));
            });
        }
        if (cmd.type === PathCommandType.QuadraticBezierTo) {
            const pointVe = new ViewElement(new Point(cmd.x, cmd.y), { interactMode: ViewElementInteractMode.Activation, zIndex: 10, ...strokeFill("brown") });
            pathSubView.add(pointVe);

            const controlPointVe = new ViewElement(new Point(cmd.controlPointX, cmd.controlPointY), { interactMode: ViewElementInteractMode.Activation, zIndex: 10, ...lightStrokeFill("purple") });

            const controlLs1Ve = new ViewElement(new LineSegment().bind([pathSubView.elements[index - 1].shape as Point, "any"], [controlPointVe.shape, "any"], twoPointsLineSegment), {
                interactMode: ViewElementInteractMode.None,
                zIndex: 10,
                ...dashedThinStroke("gray")
            });
            const controlLs2Ve = new ViewElement(new LineSegment().bind([pointVe.shape, "any"], [controlPointVe.shape, "any"], twoPointsLineSegment), {
                interactMode: ViewElementInteractMode.None,
                zIndex: 10,
                ...dashedThinStroke("gray")
            });
            pathHelperSubView.add(controlPointVe, controlLs1Ve, controlLs2Ve);

            path.bind([pointVe.shape, "any"], [controlPointVe.shape, "any"], function (e1, e2) {
                this.setCommand(index, Path.quadraticBezierTo(e2.target.coordinates, e1.target.coordinates));
            });
        }
        if (cmd.type === PathCommandType.BezierTo) {
            const pointVe = new ViewElement(new Point(cmd.x, cmd.y), { interactMode: ViewElementInteractMode.Activation, zIndex: 10, ...strokeFill("brown") });
            pathSubView.add(pointVe);

            const controlPoint1Ve = new ViewElement(new Point(cmd.controlPoint1X, cmd.controlPoint1Y), { interactMode: ViewElementInteractMode.Activation, zIndex: 10, ...lightStrokeFill("orange") });
            const controlPoint2Ve = new ViewElement(new Point(cmd.controlPoint2X, cmd.controlPoint2Y), { interactMode: ViewElementInteractMode.Activation, zIndex: 10, ...lightStrokeFill("orange") });

            const controlLs1Ve = new ViewElement(new LineSegment().bind([pathSubView.elements[index - 1].shape as Point, "any"], [controlPoint1Ve.shape, "any"], twoPointsLineSegment), {
                interactMode: ViewElementInteractMode.None,
                zIndex: 10,
                ...dashedThinStroke("gray")
            });
            const controlLs2Ve = new ViewElement(new LineSegment().bind([controlPoint1Ve.shape, "any"], [controlPoint2Ve.shape, "any"], twoPointsLineSegment), {
                interactMode: ViewElementInteractMode.None,
                zIndex: 10,
                ...dashedThinStroke("gray")
            });
            const controlLs3Ve = new ViewElement(new LineSegment().bind([controlPoint2Ve.shape, "any"], [pointVe.shape, "any"], twoPointsLineSegment), {
                interactMode: ViewElementInteractMode.None,
                zIndex: 10,
                ...dashedThinStroke("gray")
            });
            pathHelperSubView.add(controlPoint1Ve, controlPoint2Ve, controlLs1Ve, controlLs2Ve, controlLs3Ve);

            path.bind([pointVe.shape, "any"], [controlPoint1Ve.shape, "any"], [controlPoint2Ve.shape, "any"], function (e1, e2, e3) {
                this.setCommand(index, Path.bezierTo(e2.target.coordinates, e3.target.coordinates, e1.target.coordinates));
            });
        }
        if (cmd.type === PathCommandType.ArcTo) {
            const pointVe = new ViewElement(new Point(cmd.x, cmd.y), { interactMode: ViewElementInteractMode.Activation, zIndex: 10, ...strokeFill("brown") });
            pathSubView.add(pointVe);

            const { x, y, largeArc, positive, radiusX: rx, radiusY: ry, rotation } = cmd;
            let av: [number, number];
            if (largeArc && positive) av = [rx, ry];
            if (largeArc && !positive) av = [-rx, ry];
            if (!largeArc && positive) av = [rx, -ry];
            if (!largeArc && !positive) av = [-rx, -ry];

            const adjustInitVector = new Vector(av!);
            const adjustPointVe = new ViewElement(
                new Vector(x, y)
                    .add(adjustInitVector)
                    .toPoint()
                    .data("vector", adjustInitVector)
                    .bind([pointVe.shape, "any"], function (e) {
                        this.copyFrom(new Vector(e.target).add(this.data("vector") as Vector).toPoint());
                    })
                    .on("any", function () {
                        this.data("vector", Vector.fromTwoPoints(pointVe.shape, this));
                    }),
                { interactMode: ViewElementInteractMode.Activation, zIndex: 10, ...lightStrokeFill("lime") }
            );

            const rotationInitVector = Vector.fromAngleAndMagnitude(rotation, rx + ry);
            const rotationPointVe = new ViewElement(
                new Vector(x, y)
                    .add(rotationInitVector)
                    .toPoint()
                    .data("vector", rotationInitVector)
                    .bind([pointVe.shape, "any"], function (e) {
                        this.copyFrom(new Vector(e.target).add(this.data("vector") as Vector).toPoint());
                    })
                    .on("any", function () {
                        this.data("vector", Vector.fromTwoPoints(pointVe.shape, this));
                    }),

                { interactMode: ViewElementInteractMode.Activation, zIndex: 10, ...lightStrokeFill("teal") }
            );

            const adjustLsVe = new ViewElement(new LineSegment().bind([pointVe.shape, "any"], [adjustPointVe.shape, "any"], twoPointsLineSegment), {
                interactMode: ViewElementInteractMode.None,
                zIndex: 10,
                ...dashedThinStroke("gray")
            });
            const rotationLsVe = new ViewElement(new LineSegment().bind([pointVe.shape, "any"], [rotationPointVe.shape, "any"], twoPointsLineSegment), {
                interactMode: ViewElementInteractMode.None,
                zIndex: 10,
                ...dashedThinStroke("gray")
            });

            pathHelperSubView.add(adjustPointVe, rotationPointVe, adjustLsVe, rotationLsVe);

            path.bind([pointVe.shape, "any"], [adjustPointVe.shape, "any"], [rotationPointVe.shape, "any"], function (e1, e2, e3) {
                const [p2x, p2y] = e1.target.coordinates;
                const [acx, acy] = e2.target.coordinates;
                const [ax, ay] = [p2x - acx, p2y - acy];

                const la = ay > 0;
                const p = ax > 0;
                const rx = Maths.abs(ax);
                const ry = Maths.abs(ay);
                const phi = Vector.fromTwoPoints(e1.target, e3.target).angle;
                this.setCommand(index, Path.arcTo(rx, ry, phi, la, p, [p2x, p2y]));
            });
        }
    });

    return {
        pathSubView,
        pathHelperSubView
    };
}
export function hideCommands(returnOfShowCommands: ReturnType<typeof showCommands>) {
    const { pathSubView, pathHelperSubView } = returnOfShowCommands;
    pathSubView.elements.forEach(ve => {
        ve.shape.clear();
    });
    pathHelperSubView.elements.forEach(ve => {
        ve.shape.clear();
    });
    pathSubView.empty();
    pathHelperSubView.empty();
}

export function showVertices(polygon: Polygon) {
    const polygonSubView = new SubView();

    const vertices = polygon.vertices;

    vertices.forEach((vtx, index) => {
        const pointVe = new ViewElement(new Point(vtx.x, vtx.y), { interactMode: ViewElementInteractMode.Activation, zIndex: 10, ...strokeFill("brown") });
        polygonSubView.add(pointVe);
        polygon.bind([pointVe.shape, "any"], function (e) {
            this.setVertex(index, Polygon.vertex(e.target.coordinates));
        });
    });
    return { polygonSubView };
}

export function hideVertices(returnOfShowVertices: ReturnType<typeof showVertices>) {
    const { polygonSubView } = returnOfShowVertices;
    polygonSubView.elements.forEach(ve => {
        ve.shape.clear();
    });

    polygonSubView.empty();
}
