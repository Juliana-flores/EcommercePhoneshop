// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/phoneshop$0.0.0/views/includes/footer.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<footer class=\"footer\"><div class=\"social-icons\"><a href=\"#\"><i class=\"fa fa-facebook fa-lg\"></i></a><a href=\"#\"><i class=\"fa fa-instagram fa-lg\"></i></a><a href=\"#\"><i class=\"fa fa-linkedin fa-lg\"></i></a></div><p class=\"copyright\">Copyright Phoneshop(c) 2021 Todos os direitos reservados.<br><a href=\"#\">Para mais informações, clique aqui.</a></p></footer>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/phoneshop$0.0.0/views/includes/footer.marko"
  };
