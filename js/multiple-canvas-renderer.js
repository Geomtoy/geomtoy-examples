import 'https://cdn.jsdelivr.net/npm/tweakpane@3.0.8/dist/tweakpane.min.js';
import 'https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';
import { c as color } from './color.js';

function styles(strokeColor, fillColor, strokeWidth, noFill, noStroke) {
  let ret = {
    style: {
      stroke: color(strokeColor),
      fill: color(fillColor, 0.2),
      strokeWidth,
      noFill,
      noStroke,
      paintOrder: "fill"
    }
  };
  ret.hoverStyle = {
    fill: color("blue-a400", 0.2),
    stroke: color("blue-a400", 0.8),
    strokeWidth
  };
  ret.activeStyle = {
    fill: color("blue-a700", 0.2),
    stroke: color("blue-a700", 0.8),
    strokeWidth
  };
  return ret;
}

function strokeFill(c) {
  return styles(c, c, 4, false, false);
}
function lightStrokeFill(c) {
  return styles(c, c, 2, false, false);
}
function thinStrokeFill(c) {
  return styles(c, c, 1, false, false);
}
function lightStrokeFillTrans(c) {
  const ret = styles(c, c, 2, false, false);
  ret.style.fill = "transparent";
  return ret;
}
function stroke(c) {
  return styles(c, c, 4, true, false);
}
function lightStroke(c) {
  return styles(c, c, 2, true, false);
}
function thinStroke(c) {
  return styles(c, c, 1, true, false);
}
function codeHtml(code, lang = "js") {
  return `<pre><code class="language-${lang}">${code}</code></pre>`;
}

