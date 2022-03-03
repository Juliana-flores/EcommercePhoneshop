// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/phoneshop$0.0.0/views/shop/shopping-cart.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    head_template = marko_loadTemplate(require.resolve("../includes/head.marko")),
    header_template = marko_loadTemplate(require.resolve("../includes/header.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
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

  out.w("<link rel=\"stylesheet\" href=\"/public/stylesheets/shopping-cart.css\"> <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\"><script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script><script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js\"></script><script src=\"https://use.fontawesome.com/5b286af670.js\"></script></head><body>");

  component_globals_tag({}, out);

  out.w(" ");

  include_tag({
      _target: header_template,
      renderBody: function renderBody(out) {
        out.w(" ");
      }
    }, out, __component, "9");

  out.w("<section class=\"cart\">");

  if (data.products) {
    out.w("<div class=\"panel-body\">");

    var for__12 = 0;

    marko_forEach(data.products, function(product) {
      var keyscope__13 = "[" + ((for__12++) + "]");

      out.w("<div class=\"row\"><div class=\"col-xs-4\"><h4 class=\"product-name\">" +
        marko_escapeXml(product.item.name) +
        "</h4></div><div class=\"col-xs-6\"><div class=\"col-xs-6 text-right\"><h6><strong>R$" +
        marko_escapeXml(product.price) +
        " <span class=\"text-muted\">x</span></strong></h6></div><div class=\"col-xs-4\"><input type=\"text\" class=\"form-control input-sm\" value=\"" +
        marko_escapeXmlAttr(product.qty) +
        "\" disabled></div><div class=\"col-xs-2\"><a href=\"/carrinho/remove/" +
        marko_escapeXmlAttr(product.item._id) +
        "\" class=\"btn btn-link btn-xs\"><span class=\"glyphicon glyphicon-minus\"> </span></a><a href=\"/carrinho/add/" +
        marko_escapeXmlAttr(product.item._id) +
        "\" class=\"btn btn-link btn-xs\"><span class=\"glyphicon glyphicon-plus\"> </span></a></div></div></div><hr>");
    });

    out.w("</div><div class=\"panel-footer\"><div class=\"row text-center\"><div class=\"col-xs-9\"><h4 class=\"text-right\">Total <strong>R$" +
      marko_escapeXml(data.totalPrice) +
      "</strong></h4></div><div class=\"col-xs-3\"><a href=\"/checkout\"><button type=\"button\" class=\"btn btn-success btn-block\">Checkout</button></a></div></div></div>");
  } else {}

  out.w("</section>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "38");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/phoneshop$0.0.0/views/shop/shopping-cart.marko",
    tags: [
      "../includes/head.marko",
      "../includes/header.marko",
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
