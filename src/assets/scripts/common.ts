import { FontConfig } from "@geomtoy/core";
import { InteractiveStyle, Style } from "@geomtoy/view";
import "https://cdn.jsdelivr.net/npm/marked@4.1.0/marked.min.js";
import "https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js";
import "https://cdn.jsdelivr.net/npm/prismjs@1.28.0/components/prism-typescript.min.js";
import color from "./color";

export var mathFont: FontConfig = {
    fontSize: 28,
    fontFamily: "Cambria Math, Times New Roman, math, serif",
    fontBold: false,
    fontItalic: true
};
export var normalFont: FontConfig = {
    fontSize: 16,
    fontFamily: "sans-serif",
    fontBold: false,
    fontItalic: false
};

type ColorName = Parameters<typeof color>["0"];

export function styles(strokeColor: string, fillColor: string, style: Omit<Partial<Style>, "stroke" | "fill">) {
    const strokeWidth = style.strokeWidth ?? 2;
    return {
        style: {
            stroke: strokeColor,
            fill: fillColor,
            strokeWidth: strokeWidth,
            strokeDash: style.strokeDash ?? undefined,
            noFill: style.noFill ?? false,
            noStroke: style.noStroke ?? false,
            paintOrder: "fill"
        },
        hoverStyle: {
            fill: color("blue-a100", 0.5),
            stroke: color("blue-a100"),
            strokeWidth
        },
        clickStyle: {
            fill: color("blue-a200", 0.5),
            stroke: color("blue-a200"),
            strokeWidth
        },
        activeStyle: {
            fill: color("blue-a700", 0.5),
            stroke: color("blue-a700"),
            strokeWidth
        }
    } as {
        style: Partial<Style>;
        hoverStyle: Partial<InteractiveStyle>;
        clickStyle: Partial<InteractiveStyle>;
        activeStyle: Partial<InteractiveStyle>;
    };
}

export function strokeFill(c: ColorName) {
    return styles(color(c), color(c, 0.5), { strokeWidth: 4 });
}
export function lightStrokeFill(c: ColorName) {
    return styles(color(c), color(c, 0.5), { strokeWidth: 2 });
}
export function thinStrokeFill(c: ColorName) {
    return styles(color(c), color(c, 0.5), { strokeWidth: 1 });
}

export function strokeFillTrans(c: ColorName) {
    return styles(color(c), "transparent", { strokeWidth: 4 });
}
export function lightStrokeFillTrans(c: ColorName) {
    return styles(color(c), "transparent", { strokeWidth: 2 });
}
export function thinStrokeFillTrans(c: ColorName) {
    return styles(color(c), "transparent", { strokeWidth: 1 });
}

export function strokeOnly(c: ColorName) {
    return styles(color(c), "black", { strokeWidth: 4, noFill: true });
}
export function lightStrokeOnly(c: ColorName) {
    return styles(color(c), "black", { strokeWidth: 2, noFill: true });
}
export function thinStrokeOnly(c: ColorName) {
    return styles(color(c), "black", { strokeWidth: 1, noFill: true });
}

export function dashedStroke(c: ColorName) {
    return styles(color(c), "black", { noFill: true, strokeWidth: 4, strokeDash: [4] });
}
export function dashedLightStroke(c: ColorName) {
    return styles(color(c), "black", { noFill: true, strokeWidth: 2, strokeDash: [3] });
}
export function dashedThinStroke(c: ColorName) {
    return styles(color(c), "black", { noFill: true, strokeWidth: 1, strokeDash: [2] });
}

export function fillOnly(c: ColorName) {
    return styles("black", color(c), { noStroke: true });
}
export function fillTransOnly() {
    return styles("black", "transparent", { noStroke: true });
}

export function codeHtml(code: string, lang = "js") {
    return `<pre><code class="language-${lang}">${code}</code></pre>`;
}

export function markdownHtml(md: string) {
    // @ts-expect-error
    return marked.parse(md);
}

export function newElement(htmlString: string) {
    const document = new DOMParser().parseFromString(htmlString, "text/html");
    return document.body.firstElementChild as HTMLElement;
}

export function tagToEntity(html: string) {
    return html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
