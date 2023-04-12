import tpl from "../assets/templates/tpl-renderer";

tpl.title("About boolean operation");

tpl.addSection("Algorithm");
tpl.addMarkdown(`
Boolean operations are roughly divided into 3 stages:
\n
1. Find the intersection between segments, then split segments and determine the fill of them according to the fill rules. - Job for \`Processor\`.
2. Select the segments that matches the boolean operation. - Job for \`Selector\`.
3. Chain the segments(including merging redundant segments), then convert to \`Compound\` to return. - Job for \`Chainer\`.
\n
Geomtoy offer two strategies or two \`Processor\`s: **naive** and **sweep-line**:\n
- As the name suggests, **naive** is basically a processing algorithm with a time complexity of O(n^2). Under normal circumstances, you should not want 
to use this strategy, but it is useful for test and in the case when the expected number of intersections is very large.
- **sweep-line** is a variant of the <a href="https://en.wikipedia.org/wiki/Sweep_line_algorithm">sweep line algorithm</a> with a time 
complexity of O(nlogn), for details, please refer to the source code. It is more suitable for the general cases, (it is also the default).
`);

tpl.addCode(`
const bo = new BooleanOperation("naive" | "sweep-line");
`);

tpl.addSection("Available operations");
tpl.addMarkdown(`
- **SelfUnion**
- **Union** (A or B)
- **Intersection** (A and B)
- **Difference** (A not B)
- **DifferenceReverse** (B not A)
- **Exclusion** (A xor B)
`);

tpl.addSection("Input");
tpl.addMarkdown(`
**SelfUnion** : 1 general geometry.
\n
**Union/Intersection/Difference/DifferenceReverse/Exclusion**: 2 general geometries.
\n
`);

tpl.addNote(`
General geometry means: \`Path | Polygon | Compound\`,
see more info [General geometry](general/about.html)
`);

tpl.addMarkdown(`
The input general geometries can/will:
\n
- their segments can be self-intersecting.
- their segments can be coincident.
- their segments with dimensionally degenerate(too tiny, degenerate to a point) will be ignore.
- their property \`closed\` will assumed to be \`true\`.
- their fill rule will be respected. see [Respect for fill rule](boolean-operation/respect-for-fill-rule.html)
`);

tpl.addSection("Output");
tpl.addMarkdown(`
a \`Compound\` will be returned. its items(\`Path | Polygon\`) will:
- outer item will be positive winding(see [Coordinate system](view/coordinate-system.html)).
- inner item(hole) will be negative winding.
- inner of inner item(island in the hole) will be positive winding and so on. 
- items will not be self-intersecting.
- items will not have coincident segments.
- items will be closed.
- items will not have redundant segments.
- items may touch each other, but not cross each other.
\n
The fill rule of returned \`Compound\` will be as the same as the first input general geometry(the subject geometry/the primary geometry).
`);

tpl.addNote(`
Geomtoy boolean operations in general **DO NOT** force the conversion of any path command, arcs will still be preserved as being arc, 
and nth bezier curves will still be bezier curves **UNLESS**:
- The arc degenerates to line segment.
- The quadratic bezier degenerates to line segment.
- The bezier degenerates to line segment.
- The quadratic is a double line.
- The bezier is a triple line.
\n
In the above cases, they are all converted to line segment with path command being converted to \`Path.lineTo\`.
`);

tpl.addSection(`API`);
tpl.addMarkdown(`
If you need to do **only one type boolean operation at a time** and don't care about intermediate processes, you can use these:
`);

tpl.addCode(`
const bo = new BooleanOperation();
// gg stands for general geometry
bo.selfUnion(gg);
bo.union(ggA, ggB);
bo.intersection(ggA, ggB);
bo.difference(ggA, ggB);
bo.differenceReverse(ggA, ggB);
bo.exclusion(ggA, ggB);
`);
tpl.addMarkdown(`
If you need to do **multiple type boolean operations at a time**, then you can use the following to save time, because the intermediate results can be reused.
`);
tpl.addCode(`
const bo = new BooleanOperation();
// gg stands for general geometry
const ggA = ...;
const ggB = ...;

// The description is reusable.
const description = bo.describe(ggA, ggB)
return {
    union: bo.chain(bo.selectUnion(description)),
    intersection: bo.chain(bo.selectIntersection(description)),
    difference: bo.chain(bo.selectDifference(description)),
    differenceReverse: bo.chain(bo.selectDifferenceReverse(description)),
    exclusion: bo.chain(bo.selectExclusion(description)) 
} 
`);
tpl.addMarkdown(`
The above code will be much efficient and faster than the following code:
`);
tpl.addCode(`
// NOT efficient and slower
const bo = new BooleanOperation();
// gg stands for general geometry
const ggA = ...;
const ggB = ...;

return {
    union: bo.union(ggA, ggB),
    intersection: bo.intersection(ggA, ggB),
    difference: bo.difference(ggA, ggB),
    differenceReverse: bo.differenceReverse(ggA, ggB),
    exclusion: bo.exclusion(ggA, ggB)
} 
`);
