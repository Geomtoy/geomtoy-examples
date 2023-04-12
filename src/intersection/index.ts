import tpl from "../assets/templates/tpl-renderer";

tpl.title("Intersection");

tpl.addNote(`
The intersection mentioned here only studies the intersection of 1-dimensional(1D) geometries.<br>
The intersection mentioned here includes the **proper intersection** and the **coincidental intersection**.
`);

tpl.addSection("Proper intersection");
tpl.addMarkdown(`
Assuming there are two geometries(each with an underlying curve), they are NOT on the same underlying curve(NOT \`onSameTrajectory\`) and they have an intersection, then their intersection is a **finite** set of points,
which is the proper intersection.

This corresponds to the \`intersect\` of the \`Intersection\` class.
`);

tpl.addSection("Coincidental intersection");
tpl.addMarkdown(`
Assuming there are two geometries(each with an underlying curve), they are on the same underlying curve(\`onSameTrajectory\`) and they have an intersection, then their intersection is basically an **infinite** set of points,
which is the coincidental intersection.<br>
 
This corresponds to the \`coincide\` of the \`Intersection\` class.
`);

tpl.addSection("Predicates");
tpl.addMarkdown(`
The \`Intersection\` class provides some predicates to help you find a specific intersection between two geometries. This includes:
- \`equal\`
- \`separate\`
- \`intersect\`
- \`strike\`
- \`contact\`
- \`cross\`
- \`touch\`
- \`block\`
- \`blockedBy\`
- \`connect\`
- \`coincide\` 
- \`all\`

At the same time, these predicates are also methods of the \`Intersection\` class.<br>
For example:
`);
tpl.addCode(`
const line = new Line(...);
const circle = new Circle(...);
const intersection = new Intersection();
// If you only care about the non-tangent intersection
const strike = intersection.strike(line, circle);
// If you only care about the tangent intersection
const contact = intersection.contact(line, circle);
// If you don't care about tangent or not 
const intersect = intersection.intersect(line, circle);
`);

tpl.addSubSection("equal", true);
tpl.addMarkdown(`
Geometry **A** and **B** are \`onSameTrajectory\` and if they have endpoints and their endpoints are equal, then they are equal.
This means all points in **A** are in **B**, vice versa. This method returns \`undefined | boolean\`.
`);

tpl.addSubSection("separate", true);
tpl.addMarkdown(`
Geometry **A** and **B** have no intersection, whether proper or coincidental. This method returns \`undefined | boolean\`.
`);
tpl.addNote(`
We only study 1D geometries here. Any 2D geometry is also treated as 1D. so pay attention to this situation:
A circle is considered only as the points on the circle, not including the space it encloses.
If a circle contains another circle, they are also considered \`separate\`.
`);

tpl.addSubSection("intersect", true);
tpl.addMarkdown(`
Geometry **A** and **B** are not \`onSameTrajectory\`, and have a proper intersection. 
This intersection is a finite point set, which may be called **IntersectingPoint**. This method returns \`Point[]\`.
`);

tpl.addSubSection("strike", true);
tpl.addMarkdown(`
When \`intersect\`ing, report **StrikingPoint** describing the case when the multiplicity of **IntersectingPoint** is odd, 
so geometry **A** has a tendency to pass through geometry **B** or has passed through **B**, vice versa. This method returns \`Point[]\`.
`);

tpl.addSubSection("contact", true);
tpl.addMarkdown(`
When \`intersect\`ing, report **ContactingPoint** describing the case when the multiplicity of **IntersectingPoint** is even, 
so geometry **A** has no tendency to pass through geometry **B** or will never pass through **B**, vice versa. This method returns \`Point[]\`.
`);

tpl.addSubSection("cross", true);
tpl.addMarkdown(`
When \`strike\`ing, report **CrossingPoint** describing the case when the **StrikingPoint** is not equal to the endpoints of both geometries (or the geometries have no endpoints). 
This ensures that geometry A and geometry B have passed through each other. This method returns \`Point[]\`.
`);

tpl.addSubSection("touch", true);
tpl.addMarkdown(`
When \`contact\`ing, report **TouchingPoint** describing the case when the **ContactingPoint** is not equal to the endpoints of both geometries (or the geometries have no endpoints). 
This ensures that geometry A and geometry B have not passed through each other and will not pass through each other. This method returns \`Point[]\`.
`);

tpl.addSubSection("block", true);
tpl.addMarkdown(`
When \`intersect\`ing, report **BlockingPoint** describing the case when the **IntersectingPoint** is equal to the endpoints of geometry **B**. 
Regardless of whether geometry **B** has a tendency to pass through geometry **A**, geometry **B** does not pass through geometry **A** and stops on geometry **A**. 
This is like geometry **A** blocks the point movement of the geometry **B** at these points.
So **BlockingPoint** may be **StrikingPoint** or **ContactingPoint**.
This method returns \`Point[]\`.
`);

tpl.addSubSection("blockedBy", true);
tpl.addMarkdown(`
When \`intersect\`ing, report **BlockingPoint** describing the case when **IntersectingPoint** is equal to the endpoints of geometry **A**. 
Just like \`block\`, in this case geometry **B** blocks geometry **A**.
This method returns \`Point[]\`.
`);

tpl.addSubSection("connect", true);
tpl.addMarkdown(`
When \`intersect\`ing, report **ConnectingPoint** describing the case when **IntersectingPoint** is equal to an endpoint of geometry **A** and an endpoint of geometry **B**. 
This is like geometry **A** and geometry **B** are connected at this point. 
This method returns \`Point[]\`.
`);

tpl.addSubSection("coincide", true);
tpl.addMarkdown(` 
If geometry **A** and geometry **B** are \`onSameTrajectory\`, and have a coincidental intersection. 
This intersection basically is a infinite point set(maybe point or segment).
This method returns \`Geometry[]\`. 
`);

tpl.addSection("Summary");
tpl.addMarkdown(`
- When there is an intersection
    - When not \`onSameTrajectory\` 
        - \`intersect\`
            - \`strike\` only cares the multiplicity of intersection points is odd.
            - \`contact\` only cares the multiplicity of intersection points is even.
            - \`cross\` cares multiplicity is odd and intersection points is not equal to the endpoints.
            - \`touch\` cares multiplicity is even and intersection points is not equal to the endpoints.
            - \`block\`, \`blockedBy\` only cares about intersection points is equal to the endpoints of one of the geometries.
            - \`connect\` only cares about intersection points is equal to the endpoints of both of the geometries.
    - When \`onSameTrajectory\` 
        - \`equal\`  
        - \`coincide\`
- When there is not an intersection
    - \`separate\`
`);