var treeJson = {
	children: [
		{
			type: "dir",
			name: "basic",
			children: [
				{
					type: "dir",
					name: "arc",
					children: [
						{
							type: "file",
							name: "closest-point",
							url: "basic\\arc/closest-point.html"
						},
						{
							type: "file",
							name: "construction",
							url: "basic\\arc/construction.html"
						},
						{
							type: "file",
							name: "extrema-and-bounding-box",
							url: "basic\\arc/extrema-and-bounding-box.html"
						},
						{
							type: "file",
							name: "length",
							url: "basic\\arc/length.html"
						},
						{
							type: "file",
							name: "portion",
							url: "basic\\arc/portion.html"
						}
					]
				},
				{
					type: "dir",
					name: "bezier",
					children: [
						{
							type: "file",
							name: "construction",
							url: "basic\\bezier/construction.html"
						},
						{
							type: "file",
							name: "extrema-and-bounding-box",
							url: "basic\\bezier/extrema-and-bounding-box.html"
						},
						{
							type: "file",
							name: "length",
							url: "basic\\bezier/length.html"
						},
						{
							type: "file",
							name: "portion",
							url: "basic\\bezier/portion.html"
						}
					]
				},
				{
					type: "dir",
					name: "circle",
					children: [
						{
							type: "file",
							name: "common-tangent-cirlces",
							url: "basic\\circle/common-tangent-cirlces.html"
						},
						{
							type: "file",
							name: "common-tangent-lines",
							url: "basic\\circle/common-tangent-lines.html"
						},
						{
							type: "file",
							name: "construction",
							url: "basic\\circle/construction.html"
						}
					]
				},
				{
					type: "dir",
					name: "ellipse",
					children: [
						{
							type: "file",
							name: "construction",
							url: "basic\\ellipse/construction.html"
						},
						{
							type: "file",
							name: "example",
							url: "basic\\ellipse/example.html"
						},
						{
							type: "file",
							name: "point-and-angle",
							url: "basic\\ellipse/point-and-angle.html"
						},
						{
							type: "file",
							name: "tangent-and-normal",
							url: "basic\\ellipse/tangent-and-normal.html"
						}
					]
				},
				{
					type: "file",
					name: "endpoint-intersection",
					url: "basic/endpoint-intersection.html"
				},
				{
					type: "dir",
					name: "inversion",
					children: [
						{
							type: "file",
							name: "beauty-of-inversion",
							url: "basic\\inversion/beauty-of-inversion.html"
						},
						{
							type: "file",
							name: "invert-circle",
							url: "basic\\inversion/invert-circle.html"
						},
						{
							type: "file",
							name: "invert-line",
							url: "basic\\inversion/invert-line.html"
						},
						{
							type: "file",
							name: "invert-point",
							url: "basic\\inversion/invert-point.html"
						}
					]
				},
				{
					type: "file",
					name: "isogonal-conjugate",
					url: "basic/isogonal-conjugate.html"
				},
				{
					type: "dir",
					name: "line-segment",
					children: [
						{
							type: "file",
							name: "construction",
							url: "basic\\line-segment/construction.html"
						},
						{
							type: "file",
							name: "length",
							url: "basic\\line-segment/length.html"
						}
					]
				},
				{
					type: "file",
					name: "path-boundingboxes-lines",
					url: "basic/path-boundingboxes-lines.html"
				},
				{
					type: "dir",
					name: "point",
					children: [
						{
							type: "file",
							name: "three-points-collinear",
							url: "basic\\point/three-points-collinear.html"
						}
					]
				},
				{
					type: "dir",
					name: "polygon",
					children: [
						{
							type: "file",
							name: "decompose",
							url: "basic\\polygon/decompose.html"
						}
					]
				},
				{
					type: "dir",
					name: "quadratic-bezier",
					children: [
						{
							type: "file",
							name: "length",
							url: "basic\\quadratic-bezier/length.html"
						},
						{
							type: "file",
							name: "portion",
							url: "basic\\quadratic-bezier/portion.html"
						},
						{
							type: "file",
							name: "tangent-normal-and-others",
							url: "basic\\quadratic-bezier/tangent-normal-and-others.html"
						}
					]
				},
				{
					type: "file",
					name: "three-points-quadratic-bezier",
					url: "basic/three-points-quadratic-bezier.html"
				},
				{
					type: "file",
					name: "triangle",
					url: "basic/triangle.html"
				},
				{
					type: "file",
					name: "vector",
					url: "basic/vector.html"
				},
				{
					type: "dir",
					name: "view",
					children: [
						{
							type: "file",
							name: "coordinate-system",
							url: "basic\\view/coordinate-system.html"
						},
						{
							type: "file",
							name: "density-and-zoom",
							url: "basic\\view/density-and-zoom.html"
						}
					]
				}
			]
		},
		{
			type: "dir",
			name: "boolean-operation",
			children: [
				{
					type: "file",
					name: "path-path",
					url: "boolean-operation/path-path.html"
				},
				{
					type: "file",
					name: "path-self-union",
					url: "boolean-operation/path-self-union.html"
				},
				{
					type: "file",
					name: "polygon-polygon",
					url: "boolean-operation/polygon-polygon.html"
				},
				{
					type: "file",
					name: "polygon-self-union",
					url: "boolean-operation/polygon-self-union.html"
				}
			]
		},
		{
			type: "file",
			name: "index",
			url: "index.html"
		},
		{
			type: "dir",
			name: "relationship",
			children: [
				{
					type: "file",
					name: "arc-arc",
					url: "relationship/arc-arc.html"
				},
				{
					type: "dir",
					name: "bezier-bezier",
					children: [
						{
							type: "file",
							name: "detail",
							url: "relationship\\bezier-bezier/detail.html"
						},
						{
							type: "file",
							name: "try",
							url: "relationship\\bezier-bezier/try.html"
						}
					]
				},
				{
					type: "file",
					name: "ellipse-ellipse",
					url: "relationship/ellipse-ellipse.html"
				},
				{
					type: "dir",
					name: "line-line-segment",
					children: [
						{
							type: "file",
							name: "detail",
							url: "relationship\\line-line-segment/detail.html"
						}
					]
				},
				{
					type: "dir",
					name: "line-segment-bezier",
					children: [
						{
							type: "file",
							name: "detail",
							url: "relationship\\line-segment-bezier/detail.html"
						}
					]
				},
				{
					type: "file",
					name: "line-segment-line-segment",
					url: "relationship/line-segment-line-segment.html"
				},
				{
					type: "file",
					name: "polygon-polygon",
					url: "relationship/polygon-polygon.html"
				},
				{
					type: "dir",
					name: "quadratic-bezier-bezier",
					children: [
						{
							type: "file",
							name: "detail",
							url: "relationship\\quadratic-bezier-bezier/detail.html"
						},
						{
							type: "file",
							name: "try",
							url: "relationship\\quadratic-bezier-bezier/try.html"
						}
					]
				},
				{
					type: "dir",
					name: "quadratic-bezier-quadratic-bezier",
					children: [
						{
							type: "file",
							name: "detail",
							url: "relationship\\quadratic-bezier-quadratic-bezier/detail.html"
						},
						{
							type: "file",
							name: "try",
							url: "relationship\\quadratic-bezier-quadratic-bezier/try.html"
						}
					]
				},
				{
					type: "file",
					name: "simple",
					url: "relationship/simple.html"
				},
				{
					type: "file",
					name: "try-path-path",
					url: "relationship/try-path-path.html"
				},
				{
					type: "file",
					name: "try-polygon-polygon",
					url: "relationship/try-polygon-polygon.html"
				}
			]
		},
		{
			type: "dir",
			name: "special",
			children: [
				{
					type: "file",
					name: "fisheleven-logo",
					url: "special/fisheleven-logo.html"
				}
			]
		},
		{
			type: "dir",
			name: "transformation",
			children: [
				{
					type: "file",
					name: "index",
					url: "transformation/index.html"
				}
			]
		}
	],
	type: "dir"
};

