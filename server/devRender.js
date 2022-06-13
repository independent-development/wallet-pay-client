/* eslint-disable import/no-dynamic-require */
const path = require("path");
const { match } = require("path-to-regexp");
const child_process = require("child_process");

const match_function = match("/:language/:pathname?");
const server_file_path = path.join(process.cwd(), "./assets/server.js");

/** 开发环境服务端渲染 **/
module.exports = (html_template) => {
  return async function (request, response, next) {
    const { path: request_path } = request;
    const extname = path.extname(request_path);
    if (extname) {
      return next();
    }
    if (request_path === "/__webpack_hmr") {
      return next();
    }
    const { params } = match_function(request_path);
    if (!params) {
      return response.redirect(301, "/zh");
    }
    if (!["zh", "en"].includes(params.language)) {
      return response.redirect(301, "/zh");
    }
    const render_content = await new Promise((resolve) => {
      const sub_node = child_process.fork(server_file_path);
      sub_node.send({ html_template, location: request_path, language: params.language });
      sub_node.on("message", resolve);
    });
    response.send(render_content);
  }
}