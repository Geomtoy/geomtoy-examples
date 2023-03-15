import tpl from "../assets/templates/tpl-renderer";

tpl.title("About boolean operation");

tpl.addSection("Algorithm");
tpl.addMarkdown(`
Boolean operations are roughly divided into 3 stages:\n\n
1. Find relations(intersections or coincidences) between segments, then split segments and determine the fill of them according to the fill rules. - Job for \`Processor\`.
2. Select the segments that matches the boolean operation. - Job for \`Selector\`.
3. Chain the segments(including merging redundant segments), then convert to \`Compound\` to return. - Job for \`Chainer\`.
\n
We offer two strategies or two \`Processor\`s: **naive** and **sweep-line**:\n
- As the name suggests, **naive** is basically a processing algorithm with a time complexity of O(n^2), but useful for test and in the case when the expected number of intersections and coincidences is very large.
- **sweep-line** is a variant of the <a href="https://en.wikipedia.org/wiki/Sweep_line_algorithm">sweep line algorithm</a> with a time complexity of O(nlogn) , for details, please refer to the source code. It is more suitable for the general cases, (it is also the default).
`);
tpl.addSection("Available operations");
tpl.addMarkdown(`
- **SelfUnion**
- **Union** (A or B)
- **Intersection** (A and B)
- **Difference** (A not B)
- **DifferenceRev** (B not A)
- **Exclusion** (A xor B)
`);

tpl.addSection("Input");
tpl.addMarkdown(`
**SelfUnion** : 1 advanced geometry.\n
**Union/Intersection/Difference/DifferenceRev/Exclusion**: 2 advanced geometries.\n
advanced geometries means: \`Path | Polygon | Compound\`, they can:\n 
- their segments can be self-intersecting(crossing or touching).
- their segments can be coincident.
- their segments with dimensionally degenerate(too tiny, degenerate to a point) will be ignore.
- their property \`closed\` will assumed to be \`true\`.
- their fill rule will be respected.
`);

tpl.addSection("Output");
tpl.addMarkdown(`
a \`Compound\` will be returned. its items(\`Path | Polygon\`) will:
- outer item will be positive winding(see <a href="basic/view/coordinate-system.html">Coordinate system</a>).
- inner item(hole) will be negative winding.
- inner of inner item(island in the hole) will be positive winding and so on. 
- items will not be self-intersecting(crossing or touching).
- items will be closed.
- items will not have redundant segments.
- items will not overlap each other or have coincident segments.
- items may touch each other, but not cross each other.
\n
The fill rule of returned \`Compound\` will be as the same as the first input advanced geometry(the subject/the primary).
`);

tpl.addSection("Example code");
tpl.addCode(`
const bo = new BooleanOperation()
const path1 = new Path(...)
const path2 = new Path(...)
const compound = bo.intersection(path1, path2)

// The description is reusable.
const description = bo.describe(path1, path2)

const union = bo.chain(bo.selectUnion(description))
const intersection = bo.chain(bo.selectIntersection(description))
const difference = bo.chain(bo.selectDifference(description))
const differenceRev = bo.chain(bo.selectDifferenceRev(description))
const exclusion = bo.chain(bo.selectExclusion(description))

`);
