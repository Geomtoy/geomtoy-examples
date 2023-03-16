import { BooleanOperation, Compound } from "@geomtoy/core";
import { CanvasRenderer, View, ViewElement, ViewElementInteractMode } from "@geomtoy/view";
import { strokeFill } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Compound-compound boolean operation");

const bo = new BooleanOperation();

const compound1 = Compound.fromSvgString(
    `M127.11,135.58c0.899,0.19,2.568,0.312,3.713,0.269l1.001-0.038c1.145-0.043,2.215-1.005,2.381-2.138
    l0.588-5.705c0.071-1.142-0.778-2.305-1.888-2.585l-0.956-0.242c-1.11-0.279-2.77-0.509-3.689-0.509s-1.724-0.936-1.785-2.077
    l-0.674-6.489c-0.181-1.13,0.407-2.211,1.305-2.401c0.899-0.191,2.475-0.76,3.5-1.266l0.901-0.441
    c1.026-0.505,1.617-1.819,1.311-2.923l-1.762-5.453c-0.397-1.072-1.644-1.791-2.771-1.597l-1.005,0.176
    c-1.127,0.194-2.737,0.66-3.578,1.034c-0.84,0.375-1.954-0.152-2.475-1.172l-3.263-5.647c-0.625-0.958-0.525-2.186,0.221-2.728
    c0.744-0.542,1.954-1.704,2.687-2.582l0.641-0.769c0.734-0.879,0.735-2.318,0.004-3.198l-3.842-4.259
    c-0.8-0.817-2.232-0.964-3.184-0.327l-0.823,0.552c-0.95,0.637-2.232,1.718-2.849,2.402c-0.615,0.685-1.849,0.655-2.737-0.064
    l-5.276-3.833c-0.96-0.623-1.37-1.785-0.908-2.583c0.459-0.797,1.092-2.35,1.403-3.451l0.275-0.974
    c0.313-1.101-0.271-2.417-1.296-2.925l-5.237-2.329c-1.064-0.42-2.433,0.027-3.042,0.996l-0.536,0.853
    c-0.609,0.968-1.34,2.476-1.624,3.35c-0.285,0.874-1.421,1.346-2.525,1.047l-6.383-1.349c-1.13-0.18-1.976-1.075-1.879-1.989
    c0.096-0.914,0.042-2.588-0.121-3.72l-0.141-0.983c-0.163-1.132-1.229-2.122-2.371-2.199c0,0-1.201-0.081-2.866-0.081
    c-1.669,0-2.876,0.081-2.876,0.081c-1.141,0.077-2.208,1.067-2.371,2.199l-0.141,0.982c-0.163,1.132-0.217,2.807-0.121,3.721
    c0.096,0.914-0.75,1.81-1.879,1.99l-6.383,1.35c-1.105,0.298-2.241-0.173-2.525-1.046c-0.284-0.874-1.015-2.381-1.624-3.35
    l-0.537-0.854c-0.609-0.969-1.978-1.417-3.041-0.996l-5.238,2.331c-1.024,0.508-1.608,1.825-1.295,2.925l0.275,0.973
    c0.313,1.1,0.945,2.653,1.406,3.452c0.46,0.798,0.052,1.96-0.907,2.583l-5.278,3.834c-0.889,0.72-2.122,0.75-2.737,0.065
    c-0.616-0.684-1.897-1.765-2.848-2.402L36.61,82.52c-0.951-0.637-2.384-0.49-3.185,0.327l-3.841,4.26
    c-0.73,0.881-0.729,2.32,0.004,3.199l0.641,0.768c0.733,0.878,1.943,2.041,2.688,2.582c0.746,0.542,0.845,1.77,0.221,2.729
    l-3.263,5.649c-0.52,1.019-1.633,1.547-2.473,1.173c-0.841-0.374-2.45-0.84-3.577-1.035l-1.006-0.175
    c-1.127-0.196-2.375,0.522-2.771,1.596l-1.762,5.455c-0.306,1.102,0.285,2.417,1.312,2.921l0.899,0.441
    c1.027,0.505,2.602,1.074,3.5,1.265c0.899,0.191,1.487,1.271,1.306,2.401c0,0-0.784,4.917-0.784,8.558c0,0.003,0,0.003,0,0.003
    c0,0.004-0.751,0.007-1.671,0.007s-2.579,0.23-3.688,0.509l-0.959,0.242c-1.109,0.28-1.958,1.443-1.887,2.586l0.59,5.706
    c0.166,1.132,1.237,2.093,2.38,2.137l1.001,0.037c1.144,0.043,2.814-0.078,3.713-0.269c0.898-0.19,1.877,0.557,2.175,1.662
    l2.015,6.205c0.412,1.067,0.062,2.246-0.778,2.621c-0.84,0.373-2.263,1.258-3.163,1.965l-0.796,0.626
    c-0.9,0.706-1.2,2.114-0.667,3.126l2.872,4.963c0.615,0.966,1.986,1.406,3.049,0.981l0.926-0.372
    c1.062-0.425,2.541-1.218,3.287-1.758c0.746-0.542,1.945-0.258,2.665,0.631l4.365,4.848c0.808,0.81,0.966,2.031,0.35,2.716
    s-1.557,2.071-2.091,3.083l-0.463,0.877c-0.534,1.012-0.239,2.424,0.655,3.137l4.633,3.378c0.951,0.637,2.38,0.486,3.178-0.334
    l0.708-0.729c0.797-0.821,1.826-2.145,2.287-2.943c0.46-0.797,1.67-1.023,2.689-0.502l5.959,2.653
    c1.067,0.412,1.708,1.462,1.425,2.335c-0.283,0.875-0.578,2.522-0.654,3.665l-0.068,1.012c-0.076,1.141,0.768,2.307,1.876,2.589
    l5.611,1.181c1.128,0.189,2.374-0.535,2.769-1.609l0.343-0.933c0.395-1.074,0.796-2.701,0.892-3.614
    c0.097-0.914,1.108-1.589,2.249-1.499c0,0,1.458,0.114,3.26,0.114c1.805,0,3.271-0.115,3.271-0.115
    c1.141-0.09,2.152,0.584,2.248,1.497c0.097,0.914,0.498,2.541,0.892,3.614l0.344,0.935c0.394,1.073,1.64,1.798,2.769,1.608
    l5.61-1.182c1.108-0.282,1.953-1.448,1.876-2.59l-0.067-1.009c-0.077-1.143-0.372-2.791-0.656-3.665s0.358-1.926,1.425-2.337
    l5.958-2.656c1.019-0.521,2.228-0.296,2.689,0.501c0.46,0.799,1.489,2.122,2.287,2.943l0.708,0.729
    c0.799,0.82,2.227,0.97,3.178,0.334l4.632-3.379c0.895-0.714,1.188-2.125,0.655-3.137l-0.462-0.877
    c-0.534-1.011-1.477-2.398-2.092-3.082c-0.617-0.686-0.46-1.907,0.349-2.718l4.364-4.848c0.719-0.89,1.918-1.175,2.663-0.634
    c0.745,0.543,2.224,1.333,3.286,1.758l0.927,0.373c1.063,0.425,2.435-0.017,3.05-0.981l2.87-4.963
    c0.532-1.014,0.231-2.42-0.668-3.127l-0.795-0.625c-0.899-0.706-2.323-1.591-3.164-1.966c-0.84-0.374-1.19-1.554-0.778-2.621
    l2.013-6.206C125.234,136.137,126.212,135.39,127.11,135.58z`
);
const compound2 = Compound.fromSvgString(
    `M175.403,87.286c0.899,0.19,2.568,0.311,3.713,0.268l1.002-0.038c1.145-0.042,2.215-1.005,2.381-2.137
    l0.587-5.705c0.072-1.141-0.777-2.305-1.888-2.585l-0.956-0.242c-1.109-0.279-2.769-0.509-3.689-0.509
    c-0.919,0-1.723-0.935-1.785-2.077l-0.673-6.489c-0.181-1.13,0.406-2.211,1.305-2.401c0.898-0.192,2.474-0.76,3.5-1.266l0.901-0.442
    c1.025-0.504,1.616-1.819,1.311-2.922l-1.763-5.453c-0.396-1.073-1.644-1.792-2.771-1.596l-1.004,0.175
    c-1.127,0.195-2.738,0.66-3.579,1.035c-0.839,0.375-1.954-0.152-2.474-1.171l-3.264-5.648c-0.624-0.958-0.524-2.186,0.221-2.728
    c0.744-0.542,1.954-1.704,2.688-2.582l0.64-0.769c0.734-0.879,0.735-2.318,0.005-3.198l-3.842-4.26
    c-0.801-0.816-2.233-0.964-3.184-0.327l-0.823,0.552c-0.951,0.637-2.233,1.718-2.849,2.402s-1.849,0.655-2.737-0.064l-5.277-3.833
    c-0.96-0.623-1.37-1.785-0.908-2.583c0.46-0.797,1.092-2.35,1.404-3.451l0.275-0.974c0.312-1.101-0.271-2.417-1.296-2.925
    l-5.237-2.329c-1.063-0.42-2.434,0.027-3.042,0.996l-0.536,0.853c-0.608,0.968-1.34,2.476-1.624,3.35
    c-0.285,0.875-1.421,1.346-2.524,1.048l-6.384-1.349c-1.13-0.18-1.976-1.075-1.879-1.989c0.096-0.914,0.042-2.588-0.121-3.72
    l-0.142-0.983c-0.162-1.132-1.229-2.122-2.369-2.199c0,0-1.202-0.081-2.867-0.081c-1.669,0-2.876,0.082-2.876,0.082
    c-1.142,0.077-2.209,1.066-2.371,2.199l-0.142,0.982c-0.161,1.132-0.217,2.807-0.121,3.721c0.097,0.914-0.749,1.81-1.879,1.99
    l-6.384,1.351c-1.105,0.298-2.24-0.173-2.524-1.046c-0.284-0.874-1.016-2.381-1.623-3.35l-0.538-0.854
    c-0.607-0.969-1.978-1.417-3.04-0.996l-5.238,2.33c-1.024,0.509-1.608,1.825-1.295,2.926l0.275,0.973
    c0.313,1.1,0.945,2.653,1.406,3.452c0.46,0.797,0.052,1.96-0.907,2.583l-5.278,3.834c-0.889,0.72-2.122,0.75-2.737,0.065
    c-0.616-0.684-1.897-1.765-2.848-2.402l-0.823-0.553c-0.951-0.637-2.384-0.49-3.185,0.327l-3.841,4.261
    c-0.73,0.881-0.729,2.32,0.004,3.199l0.641,0.768c0.733,0.878,1.943,2.041,2.688,2.582c0.746,0.542,0.845,1.77,0.221,2.729
    l-3.263,5.649c-0.52,1.019-1.633,1.547-2.473,1.173c-0.841-0.374-2.45-0.84-3.577-1.035l-1.006-0.175
    c-1.127-0.196-2.375,0.522-2.771,1.595l-1.762,5.455c-0.306,1.102,0.285,2.417,1.312,2.921l0.899,0.442
    c1.027,0.504,2.602,1.074,3.5,1.265c0.899,0.19,1.487,1.271,1.306,2.401c0,0-0.784,4.917-0.784,8.557c0,0.003,0,0.003,0,0.003
    c0,0.003-0.751,0.007-1.671,0.007s-2.579,0.23-3.688,0.509L66.496,77.1c-1.109,0.28-1.958,1.442-1.887,2.585l0.59,5.706
    c0.166,1.132,1.237,2.094,2.38,2.136l1.001,0.038c1.144,0.043,2.814-0.078,3.713-0.269c0.898-0.19,1.877,0.556,2.175,1.661
    l2.015,6.206c0.412,1.067,0.062,2.247-0.778,2.621c-0.84,0.373-2.263,1.258-3.163,1.964l-0.796,0.625
    c-0.9,0.706-1.2,2.114-0.667,3.128l2.872,4.962c0.615,0.966,1.986,1.405,3.049,0.981l0.926-0.372
    c1.062-0.426,2.541-1.217,3.287-1.758c0.746-0.542,1.945-0.258,2.665,0.63l4.365,4.848c0.808,0.81,0.966,2.031,0.35,2.718
    c-0.616,0.684-1.557,2.069-2.091,3.083l-0.463,0.877c-0.534,1.011-0.239,2.424,0.655,3.137l4.633,3.376
    c0.951,0.637,2.38,0.487,3.178-0.334l0.708-0.729c0.797-0.82,1.826-2.144,2.287-2.941c0.46-0.799,1.67-1.025,2.689-0.503
    l5.959,2.653c1.066,0.412,1.708,1.462,1.426,2.336c-0.285,0.874-0.579,2.522-0.655,3.664l-0.068,1.011
    c-0.076,1.142,0.769,2.308,1.877,2.59l5.611,1.182c1.129,0.188,2.374-0.536,2.769-1.61l0.343-0.933
    c0.396-1.074,0.797-2.701,0.892-3.614c0.097-0.915,1.108-1.59,2.249-1.5c0,0,1.458,0.114,3.26,0.114
    c1.805,0,3.271-0.114,3.271-0.114c1.142-0.09,2.152,0.583,2.249,1.498c0.096,0.912,0.497,2.54,0.893,3.614l0.343,0.933
    c0.395,1.074,1.641,1.798,2.769,1.61l5.61-1.182c1.109-0.283,1.954-1.449,1.876-2.59l-0.066-1.009
    c-0.076-1.144-0.373-2.792-0.655-3.666c-0.284-0.875,0.356-1.927,1.424-2.337l5.96-2.656c1.018-0.521,2.228-0.296,2.688,0.502
    c0.459,0.798,1.488,2.121,2.286,2.941l0.709,0.731c0.798,0.82,2.227,0.968,3.177,0.334l4.633-3.379
    c0.895-0.716,1.188-2.126,0.654-3.137l-0.462-0.877c-0.533-1.011-1.477-2.399-2.092-3.083c-0.616-0.687-0.46-1.908,0.349-2.718
    l4.364-4.847c0.719-0.891,1.918-1.176,2.664-0.635c0.744,0.542,2.223,1.334,3.286,1.758l0.927,0.372
    c1.062,0.426,2.434-0.016,3.049-0.979l2.87-4.965c0.532-1.013,0.232-2.419-0.668-3.125l-0.795-0.626
    c-0.899-0.706-2.323-1.592-3.163-1.966s-1.191-1.554-0.778-2.621l2.012-6.206C173.528,87.844,174.506,87.095,175.403,87.286z
    `
);