function treeRecursion(data, dirPath, parentElement) {
  data.children.forEach((item, index) => {
    const li = document.createElement("li");

    if (item.type === "file") {
      li.innerHTML = `<a class="file text-secondary text-decoration-none"  href="${item.url}">${item.name}</a>`;
      parentElement.append(li);
    }

    if (item.type === "dir") {
      dirPath = dirPath + "-" + index.toString();
      const active = sessionStorage.getItem(dirPath) || "1";
      li.innerHTML = `<span class="dir dir-open text-dark">${item.name}</span><ul data-path="${dirPath}" class="nested ${active === "1" ? "active" : ""}"></ul>`;
      parentElement.append(li);
      sessionStorage.setItem(dirPath, active);
      treeRecursion(item, dirPath, li.querySelector("ul.nested"));
    }
  });
}

function buildTree() {
  treeRecursion(treeJson, "r", document.querySelector("#treeRoot"));
  const togglers = document.getElementsByClassName("dir");

  for (const t of togglers) {
    t.addEventListener("click", function () {
      const ul = this.parentElement.querySelector(".nested");
      ul.classList.toggle("active");
      const dirPath = ul.getAttribute("data-path");
      sessionStorage.setItem(dirPath, ul.classList.contains("active") ? "1" : "0");
      this.classList.toggle("dir-open");
    });
  }
}

const tpl$1 = `<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
<link rel="stylesheet" href="css/tweakpane.css" />
<link rel="stylesheet" href="css/prism-one-light.css" />
<link rel="stylesheet" href="css/sidebar.css" />

<nav class="navbar navbar-expand-lg bg-body sticky-top shadow-sm">
    <div class="container-xxl">
        <a class="navbar-brand" href="/">
            <svg width="50" height="50" viewBox="0 0 707 707" version="1.1" xmlns="http://www.w3.org/2000/svg" class="d-inline-block align-middle">
                <g transform="matrix(0.707,0.707,-0.707,0.707,353.5,0)">
                    <path fill="#333333" stroke="none" d="M0,0V500H500V200H400V400H100V100H500V0Z" />
                    <path fill="#004ddf" stroke="none" d="M200,200V300H300V200Z" />
                </g>
            </svg>
            <span class="d-none d-sm-inline-block fw-bold">Geomtoy Examples</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</nav>


<div class="container-xxl">
    <div class="row flex-nowrap g-0">
        <div class="col-lg-3"><div class="sticky-top overflow-auto p-lg-3" id="sidebar" style="z-index: 1019">
    <div class="offcanvas-start offcanvas-lg" tabindex="-1" id="offcanvasSidebar">
        <div class="offcanvas-header border-bottom">
            <h5 class="offcanvas-title">Geomtoy Examples</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar"></button>
        </div>
        <div class="offcanvas-body">
            <ul id="treeRoot"></ul>
        </div>
    </div>
</div>
</div>
        <div class="col-12 col-lg overflow-hidden">
            <div class="py-3 p-lg-3">
                <h1 class="mb-3"></h1>
                <div id="main" class="row g-3"></div>
            </div>
        </div>
    </div>
</div>
`;

