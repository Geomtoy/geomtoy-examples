const path = require("path");

const orderDict = Object.entries([
    "quick-start",
    "basic",
    "dynamic",
    "event-system",
    "general",
    "inversion",
    "transform",
    "relationship",
    "view",
    "about",

    "construction",
    "extrema-and-bounding-box",
    "length",
    "portion-and-split",
    "tangent-normal-curvature",
    "tangent-normal",
    "closest-point"
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
