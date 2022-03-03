// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/phoneshop$0.0.0/views/about.marko",
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

  out.w("<link rel=\"stylesheet\" href=\"/public/stylesheets/about.css\"></head><body>");

  component_globals_tag({}, out);

  include_tag({
      _target: header_template,
      renderBody: function renderBody(out) {
        out.w(" ");
      }
    }, out, __component, "5");

  out.w("<section class=\"sobre-nos\"><img src=\"/public/images/fone.webp\"><div class=\"texto\"><h1> Quem somos?</h1><p> Esse é o site oficial da Phoneshop!! <br> Somos a principal empresa e-commerce do Brasil. Fundada em 10 de Janeiro de 2019, a empresa já conta com mais de 120 funcionários, e conta também com a entrega mais rápida do Brasil! <br> <br> Todos os produtos que estão sendo exibidos aqui, temos a pronta entrega, podendo chegar até sua casa 24 horas depois do pagamento. <br> Além da nossa rápida entrega, o site é 100% seguro, e tem as melhores média de avaliação entre os usuários, garantimos toda a segurança, desde a forma de pagamento até o momento em que você estiver com o produto em mãos. <br> Nós, da Phoneshop abrimos diversas oportunidades para funcionários mais novos e sem experiência, acreditamos que se o funcionário quer aprender e demonstrar serviço, aqui é o melhor lugar. <br> <br> Nosso objetivo é continuar com a mais baixa média de idade entre os funcionários, pois intercalando trabalhadores novos e cheio de ideias também novas, e a experiência de alguns da nossa equipe, estamos obtendo os melhores resultados. <br> <br> Agora que você já sabe um pouco da nossa história e de nossos pensamentos, é hora das compras!! <br> <br> Ass: Phoneshop.</p></div></section>");

  include_tag({
      _target: footer_template,
      renderBody: function renderBody(out) {
        out.w(" ");
      }
    }, out, __component, "22");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "23");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/phoneshop$0.0.0/views/about.marko",
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