// console.log(desc1);
// console.log(desc2);
const description = bo.describe(compound1, compound2);
// console.log(combined)
{
    tpl.addSection("Union");
    const compound = bo.chain(bo.selectUnion(description));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(compound1, { interactMode: ViewElementInteractMode.None, ...strokeFill("red") }));
    view1.add(new ViewElement(compound2, { interactMode: ViewElementInteractMode.None, ...strokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...strokeFill("purple") }));
}

{
    tpl.addSection("Intersection");
    const compound = bo.chain(bo.selectIntersection(description));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(compound1, { interactMode: ViewElementInteractMode.None, ...strokeFill("red") }));
    view1.add(new ViewElement(compound2, { interactMode: ViewElementInteractMode.None, ...strokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...strokeFill("purple") }));
}

{
    tpl.addSection("Difference");
    const compound = bo.chain(bo.selectDifference(description));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(compound1, { interactMode: ViewElementInteractMode.None, ...strokeFill("red") }));
    view1.add(new ViewElement(compound2, { interactMode: ViewElementInteractMode.None, ...strokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...strokeFill("purple") }));
}

{
    tpl.addSection("DifferenceRev");
    const compound = bo.chain(bo.selectDifferenceRev(description));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(compound1, { interactMode: ViewElementInteractMode.None, ...strokeFill("red") }));
    view1.add(new ViewElement(compound2, { interactMode: ViewElementInteractMode.None, ...strokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...strokeFill("purple") }));
}

{
    tpl.addSection("Exclusion");
    const compound = bo.chain(bo.selectExclusion(description));

    const card1 = tpl.addCard({ title: "original", className: "col-6" });
    const view1 = new View({}, new CanvasRenderer(card1.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    const card2 = tpl.addCard({ title: "boolean", className: "col-6" });
    const view2 = new View({}, new CanvasRenderer(card2.canvas!, {}, { density: 10, zoom: 0.18, yAxisPositiveOnBottom: false }));

    view1.startResponsive((width, height) => (view1.renderer.display.origin = [width / 2, height / 2]));
    view1.startInteractive();

    view2.startResponsive((width, height) => (view2.renderer.display.origin = [width / 2, height / 2]));
    view2.startInteractive();

    view1.add(new ViewElement(compound1, { interactMode: ViewElementInteractMode.None, ...strokeFill("red") }));
    view1.add(new ViewElement(compound2, { interactMode: ViewElementInteractMode.None, ...strokeFill("blue") }));
    view2.add(new ViewElement(compound, { interactMode: ViewElementInteractMode.None, ...strokeFill("purple") }));
}
