/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../entity/entity-core.ts":
/*!********************************!*\
  !*** ../entity/entity-core.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../galhui/accordion.ts":
/*!******************************!*\
  !*** ../galhui/accordion.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hidden": () => (/* binding */ hidden),
/* harmony export */   "accordion": () => (/* binding */ accordion),
/* harmony export */   "style": () => (/* binding */ style)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "../galhui/core.ts");
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "../galhui/icon.ts");
/* harmony import */ var inutil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inutil */ "../inutil/inutil.js");
/* harmony import */ var orray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! orray */ "../orray/orray.js");





const hidden = (head, body, open) => (0,galho__WEBPACK_IMPORTED_MODULE_1__.div)([_core__WEBPACK_IMPORTED_MODULE_2__.$.c, "ac"], [
    head = (0,galho__WEBPACK_IMPORTED_MODULE_1__.div)("hd", [
        (0,_icon__WEBPACK_IMPORTED_MODULE_3__["default"])("menuR").cls("a"),
        head
    ]).cls("o", !!open).on("click", () => head.tcls("o")),
    (0,galho__WEBPACK_IMPORTED_MODULE_1__.wrap)(body, "bd")
]);
function accordion(items, i = {}) {
    return (0,orray__WEBPACK_IMPORTED_MODULE_0__["default"])(items).bind((0,galho__WEBPACK_IMPORTED_MODULE_1__.div)([_core__WEBPACK_IMPORTED_MODULE_2__.$.c, "ac"]), ([h, b], j, p) => {
        p.place(j * 2, [
            h = (0,galho__WEBPACK_IMPORTED_MODULE_1__.div)("hd", [
                (0,inutil__WEBPACK_IMPORTED_MODULE_4__.t)(i.icon) && (0,_icon__WEBPACK_IMPORTED_MODULE_3__["default"])("menuR").cls("a"),
                h
            ]).cls("o", i.def == j).on("click", () => {
                if (h.isCls("o"))
                    h.cls("o", false);
                else {
                    (0,inutil__WEBPACK_IMPORTED_MODULE_4__.t)(i.single) && p.childs("." + "hd").cls("o", false);
                    h.cls("o");
                }
            }),
            (0,galho__WEBPACK_IMPORTED_MODULE_1__.wrap)(b, "bd")
        ]);
    });
}
function style() {
    return {
        [(0,_core__WEBPACK_IMPORTED_MODULE_2__.c)("ac")]: {
            ["." + "bd"]: {
                display: "none"
            },
            ["." + "hd"]: {
                [`&.${"o"}+.${"bd"}`]: {
                    display: "block"
                },
            },
        }
    };
}


/***/ }),

/***/ "../galhui/button.ts":
/*!***************************!*\
  !*** ../galhui/button.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "button": () => (/* binding */ button),
/* harmony export */   "link": () => (/* binding */ link),
/* harmony export */   "ibutton": () => (/* binding */ ibutton),
/* harmony export */   "ilink": () => (/* binding */ ilink),
/* harmony export */   "close": () => (/* binding */ close),
/* harmony export */   "cancel": () => (/* binding */ cancel),
/* harmony export */   "confirm": () => (/* binding */ confirm),
/* harmony export */   "buttons": () => (/* binding */ buttons),
/* harmony export */   "style": () => (/* binding */ style)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../galhui/core.ts");
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "../galhui/icon.ts");



const button = (text, click) => (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("button", "bt", text).on("click", click);
const link = (text, href) => (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("a", "bt", text).prop("href", href);
const ibutton = (i, text, click) => (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("button", (0,galho__WEBPACK_IMPORTED_MODULE_0__.cl)(_core__WEBPACK_IMPORTED_MODULE_1__.$.c, "bt"), [(0,_icon__WEBPACK_IMPORTED_MODULE_2__["default"])(i), text]).on("click", click);
const ilink = (i, text, href) => (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("a", "lk", [(0,_icon__WEBPACK_IMPORTED_MODULE_2__["default"])(i), text]).prop("href", href);
const close = (click) => (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)((0,galho__WEBPACK_IMPORTED_MODULE_0__.cl)(_core__WEBPACK_IMPORTED_MODULE_1__.$.c, "cl"), (0,_icon__WEBPACK_IMPORTED_MODULE_2__["default"])("close")).on("click", click);
const cancel = (click) => ibutton("cancel", _core__WEBPACK_IMPORTED_MODULE_1__.$.w.cancel, click).cls("_e");
const confirm = (click) => ibutton("confirm", _core__WEBPACK_IMPORTED_MODULE_1__.$.w.confirm, click).cls("_a");
const buttons = (...buttons) => (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)("bs", buttons);
function style() {
    let { a, s, l } = _core__WEBPACK_IMPORTED_MODULE_1__.theme;
    return {
        ["." + "lk"]: {
            color: l.fg,
            ":visited": {
                color: l.vis,
            },
            ":active": {
                color: l.on,
            },
        },
        [(0,_core__WEBPACK_IMPORTED_MODULE_1__.c)("bt")]: Object.assign(Object.assign({}, (0,_core__WEBPACK_IMPORTED_MODULE_1__.block)(a)), { ["&." + "full"]: { display: "block", width: "auto" }, ["&." + "_a"]: { background: s.accept }, ["&." + "_e"]: { background: s.error }, ["&." + "_i"]: { background: s.main }, ["&." + "_s"]: { background: s.side }, ["&." + "_w"]: { background: s.warn } }),
        [(0,_core__WEBPACK_IMPORTED_MODULE_1__.c)("cl")]: {
            color: s.error,
            background: "none",
            opacity: 0.8,
            ":hover": {
                opacity: 1
            }
        },
        ["." + "bs"]: {},
    };
}


/***/ }),

/***/ "../galhui/core.ts":
/*!*************************!*\
  !*** ../galhui/core.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "spc": () => (/* binding */ spc),
/* harmony export */   "hs": () => (/* binding */ hs),
/* harmony export */   "vs": () => (/* binding */ vs),
/* harmony export */   "bord": () => (/* binding */ bord),
/* harmony export */   "block": () => (/* binding */ block),
/* harmony export */   "word": () => (/* binding */ word),
/* harmony export */   "sentence": () => (/* binding */ sentence),
/* harmony export */   "theme": () => (/* binding */ theme),
/* harmony export */   "basic": () => (/* binding */ basic),
/* harmony export */   "c": () => (/* binding */ c),
/* harmony export */   "tAlign": () => (/* binding */ tAlign),
/* harmony export */   "body": () => (/* binding */ body),
/* harmony export */   "doc": () => (/* binding */ doc),
/* harmony export */   "style": () => (/* binding */ style)
/* harmony export */ });
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var inutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inutil */ "../inutil/inutil.js");


var $ = {
    c: "_",
    iconS: 24,
    delay: 500,
    w: {}
};
const spc = (v, unit = "px") => (0,inutil__WEBPACK_IMPORTED_MODULE_0__.isN)(v) ? v + unit : v.map(v => v + unit).join(" ");
const hs = (v) => (0,inutil__WEBPACK_IMPORTED_MODULE_0__.isN)(v) ? v : v[0];
const vs = (v) => (0,inutil__WEBPACK_IMPORTED_MODULE_0__.isN)(v) ? v : v[1];
const bord = ({ w, s, c }) => `${w || 1}px ${s || "solid"} ${c}`;
const block = (v) => ({
    color: v.txt,
    padding: spc(v.pad),
    margin: spc(v.mrg),
    borderRadius: spc(v.rad),
    border: v.brd && bord(v.brd),
    background: v.bg,
});
function word(key) { return key; }
function sentence(format) {
    const exp = /\{\w+\}/;
    format.replace(exp, (v) => $.w[v.slice(1, v.length - 1)]);
}
var theme = {};
const basic = () => ({
    bg: "#fff",
    txt: "#000",
    font: "ARIAL",
    off: 0.7,
    a: {
        mrg: [2, 1],
        pad: [2, 1],
        rad: 2,
        bg: "#cacbcd",
    },
    l: {
        fg: "#0d6efd",
        on: "#0a58ca",
        vis: "#673ab7"
    },
    s: {
        accept: "#198754",
        main: "#0d6efd",
        side: "#6c757d",
        error: "#dc3545",
        warn: "#ffc107",
    },
    dd: {
        i: true
    },
    div: { w: 1 },
    sz: {
        xl: 30,
        l: 20,
        n: 11,
        s: 9,
        xs: 7.5
    },
    i: { bg: "inherit" },
    m: {
        h: 20, scp: 8
    },
    on: { bg: "#465cab", fg: "#fff" },
    tb: {},
});
const c = (cls) => $.c ? `.${$.c}.${cls}` : "." + cls;
function tAlign(v) {
    switch (v) {
        case "_lf":
            return "left";
        case "_c":
            return "center";
        case "_rg":
            return "right";
        case "_j":
            return "justify";
    }
}
const body = new galho__WEBPACK_IMPORTED_MODULE_1__.S(document.body);
const doc = new galho__WEBPACK_IMPORTED_MODULE_1__.S(document);
function style() {
    let { sz } = theme;
    return {
        "*": {
            boxSizing: "border-box",
        },
        body: {
            background: theme.bg,
            color: theme.txt,
            fontFamily: theme.font,
            fontSize: theme.sz.n + "px",
            margin: 0
        },
        table: {
            borderCollapse: "collapse",
        },
        button: {
            background: "none",
            color: "inherit",
            border: "none"
        },
        a: {
            color: "inherit",
            textDecoration: "none"
        },
        hr: { margin: 0, },
        input: {
            background: "inherit",
            color: "inherit",
            border: "none"
        },
        ["." + "xl"]: { fontSize: sz.xl + "px" },
        ["." + "_l"]: { fontSize: sz.l + "px" },
        ["." + "_s"]: { fontSize: sz.s + "px" },
        ["." + "xs"]: { fontSize: sz.xs + "px" },
        ":disabled": { opacity: theme.off },
    };
}


/***/ }),

/***/ "../galhui/dropdown.ts":
/*!*****************************!*\
  !*** ../galhui/dropdown.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dropdown),
/* harmony export */   "style": () => (/* binding */ style)
/* harmony export */ });
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../galhui/core.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "../galhui/icon.ts");
/* harmony import */ var inutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inutil */ "../inutil/inutil.js");
/* harmony import */ var _hover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hover */ "../galhui/hover.ts");





function dropdown(label, items, i = (0,inutil__WEBPACK_IMPORTED_MODULE_0__.t)(_core__WEBPACK_IMPORTED_MODULE_1__.theme.dd.i)) {
    return (0,galho__WEBPACK_IMPORTED_MODULE_2__.div)(0, [
        label,
        i && (0,_icon__WEBPACK_IMPORTED_MODULE_3__["default"])("menuD")
    ]).do(e => {
        let mn = items instanceof galho__WEBPACK_IMPORTED_MODULE_2__.S ? items : null;
        e.on("click", () => {
            e.tcls("o").isCls("o") ?
                (0,_hover__WEBPACK_IMPORTED_MODULE_4__.fluid)(e, (mn || (mn = (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)("table", "mn", items))).addTo(e)) :
                mn.remove();
        });
    });
}
function style() {
    let { a, s: c, l } = _core__WEBPACK_IMPORTED_MODULE_1__.theme;
    return {};
}


/***/ }),

/***/ "../galhui/hover.ts":
/*!**************************!*\
  !*** ../galhui/hover.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fluid": () => (/* binding */ fluid),
/* harmony export */   "fixed": () => (/* binding */ fixed),
/* harmony export */   "ctx": () => (/* binding */ ctx)
/* harmony export */ });
function fluid(base, menu, sub, vAlign, hAlign) {
    let rect = base.rect(), wh = window.innerHeight, ww = window.innerWidth;
    if (!vAlign)
        vAlign = (rect.top + rect.height / 2) > (wh / 2) ? "_t" : "_b";
    if (!hAlign)
        hAlign = (rect.left + rect.width / 2) > (ww / 2) ? "_lf" : "_rg";
    menu.css('minWidth', rect.width + 'px');
    if (vAlign == "_t") {
        menu
            .uncss(['top'])
            .css({
            bottom: (wh - (sub ? rect.bottom : rect.top)) + 'px',
            maxHeight: (sub ? rect.bottom : rect.top) + 'px'
        })
            .cls("_b", false);
    }
    else {
        menu
            .uncss(['bottom'])
            .css({
            top: (sub ? rect.top : rect.bottom) + 'px',
            maxHeight: (wh - (sub ? rect.top : rect.bottom)) + 'px'
        })
            .cls("_t", false);
    }
    if (hAlign == "_lf") {
        menu
            .uncss(['left'])
            .css('right', (ww - (sub ? rect.left : rect.right)) + 'px')
            .cls("_rg", false);
    }
    else {
        menu
            .uncss(['right'])
            .css('left', (sub ? rect.right : rect.left) + 'px')
            .cls("_lf", false);
    }
    menu.cls([vAlign, hAlign]);
}
function fixed(base, menu, align) {
    let rect = base.rect(), h = menu.e.clientHeight, wh = window.innerHeight;
    if (wh / 2 - rect.top > 0) {
        base.cls("_t", false).cls("_b");
        menu.css({
            left: rect.left + 'px',
            top: rect.bottom + 'px',
            maxHeight: (wh - rect.bottom) + 'px'
        }).uncss(['bottom']);
    }
    else {
        base.cls("_b", false).cls("_t");
        menu.css({
            left: rect.left + 'px',
            bottom: (wh - rect.top) + 'px',
            maxHeight: rect.top + 'px'
        }).uncss(['top']);
    }
    menu.css('width', rect.width + 'px');
}
function ctx(menu) {
}


/***/ }),

/***/ "../galhui/icon.ts":
/*!*************************!*\
  !*** ../galhui/icon.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icons": () => (/* binding */ icons),
/* harmony export */   "default": () => (/* binding */ icon),
/* harmony export */   "style": () => (/* binding */ style)
/* harmony export */ });
/* harmony import */ var inutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inutil */ "../inutil/inutil.js");
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../galhui/core.ts");



var icons = {};
function icon(dt, c) {
    if (dt) {
        if ((0,inutil__WEBPACK_IMPORTED_MODULE_0__.isS)(dt))
            dt = { d: dt, c };
        if (dt.d in icons) {
            let sz, t = _core__WEBPACK_IMPORTED_MODULE_1__.theme.sz;
            if (dt.s)
                switch (dt.s) {
                    case "xl":
                        sz = t.xl;
                        break;
                    case "_l":
                        sz = t.l;
                    case "_s":
                        sz = t.s;
                        break;
                    case "xs":
                        sz = t.xs;
                        break;
                    default: throw (0,inutil__WEBPACK_IMPORTED_MODULE_0__.notF)(dt.s, "size");
                }
            else
                sz = t.n;
            return (0,galho__WEBPACK_IMPORTED_MODULE_2__.svg)('svg', {
                fill: dt.c || "currentColor",
                viewBox: `0 0 ${_core__WEBPACK_IMPORTED_MODULE_1__.$.iconS} ${_core__WEBPACK_IMPORTED_MODULE_1__.$.iconS}`,
                height: sz,
            }, (0,galho__WEBPACK_IMPORTED_MODULE_2__.svg)('path', { d: icons[dt.d] })).cls("o");
        }
    }
}
function style() {
    return {};
}


/***/ }),

/***/ "../galhui/input.ts":
/*!**************************!*\
  !*** ../galhui/input.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "input": () => (/* binding */ input),
/* harmony export */   "search": () => (/* binding */ search),
/* harmony export */   "lever": () => (/* binding */ lever),
/* harmony export */   "style": () => (/* binding */ style)
/* harmony export */ });
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var inutil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inutil */ "../inutil/inutil.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../galhui/core.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "../galhui/icon.ts");




const input = (type, name, input) => (type == "textarea" ? (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("textarea") : (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("input", { type }))
    .cls((0,galho__WEBPACK_IMPORTED_MODULE_0__.cl)(_core__WEBPACK_IMPORTED_MODULE_1__.$.c, "in"))
    .prop("name", name)
    .on("input", input);
function search(input) {
    let t = (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("input", { type: "search", placeholder: _core__WEBPACK_IMPORTED_MODULE_1__.$.w.search }), i = (0,_icon__WEBPACK_IMPORTED_MODULE_2__["default"])("search");
    input && t.delay("input", _core__WEBPACK_IMPORTED_MODULE_1__.$.delay, () => input(t.e.value));
    return (i ? (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)(0, [t, i]) : t).cls((0,galho__WEBPACK_IMPORTED_MODULE_0__.cl)(_core__WEBPACK_IMPORTED_MODULE_1__.$.c, "in"));
}
const lever = (name) => (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("input", { type: "checkbox", name }).cls("lv");
function style() {
    let { i, a } = _core__WEBPACK_IMPORTED_MODULE_1__.theme;
    return {
        [(0,_core__WEBPACK_IMPORTED_MODULE_1__.c)("in")]: Object.assign(Object.assign({}, (0,_core__WEBPACK_IMPORTED_MODULE_1__.block)((0,inutil__WEBPACK_IMPORTED_MODULE_3__.ex)(a, i))), { display: "flex", input: {
                width: "100%"
            } })
    };
}


/***/ }),

/***/ "../galhui/menu.ts":
/*!*************************!*\
  !*** ../galhui/menu.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu),
/* harmony export */   "menubar": () => (/* binding */ menubar),
/* harmony export */   "style": () => (/* binding */ style)
/* harmony export */ });
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../galhui/core.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "../galhui/icon.ts");
/* harmony import */ var _hover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hover */ "../galhui/hover.ts");
/* harmony import */ var _wait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wait */ "../galhui/wait.ts");
/* harmony import */ var inutil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inutil */ "../inutil/inutil.js");






function menu(...items) { return (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)((0,galho__WEBPACK_IMPORTED_MODULE_0__.cl)(_core__WEBPACK_IMPORTED_MODULE_1__.$.c, "mn"), items); }
(function (menu) {
    menu.wait = (callback) => (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("tr", 0, (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("td", 0, (0,_wait__WEBPACK_IMPORTED_MODULE_2__["default"])(1)).prop("colSpan", 4)).do(tr => (0,_wait__WEBPACK_IMPORTED_MODULE_2__.waiter)(tr, callback));
    menu.i = (i, text, action, side) => (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("button", "i", [
        (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)(0, (0,_icon__WEBPACK_IMPORTED_MODULE_3__["default"])(i)),
        (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)(0, text),
        (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)("sd", side),
    ]).on("click", action);
    function cb(checked, text, toggle, id = (0,inutil__WEBPACK_IMPORTED_MODULE_4__.uuid)(), side) {
        let input = (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("input").props({ id, checked, type: "checkbox" });
        toggle && input.on("input", () => toggle.call(input.e, input.e.checked));
        return (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)("i", [
            input,
            (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("label", 0, text).prop("htmlFor", id),
            side && (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)("sd", side),
            (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)(),
        ]);
    }
    menu.cb = cb;
    menu.sub = (i, text, items) => (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)("i", [
        (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)(0, (0,_icon__WEBPACK_IMPORTED_MODULE_3__["default"])(i)),
        (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)(0, text),
        (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)(),
        (0,_icon__WEBPACK_IMPORTED_MODULE_3__["default"])("menuR")
    ]).do(e => {
        let mn;
        e.on("click", () => {
            e.tcls("o").isCls("o") ?
                (0,_hover__WEBPACK_IMPORTED_MODULE_5__.fluid)(e, (mn || (mn = (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("table", "mn", items))).addTo(e)) :
                mn.remove();
        });
    });
    menu.hr = () => (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)("separator");
})(menu || (menu = {}));
function menubar(...items) { return (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)((0,galho__WEBPACK_IMPORTED_MODULE_0__.cl)(_core__WEBPACK_IMPORTED_MODULE_1__.$.c, "mb"), items); }
(function (menubar) {
    menubar.right = () => (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)("_rg");
    menubar.sep = () => (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("hr");
})(menubar || (menubar = {}));
function style() {
    let { m, bg, txt, sz, a, i } = _core__WEBPACK_IMPORTED_MODULE_1__.theme;
    return {
        [(0,_core__WEBPACK_IMPORTED_MODULE_1__.c)("mn")]: {
            background: m.bg || bg,
            height: m.h + "px",
            position: "fixed",
            overflow: "auto",
            maxWidth: "80vw",
            boxShadow: "initial",
            display: "table",
            [(0,_core__WEBPACK_IMPORTED_MODULE_1__.c)("separator")]: {
                border: "none",
                borderBottom: "1px solid " + txt
            },
            [`.${"i"},.${"dd"}`]: {
                ">:nth-child(1)": {
                    width: (sz.n + (0,_core__WEBPACK_IMPORTED_MODULE_1__.hs)(a.pad)) + "px"
                },
                ">:nth-child(2)": {
                    padding: "3px 0"
                },
                ">:nth-child(3)": {
                    paddingLeft: m.scp
                },
                ">:nth-child(4)": {
                    width: (sz.n + (0,_core__WEBPACK_IMPORTED_MODULE_1__.hs)(a.pad)) + "px",
                },
                lineHeight: "initial",
                padding: "3px 4px",
                width: "100%",
                ":hover": {
                    background: m.ih
                },
                ":active": {
                    background: m.ia
                },
            },
        },
        [(0,_core__WEBPACK_IMPORTED_MODULE_1__.c)("mb")]: {
            display: "flex",
            height: m.h + "px",
            lineHeight: m.h + "px",
            ["." + "o"]: {
                margin: `${(m.h - sz.n) / 2}px ${(0,_core__WEBPACK_IMPORTED_MODULE_1__.hs)(a.mrg)}px`,
            },
            flex: "0 0 auto",
            background: m.bg,
            [(0,_core__WEBPACK_IMPORTED_MODULE_1__.c)("in")]: {
                background: m.i || i.bg,
            },
            [`.${"i"},.${"dd"}`]: {
                padding: "0 4px",
                lineHeight: "20px",
                ":hover": {
                    background: m.ih
                },
                ":active": {
                    background: m.ia
                },
            },
            ["." + "in"]: {},
            hr: {
                height: "100%",
                margin: 0,
                ["&." + "_rg"]: {
                    flex: 1,
                    border: "none"
                }
            }
        },
    };
}


/***/ }),

/***/ "../galhui/modal.ts":
/*!**************************!*\
  !*** ../galhui/modal.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modal),
/* harmony export */   "okCancel": () => (/* binding */ okCancel),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "style": () => (/* binding */ style)
/* harmony export */ });
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var inutil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inutil */ "../inutil/inutil.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../galhui/core.ts");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "../galhui/button.ts");




function modal(headData, bodyData, actions, i) {
    return new Promise(res => {
        let center, head, main, last = document.activeElement, _close = function () {
            let dt = this && (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)(this).d();
            if (!i.valid || i.valid(dt)) {
                md.remove();
                res(dt);
                last === null || last === void 0 ? void 0 : last.focus();
            }
        };
        if (galho__WEBPACK_IMPORTED_MODULE_0__.S.is(headData)) {
            i = bodyData || {};
            head = center = headData.cls((0,galho__WEBPACK_IMPORTED_MODULE_0__.cl)("i", i.cls));
            center.child("." + "ft").try(e => e.childs((0,_core__WEBPACK_IMPORTED_MODULE_1__.c)("bt")).each(a => a.on('click', _close)));
        }
        else
            i || (i = {});
        let md = (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)((0,galho__WEBPACK_IMPORTED_MODULE_0__.cl)(_core__WEBPACK_IMPORTED_MODULE_1__.$.c, "md"), center || (center = (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("div", (0,galho__WEBPACK_IMPORTED_MODULE_0__.cl)(_core__WEBPACK_IMPORTED_MODULE_1__.$.c, "md", "pn", i.cls), [
            head = headData && (0,galho__WEBPACK_IMPORTED_MODULE_0__.wrap)(headData, "hd"),
            main = (0,galho__WEBPACK_IMPORTED_MODULE_0__.wrap)(bodyData, "bd"),
            actions && (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)("ft", actions.map(a => a.on('click', _close)))
        ])));
        center.d(_close).prop("tabIndex", 0)
            .on('keydown', (e) => {
            var _a;
            switch (e.key) {
                case "Escape":
                    _close();
                    break;
                case "Enter":
                    (_a = actions === null || actions === void 0 ? void 0 : actions.a) === null || _a === void 0 ? void 0 : _a.click();
                    break;
                default: return;
            }
            e.off();
        });
        if ((0,inutil__WEBPACK_IMPORTED_MODULE_2__.t)(i.close))
            (head || main).add((0,_button__WEBPACK_IMPORTED_MODULE_3__.close)(_close));
        if (i.blur)
            center.focusout(_close);
        md.addTo(_core__WEBPACK_IMPORTED_MODULE_1__.body);
        center.focus();
    });
}
function okCancel(icon, title, body, cb) {
    if ((0,inutil__WEBPACK_IMPORTED_MODULE_2__.isU)(body)) {
        body = icon;
        cb = title;
        icon = null;
        title = null;
    }
    return modal((icon || title) && [icon(icon), title], body, [(0,_button__WEBPACK_IMPORTED_MODULE_3__.confirm)(cb), (0,_button__WEBPACK_IMPORTED_MODULE_3__.cancel)()]);
}
function error(body) {
    return modal(null, body, [(0,_button__WEBPACK_IMPORTED_MODULE_3__.cancel)()], { cls: "_e" });
}
function style() {
    let { m, bg, txt, sz, a, i } = _core__WEBPACK_IMPORTED_MODULE_1__.theme;
    return {
        [(0,_core__WEBPACK_IMPORTED_MODULE_1__.c)("md")]: {
            ["." + "i"]: {}
        }
    };
}


/***/ }),

/***/ "../galhui/tab.ts":
/*!************************!*\
  !*** ../galhui/tab.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "style": () => (/* binding */ style)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "../galhui/core.ts");

function style() {
    let { m, tb } = _core__WEBPACK_IMPORTED_MODULE_0__.theme, close = {
        float: "right",
        opacity: 0,
        height: m.h + "px",
        ":hover": {}
    };
    return {
        [(0,_core__WEBPACK_IMPORTED_MODULE_0__.c)("ta")]: {
            [(0,_core__WEBPACK_IMPORTED_MODULE_0__.c)("mb")]: {
                background: tb.bg,
                [(0,_core__WEBPACK_IMPORTED_MODULE_0__.c)("cl")]: close,
                ":hover": {
                    [(0,_core__WEBPACK_IMPORTED_MODULE_0__.c)("cl")]: {
                        opacity: 1
                    },
                }
            },
            ["." + "bd"]: {
                height: `calc(100% - ${m.h}px)`
            }
        }
    };
}


/***/ }),

/***/ "../galhui/wait.ts":
/*!*************************!*\
  !*** ../galhui/wait.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ph": () => (/* binding */ ph),
/* harmony export */   "waiter": () => (/* binding */ waiter),
/* harmony export */   "default": () => (/* binding */ wait)
/* harmony export */ });
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var inutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inutil */ "../inutil/inutil.js");


function ph(type = 1) {
    switch (type) {
        case 0:
        case 1:
            return (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)("ld", []);
    }
}
function waiter(element, cb) {
    cb && ((0,inutil__WEBPACK_IMPORTED_MODULE_1__.isP)(cb) ? cb : cb === null || cb === void 0 ? void 0 : cb()).then(t => {
        if (galho__WEBPACK_IMPORTED_MODULE_0__.S.is(t)) {
            t.cls(Array.from(element.e.classList).slice(1));
            t.attr("style", (t.attr("style") || "") +
                (element.attr("style") || ""));
        }
        element.replace(t);
    });
}
function wait(type, body) {
    if (!(0,inutil__WEBPACK_IMPORTED_MODULE_1__.isN)(type)) {
        body = type;
        type = 0;
    }
    let loader = ph(type);
    waiter(loader, body);
    return loader;
}


/***/ }),

/***/ "../entity/entity.js":
/*!***************************!*\
  !*** ../entity/entity.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.create = exports.get = exports.bind = exports.Bond = exports.Entity = exports.ftype = exports.fieldTypes = exports.$ = void 0;
const orray_1 = __webpack_require__(/*! orray */ "../orray/orray.js");
const inutil_1 = __webpack_require__(/*! inutil */ "../inutil/inutil.js");
__exportStar(__webpack_require__(/*! ./entity-core */ "../entity/entity-core.ts"), exports);
exports.$ = {
    limit: 50,
    id: () => "id",
    entity() { throw "not implemented"; },
    create: (i) => i
};
exports.fieldTypes = {};
const ftype = (field) => exports.fieldTypes[field.tp];
exports.ftype = ftype;
class Entity {
    constructor(key, i) {
        this.key = key;
        this.i = i;
        this.listeners = [];
    }
    field(key) {
        return this.i.fields.find(inutil_1.isS(key) ? (f) => f.key == key : key);
    }
    fields(filter) {
        return filter ? this.i.fields.filter(filter) : this.i.fields;
    }
    reactTo(target) {
        (target.react || (target.react = [])).push(this);
    }
    get mainField() { return this.i.main; }
    get iconField() { return this.i.icon; }
    get canInsert() { return this.i.insert; }
    get canUpdate() { return this.i.update; }
    get canRemove() { return this.i.remove; }
    select(bond = {}) {
        return exports.$.select(this.key, bond);
    }
    async insert(values) {
        if (!this.canInsert)
            throw "this entity has not insert support";
        let result = await exports.$.insert(this.key, values);
        await this.reload();
        return result;
    }
    async update(values) {
        if (!this.canUpdate)
            throw "this entity has not update support";
        let result = await exports.$.update(this.key, values);
        await this.reload();
        return result;
    }
    async remove(ids) {
        if (!this.canRemove)
            throw "this entity has not delete support";
        let result = await exports.$.remove(this.key, { id: ids });
        await this.reload();
        return result;
    }
    reload(reloaded = []) {
        var _a;
        let l = this.listeners.length, t1 = Array(l);
        for (let i = 0; i < l; i++)
            t1[i] = this.listeners[i].selectNow();
        reloaded.push(this.key);
        (_a = this.react) === null || _a === void 0 ? void 0 : _a.forEach(ent => {
            if (!reloaded.includes(ent.key))
                ent.reload(reloaded);
        });
        return Promise.all(t1);
    }
    bind(bond) {
        if (this.listeners.includes(bond))
            console.warn("already binded");
        else
            this.listeners.push(bond);
        return this;
    }
    toJSON() { }
}
exports.Entity = Entity;
class Bond {
    constructor(e, opts = {}) {
        this.target = e;
        this.readOnly = opts.readOnly;
        this._limit = opts.limit == null ? exports.$.limit : opts.limit;
        this._pag = opts.pag || 1;
        let onupd = () => {
            this._pag = 1;
            this.select();
        };
        this.groupBy = orray_1.default(opts.groupBy);
        this.query = opts.query;
        this.sort = orray_1.default(opts.sort, {
            converter: (e) => inutil_1.isS(e) ? { f: e } : e,
            key: 'f'
        }).on(onupd);
        this.fields = orray_1.default(opts.fields).on(() => this.select());
        this.tags = orray_1.default(opts.tags).on(onupd);
        this.queryBy = orray_1.default(opts.queryBy || e.fields().map(f => f.key).filter(k => k != 'cd' && k != 'lu')).on(onupd);
        this.where = inutil_1.isS(opts.where) ? [opts.where] : opts.where;
    }
    get key() { return this.target.key; }
    get pags() {
        return this.limit ? Math.ceil(this.length / this.limit) : 1;
    }
    get query() {
        return this._query;
    }
    set query(value) {
        if (value != this._query) {
            this._pag = 1;
            this._query = value;
            this.select();
        }
    }
    get pag() {
        return this._pag;
    }
    set pag(value) {
        if (value < 1)
            value = 1;
        else if (value > this.pags)
            value = this.pags;
        if (this._pag == value)
            return;
        this._pag = value;
        this.selectNow();
    }
    get limit() {
        return this._limit;
    }
    set limit(value) {
        if (this._limit == value)
            return;
        this._pag = value ?
            Math.ceil(this._limit * this._pag / value) :
            1;
        this._limit = value;
        this.selectNow();
    }
    ids() {
        if (this.pags > 1) {
            let t = this.toJSON();
            return this.target.select({
                tp: 3,
                fields: [exports.$.id(this.target)],
                where: t.where,
                query: t.query,
                queryBy: t.queryBy,
                groupBy: t.groupBy
            });
        }
        else
            return this.list.map(f => f.id);
    }
    pushFilter(value) {
        if (inutil_1.isA(this.where))
            this.where.push(value);
        else
            this.addFilter(inutil_1.uuid(4), value);
    }
    getFilter(key) {
        var _a;
        return inutil_1.isA(this.where) ? null : ((_a = this.where) === null || _a === void 0 ? void 0 : _a[key]) || null;
    }
    removeFilter(key) {
        let w = this.where;
        if (w && !inutil_1.isA(w))
            delete w[key];
        return this;
    }
    addFilter(key, value) {
        let w = inutil_1.isA(this.where) ? (this.where = this.where.dic((v, i) => ["" + i, v])) : this.where || (this.where = {});
        this.getFilter(key);
        w[key] = value;
        this.select();
        return this;
    }
    whereV() {
        let w = this.where;
        return w ? inutil_1.isA(w) ? w.slice() : Object.values(w) : [];
    }
    bind(list) {
        if (!this.list) {
            this.list = list || orray_1.default();
            this.target.bind(this);
        }
        return this.list;
    }
    async getAll() {
        return await this.target.select(Object.assign(this.toJSON(), {
            tp: undefined,
            limit: undefined,
            pag: undefined,
            total: undefined
        }));
    }
    async selectNow() {
        clearTimeout(this._callindex);
        if (this.list) {
            let data = await this.target.select(this);
            this.length = data.t;
            let tags = {}, groups = {}, list = this.list;
            for (let key in list.tags)
                if (list.tags[key])
                    tags[key] = list.tags[key].value.id;
            for (let key in list.g)
                groups[key] = list.g[key].keyField();
            list.set(data.d);
            for (let key in tags)
                list.setTag(key, tags[key]);
            for (let key in groups) {
                let group = groups[key];
                list.g[key].set(list.filter(i => group.indexOf(i.id) != -1));
            }
            if (this._handlers)
                for (let h of this._handlers)
                    h();
            return data;
        }
    }
    select(wait = 500) {
        clearTimeout(this._callindex);
        if (wait)
            this._callindex = setTimeout(async () => {
                this.selectNow();
            }, wait);
        else
            this.selectNow();
        ;
        return this;
    }
    on(handler) {
        this._handlers || (this._handlers = []).push(handler);
        return this;
    }
    toJSON() {
        let q = this.query && this.queryBy.l, f = this.fields, w = this.where;
        return {
            tp: 5,
            fields: !f.length || this.target.fields.length == f.length ? undefined : f,
            where: w && (inutil_1.isA(w) ? w : Object.values(w)),
            limit: this.limit,
            pag: this.pag,
            query: q ? this.query : undefined,
            queryBy: q ? this.queryBy : undefined,
            sort: this.sort.length ? this.sort : undefined,
            total: true
        };
    }
}
exports.Bond = Bond;
async function bind(v) {
    if (inutil_1.isS(v)) {
        let ent = await exports.get(v);
        return new Bond(ent);
    }
    else {
        let ent = await exports.get(v.key);
        return new Bond(ent, v);
    }
}
exports.bind = bind;
const entities = {};
const get = async (key) => { var _a; return entities[_a = inutil_1.isS(key) ? key : (key = key.key)] || (entities[_a] = new Entity(key, await exports.$.entity(key))); };
exports.get = get;
function create(key, i) {
    if (inutil_1.isA(i))
        i = { fields: i };
    return entities[key] = new Entity(key, exports.$.create(i));
}
exports.create = create;
//# sourceMappingURL=entity.js.map

