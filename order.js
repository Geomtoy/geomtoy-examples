const path = require("path");

const orderDict = Object.entries([
    "index",
    "about",

    "quick-start",
    "view",
    "basic",
    "dynamic",
    "event-system",
    "general",
    "inversion",
    "transform",
    "intersection",
    "view",
    "about",

    "point",
    "vector",
    "line",
    "ray",
    "rectangle",
    "circle",
    "ellipse",
    "arc",
    "line-segment",
    "quadratic-bezier",
    "bezier",
    "triangle",
    "regular-polygon",
    "image",
    "text",

    "construction",
    "extrema-and-bounding-box",
    "length",
    "portion-and-split",
    "tangent-normal-curvature",
    "tangent-normal",
    "closest-point",

    "common-boolean-operation",
    "self-union"
]).reduce((acc, [index, word]) => {
    acc[word] = index;
    return acc;
}, {});

const ORDER_MAX = "999";

module.exports = {
    order: function (fileSubDir, fileName) {
        // prettier-ignore
        return [
        ...fileSubDir.split(path.sep).map(seg => orderDict[seg]?.padStart(3, "0") ?? ORDER_MAX), 
        orderDict[fileName]?.padStart(3, "0") ?? ORDER_MAX
    ].join("");
    }
};
