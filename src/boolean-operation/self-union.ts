import tpl from "../assets/templates/tpl-renderer";

tpl.title("Self union boolean operation");

tpl.addSection("Self union");
tpl.addCode(`
const compound = bo.selfUnion(gg);
`);

tpl.addMarkdown(`
The self union is also defined as a boolean operation, so what is it for, or what does it do?

- Eliminate coincident segments
- Eliminate self-intersecting segments
- Retain the holes, islands, islands within islands etc. produced by self-intersecting.
- Basically, it can also be understood as rebuilding general geometries according to the filling region.
- It is finally possible to **calculate the area** of ​​complex polygons (self-intersecting polygons), 
complex paths (self-intersecting paths)
`);

tpl.addMarkdown(`
For eliminating coincident segments and self-intersecting segments, refer to:
- [Path self union](boolean-operation/path-self-union.html)
- [Polygon self union](boolean-operation/polygon-self-union.html)
`);

tpl.addMarkdown(`
For calculate the area of complex polygons and complex paths, refer to:
- [Calculate the area of complex general geometry](boolean-operation/calculate-the-area-of-complex-general.html)
`);
