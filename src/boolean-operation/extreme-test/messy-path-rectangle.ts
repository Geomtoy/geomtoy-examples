import { BooleanOperation, Path, Rectangle } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementType } from "@geomtoy/view";
import { lightStrokeFill } from "../../assets/scripts/common";
import tpl from "../../assets/templates/tpl-renderer";

tpl.title("Messy path-rectangle boolean operation");
const messy = `m 77.114799,48.321972 c 0,0 -79.2788832,54.035848 -39.442231,90.717128 39.836653,36.68127 83.223102,-81.250993 79.673302,-18.14343 -3.5498,63.10757 3.15538,87.56175 -31.55378,106.88844 -34.709163,19.3267 -70.601593,29.18726 -58.374502,-11.43824 12.227092,-40.6255 26.426295,-53.64144 57.585657,-60.34662 31.159355,-6.70517 78.095615,38.25897 72.573695,-23.66533 -5.52191,-61.924299 -4.73306,-93.478084 -38.25896,-81.645415 -33.52589,11.83267 -61.135452,39.047809 -63.107563,64.685255 -1.972112,25.63745 -9.860558,63.50199 21.693227,81.25099 31.553776,17.74901 60.741026,54.8247 60.741026,54.8247 0,0 -61.924293,26.03188 -69.812739,-3.5498 -7.888447,-29.58167 56.796809,-188.928276 56.796809,-190.505965 0,-1.57769 22.08765,-16.171315 1.57769,-14.199203 -20.50996,1.972111 -72.968125,2.366533 -72.968125,2.366533 0,0 -24.848605,46.14741 -13.410358,56.402385 11.438247,10.25498 92.294813,112.80478 95.844613,118.32669 3.5498,5.52191 125.8207,34.70916 18.14343,37.86454 C 47.138704,261.31002 37.672568,213.19049 28.206433,189.91957 18.740298,166.64866 0.59687197,193.07495 8.0908956,157.57694 15.584919,122.07894 14.796074,110.24627 60.549062,82.24229 106.30204,54.238306 125.23431,45.955438 131.93949,39.644681 c 6.70518,-6.310757 25.63745,-75.729083 26.4263,6.705179 0.78884,82.43426 11.83267,101.36653 -7.0996,129.76493 -18.93227,28.39841 26.03187,39.04781 -35.49801,48.90837 -61.529875,9.86056 -75.729078,2.36653 -68.629476,16.17131 7.099601,13.80478 -11.438247,76.51792 48.513943,25.63746 59.952183,-50.88048 94.661353,-4.33867 81.250993,-65.47411 -13.41036,-61.13546 8.28287,-57.19123 -29.18725,-89.92829 C 110.24627,78.692489 108.27416,47.138705 77.903644,62.126752 47.533126,77.1148 -21.8852,95.652648 30.178544,129.57296 c 52.063745,33.92032 98.605576,42.20319 92.294816,67.44621 -6.31076,25.24303 18.14342,42.99204 -25.637444,47.7251 C 53.055038,249.47734 -88.148148,319.68451 44.377748,219.10682 176.90364,118.52914 187.55304,172.17057 181.24228,116.95145 174.93153,61.73233 212.79607,57.393685 163.8877,45.166593 114.97933,32.939502 129.96738,10.851852 100.78013,44.377749 71.592887,77.903645 33.333923,89.736314 60.549062,126.41758 87.764201,163.09886 94.074958,182.81997 125.23431,208.063 156.39368,233.30603 225.812,236.85583 152.05503,245.92754 78.298066,254.99925 69.226353,310.6128 64.098863,252.2383 58.971373,193.8638 6.1187843,240.40563 66.465397,167.04308 126.812,93.680537 174.5371,136.27814 135.88372,86.186513 97.230336,36.09488 120.89567,22.290099 83.819978,30.96739 46.744281,39.644681 -4.9250403,35.306035 62.521174,76.325955 c 67.446206,41.019915 93.083656,57.585655 81.645416,89.139435 -11.43825,31.55378 -3.54981,61.9243 -45.358564,59.16335 -41.808765,-2.76096 -48.908366,21.2988 -48.513944,-7.49403 0.394422,-28.79283 -72.968127,-13.41036 16.171315,-64.29083 C 155.60483,101.9634 181.24228,142.5889 167.83192,96.047071 154.42157,49.505239 213.58491,-45.94496 141.40563,41.22237 69.226353,128.38969 4.9355174,142.19447 67.254241,167.83192 c 62.318719,25.63745 98.211149,28.00399 71.784859,52.45817 -26.4263,24.45418 -64.290835,42.59762 -83.223106,33.13147 -18.93227,-9.46613 -40.231075,18.93228 -28.792828,-30.37051 11.438247,-49.30279 29.976095,-50.09164 64.685258,-79.67331 34.709156,-29.58167 44.964136,-61.529872 48.908356,-39.44223 3.94423,22.08765 8.28287,104.91633 26.82072,119.90438 18.53785,14.98805 13.41036,119.11555 21.29881,21.29881 7.88844,-97.81674 9.86055,-105.31076 -1.18327,-160.135454 C 176.50921,30.178545 217.13471,15.979342 170.19846,18.740299 123.2622,21.501255 111.42953,23.867789 79.481333,48.716394 47.533126,73.564999 -2.5585065,82.636712 6.5132066,104.32993 15.584919,126.02316 137.85583,251.44945 111.42953,171.77615 85.003245,92.102848 69.620775,83.819979 46.349859,49.899661 23.078943,15.979342 -18.729822,17.162609 21.501254,12.429542 61.732329,7.6964736 131.15065,-7.6859963 102.75224,45.166593 74.353843,98.019187 32.939501,121.29009 28.206433,139.43352 c -4.733068,18.14342 -34.3147402,25.63745 14.988048,51.66932 49.302788,26.03187 119.904379,12.62151 62.318719,42.20319 -57.585652,29.58168 -125.426289,28.00399 -87.561747,34.31473 37.864541,6.31076 35.89243,30.37051 69.812748,9.86057 33.920309,-20.50996 37.470109,22.08765 48.513939,-21.29881 11.04382,-43.38645 9.86056,-42.20319 22.87649,-103.33864 13.01594,-61.135455 40.23108,-41.01992 14.59363,-70.60159 -25.63745,-29.581673 -7.0996,-63.107569 -31.55379,-29.187251 -24.45418,33.920319 31.15937,53.247001 -45.752974,84.800791 -76.912354,31.55378 -144.358568,-18.14343 -78.884465,34.70916 65.474103,52.85259 56.007967,81.64542 104.127479,78.09562 48.11953,-3.5498 78.88447,28.79282 66.65737,-18.53785 -12.22709,-47.33068 -28.3984,-29.58167 -51.66932,-79.67331 C 113.40165,102.35782 81.059022,139.43352 112.6128,94.469382 144.16659,49.505239 128.78412,27.023167 153.2383,43.983326 177.69248,60.943485 289.314,108.27416 182.81997,133.51718 76.325954,158.76021 26.234321,219.10682 24.26221,149.29408 22.290098,79.481334 -33.717869,100.38571 23.867788,73.170577 81.453444,45.955438 90.91958,59.365796 118.52914,58.182529 146.1387,56.999262 185.97535,49.110816 159.15463,28.995279 132.33392,8.8797406 119.31798,-83.020657 125.62874,7.3020516 131.93949,97.624757 152.84388,100.38571 136.27814,119.7124 119.7124,139.0391 86.186512,150.87176 70.015198,149.29408 53.843883,147.71639 8.0908956,105.11878 51.871771,143.37774 c 43.780876,38.25896 78.490029,52.06375 88.745009,56.79681 10.25498,4.73307 57.58566,11.83267 0.78885,16.17132 -56.796807,4.33864 -113.988042,76.51794 -61.924297,4.33864 C 131.54507,148.50523 212.40164,154.42157 184.79208,113.00722 157.18252,71.592888 170.59288,36.489302 130.3618,64.493286 90.130735,92.49727 55.02715,104.32993 88.158624,110.64069 c 33.131466,6.31076 2.760956,9.46613 40.231066,35.10358 37.47012,25.63745 84.01195,13.41036 46.14741,37.47012 -37.86454,24.05976 -46.14741,33.5259 -77.306764,39.44223 -31.159362,5.91634 -110.832668,-9.86055 -35.498007,11.83267 75.334651,21.69323 131.737041,-4.73306 76.123501,-45.75298 C 82.242289,147.71639 44.77217,144.95543 64.887708,141.80005 85.003245,138.64467 213.58491,91.314003 139.0391,163.49328 64.493285,235.67256 27.417588,260.91558 22.684521,257.76021 c -4.733068,-3.15538 -64.685259,-6.31076 11.043824,-1.18327 75.729075,5.1275 65.474101,26.82071 89.928285,7.88845 24.45418,-18.93227 62.71314,34.70915 36.68127,-43.38645 -26.03187,-78.09562 -8.67729,-61.13546 -29.9761,-90.71714 -21.2988,-29.58167 51.66933,-84.01194 44.1753,-24.45418 -7.49402,59.55777 57.58566,110.83267 -30.37051,84.01195 C 56.210417,163.09886 19.923564,186.36977 63.310018,142.98332 106.69647,99.596867 111.03511,123.2622 115.76818,96.047071 120.50125,68.831932 148.50523,75.142689 119.7124,67.254242 90.91958,59.365796 77.114799,48.321972 77.114799,48.321972 Z`;

