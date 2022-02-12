
import { css, g, div, get } from "galho";
import { word, body, menubar, dropdown, sentence, style } from "galhui"
import { deepSgn } from "inutil";
import { basic, C, theme } from "galhui/core";

export function mainBar() {
  return menubar(
    g("a", C.head, sentence("Asriel Pires({portfolio})")),
    dropdown("Sistemas", [

    ]),
    dropdown("Bibliotecas", [

    ]),
    dropdown("Applica��es", [

    ])
  );
}


export const path = body.attr("data-path");
export const cssTag = g("style").addTo(document.head);
export function init() {
  // get("#menubar").replace(menubar());
  // get("#menubar").replace(menubar());

  deepSgn(theme, basic());
  css(style(), cssTag);
  css({
    "html,body": {
      height: "100vh",
      overflow: "hidden"
    }
  }, cssTag);
}