/***/ }),

/***/ "../galho/galho.js":
/*!*************************!*\
  !*** ../galho/galho.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ create),
/* harmony export */   "g": () => (/* binding */ g),
/* harmony export */   "div": () => (/* binding */ div),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "deepExtend": () => (/* binding */ deepExtend),
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "off": () => (/* binding */ off),
/* harmony export */   "emit": () => (/* binding */ emit),
/* harmony export */   "E": () => (/* binding */ E),
/* harmony export */   "S": () => (/* binding */ S),
/* harmony export */   "M": () => (/* binding */ M),
/* harmony export */   "html": () => (/* binding */ html),
/* harmony export */   "xml": () => (/* binding */ xml),
/* harmony export */   "svg": () => (/* binding */ svg),
/* harmony export */   "toSVG": () => (/* binding */ toSVG),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getAll": () => (/* binding */ getAll),
/* harmony export */   "cl": () => (/* binding */ cl),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "id": () => (/* binding */ id)
/* harmony export */ });
function create(element, props, child) {
    if (!element)
        return S.empty;
    let result = typeof (element) === 'string' ?
        new S(document.createElement(element)) :
        element instanceof Element ?
            new S(element) :
            'render' in element ?
                element.render() :
                element;
    if (props)
        if (isS(props) || Array.isArray(props))
            result.cls(props);
        else
            result.props(props);
    if (child != null)
        add(result.e, child);
    return result;
}
const g = create;
const div = (props, child) => create("div", props, child);
function clone(obj) {
    if (typeof obj === 'object') {
        let nObj;
        if (obj instanceof Array) {
            nObj = Array(obj.length);
            for (let i = 0; i < obj.length; i++)
                nObj[i] = clone(obj[i]);
        }
        else {
            nObj = {};
            for (let key in obj)
                nObj[key] = clone(obj[key]);
        }
        obj = nObj;
    }
    return obj;
}
function deepExtend(obj, extension) {
    for (let key in extension) {
        let value2 = extension[key];
        if (obj[key] !== undefined) {
            let value1 = obj[key];
            if (value2 && value2.__proto__ == Object.prototype && value1 && value1.__proto__ == Object.prototype) {
                deepExtend(value1, value2);
            }
        }
        else if (value2 && value2.__proto__ == Object.prototype)
            obj[key] = clone(value2);
        else
            obj[key] = value2;
    }
    return obj;
}
const isS = (value) => typeof value === 'string';
function on(__eh, event, callback, options) {
    if (callback) {
        if (!(event in __eh)) {
            __eh[event] = [];
        }
        if (options)
            callback.options = options;
        __eh[event].push(callback);
    }
}
function off(__eh, event, callback) {
    if (event in __eh) {
        if (callback) {
            var stack = __eh[event];
            for (let i = 0, l = stack.length; i < l; i++) {
                if (stack[i] === callback) {
                    stack.splice(i, 1);
                    return;
                }
            }
        }
        else
            delete __eh[event];
    }
}
function emit(element, event, data) {
    let stack = element.__eh[event];
    if (stack && stack.length) {
        for (let i = 0, l = stack.length; i < l; i++) {
            let e = stack[i];
            if (e.options) {
                if (e.options.once)
                    stack.splice(i--, 1);
                if (e.options.delay) {
                    setTimeout(() => { e.call(element, data); }, e.options.delay);
                    continue;
                }
            }
            if (e.call(element, data) === false)
                return false;
        }
    }
    else
        return -1;
}
class E {
    constructor(i) {
        this.bonds = [];
        this.__eh = {};
        this.i = i || {};
    }
    get model() { return this.i; }
    focus() {
        this.$.focus();
        return this;
    }
    render() {
        if (this.$ === void 0) {
            let view = this.view();
            this.$ = view ?
                'render' in view ?
                    view.render() : view :
                null;
        }
        return this.$;
    }
    dispose() {
        if (this.$) {
            this.$.remove();
            delete this.$;
        }
        this.bonds.length = 0;
    }
    reRender() {
        this.dispose();
        return this.render();
    }
    removeKey(key) {
        if (typeof key == 'string')
            delete this.i[key];
        return this;
    }
    addValidators(field, validator) {
        var _a, _b;
        ((_a = (this.validators || (this.validators = {})))[_b = field] || (_a[_b] = [])).push(validator);
        return this;
    }
    _valid(key, value) {
        let temp = this.validators[key];
        if (temp)
            for (let i = 0; i < temp.length; i++)
                if (!temp[i](value, key))
                    return false;
        return true;
    }
    set(key, value) {
        let dt = this.i, binds = this.bonds;
        if (typeof key == "object") {
            if (Array.isArray(key)) {
                let t = {};
                for (let i = 0; i < key.length; i++) {
                    let t2 = key[i];
                    t[t2] = dt[t2];
                }
                key = t;
            }
            else {
                for (let k in key) {
                    let val = key[k];
                    if (val === dt[k] || (this.validators && !this._valid(k, val)))
                        delete key[k];
                    else
                        dt[k] = val;
                }
                if (!Object.keys(key).length)
                    return this;
            }
            for (let i = 0; i < binds.length; i++) {
                let bind = binds[i];
                if (!bind.prop || bind.prop in key)
                    bind.handler.call(this, bind.e, key);
            }
        }
        else if (!key) {
            for (let i = 0; i < binds.length; i++) {
                let bind = binds[i];
                bind.handler.call(this, bind.e, dt);
            }
        }
        else {
            if (dt[key] === value || (this.validators && !this._valid(key, value)))
                return this;
            let state = { [key]: value };
            dt[key] = value;
            for (let i = 0; i < binds.length; i++) {
                let bind = binds[i];
                if (!bind.prop || bind.prop === key)
                    bind.handler.call(this, bind.e, state);
            }
        }
        return this;
    }
    toggle(key) {
        this.set(key, !this.i[key]);
    }
    clone() {
        return new this.constructor(this.i);
    }
    on(event, callback, options) {
        if (typeof event == "function") {
            callback = event;
            event = "set";
        }
        on(event, callback, options);
        return this;
    }
    off(event, callback) {
        off(this.__eh, event, callback);
        return this;
    }
    emit(event, data) {
        emit(this, event, data);
        return true;
    }
    bind(element, handler, prop, noInit) {
        if ('render' in element) {
            this.bonds.push({ e: element, handler: handler, prop: prop });
            if (!noInit)
                handler.call(this, element, this.i);
            return element.render();
        }
        else {
            this.bonds.push({ e: element, handler: handler, prop: prop });
            if (!noInit)
                handler.call(this, element, this.i);
            return element;
        }
    }
    inputBind(s, prop, fieldSet = 'value', fieldGet = fieldSet) {
        if (s instanceof S) {
            s.on('input', (e) => {
                let v = e.target[fieldGet];
                this.set(prop, v === '' || (typeof v === 'number' && isNaN(v)) ? null : v);
            });
            this.bind(s, () => {
                var t = this.i[prop];
                s.prop(fieldSet, t == null ? '' : t);
            }, prop);
            return s;
        }
        else {
            s.on('input', (value) => {
                this.set(prop, value);
            });
            var view = s.render();
            this.bind(view, () => {
                s.set(fieldSet, this.i[prop]);
            }, prop);
            return view;
        }
    }
    unbind(s) {
        var i = this.bonds.findIndex((b) => b.e.e == s.e || s == b.e);
        if (i != -1)
            this.bonds.splice(i, 1);
    }
    toJSON() { }
}
function add(e, child) {
    switch (typeof child) {
        case 'object':
            if (child)
                if (child instanceof S ? (child = child.e) :
                    'render' in child ? (child = child.render().e) :
                        child instanceof Element)
                    e.append(child);
                else if (!child)
                    break;
                else if (typeof child.then == "function")
                    child.then(c => add(e, c));
                else
                    for (let i = 0, l = child.length; i < l; i++)
                        add(e, child[i]);
            break;
        case 'string':
        case 'number':
        case 'bigint':
            e.append(child);
            break;
        case 'function':
            add(e, child());
            break;
    }
}
class S {
    constructor(e) {
        this.e = e;
    }
    toJSON() { }
    get valid() { return !!this.e; }
    on(event, listener, options) {
        if (isS(event)) {
            if (listener)
                this.e.addEventListener(event, listener, options);
        }
        else if (Array.isArray(event)) {
            if (listener)
                for (let e of event)
                    this.e.addEventListener(e, listener, options);
        }
        else
            for (let e in event) {
                let t = event[e];
                if (t)
                    this.e.addEventListener(e, t, listener);
            }
        return this;
    }
    delay(event, delay, handler) {
        handler = handler.bind(this.e);
        this.on(event, function (e) {
            var t = `_${event}_timer`;
            clearTimeout(this[t]);
            this[t] = setTimeout(handler, delay);
        });
        return this;
    }
    emit(event, init) {
        this.e.dispatchEvent(typeof event == "string" ? new Event(event, init) : event);
        return this;
    }
    trigger(a, b) {
        return this.emit(a, b);
    }
    click() {
        this.e.click();
        return this;
    }
    one(event, listener) {
        if (isS(event))
            this.on(event, listener, { once: true });
        else
            this.on(event, { once: true });
        return this;
    }
    off(event, listener) {
        for (let e of isS(event) ? [event] : event)
            this.e.removeEventListener(e, listener);
        return this;
    }
    try(action) {
        if (this.valid)
            action(this);
        return this;
    }
    when(selector, action) {
        if (this.valid && this.is(selector))
            action(this);
        return this;
    }
    do(callback) {
        callback(this);
        return this;
    }
    async(callback) {
        setTimeout(callback, 0, this);
        return this;
    }
    static is(value) { return value && 'e' in value; }
    put(position, child) {
        switch (typeof child) {
            case 'object':
                if (child)
                    if (child instanceof S ? (child = child.e) :
                        'render' in child ? (child = child.render().e) :
                            child instanceof Element)
                        this.e.insertAdjacentElement(position, child);
                    else if (!child)
                        break;
                    else if (typeof child.then == "function")
                        child.then(c => this.put(position, c));
                    else if (position[0] == 'a')
                        for (let i = child.length - 1; i >= 0; i--)
                            this.put(position, child[i]);
                    else
                        for (let i = 0, l = child.length; i < l; i++)
                            this.put(position, child[i]);
                break;
            case 'string':
            case 'number':
            case 'bigint':
                this.e.insertAdjacentText(position, child);
                break;
            case 'function':
                this.put(position, child());
                break;
        }
        return this;
    }
    putAfter(child) {
        return this.put('afterend', child);
    }
    putBefore(child) {
        return this.put('beforebegin', child);
    }
    putText(pos, text) {
        this.e.insertAdjacentText(pos, text);
        return this;
    }
    putHTML(pos, html) {
        this.e.insertAdjacentHTML(pos, html);
        return this;
    }
    add(child) {
        add(this.e, child);
        return this;
    }
    frag(child) {
        let doc = new DocumentFragment();
        add(doc, child);
        this.e.append(doc);
        return this;
    }
    prepend(child) {
        return this.put('afterbegin', child);
    }
    place(index, child) {
        if (!index)
            return this.put('afterbegin', child);
        var temp = this.e.children[index - 1];
        if (!temp)
            throw "out of flow";
        new S(temp).put('afterend', child);
        return this;
    }
    unplace(index) {
        this.e.children[index].remove();
    }
    lastChild() {
        let ch = this.e.children;
        return new S(ch[ch.length - 1]);
    }
    addHTML(html) {
        return this.putHTML("beforebegin", html);
    }
    set(child) {
        this.e.textContent = '';
        add(this.e, child);
        return this;
    }
    text(value) {
        if (value === undefined)
            return this.e.textContent;
        this.e.textContent = value;
        return this;
    }
    addTo(parent) {
        (parent instanceof S ? parent.e : parent)
            .appendChild(this.e);
        return this;
    }
    putIn(position, parent) {
        (parent instanceof S ? parent.e : parent)
            .insertAdjacentElement(position, this.e);
        return this;
    }
    bind(prop, src, value) {
        throw "not implemented";
        return this;
    }
    html(value) {
        if (arguments.length) {
            this.e.innerHTML = value;
            return this;
        }
        return this.e.innerHTML;
    }
    fullHtml() { return this.e.outerHTML; }
    isEmpty() {
        return !this.e.hasChildNodes();
    }
    replace(child) {
        this.put('beforebegin', child);
        this.remove();
        return this;
    }
    rect() {
        return this.e.getBoundingClientRect();
    }
    focus(options) {
        this.e.focus(options);
        return this;
    }
    get focused() {
        return document.activeElement == this.e;
    }
    blur() {
        this.e.blur();
        return this;
    }
    focusin(handler) {
        let t = this.e;
        handler && this.on('focusin', e => t.contains(e.relatedTarget) || handler.call(t, e));
        return this;
    }
    focusout(handler) {
        let t = this.e;
        handler && this.on('focusout', e => t.contains(e.relatedTarget) || handler.call(t, e));
        return this;
    }
    contains(child) {
        return this.e.contains(child instanceof S ? child.e : child);
    }
    index() {
        var p = this.e.parentElement;
        if (p)
            return Array.prototype.indexOf.call(p.children, this.e);
        return -1;
    }
    indexInDocument() {
        var c = 0;
        var e = this[0];
        while (e && e.parentElement) {
            c += Array.prototype.indexOf.call(e.children, e);
            e = e.parentElement;
        }
        return c;
    }
    child(filter) {
        if (typeof filter === 'string') {
            let childs = this.e.children;
            for (let i = 0; i < childs.length; i++) {
                let child = childs[i];
                if (child.matches(filter))
                    return new S(child);
            }
            return S.empty;
        }
        else if (typeof filter === 'number') {
            let childs = this.e.children;
            return new S(childs[filter < 0 ? childs.length + filter : filter]);
        }
        else {
            return new S(this.e.firstElementChild);
        }
    }
    childByCls(cls) {
        if (cls)
            for (let i = 0; i < this.e.children.length; i++) {
                let child = this.e.children.item(i);
                if (child.classList.contains(cls))
                    return new S(child);
            }
        return S.empty;
    }
    childs(filter, to) {
        let childs = this.e.children;
        if (isS(filter)) {
            let t = [];
            for (let i = 0; i < childs.length; i++) {
                let child = childs[i];
                if (child.matches(filter))
                    t.push(child);
            }
            return new M(t);
        }
        else if (typeof filter == "number") {
            return new M(Array.prototype.slice.call(childs, filter, to));
        }
        else if (typeof filter == "function")
            return new M(Array.from(childs).filter(c => filter(new S(c))));
        else {
            return new M(childs);
        }
    }
    childNodes() {
        return this.e.childNodes;
    }
    childCount() {
        return this.e.childElementCount;
    }
    query(filter) {
        return new S(this.e.querySelector(filter));
    }
    queryAll(filter) {
        return new M(this.e.querySelectorAll(filter));
    }
    parent() {
        return new S(this.e.parentElement);
    }
    inDOM() {
        return !!this.e.parentNode;
    }
    closest(filter) {
        return new S(this.e.closest(filter));
    }
    parents(filter) {
        var l = [], p = this.e;
        while (p = p.parentElement)
            if (!filter || p.matches(filter))
                l.push(p);
        return new M(l);
    }
    clone(deep) {
        return new S(this.e.cloneNode(deep));
    }
    prev() {
        return new S(this.e.previousElementSibling);
    }
    next() {
        return new S(this.e.nextElementSibling);
    }
    prop(props, value) {
        if (typeof props === 'string')
            if (arguments.length == 1) {
                return this.e[props];
            }
            else
                this.e[props] = value;
        return this;
    }
    props(props) {
        for (var key in props) {
            var value = props[key];
            if (value !== undefined)
                this.e[key] = props[key];
        }
        return this;
    }
    tag() {
        return this.e.localName;
    }
    isInput() {
        return this.e.matches('input,textarea,select');
    }
    vScroll(value, type) {
        if (this.e.scroll)
            this.e.scroll({
                top: value,
                behavior: type
            });
        else
            this.e.scrollTop = value;
    }
    call(key, ...params) {
        return this.e[key].call(this.e, ...params);
    }
    css(csss, value) {
        let s = this.e.style;
        if (isS(csss))
            if (value === undefined)
                return s[csss];
            else
                s[csss] = value;
        else
            for (let css in csss)
                s[css] = csss[css];
        return this;
    }
    get width() {
        return this.e.offsetWidth;
    }
    get height() {
        return this.e.offsetHeight;
    }
    uncss(properties) {
        if (properties)
            for (let i = 0; i < properties.length; i++)
                this.e.style[properties[i]] = "";
        else
            this.e.removeAttribute('style');
        return this;
    }
    removeCss(properties) {
        return this.uncss(properties);
    }
    uncls() {
        this.e.removeAttribute('class');
        return this;
    }
    cls(names, set) {
        this.e.classList[set === false ? 'remove' : 'add'].apply(this.e.classList, typeof names === 'string' ? names.trim().split(' ').filter(n => n) : names);
        return this;
    }
    tcls(names) {
        for (let n of names.split(' '))
            if (n)
                this.e.classList.toggle(n.replace(' ', ''));
        return this;
    }
    hasClass(name) {
        return this.e.classList.contains(name);
    }
    attr(attr, value) {
        if (value === undefined) {
            return this.e.getAttribute(attr);
        }
        else if (value === false)
            this.e.removeAttribute(attr);
        else
            this.e.setAttribute(attr, value === true ? '' : value);
        return this;
    }
    attrs(attrs) {
        for (let key in attrs) {
            let value = attrs[key];
            if (value === false)
                this.e.removeAttribute(key);
            else
                this.e.setAttribute(key, value === true ? '' : value);
        }
        return this;
    }
    is(filter) {
        if (filter instanceof Node || (filter instanceof S && (filter = filter.e)))
            return this.e == filter;
        else
            return this.e.matches(filter);
    }
    isCls(cls) {
        return this.e.classList.contains(cls);
    }
    d(data) {
        if (data === undefined)
            return this.e['_d'];
        this.e['_d'] = data;
        return this;
    }
    remove() {
        this.e.remove();
        return this;
    }
}
S.empty = new S();
class M extends Array {
    constructor(input, context) {
        if (input == null)
            super();
        else if (typeof input == "number")
            super(input);
        else {
            let r;
            if (isS(input))
                r = document.querySelectorAll(input);
            else if ('length' in input) {
                r = [];
                for (let i = 0; i < input.length; i++) {
                    let t = input[i];
                    if (t)
                        r.push(t instanceof S ? t.e : t);
                }
            }
            else
                throw "invalid input";
            super(...r);
        }
    }
    on(event, listener, options) {
        for (let i = 0; i < this.length; i++)
            this[i].addEventListener(event, listener, options);
        return this;
    }
    emit(event) {
        for (let i = 0, l = this.length; i < l; i++)
            this[i].dispatchEvent(event);
        return this;
    }
    css(props) {
        for (let css in props)
            for (let i = 0; i < this.length; i++)
                this[i].style[css] = props[css];
        return this;
    }
    cls(names, set) {
        typeof names == "string" && (names = names.split(' ').filter(v => v));
        for (let i = 0; i < this.length; i++) {
            this[i].classList[set === false ? 'remove' : 'add'](...names);
        }
        return this;
    }
    prop(prop, value) {
        for (let i = 0; i < this.length; i++)
            this[i][prop] = value;
        return this;
    }
    query(filter) {
        for (let i = 0, l = this.length; i < l; i++) {
            let t = this[i];
            ;
            if (!t.matches(filter))
                t = t.querySelector(filter);
            if (t)
                return new S(t);
        }
        return S.empty;
    }
    each(callbackfn) {
        this.forEach((value, index) => callbackfn(new S(value), index));
        return this;
    }
    not(filter) {
        return this.filter((e) => !e.matches(filter));
    }
    remove() {
        for (let i = 0; i < this.length; i++)
            this[i].remove();
        return this;
    }
    child(filter) {
        let result;
        if (isS(filter)) {
            result = [];
            for (let i = 0; i < this.length; i++) {
                let childs = this[i].children;
                for (let j = 0; j < childs.length; j++) {
                    let child = childs[j];
                    if (child.matches(filter))
                        result.push(child);
                }
            }
        }
        else if (typeof filter == "number") {
            result = Array(filter);
            for (let i = 0; i < this.length; i++)
                result[i] = this[i].children[filter];
        }
        else {
            result = [];
            for (let i = 0; i < this.length; i++)
                result.push.apply(result, this[i].children);
        }
        return new M(result);
    }
    push(...items) {
        for (let i = 0; i < items.length; i++) {
            let t = items[i];
            if (t instanceof S)
                items[i] = t.e;
        }
        return super.push(...items);
    }
    toArray() {
        return this.map(t => new S(t));
    }
    find(filter, thisArgs) {
        if (typeof filter === 'string') {
            for (var i = 0, e = this[0]; i < this.length; e = this[++i])
                if (e.matches(filter))
                    return e;
        }
        else
            return super.find(filter, thisArgs);
    }
    static fromS(s) {
        return new M(s.filter(s => s).map(s => s.e));
    }
    static empty(length = 0) {
        return new M(new Array(length));
    }
}
function html(tag, props, child) {
    return create(document.createElementNS('http://www.w3.org/1999/xhtml', tag), props, child);
}
function xml(tag, props, child) {
    return create(document.createElementNS('http://www.w3.org/1999/xhtml', tag), props, child);
}
function svg(tag, attrs, child) {
    var s = new S(document.createElementNS('http://www.w3.org/2000/svg', tag));
    if (attrs)
        if (isS(attrs) || Array.isArray(attrs))
            s.cls(attrs);
        else
            s.attrs(attrs);
    if (child || child === 0)
        s.add(child);
    return s;
}
function toSVG(text) {
    let parser = new DOMParser(), doc = parser.parseFromString(text, "image/svg+xml");
    return new S(doc.firstChild);
}
function wrap(child, props, tag) {
    if (typeof child === 'function')
        child = child();
    if (child instanceof E)
        child = child.render();
    else if (child instanceof Element)
        child = new S(child);
    else if (!(child instanceof S))
        child = create(tag || 'div', null, [child]);
    if (props)
        create(child, props);
    return child;
}
function get(input, context) {
    if (input) {
        if (typeof input === 'string') {
            if (context instanceof S)
                context = context.e;
            return new S((context || document).querySelector(input));
        }
        if ((input instanceof E && (input = input.render())) || input instanceof S)
            return input;
    }
    else {
        return S.empty;
    }
}
function getAll(input, context) {
    return new M(input, context);
}
class CL extends Array {
    push(...cls) {
        for (let t of cls) {
            if (t)
                for (let t2 of isS(t) ? t.split(' ') : t)
                    if (t2)
                        super.push(t2);
        }
        return this.length;
    }
    tryAdd(cls) {
        if (!this.includes(cls))
            this.push(cls);
        return this;
    }
}
function cl(...cls) {
    let c = new CL;
    if (cls.length)
        c.push(...cls);
    return c;
}
function css(selector, tag) {
    let r = "";
    for (let k in selector)
        r += css.parse(k, selector[k]);
    return tag ? tag.add(r) : create("style").text(r).addTo(document.head);
}
(function (css) {
    const subs = [">", " ", ":", "~", "+"];
    css.defSub = ">";
    function sub(parent, child) {
        return child.split(',').map(s => {
            let t = s[0];
            return parent.map(p => {
                if (t == "&")
                    return p + s.slice(1);
                else if (subs.indexOf(t) == -1)
                    return p + css.defSub + s;
                else
                    return p + s;
            }).join(',');
        }).join(',');
    }
    css.sub = sub;
    function parse(selector, props) {
        let r = "", subSel = "", split;
        for (let key in props) {
            let val = props[key];
            if (val || val === 0) {
                if (typeof val == "object") {
                    subSel += parse(sub(split || (split = selector.split(',')), key), val);
                }
                else
                    r += key.replace(regex, m => "-" + m) + ":" + val + ";";
            }
        }
        return (r ? selector + "{" + r + "}" : "") + subSel;
    }
    css.parse = parse;
    const regex = /[A-Z]/g;
})(css || (css = {}));
let _id = 0;
const id = () => 'i' + (_id++);
Event.prototype.off = function () {
    this.stopImmediatePropagation();
    this.preventDefault();
};
//# sourceMappingURL=galho.js.map

/***/ }),

/***/ "../galhui/galhui.js":
/*!***************************!*\
  !*** ../galhui/galhui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const { S, css } = __webpack_require__(/*! galho */ "../galho/galho.js");
const { ex } = __webpack_require__(/*! inutil */ "../inutil/inutil.js");
const cr = __webpack_require__(/*! ./core */ "../galhui/core.ts");

const ic = __webpack_require__(/*! ./icon */ "../galhui/icon.ts");
const bt = __webpack_require__(/*! ./button */ "../galhui/button.ts");
const ac = __webpack_require__(/*! ./accordion */ "../galhui/accordion.ts");
const md = __webpack_require__(/*! ./modal */ "../galhui/modal.ts");
const dd = __webpack_require__(/*! ./dropdown */ "../galhui/dropdown.ts");
// const sl = require("./select");
// const hv = require("./hover");
const ip = __webpack_require__(/*! ./input */ "../galhui/input.ts");
// const ly = require("./layout");
const tb = __webpack_require__(/*! ./tab */ "../galhui/tab.ts");
const mn = __webpack_require__(/*! ./menu */ "../galhui/menu.ts");

ex(mn.menu, { i: mn.i, sub: mn.sub, hr: mn.hr });
ex(exports, { menu: mn.menu, menubar: mn.menubar });
ex(exports, tb);
ex(exports, md);
ex(exports, cr);
ex(exports, ic);
ex(exports, bt);
ex(exports, ip);
ex(exports, ac);
ex(exports, dd);

exports.style = () => ({
  ...ip.style(),
  ...cr.style(),
  ...bt.style(),
  ...ac.style(),
  ...ic.style(),
  ...mn.style(),
  ...tb.style(),
  ...dd.style()
});


/***/ }),

/***/ "../inutil/inutil.js":
/*!***************************!*\
  !*** ../inutil/inutil.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lazy2": () => (/* binding */ lazy2),
