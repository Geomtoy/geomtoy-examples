import { Arc, Bezier, BooleanOperation, Compound, Geomtoy, Path, Polygon, QuadraticBezier } from "@geomtoy/core";
import { Utility } from "@geomtoy/util";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { newElement, lightStroke, lightStrokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";
import { randomPathCommand, randomPolygonVertex } from "./_common";

tpl.title("Random polygon-polygon boolean operation");
const path1 = new Path([
    { type: "M", x: -89.19441531256491, y: -13.574877153373109, uuid: "47f4c4a6-7be5-45b2-8a1a-5fbedfaf81a6" },
    {
        type: "A",
        x: 76.07906897655045,
        y: -56.07199843526498,
        radiusX: 311.70297398385765,
        radiusY: 85.28142671980963,
        rotation: 1.2859399588115277,
        largeArc: true,
        positive: false,
        uuid: "aa2454c0-99d4-4d6d-aed3-712b6b23e2f9"
    },
    { type: "Q", x: 5.597186088836509, y: -50.894761260734086, controlPointX: 22.589005634504517, controlPointY: -80.48412602118859, uuid: "442dd677-363c-4c27-b57a-76e804c5704d" },
    {
        type: "A",
        x: -15.797623076440189,
        y: 58.26598259071781,
        radiusX: 54.32236065154819,
        radiusY: 142.738736485311,
        rotation: 5.14018480880841,
        largeArc: false,
        positive: true,
        uuid: "2eecebe8-8b47-4057-b099-e8eecdae57e5"
    },
    { type: "L", x: -32.44790719981671, y: 31.645457948212396, uuid: "7fb77cb0-4233-425d-a7ac-625f08be96c1" },
    { type: "L", x: -7.470630006961002, y: -43.057221711023665, uuid: "90d84f64-1518-4cf0-b8f1-6bca0849a1a2" },
    { type: "L", x: -3.2037178798786385, y: 18.744770007746013, uuid: "2dc6ce3b-2c4f-4bd2-9012-cdf204088785" },
    { type: "Q", x: -88.89648139796971, y: 31.889395926174046, controlPointX: -88.71491724110273, controlPointY: -17.389680975245042, uuid: "2f227bcf-b798-42c5-abf5-fbeca94f5c65" },
    {
        type: "C",
        x: -16.45957297606668,
        y: 45.55841059401439,
        controlPoint1X: 93.33982415914468,
        controlPoint1Y: -69.56560421432596,
        controlPoint2X: 12.704328422680248,
        controlPoint2Y: 81.66476112173595,
        uuid: "7495e338-9cb5-4022-b190-19f3805cfb29"
    },
    { type: "Q", x: 48.4666735367517, y: 59.9964924145728, controlPointX: 99.46614149762621, controlPointY: 19.027831391714585, uuid: "e45b5651-f3d3-42be-b87a-e2cf489f52a9" },
    {
        type: "C",
        x: 54.49811049642389,
        y: 51.55893697499309,
        controlPoint1X: -50.74428059749376,
        controlPoint1Y: 64.54466055270919,
        controlPoint2X: 4.638510623875945,
        controlPoint2Y: 14.16333891969441,
        uuid: "c53066a5-e0b3-439a-92d2-95b641a70adc"
    },
    {
        type: "A",
        x: 96.08427897946981,
        y: -78.39044029405918,
        radiusX: 70.00122144194468,
        radiusY: 52.50713881344398,
        rotation: 1.6166466562341675,
        largeArc: false,
        positive: false,
        uuid: "13d1b23f-dba6-44f8-bfb0-bc7b76d211e0"
    },
    { type: "Q", x: 36.43158184788214, y: -91.91028843783316, controlPointX: -23.729556187252058, controlPointY: 42.24783615721827, uuid: "518fc2a0-2317-4ae0-acf6-3d36c3704e9a" },
    {
        type: "A",
        x: 13.407110966491416,
        y: -88.4924838516425,
        radiusX: 67.3792768329179,
        radiusY: 55.106055103990734,
        rotation: 4.18107477213781,
        largeArc: true,
        positive: true,
        uuid: "6a08130d-c303-4169-a7af-5600f24def2a"
    },
    {
        type: "A",
        x: -24.40319363054222,
        y: 34.613969258748284,
        radiusX: 79.1498707591296,
        radiusY: 21.519894847123446,
        rotation: 5.2137325928411205,
        largeArc: false,
        positive: true,
        uuid: "f4be1f76-5031-4b89-ab1f-6bc4471061ec"
    },
    {
        type: "C",
        x: 25.87644998740815,
        y: -70.73996543843215,
        controlPoint1X: -38.42787574457955,
        controlPoint1Y: -42.41975279238237,
        controlPoint2X: -87.98701611281223,
        controlPoint2Y: 79.32831547968598,
        uuid: "7eef98c4-9d19-4e33-8bb2-f3472d7be7ba"
    },
    {
        type: "C",
        x: 24.847898202937685,
        y: -94.43364078118054,
        controlPoint1X: -98.5166976958237,
        controlPoint1Y: -22.819453191759024,
        controlPoint2X: 44.4370345095312,
        controlPoint2Y: 2.2383614650747177,
        uuid: "18e134e4-6af4-4564-9dbf-c952865643c5"
    },
    { type: "L", x: 31.4657799021075, y: 66.69812575179296, uuid: "7914fca0-1728-4141-9b3f-ef2d17f780af" },
    { type: "L", x: 77.14156173625364, y: 89.41441065485924, uuid: "24de7236-5c00-491f-94a7-f2c6d787894d" },
    {
        type: "C",
        x: 80.809248382336,
        y: 95.71274198543014,
        controlPoint1X: 1.8251879836522136,
        controlPoint1Y: -15.16921148568673,
        controlPoint2X: -21.71387104122222,
        controlPoint2Y: -20.00360366944345,
        uuid: "9608e7ff-775a-4e10-9129-c8e5d0b71144"
    }
]);

const sl = new BooleanOperation("sweep-line");

{
    tpl.addSection("Union");
    const compound = sl.selfUnion(path1);
    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(path1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));

    // description.annotations.forEach(sfa=>{
    //     view2.add(new ViewElement(sfa.segment, { type: ViewElementType.None, ...lightStroke("purple") }));
    //     view2.add(new ViewElement(sfa.segment.point1, { type: ViewElementType.None, ...lightStroke("gray") }));
    //     view2.add(new ViewElement(sfa.segment.point2, { type: ViewElementType.None, ...lightStroke("gray") }));
    // })
}
// {
//     tpl.addSection("Intersection");
//     const compound = sl.intersection()
//     const card1 = tpl.addCard({ title: "original", className: "col-6" });
//     const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

