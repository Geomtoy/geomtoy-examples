// import Geomtoy from "../../src/geomtoy";
// import "./assets/default";
// import { colors, mathFont } from "./assets/assets";
// import Interact from "../../src/geomtoy-kit/frontend/Interact";
// import { Collection, Drawable, Touchable } from "./assets/GeomObjectWrapper";

// import type { EventObject, Text, Point } from "../../src/geomtoy/package"

// const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
// const svg = document.querySelector("#svg") as SVGSVGElement;
// const description = document.querySelector("#description") as HTMLElement;
// description.innerHTML = ``;
// canvas.style.display = "none";

// const g = new Geomtoy(100, 100, {
//     graphics: {
//         pointSize: 6,
//         arrow: {
//             width: 3,
//             length: 20,
//             foldback: 0,
//             noFoldback: false
//         }
//     }
// });
// g.yAxisPositiveOnBottom = false;
// g.scale = 10;

// const renderer = new Geomtoy.adapters.VanillaSVG(svg, g);
// renderer.lineJoin("round");
// const collection = new Collection();
// const interact = new Interact(renderer, collection);

// interact.startDragAndDrop();
// interact.startZoomAndPan();
// interact.startResponsive((width, height) => {
//     g.width = width;
//     g.height = height;
//     g.origin = [width / 2, height / 2];
// });

// const main = () => {

//     const vectorA = g.Vector(7,7)
//     vectorA.point1Coordinate = [2,2]

//     collection
//         .setDrawable("coordinateSystemOriginPoint", new Drawable(g.Point.zero(), true, colors.grey, undefined, 0))
//         .setTouchable("vectorA", new Touchable(vectorA, false, colors.black, colors.black, 3))
//         // .setTouchable("image", new Touchable(image, false, colors.purple, colors.purple, 3));
// };
// main();
