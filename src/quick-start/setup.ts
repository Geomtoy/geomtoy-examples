import tpl from "../assets/templates/tpl-renderer";

tpl.title("Start");

tpl.addSection("Package introduction");
tpl.addMarkdown(` 
- For computation only, you need import \`@geomtoy/core\`.
- For visualization and interaction, you need import \`@geomtoy/view\`.
- If you just want to use to some utility methods, then you can also just import \`@geomtoy/util\`.
`);

tpl.addSection("First example");
tpl.addMarkdown(`
Here we start the example with the following simple requirement:





`);