/* harmony export */   "efe": () => (/* binding */ efe),
/* harmony export */   "lazy": () => (/* binding */ lazy),
/* harmony export */   "is": () => (/* binding */ is),
/* harmony export */   "isN": () => (/* binding */ isN),
/* harmony export */   "isS": () => (/* binding */ isS),
/* harmony export */   "isF": () => (/* binding */ isF),
/* harmony export */   "isVS": () => (/* binding */ isVS),
/* harmony export */   "t": () => (/* binding */ t),
/* harmony export */   "def": () => (/* binding */ def),
/* harmony export */   "isO": () => (/* binding */ isO),
/* harmony export */   "isV": () => (/* binding */ isV),
/* harmony export */   "isA": () => (/* binding */ isA),
/* harmony export */   "isU": () => (/* binding */ isU),
/* harmony export */   "isP": () => (/* binding */ isP),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "isB": () => (/* binding */ isB),
/* harmony export */   "arr": () => (/* binding */ arr),
/* harmony export */   "has": () => (/* binding */ has),
/* harmony export */   "delay": () => (/* binding */ delay),
/* harmony export */   "slip": () => (/* binding */ slip),
/* harmony export */   "vals": () => (/* binding */ vals),
/* harmony export */   "ex": () => (/* binding */ ex),
/* harmony export */   "sgn": () => (/* binding */ sgn),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "call": () => (/* binding */ call),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "query": () => (/* binding */ query),
/* harmony export */   "binarySearch": () => (/* binding */ binarySearch),
/* harmony export */   "isPlain": () => (/* binding */ isPlain),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "deepExtend": () => (/* binding */ deepExtend),
/* harmony export */   "deepSgn": () => (/* binding */ deepSgn),
/* harmony export */   "prot": () => (/* binding */ prot),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "plain": () => (/* binding */ plain),
/* harmony export */   "up": () => (/* binding */ up),
/* harmony export */   "uuid": () => (/* binding */ uuid),
/* harmony export */   "fromForm": () => (/* binding */ fromForm),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "notImp": () => (/* binding */ notImp),
/* harmony export */   "notF": () => (/* binding */ notF),
/* harmony export */   "inv": () => (/* binding */ inv),
/* harmony export */   "cacheArr": () => (/* binding */ cacheArr),
/* harmony export */   "first": () => (/* binding */ first),
/* harmony export */   "firstKey": () => (/* binding */ firstKey),
/* harmony export */   "each": () => (/* binding */ each),
/* harmony export */   "dta": () => (/* binding */ dta),
/* harmony export */   "byKey": () => (/* binding */ byKey),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "distinct": () => (/* binding */ distinct),
/* harmony export */   "valid": () => (/* binding */ valid),
/* harmony export */   "iByKey": () => (/* binding */ iByKey),
/* harmony export */   "expand": () => (/* binding */ expand)
/* harmony export */ });
function lazy2(data, key) {
    let t = data[key];
    return isF(t) ? (data[key] = t()) : t;
}
const check = (pattern, value) => ("" + value).toLowerCase().indexOf(pattern) >= 0;
const efe = (value, check) => (value & check) == check;
const lazy = (value) => isF(value) ? value() : value;
const is = (value, constructor) => value instanceof constructor;
function isN(value) {
    return typeof value === 'number';
}
const isS = (value) => typeof value === 'string';
const isF = (value) => typeof value === 'function';
function isVS(str) {
    if (!str)
        return false;
    for (let i = 0; i < str.length; i++)
        if (str[i] != ' ')
            return false;
    return true;
}
;
const t = (value) => value !== false;
const def = (value, def) => value === undefined ? def : value;
const isO = (value) => value && typeof value == 'object';
const isV = (value) => !isU(value) && value != null;
const isA = (value) => Array.isArray(value);
const isU = (value) => value === void 0;
const isP = (value) => isF(value.then);
const copy = (value) => Object.assign({}, value);
const isB = (value) => typeof value === 'boolean';
const arr = (v) => isA(v) ? v : [v];
const has = (field, obj) => obj && field in obj;
function delay(index, cb, time = 500) {
    clearTimeout(index);
    return setTimeout(cb, time);
}
const slip = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const vals = (obj) => Object.values(obj);
const ex = (value, extension) => Object.assign(value, extension);
function sgn(tgt, ...src) { return Object.assign(tgt, ...src); }
function add(array, ...items) {
    items.push(...items);
    return array;
}
function call(v, cb) {
    cb(v);
    return v;
}
const remove = (str, index, length) => str.slice(0, index) + str.slice(index + length);
function query(pattern, list, ...fields) {
    let r = [];
    for (let item of list)
        if (item && (fields.length ? fields.some(f => check(pattern, item[f])) : check(pattern, item)))
            r.push(item);
    return r;
}
function binarySearch(ar, compareFn) {
    var m = 0;
    var n = ar.length - 1;
    while (m <= n) {
        var index = (n + m) >> 1;
        var cmp = compareFn(ar[index]);
        if (cmp > 0) {
            m = index + 1;
        }
        else if (cmp < 0) {
            n = index - 1;
        }
        else {
            return index;
        }
    }
    return -m - 1;
}
const isPlain = (o) => o ? Object.getPrototypeOf(o) === Object.prototype : false;
function extend(obj, extension) {
    for (let key in extension) {
        if (obj[key] === undefined)
            obj[key] = extension[key];
    }
    return obj;
}
function deepExtend(obj, extension) {
    for (let key in extension) {
        let t = obj[key];
        switch (typeof t) {
            case "undefined":
                obj[key] = extension[key];
                continue;
            case "object":
                let t2 = extension[key];
                if (t && isPlain(t2))
                    deepExtend(t, t2);
        }
    }
    return obj;
}
function deepSgn(dest, src) {
    for (let key in src) {
        let d = dest[key], s = src[key];
        if (isPlain(d) && isPlain(s))
            deepSgn(d, s);
        else
            dest[key] = s;
    }
    return dest;
}
function prot(constructor, obj) {
    return Object.assign(new constructor(), obj);
}
function create(constructor, obj) {
    return Object.assign(new constructor(), obj);
}
function plain(src) {
    let t = [];
    for (let i of src)
        if (i)
            t.push(...i);
    return t;
}
function up(value) {
    return value && (value[0].toUpperCase() + value.slice(1).replace(/_/g, ' '));
}
function uuid(length = 32) {
    return Array
        .from({ length: length })
        .map(() => Math.round(Math.random() * 15).toString(16))
        .join('');
}
function fromForm(data) {
    var result = {};
    data.forEach((v, k) => result[k] = v);
    return result;
}
function isEmpty(obj) {
    for (let _k in obj)
        return false;
    return true;
}
const notImp = () => new Error("not implemented");
const notF = (key, itemTp, src, srcTp) => new Error(`${itemTp || 'item'} '${key}' not found` + (src ? ` in '${src}' ${srcTp}` : ''));
const inv = (key) => new Error(`invalid action`);
function cacheArr(max) {
    let arr = [];
    arr.push = (...values) => {
        let r = (values.l + arr.l) - max;
        r > 0 && arr.splice(0, r);
        return Array.prototype.push.call(arr, ...values);
    };
    return arr;
}
function first(dic, fn) {
    for (let key in dic)
        if (!fn || fn(dic[key], key))
            return dic[key];
    return void 0;
}
function firstKey(dic, fn) {
    for (let key in dic)
        if (!fn || fn(dic[key], key))
            return key;
    return void 0;
}
function each(dic, forEach) {
    for (let key in dic) {
        let t = forEach(dic[key], key);
        if (t === false)
            return;
    }
    return dic;
}
function dta(dic, fn) {
    var result = [];
    for (var key in dic)
        result.push(fn(dic[key], key));
    return result;
}
function byKey(arr, name, key = 'key') {
    for (let i = 0; i < arr.length; i++)
        if (name === arr[i][key])
            return arr[i];
    return null;
}
;
function sub(arr, key) {
    var _a;
    let t = Array(arr.length);
    for (let i = 0; i < arr.length; i++)
        t[i] = (_a = arr[i]) === null || _a === void 0 ? void 0 : _a[key];
    return t;
}
;
function distinct(arr) {
    return arr.filter((f, i) => {
        return arr.indexOf(f, i + 1) == -1;
    });
}
;
function valid(arr) {
    return arr.filter(v => v);
}
;
function iByKey(arr, name, key = 'key', i = 0) {
    for (; i < arr.length; i++)
        if (name === arr[i][key])
            return i;
    return -1;
}
;
function expand() {
    var _a, _b;
    (_a = String.prototype).padStart || (_a.padStart = function (length, pattern) {
        return this.length <= length ? this : (pattern.repeat(length - this.length) + this);
    });
    (_b = String.prototype).replaceAll || (_b.replaceAll = function (from, to) {
        return this.split(from).join(to);
    });
    Object.defineProperties(Array.prototype, {
        a: {
            get() {
                return this[0];
            },
            set(value) {
                this[0] = value;
            }
        },
        z: {
            get() {
                return this[this.length - 1];
            },
            set(value) {
                this[this.length - 1] = value;
            }
        },
        l: {
            get() {
                return this.length;
            },
            set(value) {
                this.length = value;
            }
        }
    });
    Array.prototype.dic = function (callback) {
        let result = {};
        for (let i = 0; i < this.length; i++) {
            let value = this[i];
            let temp = callback(value, i);
            result[temp[0]] = temp[1];
        }
        return result;
    };
    Array.prototype.put = function (index, ...value) {
        this.splice(index, 0, ...value);
        return this;
    };
    Array.prototype.cut = function (count) {
        let r = Array(Math.ceil(this.length / count));
        for (let i = 0; i < r.length;)
            r[i] = this.slice(i * count, ++i * count);
        return r;
    };
}
//# sourceMappingURL=inutil.js.map

/***/ }),

/***/ "../orray/orray.js":
/*!*************************!*\
  !*** ../orray/orray.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "off": () => (/* binding */ off),
