import { tagToEntity } from "../assets/scripts/common";
import tpl from "../assets/templates/tpl-renderer";

tpl.title("Setup");

tpl.addMarkdown(`
Geomtoy packages are packages that only contain js files, and are distributed via CDN and npm.
`);

tpl.addSection("Packages introduction");
tpl.addMarkdown(`
Geomtoy is available in two packaging forms, one is all synthesized together, and the other is packaged separately.
The all-in-one bundle package is \`geomtoy\`, and the scoped packages i.e., \`@geomtoy/util\`, \`@geomtoy/core\`, and \`@geomtoy/view\`
are separately packaged packages according to different features.
`);

tpl.addSection("All-in-one bundle package");
tpl.addMarkdown(`
- CDN 
    - https://cdn.jsdelivr.net/npm/geomtoy/
    - https://unpkg.com/browse/geomtoy/
- npm
    - https://www.npmjs.com/package/geomtoy
`);
tpl.addMarkdown("**Usage**");
tpl.addCode(
    tagToEntity(`
<!-- via CDN -->
<script src="https://cdn.jsdelivr.net/npm/geomtoy@{{version}}/dist/index.min.js"></script>
<script>
    const point = new Geomtoy.Point();
    const view = new Geomtoy.View();
</script>
`),
    "html"
);

tpl.addCode(`
// via npm
import * as Geomtoy from "geomtoy";
const point = new Geomtoy.Point();
const view = new Geomtoy.View(); 
// or 
import { Point, View } from "geomtoy";
const point = new Point();
const view = new View();
`);

tpl.addSection(`Scoped packages`);
tpl.addMarkdown(`
| package | CDN | npm |
| ------- | --- | --- |
| @geomtoy/util | https://cdn.jsdelivr.net/npm/@geomtoy/util/<br>https://unpkg.com/browse/@geomtoy/util/ | https://www.npmjs.com/package/@geomtoy/util
| @geomtoy/core | https://cdn.jsdelivr.net/npm/@geomtoy/core/<br>https://unpkg.com/browse/@geomtoy/core/ | https://www.npmjs.com/package/@geomtoy/core
| @geomtoy/view | https://cdn.jsdelivr.net/npm/@geomtoy/view/<br>https://unpkg.com/browse/@geomtoy/view/ | https://www.npmjs.com/package/@geomtoy/view
`);
tpl.addMarkdown(` 
- For computing only, you need import \`@geomtoy/core\`.
- For visualizing and interacting, you need import \`@geomtoy/view\`.
- If you just want to use to some utility functions, then you can also just import \`@geomtoy/util\`.
`);

tpl.addMarkdown("**Usage**");

tpl.addCode(
    tagToEntity(`
<!-- via CDN -->
<script src="https://cdn.jsdelivr.net/npm/@geomtoy/util@{{version}}/dist/index.min.js"></script>
<script>
    Geomtoy.util.Vector2.add(...); 
</script>

<script src="https://cdn.jsdelivr.net/npm/@geomtoy/core@{{version}}/dist/index.min.js"></script>
<script>
    const point = new Geomtoy.core.Point(); 
</script>

<script src="https://cdn.jsdelivr.net/npm/@geomtoy/view@{{version}}/dist/index.min.js"></script>
<script>
    const view = new Geomtoy.view.View(); 
</script>
`),
    "html"
);

tpl.addCode(`
// via npm
import * as GeomtoyUtil from "@geomtoy/util";
import * as GeomtoyCore from "@geomtoy/core";
import * as GeomtoyView from "@geomtoy/view";
GeomtoyUtil.Vector2.add(...);
const point = new GeomtoyCore.Point();
const view = new GeomtoyView.View(); 
// or 
import { Vector2 } from "@geomtoy/util";
import { Point } from "@geomtoy/core";
import { View } from "@geomtoy/view";
Vector2.add(...);
const point = new Point();
const view = new View();
`);
