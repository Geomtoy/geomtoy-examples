import "https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
import { buildTree } from "./shared/sidebar";

import html from "./tpl-renderer.html";
import { codeHtml, newElement, markdownHtml } from "../scripts/common";
import { Utility } from "@geomtoy/util";
document.body.insertAdjacentHTML("afterbegin", html);
buildTree();

const tplMainDiv = document.querySelector("#main")!;

export default {
    title(title: string) {
        document.querySelector<HTMLHeadingElement>("h1")!.innerHTML = title;
    },
    addSection(sectionTitle: string, code = false) {
        tplMainDiv.insertAdjacentHTML("beforeend", code ? `<h2><code>${sectionTitle}</code></h2>` : `<h2>${sectionTitle}</h2>`);
    },
    addSubSection(sectionTitle: string, code = false) {
        tplMainDiv.insertAdjacentHTML("beforeend", code ? `<h3><code>${sectionTitle}</code></h3>` : `<h3>${sectionTitle}</h3>`);
    },
    addCode(code: string, lang = "js") {
        tplMainDiv.insertAdjacentHTML("beforeend", `<div class="col-12 rounded">${codeHtml(code.trim(), lang)}</div>`);
    },
    addMarkdown(md: string, className = "") {
        const div = newElement(`<div class="md ${className}"></div>`);
        tplMainDiv.appendChild(div);
        div.innerHTML = markdownHtml(md.trim());
    },
    addNote(note: string) {
        tplMainDiv.insertAdjacentHTML(
            "beforeend",
            `
        <div class="col-12 note">
            <div class="bg-primary bg-opacity-25 p-3 rounded">
                <div class="mb-4"><strong class="text-white bg-primary p-3 ">Note</strong></div> 
                ${markdownHtml(note.trim())}
            </div>
        </div>
        `
        );
    },
    addHtmlElement(element: HTMLElement) {
        tplMainDiv.appendChild(element);
    },
    addCard({
        title = "",
        rendererType = "canvas" as "canvas" | "svg" | false,
        withIntroduction = false,
        withPane = false,
        paneWidth = 250 as number | "auto",
        aspectRatio = "4:3",
        className = "col-12 col-md-6"
    } = {}) {
        const [w, h] = aspectRatio.split(":");
        const percentage = (Number(h) / Number(w)) * 100;
        const id = Utility.id("TemplateRenderer");
        const cardHtml = `<div class="${className}">
            <div class="card" id="card-${id}">
                ${withPane ? `<div class="card-pane" style="position:absolute; top:8px; right:8px; width:${paneWidth === "auto" ? "auto" : paneWidth + "px"}; z-index:1"></div>` : ""} 
                ${withIntroduction ? `<div class="card-introduction" style="position:absolute; top:8px; left:8px; width:150px; z-index:1; font-size:12px;"></div>` : ""}
                ${
                    rendererType
                        ? `
                        <div class="card-img-top position-relative">
                            <div style="padding-bottom:${percentage}%; height:0"></div>
                            <div class="overflow-hidden" style="position:absolute; left:0; top:0; right:0; bottom:0;">
                                ${rendererType === "canvas" ? `<canvas id="canvas-${id}" ></canvas>` : ""}
                                ${rendererType === "svg" ? `<svg id="svg-${id}" xmlns="http://www.w3.org/2000/svg"></svg>` : ""}
                            </div>
                        </div>`
                        : ""
                }
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <div class="card-text"></div>
                </div>
            </div>
        </div>`;
        tplMainDiv.insertAdjacentHTML("beforeend", cardHtml);
        const card = document.querySelector<HTMLDivElement>(`#card-${id}`)!;
        const canvas = document.querySelector<HTMLCanvasElement>(`#canvas-${id}`);
        const svg = document.querySelector<SVGSVGElement>(`#svg-${id}`);
        return {
            id,
            card: card,
            canvas: canvas,
            svg: svg,
            pane: card.querySelector("div.card-pane"),
            setTitle: function (title: string) {
                const cardTitle = card.querySelector(".card-title")!;
                cardTitle.innerHTML = title;
            },
            setDescription: function (type: "code" | "markdown" | "html", description: string) {
                const cardText = card.querySelector(".card-text")!;
                if (type === "html") {
                    cardText.innerHTML = description.trim();
                }
                if (type === "code") {
                    cardText.innerHTML = codeHtml(description.trim());
                }
                if (type === "markdown") {
                    cardText.innerHTML = markdownHtml(description.trim());
                }
            },
            appendDescription: function (type: "code" | "markdown" | "html", description: string) {
                const cardText = card.querySelector(".card-text")!;
                if (type === "html") {
                    cardText.innerHTML = cardText.innerHTML + description.trim();
                }
                if (type === "code") {
                    cardText.innerHTML = cardText.innerHTML + codeHtml(description.trim());
                }
                if (type === "markdown") {
                    cardText.innerHTML = cardText.innerHTML + markdownHtml(description.trim());
                }
            },
            setIntroduction: function (introduction: string) {
                const cardIntroduction = card.querySelector(".card-introduction")!;
                cardIntroduction.innerHTML = introduction;
            }
        };
    }
};
