export function appendSvgElement(svgGeometryElementTag: "path" | "polygon" | "polyline" | "ellipse" | "circle" | "rect" | "line") {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("style", "width:0; height:0");
    const element = document.createElementNS("http://www.w3.org/2000/svg", svgGeometryElementTag);

    svg.appendChild(element);
    document.body.appendChild(svg);
    return element;
}
