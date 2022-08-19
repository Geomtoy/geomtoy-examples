const tpl$1 = `<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />

<div class="container py-3">
    <h1 class="mb-3"></h1>
    <div id="description"></div>
    <div style="height: 600px">
        <canvas id="canvas"></canvas>
    </div>
</div>
`;

document.body.innerHTML = tpl$1();
var tpl = {
  setDescription(text) {
    const description = document.querySelector("#description");
    description.innerHTML = text;
  },

  getCanvas() {
    return document.querySelector("#canvas");
  }

};

export { tpl as t };
