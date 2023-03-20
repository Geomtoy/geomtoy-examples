const { babel } = require("@rollup/plugin-babel");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const html = require("@rollup/plugin-html");
const del = require("rollup-plugin-delete");
const copy = require("rollup-plugin-copy");
const serve = require("rollup-plugin-serve");
const livereload = require("rollup-plugin-livereload");
const json = require("@rollup/plugin-json");
const pluginUtils = require("@rollup/pluginutils");
const ejs = require("ejs");
const { config } = require("./geomtoy/package.json");
const { order } = require("./order");

const fs = require("fs");
const path = require("path");

const extensions = [".js", ".ts"];
const exampleSrcPath = "./src";
const exampleDistPath = "./dist";
const host = "0.0.0.0";
const port = 1347;

const traverseDir = (dir, callback, excludeReg) => {
    const entries = fs.readdirSync(dir);
    entries.forEach(entry => {
        if (excludeReg.test(entry)) return;
        const entryPath = path.resolve(dir, entry);
        if (fs.statSync(entryPath).isDirectory()) {
            traverseDir(entryPath, callback, excludeReg);
        } else {
            callback(entryPath);
        }
    });
};
const posixDirPath = function (dirPath, addTailingSep = true) {
    return dirPath.split(path.sep).join(path.posix.sep) + (addTailingSep ? path.posix.sep : "");
};

const examples = (() => {
    const ret = [];
    traverseDir(
        exampleSrcPath,
        filePath => {
            if (extensions.includes(path.extname(filePath))) {
                const fileSubDir = path.dirname(path.relative(path.resolve(exampleSrcPath), filePath));
                const fileName = path.basename(filePath, path.extname(filePath));
                ret.push({
                    filePath,
                    order: order(fileSubDir, fileName),
                    fileSubDir,
                    fileName
                });
            }
        },
        /^_.+|assets/
    );
    return ret.sort((a, b) => (a.order < b.order ? -1 : 1));
})();

module.exports = {
    input: {
        ...examples.reduce((result, item) => {
            result[path.join(item.fileSubDir, item.fileName)] = item.filePath;
            return result;
        }, {})
    },
    output: {
        dir: exampleDistPath,
        sourcemap: process.env.GENERATE === "true" ? false : true,
        format: "esm",
        manualChunks: {
            geomtoy: [config.packages.core.scopedName, config.packages.util.scopedName, config.packages.view.scopedName]
        },
        chunkFileNames: "assets/js/[name].js"
    },
    plugins: [
        nodeResolve({ extensions }),
        json({ namedExports: false, preferConst: true }),
        babel({ babelHelpers: "bundled", extensions }),
        ...examples.map(item =>
            html({
                fileName: path.join(item.fileSubDir, item.fileName) + ".html",
                template: () => {
                    return `
                    <!doctype html>
                    <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            ${process.env.GENERATE === "true" ? "<base href='/geomtoy-examples/' />" : "<base href='/' />"}
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>${"Geomtoy examples-" + (item.fileSubDir === "." ? "" : posixDirPath(item.fileSubDir)) + item.fileName}</title>
                            <link rel="canonical" href="https://geomtoy.github.io/" />

                            <link rel="apple-touch-icon" sizes="180x180" href="assets/img/apple-touch-icon.png">
                            <link rel="icon" sizes="32x32" href="assets/img/favicon-32x32.png" type="image/png">
                            <link rel="icon" sizes="16x16" href="assets/img/favicon-16x16.png" type="image/png">
                            <link rel="mask-icon" href="assets/img/safari-pinned-tab.svg" color="#333333">
                            <link rel="icon" href="assets/img/favicon.ico">
                            <meta name="theme-color" content="#ffffff" /> 
                            <meta name="author" content="Fish Eleven">
                            <meta name="description" content="Geomtoy is a 2D geometry responsive computing, visualizing and interacting library.">
                        </head>
                        <body>
                            <script src="${posixDirPath(item.fileSubDir) + item.fileName + ".js"}" type="module"></script>
                        </body>
                    </html>`;
                }
            })
        ),
        del({
            targets: exampleDistPath + "/*",
            runOnce: true
        }),
        (function () {
            const filter = pluginUtils.createFilter(["**/*.ejs", "**/*.html"]);
            return {
                name: "ejs",
                transform: function (code, id) {
                    if (filter(id)) {
                        const tplString = ejs.render(code, {}, { filename: id });
                        return `const tpl = \`${tplString}\`; export default tpl;`;
                    }
                }
            };
        })(),
        (function () {
            let already = false;
            return {
                name: "sidebar tree json",
                buildStart: function () {
                    if (!already) {
                        already = true;
                        const treeData = examples.reduce(
                            (a, { fileSubDir, fileName }) => {
                                if (fileSubDir === ".") {
                                    a.children.push({ type: "file", name: fileName, url: `${posixDirPath(fileSubDir) + fileName}.html` });
                                } else {
                                    const parent = fileSubDir.split(path.sep).reduce((a, c) => {
                                        const index = a.children.findIndex(item => item.name === c);
                                        if (index !== -1) {
                                            return a.children[index];
                                        } else {
                                            const l = a.children.push({ type: "dir", name: c, children: [] });
                                            return a.children[l - 1];
                                        }
                                    }, a);
                                    parent.children.push({ type: "file", name: fileName, url: `${posixDirPath(fileSubDir) + fileName}.html` });
                                }
                                return a;
                            },
                            { children: [], type: "dir" }
                        );
                        const jsonPath = path.resolve(exampleSrcPath, "tree.json");
                        fs.writeFileSync(jsonPath, JSON.stringify(treeData));
                    }
                }
            };
        })(),
        copy({
            targets: [
                { src: "src/assets/styles/*", dest: "dist/assets/css" },
                { src: "src/assets/images/*", dest: "dist/assets/img" }
            ],
            copyOnce: true
        }),
        ...(process.env.GENERATE === "true"
            ? []
            : [
                  serve({
                      contentBase: exampleDistPath,
                      // open: true,
                      host: host,
                      port: port
                  }),
                  livereload(exampleDistPath)
              ])
    ]
};
