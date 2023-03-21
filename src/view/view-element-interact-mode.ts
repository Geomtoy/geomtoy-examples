import tpl from "../assets/templates/tpl-renderer";

tpl.title("View element interact mode");

tpl.addMarkdown(`
The view element has three interact modes:

- \`ViewElementType.None\`: The view element is not interactable. It is only meant to be displayed without any interaction.
- \`ViewElementType.Activation\`: The view element is interactable and can also be activated. The activated view elements is a 
collection at \`View.activeElements\`. Their activation is used to invoke App logics. So you can also think of them as the **content**.
- \`ViewElementType.Operation\`: The view element is interactable but can NOT be activated. The operated view element corresponds to 
\`View.operativeElement\`. Their operation is used to implement App logics. So you can also think of them as **user interface**.

The [transformation example](transformation/example.html) is also a good illustration of what the above means.

You can also refer to the view element [event](view/events.html).
`);