/* harmony export */   "emit": () => (/* binding */ emit),
/* harmony export */   "Group": () => (/* binding */ Group),
/* harmony export */   "L": () => (/* binding */ L),
/* harmony export */   "default": () => (/* binding */ o)
/* harmony export */ });
function on(__eh, event, callback) {
    if (callback) {
        if (!(event in __eh)) {
            __eh[event] = [];
        }
        __eh[event].push(callback);
    }
}
function off(__eh, event, callback) {
    if (event in __eh) {
        if (callback) {
            var stack = __eh[event];
            for (let i = 0, l = stack.length; i < l; i++) {
                if (stack[i] === callback) {
                    stack.splice(i, 1);
                    return;
                }
            }
        }
        else
            delete __eh[event];
    }
}
function emit(__eh, element, event, data) {
    let stack = __eh[event];
    if (stack && stack.length) {
        for (let i = 0, l = stack.length; i < l; i++) {
            let e = stack[i];
            if (e.options) {
                if (e.options.once)
                    stack.splice(i--, 1);
                if (e.options.delay) {
                    setTimeout(() => { e.call(element, data); }, e.options.delay);
                    continue;
                }
            }
            if (e.call(element, data) === false)
                return false;
        }
    }
    else
        return -1;
}
;
class Group extends Array {
    constructor() {
        super(...arguments);
        this.__eh = {};
    }
    on(event, callback) {
        if (typeof event == "function") {
            callback = event;
            event = "set";
        }
        on(this.__eh, event, callback);
        return this;
    }
    off(event, callback) {
        off(this.__eh, event, callback);
        return this;
    }
    emit(event, data) {
        return emit(this.__eh, this, event, data);
    }
    push(...items) {
        this.add(items);
        return this.length;
    }
    add(items) {
        let indexes = Array(items.length);
        for (let i = 0; i < items.length; i++) {
            let item = items[i], index = this.list.indexOf(item);
            if (index != -1 && !this.includes(item)) {
                indexes[i] = index;
                this[this.length + i] = item;
            }
            else
                items.splice(i--, 1);
        }
        if (items.length) {
            this.length += items.length;
            this.emit('push', items);
            if (!this.noUpdate)
                this.emit("set", { add: items, addId: indexes });
        }
        return indexes;
    }
    pushRange(start, end) {
        return this.push(...this.list.slice(start, end));
    }
    pushAll() {
        return this.push(...this.list.slice());
    }
    remove(item) {
        let i = this.indexOf(item);
        if (i != -1)
            this.removeAt(i);
        return i != -1;
    }
    removeAt(index) {
        for (let i = index; i < this.length - 1; i++)
            this[i] = this[i + 1];
        let item = this[index], items = [item], id = [this.indexOf(item)];
        delete this[--this.length];
        this.emit('remove', items);
        if (!this.noUpdate)
            this.emit('set', { remove: items, remvId: id });
    }
    removeArray(items) {
        let indexes = Array(items.length);
        for (let i = 0; i < items.length; i++) {
            let item = items[i], indexInList = this.list.indexOf(item), index = this.indexOf(item);
            if (index != -1) {
                indexes[i] = indexInList;
                for (let i = index; i < this.length - 1; i++)
                    this[i] = this[i + 1];
                delete this[this.length - 1];
            }
            else
                items.splice(i--, 1);
        }
        this.length -= items.length;
        if (items.length) {
            this.emit('remove', items);
            if (!this.noUpdate)
                this.emit('set', { remove: items, remvId: indexes });
        }
        return indexes;
    }
    removeRange(from, to) {
        return this.removeArray(this.list.slice(from, to));
    }
    set(add) {
        if ((!add || !add.length) && !this.length)
            return;
        this.noUpdate = true;
        let remove = this.list.slice(), remvId = this.removeArray(remove), addId = add ? this.add(add) : [];
        this.noUpdate = false;
        this.emit('set', {
            remove, remvId,
            add, addId
        });
        return this;
    }
    invert() {
        this.set(this.list.filter(i => !this.includes(i)));
        return this;
    }
    setRange(start, end) {
        this.set(this.list.slice(start, end));
    }
    indexes() {
        for (var r = Array(this.length), i = 0; i < this.length; i++)
            r[i] = this.list.indexOf(this[i]);
        return r;
    }
    keyField() {
        for (var key = this.list.key, r = [], i = 0; i < this.length; i++)
            r.push(this[i][key]);
        return r;
    }
    toJSON() {
        throw "not implemented";
    }
}
class L extends Array {
    constructor(array, opts = {}) {
        super();
        this.g = {};
        this.__eh = {};
        this.key = opts.key;
        this.childKey = opts.child;
        this.sorts = opts.sorts;
        this.parse = opts.parse || opts.converter;
        if (opts.g)
            opts.g.forEach(this.addGroup, this);
        if (array)
            this.put(0, ...array);
    }
    static distinct() {
        return function (item) {
            if (this.indexOf(item) == -1)
                return item;
        };
    }
    addGroup(key) {
        let t = this.g[key] = new Group();
        t.list = this;
        t.key = key;
        return t;
    }
    put(start, ...values) {
        if (this.parse)
            for (let i = 0; i < values.length; i++) {
                let t = this.parse.call(this, values[i], i + start);
                if (t === undefined)
                    values.splice(i--, 1);
                else
                    values[i] = t;
            }
        if (!values.length)
            return;
        let length = values.length, oldLength = this.length;
        this.length += length;
        for (let c = oldLength - 1; c >= start; c--)
            this[c + length] = this[c];
        for (let c = 0; c < length; c++) {
            this[start + c] = values[c];
        }
        if (this.tags) {
            for (let key in this.tags) {
                let tag = this.tags[key];
                if (tag.index >= start)
                    tag.index += length;
            }
        }
        this.emit('insert', values);
        if (!this.noupdate)
            this.emit('update', {
                tp: 'insert',
                start: start,
                items: values
            });
        return this;
    }
    removeAt(start, length = 1) {
        if (length + start > this.length)
            length = this.length - start;
        if (length <= 0)
            return;
        var removed = Array(length);
        for (let c = 0; c < length; c++)
            removed[c] = this[start + c];
        for (let c = start + length; c < this.length; c++)
            this[c - length] = this[c];
        this.length -= length;
        for (let key in this.g) {
            this.g[key].removeArray(Array.from(removed));
        }
        if (this.tags)
            for (let key in this.tags) {
                let tag = this.tags[key];
                if (tag.index >= (start + length))
                    tag.index -= length;
                else if (tag.index >= start) {
                    this.setTag(key, tag.replace ?
                        this[Math.min(tag.index, this.length - 1)] :
                        null, tag.replace);
                }
            }
        this.emit('remove', removed);
        if (!this.noupdate)
            this.emit('update', { tp: 'remove', start, items: removed });
        return removed;
    }
    splice(start, deleteCount, ...values) {
        var result = this.removeAt(start, deleteCount);
        this.put(start, ...values);
        return result;
    }
    set(values) {
        if (!this.length && (!values || !values.length))
            return;
        this.noupdate = true;
        let removed = this.removeAt(0, this.length);
        if (values) {
            if (this.sorts) {
                for (let i = 0; i < this.sorts.length; i++) {
                    let sort = this.sorts[i], opt = { vars: {} };
                    values.sort((a, b) => {
                        opt.vars[0] = a;
                        opt.vars.b = b;
                        return sort.calc(opt);
                    });
                }
            }
            this.put(0, ...values);
        }
        this.noupdate = false;
        this.emit('update', { tp: 'set', items: this, removed });
        return this;
    }
    sort(compareFn) {
        throw "not implemented";
    }
    push(...values) {
        this.put(this.length, ...values);
        return this.length;
    }
    pop() {
        if (this.length)
            return this.removeAt(this.length - 1)[0];
    }
    shift() {
        return this.removeAt(0)[0];
    }
    unshift(...values) {
        this.put(0, ...values);
        return this.length;
    }
    remove(item) {
        let i = this.itemIndex(item);
        if (i >= 0)
            this.removeAt(i);
        return i >= 0;
    }
    place(item, newIndex) {
        var oldIndex = this.itemIndex(item);
        item = this[oldIndex];
        this.removeAt(oldIndex);
        this.put(newIndex, item);
        this.emit('update');
        return this;
    }
    reload(item) {
        let index = this.itemIndex(item), t = this[index];
        this.removeAt(index);
        this.put(index, t);
    }
    reloadAll() {
        this.set(this.slice());
    }
    copy(a, b) {
        if (typeof a == "function")
            a = new L(this.map(b = a));
        else
            a.set(this.map(b));
        this.on('update', e => {
            switch (e.tp) {
                case 'insert':
                    a.put(e.start, ...e.items.map((v, i) => b(v, e.start + i)));
                    break;
                case 'remove':
                    a.removeAt(e.start, e.items.length);
                    break;
                case 'set':
                    a.set(e.items.map(b));
                    break;
                case 'edit':
                    throw "not implemented";
            }
        });
        return a;
    }
    tryPush(item) {
        let k = item[this.key];
        if (this.byKey(k))
            this.edit({ item: k, props: item });
        else
            this.push(item);
    }
    edit(item) {
        let index = this.itemIndex(item.item);
        if (index !== -1) {
            item.item = Object.assign(item.item = this[index], item.props);
            this.emit('edit', [item]);
            this.emit('update', null);
        }
        return this;
    }
    editItems(...items) {
        let a;
        for (let item of items) {
            let index = this.indexByKey(item[this.key]);
            if (index !== -1) {
                this[index] = item;
                a = true;
            }
        }
        if (a) {
            this.emit('edit', null);
            this.emit('update', null);
        }
        return this;
    }
    get(id) {
        for (let i = 0; i < this.length; i++) {
            let value = this[i];
            if (value[this.key] == id)
                return value;
        }
        return undefined;
    }
    has(id) {
        for (let i = 0; i < this.length; i++) {
            if (this[i][this.key] === id)
                return true;
        }
        return false;
    }
    itemIndex(arg, fromIndex) {
        if (this.key)
            for (let i = fromIndex || 0, l = this.length; i < l; i++) {
                let value = this[i];
                if (value === arg || value[this.key] == arg)
                    return i;
            }
        else
            for (let i = fromIndex || 0, l = this.length; i < l; i++) {
                let value = this[i];
                if (value === arg)
                    return i;
            }
        return -1;
    }
    byKey(value, key = this.key) {
        return super.find(v => v[key] == value);
    }
    indexByKey(value, key = this.key) {
        return super.findIndex(v => v[key] == value);
    }
    map(callbackfn, thisArg) {
        var r = Array(this.length);
        if (!thisArg)
            thisArg = this;
        for (let i = 0; i < r.length; i++)
            r[i] = callbackfn.call(thisArg, this[i], i, this);
        return r;
    }
    filter(callbackfn, thisArg) {
        let r = [];
        for (let i = 0; i < this.length; i++)
            if (callbackfn.call(thisArg, this[i], i, this))
                r.push(this[i]);
        return r;
    }
    group(key) {
        return this.g[key] || this.addGroup(key);
    }
    on(event, callback) {
        if (typeof event == "function") {
            callback = event;
            event = "update";
        }
        on(this.__eh, event, callback);
        return this;
    }
    off(event, callback) {
        off(this.__eh, event, callback);
        return this;
    }
    emit(event, data) {
        if (this.slip)
            return true;
        return emit(this.__eh, this, event, data);
    }
    tag(name) { return this.getTag(name)?.value; }
    getTag(name) {
        return (this.tags || (this.tags = {}))[name];
    }
    setTag(key, value, replace) {
        let index = null, oldValue = this.getTag(key), newValue;
        if (value == null) {
            if (!oldValue)
                return this;
            delete this.tags[key];
        }
        else {
            index = this.itemIndex(value);
            if (index == -1) {
                console.warn({ message: "value is not in list", value });
                return this;
            }
            if (oldValue && index == oldValue.index)
                return this;
            value = this[index];
            newValue = {
                value: value,
                index: index,
                replace: replace
            };
            this.tags[key] = newValue;
        }
        this.emit(('tag:' + key), value);
        this.emit("update", {
            tp: "tag",
            tag: key,
            newI: index,
            oldI: oldValue ? oldValue.index : null
        });
        return this;
    }
    ontag(key, callback) {
        on(this.__eh, `tag:${key}`, callback);
        return this;
    }
    unbind(s) {
        let b = this.binds;
        if (b) {
            let i = b.findIndex(b => b[0] == s);
            if (i != -1)
                b.splice(i, 1);
        }
        return this;
    }
    bind(s, opts = {}) {
        let bond = typeof opts == "function" ? { insert: opts } : opts;
        let empty = (value) => {
            if (bond.empty) {
                let v = bond.empty.call(this, value);
                if (v)
                    s.set(value);
            }
        }, insert = (items, start) => {
            for (let i = 0; i < items.length; i++) {
                let item = items[i], v = bond.insert ? bond.insert.call(this, item, start + i, s) : item;
                if (v)
                    s.place(start + i, v);
            }
        }, remove = (items, start) => {
            for (let i = 0; i < items.length; i++) {
                if (bond.remove ? bond.remove.call(this, items[i], start + i, s) : true)
                    s.unplace(start + i);
            }
        }, fn = (opts) => {
            switch (opts.tp) {
                case 'insert':
                    if (this.length == opts.items.length)
                        empty(false);
                    insert(opts.items, opts.start);
                    break;
                case 'remove':
                    remove(opts.items, opts.start);
                    if (!this.length)
                        empty(true);
                    break;
                case 'tag':
                    if (bond.tag) {
                        if (opts.oldI != null)
                            bond.tag.call(this, s.child(opts.oldI), false, opts.tag, this[opts.oldI], opts.oldI, s);
                        if (opts.newI != null)
                            bond.tag.call(this, s.child(opts.newI), true, opts.tag, this[opts.newI], opts.newI, s);
                    }
                    break;
                case 'set':
                    if (bond.clear === false)
                        remove(opts.removed, 0);
                    else if (bond.clear)
                        bond.clear(s);
                    else
                        s.set();
                    if (opts.items) {
                        if (!opts.removed)
                            empty(false);
                        insert(opts.items, 0);
                    }
                    else
                        empty(true);
            }
        };
        this.on('update', fn);
        if (bond.groups)
            if (typeof bond.groups == "function")
                for (let g in this.g)
                    this.bindGroup(s, g, bond.groups);
            else
                for (let g in bond.groups)
                    this.bindGroup(s, g, bond.groups[g]);
        if (this.binds)
            this.binds.push([s, fn]);
        else
            this.binds = [[s, fn]];
        insert(this, 0);
        return s;
    }
    bindGroup(s, groupKey, bond) {
        let g = this.g[groupKey];
        if (!g)
            throw `group '${groupKey}' not found`;
        let call = (items, indexes, state) => {
            for (let i = 0; i < items.length; i++) {
                let id = indexes[i];
                bond.call(this, s.child(id), state, groupKey, items[i], id, s);
            }
        };
        g.on("set", e => {
            if (e.add)
                call(e.add, e.addId, true);
            if (e.remove)
                call(e.remove, e.remvId, false);
        });
        return s;
    }
    static get [Symbol.species]() { return Array; }
}
function o(array, options) {
    if (array && !Array.isArray(array)) {
        options = array;
        array = null;
    }
    if (array instanceof L) {
        if (options) {
            if (options.g)
                for (let g of options.g)
                    if (!(g in array.g))
                        array.addGroup(g);
            if (options.sorts)
                throw "not implemented";
            if (options.key && array.key && array.key != options.key)
                throw "inconpatible lists";
        }
        return array;
    }
    else
        return new L(array, options);
}
//# sourceMappingURL=orray.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"libs": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktheus_portfolio"] = self["webpackChunktheus_portfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("../galhui/galhui.js");
/******/ 	__webpack_require__("../galho/galho.js");
/******/ 	__webpack_require__("../orray/orray.js");
/******/ 	__webpack_require__("../entity/entity.js");
/******/ 	var __webpack_exports__ = __webpack_require__("../inutil/inutil.js");
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPO0FBQ3pEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdJQUFnSTtBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsYUFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw0QkFBNEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vLi4vZ2FsaHVpL2FjY29yZGlvbi50cyIsIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vLi4vZ2FsaHVpL2J1dHRvbi50cyIsIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vLi4vZ2FsaHVpL2NvcmUudHMiLCJ3ZWJwYWNrOi8vdGhldXNfcG9ydGZvbGlvLy4uL2dhbGh1aS9kcm9wZG93bi50cyIsIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vLi4vZ2FsaHVpL2hvdmVyLnRzIiwid2VicGFjazovL3RoZXVzX3BvcnRmb2xpby8uLi9nYWxodWkvaWNvbi50cyIsIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vLi4vZ2FsaHVpL2lucHV0LnRzIiwid2VicGFjazovL3RoZXVzX3BvcnRmb2xpby8uLi9nYWxodWkvbWVudS50cyIsIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vLi4vZ2FsaHVpL21vZGFsLnRzIiwid2VicGFjazovL3RoZXVzX3BvcnRmb2xpby8uLi9nYWxodWkvdGFiLnRzIiwid2VicGFjazovL3RoZXVzX3BvcnRmb2xpby8uLi9nYWxodWkvd2FpdC50cyIsIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vLi4vZW50aXR5L2VudGl0eS5qcyIsIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vLi4vZ2FsaG8vZ2FsaG8uanMiLCJ3ZWJwYWNrOi8vdGhldXNfcG9ydGZvbGlvLy4uL2dhbGh1aS9nYWxodWkuanMiLCJ3ZWJwYWNrOi8vdGhldXNfcG9ydGZvbGlvLy4uL2ludXRpbC9pbnV0aWwuanMiLCJ3ZWJwYWNrOi8vdGhldXNfcG9ydGZvbGlvLy4uL29ycmF5L29ycmF5LmpzIiwid2VicGFjazovL3RoZXVzX3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGhldXNfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGhldXNfcG9ydGZvbGlvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGhldXNfcG9ydGZvbGlvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoaWxkLCBDLCB0aGVtZSwgU2l6ZSwgQ29sb3IsIHNwYywgYm9yZCwgJCwgYyB9IGZyb20gXCIuL2NvcmVcIjtcclxuaW1wb3J0IHsgY3NzLCBFLCBPbmUsIGcsIFJlbmRlciwgUywgd3JhcCwgZGl2LCB9IGZyb20gXCJnYWxob1wiO1xyXG5pbXBvcnQgaWNvbiwgeyBJY29uIH0gZnJvbSBcIi4vaWNvblwiO1xyXG5pbXBvcnQgeyBleCwgdCB9IGZyb20gXCJpbnV0aWxcIjtcclxuaW1wb3J0IG8sIHsgQWxpYXMgfSBmcm9tIFwib3JyYXlcIjtcclxuXHJcbmV4cG9ydCB0eXBlIEFjY29yZGlvbkl0ZW0gPSBbaGVhZDogYW55LCBib2R5OiBhbnldO1xyXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvcmRpb24ge1xyXG4gIGljb24/OiBib29sLCBzaW5nbGU/OiBib29sLCBkZWY/OiBpbnRcclxufVxyXG5leHBvcnQgY29uc3QgaGlkZGVuID0gKGhlYWQ6IGFueSwgYm9keTogYW55LCBvcGVuPzogYm9vbCkgPT4gZGl2KFskLmMsIEMuYWNjb3JkaW9uXSwgW1xyXG4gIGhlYWQgPSBkaXYoQy5oZWFkLCBbXHJcbiAgICBpY29uKFwibWVudVJcIikuY2xzKEMuYSksXHJcbiAgICBoZWFkXHJcbiAgXSkuY2xzKEMub24sICEhb3Blbikub24oXCJjbGlja1wiLCAoKSA9PiAoPFM+aGVhZCkudGNscyhDLm9uKSksXHJcbiAgd3JhcChib2R5LEMuYm9keSlcclxuXSk7XHJcbmV4cG9ydCBmdW5jdGlvbiBhY2NvcmRpb24oaXRlbXM6IEFsaWFzPEFjY29yZGlvbkl0ZW0+LCBpOiBJQWNjb3JkaW9uID0ge30pIHtcclxuICByZXR1cm4gbyhpdGVtcykuYmluZChkaXYoWyQuYywgQy5hY2NvcmRpb25dKSwgKFtoLCBiXSwgaiwgcCkgPT4ge1xyXG4gICAgcC5wbGFjZShqICogMiwgW1xyXG4gICAgICBoID0gZGl2KEMuaGVhZCwgW1xyXG4gICAgICAgIHQoaS5pY29uKSAmJiBpY29uKFwibWVudVJcIikuY2xzKEMuYSksXHJcbiAgICAgICAgaFxyXG4gICAgICBdKS5jbHMoQy5vbiwgaS5kZWYgPT0gaikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCg8Uz5oKS5pc0NscyhDLm9uKSlcclxuICAgICAgICAgICg8Uz5oKS5jbHMoQy5vbiwgZmFsc2UpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdChpLnNpbmdsZSkgJiYgcC5jaGlsZHMoXCIuXCIgKyBDLmhlYWQpLmNscyhDLm9uLCBmYWxzZSk7XHJcbiAgICAgICAgICAoPFM+aCkuY2xzKEMub24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICAgIHdyYXAoYixDLmJvZHkpXHJcbiAgICBdKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlKCk6IGNzcy5TdHlsZXMge1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgW2MoQy5hY2NvcmRpb24pXToge1xyXG4gICAgICBbXCIuXCIgKyBDLmJvZHldOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJub25lXCJcclxuICAgICAgfSxcclxuICAgICAgW1wiLlwiICsgQy5oZWFkXToge1xyXG4gICAgICAgIFtgJi4ke0Mub259Ky4ke0MuYm9keX1gXToge1xyXG4gICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDaGlsZCwgQywgdGhlbWUsIFNpemUsIENvbG9yLCBzcGMsIGJvcmQsICQsIGJsb2NrLCBjIH0gZnJvbSBcIi4vY29yZVwiO1xyXG5pbXBvcnQgeyBjbCwgY3NzLCBkaXYsIGcsIFJlbmRlciwgUywgfSBmcm9tIFwiZ2FsaG9cIjtcclxuaW1wb3J0IGljb24sIHsgSWNvbiB9IGZyb20gXCIuL2ljb25cIjtcclxuZXhwb3J0IHR5cGUgY2xpY2sgPSAodGhpczogSFRNTEJ1dHRvbkVsZW1lbnQsIGU6IE1vdXNlRXZlbnQpID0+IGFueTtcclxuXHJcbmV4cG9ydCBjb25zdCBidXR0b24gPSAodGV4dDogQ2hpbGQsIGNsaWNrPzogY2xpY2spID0+IGcoXCJidXR0b25cIiwgQy5idXR0b24sIHRleHQpLm9uKFwiY2xpY2tcIiwgY2xpY2spO1xyXG5leHBvcnQgY29uc3QgbGluayA9ICh0ZXh0OiBDaGlsZCwgaHJlZj86IHN0cikgPT4gZyhcImFcIiwgQy5idXR0b24sIHRleHQpLnByb3AoXCJocmVmXCIsIGhyZWYpO1xyXG5cclxuLyoqIGJ1dHRvbiB3aXRoIGljb24gKi9cclxuZXhwb3J0IGNvbnN0IGlidXR0b24gPSAoaTogSWNvbiwgdGV4dDogQ2hpbGQsIGNsaWNrPzogY2xpY2spID0+IGcoXCJidXR0b25cIiwgY2woJC5jLCBDLmJ1dHRvbiksIFtpY29uKGkpLCB0ZXh0XSkub24oXCJjbGlja1wiLCBjbGljayk7XHJcbi8qKiBsaW5rIHdpdGggaWNvbiAqL1xyXG5leHBvcnQgY29uc3QgaWxpbmsgPSAoaTogSWNvbiwgdGV4dDogQ2hpbGQsIGhyZWY/OiBzdHIpID0+IGcoXCJhXCIsIEMubGluaywgW2ljb24oaSksIHRleHRdKS5wcm9wKFwiaHJlZlwiLCBocmVmKTtcclxuXHJcbi8qKmNsb3NlIGJ1dHRvbiAqL1xyXG5leHBvcnQgY29uc3QgY2xvc2UgPSAoY2xpY2s/OiBjbGljaykgPT4gZGl2KGNsKCQuYywgQy5jbG9zZSksIGljb24oXCJjbG9zZVwiKSkub24oXCJjbGlja1wiLCBjbGljayk7XHJcbi8qKmNhbmNlbCBidXR0b24gKi9cclxuZXhwb3J0IGNvbnN0IGNhbmNlbCA9IChjbGljaz86IGNsaWNrKSA9PiBpYnV0dG9uKFwiY2FuY2VsXCIsICQudy5jYW5jZWwsIGNsaWNrKS5jbHMoQ29sb3IuZXJyb3IpO1xyXG4vKipjb25maXJtIGJ1dHRvbiAqL1xyXG5leHBvcnQgY29uc3QgY29uZmlybSA9IChjbGljaz86IGNsaWNrKSA9PiBpYnV0dG9uKFwiY29uZmlybVwiLCAkLncuY29uZmlybSwgY2xpY2spLmNscyhDb2xvci5hY2NlcHQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ1dHRvbnMgPSAoLi4uYnV0dG9uczogU1tdKSA9PiBkaXYoQy5idXR0b25zLCBidXR0b25zKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZSgpOiBjc3MuU3R5bGVzIHtcclxuICBsZXQgeyBhLCBzLCBsIH0gPSB0aGVtZTtcclxuICByZXR1cm4ge1xyXG4gICAgLy9zdHlsZVxyXG5cclxuICAgIFtcIi5cIiArIEMubGlua106IHtcclxuICAgICAgY29sb3I6IGwuZmcsXHJcbiAgICAgIFwiOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiBsLnZpcyxcclxuICAgICAgfSxcclxuICAgICAgXCI6YWN0aXZlXCI6IHtcclxuICAgICAgICBjb2xvcjogbC5vbixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBbYyhDLmJ1dHRvbildOiB7XHJcbiAgICAgIC4uLmJsb2NrKGEpLFxyXG4gICAgICBbXCImLlwiICsgQy5mdWxsXTogeyBkaXNwbGF5OiBcImJsb2NrXCIsIHdpZHRoOiBcImF1dG9cIiB9LFxyXG5cclxuXHJcbiAgICAgIFtcIiYuXCIgKyBDb2xvci5hY2NlcHRdOiB7IGJhY2tncm91bmQ6IHMuYWNjZXB0IH0sXHJcbiAgICAgIFtcIiYuXCIgKyBDb2xvci5lcnJvcl06IHsgYmFja2dyb3VuZDogcy5lcnJvciB9LFxyXG4gICAgICBbXCImLlwiICsgQ29sb3IubWFpbl06IHsgYmFja2dyb3VuZDogcy5tYWluIH0sXHJcbiAgICAgIFtcIiYuXCIgKyBDb2xvci5zaWRlXTogeyBiYWNrZ3JvdW5kOiBzLnNpZGUgfSxcclxuICAgICAgW1wiJi5cIiArIENvbG9yLndhcm5pbmddOiB7IGJhY2tncm91bmQ6IHMud2FybiB9XHJcbiAgICB9LFxyXG5cclxuICAgIFtjKEMuY2xvc2UpXToge1xyXG4gICAgICBjb2xvcjogcy5lcnJvcixcclxuICAgICAgYmFja2dyb3VuZDogXCJub25lXCIsXHJcbiAgICAgIG9wYWNpdHk6IDAuOCxcclxuICAgICAgXCI6aG92ZXJcIjoge1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtcIi5cIiArIEMuYnV0dG9uc106IHtcclxuXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBQcm9wZXJ0eSB9IGZyb20gXCJjc3N0eXBlXCI7XHJcbmltcG9ydCB7IEFOWUVsZW1lbnQsIGNzcywgUyB9IGZyb20gXCJnYWxob1wiO1xyXG5pbXBvcnQgeyBpc04gfSBmcm9tIFwiaW51dGlsXCI7XHJcbmltcG9ydCB0eXBlIHsgSWNvbiB9IGZyb20gXCIuL2ljb25cIjtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBuYW1lc3BhY2UgR2FsaG9VSSB7XHJcbiAgICBpbnRlcmZhY2UgV29yZHMge1xyXG4gICAgICBjYW5jZWw/OiBzdHI7XHJcbiAgICAgIGNvbmZpcm0/OiBzdHI7XHJcbiAgICAgIHNlYXJjaD86IHN0cjtcclxuICAgICAgeWVzPzogc3RyO1xyXG4gICAgICBubz86IHN0cjtcclxuICAgICAgY2FtZXJhPzogc3RyO1xyXG4gICAgICBzYXZlPzogc3RyO1xyXG4gICAgfVxyXG4gICAgaW50ZXJmYWNlIFNldHRpbmdzIHtcclxuICAgICAgLyoqY2xhc3MgKi9cclxuICAgICAgYzogc3RyO1xyXG5cclxuICAgICAgLyoqaWNvbiBzY2FsZSAqL1xyXG4gICAgICBpY29uUz86IGludDtcclxuICAgICAgZGVsYXk/OiBpbnQ7XHJcbiAgICAgIC8qKiB3b3JkcyAqL1xyXG4gICAgICB3OiBXb3JkcztcclxuICAgICAgbnVsbEljb24/KCk6IEljb247XHJcbiAgICAgIC8vLyoqcmV0dXJuIHZhbHVlIGZvcm1hdHRlZCovXHJcbiAgICAgIC8vZm10Pyh2YWx1ZTogYW55LCBwYXR0ZXJuOiBzdHIsIHR5cGU/OiBGb3JtYXRUeXBlKTogYW55O1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBUaGVtZSB7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCB0eXBlIEZvcm1hdFR5cGUgPSBcInNcIiB8IFwiZFwiIHwgXCJiXCIgfCBcIm5cIjtcclxuLyoqIGNsYXNzZXMgKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gQyB7XHJcbiAgZnVsbCA9IFwiZnVsbFwiLFxyXG4gIGRpc2FibGVkID0gXCJkc1wiLFxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLWNvbXBvbmVudHNcclxuICBidXR0b24gPSBcImJ0XCIsXHJcbiAgYnV0dG9ucyA9IFwiYnNcIixcclxuICBhY2NvcmRpb24gPSBcImFjXCIsXHJcbiAgZHJvcGRvd24gPSBcImRkXCIsXHJcbiAgY2xvc2UgPSBcImNsXCIsXHJcbiAgdGFiID0gXCJ0YVwiLFxyXG4gIG1lbnUgPSBcIm1uXCIsXHJcbiAgcGFuZWwgPSBcInBuXCIsXHJcbiAgbWVudWJhciA9IFwibWJcIixcclxuICBpbnB1dCA9IFwiaW5cIixcclxuICBsaW5rID0gXCJsa1wiLFxyXG4gIGxvYWRpbmcgPSBcImxkXCIsXHJcbiAgbGV2ZXIgPSBcImx2XCIsXHJcbiAgbGlzdCA9IFwibHNcIixcclxuICBjb250YWluZXIgPSBcImNvbnRhaW5lclwiLFxyXG4gIG1vZGFsID0gXCJtZFwiLFxyXG4gIGljb24gPSBcIm9cIixcclxuICB0cmVlID0gXCJ0clwiLFxyXG4gIHRhYmxlID0gXCJ0YlwiLFxyXG4gIHBsYWNlaG9sZGVyID0gXCJwaFwiLFxyXG4gIHNlbGVjdCA9IFwic2xcIixcclxuICBsYWJlbCA9IFwibGJcIixcclxuICBjaGVja2JveCA9IFwiY2JcIixcclxuICBzd2l0Y2ggPSBcInN3XCIsXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tZ2VuZXJpY1xyXG4gIGl0ZW0gPSBcImlcIixcclxuICBoZWFkID0gXCJoZFwiLFxyXG4gIGJvZHkgPSBcImJkXCIsXHJcbiAgZm9vdCA9IFwiZnRcIixcclxuICBzaWRlID0gXCJzZFwiLFxyXG4gIG1haW4gPSBcIm1hXCIsXHJcbiAgYSA9IFwiYVwiLCBiID0gXCJiXCIsIGMgPSBcImNcIixcclxuICBzZXBhcmF0b3IgPSBcInNlcGFyYXRvclwiLFxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLXN0YXRlXHJcbiAgb24gPSBcIm9cIixcclxuICBzZWxlY3RlZCA9IFwic2RcIixcclxuICBpbmxpbmUgPSBcImlubGluZVwiLFxyXG4gIG9mZiA9IFwib2ZcIixcclxuICBmaWxlU2VsZWN0b3IgLyoqIGJvcmRlciAgaW4gcHggKi8gPSBcImZpbGVTZWxlY3RvclwiLFxyXG4gIGV4dHJhID0gXCJleHRyYVwiXHJcbn1cclxuXHJcbi8qKnNldHRpbmdzICovXHJcbmV4cG9ydCB2YXIgJDogR2FsaG9VSS5TZXR0aW5ncyA9IHtcclxuICBjOiBcIl9cIixcclxuICBpY29uUzogMjQsXHJcbiAgZGVsYXk6IDUwMCxcclxuICB3OiB7fVxyXG59XHJcbmV4cG9ydCB0eXBlIENoaWxkID0gc3RyIHwgaW50IHwgZmxvYXQgfCBTPEFOWUVsZW1lbnQ+O1xyXG5cclxuZXhwb3J0IHR5cGUgU3BhY2UgPSBmbG9hdCB8IFt4OiBmbG9hdCwgeTogZmxvYXRdO1xyXG5leHBvcnQgdHlwZSBTcGFjZUZ1bGwgPSBTcGFjZSB8IFt0OiBmbG9hdCwgbDogZmxvYXQsIHI6IGZsb2F0XSB8IFt0OiBmbG9hdCwgbDogZmxvYXQsIGI6IGZsb2F0LCByOiBmbG9hdF07XHJcbmV4cG9ydCBjb25zdCBzcGMgPSAodjogU3BhY2VGdWxsLCB1bml0ID0gXCJweFwiKSA9PiBpc04odikgPyB2ICsgdW5pdCA6IHYubWFwKHYgPT4gdiArIHVuaXQpLmpvaW4oXCIgXCIpO1xyXG4vKipob3Jpem9udGFsIHNwYWNlICovXHJcbmV4cG9ydCBjb25zdCBocyA9ICh2OiBTcGFjZSkgPT4gaXNOKHYpID8gdiA6IHZbMF07XHJcbi8qKnZlcnRpY2FsIHNwYWNlICovXHJcbmV4cG9ydCBjb25zdCB2cyA9ICh2OiBTcGFjZSkgPT4gaXNOKHYpID8gdiA6IHZbMV07XHJcbmV4cG9ydCBpbnRlcmZhY2UgQm9yZGVyIHtcclxuICAvKip3aWR0aCAqL1xyXG4gIHc/OiBmbG9hdDtcclxuICAvKipzdHlsZSAqL1xyXG4gIHM/OiBQcm9wZXJ0eS5Cb3JkZXJTdHlsZTtcclxuICAvKipjb2xvciAqL1xyXG4gIGM/OiBQcm9wZXJ0eS5Db2xvcjtcclxufVxyXG5leHBvcnQgY29uc3QgYm9yZCA9ICh7IHcsIHMsIGMgfTogQm9yZGVyKSA9PiBgJHt3IHx8IDF9cHggJHtzIHx8IFwic29saWRcIn0gJHtjfWA7XHJcbmV4cG9ydCBpbnRlcmZhY2UgVEJsb2NrIHtcclxuICAvKiogdGV4dCBjb2xvciovXHJcbiAgdHh0PzogUHJvcGVydHkuQ29sb3I7XHJcbiAgLyoqIG1hcmdpbiAgaW4gcHggKi9cclxuICBtcmc/OiBTcGFjZTtcclxuICAvKiogcGFkZGluZyAgaW4gcHggKi9cclxuICBwYWQ/OiBTcGFjZTtcclxuICAvKiogYm9yZGVyIHJhZGl1cyBpbiBweCAqL1xyXG4gIHJhZD86IGZsb2F0O1xyXG4gIC8qKiBib3JkZXIgIGluIHB4ICovXHJcbiAgYnJkPzogQm9yZGVyO1xyXG4gIC8qKiBiYWNrZ3JvdW5kICBpbiBweCAqL1xyXG4gIGJnPzogUHJvcGVydHkuQmFja2dyb3VuZDtcclxufVxyXG5leHBvcnQgY29uc3QgYmxvY2sgPSAodjogVEJsb2NrKTogY3NzLlN0eWxlID0+ICh7XHJcbiAgY29sb3I6IHYudHh0LFxyXG4gIHBhZGRpbmc6IHNwYyh2LnBhZCksXHJcbiAgbWFyZ2luOiBzcGModi5tcmcpLFxyXG4gIGJvcmRlclJhZGl1czogc3BjKHYucmFkKSxcclxuICBib3JkZXI6IHYuYnJkICYmIGJvcmQodi5icmQpLFxyXG4gIGJhY2tncm91bmQ6IHYuYmcsXHJcbn0pO1xyXG5pbnRlcmZhY2UgTWVudVN0eWxlIHtcclxuICAvKipoZWlnaHQgaW4gcHggKi9cclxuICBoPzogZmxvYXQ7XHJcbiAgLyoqIGJhY2tncm91bmQgKi9cclxuICBiZz86IFByb3BlcnR5LkJhY2tncm91bmQ7XHJcbiAgLyoqIGl0ZW06YWN0aXZlICovXHJcbiAgaWE/OiBQcm9wZXJ0eS5CYWNrZ3JvdW5kO1xyXG4gIC8qKiBpdGVtOmhvdmVyICovXHJcbiAgaWg/OiBQcm9wZXJ0eS5CYWNrZ3JvdW5kO1xyXG59XHJcbmludGVyZmFjZSBCRiB7XHJcbiAgLyoqYmFja2dyb3VuZCAqL1xyXG4gIGJnPzogUHJvcGVydHkuQmFja2dyb3VuZDtcclxuICAvKiogKGZvcmVncm91bmQpdGV4dCBjb2xvciovXHJcbiAgZmc/OiBQcm9wZXJ0eS5Db2xvcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lIGV4dGVuZHMgR2FsaG9VSS5UaGVtZSB7XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqZ2VuZXJhbCAqKioqKioqKioqKioqKioqKioqL1xyXG4gIC8qKnByaW1hcnkgY29sb3IgKi9cclxuICBiZzogc3RyO1xyXG4gIC8qKnRleHQgY29sb3IgKi9cclxuICB0eHQ6IHN0cjtcclxuXHJcbiAgLyoqZm9udCBmYW1pbHkgKi9cclxuICBmb250OiBzdHI7XHJcbiAgLyoqIGRpc2FibGVkIGl0ZW0gb3BhY2l0eSAqL1xyXG4gIG9mZj86IFByb3BlcnR5Lk9wYWNpdHk7XHJcbiAgLyoqKioqKioqKioqKioqKiptZW51ICoqKioqKioqKioqKioqKioqKiovXHJcbiAgbT86IE1lbnVTdHlsZSAmIHtcclxuICAgIC8qKmFycm93IGljb24gaW4gZHJvcGRvd24gKi9cclxuICAgIGRkaT86IGJvb2xcclxuICAgIC8qKnNob3J0Y3V0IHBhZGRpbmcgKi9cclxuICAgIHNjcD86IGZsb2F0O1xyXG4gICAgLyoqIGlucHV0IGJhY2tncm91bmQgKi9cclxuICAgIGk/OiBQcm9wZXJ0eS5CYWNrZ3JvdW5kO1xyXG4gIH0sXHJcbiAgLyoqKioqKioqKiogdGFiICoqKioqKioqKioqKiovXHJcbiAgdGI/OiBNZW51U3R5bGVcclxuICAvKioqKioqKioqKioqKioqIGFjZW50ICoqKioqKioqKioqKioqKioqKiovXHJcbiAgYT86IFRCbG9jayxcclxuXHJcbiAgLyoqKioqKioqKiBhY3RpdmUsc2VsZWN0ZWQgaXRlbSAqKioqKioqKioqKi9cclxuICBvbjogQkYgJiB7XHJcbiAgICAvKiogYm9sZCAqL1xyXG4gICAgYj86IGJvb2wgfCBQcm9wZXJ0eS5Gb250V2VpZ2h0XHJcbiAgfSxcclxuICAvKioqKioqKioqKioqKioqKiBsaW5rICoqKioqKioqKioqKioqKioqKiovXHJcbiAgbD86IEJGICYge1xyXG5cclxuICAgIC8qKiBhY3RpdmUgdGV4dCBjb2xvciovXHJcbiAgICBvbj86IFByb3BlcnR5LkNvbG9yO1xyXG5cclxuICAgIC8qKiB2aXNpdGVkIHRleHQgY29sb3IqL1xyXG4gICAgdmlzPzogUHJvcGVydHkuQ29sb3I7XHJcbiAgfSxcclxuICAvKioqKioqKioqKioqKioqIHN0eWxlICoqKioqKioqKioqKioqKioqKiovXHJcbiAgcz86IHtcclxuICAgIGFjY2VwdD86IFByb3BlcnR5LkNvbG9yO1xyXG4gICAgbWFpbj86IFByb3BlcnR5LkNvbG9yO1xyXG4gICAgc2lkZT86IFByb3BlcnR5LkNvbG9yO1xyXG4gICAgZXJyb3I/OiBQcm9wZXJ0eS5Db2xvcjtcclxuICAgIHdhcm4/OiBQcm9wZXJ0eS5Db2xvcjtcclxuICB9XHJcbiAgLyoqKioqKioqKioqIHRleHQgc2l6ZSBpbiBweCAqKioqKioqKioqKioqKiovXHJcbiAgc3o/OiB7XHJcbiAgICAvKiplWHRyZW1lIGxhcmdlICovXHJcbiAgICB4bD86IGZsb2F0O1xyXG4gICAgLyoqbGFyZ2UgKi9cclxuICAgIGw/OiBmbG9hdDtcclxuICAgIC8qKm5vcm1hbCAqL1xyXG4gICAgbj86IGZsb2F0O1xyXG4gICAgcz86IGZsb2F0O1xyXG4gICAgeHM/OiBmbG9hdDtcclxuICB9LFxyXG4gIC8qKioqKioqKioqKioqKiBpbnB1dHMgKioqKioqKioqKioqKioqKioqKi9cclxuICBpPzogVEJsb2NrXHJcbiAgLyoqKioqKioqKiogZHJvcGRvd24gYW5kIHNlbGVjdCAqKioqKioqKioqKioqL1xyXG4gIGRkPzoge1xyXG4gICAgLyoqc2hvdWxkIGFkZCBpY29uIGF0IGRyb3Bkb3duIGFuZCBzZWxlY3QgKi9cclxuICAgIGk/OiBib29sXHJcbiAgfVxyXG4gIC8qKioqKioqKioqIGRpdmlzb3IgKioqKioqKioqKioqKi9cclxuICBkaXY/OiBCb3JkZXIsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3b3JkKGtleTogc3RyKSB7IHJldHVybiBrZXk7IH1cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbnRlbmNlKGZvcm1hdDogc3RyKSB7XHJcbiAgY29uc3QgZXhwID0gL1xce1xcdytcXH0vO1xyXG4gIGZvcm1hdC5yZXBsYWNlKGV4cCwgKHYpID0+ICQud1t2LnNsaWNlKDEsIHYubGVuZ3RoIC0gMSldKTtcclxufVxyXG5leHBvcnQgdmFyIHRoZW1lOiBUaGVtZSA9IDxhbnk+e307XHJcbmV4cG9ydCBjb25zdCBiYXNpYyA9ICgpOiBUaGVtZSA9PiAoe1xyXG4gIGJnOiBcIiNmZmZcIixcclxuICB0eHQ6IFwiIzAwMFwiLFxyXG4gIGZvbnQ6IFwiQVJJQUxcIixcclxuICBvZmY6IDAuNyxcclxuICBhOiB7XHJcbiAgICBtcmc6IFsyLCAxXSxcclxuICAgIHBhZDogWzIsIDFdLFxyXG4gICAgcmFkOiAyLFxyXG4gICAgYmc6IFwiI2NhY2JjZFwiLFxyXG4gIH0sXHJcbiAgbDoge1xyXG4gICAgZmc6IFwiIzBkNmVmZFwiLFxyXG4gICAgb246IFwiIzBhNThjYVwiLFxyXG4gICAgdmlzOiBcIiM2NzNhYjdcIlxyXG4gIH0sXHJcbiAgczoge1xyXG4gICAgYWNjZXB0OiBcIiMxOTg3NTRcIixcclxuXHJcbiAgICBtYWluOiBcIiMwZDZlZmRcIixcclxuICAgIHNpZGU6IFwiIzZjNzU3ZFwiLFxyXG5cclxuICAgIGVycm9yOiBcIiNkYzM1NDVcIixcclxuICAgIHdhcm46IFwiI2ZmYzEwN1wiLFxyXG4gIH0sXHJcbiAgZGQ6IHtcclxuICAgIGk6IHRydWVcclxuICB9LFxyXG4gIGRpdjogeyB3OiAxIH0sXHJcbiAgc3o6IHtcclxuICAgIHhsOiAzMCxcclxuICAgIGw6IDIwLFxyXG4gICAgbjogMTEsXHJcbiAgICBzOiA5LFxyXG4gICAgeHM6IDcuNVxyXG4gIH0sXHJcbiAgaTogeyBiZzogXCJpbmhlcml0XCIgfSxcclxuICBtOiB7XHJcbiAgICBoOiAyMCwgc2NwOiA4XHJcbiAgfSxcclxuICBvbjogeyBiZzogXCIjNDY1Y2FiXCIsIGZnOiBcIiNmZmZcIiB9LFxyXG4gIHRiOiB7fSxcclxufSk7XHJcbi8qKmNzcyBjbGFzcyAqL1xyXG5leHBvcnQgY29uc3QgYyA9IChjbHM6IHN0cikgPT4gJC5jID8gYC4keyQuY30uJHtjbHN9YCA6IFwiLlwiICsgY2xzO1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tdXRpbHNcclxuZXhwb3J0IGNvbnN0IGVudW0gVkFsaWduIHtcclxuICB0b3AgPSAnX3QnLFxyXG4gIG1pZGRsZSA9ICdfbScsXHJcbiAgYm90dG9tID0gJ19iJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBIQWxpZ24ge1xyXG4gIGxlZnQgPSAnX2xmJyxcclxuICBjZW50ZXIgPSAnX2MnLFxyXG4gIHJpZ2h0ID0gJ19yZycsXHJcbiAganVzdGlmeSA9IFwiX2pcIlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0QWxpZ24odjogSEFsaWduKTogUHJvcGVydHkuVGV4dEFsaWduIHtcclxuICBzd2l0Y2ggKHYpIHtcclxuICAgIGNhc2UgSEFsaWduLmxlZnQ6XHJcbiAgICAgIHJldHVybiBcImxlZnRcIjtcclxuICAgIGNhc2UgSEFsaWduLmNlbnRlcjpcclxuICAgICAgcmV0dXJuIFwiY2VudGVyXCI7XHJcbiAgICBjYXNlIEhBbGlnbi5yaWdodDpcclxuICAgICAgcmV0dXJuIFwicmlnaHRcIjtcclxuICAgIGNhc2UgSEFsaWduLmp1c3RpZnk6XHJcbiAgICAgIHJldHVybiBcImp1c3RpZnlcIjtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGVudW0gT3JpIHtcclxuICBoID0gJ19oJyxcclxuICB2ID0gJ192J1xyXG59XHJcbmV4cG9ydCBjb25zdCBlbnVtIFNpemUge1xyXG4gIHhsID0gXCJ4bFwiLFxyXG4gIGwgPSBcIl9sXCIsXHJcbiAgbm9ybWFsID0gXCJfblwiLFxyXG4gIG4gPSBcIl9uXCIsXHJcbiAgcyA9IFwiX3NcIixcclxuICB4cyA9IFwieHNcIlxyXG59XHJcbmV4cG9ydCBjb25zdCBlbnVtIENvbG9yIHtcclxuICBlcnJvciA9IFwiX2VcIixcclxuICBtYWluID0gXCJfaVwiLFxyXG4gIC8qKiBzZWN1bmRhcnkgKi9cclxuICBzaWRlID0gXCJfc1wiLFxyXG4gIG5vcm1hbCA9IFwiX21cIixcclxuICB3YXJuaW5nID0gXCJfd1wiLFxyXG4gIGFjY2VwdCA9IFwiX2FcIlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGJvZHkgPSBuZXcgUyhkb2N1bWVudC5ib2R5KTtcclxuZXhwb3J0IGNvbnN0IGRvYyA9IG5ldyBTKGRvY3VtZW50IGFzIGFueSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGUoKTogY3NzLlN0eWxlcyB7XHJcbiAgbGV0IHsgc3ogfSA9IHRoZW1lO1xyXG4gIHJldHVybiB7XHJcbiAgICAvLyNyZWdpb24gcmVzZXRcclxuICAgIFwiKlwiOiB7XHJcbiAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICB9LFxyXG4gICAgYm9keToge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5iZyxcclxuICAgICAgY29sb3I6IHRoZW1lLnR4dCxcclxuICAgICAgZm9udEZhbWlseTogdGhlbWUuZm9udCxcclxuICAgICAgZm9udFNpemU6IHRoZW1lLnN6Lm4gKyBcInB4XCIsXHJcbiAgICAgIG1hcmdpbjogMFxyXG4gICAgfSxcclxuICAgIHRhYmxlOiB7XHJcbiAgICAgIGJvcmRlckNvbGxhcHNlOiBcImNvbGxhcHNlXCIsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IFwibm9uZVwiLFxyXG4gICAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICAgIGJvcmRlcjogXCJub25lXCJcclxuICAgIH0sXHJcbiAgICBhOiB7XHJcbiAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiXHJcbiAgICB9LFxyXG4gICAgaHI6IHsgbWFyZ2luOiAwLCB9LFxyXG4gICAgaW5wdXQ6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCJpbmhlcml0XCIsXHJcbiAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgICAgYm9yZGVyOiBcIm5vbmVcIlxyXG4gICAgfSxcclxuICAgIC8vI2VuZHJlZ2lvblxyXG4gICAgW1wiLlwiICsgU2l6ZS54bF06IHsgZm9udFNpemU6IHN6LnhsICsgXCJweFwiIH0sXHJcbiAgICBbXCIuXCIgKyBTaXplLmxdOiB7IGZvbnRTaXplOiBzei5sICsgXCJweFwiIH0sXHJcbiAgICBbXCIuXCIgKyBTaXplLnNdOiB7IGZvbnRTaXplOiBzei5zICsgXCJweFwiIH0sXHJcbiAgICBbXCIuXCIgKyBTaXplLnhzXTogeyBmb250U2l6ZTogc3oueHMgKyBcInB4XCIgfSxcclxuXHJcbiAgICBcIjpkaXNhYmxlZFwiOiB7IG9wYWNpdHk6IHRoZW1lLm9mZiB9LFxyXG4gIH1cclxufSIsImltcG9ydCB7IGNzcywgZywgUywgT25lLCBkaXYgfSBmcm9tIFwiZ2FsaG9cIjtcclxuaW1wb3J0IHsgYywgQywgQ2hpbGQsICQsIHRoZW1lIH0gZnJvbSBcIi4vY29yZVwiO1xyXG5pbXBvcnQgaWNvbiwgeyBJY29uIH0gZnJvbSBcIi4vaWNvblwiO1xyXG5pbXBvcnQgeyBjbGljayB9IGZyb20gXCIuL2J1dHRvblwiO1xyXG5pbXBvcnQgbyBmcm9tIFwib3JyYXlcIjtcclxuaW1wb3J0IHsgaXNBLCB0IH0gZnJvbSBcImludXRpbFwiO1xyXG5pbXBvcnQgeyBmbHVpZCB9IGZyb20gXCIuL2hvdmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcm9wZG93bihsYWJlbDogQ2hpbGQsIGl0ZW1zOiBPbmU8SFRNTFRhYmxlUm93RWxlbWVudD5bXSwgaT86IGJvb2wpOiBTO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcm9wZG93bihsYWJlbDogQ2hpbGQsIG1lbnU6IFM8SFRNTFRhYmxlRWxlbWVudD4sIGk/OiBib29sKTogUztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJvcGRvd24obGFiZWw6IENoaWxkLCBpdGVtczogKCgpID0+IE9uZTxIVE1MVGFibGVSb3dFbGVtZW50PltdKSB8ICgoKSA9PiBPbmU8SFRNTFRhYmxlUm93RWxlbWVudD4pLCBpPzogYm9vbCk6IFM7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyb3Bkb3duKGxhYmVsOiBDaGlsZCwgaXRlbXM6IE9uZTxIVE1MVGFibGVSb3dFbGVtZW50PltdIHwgUzxIVE1MVGFibGVFbGVtZW50PiB8ICgoKSA9PiBPbmU8SFRNTFRhYmxlUm93RWxlbWVudD5bXSkgfCAoKCkgPT4gT25lPEhUTUxUYWJsZVJvd0VsZW1lbnQ+KSwgaSA9IHQodGhlbWUuZGQuaSkpIHtcclxuICByZXR1cm4gZGl2KDAsIFtcclxuICAgIGxhYmVsLFxyXG4gICAgaSAmJiBpY29uKFwibWVudURcIilcclxuICBdKS5kbyhlID0+IHtcclxuICAgIGxldCBtbiA9IGl0ZW1zIGluc3RhbmNlb2YgUyA/IGl0ZW1zIDogbnVsbDtcclxuICAgIGUub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGUudGNscyhDLm9uKS5pc0NscyhDLm9uKSA/XHJcbiAgICAgICAgZmx1aWQoZSwgKG1uIHx8PSBnKFwidGFibGVcIiwgQy5tZW51LCBpdGVtcykpLmFkZFRvKGUpKSA6XHJcbiAgICAgICAgbW4ucmVtb3ZlKCk7XHJcbiAgICB9KVxyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlKCk6IGNzcy5TdHlsZXMge1xyXG4gIGxldCB7IGEsIHM6IGMsIGwgfSA9IHRoZW1lO1xyXG4gIHJldHVybiB7XHJcblxyXG4gIH1cclxufSIsImltcG9ydCB7IFMgfSBmcm9tIFwiZ2FsaG9cIjtcclxuaW1wb3J0IHsgSEFsaWduLCBWQWxpZ24gfSBmcm9tIFwiLi9jb3JlXCI7XHJcblxyXG4gIC8qKmRyb3Bkb3duIHdpdGggd2lkdGg+PWJhc2Uud2lkdGggICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmbHVpZChiYXNlOiBTLCBtZW51OiBTLCBzdWI/OiBib29sZWFuLCB2QWxpZ24/OiBWQWxpZ24sIGhBbGlnbj86IEhBbGlnbikge1xyXG4gIGxldFxyXG4gICAgcmVjdCA9IGJhc2UucmVjdCgpLFxyXG4gICAgd2ggPSB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICB3dyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICBpZiAoIXZBbGlnbilcclxuICAgIHZBbGlnbiA9IChyZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMikgPiAod2ggLyAyKSA/IFZBbGlnbi50b3AgOiBWQWxpZ24uYm90dG9tO1xyXG5cclxuICBpZiAoIWhBbGlnbilcclxuICAgIGhBbGlnbiA9IChyZWN0LmxlZnQgKyByZWN0LndpZHRoIC8gMikgPiAod3cgLyAyKSA/IEhBbGlnbi5sZWZ0IDogSEFsaWduLnJpZ2h0O1xyXG5cclxuICBtZW51LmNzcygnbWluV2lkdGgnLCByZWN0LndpZHRoICsgJ3B4Jyk7XHJcbiAgaWYgKHZBbGlnbiA9PSBWQWxpZ24udG9wKSB7XHJcbiAgICBtZW51XHJcbiAgICAgIC51bmNzcyhbJ3RvcCddKVxyXG4gICAgICAuY3NzKHtcclxuICAgICAgICBib3R0b206ICh3aCAtIChzdWIgPyByZWN0LmJvdHRvbSA6IHJlY3QudG9wKSkgKyAncHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogKHN1YiA/IHJlY3QuYm90dG9tIDogcmVjdC50b3ApICsgJ3B4J1xyXG4gICAgICB9KVxyXG4gICAgICAuY2xzKFZBbGlnbi5ib3R0b20sIGZhbHNlKTtcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIG1lbnVcclxuICAgICAgLnVuY3NzKFsnYm90dG9tJ10pXHJcbiAgICAgIC5jc3Moe1xyXG4gICAgICAgIHRvcDogKHN1YiA/IHJlY3QudG9wIDogcmVjdC5ib3R0b20pICsgJ3B4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICh3aCAtIChzdWIgPyByZWN0LnRvcCA6IHJlY3QuYm90dG9tKSkgKyAncHgnXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jbHMoVkFsaWduLnRvcCwgZmFsc2UpO1xyXG5cclxuICB9XHJcbiAgaWYgKGhBbGlnbiA9PSBIQWxpZ24ubGVmdCkge1xyXG4gICAgbWVudVxyXG4gICAgICAudW5jc3MoWydsZWZ0J10pXHJcbiAgICAgIC5jc3MoJ3JpZ2h0JywgKHd3IC0gKHN1YiA/IHJlY3QubGVmdCA6IHJlY3QucmlnaHQpKSArICdweCcpXHJcbiAgICAgIC5jbHMoSEFsaWduLnJpZ2h0LCBmYWxzZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1lbnVcclxuICAgICAgLnVuY3NzKFsncmlnaHQnXSlcclxuICAgICAgLmNzcygnbGVmdCcsIChzdWIgPyByZWN0LnJpZ2h0IDogcmVjdC5sZWZ0KSArICdweCcpXHJcbiAgICAgIC5jbHMoSEFsaWduLmxlZnQsIGZhbHNlKTtcclxuICB9XHJcbiAgbWVudS5jbHMoW3ZBbGlnbiwgaEFsaWduXSk7XHJcblxyXG59XHJcbi8qKmRyb3Bkb3duIHdpdGggd2lkdGg9YmFzZS53aWR0aCAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpeGVkKGJhc2U6IFMsIG1lbnU6IFMsIGFsaWduPzogVkFsaWduKSB7XHJcbiAgbGV0XHJcbiAgICByZWN0ID0gYmFzZS5yZWN0KCksXHJcbiAgICBoID0gbWVudS5lLmNsaWVudEhlaWdodCxcclxuICAgIHdoID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICBpZiAod2ggLyAyIC0gcmVjdC50b3AgPiAwKSB7XHJcbiAgICBiYXNlLmNscyhWQWxpZ24udG9wLCBmYWxzZSkuY2xzKFZBbGlnbi5ib3R0b20pO1xyXG5cclxuICAgIG1lbnUuY3NzKHtcclxuICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgJ3B4JyxcclxuICAgICAgdG9wOiByZWN0LmJvdHRvbSArICdweCcsXHJcbiAgICAgIG1heEhlaWdodDogKHdoIC0gcmVjdC5ib3R0b20pICsgJ3B4J1xyXG4gICAgfSkudW5jc3MoWydib3R0b20nXSk7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICBiYXNlLmNscyhWQWxpZ24uYm90dG9tLCBmYWxzZSkuY2xzKFZBbGlnbi50b3ApO1xyXG5cclxuICAgIG1lbnUuY3NzKHtcclxuICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgJ3B4JyxcclxuICAgICAgYm90dG9tOiAod2ggLSByZWN0LnRvcCkgKyAncHgnLFxyXG4gICAgICBtYXhIZWlnaHQ6IHJlY3QudG9wICsgJ3B4J1xyXG4gICAgfSkudW5jc3MoWyd0b3AnXSk7XHJcbiAgfVxyXG4gIG1lbnUuY3NzKCd3aWR0aCcsIHJlY3Qud2lkdGggKyAncHgnKTtcclxufVxyXG4vKipjdHggbWVudSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3R4KG1lbnU6IFMpe1xyXG5cclxufSIsImltcG9ydCB7IGlzUywgbm90RiB9IGZyb20gXCJpbnV0aWxcIjtcclxuaW1wb3J0IHsgY3NzLCBTLCBzdmcgfSBmcm9tIFwiZ2FsaG9cIjtcclxuaW1wb3J0IHsgQ29sb3IsICQsIFNpemUsIHRoZW1lLCBDIH0gZnJvbSBcIi4vY29yZVwiO1xyXG5cclxuZXhwb3J0IHZhciBpY29uczogRGljPHN0cj4gPSB7fTtcclxuZXhwb3J0IHR5cGUgSWNvbiA9IHsgZDogc3RyLCBzPzogU2l6ZSwgYz86IHN0ciB8IENvbG9yIH0gfCBzdHI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGljb24oZHQ6IEljb24pOiBTPFNWR1NWR0VsZW1lbnQ+O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpY29uKGR0OiBzdHIsIGNvbG9yPzogQ29sb3IpOiBTPFNWR1NWR0VsZW1lbnQ+O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpY29uKGR0OiBJY29uLCBjPzogQ29sb3IpIHtcclxuICBpZiAoZHQpIHtcclxuICAgIGlmIChpc1MoZHQpKVxyXG4gICAgICBkdCA9IHsgZDogZHQsIGMgfTtcclxuICAgIGlmIChkdC5kIGluIGljb25zKSB7XHJcbiAgICAgIGxldCBzejogaW50LCB0ID0gdGhlbWUuc3o7XHJcbiAgICAgIGlmIChkdC5zKVxyXG4gICAgICAgIHN3aXRjaCAoZHQucykge1xyXG4gICAgICAgICAgY2FzZSBTaXplLnhsOlxyXG4gICAgICAgICAgICBzeiA9IHQueGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBTaXplLmw6XHJcbiAgICAgICAgICAgIHN6ID0gdC5sO1xyXG4gICAgICAgICAgY2FzZSBTaXplLnM6XHJcbiAgICAgICAgICAgIHN6ID0gdC5zO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgU2l6ZS54czpcclxuICAgICAgICAgICAgc3ogPSB0LnhzO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIC8vIEBpZmRlZiBERUJVR1xyXG4gICAgICAgICAgZGVmYXVsdDogdGhyb3cgbm90RihkdC5zLCBcInNpemVcIik7XHJcbiAgICAgICAgICAvLyBAZW5kaWZcclxuICAgICAgICB9IGVsc2Ugc3ogPSB0Lm47XHJcblxyXG4gICAgICByZXR1cm4gc3ZnKCdzdmcnLCB7XHJcbiAgICAgICAgZmlsbDogZHQuYyB8fCBcImN1cnJlbnRDb2xvclwiLFxyXG4gICAgICAgIHZpZXdCb3g6IGAwIDAgJHskLmljb25TfSAkeyQuaWNvblN9YCxcclxuICAgICAgICBoZWlnaHQ6IHN6LFxyXG4gICAgICB9LCBzdmcoJ3BhdGgnLCB7IGQ6IGljb25zW2R0LmRdIH0pKS5jbHMoQy5pY29uKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZSgpOiBjc3MuU3R5bGVzIHtcclxuICByZXR1cm4ge1xyXG4gIH1cclxufSIsImltcG9ydCB7IGNsLCBjc3MsIGRpdiwgZywgUyB9IGZyb20gXCJnYWxob1wiO1xyXG5pbXBvcnQgeyBleCB9IGZyb20gXCJpbnV0aWxcIjtcclxuaW1wb3J0IHsgYmxvY2ssIGMsIEMsICQsIHRoZW1lIH0gZnJvbSBcIi4vY29yZVwiO1xyXG5pbXBvcnQgaWNvbiBmcm9tIFwiLi9pY29uXCI7XHJcblxyXG5leHBvcnQgdHlwZSBJbnB1dFRwID0gXCJ0ZXh0XCIgfCBcIm51bWJlclwiIHwgXCJzZWFyY2hcIiB8IFwiY2hlY2tib3hcIiB8IFwicmFkaW9cIiB8IFwidGV4dGFyZWFcIjtcclxuZXhwb3J0IHR5cGUgSW5wdXQgPSBTPEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PjtcclxuZXhwb3J0IGNvbnN0IGlucHV0ID0gKHR5cGU6IElucHV0VHAsIG5hbWU6IHN0ciwgaW5wdXQ6IChlOiBFdmVudCkgPT4gYW55KTogSW5wdXQgPT4gKDxhbnk+KHR5cGUgPT0gXCJ0ZXh0YXJlYVwiID8gZyhcInRleHRhcmVhXCIpIDogZyhcImlucHV0XCIsIHsgdHlwZSB9KSlcclxuICAuY2xzKGNsKCQuYywgQy5pbnB1dCkpXHJcbiAgLnByb3AoXCJuYW1lXCIsIG5hbWUpKVxyXG4gIC5vbihcImlucHV0XCIsIGlucHV0KTtcclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaChpbnB1dD86ICh2YWx1ZTogc3RyKSA9PiBhbnkpIHtcclxuICBsZXQgdCA9IGcoXCJpbnB1dFwiLCB7IHR5cGU6IFwic2VhcmNoXCIsIHBsYWNlaG9sZGVyOiAkLncuc2VhcmNoIH0pLCBpID0gaWNvbihcInNlYXJjaFwiKTtcclxuICBpbnB1dCAmJiB0LmRlbGF5KFwiaW5wdXRcIiwgJC5kZWxheSwgKCkgPT4gaW5wdXQodC5lLnZhbHVlKSk7XHJcbiAgcmV0dXJuIChpID8gZGl2KDAsIFt0LCBpXSkgOiB0KS5jbHMoY2woJC5jLCBDLmlucHV0KSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxldmVyID0gKG5hbWU6IHN0cikgPT4gZyhcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiLCBuYW1lIH0pLmNscyhDLmxldmVyKTtcclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlKCk6IGNzcy5TdHlsZXMge1xyXG4gIGxldCB7IGksIGEgfSA9IHRoZW1lO1xyXG4gIHJldHVybiB7XHJcbiAgICBbYyhDLmlucHV0KV06IHtcclxuICAgICAgLi4uYmxvY2soZXgoYSwgaSkpLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgaW5wdXQ6IHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCJcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBjbCwgY3NzLCBkaXYsIGcsIE9uZSwgUywgd3JhcCB9IGZyb20gXCJnYWxob1wiO1xyXG5pbXBvcnQgeyBjLCBDLCB0aGVtZSwgaHMsIEhBbGlnbiwgJCB9IGZyb20gXCIuL2NvcmVcIjtcclxuaW1wb3J0IGljb24sIHsgSWNvbiB9IGZyb20gXCIuL2ljb25cIjtcclxuaW1wb3J0IHsgY2xpY2sgfSBmcm9tIFwiLi9idXR0b25cIjtcclxuaW1wb3J0IHsgZmx1aWQgfSBmcm9tIFwiLi9ob3ZlclwiO1xyXG5pbXBvcnQgX3dhaXQsIHsgQ0IgYXMgV2FpdENCLCB0cCBhcyBXYWl0VFAsIHdhaXRlciB9IGZyb20gXCIuL3dhaXRcIjtcclxuaW1wb3J0IHsgdXVpZCB9IGZyb20gXCJpbnV0aWxcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IHR5cGUgSXRlbXMgPSBBcnJheTxTPEhUTUxFbGVtZW50PiB8IEhUTUxFbGVtZW50IHwgSXRlbXM+O1xyXG5leHBvcnQgZnVuY3Rpb24gbWVudSguLi5pdGVtczogSXRlbXMpIHsgcmV0dXJuIGRpdihjbCgkLmMsIEMubWVudSksIGl0ZW1zKTsgfVxyXG5leHBvcnQgbW9kdWxlIG1lbnUge1xyXG4gIGV4cG9ydCBjb25zdCB3YWl0ID0gKGNhbGxiYWNrPzogV2FpdENCKSA9PlxyXG4gICAgZyhcInRyXCIsIDAsIGcoXCJ0ZFwiLCAwLCBfd2FpdChXYWl0VFAub3V0KSkucHJvcChcImNvbFNwYW5cIiwgNCkpLmRvKHRyID0+IHdhaXRlcih0ciwgY2FsbGJhY2spKTtcclxuICAvKiptZW51IGl0ZW0gKi9cclxuICBleHBvcnQgY29uc3QgaSA9IChpOiBJY29uLCB0ZXh0OiBhbnksIGFjdGlvbj86IGNsaWNrLCBzaWRlPykgPT4gZyhcImJ1dHRvblwiLEMuaXRlbSwgW1xyXG4gICAgZGl2KDAsIGljb24oaSkpLFxyXG4gICAgZGl2KDAsIHRleHQpLFxyXG4gICAgZGl2KEMuc2lkZSwgc2lkZSksXHJcbiAgXSkub24oXCJjbGlja1wiLCBhY3Rpb24pO1xyXG4gIC8qKmNoZWNrIGJveCAqL1xyXG4gIGV4cG9ydCBmdW5jdGlvbiBjYihjaGVja2VkOiBib29sLCB0ZXh0OiBhbnksIHRvZ2dsZT86ICh0aGlzOiBIVE1MSW5wdXRFbGVtZW50LCBjaGVja2VkOiBib29sKSA9PiBhbnksIGlkID0gdXVpZCgpLCBzaWRlPzogc3RyKSB7XHJcbiAgICBsZXQgaW5wdXQgPSBnKFwiaW5wdXRcIikucHJvcHMoeyBpZCwgY2hlY2tlZCwgdHlwZTogXCJjaGVja2JveFwiIH0pO1xyXG4gICAgdG9nZ2xlICYmIGlucHV0Lm9uKFwiaW5wdXRcIiwgKCkgPT4gdG9nZ2xlLmNhbGwoaW5wdXQuZSwgaW5wdXQuZS5jaGVja2VkKSk7XHJcblxyXG4gICAgcmV0dXJuIGRpdihDLml0ZW0sIFtcclxuICAgICAgaW5wdXQsXHJcbiAgICAgIGcoXCJsYWJlbFwiLCAwLCB0ZXh0KS5wcm9wKFwiaHRtbEZvclwiLCBpZCksXHJcbiAgICAgIHNpZGUgJiYgZGl2KEMuc2lkZSwgc2lkZSksXHJcbiAgICAgIGRpdigpLFxyXG4gICAgXSk7XHJcbiAgfVxyXG4gIC8qKiBzdWIgbWVudSAqL1xyXG4gIGV4cG9ydCBjb25zdCBzdWIgPSAoaTogSWNvbiwgdGV4dDogYW55LCBpdGVtczogSXRlbXNbXSkgPT4gZGl2KEMuaXRlbSwgW1xyXG4gICAgZGl2KDAsIGljb24oaSkpLFxyXG4gICAgZGl2KDAsIHRleHQpLFxyXG4gICAgZGl2KCksXHJcbiAgICBpY29uKFwibWVudVJcIilcclxuICBdKS5kbyhlID0+IHtcclxuICAgIGxldCBtbjogUztcclxuICAgIGUub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGUudGNscyhDLm9uKS5pc0NscyhDLm9uKSA/XHJcbiAgICAgICAgZmx1aWQoZSwgKG1uIHx8PSBnKFwidGFibGVcIiwgQy5tZW51LCBpdGVtcykpLmFkZFRvKGUpKSA6XHJcbiAgICAgICAgbW4ucmVtb3ZlKCk7XHJcbiAgICB9KVxyXG4gIH0pO1xyXG4gIGV4cG9ydCBjb25zdCBociA9ICgpID0+IGRpdihDLnNlcGFyYXRvcik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1lbnViYXIoLi4uaXRlbXM6IE9uZVtdKSB7IHJldHVybiBkaXYoY2woJC5jLCBDLm1lbnViYXIpLCBpdGVtcyk7IH1cclxuZXhwb3J0IG1vZHVsZSBtZW51YmFyIHtcclxuICBleHBvcnQgY29uc3QgcmlnaHQgPSAoKSA9PiBkaXYoSEFsaWduLnJpZ2h0KTtcclxuICBleHBvcnQgY29uc3Qgc2VwID0gKCkgPT4gZyhcImhyXCIpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZSgpOiBjc3MuU3R5bGVzIHtcclxuICBsZXQgeyBtLCBiZywgdHh0LCBzeiwgYSwgaSB9ID0gdGhlbWU7XHJcbiAgcmV0dXJuIHtcclxuICAgIFtjKEMubWVudSldOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IG0uYmcgfHwgYmcsXHJcbiAgICAgIGhlaWdodDogbS5oICsgXCJweFwiLFxyXG4gICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXHJcbiAgICAgIG1heFdpZHRoOiBcIjgwdndcIixcclxuICAgICAgYm94U2hhZG93OiBcImluaXRpYWxcIixcclxuICAgICAgZGlzcGxheTogXCJ0YWJsZVwiLFxyXG4gICAgICBbYyhDLnNlcGFyYXRvcildOiB7XHJcbiAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIFwiICsgdHh0XHJcbiAgICAgIH0sXHJcbiAgICAgIFtgLiR7Qy5pdGVtfSwuJHtDLmRyb3Bkb3dufWBdOiB7XHJcbiAgICAgICAgLy9pY29uXHJcbiAgICAgICAgXCI+Om50aC1jaGlsZCgxKVwiOiB7XHJcbiAgICAgICAgICB3aWR0aDogKHN6Lm4gKyBocyhhLnBhZCkpICsgXCJweFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL21haW4gY29udGVudFxyXG4gICAgICAgIFwiPjpudGgtY2hpbGQoMilcIjoge1xyXG4gICAgICAgICAgcGFkZGluZzogXCIzcHggMFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL3Nob3J0Y3V0XHJcbiAgICAgICAgXCI+Om50aC1jaGlsZCgzKVwiOiB7XHJcbiAgICAgICAgICBwYWRkaW5nTGVmdDogbS5zY3BcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vc3VibWVudSBpY29uXHJcbiAgICAgICAgXCI+Om50aC1jaGlsZCg0KVwiOiB7XHJcbiAgICAgICAgICB3aWR0aDogKHN6Lm4gKyBocyhhLnBhZCkpICsgXCJweFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluZUhlaWdodDogXCJpbml0aWFsXCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIzcHggNHB4XCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIFwiOmhvdmVyXCI6IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG0uaWhcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiOmFjdGl2ZVwiOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBtLmlhXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBbYyhDLm1lbnViYXIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgaGVpZ2h0OiBtLmggKyBcInB4XCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IG0uaCArIFwicHhcIixcclxuICAgICAgW1wiLlwiICsgQy5pY29uXToge1xyXG4gICAgICAgIG1hcmdpbjogYCR7KG0uaCAtIHN6Lm4pIC8gMn1weCAke2hzKGEubXJnKX1weGAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGZsZXg6IFwiMCAwIGF1dG9cIixcclxuICAgICAgYmFja2dyb3VuZDogbS5iZyxcclxuICAgICAgW2MoQy5pbnB1dCldOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbS5pIHx8IGkuYmcsXHJcbiAgICAgIH0sXHJcbiAgICAgIFtgLiR7Qy5pdGVtfSwuJHtDLmRyb3Bkb3dufWBdOiB7XHJcbiAgICAgICAgcGFkZGluZzogXCIwIDRweFwiLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiMjBweFwiLFxyXG4gICAgICAgIFwiOmhvdmVyXCI6IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG0uaWhcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiOmFjdGl2ZVwiOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBtLmlhXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgW1wiLlwiICsgQy5pbnB1dF06IHtcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIGhyOiB7XHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgW1wiJi5cIiArIEhBbGlnbi5yaWdodF06IHtcclxuICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICBib3JkZXI6IFwibm9uZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH1cclxufSIsImltcG9ydCB7IEljb24gfSBmcm9tIFwiLi9pY29uXCI7XHJcbmltcG9ydCB7IGcsIE9uZSwgUywgRSwgY2wsIHdyYXAsIGRpdiwgY3NzIH0gZnJvbSBcImdhbGhvXCI7XHJcbmltcG9ydCAqIGFzIG8gZnJvbSBcIm9ycmF5XCI7XHJcbmltcG9ydCB7IGV4LCB0LCBpc08sIGlzVSB9IGZyb20gXCJpbnV0aWxcIjtcclxuaW1wb3J0IHsgYm9keSwgYywgQywgQ29sb3IsICQsIHRoZW1lIH0gZnJvbSBcIi4vY29yZVwiO1xyXG5pbXBvcnQgeyBjYW5jZWwsIGNsaWNrLCBjbG9zZSwgY29uZmlybSB9IGZyb20gXCIuL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBLZXkgfSBmcm9tIFwidHMta2V5LWVudW1cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1vZGFsIHtcclxuICBjbG9zZT86IGJvb2w7XHJcbiAgYmx1cj86IGJvb2w7XHJcbiAgY2xzPzogc3RyIHwgc3RyW107XHJcbiAgdmFsaWQ/KGtleSk6IGFueTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbChib2R5OiBTLCBvcHRzPzogSU1vZGFsKTogUHJvbWlzZTxLZXk+O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbChoZWFkRGF0YTogYW55W10sIGJvZHlEYXRhPzogYW55LCBhY3Rpb25zPzogU1tdLCBvcHRzPzogSU1vZGFsKTogUHJvbWlzZTxLZXk+O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbChoZWFkRGF0YTogYW55LCBib2R5RGF0YT86IGFueSwgYWN0aW9ucz86IFNbXSwgaT86IElNb2RhbCkge1xyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2U8S2V5PihyZXMgPT4ge1xyXG4gICAgbGV0XHJcbiAgICAgIGNlbnRlcjogUywgaGVhZDogUywgbWFpbjogUyxcclxuICAgICAgbGFzdCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQsXHJcbiAgICAgIF9jbG9zZSA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCB8IHZvaWQpIHtcclxuICAgICAgICBsZXQgZHQgPSB0aGlzICYmIGcodGhpcykuZCgpO1xyXG4gICAgICAgIGlmICghaS52YWxpZCB8fCBpLnZhbGlkKGR0KSkge1xyXG4gICAgICAgICAgbWQucmVtb3ZlKCk7XHJcbiAgICAgICAgICByZXMoPEtleT5kdCk7XHJcbiAgICAgICAgICBsYXN0Py5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIGlmIChTLmlzKGhlYWREYXRhKSkge1xyXG4gICAgICBpID0gPElNb2RhbD5ib2R5RGF0YSB8fCB7fTtcclxuICAgICAgaGVhZCA9IGNlbnRlciA9IGhlYWREYXRhLmNscyhjbChDLml0ZW0sIGkuY2xzKSk7XHJcbiAgICAgIGNlbnRlci5jaGlsZChcIi5cIiArIEMuZm9vdCkudHJ5KGUgPT4gZS5jaGlsZHMoYyhDLmJ1dHRvbikpLmVhY2goYSA9PiBhLm9uKCdjbGljaycsIF9jbG9zZSkpKTtcclxuICAgIH0gZWxzZSBpIHx8PSB7fTtcclxuXHJcbiAgICBsZXRcclxuICAgICAgbWQgPSBkaXYoY2woJC5jLCBDLm1vZGFsKSwgY2VudGVyIHx8PSBnKFwiZGl2XCIsIGNsKCQuYywgQy5tb2RhbCxDLnBhbmVsLGkuY2xzKSwgW1xyXG4gICAgICAgIGhlYWQgPSBoZWFkRGF0YSAmJiB3cmFwKGhlYWREYXRhLCBDLmhlYWQpLFxyXG4gICAgICAgIG1haW4gPSB3cmFwKGJvZHlEYXRhLCBDLmJvZHkpLFxyXG4gICAgICAgIGFjdGlvbnMgJiYgZGl2KEMuZm9vdCwgYWN0aW9ucy5tYXAoYSA9PiBhLm9uKCdjbGljaycsIF9jbG9zZSkpKVxyXG4gICAgICBdKSk7XHJcbiAgICBjZW50ZXIuZChfY2xvc2UpLnByb3AoXCJ0YWJJbmRleFwiLCAwKVxyXG4gICAgICAub24oJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcclxuICAgICAgICAgIGNhc2UgS2V5LkVzY2FwZTpcclxuICAgICAgICAgICAgX2Nsb3NlKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBLZXkuRW50ZXI6XHJcbiAgICAgICAgICAgIGFjdGlvbnM/LmE/LmNsaWNrKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDogcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLm9mZigpO1xyXG4gICAgICB9KTtcclxuICAgIGlmICh0KGkuY2xvc2UpKVxyXG4gICAgICAoaGVhZCB8fCBtYWluKS5hZGQoY2xvc2UoX2Nsb3NlKSk7XHJcblxyXG4gICAgaWYgKGkuYmx1cilcclxuICAgICAgY2VudGVyLmZvY3Vzb3V0KF9jbG9zZSk7XHJcblxyXG4gICAgbWQuYWRkVG8oYm9keSk7XHJcbiAgICBjZW50ZXIuZm9jdXMoKTtcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb2tDYW5jZWwoYm9keTogYW55LCBjYj86ICgpID0+IGFueSk6IFByb21pc2U8S2V5PlxyXG5leHBvcnQgZnVuY3Rpb24gb2tDYW5jZWwoaWNvbjogSWNvbiwgdGl0bGU6IGFueSwgYm9keTogYW55LCBjYj86IGNsaWNrKTogUHJvbWlzZTxLZXk+XHJcbmV4cG9ydCBmdW5jdGlvbiBva0NhbmNlbChpY29uLCB0aXRsZT86IGFueSwgYm9keT86IGFueSwgY2I/OiBjbGljaykge1xyXG4gIGlmIChpc1UoYm9keSkpIHtcclxuICAgIGJvZHkgPSBpY29uO1xyXG4gICAgY2IgPSA8KCkgPT4gYW55PnRpdGxlO1xyXG5cclxuICAgIGljb24gPSBudWxsO1xyXG4gICAgdGl0bGUgPSBudWxsO1xyXG4gIH1cclxuICByZXR1cm4gbW9kYWwoKGljb24gfHwgdGl0bGUpICYmIFtpY29uKDxJY29uPmljb24pLCB0aXRsZV0sIGJvZHksIFtjb25maXJtKGNiKSwgY2FuY2VsKCldKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yKGJvZHk6IGFueSkge1xyXG4gIHJldHVybiBtb2RhbChudWxsLCBib2R5LCBbY2FuY2VsKCldLCB7IGNsczogQ29sb3IuZXJyb3IgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZSgpOiBjc3MuU3R5bGVzIHtcclxuICBsZXQgeyBtLCBiZywgdHh0LCBzeiwgYSwgaSB9ID0gdGhlbWU7XHJcbiAgcmV0dXJuIHtcclxuICAgIFtjKEMubW9kYWwpXToge1xyXG4gICAgICBbXCIuXCIgKyBDLml0ZW1dOiB7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgY3NzIH0gZnJvbSBcImdhbGhvXCI7XHJcbmltcG9ydCB7IEMsIGMsIHRoZW1lIH0gZnJvbSBcIi4vY29yZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlKCk6IGNzcy5TdHlsZXMge1xyXG4gIGxldFxyXG4gICAgeyBtLCB0YiB9ID0gdGhlbWUsXHJcbiAgICBjbG9zZTogY3NzLlN0eWxlID0ge1xyXG4gICAgICBmbG9hdDogXCJyaWdodFwiLFxyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICBoZWlnaHQ6IG0uaCArIFwicHhcIixcclxuICAgICAgXCI6aG92ZXJcIjoge1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIHJldHVybiB7XHJcbiAgICBbYyhDLnRhYildOiB7XHJcbiAgICAgIFtjKEMubWVudWJhcildOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdGIuYmcsXHJcbiAgICAgICAgW2MoQy5jbG9zZSldOiBjbG9zZSxcclxuICAgICAgICBcIjpob3ZlclwiOiB7XHJcbiAgICAgICAgICBbYyhDLmNsb3NlKV06IHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFtcIi5cIiArIEMuYm9keV06IHtcclxuICAgICAgICBoZWlnaHQ6IGBjYWxjKDEwMCUgLSAke20uaH1weClgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBkaXYsIFMgfSBmcm9tIFwiZ2FsaG9cIjtcclxuaW1wb3J0IHsgaXNOLCBpc1AgfSBmcm9tIFwiaW51dGlsXCI7XHJcbmltcG9ydCB7IEMgfSBmcm9tIFwiLi9jb3JlXCI7XHJcbmltcG9ydCBpY29uIGZyb20gXCIuL2ljb25cIjtcclxuLyoqY2FsbCBiYWNrICovXHJcbmV4cG9ydCB0eXBlIENCID0gUHJvbWlzZUxpa2U8YW55PiB8ICgoKSA9PiBQcm9taXNlPGFueT4pO1xyXG5cclxuLyoqd2FpdCB0eXBlICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIHRwIHtcclxuICBpbmxpbmUsXHJcbiAgb3V0LFxyXG59XHJcbi8qKnBsYWNlIGhvbGRlciAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGgodHlwZSA9IHRwLm91dCkge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSB0cC5pbmxpbmU6XHJcbiAgICBjYXNlIHRwLm91dDpcclxuICAgICAgcmV0dXJuIGRpdihDLmxvYWRpbmcsIFtcclxuICAgICAgICAvL2ljb24oeyAvKnM6IHNpemUsICovZDogYGxvYWRpbmcgJHtDLmNlbnRlcmVkfWAgfSksXHJcbiAgICAgICAgLy9pY29uKHsgLypzOiBzaXplLCAqL2Q6IGBsb2FkaW5nICR7Qy5pdGVtQX0gJHtDLmNlbnRlcmVkfWAgfSksXHJcbiAgICAgIF0pO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gd2FpdGVyKGVsZW1lbnQ6IFMsIGNiOiBDQikge1xyXG4gIGNiICYmIChpc1AoY2IpID8gY2IgOiBjYj8uKCkpLnRoZW4odCA9PiB7XHJcbiAgICBpZiAoUy5pcyh0KSkge1xyXG4gICAgICB0LmNscyhBcnJheS5mcm9tKGVsZW1lbnQuZS5jbGFzc0xpc3QpLnNsaWNlKDEpKTtcclxuICAgICAgdC5hdHRyKFwic3R5bGVcIixcclxuICAgICAgICAodC5hdHRyKFwic3R5bGVcIikgfHwgXCJcIikgK1xyXG4gICAgICAgIChlbGVtZW50LmF0dHIoXCJzdHlsZVwiKSB8fCBcIlwiKVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICBlbGVtZW50LnJlcGxhY2UodCk7XHJcbiAgfSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2FpdChib2R5PzogQ0IpOiBTO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YWl0KHR5cGU6IHRwLCBib2R5PzogQ0IpOiBTO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YWl0KHR5cGU/OiB0cCB8IENCLCBib2R5PzogQ0IpOiBhbnkge1xyXG4gIGlmICghaXNOKHR5cGUpKSB7XHJcbiAgICBib2R5ID0gdHlwZTtcclxuICAgIHR5cGUgPSB0cC5pbmxpbmU7XHJcbiAgfVxyXG4gIGxldCBsb2FkZXIgPSBwaCh0eXBlKTtcclxuICB3YWl0ZXIobG9hZGVyLCBib2R5KTtcclxuICByZXR1cm4gbG9hZGVyO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmNyZWF0ZSA9IGV4cG9ydHMuZ2V0ID0gZXhwb3J0cy5iaW5kID0gZXhwb3J0cy5Cb25kID0gZXhwb3J0cy5FbnRpdHkgPSBleHBvcnRzLmZ0eXBlID0gZXhwb3J0cy5maWVsZFR5cGVzID0gZXhwb3J0cy4kID0gdm9pZCAwO1xyXG5jb25zdCBvcnJheV8xID0gcmVxdWlyZShcIm9ycmF5XCIpO1xyXG5jb25zdCBpbnV0aWxfMSA9IHJlcXVpcmUoXCJpbnV0aWxcIik7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9lbnRpdHktY29yZVwiKSwgZXhwb3J0cyk7XHJcbmV4cG9ydHMuJCA9IHtcclxuICAgIGxpbWl0OiA1MCxcclxuICAgIGlkOiAoKSA9PiBcImlkXCIsXHJcbiAgICBlbnRpdHkoKSB7IHRocm93IFwibm90IGltcGxlbWVudGVkXCI7IH0sXHJcbiAgICBjcmVhdGU6IChpKSA9PiBpXHJcbn07XHJcbmV4cG9ydHMuZmllbGRUeXBlcyA9IHt9O1xyXG5jb25zdCBmdHlwZSA9IChmaWVsZCkgPT4gZXhwb3J0cy5maWVsZFR5cGVzW2ZpZWxkLnRwXTtcclxuZXhwb3J0cy5mdHlwZSA9IGZ0eXBlO1xyXG5jbGFzcyBFbnRpdHkge1xyXG4gICAgY29uc3RydWN0b3Ioa2V5LCBpKSB7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy5pID0gaTtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xyXG4gICAgfVxyXG4gICAgZmllbGQoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaS5maWVsZHMuZmluZChpbnV0aWxfMS5pc1Moa2V5KSA/IChmKSA9PiBmLmtleSA9PSBrZXkgOiBrZXkpO1xyXG4gICAgfVxyXG4gICAgZmllbGRzKGZpbHRlcikge1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXIgPyB0aGlzLmkuZmllbGRzLmZpbHRlcihmaWx0ZXIpIDogdGhpcy5pLmZpZWxkcztcclxuICAgIH1cclxuICAgIHJlYWN0VG8odGFyZ2V0KSB7XHJcbiAgICAgICAgKHRhcmdldC5yZWFjdCB8fCAodGFyZ2V0LnJlYWN0ID0gW10pKS5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgZ2V0IG1haW5GaWVsZCgpIHsgcmV0dXJuIHRoaXMuaS5tYWluOyB9XHJcbiAgICBnZXQgaWNvbkZpZWxkKCkgeyByZXR1cm4gdGhpcy5pLmljb247IH1cclxuICAgIGdldCBjYW5JbnNlcnQoKSB7IHJldHVybiB0aGlzLmkuaW5zZXJ0OyB9XHJcbiAgICBnZXQgY2FuVXBkYXRlKCkgeyByZXR1cm4gdGhpcy5pLnVwZGF0ZTsgfVxyXG4gICAgZ2V0IGNhblJlbW92ZSgpIHsgcmV0dXJuIHRoaXMuaS5yZW1vdmU7IH1cclxuICAgIHNlbGVjdChib25kID0ge30pIHtcclxuICAgICAgICByZXR1cm4gZXhwb3J0cy4kLnNlbGVjdCh0aGlzLmtleSwgYm9uZCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBpbnNlcnQodmFsdWVzKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkluc2VydClcclxuICAgICAgICAgICAgdGhyb3cgXCJ0aGlzIGVudGl0eSBoYXMgbm90IGluc2VydCBzdXBwb3J0XCI7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGV4cG9ydHMuJC5pbnNlcnQodGhpcy5rZXksIHZhbHVlcyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5yZWxvYWQoKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgYXN5bmMgdXBkYXRlKHZhbHVlcykge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5VcGRhdGUpXHJcbiAgICAgICAgICAgIHRocm93IFwidGhpcyBlbnRpdHkgaGFzIG5vdCB1cGRhdGUgc3VwcG9ydFwiO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBleHBvcnRzLiQudXBkYXRlKHRoaXMua2V5LCB2YWx1ZXMpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucmVsb2FkKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGFzeW5jIHJlbW92ZShpZHMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuUmVtb3ZlKVxyXG4gICAgICAgICAgICB0aHJvdyBcInRoaXMgZW50aXR5IGhhcyBub3QgZGVsZXRlIHN1cHBvcnRcIjtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZXhwb3J0cy4kLnJlbW92ZSh0aGlzLmtleSwgeyBpZDogaWRzIH0pO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucmVsb2FkKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHJlbG9hZChyZWxvYWRlZCA9IFtdKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGxldCBsID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoLCB0MSA9IEFycmF5KGwpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKVxyXG4gICAgICAgICAgICB0MVtpXSA9IHRoaXMubGlzdGVuZXJzW2ldLnNlbGVjdE5vdygpO1xyXG4gICAgICAgIHJlbG9hZGVkLnB1c2godGhpcy5rZXkpO1xyXG4gICAgICAgIChfYSA9IHRoaXMucmVhY3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKGVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVsb2FkZWQuaW5jbHVkZXMoZW50LmtleSkpXHJcbiAgICAgICAgICAgICAgICBlbnQucmVsb2FkKHJlbG9hZGVkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodDEpO1xyXG4gICAgfVxyXG4gICAgYmluZChib25kKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXJzLmluY2x1ZGVzKGJvbmQpKVxyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJhbHJlYWR5IGJpbmRlZFwiKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2goYm9uZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0b0pTT04oKSB7IH1cclxufVxyXG5leHBvcnRzLkVudGl0eSA9IEVudGl0eTtcclxuY2xhc3MgQm9uZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihlLCBvcHRzID0ge30pIHtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IGU7XHJcbiAgICAgICAgdGhpcy5yZWFkT25seSA9IG9wdHMucmVhZE9ubHk7XHJcbiAgICAgICAgdGhpcy5fbGltaXQgPSBvcHRzLmxpbWl0ID09IG51bGwgPyBleHBvcnRzLiQubGltaXQgOiBvcHRzLmxpbWl0O1xyXG4gICAgICAgIHRoaXMuX3BhZyA9IG9wdHMucGFnIHx8IDE7XHJcbiAgICAgICAgbGV0IG9udXBkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9wYWcgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ncm91cEJ5ID0gb3JyYXlfMS5kZWZhdWx0KG9wdHMuZ3JvdXBCeSk7XHJcbiAgICAgICAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnk7XHJcbiAgICAgICAgdGhpcy5zb3J0ID0gb3JyYXlfMS5kZWZhdWx0KG9wdHMuc29ydCwge1xyXG4gICAgICAgICAgICBjb252ZXJ0ZXI6IChlKSA9PiBpbnV0aWxfMS5pc1MoZSkgPyB7IGY6IGUgfSA6IGUsXHJcbiAgICAgICAgICAgIGtleTogJ2YnXHJcbiAgICAgICAgfSkub24ob251cGQpO1xyXG4gICAgICAgIHRoaXMuZmllbGRzID0gb3JyYXlfMS5kZWZhdWx0KG9wdHMuZmllbGRzKS5vbigoKSA9PiB0aGlzLnNlbGVjdCgpKTtcclxuICAgICAgICB0aGlzLnRhZ3MgPSBvcnJheV8xLmRlZmF1bHQob3B0cy50YWdzKS5vbihvbnVwZCk7XHJcbiAgICAgICAgdGhpcy5xdWVyeUJ5ID0gb3JyYXlfMS5kZWZhdWx0KG9wdHMucXVlcnlCeSB8fCBlLmZpZWxkcygpLm1hcChmID0+IGYua2V5KS5maWx0ZXIoayA9PiBrICE9ICdjZCcgJiYgayAhPSAnbHUnKSkub24ob251cGQpO1xyXG4gICAgICAgIHRoaXMud2hlcmUgPSBpbnV0aWxfMS5pc1Mob3B0cy53aGVyZSkgPyBbb3B0cy53aGVyZV0gOiBvcHRzLndoZXJlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGtleSgpIHsgcmV0dXJuIHRoaXMudGFyZ2V0LmtleTsgfVxyXG4gICAgZ2V0IHBhZ3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGltaXQgPyBNYXRoLmNlaWwodGhpcy5sZW5ndGggLyB0aGlzLmxpbWl0KSA6IDE7XHJcbiAgICB9XHJcbiAgICBnZXQgcXVlcnkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJ5O1xyXG4gICAgfVxyXG4gICAgc2V0IHF1ZXJ5KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9IHRoaXMuX3F1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhZyA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuX3F1ZXJ5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHBhZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFnO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhZyh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA8IDEpXHJcbiAgICAgICAgICAgIHZhbHVlID0gMTtcclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IHRoaXMucGFncylcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnBhZ3M7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhZyA9PSB2YWx1ZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX3BhZyA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Tm93KCk7XHJcbiAgICB9XHJcbiAgICBnZXQgbGltaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpbWl0O1xyXG4gICAgfVxyXG4gICAgc2V0IGxpbWl0KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpbWl0ID09IHZhbHVlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5fcGFnID0gdmFsdWUgP1xyXG4gICAgICAgICAgICBNYXRoLmNlaWwodGhpcy5fbGltaXQgKiB0aGlzLl9wYWcgLyB2YWx1ZSkgOlxyXG4gICAgICAgICAgICAxO1xyXG4gICAgICAgIHRoaXMuX2xpbWl0ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3ROb3coKTtcclxuICAgIH1cclxuICAgIGlkcygpIHtcclxuICAgICAgICBpZiAodGhpcy5wYWdzID4gMSkge1xyXG4gICAgICAgICAgICBsZXQgdCA9IHRoaXMudG9KU09OKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhcmdldC5zZWxlY3Qoe1xyXG4gICAgICAgICAgICAgICAgdHA6IDMsXHJcbiAgICAgICAgICAgICAgICBmaWVsZHM6IFtleHBvcnRzLiQuaWQodGhpcy50YXJnZXQpXSxcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB0LndoZXJlLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHQucXVlcnksXHJcbiAgICAgICAgICAgICAgICBxdWVyeUJ5OiB0LnF1ZXJ5QnksXHJcbiAgICAgICAgICAgICAgICBncm91cEJ5OiB0Lmdyb3VwQnlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5tYXAoZiA9PiBmLmlkKTtcclxuICAgIH1cclxuICAgIHB1c2hGaWx0ZXIodmFsdWUpIHtcclxuICAgICAgICBpZiAoaW51dGlsXzEuaXNBKHRoaXMud2hlcmUpKVxyXG4gICAgICAgICAgICB0aGlzLndoZXJlLnB1c2godmFsdWUpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5hZGRGaWx0ZXIoaW51dGlsXzEudXVpZCg0KSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZ2V0RmlsdGVyKGtleSkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICByZXR1cm4gaW51dGlsXzEuaXNBKHRoaXMud2hlcmUpID8gbnVsbCA6ICgoX2EgPSB0aGlzLndoZXJlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Fba2V5XSkgfHwgbnVsbDtcclxuICAgIH1cclxuICAgIHJlbW92ZUZpbHRlcihrZXkpIHtcclxuICAgICAgICBsZXQgdyA9IHRoaXMud2hlcmU7XHJcbiAgICAgICAgaWYgKHcgJiYgIWludXRpbF8xLmlzQSh3KSlcclxuICAgICAgICAgICAgZGVsZXRlIHdba2V5XTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFkZEZpbHRlcihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHcgPSBpbnV0aWxfMS5pc0EodGhpcy53aGVyZSkgPyAodGhpcy53aGVyZSA9IHRoaXMud2hlcmUuZGljKCh2LCBpKSA9PiBbXCJcIiArIGksIHZdKSkgOiB0aGlzLndoZXJlIHx8ICh0aGlzLndoZXJlID0ge30pO1xyXG4gICAgICAgIHRoaXMuZ2V0RmlsdGVyKGtleSk7XHJcbiAgICAgICAgd1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3QoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHdoZXJlVigpIHtcclxuICAgICAgICBsZXQgdyA9IHRoaXMud2hlcmU7XHJcbiAgICAgICAgcmV0dXJuIHcgPyBpbnV0aWxfMS5pc0EodykgPyB3LnNsaWNlKCkgOiBPYmplY3QudmFsdWVzKHcpIDogW107XHJcbiAgICB9XHJcbiAgICBiaW5kKGxpc3QpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QgPSBsaXN0IHx8IG9ycmF5XzEuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5saXN0O1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0QWxsKCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnRhcmdldC5zZWxlY3QoT2JqZWN0LmFzc2lnbih0aGlzLnRvSlNPTigpLCB7XHJcbiAgICAgICAgICAgIHRwOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGxpbWl0OiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHBhZzogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0b3RhbDogdW5kZWZpbmVkXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc2VsZWN0Tm93KCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9jYWxsaW5kZXgpO1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3QpIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLnRhcmdldC5zZWxlY3QodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gZGF0YS50O1xyXG4gICAgICAgICAgICBsZXQgdGFncyA9IHt9LCBncm91cHMgPSB7fSwgbGlzdCA9IHRoaXMubGlzdDtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGxpc3QudGFncylcclxuICAgICAgICAgICAgICAgIGlmIChsaXN0LnRhZ3Nba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICB0YWdzW2tleV0gPSBsaXN0LnRhZ3Nba2V5XS52YWx1ZS5pZDtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGxpc3QuZylcclxuICAgICAgICAgICAgICAgIGdyb3Vwc1trZXldID0gbGlzdC5nW2tleV0ua2V5RmllbGQoKTtcclxuICAgICAgICAgICAgbGlzdC5zZXQoZGF0YS5kKTtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRhZ3MpXHJcbiAgICAgICAgICAgICAgICBsaXN0LnNldFRhZyhrZXksIHRhZ3Nba2V5XSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBncm91cHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBncm91cCA9IGdyb3Vwc1trZXldO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5nW2tleV0uc2V0KGxpc3QuZmlsdGVyKGkgPT4gZ3JvdXAuaW5kZXhPZihpLmlkKSAhPSAtMSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9oYW5kbGVycylcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGggb2YgdGhpcy5faGFuZGxlcnMpXHJcbiAgICAgICAgICAgICAgICAgICAgaCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3Qod2FpdCA9IDUwMCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9jYWxsaW5kZXgpO1xyXG4gICAgICAgIGlmICh3YWl0KVxyXG4gICAgICAgICAgICB0aGlzLl9jYWxsaW5kZXggPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm93KCk7XHJcbiAgICAgICAgICAgIH0sIHdhaXQpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3ROb3coKTtcclxuICAgICAgICA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBvbihoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlcnMgfHwgKHRoaXMuX2hhbmRsZXJzID0gW10pLnB1c2goaGFuZGxlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgbGV0IHEgPSB0aGlzLnF1ZXJ5ICYmIHRoaXMucXVlcnlCeS5sLCBmID0gdGhpcy5maWVsZHMsIHcgPSB0aGlzLndoZXJlO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRwOiA1LFxyXG4gICAgICAgICAgICBmaWVsZHM6ICFmLmxlbmd0aCB8fCB0aGlzLnRhcmdldC5maWVsZHMubGVuZ3RoID09IGYubGVuZ3RoID8gdW5kZWZpbmVkIDogZixcclxuICAgICAgICAgICAgd2hlcmU6IHcgJiYgKGludXRpbF8xLmlzQSh3KSA/IHcgOiBPYmplY3QudmFsdWVzKHcpKSxcclxuICAgICAgICAgICAgbGltaXQ6IHRoaXMubGltaXQsXHJcbiAgICAgICAgICAgIHBhZzogdGhpcy5wYWcsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBxID8gdGhpcy5xdWVyeSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgcXVlcnlCeTogcSA/IHRoaXMucXVlcnlCeSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgc29ydDogdGhpcy5zb3J0Lmxlbmd0aCA/IHRoaXMuc29ydCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdG90YWw6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQm9uZCA9IEJvbmQ7XHJcbmFzeW5jIGZ1bmN0aW9uIGJpbmQodikge1xyXG4gICAgaWYgKGludXRpbF8xLmlzUyh2KSkge1xyXG4gICAgICAgIGxldCBlbnQgPSBhd2FpdCBleHBvcnRzLmdldCh2KTtcclxuICAgICAgICByZXR1cm4gbmV3IEJvbmQoZW50KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBlbnQgPSBhd2FpdCBleHBvcnRzLmdldCh2LmtleSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCb25kKGVudCwgdik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5iaW5kID0gYmluZDtcclxuY29uc3QgZW50aXRpZXMgPSB7fTtcclxuY29uc3QgZ2V0ID0gYXN5bmMgKGtleSkgPT4geyB2YXIgX2E7IHJldHVybiBlbnRpdGllc1tfYSA9IGludXRpbF8xLmlzUyhrZXkpID8ga2V5IDogKGtleSA9IGtleS5rZXkpXSB8fCAoZW50aXRpZXNbX2FdID0gbmV3IEVudGl0eShrZXksIGF3YWl0IGV4cG9ydHMuJC5lbnRpdHkoa2V5KSkpOyB9O1xyXG5leHBvcnRzLmdldCA9IGdldDtcclxuZnVuY3Rpb24gY3JlYXRlKGtleSwgaSkge1xyXG4gICAgaWYgKGludXRpbF8xLmlzQShpKSlcclxuICAgICAgICBpID0geyBmaWVsZHM6IGkgfTtcclxuICAgIHJldHVybiBlbnRpdGllc1trZXldID0gbmV3IEVudGl0eShrZXksIGV4cG9ydHMuJC5jcmVhdGUoaSkpO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbnRpdHkuanMubWFwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlKGVsZW1lbnQsIHByb3BzLCBjaGlsZCkge1xyXG4gICAgaWYgKCFlbGVtZW50KVxyXG4gICAgICAgIHJldHVybiBTLmVtcHR5O1xyXG4gICAgbGV0IHJlc3VsdCA9IHR5cGVvZiAoZWxlbWVudCkgPT09ICdzdHJpbmcnID9cclxuICAgICAgICBuZXcgUyhkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpKSA6XHJcbiAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgP1xyXG4gICAgICAgICAgICBuZXcgUyhlbGVtZW50KSA6XHJcbiAgICAgICAgICAgICdyZW5kZXInIGluIGVsZW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW5kZXIoKSA6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50O1xyXG4gICAgaWYgKHByb3BzKVxyXG4gICAgICAgIGlmIChpc1MocHJvcHMpIHx8IEFycmF5LmlzQXJyYXkocHJvcHMpKVxyXG4gICAgICAgICAgICByZXN1bHQuY2xzKHByb3BzKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wcyhwcm9wcyk7XHJcbiAgICBpZiAoY2hpbGQgIT0gbnVsbClcclxuICAgICAgICBhZGQocmVzdWx0LmUsIGNoaWxkKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGcgPSBjcmVhdGU7XHJcbmV4cG9ydCBjb25zdCBkaXYgPSAocHJvcHMsIGNoaWxkKSA9PiBjcmVhdGUoXCJkaXZcIiwgcHJvcHMsIGNoaWxkKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKG9iaikge1xyXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgbGV0IG5PYmo7XHJcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIG5PYmogPSBBcnJheShvYmoubGVuZ3RoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICBuT2JqW2ldID0gY2xvbmUob2JqW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG5PYmogPSB7fTtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG9iailcclxuICAgICAgICAgICAgICAgIG5PYmpba2V5XSA9IGNsb25lKG9ialtrZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqID0gbk9iajtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBFeHRlbmQob2JqLCBleHRlbnNpb24pIHtcclxuICAgIGZvciAobGV0IGtleSBpbiBleHRlbnNpb24pIHtcclxuICAgICAgICBsZXQgdmFsdWUyID0gZXh0ZW5zaW9uW2tleV07XHJcbiAgICAgICAgaWYgKG9ialtrZXldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlMSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUyICYmIHZhbHVlMi5fX3Byb3RvX18gPT0gT2JqZWN0LnByb3RvdHlwZSAmJiB2YWx1ZTEgJiYgdmFsdWUxLl9fcHJvdG9fXyA9PSBPYmplY3QucHJvdG90eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBkZWVwRXh0ZW5kKHZhbHVlMSwgdmFsdWUyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZTIgJiYgdmFsdWUyLl9fcHJvdG9fXyA9PSBPYmplY3QucHJvdG90eXBlKVxyXG4gICAgICAgICAgICBvYmpba2V5XSA9IGNsb25lKHZhbHVlMik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBvYmpba2V5XSA9IHZhbHVlMjtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuY29uc3QgaXNTID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xyXG5leHBvcnQgZnVuY3Rpb24gb24oX19laCwgZXZlbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIShldmVudCBpbiBfX2VoKSkge1xyXG4gICAgICAgICAgICBfX2VoW2V2ZW50XSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucylcclxuICAgICAgICAgICAgY2FsbGJhY2sub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgX19laFtldmVudF0ucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG9mZihfX2VoLCBldmVudCwgY2FsbGJhY2spIHtcclxuICAgIGlmIChldmVudCBpbiBfX2VoKSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFjayA9IF9fZWhbZXZlbnRdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHN0YWNrLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YWNrW2ldID09PSBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBkZWxldGUgX19laFtldmVudF07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGVtaXQoZWxlbWVudCwgZXZlbnQsIGRhdGEpIHtcclxuICAgIGxldCBzdGFjayA9IGVsZW1lbnQuX19laFtldmVudF07XHJcbiAgICBpZiAoc3RhY2sgJiYgc3RhY2subGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdGFjay5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGUgPSBzdGFja1tpXTtcclxuICAgICAgICAgICAgaWYgKGUub3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUub3B0aW9ucy5vbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnNwbGljZShpLS0sIDEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUub3B0aW9ucy5kZWxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBlLmNhbGwoZWxlbWVudCwgZGF0YSk7IH0sIGUub3B0aW9ucy5kZWxheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGUuY2FsbChlbGVtZW50LCBkYXRhKSA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiAtMTtcclxufVxyXG5leHBvcnQgY2xhc3MgRSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpKSB7XHJcbiAgICAgICAgdGhpcy5ib25kcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX19laCA9IHt9O1xyXG4gICAgICAgIHRoaXMuaSA9IGkgfHwge307XHJcbiAgICB9XHJcbiAgICBnZXQgbW9kZWwoKSB7IHJldHVybiB0aGlzLmk7IH1cclxuICAgIGZvY3VzKCkge1xyXG4gICAgICAgIHRoaXMuJC5mb2N1cygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLiQgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICBsZXQgdmlldyA9IHRoaXMudmlldygpO1xyXG4gICAgICAgICAgICB0aGlzLiQgPSB2aWV3ID9cclxuICAgICAgICAgICAgICAgICdyZW5kZXInIGluIHZpZXcgP1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXcucmVuZGVyKCkgOiB2aWV3IDpcclxuICAgICAgICAgICAgICAgIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiQ7XHJcbiAgICB9XHJcbiAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLiQpIHtcclxuICAgICAgICAgICAgdGhpcy4kLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy4kO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJvbmRzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbiAgICByZVJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIHJlbW92ZUtleShrZXkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGtleSA9PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuaVtrZXldO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYWRkVmFsaWRhdG9ycyhmaWVsZCwgdmFsaWRhdG9yKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICAoKF9hID0gKHRoaXMudmFsaWRhdG9ycyB8fCAodGhpcy52YWxpZGF0b3JzID0ge30pKSlbX2IgPSBmaWVsZF0gfHwgKF9hW19iXSA9IFtdKSkucHVzaCh2YWxpZGF0b3IpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgX3ZhbGlkKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgdGVtcCA9IHRoaXMudmFsaWRhdG9yc1trZXldO1xyXG4gICAgICAgIGlmICh0ZW1wKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRlbXBbaV0odmFsdWUsIGtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgc2V0KGtleSwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgZHQgPSB0aGlzLmksIGJpbmRzID0gdGhpcy5ib25kcztcclxuICAgICAgICBpZiAodHlwZW9mIGtleSA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ID0ge307XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0MiA9IGtleVtpXTtcclxuICAgICAgICAgICAgICAgICAgICB0W3QyXSA9IGR0W3QyXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGtleSA9IHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrIGluIGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBrZXlba107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gZHRba10gfHwgKHRoaXMudmFsaWRhdG9ycyAmJiAhdGhpcy5fdmFsaWQoaywgdmFsKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBrZXlba107XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdFtrXSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghT2JqZWN0LmtleXMoa2V5KS5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5kcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJpbmQgPSBiaW5kc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmICghYmluZC5wcm9wIHx8IGJpbmQucHJvcCBpbiBrZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgYmluZC5oYW5kbGVyLmNhbGwodGhpcywgYmluZC5lLCBrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFrZXkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5kcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJpbmQgPSBiaW5kc1tpXTtcclxuICAgICAgICAgICAgICAgIGJpbmQuaGFuZGxlci5jYWxsKHRoaXMsIGJpbmQuZSwgZHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZHRba2V5XSA9PT0gdmFsdWUgfHwgKHRoaXMudmFsaWRhdG9ycyAmJiAhdGhpcy5fdmFsaWQoa2V5LCB2YWx1ZSkpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IHsgW2tleV06IHZhbHVlIH07XHJcbiAgICAgICAgICAgIGR0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5kcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJpbmQgPSBiaW5kc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmICghYmluZC5wcm9wIHx8IGJpbmQucHJvcCA9PT0ga2V5KVxyXG4gICAgICAgICAgICAgICAgICAgIGJpbmQuaGFuZGxlci5jYWxsKHRoaXMsIGJpbmQuZSwgc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlKGtleSkge1xyXG4gICAgICAgIHRoaXMuc2V0KGtleSwgIXRoaXMuaVtrZXldKTtcclxuICAgIH1cclxuICAgIGNsb25lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLmkpO1xyXG4gICAgfVxyXG4gICAgb24oZXZlbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudCA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBldmVudDtcclxuICAgICAgICAgICAgZXZlbnQgPSBcInNldFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvbihldmVudCwgY2FsbGJhY2ssIG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgb2ZmKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIG9mZih0aGlzLl9fZWgsIGV2ZW50LCBjYWxsYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBlbWl0KGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgZW1pdCh0aGlzLCBldmVudCwgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBiaW5kKGVsZW1lbnQsIGhhbmRsZXIsIHByb3AsIG5vSW5pdCkge1xyXG4gICAgICAgIGlmICgncmVuZGVyJyBpbiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9uZHMucHVzaCh7IGU6IGVsZW1lbnQsIGhhbmRsZXI6IGhhbmRsZXIsIHByb3A6IHByb3AgfSk7XHJcbiAgICAgICAgICAgIGlmICghbm9Jbml0KVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGVsZW1lbnQsIHRoaXMuaSk7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ib25kcy5wdXNoKHsgZTogZWxlbWVudCwgaGFuZGxlcjogaGFuZGxlciwgcHJvcDogcHJvcCB9KTtcclxuICAgICAgICAgICAgaWYgKCFub0luaXQpXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgZWxlbWVudCwgdGhpcy5pKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5wdXRCaW5kKHMsIHByb3AsIGZpZWxkU2V0ID0gJ3ZhbHVlJywgZmllbGRHZXQgPSBmaWVsZFNldCkge1xyXG4gICAgICAgIGlmIChzIGluc3RhbmNlb2YgUykge1xyXG4gICAgICAgICAgICBzLm9uKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IGUudGFyZ2V0W2ZpZWxkR2V0XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHByb3AsIHYgPT09ICcnIHx8ICh0eXBlb2YgdiA9PT0gJ251bWJlcicgJiYgaXNOYU4odikpID8gbnVsbCA6IHYpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5iaW5kKHMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5pW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgcy5wcm9wKGZpZWxkU2V0LCB0ID09IG51bGwgPyAnJyA6IHQpO1xyXG4gICAgICAgICAgICB9LCBwcm9wKTtcclxuICAgICAgICAgICAgcmV0dXJuIHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzLm9uKCdpbnB1dCcsICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocHJvcCwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIHZpZXcgPSBzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmJpbmQodmlldywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcy5zZXQoZmllbGRTZXQsIHRoaXMuaVtwcm9wXSk7XHJcbiAgICAgICAgICAgIH0sIHByb3ApO1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1bmJpbmQocykge1xyXG4gICAgICAgIHZhciBpID0gdGhpcy5ib25kcy5maW5kSW5kZXgoKGIpID0+IGIuZS5lID09IHMuZSB8fCBzID09IGIuZSk7XHJcbiAgICAgICAgaWYgKGkgIT0gLTEpXHJcbiAgICAgICAgICAgIHRoaXMuYm9uZHMuc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG4gICAgdG9KU09OKCkgeyB9XHJcbn1cclxuZnVuY3Rpb24gYWRkKGUsIGNoaWxkKSB7XHJcbiAgICBzd2l0Y2ggKHR5cGVvZiBjaGlsZCkge1xyXG4gICAgICAgIGNhc2UgJ29iamVjdCc6XHJcbiAgICAgICAgICAgIGlmIChjaGlsZClcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFMgPyAoY2hpbGQgPSBjaGlsZC5lKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgJ3JlbmRlcicgaW4gY2hpbGQgPyAoY2hpbGQgPSBjaGlsZC5yZW5kZXIoKS5lKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkIGluc3RhbmNlb2YgRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICBlLmFwcGVuZChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghY2hpbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQudGhlbiA9PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQudGhlbihjID0+IGFkZChlLCBjKSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZC5sZW5ndGg7IGkgPCBsOyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZChlLCBjaGlsZFtpXSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XHJcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICBjYXNlICdiaWdpbnQnOlxyXG4gICAgICAgICAgICBlLmFwcGVuZChjaGlsZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcclxuICAgICAgICAgICAgYWRkKGUsIGNoaWxkKCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgUyB7XHJcbiAgICBjb25zdHJ1Y3RvcihlKSB7XHJcbiAgICAgICAgdGhpcy5lID0gZTtcclxuICAgIH1cclxuICAgIHRvSlNPTigpIHsgfVxyXG4gICAgZ2V0IHZhbGlkKCkgeyByZXR1cm4gISF0aGlzLmU7IH1cclxuICAgIG9uKGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChpc1MoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcilcclxuICAgICAgICAgICAgICAgIHRoaXMuZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcilcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGUgb2YgZXZlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lLmFkZEV2ZW50TGlzdGVuZXIoZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGZvciAobGV0IGUgaW4gZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ID0gZXZlbnRbZV07XHJcbiAgICAgICAgICAgICAgICBpZiAodClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmUuYWRkRXZlbnRMaXN0ZW5lcihlLCB0LCBsaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGRlbGF5KGV2ZW50LCBkZWxheSwgaGFuZGxlcikge1xyXG4gICAgICAgIGhhbmRsZXIgPSBoYW5kbGVyLmJpbmQodGhpcy5lKTtcclxuICAgICAgICB0aGlzLm9uKGV2ZW50LCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IGBfJHtldmVudH1fdGltZXJgO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpc1t0XSk7XHJcbiAgICAgICAgICAgIHRoaXNbdF0gPSBzZXRUaW1lb3V0KGhhbmRsZXIsIGRlbGF5KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGVtaXQoZXZlbnQsIGluaXQpIHtcclxuICAgICAgICB0aGlzLmUuZGlzcGF0Y2hFdmVudCh0eXBlb2YgZXZlbnQgPT0gXCJzdHJpbmdcIiA/IG5ldyBFdmVudChldmVudCwgaW5pdCkgOiBldmVudCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0cmlnZ2VyKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0KGEsIGIpO1xyXG4gICAgfVxyXG4gICAgY2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5lLmNsaWNrKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBvbmUoZXZlbnQsIGxpc3RlbmVyKSB7XHJcbiAgICAgICAgaWYgKGlzUyhldmVudCkpXHJcbiAgICAgICAgICAgIHRoaXMub24oZXZlbnQsIGxpc3RlbmVyLCB7IG9uY2U6IHRydWUgfSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm9uKGV2ZW50LCB7IG9uY2U6IHRydWUgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBvZmYoZXZlbnQsIGxpc3RlbmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBpc1MoZXZlbnQpID8gW2V2ZW50XSA6IGV2ZW50KVxyXG4gICAgICAgICAgICB0aGlzLmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCBsaXN0ZW5lcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0cnkoYWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWQpXHJcbiAgICAgICAgICAgIGFjdGlvbih0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHdoZW4oc2VsZWN0b3IsIGFjdGlvbikge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkICYmIHRoaXMuaXMoc2VsZWN0b3IpKVxyXG4gICAgICAgICAgICBhY3Rpb24odGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBkbyhjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYXN5bmMoY2FsbGJhY2spIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwLCB0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHN0YXRpYyBpcyh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgJiYgJ2UnIGluIHZhbHVlOyB9XHJcbiAgICBwdXQocG9zaXRpb24sIGNoaWxkKSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgY2hpbGQpIHtcclxuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBTID8gKGNoaWxkID0gY2hpbGQuZSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncmVuZGVyJyBpbiBjaGlsZCA/IChjaGlsZCA9IGNoaWxkLnJlbmRlcigpLmUpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkIGluc3RhbmNlb2YgRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lLmluc2VydEFkamFjZW50RWxlbWVudChwb3NpdGlvbiwgY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFjaGlsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnRoZW4gPT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC50aGVuKGMgPT4gdGhpcy5wdXQocG9zaXRpb24sIGMpKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwb3NpdGlvblswXSA9PSAnYScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBjaGlsZC5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHV0KHBvc2l0aW9uLCBjaGlsZFtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkLmxlbmd0aDsgaSA8IGw7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHV0KHBvc2l0aW9uLCBjaGlsZFtpXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICAgICAgY2FzZSAnYmlnaW50JzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZS5pbnNlcnRBZGphY2VudFRleHQocG9zaXRpb24sIGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1dChwb3NpdGlvbiwgY2hpbGQoKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdXRBZnRlcihjaGlsZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnB1dCgnYWZ0ZXJlbmQnLCBjaGlsZCk7XHJcbiAgICB9XHJcbiAgICBwdXRCZWZvcmUoY2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdXQoJ2JlZm9yZWJlZ2luJywgY2hpbGQpO1xyXG4gICAgfVxyXG4gICAgcHV0VGV4dChwb3MsIHRleHQpIHtcclxuICAgICAgICB0aGlzLmUuaW5zZXJ0QWRqYWNlbnRUZXh0KHBvcywgdGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdXRIVE1MKHBvcywgaHRtbCkge1xyXG4gICAgICAgIHRoaXMuZS5pbnNlcnRBZGphY2VudEhUTUwocG9zLCBodG1sKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFkZChjaGlsZCkge1xyXG4gICAgICAgIGFkZCh0aGlzLmUsIGNoaWxkKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGZyYWcoY2hpbGQpIHtcclxuICAgICAgICBsZXQgZG9jID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBhZGQoZG9jLCBjaGlsZCk7XHJcbiAgICAgICAgdGhpcy5lLmFwcGVuZChkb2MpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHJlcGVuZChjaGlsZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnB1dCgnYWZ0ZXJiZWdpbicsIGNoaWxkKTtcclxuICAgIH1cclxuICAgIHBsYWNlKGluZGV4LCBjaGlsZCkge1xyXG4gICAgICAgIGlmICghaW5kZXgpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1dCgnYWZ0ZXJiZWdpbicsIGNoaWxkKTtcclxuICAgICAgICB2YXIgdGVtcCA9IHRoaXMuZS5jaGlsZHJlbltpbmRleCAtIDFdO1xyXG4gICAgICAgIGlmICghdGVtcClcclxuICAgICAgICAgICAgdGhyb3cgXCJvdXQgb2YgZmxvd1wiO1xyXG4gICAgICAgIG5ldyBTKHRlbXApLnB1dCgnYWZ0ZXJlbmQnLCBjaGlsZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB1bnBsYWNlKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5lLmNoaWxkcmVuW2luZGV4XS5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIGxhc3RDaGlsZCgpIHtcclxuICAgICAgICBsZXQgY2ggPSB0aGlzLmUuY2hpbGRyZW47XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTKGNoW2NoLmxlbmd0aCAtIDFdKTtcclxuICAgIH1cclxuICAgIGFkZEhUTUwoaHRtbCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnB1dEhUTUwoXCJiZWZvcmViZWdpblwiLCBodG1sKTtcclxuICAgIH1cclxuICAgIHNldChjaGlsZCkge1xyXG4gICAgICAgIHRoaXMuZS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIGFkZCh0aGlzLmUsIGNoaWxkKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHRleHQodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZS50ZXh0Q29udGVudDtcclxuICAgICAgICB0aGlzLmUudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFkZFRvKHBhcmVudCkge1xyXG4gICAgICAgIChwYXJlbnQgaW5zdGFuY2VvZiBTID8gcGFyZW50LmUgOiBwYXJlbnQpXHJcbiAgICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLmUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHV0SW4ocG9zaXRpb24sIHBhcmVudCkge1xyXG4gICAgICAgIChwYXJlbnQgaW5zdGFuY2VvZiBTID8gcGFyZW50LmUgOiBwYXJlbnQpXHJcbiAgICAgICAgICAgIC5pbnNlcnRBZGphY2VudEVsZW1lbnQocG9zaXRpb24sIHRoaXMuZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBiaW5kKHByb3AsIHNyYywgdmFsdWUpIHtcclxuICAgICAgICB0aHJvdyBcIm5vdCBpbXBsZW1lbnRlZFwiO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgaHRtbCh2YWx1ZSkge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmUuaW5uZXJIVE1MO1xyXG4gICAgfVxyXG4gICAgZnVsbEh0bWwoKSB7IHJldHVybiB0aGlzLmUub3V0ZXJIVE1MOyB9XHJcbiAgICBpc0VtcHR5KCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5lLmhhc0NoaWxkTm9kZXMoKTtcclxuICAgIH1cclxuICAgIHJlcGxhY2UoY2hpbGQpIHtcclxuICAgICAgICB0aGlzLnB1dCgnYmVmb3JlYmVnaW4nLCBjaGlsZCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJlY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIH1cclxuICAgIGZvY3VzKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmUuZm9jdXMob3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBnZXQgZm9jdXNlZCgpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSB0aGlzLmU7XHJcbiAgICB9XHJcbiAgICBibHVyKCkge1xyXG4gICAgICAgIHRoaXMuZS5ibHVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBmb2N1c2luKGhhbmRsZXIpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXMuZTtcclxuICAgICAgICBoYW5kbGVyICYmIHRoaXMub24oJ2ZvY3VzaW4nLCBlID0+IHQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSB8fCBoYW5kbGVyLmNhbGwodCwgZSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZm9jdXNvdXQoaGFuZGxlcikge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcy5lO1xyXG4gICAgICAgIGhhbmRsZXIgJiYgdGhpcy5vbignZm9jdXNvdXQnLCBlID0+IHQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSB8fCBoYW5kbGVyLmNhbGwodCwgZSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgY29udGFpbnMoY2hpbGQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lLmNvbnRhaW5zKGNoaWxkIGluc3RhbmNlb2YgUyA/IGNoaWxkLmUgOiBjaGlsZCk7XHJcbiAgICB9XHJcbiAgICBpbmRleCgpIHtcclxuICAgICAgICB2YXIgcCA9IHRoaXMuZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGlmIChwKVxyXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChwLmNoaWxkcmVuLCB0aGlzLmUpO1xyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIGluZGV4SW5Eb2N1bWVudCgpIHtcclxuICAgICAgICB2YXIgYyA9IDA7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzWzBdO1xyXG4gICAgICAgIHdoaWxlIChlICYmIGUucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICBjICs9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoZS5jaGlsZHJlbiwgZSk7XHJcbiAgICAgICAgICAgIGUgPSBlLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjO1xyXG4gICAgfVxyXG4gICAgY2hpbGQoZmlsdGVyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZHMgPSB0aGlzLmUuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQubWF0Y2hlcyhmaWx0ZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUyhjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFMuZW1wdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZHMgPSB0aGlzLmUuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUyhjaGlsZHNbZmlsdGVyIDwgMCA/IGNoaWxkcy5sZW5ndGggKyBmaWx0ZXIgOiBmaWx0ZXJdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUyh0aGlzLmUuZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoaWxkQnlDbHMoY2xzKSB7XHJcbiAgICAgICAgaWYgKGNscylcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuZS5jaGlsZHJlbi5pdGVtKGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhjbHMpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUyhjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUy5lbXB0eTtcclxuICAgIH1cclxuICAgIGNoaWxkcyhmaWx0ZXIsIHRvKSB7XHJcbiAgICAgICAgbGV0IGNoaWxkcyA9IHRoaXMuZS5jaGlsZHJlbjtcclxuICAgICAgICBpZiAoaXNTKGZpbHRlcikpIHtcclxuICAgICAgICAgICAgbGV0IHQgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5tYXRjaGVzKGZpbHRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE0odCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBmaWx0ZXIgPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE0oQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY2hpbGRzLCBmaWx0ZXIsIHRvKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBmaWx0ZXIgPT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE0oQXJyYXkuZnJvbShjaGlsZHMpLmZpbHRlcihjID0+IGZpbHRlcihuZXcgUyhjKSkpKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNKGNoaWxkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hpbGROb2RlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lLmNoaWxkTm9kZXM7XHJcbiAgICB9XHJcbiAgICBjaGlsZENvdW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmUuY2hpbGRFbGVtZW50Q291bnQ7XHJcbiAgICB9XHJcbiAgICBxdWVyeShmaWx0ZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFModGhpcy5lLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyKSk7XHJcbiAgICB9XHJcbiAgICBxdWVyeUFsbChmaWx0ZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE0odGhpcy5lLnF1ZXJ5U2VsZWN0b3JBbGwoZmlsdGVyKSk7XHJcbiAgICB9XHJcbiAgICBwYXJlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTKHRoaXMuZS5wYXJlbnRFbGVtZW50KTtcclxuICAgIH1cclxuICAgIGluRE9NKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuZS5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgY2xvc2VzdChmaWx0ZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFModGhpcy5lLmNsb3Nlc3QoZmlsdGVyKSk7XHJcbiAgICB9XHJcbiAgICBwYXJlbnRzKGZpbHRlcikge1xyXG4gICAgICAgIHZhciBsID0gW10sIHAgPSB0aGlzLmU7XHJcbiAgICAgICAgd2hpbGUgKHAgPSBwLnBhcmVudEVsZW1lbnQpXHJcbiAgICAgICAgICAgIGlmICghZmlsdGVyIHx8IHAubWF0Y2hlcyhmaWx0ZXIpKVxyXG4gICAgICAgICAgICAgICAgbC5wdXNoKHApO1xyXG4gICAgICAgIHJldHVybiBuZXcgTShsKTtcclxuICAgIH1cclxuICAgIGNsb25lKGRlZXApIHtcclxuICAgICAgICByZXR1cm4gbmV3IFModGhpcy5lLmNsb25lTm9kZShkZWVwKSk7XHJcbiAgICB9XHJcbiAgICBwcmV2KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUyh0aGlzLmUucHJldmlvdXNFbGVtZW50U2libGluZyk7XHJcbiAgICB9XHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUyh0aGlzLmUubmV4dEVsZW1lbnRTaWJsaW5nKTtcclxuICAgIH1cclxuICAgIHByb3AocHJvcHMsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVbcHJvcHNdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZVtwcm9wc10gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHByb3BzW2tleV07XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lW2tleV0gPSBwcm9wc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHRhZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lLmxvY2FsTmFtZTtcclxuICAgIH1cclxuICAgIGlzSW5wdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZS5tYXRjaGVzKCdpbnB1dCx0ZXh0YXJlYSxzZWxlY3QnKTtcclxuICAgIH1cclxuICAgIHZTY3JvbGwodmFsdWUsIHR5cGUpIHtcclxuICAgICAgICBpZiAodGhpcy5lLnNjcm9sbClcclxuICAgICAgICAgICAgdGhpcy5lLnNjcm9sbCh7XHJcbiAgICAgICAgICAgICAgICB0b3A6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6IHR5cGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmUuc2Nyb2xsVG9wID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBjYWxsKGtleSwgLi4ucGFyYW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZVtrZXldLmNhbGwodGhpcy5lLCAuLi5wYXJhbXMpO1xyXG4gICAgfVxyXG4gICAgY3NzKGNzc3MsIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzLmUuc3R5bGU7XHJcbiAgICAgICAgaWYgKGlzUyhjc3NzKSlcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc1tjc3NzXTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc1tjc3NzXSA9IHZhbHVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgZm9yIChsZXQgY3NzIGluIGNzc3MpXHJcbiAgICAgICAgICAgICAgICBzW2Nzc10gPSBjc3NzW2Nzc107XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBnZXQgd2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZS5vZmZzZXRXaWR0aDtcclxuICAgIH1cclxuICAgIGdldCBoZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZS5vZmZzZXRIZWlnaHQ7XHJcbiAgICB9XHJcbiAgICB1bmNzcyhwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIHRoaXMuZS5zdHlsZVtwcm9wZXJ0aWVzW2ldXSA9IFwiXCI7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlQ3NzKHByb3BlcnRpZXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51bmNzcyhwcm9wZXJ0aWVzKTtcclxuICAgIH1cclxuICAgIHVuY2xzKCkge1xyXG4gICAgICAgIHRoaXMuZS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBjbHMobmFtZXMsIHNldCkge1xyXG4gICAgICAgIHRoaXMuZS5jbGFzc0xpc3Rbc2V0ID09PSBmYWxzZSA/ICdyZW1vdmUnIDogJ2FkZCddLmFwcGx5KHRoaXMuZS5jbGFzc0xpc3QsIHR5cGVvZiBuYW1lcyA9PT0gJ3N0cmluZycgPyBuYW1lcy50cmltKCkuc3BsaXQoJyAnKS5maWx0ZXIobiA9PiBuKSA6IG5hbWVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHRjbHMobmFtZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBuIG9mIG5hbWVzLnNwbGl0KCcgJykpXHJcbiAgICAgICAgICAgIGlmIChuKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lLmNsYXNzTGlzdC50b2dnbGUobi5yZXBsYWNlKCcgJywgJycpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGhhc0NsYXNzKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lLmNsYXNzTGlzdC5jb250YWlucyhuYW1lKTtcclxuICAgIH1cclxuICAgIGF0dHIoYXR0ciwgdmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lLmdldEF0dHJpYnV0ZShhdHRyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICB0aGlzLmUucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5lLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYXR0cnMoYXR0cnMpIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXR0cnMpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gYXR0cnNba2V5XTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlID09PSB0cnVlID8gJycgOiB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgaXMoZmlsdGVyKSB7XHJcbiAgICAgICAgaWYgKGZpbHRlciBpbnN0YW5jZW9mIE5vZGUgfHwgKGZpbHRlciBpbnN0YW5jZW9mIFMgJiYgKGZpbHRlciA9IGZpbHRlci5lKSkpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmUgPT0gZmlsdGVyO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZS5tYXRjaGVzKGZpbHRlcik7XHJcbiAgICB9XHJcbiAgICBpc0NscyhjbHMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lLmNsYXNzTGlzdC5jb250YWlucyhjbHMpO1xyXG4gICAgfVxyXG4gICAgZChkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZVsnX2QnXTtcclxuICAgICAgICB0aGlzLmVbJ19kJ10gPSBkYXRhO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICAgIHRoaXMuZS5yZW1vdmUoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5TLmVtcHR5ID0gbmV3IFMoKTtcclxuZXhwb3J0IGNsYXNzIE0gZXh0ZW5kcyBBcnJheSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpbnB1dCwgY29udGV4dCkge1xyXG4gICAgICAgIGlmIChpbnB1dCA9PSBudWxsKVxyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICBzdXBlcihpbnB1dCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCByO1xyXG4gICAgICAgICAgICBpZiAoaXNTKGlucHV0KSlcclxuICAgICAgICAgICAgICAgIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGlucHV0KTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoJ2xlbmd0aCcgaW4gaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHIgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdCA9IGlucHV0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByLnB1c2godCBpbnN0YW5jZW9mIFMgPyB0LmUgOiB0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBcImludmFsaWQgaW5wdXRcIjtcclxuICAgICAgICAgICAgc3VwZXIoLi4ucik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb24oZXZlbnQsIGxpc3RlbmVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB0aGlzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGVtaXQoZXZlbnQpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKVxyXG4gICAgICAgICAgICB0aGlzW2ldLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgY3NzKHByb3BzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgY3NzIGluIHByb3BzKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICB0aGlzW2ldLnN0eWxlW2Nzc10gPSBwcm9wc1tjc3NdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgY2xzKG5hbWVzLCBzZXQpIHtcclxuICAgICAgICB0eXBlb2YgbmFtZXMgPT0gXCJzdHJpbmdcIiAmJiAobmFtZXMgPSBuYW1lcy5zcGxpdCgnICcpLmZpbHRlcih2ID0+IHYpKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpc1tpXS5jbGFzc0xpc3Rbc2V0ID09PSBmYWxzZSA/ICdyZW1vdmUnIDogJ2FkZCddKC4uLm5hbWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwcm9wKHByb3AsIHZhbHVlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB0aGlzW2ldW3Byb3BdID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBxdWVyeShmaWx0ZXIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gdGhpc1tpXTtcclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBpZiAoIXQubWF0Y2hlcyhmaWx0ZXIpKVxyXG4gICAgICAgICAgICAgICAgdCA9IHQucXVlcnlTZWxlY3RvcihmaWx0ZXIpO1xyXG4gICAgICAgICAgICBpZiAodClcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUyh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFMuZW1wdHk7XHJcbiAgICB9XHJcbiAgICBlYWNoKGNhbGxiYWNrZm4pIHtcclxuICAgICAgICB0aGlzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4gY2FsbGJhY2tmbihuZXcgUyh2YWx1ZSksIGluZGV4KSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBub3QoZmlsdGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKChlKSA9PiAhZS5tYXRjaGVzKGZpbHRlcikpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgdGhpc1tpXS5yZW1vdmUoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGNoaWxkKGZpbHRlcikge1xyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgaWYgKGlzUyhmaWx0ZXIpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHMgPSB0aGlzW2ldLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLm1hdGNoZXMoZmlsdGVyKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBmaWx0ZXIgPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBBcnJheShmaWx0ZXIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSB0aGlzW2ldLmNoaWxkcmVuW2ZpbHRlcl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2guYXBwbHkocmVzdWx0LCB0aGlzW2ldLmNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNKHJlc3VsdCk7XHJcbiAgICB9XHJcbiAgICBwdXNoKC4uLml0ZW1zKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdCA9IGl0ZW1zW2ldO1xyXG4gICAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIFMpXHJcbiAgICAgICAgICAgICAgICBpdGVtc1tpXSA9IHQuZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnB1c2goLi4uaXRlbXMpO1xyXG4gICAgfVxyXG4gICAgdG9BcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAodCA9PiBuZXcgUyh0KSk7XHJcbiAgICB9XHJcbiAgICBmaW5kKGZpbHRlciwgdGhpc0FyZ3MpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGUgPSB0aGlzWzBdOyBpIDwgdGhpcy5sZW5ndGg7IGUgPSB0aGlzWysraV0pXHJcbiAgICAgICAgICAgICAgICBpZiAoZS5tYXRjaGVzKGZpbHRlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLmZpbmQoZmlsdGVyLCB0aGlzQXJncyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZnJvbVMocykge1xyXG4gICAgICAgIHJldHVybiBuZXcgTShzLmZpbHRlcihzID0+IHMpLm1hcChzID0+IHMuZSkpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGVtcHR5KGxlbmd0aCA9IDApIHtcclxuICAgICAgICByZXR1cm4gbmV3IE0obmV3IEFycmF5KGxlbmd0aCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBodG1sKHRhZywgcHJvcHMsIGNoaWxkKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcsIHRhZyksIHByb3BzLCBjaGlsZCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHhtbCh0YWcsIHByb3BzLCBjaGlsZCkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZShkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnLCB0YWcpLCBwcm9wcywgY2hpbGQpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzdmcodGFnLCBhdHRycywgY2hpbGQpIHtcclxuICAgIHZhciBzID0gbmV3IFMoZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHRhZykpO1xyXG4gICAgaWYgKGF0dHJzKVxyXG4gICAgICAgIGlmIChpc1MoYXR0cnMpIHx8IEFycmF5LmlzQXJyYXkoYXR0cnMpKVxyXG4gICAgICAgICAgICBzLmNscyhhdHRycyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzLmF0dHJzKGF0dHJzKTtcclxuICAgIGlmIChjaGlsZCB8fCBjaGlsZCA9PT0gMClcclxuICAgICAgICBzLmFkZChjaGlsZCk7XHJcbiAgICByZXR1cm4gcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdG9TVkcodGV4dCkge1xyXG4gICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKSwgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh0ZXh0LCBcImltYWdlL3N2Zyt4bWxcIik7XHJcbiAgICByZXR1cm4gbmV3IFMoZG9jLmZpcnN0Q2hpbGQpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwKGNoaWxkLCBwcm9wcywgdGFnKSB7XHJcbiAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgIGNoaWxkID0gY2hpbGQoKTtcclxuICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEUpXHJcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5yZW5kZXIoKTtcclxuICAgIGVsc2UgaWYgKGNoaWxkIGluc3RhbmNlb2YgRWxlbWVudClcclxuICAgICAgICBjaGlsZCA9IG5ldyBTKGNoaWxkKTtcclxuICAgIGVsc2UgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBTKSlcclxuICAgICAgICBjaGlsZCA9IGNyZWF0ZSh0YWcgfHwgJ2RpdicsIG51bGwsIFtjaGlsZF0pO1xyXG4gICAgaWYgKHByb3BzKVxyXG4gICAgICAgIGNyZWF0ZShjaGlsZCwgcHJvcHMpO1xyXG4gICAgcmV0dXJuIGNoaWxkO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXQoaW5wdXQsIGNvbnRleHQpIHtcclxuICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGlmIChjb250ZXh0IGluc3RhbmNlb2YgUylcclxuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBjb250ZXh0LmU7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUygoY29udGV4dCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvcihpbnB1dCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKGlucHV0IGluc3RhbmNlb2YgRSAmJiAoaW5wdXQgPSBpbnB1dC5yZW5kZXIoKSkpIHx8IGlucHV0IGluc3RhbmNlb2YgUylcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFMuZW1wdHk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbChpbnB1dCwgY29udGV4dCkge1xyXG4gICAgcmV0dXJuIG5ldyBNKGlucHV0LCBjb250ZXh0KTtcclxufVxyXG5jbGFzcyBDTCBleHRlbmRzIEFycmF5IHtcclxuICAgIHB1c2goLi4uY2xzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdCBvZiBjbHMpIHtcclxuICAgICAgICAgICAgaWYgKHQpXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0MiBvZiBpc1ModCkgPyB0LnNwbGl0KCcgJykgOiB0KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0MilcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VwZXIucHVzaCh0Mik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHRyeUFkZChjbHMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5jbHVkZXMoY2xzKSlcclxuICAgICAgICAgICAgdGhpcy5wdXNoKGNscyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNsKC4uLmNscykge1xyXG4gICAgbGV0IGMgPSBuZXcgQ0w7XHJcbiAgICBpZiAoY2xzLmxlbmd0aClcclxuICAgICAgICBjLnB1c2goLi4uY2xzKTtcclxuICAgIHJldHVybiBjO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjc3Moc2VsZWN0b3IsIHRhZykge1xyXG4gICAgbGV0IHIgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgayBpbiBzZWxlY3RvcilcclxuICAgICAgICByICs9IGNzcy5wYXJzZShrLCBzZWxlY3RvcltrXSk7XHJcbiAgICByZXR1cm4gdGFnID8gdGFnLmFkZChyKSA6IGNyZWF0ZShcInN0eWxlXCIpLnRleHQocikuYWRkVG8oZG9jdW1lbnQuaGVhZCk7XHJcbn1cclxuKGZ1bmN0aW9uIChjc3MpIHtcclxuICAgIGNvbnN0IHN1YnMgPSBbXCI+XCIsIFwiIFwiLCBcIjpcIiwgXCJ+XCIsIFwiK1wiXTtcclxuICAgIGNzcy5kZWZTdWIgPSBcIj5cIjtcclxuICAgIGZ1bmN0aW9uIHN1YihwYXJlbnQsIGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkLnNwbGl0KCcsJykubWFwKHMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdCA9IHNbMF07XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQubWFwKHAgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQgPT0gXCImXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAgKyBzLnNsaWNlKDEpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3Vicy5pbmRleE9mKHQpID09IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwICsgY3NzLmRlZlN1YiArIHM7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAgKyBzO1xyXG4gICAgICAgICAgICB9KS5qb2luKCcsJyk7XHJcbiAgICAgICAgfSkuam9pbignLCcpO1xyXG4gICAgfVxyXG4gICAgY3NzLnN1YiA9IHN1YjtcclxuICAgIGZ1bmN0aW9uIHBhcnNlKHNlbGVjdG9yLCBwcm9wcykge1xyXG4gICAgICAgIGxldCByID0gXCJcIiwgc3ViU2VsID0gXCJcIiwgc3BsaXQ7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWwgPSBwcm9wc1trZXldO1xyXG4gICAgICAgICAgICBpZiAodmFsIHx8IHZhbCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YlNlbCArPSBwYXJzZShzdWIoc3BsaXQgfHwgKHNwbGl0ID0gc2VsZWN0b3Iuc3BsaXQoJywnKSksIGtleSksIHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgciArPSBrZXkucmVwbGFjZShyZWdleCwgbSA9PiBcIi1cIiArIG0pICsgXCI6XCIgKyB2YWwgKyBcIjtcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKHIgPyBzZWxlY3RvciArIFwie1wiICsgciArIFwifVwiIDogXCJcIikgKyBzdWJTZWw7XHJcbiAgICB9XHJcbiAgICBjc3MucGFyc2UgPSBwYXJzZTtcclxuICAgIGNvbnN0IHJlZ2V4ID0gL1tBLVpdL2c7XHJcbn0pKGNzcyB8fCAoY3NzID0ge30pKTtcclxubGV0IF9pZCA9IDA7XHJcbmV4cG9ydCBjb25zdCBpZCA9ICgpID0+ICdpJyArIChfaWQrKyk7XHJcbkV2ZW50LnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgpO1xyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1nYWxoby5qcy5tYXAiLCJjb25zdCB7IFMsIGNzcyB9ID0gcmVxdWlyZShcImdhbGhvXCIpO1xyXG5jb25zdCB7IGV4IH0gPSByZXF1aXJlKFwiaW51dGlsXCIpO1xyXG5jb25zdCBjciA9IHJlcXVpcmUoXCIuL2NvcmVcIik7XHJcblxyXG5jb25zdCBpYyA9IHJlcXVpcmUoXCIuL2ljb25cIik7XHJcbmNvbnN0IGJ0ID0gcmVxdWlyZShcIi4vYnV0dG9uXCIpO1xyXG5jb25zdCBhYyA9IHJlcXVpcmUoXCIuL2FjY29yZGlvblwiKTtcclxuY29uc3QgbWQgPSByZXF1aXJlKFwiLi9tb2RhbFwiKTtcclxuY29uc3QgZGQgPSByZXF1aXJlKFwiLi9kcm9wZG93blwiKTtcclxuLy8gY29uc3Qgc2wgPSByZXF1aXJlKFwiLi9zZWxlY3RcIik7XHJcbi8vIGNvbnN0IGh2ID0gcmVxdWlyZShcIi4vaG92ZXJcIik7XHJcbmNvbnN0IGlwID0gcmVxdWlyZShcIi4vaW5wdXRcIik7XHJcbi8vIGNvbnN0IGx5ID0gcmVxdWlyZShcIi4vbGF5b3V0XCIpO1xyXG5jb25zdCB0YiA9IHJlcXVpcmUoXCIuL3RhYlwiKTtcclxuY29uc3QgbW4gPSByZXF1aXJlKFwiLi9tZW51XCIpO1xyXG5cclxuZXgobW4ubWVudSwgeyBpOiBtbi5pLCBzdWI6IG1uLnN1YiwgaHI6IG1uLmhyIH0pO1xyXG5leChleHBvcnRzLCB7IG1lbnU6IG1uLm1lbnUsIG1lbnViYXI6IG1uLm1lbnViYXIgfSk7XHJcbmV4KGV4cG9ydHMsIHRiKTtcclxuZXgoZXhwb3J0cywgbWQpO1xyXG5leChleHBvcnRzLCBjcik7XHJcbmV4KGV4cG9ydHMsIGljKTtcclxuZXgoZXhwb3J0cywgYnQpO1xyXG5leChleHBvcnRzLCBpcCk7XHJcbmV4KGV4cG9ydHMsIGFjKTtcclxuZXgoZXhwb3J0cywgZGQpO1xyXG5cclxuZXhwb3J0cy5zdHlsZSA9ICgpID0+ICh7XHJcbiAgLi4uaXAuc3R5bGUoKSxcclxuICAuLi5jci5zdHlsZSgpLFxyXG4gIC4uLmJ0LnN0eWxlKCksXHJcbiAgLi4uYWMuc3R5bGUoKSxcclxuICAuLi5pYy5zdHlsZSgpLFxyXG4gIC4uLm1uLnN0eWxlKCksXHJcbiAgLi4udGIuc3R5bGUoKSxcclxuICAuLi5kZC5zdHlsZSgpXHJcbn0pO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gbGF6eTIoZGF0YSwga2V5KSB7XHJcbiAgICBsZXQgdCA9IGRhdGFba2V5XTtcclxuICAgIHJldHVybiBpc0YodCkgPyAoZGF0YVtrZXldID0gdCgpKSA6IHQ7XHJcbn1cclxuY29uc3QgY2hlY2sgPSAocGF0dGVybiwgdmFsdWUpID0+IChcIlwiICsgdmFsdWUpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihwYXR0ZXJuKSA+PSAwO1xyXG5leHBvcnQgY29uc3QgZWZlID0gKHZhbHVlLCBjaGVjaykgPT4gKHZhbHVlICYgY2hlY2spID09IGNoZWNrO1xyXG5leHBvcnQgY29uc3QgbGF6eSA9ICh2YWx1ZSkgPT4gaXNGKHZhbHVlKSA/IHZhbHVlKCkgOiB2YWx1ZTtcclxuZXhwb3J0IGNvbnN0IGlzID0gKHZhbHVlLCBjb25zdHJ1Y3RvcikgPT4gdmFsdWUgaW5zdGFuY2VvZiBjb25zdHJ1Y3RvcjtcclxuZXhwb3J0IGZ1bmN0aW9uIGlzTih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGlzUyA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcclxuZXhwb3J0IGNvbnN0IGlzRiA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xyXG5leHBvcnQgZnVuY3Rpb24gaXNWUyhzdHIpIHtcclxuICAgIGlmICghc3RyKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGlmIChzdHJbaV0gIT0gJyAnKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG47XHJcbmV4cG9ydCBjb25zdCB0ID0gKHZhbHVlKSA9PiB2YWx1ZSAhPT0gZmFsc2U7XHJcbmV4cG9ydCBjb25zdCBkZWYgPSAodmFsdWUsIGRlZikgPT4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IGRlZiA6IHZhbHVlO1xyXG5leHBvcnQgY29uc3QgaXNPID0gKHZhbHVlKSA9PiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XHJcbmV4cG9ydCBjb25zdCBpc1YgPSAodmFsdWUpID0+ICFpc1UodmFsdWUpICYmIHZhbHVlICE9IG51bGw7XHJcbmV4cG9ydCBjb25zdCBpc0EgPSAodmFsdWUpID0+IEFycmF5LmlzQXJyYXkodmFsdWUpO1xyXG5leHBvcnQgY29uc3QgaXNVID0gKHZhbHVlKSA9PiB2YWx1ZSA9PT0gdm9pZCAwO1xyXG5leHBvcnQgY29uc3QgaXNQID0gKHZhbHVlKSA9PiBpc0YodmFsdWUudGhlbik7XHJcbmV4cG9ydCBjb25zdCBjb3B5ID0gKHZhbHVlKSA9PiBPYmplY3QuYXNzaWduKHt9LCB2YWx1ZSk7XHJcbmV4cG9ydCBjb25zdCBpc0IgPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xyXG5leHBvcnQgY29uc3QgYXJyID0gKHYpID0+IGlzQSh2KSA/IHYgOiBbdl07XHJcbmV4cG9ydCBjb25zdCBoYXMgPSAoZmllbGQsIG9iaikgPT4gb2JqICYmIGZpZWxkIGluIG9iajtcclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5KGluZGV4LCBjYiwgdGltZSA9IDUwMCkge1xyXG4gICAgY2xlYXJUaW1lb3V0KGluZGV4KTtcclxuICAgIHJldHVybiBzZXRUaW1lb3V0KGNiLCB0aW1lKTtcclxufVxyXG5leHBvcnQgY29uc3Qgc2xpcCA9IChtcykgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbmV4cG9ydCBjb25zdCB2YWxzID0gKG9iaikgPT4gT2JqZWN0LnZhbHVlcyhvYmopO1xyXG5leHBvcnQgY29uc3QgZXggPSAodmFsdWUsIGV4dGVuc2lvbikgPT4gT2JqZWN0LmFzc2lnbih2YWx1ZSwgZXh0ZW5zaW9uKTtcclxuZXhwb3J0IGZ1bmN0aW9uIHNnbih0Z3QsIC4uLnNyYykgeyByZXR1cm4gT2JqZWN0LmFzc2lnbih0Z3QsIC4uLnNyYyk7IH1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZChhcnJheSwgLi4uaXRlbXMpIHtcclxuICAgIGl0ZW1zLnB1c2goLi4uaXRlbXMpO1xyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxsKHYsIGNiKSB7XHJcbiAgICBjYih2KTtcclxuICAgIHJldHVybiB2O1xyXG59XHJcbmV4cG9ydCBjb25zdCByZW1vdmUgPSAoc3RyLCBpbmRleCwgbGVuZ3RoKSA9PiBzdHIuc2xpY2UoMCwgaW5kZXgpICsgc3RyLnNsaWNlKGluZGV4ICsgbGVuZ3RoKTtcclxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5KHBhdHRlcm4sIGxpc3QsIC4uLmZpZWxkcykge1xyXG4gICAgbGV0IHIgPSBbXTtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgbGlzdClcclxuICAgICAgICBpZiAoaXRlbSAmJiAoZmllbGRzLmxlbmd0aCA/IGZpZWxkcy5zb21lKGYgPT4gY2hlY2socGF0dGVybiwgaXRlbVtmXSkpIDogY2hlY2socGF0dGVybiwgaXRlbSkpKVxyXG4gICAgICAgICAgICByLnB1c2goaXRlbSk7XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoKGFyLCBjb21wYXJlRm4pIHtcclxuICAgIHZhciBtID0gMDtcclxuICAgIHZhciBuID0gYXIubGVuZ3RoIC0gMTtcclxuICAgIHdoaWxlIChtIDw9IG4pIHtcclxuICAgICAgICB2YXIgaW5kZXggPSAobiArIG0pID4+IDE7XHJcbiAgICAgICAgdmFyIGNtcCA9IGNvbXBhcmVGbihhcltpbmRleF0pO1xyXG4gICAgICAgIGlmIChjbXAgPiAwKSB7XHJcbiAgICAgICAgICAgIG0gPSBpbmRleCArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNtcCA8IDApIHtcclxuICAgICAgICAgICAgbiA9IGluZGV4IC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLW0gLSAxO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpc1BsYWluID0gKG8pID0+IG8gPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YobykgPT09IE9iamVjdC5wcm90b3R5cGUgOiBmYWxzZTtcclxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZChvYmosIGV4dGVuc2lvbikge1xyXG4gICAgZm9yIChsZXQga2V5IGluIGV4dGVuc2lvbikge1xyXG4gICAgICAgIGlmIChvYmpba2V5XSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBvYmpba2V5XSA9IGV4dGVuc2lvbltrZXldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGVlcEV4dGVuZChvYmosIGV4dGVuc2lvbikge1xyXG4gICAgZm9yIChsZXQga2V5IGluIGV4dGVuc2lvbikge1xyXG4gICAgICAgIGxldCB0ID0gb2JqW2tleV07XHJcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdCkge1xyXG4gICAgICAgICAgICBjYXNlIFwidW5kZWZpbmVkXCI6XHJcbiAgICAgICAgICAgICAgICBvYmpba2V5XSA9IGV4dGVuc2lvbltrZXldO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcclxuICAgICAgICAgICAgICAgIGxldCB0MiA9IGV4dGVuc2lvbltrZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQgJiYgaXNQbGFpbih0MikpXHJcbiAgICAgICAgICAgICAgICAgICAgZGVlcEV4dGVuZCh0LCB0Mik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGVlcFNnbihkZXN0LCBzcmMpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiBzcmMpIHtcclxuICAgICAgICBsZXQgZCA9IGRlc3Rba2V5XSwgcyA9IHNyY1trZXldO1xyXG4gICAgICAgIGlmIChpc1BsYWluKGQpICYmIGlzUGxhaW4ocykpXHJcbiAgICAgICAgICAgIGRlZXBTZ24oZCwgcyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBkZXN0W2tleV0gPSBzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlc3Q7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHByb3QoY29uc3RydWN0b3IsIG9iaikge1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IGNvbnN0cnVjdG9yKCksIG9iaik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShjb25zdHJ1Y3Rvciwgb2JqKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgY29uc3RydWN0b3IoKSwgb2JqKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcGxhaW4oc3JjKSB7XHJcbiAgICBsZXQgdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSBvZiBzcmMpXHJcbiAgICAgICAgaWYgKGkpXHJcbiAgICAgICAgICAgIHQucHVzaCguLi5pKTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1cCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlICYmICh2YWx1ZVswXS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSkucmVwbGFjZSgvXy9nLCAnICcpKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXVpZChsZW5ndGggPSAzMikge1xyXG4gICAgcmV0dXJuIEFycmF5XHJcbiAgICAgICAgLmZyb20oeyBsZW5ndGg6IGxlbmd0aCB9KVxyXG4gICAgICAgIC5tYXAoKCkgPT4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTUpLnRvU3RyaW5nKDE2KSlcclxuICAgICAgICAuam9pbignJyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Gb3JtKGRhdGEpIHtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGRhdGEuZm9yRWFjaCgodiwgaykgPT4gcmVzdWx0W2tdID0gdik7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KG9iaikge1xyXG4gICAgZm9yIChsZXQgX2sgaW4gb2JqKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmV4cG9ydCBjb25zdCBub3RJbXAgPSAoKSA9PiBuZXcgRXJyb3IoXCJub3QgaW1wbGVtZW50ZWRcIik7XHJcbmV4cG9ydCBjb25zdCBub3RGID0gKGtleSwgaXRlbVRwLCBzcmMsIHNyY1RwKSA9PiBuZXcgRXJyb3IoYCR7aXRlbVRwIHx8ICdpdGVtJ30gJyR7a2V5fScgbm90IGZvdW5kYCArIChzcmMgPyBgIGluICcke3NyY30nICR7c3JjVHB9YCA6ICcnKSk7XHJcbmV4cG9ydCBjb25zdCBpbnYgPSAoa2V5KSA9PiBuZXcgRXJyb3IoYGludmFsaWQgYWN0aW9uYCk7XHJcbmV4cG9ydCBmdW5jdGlvbiBjYWNoZUFycihtYXgpIHtcclxuICAgIGxldCBhcnIgPSBbXTtcclxuICAgIGFyci5wdXNoID0gKC4uLnZhbHVlcykgPT4ge1xyXG4gICAgICAgIGxldCByID0gKHZhbHVlcy5sICsgYXJyLmwpIC0gbWF4O1xyXG4gICAgICAgIHIgPiAwICYmIGFyci5zcGxpY2UoMCwgcik7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwoYXJyLCAuLi52YWx1ZXMpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBhcnI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0KGRpYywgZm4pIHtcclxuICAgIGZvciAobGV0IGtleSBpbiBkaWMpXHJcbiAgICAgICAgaWYgKCFmbiB8fCBmbihkaWNba2V5XSwga2V5KSlcclxuICAgICAgICAgICAgcmV0dXJuIGRpY1trZXldO1xyXG4gICAgcmV0dXJuIHZvaWQgMDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RLZXkoZGljLCBmbikge1xyXG4gICAgZm9yIChsZXQga2V5IGluIGRpYylcclxuICAgICAgICBpZiAoIWZuIHx8IGZuKGRpY1trZXldLCBrZXkpKVxyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgcmV0dXJuIHZvaWQgMDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZWFjaChkaWMsIGZvckVhY2gpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiBkaWMpIHtcclxuICAgICAgICBsZXQgdCA9IGZvckVhY2goZGljW2tleV0sIGtleSk7XHJcbiAgICAgICAgaWYgKHQgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGljO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkdGEoZGljLCBmbikge1xyXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgZm9yICh2YXIga2V5IGluIGRpYylcclxuICAgICAgICByZXN1bHQucHVzaChmbihkaWNba2V5XSwga2V5KSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBieUtleShhcnIsIG5hbWUsIGtleSA9ICdrZXknKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKylcclxuICAgICAgICBpZiAobmFtZSA9PT0gYXJyW2ldW2tleV0pXHJcbiAgICAgICAgICAgIHJldHVybiBhcnJbaV07XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG47XHJcbmV4cG9ydCBmdW5jdGlvbiBzdWIoYXJyLCBrZXkpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGxldCB0ID0gQXJyYXkoYXJyLmxlbmd0aCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKylcclxuICAgICAgICB0W2ldID0gKF9hID0gYXJyW2ldKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Fba2V5XTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcbjtcclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RpbmN0KGFycikge1xyXG4gICAgcmV0dXJuIGFyci5maWx0ZXIoKGYsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gYXJyLmluZGV4T2YoZiwgaSArIDEpID09IC0xO1xyXG4gICAgfSk7XHJcbn1cclxuO1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWQoYXJyKSB7XHJcbiAgICByZXR1cm4gYXJyLmZpbHRlcih2ID0+IHYpO1xyXG59XHJcbjtcclxuZXhwb3J0IGZ1bmN0aW9uIGlCeUtleShhcnIsIG5hbWUsIGtleSA9ICdrZXknLCBpID0gMCkge1xyXG4gICAgZm9yICg7IGkgPCBhcnIubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgaWYgKG5hbWUgPT09IGFycltpXVtrZXldKVxyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgIHJldHVybiAtMTtcclxufVxyXG47XHJcbmV4cG9ydCBmdW5jdGlvbiBleHBhbmQoKSB7XHJcbiAgICB2YXIgX2EsIF9iO1xyXG4gICAgKF9hID0gU3RyaW5nLnByb3RvdHlwZSkucGFkU3RhcnQgfHwgKF9hLnBhZFN0YXJ0ID0gZnVuY3Rpb24gKGxlbmd0aCwgcGF0dGVybikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCA8PSBsZW5ndGggPyB0aGlzIDogKHBhdHRlcm4ucmVwZWF0KGxlbmd0aCAtIHRoaXMubGVuZ3RoKSArIHRoaXMpO1xyXG4gICAgfSk7XHJcbiAgICAoX2IgPSBTdHJpbmcucHJvdG90eXBlKS5yZXBsYWNlQWxsIHx8IChfYi5yZXBsYWNlQWxsID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaXQoZnJvbSkuam9pbih0byk7XHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEFycmF5LnByb3RvdHlwZSwge1xyXG4gICAgICAgIGE6IHtcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1swXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB6OiB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1t0aGlzLmxlbmd0aCAtIDFdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGw6IHtcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIEFycmF5LnByb3RvdHlwZS5kaWMgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXNbaV07XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gY2FsbGJhY2sodmFsdWUsIGkpO1xyXG4gICAgICAgICAgICByZXN1bHRbdGVtcFswXV0gPSB0ZW1wWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIEFycmF5LnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAoaW5kZXgsIC4uLnZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDAsIC4uLnZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBBcnJheS5wcm90b3R5cGUuY3V0ID0gZnVuY3Rpb24gKGNvdW50KSB7XHJcbiAgICAgICAgbGV0IHIgPSBBcnJheShNYXRoLmNlaWwodGhpcy5sZW5ndGggLyBjb3VudCkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgci5sZW5ndGg7KVxyXG4gICAgICAgICAgICByW2ldID0gdGhpcy5zbGljZShpICogY291bnQsICsraSAqIGNvdW50KTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW51dGlsLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBvbihfX2VoLCBldmVudCwgY2FsbGJhY2spIHtcclxuICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICghKGV2ZW50IGluIF9fZWgpKSB7XHJcbiAgICAgICAgICAgIF9fZWhbZXZlbnRdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZWhbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBvZmYoX19laCwgZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICBpZiAoZXZlbnQgaW4gX19laCkge1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB2YXIgc3RhY2sgPSBfX2VoW2V2ZW50XTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdGFjay5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFja1tpXSA9PT0gY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFjay5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgZGVsZXRlIF9fZWhbZXZlbnRdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBlbWl0KF9fZWgsIGVsZW1lbnQsIGV2ZW50LCBkYXRhKSB7XHJcbiAgICBsZXQgc3RhY2sgPSBfX2VoW2V2ZW50XTtcclxuICAgIGlmIChzdGFjayAmJiBzdGFjay5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHN0YWNrLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZSA9IHN0YWNrW2ldO1xyXG4gICAgICAgICAgICBpZiAoZS5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5vcHRpb25zLm9uY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhY2suc3BsaWNlKGktLSwgMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5vcHRpb25zLmRlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGUuY2FsbChlbGVtZW50LCBkYXRhKTsgfSwgZS5vcHRpb25zLmRlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZS5jYWxsKGVsZW1lbnQsIGRhdGEpID09PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG59XHJcbjtcclxuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgQXJyYXkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLl9fZWggPSB7fTtcclxuICAgIH1cclxuICAgIG9uKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZXZlbnQgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZXZlbnQ7XHJcbiAgICAgICAgICAgIGV2ZW50ID0gXCJzZXRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb24odGhpcy5fX2VoLCBldmVudCwgY2FsbGJhY2spO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgb2ZmKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIG9mZih0aGlzLl9fZWgsIGV2ZW50LCBjYWxsYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBlbWl0KGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIGVtaXQodGhpcy5fX2VoLCB0aGlzLCBldmVudCwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICBwdXNoKC4uLml0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5hZGQoaXRlbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIGFkZChpdGVtcykge1xyXG4gICAgICAgIGxldCBpbmRleGVzID0gQXJyYXkoaXRlbXMubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gaXRlbXNbaV0sIGluZGV4ID0gdGhpcy5saXN0LmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPSAtMSAmJiAhdGhpcy5pbmNsdWRlcyhpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXhlc1tpXSA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpc1t0aGlzLmxlbmd0aCArIGldID0gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UoaS0tLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCArPSBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncHVzaCcsIGl0ZW1zKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm5vVXBkYXRlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwic2V0XCIsIHsgYWRkOiBpdGVtcywgYWRkSWQ6IGluZGV4ZXMgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbmRleGVzO1xyXG4gICAgfVxyXG4gICAgcHVzaFJhbmdlKHN0YXJ0LCBlbmQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdXNoKC4uLnRoaXMubGlzdC5zbGljZShzdGFydCwgZW5kKSk7XHJcbiAgICB9XHJcbiAgICBwdXNoQWxsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnB1c2goLi4udGhpcy5saXN0LnNsaWNlKCkpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlKGl0ZW0pIHtcclxuICAgICAgICBsZXQgaSA9IHRoaXMuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICBpZiAoaSAhPSAtMSlcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVBdChpKTtcclxuICAgICAgICByZXR1cm4gaSAhPSAtMTtcclxuICAgIH1cclxuICAgIHJlbW92ZUF0KGluZGV4KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgdGhpcy5sZW5ndGggLSAxOyBpKyspXHJcbiAgICAgICAgICAgIHRoaXNbaV0gPSB0aGlzW2kgKyAxXTtcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXNbaW5kZXhdLCBpdGVtcyA9IFtpdGVtXSwgaWQgPSBbdGhpcy5pbmRleE9mKGl0ZW0pXTtcclxuICAgICAgICBkZWxldGUgdGhpc1stLXRoaXMubGVuZ3RoXTtcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZScsIGl0ZW1zKTtcclxuICAgICAgICBpZiAoIXRoaXMubm9VcGRhdGUpXHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc2V0JywgeyByZW1vdmU6IGl0ZW1zLCByZW12SWQ6IGlkIH0pO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlQXJyYXkoaXRlbXMpIHtcclxuICAgICAgICBsZXQgaW5kZXhlcyA9IEFycmF5KGl0ZW1zLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGl0ZW1zW2ldLCBpbmRleEluTGlzdCA9IHRoaXMubGlzdC5pbmRleE9mKGl0ZW0pLCBpbmRleCA9IHRoaXMuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleGVzW2ldID0gaW5kZXhJbkxpc3Q7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCB0aGlzLmxlbmd0aCAtIDE7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldID0gdGhpc1tpICsgMV07XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShpLS0sIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxlbmd0aCAtPSBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZScsIGl0ZW1zKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm5vVXBkYXRlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdzZXQnLCB7IHJlbW92ZTogaXRlbXMsIHJlbXZJZDogaW5kZXhlcyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XHJcbiAgICB9XHJcbiAgICByZW1vdmVSYW5nZShmcm9tLCB0bykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZUFycmF5KHRoaXMubGlzdC5zbGljZShmcm9tLCB0bykpO1xyXG4gICAgfVxyXG4gICAgc2V0KGFkZCkge1xyXG4gICAgICAgIGlmICgoIWFkZCB8fCAhYWRkLmxlbmd0aCkgJiYgIXRoaXMubGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5ub1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHJlbW92ZSA9IHRoaXMubGlzdC5zbGljZSgpLCByZW12SWQgPSB0aGlzLnJlbW92ZUFycmF5KHJlbW92ZSksIGFkZElkID0gYWRkID8gdGhpcy5hZGQoYWRkKSA6IFtdO1xyXG4gICAgICAgIHRoaXMubm9VcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVtaXQoJ3NldCcsIHtcclxuICAgICAgICAgICAgcmVtb3ZlLCByZW12SWQsXHJcbiAgICAgICAgICAgIGFkZCwgYWRkSWRcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGludmVydCgpIHtcclxuICAgICAgICB0aGlzLnNldCh0aGlzLmxpc3QuZmlsdGVyKGkgPT4gIXRoaXMuaW5jbHVkZXMoaSkpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHNldFJhbmdlKHN0YXJ0LCBlbmQpIHtcclxuICAgICAgICB0aGlzLnNldCh0aGlzLmxpc3Quc2xpY2Uoc3RhcnQsIGVuZCkpO1xyXG4gICAgfVxyXG4gICAgaW5kZXhlcygpIHtcclxuICAgICAgICBmb3IgKHZhciByID0gQXJyYXkodGhpcy5sZW5ndGgpLCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHJbaV0gPSB0aGlzLmxpc3QuaW5kZXhPZih0aGlzW2ldKTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuICAgIGtleUZpZWxkKCkge1xyXG4gICAgICAgIGZvciAodmFyIGtleSA9IHRoaXMubGlzdC5rZXksIHIgPSBbXSwgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICByLnB1c2godGhpc1tpXVtrZXldKTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuICAgIHRvSlNPTigpIHtcclxuICAgICAgICB0aHJvdyBcIm5vdCBpbXBsZW1lbnRlZFwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBMIGV4dGVuZHMgQXJyYXkge1xyXG4gICAgY29uc3RydWN0b3IoYXJyYXksIG9wdHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5nID0ge307XHJcbiAgICAgICAgdGhpcy5fX2VoID0ge307XHJcbiAgICAgICAgdGhpcy5rZXkgPSBvcHRzLmtleTtcclxuICAgICAgICB0aGlzLmNoaWxkS2V5ID0gb3B0cy5jaGlsZDtcclxuICAgICAgICB0aGlzLnNvcnRzID0gb3B0cy5zb3J0cztcclxuICAgICAgICB0aGlzLnBhcnNlID0gb3B0cy5wYXJzZSB8fCBvcHRzLmNvbnZlcnRlcjtcclxuICAgICAgICBpZiAob3B0cy5nKVxyXG4gICAgICAgICAgICBvcHRzLmcuZm9yRWFjaCh0aGlzLmFkZEdyb3VwLCB0aGlzKTtcclxuICAgICAgICBpZiAoYXJyYXkpXHJcbiAgICAgICAgICAgIHRoaXMucHV0KDAsIC4uLmFycmF5KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkaXN0aW5jdCgpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXhPZihpdGVtKSA9PSAtMSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBhZGRHcm91cChrZXkpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXMuZ1trZXldID0gbmV3IEdyb3VwKCk7XHJcbiAgICAgICAgdC5saXN0ID0gdGhpcztcclxuICAgICAgICB0LmtleSA9IGtleTtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHB1dChzdGFydCwgLi4udmFsdWVzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyc2UpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdCA9IHRoaXMucGFyc2UuY2FsbCh0aGlzLCB2YWx1ZXNbaV0sIGkgKyBzdGFydCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5zcGxpY2UoaS0tLCAxKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbaV0gPSB0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF2YWx1ZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsIG9sZExlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoICs9IGxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBjID0gb2xkTGVuZ3RoIC0gMTsgYyA+PSBzdGFydDsgYy0tKVxyXG4gICAgICAgICAgICB0aGlzW2MgKyBsZW5ndGhdID0gdGhpc1tjXTtcclxuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGxlbmd0aDsgYysrKSB7XHJcbiAgICAgICAgICAgIHRoaXNbc3RhcnQgKyBjXSA9IHZhbHVlc1tjXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudGFncykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy50YWdzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFnID0gdGhpcy50YWdzW2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAodGFnLmluZGV4ID49IHN0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgIHRhZy5pbmRleCArPSBsZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdpbnNlcnQnLCB2YWx1ZXMpO1xyXG4gICAgICAgIGlmICghdGhpcy5ub3VwZGF0ZSlcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7XHJcbiAgICAgICAgICAgICAgICB0cDogJ2luc2VydCcsXHJcbiAgICAgICAgICAgICAgICBzdGFydDogc3RhcnQsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogdmFsdWVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlQXQoc3RhcnQsIGxlbmd0aCA9IDEpIHtcclxuICAgICAgICBpZiAobGVuZ3RoICsgc3RhcnQgPiB0aGlzLmxlbmd0aClcclxuICAgICAgICAgICAgbGVuZ3RoID0gdGhpcy5sZW5ndGggLSBzdGFydDtcclxuICAgICAgICBpZiAobGVuZ3RoIDw9IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgcmVtb3ZlZCA9IEFycmF5KGxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsZW5ndGg7IGMrKylcclxuICAgICAgICAgICAgcmVtb3ZlZFtjXSA9IHRoaXNbc3RhcnQgKyBjXTtcclxuICAgICAgICBmb3IgKGxldCBjID0gc3RhcnQgKyBsZW5ndGg7IGMgPCB0aGlzLmxlbmd0aDsgYysrKVxyXG4gICAgICAgICAgICB0aGlzW2MgLSBsZW5ndGhdID0gdGhpc1tjXTtcclxuICAgICAgICB0aGlzLmxlbmd0aCAtPSBsZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuZykge1xyXG4gICAgICAgICAgICB0aGlzLmdba2V5XS5yZW1vdmVBcnJheShBcnJheS5mcm9tKHJlbW92ZWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudGFncylcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMudGFncykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhZyA9IHRoaXMudGFnc1trZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhZy5pbmRleCA+PSAoc3RhcnQgKyBsZW5ndGgpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRhZy5pbmRleCAtPSBsZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0YWcuaW5kZXggPj0gc3RhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFRhZyhrZXksIHRhZy5yZXBsYWNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tNYXRoLm1pbih0YWcuaW5kZXgsIHRoaXMubGVuZ3RoIC0gMSldIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCwgdGFnLnJlcGxhY2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmUnLCByZW1vdmVkKTtcclxuICAgICAgICBpZiAoIXRoaXMubm91cGRhdGUpXHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgeyB0cDogJ3JlbW92ZScsIHN0YXJ0LCBpdGVtczogcmVtb3ZlZCB9KTtcclxuICAgICAgICByZXR1cm4gcmVtb3ZlZDtcclxuICAgIH1cclxuICAgIHNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnZhbHVlcykge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnJlbW92ZUF0KHN0YXJ0LCBkZWxldGVDb3VudCk7XHJcbiAgICAgICAgdGhpcy5wdXQoc3RhcnQsIC4uLnZhbHVlcyk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHNldCh2YWx1ZXMpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGVuZ3RoICYmICghdmFsdWVzIHx8ICF2YWx1ZXMubGVuZ3RoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubm91cGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIGxldCByZW1vdmVkID0gdGhpcy5yZW1vdmVBdCgwLCB0aGlzLmxlbmd0aCk7XHJcbiAgICAgICAgaWYgKHZhbHVlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zb3J0cykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNvcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNvcnQgPSB0aGlzLnNvcnRzW2ldLCBvcHQgPSB7IHZhcnM6IHt9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0LnZhcnNbMF0gPSBhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHQudmFycy5iID0gYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvcnQuY2FsYyhvcHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucHV0KDAsIC4uLnZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm91cGRhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHsgdHA6ICdzZXQnLCBpdGVtczogdGhpcywgcmVtb3ZlZCB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHNvcnQoY29tcGFyZUZuKSB7XHJcbiAgICAgICAgdGhyb3cgXCJub3QgaW1wbGVtZW50ZWRcIjtcclxuICAgIH1cclxuICAgIHB1c2goLi4udmFsdWVzKSB7XHJcbiAgICAgICAgdGhpcy5wdXQodGhpcy5sZW5ndGgsIC4uLnZhbHVlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcG9wKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlQXQodGhpcy5sZW5ndGggLSAxKVswXTtcclxuICAgIH1cclxuICAgIHNoaWZ0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZUF0KDApWzBdO1xyXG4gICAgfVxyXG4gICAgdW5zaGlmdCguLi52YWx1ZXMpIHtcclxuICAgICAgICB0aGlzLnB1dCgwLCAuLi52YWx1ZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHJlbW92ZShpdGVtKSB7XHJcbiAgICAgICAgbGV0IGkgPSB0aGlzLml0ZW1JbmRleChpdGVtKTtcclxuICAgICAgICBpZiAoaSA+PSAwKVxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF0KGkpO1xyXG4gICAgICAgIHJldHVybiBpID49IDA7XHJcbiAgICB9XHJcbiAgICBwbGFjZShpdGVtLCBuZXdJbmRleCkge1xyXG4gICAgICAgIHZhciBvbGRJbmRleCA9IHRoaXMuaXRlbUluZGV4KGl0ZW0pO1xyXG4gICAgICAgIGl0ZW0gPSB0aGlzW29sZEluZGV4XTtcclxuICAgICAgICB0aGlzLnJlbW92ZUF0KG9sZEluZGV4KTtcclxuICAgICAgICB0aGlzLnB1dChuZXdJbmRleCwgaXRlbSk7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJlbG9hZChpdGVtKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5pdGVtSW5kZXgoaXRlbSksIHQgPSB0aGlzW2luZGV4XTtcclxuICAgICAgICB0aGlzLnJlbW92ZUF0KGluZGV4KTtcclxuICAgICAgICB0aGlzLnB1dChpbmRleCwgdCk7XHJcbiAgICB9XHJcbiAgICByZWxvYWRBbGwoKSB7XHJcbiAgICAgICAgdGhpcy5zZXQodGhpcy5zbGljZSgpKTtcclxuICAgIH1cclxuICAgIGNvcHkoYSwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIGEgPSBuZXcgTCh0aGlzLm1hcChiID0gYSkpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgYS5zZXQodGhpcy5tYXAoYikpO1xyXG4gICAgICAgIHRoaXMub24oJ3VwZGF0ZScsIGUgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGUudHApIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2luc2VydCc6XHJcbiAgICAgICAgICAgICAgICAgICAgYS5wdXQoZS5zdGFydCwgLi4uZS5pdGVtcy5tYXAoKHYsIGkpID0+IGIodiwgZS5zdGFydCArIGkpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyZW1vdmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIGEucmVtb3ZlQXQoZS5zdGFydCwgZS5pdGVtcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc2V0JzpcclxuICAgICAgICAgICAgICAgICAgICBhLnNldChlLml0ZW1zLm1hcChiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdlZGl0JzpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIm5vdCBpbXBsZW1lbnRlZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcbiAgICB0cnlQdXNoKGl0ZW0pIHtcclxuICAgICAgICBsZXQgayA9IGl0ZW1bdGhpcy5rZXldO1xyXG4gICAgICAgIGlmICh0aGlzLmJ5S2V5KGspKVxyXG4gICAgICAgICAgICB0aGlzLmVkaXQoeyBpdGVtOiBrLCBwcm9wczogaXRlbSB9KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMucHVzaChpdGVtKTtcclxuICAgIH1cclxuICAgIGVkaXQoaXRlbSkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuaXRlbUluZGV4KGl0ZW0uaXRlbSk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICBpdGVtLml0ZW0gPSBPYmplY3QuYXNzaWduKGl0ZW0uaXRlbSA9IHRoaXNbaW5kZXhdLCBpdGVtLnByb3BzKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdlZGl0JywgW2l0ZW1dKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBlZGl0SXRlbXMoLi4uaXRlbXMpIHtcclxuICAgICAgICBsZXQgYTtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuaW5kZXhCeUtleShpdGVtW3RoaXMua2V5XSk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbaW5kZXhdID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIGEgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZWRpdCcsIG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGdldChpZCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzW2ldO1xyXG4gICAgICAgICAgICBpZiAodmFsdWVbdGhpcy5rZXldID09IGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaGFzKGlkKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzW2ldW3RoaXMua2V5XSA9PT0gaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaXRlbUluZGV4KGFyZywgZnJvbUluZGV4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5KVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gZnJvbUluZGV4IHx8IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gYXJnIHx8IHZhbHVlW3RoaXMua2V5XSA9PSBhcmcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBmcm9tSW5kZXggfHwgMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBhcmcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBieUtleSh2YWx1ZSwga2V5ID0gdGhpcy5rZXkpIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZmluZCh2ID0+IHZba2V5XSA9PSB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpbmRleEJ5S2V5KHZhbHVlLCBrZXkgPSB0aGlzLmtleSkge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5maW5kSW5kZXgodiA9PiB2W2tleV0gPT0gdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgbWFwKGNhbGxiYWNrZm4sIHRoaXNBcmcpIHtcclxuICAgICAgICB2YXIgciA9IEFycmF5KHRoaXMubGVuZ3RoKTtcclxuICAgICAgICBpZiAoIXRoaXNBcmcpXHJcbiAgICAgICAgICAgIHRoaXNBcmcgPSB0aGlzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgci5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgcltpXSA9IGNhbGxiYWNrZm4uY2FsbCh0aGlzQXJnLCB0aGlzW2ldLCBpLCB0aGlzKTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuICAgIGZpbHRlcihjYWxsYmFja2ZuLCB0aGlzQXJnKSB7XHJcbiAgICAgICAgbGV0IHIgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFja2ZuLmNhbGwodGhpc0FyZywgdGhpc1tpXSwgaSwgdGhpcykpXHJcbiAgICAgICAgICAgICAgICByLnB1c2godGhpc1tpXSk7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcbiAgICBncm91cChrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nW2tleV0gfHwgdGhpcy5hZGRHcm91cChrZXkpO1xyXG4gICAgfVxyXG4gICAgb24oZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudCA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBldmVudDtcclxuICAgICAgICAgICAgZXZlbnQgPSBcInVwZGF0ZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvbih0aGlzLl9fZWgsIGV2ZW50LCBjYWxsYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBvZmYoZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb2ZmKHRoaXMuX19laCwgZXZlbnQsIGNhbGxiYWNrKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGVtaXQoZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5zbGlwKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZW1pdCh0aGlzLl9fZWgsIHRoaXMsIGV2ZW50LCBkYXRhKTtcclxuICAgIH1cclxuICAgIHRhZyhuYW1lKSB7IHJldHVybiB0aGlzLmdldFRhZyhuYW1lKT8udmFsdWU7IH1cclxuICAgIGdldFRhZyhuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnRhZ3MgfHwgKHRoaXMudGFncyA9IHt9KSlbbmFtZV07XHJcbiAgICB9XHJcbiAgICBzZXRUYWcoa2V5LCB2YWx1ZSwgcmVwbGFjZSkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IG51bGwsIG9sZFZhbHVlID0gdGhpcy5nZXRUYWcoa2V5KSwgbmV3VmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKCFvbGRWYWx1ZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy50YWdzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuaXRlbUluZGV4KHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oeyBtZXNzYWdlOiBcInZhbHVlIGlzIG5vdCBpbiBsaXN0XCIsIHZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9sZFZhbHVlICYmIGluZGV4ID09IG9sZFZhbHVlLmluZGV4KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpc1tpbmRleF07XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgcmVwbGFjZTogcmVwbGFjZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnRhZ3Nba2V5XSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVtaXQoKCd0YWc6JyArIGtleSksIHZhbHVlKTtcclxuICAgICAgICB0aGlzLmVtaXQoXCJ1cGRhdGVcIiwge1xyXG4gICAgICAgICAgICB0cDogXCJ0YWdcIixcclxuICAgICAgICAgICAgdGFnOiBrZXksXHJcbiAgICAgICAgICAgIG5ld0k6IGluZGV4LFxyXG4gICAgICAgICAgICBvbGRJOiBvbGRWYWx1ZSA/IG9sZFZhbHVlLmluZGV4IDogbnVsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgb250YWcoa2V5LCBjYWxsYmFjaykge1xyXG4gICAgICAgIG9uKHRoaXMuX19laCwgYHRhZzoke2tleX1gLCBjYWxsYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB1bmJpbmQocykge1xyXG4gICAgICAgIGxldCBiID0gdGhpcy5iaW5kcztcclxuICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICBsZXQgaSA9IGIuZmluZEluZGV4KGIgPT4gYlswXSA9PSBzKTtcclxuICAgICAgICAgICAgaWYgKGkgIT0gLTEpXHJcbiAgICAgICAgICAgICAgICBiLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBiaW5kKHMsIG9wdHMgPSB7fSkge1xyXG4gICAgICAgIGxldCBib25kID0gdHlwZW9mIG9wdHMgPT0gXCJmdW5jdGlvblwiID8geyBpbnNlcnQ6IG9wdHMgfSA6IG9wdHM7XHJcbiAgICAgICAgbGV0IGVtcHR5ID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChib25kLmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IGJvbmQuZW1wdHkuY2FsbCh0aGlzLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodilcclxuICAgICAgICAgICAgICAgICAgICBzLnNldCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBpbnNlcnQgPSAoaXRlbXMsIHN0YXJ0KSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gaXRlbXNbaV0sIHYgPSBib25kLmluc2VydCA/IGJvbmQuaW5zZXJ0LmNhbGwodGhpcywgaXRlbSwgc3RhcnQgKyBpLCBzKSA6IGl0ZW07XHJcbiAgICAgICAgICAgICAgICBpZiAodilcclxuICAgICAgICAgICAgICAgICAgICBzLnBsYWNlKHN0YXJ0ICsgaSwgdik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCByZW1vdmUgPSAoaXRlbXMsIHN0YXJ0KSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChib25kLnJlbW92ZSA/IGJvbmQucmVtb3ZlLmNhbGwodGhpcywgaXRlbXNbaV0sIHN0YXJ0ICsgaSwgcykgOiB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHMudW5wbGFjZShzdGFydCArIGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZm4gPSAob3B0cykgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wdHMudHApIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2luc2VydCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09IG9wdHMuaXRlbXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0KG9wdHMuaXRlbXMsIG9wdHMuc3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmVtb3ZlJzpcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmUob3B0cy5pdGVtcywgb3B0cy5zdGFydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0YWcnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChib25kLnRhZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0cy5vbGRJICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25kLnRhZy5jYWxsKHRoaXMsIHMuY2hpbGQob3B0cy5vbGRJKSwgZmFsc2UsIG9wdHMudGFnLCB0aGlzW29wdHMub2xkSV0sIG9wdHMub2xkSSwgcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRzLm5ld0kgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmQudGFnLmNhbGwodGhpcywgcy5jaGlsZChvcHRzLm5ld0kpLCB0cnVlLCBvcHRzLnRhZywgdGhpc1tvcHRzLm5ld0ldLCBvcHRzLm5ld0ksIHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3NldCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvbmQuY2xlYXIgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUob3B0cy5yZW1vdmVkLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChib25kLmNsZWFyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib25kLmNsZWFyKHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0cy5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdHMucmVtb3ZlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0KG9wdHMuaXRlbXMsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5KHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uKCd1cGRhdGUnLCBmbik7XHJcbiAgICAgICAgaWYgKGJvbmQuZ3JvdXBzKVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGJvbmQuZ3JvdXBzID09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGcgaW4gdGhpcy5nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmluZEdyb3VwKHMsIGcsIGJvbmQuZ3JvdXBzKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZyBpbiBib25kLmdyb3VwcylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbmRHcm91cChzLCBnLCBib25kLmdyb3Vwc1tnXSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYmluZHMpXHJcbiAgICAgICAgICAgIHRoaXMuYmluZHMucHVzaChbcywgZm5dKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuYmluZHMgPSBbW3MsIGZuXV07XHJcbiAgICAgICAgaW5zZXJ0KHRoaXMsIDApO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG4gICAgYmluZEdyb3VwKHMsIGdyb3VwS2V5LCBib25kKSB7XHJcbiAgICAgICAgbGV0IGcgPSB0aGlzLmdbZ3JvdXBLZXldO1xyXG4gICAgICAgIGlmICghZylcclxuICAgICAgICAgICAgdGhyb3cgYGdyb3VwICcke2dyb3VwS2V5fScgbm90IGZvdW5kYDtcclxuICAgICAgICBsZXQgY2FsbCA9IChpdGVtcywgaW5kZXhlcywgc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gaW5kZXhlc1tpXTtcclxuICAgICAgICAgICAgICAgIGJvbmQuY2FsbCh0aGlzLCBzLmNoaWxkKGlkKSwgc3RhdGUsIGdyb3VwS2V5LCBpdGVtc1tpXSwgaWQsIHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBnLm9uKFwic2V0XCIsIGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5hZGQpXHJcbiAgICAgICAgICAgICAgICBjYWxsKGUuYWRkLCBlLmFkZElkLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGUucmVtb3ZlKVxyXG4gICAgICAgICAgICAgICAgY2FsbChlLnJlbW92ZSwgZS5yZW12SWQsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXQgW1N5bWJvbC5zcGVjaWVzXSgpIHsgcmV0dXJuIEFycmF5OyB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbyhhcnJheSwgb3B0aW9ucykge1xyXG4gICAgaWYgKGFycmF5ICYmICFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIG9wdGlvbnMgPSBhcnJheTtcclxuICAgICAgICBhcnJheSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyYXkgaW5zdGFuY2VvZiBMKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZylcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGcgb2Ygb3B0aW9ucy5nKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGcgaW4gYXJyYXkuZykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5LmFkZEdyb3VwKGcpO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zb3J0cylcclxuICAgICAgICAgICAgICAgIHRocm93IFwibm90IGltcGxlbWVudGVkXCI7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmtleSAmJiBhcnJheS5rZXkgJiYgYXJyYXkua2V5ICE9IG9wdGlvbnMua2V5KVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJpbmNvbnBhdGlibGUgbGlzdHNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBuZXcgTChhcnJheSwgb3B0aW9ucyk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b3JyYXkuanMubWFwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJsaWJzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3RoZXVzX3BvcnRmb2xpb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0aGV1c19wb3J0Zm9saW9cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuLi9nYWxodWkvZ2FsaHVpLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4uL2dhbGhvL2dhbGhvLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4uL29ycmF5L29ycmF5LmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4uL2VudGl0eS9lbnRpdHkuanNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuLi9pbnV0aWwvaW51dGlsLmpzXCIpO1xuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==