// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/phoneshop$0.0.0/views/login.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    head_template = marko_loadTemplate(require.resolve("./includes/head.marko")),
    header_template = marko_loadTemplate(require.resolve("./includes/header.marko")),
    footer_template = marko_loadTemplate(require.resolve("./includes/footer.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"pt-br\"><head>");

  include_tag({
      _target: head_template,
      renderBody: function renderBody(out) {
        out.w(" ");
      }
    }, out, __component, "2");

  out.w("<link rel=\"stylesheet\" href=\"/public/stylesheets/login.css\"> </head><body>");

  component_globals_tag({}, out);

  out.w(" ");

  include_tag({
      _target: header_template,
      renderBody: function renderBody(out) {
        out.w(" ");
      }
    }, out, __component, "5");

  out.w("<section class=\"login-style\"><form action=\"/login\" method=\"post\" class=\"formulario\"><h1>Login</h1><div class=\"card\"><div class=\"foto\"><img src=\"/public/images/login.png\" alt=\"\"></div><div class=\"inserir\"><label>Email</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Digite seu email\" required></div><div class=\"inserir\"><label>Senha</label><input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Digite sua senha\" required></div><div class=\"inserir\"><label><input type=\"checkbox\"> Lembre-me</label></div><div class=\"inserir\"><p><a href=\"/cadastro\">Fazer Cadastro</a></p></div><div class=\"inserir\"><button type=\"submit\">Acessar conta</button></div></div> </form></section>");

  include_tag({
      _target: footer_template,
      renderBody: function renderBody(out) {
        out.w(" ");
      }
    }, out, __component, "26");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "27");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/phoneshop$0.0.0/views/login.marko",
    tags: [
      "./includes/head.marko",
      "./includes/header.marko",
      "./includes/footer.marko",
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
