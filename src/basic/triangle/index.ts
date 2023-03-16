import { Circle, Line, LineSegment, Point, SealedShapeArray, Text, Triangle } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { fillOnly, mathFont, strokeFill, strokeOnly, thinStrokeFill, thinStrokeOnly } from "../../assets/scripts/common";
import { locateLabel } from "../../assets/scripts/general-construction";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Triangle");
{
    const card = tpl.addCard({ aspectRatio: "1:1", className: "col-12", withPane: true, paneWidth: 320 });
    const view = new View({}, new CanvasRenderer(card.canvas!, {}, { density: 10, zoom: 0.5, yAxisPositiveOnBottom: false }));
    view.startResponsive((width, height) => (view.renderer.display.origin = [width / 2, height / 2]));
    view.startInteractive();

    const pointA = new Point(-25, -12);
    const pointB = new Point(35, 25);
    const pointC = new Point(35, -16);

    const labelA = new Text("A", mathFont).bind([pointA, "any"], locateLabel);
    const labelB = new Text("B", mathFont).bind([pointB, "any"], locateLabel);
    const labelC = new Text("C", mathFont).bind([pointC, "any"], locateLabel);

    const triangle = new Triangle().bind([pointA, "any"], [pointB, "any"], [pointC, "any"], function (e1, e2, e3) {
        this.copyFrom(new Triangle(e1.target, e2.target, e3.target));
    });
    const triangleBind = [triangle, "any"] as [Triangle, string];

    const medianSegments = new SealedShapeArray([new LineSegment(), new LineSegment(), new LineSegment()]).bind(triangleBind, function (e) {
        const [a, b, c] = e.target.isValid() ? e.target.getMedianLineSegments() : [null, null, null];
        this.items[0].copyFrom(a);
        this.items[1].copyFrom(b);
        this.items[2].copyFrom(c);
    });
    const angleBisectingSegments = new SealedShapeArray([new LineSegment(), new LineSegment(), new LineSegment()]).bind(triangleBind, function (e) {
        const [a, b, c] = e.target.isValid() ? e.target.getAngleBisectingLineSegments() : [null, null, null];
        this.items[0].copyFrom(a);
        this.items[1].copyFrom(b);
        this.items[2].copyFrom(c);
    });
    const altitudeLines = new SealedShapeArray([new Line(), new Line(), new Line()]).bind(triangleBind, function (e) {
        const [a, b, c] = e.target.isValid() ? e.target.getAltitudeLineSegments().map(s => s.toLine()) : [null, null, null];
        this.items[0].copyFrom(a);
        this.items[1].copyFrom(b);
        this.items[2].copyFrom(c);
    });

    const incenterPoint = new Point().bind(triangleBind, function (e) {
        this.copyFrom(e.target.isValid() ? e.target.getIncenterPoint() : null);
    });
    const inscribedCircle = new Circle().bind(triangleBind, function (e) {
        this.copyFrom(e.target.isValid() ? e.target.getInscribedCircle() : null);
    });
    const centroidPoint = new Point().bind(triangleBind, function (e) {
        this.copyFrom(e.target.isValid() ? e.target.getCentroidPoint() : null);
    });
    const orthocenterPoint = new Point().bind(triangleBind, function (e) {
        this.copyFrom(e.target.isValid() ? e.target.getOrthocenterPoint() : null);
    });

    const medialTriangle = new Triangle().bind(triangleBind, function (e) {
        this.copyFrom(e.target.isValid() ? e.target.getMedialTriangle() : null);
    });
    const antimedialTriangle = new Triangle().bind(triangleBind, function (e) {
        this.copyFrom(e.target.isValid() ? e.target.getAntimedialTriangle() : null);
    });

    const orthicTriangle = new Triangle().bind(triangleBind, function (e) {
        this.copyFrom(e.target.isValid() ? e.target.getOrthicTriangle() : null);
    });

    const polarCircle = new Circle().bind(triangleBind, function (e) {
        this.copyFrom(e.target.isValid() ? e.target.getPolarCircle() : null);
    });

    const perpendicularlyBisectingLines = new SealedShapeArray([new Line(), new Line(), new Line()]).bind(triangleBind, function (e) {
        const [a, b, c] = e.target.isValid() ? e.target.getPerpendicularlyBisectingLineSegments().map(s => s.toLine()) : [null, null, null];
        this.items[0].copyFrom(a);
        this.items[1].copyFrom(b);
        this.items[2].copyFrom(c);
    });
    const circumcenterPoint = new Point().bind(triangleBind, function (e) {
        this.copyFrom(e.target.isValid() ? e.target.getCircumcenterPoint() : null);
    });

    const circumscribedCircle = new Circle().bind(triangleBind, function (e) {
        this.copyFrom(e.target.isValid() ? e.target.getCircumscribedCircle() : null);
    });

    const escenterPoints = new SealedShapeArray([new Point(), new Point(), new Point()]).bind(triangleBind, function (e) {
        const [a, b, c] = e.target.isValid() ? e.target.getEscenterPoints() : [null, null, null];
        this.items[0].copyFrom(a);
        this.items[1].copyFrom(b);
        this.items[2].copyFrom(c);
    });
    const escribedCircles = new SealedShapeArray([new Circle(), new Circle(), new Circle()]).bind(triangleBind, function (e) {
        const [a, b, c] = e.target.isValid() ? e.target.getEscribedCircles() : [null, null, null];
        this.items[0].copyFrom(a);
        this.items[1].copyFrom(b);
        this.items[2].copyFrom(c);
    });

    const symmedianSegments = new SealedShapeArray([new LineSegment(), new LineSegment(), new LineSegment()]).bind(triangleBind, function (e) {
        const [a, b, c] = e.target.isValid() ? e.target.getSymmedianLineSegments() : [null, null, null];
        this.items[0].copyFrom(a);
        this.items[1].copyFrom(b);
        this.items[2].copyFrom(c);
    });

    const lemoinePoint = new Point().bind(triangleBind, function (e) {
        this.copyFrom(e.target.isValid() ? e.target.getLemoinePoint() : null);
    });

    const eulerLine = new Line().bind(triangleBind, function (e) {
        this.copyFrom(e.target.isValid() ? e.target.getEulerLine() : null);
    });

    const ninePointCenterPoint = new Point().bind(triangleBind, function (e) {
        this.copyFrom(e.target.isValid() ? e.target.getNinePointCenterPoint() : null);
    });

    const ninePointCircle = new Circle().bind(triangleBind, function (e) {
        this.copyFrom(e.target.isValid() ? e.target.getNinePointCircle() : null);
    });

    const optionElements = {
        centroidPoint: new ViewElement(centroidPoint, { interactMode: ViewElementInteractMode.None, ...thinStrokeFill("amber") }),
        medianSegments: new ViewElement(medianSegments, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("amber") }),

        angleBisectingSegments: new ViewElement(angleBisectingSegments, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("deepOrange") }),
        incenterPoint: new ViewElement(incenterPoint, { interactMode: ViewElementInteractMode.None, ...thinStrokeFill("deepOrange") }),
        inscribedCircle: new ViewElement(inscribedCircle, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("deepOrange") }),

        orthocenterPoint: new ViewElement(orthocenterPoint, { interactMode: ViewElementInteractMode.None, ...thinStrokeFill("purple") }),
        altitudeLinesL: new ViewElement(altitudeLines, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("purple") }),
        orthicTriangle: new ViewElement(orthicTriangle, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("purple") }),
        polarCircle: new ViewElement(polarCircle, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("purple") }),

        medialTriangle: new ViewElement(medialTriangle, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("green") }),
        antimedialTriangle: new ViewElement(antimedialTriangle, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("green") }),

        perpendicularlyBisectingLines: new ViewElement(perpendicularlyBisectingLines, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("teal") }),
        circumcenterPoint: new ViewElement(circumcenterPoint, { interactMode: ViewElementInteractMode.None, ...thinStrokeFill("teal") }),
        circumscribedCircle: new ViewElement(circumscribedCircle, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("teal") }),

        escenterPoints: new ViewElement(escenterPoints, { interactMode: ViewElementInteractMode.None, ...thinStrokeFill("pink") }),
        escribedCircles: new ViewElement(escribedCircles, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("pink") }),

        symmedianSegments: new ViewElement(symmedianSegments, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("indigo") }),
        lemoinePoint: new ViewElement(lemoinePoint, { interactMode: ViewElementInteractMode.None, ...thinStrokeFill("indigo") }),

        eulerLine: new ViewElement(eulerLine, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("blue") }),

        ninePointCenterPoint: new ViewElement(ninePointCenterPoint, { interactMode: ViewElementInteractMode.None, ...thinStrokeFill("lime") }),
        ninePointCircle: new ViewElement(ninePointCircle, { interactMode: ViewElementInteractMode.None, ...thinStrokeOnly("lime") })
    };

    const options: { [key: string]: boolean } = {};
    Object.getOwnPropertyNames(optionElements).forEach(key => {
        options[key] = true;
        view.add(optionElements[key as keyof typeof optionElements]);
    });
    // #region Pane
    // @ts-expect-error
    const pane = new Tweakpane.Pane({ title: "Pane", container: card.pane });

    const triFolder = pane.addFolder({ title: "Triangle" });
    const pAInput = triFolder.addInput({ pointA }, "pointA", { y: { inverted: true } });
    pointA.on("any", () => pAInput.refresh());
    const pBInput = triFolder.addInput({ pointB }, "pointB", { y: { inverted: true } });
    pointB.on("any", () => pBInput.refresh());
    const pCInput = triFolder.addInput({ pointC }, "pointC", { y: { inverted: true } });
    pointC.on("any", () => pCInput.refresh());

    const optFolder = pane.addFolder({ title: "Options" });
    Object.getOwnPropertyNames(options).forEach(key => {
        optFolder.addInput(options, key).on("change", (e: any) => {
            // @ts-expect-error
            e.value ? view.add(optionElements[e.presetKey]) : view.remove(optionElements[e.presetKey]);
        });
    });
    // #endregion

    view.add(new ViewElement(pointA, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("black") }));
    view.add(new ViewElement(labelA, { interactMode: ViewElementInteractMode.None, ...fillOnly("black") }));
    view.add(new ViewElement(pointB, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("black") }));
    view.add(new ViewElement(labelB, { interactMode: ViewElementInteractMode.None, ...fillOnly("black") }));
    view.add(new ViewElement(pointC, { interactMode: ViewElementInteractMode.Activation, ...strokeFill("black") }));
    view.add(new ViewElement(labelC, { interactMode: ViewElementInteractMode.None, ...fillOnly("black") }));
    view.add(new ViewElement(triangle, { interactMode: ViewElementInteractMode.None, ...strokeOnly("black") }));
}