//     const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
//     const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

//     view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
//     view1.startInteractive();

//     view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
//     view2.startInteractive();
//     viewCollection.push(view1, view2);

//     view1.add(new ViewElement(path1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
//     view1.add(new ViewElement(path2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
//     view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
// }

// {
//     tpl.addSection("Difference");
//     const compound = sl.difference()

//     const card1 = tpl.addCard({ title: "original", className: "col-6" });
//     const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

//     const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
//     const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

//     view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
//     view1.startInteractive();

//     view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
//     view2.startInteractive();
//     viewCollection.push(view1, view2);

//     view1.add(new ViewElement(path1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
//     view1.add(new ViewElement(path2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
//     view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
// }

// {
//     tpl.addSection("DifferenceRev");
//     const compound = sl.differenceRev()

//     const card1 = tpl.addCard({ title: "original", className: "col-6" });
//     const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

//     const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
//     const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

//     view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
//     view1.startInteractive();

//     view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
//     view2.startInteractive();
//     viewCollection.push(view1, view2);

//     view1.add(new ViewElement(path1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
//     view1.add(new ViewElement(path2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
//     view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
// }

// {
//     tpl.addSection("Exclusion");
//     const compound = sl.exclusion()

//     const card1 = tpl.addCard({ title: "original", className: "col-6" });
//     const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

//     const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
//     const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.2, yAxisPositiveOnBottom: false }));

//     view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
//     view1.startInteractive();

//     view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
//     view2.startInteractive();
//     viewCollection.push(view1, view2);

//     view1.add(new ViewElement(path1, { type: ViewElementType.None, ...lightStrokeFill("red") }));
//     view1.add(new ViewElement(path2, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
//     view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
// }