document.body.insertAdjacentHTML("afterbegin", tpl$1);
buildTree();
const tplMainDiv = document.querySelector("#main");
var tpl = {
  title(title) {
    document.querySelector("h1").innerHTML = title;
  },

  addSection(sectionTitle, className = "") {
    tplMainDiv.insertAdjacentHTML("beforeend", `<h2 class="${className}">${sectionTitle}</h2>`);
  },

  addSubSection(sectionTitle, className = "") {
    tplMainDiv.insertAdjacentHTML("beforeend", `<h3 class="${className}">${sectionTitle}</h3>`);
  },

  addCode(code) {
    tplMainDiv.insertAdjacentHTML("beforeend", codeHtml(code));
  },

  addParagraph(text, className = "") {
    tplMainDiv.insertAdjacentHTML("beforeend", `<p class="${className}">${text}</p>`);
  },

  addNote(text) {
    tplMainDiv.insertAdjacentHTML("beforeend", `<p class="bg-primary  bg-opacity-25 p-3 rounded" ><strong>Note:</strong>${text}</p>`);
  },

  addCard({
    title = "",
    description = "",
    canvasId = "",
    withIntroduction = false,
    withPane = false,
    aspectRatio = "4:3",
    className = "col-12 col-md-6"
  } = {}) {
    const [w, h] = aspectRatio.split(":");
    const percentage = Number(h) / Number(w) * 100;
    const cardHtml = `<div class="${className}">
            <div class="card">
                ${withPane ? `<div class="card-pane" style="position:absolute; top:8px; right:8px; width:250px; z-index:1"></div>` : ""} 
                ${withIntroduction ? `<div class="card-introduction" style="position:absolute; top:8px; left:8px; width:150px; z-index:1; font-size:12px;"></div>` : ""}
                <div class="card-img-top position-relative">
                    <div style="padding-bottom:${percentage}%; height:0"></div>
                    <div class="overflow-hidden" style="position:absolute; left:0; top:0; right:0; bottom:0;">
                        <canvas id="canvas-${canvasId}" ></canvas>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <div class="card-text">${description}</div>
                </div>
            </div>
        </div>`;
    tplMainDiv.insertAdjacentHTML("beforeend", cardHtml);
    const canvas = document.querySelector(`#canvas-${canvasId}`);
    const card = canvas.closest("div.card");
    return {
      canvasId: canvasId,
      canvas: canvas,
      pane: card.querySelector("div.card-pane"),
      setTitle: function (title) {
        const cardTitle = card.querySelector(".card-title");
        cardTitle.innerHTML = title;
      },
      setDescription: function (description) {
        const cardText = card.querySelector(".card-text");
        cardText.innerHTML = description;
      },
      setIntroduction: function (introduction) {
        const cardIntroduction = card.querySelector(".card-introduction");
        cardIntroduction.innerHTML = introduction;
      },
      appendDescription: function (description) {
        const cardText = card.querySelector(".card-text");
        cardText.innerHTML = cardText.innerHTML + description;
      }
    };
  }

};

export { stroke as a, thinStroke as b, codeHtml as c, thinStrokeFill as d, lightStroke as e, lightStrokeFillTrans as f, lightStrokeFill as l, strokeFill as s, tpl as t };
