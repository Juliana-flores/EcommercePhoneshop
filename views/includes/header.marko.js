// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/phoneshop$0.0.0/views/includes/header.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<header class=\"cabecalho\"><div class=\"menu\"><div class=\"logo\"><a href=\"/\"><img src=\"/public/images/logo-fone.png\" alt=\"Logo Phoneshop\"></a></div><div class=\"itens\"><ul><li><a href=\"/carrinho\"><i class=\"fa fa-shopping-cart \"></i><span> Carrinho </span> </a></li><li><a href=\"/about\"><i class=\"fa fa-info-circle \"></i><span> Quem somos</span></a></li><li><a href=\"/contato\"><i class=\"fa fa-phone\"></i><span> Contato </span></a></li>");

  if (!out.global.login) {
    out.w("<li><a href=\"/login\"><i class=\"fa fa-user \"></i><span> Entrar </span></a></li>");
  } else {
    out.w("<li><a href=\"/logout\"><i class=\"fa fa-sign-out  \"></i><span> Sair </span></a></li>");
  }

  out.w("</ul></div></div></header>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/phoneshop$0.0.0/views/includes/header.marko"
  };
