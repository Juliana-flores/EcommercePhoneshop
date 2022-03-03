// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/phoneshop$0.0.0/views/index.marko",
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
    marko_forEach = marko_helpers.f,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
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

  out.w("<link rel=\"stylesheet\" href=\"/public/stylesheets/style.css\"> </head><body>");

  component_globals_tag({}, out);

  include_tag({
      _target: header_template,
      renderBody: function renderBody(out) {
        out.w(" ");
      }
    }, out, __component, "5");

  out.w("<section class=\"menu2\"><div class=\"mensagem\"><p id=\"corre\">O melhor lugar de fones é aqui! Tudo o que você precisa, você encontra!</p></div></section><section class=\"produtos\" id=\"produtos\">");

  var for__10 = 0;

  marko_forEach(data.products, function(product) {
    var keyscope__11 = "[" + ((for__10++) + "]");

    out.w("<section class=\"venda\"><picture><img src=\"" +
      marko_escapeXmlAttr(product.image) +
      "\" alt=\"Fone de ouvidos\"><figcaption><span>" +
      marko_escapeXml(product.description) +
      "</span></figcaption></picture><div class=\"descricao\"><div class=\"mensagem1\"><p>" +
      marko_escapeXml(product.name) +
      "</p></div><div class=\"figura\"><ul class=\"fav\"><li><i class=\"fa fa-heart \"></i></li></ul><ul class=\"cart\"><a href=\"/carrinho/add-to-cart/" +
      marko_escapeXmlAttr(product._id) +
      "\"><li><i class=\"fa fa-shopping-cart \"></i></li></a></ul> </div><div class=\"mensagem2\"><p><br>");

    var for__31 = 0;

    marko_forEach(product.additionalInfo, function(info) {
      var keyscope__32 = "[" + (((for__31++) + keyscope__11) + "]");

      out.w(marko_escapeXml(info) +
        "<br>");
    });

    out.w("</p></div></div></section>");
  });

  out.w("</section><section class=\"newsletter\"><h2>Inscreva-se agora</h2><h3>e Receba as últimas novidades e promoções</h3><form><input type=\"email\" name=\"Email\" placeholder=\"Seu email\"><button>Cadastrar!</button></form></section>");

  include_tag({
      _target: footer_template,
      renderBody: function renderBody(out) {
        out.w(" ");
      }
    }, out, __component, "40");

  out.w("<script src=\"/public/javascripts/index.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "42");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/phoneshop$0.0.0/views/index.marko",
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
