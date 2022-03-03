// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/phoneshop$0.0.0/views/includes/head.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<meta charset=\"UTF-8\"><meta name=\"description\" content=\"E-commerce especializado em fones\"><meta name=\"keywords\" content=\"Alto-falante, Fone de Ouvido, Headset\"><meta name=\"authors\" content=\"Caue, Juliana, Lethierry, Rafael\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Phoneshop</title><link rel=\"shortcut icon\" href=\"/public/images/icon-fone.png\" type=\"image/x-icon\"><script src=\"https://use.fontawesome.com/5b286af670.js\"></script>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/phoneshop$0.0.0/views/includes/head.marko"
  };
