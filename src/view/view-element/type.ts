import tpl from "../../assets/templates/tpl-renderer";

tpl.title("View element type");

tpl.addMarkdown(`
The \`ViewElement\` is of three types. This \`type\` is also its interaction mode:

- \`ViewElementType.None\`: The view element is not interactable. It is only meant to be displayed without any interaction.
- \`ViewElementType.Activation\`: The view element is interactable and can also be activated. Their activation is used to invoke App logics. So you can also think of them as the **content**.
- \`ViewElementType.Operation\`: The view element is interactable but can NOT be activated. Their operation is used to implement App logics. So you can also think of them as **user interface**.
`);

tpl.addMarkdown(`
The different types of view elements differ in the following ways.
`);
tpl.addMarkdown(`
| Type | Supported interaction and events | Supported styles | 
| ---- | ---------------------- | ------ |
| None | - | \`style\` |
| Activation | *hover*<br>*unhover*<br>*activate*<br>*deactivate*<br>*click*<br>*dragStart*<br>*dragEnd* | \`style\`, \`clickStyle\`, \`activeStyle\`, \`hoverStyle\` |
| Operation | *hover*<br>*unhover*<br>*click*<br>*dragStart*<br>*dragEnd* | \`style\`, \`clickStyle\`, \`hoverStyle\` |
`);

tpl.addMarkdown(`
For more information about events, refer to [View scope events and view element scope events](view/events.html).
`);