const path = Path.fromSVGString(messy);
const rectangle = new Rectangle(50, 0, 100, 300);

const bo = new BooleanOperation();
const description = bo.describe(path, rectangle.toPath());

{
    tpl.addSection("Union");
    const compound = bo.chain(bo.selectUnion(description));
    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.05, pan: [-100, 50], yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "union", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.05, pan: [-100, 50], yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(path, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(rectangle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}
{
    tpl.addSection("Intersection");
    const compound = bo.chain(bo.selectIntersection(description));
    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.05, pan: [-100, 50], yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "intersection", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.05, pan: [-100, 50], yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(path, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(rectangle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}

{
    tpl.addSection("Difference");
    const compound = bo.chain(bo.selectDifference(description));
    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.05, pan: [-100, 50], yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "difference", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.05, pan: [-100, 50], yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(path, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(rectangle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}

{
    tpl.addSection("Difference reverse");
    const compound = bo.chain(bo.selectDifferenceReverse(description));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.05, pan: [-100, 50], yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "difference reverse", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.05, pan: [-100, 50], yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(path, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(rectangle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}

{
    tpl.addSection("Exclusion");
    const compound = bo.chain(bo.selectExclusion(description));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.05, pan: [-100, 50], yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "exclusion", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.05, pan: [-100, 50], yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(path, { type: ViewElementType.None, ...lightStrokeFill("red") }));
    view1.add(new ViewElement(rectangle, { type: ViewElementType.None, ...lightStrokeFill("blue") }));
    view2.add(new ViewElement(compound, { type: ViewElementType.None, ...lightStrokeFill("purple") }));
}
