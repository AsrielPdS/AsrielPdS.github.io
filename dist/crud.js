"use strict";
(self["webpackChunktheus_portfolio"] = self["webpackChunktheus_portfolio"] || []).push([["crud"],{

/***/ "./src/crud.ts":
/*!*********************!*\
  !*** ./src/crud.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entity */ "../entity/entity.js");
/* harmony import */ var entity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(entity__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var galhud_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! galhud/fields */ "../galhud/fields.ts");
/* harmony import */ var galhud_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! galhud/tools */ "../galhud/tools.ts");
/* harmony import */ var galhud_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! galhud/table */ "../galhud/table.ts");
/* harmony import */ var galhui_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! galhui/menu */ "../galhui/menu.ts");
/* harmony import */ var inutil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inutil */ "../inutil/inutil.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./src/index.ts");









(0,inutil__WEBPACK_IMPORTED_MODULE_5__.ex)(entity__WEBPACK_IMPORTED_MODULE_0__.$, {
    create: (i) => (0,inutil__WEBPACK_IMPORTED_MODULE_5__.extend)(i, {
        insert: true,
        remove: true,
        update: true,
        select: true,
    })
});
const toolbar = (bond) => (0,galhui_menu__WEBPACK_IMPORTED_MODULE_6__.menubar)((0,galhud_tools__WEBPACK_IMPORTED_MODULE_2__.search)(bond), galhui_menu__WEBPACK_IMPORTED_MODULE_6__.menubar.right(), (0,galhud_tools__WEBPACK_IMPORTED_MODULE_2__.singleSort)(bond));
(async function () {
    var _a;
    (0,_index__WEBPACK_IMPORTED_MODULE_4__.init)();
    (0,galhud_fields__WEBPACK_IMPORTED_MODULE_1__.addcbFmts)();
    (0,galhud_fields__WEBPACK_IMPORTED_MODULE_1__.addBaseTypes)();
    console.log(entity__WEBPACK_IMPORTED_MODULE_0__.fieldTypes);
    (0,galho__WEBPACK_IMPORTED_MODULE_7__.css)((0,galhud_table__WEBPACK_IMPORTED_MODULE_3__.style)(), _index__WEBPACK_IMPORTED_MODULE_4__.cssTag);
    (0,galho__WEBPACK_IMPORTED_MODULE_7__.css)((0,galhud_tools__WEBPACK_IMPORTED_MODULE_2__.style)(), _index__WEBPACK_IMPORTED_MODULE_4__.cssTag);
    const enums = {
        gender: ["M", "F"]
    };
    var _db;
    const getdb = () => new Promise((cb) => {
        if (_db)
            cb(_db);
        else {
            let r = indexedDB.open("crud");
            r.onsuccess = () => { cb(_db = r.result); };
            r.onupgradeneeded = (e) => {
                let db = r.result;
                let store = db.createObjectStore("cliente", {
                    keyPath: "id",
                    autoIncrement: true
                });
                store.transaction.oncomplete = function (event) {
                    var store = db.transaction("cliente", "readwrite").objectStore("cliente");
                    let defCostumers = [
                        { "primeiro_nome": "António Carlos", "nome_do_meio": "Dias dos Santos", "ultimo_nome": "Martinho", "sexo": "m", "idade": "2008-02-18", "bi": "6817" },
                        { "primeiro_nome": "Adalgisa Celeste Tavares", "nome_do_meio": null, "ultimo_nome": "e Silva", "sexo": "f", "idade": "2004-12-11", "bi": "BI" },
                        { "primeiro_nome": "Olsene Emanuel Tavares ", "nome_do_meio": null, "ultimo_nome": "e Silva", "sexo": "m", "idade": "2009-02-25", "bi": "BI" },
                        { "primeiro_nome": "test", "nome_do_meio": null, "ultimo_nome": "francisco", "sexo": "m", "idade": "2014-02-02", "bi": "d" },
                        { "primeiro_nome": "Delfina Haniela ", "nome_do_meio": "António", "ultimo_nome": "António do Amaral", "sexo": "f", "idade": "2015-05-20", "bi": "10206/2015" },
                        { "primeiro_nome": "Victor Esmael", "nome_do_meio": "Pereira", "ultimo_nome": "Lourenço", "sexo": "f", "idade": "2012-11-29", "bi": "1876/2013" },
                        { "primeiro_nome": "Rita de Câssia da Silva ", "nome_do_meio": null, "ultimo_nome": "Lopes Fernandes ", "sexo": "f", "idade": "2012-09-21", "bi": "BI" },
                        { "primeiro_nome": "Josimar Jair António", "nome_do_meio": null, "ultimo_nome": "André", "sexo": "m", "idade": "2010-09-19", "bi": "cédula" },
                        { "primeiro_nome": "Samuel Mbungu", "nome_do_meio": null, "ultimo_nome": "Tene", "sexo": "m", "idade": "2012-11-10", "bi": "cédula" },
                        { "primeiro_nome": "Esaú Henriques ", "nome_do_meio": null, "ultimo_nome": "Tomé", "sexo": "m", "idade": "2011-07-22", "bi": "cédula" },
                        { "primeiro_nome": "Israel Pascoal de Campos ", "nome_do_meio": null, "ultimo_nome": "Lourenço", "sexo": "m", "idade": "2015-09-03", "bi": "cédula" },
                        { "primeiro_nome": "Gilsia Rafaela Fernandes ", "nome_do_meio": null, "ultimo_nome": "Neto ", "sexo": "f", "idade": "2009-04-29", "bi": "BI" },
                        { "primeiro_nome": "Wesley Malembe Pereira ", "nome_do_meio": null, "ultimo_nome": "Manuel", "sexo": "m", "idade": "2013-06-08", "bi": "cédula" },
                        { "primeiro_nome": "Cilene Emanuela António", "nome_do_meio": null, "ultimo_nome": "João", "sexo": "f", "idade": "2012-09-22", "bi": "cédula" },
                        { "primeiro_nome": "Cilana Francisca António ", "nome_do_meio": null, "ultimo_nome": "João", "sexo": "f", "idade": "2014-09-21", "bi": "cédula" },
                        { "primeiro_nome": "Nguinamau Elifelete Joaquim", "nome_do_meio": null, "ultimo_nome": "Malamba", "sexo": "m", "idade": "2015-04-29", "bi": "cédula" },
                        { "primeiro_nome": "Alicia Elisama Joaquim ", "nome_do_meio": null, "ultimo_nome": "Malamba", "sexo": "f", "idade": "2012-03-29", "bi": "cédula" },
                        { "primeiro_nome": "Pedro Joaquim ", "nome_do_meio": null, "ultimo_nome": "Malamba", "sexo": "m", "idade": "2008-08-03", "bi": "BI" },
                        { "primeiro_nome": "Aneti Tchissola José", "nome_do_meio": null, "ultimo_nome": "Alberto", "sexo": "f", "idade": "2014-01-08", "bi": "cédula" },
                        { "primeiro_nome": "Ismael Marcelo de Campos ", "nome_do_meio": null, "ultimo_nome": "Lourenço", "sexo": "m", "idade": "2009-07-01", "bi": "BI" },
                        { "primeiro_nome": "Zulmira  Simões ", "nome_do_meio": null, "ultimo_nome": "sompila", "sexo": "f", "idade": "2010-06-15", "bi": "BI" },
                        { "primeiro_nome": "Rosa Samara Neto de ", "nome_do_meio": null, "ultimo_nome": "Sousa ", "sexo": "f", "idade": "2014-01-23", "bi": "Cedula " },
                        { "primeiro_nome": "Telma Abrantes ", "nome_do_meio": null, "ultimo_nome": "Joaquim ", "sexo": "f", "idade": "2010-03-03", "bi": "BI" },
                        { "primeiro_nome": "Octávio António ", "nome_do_meio": null, "ultimo_nome": "Gomes ", "sexo": "m", "idade": "2014-01-23", "bi": "Boletim de nascimento" },
                        { "primeiro_nome": "Gilcia Rafaela Fernandes", "nome_do_meio": null, "ultimo_nome": "Neto", "sexo": "m", "idade": "2010-04-29", "bi": "cédula" },
                        { "primeiro_nome": "Pedro Salvador ", "nome_do_meio": null, "ultimo_nome": "Mateus", "sexo": "m", "idade": "2011-01-26", "bi": "cédula" },
                        { "primeiro_nome": "Rosalina Karine", "nome_do_meio": null, "ultimo_nome": "Pedro Lupale", "sexo": "f", "idade": "2009-02-24", "bi": "BI" },
                        { "primeiro_nome": "Eliandra Nayra António", "nome_do_meio": null, "ultimo_nome": "Jorge Caetano", "sexo": "f", "idade": "2016-03-08", "bi": "Cédula" },
                        { "primeiro_nome": "Azael Alberto da Silva ", "nome_do_meio": null, "ultimo_nome": "Gombo", "sexo": "m", "idade": "2014-02-14", "bi": "Cedula" },
                        { "primeiro_nome": "Elizandra Madalena ", "nome_do_meio": null, "ultimo_nome": "Licaxe Baptista ", "sexo": "f", "idade": "2012-02-19", "bi": "cédula" },
                        { "primeiro_nome": "Bernardo Manuel ", "nome_do_meio": null, "ultimo_nome": "Dias Pacheco ", "sexo": "m", "idade": "2014-10-15", "bi": "cedula" },
                        { "primeiro_nome": "Luis Jorge", "nome_do_meio": null, "ultimo_nome": "Pedro de Oliveira", "sexo": "m", "idade": "2005-09-10", "bi": "009155904LA045" },
                        { "primeiro_nome": "Daniela Siara Hango", "nome_do_meio": null, "ultimo_nome": "Semedo", "sexo": "f", "idade": "2006-08-14", "bi": "BI" },
                        { "primeiro_nome": "Carolina Makiesse Eduardo", "nome_do_meio": null, "ultimo_nome": "Yombe", "sexo": "f", "idade": "2015-06-14", "bi": "Cedula " },
                        { "primeiro_nome": "Luana Alexandre Tavares ", "nome_do_meio": null, "ultimo_nome": "Agostinho", "sexo": "f", "idade": "2009-01-13", "bi": "BI" },
                        { "primeiro_nome": "Branca Nelcia Camoinho", "nome_do_meio": null, "ultimo_nome": "Carlos", "sexo": "f", "idade": "2016-07-31", "bi": "CEDULA" },
                        { "primeiro_nome": "Micaela Kieza", "nome_do_meio": null, "ultimo_nome": "Sebastião Domingos ", "sexo": "f", "idade": "2015-03-31", "bi": "Cedula " },
                        { "primeiro_nome": "Rosa ", "nome_do_meio": "Paloma", "ultimo_nome": "Afonso de Oliveira", "sexo": "f", "idade": "2008-08-03", "bi": "009345388LA044" },
                        { "primeiro_nome": "Clarissa da Graça da Cruz", "nome_do_meio": null, "ultimo_nome": "Costa", "sexo": "f", "idade": "2011-07-11", "bi": "Cédula" },
                        { "primeiro_nome": "Micael", "nome_do_meio": "Luvito", "ultimo_nome": "Sebastiao", "sexo": "m", "idade": "2008-03-21", "bi": "009523727LA047" },
                        { "primeiro_nome": "Carlos Mavakala Pereira", "nome_do_meio": null, "ultimo_nome": "Morais", "sexo": "m", "idade": "2014-04-02", "bi": "cédula" },
                        { "primeiro_nome": "Deusa", "nome_do_meio": null, "ultimo_nome": "Ferreirra Cassul", "sexo": "f", "idade": "2008-06-15", "bi": "008405817LA043" }
                    ];
                    defCostumers.forEach(function (customer) {
                        store.add(customer);
                    });
                };
            };
        }
    });
    entity__WEBPACK_IMPORTED_MODULE_0__.$.select = async function (key, bond) {
        let db = await getdb();
        return new Promise(cb => {
            let r = [];
            db.transaction(key).objectStore(key).openCursor().onsuccess = (e) => {
                if (e.target.result)
                    r.push(e.target.result);
                else
                    cb(r);
            };
        });
    };
    entity__WEBPACK_IMPORTED_MODULE_0__.$.enumView = (key, val) => enums[key][val];
    entity__WEBPACK_IMPORTED_MODULE_0__.$["enum"] = (key) => enums[key];
    (0,entity__WEBPACK_IMPORTED_MODULE_0__.create)("cliente", [
        (0,galhud_fields__WEBPACK_IMPORTED_MODULE_1__.text)("nome", { req: true }),
        (0,galhud_fields__WEBPACK_IMPORTED_MODULE_1__.text)("subre_nome", { req: true }),
        (0,galhud_fields__WEBPACK_IMPORTED_MODULE_1__.number)("idade", { req: false }),
        (0,galhud_fields__WEBPACK_IMPORTED_MODULE_1__.radio)("sexo", "gender")
    ]);
    let bond = await (0,entity__WEBPACK_IMPORTED_MODULE_0__.bind)({
        key: "cliente",
    });
    (0,galho__WEBPACK_IMPORTED_MODULE_7__.get)("#sample").replace((0,galho__WEBPACK_IMPORTED_MODULE_7__.div)("column", [
        toolbar(bond),
        (0,galhud_tools__WEBPACK_IMPORTED_MODULE_2__.table)(bond, {}),
        (0,galhui_menu__WEBPACK_IMPORTED_MODULE_6__.menubar)((0,galho__WEBPACK_IMPORTED_MODULE_7__.g)((0,galhud_tools__WEBPACK_IMPORTED_MODULE_2__.pagging)(bond, true, true, true), "mb"), (_a = (0,galhud_tools__WEBPACK_IMPORTED_MODULE_2__.totals)(bond.select(0), null)) === null || _a === void 0 ? void 0 : _a.cls("mb"))
    ]));
})();


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainBar": () => (/* binding */ mainBar),
/* harmony export */   "path": () => (/* binding */ path),
/* harmony export */   "cssTag": () => (/* binding */ cssTag),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var galhui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! galhui */ "../galhui/galhui.js");
/* harmony import */ var galhui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(galhui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inutil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inutil */ "../inutil/inutil.js");
/* harmony import */ var galhui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! galhui/core */ "../galhui/core.ts");




function mainBar() {
    return (0,galhui__WEBPACK_IMPORTED_MODULE_0__.menubar)((0,galho__WEBPACK_IMPORTED_MODULE_1__.g)("a", "hd", (0,galhui__WEBPACK_IMPORTED_MODULE_0__.sentence)("Asriel Pires({portfolio})")), (0,galhui__WEBPACK_IMPORTED_MODULE_0__.dropdown)("Sistemas", []), (0,galhui__WEBPACK_IMPORTED_MODULE_0__.dropdown)("Bibliotecas", []), (0,galhui__WEBPACK_IMPORTED_MODULE_0__.dropdown)("Applica��es", []));
}
const path = galhui__WEBPACK_IMPORTED_MODULE_0__.body.attr("data-path");
const cssTag = (0,galho__WEBPACK_IMPORTED_MODULE_1__.g)("style").addTo(document.head);
function init() {
    (0,inutil__WEBPACK_IMPORTED_MODULE_2__.deepSgn)(galhui_core__WEBPACK_IMPORTED_MODULE_3__.theme, (0,galhui_core__WEBPACK_IMPORTED_MODULE_3__.basic)());
    (0,galho__WEBPACK_IMPORTED_MODULE_1__.css)((0,galhui__WEBPACK_IMPORTED_MODULE_0__.style)(), cssTag);
    (0,galho__WEBPACK_IMPORTED_MODULE_1__.css)({
        "html,body": {
            height: "100vh",
            overflow: "hidden"
        }
    }, cssTag);
}


/***/ }),

/***/ "../form/form.ts":
/*!***********************!*\
  !*** ../form/form.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input),
/* harmony export */   "bots": () => (/* binding */ bots),
/* harmony export */   "errors": () => (/* binding */ errors),
/* harmony export */   "FormBase": () => (/* binding */ FormBase),
/* harmony export */   "Form": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var inutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inutil */ "../inutil/inutil.js");


class Input extends galho__WEBPACK_IMPORTED_MODULE_0__.E {
    constructor(i) {
        super(i);
        i.text || (i.text = i.key);
        (0,inutil__WEBPACK_IMPORTED_MODULE_1__.isU)(i.value) && (i.value = this.def);
    }
    get value() { return this.i.value; }
    get key() { return this.i.key; }
    get def() { return (0,inutil__WEBPACK_IMPORTED_MODULE_1__.def)(this.i.def, this.nullValue); }
    setValue(value) {
        this.set("value", value);
    }
    get inline() { return this.ctx ? this.ctx.inline : false; }
    reset() {
        this.setValue(this.def);
        return this;
    }
    clear() {
        this.setValue(this.nullValue);
    }
    isDef(value = this.value, def = this.def) {
        return def === value;
    }
    isNull(value = this.value) { return this.isDef(this.value, this.nullValue); }
    observeVisited(handler) {
        (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)(this).focusout(() => {
            this.visited = true;
            handler();
        });
    }
    get disabled() { return this._off; }
    set disabled(state) {
        (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)(this).attr("disabled", this._off = state);
    }
    error(state) {
        (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)(this).cls("_e", state);
        return this;
    }
    get valid() {
        let e = this.validate(this.value);
        return e.length ? e : null;
    }
    validate(value) {
        let i = this.i, errs = [];
        if (i.req && this.isNull(value))
            errs.push("req");
        return errs;
    }
    submit(data) {
        data[this.i.key] = this.value;
    }
    get nullValue() { return null; }
}
const bots = {};
const errors = {};
class FormBase extends galho__WEBPACK_IMPORTED_MODULE_0__.E {
    constructor(i, inputs) {
        super(i);
        this.errors = {};
        this.inputs = inputs.map(input => {
            input.on(() => {
                input.visited && this.setErrors(input.key, input.valid);
                this.emit("input", input);
            });
            input.observeVisited(() => this.setErrors(input.key, input.valid));
            return input;
        });
        if (i.bots)
            for (let bot of i.bots) {
                let srcs = {};
                let calc = () => bots[bot.tp].call(this, srcs, bot);
                for (let src of bot.srcs)
                    srcs[src] = this.getData(src, calc);
            }
    }
    get isDef() {
        for (let input of this.inputs)
            if (!input.isDef())
                return false;
        return true;
    }
    input(key) { return this.inputs.find(f => f.key == key); }
    setErrors(key, errors) {
        var _a;
        this.errors[key] = errors;
        (_a = this.input(key)) === null || _a === void 0 ? void 0 : _a.error();
    }
    valid(omit, focus = !omit) {
        for (let input of this.inputs) {
            let v = input.valid;
            this.setErrors(input.key, input.valid);
            if (v) {
                if (focus)
                    input.$.focus();
                return false;
            }
        }
        return true;
    }
    focus() {
        for (let input of this.inputs)
            if (!input.disabled) {
                input.focus();
                break;
            }
        return this;
    }
    get def() {
        let r = {};
        for (let { key, def } of this.inputs)
            r[key] = def;
        return r;
    }
    set def(value) {
        this.inputs.forEach(i => i.set("def", value[i.key]));
    }
    reset() {
        for (let field of this.inputs)
            field.reset();
        return this;
    }
    clear() {
        for (let field of this.inputs)
            field.clear();
        return this;
    }
    data(edited, required) {
        let inputs = this.inputs;
        let value = Object.assign({}, this.i.hidden);
        for (let input of edited ? inputs.filter(i => (required && i.i.req) || !i.isDef()) : inputs)
            input.submit(value);
        return value;
    }
    formData(edited, required) {
        let r = new FormData(), data = this.data(edited, required);
        for (let key in data)
            r.append(key, data[key]);
        return r;
    }
    getData(key, onupdate) {
        let i = this.i, target = this.inputs.find(f => f.key == key);
        if (target) {
            onupdate && target.on(onupdate);
        }
        else if (i.hidden && key in i.hidden)
            target = i.hidden[key];
        else if (i.meta && key in i.meta)
            target = i.meta[key];
        else
            target = i.parent ? i.parent.getData(key, onupdate) : null;
        return target;
    }
    renderErrors() {
        let t = this.errors, result = [];
        for (let key in t) {
            let i = this.input(key);
            for (let error of t[key]) {
                (typeof error == "string") && (error = { tp: error });
                result.push((0,galho__WEBPACK_IMPORTED_MODULE_0__.div)(0, [
                    i && [i.i.text, ": "],
                    errors[error.tp](),
                    error.info && (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("sub", 0, error.info),
                ]));
            }
        }
        return result;
    }
}
class Form extends FormBase {
    constructor(i, inputs) {
        super(i, inputs);
        this.on('input', (input) => setTimeout(() => (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)(input).parent().try(p => p.attr("edited", !input.isDef))));
        this._errorDiv = i.errorDiv || (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)("_e");
    }
    view() {
        let { intern: i, label } = this.i;
        return (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)(i ? 'div' : 'form', "form", [
            this.inputs.map(input => {
                let i = input.i, r, lb = (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)('label', 0, i.text).props({ htmlFor: i.key, title: i.text });
                if (i.outline)
                    r = (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)("i", [
                        lb, i, (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)('inf')
                    ]);
                else
                    r = (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)("i", [
                        lb.css('width', `${label}%`), i, !!i.req && (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)('span', "req", '*'),
                    ]);
                return r;
            }),
            this._errorDiv
        ]);
    }
    get inline() { return false; }
    setErrors(key, errors) {
        super.setErrors(key, errors);
        this._errorDiv.set(this.renderErrors());
    }
}
Form.default = {
    label: 40
};


/***/ }),

/***/ "../form/inputs.ts":
/*!*************************!*\
  !*** ../form/inputs.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "validateNumber": () => (/* binding */ validateNumber),
/* harmony export */   "number": () => (/* binding */ number),
/* harmony export */   "checkbox": () => (/* binding */ checkbox),
/* harmony export */   "TimeInput": () => (/* binding */ TimeInput),
/* harmony export */   "time": () => (/* binding */ time),
/* harmony export */   "DateInput": () => (/* binding */ DateInput),
/* harmony export */   "date": () => (/* binding */ date),
/* harmony export */   "RadioInput": () => (/* binding */ RadioInput),
/* harmony export */   "radio": () => (/* binding */ radio),
/* harmony export */   "SelectInput": () => (/* binding */ SelectInput),
/* harmony export */   "MultselectInput": () => (/* binding */ MultselectInput),
/* harmony export */   "defSelInput": () => (/* binding */ defSelInput)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "../form/form.ts");
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var galhui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! galhui/core */ "../galhui/core.ts");
/* harmony import */ var galhui_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! galhui/select */ "../galhui/select.ts");
/* harmony import */ var galhui_output__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! galhui/output */ "../galhui/output.ts");
/* harmony import */ var inutil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inutil */ "../inutil/inutil.js");
/* harmony import */ var orray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! orray */ "../orray/orray.js");
/* harmony import */ var galhui_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! galhui/icon */ "../galhui/icon.ts");








class TextInput extends _form__WEBPACK_IMPORTED_MODULE_0__.Input {
    view() {
        var i = this.i;
        if (i.input == 'textarea') {
            let ta = this.inputBind((0,galho__WEBPACK_IMPORTED_MODULE_2__.g)('textarea', "_v").props({
                name: i.key,
                placeholder: i.ph || ''
            }), 'value').on('keydown', (e) => {
                if (e.key == "Enter") {
                    if (e.ctrlKey)
                        e.preventDefault();
                    else
                        e.stopPropagation();
                }
            });
            return ta.cls("in");
        }
        else
            return this.inputBind((0,galho__WEBPACK_IMPORTED_MODULE_2__.g)("input", "in").props({
                type: i.input || 'text',
                name: i.key, placeholder: i.ph || ''
            }), 'value');
    }
    validate(value) {
        var i = this.i, errs = [];
        if (value) {
            if (i.pattern && !i.pattern.test(value))
                errs.push({ tp: "invalid_format" });
            if (i.max && value.length > i.max)
                errs.push({ tp: "text_too_long", params: { max: i.max } });
            if (i.min && value.length < i.min)
                errs.push({ tp: "text_too_short", params: { min: i.min } });
        }
        else if (i.req)
            errs.push({ tp: "req" });
        return errs;
    }
    focus() {
        if (this.i.input == 'textarea' && this.inline)
            (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)(this).child().e.focus();
        else
            (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)(this).focus();
        return this;
    }
}
const text = (key, req) => new TextInput({ key, req });
class NumberInput extends _form__WEBPACK_IMPORTED_MODULE_0__.Input {
    view() {
        let i = this.i;
        return this.inputBind((0,galho__WEBPACK_IMPORTED_MODULE_2__.g)("input", "in").props({
            type: 'number',
            name: i.key,
            step: i.integer ? 1 : 'any',
            placeholder: this.inline ? i.text : i.ph || '',
        }), 'value', 'value', 'valueAsNumber');
    }
    validate(value) {
        return validateNumber(this.i, value);
    }
    calc(...values) {
        var r = 0;
        for (let value of values)
            r += value || 0;
        return r;
    }
}
function validateNumber(i, value) {
    let errs = [];
    if (value == null) {
        if (i.req)
            errs.push({ tp: "req" });
    }
    else {
        if (i.integer && Math.floor(value) != value)
            errs.push({ tp: "is_decimal" });
        let max = i.max, min = i.min, omin = i.openMin, omax = i.openMax;
        if ((max != null) && value > max)
            errs.push({ tp: "number_too_big", params: { max: max } });
        else if (omax != null && value >= omax)
            errs.push({ tp: "number_too_big", params: { max: omax } });
        if ((min != null) && value < min)
            errs.push({ info: "number_too_small", params: { min: min } });
        else if (omin != null && value <= omin)
            errs.push({ info: "number_too_small", params: { min: omin } });
    }
    return errs;
}
const number = (key, req) => new NumberInput({ key, req });
class CheckBoxInput extends _form__WEBPACK_IMPORTED_MODULE_0__.Input {
    view() {
        let i = this.i;
        switch (i.fmt) {
            case "y":
                return this.bind((0,galho__WEBPACK_IMPORTED_MODULE_2__.g)('div', null, [
                    (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)('label', ["cb", "i"], [
                        (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)("input", {
                            type: 'radio',
                            value: 1,
                            name: i.key,
                            oninput: () => {
                                this.set('value', true);
                            }
                        }),
                        'Sim'
                    ]),
                    (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)('label', ["cb", "i"], [
                        (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)("input", {
                            type: 'radio',
                            name: i.key,
                            value: 0,
                            oninput: () => {
                                this.set('value', false);
                            }
                        }),
                        'No'
                    ])
                ]), (s) => {
                    s.child(i.value ? 0 : 1).child().prop('checked', true);
                }, 'value');
            default:
                let inp = (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)("input", {
                    type: 'checkbox',
                    name: i.key,
                    onclick: i.clear && ((e) => {
                        if (e.altKey)
                            setTimeout(() => {
                                this.set('value', null);
                            });
                    }),
                    oninput: () => this.set('value', inp.prop('checked'))
                });
                if (i.fmt != "c")
                    inp.cls("sw");
                return this.bind(inp, (s) => {
                    s.prop('checked', i.value);
                    s.prop('ph', i.ph || (i.value == null ? '' : i.value ? galhui_core__WEBPACK_IMPORTED_MODULE_3__.$.w.yes : galhui_core__WEBPACK_IMPORTED_MODULE_3__.$.w.no));
                }, 'value');
        }
    }
    validate(value) {
        var i = this.i, key = i.key, errs = [];
        if (i.req && value == null)
            errs.push({ tp: "req" });
        return errs;
    }
    static defaultValue() {
        return false;
    }
}
const checkbox = (key, req) => new CheckBoxInput({ key, req });
class TimeInput extends _form__WEBPACK_IMPORTED_MODULE_0__.Input {
    view() {
        let _this = this, i = this.i;
        return this.bind((0,galho__WEBPACK_IMPORTED_MODULE_2__.g)("input").props({
            type: 'time',
            name: i.key,
            placeholder: i.ph,
        }).on('input', function () {
            _this.set('value', this.value + ':00');
        }), (s) => s.prop('value', i.value && i.value.slice(0, 5)), 'value');
    }
    validate(value) {
        let i = this.i, errs = [];
        if (i.req && value == null)
            errs.push({ tp: "req" });
        return errs;
    }
}
const time = (key, req) => new TimeInput({ key, req });
class DateInput extends _form__WEBPACK_IMPORTED_MODULE_0__.Input {
    constructor(i) {
        super(i);
        if ((0,inutil__WEBPACK_IMPORTED_MODULE_4__.isS)(i.def) || (0,inutil__WEBPACK_IMPORTED_MODULE_4__.isN)(i.def))
            i.def = new Date(i.def);
    }
    view() {
        let { tp, key, ph } = this.i;
        return this.inputBind((0,galho__WEBPACK_IMPORTED_MODULE_2__.g)("input").props({
            type: tp,
            name: key,
            placeholder: ph
        }), "value", "valueAsDate");
    }
    validate(value) {
        let i = this.i, errs = [];
        if (i.req && value == null)
            errs.push({ tp: "req" });
        return errs;
    }
    isDef(value = this.value, def = this.def) {
        return def.valueOf() === value.valueOf();
    }
}
const date = (key, tp, req) => new DateInput({ key, req, tp });
class RadioInput extends _form__WEBPACK_IMPORTED_MODULE_0__.Input {
    view() {
        var i = this.i;
        if (this.inline)
            throw "not implemented";
        let options = (0,orray__WEBPACK_IMPORTED_MODULE_1__["default"])(i.options, { converter: v => (0,inutil__WEBPACK_IMPORTED_MODULE_4__.isS)(v) ? { key: v } : v });
        return options.bind(this.bind((0,galho__WEBPACK_IMPORTED_MODULE_2__.div)(i.layout == 'column' ? "mn" : '').on('click', (e) => {
            if (e.altKey) {
                (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)(e.currentTarget).queryAll('input').prop('checked', false);
                this.set('value', null);
            }
        }), (s) => {
            s.queryAll('input').forEach(input => {
                input.checked = input.value == i.value;
            });
        }, 'value').css('position', 'relative'), (value) => (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)('label', ["cb", "i"], [
            (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)("input").props({
                type: 'radio',
                value: value.key,
                name: i.key,
                oninput: () => { this.set('value', value.key); }
            }),
            value.icon && (0,galhui_icon__WEBPACK_IMPORTED_MODULE_5__["default"])(value.icon),
            value.text || value.key
        ]));
    }
}
const radio = (key, options, req) => new RadioInput({ key, req, options });
function autocomplete(pass) {
    switch (pass) {
        case 2:
            return "new-password";
        case 1:
            return "current-password";
        case 0:
            return "off";
    }
}
class PasswordInput extends _form__WEBPACK_IMPORTED_MODULE_0__.Input {
    view() {
        let i = this.i;
        return this.inputBind((0,galho__WEBPACK_IMPORTED_MODULE_2__.g)("input", "in").props({
            type: 'password', name: i.key,
            placeholder: i.ph
        }).attr('autocomplete', autocomplete(i.autoComplete)), 'value');
    }
    validate(value) {
        var i = this.i, key = i.key, errs = [];
        if (i.req && !value)
            errs.push({ tp: "req" });
        return errs;
    }
}
class SelectInput extends _form__WEBPACK_IMPORTED_MODULE_0__.Input {
    view() {
        let i = this.i, input = galhui_core__WEBPACK_IMPORTED_MODULE_3__.$.selectInput(i);
        this.input = input.on('input', (value) => {
            this.set({
                value: value,
                selected: input.options.get(value)
            });
        });
        (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)(input).attr('name', i.key);
        return input;
    }
    validate(value) {
        var i = this.i, errs = [];
        if (i.req && value == null)
            errs.push({ tp: "req" });
        return errs;
    }
    applyoff() {
    }
    set disabled(state) {
        this.input.set('off', this._off = state);
    }
    setValue(value) {
        if (this.input)
            this.input.setValue(value);
        super.setValue(value);
    }
}
class MultselectInput extends _form__WEBPACK_IMPORTED_MODULE_0__.Input {
    view() {
        let i = this.i, input = galhui_core__WEBPACK_IMPORTED_MODULE_3__.$.mselectInput(i);
        i.value = (this.valueList = input.i.value)
            .on('update', () => {
            i.selected = i.value.map(i => input.options.get(i));
            this.set(['value', 'selected']);
        });
        return input;
    }
    isDef(value = this.value, def = this.def || []) {
        if (def.length != value.length)
            return false;
        return value.every(v => def.includes(v));
    }
    setValue(value) {
        if ((0,inutil__WEBPACK_IMPORTED_MODULE_4__.isS)(value))
            value = value.split(';');
        if (this.valueList)
            this.valueList.set(value);
        else
            super.setValue(value || []);
    }
    static defaultValue() { return []; }
}
function defSelInput() {
    galhui_core__WEBPACK_IMPORTED_MODULE_3__.$.selectInput = (i) => {
        let opts = i.options.map(v => (0,inutil__WEBPACK_IMPORTED_MODULE_4__.isS)(v) ? { key: v } : v);
        return new galhui_select__WEBPACK_IMPORTED_MODULE_6__["default"]({
            options: opts,
            labelRender: (val, container) => container.set(opts.byKey(val).key),
            menuRender: (opt) => (0,galho__WEBPACK_IMPORTED_MODULE_2__.div)("i", opt.key)
        });
    };
    galhui_core__WEBPACK_IMPORTED_MODULE_3__.$.mselectInput = (i) => {
        let opts = i.options.map(v => (0,inutil__WEBPACK_IMPORTED_MODULE_4__.isS)(v) ? { key: v } : v);
        return new galhui_select__WEBPACK_IMPORTED_MODULE_6__.Multselect({
            options: opts,
            labelRender: (val) => (0,galhui_output__WEBPACK_IMPORTED_MODULE_7__.output)(opts.byKey(val).key),
            menuRender: (opt) => (0,galho__WEBPACK_IMPORTED_MODULE_2__.div)("i", opt.key)
        });
    };
}


/***/ }),

/***/ "../format/scalar.ts":
/*!***************************!*\
  !*** ../format/scalar.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scalar),
/* harmony export */   "reverseFormat": () => (/* binding */ reverseFormat),
/* harmony export */   "inFull": () => (/* binding */ inFull),
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "check": () => (/* binding */ check),
/* harmony export */   "value": () => (/* binding */ value),
/* harmony export */   "defaultLocale": () => (/* binding */ defaultLocale),
/* harmony export */   "checknum": () => (/* binding */ checknum),
/* harmony export */   "Scalar": () => (/* binding */ Scalar),
/* harmony export */   "currency": () => (/* binding */ currency),
/* harmony export */   "currencies": () => (/* binding */ currencies),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "../format/time.ts");

function splicestr(str, start, deleteCount, insert) {
    var left = str.slice(0, start), right = str.slice(start + deleteCount);
    return left + insert + right;
}
function scalar(input, format) {
    return new Scalar(input, format);
}
function reverseFormat(input, format) {
    return 0;
}
const inFull = [];
function len(value) {
    return (value + '').length;
}
const checkFormats = [];
function check(input) {
    if (typeof input === 'string') {
    }
    if ((input instanceof Date && (input = new Scalar(input))) || input instanceof Scalar)
        return input;
    return null;
}
function invalidInputError() {
}
function value(input) {
    switch (typeof input) {
        case "number":
            return input;
        case "string":
            return parseFloat(input);
        default:
            if (!(input instanceof Scalar))
                return NaN;
            return input.value;
    }
}
const romannums = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
const chars = "abcdefghijklmnopqrstuvwxyz";
let defaultOptions = {};
let defaultFormat = '0,0.0';
const formatRegex = /\+|0+|,0|.0+|$|u|'[^']+'/;
const periods = [
    { k: _time__WEBPACK_IMPORTED_MODULE_0__.PeriodType.y, s: 'ano', p: 'anos' },
    { k: _time__WEBPACK_IMPORTED_MODULE_0__.PeriodType.M, s: 'mês', p: 'mêses' },
    { k: _time__WEBPACK_IMPORTED_MODULE_0__.PeriodType.w, s: 'semana', p: 'semanas' },
    { k: _time__WEBPACK_IMPORTED_MODULE_0__.PeriodType.d, s: 'dia', p: 'dias' },
    { k: _time__WEBPACK_IMPORTED_MODULE_0__.PeriodType.h, s: 'hora', p: 'horas' },
    { k: _time__WEBPACK_IMPORTED_MODULE_0__.PeriodType.m, s: 'minuto', p: 'minutos' },
    { k: _time__WEBPACK_IMPORTED_MODULE_0__.PeriodType.s, s: 'segundo', p: 'segundos' },
];
const transforms = new Map([
    ["i", function (value) {
            let roman = '', i;
            for (i in romannums) {
                while (value >= romannums[i]) {
                    roman += i;
                    value -= romannums[i];
                }
            }
            return roman;
        }],
    ["a", function (value) {
            let dividend = value;
            let result = "";
            let modulo;
            while (dividend > 0) {
                modulo = (dividend - 1) % 26;
                result = chars[modulo] + result;
                dividend = Math.floor((dividend - modulo) / 26);
            }
            return result;
        }],
    ["t", function (value) {
            let r = [], count = 2, space = 2;
            for (let i = 0; i < periods.length; i++) {
                let period = periods[i];
                if (value >= period.k) {
                    let temp = Math.floor(value / period.k);
                    r.push(temp + ' ' + (temp === 1 ? period.s : period.p));
                    value -= temp * period.k;
                    if (!--count)
                        break;
                }
                else if (count < 2 && !--space)
                    break;
            }
            return r.join(' e ');
        }],
    ["f", function (value, opts) {
            let vals = inFull, int = Math.floor(value), dec = Math.round(value % 1 * 100);
            if (int == 0)
                return vals[0].exp();
            if (!opts)
                opts = {};
            if (!opts.g)
                opts.g = 'm';
            opts.c = (v, opts, i = vals.length - 1) => {
                for (; i > 0; i--) {
                    let t = vals[i];
                    if (t.v <= v)
                        return t.exp(v, opts, i);
                }
            };
            let t = opts.c(int, opts);
            if (opts.p) {
                t += ' ' + (int == 1 && opts.s || opts.p);
                if (dec)
                    if (opts.dp) {
                        t += ` e ${opts.c(dec, opts)} ${(dec == 1 && opts.ds || opts.dp)}`;
                    }
                    else {
                        throw "not implemented";
                    }
            }
            return t.toUpperCase();
        }]
]);
const singleFormats = {
    ["N"]: '0,0.00',
    ["D"]: '0,0',
    ["%"]: '0,0.0 %',
    ["E"]: '0,0E',
    ["$"]: '0,0.00 $'
};
const defaultLocale = {
    sub: {
        '-3': 'm',
        '-2': 'C',
        '-1': 'd',
        1: 'D',
        2: 'C',
        3: 'K',
        4: 'M'
    }
};
function checknum(value, exp) {
    let t = Math.pow(10, exp);
    return Math.round(value * t) / t;
}
class Scalar {
    constructor(input, format) {
        this.value = value(input);
    }
    add(input) {
        return new Scalar(this.value + value(input));
    }
    sub(input) {
        return new Scalar(this.value - value(input));
    }
    time(input) {
        return new Scalar(this.value * value(input));
    }
    div(input) {
        return new Scalar(this.value / value(input));
    }
    fmt(format, opts = defaultOptions) {
        var _a;
        let value = checknum(this.value, 4);
        if (isNaN(value))
            return '';
        {
            let t = transforms.get(format);
            if (t)
                return t(value, opts);
        }
        if (format in singleFormats)
            format = singleFormats[format];
        else if (!format)
            format = defaultFormat;
        let t0;
        while ((t0 = format.indexOf('\\', t0)) != -1)
            format = splicestr(format, t0, 2, '"' + format[t0 + 1] + '"');
        if ((t0 = format.indexOf('*')) != -1) {
            format = splicestr(format, t0, 1, '"' + opts.unit + '"');
        }
        if ((t0 = format.indexOf('$')) != -1) {
            let curr = opts.currency || currency(), sel = (_a = options.currencies) === null || _a === void 0 ? void 0 : _a.find(v => v.code == curr);
            format = splicestr(format, t0, 1, opts.currencySymbol === false ? '' : '" ' + curr + '"');
        }
        else if ((t0 = format.indexOf('%')) != -1) {
            value = value * 100;
            format = splicestr(format, t0, 1, '"%"');
        }
        else if ((t0 = format.indexOf('‰')) != -1) {
            value = value * 1000;
            format.replace('‰', '"‰"');
        }
        else if ((t0 = format.indexOf('=')) != -1) {
            throw "not implemented";
        }
        let integer = value + '', pointIndex = integer.indexOf('.'), float = '', result = '';
        if (pointIndex != -1) {
            float = integer.slice(pointIndex + 1);
            integer = integer.slice(0, pointIndex);
        }
        for (let i = 0, l = format.length; i < l; i++) {
            switch (format[i]) {
                case '"':
                    while (format[++i] != '"') {
                        result += format[i];
                    }
                    break;
                case "'":
                    while (format[++i] != "'") {
                        result += format[i];
                    }
                    break;
                case '0':
                    t0 = 0;
                    while (format[i + t0] == "0")
                        ++t0;
                    integer = integer.padStart(t0, '0');
                    result = splicestr(result, i - t0 + 1, t0, integer);
                    i += t0 - 1;
                    break;
                case ',':
                    t0 = 0;
                    i++;
                    let r = '', il = integer.length;
                    for (let j = il; j > 0; j -= 3) {
                        r = ' ' + integer.slice(Math.max(j - 3, 0), j) + r;
                    }
                    result = splicestr(result, result.length - il, il, r.slice(1));
                    break;
                case '.':
                    {
                        let min = 0;
                        while (format[i + 1] == '0') {
                            i++;
                            min++;
                        }
                        let max = min;
                        while (format[i + 1] == '#') {
                            i++;
                            max++;
                        }
                        if (float.length >= max)
                            float = float.substr(0, max);
                        else
                            float = float.padEnd(min, '0');
                        if (float.length)
                            result += ',' + float;
                    }
                    break;
                case 'E':
                    throw "not implemented";
                case '$':
                    result += 'AKz';
                    break;
                default: result += format[i];
            }
        }
        return result;
    }
    transform(format, opts = defaultOptions) {
        let t = transforms.get(format);
        if (t)
            return t(this.value, opts);
        else
            return "invalid";
    }
    get valid() {
        return !Number.isNaN(this.value);
    }
}
let options = {};
const currency = () => options.currency;
const currencies = () => options.currencies;
function settings(value) {
    options = Object.assign({}, options, value);
}


/***/ }),

/***/ "../format/time.ts":
/*!*************************!*\
  !*** ../format/time.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ time),
/* harmony export */   "Time": () => (/* binding */ Time),
/* harmony export */   "getTime": () => (/* binding */ getTime),
/* harmony export */   "store": () => (/* binding */ store),
/* harmony export */   "check": () => (/* binding */ check),
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "fromT": () => (/* binding */ fromT),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "fullFormat": () => (/* binding */ fullFormat),
/* harmony export */   "defaultFormat": () => (/* binding */ defaultFormat),
/* harmony export */   "formatRegex": () => (/* binding */ formatRegex),
/* harmony export */   "timeRegex": () => (/* binding */ timeRegex),
/* harmony export */   "quickformat": () => (/* binding */ quickformat),
/* harmony export */   "PeriodType": () => (/* binding */ PeriodType),
/* harmony export */   "Period": () => (/* binding */ Period)
/* harmony export */ });
function time(input = new Date()) {
    return typeof input == "string" ? fromT(input) : new Time(input);
}
class Time {
    constructor(v) {
        this.v = v;
    }
    get valid() { return this.v != null || isNaN(this.v); }
    fmt(pattern, def) {
        let i = this.v;
        if (!i)
            return '';
        if (pattern in quickformat)
            pattern = quickformat[pattern];
        if (this.valid)
            return (pattern || defaultFormat).replace(formatRegex, (sub) => {
                switch (sub) {
                    case 'yyyy':
                        return i.getFullYear();
                    case 'ss':
                        return (i.getSeconds() + '').padStart(2, '0');
                    case 's':
                        return i.getSeconds();
                    case 'mm':
                        return (i.getMinutes() + '').padStart(2, '0');
                    case 'm':
                        return i.getMinutes();
                    case 'HH':
                    case 'hh':
                        return (i.getHours() + '').padStart(2, '0');
                    case 'h':
                        return i.getHours();
                    case 'dd':
                        return (i.getDate() + '').padStart(2, '0');
                    case 'd':
                        return i.getDate();
                    case 'MM':
                        return ((i.getMonth() + 1) + '').padStart(2, '0');
                    case 'M':
                        return i.getMonth() + 1;
                }
            });
        else
            def || '';
        return null;
    }
    toDB() {
        return this.fmt('yyyy-MM-dd HH:mm:ss');
    }
    lastday() {
        return new Date(this.year(), this.month(), 0).getDate();
    }
    minute(value) {
        if (value == null)
            return this.v.getMinutes();
        this.v.setMinutes(value);
        return this;
    }
    second(value) {
        if (value == null)
            return this.v.getSeconds();
        this.v.setSeconds(value);
        return this;
    }
    hour(value) {
        if (value == null)
            return this.v.getHours();
        this.v.setHours(value);
        return this;
    }
    addHour(value) {
        this.v.setHours(this.v.getHours() + value);
        return this;
    }
    day(value) {
        if (value == null)
            return this.v.getDate();
        this.v.setDate(value);
        return this;
    }
    addDay(value) {
        this.v.setDate(this.v.getDate() + value);
        return this;
    }
    year(value) {
        if (value == null)
            return this.v.getFullYear();
        this.v.setFullYear(value);
        return this;
    }
    addYear(value) {
        this.v.setFullYear(this.v.getFullYear() + value);
        return this;
    }
    month(value) {
        if (value == null)
            return this.v.getMonth() + 1;
        this.v.setMonth(value - 1);
        return this;
    }
    addMonth(value) {
        this.v.setMonth(this.v.getMonth() + value);
        return this;
    }
    weekStart() {
        return this.addDay(-this.v.getDay());
    }
    toInput(type) {
        if (!this.valid)
            return null;
        switch (type) {
            case 'date':
                return this.fmt('yyyy-MM-dd');
            case 'datetime-local':
                return this.fmt('yyyy-MM-ddThh:mm');
            case 'month':
                return this.fmt('yyyy-MM');
            case 'time':
                return this.fmt('hh:mm');
            case 'week':
                return this.fmt('yyyy-[W]ww');
            default:
                throw "unsetted24";
        }
    }
    fromNow(format) {
    }
    clone() { return new Time(new Date(this.v.getTime())); }
    subtract() {
    }
    diff(input, period = PeriodType.d) {
        let span = this.v.getTime() - input.v.getTime();
        return Math.floor(span / (period * 1000));
    }
    add(value) {
        this.v.setMilliseconds(this.v.getMilliseconds() + value);
        return this;
    }
    equal(other) {
        if (!this.valid || !other.valid)
            return other.v == this.v;
        return this.valueOf() == other.valueOf();
    }
    equalDate(Input) {
        return true;
    }
    equalTime(Input) {
        return true;
    }
    age() {
        return "";
    }
    toJSON() { return this.fmt(fullFormat); }
    toString() {
        return this.fmt();
    }
    valueOf() {
        return this.v.valueOf();
    }
}
function getTime(date) {
    return `${(date.getHours() + '').padStart(2, '0')}:${(date.getMinutes() + '').padStart(2, '0')}:${(date.getSeconds() + '').padStart(2, '0')}`;
}
function store(input) {
    switch (input.type) {
        case 'date':
        case 'datetime-local':
            return input.value;
        case 'time':
            return input.value + ':00';
        case 'month':
            return input.value + ':01';
        case 'week':
            return new Time(input.valueAsDate).fmt('yyyy-MM-dd');
    }
}
const checkFormats = [];
function check(input) {
    if ((input instanceof Date && (input = new Time(input))) ||
        input instanceof Time ||
        (input && typeof input == 'object' && (input = new Time(input))))
        return input;
    return null;
}
function now() {
    return new Time(new Date());
}
function fromT(input) {
    if (!input)
        return new Time(null);
    let data = new Date(input);
    if (isNaN(data) && timeRegex.test(input)) {
        data = new Date('0000-01-01 ' + input);
    }
    return new Time(data);
}
function create(input) {
    if (input == null || input instanceof Date)
        return new Time(input);
    if (input instanceof Time)
        return input;
    else if (typeof input == 'string')
        return fromT(input);
    else if (typeof input == 'number')
        return new Time(new Date(input));
}
const fullFormat = 'yyyy-MM-dd hh:mm:ss';
const defaultFormat = 'dd-MM-yyyy hh:mm';
const formatRegex = /(LT|y{2,4}|M{1,4}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2})/g;
const timeRegex = /\d{2}:\d{2}:\d{2}/;
const quickformat = {
    lt: 'dd-MM-yyyy hh:mm',
    l: 'dd-MM-yyyy',
    f: 'dd-MM-yyyy hh:mm',
    d: 'dd-MM-yyyy',
    t: 'hh:mm'
};
function inputValue(input) {
    return new Date(input instanceof Time ? input.v : input);
}
var PeriodType;
(function (PeriodType) {
    PeriodType[PeriodType["z"] = 0.1] = "z";
    PeriodType[PeriodType["s"] = 1] = "s";
    PeriodType[PeriodType["m"] = 60] = "m";
    PeriodType[PeriodType["h"] = 3600] = "h";
    PeriodType[PeriodType["d"] = 86400] = "d";
    PeriodType[PeriodType["w"] = 604800] = "w";
    PeriodType[PeriodType["y"] = 31556736] = "y";
    PeriodType[PeriodType["f"] = 1314864] = "f";
    PeriodType[PeriodType["M"] = 2629728] = "M";
    PeriodType[PeriodType["M2"] = 5259456] = "M2";
    PeriodType[PeriodType["M3"] = 7889184] = "M3";
    PeriodType[PeriodType["M4"] = 10518912] = "M4";
    PeriodType[PeriodType["M6"] = 15778368] = "M6";
})(PeriodType || (PeriodType = {}));
class Period {
    constructor(begin, end) {
    }
    format(format) {
        return "";
    }
}


/***/ }),

/***/ "../galhud/Pagging.ts":
/*!****************************!*\
  !*** ../galhud/Pagging.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pagging)
/* harmony export */ });
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var galhui_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! galhui/select */ "../galhui/select.ts");
/* harmony import */ var _galhui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../galhui/button */ "../galhui/button.ts");
/* harmony import */ var _galhui_output__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../galhui/output */ "../galhui/output.ts");




class Pagging extends galho__WEBPACK_IMPORTED_MODULE_0__.E {
    view() {
        let i = this.model, pags, count = (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)('span');
        if (i.setlimit) {
            var limits = new galhui_select__WEBPACK_IMPORTED_MODULE_1__["default"]({
                cls: "i",
                value: i.limit,
                fluid: true,
                labelRender: (v) => v || 'Mostrar todos',
                menuRender: (v) => (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)(["i"], v.key || 'Mostrar todos')
            }, [
                i.minLimit,
                i.minLimit * 2,
                i.minLimit * 4,
                i.minLimit * 10,
                i.minLimit * 20,
                0
            ]);
            (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)(limits).cls("full");
        }
        return this.bind((0,galho__WEBPACK_IMPORTED_MODULE_0__.div)(0, [
            i.extreme && (0,_galhui_button__WEBPACK_IMPORTED_MODULE_2__.ibutton)('chevron-double-left', null, () => this.set('pag', 1)).cls("a"),
            (0,_galhui_button__WEBPACK_IMPORTED_MODULE_2__.ibutton)('chevron-left', null, () => this.set('pag', i.pag - 1)).cls("a"),
            (0,_galhui_output__WEBPACK_IMPORTED_MODULE_3__.output)().cls(["hd", "a", "b"]),
            (0,_galhui_button__WEBPACK_IMPORTED_MODULE_2__.ibutton)('chevron-right', null, () => this.set('pag', i.pag + 1)).cls("a"),
            i.extreme && (0,_galhui_button__WEBPACK_IMPORTED_MODULE_2__.ibutton)('chevron-double-right', count, () => this.set('pag', pags)).cls("a"),
            limits && [
                (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)("separator"),
                limits.on('input', (value) => { this.set('limit', value); })
            ],
            i.viewtotal && [
                (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)("separator"),
                this.bind((0,galho__WEBPACK_IMPORTED_MODULE_0__.div)("i"), (s) => {
                    s.set(`${Math.min(i.total - i.limit * (i.pag - 1), i.limit || i.total) || 0} / ${i.total || 0}`);
                })
            ]
        ]), (s) => {
            pags = i.limit && Math.ceil((i.total || 0) / i.limit) || 1;
            s.cls("of", !!(pags < 2 && i.hideOnSingle));
            let t = i.extreme ? 0 : 1;
            s.child(2 - t).set(i.pag);
            s.childs(0, 2 - t).prop('disabled', i.pag == 1);
            s.childs(3 - t, 5 - t * 2).prop('disabled', i.pag == pags);
            count.set(pags);
        });
    }
    get pags() {
        let md = this.model;
        return md.limit ? Math.ceil((md.total || 0) / md.limit) : 1;
    }
}


/***/ }),

/***/ "../galhud/core.ts":
/*!*************************!*\
  !*** ../galhud/core.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defFieldRenderer": () => (/* binding */ defFieldRenderer),
/* harmony export */   "logo": () => (/* binding */ logo),
/* harmony export */   "crudHandler": () => (/* binding */ crudHandler),
/* harmony export */   "kbHTp": () => (/* binding */ kbHTp),
/* harmony export */   "kbHandler": () => (/* binding */ kbHandler)
/* harmony export */ });
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var inutil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inutil */ "../inutil/inutil.js");
/* harmony import */ var galhui_ctx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! galhui/ctx */ "../galhui/ctx.ts");
/* harmony import */ var galhui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! galhui/core */ "../galhui/core.ts");
/* harmony import */ var galhui_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! galhui/icon */ "../galhui/icon.ts");
/* harmony import */ var orray_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! orray/selector */ "../orray/selector.ts");






const defFieldRenderer = () => ({
    null: galhui_core__WEBPACK_IMPORTED_MODULE_1__.$.nullIcon,
    invalidIcon: () => (0,galhui_icon__WEBPACK_IMPORTED_MODULE_2__["default"])('image-broken'),
    checkboxFmt: "icon",
    html: true,
    interactive: true,
    format: true
});
function logo(v) {
    if (v)
        if ((0,inutil__WEBPACK_IMPORTED_MODULE_3__.isS)(v)) {
            switch (v[0]) {
                case ".":
                case "/":
                    return (0,galho__WEBPACK_IMPORTED_MODULE_4__.g)("img", { src: v }).cls("o");
                case "<":
                    return (0,galho__WEBPACK_IMPORTED_MODULE_4__.toSVG)(v).cls("o");
            }
        }
        else
            return (0,galhui_icon__WEBPACK_IMPORTED_MODULE_2__["default"])(v);
}
function crudHandler(p, dt, i) {
    let focus = ({ currentTarget: ct, target: t, ctrlKey: ctrl, shiftKey: shift }) => {
        if (ct == t)
            (0,orray_selector__WEBPACK_IMPORTED_MODULE_0__.clear)(dt, "sd");
        else
            (0,orray_selector__WEBPACK_IMPORTED_MODULE_0__.add)(dt, "sd", (0,galho__WEBPACK_IMPORTED_MODULE_4__.g)(t).closest((0,galhui_core__WEBPACK_IMPORTED_MODULE_1__.c)("i")).d(), (0,orray_selector__WEBPACK_IMPORTED_MODULE_0__.tp)(ctrl, shift));
    };
    return p.prop('tabIndex', 0).on({
        click: focus,
        dblclick: i.open && (() => i.open(...(0,orray_selector__WEBPACK_IMPORTED_MODULE_0__.list)(dt, "sd"))),
        contextmenu: i.menu && ((e) => {
            focus(e);
            let t = i.menu(...(0,orray_selector__WEBPACK_IMPORTED_MODULE_0__.list)(dt, "sd"));
            if (t) {
                (0,galhui_ctx__WEBPACK_IMPORTED_MODULE_5__["default"])(e, t);
                e.preventDefault();
            }
        })
    });
}
const kbHTp = (dt, dist, { key, ctrlKey: ctrl, shiftKey: shift }) => shift ? (0,orray_selector__WEBPACK_IMPORTED_MODULE_0__.move)(dt, "sd", dist, (0,orray_selector__WEBPACK_IMPORTED_MODULE_0__.tp)(ctrl, false)) :
    ctrl ? (0,orray_selector__WEBPACK_IMPORTED_MODULE_0__.movePivot)(dt, "sd", dist) :
        (0,orray_selector__WEBPACK_IMPORTED_MODULE_0__.move)(dt, "sd", dist, 0);
function kbHandler(dt, e, i) {
    switch (e.key) {
        case "Delete":
            let t = (0,orray_selector__WEBPACK_IMPORTED_MODULE_0__.list)(dt, "sd");
            if (t.length && i.delete) {
                (async () => {
                    if ((await i.delete(...t)) !== false)
                        for (let i of t)
                            dt.remove(i);
                })();
            }
            else
                return;
            break;
        case "Home":
            kbHTp(dt, -(0,orray_selector__WEBPACK_IMPORTED_MODULE_0__.pivot)(dt, "sd"), e);
            break;
        case "End":
            kbHTp(dt, dt.length - (0,orray_selector__WEBPACK_IMPORTED_MODULE_0__.pivot)(dt, "sd"), e);
            break;
        case "PageDown":
            kbHTp(dt, 10, e);
            break;
        case "PageUp":
            kbHTp(dt, -10, e);
            break;
        case "Enter":
            if (i.open) {
                i.open(...(0,orray_selector__WEBPACK_IMPORTED_MODULE_0__.list)(dt, "sd"));
                break;
            }
            else
                return;
        default:
            return;
    }
    return true;
}


/***/ }),

/***/ "../galhud/fields.ts":
/*!***************************!*\
  !*** ../galhud/fields.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Field": () => (/* binding */ Field),
/* harmony export */   "extendField": () => (/* binding */ extendField),
/* harmony export */   "addType": () => (/* binding */ addType),
/* harmony export */   "cbFormats": () => (/* binding */ cbFormats),
/* harmony export */   "addcbFmts": () => (/* binding */ addcbFmts),
/* harmony export */   "addBaseTypes": () => (/* binding */ addBaseTypes),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "radio": () => (/* binding */ radio),
/* harmony export */   "number": () => (/* binding */ number),
/* harmony export */   "select": () => (/* binding */ select)
/* harmony export */ });
/* harmony import */ var entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entity */ "../entity/entity.js");
/* harmony import */ var entity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(entity__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inutil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inutil */ "../inutil/inutil.js");
/* harmony import */ var galhui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! galhui/core */ "../galhui/core.ts");
/* harmony import */ var format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! format */ "../format/scalar.ts");
/* harmony import */ var format__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! format */ "../format/time.ts");
/* harmony import */ var format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! format */ "../format/format.js");
/* harmony import */ var galhui_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! galhui/icon */ "../galhui/icon.ts");
/* harmony import */ var jcalc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jcalc */ "../jcalc/jcalc.js");
/* harmony import */ var form_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! form/inputs */ "../form/inputs.ts");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select */ "../galhud/select.ts");
/* harmony import */ var _galhui_wait__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../galhui/wait */ "../galhui/wait.ts");









class Field {
    constructor(key, tp, o = {}) {
        this.key = key;
        this.tp = tp;
        this.o = o;
        this.req = (0,inutil__WEBPACK_IMPORTED_MODULE_4__.t)(o.req);
        this.edit = (0,inutil__WEBPACK_IMPORTED_MODULE_4__.def)(o.edit, this.set);
        this.side = o.side;
    }
    get type() { return (0,entity__WEBPACK_IMPORTED_MODULE_0__.ftype)(this); }
    get query() { return (0,inutil__WEBPACK_IMPORTED_MODULE_4__.def)(this.o.query, this.type.query); }
    get sort() { return (0,inutil__WEBPACK_IMPORTED_MODULE_4__.def)(this.o.sort, this.type.sort); }
    get set() { return (0,inutil__WEBPACK_IMPORTED_MODULE_4__.def)(this.o.set, this.type.set); }
    input() { return this.type.input(this); }
    output(value, ctx) { return this.type.output(value, ctx, this); }
}
const extendField = (base, key, type) => entity__WEBPACK_IMPORTED_MODULE_0__.fieldTypes[key] = (0,inutil__WEBPACK_IMPORTED_MODULE_4__.extend)(type, entity__WEBPACK_IMPORTED_MODULE_0__.fieldTypes[base]);
const addType = (key, type) => entity__WEBPACK_IMPORTED_MODULE_0__.fieldTypes[key] = (0,inutil__WEBPACK_IMPORTED_MODULE_4__.extend)(type, defFT);
const defFT = {
    sort: true,
    block: false,
    query: true,
    align: "_lf",
    output: (val, { p }) => (0,inutil__WEBPACK_IMPORTED_MODULE_4__.isV)(val) ? val : p.null(),
    size: () => 50
};
const cbFormats = {};
const addcbFmts = () => (0,inutil__WEBPACK_IMPORTED_MODULE_4__.ex)(cbFormats, {
    icon: (value) => (0,galhui_icon__WEBPACK_IMPORTED_MODULE_5__["default"])((0,inutil__WEBPACK_IMPORTED_MODULE_4__.isV)(value) ?
        value ?
            { c: "_a", d: "check" } :
            { c: "_e", d: "close" } :
        galhui_core__WEBPACK_IMPORTED_MODULE_6__.$.nullIcon()),
    yn: (value) => (0,inutil__WEBPACK_IMPORTED_MODULE_4__.isV)(value) ? value ? galhui_core__WEBPACK_IMPORTED_MODULE_6__.$.w.yes : galhui_core__WEBPACK_IMPORTED_MODULE_6__.$.w.no : "",
    tf: (value) => (0,inutil__WEBPACK_IMPORTED_MODULE_4__.isV)(value) ? value ? galhui_core__WEBPACK_IMPORTED_MODULE_6__.$.w["true"] : galhui_core__WEBPACK_IMPORTED_MODULE_6__.$.w["false"] : "",
});
function addBaseTypes() {
    addType(1, {
        input: ({ key, req }) => (0,form_inputs__WEBPACK_IMPORTED_MODULE_2__.text)(key, req)
    });
    addType(8, {
        output: (val, { p }, { o }) => (0,inutil__WEBPACK_IMPORTED_MODULE_4__.isV)(val) ? (0,format__WEBPACK_IMPORTED_MODULE_7__["default"])(val).fmt(p.numberFmt || o.fmt) : p.null(),
        input: ({ key, req, o }) => (0,form_inputs__WEBPACK_IMPORTED_MODULE_2__.number)(key, req)
    });
    addType(7, {
        output: (val, { p }, { o }) => (0,inutil__WEBPACK_IMPORTED_MODULE_4__.isV)(val) ? (0,format__WEBPACK_IMPORTED_MODULE_8__["default"])(val).fmt(p.dateFmt || o.fmt) : p.null(),
        input: ({ key, req, o }) => (0,form_inputs__WEBPACK_IMPORTED_MODULE_2__.date)(key, o.input, req)
    });
    addType("time", {
        output: (val, { p }, { o }) => (0,inutil__WEBPACK_IMPORTED_MODULE_4__.isV)(val) ? (0,format__WEBPACK_IMPORTED_MODULE_8__["default"])(val).fmt(p.timeFmt || o.fmt) : p.null(),
        input: ({ key, req }) => (0,form_inputs__WEBPACK_IMPORTED_MODULE_2__.time)(key, req)
    });
    addType(4, {
        output: (val, { p }, { o }) => cbFormats[p.checkboxFmt || o.fmt](val),
        input: ({ key, req }) => (0,form_inputs__WEBPACK_IMPORTED_MODULE_2__.checkbox)(key, req)
    });
    addType("radio", {
        output: (val, { p }, { o }) => (0,inutil__WEBPACK_IMPORTED_MODULE_4__.isV)(val) ? entity__WEBPACK_IMPORTED_MODULE_0__.$.enumView(o.enum, val) : p.null(),
        input: ({ key, req, o }) => (0,form_inputs__WEBPACK_IMPORTED_MODULE_2__.radio)(key, entity__WEBPACK_IMPORTED_MODULE_0__.$["enum"](o.enum), req)
    });
    addType(6, {
        output(_, { p, rec }, { o }) {
            let t = (0,jcalc__WEBPACK_IMPORTED_MODULE_1__["default"])(o.exp, { vars: rec });
            return (0,inutil__WEBPACK_IMPORTED_MODULE_4__.isV)(t) ?
                o.fmt ?
                    (0,format__WEBPACK_IMPORTED_MODULE_9__["default"])(t, o.fmt) :
                    t :
                p.null;
        }
    });
    addType(2, {
        input: ({ key, req, o }) => new form_inputs__WEBPACK_IMPORTED_MODULE_2__.SelectInput({ key, req, link: o.link }),
        output(val, { p }, { o }) {
            if (!(0,inutil__WEBPACK_IMPORTED_MODULE_4__.isV)(val))
                return p.null();
            switch (entity__WEBPACK_IMPORTED_MODULE_0__.$.linkTp) {
                case 0:
                    return val;
                case 1:
                    return (0,_galhui_wait__WEBPACK_IMPORTED_MODULE_10__["default"])(async () => {
                        let e = await (0,entity__WEBPACK_IMPORTED_MODULE_0__.get)(o.link);
                        return await e.select({
                            tp: 1,
                            where: { [entity__WEBPACK_IMPORTED_MODULE_0__.$.id(e)]: val },
                            fields: [e.mainField]
                        });
                    });
                case 2:
                    return (0,_galhui_wait__WEBPACK_IMPORTED_MODULE_10__["default"])(async () => val[(await (0,entity__WEBPACK_IMPORTED_MODULE_0__.get)(o.link)).mainField]);
            }
        }
    });
    addType("multselect", {
        input: ({ key, req, o }) => new form_inputs__WEBPACK_IMPORTED_MODULE_2__.MultselectInput({ key, req, link: o.link }),
        output(val, { p }, { o }) {
            if (!(0,inutil__WEBPACK_IMPORTED_MODULE_4__.isV)(val))
                return p.null();
            switch (entity__WEBPACK_IMPORTED_MODULE_0__.$.linkTp) {
                case 0:
                    return val;
                case 1:
                    return (0,_galhui_wait__WEBPACK_IMPORTED_MODULE_10__["default"])(async () => {
                        let e = await (0,entity__WEBPACK_IMPORTED_MODULE_0__.get)(o.link);
                        return (await e.select({
                            tp: 3,
                            where: `in(${[entity__WEBPACK_IMPORTED_MODULE_0__.$.id(e)]},${val})`,
                            fields: [e.mainField]
                        })).join('; ');
                    });
                case 2:
                    return (0,_galhui_wait__WEBPACK_IMPORTED_MODULE_10__["default"])(async () => {
                        let m = (await (0,entity__WEBPACK_IMPORTED_MODULE_0__.get)(o.link)).mainField;
                        return val.map(v => v[m]).join('; ');
                    });
            }
        }
    });
    galhui_core__WEBPACK_IMPORTED_MODULE_6__.$.selectInput = ({ ph, link }) => (0,_select__WEBPACK_IMPORTED_MODULE_3__.linkedSelect)(link, { ph });
    galhui_core__WEBPACK_IMPORTED_MODULE_6__.$.mselectInput = ({ ph, link }) => (0,_select__WEBPACK_IMPORTED_MODULE_3__.linkedMSelect)(link, { ph });
}
const text = (key, opts = {}) => new Field(key, 1, opts);
const radio = (key, list, opts) => new Field(key, "radio", Object.assign({}, { enum: list }, opts));
const number = (key, opts = {}) => new Field(key, 8, opts);
const select = (key, link, opts) => new Field(key, 2, Object.assign({}, opts, { link }));


/***/ }),

/***/ "../galhud/select.ts":
/*!***************************!*\
  !*** ../galhud/select.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linkedSelect": () => (/* binding */ linkedSelect),
/* harmony export */   "linkedMSelect": () => (/* binding */ linkedMSelect)
/* harmony export */ });
/* harmony import */ var entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entity */ "../entity/entity.js");
/* harmony import */ var entity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(entity__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var galhui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! galhui/button */ "../galhui/button.ts");
/* harmony import */ var galhui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! galhui/core */ "../galhui/core.ts");
/* harmony import */ var galhui_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! galhui/select */ "../galhui/select.ts");
/* harmony import */ var galhui_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! galhui/menu */ "../galhui/menu.ts");
/* harmony import */ var _Pagging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagging */ "../galhud/Pagging.ts");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools */ "../galhud/tools.ts");
/* harmony import */ var _galhui_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../galhui/icon */ "../galhui/icon.ts");
/* harmony import */ var _galhui_output__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../galhui/output */ "../galhui/output.ts");
/* harmony import */ var _galhui_wait__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../galhui/wait */ "../galhui/wait.ts");











function menu(select, menu, bind) {
    let ent = bind.target, pag = new _Pagging__WEBPACK_IMPORTED_MODULE_1__["default"]({ pag: bind.pag, hideOnSingle: true }).on(() => {
        bind.pag = pag.model.pag;
        bind.limit = pag.model.limit;
    }), input = (0,galho__WEBPACK_IMPORTED_MODULE_3__.g)('input', {
        type: 'search',
        placeholder: galhui_core__WEBPACK_IMPORTED_MODULE_4__.$.w.search
    }).on('input', function () { bind.query = this.value; });
    select.options.on('update', function () {
        pag.set({
            total: bind.length,
            limit: bind.limit,
            pag: bind.pag
        });
    });
    select.on((e) => {
        if ('open' in e)
            if (e.open)
                input.focus();
            else if (document.activeElement == document.body)
                select.focus();
    });
    menu.add([
        (0,galhui_menu__WEBPACK_IMPORTED_MODULE_5__.menubar)((0,_tools__WEBPACK_IMPORTED_MODULE_2__.search)(bind), galhui_menu__WEBPACK_IMPORTED_MODULE_5__.menubar.right()).on('click', (e) => { e.stopPropagation(); }),
        galhui_menu__WEBPACK_IMPORTED_MODULE_5__.menubar.sep(),
        select.model.menuItems.css('flex', '1 1'),
        pag && (0,galho__WEBPACK_IMPORTED_MODULE_3__.g)(pag).on('click', (e) => { e.stopPropagation(); })
    ]).css({
        display: 'flex',
        flexDirection: 'column'
    });
}
function linkedSelect(path, opts = {}) {
    let mn = (0,galho__WEBPACK_IMPORTED_MODULE_3__.g)('div'), menuItems = (0,galho__WEBPACK_IMPORTED_MODULE_3__.div)(["mn"]), clearBt = (0,galhui_button__WEBPACK_IMPORTED_MODULE_6__.close)(e => {
        e.off();
        input.setValue(null);
    }), input = new galhui_select__WEBPACK_IMPORTED_MODULE_7__["default"]({
        key: 'id',
        menu: mn, menuItems,
        setMenu() { },
        labelRender() { },
        fluid: true,
        empty: (label) => label.set((0,galho__WEBPACK_IMPORTED_MODULE_3__.div)(["ph"], opts.ph))
    });
    (0,entity__WEBPACK_IMPORTED_MODULE_0__.bind)(path).then(bond => {
        let ent = bond.target, render = (0,_tools__WEBPACK_IMPORTED_MODULE_2__.card)(bond);
        menu(input, mn, bond);
        input.set({
            menuRender: (value) => render(value).cls(["i"]),
            labelRender: async (key, label) => {
                let item = input.options.get(key);
                if (item) {
                    label.set([
                        (0,_galhui_icon__WEBPACK_IMPORTED_MODULE_8__["default"])(item[ent.iconField]),
                        item[ent.mainField],
                        clearBt
                    ]);
                    input.options.setTag("o", key);
                }
                else {
                    label.set((0,_galhui_wait__WEBPACK_IMPORTED_MODULE_9__["default"])());
                    let item = await ent.select({
                        tp: 2,
                        fields: bond.fields,
                        where: [`id=${key}`],
                        query: bond.query,
                        queryBy: bond.queryBy
                    });
                    if (!item)
                        throw "invalid select item";
                    if (!input.options.get(key))
                        input.options.push(item);
                    input.options.setTag("o", key);
                    label.set([
                        (0,_galhui_icon__WEBPACK_IMPORTED_MODULE_8__["default"])(item[ent.iconField]),
                        item[ent.mainField],
                        clearBt
                    ]);
                }
            }
        });
        bond.bind(input.options);
        bond.selectNow();
    });
    return input;
}
const multSelectTag = (dt, value, input) => (0,_galhui_output__WEBPACK_IMPORTED_MODULE_10__.label)([dt, (0,galhui_button__WEBPACK_IMPORTED_MODULE_6__.close)((e) => {
        e.stopPropagation();
        input.removeValue(value);
    })]);
function linkedMSelect(path, opts, callback) {
    let mn = (0,galho__WEBPACK_IMPORTED_MODULE_3__.g)('div'), menuItems = (0,galho__WEBPACK_IMPORTED_MODULE_3__.div)(["mn"]), input = new galhui_select__WEBPACK_IMPORTED_MODULE_7__.Multselect({
        key: 'id',
        menu: mn, menuItems,
        setMenu() { },
        fluid: true,
        empty: (v, label) => { label.set(v && (0,galho__WEBPACK_IMPORTED_MODULE_3__.div)(["ph"], opts.ph)); }
    });
    entity__WEBPACK_IMPORTED_MODULE_0__.Bond.bind(path).then(bond => {
        let ent = bond.target, render = (0,_tools__WEBPACK_IMPORTED_MODULE_2__.card)(bond);
        menu(input, mn, bond);
        input.set({
            menuRender: (value) => render(value).cls(["i"]),
            labelRender: (key, index, label) => {
                var item = input.options.get(key);
                if (item) {
                    input.options.setTag("o", key);
                    return multSelectTag([
                        (0,_galhui_icon__WEBPACK_IMPORTED_MODULE_8__["default"])(item[ent.icon]),
                        item[ent.main]
                    ], key, input);
                }
                return (0,_galhui_wait__WEBPACK_IMPORTED_MODULE_9__["default"])(async () => {
                    let item = await ent.get({
                        tp: 2,
                        fields: bond.fields,
                        where: bond.whereV().add(`id=${key}`),
                        query: bond.query,
                        queryBy: bond.queryBy
                    });
                    if (!item)
                        throw "invalid select item";
                    if (!input.options.get(key))
                        input.options.push(item);
                    input.options.setTag("o", key);
                    return multSelectTag([
                        (0,_galhui_icon__WEBPACK_IMPORTED_MODULE_8__["default"])(item[ent.icon]),
                        item[ent.main]
                    ], key, input);
                });
            }
        });
        callback === null || callback === void 0 ? void 0 : callback();
    });
    return input;
}


/***/ }),

/***/ "../galhud/table.ts":
/*!**************************!*\
  !*** ../galhud/table.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defineSize": () => (/* binding */ defineSize),
/* harmony export */   "FieldOutputCaller": () => (/* binding */ FieldOutputCaller),
/* harmony export */   "default": () => (/* binding */ Table),
/* harmony export */   "style": () => (/* binding */ style)
/* harmony export */ });
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var galhui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! galhui/core */ "../galhui/core.ts");
/* harmony import */ var inutil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inutil */ "../inutil/inutil.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "../galhud/core.ts");
/* harmony import */ var galhui_wait__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! galhui/wait */ "../galhui/wait.ts");
/* harmony import */ var orray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! orray */ "../orray/orray.js");






function defineSize(items, apply) {
    let size = 0, l = items.length, sizes = [];
    for (let i of items) {
        let s = i.size;
        if ((s || (s = 0)) > 95)
            s = 95;
        else if (s === 0)
            s = 100 / l;
        sizes.push(s);
        size += s;
    }
    let result = sizes.map(s => s * 100 / size);
    if (apply)
        for (let i = 0; i < l; i++)
            items[i].size = result[i];
    return result;
}
class FieldOutputCaller {
    constructor(key, item, p) {
        this.key = key;
        this.item = item;
        this.p = p;
    }
    get value() { return this.item[this.key]; }
    get null() { return this.p.null; }
    get html() { return this.p.html; }
    get format() { return this.p.format; }
    get interactive() { return this.p.interactive; }
}
class Table extends galho__WEBPACK_IMPORTED_MODULE_2__.E {
    constructor(i, data) {
        if (!i.data)
            i.data = data;
        super(i);
        i.data = (0,orray__WEBPACK_IMPORTED_MODULE_1__["default"])(i.data, {
            g: i.single ? null : ["o"],
            key: i.key,
            clear: true
        });
        if (i.foot)
            i.footData = (0,orray__WEBPACK_IMPORTED_MODULE_1__["default"])(i.footData, {
                key: i.key,
                clear: true
            });
        i.columns = (0,orray__WEBPACK_IMPORTED_MODULE_1__["default"])(i.columns).on('update', function () {
            defineSize(this, true);
        });
        if (!i.head)
            i.head = (c) => c.text;
    }
    get data() { return this.i.data; }
    get footData() { return this.i.footData; }
    get columns() { return this.i.columns; }
    view() {
        let md = this.i, cols = md.columns, opts = md.options && md.options.filter(o => o), data = md.data, side = galhui_core__WEBPACK_IMPORTED_MODULE_3__.theme.sz.n * 3, insert = (value, i, e, foot) => {
            let r;
            (async () => {
                let l = cols.l, t = Array(l);
                for (let i = 0; i < l; i++) {
                    let c = cols[i], v = value[c.key];
                    if (c.fmt)
                        if ((0,inutil__WEBPACK_IMPORTED_MODULE_4__.isP)(v = c.fmt(new FieldOutputCaller(c.key, value, md.p))))
                            v = await v;
                    t[i] = (0,galho__WEBPACK_IMPORTED_MODULE_2__.wrap)(v, "i").css({ 'textAlign': (0,galhui_core__WEBPACK_IMPORTED_MODULE_3__.tAlign)(c.align), width: c.size + 'px' });
                }
                let t2 = (0,galho__WEBPACK_IMPORTED_MODULE_2__.div)("i", [
                    (0,galho__WEBPACK_IMPORTED_MODULE_2__.div)("i", e ? i + 1 : ' ').css("width", side + "px"), t,
                    opts && opts.map((opt) => (!foot || opt.foot) && (0,galho__WEBPACK_IMPORTED_MODULE_2__.wrap)((foot ? opt.foot : opt.item)(value, i), 'td').on('dblclick', (e) => { e.stopPropagation(); }))
                ]).d(value);
                r ? r.replace(t2) : r = t2;
            })();
            return r || (r = (0,galhui_wait__WEBPACK_IMPORTED_MODULE_5__["default"])());
        };
        return (0,galho__WEBPACK_IMPORTED_MODULE_2__.div)(["tb", "_v"], [
            cols.bind((0,galho__WEBPACK_IMPORTED_MODULE_2__.div)(["hd"], [
                (0,galho__WEBPACK_IMPORTED_MODULE_2__.wrap)(md.corner).css("width", side + "px"),
                opts && opts.map((opt) => (0,galho__WEBPACK_IMPORTED_MODULE_2__.div)(null, opt.head))
            ]), {
                insert: (c, i, p) => {
                    let s = (0,galho__WEBPACK_IMPORTED_MODULE_2__.div)("i", md.head(c)).css({ 'textAlign': (0,galhui_core__WEBPACK_IMPORTED_MODULE_3__.tAlign)(c.align), width: c.size + 'px' });
                    if (md.resize)
                        (0,galho__WEBPACK_IMPORTED_MODULE_2__.div)(["a"]).on('mousedown', () => {
                            let index = cols.indexOf(c), rows = this.body.childs().child(index);
                            this.foot && rows.push(...this.foot.childs().child(index));
                            rows.push(s);
                            galhui_core__WEBPACK_IMPORTED_MODULE_3__.body.css({ cursor: 'col-resize', userSelect: "none" });
                            function move(e) {
                                c.size = (c.size = Math.max(galhui_core__WEBPACK_IMPORTED_MODULE_3__.theme.sz.n * 3, e.clientX - s.rect().left));
                                rows.css({ width: c.size + 'px' });
                            }
                            galhui_core__WEBPACK_IMPORTED_MODULE_3__.doc.on('mousemove', move)
                                .one('mouseup', () => {
                                galhui_core__WEBPACK_IMPORTED_MODULE_3__.doc.off('mousemove', move);
                                galhui_core__WEBPACK_IMPORTED_MODULE_3__.body.uncss(["cursor", "userSelect"]);
                            });
                        });
                    p.place(i + 1, s);
                },
                remove(_, i, p) {
                    p.unplace(i + 1);
                }
            }),
            this.body = data.bind((0,_core__WEBPACK_IMPORTED_MODULE_0__.crudHandler)((0,galho__WEBPACK_IMPORTED_MODULE_2__.div)("bd"), data, md), {
                insert(value, index) {
                    return insert(value, index, (0,inutil__WEBPACK_IMPORTED_MODULE_4__.t)(md.enumarate)).cls(["i"]);
                },
                tag(s, active) {
                    s.cls("o", active).e.scrollIntoView({
                        block: "nearest",
                        inline: "nearest"
                    });
                },
                groups: {
                    ["o"](s, active, value) {
                        s.cls("sd", active);
                    }
                }
            }),
            this.foot = md.foot && md.footData.bind((0,galho__WEBPACK_IMPORTED_MODULE_2__.g)('tfoot'), {
                insert(value, index) {
                    return insert(value, index, false, true);
                }
            })
        ]).on('keydown', (e) => {
            switch (e.key) {
                case "ArrowUp":
                    (0,_core__WEBPACK_IMPORTED_MODULE_0__.kbHTp)(data, -1, e);
                    break;
                case "ArrowDown":
                    (0,_core__WEBPACK_IMPORTED_MODULE_0__.kbHTp)(data, 1, e);
                    break;
                default:
                    return;
            }
            e.preventDefault();
            e.stopPropagation();
        });
    }
    _rData(p) {
        let cols = this.i.columns, r = Array(cols.length);
        p.childs().each((s, i) => {
            let t = r[i] = {}, cells = s.childs();
            for (let j = 0; j < cols.length; j++)
                t[cols[j].key] = (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)(cells[j + 1]).text();
        });
        return r;
    }
    renderedData() {
        return this._rData(this.body);
    }
    renderedFoot() {
        return this._rData(this.foot);
    }
}
function style() {
    let { m, tb } = galhui_core__WEBPACK_IMPORTED_MODULE_3__.theme;
    return {
        [(0,galhui_core__WEBPACK_IMPORTED_MODULE_3__.c)("tb")]: {}
    };
}


/***/ }),

/***/ "../galhud/tools.ts":
/*!**************************!*\
  !*** ../galhud/tools.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateFilter": () => (/* binding */ dateFilter),
/* harmony export */   "search": () => (/* binding */ search),
/* harmony export */   "searchBy": () => (/* binding */ searchBy),
/* harmony export */   "selection": () => (/* binding */ selection),
/* harmony export */   "pagging": () => (/* binding */ pagging),
/* harmony export */   "singleSort": () => (/* binding */ singleSort),
/* harmony export */   "all": () => (/* binding */ all),
/* harmony export */   "totals": () => (/* binding */ totals),
/* harmony export */   "ids": () => (/* binding */ ids),
/* harmony export */   "tryRemove": () => (/* binding */ tryRemove),
/* harmony export */   "ctxMenu": () => (/* binding */ ctxMenu),
/* harmony export */   "entForm": () => (/* binding */ entForm),
/* harmony export */   "post": () => (/* binding */ post),
/* harmony export */   "mdPost": () => (/* binding */ mdPost),
/* harmony export */   "put": () => (/* binding */ put),
/* harmony export */   "mdPut": () => (/* binding */ mdPut),
/* harmony export */   "table": () => (/* binding */ table),
/* harmony export */   "formatter": () => (/* binding */ formatter),
/* harmony export */   "fmtFields": () => (/* binding */ fmtFields),
/* harmony export */   "card": () => (/* binding */ card),
/* harmony export */   "style": () => (/* binding */ style)
/* harmony export */ });
/* harmony import */ var entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entity */ "../entity/entity.js");
/* harmony import */ var entity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(entity__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! form */ "../form/form.js");
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var galhui_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! galhui/button */ "../galhui/button.ts");
/* harmony import */ var galhui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! galhui/core */ "../galhui/core.ts");
/* harmony import */ var galhui_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! galhui/dropdown */ "../galhui/dropdown.ts");
/* harmony import */ var galhui_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! galhui/icon */ "../galhui/icon.ts");
/* harmony import */ var galhui_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! galhui/menu */ "../galhui/menu.ts");
/* harmony import */ var galhui_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! galhui/modal */ "../galhui/modal.ts");
/* harmony import */ var galhui_output__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! galhui/output */ "../galhui/output.ts");
/* harmony import */ var galhui_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! galhui/select */ "../galhui/select.ts");
/* harmony import */ var inutil__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! inutil */ "../inutil/inutil.js");
/* harmony import */ var orray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! orray */ "../orray/orray.js");
/* harmony import */ var orray_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! orray/selector */ "../orray/selector.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core */ "../galhud/core.ts");
/* harmony import */ var _Pagging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagging */ "../galhud/Pagging.ts");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table */ "../galhud/table.ts");

















function dateFilter(def, cb, ph = 'Filtrar/data') {
    let items = [
        ['h0', 'Nesta hora'],
        ['h1', 'Hora passada'],
        ['06', 'De manha'],
        ['12', 'De tarde'],
        ['18', 'De noite'],
        ['d0', 'Hoje'],
        ['d1', 'Ontem'],
        ['w0', 'Esta semana'],
        ['w1', 'Semana passada'],
        ['f0', 'Esta quinzena'],
        ['f1', 'Quinzena passada'],
        ['m0', 'Este M�s'],
        ['m1', 'M�s passado'],
        ['t0', 'Este Trimestre'],
        ['t1', 'Trimestre passado'],
        ['s0', 'Este Simestre'],
        ['s1', 'Simestre passado'],
        ['y0', 'Este ano'],
        ['y1', 'Ano passado']
    ], input = new galhui_select__WEBPACK_IMPORTED_MODULE_7__["default"]({
        fluid: true,
        value: typeof def == 'string' ? def : null,
        menuRender: (p) => (0,galho__WEBPACK_IMPORTED_MODULE_8__.div)(["i"], p[1]),
        labelRender(key, label) {
            label.cls("ph", false).set([
                items.byKey(key)[1],
                (0,galhui_button__WEBPACK_IMPORTED_MODULE_9__.close)((e) => {
                    input.setValue(null);
                    e.stopPropagation();
                })
            ]);
        },
        empty(label) { label.cls("ph").set(ph); }
    }, items).on('input', (value) => {
        if (value)
            cb(`date_range(cd,'${value}')`, value);
        else
            cb(null);
    });
    if (def)
        input.set('value', input.model.value);
    return input;
}
const search = (bond) => (0,galho__WEBPACK_IMPORTED_MODULE_8__.div)(["in", "i"], [
    (0,galho__WEBPACK_IMPORTED_MODULE_8__.g)('input', {
        type: 'search',
        value: bond.query || '',
        placeholder: "Pesquisa...",
    }).on('input', function () { bond.query = this.value; }),
    (0,galhui_button__WEBPACK_IMPORTED_MODULE_9__.ibutton)('magnify', null, () => bond.selectNow())
]);
const searchBy = (bond) => {
    let list = (0,orray__WEBPACK_IMPORTED_MODULE_2__["default"])(bond.target.fields((f) => f.query));
    let mn = (0,galho__WEBPACK_IMPORTED_MODULE_8__.g)("table", 0, [
        galhui_menu__WEBPACK_IMPORTED_MODULE_10__.menu.cb(null, galhui_core__WEBPACK_IMPORTED_MODULE_11__.$.w.all, (v) => {
        }),
        galhui_menu__WEBPACK_IMPORTED_MODULE_10__.menu.hr()
    ]);
    return (0,galhui_dropdown__WEBPACK_IMPORTED_MODULE_12__["default"])((0,galhui_icon__WEBPACK_IMPORTED_MODULE_13__["default"])("menu-down"), list.bind(mn, (by, i, c) => {
        c.place(i + 2, galhui_menu__WEBPACK_IMPORTED_MODULE_10__.menu.cb(bond.queryBy.indexOf(by.key) >= 0, by.text, (ch) => {
            if (ch)
                bond.queryBy.push(by.key);
            else
                bond.queryBy.remove(by.key);
            bond.select();
        }));
    }));
};
const selection = (bond) => (0,galhui_dropdown__WEBPACK_IMPORTED_MODULE_12__["default"])((0,galhui_icon__WEBPACK_IMPORTED_MODULE_13__["default"])('select-group'), () => galhui_menu__WEBPACK_IMPORTED_MODULE_10__.menu.wait(async () => {
    let items = null;
    return items.map(s => {
        let y = (0,galhui_icon__WEBPACK_IMPORTED_MODULE_13__["default"])('tag-plus', "_a"), n = (0,galhui_icon__WEBPACK_IMPORTED_MODULE_13__["default"])('tag-minus', "_e"), _ = (0,galhui_icon__WEBPACK_IMPORTED_MODULE_13__["default"])('tag'), t = (0,galho__WEBPACK_IMPORTED_MODULE_8__.g)("span");
        return galhui_menu__WEBPACK_IMPORTED_MODULE_10__.menu.i(s.icon, s.text, () => {
            let t2 = bond.tags.find(i => i.id == s.id);
            if (t2 && t2.signal == '+') {
                bond.tags.remove(t2);
                bond.tags.push({ signal: '-', id: s.id });
                t.set(n);
            }
            else if (t2) {
                bond.tags.remove(t2);
                t.set(_);
            }
            else {
                bond.tags.push({ signal: '+', id: s.id });
                t.set(y);
            }
        }, t);
    });
}));
function pagging(bond, setlimit, viewtotal, extreme) {
    let p = new _Pagging__WEBPACK_IMPORTED_MODULE_5__["default"]({
        pag: bond.pag,
        minLimit: 25,
        limit: bond.limit,
        extreme,
        setlimit,
        viewtotal
    }).on((e) => {
        if ('pag' in e) {
            bond.pag = e.pag;
            if (!('limit' in e))
                bond.selectNow();
        }
        if ('limit' in e)
            bond.limit = e.limit;
    });
    bond.on(() => {
        p.set({
            total: bond.length,
            limit: bond.limit,
            pag: bond.pag
        });
    });
    return p;
}
function singleSort(bond, placeholder = (0,galho__WEBPACK_IMPORTED_MODULE_8__.g)('span', "ph", [(0,galhui_icon__WEBPACK_IMPORTED_MODULE_13__["default"])('sort'), 'Ordenar por'])) {
    let t = new galhui_select__WEBPACK_IMPORTED_MODULE_7__["default"]({
        labelRender: (v, s) => {
            let t0 = bond.target.field(v);
            return s.set([t0 && t0.text, (0,galhui_button__WEBPACK_IMPORTED_MODULE_9__.close)(() => t.setValue(null))]);
        },
        setMenu(key) {
            if (t.options.get(key))
                t.options.setTag("o", key);
        },
        value: bond.sort.length ? bond.sort[0].f : null,
        menuRender: (f) => (0,galho__WEBPACK_IMPORTED_MODULE_8__.div)("i", f.text),
        fluid: true,
        empty: s => s.set(placeholder)
    }, bond.target.fields((f) => f.sort)).on('input', (v) => bond.sort.set([v]));
    return t;
}
function all(bond) {
    let list = bond.bind(), t = (0,galho__WEBPACK_IMPORTED_MODULE_8__.g)('input', {
        type: 'checkbox'
    }).on('input', () => {
        if (t.prop('checked')) {
            (0,orray_selector__WEBPACK_IMPORTED_MODULE_3__.addAll)(list, "sd");
            t.props({
                checked: true,
                indeterminate: false
            });
            bond.all = true;
        }
        else
            (0,orray_selector__WEBPACK_IMPORTED_MODULE_3__.clear)(list, "sd");
    });
    (0,orray_selector__WEBPACK_IMPORTED_MODULE_3__.onchange)(list, "sd", (active, selected) => {
        bond.all = false;
        t.props({
            checked: !!active,
            indeterminate: !!active && (bond.pags > 1 || (selected ? selected.length < list.length : list.length > 1))
        });
    });
    return t;
}
const totals = (bond, totals) => null;
const ids = (bond) => bond.all ? bond.ids() : (0,orray_selector__WEBPACK_IMPORTED_MODULE_3__.list)(bond.list, "sd").sub(entity__WEBPACK_IMPORTED_MODULE_0__.$.id(bond.target));
const tryRemove = (ent, ids) => (0,galhui_modal__WEBPACK_IMPORTED_MODULE_14__.okCancel)('delete', 'Remover registos', 'Sera removido ' + ids.length + ' registos, deseja continuar?', () => ent.remove(ids));
function ctxMenu(bond, ctx = {}) {
    let ent = bond.target, items = (0,orray_selector__WEBPACK_IMPORTED_MODULE_3__.list)(bond.list, "sd"), none = !!items.length, valid = (filter) => {
        if (!filter)
            return true;
        switch (filter.tp) {
            case 1:
                return items.every(f => filter.exp.calc({ vars: f }));
            case 0:
                return items.some(f => filter.exp.calc({ vars: f }));
            case 2:
                return filter.exp.calc({ vars: { items } });
        }
    };
    return [
        ent.actions.map((a) => (a.static || none) && galhui_menu__WEBPACK_IMPORTED_MODULE_10__.menu.i(a.icon, a.text, async () => a.call(await ids(bond)), a.shortcut).prop("disabled", !valid(a.filter))),
        ent.canUpdate && galhui_menu__WEBPACK_IMPORTED_MODULE_10__.menu.i('pencil', galhui_core__WEBPACK_IMPORTED_MODULE_11__.$.w.edit, () => {
            let t = bond.list.getTag("o");
            ctx.edit ? ctx.edit(t) : mdPut(ent, t.value.id);
        }, galhui_core__WEBPACK_IMPORTED_MODULE_11__.$.sc.edit.join('+')).prop("disabled", none || !valid((0,inutil__WEBPACK_IMPORTED_MODULE_15__.isB)(ent.canUpdate) ? null : ent.canUpdate)),
        ent.canRemove && galhui_menu__WEBPACK_IMPORTED_MODULE_10__.menu.i({ d: 'delete', c: "_e" }, galhui_core__WEBPACK_IMPORTED_MODULE_11__.$.w.remove, async () => tryRemove(ent, await ids(bond)), galhui_core__WEBPACK_IMPORTED_MODULE_11__.$.sc.edit.join('+')).prop("disabled", none || !valid((0,inutil__WEBPACK_IMPORTED_MODULE_15__.isB)(ent.canRemove) ? null : ent.canRemove)),
    ];
}
const entForm = (ent, filter) => new form__WEBPACK_IMPORTED_MODULE_1__.Form({ intern: true }, ent.fields(filter).map((f) => f.input()));
function post(ent, form, cancelBt) {
    let def = (0,galho__WEBPACK_IMPORTED_MODULE_8__.g)(form).d(), i = ent.i;
    if (def)
        form.def = def;
    return [
        (0,galho__WEBPACK_IMPORTED_MODULE_8__.div)("hd", [(0,galhui_icon__WEBPACK_IMPORTED_MODULE_13__["default"])(i.icon), "Novo " + i.s]),
        (0,galho__WEBPACK_IMPORTED_MODULE_8__.g)(form, "bd"),
        (0,galho__WEBPACK_IMPORTED_MODULE_8__.div)("ft", [
            (0,galhui_button__WEBPACK_IMPORTED_MODULE_9__.ibutton)('content-save', galhui_core__WEBPACK_IMPORTED_MODULE_11__.$.w.saveData, (e) => {
                e.preventDefault();
                return form.valid() ? ent.insert(form.data(true, true)) : e.off();
            }).prop("type", 'submit'),
            cancelBt && (0,galhui_button__WEBPACK_IMPORTED_MODULE_9__.cancel)()
        ])
    ];
}
function mdPost(ent, form = entForm(ent, f => f.set)) {
    let t = (0,galhui_modal__WEBPACK_IMPORTED_MODULE_14__["default"])((0,galho__WEBPACK_IMPORTED_MODULE_8__.g)("form", "pn", post(ent, form, true)));
    form.focus();
    return t;
}
async function put(ent, id, form, cancelBt) {
    let dt = await ent.select({
        tp: 2,
        where: `id=${id}`,
        fill: true
    }), i = ent.i;
    (0,galho__WEBPACK_IMPORTED_MODULE_8__.g)(form).d() || (0,galho__WEBPACK_IMPORTED_MODULE_8__.g)(form).d(form.def);
    form.def = dt;
    form.reset();
    return [
        (0,galho__WEBPACK_IMPORTED_MODULE_8__.g)("div", "hd", [(0,galhui_icon__WEBPACK_IMPORTED_MODULE_13__["default"])(i.icon), "Editar " + i.s]),
        (0,galho__WEBPACK_IMPORTED_MODULE_8__.g)(form, "bd"),
        (0,galho__WEBPACK_IMPORTED_MODULE_8__.g)("div", "ft", [
            (0,galhui_button__WEBPACK_IMPORTED_MODULE_9__.ibutton)('content-save', galhui_core__WEBPACK_IMPORTED_MODULE_11__.$.w.saveData, (e) => {
                e.preventDefault();
                form.valid() ? ent.update(Object.assign(form.data(true), { id })) : e.off();
            }).d(1).prop("type", "submit"),
            ent.canInsert && (0,galhui_button__WEBPACK_IMPORTED_MODULE_9__.ibutton)('content-duplicate', "duplicar", (e) => {
                e.preventDefault();
                form.valid() ? ent.insert(Object.assign(form.data(), { id })) : e.off();
            }).d(1).prop("type", "submit"),
            cancelBt && (0,galhui_button__WEBPACK_IMPORTED_MODULE_9__.cancel)((0,inutil__WEBPACK_IMPORTED_MODULE_15__.isF)(cancelBt) && cancelBt)
        ])
    ];
}
;
const mdPut = (ent, id, form = entForm(ent, (f) => f.edit)) => put(ent, id, form, true).then(dt => {
    let t = (0,galhui_modal__WEBPACK_IMPORTED_MODULE_14__["default"])((0,galho__WEBPACK_IMPORTED_MODULE_8__.g)("form", "pn", dt));
    form.focus();
    return t;
});
function table(bond, i = {}) {
    let ent = bond.target;
    bond.fields.l || bond.fields.set((0,inutil__WEBPACK_IMPORTED_MODULE_15__.sub)(ent.fields((f) => !f.side), "key"));
    return new _table__WEBPACK_IMPORTED_MODULE_6__["default"]({
        sort: 1,
        single: i.single,
        p: i.p || (0,_core__WEBPACK_IMPORTED_MODULE_4__.defFieldRenderer)(),
        corner: (0,galhui_output__WEBPACK_IMPORTED_MODULE_16__.output)(all(bond)),
        open: i.open || i.edit || ((value) => mdPut(ent, value === null || value === void 0 ? void 0 : value.id)),
        delete: (...value) => tryRemove(ent, value.sub('id')),
        menu: () => ctxMenu(bond, { edit: i.edit }),
        options: i.options,
        columns: bond.fields.copy(v => {
            var _a;
            let f = ent.field(v), tp = f.type;
            return {
                key: v,
                text: f.text,
                align: tp.align,
                sz: tp.size() * galhui_core__WEBPACK_IMPORTED_MODULE_11__.theme.sz.n,
                tp: tp.dt,
                fmt: (_a = tp.output) === null || _a === void 0 ? void 0 : _a.bind(f)
            };
        })
    }, bond.bind());
}
async function rangeFilter(field, bond) {
    let reload = () => bond.addFilter(field.key, `${field.key}${op.value}${input.value}`), op = new galhui_select__WEBPACK_IMPORTED_MODULE_7__["default"]({
        menuRender: v => (0,galho__WEBPACK_IMPORTED_MODULE_8__.div)(["i"], v.key)
    }, [
        { key: '=' },
        { key: '>' },
        { key: '<' },
        { key: '>=' },
        { key: '<=' },
        { key: '<>' },
    ]).on('input', reload), input = field.input().on((e) => {
        if ('value' in e)
            reload();
    });
    return (0,galhui_output__WEBPACK_IMPORTED_MODULE_16__.output)((0,galho__WEBPACK_IMPORTED_MODULE_8__.g)(op).css('minWidth', 'unset'), input);
}
function searchFilter(field, bond) {
    let key = field.key, list = (0,orray__WEBPACK_IMPORTED_MODULE_2__["default"])();
    return (0,galhui_select__WEBPACK_IMPORTED_MODULE_7__.openSelect)(async function (value) {
        if (value) {
            list.set((await bond.target.select({})));
            bond.addFilter(key, key + '=' + value);
            this.set('open', true);
        }
        else {
            list.set();
            bond.removeFilter(key);
            this.set('open', false);
        }
    }, { options: list, key: key, menuRender: (item) => item[key] });
}
const filters = (bond) => (0,galho__WEBPACK_IMPORTED_MODULE_8__.div)(["mn"], bond.target.fields().map((field) => (0,inutil__WEBPACK_IMPORTED_MODULE_15__.call)((0,entity__WEBPACK_IMPORTED_MODULE_0__.ftype)(field).filter(field), filter => filter && (0,galho__WEBPACK_IMPORTED_MODULE_8__.div)(0, [
    (0,galhui_output__WEBPACK_IMPORTED_MODULE_16__.label)(field.text).css('width', '40%'),
    (0,galho__WEBPACK_IMPORTED_MODULE_8__.wrap)(filter).css('width', "60%")
]))));
const formatter = {};
function fmtFields(fmt) {
    let f = [];
    (0,inutil__WEBPACK_IMPORTED_MODULE_15__.each)(fmt, v => f.push(...v.vars()));
    return f.distinct();
}
function card(bond) {
    let e = bond.target, main = e.field(f => !e.mainField || f.key == e.mainField), bf = bond.fields, tags = e.fields((f) => (bf.length ? bf.includes(f.key) : !f.side) && f.key != main.key), p = (0,_core__WEBPACK_IMPORTED_MODULE_4__.defFieldRenderer)();
    bf.l || bf.set([main.key, ...tags.map(t => t.key),].distinct());
    return (rec) => {
        let ctx = { p, rec }, s = (0,galho__WEBPACK_IMPORTED_MODULE_8__.div)((0,galhui_core__WEBPACK_IMPORTED_MODULE_11__.c)("cd"), [
            (0,galho__WEBPACK_IMPORTED_MODULE_8__.wrap)(main.output(rec[main.key], ctx), null, 'p'),
            tags.map((t) => {
                let v = rec[t.key];
                return v == null ? null : (0,galhui_output__WEBPACK_IMPORTED_MODULE_16__.keyVal)(t.text, t.output(v, ctx));
            })
        ]);
        return s;
    };
}
function style() {
    let { m, tb } = galhui_core__WEBPACK_IMPORTED_MODULE_11__.theme;
    return {
        [(0,galhui_core__WEBPACK_IMPORTED_MODULE_11__.c)("tb")]: {}
    };
}


/***/ }),

/***/ "../galhui/ctx.ts":
/*!************************!*\
  !*** ../galhui/ctx.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ctx)
/* harmony export */ });
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../galhui/core.ts");


async function ctx(e, data) {
    e.stopPropagation();
    e.preventDefault();
    let last = (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)(document.activeElement), ctx = (0,galho__WEBPACK_IMPORTED_MODULE_0__.div)((0,galho__WEBPACK_IMPORTED_MODULE_0__.cl)(_core__WEBPACK_IMPORTED_MODULE_1__.$.c, "mn"), await data).css({
        left: e.clientX + 'px',
        top: e.clientY + 'px'
    }).prop("tabIndex", 0);
    ctx.queryAll('button').on('click', function () { last.valid ? last.focus() : this.blur(); });
    ctx.addTo(_core__WEBPACK_IMPORTED_MODULE_1__.body).on({
        focusout(e) {
            if (!this.contains(e.relatedTarget))
                this.remove();
        },
        keydown(e) {
            if (e.key == "Escape") {
                e.stopPropagation();
                this.blur();
            }
        }
    }).focus();
}


/***/ }),

/***/ "../galhui/output.ts":
/*!***************************!*\
  !*** ../galhui/output.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "label": () => (/* binding */ label),
/* harmony export */   "output": () => (/* binding */ output),
/* harmony export */   "keyVal": () => (/* binding */ keyVal),
/* harmony export */   "tip": () => (/* binding */ tip),
/* harmony export */   "style": () => (/* binding */ style)
/* harmony export */ });
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../galhui/core.ts");


const label = (content) => (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("label", "lb", content);
const output = (...content) => (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("span", "lb", content);
const keyVal = (key, val) => (0,galho__WEBPACK_IMPORTED_MODULE_0__.g)("span", "in", [key + ": " + val]);
const tip = (e, value) => e.prop("title", value);
function style() {
    let { a } = _core__WEBPACK_IMPORTED_MODULE_1__.theme;
    return {
        [(0,_core__WEBPACK_IMPORTED_MODULE_1__.c)("lb")]: Object.assign({}, (0,_core__WEBPACK_IMPORTED_MODULE_1__.block)(a))
    };
}


/***/ }),

/***/ "../galhui/select.ts":
/*!***************************!*\
  !*** ../galhui/select.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectBase": () => (/* binding */ SelectBase),
/* harmony export */   "default": () => (/* binding */ Select),
/* harmony export */   "Multselect": () => (/* binding */ Multselect),
/* harmony export */   "openSelect": () => (/* binding */ openSelect)
/* harmony export */ });
/* harmony import */ var galho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! galho */ "../galho/galho.js");
/* harmony import */ var orray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! orray */ "../orray/orray.js");
/* harmony import */ var inutil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inutil */ "../inutil/inutil.js");
/* harmony import */ var _hover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hover */ "../galhui/hover.ts");
/* harmony import */ var orray_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! orray/selector */ "../orray/selector.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ "../galhui/icon.ts");






class SelectBase extends galho__WEBPACK_IMPORTED_MODULE_2__.E {
    constructor(i, items) {
        if (!i.key)
            i.key = 'key';
        super(i);
        this.options = (0,orray__WEBPACK_IMPORTED_MODULE_0__["default"])(items, {
            key: i.key,
            clear: true,
            parse: (e) => (0,inutil__WEBPACK_IMPORTED_MODULE_3__.isO)(e) ? e : { [i.key]: e }
        });
    }
    setMenu(base) {
        this.menu.addTo(base);
        if (this.i.fluid)
            (0,_hover__WEBPACK_IMPORTED_MODULE_4__.fluid)(base, this.menu);
        else
            (0,_hover__WEBPACK_IMPORTED_MODULE_4__.fixed)(base, this.menu);
    }
    view() {
        let _this = this, i = this.i, options = this.options, lb = (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)(i.label || 'div').cls("bd");
        this.label = i.labelItems || lb;
        this.menu = (i.menu || (0,galho__WEBPACK_IMPORTED_MODULE_2__.div)()).cls("mn");
        i.open = false;
        let root = (0,galho__WEBPACK_IMPORTED_MODULE_2__.div)(`${"sl"} ${i.cls || ''}`, [lb, i.noIcon || (0,_icon__WEBPACK_IMPORTED_MODULE_5__["default"])('menu-down')])
            .prop("tabIndex", 0);
        this.bind(root, (s, state) => {
            let model = this.i;
            if ("off" in state) {
                if (model.off) {
                    this.set("open", false);
                    s.blur();
                    s.cls("ds");
                    s.prop('tabIndex', -1);
                }
                else {
                    s.cls("ds", false);
                    s.prop('tabIndex', model.tabIndex === false ? -1 : 0);
                }
            }
            if ("open" in state) {
                this.emit('focus', model.open);
                s.cls("o", model.open);
                if (model.open) {
                    if (model.off) {
                        this.set("open", false);
                        return;
                    }
                    this.setMenu(s);
                }
                else {
                    s.cls(["_b", "_t"], false);
                    this.menu.remove();
                }
            }
        }).on({
            focus: (e) => {
                if (i.off) {
                    if (e.relatedTarget)
                        (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)(e.relatedTarget).focus();
                    else
                        root.blur();
                }
                else
                    root.cls("sd");
            },
            focusout: (e) => {
                if (!i.off && !root.contains(e.relatedTarget)) {
                    root.cls("sd", false);
                    this.set("open", false);
                }
            },
            keydown: (e) => {
                switch (e.key) {
                    case "ArrowUp":
                        this.set("open", true);
                        (0,orray_selector__WEBPACK_IMPORTED_MODULE_1__.move)(options, "sd", -1, (0,orray_selector__WEBPACK_IMPORTED_MODULE_1__.tp)(e.shiftKey, e.ctrlKey));
                        break;
                    case "ArrowDown":
                        this.set("open", true);
                        (0,orray_selector__WEBPACK_IMPORTED_MODULE_1__.move)(options, "sd", 1, (0,orray_selector__WEBPACK_IMPORTED_MODULE_1__.tp)(e.shiftKey, e.ctrlKey));
                        break;
                    case "Enter":
                        if (i.open) {
                            if (options.length == 1) {
                                _this.setValue(options[0][i.key]);
                            }
                            else {
                                _this.setValue(...(0,orray_selector__WEBPACK_IMPORTED_MODULE_1__.list)(options, "sd").sub(i.key));
                                break;
                            }
                        }
                        return;
                    case "Escape":
                        if (i.open) {
                            this.set("open", false);
                            break;
                        }
                        else
                            return;
                    case "Delete": {
                        let target = (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)(e.target);
                        if (target.is('input') || target.is('textarea') || !_this.delete())
                            return;
                        else
                            break;
                    }
                    case "Backspace": {
                        let target = (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)(e.target);
                        if (target.is('input') || target.is('textarea') || !_this.backspace())
                            return;
                        else
                            break;
                    }
                    default:
                        return;
                }
                e.stopPropagation();
                e.preventDefault();
            }
        });
        if (!i.noClick)
            root.on('click', (e) => {
                if (i.off) {
                    e.stopImmediatePropagation();
                }
                else {
                    if (!this.menu.contains(e.target))
                        _this.toggle("open");
                }
            });
        return root;
    }
    insertItem(value) {
        var model = this.i;
        return (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)(model.menuRender(value))
            .on('click', (e) => {
            e.stopPropagation();
            let k = value[model.key];
            this.setValue(k);
        });
    }
}
class Select extends SelectBase {
    get value() {
        return this.i.value;
    }
    onSetValue() {
        let md = this.i, lb = this.label;
        if (md.value == null) {
            if (md.empty)
                md.empty(lb);
        }
        else {
            md.labelRender(md.value, lb);
        }
        md.setMenu(md.value);
    }
    view() {
        let model = this.i, div = super.view(), menu = model.menuItems || this.menu;
        if (!model.setMenu)
            model.setMenu = (key) => this.options.setTag("open", key);
        this.onSetValue();
        this.on((e) => {
            if ("value" in e) {
                this.onSetValue();
                this.set("open", false);
            }
        });
        this.options.bind(menu, {
            insert: this.insertItem.bind(this),
            tag(s, active, tag) {
                s.cls(tag, active);
                if (active) {
                    menu.vScroll(s.prop('offsetTop') - menu.prop('clientHeight') / 2 + s.prop('clientHeight') / 2);
                }
            }
        });
        return div;
    }
    delete() {
        if (this.i.value == null)
            return false;
        this.setValue(null);
        return true;
    }
    backspace() {
        if (this.i.value == null)
            return false;
        this.setValue(null);
        return true;
    }
    setValue(value) {
        if (this.i.value !== value) {
            this.set({
                value: value,
                selected: this.options.byKey(value)
            });
            this.emit('input', value);
            return true;
        }
    }
}
class Multselect extends SelectBase {
    constructor(model, options) {
        super(model, options);
        this.options.addGroup("sd");
        (0,orray__WEBPACK_IMPORTED_MODULE_0__["default"])(model.value, {
            parse: orray__WEBPACK_IMPORTED_MODULE_0__.L.distinct()
        });
    }
    get value() { return this.i.value; }
    view() {
        let i = this.i, values = i.value, options = this.options, div = super.view(), mItems = i.menuItems, menu = i.menuItems || this.menu;
        this.label.css('flexWrap', 'wrap');
        options.bind(menu, {
            insert: this.insertItem.bind(this),
            tag(s, active, tag) {
                s.cls(tag, active);
                if (active) {
                    menu.vScroll(s.e.offsetTop - menu.prop('clientHeight') / 2 + s.prop('clientHeight') / 2);
                }
            },
            groups: {
                focus(e, active) { e.cls("o", active); }
            }
        });
        values.bind(menu, {
            insert(key) {
                let index = options.itemIndex(key);
                if (index != -1)
                    mItems
                        .child(index)
                        .cls("ma");
            },
            remove(key) {
                let index = options.itemIndex(key);
                if (index != -1)
                    mItems
                        .child(index)
                        .cls("ma", false);
            }
        });
        values.bind(this.label, {
            insert: i.labelRender,
            empty: i.empty
        });
        return div;
    }
    delete() {
        let vl = this.i.value;
        if (!vl.length)
            return false;
        this.removeValue(vl[0]);
        return true;
    }
    backspace() {
        let vl = this.i.value;
        if (!vl.length)
            return false;
        this.removeValue(vl.z);
        return true;
    }
    setValue(...values) {
        let md = this.i;
        if (values.length) {
            let inserted = [];
            for (let value of values) {
                if (md.value.indexOf(value) == -1) {
                    inserted.push(value);
                }
            }
            if (inserted.length > 0) {
                md.value.push(...inserted);
                this.emit('add', inserted);
                this.emit('input', md.value);
                if (md.open && this.$)
                    this.setMenu(this.$);
            }
        }
    }
    removeValue(...values) {
        let md = this.i, removed = [];
        for (let value of values) {
            let i = md.value.indexOf(value);
            if (i != -1) {
                md.value.removeAt(i);
                removed.push(value);
            }
        }
        if (removed.length > 0) {
            this.emit('remove', removed);
            this.emit('input', md.value);
            if (md.open && this.$)
                this.setMenu(this.$);
        }
    }
}
function openSelect(input, i = {}) {
    let ip = i.label = (0,galho__WEBPACK_IMPORTED_MODULE_2__.g)('input', { type: i.input }).on('input', function () {
        input.call(select, this.value);
    });
    i.labelRender = (value) => {
        ip.prop('value', value);
    };
    let select = new Select(i);
    return select;
}


/***/ }),

/***/ "../orray/selector.ts":
/*!****************************!*\
  !*** ../orray/selector.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pivot": () => (/* binding */ pivot),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "addAll": () => (/* binding */ addAll),
/* harmony export */   "clear": () => (/* binding */ clear),
/* harmony export */   "onchange": () => (/* binding */ onchange),
/* harmony export */   "tp": () => (/* binding */ tp),
/* harmony export */   "move": () => (/* binding */ move),
/* harmony export */   "movePivot": () => (/* binding */ movePivot),
/* harmony export */   "list": () => (/* binding */ list)
/* harmony export */ });
const clamp = (value, min, max) => value < min ? min : value >= max ? max - 1 : value;
function pivot(l, tag) {
    let t = l.getTag(tag);
    return t ? t.index : 0;
}
function add(l, key, value, tp) {
    let g = l.g[key];
    let tag = l.getTag(key), o = tag ? tag.index : -1, n = l.itemIndex(value);
    if (o != n) {
        l.setTag(key, value);
        if (g)
            switch (tp) {
                case 0:
                    g.set([l[n]]);
                    break;
                case 1:
                    g.push(l[n]);
                    break;
                case 2:
                    if (o > n) {
                        let t = o;
                        o = n;
                        n = t;
                    }
                    g.setRange(o, n);
                case 3:
                    if (o > n) {
                        let t = o;
                        o = n;
                        n = t;
                    }
                    g.pushRange(o, n);
                    break;
            }
    }
    return l;
}
function addAll(l, tag) {
    var _a;
    if (l.length) {
        if (!l.getTag(tag))
            l.setTag(tag, l[0]);
        (_a = l.g[tag]) === null || _a === void 0 ? void 0 : _a.pushAll();
    }
    return l;
}
function clear(l, tag) {
    var _a;
    l.setTag(tag);
    (_a = l.g[tag]) === null || _a === void 0 ? void 0 : _a.set();
    return l;
}
function onchange(l, tag, listener) {
    let g = l.g[tag];
    g ? g.on(() => {
        let t = l.getTag(tag);
        listener.call(l, t && t.value, g);
    }) : l.ontag(tag, listener);
    return l;
}
const tp = (control, shift) => control ?
    shift ?
        3 :
        2 :
    shift ?
        2 :
        0;
function move(l, tag, distance, tp) {
    return add(l, tag, l[clamp(pivot(l, tag) + distance, 0, l.length)], tp);
}
function movePivot(l, tag, distance, revert) {
    let ll = l.length;
    if (ll) {
        let i = pivot(l, tag) + distance;
        l.setTag(tag, l[revert ?
            i < 0 ? ll - 1 : i >= ll ? 0 : i :
            clamp(i, 0, l.length)]);
    }
    return l;
}
function list(l, key) {
    let tag, g = l.g[key];
    return g ? g.slice() : ((tag = l.getTag(key)) ? [tag.value] : []);
}


/***/ }),

/***/ "../form/form.js":
/*!***********************!*\
  !*** ../form/form.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Form = exports.FormBase = exports.errors = exports.bots = exports.Input = void 0;
const galho_1 = __webpack_require__(/*! galho */ "../galho/galho.js");
const inutil_1 = __webpack_require__(/*! inutil */ "../inutil/inutil.js");
class Input extends galho_1.E {
    constructor(i) {
        super(i);
        i.text || (i.text = i.key);
        inutil_1.isU(i.value) && (i.value = this.def);
    }
    get value() { return this.i.value; }
    get key() { return this.i.key; }
    get def() { return inutil_1.def(this.i.def, this.nullValue); }
    setValue(value) {
        this.set("value", value);
    }
    get inline() { return this.ctx ? this.ctx.inline : false; }
    reset() {
        this.setValue(this.def);
        return this;
    }
    clear() {
        this.setValue(this.nullValue);
    }
    isDef(value = this.value, def = this.def) {
        return def === value;
    }
    isNull(value = this.value) { return this.isDef(this.value, this.nullValue); }
    observeVisited(handler) {
        galho_1.g(this).focusout(() => {
            this.visited = true;
            handler();
        });
    }
    get disabled() { return this._off; }
    set disabled(state) {
        galho_1.g(this).attr("disabled", this._off = state);
    }
    error(state) {
        galho_1.g(this).cls("_e", state);
        return this;
    }
    get valid() {
        let e = this.validate(this.value);
        return e.length ? e : null;
    }
    validate(value) {
        let i = this.i, errs = [];
        if (i.req && this.isNull(value))
            errs.push("req");
        return errs;
    }
    submit(data) {
        data[this.i.key] = this.value;
    }
    get nullValue() { return null; }
}
exports.Input = Input;
exports.bots = {};
exports.errors = {};
class FormBase extends galho_1.E {
    constructor(i, inputs) {
        super(i);
        this.errors = {};
        this.inputs = inputs.map(input => {
            input.on(() => {
                input.visited && this.setErrors(input.key, input.valid);
                this.emit("input", input);
            });
            input.observeVisited(() => this.setErrors(input.key, input.valid));
            return input;
        });
        if (i.bots)
            for (let bot of i.bots) {
                let srcs = {};
                let calc = () => exports.bots[bot.tp].call(this, srcs, bot);
                for (let src of bot.srcs)
                    srcs[src] = this.getData(src, calc);
            }
    }
    get isDef() {
        for (let input of this.inputs)
            if (!input.isDef())
                return false;
        return true;
    }
    input(key) { return this.inputs.find(f => f.key == key); }
    setErrors(key, errors) {
        this.errors[key] = errors;
        this.input(key)?.error();
    }
    valid(omit, focus = !omit) {
        for (let input of this.inputs) {
            let v = input.valid;
            this.setErrors(input.key, input.valid);
            if (v) {
                if (focus)
                    input.$.focus();
                return false;
            }
        }
        return true;
    }
    focus() {
        for (let input of this.inputs)
            if (!input.disabled) {
                input.focus();
                break;
            }
        return this;
    }
    get def() {
        let r = {};
        for (let { key, def } of this.inputs)
            r[key] = def;
        return r;
    }
    set def(value) {
        this.inputs.forEach(i => i.set("def", value[i.key]));
    }
    reset() {
        for (let field of this.inputs)
            field.reset();
        return this;
    }
    clear() {
        for (let field of this.inputs)
            field.clear();
        return this;
    }
    data(edited, required) {
        let inputs = this.inputs;
        let value = Object.assign({}, this.i.hidden);
        for (let input of edited ? inputs.filter(i => (required && i.i.req) || !i.isDef()) : inputs)
            input.submit(value);
        return value;
    }
    formData(edited, required) {
        let r = new FormData(), data = this.data(edited, required);
        for (let key in data)
            r.append(key, data[key]);
        return r;
    }
    getData(key, onupdate) {
        let i = this.i, target = this.inputs.find(f => f.key == key);
        if (target) {
            onupdate && target.on(onupdate);
        }
        else if (i.hidden && key in i.hidden)
            target = i.hidden[key];
        else if (i.meta && key in i.meta)
            target = i.meta[key];
        else
            target = i.parent ? i.parent.getData(key, onupdate) : null;
        return target;
    }
    renderErrors() {
        let t = this.errors, result = [];
        for (let key in t) {
            let i = this.input(key);
            for (let error of t[key]) {
                (typeof error == "string") && (error = { tp: error });
                result.push(galho_1.div(0, [
                    i && [i.i.text, ": "],
                    exports.errors[error.tp](),
                    error.info && galho_1.g("sub", 0, error.info),
                ]));
            }
        }
        return result;
    }
}
exports.FormBase = FormBase;
class Form extends FormBase {
    constructor(i, inputs) {
        super(i, inputs);
        this.on('input', (input) => setTimeout(() => galho_1.g(input).parent().try(p => p.attr("edited", !input.isDef))));
        this._errorDiv = i.errorDiv || galho_1.div("_e");
    }
    view() {
        let { intern: i, label } = this.i;
        return galho_1.g(i ? 'div' : 'form', "form", [
            this.inputs.map(input => {
                let i = input.i, r, lb = galho_1.g('label', 0, i.text).props({ htmlFor: i.key, title: i.text });
                if (i.outline)
                    r = galho_1.div("i", [
                        lb, i, galho_1.div('inf')
                    ]);
                else
                    r = galho_1.div("i", [
                        lb.css('width', `${label}%`), i, !!i.req && galho_1.g('span', "req", '*'),
                    ]);
                return r;
            }),
            this._errorDiv
        ]);
    }
    get inline() { return false; }
    setErrors(key, errors) {
        super.setErrors(key, errors);
        this._errorDiv.set(this.renderErrors());
    }
}
exports.Form = Form;
Form.default = {
    label: 40
};
//# sourceMappingURL=form.js.map

/***/ }),

/***/ "../format/format.js":
/*!***************************!*\
  !*** ../format/format.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "time": () => (/* reexport safe */ _time__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "scalar": () => (/* reexport safe */ _scalar__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "locale": () => (/* binding */ locale),
/* harmony export */   "locales": () => (/* binding */ locales),
/* harmony export */   "setLocale": () => (/* binding */ setLocale),
/* harmony export */   "addLocale": () => (/* binding */ addLocale),
/* harmony export */   "default": () => (/* binding */ fmt)
/* harmony export */ });
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "../format/time.ts");
/* harmony import */ var _scalar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scalar */ "../format/scalar.ts");



let locale;
let locales = {};
function setLocale(value) {
    for (let key of (typeof value === 'string' ? [value] : value))
        if (key in locales) {
            locale = locales[key];
            _scalar__WEBPACK_IMPORTED_MODULE_1__.inFull.splice(0, _scalar__WEBPACK_IMPORTED_MODULE_1__.inFull.length, ...locale.inFull);
            return;
        }
    throw `locale(s) '${value}' not found`;
}
function addLocale(key, locale) {
    locales[key] = locale;
}
addLocale('pt', {
    inFull: [
        { v: 0, exp: () => 'zero' },
        { v: 1, exp: (_, o) => o.g == 'f' ? 'uma' : 'um' },
        { v: 2, exp: (_, o) => o.g == 'f' ? 'duas' : 'dois' },
        { v: 3, exp: () => 'três' },
        { v: 4, exp: () => 'quatro' },
        { v: 5, exp: () => 'cinco' },
        { v: 6, exp: () => 'seis' },
        { v: 7, exp: () => 'sete' },
        { v: 8, exp: () => 'oito' },
        { v: 9, exp: () => 'nove' },
        { v: 10, exp: () => 'dez' },
        { v: 11, exp: () => 'onze' },
        { v: 12, exp: () => 'doze' },
        { v: 13, exp: () => 'treze' },
        { v: 14, exp: () => 'quatorze' },
        { v: 15, exp: () => 'quinze' },
        { v: 16, exp: () => 'dezasseis' },
        { v: 17, exp: () => 'dezassete' },
        { v: 18, exp: () => 'dezoito' },
        { v: 19, exp: () => 'dezanove' },
        {
            v: 20, exp(n, o, i) {
                let r;
                switch (Math.floor(n / 10)) {
                    case 2:
                        r = 'vinte';
                        break;
                    case 3:
                        r = 'trinta';
                        break;
                    case 4:
                        r = 'quarenta';
                        break;
                    case 5:
                        r = 'cinquenta';
                        break;
                    case 6:
                        r = 'sessenta';
                        break;
                    case 7:
                        r = 'setenta';
                        break;
                    case 8:
                        r = 'oitenta';
                        break;
                    case 9:
                        r = 'noventa';
                        break;
                }
                let t = n % 10;
                if (t)
                    r += ' e ' + o.c(t, o, i - 1);
                return r;
            }
        },
        { v: 100, exp: (n, o, i) => n == 100 ? 'cem' : 'cento e ' + o.c(n - 100, o, i - 1) },
        {
            v: 200, exp(n, o, i) {
                let r;
                switch (Math.floor(n / 100)) {
                    case 2:
                        r = 'duzentos';
                        break;
                    case 3:
                        r = 'trezentos';
                        break;
                    case 4:
                        r = 'quatrocentos';
                        break;
                    case 5:
                        r = 'quinhentos';
                        break;
                    case 6:
                        r = 'seiscento';
                        break;
                    case 7:
                        r = 'setecentos';
                        break;
                    case 8:
                        r = 'oitocentos';
                        break;
                    case 9:
                        r = 'novecentos';
                        break;
                }
                let t = n % 100;
                if (t)
                    r += ' e ' + o.c(t, o, i - 1);
                return r;
            }
        },
        {
            v: 1000, exp: (n, o, i) => {
                let t1 = Math.floor(n / 1000), r = t1 == 1 ? 'mil' : o.c(t1, o, i - 1) + ' mil', t2 = n % 1000;
                if (t2)
                    r += ', ' + o.c(t2, o, i - 1);
                return r;
            }
        },
        {
            v: 1000000, exp: (n, o, i) => {
                let t1 = Math.floor(n / 1000000), r = t1 == 1 ? 'um milhão' : o.c(t1, o, i - 1) + ' milhões', t2 = n % 1000000;
                if (t2)
                    r += ', ' + o.c(t2, o, i - 1);
                return r;
            }
        },
        {
            v: 1000000000000, exp: (n, o, i) => {
                let t1 = Math.floor(n / 1000000000000), r = t1 == 1 ? 'um bilhão' : o.c(t1, o, i - 1) + ' bilhões', t2 = n % 1000000000000;
                if (t2)
                    r += ', ' + o.c(t2, o, i - 1);
                return r;
            }
        },
    ]
});
function fmt(value, exp, opts) {
    if (typeof opts == "string") {
        exp = exp + ";" + opts;
        opts = null;
    }
    if (value == null && opts && opts.def)
        return opts.def;
    if (exp == null)
        return value;
    let split = exp.split(';', 3), type = split[0], format = split.length > 1 ? split[1] : type;
    if (value == null && split.length == 3)
        value = split[2];
    if (split.length == 1 || type == 'a') {
        switch (typeof value) {
            case 'number':
            case 'bigint':
                type = 'n';
                break;
            case 'string':
                if (isNaN(value))
                    type = 'n';
                else if (false)
                    {}
                else
                    type = 't';
                break;
            case 'object':
                type = 'd';
                break;
            case 'boolean':
                type = 'b';
                break;
            default:
                type = 't';
        }
    }
    switch (split[0]) {
        case 'd':
            return (0,_time__WEBPACK_IMPORTED_MODULE_0__.create)(value).fmt(format);
        case 'n':
            return (0,_scalar__WEBPACK_IMPORTED_MODULE_1__["default"])(value).fmt(format, opts);
        default:
    }
}
//# sourceMappingURL=format.js.map

/***/ }),

/***/ "../jcalc/jcalc.js":
/*!*************************!*\
  !*** ../jcalc/jcalc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.query = exports.queryInObj = exports.QueryAlgorithm = exports.addFormulas = exports.compileExpression = exports.calcAll = exports.parse = exports.clone = exports.analize = exports.defineTranslateFunc = exports.ObjectVal = exports.TextValue = exports.VarVal = exports.NumbVal = exports.CallVal = exports.FnVal = exports.GroupVal = exports.SignalVal = exports.DicVal = exports.TernaryOp = exports.NulledOp = exports.PowOp = exports.GreaterOp = exports.GreaterEqualOp = exports.OrOp = exports.LessOp = exports.DifOp = exports.LesEqualOp = exports.ConcatOp = exports.AndOp = exports.EqualOp = exports.DivOp = exports.SubOp = exports.TimeOp = exports.SumOp = exports.OpVal = exports.ParseError = exports.Error = void 0;
var Error;
(function (Error) {
    Error[Error["varNotFound"] = 10] = "varNotFound";
})(Error = exports.Error || (exports.Error = {}));
class ParseError {
}
exports.ParseError = ParseError;
class OpVal {
    get op() { return 'op'; }
    valid() { return !!this.b; }
    push(expression) {
        if (this.b)
            throw "invalid expression";
        this.b = expression;
    }
    toString() { return this.toJSON(); }
    vars(vars = []) {
        this.a.vars(vars);
        this.b.vars(vars);
        return vars;
    }
    translate(dir) {
        let t = Object.create(Object.getPrototypeOf(this));
        t.a = this.a.translate(dir);
        t.b = this.b.translate(dir);
        return t;
    }
    analize(check) {
        let t = check(this.a);
        if (t)
            this.a = t;
        else
            this.a.analize(check);
        if (t = check(this.b))
            this.b = t;
        else
            this.b.analize(check);
    }
    *[Symbol.iterator]() {
        yield this;
        yield* this.a;
        yield* this.b;
    }
}
exports.OpVal = OpVal;
class SumOp extends OpVal {
    get level() { return 4; }
    calc(opts) {
        let a = this.a.calc(opts), b = this.b.calc(opts);
        if (opts.try) {
            if (!a)
                a = 0;
            if (!b)
                b = 0;
        }
        if (typeof a == 'string')
            a = parseFloat(a);
        if (typeof b == 'string')
            b = parseFloat(b);
        return a + b;
    }
    toJSON() {
        return this.a + '+' + this.b;
    }
}
exports.SumOp = SumOp;
SumOp.op = '+';
class TimeOp extends OpVal {
    get level() { return 5; }
    calc(opts) {
        var a = this.a.calc(opts), b = this.b.calc(opts);
        if (opts.try) {
            if (!a)
                a = 0;
            if (!b)
                b = 0;
        }
        return a * b;
    }
    toJSON() {
        return this.a + '*' + this.b;
    }
}
exports.TimeOp = TimeOp;
TimeOp.op = '*';
class SubOp extends OpVal {
    get level() { return 4; }
    calc(opts) {
        var a = this.a.calc(opts), b = this.b.calc(opts);
        if (opts.try) {
            if (!a)
                a = 0;
            if (!b)
                b = 0;
        }
        return a - b;
    }
    toJSON() {
        return this.a + '-' + this.b;
    }
}
exports.SubOp = SubOp;
SubOp.op = '-';
class DivOp extends OpVal {
    get level() { return 5; }
    calc(opts) {
        var a = this.a.calc(opts), b = this.b.calc(opts);
        if (opts.try) {
            if (!a)
                a = 0;
            if (!b)
                b = 0;
        }
        if (b == 0)
            return null;
        return a / b;
    }
    toJSON() {
        return this.a + '/' + this.b;
    }
}
exports.DivOp = DivOp;
DivOp.op = '/';
class EqualOp extends OpVal {
    get level() { return 2; }
    calc(opts) {
        return this.a.calc(opts) == this.b.calc(opts);
    }
    toJSON() {
        return this.a + '=' + this.b;
    }
}
exports.EqualOp = EqualOp;
EqualOp.op = '=';
class AndOp extends OpVal {
    get level() { return 1; }
    calc(opts) {
        return this.a.calc(opts) && this.b.calc(opts);
    }
    toJSON() {
        return this.a + '&&' + this.b;
    }
}
exports.AndOp = AndOp;
AndOp.op = '&&';
class ConcatOp extends OpVal {
    get level() { return 3; }
    calc(opts) {
        let a = this.a.calc(opts), b = this.b.calc(opts);
        return (a == null ? '' : a + '') + (b == null ? '' : b + '');
    }
    toJSON() {
        return this.a + '&' + this.b;
    }
}
exports.ConcatOp = ConcatOp;
ConcatOp.op = '&';
class LesEqualOp extends OpVal {
    get level() { return 2; }
    calc(opts) {
        return this.a.calc(opts) <= this.b.calc(opts);
    }
    toJSON() {
        return this.a + '<=' + this.b;
    }
}
exports.LesEqualOp = LesEqualOp;
LesEqualOp.op = '<=';
class DifOp extends OpVal {
    get level() { return 2; }
    calc(opts) {
        return this.a.calc(opts) != this.b.calc(opts);
    }
    toJSON() {
        return this.a + '<>' + this.b;
    }
}
exports.DifOp = DifOp;
DifOp.op = '<>';
class LessOp extends OpVal {
    get level() { return 2; }
    calc(opts) {
        let a = this.a.calc(opts), b = this.b.calc(opts);
        return a == null || b == null ? false : a < b;
    }
    toJSON() {
        return this.a + '<' + this.b;
    }
}
exports.LessOp = LessOp;
LessOp.op = '<';
class OrOp extends OpVal {
    get level() { return 1; }
    calc(opts) {
        return this.a.calc(opts) || this.b.calc(opts);
    }
    toJSON() {
        return this.a + '||' + this.b;
    }
}
exports.OrOp = OrOp;
class GreaterEqualOp extends OpVal {
    get level() { return 2; }
    calc(opts) {
        return this.a.calc(opts) >= this.b.calc(opts);
    }
    toJSON() {
        return this.a + '>=' + this.b;
    }
}
exports.GreaterEqualOp = GreaterEqualOp;
GreaterEqualOp.op = '>=';
class GreaterOp extends OpVal {
    get level() { return 2; }
    calc(opts) {
        let a = this.a.calc(opts), b = this.b.calc(opts);
        return a == null || b == null ? false : a > b;
    }
    toJSON() {
        return this.a + '>' + this.b;
    }
}
exports.GreaterOp = GreaterOp;
GreaterOp.op = '>';
class PowOp extends OpVal {
    get level() { return 6; }
    calc(opts) {
        var a = this.a.calc(opts), b = this.b.calc(opts);
        if (opts.try) {
            if (!a)
                a = 0;
            if (!b)
                b = 0;
        }
        return Math.pow(a, b);
    }
    toJSON() {
        return this.a + '^' + this.b;
    }
}
exports.PowOp = PowOp;
class NulledOp extends OpVal {
    get level() { return 7; }
    calc(opts) {
        var a = this.a.calc(opts), b = this.b.calc(opts);
        return typeof a == 'number' ?
            isNaN(a) ? b : a :
            a == null ? b : a;
    }
    toJSON() {
        return this.a + '??' + this.b;
    }
}
exports.NulledOp = NulledOp;
class TernaryOp extends OpVal {
    get level() { return 1; }
    calc(opts) {
        return this.a.calc(opts) ?
            this.b.calc(opts) :
            this.c.calc(opts);
    }
    push(value) {
        if (this.b)
            if (this.c)
                throw null;
            else
                this.c = value;
        else
            this.b = value;
    }
    valid() { return !!this.c; }
    toJSON() { return this.a + '?' + this.b + ':' + this.c; }
    toString() { return this.toJSON(); }
    vars(vars = []) {
        this.a.vars(vars);
        this.b.vars(vars);
        this.c.vars(vars);
        return vars;
    }
    *[Symbol.iterator]() {
        yield this;
        yield* this.a;
        yield* this.b;
        yield* this.c;
    }
}
exports.TernaryOp = TernaryOp;
class DicVal {
    constructor(data) {
        this.data = data;
    }
    get op() { return 'dic'; }
    calc(opts) {
        let result = {};
        for (let key in this.data)
            result[key] = this.data[key].calc(opts);
        return result;
    }
    toString() {
        return '';
    }
    valid() { return false; }
    translate(dir) {
        let nd = {};
        for (let k in this.data)
            nd[k] = this.data[k].translate(dir);
        return new DicVal(this.data);
    }
    toJSON() {
        return '';
    }
    analize(check) {
        for (let key in this.data) {
            let t = this.data[key], u = check(t);
            if (u)
                this.data[key] = u;
            else
                t.analize(check);
        }
    }
    *[Symbol.iterator]() {
        yield this;
        for (let k in this.data)
            yield* this.data[k];
    }
    vars(vars) {
        for (let key in this.data)
            this.data[key].vars(vars);
        return vars;
    }
}
exports.DicVal = DicVal;
class SignalVal {
    constructor(signal) {
        this.signal = signal;
    }
    get op() { return 'sig'; }
    calc(opts) {
        switch (this.signal) {
            case "-":
                return -this.value.calc(opts);
            case "!":
                return !this.value.calc(opts);
            case "+":
                return +this.value.calc(opts);
            default:
        }
    }
    valid() { return !!this.value; }
    push(value) {
        if (this.value)
            throw "invalid expression";
        this.value = value;
    }
    toString() { return this.toJSON(); }
    toJSON() {
        return this.signal + this.value;
    }
    vars(vars = []) {
        this.value.vars(vars);
        return vars;
    }
    translate(dir) {
        let t = new SignalVal(this.signal);
        t.value = this.value.translate(dir);
        return t;
    }
    analize(check) {
        let t = check(this.value);
        if (t)
            this.value = t;
    }
    *[Symbol.iterator]() {
        yield this;
        yield* this.value;
    }
}
exports.SignalVal = SignalVal;
class GroupVal {
    get op() { return 'g'; }
    valid() { return !!this.value; }
    calc(opts) {
        return this.value.calc(opts);
    }
    push(value) {
        if (this.value)
            throw "invalid expression";
        this.value = value;
    }
    toString() { return this.toJSON(); }
    toJSON() {
        return '(' + this.value + ')';
    }
    analize(check) {
        let t = check(this.value);
        if (t)
            this.value = t;
    }
    vars(vars = []) {
        this.value.vars(vars);
        return vars;
    }
    translate(dir) {
        let t = new GroupVal();
        t.value = this.value.translate(dir);
        return t;
    }
    *[Symbol.iterator]() {
        yield this;
        yield* this.value;
    }
}
exports.GroupVal = GroupVal;
class FnVal {
    constructor(args, body) {
        this.args = args;
        this.body = body;
    }
    get op() { return 'fn'; }
    valid() { return !!this.body; }
    push(val) {
        if (val instanceof VarVal)
            this.args.push(val.value);
        else
            throw null;
    }
    calc(opts) {
        var t = this.args;
        return (...args) => {
            return this.body.calc({
                funcs: opts.funcs,
                object: opts.object,
                optional: opts.optional,
                try: opts.try,
                vars(field, isObj) {
                    let index = t.indexOf(field);
                    if (index === -1)
                        if (opts.vars)
                            if (typeof opts.vars === 'function')
                                return opts.vars(field, isObj);
                            else
                                return opts.vars[field];
                        else
                            throw null;
                    else
                        return args[index];
                }
            });
        };
    }
    toString() {
        return this.toJSON();
    }
    toJSON() {
        return '(' + this.args.join(',') + ')=>' + this.body;
    }
    vars(vars) {
        return this.body.vars(vars);
    }
    translate(dir) {
        return new FnVal(this.args, this.body.translate(dir));
    }
    analize(check) {
        let t = check(this.body);
        if (t)
            this.body = t;
    }
    *[Symbol.iterator]() {
        yield this;
    }
}
exports.FnVal = FnVal;
class CallVal {
    constructor(func, args = []) {
        this.func = func;
        this.args = args;
    }
    get op() { return 'call'; }
    calc(opts) {
        let args = this.args.map(a => a.calc(opts)), name = opts.uncase ? this.func.toLowerCase() : this.func, f = typeof opts.funcs == "function";
        if (f) {
            let v = opts.funcs(name, args);
            if (v !== void 0)
                return v;
        }
        let formula = (!f && opts.funcs) && opts.funcs[name] || (name in formulas ? formulas[name].calc : null);
        if (!formula)
            throw { msg: "not_found", name };
        return formula.apply(opts, args);
    }
    valid() { return true; }
    push(expression) {
        this.args.push(expression);
    }
    toString() { return this.toJSON(); }
    toJSON() {
        return this.func + '(' + this.args.join(',') + ')';
    }
    vars(vars = []) {
        for (let p of this.args)
            p.vars(vars);
        return vars;
    }
    translate(dir) {
        let t = new CallVal(translate(this.func, dir));
        t.args = this.args.map(a => a.translate(dir));
        return t;
    }
    analize(check) {
        for (let i = 0, a = this.args; i < a.length; i++) {
            let t = a[i], u = check(t);
            if (u)
                a[i] = u;
            else
                t.analize(check);
        }
    }
    *[Symbol.iterator]() {
        yield this;
        for (let t of this.args)
            yield* t;
    }
}
exports.CallVal = CallVal;
class NumbVal {
    constructor(value) {
        this.value = value;
    }
    get op() { return 'n'; }
    async calcAsync() {
        return this.value;
    }
    valid() { return true; }
    calc() {
        return +this.value;
    }
    toString() { return this.toJSON(); }
    toJSON() {
        return +this.value + '';
    }
    vars(vars = []) {
        return vars;
    }
    analize(_) { }
    translate(dir) { return this; }
    *[Symbol.iterator]() {
        yield this;
    }
}
exports.NumbVal = NumbVal;
class VarVal {
    constructor(value) {
        this.value = value;
    }
    get op() { return 'v'; }
    valid() { return true; }
    calc(opts) {
        return typeof opts.vars == 'function' ? opts.vars(this.value) : opts.vars[this.value];
    }
    toString() { return this.toJSON(); }
    toJSON() {
        return this.value;
    }
    vars(vars = []) {
        vars.push(this.value);
        return vars;
    }
    translate(dir) { return this; }
    analize(_) { }
    *[Symbol.iterator]() {
        yield this;
    }
}
exports.VarVal = VarVal;
class TextValue {
    constructor(value, charCode) {
        this.value = value;
        this.charCode = charCode;
    }
    get op() { return 't'; }
    static create(text) {
        return new TextValue(text, '"'.charCodeAt(0));
    }
    get char() { return String.fromCharCode(this.charCode); }
    valid() { return true; }
    calc() {
        return this.value;
    }
    toString() {
        return `"${this.value.replace(/"/g, '\\"')}"`;
    }
    toJSON() {
        return `'${this.value.replace(/'/g, "\\'")}'`;
    }
    vars(vars = []) { return vars; }
    translate(dir) { return this; }
    analize(_) { }
    *[Symbol.iterator]() {
        yield this;
    }
}
exports.TextValue = TextValue;
class ObjectVal {
    constructor(levels) {
        this.levels = levels;
    }
    get op() { return 'o'; }
    valid() { return true; }
    calc(opts) {
        let i = 1, l = this.levels, result = typeof opts.vars == 'function' ? opts.vars(l[0], true) : opts.vars[l[0]];
        for (; i < l.length; i++) {
            if (!result) {
                return null;
            }
            result = result[l[i]];
        }
        return result;
    }
    toString() { return this.toJSON(); }
    toJSON() {
        return this.levels.join('.');
    }
    vars(vars = []) {
        vars.push(this.levels[0]);
        return vars;
    }
    translate(dir) { return this; }
    analize(_) { }
    *[Symbol.iterator]() {
        yield this;
    }
}
exports.ObjectVal = ObjectVal;
var translate;
function defineTranslateFunc(func) {
    translate = func;
}
exports.defineTranslateFunc = defineTranslateFunc;
function analize(val, check) {
    let t = check(val);
    if (t)
        return t;
    val.analize(check);
    return val;
}
exports.analize = analize;
function clone(val) {
    return new Parser(val.toString()).parse();
}
exports.clone = clone;
function has(value, check) {
    return (value & check) === check;
}
class Parser {
    constructor(exp, options = {}) {
        this.options = options;
        this.scope = [];
        this.mode = 8193;
        if (!exp)
            this.error('expression is null');
        this.expression = exp;
    }
    popStored() {
        if (!this.stored)
            throw "invalid expression";
        var temp = this.stored;
        this.stored = null;
        return temp;
    }
    setStored(value) {
        let s = this.scope, t = s[s.length - 1];
        if (t && t instanceof SignalVal) {
            s.pop();
            t.value = value;
            value = t;
        }
        this.stored = value;
    }
    setMode(mode) {
        let old = this.mode;
        if (has(mode, 4096)) {
            if (!has(old, 16384))
                throw 1;
        }
        else if (has(mode, 32768)) {
            if (!has(old, 8193) && !has(old, 4096))
                throw 2;
        }
        else if (has(mode, 8192)) {
            if (has(old, 16384))
                throw 3;
        }
        else if (has(mode, 16384)) {
            if (has(old, 4096) || has(old, 32768))
                throw 4;
        }
        this.mode = mode;
    }
    appendOp(_new) {
        var s = this.scope, old = s[s.length - 1], stored = this.popStored();
        if (old instanceof OpVal) {
            if (_new.level > old.level) {
                _new.a = stored;
                s.push(_new);
            }
            else {
                old.b = stored;
                _new.a = old;
                s[s.length - 1] = _new;
            }
        }
        else {
            _new.a = stored;
            s.push(_new);
        }
    }
    parseString(i, exp, char) {
        let temp1 = "", letter = exp.charCodeAt(i + 1);
        while (letter != char || ((letter = exp.charCodeAt(++i + 1)) == char)) {
            if (Number.isNaN(letter))
                throw "error";
            temp1 += exp[i + 1];
            letter = exp.charCodeAt(++i + 1);
        }
        this.setMode(24578);
        this.setStored(new TextValue(temp1, char));
        return i;
    }
    parseVal(char, exp, i) {
        let storedText = exp[i], l = exp.length;
        if ((char > 47 && char < 58) || char == 46) {
            char = exp.charCodeAt(i + 1);
            while (((char > 47 && char < 58) || char == 46) && i < l) {
                storedText += exp[i + 1];
                char = exp.charCodeAt(++i + 1);
            }
            this.setStored(new NumbVal(storedText));
            this.setMode(24577);
        }
        else if ((char > 96 && char < 123) || (char > 64 && char < 91) || char === 95 || char === 64) {
            let obj;
            do {
                char = exp.charCodeAt(i + 1);
                while (((char > 96 && char < 123) || (char > 64 && char < 91) || (char > 47 && char < 58) || char == 95) && i < l) {
                    storedText += exp[i + 1];
                    char = exp.charCodeAt(++i + 1);
                }
                if (char == 40) {
                    this.setMode(8199);
                    this.scope.push(new CallVal(storedText));
                    i++;
                }
                else if (char === 46) {
                    obj ?
                        obj.push(storedText) :
                        (obj = [storedText]);
                    storedText = exp[i += 2];
                }
                else if (obj) {
                    obj.push(storedText);
                    this.setStored(new ObjectVal(obj));
                    this.setMode(24624);
                    obj = null;
                }
                else {
                    this.setStored(new VarVal(storedText));
                    this.setMode(24592);
                }
            } while (obj);
        }
        else
            throw `invalid expression character found '${exp[i]}'`;
        return i;
    }
    parseDic() {
    }
    isCall(exp, i) {
        for (let l = exp.length - 3; i < l; i++) {
            if (exp[i] == '(')
                return false;
            if (exp[i] == ')')
                return exp[i + 1] == '=' && exp[i + 2] == '>';
        }
        return false;
    }
    parseNumb(exp, i) {
        let r = '', char = exp.charCodeAt(i);
        if (char == 45) {
            r = '-';
            char = exp.charCodeAt(++i);
        }
        for (; i < exp.length && ((char > 47 && char < 58) || char == 46); char = exp.charCodeAt(++i))
            r += exp[i];
        return r;
    }
    parseVar(exp, i) {
        let r = '';
        for (let char = exp.charCodeAt(i); i < exp.length && ((char > 96 && char < 123) || (char > 64 && char < 91) || (char > 47 && char < 58) || char == 95); char = exp.charCodeAt(++i)) {
            r += exp[i];
        }
        return r;
    }
    error(error, index) {
        throw {
            expression: this.expression,
            index: index,
            error: error
        };
    }
    jumpSpace(exp, i) {
        while (exp[i] == ' ')
            i++;
        return i;
    }
    parse() {
        let scope = this.scope;
        for (let i = this.options.from || 0, exp = this.expression; i < exp.length; i++) {
            let char = exp.charCodeAt(i);
            switch (char) {
                case 32:
                    break;
                case 43:
                    if (this.stored) {
                        this.appendOp(new SumOp());
                        this.setMode(4614);
                    }
                    else {
                        this.setMode(32769);
                        scope.push(new SignalVal("+"));
                    }
                    break;
                case 45:
                    if (this.stored) {
                        this.appendOp(new SubOp());
                        this.setMode(4618);
                    }
                    else {
                        this.setMode(32770);
                        scope.push(new SignalVal("-"));
                    }
                    break;
                case 42:
                    this.appendOp(new TimeOp());
                    this.setMode(4626);
                    break;
                case 47:
                    this.appendOp(new DivOp());
                    this.setMode(4642);
                    break;
                case 33:
                    if (this.stored) {
                        throw "invalid expression";
                    }
                    else {
                        this.setMode(32769);
                        scope.push(new SignalVal("!"));
                    }
                    break;
                case 124:
                    if (exp.charCodeAt(i + 1) === 124) {
                        i++;
                        this.appendOp(new OrOp());
                        this.setMode(6154);
                    }
                    else
                        throw "operator not found knowed";
                    break;
                case 38:
                    if (exp.charCodeAt(i + 1) === 38) {
                        i++;
                        this.appendOp(new AndOp());
                        this.setMode(6150);
                    }
                    else {
                        this.appendOp(new ConcatOp());
                        this.setMode(4226);
                    }
                    break;
                case 123:
                    {
                        let dic = {};
                        i = this.jumpSpace(exp, i);
                        if (exp[++i] != '}')
                            while (true) {
                                let temp = this.parseVar(exp, i) || this.parseNumb(exp, i);
                                if (!temp.length)
                                    this.error('error parse', i);
                                i += temp.length;
                                i = this.jumpSpace(exp, i);
                                if (exp[i++] != ':')
                                    this.error('":" not found');
                                let body = new Parser(exp, { from: i, sub: true, warn: this.options.warn });
                                dic[temp] = body.parse();
                                if (!(i = body.end))
                                    this.error('');
                                i++;
                                if (exp[i] == '}')
                                    break;
                                if (i == exp.length)
                                    this.error('unexpected end');
                                if (exp[i] != ',')
                                    this.error('"," not found');
                                i++;
                                i = this.jumpSpace(exp, i);
                            }
                        this.setStored(new DicVal(dic));
                        this.setMode(24584);
                    }
                    break;
                case 125:
                    if (this.options.sub) {
                        this.end = i - 1;
                        i = exp.length;
                    }
                    else
                        this.error('mas fim que inicio', i);
                    break;
                case 63:
                    {
                        if (exp.charCodeAt(i + 1) === 63) {
                            i++;
                            this.appendOp(new NulledOp());
                            this.setMode(6154);
                        }
                        else {
                            this.appendOp(new TernaryOp());
                            this.setMode(4358);
                        }
                    }
                    break;
                case 58:
                    {
                        this.setMode(4362);
                        let stored = this.popStored(), before = scope[scope.length - 1];
                        while (!(before instanceof TernaryOp)) {
                            scope.pop();
                            before.push(stored);
                            stored = before;
                            before = scope[scope.length - 1];
                            if (!before)
                                throw "invalid expression";
                        }
                        before.push(stored);
                    }
                    break;
                case 40:
                    if (this.isCall(exp, i + 1)) {
                        let args = [];
                        i = this.jumpSpace(exp, i);
                        if (exp[++i] != ')')
                            while (true) {
                                let temp = this.parseVar(exp, i);
                                if (!temp.length)
                                    this.error('error parse', i);
                                i += temp.length;
                                args.push(temp);
                                i = this.jumpSpace(exp, i);
                                if (exp[i] == ')')
                                    break;
                                if (exp[i] != ',')
                                    this.error('"," not found');
                                i = this.jumpSpace(exp, i);
                                i++;
                            }
                        let body = new Parser(exp, { from: i += 3, sub: true, warn: this.options.warn });
                        this.setStored(new FnVal(args, body.parse()));
                        this.setMode(24580);
                        i = body.end || exp.length;
                    }
                    else {
                        this.setMode(8195);
                        scope.push(new GroupVal());
                    }
                    break;
                case 41:
                    {
                        let lastScope = scope.pop();
                        if (!has(this.mode, 8195)) {
                            if (lastScope)
                                lastScope.push(this.popStored());
                            else if (this.options.sub) {
                                this.end = i - 1;
                                i = exp.length;
                                break;
                            }
                            else
                                this.error('mas fim que inicio', i);
                        }
                        this.setMode(16387);
                        while (!(lastScope instanceof CallVal) && !(lastScope instanceof GroupVal)) {
                            let temp1 = lastScope;
                            if (!scope.length)
                                if (this.options.sub) {
                                    this.end = i - 1;
                                    i = exp.length;
                                    break;
                                }
                                else
                                    this.error('mas fim que inicio', i);
                            (lastScope = scope.pop()).push(temp1);
                        }
                        this.setStored(lastScope);
                    }
                    break;
                case 44:
                case 59:
                    {
                        this.setMode(4097);
                        let before = scope[scope.length - 1];
                        let stored = this.popStored();
                        while (!(before instanceof CallVal)) {
                            if (!before)
                                if (this.options.sub) {
                                    this.end = i - 1;
                                    i = exp.length;
                                    this.setStored(stored);
                                    break;
                                }
                                else
                                    this.error('mas fim que inicio', i);
                            scope.pop();
                            before.push(stored);
                            stored = before;
                            before = scope[scope.length - 1];
                        }
                        if (before)
                            before.push(stored);
                    }
                    break;
                case 60:
                    switch (exp.charCodeAt(i + 1)) {
                        case 61:
                            i++;
                            this.appendOp(new LesEqualOp());
                            this.setMode(5142);
                            break;
                        case 62:
                            i++;
                            this.appendOp(new DifOp());
                            this.setMode(5134);
                            break;
                        default:
                            this.appendOp(new LessOp());
                            this.setMode(5126);
                    }
                    break;
                case 61:
                    this.appendOp(new EqualOp());
                    this.setMode(5138);
                    break;
                case 62:
                    if (exp.charCodeAt(i + 1) === 61) {
                        i++;
                        this.appendOp(new GreaterEqualOp());
                    }
                    else
                        this.appendOp(new GreaterOp());
                    this.setMode(5130);
                    break;
                case 34:
                case 39:
                    i = this.parseString(i, exp, char);
                    break;
                case 94:
                    this.appendOp(new PowOp());
                    this.setMode(4674);
                    break;
                case 91:
                    break;
                case 93:
                    break;
                default:
                    i = this.parseVal(char, exp, i);
            }
        }
        if (this.stored && scope.length)
            scope[scope.length - 1].push(this.popStored());
        while (scope.length > 1) {
            let last = scope.pop();
            if (last instanceof OpVal)
                scope[scope.length - 1].push(last);
            else
                throw "invalid expression";
        }
        if (scope.length && !(scope[0] instanceof OpVal))
            throw "invalid expression";
        if (this.mode == 8193 || this.mode == 32768 || this.mode == 4098)
            throw "invalid expression";
        return scope[0] || this.stored;
    }
}
function parse(exp, options) {
    if (exp && typeof exp == "string")
        exp = new Parser(exp, options).parse();
    return exp;
}
exports.parse = parse;
function calc(exp, options) {
    if (!exp)
        return null;
    if (typeof exp === 'string') {
        if (options.optional)
            if (exp[0] == '=')
                exp = exp.substr(1);
            else
                return exp;
        exp = parse(exp);
    }
    return exp.calc(options);
}
exports["default"] = calc;
function calcAll(expressions, options) {
    var result = {};
    for (let key in expressions)
        result[key] = calc(expressions[key], options);
    return result;
}
exports.calcAll = calcAll;
function compileExpression(expression) {
    throw "unsetted797";
}
exports.compileExpression = compileExpression;
const formulas = {};
function addFormulas(values) {
    for (let k in values) {
        let calc = values[k];
        if (typeof calc == "function")
            values[k] = { calc };
    }
    Object.assign(formulas, values);
}
exports.addFormulas = addFormulas;
var QueryAlgorithm;
(function (QueryAlgorithm) {
    QueryAlgorithm[QueryAlgorithm["word"] = 0] = "word";
    QueryAlgorithm[QueryAlgorithm["like"] = 1] = "like";
})(QueryAlgorithm = exports.QueryAlgorithm || (exports.QueryAlgorithm = {}));
function queryInArray(query, array, fields) {
    var words = query.split(' ');
    return array.filter((row) => queryInObj(words, row, fields));
}
function queryInObj(words, obj, fields) {
    function helper(obj, fields) {
        if (typeof obj == "object") {
            var r = [];
            for (let key in obj)
                if (!fields || fields.indexOf(key) > -1)
                    r.push.apply(r, helper(obj[key]));
            return r;
        }
        else if (typeof obj == "string" || (typeof obj == "number" && (obj = obj.toString()))) {
            var r = [];
            for (let word of words)
                if (obj.indexOf(word) > -1)
                    r.push(word);
            return r;
        }
        return [];
    }
    let t = helper(obj, fields);
    return words.every((word) => t.indexOf(word) > -1);
}
exports.queryInObj = queryInObj;
function query(query, array, options) {
    switch (options.type) {
        case QueryAlgorithm.word:
            return queryInArray(query, array, options.fields);
        case QueryAlgorithm.like:
            break;
    }
    return null;
}
exports.query = query;
function compareString(str1, str2) {
    str1 = str1.replace(/\s+/g, '');
    str2 = str2.replace(/\s+/g, '');
    if (!str1.length && !str2.length)
        return 1;
    if (!str1.length || !str2.length)
        return 0;
    if (str1 === str2)
        return 1;
    if (str1.length === 1 && str2.length === 1)
        return 0;
    if (str1.length < 2 || str2.length < 2)
        return 0;
    let firstBigrams = new Map();
    for (let i = 0; i < str1.length - 1; i++) {
        const bigram = str1.substr(i, 2);
        const count = firstBigrams.has(bigram)
            ? firstBigrams.get(bigram) + 1
            : 1;
        firstBigrams.set(bigram, count);
    }
    ;
    let intersectionSize = 0;
    for (let i = 0; i < str2.length - 1; i++) {
        const bigram = str2.substr(i, 2);
        const count = firstBigrams.has(bigram)
            ? firstBigrams.get(bigram)
            : 0;
        if (count > 0) {
            firstBigrams.set(bigram, count - 1);
            intersectionSize++;
        }
    }
    return (2.0 * intersectionSize) / (str1.length + str2.length - 2);
}
//# sourceMappingURL=jcalc.js.map

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/crud.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsZUFBZTtBQUNmLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxrREFBa0Q7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOENBQThDLHNCQUFzQixLQUFLO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vLi9zcmMvY3J1ZC50cyIsIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdGhldXNfcG9ydGZvbGlvLy4uL2Zvcm0vZm9ybS50cyIsIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vLi4vZm9ybS9pbnB1dHMudHMiLCJ3ZWJwYWNrOi8vdGhldXNfcG9ydGZvbGlvLy4uL2Zvcm1hdC9zY2FsYXIudHMiLCJ3ZWJwYWNrOi8vdGhldXNfcG9ydGZvbGlvLy4uL2Zvcm1hdC90aW1lLnRzIiwid2VicGFjazovL3RoZXVzX3BvcnRmb2xpby8uLi9nYWxodWQvUGFnZ2luZy50cyIsIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vLi4vZ2FsaHVkL2NvcmUudHMiLCJ3ZWJwYWNrOi8vdGhldXNfcG9ydGZvbGlvLy4uL2dhbGh1ZC9maWVsZHMudHMiLCJ3ZWJwYWNrOi8vdGhldXNfcG9ydGZvbGlvLy4uL2dhbGh1ZC9zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vdGhldXNfcG9ydGZvbGlvLy4uL2dhbGh1ZC90YWJsZS50cyIsIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vLi4vZ2FsaHVkL3Rvb2xzLnRzIiwid2VicGFjazovL3RoZXVzX3BvcnRmb2xpby8uLi9nYWxodWkvY3R4LnRzIiwid2VicGFjazovL3RoZXVzX3BvcnRmb2xpby8uLi9nYWxodWkvb3V0cHV0LnRzIiwid2VicGFjazovL3RoZXVzX3BvcnRmb2xpby8uLi9nYWxodWkvc2VsZWN0LnRzIiwid2VicGFjazovL3RoZXVzX3BvcnRmb2xpby8uLi9vcnJheS9zZWxlY3Rvci50cyIsIndlYnBhY2s6Ly90aGV1c19wb3J0Zm9saW8vLi4vZm9ybS9mb3JtLmpzIiwid2VicGFjazovL3RoZXVzX3BvcnRmb2xpby8uLi9mb3JtYXQvZm9ybWF0LmpzIiwid2VicGFjazovL3RoZXVzX3BvcnRmb2xpby8uLi9qY2FsYy9qY2FsYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyAkIGFzIGV0dCQsIGJpbmQsIEJvbmQsIGNyZWF0ZSwgZmllbGRUeXBlcywgR1QsIElCb25kLCBTZWxlY3RSZXN1bHQgfSBmcm9tIFwiZW50aXR5XCI7XHJcbmltcG9ydCB7IGNzcywgZGl2LCBnLCBnZXQgfSBmcm9tIFwiZ2FsaG9cIjtcclxuaW1wb3J0IHsgYWRkQmFzZVR5cGVzLCBhZGRjYkZtdHMsIGNiRm9ybWF0cywgbnVtYmVyLCByYWRpbywgdGV4dCB9IGZyb20gXCJnYWxodWQvZmllbGRzXCI7XHJcbmltcG9ydCB7IHBhZ2dpbmcsIHNlYXJjaCwgc2luZ2xlU29ydCwgdGFibGUsIFRvdGFsLCB0b3RhbHMgfSBmcm9tIFwiZ2FsaHVkL3Rvb2xzXCI7XHJcbmltcG9ydCB7c3R5bGUgYXMgdGJTdHlsZX1mcm9tIFwiZ2FsaHVkL3RhYmxlXCI7XHJcbmltcG9ydCB7c3R5bGUgYXMgdG9vbFN0eWxlfWZyb20gXCJnYWxodWQvdG9vbHNcIjtcclxuaW1wb3J0IHsgYmFzaWMsIEMsIHRoZW1lIH0gZnJvbSBcImdhbGh1aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1lbnViYXIgfSBmcm9tIFwiZ2FsaHVpL21lbnVcIjtcclxuaW1wb3J0IHsgZGVlcFNnbiwgZXgsIGV4dGVuZCB9IGZyb20gXCJpbnV0aWxcIjtcclxuaW1wb3J0IHsgY3NzVGFnLCBpbml0IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuZXgoZXR0JCwge1xyXG4gIC8vIHRvdGFsKHRvdGFsOiBUb3RhbCwgeyB0YXJnZXQgfSkge1xyXG4gIC8vICAgcmV0dXJuIHRhcmdldC5zZWxlY3Qoe1xyXG4gIC8vICAgICB0cDogR1Qub25lLFxyXG4gIC8vICAgICBmaWVsZHM6IHRvdGFsLmZpZWxkcyxcclxuICAvLyAgICAgZ3JvdXBCeTogdG90YWwuZ3JvdXBCeSxcclxuICAvLyAgICAgd2hlcmU6IHRvdGFsLndoZXJlLFxyXG4gIC8vICAgICBxdWVyeTogdG90YWwucXVlcnksXHJcbiAgLy8gICAgIHF1ZXJ5Qnk6IHRvdGFsLnF1ZXJ5QnlcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0sXHJcbiAgY3JlYXRlOiAoaSkgPT4gZXh0ZW5kKGksIHtcclxuICAgIGluc2VydDogdHJ1ZSxcclxuICAgIHJlbW92ZTogdHJ1ZSxcclxuICAgIHVwZGF0ZTogdHJ1ZSxcclxuICAgIHNlbGVjdDogdHJ1ZSxcclxuICB9KVxyXG59KVxyXG5jb25zdCB0b29sYmFyID0gKGJvbmQ6IEJvbmQpID0+IG1lbnViYXIoXHJcbiAgc2VhcmNoKGJvbmQpLFxyXG4gIG1lbnViYXIucmlnaHQoKSxcclxuICBzaW5nbGVTb3J0KGJvbmQpXHJcbik7XHJcbihhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgaW5pdCgpO1xyXG4gIGFkZGNiRm10cygpO1xyXG4gIGFkZEJhc2VUeXBlcygpO1xyXG4gIGNvbnNvbGUubG9nKGZpZWxkVHlwZXMpO1xyXG4gIGNzcyh0YlN0eWxlKCksY3NzVGFnKTtcclxuICBjc3ModG9vbFN0eWxlKCksY3NzVGFnKTtcclxuICAvL2NzcyhjcnVkU3R5bGUoKSwgaW5kZXguY3NzVGFnKTtcclxuICBjb25zdCBlbnVtczogRGljPHN0cltdPiA9IHtcclxuICAgIGdlbmRlcjogW1wiTVwiLCBcIkZcIl1cclxuICB9O1xyXG4gIHZhciBfZGI6IElEQkRhdGFiYXNlO1xyXG4gIGNvbnN0IGdldGRiID0gKCk6IFByb21pc2U8SURCRGF0YWJhc2U+ID0+IG5ldyBQcm9taXNlKChjYikgPT4ge1xyXG4gICAgaWYgKF9kYikgY2IoX2RiKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBsZXQgciA9IGluZGV4ZWREQi5vcGVuKFwiY3J1ZFwiKTtcclxuICAgICAgci5vbnN1Y2Nlc3MgPSAoKSA9PiB7IGNiKF9kYiA9IHIucmVzdWx0KTsgfVxyXG4gICAgICByLm9udXBncmFkZW5lZWRlZCA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGRiID0gci5yZXN1bHQ7XHJcbiAgICAgICAgbGV0IHN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoXCJjbGllbnRlXCIsIHtcclxuICAgICAgICAgIGtleVBhdGg6IFwiaWRcIixcclxuICAgICAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdG9yZS50cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAvLyBTdG9yZSB2YWx1ZXMgaW4gdGhlIG5ld2x5IGNyZWF0ZWQgb2JqZWN0U3RvcmUuXHJcbiAgICAgICAgICB2YXIgc3RvcmUgPSBkYi50cmFuc2FjdGlvbihcImNsaWVudGVcIiwgXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoXCJjbGllbnRlXCIpO1xyXG4gICAgICAgICAgbGV0IGRlZkNvc3R1bWVycyA9LyphZGQgZGVmYXVsdCBkYXRhKi9bXHJcbiAgICAgICAgICAgIHsgXCJwcmltZWlyb19ub21lXCI6IFwiQW50w7NuaW8gQ2FybG9zXCIsIFwibm9tZV9kb19tZWlvXCI6IFwiRGlhcyBkb3MgU2FudG9zXCIsIFwidWx0aW1vX25vbWVcIjogXCJNYXJ0aW5ob1wiLCBcInNleG9cIjogXCJtXCIsIFwiaWRhZGVcIjogXCIyMDA4LTAyLTE4XCIsIFwiYmlcIjogXCI2ODE3XCIgfSxcclxuICAgICAgICAgICAgeyBcInByaW1laXJvX25vbWVcIjogXCJBZGFsZ2lzYSBDZWxlc3RlIFRhdmFyZXNcIiwgXCJub21lX2RvX21laW9cIjogbnVsbCwgXCJ1bHRpbW9fbm9tZVwiOiBcImUgU2lsdmFcIiwgXCJzZXhvXCI6IFwiZlwiLCBcImlkYWRlXCI6IFwiMjAwNC0xMi0xMVwiLCBcImJpXCI6IFwiQklcIiB9LFxyXG4gICAgICAgICAgICB7IFwicHJpbWVpcm9fbm9tZVwiOiBcIk9sc2VuZSBFbWFudWVsIFRhdmFyZXMgXCIsIFwibm9tZV9kb19tZWlvXCI6IG51bGwsIFwidWx0aW1vX25vbWVcIjogXCJlIFNpbHZhXCIsIFwic2V4b1wiOiBcIm1cIiwgXCJpZGFkZVwiOiBcIjIwMDktMDItMjVcIiwgXCJiaVwiOiBcIkJJXCIgfSxcclxuICAgICAgICAgICAgeyBcInByaW1laXJvX25vbWVcIjogXCJ0ZXN0XCIsIFwibm9tZV9kb19tZWlvXCI6IG51bGwsIFwidWx0aW1vX25vbWVcIjogXCJmcmFuY2lzY29cIiwgXCJzZXhvXCI6IFwibVwiLCBcImlkYWRlXCI6IFwiMjAxNC0wMi0wMlwiLCBcImJpXCI6IFwiZFwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJwcmltZWlyb19ub21lXCI6IFwiRGVsZmluYSBIYW5pZWxhIFwiLCBcIm5vbWVfZG9fbWVpb1wiOiBcIkFudMOzbmlvXCIsIFwidWx0aW1vX25vbWVcIjogXCJBbnTDs25pbyBkbyBBbWFyYWxcIiwgXCJzZXhvXCI6IFwiZlwiLCBcImlkYWRlXCI6IFwiMjAxNS0wNS0yMFwiLCBcImJpXCI6IFwiMTAyMDYvMjAxNVwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJwcmltZWlyb19ub21lXCI6IFwiVmljdG9yIEVzbWFlbFwiLCBcIm5vbWVfZG9fbWVpb1wiOiBcIlBlcmVpcmFcIiwgXCJ1bHRpbW9fbm9tZVwiOiBcIkxvdXJlbsOnb1wiLCBcInNleG9cIjogXCJmXCIsIFwiaWRhZGVcIjogXCIyMDEyLTExLTI5XCIsIFwiYmlcIjogXCIxODc2LzIwMTNcIiB9LFxyXG4gICAgICAgICAgICB7IFwicHJpbWVpcm9fbm9tZVwiOiBcIlJpdGEgZGUgQ8Oic3NpYSBkYSBTaWx2YSBcIiwgXCJub21lX2RvX21laW9cIjogbnVsbCwgXCJ1bHRpbW9fbm9tZVwiOiBcIkxvcGVzIEZlcm5hbmRlcyBcIiwgXCJzZXhvXCI6IFwiZlwiLCBcImlkYWRlXCI6IFwiMjAxMi0wOS0yMVwiLCBcImJpXCI6IFwiQklcIiB9LFxyXG4gICAgICAgICAgICB7IFwicHJpbWVpcm9fbm9tZVwiOiBcIkpvc2ltYXIgSmFpciBBbnTDs25pb1wiLCBcIm5vbWVfZG9fbWVpb1wiOiBudWxsLCBcInVsdGltb19ub21lXCI6IFwiQW5kcsOpXCIsIFwic2V4b1wiOiBcIm1cIiwgXCJpZGFkZVwiOiBcIjIwMTAtMDktMTlcIiwgXCJiaVwiOiBcImPDqWR1bGFcIiB9LFxyXG4gICAgICAgICAgICB7IFwicHJpbWVpcm9fbm9tZVwiOiBcIlNhbXVlbCBNYnVuZ3VcIiwgXCJub21lX2RvX21laW9cIjogbnVsbCwgXCJ1bHRpbW9fbm9tZVwiOiBcIlRlbmVcIiwgXCJzZXhvXCI6IFwibVwiLCBcImlkYWRlXCI6IFwiMjAxMi0xMS0xMFwiLCBcImJpXCI6IFwiY8OpZHVsYVwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJwcmltZWlyb19ub21lXCI6IFwiRXNhw7ogSGVucmlxdWVzIFwiLCBcIm5vbWVfZG9fbWVpb1wiOiBudWxsLCBcInVsdGltb19ub21lXCI6IFwiVG9tw6lcIiwgXCJzZXhvXCI6IFwibVwiLCBcImlkYWRlXCI6IFwiMjAxMS0wNy0yMlwiLCBcImJpXCI6IFwiY8OpZHVsYVwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJwcmltZWlyb19ub21lXCI6IFwiSXNyYWVsIFBhc2NvYWwgZGUgQ2FtcG9zIFwiLCBcIm5vbWVfZG9fbWVpb1wiOiBudWxsLCBcInVsdGltb19ub21lXCI6IFwiTG91cmVuw6dvXCIsIFwic2V4b1wiOiBcIm1cIiwgXCJpZGFkZVwiOiBcIjIwMTUtMDktMDNcIiwgXCJiaVwiOiBcImPDqWR1bGFcIiB9LFxyXG4gICAgICAgICAgICB7IFwicHJpbWVpcm9fbm9tZVwiOiBcIkdpbHNpYSBSYWZhZWxhIEZlcm5hbmRlcyBcIiwgXCJub21lX2RvX21laW9cIjogbnVsbCwgXCJ1bHRpbW9fbm9tZVwiOiBcIk5ldG8gXCIsIFwic2V4b1wiOiBcImZcIiwgXCJpZGFkZVwiOiBcIjIwMDktMDQtMjlcIiwgXCJiaVwiOiBcIkJJXCIgfSxcclxuICAgICAgICAgICAgeyBcInByaW1laXJvX25vbWVcIjogXCJXZXNsZXkgTWFsZW1iZSBQZXJlaXJhIFwiLCBcIm5vbWVfZG9fbWVpb1wiOiBudWxsLCBcInVsdGltb19ub21lXCI6IFwiTWFudWVsXCIsIFwic2V4b1wiOiBcIm1cIiwgXCJpZGFkZVwiOiBcIjIwMTMtMDYtMDhcIiwgXCJiaVwiOiBcImPDqWR1bGFcIiB9LFxyXG4gICAgICAgICAgICB7IFwicHJpbWVpcm9fbm9tZVwiOiBcIkNpbGVuZSBFbWFudWVsYSBBbnTDs25pb1wiLCBcIm5vbWVfZG9fbWVpb1wiOiBudWxsLCBcInVsdGltb19ub21lXCI6IFwiSm/Do29cIiwgXCJzZXhvXCI6IFwiZlwiLCBcImlkYWRlXCI6IFwiMjAxMi0wOS0yMlwiLCBcImJpXCI6IFwiY8OpZHVsYVwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJwcmltZWlyb19ub21lXCI6IFwiQ2lsYW5hIEZyYW5jaXNjYSBBbnTDs25pbyBcIiwgXCJub21lX2RvX21laW9cIjogbnVsbCwgXCJ1bHRpbW9fbm9tZVwiOiBcIkpvw6NvXCIsIFwic2V4b1wiOiBcImZcIiwgXCJpZGFkZVwiOiBcIjIwMTQtMDktMjFcIiwgXCJiaVwiOiBcImPDqWR1bGFcIiB9LFxyXG4gICAgICAgICAgICB7IFwicHJpbWVpcm9fbm9tZVwiOiBcIk5ndWluYW1hdSBFbGlmZWxldGUgSm9hcXVpbVwiLCBcIm5vbWVfZG9fbWVpb1wiOiBudWxsLCBcInVsdGltb19ub21lXCI6IFwiTWFsYW1iYVwiLCBcInNleG9cIjogXCJtXCIsIFwiaWRhZGVcIjogXCIyMDE1LTA0LTI5XCIsIFwiYmlcIjogXCJjw6lkdWxhXCIgfSxcclxuICAgICAgICAgICAgeyBcInByaW1laXJvX25vbWVcIjogXCJBbGljaWEgRWxpc2FtYSBKb2FxdWltIFwiLCBcIm5vbWVfZG9fbWVpb1wiOiBudWxsLCBcInVsdGltb19ub21lXCI6IFwiTWFsYW1iYVwiLCBcInNleG9cIjogXCJmXCIsIFwiaWRhZGVcIjogXCIyMDEyLTAzLTI5XCIsIFwiYmlcIjogXCJjw6lkdWxhXCIgfSxcclxuICAgICAgICAgICAgeyBcInByaW1laXJvX25vbWVcIjogXCJQZWRybyBKb2FxdWltIFwiLCBcIm5vbWVfZG9fbWVpb1wiOiBudWxsLCBcInVsdGltb19ub21lXCI6IFwiTWFsYW1iYVwiLCBcInNleG9cIjogXCJtXCIsIFwiaWRhZGVcIjogXCIyMDA4LTA4LTAzXCIsIFwiYmlcIjogXCJCSVwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJwcmltZWlyb19ub21lXCI6IFwiQW5ldGkgVGNoaXNzb2xhIEpvc8OpXCIsIFwibm9tZV9kb19tZWlvXCI6IG51bGwsIFwidWx0aW1vX25vbWVcIjogXCJBbGJlcnRvXCIsIFwic2V4b1wiOiBcImZcIiwgXCJpZGFkZVwiOiBcIjIwMTQtMDEtMDhcIiwgXCJiaVwiOiBcImPDqWR1bGFcIiB9LFxyXG4gICAgICAgICAgICB7IFwicHJpbWVpcm9fbm9tZVwiOiBcIklzbWFlbCBNYXJjZWxvIGRlIENhbXBvcyBcIiwgXCJub21lX2RvX21laW9cIjogbnVsbCwgXCJ1bHRpbW9fbm9tZVwiOiBcIkxvdXJlbsOnb1wiLCBcInNleG9cIjogXCJtXCIsIFwiaWRhZGVcIjogXCIyMDA5LTA3LTAxXCIsIFwiYmlcIjogXCJCSVwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJwcmltZWlyb19ub21lXCI6IFwiWnVsbWlyYSAgU2ltw7VlcyBcIiwgXCJub21lX2RvX21laW9cIjogbnVsbCwgXCJ1bHRpbW9fbm9tZVwiOiBcInNvbXBpbGFcIiwgXCJzZXhvXCI6IFwiZlwiLCBcImlkYWRlXCI6IFwiMjAxMC0wNi0xNVwiLCBcImJpXCI6IFwiQklcIiB9LFxyXG4gICAgICAgICAgICB7IFwicHJpbWVpcm9fbm9tZVwiOiBcIlJvc2EgU2FtYXJhIE5ldG8gZGUgXCIsIFwibm9tZV9kb19tZWlvXCI6IG51bGwsIFwidWx0aW1vX25vbWVcIjogXCJTb3VzYSBcIiwgXCJzZXhvXCI6IFwiZlwiLCBcImlkYWRlXCI6IFwiMjAxNC0wMS0yM1wiLCBcImJpXCI6IFwiQ2VkdWxhIFwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJwcmltZWlyb19ub21lXCI6IFwiVGVsbWEgQWJyYW50ZXMgXCIsIFwibm9tZV9kb19tZWlvXCI6IG51bGwsIFwidWx0aW1vX25vbWVcIjogXCJKb2FxdWltIFwiLCBcInNleG9cIjogXCJmXCIsIFwiaWRhZGVcIjogXCIyMDEwLTAzLTAzXCIsIFwiYmlcIjogXCJCSVwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJwcmltZWlyb19ub21lXCI6IFwiT2N0w6F2aW8gQW50w7NuaW8gXCIsIFwibm9tZV9kb19tZWlvXCI6IG51bGwsIFwidWx0aW1vX25vbWVcIjogXCJHb21lcyBcIiwgXCJzZXhvXCI6IFwibVwiLCBcImlkYWRlXCI6IFwiMjAxNC0wMS0yM1wiLCBcImJpXCI6IFwiQm9sZXRpbSBkZSBuYXNjaW1lbnRvXCIgfSxcclxuICAgICAgICAgICAgeyBcInByaW1laXJvX25vbWVcIjogXCJHaWxjaWEgUmFmYWVsYSBGZXJuYW5kZXNcIiwgXCJub21lX2RvX21laW9cIjogbnVsbCwgXCJ1bHRpbW9fbm9tZVwiOiBcIk5ldG9cIiwgXCJzZXhvXCI6IFwibVwiLCBcImlkYWRlXCI6IFwiMjAxMC0wNC0yOVwiLCBcImJpXCI6IFwiY8OpZHVsYVwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJwcmltZWlyb19ub21lXCI6IFwiUGVkcm8gU2FsdmFkb3IgXCIsIFwibm9tZV9kb19tZWlvXCI6IG51bGwsIFwidWx0aW1vX25vbWVcIjogXCJNYXRldXNcIiwgXCJzZXhvXCI6IFwibVwiLCBcImlkYWRlXCI6IFwiMjAxMS0wMS0yNlwiLCBcImJpXCI6IFwiY8OpZHVsYVwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJwcmltZWlyb19ub21lXCI6IFwiUm9zYWxpbmEgS2FyaW5lXCIsIFwibm9tZV9kb19tZWlvXCI6IG51bGwsIFwidWx0aW1vX25vbWVcIjogXCJQZWRybyBMdXBhbGVcIiwgXCJzZXhvXCI6IFwiZlwiLCBcImlkYWRlXCI6IFwiMjAwOS0wMi0yNFwiLCBcImJpXCI6IFwiQklcIiB9LFxyXG4gICAgICAgICAgICB7IFwicHJpbWVpcm9fbm9tZVwiOiBcIkVsaWFuZHJhIE5heXJhIEFudMOzbmlvXCIsIFwibm9tZV9kb19tZWlvXCI6IG51bGwsIFwidWx0aW1vX25vbWVcIjogXCJKb3JnZSBDYWV0YW5vXCIsIFwic2V4b1wiOiBcImZcIiwgXCJpZGFkZVwiOiBcIjIwMTYtMDMtMDhcIiwgXCJiaVwiOiBcIkPDqWR1bGFcIiB9LFxyXG4gICAgICAgICAgICB7IFwicHJpbWVpcm9fbm9tZVwiOiBcIkF6YWVsIEFsYmVydG8gZGEgU2lsdmEgXCIsIFwibm9tZV9kb19tZWlvXCI6IG51bGwsIFwidWx0aW1vX25vbWVcIjogXCJHb21ib1wiLCBcInNleG9cIjogXCJtXCIsIFwiaWRhZGVcIjogXCIyMDE0LTAyLTE0XCIsIFwiYmlcIjogXCJDZWR1bGFcIiB9LFxyXG4gICAgICAgICAgICB7IFwicHJpbWVpcm9fbm9tZVwiOiBcIkVsaXphbmRyYSBNYWRhbGVuYSBcIiwgXCJub21lX2RvX21laW9cIjogbnVsbCwgXCJ1bHRpbW9fbm9tZVwiOiBcIkxpY2F4ZSBCYXB0aXN0YSBcIiwgXCJzZXhvXCI6IFwiZlwiLCBcImlkYWRlXCI6IFwiMjAxMi0wMi0xOVwiLCBcImJpXCI6IFwiY8OpZHVsYVwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJwcmltZWlyb19ub21lXCI6IFwiQmVybmFyZG8gTWFudWVsIFwiLCBcIm5vbWVfZG9fbWVpb1wiOiBudWxsLCBcInVsdGltb19ub21lXCI6IFwiRGlhcyBQYWNoZWNvIFwiLCBcInNleG9cIjogXCJtXCIsIFwiaWRhZGVcIjogXCIyMDE0LTEwLTE1XCIsIFwiYmlcIjogXCJjZWR1bGFcIiB9LFxyXG4gICAgICAgICAgICB7IFwicHJpbWVpcm9fbm9tZVwiOiBcIkx1aXMgSm9yZ2VcIiwgXCJub21lX2RvX21laW9cIjogbnVsbCwgXCJ1bHRpbW9fbm9tZVwiOiBcIlBlZHJvIGRlIE9saXZlaXJhXCIsIFwic2V4b1wiOiBcIm1cIiwgXCJpZGFkZVwiOiBcIjIwMDUtMDktMTBcIiwgXCJiaVwiOiBcIjAwOTE1NTkwNExBMDQ1XCIgfSxcclxuICAgICAgICAgICAgeyBcInByaW1laXJvX25vbWVcIjogXCJEYW5pZWxhIFNpYXJhIEhhbmdvXCIsIFwibm9tZV9kb19tZWlvXCI6IG51bGwsIFwidWx0aW1vX25vbWVcIjogXCJTZW1lZG9cIiwgXCJzZXhvXCI6IFwiZlwiLCBcImlkYWRlXCI6IFwiMjAwNi0wOC0xNFwiLCBcImJpXCI6IFwiQklcIiB9LFxyXG4gICAgICAgICAgICB7IFwicHJpbWVpcm9fbm9tZVwiOiBcIkNhcm9saW5hIE1ha2llc3NlIEVkdWFyZG9cIiwgXCJub21lX2RvX21laW9cIjogbnVsbCwgXCJ1bHRpbW9fbm9tZVwiOiBcIllvbWJlXCIsIFwic2V4b1wiOiBcImZcIiwgXCJpZGFkZVwiOiBcIjIwMTUtMDYtMTRcIiwgXCJiaVwiOiBcIkNlZHVsYSBcIiB9LFxyXG4gICAgICAgICAgICB7IFwicHJpbWVpcm9fbm9tZVwiOiBcIkx1YW5hIEFsZXhhbmRyZSBUYXZhcmVzIFwiLCBcIm5vbWVfZG9fbWVpb1wiOiBudWxsLCBcInVsdGltb19ub21lXCI6IFwiQWdvc3RpbmhvXCIsIFwic2V4b1wiOiBcImZcIiwgXCJpZGFkZVwiOiBcIjIwMDktMDEtMTNcIiwgXCJiaVwiOiBcIkJJXCIgfSxcclxuICAgICAgICAgICAgeyBcInByaW1laXJvX25vbWVcIjogXCJCcmFuY2EgTmVsY2lhIENhbW9pbmhvXCIsIFwibm9tZV9kb19tZWlvXCI6IG51bGwsIFwidWx0aW1vX25vbWVcIjogXCJDYXJsb3NcIiwgXCJzZXhvXCI6IFwiZlwiLCBcImlkYWRlXCI6IFwiMjAxNi0wNy0zMVwiLCBcImJpXCI6IFwiQ0VEVUxBXCIgfSxcclxuICAgICAgICAgICAgeyBcInByaW1laXJvX25vbWVcIjogXCJNaWNhZWxhIEtpZXphXCIsIFwibm9tZV9kb19tZWlvXCI6IG51bGwsIFwidWx0aW1vX25vbWVcIjogXCJTZWJhc3Rpw6NvIERvbWluZ29zIFwiLCBcInNleG9cIjogXCJmXCIsIFwiaWRhZGVcIjogXCIyMDE1LTAzLTMxXCIsIFwiYmlcIjogXCJDZWR1bGEgXCIgfSxcclxuICAgICAgICAgICAgeyBcInByaW1laXJvX25vbWVcIjogXCJSb3NhIFwiLCBcIm5vbWVfZG9fbWVpb1wiOiBcIlBhbG9tYVwiLCBcInVsdGltb19ub21lXCI6IFwiQWZvbnNvIGRlIE9saXZlaXJhXCIsIFwic2V4b1wiOiBcImZcIiwgXCJpZGFkZVwiOiBcIjIwMDgtMDgtMDNcIiwgXCJiaVwiOiBcIjAwOTM0NTM4OExBMDQ0XCIgfSxcclxuICAgICAgICAgICAgeyBcInByaW1laXJvX25vbWVcIjogXCJDbGFyaXNzYSBkYSBHcmHDp2EgZGEgQ3J1elwiLCBcIm5vbWVfZG9fbWVpb1wiOiBudWxsLCBcInVsdGltb19ub21lXCI6IFwiQ29zdGFcIiwgXCJzZXhvXCI6IFwiZlwiLCBcImlkYWRlXCI6IFwiMjAxMS0wNy0xMVwiLCBcImJpXCI6IFwiQ8OpZHVsYVwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJwcmltZWlyb19ub21lXCI6IFwiTWljYWVsXCIsIFwibm9tZV9kb19tZWlvXCI6IFwiTHV2aXRvXCIsIFwidWx0aW1vX25vbWVcIjogXCJTZWJhc3RpYW9cIiwgXCJzZXhvXCI6IFwibVwiLCBcImlkYWRlXCI6IFwiMjAwOC0wMy0yMVwiLCBcImJpXCI6IFwiMDA5NTIzNzI3TEEwNDdcIiB9LFxyXG4gICAgICAgICAgICB7IFwicHJpbWVpcm9fbm9tZVwiOiBcIkNhcmxvcyBNYXZha2FsYSBQZXJlaXJhXCIsIFwibm9tZV9kb19tZWlvXCI6IG51bGwsIFwidWx0aW1vX25vbWVcIjogXCJNb3JhaXNcIiwgXCJzZXhvXCI6IFwibVwiLCBcImlkYWRlXCI6IFwiMjAxNC0wNC0wMlwiLCBcImJpXCI6IFwiY8OpZHVsYVwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJwcmltZWlyb19ub21lXCI6IFwiRGV1c2FcIiwgXCJub21lX2RvX21laW9cIjogbnVsbCwgXCJ1bHRpbW9fbm9tZVwiOiBcIkZlcnJlaXJyYSBDYXNzdWxcIiwgXCJzZXhvXCI6IFwiZlwiLCBcImlkYWRlXCI6IFwiMjAwOC0wNi0xNVwiLCBcImJpXCI6IFwiMDA4NDA1ODE3TEEwNDNcIiB9XHJcbiAgICAgICAgICBdO1xyXG4gICAgICAgICAgZGVmQ29zdHVtZXJzLmZvckVhY2goZnVuY3Rpb24gKGN1c3RvbWVyKSB7XHJcbiAgICAgICAgICAgIHN0b3JlLmFkZChjdXN0b21lcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZXR0JC5zZWxlY3QgPSBhc3luYyBmdW5jdGlvbiA8VCBleHRlbmRzIEdUPihrZXk6IHN0ciwgYm9uZDogSUJvbmQ8VD4pIHtcclxuICAgIGxldCBkYiA9IGF3YWl0IGdldGRiKCk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoY2IgPT4ge1xyXG4gICAgICBsZXQgcjogRGljW10gPSBbXTtcclxuICAgICAgZGIudHJhbnNhY3Rpb24oa2V5KS5vYmplY3RTdG9yZShrZXkpLm9wZW5DdXJzb3IoKS5vbnN1Y2Nlc3MgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnJlc3VsdClcclxuICAgICAgICAgIHIucHVzaChlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgIGVsc2UgY2IoPGFueT5yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuICBldHQkLmVudW1WaWV3ID0gKGtleSwgdmFsKSA9PiBlbnVtc1trZXldW3ZhbF07XHJcbiAgZXR0JC5lbnVtID0gKGtleSkgPT4gZW51bXNba2V5XTtcclxuICBjcmVhdGUoXCJjbGllbnRlXCIsIFtcclxuICAgIHRleHQoXCJub21lXCIsIHsgcmVxOiB0cnVlIH0pLFxyXG4gICAgdGV4dChcInN1YnJlX25vbWVcIiwgeyByZXE6IHRydWUgfSksXHJcbiAgICBudW1iZXIoXCJpZGFkZVwiLCB7IHJlcTogZmFsc2UgfSksXHJcbiAgICByYWRpbyhcInNleG9cIiwgXCJnZW5kZXJcIilcclxuICBdKTtcclxuICBsZXQgYm9uZCA9IGF3YWl0IGJpbmQoe1xyXG4gICAga2V5OiBcImNsaWVudGVcIixcclxuICB9KTtcclxuICBnZXQoXCIjc2FtcGxlXCIpLnJlcGxhY2UoZGl2KFwiY29sdW1uXCIsIFtcclxuICAgIHRvb2xiYXIoYm9uZCksXHJcbiAgICB0YWJsZShib25kLCB7XHJcblxyXG4gICAgfSksXHJcbiAgICBtZW51YmFyKGcocGFnZ2luZyhib25kLCB0cnVlLCB0cnVlLCB0cnVlKSwgQy5tZW51YmFyKSwgdG90YWxzKGJvbmQuc2VsZWN0KDApLG51bGwpPy5jbHMoQy5tZW51YmFyKSlcclxuICBdKSk7XHJcblxyXG5cclxufSkoKTsiLCJcclxuaW1wb3J0IHsgY3NzLCBnLCBkaXYsIGdldCB9IGZyb20gXCJnYWxob1wiO1xyXG5pbXBvcnQgeyB3b3JkLCBib2R5LCBtZW51YmFyLCBkcm9wZG93biwgc2VudGVuY2UsIHN0eWxlIH0gZnJvbSBcImdhbGh1aVwiXHJcbmltcG9ydCB7IGRlZXBTZ24gfSBmcm9tIFwiaW51dGlsXCI7XHJcbmltcG9ydCB7IGJhc2ljLCBDLCB0aGVtZSB9IGZyb20gXCJnYWxodWkvY29yZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1haW5CYXIoKSB7XHJcbiAgcmV0dXJuIG1lbnViYXIoXHJcbiAgICBnKFwiYVwiLCBDLmhlYWQsIHNlbnRlbmNlKFwiQXNyaWVsIFBpcmVzKHtwb3J0Zm9saW99KVwiKSksXHJcbiAgICBkcm9wZG93bihcIlNpc3RlbWFzXCIsIFtcclxuXHJcbiAgICBdKSxcclxuICAgIGRyb3Bkb3duKFwiQmlibGlvdGVjYXNcIiwgW1xyXG5cclxuICAgIF0pLFxyXG4gICAgZHJvcGRvd24oXCJBcHBsaWNh77+977+9ZXNcIiwgW1xyXG5cclxuICAgIF0pXHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwYXRoID0gYm9keS5hdHRyKFwiZGF0YS1wYXRoXCIpO1xyXG5leHBvcnQgY29uc3QgY3NzVGFnID0gZyhcInN0eWxlXCIpLmFkZFRvKGRvY3VtZW50LmhlYWQpO1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAvLyBnZXQoXCIjbWVudWJhclwiKS5yZXBsYWNlKG1lbnViYXIoKSk7XHJcbiAgLy8gZ2V0KFwiI21lbnViYXJcIikucmVwbGFjZShtZW51YmFyKCkpO1xyXG5cclxuICBkZWVwU2duKHRoZW1lLCBiYXNpYygpKTtcclxuICBjc3Moc3R5bGUoKSwgY3NzVGFnKTtcclxuICBjc3Moe1xyXG4gICAgXCJodG1sLGJvZHlcIjoge1xyXG4gICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcclxuICAgIH1cclxuICB9LCBjc3NUYWcpO1xyXG59IiwiaW1wb3J0IHsgZywgSFNFbGVtZW50LCBPbmUsIFJlbmRlciwgUywgRSwgZGl2IH0gZnJvbSBcImdhbGhvXCI7XHJcbmltcG9ydCB7IEtleSBhcyBLZXlzIH0gZnJvbSBcInRzLWtleS1lbnVtXCI7XHJcbmltcG9ydCB7IGlzVSwgZGVmIH0gZnJvbSBcImludXRpbFwiO1xyXG5cclxudHlwZSBpbnQgPSBudW1iZXI7XHJcbnR5cGUgc3RyID0gc3RyaW5nO1xyXG50eXBlIEtleSA9IHN0ciB8IGludDtcclxudHlwZSBib29sID0gYm9vbGVhbjtcclxuXHJcbi8qKmZvcm0gY2xhc3NlcyAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBGQyB7XHJcbiAgcHJvcGVydHlQYW5lbCA9IFwicHBcIixcclxuICBmb3JtID0gXCJmbVwiXHJcbn1cclxuaW50ZXJmYWNlIERpYzxUID0gYW55PiB7IFtrZXk6IHN0cmluZ106IFQ7IH1cclxuaW50ZXJmYWNlIEZvcm1WYWxpZGF0b3Ige1xyXG4gIHF1ZXJ5OiBzdHI7XHJcbiAgdHlwZT86IHN0cjtcclxuICBmaWVsZHM6IHN0cltdO1xyXG4gIG1zZz86IHN0cjtcclxufVxyXG5pbnRlcmZhY2UgSURhdGFDb250ZXh0IHtcclxuICBwYXJlbnQ/OiBJRGF0YUNvbnRleHQ7XHJcbiAgZ2V0RGF0YT8oa2V5OiBLZXksIG9udXBkYXRlPzogKHZhbHVlOiB1bmtub3duKSA9PiB2b2lkKTogdW5rbm93bjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElJbnB1dENvbnRleHQgZXh0ZW5kcyBJRGF0YUNvbnRleHQge1xyXG4gIGlubGluZT86IGJvb2w7XHJcbiAgLyoqICovXHJcbiAgdHA/OiBzdHI7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEVycm9yID0ge1xyXG4gIHRwPzogc3RyO1xyXG4gIGluZm8/OiBzdHI7XHJcbiAgcGFyYW1zPzogRGljPEtleT47XHJcbn0gfCBzdHI7XHJcblxyXG4vKipjb2lzYXMgZXhlY3V0YWRhcyBxdWFuZG8gYWxndW1hIGHDp8OjbyBhY29udGVjZSBkZW50cm8gZG8gZm9ybSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEJvdCB7XHJcbiAgc3Jjcz86IHN0cltdO1xyXG4gIHRwOiBzdHI7XHJcbn1cclxudHlwZSBCb3RDYWxsID0gPFQgZXh0ZW5kcyBCb3QgPSBCb3Q+KHRoaXM6IEZvcm1CYXNlLCBzcmM6IERpYzxhbnk+LCBvcHRzOiBULCkgPT4gYW55O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gRXJyb3JUeXBlIHtcclxuICByZXF1aXJlZCA9IFwicmVxXCIsXHJcbiAgbnVtYmVyVG9vQmlnID0gXCJudW1iZXJfdG9vX2JpZ1wiLFxyXG4gIG51bWJlclRvb1NtYWxsID0gXCJudW1iZXJfdG9vX3NtYWxsXCIsXHJcbiAgaW52YWxpZEZvcm1hdCA9IFwiaW52YWxpZF9mb3JtYXRcIixcclxuICB0ZXh0VG9vTG9uZyA9IFwidGV4dF90b29fbG9uZ1wiLFxyXG4gIHRleHRUb29TaG9ydCA9IFwidGV4dF90b29fc2hvcnRcIixcclxuICBpc0RlY2ltYWwgPSBcImlzX2RlY2ltYWxcIixcclxuICBpc05lZ2F0aXZlID0gXCJpc19uZWdhdGl2ZVwiLFxyXG4gIHRvb09sZGVyID0gXCJ0b29fb2xkZXJcIixcclxuICB0b29Zb3VuZyA9IFwidG9vX3lvdW5nXCIsXHJcbiAgbW9yZUl0ZW1zID0gXCJtb3JlX2l0ZW1zXCIsXHJcbiAgbGVzc0l0ZW1zID0gXCJsZXNzX2l0ZW1zXCIsXHJcbiAgdW5zdWJtaXRlZCA9IFwidW5zdWJtaXRlZFwiXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJSW5wdXQ8ViA9IHVua25vd24sIEQgPSBWPiB7XHJcbiAgLy90cDogS2V5O1xyXG4gIGtleTogc3RyO1xyXG4gIGRlZj86IEQ7XHJcbiAgZz86IHN0cltdO1xyXG4gIG9mZj86IGJvb2w7XHJcbiAgLyoqQGRlZmF1bHQgdHJ1ZSAqL1xyXG4gIHJlcT86IGJvb2w7XHJcbiAgdGV4dD86IGFueTtcclxuICBvdXRsaW5lPzogYm9vbDtcclxuICAvKipwbGFjZSBob2xkZXIgKi9cclxuICBwaD86IHN0cjtcclxuICB2YWx1ZT86IFY7XHJcbn1cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElucHV0PFYgPSB1bmtub3duLCBJIGV4dGVuZHMgSUlucHV0PFYsYW55PiA9IElJbnB1dDxWPj4gZXh0ZW5kcyBFPEk+IHtcclxuICBwdWJsaWMgY3R4PzogSUlucHV0Q29udGV4dFxyXG4gIGNvbnN0cnVjdG9yKGk6IEkpIHtcclxuICAgIHN1cGVyKGkpO1xyXG4gICAgaS50ZXh0IHx8PSBpLmtleTtcclxuICAgIGlzVShpLnZhbHVlKSAmJiAoaS52YWx1ZSA9IHRoaXMuZGVmKTtcclxuICB9XHJcbiAgZ2V0IHZhbHVlKCkgeyByZXR1cm4gdGhpcy5pLnZhbHVlOyB9XHJcbiAgZ2V0IGtleSgpIHsgcmV0dXJuIHRoaXMuaS5rZXk7IH1cclxuICBnZXQgZGVmKCkgeyByZXR1cm4gZGVmKHRoaXMuaS5kZWYsIHRoaXMubnVsbFZhbHVlKTsgfVxyXG4gIHNldFZhbHVlKHZhbHVlOiBWKSB7XHJcbiAgICB0aGlzLnNldChcInZhbHVlXCIsIHZhbHVlKTtcclxuICB9XHJcbiAgZ2V0IGlubGluZSgpIHsgcmV0dXJuIHRoaXMuY3R4ID8gdGhpcy5jdHguaW5saW5lIDogZmFsc2U7IH1cclxuICAvKipzZXQgdmFsdWUgdG8gZGVmZWF1bHQgKi9cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5kZWYpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIC8qKnNldCB2YWx1ZSB0byBpbnB1dCBkZWZhdWx0ICovXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMubnVsbFZhbHVlKTtcclxuICB9XHJcbiAgaXNEZWYodmFsdWUgPSB0aGlzLnZhbHVlLCBkZWYgPSB0aGlzLmRlZikge1xyXG4gICAgcmV0dXJuIGRlZiA9PT0gdmFsdWU7XHJcbiAgfVxyXG4gIGlzTnVsbCh2YWx1ZSA9IHRoaXMudmFsdWUpIHsgcmV0dXJuIHRoaXMuaXNEZWYodGhpcy52YWx1ZSwgdGhpcy5udWxsVmFsdWUpOyB9XHJcblxyXG4gIHZpc2l0ZWQ/OiBib29sO1xyXG4gIG9ic2VydmVWaXNpdGVkKGhhbmRsZXI6ICgpID0+IGFueSkge1xyXG4gICAgZyh0aGlzKS5mb2N1c291dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMudmlzaXRlZCA9IHRydWU7XHJcbiAgICAgIGhhbmRsZXIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBwcm90ZWN0ZWQgX29mZjogYm9vbDtcclxuICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9vZmY7IH1cclxuICBzZXQgZGlzYWJsZWQoc3RhdGU6IGJvb2wpIHtcclxuICAgIGcodGhpcykuYXR0cihcImRpc2FibGVkXCIsIHRoaXMuX29mZiA9IHN0YXRlKTtcclxuICB9XHJcbiAgLyoqc2hvdyBvciBub3QgZXJyb3JzICovXHJcbiAgZXJyb3Ioc3RhdGU/OiBib29sKSB7XHJcbiAgICBnKHRoaXMpLmNscyhcIl9lXCIsIHN0YXRlKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBnZXQgdmFsaWQoKSB7XHJcbiAgICBsZXQgZSA9IHRoaXMudmFsaWRhdGUodGhpcy52YWx1ZSk7XHJcbiAgICByZXR1cm4gZS5sZW5ndGggPyBlIDogbnVsbDtcclxuICB9XHJcbiAgdmFsaWRhdGUodmFsdWU6IFYpOiBFcnJvcltdIHtcclxuICAgIGxldFxyXG4gICAgICBpID0gdGhpcy5pLFxyXG4gICAgICBlcnJzOiBFcnJvcltdID0gW107XHJcblxyXG4gICAgaWYgKGkucmVxICYmIHRoaXMuaXNOdWxsKHZhbHVlKSlcclxuICAgICAgZXJycy5wdXNoKEVycm9yVHlwZS5yZXF1aXJlZCk7XHJcblxyXG4gICAgcmV0dXJuIGVycnM7XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoZGF0YTogRGljKSB7XHJcbiAgICBkYXRhW3RoaXMuaS5rZXldID0gdGhpcy52YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBudWxsVmFsdWUoKTogViB7IHJldHVybiBudWxsOyB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYm90czogRGljPEJvdENhbGw+ID0ge307XHJcbmV4cG9ydCBjb25zdCBlcnJvcnM6IERpYzwoKSA9PiBhbnk+ID0ge307XHJcbi8vZXhwb3J0IGNvbnN0IGlucHV0czogRGljPHsgbmV3KGk6IElJbnB1dCwgY3R4PzogSUlucHV0Q29udGV4dCk6IElucHV0OyB9PiA9IHt9O1xyXG5cclxuaW50ZXJmYWNlIEZvcm1FdmVudHMge1xyXG4gIGlucHV0OiBJbnB1dCxcclxuICBzdWJtaXQ6IG5ldmVyO1xyXG4gIGNhbmNlbDogbmV2ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZvcm1CYXNlIHtcclxuICAvKipzZXQgdHJ1ZSBpZiB0aGlzIGZvcm0gaXMgaW5zaWRlIGFub3RoZXIgZm9ybVxyXG4gICAqIHdoZW4gZGlzIGlzIHRydWUgd2lsbCBiZSB1c2VkIGRpdiB0YWcgaW5zdGVhZCBvZiBmb3JtIHRhZ1xyXG4gICAqICovXHJcbiAgaW50ZXJuPzogYm9vbDtcclxuICByZWFkT25seT86IGJvb2w7XHJcbiAgdmFsaWRhdG9ycz86IEZvcm1WYWxpZGF0b3JbXTtcclxuICBoaWRkZW4/OiBEaWM7XHJcbiAgbWV0YT86IERpYztcclxuICBib3RzPzogQm90W107XHJcbiAgcGFyZW50PzogSURhdGFDb250ZXh0O1xyXG59XHJcblxyXG4vKiogKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZvcm1CYXNlPFQgZXh0ZW5kcyBJRm9ybUJhc2UgPSBJRm9ybUJhc2UsIEUgZXh0ZW5kcyBGb3JtRXZlbnRzID0gRm9ybUV2ZW50cz4gZXh0ZW5kcyBFPFQsIEU+IGltcGxlbWVudHMgSUlucHV0Q29udGV4dCB7XHJcbiAgaW5wdXRzOiBJbnB1dFtdO1xyXG4gIGNvbnN0cnVjdG9yKGk6IFQsIGlucHV0czogSW5wdXRbXSkge1xyXG4gICAgc3VwZXIoaSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dHMgPSBpbnB1dHMubWFwKGlucHV0ID0+IHtcclxuICAgICAgLy9sZXQgaW5wdXQgPSA8SW5wdXQ+UmVmbGVjdC5jb25zdHJ1Y3QoaW5wdXRzW2kudHBdLCBbaSwgdGhpc10pO1xyXG4gICAgICBpbnB1dC5vbigoKSA9PiB7XHJcbiAgICAgICAgaW5wdXQudmlzaXRlZCAmJiB0aGlzLnNldEVycm9ycyhpbnB1dC5rZXksIGlucHV0LnZhbGlkKTtcclxuICAgICAgICB0aGlzLmVtaXQoXCJpbnB1dFwiLGlucHV0KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlucHV0Lm9ic2VydmVWaXNpdGVkKCgpID0+IHRoaXMuc2V0RXJyb3JzKGlucHV0LmtleSwgaW5wdXQudmFsaWQpKTtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGkuYm90cylcclxuICAgICAgZm9yIChsZXQgYm90IG9mIGkuYm90cykge1xyXG4gICAgICAgIGxldCBzcmNzOiBEaWMgPSB7fVxyXG4gICAgICAgIGxldCBjYWxjID0gKCkgPT4gYm90c1tib3QudHBdLmNhbGwodGhpcywgc3JjcywgYm90KTtcclxuICAgICAgICBmb3IgKGxldCBzcmMgb2YgYm90LnNyY3MpXHJcbiAgICAgICAgICBzcmNzW3NyY10gPSB0aGlzLmdldERhdGEoc3JjLCBjYWxjKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRGVmKCkge1xyXG4gICAgZm9yIChsZXQgaW5wdXQgb2YgdGhpcy5pbnB1dHMpXHJcbiAgICAgIGlmICghaW5wdXQuaXNEZWYoKSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIGlucHV0KGtleTogc3RyKSB7IHJldHVybiB0aGlzLmlucHV0cy5maW5kKGYgPT4gZi5rZXkgPT0ga2V5KTsgfVxyXG4gIGVycm9yczogRGljPEVycm9yW10+ID0ge307XHJcbiAgc2V0RXJyb3JzKGtleTogc3RyLCBlcnJvcnM/OiBFcnJvcltdKSB7XHJcbiAgICB0aGlzLmVycm9yc1trZXldID0gZXJyb3JzO1xyXG4gICAgdGhpcy5pbnB1dChrZXkpPy5lcnJvcigpO1xyXG4gIH1cclxuICB2YWxpZChvbWl0PzogYm9vbCwgZm9jdXMgPSAhb21pdCkge1xyXG4gICAgZm9yIChsZXQgaW5wdXQgb2YgdGhpcy5pbnB1dHMpIHtcclxuICAgICAgbGV0IHYgPSBpbnB1dC52YWxpZDtcclxuICAgICAgdGhpcy5zZXRFcnJvcnMoaW5wdXQua2V5LCBpbnB1dC52YWxpZCk7XHJcbiAgICAgIGlmICh2KSB7XHJcbiAgICAgICAgaWYgKGZvY3VzKSBpbnB1dC4kLmZvY3VzKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgZm9jdXMoKSB7XHJcbiAgICBmb3IgKGxldCBpbnB1dCBvZiB0aGlzLmlucHV0cylcclxuICAgICAgaWYgKCFpbnB1dC5kaXNhYmxlZCkge1xyXG4gICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICAvKipkZWZhdWx0IGRhdGEgKi9cclxuICBnZXQgZGVmKCkge1xyXG4gICAgbGV0IHI6IERpYyA9IHt9O1xyXG4gICAgZm9yIChsZXQgeyBrZXksIGRlZiB9IG9mIHRoaXMuaW5wdXRzKVxyXG4gICAgICByW2tleV0gPSBkZWY7XHJcbiAgICByZXR1cm4gcjtcclxuICB9XHJcbiAgc2V0IGRlZih2YWx1ZSkge1xyXG4gICAgdGhpcy5pbnB1dHMuZm9yRWFjaChpID0+IGkuc2V0KFwiZGVmXCIsIHZhbHVlW2kua2V5XSkpO1xyXG4gIH1cclxuICByZXNldCgpIHtcclxuICAgIGZvciAobGV0IGZpZWxkIG9mIHRoaXMuaW5wdXRzKVxyXG4gICAgICBmaWVsZC5yZXNldCgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBjbGVhcigpIHtcclxuICAgIGZvciAobGV0IGZpZWxkIG9mIHRoaXMuaW5wdXRzKVxyXG4gICAgICBmaWVsZC5jbGVhcigpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBnZXQgdmFsdWUgb2YgZm9ybVxyXG4gICAqIEBwYXJhbSBlZGl0ZWQgc2UgdHJ1ZSBvbmx5IHJldHVybiBmaWVsZHMgdGhhdCBoZXZlIGEgdmFsdWVcclxuICAgKiBAcGFyYW0gcmVxdWlyZWQgc2UgdHJ1ZSBmaWVsZHMgcmVxdWlyZWQgd2l0aCBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgcmV0dXJuZWQgdG9vXHJcbiAgICovXHJcbiAgZGF0YShlZGl0ZWQ/OiBib29sLCByZXF1aXJlZD86IGJvb2wpIHtcclxuICAgIGxldCBpbnB1dHMgPSB0aGlzLmlucHV0cztcclxuXHJcbiAgICBsZXQgdmFsdWU6IERpYyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaS5oaWRkZW4pO1xyXG4gICAgZm9yIChsZXQgaW5wdXQgb2YgZWRpdGVkID8gaW5wdXRzLmZpbHRlcihpID0+IChyZXF1aXJlZCAmJiBpLmkucmVxKSB8fCAhaS5pc0RlZigpKSA6IGlucHV0cylcclxuICAgICAgaW5wdXQuc3VibWl0KHZhbHVlKTtcclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG4gIGZvcm1EYXRhKGVkaXRlZD86IGJvb2wsIHJlcXVpcmVkPzogYm9vbCkge1xyXG4gICAgbGV0XHJcbiAgICAgIHIgPSBuZXcgRm9ybURhdGEoKSxcclxuICAgICAgZGF0YSA9IHRoaXMuZGF0YShlZGl0ZWQsIHJlcXVpcmVkKTtcclxuICAgIGZvciAobGV0IGtleSBpbiBkYXRhKVxyXG4gICAgICByLmFwcGVuZChrZXksIDxzdHI+ZGF0YVtrZXldKTtcclxuICAgIHJldHVybiByO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YShrZXk6IEtleSwgb251cGRhdGU/OiAodmFsdWU6IHVua25vd24pID0+IHZvaWQpIHtcclxuICAgIGxldCBpID0gdGhpcy5pLCB0YXJnZXQ6IHVua25vd24gPSB0aGlzLmlucHV0cy5maW5kKGYgPT4gZi5rZXkgPT0ga2V5KTtcclxuXHJcbiAgICAvL3NlIGZvciBpbnB1dFxyXG4gICAgaWYgKHRhcmdldCkge1xyXG4gICAgICBvbnVwZGF0ZSAmJiAoPElucHV0PnRhcmdldCkub24ob251cGRhdGUpO1xyXG4gICAgfVxyXG4gICAgLy9zZSBmb3IgbWV0YVxyXG4gICAgZWxzZSBpZiAoaS5oaWRkZW4gJiYga2V5IGluIGkuaGlkZGVuKVxyXG4gICAgICB0YXJnZXQgPSBpLmhpZGRlbltrZXldO1xyXG4gICAgZWxzZSBpZiAoaS5tZXRhICYmIGtleSBpbiBpLm1ldGEpXHJcbiAgICAgIHRhcmdldCA9IGkubWV0YVtrZXldO1xyXG4gICAgZWxzZSB0YXJnZXQgPSBpLnBhcmVudCA/IGkucGFyZW50LmdldERhdGEoa2V5LCBvbnVwZGF0ZSkgOiBudWxsO1xyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgfVxyXG5cclxuICByZW5kZXJFcnJvcnMoKSB7XHJcbiAgICBsZXQgdCA9IHRoaXMuZXJyb3JzLCByZXN1bHQ6IFNbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGtleSBpbiB0KSB7XHJcbiAgICAgIGxldCBpID0gdGhpcy5pbnB1dChrZXkpO1xyXG4gICAgICBmb3IgKGxldCBlcnJvciBvZiB0W2tleV0pIHtcclxuICAgICAgICAodHlwZW9mIGVycm9yID09IFwic3RyaW5nXCIpICYmIChlcnJvciA9IHsgdHA6IGVycm9yIH0pO1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKGRpdigwLCBbXHJcbiAgICAgICAgICBpICYmIFtpLmkudGV4dCwgXCI6IFwiXSxcclxuICAgICAgICAgIGVycm9yc1tlcnJvci50cF0oKSxcclxuICAgICAgICAgIGVycm9yLmluZm8gJiYgZyhcInN1YlwiLCAwLCBlcnJvci5pbmZvKSxcclxuICAgICAgICBdKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZvcm0gZXh0ZW5kcyBJRm9ybUJhc2Uge1xyXG4gIGxhYmVsPzogbnVtYmVyO1xyXG4gIGVycm9yRGl2PzogUztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm0gZXh0ZW5kcyBGb3JtQmFzZTxJRm9ybT4ge1xyXG4gIHN0YXRpYyBkZWZhdWx0OiBQYXJ0aWFsPElGb3JtPiA9IHtcclxuICAgIGxhYmVsOiA0MFxyXG4gIH07XHJcbiAgY29uc3RydWN0b3IoaTogSUZvcm0sIGlucHV0cz86IElucHV0W10pIHtcclxuICAgIHN1cGVyKGksIGlucHV0cyk7XHJcblxyXG4gICAgdGhpcy5vbignaW5wdXQnLCAoaW5wdXQ6IElucHV0KSA9PiBzZXRUaW1lb3V0KCgpID0+IGcoaW5wdXQpLnBhcmVudCgpLnRyeShwID0+IHAuYXR0cihcImVkaXRlZFwiLCAhaW5wdXQuaXNEZWYpKSkpO1xyXG4gICAgdGhpcy5fZXJyb3JEaXYgPSBpLmVycm9yRGl2IHx8IGRpdihcIl9lXCIpO1xyXG4gIH1cclxuICB2aWV3KCkge1xyXG4gICAgbGV0IHsgaW50ZXJuOiBpLCBsYWJlbCB9ID0gdGhpcy5pXHJcbiAgICByZXR1cm4gZyhpID8gJ2RpdicgOiAnZm9ybScsIFwiZm9ybVwiLCBbXHJcbiAgICAgIHRoaXMuaW5wdXRzLm1hcChpbnB1dCA9PiB7XHJcbiAgICAgICAgbGV0IGkgPSBpbnB1dC5pLCByOiBTLCBsYiA9IGcoJ2xhYmVsJywgMCwgaS50ZXh0KS5wcm9wcyh7IGh0bWxGb3I6IGkua2V5LCB0aXRsZTogaS50ZXh0IH0pO1xyXG4gICAgICAgIGlmIChpLm91dGxpbmUpXHJcbiAgICAgICAgICByID0gZGl2KFwiaVwiLCBbXHJcbiAgICAgICAgICAgIGxiLCBpLCBkaXYoJ2luZicpXHJcbiAgICAgICAgICBdKTtcclxuICAgICAgICBlbHNlIHIgPSBkaXYoXCJpXCIsIFtcclxuICAgICAgICAgIGxiLmNzcygnd2lkdGgnLCBgJHtsYWJlbH0lYCksIGksICEhaS5yZXEgJiYgZygnc3BhbicsIFwicmVxXCIsICcqJyksXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgICB9KSxcclxuICAgICAgdGhpcy5fZXJyb3JEaXZcclxuICAgIF0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlubGluZSgpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgc2V0RXJyb3JzKGtleTogc3RyLCBlcnJvcnM6IEVycm9yW10pIHtcclxuICAgIHN1cGVyLnNldEVycm9ycyhrZXksIGVycm9ycyk7XHJcbiAgICB0aGlzLl9lcnJvckRpdi5zZXQodGhpcy5yZW5kZXJFcnJvcnMoKSk7XHJcbiAgfVxyXG4gIHByb3RlY3RlZCByZWFkb25seSBfZXJyb3JEaXY6IFM7XHJcblxyXG59IiwiaW1wb3J0IHsgSW5wdXQsIEVycm9yVHlwZSwgRXJyb3IsIElJbnB1dCwgSUlucHV0Q29udGV4dCB9IGZyb20gXCIuL2Zvcm1cIjtcclxuaW1wb3J0IHsgZywgSFNFbGVtZW50LCBPbmUsIFJlbmRlciwgUywgRSwgZGl2IH0gZnJvbSBcImdhbGhvXCI7XHJcbmltcG9ydCB7IEtleSBhcyBLZXlzIH0gZnJvbSBcInRzLWtleS1lbnVtXCI7XHJcbmltcG9ydCB7ICQsIEMsIE9yaSB9IGZyb20gXCJnYWxodWkvY29yZVwiO1xyXG5pbXBvcnQgU2VsZWN0LCB7IE11bHRzZWxlY3QgfSBmcm9tIFwiZ2FsaHVpL3NlbGVjdFwiO1xyXG5pbXBvcnQgeyBvdXRwdXQgfSBmcm9tIFwiZ2FsaHVpL291dHB1dFwiO1xyXG5pbXBvcnQgeyBleCwgaXNOLCBpc1MgfSBmcm9tIFwiaW51dGlsXCI7XHJcbmltcG9ydCBvLCB7IEFsaWFzLCBMIH0gZnJvbSBcIm9ycmF5XCI7XHJcbmltcG9ydCBpY29uIGZyb20gXCJnYWxodWkvaWNvblwiO1xyXG5cclxudHlwZSBPcHRpb24gPSBEaWMgJiB7IGtleTogS2V5IH07XHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBuYW1lc3BhY2UgR2FsaG9VSSB7XHJcbiAgICBpbnRlcmZhY2UgV29yZHMge1xyXG4gICAgICBjYW5jZWw/OiBzdHI7XHJcbiAgICAgIGNvbmZpcm0/OiBzdHI7XHJcbiAgICAgIHNlYXJjaD86IHN0cjtcclxuICAgIH1cclxuICAgIGludGVyZmFjZSBTZXR0aW5ncyB7XHJcbiAgICAgIHNlbGVjdElucHV0PzogKGk6IElTZWxlY3RJbnB1dCkgPT4gU2VsZWN0PGFueSwgYW55PlxyXG4gICAgICBtc2VsZWN0SW5wdXQ/OiAoaTogSU11bHRzZWxlY3RJbnB1dCkgPT4gTXVsdHNlbGVjdDxhbnksIGFueT5cclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8tLS0tLS0tLS0tLS1URVhULS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRleHRJbnB1dCBleHRlbmRzIElJbnB1dDxzdHI+IHtcclxuICAvL3RwOiBGVC50ZXh0O1xyXG4gIHBhdHRlcm4/OiBSZWdFeHA7XHJcbiAgaW5wdXQ/OiBcInRleHRcIiB8IFwidGV4dGFyZWFcIiB8IFwiZW1haWxcIiB8IFwidXJsXCIgfCBcInRlbFwiO1xyXG4gIG1pbj86IGludDtcclxuICBtYXg/OiBpbnQ7XHJcbn1cclxuY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgSW5wdXQ8c3RyLCBJVGV4dElucHV0PiB7XHJcbiAgdmlldygpIHtcclxuICAgIHZhciBpID0gdGhpcy5pO1xyXG4gICAgaWYgKGkuaW5wdXQgPT0gJ3RleHRhcmVhJykge1xyXG4gICAgICBsZXQgdGEgPSB0aGlzLmlucHV0QmluZChnKCd0ZXh0YXJlYScsIE9yaS52KS5wcm9wcyh7XHJcbiAgICAgICAgbmFtZTogaS5rZXksXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IGkucGggfHwgJydcclxuICAgICAgfSksICd2YWx1ZScpLm9uKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT0gS2V5cy5FbnRlcikge1xyXG4gICAgICAgICAgaWYgKGUuY3RybEtleSlcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgZWxzZSBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB0YS5jbHMoQy5pbnB1dCk7XHJcbiAgICB9IGVsc2UgcmV0dXJuIHRoaXMuaW5wdXRCaW5kKGcoXCJpbnB1dFwiLCBDLmlucHV0KS5wcm9wcyh7XHJcbiAgICAgIHR5cGU6IGkuaW5wdXQgfHwgJ3RleHQnLFxyXG4gICAgICBuYW1lOiBpLmtleSwgcGxhY2Vob2xkZXI6IGkucGggfHwgJydcclxuICAgIH0pLCAndmFsdWUnKTtcclxuICB9XHJcbiAgdmFsaWRhdGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdmFyXHJcbiAgICAgIGkgPSB0aGlzLmksXHJcbiAgICAgIGVycnM6IEVycm9yW10gPSBbXTtcclxuXHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgaWYgKGkucGF0dGVybiAmJiAhKDxSZWdFeHA+aS5wYXR0ZXJuKS50ZXN0KHZhbHVlKSlcclxuICAgICAgICBlcnJzLnB1c2goeyB0cDogRXJyb3JUeXBlLmludmFsaWRGb3JtYXQgfSk7XHJcblxyXG4gICAgICBpZiAoaS5tYXggJiYgdmFsdWUubGVuZ3RoID4gaS5tYXgpXHJcbiAgICAgICAgZXJycy5wdXNoKHsgdHA6IEVycm9yVHlwZS50ZXh0VG9vTG9uZywgcGFyYW1zOiB7IG1heDogaS5tYXggfSB9KTtcclxuICAgICAgaWYgKGkubWluICYmIHZhbHVlLmxlbmd0aCA8IGkubWluKVxyXG4gICAgICAgIGVycnMucHVzaCh7IHRwOiBFcnJvclR5cGUudGV4dFRvb1Nob3J0LCBwYXJhbXM6IHsgbWluOiBpLm1pbiB9IH0pO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoaS5yZXEpXHJcbiAgICAgIGVycnMucHVzaCh7IHRwOiBFcnJvclR5cGUucmVxdWlyZWQgfSk7XHJcblxyXG4gICAgcmV0dXJuIGVycnM7XHJcbiAgfVxyXG4gIGZvY3VzKCkge1xyXG4gICAgaWYgKHRoaXMuaS5pbnB1dCA9PSAndGV4dGFyZWEnICYmIHRoaXMuaW5saW5lKVxyXG4gICAgICBnKHRoaXMpLmNoaWxkKCkuZS5mb2N1cygpO1xyXG4gICAgZWxzZSBnKHRoaXMpLmZvY3VzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcbi8qKnRleHQgaW5wdXQgKi9cclxuZXhwb3J0IGNvbnN0IHRleHQgPSAoa2V5OiBzdHIsIHJlcT86IGJvb2wpID0+XHJcbiAgbmV3IFRleHRJbnB1dCh7IGtleSwgcmVxIH0pO1xyXG4vLy0tLS0tLS0tLS0tLU5VTUJFUi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgaW50ZXJmYWNlIE51bWJlckZvcm1hdCB7XHJcbiAgbWluPzogaW50O1xyXG4gIG1heD86IGludDtcclxuICBvcGVuTWluPzogaW50O1xyXG4gIG9wZW5NYXg/OiBpbnQ7XHJcbiAgZm9ybWF0Pzogc3RyO1xyXG4gIGludGVnZXI/OiBib29sO1xyXG59XHJcbmV4cG9ydCB0eXBlIElOdW1iZXJJbnB1dCA9IElJbnB1dDxpbnQ+ICYgTnVtYmVyRm9ybWF0ICYge1xyXG4gIC8vdHA6IEZULm51bWJlcixcclxuICB1bnNpZ25lZD86IGJvb2w7XHJcbn07XHJcbmNsYXNzIE51bWJlcklucHV0IGV4dGVuZHMgSW5wdXQ8bnVtLCBJTnVtYmVySW5wdXQ+IHtcclxuICB2aWV3KCkge1xyXG4gICAgbGV0IGkgPSB0aGlzLmk7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dEJpbmQoZyhcImlucHV0XCIsIEMuaW5wdXQpLnByb3BzKHtcclxuICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgIG5hbWU6IGkua2V5LFxyXG4gICAgICBzdGVwOiBpLmludGVnZXIgPyA8YW55PjEgOiAnYW55JyxcclxuICAgICAgcGxhY2Vob2xkZXI6IHRoaXMuaW5saW5lID8gaS50ZXh0IDogaS5waCB8fCAnJyxcclxuICAgIH0pLCAndmFsdWUnLCAndmFsdWUnLCAndmFsdWVBc051bWJlcicpO1xyXG4gIH1cclxuICB2YWxpZGF0ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdmFsaWRhdGVOdW1iZXIodGhpcy5pLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjYWxjKC4uLnZhbHVlczogbnVtYmVyW10pIHtcclxuICAgIHZhciByID0gMDtcclxuICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcylcclxuICAgICAgciArPSB2YWx1ZSB8fCAwO1xyXG4gICAgcmV0dXJuIHI7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZU51bWJlcihpOiBOdW1iZXJGb3JtYXQgJiBJSW5wdXQ8aW50PiwgdmFsdWU6IGludCkge1xyXG4gIGxldCBlcnJzOiBFcnJvcltdID0gW107XHJcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcclxuICAgIGlmIChpLnJlcSlcclxuICAgICAgZXJycy5wdXNoKHsgdHA6IEVycm9yVHlwZS5yZXF1aXJlZCB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGkuaW50ZWdlciAmJiBNYXRoLmZsb29yKHZhbHVlKSAhPSB2YWx1ZSlcclxuICAgICAgZXJycy5wdXNoKHsgdHA6IEVycm9yVHlwZS5pc0RlY2ltYWwgfSk7XHJcbiAgICAvL2lmIChpLnVuc2lnbmVkICYmIHZhbHVlIDwgMClcclxuICAgIC8vICAgIGVycnMucHVzaCh7IHR5cGU6IGZvcm0uRXJyb3JUeXBlLmlzTmVnYXRpdmUsIGtleSB9KTtcclxuICAgIGxldFxyXG4gICAgICBtYXggPSBpLm1heCxcclxuICAgICAgbWluID0gaS5taW4sXHJcbiAgICAgIG9taW4gPSBpLm9wZW5NaW4sXHJcbiAgICAgIG9tYXggPSBpLm9wZW5NYXg7XHJcblxyXG4gICAgaWYgKChtYXggIT0gbnVsbCkgJiYgdmFsdWUgPiBtYXgpXHJcbiAgICAgIGVycnMucHVzaCh7IHRwOiBFcnJvclR5cGUubnVtYmVyVG9vQmlnLCBwYXJhbXM6IHsgbWF4OiBtYXggfSB9KTtcclxuICAgIGVsc2UgaWYgKG9tYXggIT0gbnVsbCAmJiB2YWx1ZSA+PSBvbWF4KVxyXG4gICAgICBlcnJzLnB1c2goeyB0cDogRXJyb3JUeXBlLm51bWJlclRvb0JpZywgcGFyYW1zOiB7IG1heDogb21heCB9IH0pO1xyXG5cclxuICAgIGlmICgobWluICE9IG51bGwpICYmIHZhbHVlIDwgbWluKVxyXG4gICAgICBlcnJzLnB1c2goeyBpbmZvOiBFcnJvclR5cGUubnVtYmVyVG9vU21hbGwsIHBhcmFtczogeyBtaW46IG1pbiB9IH0pO1xyXG4gICAgZWxzZSBpZiAob21pbiAhPSBudWxsICYmIHZhbHVlIDw9IG9taW4pXHJcbiAgICAgIGVycnMucHVzaCh7IGluZm86IEVycm9yVHlwZS5udW1iZXJUb29TbWFsbCwgcGFyYW1zOiB7IG1pbjogb21pbiB9IH0pO1xyXG4gIH1cclxuICByZXR1cm4gZXJycztcclxufVxyXG5cclxuLyoqdGV4dCBpbnB1dCAqL1xyXG5leHBvcnQgY29uc3QgbnVtYmVyID0gKGtleTogc3RyLCByZXE/OiBib29sKSA9PlxyXG4gIG5ldyBOdW1iZXJJbnB1dCh7IGtleSwgcmVxIH0pO1xyXG4vLy0tLS0tLS0tLS0tLUNIRUNLQk9YLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBjb25zdCBlbnVtIENoZWNrQm94Rm9ybWF0IHtcclxuICB5ZXNObyA9IFwieVwiLFxyXG4gIGNoZWNrYm94ID0gXCJjXCIsXHJcbiAgc3dpdGNoID0gXCJzXCJcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja0lucHV0IGV4dGVuZHMgSUlucHV0PGJvb2w+IHtcclxuICAvL3RwOiBGVC5jaGVja2JveCxcclxuICBmbXQ/OiBDaGVja0JveEZvcm1hdDtcclxuICBjbGVhcj86IGJvb2w7XHJcbn1cclxuY2xhc3MgQ2hlY2tCb3hJbnB1dCBleHRlbmRzIElucHV0PGJvb2wsIElDaGVja0lucHV0PiAge1xyXG4gIHZpZXcoKSB7XHJcbiAgICBsZXQgaSA9IHRoaXMuaTtcclxuICAgIHN3aXRjaCAoaS5mbXQpIHtcclxuICAgICAgY2FzZSBDaGVja0JveEZvcm1hdC55ZXNObzpcclxuICAgICAgICByZXR1cm4gdGhpcy5iaW5kKGcoJ2RpdicsIG51bGwsIFtcclxuICAgICAgICAgIGcoJ2xhYmVsJywgW0MuY2hlY2tib3gsIEMuaXRlbV0sIFtcclxuICAgICAgICAgICAgZyhcImlucHV0XCIsIHtcclxuICAgICAgICAgICAgICB0eXBlOiAncmFkaW8nLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiA8YW55PjEsXHJcbiAgICAgICAgICAgICAgbmFtZTogaS5rZXksXHJcbiAgICAgICAgICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgJ1NpbSdcclxuICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgZygnbGFiZWwnLCBbQy5jaGVja2JveCwgQy5pdGVtXSwgW1xyXG4gICAgICAgICAgICBnKFwiaW5wdXRcIiwge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdyYWRpbycsXHJcbiAgICAgICAgICAgICAgbmFtZTogaS5rZXksXHJcbiAgICAgICAgICAgICAgdmFsdWU6IDxhbnk+MCxcclxuICAgICAgICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgndmFsdWUnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgJ05vJ1xyXG4gICAgICAgICAgXSlcclxuICAgICAgICBdKSwgKHMpID0+IHtcclxuICAgICAgICAgIHMuY2hpbGQoaS52YWx1ZSA/IDAgOiAxKS5jaGlsZCgpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuICAgICAgICB9LCAndmFsdWUnKTtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgbGV0IGlucCA9IGcoXCJpbnB1dFwiLCB7XHJcbiAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxyXG4gICAgICAgICAgbmFtZTogaS5rZXksXHJcbiAgICAgICAgICBvbmNsaWNrOiBpLmNsZWFyICYmICgoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5hbHRLZXkpXHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHRoaXMuc2V0KCd2YWx1ZScsIGlucC5wcm9wKCdjaGVja2VkJykpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGkuZm10ICE9IENoZWNrQm94Rm9ybWF0LmNoZWNrYm94KVxyXG4gICAgICAgICAgaW5wLmNscyhDLnN3aXRjaCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmJpbmQoaW5wLCAocykgPT4ge1xyXG4gICAgICAgICAgcy5wcm9wKCdjaGVja2VkJywgaS52YWx1ZSk7XHJcbiAgICAgICAgICBzLnByb3AoJ3BoJywgaS5waCB8fCAoaS52YWx1ZSA9PSBudWxsID8gJycgOiBpLnZhbHVlID8gJC53LnllcyA6ICQudy5ubykpO1xyXG4gICAgICAgIH0sICd2YWx1ZScpO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB2YXJcclxuICAgICAgaSA9IHRoaXMuaSxcclxuICAgICAga2V5ID0gaS5rZXksXHJcbiAgICAgIGVycnM6IEVycm9yW10gPSBbXTtcclxuXHJcbiAgICBpZiAoaS5yZXEgJiYgdmFsdWUgPT0gbnVsbClcclxuICAgICAgZXJycy5wdXNoKHsgdHA6IEVycm9yVHlwZS5yZXF1aXJlZCB9KTtcclxuXHJcbiAgICByZXR1cm4gZXJycztcclxuICB9XHJcbiAgc3RhdGljIGRlZmF1bHRWYWx1ZSgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja2JveCA9IChrZXk6IHN0ciwgcmVxPzogYm9vbCkgPT5cclxuICBuZXcgQ2hlY2tCb3hJbnB1dCh7IGtleSwgcmVxIH0pO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0gREFURSAmIFRJTUUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUaW1lSW5wdXQgZXh0ZW5kcyBJSW5wdXQ8c3RyPiB7XHJcbiAgLy90cDogRlQudGltZSxcclxuICBtaW4/OiBzdHIgfCBpbnQ7XHJcbiAgbWF4Pzogc3RyIHwgaW50O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBUaW1lSW5wdXQgZXh0ZW5kcyBJbnB1dDxzdHIsIElUaW1lSW5wdXQ+IHtcclxuICB2aWV3KCkge1xyXG4gICAgbGV0XHJcbiAgICAgIF90aGlzID0gdGhpcyxcclxuICAgICAgaSA9IHRoaXMuaTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5iaW5kKGcoXCJpbnB1dFwiKS5wcm9wcyh7XHJcbiAgICAgIHR5cGU6ICd0aW1lJyxcclxuICAgICAgbmFtZTogaS5rZXksXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBpLnBoLFxyXG4gICAgfSkub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBfdGhpcy5zZXQoJ3ZhbHVlJywgdGhpcy52YWx1ZSArICc6MDAnKTtcclxuICAgIH0pLCAocykgPT4gcy5wcm9wKCd2YWx1ZScsIGkudmFsdWUgJiYgaS52YWx1ZS5zbGljZSgwLCA1KSksICd2YWx1ZScpO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgbGV0XHJcbiAgICAgIGkgPSB0aGlzLmksXHJcbiAgICAgIGVycnM6IEVycm9yW10gPSBbXTtcclxuXHJcbiAgICBpZiAoaS5yZXEgJiYgdmFsdWUgPT0gbnVsbClcclxuICAgICAgZXJycy5wdXNoKHsgdHA6IEVycm9yVHlwZS5yZXF1aXJlZCB9KTtcclxuXHJcbiAgICByZXR1cm4gZXJycztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0aW1lID0gKGtleTogc3RyLCByZXE/OiBib29sKSA9PlxyXG4gIG5ldyBUaW1lSW5wdXQoeyBrZXksIHJlcSB9KTtcclxuZXhwb3J0IHR5cGUgRGF0ZUlucHV0VHlwZSA9IFwiZGF0ZVwiIHwgXCJtb250aFwiIHwgXCJ3ZWVrXCIgfCBcImRhdGV0aW1lLWxvY2FsXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGVJbnB1dCBleHRlbmRzIElJbnB1dDxEYXRlLCBEYXRlIHwgc3RyIHwgaW50PiB7XHJcbiAgLy90cDogRlQuZGF0ZSxcclxuICBtaW4/OiBzdHIgfCBpbnQ7XHJcbiAgbWF4Pzogc3RyIHwgaW50O1xyXG4gIHRwPzogRGF0ZUlucHV0VHlwZTtcclxufVxyXG5leHBvcnQgY2xhc3MgRGF0ZUlucHV0IGV4dGVuZHMgSW5wdXQ8RGF0ZSwgSURhdGVJbnB1dD4ge1xyXG4gIGNvbnN0cnVjdG9yKGk6IElEYXRlSW5wdXQpIHtcclxuICAgIHN1cGVyKGkpO1xyXG4gICAgaWYgKGlzUyhpLmRlZikgfHwgaXNOKGkuZGVmKSlcclxuICAgICAgaS5kZWYgPSBuZXcgRGF0ZShpLmRlZik7XHJcbiAgfVxyXG4gIHZpZXcoKSB7XHJcbiAgICBsZXQgeyB0cCwga2V5LCBwaCB9ID0gdGhpcy5pO1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXRCaW5kKGcoXCJpbnB1dFwiKS5wcm9wcyh7XHJcbiAgICAgIHR5cGU6IHRwLFxyXG4gICAgICBuYW1lOiBrZXksXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBwaFxyXG4gICAgfSksIFwidmFsdWVcIiwgXCJ2YWx1ZUFzRGF0ZVwiKTtcclxuICB9XHJcbiAgdmFsaWRhdGUodmFsdWU6IERhdGUpIHtcclxuICAgIGxldFxyXG4gICAgICBpID0gdGhpcy5pLFxyXG4gICAgICBlcnJzOiBFcnJvcltdID0gW107XHJcblxyXG4gICAgaWYgKGkucmVxICYmIHZhbHVlID09IG51bGwpXHJcbiAgICAgIGVycnMucHVzaCh7IHRwOiBFcnJvclR5cGUucmVxdWlyZWQgfSk7XHJcblxyXG4gICAgcmV0dXJuIGVycnM7XHJcbiAgfVxyXG4gIGlzRGVmKHZhbHVlID0gdGhpcy52YWx1ZSwgZGVmID0gdGhpcy5kZWYpIHtcclxuICAgIHJldHVybiBkZWYudmFsdWVPZigpID09PSB2YWx1ZS52YWx1ZU9mKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGF0ZSA9IChrZXk6IHN0ciwgdHA6IERhdGVJbnB1dFR5cGUsIHJlcT86IGJvb2wpID0+XHJcbiAgbmV3IERhdGVJbnB1dCh7IGtleSwgcmVxLCB0cCB9KTtcclxuLy8tLS0tLS0tLS0tLS0gUkFESU8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSYWRpb0lucHV0IGV4dGVuZHMgSUlucHV0PEtleT4ge1xyXG4gIC8vdHA6IEZULnJhZGlvLFxyXG4gIG9wdGlvbnM/OiBBbGlhczxPcHRpb24sIHN0cj47XHJcbiAgZW51bT86IHN0cjtcclxuICAvL2dyb3VwQnk/OiBWYWw7XHJcbiAgY2xlYXI/OiBib29sO1xyXG4gIGxheW91dD86ICd3cmFwJyB8ICdjb2x1bW4nO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBSYWRpb0lucHV0IGV4dGVuZHMgSW5wdXQ8S2V5LCBJUmFkaW9JbnB1dD57XHJcblxyXG4gIHZpZXcoKSB7XHJcbiAgICB2YXIgaSA9IHRoaXMuaTtcclxuICAgIGlmICh0aGlzLmlubGluZSlcclxuICAgICAgdGhyb3cgXCJub3QgaW1wbGVtZW50ZWRcIjtcclxuXHJcbiAgICBsZXQgb3B0aW9ucyA9IG88T3B0aW9uLCBzdHI+KGkub3B0aW9ucywgeyBjb252ZXJ0ZXI6IHYgPT4gaXNTKHYpID8geyBrZXk6IHYgfSA6IHYgfSk7XHJcbiAgICByZXR1cm4gb3B0aW9ucy5iaW5kKHRoaXMuYmluZChkaXYoaS5sYXlvdXQgPT0gJ2NvbHVtbicgPyBDLm1lbnUgOiAnJykub24oJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGUuYWx0S2V5KSB7XHJcbiAgICAgICAgZyg8RWxlbWVudD5lLmN1cnJlbnRUYXJnZXQpLnF1ZXJ5QWxsKCdpbnB1dCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH0pLCAocykgPT4ge1xyXG4gICAgICBzLnF1ZXJ5QWxsPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dCcpLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgIGlucHV0LmNoZWNrZWQgPSBpbnB1dC52YWx1ZSA9PSBpLnZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIH0sICd2YWx1ZScpLmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKSwgKHZhbHVlKSA9PiBnKCdsYWJlbCcsIFtDLmNoZWNrYm94LCBDLml0ZW1dLCBbXHJcbiAgICAgIGcoXCJpbnB1dFwiKS5wcm9wcyh7XHJcbiAgICAgICAgdHlwZTogJ3JhZGlvJyxcclxuICAgICAgICB2YWx1ZTogPHN0cmluZz52YWx1ZS5rZXksXHJcbiAgICAgICAgbmFtZTogaS5rZXksXHJcbiAgICAgICAgb25pbnB1dDogKCkgPT4geyB0aGlzLnNldCgndmFsdWUnLCB2YWx1ZS5rZXkpOyB9XHJcbiAgICAgIH0pLFxyXG4gICAgICB2YWx1ZS5pY29uICYmIGljb24odmFsdWUuaWNvbiksXHJcbiAgICAgIHZhbHVlLnRleHQgfHwgdmFsdWUua2V5XHJcbiAgICBdKSk7XHJcbiAgICAvL3RoaXMuZmlsbChvcHRpb25zKTtcclxuICAgIC8vcmV0dXJuIGU7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCByYWRpbyA9IChrZXk6IHN0ciwgb3B0aW9ucz86IEFsaWFzPE9wdGlvbiwgc3RyPiwgcmVxPzogYm9vbCkgPT5cclxuICBuZXcgUmFkaW9JbnB1dCh7IGtleSwgcmVxLCBvcHRpb25zIH0pO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0gcGFzc3dvcmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBjb25zdCBlbnVtIFBXQXV0b0NvbXBsZXRlIHtcclxuICBvZmYgPSAwLFxyXG4gIGN1cnJlbnQgPSAxLFxyXG4gIGNyZWF0ZSA9IDJcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElQYXNzd29yZElucHV0IGV4dGVuZHMgSUlucHV0PHN0cj4ge1xyXG4gIC8vdHA6IEZULnBhc3N3b3JkLFxyXG4gIGF1dG9Db21wbGV0ZT86IFBXQXV0b0NvbXBsZXRlO1xyXG4gIGNhcGl0YWxDYXNlPzogaW50O1xyXG4gIGxvd2VyQ2FzZT86IGludDtcclxuICBzcGFjaWFsRGlnaXQ/OiBpbnQ7XHJcbn1cclxuZnVuY3Rpb24gYXV0b2NvbXBsZXRlKHBhc3M6IFBXQXV0b0NvbXBsZXRlKSB7XHJcbiAgc3dpdGNoIChwYXNzKSB7XHJcbiAgICBjYXNlIFBXQXV0b0NvbXBsZXRlLmNyZWF0ZTpcclxuICAgICAgcmV0dXJuIFwibmV3LXBhc3N3b3JkXCI7XHJcbiAgICBjYXNlIFBXQXV0b0NvbXBsZXRlLmN1cnJlbnQ6XHJcbiAgICAgIHJldHVybiBcImN1cnJlbnQtcGFzc3dvcmRcIjtcclxuICAgIGNhc2UgUFdBdXRvQ29tcGxldGUub2ZmOlxyXG4gICAgICByZXR1cm4gXCJvZmZcIjtcclxuICB9XHJcbn1cclxuY2xhc3MgUGFzc3dvcmRJbnB1dCBleHRlbmRzIElucHV0PHN0ciwgSVBhc3N3b3JkSW5wdXQ+IHtcclxuICB2aWV3KCkge1xyXG4gICAgbGV0IGkgPSB0aGlzLmk7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dEJpbmQoXHJcbiAgICAgIGcoXCJpbnB1dFwiLCBDLmlucHV0KS5wcm9wcyh7XHJcbiAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJywgbmFtZTogaS5rZXksXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IGkucGhcclxuICAgICAgfSkuYXR0cignYXV0b2NvbXBsZXRlJywgYXV0b2NvbXBsZXRlKGkuYXV0b0NvbXBsZXRlKSksXHJcbiAgICAgICd2YWx1ZScpO1xyXG4gIH1cclxuICB2YWxpZGF0ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB2YXJcclxuICAgICAgaSA9IHRoaXMuaSxcclxuICAgICAga2V5ID0gaS5rZXksXHJcbiAgICAgIGVycnM6IEVycm9yW10gPSBbXTtcclxuXHJcblxyXG4gICAgaWYgKGkucmVxICYmICF2YWx1ZSlcclxuICAgICAgZXJycy5wdXNoKHsgdHA6IEVycm9yVHlwZS5yZXF1aXJlZCB9KTtcclxuXHJcbiAgICByZXR1cm4gZXJycztcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLSBTRUxFQ1QgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmludGVyZmFjZSBJU2VsZWN0QmFzZSB7XHJcbiAgZmlsdGVycz86IHN0cltdO1xyXG4gIGxpbms/O1xyXG4gIG9wdGlvbnM/OiBBcnJheTxPcHRpb24gfCBzdHI+O1xyXG59XHJcbmV4cG9ydCB0eXBlIElTZWxlY3RJbnB1dCA9IElJbnB1dDxLZXk+ICYgSVNlbGVjdEJhc2UgJiB7XHJcbiAgLy90cDogRlQuc2VsZWN0O1xyXG4gIHNlbGVjdGVkPzogRGljO1xyXG4gIGF1dG8/OiBib29sO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RJbnB1dCBleHRlbmRzIElucHV0PEtleSwgSVNlbGVjdElucHV0Pi8qIGltcGxlbWVudHMgQmluZGVkSW5wdXQqLyB7XHJcbiAgaW5wdXQ6IFNlbGVjdDxEaWMsIEtleT47XHJcbiAgdmlldygpIHtcclxuICAgIGxldFxyXG4gICAgICBpID0gdGhpcy5pLFxyXG4gICAgICBpbnB1dCA9ICQuc2VsZWN0SW5wdXQoaSk7XHJcbiAgICB0aGlzLmlucHV0ID0gaW5wdXQub24oJ2lucHV0JywgKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0KHtcclxuICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IGlucHV0Lm9wdGlvbnMuZ2V0KHZhbHVlKSBhcyBEaWNcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGcoaW5wdXQpLmF0dHIoJ25hbWUnLCBpLmtleSk7XHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZSh2YWx1ZTogS2V5KSB7XHJcbiAgICB2YXJcclxuICAgICAgaSA9IHRoaXMuaSxcclxuICAgICAgZXJyczogRXJyb3JbXSA9IFtdO1xyXG5cclxuICAgIGlmIChpLnJlcSAmJiB2YWx1ZSA9PSBudWxsKVxyXG4gICAgICBlcnJzLnB1c2goeyB0cDogRXJyb3JUeXBlLnJlcXVpcmVkIH0pO1xyXG5cclxuICAgIHJldHVybiBlcnJzO1xyXG4gIH1cclxuICBhcHBseW9mZigpIHtcclxuICB9XHJcbiAgc2V0IGRpc2FibGVkKHN0YXRlOiBib29sKSB7XHJcbiAgICB0aGlzLmlucHV0LnNldCgnb2ZmJywgdGhpcy5fb2ZmID0gc3RhdGUpO1xyXG4gIH1cclxuICBzZXRWYWx1ZSh2YWx1ZTogS2V5KSB7XHJcbiAgICBpZiAodGhpcy5pbnB1dClcclxuICAgICAgdGhpcy5pbnB1dC5zZXRWYWx1ZSh2YWx1ZSk7XHJcblxyXG4gICAgc3VwZXIuc2V0VmFsdWUodmFsdWUpO1xyXG4gIH1cclxufVxyXG4vLy0tLS0tLS0tLS0tLSBNVUxUU0VMRUNUIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgaW50ZXJmYWNlIElNdWx0c2VsZWN0SW5wdXQgZXh0ZW5kcyBJSW5wdXQ8S2V5W10+IHtcclxuICAvL3RwOiBGVC5tdWx0c2VsZWN0LFxyXG4gIHNlbGVjdGVkPzogRGljW107XHJcbiAgbWluPzogaW50O1xyXG4gIG1heD86IGludDtcclxuICBsaW1pdD86IGludDtcclxuXHJcbiAgZmlsdGVycz86IHN0cltdO1xyXG4gIGxpbms/O1xyXG4gIG9wdGlvbnM/OiBBcnJheTxPcHRpb24gfCBzdHI+O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBNdWx0c2VsZWN0SW5wdXQgZXh0ZW5kcyBJbnB1dDxLZXlbXSwgSU11bHRzZWxlY3RJbnB1dD4ge1xyXG4gIHByaXZhdGUgdmFsdWVMaXN0OiBMPEtleT47XHJcblxyXG4gIHZpZXcoKSB7XHJcbiAgICBsZXRcclxuICAgICAgaSA9IHRoaXMuaSxcclxuICAgICAgaW5wdXQgPSAkLm1zZWxlY3RJbnB1dChpKTtcclxuXHJcbiAgICBpLnZhbHVlID0gKHRoaXMudmFsdWVMaXN0ID0gaW5wdXQuaS52YWx1ZSBhcyBMPEtleT4pXHJcbiAgICAgIC5vbigndXBkYXRlJywgKCkgPT4ge1xyXG4gICAgICAgIGkuc2VsZWN0ZWQgPSBpLnZhbHVlLm1hcChpID0+IGlucHV0Lm9wdGlvbnMuZ2V0KGkpKVxyXG4gICAgICAgIHRoaXMuc2V0KFsndmFsdWUnLCAnc2VsZWN0ZWQnXSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9XHJcbiAgaXNEZWYodmFsdWUgPSB0aGlzLnZhbHVlLCBkZWYgPSB0aGlzLmRlZiB8fCBbXSkge1xyXG4gICAgaWYgKGRlZi5sZW5ndGggIT0gdmFsdWUubGVuZ3RoKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkodiA9PiBkZWYuaW5jbHVkZXModikpO1xyXG4gIH1cclxuICBzZXRWYWx1ZSh2YWx1ZTogS2V5W10gfCBzdHJpbmcpIHtcclxuICAgIGlmIChpc1ModmFsdWUpKVxyXG4gICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCc7Jyk7XHJcbiAgICBpZiAodGhpcy52YWx1ZUxpc3QpXHJcbiAgICAgIHRoaXMudmFsdWVMaXN0LnNldCh2YWx1ZSk7XHJcbiAgICBlbHNlIHN1cGVyLnNldFZhbHVlKHZhbHVlIHx8IFtdKTtcclxuICB9XHJcbiAgc3RhdGljIGRlZmF1bHRWYWx1ZSgpIHsgcmV0dXJuIFtdOyB9XHJcbn1cclxuXHJcbi8qKmFwcGx5IGRlZmF1bHQgc2VsZWN0IGFuZCBtdWx0c2VsZWN0IGlucHV0ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZTZWxJbnB1dCgpIHtcclxuICAkLnNlbGVjdElucHV0ID0gKGk6IElTZWxlY3RJbnB1dCkgPT4ge1xyXG4gICAgbGV0IG9wdHMgPSBpLm9wdGlvbnMubWFwKHYgPT4gaXNTKHYpID8geyBrZXk6IHYgfSA6IHYpO1xyXG4gICAgcmV0dXJuIG5ldyBTZWxlY3Qoe1xyXG4gICAgICBvcHRpb25zOiBvcHRzLFxyXG4gICAgICBsYWJlbFJlbmRlcjogKHZhbCwgY29udGFpbmVyKSA9PiBjb250YWluZXIuc2V0KG9wdHMuYnlLZXkodmFsKS5rZXkpLFxyXG4gICAgICBtZW51UmVuZGVyOiAob3B0KSA9PiBkaXYoQy5pdGVtLCBvcHQua2V5KVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gICQubXNlbGVjdElucHV0ID0gKGk6IElNdWx0c2VsZWN0SW5wdXQpID0+IHtcclxuICAgIGxldCBvcHRzID0gaS5vcHRpb25zLm1hcCh2ID0+IGlzUyh2KSA/IHsga2V5OiB2IH0gOiB2KTtcclxuICAgIHJldHVybiBuZXcgTXVsdHNlbGVjdCh7XHJcbiAgICAgIG9wdGlvbnM6IG9wdHMsXHJcbiAgICAgIGxhYmVsUmVuZGVyOiAodmFsKSA9PiBvdXRwdXQob3B0cy5ieUtleSh2YWwpLmtleSksXHJcbiAgICAgIG1lbnVSZW5kZXI6IChvcHQpID0+IGRpdihDLml0ZW0sIG9wdC5rZXkpXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8vLy0tLS0tLS0tLS0tLSBBUFBMWSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9leChpbnB1dHMsIHtcclxuLy8gIFtGVC50ZXh0XTogVGV4dElucHV0LFxyXG4vLyAgW0ZULm51bWJlcl06IE51bWJlcklucHV0LFxyXG4vLyAgW0ZULmNoZWNrYm94XTogQ2hlY2tCb3hJbnB1dCxcclxuLy8gIFtGVC5yYWRpb106IFJhZGlvSW5wdXQsXHJcbi8vICBbRlQuc2VsZWN0XTogU2VsZWN0SW5wdXQsXHJcbi8vICBbRlQubXVsdHNlbGVjdF06IE11bHRzZWxlY3RJbnB1dCxcclxuLy8gIFtGVC5kYXRlXTogRGF0ZUlucHV0LFxyXG4vLyAgW0ZULnRpbWVdOiBUaW1lSW5wdXQsXHJcbi8vfSk7XHJcbiIsImltcG9ydCB7IFBlcmlvZFR5cGUgfSBmcm9tIFwiLi90aW1lXCI7XHJcblxyXG50eXBlIG51bSA9IG51bWJlcjtcclxudHlwZSBzdHIgPSBzdHJpbmc7XHJcbmludGVyZmFjZSBEaWM8VCA9IGFueT4geyBba2V5OiBzdHJpbmddOiBUOyB9XHJcblxyXG5mdW5jdGlvbiBzcGxpY2VzdHIoc3RyOiBzdHIsIHN0YXJ0OiBudW0sIGRlbGV0ZUNvdW50OiBudW0sIGluc2VydDogc3RyKSB7XHJcbiAgdmFyXHJcbiAgICBsZWZ0ID0gc3RyLnNsaWNlKDAsIHN0YXJ0KSxcclxuICAgIHJpZ2h0ID0gc3RyLnNsaWNlKHN0YXJ0ICsgZGVsZXRlQ291bnQpO1xyXG4gIHJldHVybiBsZWZ0ICsgaW5zZXJ0ICsgcmlnaHQ7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSBpbnB1dFxyXG4gKi9cclxuIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjYWxhcihpbnB1dDogSW5wdXQpOiBTY2FsYXI7XHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIGlucHV0XHJcbiAqIEBwYXJhbSBmb3JtYXQgXHJcbiAqL1xyXG4gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2NhbGFyKGlucHV0OiBJbnB1dCwgZm9ybWF0OiBzdHIpOiBTY2FsYXI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjYWxhcihpbnB1dDogSW5wdXQsIGZvcm1hdD86IHN0cik6IFNjYWxhciB7XHJcbiAgcmV0dXJuIG5ldyBTY2FsYXIoaW5wdXQsIGZvcm1hdCk7XHJcbn1cclxuICBleHBvcnQgaW50ZXJmYWNlIEN1cnJlbmN5IHtcclxuICAgIGlkPzogbnVtO1xyXG4gICAgY29kZTogc3RyO1xyXG4gICAgc3ltYm9sPzogc3RyO1xyXG4gICAgbmFtZT86IHN0cjtcclxuICAgIHZhbHVlOiBudW07XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiByZXZlcnNlRm9ybWF0KGlucHV0OiBzdHIsIGZvcm1hdDogc3RyKSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbiAgZXhwb3J0IGNvbnN0IGluRnVsbDogSW5GdWxsVW5pdFtdPVtdO1xyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gbGVuKHZhbHVlOiBudW0pIHtcclxuICAgIHJldHVybiAodmFsdWUgKyAnJykubGVuZ3RoO1xyXG4gIH1cclxuICBjb25zdCBjaGVja0Zvcm1hdHMgPSBbXHJcbiAgICAvLy9eKDxkPlxcZHsyfSktKDxNPlxcZHsyfSktKDx5PlxcZHs0fSkkLyxcclxuICAgIC8vL14oPzxoPlxcZHsyfSk6KD88bT5cXGR7Mn0pKD86Oig/PHM+XFxkezJ9KSkkLyxcclxuICBdO1xyXG4gIGV4cG9ydCBmdW5jdGlvbiBjaGVjayhpbnB1dDogSW5wdXQpIHtcclxuXHJcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL3NlIGZvciBEYXRlIG9yIGlucHV0IHJldHVybjtcclxuICAgIGlmICgoaW5wdXQgaW5zdGFuY2VvZiBEYXRlICYmIChpbnB1dCA9IG5ldyBTY2FsYXIoaW5wdXQpKSkgfHwgaW5wdXQgaW5zdGFuY2VvZiBTY2FsYXIpXHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgZXhwb3J0IHR5cGUgSW5wdXQgPSBzdHIgfCBudW0gfCBTY2FsYXI7XHJcblxyXG4gIGZ1bmN0aW9uIGludmFsaWRJbnB1dEVycm9yKCkge1xyXG5cclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHZhbHVlKGlucHV0OiBJbnB1dCkge1xyXG4gICAgc3dpdGNoICh0eXBlb2YgaW5wdXQpIHtcclxuICAgICAgY2FzZSBcIm51bWJlclwiOlxyXG4gICAgICAgIHJldHVybiA8bnVtPmlucHV0O1xyXG5cclxuICAgICAgY2FzZSBcInN0cmluZ1wiOlxyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KDxzdHI+aW5wdXQpO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBpZiAoIShpbnB1dCBpbnN0YW5jZW9mIFNjYWxhcikpXHJcbiAgICAgICAgICByZXR1cm4gTmFOO1xyXG4gICAgICAgIHJldHVybiAoPFNjYWxhcj5pbnB1dCkudmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByb21hbm51bXMgPSB7IE06IDEwMDAsIENNOiA5MDAsIEQ6IDUwMCwgQ0Q6IDQwMCwgQzogMTAwLCBYQzogOTAsIEw6IDUwLCBYTDogNDAsIFg6IDEwLCBJWDogOSwgVjogNSwgSVY6IDQsIEk6IDEgfTtcclxuICBjb25zdCBjaGFycyA9IFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIjtcclxuXHJcbiAgLy9mdW5jdGlvbiB0b1JvbWFuaXplXHJcbiAgLy9mdW5jdGlvbiB0b0xldHRlclxyXG4gIGxldCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xyXG4gIGxldCBkZWZhdWx0Rm9ybWF0ID0gJzAsMC4wJztcclxuICBjb25zdCBmb3JtYXRSZWdleCA9IC9cXCt8MCt8LDB8LjArfCR8dXwnW14nXSsnLztcclxuICAvL2NvbnN0IGNoZWNrRm9ybWF0ID0gLyQ/XFxzKlxcKz8wKigsMCk/KC4wKylcXHMqJHx1Py87XHJcbiAgZXhwb3J0IGNvbnN0IGVudW0gVHJhbnNmb3JtIHtcclxuICAgIHJvbWFuaXplID0gJ2knLFxyXG4gICAgbGV0dGVyID0gJ2EnLFxyXG4gICAgdGltZXIgPSAndCcsXHJcbiAgICBpbkZ1bGwgPSAnZicsXHJcbiAgfVxyXG4gIGNvbnN0IHBlcmlvZHMgPSBbXHJcbiAgICB7IGs6IFBlcmlvZFR5cGUueSwgczogJ2FubycsIHA6ICdhbm9zJyB9LFxyXG4gICAgeyBrOiBQZXJpb2RUeXBlLk0sIHM6ICdtw6pzJywgcDogJ23DqnNlcycgfSxcclxuICAgIHsgazogUGVyaW9kVHlwZS53LCBzOiAnc2VtYW5hJywgcDogJ3NlbWFuYXMnIH0sXHJcbiAgICB7IGs6IFBlcmlvZFR5cGUuZCwgczogJ2RpYScsIHA6ICdkaWFzJyB9LFxyXG4gICAgeyBrOiBQZXJpb2RUeXBlLmgsIHM6ICdob3JhJywgcDogJ2hvcmFzJyB9LFxyXG4gICAgeyBrOiBQZXJpb2RUeXBlLm0sIHM6ICdtaW51dG8nLCBwOiAnbWludXRvcycgfSxcclxuICAgIHsgazogUGVyaW9kVHlwZS5zLCBzOiAnc2VndW5kbycsIHA6ICdzZWd1bmRvcycgfSxcclxuICBdO1xyXG4gIGNvbnN0IHRyYW5zZm9ybXMgPSBuZXcgTWFwPFRyYW5zZm9ybSwgKHZhbHVlOiBudW0sIG9wdHM/OiBEaWMpID0+IHN0cj4oW1xyXG4gICAgW1RyYW5zZm9ybS5yb21hbml6ZSwgZnVuY3Rpb24gKHZhbHVlOiBudW0pIHtcclxuICAgICAgbGV0IHJvbWFuID0gJycsIGk7XHJcbiAgICAgIGZvciAoaSBpbiByb21hbm51bXMpIHtcclxuICAgICAgICB3aGlsZSAodmFsdWUgPj0gcm9tYW5udW1zW2ldKSB7XHJcbiAgICAgICAgICByb21hbiArPSBpO1xyXG4gICAgICAgICAgdmFsdWUgLT0gcm9tYW5udW1zW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcm9tYW47XHJcbiAgICB9XSxcclxuICAgIFtUcmFuc2Zvcm0ubGV0dGVyLCBmdW5jdGlvbiAodmFsdWU6IG51bSkge1xyXG4gICAgICBsZXQgZGl2aWRlbmQgPSB2YWx1ZTtcclxuICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgIGxldCBtb2R1bG86IG51bTtcclxuICAgICAgd2hpbGUgKGRpdmlkZW5kID4gMCkge1xyXG4gICAgICAgIG1vZHVsbyA9IChkaXZpZGVuZCAtIDEpICUgMjY7XHJcbiAgICAgICAgcmVzdWx0ID0gY2hhcnNbbW9kdWxvXSArIHJlc3VsdDtcclxuICAgICAgICBkaXZpZGVuZCA9IE1hdGguZmxvb3IoKGRpdmlkZW5kIC0gbW9kdWxvKSAvIDI2KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfV0sXHJcbiAgICBbVHJhbnNmb3JtLnRpbWVyLCBmdW5jdGlvbiAodmFsdWU6IG51bSkge1xyXG4gICAgICBsZXQgciA9IFtdLCBjb3VudCA9IDIsIHNwYWNlID0gMjtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGVyaW9kcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBwZXJpb2QgPSBwZXJpb2RzW2ldO1xyXG4gICAgICAgIGlmICh2YWx1ZSA+PSBwZXJpb2Quaykge1xyXG4gICAgICAgICAgbGV0IHRlbXAgPSBNYXRoLmZsb29yKHZhbHVlIC8gcGVyaW9kLmspO1xyXG4gICAgICAgICAgci5wdXNoKHRlbXAgKyAnICcgKyAodGVtcCA9PT0gMSA/IHBlcmlvZC5zIDogcGVyaW9kLnApKTtcclxuICAgICAgICAgIHZhbHVlIC09IHRlbXAgKiBwZXJpb2QuaztcclxuICAgICAgICAgIGlmICghLS1jb3VudClcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoY291bnQgPCAyICYmICEtLXNwYWNlKVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgLy9pZiAodmFsdWUgPj0gdGltZS5QZXJpb2RUeXBlLnkpIHtcclxuICAgICAgLy8gIHRlbXAgPSBNYXRoLmZsb29yKHZhbHVlIC8gdGltZS5QZXJpb2RUeXBlLnkpO1xyXG4gICAgICAvLyAgci5wdXNoKHRlbXAgKyAnIEFubyhzKScpO1xyXG4gICAgICAvLyAgdmFsdWUgLT0gdGVtcCAqIHRpbWUuUGVyaW9kVHlwZS55O1xyXG4gICAgICAvL31cclxuICAgICAgLy9pZiAodmFsdWUgPj0gdGltZS5QZXJpb2RUeXBlLk0pIHtcclxuICAgICAgLy8gIHRlbXAgPSBNYXRoLmZsb29yKHZhbHVlIC8gdGltZS5QZXJpb2RUeXBlLk0pO1xyXG4gICAgICAvLyAgci5wdXNoKHRlbXAgKyAnIE3DqnMoZXMpJyk7XHJcbiAgICAgIC8vICB2YWx1ZSAtPSB0ZW1wICogdGltZS5QZXJpb2RUeXBlLk07XHJcbiAgICAgIC8vfVxyXG4gICAgICAvL2lmICh2YWx1ZSA+PSB0aW1lLlBlcmlvZFR5cGUuZCkge1xyXG4gICAgICAvLyAgdGVtcCA9IE1hdGguZmxvb3IodmFsdWUgLyB0aW1lLlBlcmlvZFR5cGUuZCk7XHJcbiAgICAgIC8vICByLnB1c2godGVtcCArICcgRGlhKHMpJyk7XHJcbiAgICAgIC8vICB2YWx1ZSAtPSB0ZW1wICogdGltZS5QZXJpb2RUeXBlLmQ7XHJcbiAgICAgIC8vfVxyXG4gICAgICAvL2lmICh2YWx1ZSA+PSB0aW1lLlBlcmlvZFR5cGUuaCkge1xyXG4gICAgICAvLyAgdGVtcCA9IE1hdGguZmxvb3IodmFsdWUgLyB0aW1lLlBlcmlvZFR5cGUuaCk7XHJcbiAgICAgIC8vICByLnB1c2godGVtcCArICcgSG9yYShzKScpO1xyXG4gICAgICAvLyAgdmFsdWUgLT0gdGVtcCAqIHRpbWUuUGVyaW9kVHlwZS5oO1xyXG4gICAgICAvL31cclxuICAgICAgLy9pZiAodmFsdWUgPj0gdGltZS5QZXJpb2RUeXBlLm0pIHtcclxuICAgICAgLy8gIHRlbXAgPSBNYXRoLmZsb29yKHZhbHVlIC8gdGltZS5QZXJpb2RUeXBlLm0pO1xyXG4gICAgICAvLyAgci5wdXNoKHRlbXAgKyAnIE1pbnV0byhzKScpO1xyXG4gICAgICAvLyAgdmFsdWUgLT0gdGVtcCAqIHRpbWUuUGVyaW9kVHlwZS5tO1xyXG4gICAgICAvL31cclxuICAgICAgLy9pZiAodmFsdWUgPj0gdGltZS5QZXJpb2RUeXBlLnMpIHtcclxuICAgICAgLy8gIHRlbXAgPSBNYXRoLmZsb29yKHZhbHVlIC8gdGltZS5QZXJpb2RUeXBlLnMpO1xyXG4gICAgICAvLyAgci5wdXNoKHRlbXAgKyAnIFNlZ3VuZG8ocyknKTtcclxuICAgICAgLy8gIHZhbHVlIC09IHRlbXAgKiB0aW1lLlBlcmlvZFR5cGUucztcclxuICAgICAgLy99XHJcblxyXG4gICAgICByZXR1cm4gci5qb2luKCcgZSAnKTtcclxuICAgIH1dLFxyXG4gICAgW1RyYW5zZm9ybS5pbkZ1bGwsIGZ1bmN0aW9uICh2YWx1ZTogbnVtLCBvcHRzOiBQYXJ0aWFsPEluRnVsbE9wdGlvbnM+KSB7XHJcblxyXG4gICAgICBsZXRcclxuICAgICAgICB2YWxzID0gaW5GdWxsLFxyXG4gICAgICAgIGludCA9IE1hdGguZmxvb3IodmFsdWUpLFxyXG4gICAgICAgIGRlYyA9IE1hdGgucm91bmQodmFsdWUgJSAxICogMTAwKTtcclxuXHJcbiAgICAgIGlmIChpbnQgPT0gMClcclxuICAgICAgICByZXR1cm4gdmFsc1swXS5leHAoKTtcclxuICAgICAgaWYgKCFvcHRzKVxyXG4gICAgICAgIG9wdHMgPSB7fTtcclxuICAgICAgaWYgKCFvcHRzLmcpXHJcbiAgICAgICAgb3B0cy5nID0gJ20nO1xyXG4gICAgICBvcHRzLmMgPSAodiwgb3B0czogSW5GdWxsT3B0aW9ucywgaSA9IHZhbHMubGVuZ3RoIC0gMSkgPT4ge1xyXG4gICAgICAgIGZvciAoOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgICBsZXQgdCA9IHZhbHNbaV07XHJcbiAgICAgICAgICBpZiAodC52IDw9IHYpXHJcbiAgICAgICAgICAgIHJldHVybiB0LmV4cCh2LCBvcHRzLCBpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHQgPSBvcHRzLmMoaW50LCA8SW5GdWxsT3B0aW9ucz5vcHRzKTtcclxuICAgICAgaWYgKG9wdHMucCkge1xyXG4gICAgICAgIHQgKz0gJyAnICsgKGludCA9PSAxICYmIG9wdHMucyB8fCBvcHRzLnApO1xyXG4gICAgICAgIGlmIChkZWMpXHJcbiAgICAgICAgICBpZiAob3B0cy5kcCkge1xyXG4gICAgICAgICAgICB0ICs9IGAgZSAke29wdHMuYyhkZWMsIDxJbkZ1bGxPcHRpb25zPm9wdHMpfSAkeyhkZWMgPT0gMSAmJiBvcHRzLmRzIHx8IG9wdHMuZHApfWA7XHJcblxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJub3QgaW1wbGVtZW50ZWRcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHQudG9VcHBlckNhc2UoKTtcclxuICAgICAgLy9sZXQgciA9ICcnO1xyXG4gICAgICAvL3tcclxuICAgICAgLy8gIGxldCB0MCA9IHZhbHNbaV07XHJcbiAgICAgIC8vICBpZiAodDAudiA8PSB2YWx1ZSkge1xyXG4gICAgICAvLyAgICBsZXQgcGFydHMgPSBbdDBdLCB0MSA9IE1hdGguZmxvb3IodmFsdWUgLyB0MC52KTtcclxuICAgICAgLy8gICAgZm9yIChsZXQgaiA9IGkgLSAxOyBqID4gMCAmJiB0MSAhPSAxOyBqLS0pIHtcclxuICAgICAgLy8gICAgICB0MCA9IHZhbHNbal07XHJcbiAgICAgIC8vICAgICAgaWYgKHQwLnYgPD0gdDEpIHtcclxuICAgICAgLy8gICAgICAgIHQxID0gTWF0aC5mbG9vcih2YWx1ZSAvIHQwLnYpO1xyXG5cclxuICAgICAgLy8gICAgICB9XHJcbiAgICAgIC8vICAgIH1cclxuICAgICAgLy8gIH1cclxuICAgICAgLy99XHJcbiAgICAgIC8vcmV0dXJuIHI7XHJcbiAgICB9XVxyXG4gIF0pO1xyXG4gIGV4cG9ydCBjb25zdCBlbnVtIFNpbmdsZUZvcm1hdCB7XHJcbiAgICBOID0gJ04nLFxyXG4gICAgLyoqICovXHJcbiAgICBEID0gJ0QnLFxyXG4gICAgLyoqUGVyY2VudGFnZSAqL1xyXG4gICAgUCA9ICclJyxcclxuICAgIC8qKk5vdGHDp8OjbyBjaWVudGlmaWNhICovXHJcbiAgICBFID0gJ0UnLFxyXG5cclxuICAgIC8qKkN1cnJlbmN5ICovXHJcbiAgICBDID0gJyQnXHJcbiAgfVxyXG4gIGNvbnN0IHNpbmdsZUZvcm1hdHMgPSB7XHJcbiAgICBbU2luZ2xlRm9ybWF0Lk5dOiAnMCwwLjAwJyxcclxuICAgIFtTaW5nbGVGb3JtYXQuRF06ICcwLDAnLFxyXG4gICAgW1NpbmdsZUZvcm1hdC5QXTogJzAsMC4wICUnLFxyXG4gICAgW1NpbmdsZUZvcm1hdC5FXTogJzAsMEUnLFxyXG4gICAgW1NpbmdsZUZvcm1hdC5DXTogJzAsMC4wMCAkJ1xyXG4gIH07XHJcbiAgZXhwb3J0IGludGVyZmFjZSBMb2NhbGUge1xyXG4gICAgc3ViOiB7IFtpbmRleDogbnVtYmVyXTogYW55OyB9O1xyXG4gIH1cclxuICBleHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZTogTG9jYWxlID0ge1xyXG4gICAgc3ViOiB7XHJcbiAgICAgICctMyc6ICdtJyxcclxuICAgICAgJy0yJzogJ0MnLFxyXG4gICAgICAnLTEnOiAnZCcsXHJcbiAgICAgIDE6ICdEJyxcclxuICAgICAgMjogJ0MnLFxyXG4gICAgICAzOiAnSycsXHJcbiAgICAgIDQ6ICdNJ1xyXG4gICAgfVxyXG4gIH07XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGNoZWNrbnVtKHZhbHVlOiBudW0sIGV4cDogbnVtKSB7XHJcbiAgICBsZXQgdCA9IE1hdGgucG93KDEwLCBleHApO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiB0KSAvIHQ7XHJcbiAgfVxyXG4gIGV4cG9ydCBjbGFzcyBTY2FsYXIge1xyXG4gICAgLyoqICovXHJcbiAgICB2YWx1ZTogbnVtO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlucHV0OiBJbnB1dCwgZm9ybWF0Pzogc3RyKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZShpbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKGlucHV0OiBJbnB1dCk6IFNjYWxhciB7XHJcbiAgICAgIHJldHVybiBuZXcgU2NhbGFyKHRoaXMudmFsdWUgKyB2YWx1ZShpbnB1dCkpO1xyXG4gICAgfVxyXG4gICAgc3ViKGlucHV0OiBJbnB1dCk6IFNjYWxhciB7XHJcbiAgICAgIHJldHVybiBuZXcgU2NhbGFyKHRoaXMudmFsdWUgLSB2YWx1ZShpbnB1dCkpO1xyXG4gICAgfVxyXG4gICAgdGltZShpbnB1dDogSW5wdXQpOiBTY2FsYXIge1xyXG4gICAgICByZXR1cm4gbmV3IFNjYWxhcih0aGlzLnZhbHVlICogdmFsdWUoaW5wdXQpKTtcclxuICAgIH1cclxuICAgIGRpdihpbnB1dDogSW5wdXQpOiBTY2FsYXIge1xyXG4gICAgICByZXR1cm4gbmV3IFNjYWxhcih0aGlzLnZhbHVlIC8gdmFsdWUoaW5wdXQpKTtcclxuICAgIH1cclxuICAgIGZtdChmb3JtYXQ/OiBzdHIgfCBUcmFuc2Zvcm0gfCBTaW5nbGVGb3JtYXQsIG9wdHM6IERpYyA9IGRlZmF1bHRPcHRpb25zKTogc3RyIHtcclxuICAgICAgbGV0IHZhbHVlID0gY2hlY2tudW0odGhpcy52YWx1ZSwgNCk7XHJcbiAgICAgIGlmIChpc05hTih2YWx1ZSkpXHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB7XHJcbiAgICAgICAgbGV0IHQgPSB0cmFuc2Zvcm1zLmdldCg8VHJhbnNmb3JtPmZvcm1hdCk7XHJcbiAgICAgICAgaWYgKHQpXHJcbiAgICAgICAgICByZXR1cm4gdCh2YWx1ZSwgb3B0cyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZvcm1hdCBpbiBzaW5nbGVGb3JtYXRzKVxyXG4gICAgICAgIGZvcm1hdCA9IHNpbmdsZUZvcm1hdHNbZm9ybWF0XTtcclxuICAgICAgZWxzZSBpZiAoIWZvcm1hdClcclxuICAgICAgICBmb3JtYXQgPSBkZWZhdWx0Rm9ybWF0O1xyXG5cclxuICAgICAgbGV0IHQwOiBudW07XHJcblxyXG4gICAgICAvL2VzY2FwZVxyXG4gICAgICB3aGlsZSAoKHQwID0gZm9ybWF0LmluZGV4T2YoJ1xcXFwnLCB0MCkpICE9IC0xKVxyXG4gICAgICAgIGZvcm1hdCA9IHNwbGljZXN0cihmb3JtYXQsIHQwLCAyLCAnXCInICsgZm9ybWF0W3QwICsgMV0gKyAnXCInKTtcclxuXHJcbiAgICAgIC8vdW5pdFxyXG4gICAgICBpZiAoKHQwID0gZm9ybWF0LmluZGV4T2YoJyonKSkgIT0gLTEpIHtcclxuICAgICAgICBmb3JtYXQgPSBzcGxpY2VzdHIoZm9ybWF0LCB0MCwgMSwgJ1wiJyArIG9wdHMudW5pdCArICdcIicpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL2N1cnJlbmN5XHJcbiAgICAgIGlmICgodDAgPSBmb3JtYXQuaW5kZXhPZignJCcpKSAhPSAtMSkge1xyXG4gICAgICAgIGxldFxyXG4gICAgICAgICAgY3VyciA9IG9wdHMuY3VycmVuY3kgfHwgY3VycmVuY3koKSxcclxuICAgICAgICAgIHNlbCA9IG9wdGlvbnMuY3VycmVuY2llcz8uZmluZCh2ID0+IHYuY29kZSA9PSBjdXJyKTtcclxuXHJcbiAgICAgICAgLy92YWx1ZSA9IHZhbHVlICogKHNlbC52YWx1ZSAvIChvcHRzLnJlZkN1ciB8fCAxKSk7XHJcbiAgICAgICAgZm9ybWF0ID0gc3BsaWNlc3RyKGZvcm1hdCwgdDAsIDEsIG9wdHMuY3VycmVuY3lTeW1ib2wgPT09IGZhbHNlID8gJycgOiAnXCIgJyArIGN1cnIgKyAnXCInKTtcclxuICAgICAgfVxyXG4gICAgICAvL3BlcmNlbnRcclxuICAgICAgZWxzZSBpZiAoKHQwID0gZm9ybWF0LmluZGV4T2YoJyUnKSkgIT0gLTEpIHtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAwO1xyXG5cclxuICAgICAgICBmb3JtYXQgPSBzcGxpY2VzdHIoZm9ybWF0LCB0MCwgMSwgJ1wiJVwiJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vcGVybWlsaGFnZW1cclxuICAgICAgZWxzZSBpZiAoKHQwID0gZm9ybWF0LmluZGV4T2YoJ+KAsCcpKSAhPSAtMSkge1xyXG4gICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDAwO1xyXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKCfigLAnLCAnXCLigLBcIicpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vYXJyZWRvbmRhclxyXG4gICAgICBlbHNlIGlmICgodDAgPSBmb3JtYXQuaW5kZXhPZignPScpKSAhPSAtMSkge1xyXG4gICAgICAgIHRocm93IFwibm90IGltcGxlbWVudGVkXCI7XHJcbiAgICAgICAgLy92YWx1ZSA9IHZhbHVlICogMTAwO1xyXG4gICAgICAgIC8vY29uc3QgdGVtcDogQXJyYXk8UGFpcjI8bnVtPj4gPSBbXHJcbiAgICAgICAgLy8gIHsga2V5OiAnRycsIHZhbDogMV8wMDBfMDAwXzAwMCB9LFxyXG4gICAgICAgIC8vICB7IGtleTogJ20nLCB2YWw6IDFfMDAwXzAwMCB9LFxyXG4gICAgICAgIC8vICB7IGtleTogJ2snLCB2YWw6IDFfMDAwIH0sXHJcbiAgICAgICAgLy9dO1xyXG4gICAgICAgIC8vZm9ybWF0LnJlcGxhY2UoJz0nLCAnXCJLXCInKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0XHJcbiAgICAgICAgaW50ZWdlciA9IHZhbHVlICsgJycsXHJcbiAgICAgICAgcG9pbnRJbmRleCA9IGludGVnZXIuaW5kZXhPZignLicpLFxyXG4gICAgICAgIGZsb2F0ID0gJycsXHJcbiAgICAgICAgLy9mbG9hdFZhbHVlOiBzdHIsXHJcbiAgICAgICAgcmVzdWx0ID0gJyc7XHJcblxyXG4gICAgICBpZiAocG9pbnRJbmRleCAhPSAtMSkge1xyXG4gICAgICAgIGZsb2F0ID0gaW50ZWdlci5zbGljZShwb2ludEluZGV4ICsgMSk7XHJcbiAgICAgICAgaW50ZWdlciA9IGludGVnZXIuc2xpY2UoMCwgcG9pbnRJbmRleCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZm9ybWF0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIHN3aXRjaCAoZm9ybWF0W2ldKSB7XHJcblxyXG4gICAgICAgICAgY2FzZSAnXCInOlxyXG4gICAgICAgICAgICB3aGlsZSAoZm9ybWF0WysraV0gIT0gJ1wiJykge1xyXG4gICAgICAgICAgICAgIHJlc3VsdCArPSBmb3JtYXRbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwiJ1wiOlxyXG4gICAgICAgICAgICB3aGlsZSAoZm9ybWF0WysraV0gIT0gXCInXCIpIHtcclxuICAgICAgICAgICAgICByZXN1bHQgKz0gZm9ybWF0W2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnMCc6XHJcbiAgICAgICAgICAgIHQwID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKGZvcm1hdFtpICsgdDBdID09IFwiMFwiKVxyXG4gICAgICAgICAgICAgICsrdDA7XHJcblxyXG4gICAgICAgICAgICBpbnRlZ2VyID0gaW50ZWdlci5wYWRTdGFydCh0MCwgJzAnKTtcclxuXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHNwbGljZXN0cihyZXN1bHQsIGkgLSB0MCArIDEsIHQwLCBpbnRlZ2VyKTtcclxuICAgICAgICAgICAgaSArPSB0MCAtIDE7XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJywnOlxyXG4gICAgICAgICAgICB0MCA9IDA7XHJcbiAgICAgICAgICAgIGkrKztcclxuXHJcbiAgICAgICAgICAgIGxldCByID0gJycsIGlsID0gaW50ZWdlci5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpbDsgaiA+IDA7IGogLT0gMykge1xyXG4gICAgICAgICAgICAgIHIgPSAnICcgKyBpbnRlZ2VyLnNsaWNlKE1hdGgubWF4KGogLSAzLCAwKSwgaikgKyByO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHNwbGljZXN0cihyZXN1bHQsIHJlc3VsdC5sZW5ndGggLSBpbCwgaWwsIHIuc2xpY2UoMSkpO1xyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICcuJzoge1xyXG4gICAgICAgICAgICBsZXQgbWluID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKGZvcm1hdFtpICsgMV0gPT0gJzAnKSB7XHJcbiAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgIG1pbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBtYXggPSBtaW47XHJcbiAgICAgICAgICAgIHdoaWxlIChmb3JtYXRbaSArIDFdID09ICcjJykge1xyXG4gICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICBtYXgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmxvYXQubGVuZ3RoID49IG1heClcclxuICAgICAgICAgICAgICBmbG9hdCA9IGZsb2F0LnN1YnN0cigwLCBtYXgpO1xyXG4gICAgICAgICAgICBlbHNlIGZsb2F0ID0gZmxvYXQucGFkRW5kKG1pbiwgJzAnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmbG9hdC5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgcmVzdWx0ICs9ICcsJyArIGZsb2F0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ0UnOlxyXG4gICAgICAgICAgICB0aHJvdyBcIm5vdCBpbXBsZW1lbnRlZFwiO1xyXG4gICAgICAgICAgY2FzZSAnJCc6XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSAnQUt6JztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OiByZXN1bHQgKz0gZm9ybWF0W2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oZm9ybWF0OiBUcmFuc2Zvcm0sIG9wdHM6IERpYyA9IGRlZmF1bHRPcHRpb25zKSB7XHJcbiAgICAgIGxldCB0ID0gdHJhbnNmb3Jtcy5nZXQoZm9ybWF0KTtcclxuICAgICAgaWYgKHQpXHJcbiAgICAgICAgcmV0dXJuIHQodGhpcy52YWx1ZSwgb3B0cyk7XHJcbiAgICAgIGVsc2UgcmV0dXJuIFwiaW52YWxpZFwiO1xyXG4gICAgfVxyXG4gICAgZ2V0IHZhbGlkKCkge1xyXG4gICAgICByZXR1cm4gIU51bWJlci5pc05hTih0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGludGVyZmFjZSBJbkZ1bGxPcHRpb25zIHtcclxuICAgIC8qKmdlbmRlciAqL1xyXG4gICAgZzogJ2YnIHwgJ20nLFxyXG4gICAgLyoqbmV4dCAqL1xyXG4gICAgbj86IHN0clxyXG4gICAgYyh2YWx1ZTogbnVtLCBvcHRzOiBJbkZ1bGxPcHRpb25zLCBpPzogbnVtKTogc3RyO1xyXG4gICAgLyoqc2luZ2xlIHVuaXQgKi9cclxuICAgIHM/OiBzdHI7XHJcbiAgICAvKipzaW5nbGUgdW5pdCAqL1xyXG4gICAgcD86IHN0cjtcclxuICAgIC8qKmRlY2ltYWwgc2luZ2xlIHVuaXQqL1xyXG4gICAgZHM/OiBzdHI7XHJcbiAgICAvKipkZWNpbWFsIHBsdXJhbCB1bml0Ki9cclxuICAgIGRwPzogc3RyO1xyXG4gIH1cclxuICBleHBvcnQgaW50ZXJmYWNlIEluRnVsbFVuaXQge1xyXG4gICAgdjogbnVtLFxyXG4gICAgZXhwKHZhbHVlPzogbnVtLCBvcHRzPzogSW5GdWxsT3B0aW9ucywgaT86IG51bSk6IHN0cjtcclxuICB9XHJcblxyXG4gIGludGVyZmFjZSBTZXR0aW5ncyB7XHJcbiAgICBudWxsPzogc3RyO1xyXG4gICAgemVybz86IHN0cjtcclxuICAgIGN1cnJlbmNpZXM/OiBDdXJyZW5jeVtdO1xyXG4gICAgY3VycmVuY3k/OiBzdHI7XHJcbiAgfVxyXG4gIGxldCBvcHRpb25zOiBTZXR0aW5ncyA9IHt9O1xyXG4gIGV4cG9ydCBjb25zdCBjdXJyZW5jeSA9ICgpID0+IG9wdGlvbnMuY3VycmVuY3k7XHJcbiAgZXhwb3J0IGNvbnN0IGN1cnJlbmNpZXMgPSAoKSA9PiBvcHRpb25zLmN1cnJlbmNpZXM7XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHNldHRpbmdzKHZhbHVlOiBTZXR0aW5ncykge1xyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHZhbHVlKTtcclxuICB9IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWUoaW5wdXQ6IERhdGUgfCBzdHJpbmcgPSBuZXcgRGF0ZSgpKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBpbnB1dCA9PSBcInN0cmluZ1wiID8gZnJvbVQoaW5wdXQpIDogbmV3IFRpbWUoaW5wdXQpO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBUaW1lIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHY6IERhdGUpIHsgfVxyXG5cclxuICBnZXQgdmFsaWQoKSB7IHJldHVybiB0aGlzLnYgIT0gbnVsbCB8fCBpc05hTig8YW55PnRoaXMudik7IH1cclxuICAvKipcclxuICAgKiBmb3JtYXRcclxuICAgKiBAcGFyYW0gcGF0dGVyblxyXG4gICAqIEBwYXJhbSBkZWZcclxuICAgKi9cclxuICBmbXQocGF0dGVybj86IHN0cmluZywgZGVmPzogc3RyaW5nKSB7XHJcbiAgICBsZXQgaSA9IHRoaXMudjtcclxuICAgIGlmICghaSkgcmV0dXJuICcnO1xyXG4gICAgaWYgKHBhdHRlcm4gaW4gcXVpY2tmb3JtYXQpXHJcbiAgICAgIHBhdHRlcm4gPSBxdWlja2Zvcm1hdFtwYXR0ZXJuXTtcclxuICAgIGlmICh0aGlzLnZhbGlkKVxyXG4gICAgICByZXR1cm4gKHBhdHRlcm4gfHwgZGVmYXVsdEZvcm1hdCkucmVwbGFjZShmb3JtYXRSZWdleCwgKHN1Yik6IGFueSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChzdWIpIHtcclxuICAgICAgICAgIGNhc2UgJ3l5eXknOlxyXG4gICAgICAgICAgICByZXR1cm4gaS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICAgIGNhc2UgJ3NzJzpcclxuICAgICAgICAgICAgcmV0dXJuIChpLmdldFNlY29uZHMoKSArICcnKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICAgIHJldHVybiBpLmdldFNlY29uZHMoKTtcclxuXHJcbiAgICAgICAgICBjYXNlICdtbSc6XHJcbiAgICAgICAgICAgIHJldHVybiAoaS5nZXRNaW51dGVzKCkgKyAnJykucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICAgIGNhc2UgJ20nOlxyXG4gICAgICAgICAgICByZXR1cm4gaS5nZXRNaW51dGVzKCk7XHJcblxyXG4gICAgICAgICAgY2FzZSAnSEgnOlxyXG4gICAgICAgICAgY2FzZSAnaGgnOlxyXG4gICAgICAgICAgICByZXR1cm4gKGkuZ2V0SG91cnMoKSArICcnKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgICAgY2FzZSAnaCc6XHJcbiAgICAgICAgICAgIHJldHVybiBpLmdldEhvdXJzKCk7XHJcblxyXG5cclxuICAgICAgICAgIGNhc2UgJ2RkJzpcclxuICAgICAgICAgICAgcmV0dXJuIChpLmdldERhdGUoKSArICcnKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgICAgY2FzZSAnZCc6XHJcbiAgICAgICAgICAgIHJldHVybiBpLmdldERhdGUoKTtcclxuXHJcbiAgICAgICAgICBjYXNlICdNTSc6XHJcbiAgICAgICAgICAgIHJldHVybiAoKGkuZ2V0TW9udGgoKSArIDEpICsgJycpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgICBjYXNlICdNJzpcclxuICAgICAgICAgICAgcmV0dXJuIGkuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIGVsc2UgZGVmIHx8ICcnO1xyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgdG9EQigpIHtcclxuICAgIHJldHVybiB0aGlzLmZtdCgneXl5eS1NTS1kZCBISDptbTpzcycpXHJcbiAgfVxyXG5cclxuICBsYXN0ZGF5KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSwgMCkuZ2V0RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbWludXRlKCk6IG51bWJlcjtcclxuICBtaW51dGUodmFsdWU6IG51bWJlcik6IHRoaXM7XHJcbiAgbWludXRlKHZhbHVlPzogbnVtYmVyKSB7XHJcbiAgICBpZiAodmFsdWUgPT0gbnVsbClcclxuICAgICAgcmV0dXJuIHRoaXMudi5nZXRNaW51dGVzKCk7XHJcbiAgICB0aGlzLnYuc2V0TWludXRlcyh2YWx1ZSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNlY29uZCgpOiBudW1iZXI7XHJcbiAgc2Vjb25kKHZhbHVlOiBudW1iZXIpOiB0aGlzO1xyXG4gIHNlY29uZCh2YWx1ZT86IG51bWJlcikge1xyXG4gICAgaWYgKHZhbHVlID09IG51bGwpXHJcbiAgICAgIHJldHVybiB0aGlzLnYuZ2V0U2Vjb25kcygpO1xyXG4gICAgdGhpcy52LnNldFNlY29uZHModmFsdWUpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGhvdXIoKTogbnVtYmVyO1xyXG4gIGhvdXIodmFsdWU6IG51bWJlcik6IHRoaXM7XHJcbiAgaG91cih2YWx1ZT86IG51bWJlcikge1xyXG4gICAgaWYgKHZhbHVlID09IG51bGwpXHJcbiAgICAgIHJldHVybiB0aGlzLnYuZ2V0SG91cnMoKTtcclxuICAgIHRoaXMudi5zZXRIb3Vycyh2YWx1ZSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGFkZEhvdXIodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy52LnNldEhvdXJzKHRoaXMudi5nZXRIb3VycygpICsgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGRheSgpOiBudW1iZXI7XHJcbiAgZGF5KHZhbHVlOiBudW1iZXIpOiB0aGlzO1xyXG4gIGRheSh2YWx1ZT86IG51bWJlcikge1xyXG4gICAgaWYgKHZhbHVlID09IG51bGwpXHJcbiAgICAgIHJldHVybiB0aGlzLnYuZ2V0RGF0ZSgpO1xyXG4gICAgdGhpcy52LnNldERhdGUodmFsdWUpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGFkZERheSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnYuc2V0RGF0ZSh0aGlzLnYuZ2V0RGF0ZSgpICsgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB5ZWFyKCk6IG51bWJlcjtcclxuICB5ZWFyKHZhbHVlOiBudW1iZXIpOiB0aGlzO1xyXG4gIHllYXIodmFsdWU/OiBudW1iZXIpIHtcclxuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxyXG4gICAgICByZXR1cm4gdGhpcy52LmdldEZ1bGxZZWFyKCk7XHJcbiAgICB0aGlzLnYuc2V0RnVsbFllYXIodmFsdWUpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBhZGRZZWFyKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMudi5zZXRGdWxsWWVhcih0aGlzLnYuZ2V0RnVsbFllYXIoKSArIHZhbHVlKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICAvKipnZXQgbW9udGggKi9cclxuICBtb250aCgpOiBudW1iZXI7XHJcbiAgLyoqc2V0IG1vbnRoICovXHJcbiAgbW9udGgodmFsdWU6IG51bWJlcik6IHRoaXM7XHJcbiAgbW9udGgodmFsdWU/OiBudW1iZXIpIHtcclxuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxyXG4gICAgICByZXR1cm4gdGhpcy52LmdldE1vbnRoKCkgKyAxO1xyXG4gICAgdGhpcy52LnNldE1vbnRoKHZhbHVlIC0gMSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgYWRkTW9udGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy52LnNldE1vbnRoKHRoaXMudi5nZXRNb250aCgpICsgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB3ZWVrU3RhcnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hZGREYXkoLXRoaXMudi5nZXREYXkoKSk7XHJcbiAgfVxyXG5cclxuICB0b0lucHV0KHR5cGU6IElucHV0VHlwZSkge1xyXG4gICAgaWYgKCF0aGlzLnZhbGlkKSByZXR1cm4gbnVsbDtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdkYXRlJzpcclxuICAgICAgICByZXR1cm4gdGhpcy5mbXQoJ3l5eXktTU0tZGQnKTtcclxuICAgICAgY2FzZSAnZGF0ZXRpbWUtbG9jYWwnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmZtdCgneXl5eS1NTS1kZFRoaDptbScpO1xyXG4gICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm10KCd5eXl5LU1NJyk7XHJcbiAgICAgIGNhc2UgJ3RpbWUnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmZtdCgnaGg6bW0nKTtcclxuICAgICAgY2FzZSAnd2Vlayc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm10KCd5eXl5LVtXXXd3Jyk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgXCJ1bnNldHRlZDI0XCI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZyb21Ob3coZm9ybWF0Pzogc3RyaW5nKSB7XHJcbiAgICAvLy8qMiBhbm9zKi8nWScgfC8qMiovJ04nIHwvKjIgYW5vcyBlIDMgbWVzZXMqLydNJyB8LyoyIGFub3M7IDMgbWVzZXMqLydtJ1xyXG4gIH1cclxuICBjbG9uZSgpIHsgcmV0dXJuIG5ldyBUaW1lKG5ldyBEYXRlKHRoaXMudi5nZXRUaW1lKCkpKTsgfVxyXG4gIHN1YnRyYWN0KCkge1xyXG5cclxuICB9XHJcbiAgZGlmZihpbnB1dDogVGltZSwgcGVyaW9kOiBQZXJpb2RUeXBlID0gUGVyaW9kVHlwZS5kKSB7XHJcbiAgICBsZXQgc3BhbiA9IHRoaXMudi5nZXRUaW1lKCkgLSBpbnB1dC52LmdldFRpbWUoKTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKHNwYW4gLyAocGVyaW9kICogMTAwMCkpO1xyXG4gIH1cclxuICBhZGQodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy52LnNldE1pbGxpc2Vjb25kcyh0aGlzLnYuZ2V0TWlsbGlzZWNvbmRzKCkgKyB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgZXF1YWwob3RoZXI6IFRpbWUpIHtcclxuICAgIGlmICghdGhpcy52YWxpZCB8fCAhb3RoZXIudmFsaWQpXHJcbiAgICAgIHJldHVybiBvdGhlci52ID09IHRoaXMudjtcclxuXHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCkgPT0gb3RoZXIudmFsdWVPZigpO1xyXG4gIH1cclxuICBlcXVhbERhdGUoSW5wdXQpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBlcXVhbFRpbWUoSW5wdXQpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICAvKipcclxuICAgKiByZXRvcm5hIGEgZGlmZXJlbsOnYSBkZSB0ZW1wb1xyXG4gICAqIGFnb3JhXHJcbmhvamVcclxub250ZW1cclxuZXN0YSBzZW1hbmFcclxuc2VtYW5hIHBhc3NhZGFzXHJcbmVzdGUgbWVzXHJcbm1lcyBwYXNzYWRvXHJcbnNpbWVzdHJlIHBhc3NhZG9cclxuZXN0ZSBhbm9cclxuYW5vIHBhc3NhZG8gKi9cclxuICBhZ2UoKSB7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbiAgdG9KU09OKCkgeyByZXR1cm4gdGhpcy5mbXQoZnVsbEZvcm1hdCk7IH1cclxuICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLmZtdCgpO1xyXG4gIH1cclxuICB2YWx1ZU9mKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudi52YWx1ZU9mKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZShkYXRlOiBEYXRlKSB7XHJcbiAgcmV0dXJuIGAkeyhkYXRlLmdldEhvdXJzKCkgKyAnJykucGFkU3RhcnQoMiwgJzAnKX06JHsoZGF0ZS5nZXRNaW51dGVzKCkgKyAnJykucGFkU3RhcnQoMiwgJzAnKX06JHsoZGF0ZS5nZXRTZWNvbmRzKCkgKyAnJykucGFkU3RhcnQoMiwgJzAnKX1gO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9yZShpbnB1dDogSFRNTElucHV0RWxlbWVudCkge1xyXG4gIHN3aXRjaCAoaW5wdXQudHlwZSkge1xyXG4gICAgY2FzZSAnZGF0ZSc6XHJcbiAgICBjYXNlICdkYXRldGltZS1sb2NhbCc6XHJcbiAgICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICAgIGNhc2UgJ3RpbWUnOlxyXG4gICAgICByZXR1cm4gaW5wdXQudmFsdWUgKyAnOjAwJztcclxuXHJcbiAgICBjYXNlICdtb250aCc6XHJcbiAgICAgIHJldHVybiBpbnB1dC52YWx1ZSArICc6MDEnO1xyXG4gICAgY2FzZSAnd2Vlayc6XHJcbiAgICAgIHJldHVybiBuZXcgVGltZShpbnB1dC52YWx1ZUFzRGF0ZSkuZm10KCd5eXl5LU1NLWRkJyk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgY2hlY2tGb3JtYXRzID0gW1xyXG4gIC8vL14oPGQ+XFxkezJ9KS0oPE0+XFxkezJ9KS0oPHk+XFxkezR9KSQvLFxyXG4gIC8vL14oPzxoPlxcZHsyfSk6KD88bT5cXGR7Mn0pKD86Oig/PHM+XFxkezJ9KSkkLyxcclxuXTtcclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrKGlucHV0OiBUaW1lKSB7XHJcblxyXG4gIC8vaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcclxuICAvLyAgbGV0IHQ6IFJlZ0V4cEV4ZWNBcnJheSAmIHsgZ3JvdXBzPzogVGltZU9wdGlvbjsgfTtcclxuICAvLyAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja0Zvcm1hdHMubGVuZ3RoOyBpKyspXHJcbiAgLy8gICAgaWYgKHQgPSBjaGVja0Zvcm1hdHNbaV0uZXhlYyhpbnB1dCkpIHtcclxuICAvLyAgICAgIHJldHVybiBuZXcgVGltZSh0Lmdyb3Vwcyk7XHJcbiAgLy8gICAgfVxyXG4gIC8vfVxyXG5cclxuICAvL3NlIGZvciBEYXRlIG9yIGlucHV0IHJldHVybjtcclxuICBpZiAoKGlucHV0IGluc3RhbmNlb2YgRGF0ZSAmJiAoaW5wdXQgPSBuZXcgVGltZShpbnB1dCkpKSB8fFxyXG4gICAgaW5wdXQgaW5zdGFuY2VvZiBUaW1lIHx8XHJcbiAgICAoaW5wdXQgJiYgdHlwZW9mIGlucHV0ID09ICdvYmplY3QnICYmIChpbnB1dCA9IG5ldyBUaW1lKGlucHV0KSkpKVxyXG4gICAgcmV0dXJuIGlucHV0O1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbm93KCkge1xyXG4gIHJldHVybiBuZXcgVGltZShuZXcgRGF0ZSgpKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZnJvbVQoaW5wdXQ6IHN0cmluZykge1xyXG4gIGlmICghaW5wdXQpIHJldHVybiBuZXcgVGltZShudWxsKTtcclxuICBsZXQgZGF0YSA9IG5ldyBEYXRlKGlucHV0KTtcclxuICBpZiAoaXNOYU4oPGFueT5kYXRhKSAmJiB0aW1lUmVnZXgudGVzdChpbnB1dCkpIHtcclxuICAgIGRhdGEgPSBuZXcgRGF0ZSgnMDAwMC0wMS0wMSAnICsgaW5wdXQpO1xyXG4gIH1cclxuICByZXR1cm4gbmV3IFRpbWUoZGF0YSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShpbnB1dDogdW5rbm93bik6IFRpbWUge1xyXG4gIGlmIChpbnB1dCA9PSBudWxsIHx8IGlucHV0IGluc3RhbmNlb2YgRGF0ZSlcclxuICAgIHJldHVybiBuZXcgVGltZSg8RGF0ZT5pbnB1dCk7XHJcbiAgaWYgKGlucHV0IGluc3RhbmNlb2YgVGltZSlcclxuICAgIHJldHVybiBpbnB1dDtcclxuICBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT0gJ3N0cmluZycpXHJcbiAgICByZXR1cm4gZnJvbVQoaW5wdXQpO1xyXG4gIGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PSAnbnVtYmVyJylcclxuICAgIHJldHVybiBuZXcgVGltZShuZXcgRGF0ZShpbnB1dCkpXHJcbiAgLy9pZiAoaW5wdXQpIHtcclxuICAvLyAgaWYgKGlucHV0WydfX3Byb3RvX18nXSA9PSBPYmplY3QucHJvdG90eXBlKVxyXG4gIC8vICAgIHRocm93IFwibm90IGltcGxlbWVudGVkXCI7XHJcblxyXG4gIC8vICB0aGlzLmlucHV0ID0gaW5wdXRWYWx1ZShpbnB1dCk7XHJcbiAgLy99IGVsc2UgaWYgKCFhcmd1bWVudHMubGVuZ3RoKVxyXG4gIC8vICB0aGlzLmlucHV0ID0gbmV3IERhdGUoKTtcclxuICAvL2Vsc2UgdGhpcy5pbnB1dCA9IG51bGw7XHJcbiAgLy9pZiAoIWFyZ3VtZW50cy5sZW5ndGgpXHJcbiAgLy8gIHJldHVybiBuZXcgVGltZSgpO1xyXG4gIC8vcmV0dXJuIG5ldyBUaW1lKGlucHV0LCBmb3JtYXQpO1xyXG59XHJcblxyXG50eXBlIEtleSA9IHN0cmluZyB8IG51bWJlcjtcclxuaW50ZXJmYWNlIFRpbWVPcHRpb24ge1xyXG4gIC8qKnllYXIgKi9cclxuICB5PzogS2V5O1xyXG4gIC8qKk1vbnRoICovXHJcbiAgTT86IEtleTtcclxuICAvKipkYXkgKi9cclxuICBkPzogS2V5O1xyXG4gIC8qKnllYXIgKi9cclxuICBoPzogS2V5O1xyXG4gIC8qKnllYXIgKi9cclxuICBtPzogS2V5O1xyXG4gIC8qKnllYXIgKi9cclxuICBzPzogS2V5O1xyXG59XHJcbmV4cG9ydCB0eXBlIElucHV0ID0gc3RyaW5nIHwgRGF0ZSB8IFRpbWUgfCBudW1iZXIgfCBUaW1lT3B0aW9uO1xyXG5cclxuZXhwb3J0IHR5cGUgSW5wdXRUeXBlID0gJ3RpbWUnIHwgJ2RhdGUnIHwgJ2RhdGV0aW1lLWxvY2FsJyB8ICd3ZWVrJyB8ICdtb250aCc7XHJcblxyXG5leHBvcnQgY29uc3QgZnVsbEZvcm1hdCA9ICd5eXl5LU1NLWRkIGhoOm1tOnNzJzsgLy8neXl5eS1NTS1kZCBoaDptbTpzcyc7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0Rm9ybWF0ID0gJ2RkLU1NLXl5eXkgaGg6bW0nOyAvLyd5eXl5LU1NLWRkIGhoOm1tOnNzJztcclxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlZ2V4ID0gLyhMVHx5ezIsNH18TXsxLDR9fGR7MSwyfXxIezEsMn18aHsxLDJ9fG17MSwyfXxzezEsMn0pL2c7XHJcbmV4cG9ydCBjb25zdCB0aW1lUmVnZXggPSAvXFxkezJ9OlxcZHsyfTpcXGR7Mn0vO1xyXG5leHBvcnQgY29uc3QgcXVpY2tmb3JtYXQgPSB7XHJcbiAgLy9kZXByZWNhdGVcclxuICBsdDogJ2RkLU1NLXl5eXkgaGg6bW0nLFxyXG4gIC8vZGVwcmVjYXRlXHJcbiAgbDogJ2RkLU1NLXl5eXknLFxyXG5cclxuICBmOiAnZGQtTU0teXl5eSBoaDptbScsXHJcbiAgZDogJ2RkLU1NLXl5eXknLFxyXG4gIHQ6ICdoaDptbSdcclxufTtcclxuZnVuY3Rpb24gaW5wdXRWYWx1ZShpbnB1dD86IElucHV0KSB7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKGlucHV0IGluc3RhbmNlb2YgVGltZSA/IGlucHV0LnYgOiA8YW55PmlucHV0KTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGVyaW9kVHlwZSB7XHJcbiAgLy8vKiptaWxpc2Vjb25kcyAqL1xyXG4gIHogPSAwLjEsXHJcbiAgcyA9IDEsXHJcbiAgbSA9IHMgKiA2MCxcclxuICBoID0gbSAqIDYwLFxyXG4gIGQgPSBoICogMjQsXHJcbiAgdyA9IGQgKiA3LFxyXG4gIHkgPSBkICogMzY1LjI0LC8vMlxyXG4gIC8qKnF1aW56ZW5hICovXHJcbiAgZiA9IHkgLyAyNCxcclxuICAvKiptw6pzICovXHJcbiAgTSA9IHkgLyAxMixcclxuICBNMiA9IHkgLyA2LFxyXG4gIE0zID0geSAvIDQsXHJcbiAgTTQgPSB5IC8gMyxcclxuICBNNiA9IHkgLyAyLFxyXG59XHJcbmV4cG9ydCBjbGFzcyBQZXJpb2Qge1xyXG4gIGNvbnN0cnVjdG9yKGJlZ2luOiBJbnB1dCwgZW5kOiBJbnB1dCk7XHJcbiAgY29uc3RydWN0b3IoZGF0ZTogSW5wdXQsIHR5cGU6IFBlcmlvZFR5cGUpO1xyXG4gIGNvbnN0cnVjdG9yKGJlZ2luOiBJbnB1dCwgZW5kOiBJbnB1dCB8IFBlcmlvZFR5cGUpIHtcclxuXHJcbiAgfVxyXG5cclxuICBmb3JtYXQoZm9ybWF0Pzogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBkaXYsIEUsIGcgfSBmcm9tIFwiZ2FsaG9cIjtcclxuaW1wb3J0IHsgQyB9IGZyb20gXCJnYWxodWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtZW51YmFyIH0gZnJvbSBcImdhbGh1aS9tZW51XCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcImdhbGh1aS9zZWxlY3RcIjtcclxuaW1wb3J0IHsgYnV0dG9ucywgaWJ1dHRvbiB9IGZyb20gXCIuLi9nYWxodWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IG91dHB1dCB9IGZyb20gXCIuLi9nYWxodWkvb3V0cHV0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQYWdnaW5nIHtcclxuICBsaW1pdD86IG51bWJlcjtcclxuICBwYWc/OiBudW1iZXI7XHJcbiAgdG90YWw/OiBudW1iZXI7XHJcbiAgaGlkZU9uU2luZ2xlPzogYm9vbGVhbjtcclxuICBzZXRsaW1pdD86IGJvb2xlYW47XHJcbiAgbWluTGltaXQ/OiBudW1iZXI7XHJcbiAgdmlld3RvdGFsPzogYm9vbGVhbjtcclxuICBleHRyZW1lPzogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdnaW5nIGV4dGVuZHMgRTxJUGFnZ2luZz57XHJcbiAgdmlldygpIHtcclxuICAgIGxldFxyXG4gICAgICBpID0gdGhpcy5tb2RlbCxcclxuICAgICAgcGFnczogbnVtYmVyLFxyXG4gICAgICBjb3VudCA9IGcoJ3NwYW4nKTtcclxuICAgIGlmIChpLnNldGxpbWl0KSB7XHJcbiAgICAgIHZhciBsaW1pdHMgPSBuZXcgU2VsZWN0PERpYywgbnVtYmVyPih7XHJcbiAgICAgICAgY2xzOiBDLml0ZW0sXHJcbiAgICAgICAgdmFsdWU6IGkubGltaXQsXHJcbiAgICAgICAgZmx1aWQ6IHRydWUsXHJcbiAgICAgICAgbGFiZWxSZW5kZXI6ICh2KSA9PiB2IHx8ICdNb3N0cmFyIHRvZG9zJyxcclxuICAgICAgICBtZW51UmVuZGVyOiAodikgPT4gZGl2KFtDLml0ZW1dLCB2LmtleSB8fCAnTW9zdHJhciB0b2RvcycpXHJcbiAgICAgIH0sIFtcclxuICAgICAgICBpLm1pbkxpbWl0LFxyXG4gICAgICAgIGkubWluTGltaXQgKiAyLFxyXG4gICAgICAgIGkubWluTGltaXQgKiA0LFxyXG4gICAgICAgIGkubWluTGltaXQgKiAxMCxcclxuICAgICAgICBpLm1pbkxpbWl0ICogMjAsXHJcbiAgICAgICAgMFxyXG4gICAgICBdKTtcclxuICAgICAgZyhsaW1pdHMpLmNscyhDLmZ1bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmJpbmQoZGl2KDAsW1xyXG4gICAgICBpLmV4dHJlbWUgJiYgaWJ1dHRvbignY2hldnJvbi1kb3VibGUtbGVmdCcsIG51bGwsICgpID0+IHRoaXMuc2V0KCdwYWcnLCAxKSkuY2xzKEMuYSksXHJcbiAgICAgIGlidXR0b24oJ2NoZXZyb24tbGVmdCcsIG51bGwsICgpID0+IHRoaXMuc2V0KCdwYWcnLCBpLnBhZyAtIDEpKS5jbHMoQy5hKSxcclxuICAgICAgb3V0cHV0KCkuY2xzKFtDLmhlYWQsIEMuYSwgQy5iXSksXHJcbiAgICAgIGlidXR0b24oJ2NoZXZyb24tcmlnaHQnLCBudWxsLCAoKSA9PiB0aGlzLnNldCgncGFnJywgaS5wYWcgKyAxKSkuY2xzKEMuYSksXHJcbiAgICAgIGkuZXh0cmVtZSAmJiBpYnV0dG9uKCdjaGV2cm9uLWRvdWJsZS1yaWdodCcsIGNvdW50LCAoKSA9PiB0aGlzLnNldCgncGFnJywgcGFncykpLmNscyhDLmEpLFxyXG4gICAgICBsaW1pdHMgJiYgW1xyXG4gICAgICAgIGRpdihDLnNlcGFyYXRvciksXHJcbiAgICAgICAgbGltaXRzLm9uKCdpbnB1dCcsICh2YWx1ZSkgPT4geyB0aGlzLnNldCgnbGltaXQnLCB2YWx1ZSk7IH0pXHJcbiAgICAgIF0sXHJcbiAgICAgIGkudmlld3RvdGFsICYmIFtcclxuICAgICAgICBkaXYoQy5zZXBhcmF0b3IpLFxyXG4gICAgICAgIHRoaXMuYmluZChkaXYoQy5pdGVtKSwgKHMpID0+IHtcclxuICAgICAgICAgIHMuc2V0KGAke01hdGgubWluKGkudG90YWwgLSBpLmxpbWl0ICogKGkucGFnIC0gMSksIGkubGltaXQgfHwgaS50b3RhbCkgfHwgMH0gLyAke2kudG90YWwgfHwgMH1gKTtcclxuICAgICAgICB9KVxyXG4gICAgICBdXHJcbiAgICBdKSwgKHMpID0+IHtcclxuICAgICAgcGFncyA9IGkubGltaXQgJiYgTWF0aC5jZWlsKChpLnRvdGFsIHx8IDApIC8gaS5saW1pdCkgfHwgMTtcclxuICAgICAgcy5jbHMoQy5vZmYsICEhKHBhZ3MgPCAyICYmIGkuaGlkZU9uU2luZ2xlKSk7XHJcblxyXG4gICAgICBsZXQgdCA9IGkuZXh0cmVtZSA/IDAgOiAxXHJcbiAgICAgIHMuY2hpbGQoMiAtIHQpLnNldChpLnBhZyk7XHJcblxyXG4gICAgICBzLmNoaWxkczxIVE1MQnV0dG9uRWxlbWVudD4oMCwgMiAtIHQpLnByb3AoJ2Rpc2FibGVkJywgaS5wYWcgPT0gMSk7XHJcbiAgICAgIHMuY2hpbGRzPEhUTUxCdXR0b25FbGVtZW50PigzIC0gdCwgNSAtIHQgKiAyKS5wcm9wKCdkaXNhYmxlZCcsIGkucGFnID09IHBhZ3MpO1xyXG5cclxuICAgICAgY291bnQuc2V0KHBhZ3MpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgcGFncygpIHtcclxuICAgIGxldCBtZCA9IHRoaXMubW9kZWw7XHJcbiAgICByZXR1cm4gbWQubGltaXQgPyBNYXRoLmNlaWwoKG1kLnRvdGFsIHx8IDApIC8gbWQubGltaXQpIDogMVxyXG4gIH1cclxufSIsImltcG9ydCB7IGNsLCBkaXYsIEUsIGcsIE9uZSwgUywgdG9TVkcsIHdyYXAgfSBmcm9tIFwiZ2FsaG9cIjtcclxuaW1wb3J0IHsgaXNQLCBpc1MsIHQgfSBmcm9tIFwiaW51dGlsXCI7XHJcbmltcG9ydCB7IEtleSBhcyBLZXlzIH0gZnJvbSAndHMta2V5LWVudW0nO1xyXG5pbXBvcnQgeyBMIH0gZnJvbSBcIm9ycmF5XCI7XHJcbmltcG9ydCB7IEl0ZW1zLCBtZW51IH0gZnJvbSBcImdhbGh1aS9tZW51XCI7XHJcbmltcG9ydCBjdHggZnJvbSBcImdhbGh1aS9jdHhcIjtcclxuaW1wb3J0IHsgJCwgYm9keSwgYywgQywgZG9jLCBTcGFjZSB9IGZyb20gXCJnYWxodWkvY29yZVwiO1xyXG5pbXBvcnQgaWNvbiwgeyBJY29uIH0gZnJvbSBcImdhbGh1aS9pY29uXCI7XHJcbmltcG9ydCB7IGFkZCBhcyBhZGRTZWxlY3Rpb24sIHBpdm90LCBsaXN0IGFzIHNlbGVjdGVkLCBtb3ZlIGFzIG1vdmVTZWxlY3Rpb24sIG1vdmVQaXZvdCBhcyBtb3ZlU2VsZWN0aW9uUGl2b3QsIGNsZWFyIGFzIGNsZWFyU2VsZWN0aW9uLCB0cCBhcyBzZWxlY3Rpb25UeXBlLCBTZWxlY3Rpb25UcCB9IGZyb20gXCJvcnJheS9zZWxlY3RvclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWVsZFBsYXRmb3JtIHtcclxuICBudWxsOiAoKSA9PiBhbnk7XHJcbiAgaW52YWxpZEljb246ICgpID0+IGFueTtcclxuICAvKipmb3JtYXQgZm9yIG51bWJlciAqL1xyXG4gIG51bWJlckZtdD86IHN0cjtcclxuICAvKipmb3JtYXQgZm9yIGNoZWNrYm94ICovXHJcbiAgY2hlY2tib3hGbXQ/OiBzdHI7XHJcbiAgZGF0ZUZtdD86IHN0cjtcclxuICB0aW1lRm10Pzogc3RyO1xyXG4gIGh0bWw6IGJvb2xlYW47XHJcbiAgaW50ZXJhY3RpdmU6IGJvb2xlYW47XHJcbiAgZm9ybWF0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBjb25zdCBkZWZGaWVsZFJlbmRlcmVyID0gKCk6IEZpZWxkUGxhdGZvcm0gPT4gKHtcclxuICBudWxsOiAkLm51bGxJY29uLFxyXG4gIGludmFsaWRJY29uOiAoKSA9PiBpY29uKCdpbWFnZS1icm9rZW4nKSxcclxuICBjaGVja2JveEZtdDogXCJpY29uXCIsXHJcbiAgaHRtbDogdHJ1ZSxcclxuICBpbnRlcmFjdGl2ZTogdHJ1ZSxcclxuICBmb3JtYXQ6IHRydWVcclxufSlcclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIG5hbWVzcGFjZSBHYWxob1VJIHtcclxuICAgIGludGVyZmFjZSBUaGVtZSB7XHJcbiAgICAgIGdyaWQ/OiB7XHJcbiAgICAgICAgLyoqaXRlbSBzaXplICovXHJcbiAgICAgICAgc3o/OiBTcGFjZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vKipjcnVkIGNsYXNzZXMgKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gQ0Mge1xyXG4gIHRyZWUgPSBcInRyXCIsXHJcbiAgZ3JpZCA9IFwiZ3JcIixcclxuICBjYXJkID0gXCJjZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dvKHY6IHN0ciB8IEljb24pIHtcclxuICBpZiAodilcclxuICAgIGlmIChpc1ModikpIHtcclxuICAgICAgc3dpdGNoICh2WzBdKSB7XHJcbiAgICAgICAgY2FzZSBcIi5cIjpcclxuICAgICAgICBjYXNlIFwiL1wiOlxyXG4gICAgICAgICAgcmV0dXJuIGcoXCJpbWdcIiwgeyBzcmM6IHYgfSkuY2xzKEMuaWNvbik7XHJcbiAgICAgICAgY2FzZSBcIjxcIjpcclxuICAgICAgICAgIHJldHVybiB0b1NWRyh2KS5jbHMoQy5pY29uKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHJldHVybiBpY29uKHYpO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDcnVkPFQ+IHtcclxuICAvKipcclxuICAgKiBjYWxsZWQgd2hlbiB1c2VyIHNlbGVjdCB0aGlzIGVsZW1lbnQgYnkgbW91c2Ugb3IgYXJyb3cga2V5XHJcbiAgICovXHJcbiAgZm9jdXM/KGl0ZW06IFQsIHN0YXRlOiBib29sKTtcclxuICBvcGVuPyguLi5pdGVtczogVFtdKTtcclxuICBtZW51PyguLi5pdGVtczogVFtdKTogdm9pZCB8IFRhc2s8SXRlbXM+O1xyXG4gIGRlbGV0ZT8oLi4uaXRlbXM6IFRbXSk6IGFueSB8IHRydWU7XHJcbiAgc2luZ2xlPzogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3J1ZEhhbmRsZXI8VD4ocDogUywgZHQ6IEw8VD4sIGk6IElDcnVkPFQ+KSB7XHJcbiAgbGV0XHJcbiAgICBmb2N1cyA9ICh7IGN1cnJlbnRUYXJnZXQ6IGN0LCB0YXJnZXQ6IHQsIGN0cmxLZXk6IGN0cmwsIHNoaWZ0S2V5OiBzaGlmdCB9OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChjdCA9PSB0KVxyXG4gICAgICAgIGNsZWFyU2VsZWN0aW9uKGR0LCBDLnNlbGVjdGVkKTtcclxuICAgICAgZWxzZSBhZGRTZWxlY3Rpb24oZHQsIEMuc2VsZWN0ZWQsIGcoPEVsZW1lbnQ+dCkuY2xvc2VzdChjKEMuaXRlbSkpLmQoKSwgc2VsZWN0aW9uVHlwZShjdHJsLCBzaGlmdCkpO1xyXG4gICAgfTtcclxuICByZXR1cm4gcC5wcm9wKCd0YWJJbmRleCcsIDApLm9uKHtcclxuICAgIGNsaWNrOiBmb2N1cyxcclxuICAgIGRibGNsaWNrOiBpLm9wZW4gJiYgKCgpID0+IGkub3BlbiguLi5zZWxlY3RlZChkdCwgQy5zZWxlY3RlZCkpKSxcclxuICAgIGNvbnRleHRtZW51OiBpLm1lbnUgJiYgKChlKSA9PiB7XHJcbiAgICAgIGZvY3VzKGUpO1xyXG4gICAgICBsZXQgdCA9IGkubWVudSguLi5zZWxlY3RlZChkdCwgQy5zZWxlY3RlZCkpO1xyXG4gICAgICBpZiAodCkge1xyXG4gICAgICAgIGN0eChlLCB0KTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5leHBvcnQgY29uc3Qga2JIVHAgPSA8VD4oZHQ6IEw8VD4sIGRpc3Q6IGludCwgeyBrZXksIGN0cmxLZXk6IGN0cmwsIHNoaWZ0S2V5OiBzaGlmdCB9OiBLZXlib2FyZEV2ZW50KSA9PlxyXG4gIHNoaWZ0ID8gbW92ZVNlbGVjdGlvbihkdCwgQy5zZWxlY3RlZCwgZGlzdCwgc2VsZWN0aW9uVHlwZShjdHJsLCBmYWxzZSkpIDpcclxuICAgIGN0cmwgPyBtb3ZlU2VsZWN0aW9uUGl2b3QoZHQsIEMuc2VsZWN0ZWQsIGRpc3QpIDpcclxuICAgICAgbW92ZVNlbGVjdGlvbihkdCwgQy5zZWxlY3RlZCwgZGlzdCwgU2VsZWN0aW9uVHAuc2V0KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBrYkhhbmRsZXI8VD4oZHQ6IEw8VD4sIGU6IEtleWJvYXJkRXZlbnQsIGk6IElDcnVkPFQ+KSB7XHJcbiAgc3dpdGNoIChlLmtleSkge1xyXG4gICAgY2FzZSBLZXlzLkRlbGV0ZTpcclxuICAgICAgbGV0IHQgPSBzZWxlY3RlZChkdCwgQy5zZWxlY3RlZCk7XHJcbiAgICAgIGlmICh0Lmxlbmd0aCAmJiBpLmRlbGV0ZSkge1xyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoKGF3YWl0IGkuZGVsZXRlKC4uLnQpKSAhPT0gZmFsc2UpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgb2YgdClcclxuICAgICAgICAgICAgICBkdC5yZW1vdmUoaSk7XHJcbiAgICAgICAgfSkoKTtcclxuICAgICAgfSBlbHNlIHJldHVybjtcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBLZXlzLkhvbWU6XHJcbiAgICAgIGtiSFRwKGR0LCAtcGl2b3QoZHQsIEMuc2VsZWN0ZWQpLCBlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEtleXMuRW5kOlxyXG4gICAgICBrYkhUcChkdCwgZHQubGVuZ3RoIC0gcGl2b3QoZHQsIEMuc2VsZWN0ZWQpLCBlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEtleXMuUGFnZURvd246XHJcbiAgICAgIGtiSFRwKGR0LCAxMCwgZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBLZXlzLlBhZ2VVcDpcclxuICAgICAga2JIVHAoZHQsIC0xMCwgZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBLZXlzLkVudGVyOlxyXG4gICAgICBpZiAoaS5vcGVuKSB7XHJcbiAgICAgICAgaS5vcGVuKC4uLnNlbGVjdGVkKGR0LCBDLnNlbGVjdGVkKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH0gZWxzZSByZXR1cm47XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyAkIGFzIGV0dCQsIEJvbmQsIGZpZWxkVHlwZXMsIGdldCwgTGlua1R5cGUsIGZ0eXBlLCBJRmllbGQsIElGaWVsZFR5cGUsIElTZWxlY3QsIFJlYywgSUJvbmQsIEdUIH0gZnJvbSBcImVudGl0eVwiO1xyXG5pbXBvcnQgeyBkZWYsIGV4LCBleHRlbmQsIGlzUCwgaXNWLCB0IH0gZnJvbSBcImludXRpbFwiO1xyXG5pbXBvcnQgeyAkLCBDb2xvciwgSEFsaWduIH0gZnJvbSBcImdhbGh1aS9jb3JlXCI7XHJcbmltcG9ydCB7IElJbnB1dCwgSUlucHV0Q29udGV4dCwgSW5wdXQgfSBmcm9tIFwiZm9ybVwiO1xyXG5pbXBvcnQgZm10LCB7IHNjYWxhciwgdGltZSB9IGZyb20gXCJmb3JtYXRcIjtcclxuaW1wb3J0IHsgRmllbGRQbGF0Zm9ybSB9IGZyb20gXCIuL2NvcmVcIjtcclxuaW1wb3J0IGljb24gZnJvbSBcImdhbGh1aS9pY29uXCI7XHJcbmltcG9ydCBjYWxjIGZyb20gXCJqY2FsY1wiO1xyXG5pbXBvcnQge1xyXG4gIHRleHQgYXMgdGV4dEluLFxyXG4gIG51bWJlciBhcyBudW1iZXJJbixcclxuICB0aW1lIGFzIHRpbWVJbixcclxuICBkYXRlIGFzIGRhdGVJbixcclxuICBjaGVja2JveCBhcyBjaGVja2JveEluLFxyXG4gIHJhZGlvIGFzIHJhZGlvSW4sXHJcbiAgRGF0ZUlucHV0VHlwZSwgU2VsZWN0SW5wdXQsIE11bHRzZWxlY3RJbnB1dCwgSVNlbGVjdElucHV0LCBJTXVsdHNlbGVjdElucHV0XHJcbn0gZnJvbSBcImZvcm0vaW5wdXRzXCI7XHJcbmltcG9ydCB7IGxpbmtlZE1TZWxlY3QsIGxpbmtlZFNlbGVjdCB9IGZyb20gXCIuL3NlbGVjdFwiO1xyXG5pbXBvcnQgd2FpdCBmcm9tIFwiLi4vZ2FsaHVpL3dhaXRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEZUIHtcclxuICB0ZXh0ID0gMSxcclxuICBzZWxlY3QgPSAyLFxyXG4gIGR0ID0gMyxcclxuICBjaGVja2JveCA9IDQsXHJcbiAgY3VycmVuY3kgPSA1LFxyXG4gIHZpcnR1YWwgPSA2LFxyXG4gIGRhdGUgPSA3LFxyXG4gIG51bWJlciA9IDgsXHJcbiAgcXVhbnRpdHkgPSA5LFxyXG5cclxuICBwZXJjZW50YWdlID0gXCJwZXJjZW50YWdlXCIsXHJcbiAgdGltZXIgPSBcInRpbWVyXCIsXHJcbiAgYWdlID0gXCJhZ2VcIixcclxuICByYW5nZSA9IFwicmFuZ2VcIixcclxuICB0aW1lID0gXCJ0aW1lXCIsXHJcbiAgdGVsID0gXCJ0ZWxcIixcclxuICByYXRlID0gXCJyYXRlXCIsXHJcbiAgcGFzc3dvcmQgPSBcInBhc3N3b3JkXCIsXHJcbiAgZmlsZSA9IFwiZmlsZVwiLFxyXG4gIGltYWdlID0gXCJpbWFnZVwiLFxyXG4gIHJhZGlvID0gXCJyYWRpb1wiLFxyXG4gIG9wdGlvbnMgPSBcIm9wdGlvbnNcIixcclxuICBnZW9sb2NhdGlvbiA9IFwiZ2VvbG9jYXRpb25cIixcclxuICBhZGRyZXNzID0gXCJhZGRyZXNzXCIsXHJcbiAgZm9ybXVsYSA9IFwiZm9ybXVsYVwiLFxyXG4gIGRvYyA9IFwiZG9jXCIsXHJcbiAgbXVsdHNlbGVjdCA9IFwibXVsdHNlbGVjdFwiLFxyXG4gIGdlbmRlciA9IFwiZ2VuZGVyXCIsXHJcbiAgY3VzdG9tID0gXCJjdXN0b21cIixcclxuICBjb21wb3N0ID0gXCJjb21wb3N0XCIsXHJcbiAganNvbiA9IFwianNvblwiLFxyXG5cclxuICBmayA9IFwibXR4XCIsXHJcbiAgYmluID0gXCJiaW5cIixcclxuICBwYXRoID0gXCJwYXRoXCIsXHJcbiAgc3ByaXRlID0gXCJzcHJpdGVcIixcclxuICBmaWxlX3NyYyA9IFwiZmlsZV9zcmNcIixcclxuICBpZCA9IFwiaWRcIixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWVsZE9wdHMge1xyXG4gIHF1ZXJ5PzogYm9vbDtcclxuICBzb3J0PzogYm9vbDtcclxuICBzZXQ/OiBib29sO1xyXG4gIGVkaXQ/OiBib29sO1xyXG4gIHNpZGU/OiBib29sO1xyXG4gIC8qKnJlcXVpcmVkICovXHJcbiAgcmVxPzogYm9vbDtcclxufVxyXG4vKipGb3JtYXRlZEZpZWxkT3B0aW9ucyAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZtdEZpZWxkT3B0cyBleHRlbmRzIEZpZWxkT3B0cyB7XHJcbiAgZm10Pzogc3RyO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBGaWVsZDxUIGV4dGVuZHMgRmllbGRPcHRzID0gRmllbGRPcHRzPiBpbXBsZW1lbnRzIElGaWVsZCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGtleTogc3RyLCBwdWJsaWMgdHA6IEtleSwgcHVibGljIG86IFQgPSA8VD57fSkge1xyXG4gICAgdGhpcy5yZXEgPSB0KG8ucmVxKTtcclxuICAgIHRoaXMuZWRpdCA9IGRlZihvLmVkaXQsIHRoaXMuc2V0KTtcclxuICAgIHRoaXMuc2lkZSA9IG8uc2lkZTtcclxuICB9XHJcbiAgdGV4dD86IHN0cjtcclxuICBlZGl0OiBib29sO1xyXG4gIHNpZGU6IGJvb2w7XHJcbiAgcmVxOiBib29sO1xyXG5cclxuICBnZXQgdHlwZSgpOiBGaWVsZFR5cGUgeyByZXR1cm4gZnR5cGUodGhpcyk7IH1cclxuICBnZXQgcXVlcnkoKSB7IHJldHVybiBkZWYodGhpcy5vLnF1ZXJ5LCB0aGlzLnR5cGUucXVlcnkpOyB9XHJcbiAgZ2V0IHNvcnQoKSB7IHJldHVybiBkZWYodGhpcy5vLnNvcnQsIHRoaXMudHlwZS5zb3J0KTsgfVxyXG4gIGdldCBzZXQoKSB7IHJldHVybiBkZWYodGhpcy5vLnNldCwgdGhpcy50eXBlLnNldCk7IH1cclxuICBpbnB1dCgpOiBJbnB1dCB7IHJldHVybiB0aGlzLnR5cGUuaW5wdXQodGhpcykgfVxyXG4gIG91dHB1dCh2YWx1ZSwgY3R4OiBPdXRwdXRDdHgpIHsgcmV0dXJuIHRoaXMudHlwZS5vdXRwdXQodmFsdWUsIGN0eCwgdGhpcykgfVxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgT3V0cHV0Q3R4IHtcclxuICByZWM/OiBSZWM7XHJcbiAgcDogRmllbGRQbGF0Zm9ybTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkVHlwZTxUIGV4dGVuZHMgRmllbGRPcHRzID0gRmllbGRPcHRzPiBleHRlbmRzIElGaWVsZFR5cGUge1xyXG4gIHNvcnQ/OiBib29sZWFuO1xyXG4gIGJsb2NrPzogYm9vbGVhbjtcclxuICBxdWVyeT86IGJvb2xlYW47XHJcbiAgYWxpZ24/OiBIQWxpZ247XHJcbiAgc2V0PzogYm9vbDtcclxuXHJcblxyXG4gIG91dHB1dD8odmFsdWUsIGN0eDogT3V0cHV0Q3R4LCBmOiBGaWVsZDxUPik7XHJcbiAgaW5wdXQ/KGY6IEZpZWxkPFQ+KTogSW5wdXQ7XHJcbiAgZmlsdGVyPyhmaWVsZDogRmllbGQpOiBhbnk7XHJcbiAgc2l6ZT8oKTogZmxvYXQ7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGV4dGVuZEZpZWxkID0gKGJhc2U6IEtleSwga2V5OiBLZXksIHR5cGU6IEZpZWxkVHlwZSkgPT5cclxuICBmaWVsZFR5cGVzW2tleV0gPSBleHRlbmQodHlwZSwgZmllbGRUeXBlc1tiYXNlXSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVHlwZSA9IDxUIGV4dGVuZHMgRmllbGRPcHRzPihrZXk6IEtleSwgdHlwZTogRmllbGRUeXBlPFQ+KSA9PlxyXG4gIGZpZWxkVHlwZXNba2V5XSA9IGV4dGVuZCh0eXBlLCBkZWZGVCk7XHJcbmNvbnN0IGRlZkZUOiBQYXJ0aWFsPEZpZWxkVHlwZT4gPSB7XHJcbiAgc29ydDogdHJ1ZSxcclxuICBibG9jazogZmFsc2UsXHJcbiAgcXVlcnk6IHRydWUsXHJcbiAgYWxpZ246IEhBbGlnbi5sZWZ0LFxyXG4gIG91dHB1dDogKHZhbCwgeyBwIH0pID0+IGlzVih2YWwpID8gdmFsIDogcC5udWxsKCksXHJcbiAgc2l6ZTogKCkgPT4gNTBcclxufVxyXG4vKipjaGVja2JveCBmb3JtYXQgKi9cclxuZXhwb3J0IGNvbnN0IGNiRm9ybWF0czogRGljPCh2YWx1ZTogYm9vbCkgPT4gYW55PiA9IHt9XHJcbmV4cG9ydCBjb25zdCBhZGRjYkZtdHMgPSAoKSA9PiBleChjYkZvcm1hdHMsIHtcclxuICBpY29uOiAodmFsdWUpID0+XHJcbiAgICBpY29uKGlzVih2YWx1ZSkgP1xyXG4gICAgICB2YWx1ZSA/XHJcbiAgICAgICAgeyBjOiBDb2xvci5hY2NlcHQsIGQ6IFwiY2hlY2tcIiB9IDpcclxuICAgICAgICB7IGM6IENvbG9yLmVycm9yLCBkOiBcImNsb3NlXCIgfSA6XHJcbiAgICAgICQubnVsbEljb24oKSksXHJcbiAgLyoqeWVzIHwgbm8gKi9cclxuICB5bjogKHZhbHVlKSA9PiBpc1YodmFsdWUpID8gdmFsdWUgPyAkLncueWVzIDogJC53Lm5vIDogXCJcIixcclxuICAvKip0cnVlIHwgZmFsc2UgKi9cclxuICB0ZjogKHZhbHVlKSA9PiBpc1YodmFsdWUpID8gdmFsdWUgPyAkLncudHJ1ZSA6ICQudy5mYWxzZSA6IFwiXCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VUeXBlcygpIHtcclxuICBhZGRUeXBlKEZULnRleHQsIHtcclxuICAgIGlucHV0OiAoeyBrZXksIHJlcSB9KSA9PiB0ZXh0SW4oa2V5LCByZXEpXHJcbiAgfSk7XHJcblxyXG4gIGFkZFR5cGU8Rm10RmllbGRPcHRzPihGVC5udW1iZXIsIHtcclxuICAgIG91dHB1dDogKHZhbCwgeyBwIH0sIHsgbyB9KSA9PiBpc1YodmFsKSA/IHNjYWxhcih2YWwpLmZtdChwLm51bWJlckZtdCB8fCBvLmZtdCkgOiBwLm51bGwoKSxcclxuICAgIGlucHV0OiAoeyBrZXksIHJlcSwgbyB9KSA9PiBudW1iZXJJbihrZXksIHJlcSlcclxuICB9KTtcclxuICBhZGRUeXBlPEZtdEZpZWxkT3B0cyAmIHsgaW5wdXQ6IERhdGVJbnB1dFR5cGUgfT4oRlQuZGF0ZSwge1xyXG4gICAgb3V0cHV0OiAodmFsLCB7IHAgfSwgeyBvIH0pID0+IGlzVih2YWwpID8gdGltZSh2YWwpLmZtdChwLmRhdGVGbXQgfHwgby5mbXQpIDogcC5udWxsKCksXHJcbiAgICBpbnB1dDogKHsga2V5LCByZXEsIG8gfSkgPT4gZGF0ZUluKGtleSwgby5pbnB1dCwgcmVxKVxyXG4gIH0pO1xyXG4gIGFkZFR5cGU8Rm10RmllbGRPcHRzPihGVC50aW1lLCB7XHJcbiAgICBvdXRwdXQ6ICh2YWwsIHsgcCB9LCB7IG8gfSkgPT4gaXNWKHZhbCkgPyB0aW1lKHZhbCkuZm10KHAudGltZUZtdCB8fCBvLmZtdCkgOiBwLm51bGwoKSxcclxuICAgIGlucHV0OiAoeyBrZXksIHJlcSB9KSA9PiB0aW1lSW4oa2V5LCByZXEpXHJcbiAgfSk7XHJcbiAgYWRkVHlwZTxGbXRGaWVsZE9wdHM+KEZULmNoZWNrYm94LCB7XHJcbiAgICBvdXRwdXQ6ICh2YWwsIHsgcCB9LCB7IG8gfSkgPT4gY2JGb3JtYXRzW3AuY2hlY2tib3hGbXQgfHwgby5mbXRdKHZhbCksXHJcbiAgICBpbnB1dDogKHsga2V5LCByZXEgfSkgPT4gY2hlY2tib3hJbihrZXksIHJlcSlcclxuICB9KTtcclxuXHJcbiAgYWRkVHlwZTxSYWRpb09wdHM+KEZULnJhZGlvLCB7XHJcbiAgICBvdXRwdXQ6ICh2YWw6IEtleSwgeyBwIH0sIHsgbyB9KSA9PiBpc1YodmFsKSA/IGV0dCQuZW51bVZpZXcoby5lbnVtLCB2YWwpIDogcC5udWxsKCksXHJcbiAgICBpbnB1dDogKHsga2V5LCByZXEsIG8gfSkgPT4gcmFkaW9JbihrZXksIGV0dCQuZW51bShvLmVudW0pLCByZXEpXHJcbiAgfSk7XHJcbiAgYWRkVHlwZTxGaWVsZE9wdHMgJiB7IGV4cD86IHN0cjsgZm10Pzogc3RyIH0+KEZULnZpcnR1YWwsIHtcclxuICAgIG91dHB1dChfLCB7IHAsIHJlYyB9LCB7IG8gfSkge1xyXG4gICAgICBsZXQgdCA9IGNhbGMoby5leHAsIHsgdmFyczogcmVjIH0pO1xyXG4gICAgICByZXR1cm4gaXNWKHQpID9cclxuICAgICAgICBvLmZtdCA/XHJcbiAgICAgICAgICBmbXQodCwgby5mbXQpIDpcclxuICAgICAgICAgIHQgOlxyXG4gICAgICAgIHAubnVsbDtcclxuICAgIH1cclxuICB9KTtcclxuICBhZGRUeXBlPFNlbGVjdE9wdHM+KEZULnNlbGVjdCwge1xyXG4gICAgaW5wdXQ6ICh7IGtleSwgcmVxLCBvIH0pID0+IG5ldyBTZWxlY3RJbnB1dCh7IGtleSwgcmVxLCBsaW5rOiBvLmxpbmsgfSksXHJcbiAgICBvdXRwdXQodmFsLCB7IHAgfSwgeyBvIH0pIHtcclxuICAgICAgaWYgKCFpc1YodmFsKSkgcmV0dXJuIHAubnVsbCgpO1xyXG4gICAgICBzd2l0Y2ggKGV0dCQubGlua1RwKSB7XHJcbiAgICAgICAgY2FzZSBMaW5rVHlwZS5wcm9jZXNzZWQ6XHJcbiAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgIGNhc2UgTGlua1R5cGUucmF3OlxyXG4gICAgICAgICAgcmV0dXJuIHdhaXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZSA9IGF3YWl0IGdldChvLmxpbmspO1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZS5zZWxlY3Qoe1xyXG4gICAgICAgICAgICAgIHRwOiBHVC5vbmUsXHJcbiAgICAgICAgICAgICAgd2hlcmU6IHsgW2V0dCQuaWQoZSldOiB2YWwgfSxcclxuICAgICAgICAgICAgICBmaWVsZHM6IFtlLm1haW5GaWVsZF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBjYXNlIExpbmtUeXBlLnN1YjpcclxuICAgICAgICAgIHJldHVybiB3YWl0KGFzeW5jICgpID0+IHZhbFsoYXdhaXQgZ2V0KG8ubGluaykpLm1haW5GaWVsZF0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgYWRkVHlwZTxTZWxlY3RPcHRzPihGVC5tdWx0c2VsZWN0LCB7XHJcbiAgICBpbnB1dDogKHsga2V5LCByZXEsIG8gfSkgPT4gbmV3IE11bHRzZWxlY3RJbnB1dCh7IGtleSwgcmVxLCBsaW5rOiBvLmxpbmsgfSksXHJcbiAgICBvdXRwdXQodmFsLCB7IHAgfSwgeyBvIH0pIHtcclxuICAgICAgaWYgKCFpc1YodmFsKSkgcmV0dXJuIHAubnVsbCgpO1xyXG4gICAgICBzd2l0Y2ggKGV0dCQubGlua1RwKSB7XHJcbiAgICAgICAgY2FzZSBMaW5rVHlwZS5wcm9jZXNzZWQ6XHJcbiAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgIGNhc2UgTGlua1R5cGUucmF3OlxyXG4gICAgICAgICAgcmV0dXJuIHdhaXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZSA9IGF3YWl0IGdldChvLmxpbmspO1xyXG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IGUuc2VsZWN0KHtcclxuICAgICAgICAgICAgICB0cDogR1QuY29sLFxyXG4gICAgICAgICAgICAgIHdoZXJlOiBgaW4oJHtbZXR0JC5pZChlKV19LCR7dmFsfSlgLFxyXG4gICAgICAgICAgICAgIGZpZWxkczogW2UubWFpbkZpZWxkXVxyXG4gICAgICAgICAgICB9KSkuam9pbignOyAnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgTGlua1R5cGUuc3ViOlxyXG4gICAgICAgICAgcmV0dXJuIHdhaXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbSA9IChhd2FpdCBnZXQoby5saW5rKSkubWFpbkZpZWxkO1xyXG4gICAgICAgICAgICByZXR1cm4gKDxhbnlbXT52YWwpLm1hcCh2ID0+IHZbbV0pLmpvaW4oJzsgJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcbiAgJC5zZWxlY3RJbnB1dCA9ICh7IHBoLCBsaW5rIH06IElTZWxlY3RJbnB1dCkgPT4gbGlua2VkU2VsZWN0KGxpbmssIHsgcGggfSlcclxuICAkLm1zZWxlY3RJbnB1dCA9ICh7IHBoLCBsaW5rIH06IElNdWx0c2VsZWN0SW5wdXQpID0+IGxpbmtlZE1TZWxlY3QobGluaywgeyBwaCB9KVxyXG59XHJcbnR5cGUgU2VsZWN0T3B0cyA9IEZpZWxkT3B0cyAmIHsgbGluazogc3RyIHwgSUJvbmQgfTtcclxudHlwZSBSYWRpb09wdHMgPSBGaWVsZE9wdHMgJiB7IGVudW0/OiBzdHI7IH07XHJcbmV4cG9ydCBjb25zdCB0ZXh0ID0gKGtleTogc3RyLCBvcHRzOiBGaWVsZE9wdHMgPSB7fSkgPT5cclxuICBuZXcgRmllbGQoa2V5LCBGVC50ZXh0LCBvcHRzKTtcclxuZXhwb3J0IGNvbnN0IHJhZGlvID0gKGtleTogc3RyLCBsaXN0OiBzdHIsIG9wdHM/OiBGaWVsZE9wdHMpID0+XHJcbiAgbmV3IEZpZWxkPFJhZGlvT3B0cz4oa2V5LCBGVC5yYWRpbywgT2JqZWN0LmFzc2lnbih7fSwgeyBlbnVtOiBsaXN0IH0sIG9wdHMpKTtcclxuZXhwb3J0IGNvbnN0IG51bWJlciA9IChrZXk6IHN0ciwgb3B0czogRmllbGRPcHRzID0ge30pID0+XHJcbiAgbmV3IEZpZWxkKGtleSwgRlQubnVtYmVyLCBvcHRzKTtcclxuZXhwb3J0IGNvbnN0IHNlbGVjdCA9IChrZXk6IHN0ciwgbGluazogc3RyIHwgSUJvbmQsIG9wdHM/OiBGaWVsZE9wdHMpID0+XHJcbiAgbmV3IEZpZWxkPFNlbGVjdE9wdHM+KGtleSwgRlQuc2VsZWN0LCBPYmplY3QuYXNzaWduKHt9LCBvcHRzLCB7IGxpbmsgfSkpOyIsImltcG9ydCB7IGJpbmQsIEJvbmQsIEdULCBJU2VsZWN0LCBSZWMgfSBmcm9tIFwiZW50aXR5XCI7XHJcbmltcG9ydCB7IGcsIGRpdiwgUyB9IGZyb20gXCJnYWxob1wiO1xyXG5pbXBvcnQgeyBjbG9zZSB9IGZyb20gXCJnYWxodWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IEMsJCB9IGZyb20gXCJnYWxodWkvY29yZVwiO1xyXG5pbXBvcnQgU2VsZWN0LCB7IE11bHRzZWxlY3QsIFNlbGVjdEJhc2UgfSBmcm9tIFwiZ2FsaHVpL3NlbGVjdFwiO1xyXG5pbXBvcnQgeyBtZW51YmFyIH0gZnJvbSBcImdhbGh1aS9tZW51XCI7XHJcbmltcG9ydCBQYWdnaW5nIGZyb20gXCIuL1BhZ2dpbmdcIjtcclxuaW1wb3J0IHsgY2FyZCwgbWRQb3N0LCBzZWFyY2ggfSBmcm9tIFwiLi90b29sc1wiO1xyXG5pbXBvcnQgaWNvbiwgeyBJY29uIH0gZnJvbSBcIi4uL2dhbGh1aS9pY29uXCI7XHJcbmltcG9ydCB7IGxhYmVsIH0gZnJvbSBcIi4uL2dhbGh1aS9vdXRwdXRcIjtcclxuaW1wb3J0IHdhaXQgZnJvbSBcIi4uL2dhbGh1aS93YWl0XCI7XHJcbmltcG9ydCB7IEwgfSBmcm9tIFwiLi4vb3JyYXkvb3JyYXlcIjtcclxuXHJcbmludGVyZmFjZSBCU2VsZWN0T3B0cyB7XHJcbiAgcGg/OiBzdHJpbmc7XHJcbn1cclxuZnVuY3Rpb24gbWVudShzZWxlY3Q6IFNlbGVjdEJhc2U8YW55LGFueSxhbnk+LCBtZW51OiBTLCBiaW5kOiBCb25kKSB7XHJcbiAgbGV0XHJcbiAgICBlbnQgPSBiaW5kLnRhcmdldCxcclxuICAgIHBhZyA9IG5ldyBQYWdnaW5nKHsgcGFnOiBiaW5kLnBhZywgaGlkZU9uU2luZ2xlOiB0cnVlIH0pLm9uKCgpID0+IHtcclxuICAgICAgYmluZC5wYWcgPSBwYWcubW9kZWwucGFnO1xyXG4gICAgICBiaW5kLmxpbWl0ID0gcGFnLm1vZGVsLmxpbWl0O1xyXG4gICAgfSksXHJcbiAgICBpbnB1dCA9IGcoJ2lucHV0Jywge1xyXG4gICAgICB0eXBlOiAnc2VhcmNoJyxcclxuICAgICAgcGxhY2Vob2xkZXI6ICQudy5zZWFyY2hcclxuICAgIH0pLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHsgYmluZC5xdWVyeSA9IHRoaXMudmFsdWU7IH0pO1xyXG5cclxuICBzZWxlY3Qub3B0aW9ucy5vbigndXBkYXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGFnLnNldCh7XHJcbiAgICAgIHRvdGFsOiBiaW5kLmxlbmd0aCxcclxuICAgICAgbGltaXQ6IGJpbmQubGltaXQsXHJcbiAgICAgIHBhZzogYmluZC5wYWdcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHNlbGVjdC5vbigoZSkgPT4ge1xyXG4gICAgaWYgKCdvcGVuJyBpbiBlKVxyXG4gICAgICBpZiAoZS5vcGVuKVxyXG4gICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICAgIGVsc2UgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT0gZG9jdW1lbnQuYm9keSlcclxuICAgICAgICBzZWxlY3QuZm9jdXMoKTtcclxuICB9KTtcclxuXHJcbiAgbWVudS5hZGQoW1xyXG4gICAgbWVudWJhcihcclxuICAgICAgc2VhcmNoKGJpbmQpLFxyXG4gICAgICBtZW51YmFyLnJpZ2h0KCksXHJcbiAgICAgIC8ve1xyXG4gICAgICAvLyAgaWNvbjogJ2xhdW5jaCcsXHJcbiAgICAgIC8vICBjbDogQy5pdGVtQSxcclxuICAgICAgLy8gIGFjdGlvbigpIHtcclxuICAgICAgLy8gICAgcm91dGUuZ29UbygnZS8nICsgZW50LmtleSwgeyBwOiAnbW9kYWwnIH0pO1xyXG4gICAgICAvLyAgfVxyXG4gICAgICAvL31cclxuICAgICkub24oJ2NsaWNrJywgKGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfSksXHJcbiAgICBtZW51YmFyLnNlcCgpLFxyXG4gICAgc2VsZWN0Lm1vZGVsLm1lbnVJdGVtcy5jc3MoJ2ZsZXgnLCAnMSAxJyksXHJcbiAgICAvL2VudC5jYW5JbnNlcnQgJiYge1xyXG4gICAgLy8gIGljb246ICdwbHVzJyxcclxuICAgIC8vICB0ZXh0OiAnQWRpY2lvbmFyJyxcclxuICAgIC8vICBhY3Rpb24oKSB7XHJcbiAgICAvLyAgICBtZFBvc3QoZW50KTtcclxuICAgIC8vICAgIC8vcm91dGUuZ29UbygnZi8nICsgZW50LmtleSlcclxuICAgIC8vICAgIC8vICAudGhlbigocmVzdWx0OiBlbnRpdHkuRW50aXR5QWRkUmVzdWx0W10pID0+IHtcclxuICAgIC8vICAgIC8vICAgIHNlbGVjdC5zZXRWYWx1ZS5hcHBseShzZWxlY3QsIHJlc3VsdC5tYXAoaSA9PiBpLmlkKSk7XHJcbiAgICAvLyAgICAvLyAgfSk7XHJcbiAgICAvLyAgfVxyXG4gICAgLy99LFxyXG4gICAgcGFnICYmIGcocGFnKS5vbignY2xpY2snLCAoZSkgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9KVxyXG4gIF0pLmNzcyh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xyXG4gIH0pXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtlZFNlbGVjdChwYXRoOiBzdHJpbmcgfCBJU2VsZWN0LCBvcHRzOiBCU2VsZWN0T3B0cyA9IHt9LyosIGNhbGxiYWNrPzogKCkgPT4gdm9pZCovKSB7XHJcbiAgbGV0XHJcbiAgICBtbiA9IGcoJ2RpdicpLFxyXG4gICAgbWVudUl0ZW1zID0gZGl2KFtDLm1lbnVdKSxcclxuICAgIGNsZWFyQnQgPSBjbG9zZShlID0+IHtcclxuICAgICAgZS5vZmYoKTtcclxuICAgICAgaW5wdXQuc2V0VmFsdWUobnVsbCk7XHJcbiAgICB9KSxcclxuICAgIGlucHV0ID0gbmV3IFNlbGVjdDxSZWMsIG51bWJlcj4oe1xyXG4gICAgICBrZXk6ICdpZCcsXHJcbiAgICAgIG1lbnU6bW4sIG1lbnVJdGVtcyxcclxuICAgICAgc2V0TWVudSgpIHsgfSxcclxuICAgICAgbGFiZWxSZW5kZXIoKSB7IH0sXHJcbiAgICAgIGZsdWlkOiB0cnVlLFxyXG4gICAgICBlbXB0eTogKGxhYmVsKSA9PiBsYWJlbC5zZXQoZGl2KFtDLnBsYWNlaG9sZGVyXSwgb3B0cy5waCkpXHJcbiAgICB9KTtcclxuICBiaW5kKDxzdHI+cGF0aCkudGhlbihib25kID0+IHtcclxuICAgIGxldCBlbnQgPSBib25kLnRhcmdldCwgcmVuZGVyID0gY2FyZChib25kKTtcclxuICAgIG1lbnUoaW5wdXQsIG1uLCBib25kKTtcclxuICAgIGlucHV0LnNldCh7XHJcbiAgICAgIG1lbnVSZW5kZXI6ICh2YWx1ZSkgPT4gcmVuZGVyKHZhbHVlKS5jbHMoW0MuaXRlbV0pLFxyXG4gICAgICBsYWJlbFJlbmRlcjogYXN5bmMgKGtleTogbnVtYmVyLCBsYWJlbDogUykgPT4ge1xyXG4gICAgICAgIGxldFxyXG4gICAgICAgICAgaXRlbSA9IGlucHV0Lm9wdGlvbnMuZ2V0KGtleSk7XHJcblxyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICBsYWJlbC5zZXQoW1xyXG4gICAgICAgICAgICBpY29uKDxJY29uPml0ZW1bZW50Lmljb25GaWVsZF0pLFxyXG4gICAgICAgICAgICA8UHJpbWl0aXZlPml0ZW1bZW50Lm1haW5GaWVsZF0sXHJcbiAgICAgICAgICAgIGNsZWFyQnRcclxuICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgaW5wdXQub3B0aW9ucy5zZXRUYWcoQy5vbiwga2V5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGFiZWwuc2V0KHdhaXQoKSk7XHJcbiAgICAgICAgICBsZXQgaXRlbSA9IDxhbnk+YXdhaXQgZW50LnNlbGVjdCh7XHJcbiAgICAgICAgICAgIHRwOiBHVC5yb3csXHJcbiAgICAgICAgICAgIGZpZWxkczogYm9uZC5maWVsZHMsXHJcbiAgICAgICAgICAgIHdoZXJlOiBbYGlkPSR7a2V5fWBdLFxyXG4gICAgICAgICAgICBxdWVyeTogYm9uZC5xdWVyeSxcclxuICAgICAgICAgICAgcXVlcnlCeTogYm9uZC5xdWVyeUJ5XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBpZiAoIWl0ZW0pXHJcbiAgICAgICAgICAgIHRocm93IFwiaW52YWxpZCBzZWxlY3QgaXRlbVwiO1xyXG4gICAgICAgICAgLy9jaGVjYSBkZW5vdm8gcGFyYSBnYXJhbnRlciBxdWUgZHVyYW50ZSBhIGJ1c2NhIGRlc3RlIGRhZG8gZWxlIGZvaSBwb3Igb3V0cm8gbGFkb1xyXG4gICAgICAgICAgaWYgKCFpbnB1dC5vcHRpb25zLmdldChrZXkpKVxyXG4gICAgICAgICAgICBpbnB1dC5vcHRpb25zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICBpbnB1dC5vcHRpb25zLnNldFRhZyhDLm9uLCBrZXkpO1xyXG5cclxuICAgICAgICAgIGxhYmVsLnNldChbXHJcbiAgICAgICAgICAgIGljb24oPEljb24+aXRlbVtlbnQuaWNvbkZpZWxkXSksXHJcbiAgICAgICAgICAgIDxQcmltaXRpdmU+aXRlbVtlbnQubWFpbkZpZWxkXSxcclxuICAgICAgICAgICAgY2xlYXJCdFxyXG4gICAgICAgICAgXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGJvbmQuYmluZCg8TDxSZWMsIGFueT4+aW5wdXQub3B0aW9ucyk7XHJcbiAgICBib25kLnNlbGVjdE5vdygpO1xyXG4gICAgLy9jYWxsYmFjaz8uKCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGlucHV0O1xyXG59XHJcbmNvbnN0IG11bHRTZWxlY3RUYWc9PEsgZXh0ZW5kcyBLZXk+KGR0LCB2YWx1ZTogSywgaW5wdXQ6IE11bHRzZWxlY3Q8YW55LCBLPikgPT5cclxuICBsYWJlbChbZHQsIGNsb3NlKChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaW5wdXQucmVtb3ZlVmFsdWUodmFsdWUpO1xyXG4gIH0pXSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua2VkTVNlbGVjdChwYXRoOiBzdHJpbmcsIG9wdHM6IEJTZWxlY3RPcHRzLCBjYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcclxuICBsZXRcclxuICAgIG1uID0gZygnZGl2JyksXHJcbiAgICBtZW51SXRlbXMgPSBkaXYoW0MubWVudV0pLFxyXG4gICAgaW5wdXQgPSBuZXcgTXVsdHNlbGVjdDxSZWMsIG51bWJlcj4oe1xyXG4gICAgICBrZXk6ICdpZCcsXHJcbiAgICAgIG1lbnU6bW4sIG1lbnVJdGVtcyxcclxuICAgICAgc2V0TWVudSgpIHsgfSxcclxuICAgICAgZmx1aWQ6IHRydWUsXHJcbiAgICAgIGVtcHR5OiAodiwgbGFiZWwpID0+IHsgbGFiZWwuc2V0KHYgJiYgZGl2KFtDLnBsYWNlaG9sZGVyXSwgb3B0cy5waCkpIH1cclxuICAgIH0pO1xyXG4gIEJvbmQuYmluZChwYXRoKS50aGVuKGJvbmQgPT4ge1xyXG4gICAgbGV0IGVudCA9IGJvbmQudGFyZ2V0LCByZW5kZXIgPSBjYXJkKGJvbmQpO1xyXG4gICAgbWVudShpbnB1dCwgbW4sIGJvbmQpO1xyXG4gICAgaW5wdXQuc2V0KHtcclxuICAgICAgbWVudVJlbmRlcjogKHZhbHVlKSA9PiByZW5kZXIodmFsdWUpLmNscyhbQy5pdGVtXSksXHJcbiAgICAgIGxhYmVsUmVuZGVyOiAoa2V5OiBudW1iZXIsIGluZGV4OiBudW1iZXIsIGxhYmVsOiBTKSA9PiB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBpbnB1dC5vcHRpb25zLmdldChrZXkpO1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICBpbnB1dC5vcHRpb25zLnNldFRhZyhDLm9uLCBrZXkpO1xyXG4gICAgICAgICAgcmV0dXJuIG11bHRTZWxlY3RUYWcoW1xyXG4gICAgICAgICAgICBpY29uKDxJY29uPml0ZW1bZW50Lmljb25dKSxcclxuICAgICAgICAgICAgPFByaW1pdGl2ZT5pdGVtW2VudC5tYWluXVxyXG4gICAgICAgICAgXSwga2V5LCBpbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3YWl0KGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGxldCBpdGVtID0gYXdhaXQgZW50LmdldCh7XHJcbiAgICAgICAgICAgIHRwOiBHVC5yb3csXHJcbiAgICAgICAgICAgIGZpZWxkczogYm9uZC5maWVsZHMsXHJcbiAgICAgICAgICAgIHdoZXJlOiBib25kLndoZXJlVigpLmFkZChgaWQ9JHtrZXl9YCksXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBib25kLnF1ZXJ5LFxyXG4gICAgICAgICAgICBxdWVyeUJ5OiBib25kLnF1ZXJ5QnlcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgdGhyb3cgXCJpbnZhbGlkIHNlbGVjdCBpdGVtXCI7XHJcblxyXG4gICAgICAgICAgLy9jaGVjYSBkZW5vdm8gcGFyYSBnYXJhbnRlciBxdWUgZHVyYW50ZSBhIGJ1c2NhIGRlc3RlIGRhZG8gZWxlIGZvaSBwb3Igb3V0cm8gbGFkb1xyXG4gICAgICAgICAgaWYgKCFpbnB1dC5vcHRpb25zLmdldChrZXkpKVxyXG4gICAgICAgICAgICBpbnB1dC5vcHRpb25zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICBpbnB1dC5vcHRpb25zLnNldFRhZyhDLm9uLCBrZXkpO1xyXG5cclxuICAgICAgICAgIHJldHVybiBtdWx0U2VsZWN0VGFnKFtcclxuICAgICAgICAgICAgaWNvbig8SWNvbj5pdGVtW2VudC5pY29uXSksXHJcbiAgICAgICAgICAgIDxQcmltaXRpdmU+aXRlbVtlbnQubWFpbl1cclxuICAgICAgICAgIF0sIGtleSwgaW5wdXQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY2FsbGJhY2s/LigpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBpbnB1dDtcclxufSIsImltcG9ydCB7IGNzcywgZGl2LCBFLCBnLCBPbmUsIFMsIHdyYXAgfSBmcm9tIFwiZ2FsaG9cIjtcclxuaW1wb3J0IHsgJCwgYm9keSwgYywgQywgZG9jLCBIQWxpZ24sIE9yaSwgdEFsaWduLCB0aGVtZSB9IGZyb20gXCJnYWxodWkvY29yZVwiO1xyXG5pbXBvcnQgeyBpc1AsIHQgfSBmcm9tIFwiaW51dGlsXCI7XHJcbmltcG9ydCB7IEtleSB9IGZyb20gJ3RzLWtleS1lbnVtJztcclxuaW1wb3J0IHsgY3J1ZEhhbmRsZXIsIEZpZWxkUGxhdGZvcm0sIElDcnVkLCBrYkhUcCB9IGZyb20gXCIuL2NvcmVcIjtcclxuaW1wb3J0IHdhaXQgZnJvbSBcImdhbGh1aS93YWl0XCI7XHJcbmltcG9ydCBvLCB7IEFsaWFzLCBMIH0gZnJvbSBcIm9ycmF5XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZTxUIGV4dGVuZHMgRGljPiBleHRlbmRzIElDcnVkPFQ+IHtcclxuICBkYXRhPzogTDxUPjtcclxuICBjb2x1bW5zPzogQWxpYXM8VGFibGVDb2x1bW4+XHJcbiAgZW51bWFyYXRlPzogYm9vbGVhbjtcclxuICBvcHRpb25zPzogVGFibGVPcHRpb248VD5bXTtcclxuXHJcbiAgcmVzaXplPzogYm9vbGVhbjtcclxuICBoZWFkPyhjb2x1bW46IFRhYmxlQ29sdW1uKTtcclxuXHJcbiAgZm9vdD86IGJvb2xlYW47XHJcbiAgZm9vdERhdGE/OiBBbGlhczxUPjtcclxuICBlbXB0eT86ICgpID0+IHZvaWQ7XHJcblxyXG4gIGtleT86IHN0cmluZztcclxuICBzb3J0PzogVGFibGVTb3J0O1xyXG4gIGNvcm5lcj86IGFueTtcclxuICBwPzogRmllbGRQbGF0Zm9ybVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVTaXplKGl0ZW1zOiB7IHNpemU/OiBudW0gfVtdLCBhcHBseT86IGJvb2xlYW4pIHtcclxuICBsZXRcclxuICAgIHNpemUgPSAwLFxyXG4gICAgbCA9IGl0ZW1zLmxlbmd0aCxcclxuICAgIHNpemVzID0gW107XHJcbiAgZm9yIChsZXQgaSBvZiBpdGVtcykge1xyXG4gICAgbGV0IHMgPSBpLnNpemU7XHJcbiAgICBpZiAoKHMgfHwgKHMgPSAwKSkgPiA5NSlcclxuICAgICAgcyA9IDk1O1xyXG4gICAgZWxzZSBpZiAocyA9PT0gMClcclxuICAgICAgcyA9IDEwMCAvIGw7XHJcbiAgICBzaXplcy5wdXNoKHMpO1xyXG4gICAgc2l6ZSArPSBzO1xyXG4gIH1cclxuICBsZXQgcmVzdWx0ID0gc2l6ZXMubWFwKHMgPT4gcyAqIDEwMCAvIHNpemUpO1xyXG4gIGlmIChhcHBseSlcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKVxyXG4gICAgICBpdGVtc1tpXS5zaXplID0gcmVzdWx0W2ldO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZpZWxkT3V0cHV0Q2FsbGVyIHtcclxuICBmbXQ/OiBzdHJpbmc7XHJcbiAgLyoqIFxyXG4gICAqIEBwYXJhbSBwIHBsYXRmb3JtXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHVibGljIGtleTogc3RyaW5nLCBwdWJsaWMgaXRlbTogRGljLCBwdWJsaWMgcDogRmllbGRQbGF0Zm9ybSkgeyB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHsgcmV0dXJuIHRoaXMuaXRlbVt0aGlzLmtleV07IH1cclxuICBnZXQgbnVsbCgpIHsgcmV0dXJuIHRoaXMucC5udWxsOyB9XHJcbiAgZ2V0IGh0bWwoKSB7IHJldHVybiB0aGlzLnAuaHRtbDsgfVxyXG4gIGdldCBmb3JtYXQoKSB7IHJldHVybiB0aGlzLnAuZm9ybWF0OyB9XHJcbiAgZ2V0IGludGVyYWN0aXZlKCkgeyByZXR1cm4gdGhpcy5wLmludGVyYWN0aXZlOyB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGVudW0gVGFibGVTb3J0IHtcclxuICBub25lLFxyXG4gIHNpbmdsZSxcclxuICBtdWx0aXBsZVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBUYWJsZU9wdGlvbjxUPiA9IFRhYmxlT3B0aW9uT2JqPFQ+IHwgKChpdGVtOiBULCBpbmRleDogbnVtYmVyKSA9PiBPbmUpO1xyXG5cclxuZXhwb3J0IHR5cGUgVmFsdWVUeXBlID0gJ3MnIHwgJ2QnIHwgJ2InIHwgJ24nO1xyXG4vL2V4cG9ydCB0eXBlIFRBbGlnbiA9IFwiY2VudGVyXCIgfCBcImp1c3RpZnlcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJzdGFydFwiIHwgXCJlbmRcIjtcclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZUNvbHVtbiB7XHJcbiAga2V5OiBzdHI7XHJcbiAgc2l6ZT86IGludDtcclxuICBhbGlnbj86IEhBbGlnbjtcclxuICB0ZXh0PzogYW55LFxyXG4gIHRwPzogVmFsdWVUeXBlO1xyXG4gIGZtdD86IC8qc3RyaW5nIHwgKi8oKGNhbGxlcjogRmllbGRPdXRwdXRDYWxsZXIpID0+IGFueSk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZU9wdGlvbk9iajxUPiB7XHJcbiAgaGVhZD86IGFueSxcclxuICBpdGVtKGl0ZW06IFQsIGluZGV4OiBudW1iZXIpOiBPbmUsXHJcbiAgZm9vdD8oaXRlbTogVCwgaW5kZXg6IG51bWJlcik6IE9uZVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlPFQgZXh0ZW5kcyBEaWM+IGV4dGVuZHMgRTxJVGFibGU8VD4sIHsgcmVzaXplQ29sOiBuZXZlciB9PntcclxuXHJcbiAgZ2V0IGRhdGEoKSB7IHJldHVybiB0aGlzLmkuZGF0YSBhcyBMPFQ+OyB9XHJcbiAgZ2V0IGZvb3REYXRhKCkgeyByZXR1cm4gdGhpcy5pLmZvb3REYXRhIGFzIEw8VD47IH1cclxuICBnZXQgY29sdW1ucygpIHsgcmV0dXJuIHRoaXMuaS5jb2x1bW5zOyB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGk6IElUYWJsZTxUPiwgZGF0YT86IFRbXSkge1xyXG4gICAgaWYgKCFpLmRhdGEpIGkuZGF0YSA9IGRhdGEgYXMgTDtcclxuICAgIHN1cGVyKGkpO1xyXG4gICAgaS5kYXRhID0gbyhpLmRhdGEsIHtcclxuICAgICAgZzogaS5zaW5nbGUgPyBudWxsIDogW0Mub25dLFxyXG4gICAgICBrZXk6IGkua2V5LFxyXG4gICAgICBjbGVhcjogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBpZiAoaS5mb290KVxyXG4gICAgICBpLmZvb3REYXRhID0gbzxUPihpLmZvb3REYXRhLCB7XHJcbiAgICAgICAga2V5OiBpLmtleSxcclxuICAgICAgICBjbGVhcjogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIGkuY29sdW1ucyA9IG88VGFibGVDb2x1bW4+KGkuY29sdW1ucykub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZGVmaW5lU2l6ZSh0aGlzLCB0cnVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghaS5oZWFkKVxyXG4gICAgICBpLmhlYWQgPSAoYykgPT4gYy50ZXh0O1xyXG4gIH1cclxuXHJcbiAgYm9keTogUztcclxuICBmb290OiBTO1xyXG5cclxuICB2aWV3KCkge1xyXG4gICAgbGV0XHJcbiAgICAgIG1kID0gdGhpcy5pLFxyXG4gICAgICBjb2xzID0gbWQuY29sdW1ucyxcclxuICAgICAgb3B0cyA9IG1kLm9wdGlvbnMgJiYgbWQub3B0aW9ucy5maWx0ZXIobyA9PiBvKSxcclxuICAgICAgZGF0YSA9IG1kLmRhdGEgYXMgTDxUPixcclxuICAgICAgc2lkZSA9IHRoZW1lLnN6Lm4gKiAzLFxyXG4gICAgICBpbnNlcnQgPSAodmFsdWU6IFQsIGk6IG51bWJlciwgZT86IGJvb2xlYW4sIGZvb3Q/OiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgbGV0IHI6IFM7XHJcbiAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGxldCBsID0gY29scy5sLCB0ID0gQXJyYXk8YW55PihsKTtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjID0gY29sc1tpXSwgdiA9IHZhbHVlW2Mua2V5XTtcclxuICAgICAgICAgICAgaWYgKGMuZm10KVxyXG4gICAgICAgICAgICAgIC8vaWYgKGlzUyhjLmZtdCkpIHYgPSBmbXQodiwgYy5mbXQpO1xyXG4gICAgICAgICAgICAgIC8vZWxzZVxyXG4gICAgICAgICAgICAgIGlmIChpc1AodiA9IGMuZm10KG5ldyBGaWVsZE91dHB1dENhbGxlcihjLmtleSwgdmFsdWUsIG1kLnApKSkpXHJcbiAgICAgICAgICAgICAgICB2ID0gYXdhaXQgdjtcclxuXHJcbiAgICAgICAgICAgIHRbaV0gPSB3cmFwKHYsIEMuaXRlbSkuY3NzKHsgJ3RleHRBbGlnbic6IHRBbGlnbihjLmFsaWduKSwgd2lkdGg6IGMuc2l6ZSArICdweCcgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgdDIgPSBkaXYoQy5pdGVtLCBbXHJcbiAgICAgICAgICAgIGRpdihDLml0ZW0sIGUgPyBpICsgMSA6ICcgJykuY3NzKFwid2lkdGhcIiwgc2lkZSArIFwicHhcIiksIHQsXHJcbiAgICAgICAgICAgIG9wdHMgJiYgb3B0cy5tYXAoKG9wdCkgPT4gKCFmb290IHx8IChvcHQgYXMgVGFibGVPcHRpb25PYmo8VD4pLmZvb3QpICYmIHdyYXAoKGZvb3QgPyAob3B0IGFzIFRhYmxlT3B0aW9uT2JqPFQ+KS5mb290IDogKG9wdCBhcyBUYWJsZU9wdGlvbk9iajxUPikuaXRlbSkodmFsdWUsIGkpLCAndGQnKS5vbignZGJsY2xpY2snLCAoZSkgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9KSlcclxuICAgICAgICAgIF0pLmQodmFsdWUpO1xyXG4gICAgICAgICAgciA/IHIucmVwbGFjZSh0MikgOiByID0gdDI7XHJcbiAgICAgICAgfSkoKTtcclxuICAgICAgICByZXR1cm4gciB8fD0gd2FpdCgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgIHJldHVybiBkaXYoW0MudGFibGUsIE9yaS52XSwgW1xyXG4gICAgICBjb2xzLmJpbmQoZGl2KFtDLmhlYWRdLCBbXHJcbiAgICAgICAgd3JhcChtZC5jb3JuZXIpLmNzcyhcIndpZHRoXCIsIHNpZGUgKyBcInB4XCIpLFxyXG4gICAgICAgIG9wdHMgJiYgb3B0cy5tYXAoKG9wdCkgPT4gZGl2KG51bGwsIChvcHQgYXMgVGFibGVPcHRpb25PYmo8VD4pLmhlYWQpKVxyXG4gICAgICBdKSwge1xyXG4gICAgICAgIGluc2VydDogKGMsIGksIHApID0+IHtcclxuICAgICAgICAgIGxldCBzID0gZGl2KEMuaXRlbSwgbWQuaGVhZChjKSkuY3NzKHsgJ3RleHRBbGlnbic6IHRBbGlnbihjLmFsaWduKSwgd2lkdGg6IGMuc2l6ZSArICdweCcgfSk7XHJcbiAgICAgICAgICBpZiAobWQucmVzaXplKVxyXG4gICAgICAgICAgICBkaXYoW0MuYV0pLm9uKCdtb3VzZWRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IGNvbHMuaW5kZXhPZihjKSxcclxuICAgICAgICAgICAgICAgIC8vdCA9ICcuJyArIEMuaXRlbSArICc6bnRoLWNoaWxkKCcgKyAoaW5kZXggKyAyKSArICcpJyxcclxuICAgICAgICAgICAgICAgIHJvd3MgPSB0aGlzLmJvZHkuY2hpbGRzKCkuY2hpbGQoaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICB0aGlzLmZvb3QgJiYgcm93cy5wdXNoKC4uLnRoaXMuZm9vdC5jaGlsZHMoKS5jaGlsZChpbmRleCkpO1xyXG5cclxuICAgICAgICAgICAgICByb3dzLnB1c2gocyk7XHJcbiAgICAgICAgICAgICAgYm9keS5jc3MoeyBjdXJzb3I6ICdjb2wtcmVzaXplJywgdXNlclNlbGVjdDogXCJub25lXCIgfSk7XHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24gbW92ZShlKSB7XHJcbiAgICAgICAgICAgICAgICBjLnNpemUgPSAoYy5zaXplID0gTWF0aC5tYXgodGhlbWUuc3oubiAqIDMsIGUuY2xpZW50WCAtIHMucmVjdCgpLmxlZnQpKTtcclxuICAgICAgICAgICAgICAgIHJvd3MuY3NzKHsgd2lkdGg6IGMuc2l6ZSArICdweCcgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGRvY1xyXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZW1vdmUnLCBtb3ZlKVxyXG4gICAgICAgICAgICAgICAgLm9uZSgnbW91c2V1cCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZG9jLm9mZignbW91c2Vtb3ZlJywgbW92ZSk7XHJcbiAgICAgICAgICAgICAgICAgIGJvZHkudW5jc3MoW1wiY3Vyc29yXCIsIFwidXNlclNlbGVjdFwiXSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICBwLnBsYWNlKGkgKyAxLCBzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZShfLCBpLCBwKSB7XHJcbiAgICAgICAgICBwLnVucGxhY2UoaSArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICAgIHRoaXMuYm9keSA9IGRhdGEuYmluZChjcnVkSGFuZGxlcihkaXYoQy5ib2R5KSwgZGF0YSwgbWQpLCB7XHJcbiAgICAgICAgaW5zZXJ0KHZhbHVlLCBpbmRleCkge1xyXG4gICAgICAgICAgcmV0dXJuIGluc2VydCh2YWx1ZSwgaW5kZXgsIHQobWQuZW51bWFyYXRlKSkuY2xzKFtDLml0ZW1dKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRhZyhzLCBhY3RpdmUpIHtcclxuICAgICAgICAgIHMuY2xzKEMub24sIGFjdGl2ZSkuZS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgIGJsb2NrOiBcIm5lYXJlc3RcIixcclxuICAgICAgICAgICAgaW5saW5lOiBcIm5lYXJlc3RcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBncm91cHM6IHtcclxuICAgICAgICAgIFtDLm9uXShzLCBhY3RpdmUsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHMuY2xzKEMuc2VsZWN0ZWQsIGFjdGl2ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgdGhpcy5mb290ID0gbWQuZm9vdCAmJiBtZC5mb290RGF0YS5iaW5kKGcoJ3Rmb290JyksIHtcclxuICAgICAgICBpbnNlcnQodmFsdWUsIGluZGV4KSB7XHJcbiAgICAgICAgICByZXR1cm4gaW5zZXJ0KHZhbHVlLCBpbmRleCwgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIF0pLm9uKCdrZXlkb3duJywgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgc3dpdGNoIChlLmtleSkge1xyXG4gICAgICAgIGNhc2UgS2V5LkFycm93VXA6XHJcbiAgICAgICAgICBrYkhUcChkYXRhLCAtMSwgZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEtleS5BcnJvd0Rvd246XHJcbiAgICAgICAgICBrYkhUcChkYXRhLCAxLCBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yRGF0YShwOiBTKSB7XHJcbiAgICBsZXRcclxuICAgICAgY29scyA9IHRoaXMuaS5jb2x1bW5zLFxyXG4gICAgICByID0gQXJyYXk8RGljPHN0cmluZz4+KGNvbHMubGVuZ3RoKTtcclxuXHJcbiAgICBwLmNoaWxkcygpLmVhY2goKHMsIGkpID0+IHtcclxuICAgICAgbGV0IHQgPSByW2ldID0ge30sIGNlbGxzID0gcy5jaGlsZHMoKTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2xzLmxlbmd0aDsgaisrKVxyXG4gICAgICAgIHRbY29sc1tqXS5rZXldID0gZyhjZWxsc1tqICsgMV0pLnRleHQoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHI7XHJcbiAgfVxyXG4gIHJlbmRlcmVkRGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9yRGF0YSh0aGlzLmJvZHkpO1xyXG4gIH1cclxuICByZW5kZXJlZEZvb3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fckRhdGEodGhpcy5mb290KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZSgpOiBjc3MuU3R5bGVzIHtcclxuICBsZXQgeyBtLCB0YiB9ID0gdGhlbWU7XHJcbiAgcmV0dXJuIHtcclxuICAgIFtjKEMudGFibGUpXToge1xyXG5cclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyAkIGFzIGV0dCQsIEFjdGlvbiwgQm9uZCwgRGF0YVR5cGUsIEVudGl0eSwgZnR5cGUsIEdULCBJRW50aXR5IGFzIElFbnRpdHlCYXNlLCBJRmllbGQsIElXaGVyZSwgUmVjIH0gZnJvbSBcImVudGl0eVwiO1xyXG5pbXBvcnQgeyBGb3JtLCBGb3JtQmFzZSwgSUlucHV0IH0gZnJvbSBcImZvcm1cIjtcclxuaW1wb3J0IHsgZGl2LCBnLCBTLCB3cmFwLGNzcyB9IGZyb20gXCJnYWxob1wiO1xyXG5pbXBvcnQgeyBjYW5jZWwsIGNsb3NlLCBpYnV0dG9uIH0gZnJvbSBcImdhbGh1aS9idXR0b25cIjtcclxuaW1wb3J0IHsgJCwgYywgQywgQ29sb3IsIHRoZW1lIH0gZnJvbSBcImdhbGh1aS9jb3JlXCI7XHJcbmltcG9ydCBkcm9wZG93biBmcm9tIFwiZ2FsaHVpL2Ryb3Bkb3duXCI7XHJcbmltcG9ydCBpY29uLCB7IEljb24gfSBmcm9tIFwiZ2FsaHVpL2ljb25cIjtcclxuaW1wb3J0IHsgSXRlbXMsIG1lbnUgfSBmcm9tIFwiZ2FsaHVpL21lbnVcIjtcclxuaW1wb3J0IG1vZGFsLCB7IG9rQ2FuY2VsIH0gZnJvbSBcImdhbGh1aS9tb2RhbFwiO1xyXG5pbXBvcnQgeyBrZXlWYWwsIGxhYmVsLCBvdXRwdXQgfSBmcm9tIFwiZ2FsaHVpL291dHB1dFwiO1xyXG5pbXBvcnQgU2VsZWN0LCB7IG9wZW5TZWxlY3QgfSBmcm9tIFwiZ2FsaHVpL3NlbGVjdFwiO1xyXG5pbXBvcnQgd2FpdCBmcm9tIFwiZ2FsaHVpL3dhaXRcIjtcclxuaW1wb3J0IHsgY2FsbCwgY29weSwgZWFjaCwgaXNCLCBpc0YsIGlzUywgaXNWLCBzdWIgfSBmcm9tIFwiaW51dGlsXCI7XHJcbmltcG9ydCBjYWxjLCB7IEV4cHJlc3Npb24sIFZhbCB9IGZyb20gXCJqY2FsY1wiO1xyXG5pbXBvcnQgbyBmcm9tIFwib3JyYXlcIjtcclxuaW1wb3J0IGZtdCBmcm9tIFwiZm9ybWF0XCI7XHJcbmltcG9ydCB7IGFkZEFsbCBhcyBzZWxlY3RBbGwsIGNsZWFyIGFzIHNlbGVjdE5vbmUsIGxpc3QgYXMgc2VsZWN0ZWQsIG9uY2hhbmdlIGFzIG9uU2VsZWN0Q2hhbmdlIH0gZnJvbSBcIm9ycmF5L3NlbGVjdG9yXCI7XHJcbmltcG9ydCB7IENDLCBkZWZGaWVsZFJlbmRlcmVyLCBGaWVsZFBsYXRmb3JtIH0gZnJvbSBcIi4vY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZCwgRmllbGRUeXBlLCBPdXRwdXRDdHggfSBmcm9tIFwiLi9maWVsZHNcIjtcclxuaW1wb3J0IFBhZ2dpbmcgZnJvbSBcIi4vUGFnZ2luZ1wiO1xyXG5pbXBvcnQgVGFibGUsIHsgVGFibGVDb2x1bW4sIFRhYmxlT3B0aW9uLCBUYWJsZVNvcnQgfSBmcm9tIFwiLi90YWJsZVwiO1xyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgbmFtZXNwYWNlIEdhbGhvVUkge1xyXG4gICAgaW50ZXJmYWNlIFNldHRpbmdzIHtcclxuICAgICAgc2M/OiB7IGVkaXQ/OiBzdHJbXSB9XHJcbiAgICB9XHJcbiAgICBpbnRlcmZhY2UgV29yZHMge1xyXG4gICAgICBhZGRUb0dyb3VwPzogc3RyO1xyXG4gICAgICBhbGw/OiBzdHI7XHJcbiAgICAgIGVkaXQ/OiBzdHI7XHJcbiAgICAgIHJlbW92ZT86IHN0cjtcclxuICAgICAgc2F2ZURhdGE/OiBzdHI7XHJcbiAgICAgIHRydWU/OiBzdHI7XHJcbiAgICAgIGZhbHNlPzogc3RyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGF0ZUZpbHRlcihkZWY6IHN0cmluZywgY2I6IChleHByZXNzaW9uOiBzdHJpbmcsIHZhbHVlPzogc3RyaW5nIHwgW2Zyb206IHN0cmluZywgdG86IHN0cmluZ10pID0+IHZvaWQsIHBoOiBhbnkgPSAnRmlsdHJhci9kYXRhJykge1xyXG4gIGxldFxyXG4gICAgaXRlbXM6IEFycmF5PFtzdHIsIHN0cl0+ID0gW1xyXG4gICAgICBbJ2gwJywgJ05lc3RhIGhvcmEnXSxcclxuICAgICAgWydoMScsICdIb3JhIHBhc3NhZGEnXSxcclxuXHJcbiAgICAgIFsnMDYnLCAnRGUgbWFuaGEnXSxcclxuICAgICAgWycxMicsICdEZSB0YXJkZSddLFxyXG4gICAgICBbJzE4JywgJ0RlIG5vaXRlJ10sXHJcblxyXG4gICAgICBbJ2QwJywgJ0hvamUnXSxcclxuICAgICAgWydkMScsICdPbnRlbSddLFxyXG5cclxuICAgICAgWyd3MCcsICdFc3RhIHNlbWFuYSddLFxyXG4gICAgICBbJ3cxJywgJ1NlbWFuYSBwYXNzYWRhJ10sXHJcblxyXG4gICAgICBbJ2YwJywgJ0VzdGEgcXVpbnplbmEnXSxcclxuICAgICAgWydmMScsICdRdWluemVuYSBwYXNzYWRhJ10sXHJcblxyXG4gICAgICBbJ20wJywgJ0VzdGUgTe+/vXMnXSxcclxuICAgICAgWydtMScsICdN77+9cyBwYXNzYWRvJ10sXHJcblxyXG4gICAgICBbJ3QwJywgJ0VzdGUgVHJpbWVzdHJlJ10sXHJcbiAgICAgIFsndDEnLCAnVHJpbWVzdHJlIHBhc3NhZG8nXSxcclxuXHJcbiAgICAgIFsnczAnLCAnRXN0ZSBTaW1lc3RyZSddLFxyXG4gICAgICBbJ3MxJywgJ1NpbWVzdHJlIHBhc3NhZG8nXSxcclxuXHJcbiAgICAgIFsneTAnLCAnRXN0ZSBhbm8nXSxcclxuICAgICAgWyd5MScsICdBbm8gcGFzc2FkbyddXHJcbiAgICBdLFxyXG4gICAgaW5wdXQgPSBuZXcgU2VsZWN0KHtcclxuICAgICAgZmx1aWQ6IHRydWUsXHJcbiAgICAgIHZhbHVlOiB0eXBlb2YgZGVmID09ICdzdHJpbmcnID8gZGVmIDogbnVsbCxcclxuICAgICAgLyogICAgICBtZW51OiBkaXYoW0MubWVudV0pLCovXHJcbiAgICAgIG1lbnVSZW5kZXI6IChwKSA9PiBkaXYoW0MuaXRlbV0sIHBbMV0pLFxyXG4gICAgICBsYWJlbFJlbmRlcihrZXksIGxhYmVsKSB7XHJcbiAgICAgICAgbGFiZWwuY2xzKEMucGxhY2Vob2xkZXIsIGZhbHNlKS5zZXQoW1xyXG4gICAgICAgICAgaXRlbXMuYnlLZXkoa2V5KVsxXSxcclxuICAgICAgICAgIGNsb3NlKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlucHV0LnNldFZhbHVlKG51bGwpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICBdKTtcclxuICAgICAgfSxcclxuICAgICAgZW1wdHkobGFiZWwpIHsgbGFiZWwuY2xzKEMucGxhY2Vob2xkZXIpLnNldChwaCkgfVxyXG4gICAgfSwgaXRlbXMpLm9uKCdpbnB1dCcsICh2YWx1ZSkgPT4ge1xyXG4gICAgICBpZiAodmFsdWUpXHJcbiAgICAgICAgY2IoYGRhdGVfcmFuZ2UoY2QsJyR7dmFsdWV9JylgLCA8c3RyaW5nPnZhbHVlKTtcclxuICAgICAgZWxzZSBjYihudWxsKTtcclxuICAgIH0pO1xyXG4gIGlmIChkZWYpXHJcbiAgICBpbnB1dC5zZXQoJ3ZhbHVlJywgaW5wdXQubW9kZWwudmFsdWUpO1xyXG4gIHJldHVybiBpbnB1dDtcclxufVxyXG5leHBvcnQgY29uc3Qgc2VhcmNoID0gKGJvbmQ6IEJvbmQpID0+IGRpdihbQy5pbnB1dCwgQy5pdGVtXSwgW1xyXG4gIGcoJ2lucHV0Jywge1xyXG4gICAgdHlwZTogJ3NlYXJjaCcsXHJcbiAgICB2YWx1ZTogYm9uZC5xdWVyeSB8fCAnJyxcclxuICAgIHBsYWNlaG9sZGVyOiBcIlBlc3F1aXNhLi4uXCIsXHJcbiAgfSkub24oJ2lucHV0JywgZnVuY3Rpb24gKCkgeyBib25kLnF1ZXJ5ID0gdGhpcy52YWx1ZTsgfSksXHJcbiAgaWJ1dHRvbignbWFnbmlmeScsIG51bGwsICgpID0+IGJvbmQuc2VsZWN0Tm93KCkpXHJcbl0pO1xyXG5leHBvcnQgY29uc3Qgc2VhcmNoQnkgPSAoYm9uZDogQm9uZCkgPT4ge1xyXG4gIGxldCBsaXN0ID0gbyhib25kLnRhcmdldC5maWVsZHMoKGY6IEZpZWxkKSA9PiBmLnF1ZXJ5KSk7XHJcbiAgbGV0IG1uID0gZyhcInRhYmxlXCIsIDAsIFtcclxuXHJcbiAgICBtZW51LmNiKG51bGwsICQudy5hbGwsICh2KSA9PiB7XHJcblxyXG4gICAgfSksXHJcbiAgICBtZW51LmhyKClcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIGRyb3Bkb3duKGljb24oXCJtZW51LWRvd25cIiksIGxpc3QuYmluZChtbiwgKGJ5OiBGaWVsZCwgaSwgYykgPT4ge1xyXG4gICAgYy5wbGFjZShpICsgMiwgbWVudS5jYihib25kLnF1ZXJ5QnkuaW5kZXhPZihieS5rZXkpID49IDAsIGJ5LnRleHQsIChjaCkgPT4ge1xyXG4gICAgICBpZiAoY2gpXHJcbiAgICAgICAgYm9uZC5xdWVyeUJ5LnB1c2goYnkua2V5KTtcclxuICAgICAgZWxzZSBib25kLnF1ZXJ5QnkucmVtb3ZlKGJ5LmtleSk7XHJcbiAgICAgIGJvbmQuc2VsZWN0KCk7XHJcbiAgICB9KSk7XHJcbiAgfSkpO1xyXG59O1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0aW9uID0gKGJvbmQ6IEJvbmQpID0+IGRyb3Bkb3duKGljb24oJ3NlbGVjdC1ncm91cCcpLCAoKSA9PiBtZW51LndhaXQoYXN5bmMgKCkgPT4ge1xyXG4gIGxldCBpdGVtcyA9IG51bGw7Ly9hd2FpdCBib25kLnRhcmdldC5ncm91cHMoe30pO1xyXG4gIHJldHVybiBpdGVtcy5tYXAocyA9PiB7XHJcbiAgICBsZXRcclxuICAgICAgeSA9IGljb24oJ3RhZy1wbHVzJywgQ29sb3IuYWNjZXB0KSxcclxuICAgICAgbiA9IGljb24oJ3RhZy1taW51cycsIENvbG9yLmVycm9yKSxcclxuICAgICAgXyA9IGljb24oJ3RhZycpLFxyXG4gICAgICB0ID0gZyhcInNwYW5cIik7XHJcblxyXG4gICAgcmV0dXJuIG1lbnUuaShzLmljb24sIHMudGV4dCwgKCkgPT4ge1xyXG4gICAgICBsZXQgdDIgPSBib25kLnRhZ3MuZmluZChpID0+IGkuaWQgPT0gcy5pZCk7XHJcbiAgICAgIGlmICh0MiAmJiB0Mi5zaWduYWwgPT0gJysnKSB7XHJcbiAgICAgICAgYm9uZC50YWdzLnJlbW92ZSh0Mik7XHJcbiAgICAgICAgYm9uZC50YWdzLnB1c2goeyBzaWduYWw6ICctJywgaWQ6IHMuaWQgfSk7XHJcbiAgICAgICAgdC5zZXQobik7XHJcblxyXG4gICAgICB9IGVsc2UgaWYgKHQyKSB7XHJcbiAgICAgICAgYm9uZC50YWdzLnJlbW92ZSh0Mik7XHJcbiAgICAgICAgdC5zZXQoXyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYm9uZC50YWdzLnB1c2goeyBzaWduYWw6ICcrJywgaWQ6IHMuaWQgfSk7XHJcbiAgICAgICAgdC5zZXQoeSk7XHJcbiAgICAgIH1cclxuICAgIH0sIHQpO1xyXG4gICAgLy88TWVudUl0ZW0+e1xyXG4gICAgLy8gIHRwOiBNVC5tZW51LFxyXG4gICAgLy8gIGNoaWxkOiBbXHJcbiAgICAvLyAgICB7XHJcbiAgICAvLyAgICAgIHRwOiBNVC5oZWFkZXIsXHJcbiAgICAvLyAgICAgIGljb246ICxcclxuICAgIC8vICAgICAgLy9pbmY6IHMuaW5mbyxcclxuICAgIC8vICAgICAgdGV4dDogcy50ZXh0LFxyXG4gICAgLy8gICAgfSxcclxuICAgIC8vICAgIHRcclxuICAgIC8vICBdXHJcbiAgICAvL31cclxuICB9KVxyXG59KSk7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2dpbmcoYm9uZDogQm9uZCwgc2V0bGltaXQ/OiBib29sLCB2aWV3dG90YWw/OiBib29sLCBleHRyZW1lPzogYm9vbCkge1xyXG4gIGxldCBwID0gbmV3IFBhZ2dpbmcoe1xyXG4gICAgcGFnOiBib25kLnBhZyxcclxuICAgIG1pbkxpbWl0OiAyNSxcclxuICAgIGxpbWl0OiBib25kLmxpbWl0LFxyXG4gICAgZXh0cmVtZSxcclxuICAgIHNldGxpbWl0LFxyXG4gICAgdmlld3RvdGFsXHJcbiAgfSkub24oKGUpID0+IHtcclxuICAgIGlmICgncGFnJyBpbiBlKSB7XHJcbiAgICAgIGJvbmQucGFnID0gZS5wYWc7XHJcbiAgICAgIGlmICghKCdsaW1pdCcgaW4gZSkpXHJcbiAgICAgICAgYm9uZC5zZWxlY3ROb3coKTtcclxuICAgIH1cclxuICAgIGlmICgnbGltaXQnIGluIGUpXHJcbiAgICAgIGJvbmQubGltaXQgPSBlLmxpbWl0O1xyXG4gIH0pO1xyXG4gIGJvbmQub24oKCkgPT4ge1xyXG4gICAgcC5zZXQoe1xyXG4gICAgICB0b3RhbDogYm9uZC5sZW5ndGgsXHJcbiAgICAgIGxpbWl0OiBib25kLmxpbWl0LFxyXG4gICAgICBwYWc6IGJvbmQucGFnXHJcbiAgICB9KVxyXG4gIH0pO1xyXG4gIHJldHVybiBwO1xyXG59XHJcbi8qKiBzb3J0IGJ5Ki9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZVNvcnQoYm9uZDogQm9uZCwgcGxhY2Vob2xkZXI6IGFueSA9IGcoJ3NwYW4nLCBDLnBsYWNlaG9sZGVyLCBbaWNvbignc29ydCcpLCAnT3JkZW5hciBwb3InXSkpIHtcclxuICBsZXQgdDogU2VsZWN0PElGaWVsZCwgc3RyaW5nPiA9IG5ldyBTZWxlY3Q8SUZpZWxkLCBzdHJpbmc+KHtcclxuICAgIGxhYmVsUmVuZGVyOiAodiwgcykgPT4ge1xyXG4gICAgICBsZXQgdDAgPSA8RmllbGQ+Ym9uZC50YXJnZXQuZmllbGQodik7XHJcbiAgICAgIHJldHVybiBzLnNldChbdDAgJiYgdDAudGV4dCwgY2xvc2UoKCkgPT4gdC5zZXRWYWx1ZShudWxsKSldKTtcclxuICAgIH0sXHJcbiAgICBzZXRNZW51KGtleSkge1xyXG4gICAgICBpZiAodC5vcHRpb25zLmdldChrZXkpKVxyXG4gICAgICAgIHQub3B0aW9ucy5zZXRUYWcoQy5vbiwga2V5KTtcclxuICAgIH0sXHJcbiAgICB2YWx1ZTogYm9uZC5zb3J0Lmxlbmd0aCA/IGJvbmQuc29ydFswXS5mIDogbnVsbCxcclxuICAgIG1lbnVSZW5kZXI6IChmOiBGaWVsZCkgPT4gZGl2KEMuaXRlbSwgZi50ZXh0KSxcclxuICAgIGZsdWlkOiB0cnVlLFxyXG4gICAgZW1wdHk6IHMgPT4gcy5zZXQocGxhY2Vob2xkZXIpXHJcbiAgfSwgYm9uZC50YXJnZXQuZmllbGRzKChmOiBGaWVsZCkgPT4gZi5zb3J0KSkub24oJ2lucHV0JywgKHYpID0+IGJvbmQuc29ydC5zZXQoW3ZdKSk7XHJcbiAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGwoYm9uZDogQm9uZCkge1xyXG4gIGxldFxyXG4gICAgbGlzdCA9IGJvbmQuYmluZCgpLFxyXG4gICAgdCA9IGc8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0Jywge1xyXG4gICAgICB0eXBlOiAnY2hlY2tib3gnXHJcbiAgICB9KS5vbignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0LnByb3AoJ2NoZWNrZWQnKSkge1xyXG4gICAgICAgIHNlbGVjdEFsbChsaXN0LCBDLnNlbGVjdGVkKTtcclxuICAgICAgICB0LnByb3BzKHtcclxuICAgICAgICAgIGNoZWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICBpbmRldGVybWluYXRlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJvbmQuYWxsID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHNlbGVjdE5vbmUobGlzdCwgQy5zZWxlY3RlZCk7XHJcbiAgICB9KTtcclxuICBvblNlbGVjdENoYW5nZShsaXN0LCBDLnNlbGVjdGVkLCAoYWN0aXZlLCBzZWxlY3RlZCkgPT4ge1xyXG4gICAgYm9uZC5hbGwgPSBmYWxzZTtcclxuICAgIHQucHJvcHMoe1xyXG4gICAgICBjaGVja2VkOiAhIWFjdGl2ZSxcclxuICAgICAgaW5kZXRlcm1pbmF0ZTogISFhY3RpdmUgJiYgKGJvbmQucGFncyA+IDEgfHwgKHNlbGVjdGVkID8gc2VsZWN0ZWQubGVuZ3RoIDwgbGlzdC5sZW5ndGggOiBsaXN0Lmxlbmd0aCA+IDEpKVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG90YWwgZXh0ZW5kcyBJV2hlcmUge1xyXG4gIGtleTogc3RyO1xyXG4gIGV4cDpFeHByZXNzaW9uXHJcbiAgZmllbGRzOiBzdHJbXTtcclxuICBmbXQ6IHN0cjtcclxuICB0cD86IERhdGFUeXBlXHJcbn1cclxuZXhwb3J0IGNvbnN0IHRvdGFscyA9IChib25kOiBCb25kLCB0b3RhbHM6IFRvdGFsW10pID0+XHJcbm51bGw7XHJcbiAgLy8gdG90YWxzLmJpbmQoZGl2KCksIGtleSA9PlxyXG4gIC8vICAgd2FpdChhc3luYyAoKSA9PiB7XHJcbiAgLy8gICAgIGxldCB2ID0gYXdhaXQgYm9uZC50YXJnZXQuc2VsZWN0KHRvdGFscyk7XHJcbiAgLy8gICAgIHJldHVybiBvdXRwdXQodC5rZXksIGlzVih2KSA/IGZtdCh2LCB0LmZtdCwgdC50cCkgOiBpY29uKCdtaW51cycsIENvbG9yLmVycm9yKSk7XHJcbiAgLy8gICB9KSk7XHJcbmV4cG9ydCBpbnRlcmZhY2UgaWN0eE1lbnUge1xyXG4gIGVkaXQ/KGl0ZW0/OiBEaWMpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBlbnVtIEFjdGlvbkZpbHRlclR5cGUge1xyXG4gIGFueSxcclxuICBhbGwsXHJcbiAgLyoqYWN0aW9uIHdpbGwgYmUgY2FsbGVkIGZvciBhbGwgcmVjb3JkcyBhdCBvbmNlICovXHJcbiAgam9pblxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uRmlsdGVyIHtcclxuICBleHA6IFZhbDtcclxuICB0cDogQWN0aW9uRmlsdGVyVHlwZTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdlbmVyaWNBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge1xyXG4gIHN0YXRpYzogYm9vbCxcclxuICBpY29uPzogSWNvbjtcclxuICB0ZXh0Pzogc3RyO1xyXG4gIHNob3J0Y3V0Pzogc3RyO1xyXG4gIGZpbHRlcj86IEFjdGlvbkZpbHRlcjtcclxufVxyXG5leHBvcnQgY29uc3QgaWRzID0gKGJvbmQ6IEJvbmQpOiBUYXNrPEtleVtdPiA9PiBib25kLmFsbCA/IGJvbmQuaWRzKCkgOiBzZWxlY3RlZChib25kLmxpc3QsIEMuc2VsZWN0ZWQpLnN1YihldHQkLmlkKGJvbmQudGFyZ2V0KSk7XHJcblxyXG5leHBvcnQgY29uc3QgdHJ5UmVtb3ZlID0gKGVudDogRW50aXR5LCBpZHM6IEtleVtdKSA9PiBva0NhbmNlbChcclxuICAnZGVsZXRlJywgJ1JlbW92ZXIgcmVnaXN0b3MnLFxyXG4gICdTZXJhIHJlbW92aWRvICcgKyBpZHMubGVuZ3RoICsgJyByZWdpc3RvcywgZGVzZWphIGNvbnRpbnVhcj8nLFxyXG4gICgpID0+IGVudC5yZW1vdmUoaWRzKVxyXG4pO1xyXG5leHBvcnQgZnVuY3Rpb24gY3R4TWVudShib25kOiBCb25kLCBjdHg6IGljdHhNZW51ID0ge30pOiBJdGVtcyB7XHJcbiAgbGV0XHJcbiAgICBlbnQgPSBib25kLnRhcmdldCxcclxuICAgIGl0ZW1zID0gc2VsZWN0ZWQoYm9uZC5saXN0LCBDLnNlbGVjdGVkKSxcclxuICAgIC8vIGlkcyA9IGZvY3VzZWQubWFwKGkgPT4gaS5pZCkuc29ydCgoYSwgYikgPT4gYSAtIGIpLFxyXG4gICAgbm9uZSA9ICEhaXRlbXMubGVuZ3RoLFxyXG4gICAgdmFsaWQgPSAoZmlsdGVyOiBBY3Rpb25GaWx0ZXIpID0+IHtcclxuICAgICAgaWYgKCFmaWx0ZXIpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIHN3aXRjaCAoZmlsdGVyLnRwKSB7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25GaWx0ZXJUeXBlLmFsbDpcclxuICAgICAgICAgIHJldHVybiBpdGVtcy5ldmVyeShmID0+IGZpbHRlci5leHAuY2FsYyh7IHZhcnM6IGYgfSkpO1xyXG4gICAgICAgIGNhc2UgQWN0aW9uRmlsdGVyVHlwZS5hbnk6XHJcbiAgICAgICAgICByZXR1cm4gaXRlbXMuc29tZShmID0+IGZpbHRlci5leHAuY2FsYyh7IHZhcnM6IGYgfSkpO1xyXG4gICAgICAgIGNhc2UgQWN0aW9uRmlsdGVyVHlwZS5qb2luOlxyXG4gICAgICAgICAgcmV0dXJuIGZpbHRlci5leHAuY2FsYyh7IHZhcnM6IHsgaXRlbXMgfSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIFtcclxuICAgIGVudC5hY3Rpb25zLm1hcCgoYTogR2VuZXJpY0FjdGlvbikgPT4gKGEuc3RhdGljIHx8IG5vbmUpICYmIG1lbnUuaShcclxuICAgICAgYS5pY29uLFxyXG4gICAgICBhLnRleHQsXHJcbiAgICAgIGFzeW5jICgpID0+IGEuY2FsbChhd2FpdCBpZHMoYm9uZCkpLFxyXG4gICAgICBhLnNob3J0Y3V0LFxyXG4gICAgKS5wcm9wKFwiZGlzYWJsZWRcIiwgIXZhbGlkKGEuZmlsdGVyKSkpLFxyXG5cclxuICAgIGVudC5jYW5VcGRhdGUgJiYgbWVudS5pKCdwZW5jaWwnLCAkLncuZWRpdCxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGxldCB0ID0gYm9uZC5saXN0LmdldFRhZyhDLm9uKTtcclxuICAgICAgICBjdHguZWRpdCA/IGN0eC5lZGl0KHQpIDogbWRQdXQoZW50LCB0LnZhbHVlLmlkKTtcclxuICAgICAgfSwgJC5zYy5lZGl0LmpvaW4oJysnKVxyXG4gICAgKS5wcm9wKFwiZGlzYWJsZWRcIiwgbm9uZSB8fCAhdmFsaWQoaXNCKGVudC5jYW5VcGRhdGUpID8gbnVsbCA6IGVudC5jYW5VcGRhdGUpKSxcclxuXHJcbiAgICBlbnQuY2FuUmVtb3ZlICYmIG1lbnUuaSh7IGQ6ICdkZWxldGUnLCBjOiBDb2xvci5lcnJvciB9LCAkLncucmVtb3ZlLFxyXG4gICAgICBhc3luYyAoKSA9PiB0cnlSZW1vdmUoZW50LCBhd2FpdCBpZHMoYm9uZCkpLFxyXG4gICAgICAkLnNjLmVkaXQuam9pbignKycpXHJcbiAgICApLnByb3AoXCJkaXNhYmxlZFwiLCBub25lIHx8ICF2YWxpZChpc0IoZW50LmNhblJlbW92ZSkgPyBudWxsIDogZW50LmNhblJlbW92ZSkpLFxyXG4gIF07XHJcbiAgLy9lbnQuY2FuQ3JlYXRlR3JvdXAgJiYgbm9uZSAmJiBbXHJcbiAgLy8gIHsgdHA6IE1ULmRpdmlzb3IgfSxcclxuICAvLyAge1xyXG4gIC8vICAgIGljb246IHsgYzogQ29sb3IuYWNjZXB0LCBkdDogJ3BsdXMnIH0sXHJcbiAgLy8gICAgdHA6IE1ULnN1YixcclxuICAvLyAgICB0ZXh0OiAkLncuYWRkVG9Hcm91cCxcclxuICAvLyAgICBob3ZlcjogZmFsc2UsXHJcbiAgLy8gICAgbWVudTogZGl2KFtDLm1lbnVdLCBtZW51aGVscGVyKFtcclxuICAvLyAgICAgIHdhaXQoYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICAgICBsZXRcclxuICAvLyAgICAgICAgICBpZCA9IGF3YWl0IGJvbmQuaWRzKCksXHJcbiAgLy8gICAgICAgICAgaXRlbXMgPSBhd2FpdCBlbnQubG9hZFNlbGVjdGlvbnMoeyBleDogaWQgfSk7XHJcbiAgLy8gICAgICAgIHJldHVybiA8U1tdPm1lbnVoZWxwZXIoaXRlbXMubWFwKHMgPT4gKDxNZW51SXRlbT57XHJcbiAgLy8gICAgICAgICAgaWNvbjogcy5pY29uLFxyXG4gIC8vICAgICAgICAgIHRleHQ6IHMudGV4dCxcclxuICAvLyAgICAgICAgICB0aXA6IHMuaW5mbyxcclxuICAvLyAgICAgICAgICBhY3Rpb24oKSB7XHJcbiAgLy8gICAgICAgICAgICBlbnQuZWRpdFNlbGVjdGlvblJlY29yZHMocy5pZCwgaWQsICcrJyk7XHJcbiAgLy8gICAgICAgICAgfVxyXG4gIC8vICAgICAgICB9KSkpO1xyXG4gIC8vICAgICAgfSksXHJcbiAgLy8gICAgICB7IHRwOiBNVC5kaXZpc29yIH0sXHJcbiAgLy8gICAgICB7XHJcbiAgLy8gICAgICAgIGljb246ICdub3RlJyxcclxuICAvLyAgICAgICAgdGV4dDogJ0NyaWFyIHNlbGXvv73vv71vJyxcclxuICAvLyAgICAgICAgYXN5bmMgYWN0aW9uKCkge1xyXG4gIC8vICAgICAgICAgIGVkaXRTZWxlY3Rpb24oZW50LCB7IGR0OiBhd2FpdCBib25kLmlkcygpIH0pO1xyXG4gIC8vICAgICAgICB9XHJcbiAgLy8gICAgICB9XHJcbiAgLy8gICAgXSkpXHJcbiAgLy8gIH0sXHJcbiAgLy8gIHtcclxuICAvLyAgICBpY29uOiB7IGM6IENvbG9yLmVycm9yLCBkdDogJ21pbnVzJyB9LFxyXG4gIC8vICAgIHRwOiBNVC5zdWIsXHJcbiAgLy8gICAgdGV4dDogJ1JlbW92ZXIgZGEgc2VsZe+/ve+/vW8nLFxyXG4gIC8vICAgIGhvdmVyOiBmYWxzZSxcclxuICAvLyAgICBtZW51OiBkaXYoW0MubWVudV0sIHdhaXQoYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICAgbGV0XHJcbiAgLy8gICAgICAgIGlkcyA9IGF3YWl0IGJvbmQuaWRzKCksXHJcbiAgLy8gICAgICAgIGl0ZW1zID0gYXdhaXQgZW50LmxvYWRTZWxlY3Rpb25zKHsgaW46IGlkcyB9KTtcclxuICAvLyAgICAgIHJldHVybiBtZW51aGVscGVyKGl0ZW1zLm1hcChzID0+ICg8TWVudUl0ZW0+e1xyXG4gIC8vICAgICAgICBpY29uOiBzLmljb24sXHJcbiAgLy8gICAgICAgIHRleHQ6IHMudGV4dCxcclxuICAvLyAgICAgICAgdGlwOiBzLmluZm8sXHJcbiAgLy8gICAgICAgIGFjdGlvbigpIHsgZW50LmVkaXRTZWxlY3Rpb25SZWNvcmRzKHMuaWQsIGlkcywgJy0nKSB9XHJcbiAgLy8gICAgICB9KSkpO1xyXG4gIC8vICAgIH0pKVxyXG4gIC8vICB9XHJcbiAgLy9dXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJRW50aXR5IGV4dGVuZHMgSUVudGl0eUJhc2Uge1xyXG4gIGk/OiBJY29uO1xyXG4gIC8qKnNpbmd1bGFyIG5hbWUqL1xyXG4gIHM/OiBzdHI7XHJcbiAgLyoqcGx1cmFsIG5hbWUgKi9cclxuICBwPzogc3RyO1xyXG5cclxufVxyXG5leHBvcnQgY29uc3QgZW50Rm9ybSA9IChlbnQ6IEVudGl0eSwgZmlsdGVyOiAoZmllbGQ6IEZpZWxkKSA9PiBhbnkpID0+IG5ldyBGb3JtKHsgaW50ZXJuOiB0cnVlIH0sIGVudC5maWVsZHMoZmlsdGVyKS5tYXAoKGY6IEZpZWxkKSA9PiBmLmlucHV0KCkpKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0KGVudDogRW50aXR5LCBmb3JtOiBGb3JtQmFzZSwgY2FuY2VsQnQ/OiBib29sKSB7XHJcbiAgbGV0IGRlZiA9IGcoZm9ybSkuZCgpLCBpID0gPElFbnRpdHk+ZW50Lmk7XHJcbiAgaWYgKGRlZikgZm9ybS5kZWYgPSBkZWY7XHJcbiAgcmV0dXJuIFtcclxuICAgIGRpdihDLmhlYWQsIFtpY29uKGkuaWNvbiksIFwiTm92byBcIiArIGkuc10pLFxyXG4gICAgZyhmb3JtLCBDLmJvZHkpLFxyXG4gICAgZGl2KEMuZm9vdCwgW1xyXG4gICAgICBpYnV0dG9uKCdjb250ZW50LXNhdmUnLCAkLncuc2F2ZURhdGEsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiBmb3JtLnZhbGlkKCkgPyBlbnQuaW5zZXJ0KGZvcm0uZGF0YSh0cnVlLCB0cnVlKSkgOiBlLm9mZigpO1xyXG4gICAgICB9KS5wcm9wKFwidHlwZVwiLCAnc3VibWl0JyksXHJcbiAgICAgIGNhbmNlbEJ0ICYmIGNhbmNlbCgpXHJcbiAgICBdKVxyXG4gIF07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1kUG9zdChlbnQ6IEVudGl0eSwgZm9ybTogRm9ybUJhc2UgPSBlbnRGb3JtKGVudCwgZiA9PiBmLnNldCkpIHtcclxuICBsZXQgdCA9IG1vZGFsKGcoXCJmb3JtXCIsIEMucGFuZWwsIHBvc3QoZW50LCBmb3JtLCB0cnVlKSkpO1xyXG4gIGZvcm0uZm9jdXMoKTtcclxuICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1dChlbnQ6IEVudGl0eSwgaWQ6IEtleSwgZm9ybTogRm9ybUJhc2UsIGNhbmNlbEJ0PzogYm9vbCB8ICgoKSA9PiBhbnkpKSB7XHJcbiAgbGV0IGR0ID0gYXdhaXQgZW50LnNlbGVjdCh7XHJcbiAgICB0cDogR1Qucm93LFxyXG4gICAgd2hlcmU6IGBpZD0ke2lkfWAsXHJcbiAgICBmaWxsOiB0cnVlXHJcbiAgfSksIGkgPSA8SUVudGl0eT5lbnQuaTtcclxuXHJcbiAgZyhmb3JtKS5kKCkgfHwgZyhmb3JtKS5kKGZvcm0uZGVmKTtcclxuICBmb3JtLmRlZiA9IGR0O1xyXG4gIGZvcm0ucmVzZXQoKTtcclxuICByZXR1cm4gW1xyXG4gICAgZyhcImRpdlwiLCBDLmhlYWQsIFtpY29uKGkuaWNvbiksIFwiRWRpdGFyIFwiICsgaS5zXSksXHJcbiAgICBnKGZvcm0sIEMuYm9keSksXHJcbiAgICBnKFwiZGl2XCIsIEMuZm9vdCwgW1xyXG4gICAgICBpYnV0dG9uKCdjb250ZW50LXNhdmUnLCAkLncuc2F2ZURhdGEsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGZvcm0udmFsaWQoKSA/IGVudC51cGRhdGUoT2JqZWN0LmFzc2lnbihmb3JtLmRhdGEodHJ1ZSksIHsgaWQgfSkpIDogZS5vZmYoKTtcclxuICAgICAgfSkuZCgxKS5wcm9wKFwidHlwZVwiLCBcInN1Ym1pdFwiKSxcclxuICAgICAgZW50LmNhbkluc2VydCAmJiBpYnV0dG9uKCdjb250ZW50LWR1cGxpY2F0ZScsIFwiZHVwbGljYXJcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZm9ybS52YWxpZCgpID8gZW50Lmluc2VydChPYmplY3QuYXNzaWduKGZvcm0uZGF0YSgpLCB7IGlkIH0pKSA6IGUub2ZmKCk7XHJcbiAgICAgIH0pLmQoMSkucHJvcChcInR5cGVcIiwgXCJzdWJtaXRcIiksXHJcbiAgICAgIGNhbmNlbEJ0ICYmIGNhbmNlbChpc0YoY2FuY2VsQnQpICYmIGNhbmNlbEJ0KVxyXG4gICAgXSlcclxuICBdXHJcbn07XHJcbmV4cG9ydCBjb25zdCBtZFB1dCA9IChlbnQ6IEVudGl0eSwgaWQ6IEtleSwgZm9ybTogRm9ybUJhc2UgPSBlbnRGb3JtKGVudCwgKGY6IEZpZWxkKSA9PiBmLmVkaXQpKSA9PiBwdXQoZW50LCBpZCwgZm9ybSwgdHJ1ZSkudGhlbihkdCA9PiB7XHJcbiAgbGV0IHQgPSBtb2RhbChnKFwiZm9ybVwiLCBDLnBhbmVsLCBkdCkpO1xyXG4gIGZvcm0uZm9jdXMoKTtcclxuICByZXR1cm4gdDtcclxufSk7XHJcblxyXG5pbnRlcmZhY2UgaWNydWQge1xyXG4gIG9wZW4/KC4uLnZhbHVlOiBEaWNbXSk7XHJcbiAgZWRpdD8oLi4udmFsdWU6IERpY1tdKTtcclxuICBzaW5nbGU/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgaXRhYmxlIGV4dGVuZHMgaWNydWQge1xyXG4gIGlmb3JtPzogYm9vbDtcclxuICBvcHRpb25zPzogVGFibGVPcHRpb248RGljPltdO1xyXG4gIHA/OiBGaWVsZFBsYXRmb3JtO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0YWJsZShib25kOiBCb25kLCBpOiBpdGFibGUgPSB7fSkge1xyXG4gIGxldCBlbnQgPSBib25kLnRhcmdldFxyXG4gIGJvbmQuZmllbGRzLmwgfHwgYm9uZC5maWVsZHMuc2V0KHN1YihlbnQuZmllbGRzKChmOiBGaWVsZCkgPT4gIWYuc2lkZSksIFwia2V5XCIpKTtcclxuICByZXR1cm4gbmV3IFRhYmxlPERpYz4oe1xyXG4gICAgc29ydDogVGFibGVTb3J0LnNpbmdsZSxcclxuICAgIHNpbmdsZTogaS5zaW5nbGUsXHJcbiAgICBwOiBpLnAgfHwgZGVmRmllbGRSZW5kZXJlcigpLFxyXG4gICAgY29ybmVyOiBvdXRwdXQoYWxsKGJvbmQpKSxcclxuICAgIG9wZW46IGkub3BlbiB8fCBpLmVkaXQgfHwgKCh2YWx1ZSkgPT4gbWRQdXQoZW50LCB2YWx1ZT8uaWQpKSxcclxuICAgIGRlbGV0ZTogKC4uLnZhbHVlKSA9PiB0cnlSZW1vdmUoZW50LCB2YWx1ZS5zdWIoJ2lkJykpLFxyXG4gICAgbWVudTogKCkgPT4gY3R4TWVudShib25kLCB7IGVkaXQ6IGkuZWRpdCB9KSxcclxuICAgIG9wdGlvbnM6IGkub3B0aW9ucyxcclxuICAgIGNvbHVtbnM6IGJvbmQuZmllbGRzLmNvcHkodiA9PiB7XHJcbiAgICAgIGxldFxyXG4gICAgICAgIGYgPSA8RmllbGQ+ZW50LmZpZWxkKHYpLFxyXG4gICAgICAgIHRwID0gZi50eXBlO1xyXG4gICAgICByZXR1cm4gPFRhYmxlQ29sdW1uPntcclxuICAgICAgICBrZXk6IHYsXHJcbiAgICAgICAgdGV4dDogZi50ZXh0LFxyXG4gICAgICAgIGFsaWduOiB0cC5hbGlnbixcclxuICAgICAgICBzejogdHAuc2l6ZSgpICogdGhlbWUuc3oubixcclxuICAgICAgICB0cDogdHAuZHQsXHJcbiAgICAgICAgZm10OiB0cC5vdXRwdXQ/LmJpbmQoZilcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LCBib25kLmJpbmQoKSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gcmFuZ2VGaWx0ZXIoZmllbGQ6IEZpZWxkLCBib25kOiBCb25kKSB7XHJcbiAgbGV0XHJcbiAgICByZWxvYWQgPSAoKSA9PiBib25kLmFkZEZpbHRlcihmaWVsZC5rZXksIGAke2ZpZWxkLmtleX0ke29wLnZhbHVlfSR7aW5wdXQudmFsdWV9YCksXHJcbiAgICBvcCA9IG5ldyBTZWxlY3Q8eyBrZXk6IHN0ciB9LCBzdHJpbmc+KHtcclxuICAgICAgLy9jbHM6IEMuaXRlbUMsXHJcbiAgICAgIG1lbnVSZW5kZXI6IHYgPT4gZGl2KFtDLml0ZW1dLCB2LmtleSlcclxuICAgIH0sIFtcclxuICAgICAgeyBrZXk6ICc9JyB9LFxyXG4gICAgICB7IGtleTogJz4nIH0sXHJcbiAgICAgIHsga2V5OiAnPCcgfSxcclxuICAgICAgeyBrZXk6ICc+PScgfSxcclxuICAgICAgeyBrZXk6ICc8PScgfSxcclxuICAgICAgeyBrZXk6ICc8PicgfSxcclxuICAgIF0pLm9uKCdpbnB1dCcsIHJlbG9hZCksXHJcbiAgICBpbnB1dCA9IGZpZWxkLmlucHV0KCkub24oKGUpID0+IHtcclxuICAgICAgaWYgKCd2YWx1ZScgaW4gZSlcclxuICAgICAgICByZWxvYWQoKTtcclxuICAgIH0pO1xyXG5cclxuICByZXR1cm4gb3V0cHV0KGcob3ApLmNzcygnbWluV2lkdGgnLCAndW5zZXQnKSwgaW5wdXQpO1xyXG59XHJcbmZ1bmN0aW9uIHNlYXJjaEZpbHRlcihmaWVsZDogSUZpZWxkLCBib25kOiBCb25kKSB7XHJcbiAgbGV0IGtleSA9IGZpZWxkLmtleSwgbGlzdCA9IG8oKTtcclxuICByZXR1cm4gb3BlblNlbGVjdChhc3luYyBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBsaXN0LnNldCgoYXdhaXQgYm9uZC50YXJnZXQuc2VsZWN0KHtcclxuXHJcbiAgICAgIH0pKSk7XHJcbiAgICAgIGJvbmQuYWRkRmlsdGVyKGtleSwga2V5ICsgJz0nICsgdmFsdWUpO1xyXG4gICAgICB0aGlzLnNldCgnb3BlbicsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGlzdC5zZXQoKTtcclxuICAgICAgYm9uZC5yZW1vdmVGaWx0ZXIoa2V5KTtcclxuICAgICAgdGhpcy5zZXQoJ29wZW4nLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgeyBvcHRpb25zOiBsaXN0LCBrZXk6IGtleSwgbWVudVJlbmRlcjogKGl0ZW0pID0+IGl0ZW1ba2V5XSB9KTtcclxufVxyXG5jb25zdCBmaWx0ZXJzID0gKGJvbmQ6IEJvbmQpID0+IGRpdihbQy5tZW51XSwgYm9uZC50YXJnZXQuZmllbGRzKCkubWFwKChmaWVsZDogRmllbGQpID0+XHJcbiAgY2FsbCgoPEZpZWxkVHlwZT5mdHlwZShmaWVsZCkpLmZpbHRlcihmaWVsZCksIGZpbHRlciA9PiBmaWx0ZXIgJiYgZGl2KDAsIFtcclxuICAgIGxhYmVsKGZpZWxkLnRleHQpLmNzcygnd2lkdGgnLCAnNDAlJyksXHJcbiAgICB3cmFwKGZpbHRlcikuY3NzKCd3aWR0aCcsIFwiNjAlXCIpXHJcbiAgXSkpKSk7XHJcblxyXG5leHBvcnQgdHlwZSBJRW50aXR5Rm9ybWF0ID0gRGljPHN0cj47XHJcbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5Rm9ybWF0IGV4dGVuZHMgRGljPFZhbD4ge1xyXG4gIHN0cmlrZU91dD86IFZhbDtcclxuICBncmF5PzogVmFsO1xyXG4gIGVycm9yPzogVmFsO1xyXG4gIGNoZWNrPzogVmFsO1xyXG4gIGNvbG9yPzogVmFsO1xyXG59XHJcbmV4cG9ydCBjb25zdCBmb3JtYXR0ZXI6IERpYzwodjogVmFsLCBkaXY6IFMpID0+IHZvaWQ+ID0ge1xyXG4gIC8vc3RyaWtlT3V0KHYsIGRpdikge1xyXG4gIC8vICBpZiAoZm9ybWF0LnN0cmlrZU91dC5jYWxjKG9wdGlvbnMpKVxyXG4gIC8vICAgIGRpdi5jc3MoJ3RleHREZWNvcmF0aW9uJywgJ2xpbmUtdGhyb3VnaCcpO1xyXG4gIC8vfSxcclxuICAvL2dyYXkodiwgZGl2KSB7XHJcbiAgLy8gIGxldCB0ZW1wID0gPG51bWJlciB8IGJvb2xlYW4+Zm9ybWF0LmdyYXkuY2FsYyhvcHRpb25zKTtcclxuICAvLyAgaWYgKHR5cGVvZiB0ZW1wID09PSAnYm9vbGVhbicpXHJcbiAgLy8gICAgdGVtcCA9IHRlbXAgPyAxIDogMDtcclxuICAvLyAgaWYgKHRlbXApIHtcclxuICAvLyAgICBiZyA9IG1jKG1jLkdSQVkpLm1peChiZywgdGVtcCk7XHJcbiAgLy8gICAgZGl2LmNzcygnY29sb3InLCBcIlwiICsgYmcuY29udHJhc3QoJyNjY2MnLCAnIzMzMycpKTtcclxuICAvLyAgICBhcHBseSA9IHRydWU7XHJcbiAgLy8gIH1cclxuICAvL30sXHJcbiAgLy9lcnJvcih2LCBkaXYpIHtcclxuICAvLyAgbGV0IHRlbXAgPSA8bnVtYmVyIHwgYm9vbGVhbj5mb3JtYXQuZXJyb3IuY2FsYyhvcHRpb25zKTtcclxuICAvLyAgaWYgKHR5cGVvZiB0ZW1wID09PSAnYm9vbGVhbicpXHJcbiAgLy8gICAgdGVtcCA9IHRlbXAgPyAxIDogMDtcclxuICAvLyAgaWYgKHRlbXApIHtcclxuICAvLyAgICBiZyA9IG1jKG1jLlJFRCkubGlnaHRlbigwLjcpLm1peChiZywgdGVtcCk7XHJcbiAgLy8gICAgZGl2LmNzcygnY29sb3InLCBcIlwiICsgYmcuY29udHJhc3QoKSk7XHJcbiAgLy8gICAgZGl2LmNscyhbQ29sb3IuZXJyb3JdKTtcclxuICAvLyAgICBhcHBseSA9IHRydWU7XHJcbiAgLy8gIH1cclxuICAvL30sXHJcbiAgLy9jaGVjayh2LCBkaXYpIHtcclxuICAvLyAgbGV0IHRlbXAgPSA8bnVtYmVyIHwgYm9vbGVhbj5mb3JtYXQuY2hlY2suY2FsYyhvcHRpb25zKTtcclxuICAvLyAgaWYgKHR5cGVvZiB0ZW1wID09PSAnYm9vbGVhbicpIHRlbXAgPSB0ZW1wID8gMSA6IDA7XHJcbiAgLy8gIGVsc2UgaWYgKHRlbXAgPiAxKSB0ZW1wID0gMTtcclxuICAvLyAgZWxzZSBpZiAodGVtcCA8IDApIHRlbXAgPSAwO1xyXG5cclxuICAvLyAgaWYgKHRlbXApIHtcclxuICAvLyAgICBiZyA9IG1jKCcjMTFmZjg4JykubWl4KGJnLCAxIC0gdGVtcCk7XHJcbiAgLy8gICAgZGl2LmNzcygnY29sb3InLCBcIlwiICsgYmcuY29udHJhc3QoKSk7XHJcbiAgLy8gICAgZGl2LmNscyhbQ29sb3IuYWNjZXB0XSk7XHJcbiAgLy8gICAgYXBwbHkgPSB0cnVlO1xyXG4gIC8vICB9XHJcbiAgLy99LFxyXG4gIC8vY29sb3IodiwgZGl2KSB7XHJcbiAgLy8gIGxldCB0ZW1wID0gPHN0cmluZz5mb3JtYXQuY29sb3IuY2FsYyhvcHRpb25zKTtcclxuICAvLyAgaWYgKHRlbXApIHtcclxuICAvLyAgICBmZyA9IChiZyA9IG1jKHRlbXApKS5jb250cmFzdCgpO1xyXG4gIC8vICAgIGNvbnNvbGUubG9nKGZnKTtcclxuICAvLyAgICBhcHBseSA9IHRydWU7XHJcbiAgLy8gIH1cclxuICAvL30sXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZtdEZpZWxkcyhmbXQ6IEVudGl0eUZvcm1hdCkge1xyXG4gIGxldCBmOiBzdHJbXSA9IFtdO1xyXG4gIGVhY2goZm10LCB2ID0+IGYucHVzaCguLi52LnZhcnMoKSkpO1xyXG4gIHJldHVybiBmLmRpc3RpbmN0KCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNhcmQoYm9uZDogQm9uZCkge1xyXG4gIGxldFxyXG4gICAgZSA9IGJvbmQudGFyZ2V0LFxyXG4gICAgLy9mbXQgPSBlLmZvcm1hdCxcclxuICAgIG1haW4gPSA8RmllbGQ+ZS5maWVsZChmID0+ICFlLm1haW5GaWVsZCB8fCBmLmtleSA9PSBlLm1haW5GaWVsZCksXHJcbiAgICBiZiA9IGJvbmQuZmllbGRzLFxyXG4gICAgdGFncyA9IGUuZmllbGRzKChmOiBGaWVsZCkgPT4gKGJmLmxlbmd0aCA/IGJmLmluY2x1ZGVzKGYua2V5KSA6ICFmLnNpZGUpICYmIGYua2V5ICE9IG1haW4ua2V5KSxcclxuICAgIHAgPSBkZWZGaWVsZFJlbmRlcmVyKCk7XHJcbiAgLy8gb3B0czogdWkuRmllbGRPdXRwdXRDYWxsZXIgPSB7IHA6ICB9O1xyXG5cclxuICBiZi5sIHx8IGJmLnNldChbbWFpbi5rZXksIC4uLnRhZ3MubWFwKHQgPT4gdC5rZXkpLCAvKi4uLmZtdCA/IGZtdEZpZWxkcyhmbXQpIDogW10qL10uZGlzdGluY3QoKSk7XHJcblxyXG4gIHJldHVybiAocmVjOiBSZWMpID0+IHtcclxuICAgIGxldFxyXG4gICAgICBjdHg6IE91dHB1dEN0eCA9IHsgcCwgcmVjIH0sXHJcbiAgICAgIHMgPSBkaXYoYyhDQy5jYXJkKSwgW1xyXG4gICAgICAgIHdyYXAobWFpbi5vdXRwdXQocmVjW21haW4ua2V5XSwgY3R4KSwgbnVsbCwgJ3AnKSxcclxuICAgICAgICB0YWdzLm1hcCgodDogRmllbGQpID0+IHtcclxuICAgICAgICAgIGxldCB2ID0gcmVjW3Qua2V5XTtcclxuICAgICAgICAgIHJldHVybiB2ID09IG51bGwgPyBudWxsIDoga2V5VmFsKHQudGV4dCwgdC5vdXRwdXQodiwgY3R4KSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgXSk7XHJcbiAgICAvL2ZtdCAmJiB1aTIuZm9ybWF0KHZhbHVlLCBzLCBmbXQpXHJcbiAgICByZXR1cm4gcztcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlKCk6IGNzcy5TdHlsZXMge1xyXG4gIGxldCB7IG0sIHRiIH0gPSB0aGVtZTtcclxuICByZXR1cm4ge1xyXG4gICAgW2MoQy50YWJsZSldOiB7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IGNsLCBkaXYsIGcgfSBmcm9tIFwiZ2FsaG9cIjtcclxuaW1wb3J0IHsgS2V5IH0gZnJvbSBcInRzLWtleS1lbnVtXCI7XHJcbmltcG9ydCB7ICQsIGJvZHksIEMgfSBmcm9tIFwiLi9jb3JlXCI7XHJcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSBcIi4vbWVudVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3R4KGU6IE1vdXNlRXZlbnQsIGRhdGE6IFRhc2s8SXRlbXM+KSB7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGxldFxyXG4gICAgbGFzdCA9IGcoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCksXHJcbiAgICBjdHggPSBkaXYoY2woJC5jLCBDLm1lbnUpLCBhd2FpdCBkYXRhKS5jc3Moe1xyXG4gICAgICBsZWZ0OiBlLmNsaWVudFggKyAncHgnLFxyXG4gICAgICB0b3A6IGUuY2xpZW50WSArICdweCdcclxuICAgIH0pLnByb3AoXCJ0YWJJbmRleFwiLCAwKTtcclxuICBjdHgucXVlcnlBbGwoJ2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHsgbGFzdC52YWxpZCA/IGxhc3QuZm9jdXMoKSA6IHRoaXMuYmx1cigpIH0pXHJcbiAgY3R4LmFkZFRvKGJvZHkpLm9uKHtcclxuICAgIGZvY3Vzb3V0KGUpIHtcclxuICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCBhcyBOb2RlKSlcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfSxcclxuICAgIGtleWRvd24oZSkge1xyXG4gICAgICBpZiAoZS5rZXkgPT0gS2V5LkVzY2FwZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5ibHVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KS5mb2N1cygpO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBjc3MsIGRpdiwgZywgUyB9IGZyb20gXCJnYWxob1wiO1xyXG5pbXBvcnQgeyBibG9jaywgQywgYywgdGhlbWUgfSBmcm9tIFwiLi9jb3JlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxhYmVsID0gKGNvbnRlbnQpID0+IGcoXCJsYWJlbFwiLCBDLmxhYmVsLCBjb250ZW50KTtcclxuZXhwb3J0IGNvbnN0IG91dHB1dCA9ICguLi5jb250ZW50KSA9PiBnKFwic3BhblwiLCBDLmxhYmVsLCBjb250ZW50KTtcclxuZXhwb3J0IGNvbnN0IGtleVZhbCA9IChrZXksIHZhbCkgPT4gZyhcInNwYW5cIiwgQy5pbnB1dCwgW2tleSArIFwiOiBcIiArIHZhbF0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRpcCA9IChlOiBTLCB2YWx1ZSkgPT4gZS5wcm9wKFwidGl0bGVcIiwgdmFsdWUpO1xyXG4vL2V4cG9ydCBjb25zdCBqb2luID0gKC4uLmNvbnRlbnQpID0+IGRpdihDLmxhYmVsLCBjb250ZW50KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZSgpOiBjc3MuU3R5bGVzIHtcclxuICBsZXQgeyBhIH0gPSB0aGVtZTtcclxuICByZXR1cm4ge1xyXG4gICAgW2MoQy5sYWJlbCldOiB7XHJcbiAgICAgIC4uLmJsb2NrKGEpLFxyXG4gICAgICAvL2Rpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAvL2lucHV0OiB7XHJcbiAgICAgIC8vICB3aWR0aDogXCIxMDAlXCJcclxuICAgICAgLy99LFxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IGcsIE9uZSwgUywgRSwgZGl2IH0gZnJvbSBcImdhbGhvXCI7XHJcbmltcG9ydCBvLCB7IEFsaWFzLCBMIH0gZnJvbSBcIm9ycmF5XCI7XHJcbmltcG9ydCB7IGV4LCB0LCBpc08gfSBmcm9tIFwiaW51dGlsXCI7XHJcbmltcG9ydCB7IEMsIFZBbGlnbiB9IGZyb20gXCIuL2NvcmVcIjtcclxuaW1wb3J0IHsgS2V5IH0gZnJvbSBcInRzLWtleS1lbnVtXCI7XHJcbmltcG9ydCB7IGZpeGVkLCBmbHVpZCB9IGZyb20gXCIuL2hvdmVyXCI7XHJcbmltcG9ydCB7IGxpc3QgYXMgc2VsZWN0ZWQsIG1vdmUgYXMgbW92ZVNlbGVjdGlvbiwgdHAgYXMgc2VsZWN0aW9uVHlwZSB9IGZyb20gXCJvcnJheS9zZWxlY3RvclwiO1xyXG5pbXBvcnQgaWNvbiBmcm9tIFwiLi9pY29uXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdEV2ZW50cyB7XHJcbiAgZm9jdXM6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJU2VsZWN0QmFzZTxUIGV4dGVuZHMgT2JqZWN0LCBLPiB7XHJcbiAgY2xzPzogc3RyaW5nO1xyXG4gIG1lbnU/OiBTO1xyXG4gIGxhYmVsPzogUztcclxuXHJcbiAgbWVudUl0ZW1zPzogUztcclxuICBsYWJlbEl0ZW1zPzogUztcclxuICBtZW51UmVuZGVyPzogKHRoaXM6IHRoaXMsIHZhbHVlOiBUKSA9PiBPbmU7XHJcbiAgLyoqY2FsbGVkIHdoZW4gdmFsdWUgY2hhbmdlICovXHJcbiAgc2V0TWVudT86ICh0aGlzOiB0aGlzLCB2YWx1ZTogSykgPT4gdm9pZDtcclxuICAvKiplbGVtZW50byBkZW50cm8gZGEgbGFiZWwgb25kZSBhIGxhYmVsIHZhaSBzZXIgcmVuZGVyaXphZGEgKi9cclxuICAvL2xhYmVsSXRlbT86IFM7XHJcblxyXG4gIG9wdGlvbnM/OiBBbGlhczxULCBLPjtcclxuICB0YWJJbmRleD86IGJvb2xlYW47XHJcbiAga2V5Pzogc3RyaW5nO1xyXG4gIG9wZW4/OiBib29sZWFuO1xyXG4gIG9mZj86IGJvb2xlYW47XHJcbiAgbm9DbGljaz86IGJvb2xlYW47XHJcbiAgbm9JY29uPzogYm9vbGVhbjtcclxuICAvKiptZW51IHdpZHRoIHdpbGwgY2hhbmdlIGFjb3JkIHRvIGNvbnRlbnQgKi9cclxuICBmbHVpZD86IGJvb2xlYW47XHJcbiAgLy9sYWJlbDogUyB8ICgoa2V5OiBLKSA9PiB2b2lkKTtcclxuXHJcbn1cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNlbGVjdEJhc2U8TSBleHRlbmRzIElTZWxlY3RCYXNlPFQsIEs+ID0gSVNlbGVjdEJhc2U8YW55LCBhbnk+LCBUIGV4dGVuZHMgT2JqZWN0ID0gYW55LCBLID0gS2V5LCBFIGV4dGVuZHMgU2VsZWN0RXZlbnRzID0gU2VsZWN0RXZlbnRzPiBleHRlbmRzIEU8TSwgRT4gIHtcclxuICBtZW51OiBTO1xyXG4gIGxhYmVsOiBTO1xyXG5cclxuICBvcHRpb25zOiBMPFQsIEs+O1xyXG4gIGFic3RyYWN0IHNldFZhbHVlKC4uLnZhbHVlOiBLW10pOiB2b2lkO1xyXG4gIGFic3RyYWN0IGJhY2tzcGFjZSgpOiBib29sZWFuO1xyXG4gIGFic3RyYWN0IGRlbGV0ZSgpOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpOiBNLCBpdGVtcz86IEFycmF5PFQgfCBLPikge1xyXG4gICAgaWYgKCFpLmtleSlcclxuICAgICAgaS5rZXkgPSAna2V5JztcclxuICAgIHN1cGVyKGkpO1xyXG4gICAgdGhpcy5vcHRpb25zID0gbzxULCBLPihpdGVtcywge1xyXG4gICAgICBrZXk6IGkua2V5LFxyXG4gICAgICBjbGVhcjogdHJ1ZSxcclxuICAgICAgcGFyc2U6IChlKSA9PiBpc08oZSkgPyBlIDogeyBbaS5rZXldOiBlIH0gYXMgYW55XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJvdGVjdGVkIHNldE1lbnUoYmFzZTogUykge1xyXG4gICAgdGhpcy5tZW51LmFkZFRvKGJhc2UpO1xyXG4gICAgaWYgKHRoaXMuaS5mbHVpZClcclxuICAgICAgZmx1aWQoYmFzZSwgdGhpcy5tZW51KTtcclxuICAgIGVsc2VcclxuICAgICAgZml4ZWQoYmFzZSwgdGhpcy5tZW51KTtcclxuICB9XHJcblxyXG4gIHZpZXcoKTogUyB7XHJcbiAgICBsZXRcclxuICAgICAgX3RoaXMgPSB0aGlzLFxyXG4gICAgICBpID0gdGhpcy5pLFxyXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxyXG4gICAgICBsYiA9IGcoaS5sYWJlbCB8fCAnZGl2JykuY2xzKEMuYm9keSk7XHJcblxyXG4gICAgdGhpcy5sYWJlbCA9IGkubGFiZWxJdGVtcyB8fCBsYiAvLyBtb2RlbC5sYWJlbEl0ZW0gfHwgbGFiZWw7XHJcblxyXG4gICAgdGhpcy5tZW51ID0gKGkubWVudSB8fCBkaXYoKSkuY2xzKEMubWVudSk7XHJcbiAgICAvL2lmIChtb2RlbC5tZW51SXRlbXMgJiYgbW9kZWwubWVudUl0ZW1zICE9IHRoaXMubWVudSkge1xyXG4gICAgLy8gIHRoaXMubWVudS5zZXRDbGFzcyhDbHMuZmlsbCk7XHJcbiAgICAvLyAgbW9kZWwubWVudUl0ZW1zLnNldENsYXNzKENscy5mdWxsKTtcclxuICAgIC8vfVxyXG5cclxuICAgIGkub3BlbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAvL2lmICghbWQubWVudVJlbmRlcilcclxuICAgIC8vICBtZC5tZW51UmVuZGVyID0gdmFsdWUgPT4gZGl2KCBudWxsLCB2YWx1ZVttZC5rZXldKTtcclxuXHJcbiAgICBsZXRcclxuICAgICAgcm9vdCA9IGRpdihgJHtDLnNlbGVjdH0gJHtpLmNscyB8fCAnJ31gLCBbbGIsIGkubm9JY29uIHx8IGljb24oJ21lbnUtZG93bicpLyosIHRoaXMubWVudSovXSlcclxuICAgICAgICAucHJvcChcInRhYkluZGV4XCIsIDApO1xyXG5cclxuICAgIHRoaXMuYmluZChyb290LCAoczogUywgc3RhdGUpID0+IHtcclxuICAgICAgbGV0IG1vZGVsID0gdGhpcy5pO1xyXG5cclxuICAgICAgaWYgKFwib2ZmXCIgaW4gc3RhdGUpIHtcclxuICAgICAgICBpZiAobW9kZWwub2ZmKSB7XHJcbiAgICAgICAgICB0aGlzLnNldChcIm9wZW5cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgcy5ibHVyKCk7XHJcbiAgICAgICAgICBzLmNscyhDLmRpc2FibGVkKTtcclxuICAgICAgICAgIHMucHJvcCgndGFiSW5kZXgnLCAtMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHMuY2xzKEMuZGlzYWJsZWQsIGZhbHNlKTtcclxuICAgICAgICAgIHMucHJvcCgndGFiSW5kZXgnLCBtb2RlbC50YWJJbmRleCA9PT0gZmFsc2UgPyAtMSA6IDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoXCJvcGVuXCIgaW4gc3RhdGUpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2ZvY3VzJywgbW9kZWwub3Blbik7XHJcbiAgICAgICAgcy5jbHMoQy5vbiwgbW9kZWwub3Blbik7XHJcblxyXG4gICAgICAgIGlmIChtb2RlbC5vcGVuKSB7XHJcbiAgICAgICAgICBpZiAobW9kZWwub2ZmKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0KFwib3BlblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2V0TWVudShzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcy5jbHMoW1ZBbGlnbi5ib3R0b20sIFZBbGlnbi50b3BdLCBmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLm1lbnUucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KS5vbih7XHJcbiAgICAgIGZvY3VzOiAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChpLm9mZikge1xyXG4gICAgICAgICAgaWYgKGUucmVsYXRlZFRhcmdldClcclxuICAgICAgICAgICAgZyhlLnJlbGF0ZWRUYXJnZXQgYXMgRWxlbWVudCkuZm9jdXMoKTtcclxuICAgICAgICAgIGVsc2Ugcm9vdC5ibHVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHJvb3QuY2xzKEMuc2VsZWN0ZWQpO1xyXG4gICAgICB9LFxyXG4gICAgICBmb2N1c291dDogKGUpID0+IHtcclxuICAgICAgICAvL3NlIG8gbm92byBpdGVtIHF1ZSBnYW5ob3UgbyBmb2NvIG7vv71vIGVzdGl2ZXIgZGVudHJvIGRvIGl0ZW0gYWN0dWFsIGZlY2hhIG8gbWVudVxyXG4gICAgICAgIGlmICghaS5vZmYgJiYgIXJvb3QuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0IGFzIEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICByb290LmNscyhDLnNlbGVjdGVkLCBmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLnNldChcIm9wZW5cIiwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vL3NvIGZheiBlc3RhIGNoZWNhZ2VtIHNlIGVzdGl2ZXIgYWN0aXZvKG7vv71vIGRlc2FjdGl2bylcclxuICAgICAgICAvL2lmICghbW9kZWwub2ZmKSB7XHJcbiAgICAgICAgLy8gIC8vc2UgbyBub3ZvIGl0ZW0gcXVlIGdhbmhvdSBvIGZvY28gbu+/vW8gZXN0aXZlciBkZW50cm8gZG8gaXRlbSBhY3R1YWwgZmVjaGEgbyBtZW51XHJcbiAgICAgICAgLy8gIGxldCBjaGlsZCA9IG0oPEVsZW1lbnQ+ZS5yZWxhdGVkVGFyZ2V0KTtcclxuICAgICAgICAvLyAgcm9vdC5zZXRDbGFzcyhDbHMuc2VsZWN0ZWQsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gIGlmICghY2hpbGQudmFsaWQpXHJcbiAgICAgICAgLy8gICAgX3RoaXMuc2V0KEMub3BlbiwgZmFsc2UpO1xyXG4gICAgICAgIC8vICBlbHNlIGlmIChyb290LmNvbnRhaW5zKGNoaWxkKSkge1xyXG4gICAgICAgIC8vICAgIGlmIChjaGlsZC5pc0NscyhDbHMuaXRlbSkgJiYgIWNoaWxkLmlzQ2xzKENscy5kcm9wZG93bikpXHJcbiAgICAgICAgLy8gICAgICBfdGhpcy5zZXQoQy5vcGVuLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vICB9IGVsc2UgX3RoaXMuc2V0KEMub3BlbiwgZmFsc2UpO1xyXG5cclxuICAgICAgICAvL31cclxuICAgICAgfSxcclxuICAgICAga2V5ZG93bjogKGUpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XHJcbiAgICAgICAgICBjYXNlIEtleS5BcnJvd1VwOlxyXG4gICAgICAgICAgICB0aGlzLnNldChcIm9wZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIG1vdmVTZWxlY3Rpb24ob3B0aW9ucywgQy5zZWxlY3RlZCwgLTEsIHNlbGVjdGlvblR5cGUoZS5zaGlmdEtleSwgZS5jdHJsS2V5KSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBLZXkuQXJyb3dEb3duOlxyXG4gICAgICAgICAgICB0aGlzLnNldChcIm9wZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIG1vdmVTZWxlY3Rpb24ob3B0aW9ucywgQy5zZWxlY3RlZCwgMSwgc2VsZWN0aW9uVHlwZShlLnNoaWZ0S2V5LCBlLmN0cmxLZXkpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEtleS5FbnRlcjpcclxuICAgICAgICAgICAgaWYgKGkub3Blbikge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRWYWx1ZShvcHRpb25zWzBdW2kua2V5XSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldFZhbHVlKC4uLnNlbGVjdGVkKG9wdGlvbnMsIEMuc2VsZWN0ZWQpLnN1Yjxhbnk+KGkua2V5KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcXVhbmRvIGVzdGl2ZXIgZmVjaGFkbyBuYW8gYWJyaSBwYXJhIHBlcm1pdGlyXHJcbiAgICAgICAgICAgIC8vIHVzYXIgbyBlbnRlciBwYXJhIHN1Ym1ldGVyIG8gZm9ybXVsYXJpbyAodGhpcy5zZXQoQy5vcGVuLCB0cnVlKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIGNhc2UgS2V5LkVzY2FwZTpcclxuICAgICAgICAgICAgaWYgKGkub3Blbikge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0KFwib3BlblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSByZXR1cm47XHJcblxyXG4gICAgICAgICAgY2FzZSBLZXkuRGVsZXRlOiB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBnKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldC5pcygnaW5wdXQnKSB8fCB0YXJnZXQuaXMoJ3RleHRhcmVhJykgfHwgIV90aGlzLmRlbGV0ZSgpKVxyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgZWxzZSBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhc2UgS2V5LkJhY2tzcGFjZToge1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaXMoJ2lucHV0JykgfHwgdGFyZ2V0LmlzKCd0ZXh0YXJlYScpIHx8ICFfdGhpcy5iYWNrc3BhY2UoKSlcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGVsc2UgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghaS5ub0NsaWNrKVxyXG4gICAgICByb290Lm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGkub2ZmKSB7XHJcbiAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvL2lmIChtKDxFbGVtZW50PmUudGFyZ2V0KS5pcygnYnV0dG9uJykpXHJcbiAgICAgICAgICAvLyAgX3RoaXMuc2V0KEMub3BlbiwgZmFsc2UpO1xyXG4gICAgICAgICAgLy9lbHNlXHJcbiAgICAgICAgICBpZiAoIXRoaXMubWVudS5jb250YWlucyhlLnRhcmdldCBhcyBFbGVtZW50KSlcclxuICAgICAgICAgICAgX3RoaXMudG9nZ2xlKFwib3BlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIHJvb3Q7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaW5zZXJ0SXRlbSh2YWx1ZTogVCkge1xyXG4gICAgdmFyIG1vZGVsID0gdGhpcy5pO1xyXG5cclxuICAgIHJldHVybiBnKG1vZGVsLm1lbnVSZW5kZXIodmFsdWUpKVxyXG4gICAgICAvLy5zZXRDbGFzcyhDbHMub3B0aW9uKVxyXG4gICAgICAub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGxldCBrID0gdmFsdWVbbW9kZWwua2V5XTtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKGspO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdDxUIGV4dGVuZHMgT2JqZWN0ID0gYW55LCBLIGV4dGVuZHMgc3RyIHwgbnVtID0gc3RyPiBleHRlbmRzIElTZWxlY3RCYXNlPFQsIEs+IHtcclxuICAkPzogU2VsZWN0PFQsIEs+O1xyXG4gIHZhbHVlPzogSztcclxuICAvKipleGVjdXRlZCB3aGVuIG5vIGRhdGEgaXMgc2VsZWN0ZWQgKi9cclxuICBlbXB0eT86IChsYWJlbDogUykgPT4gdm9pZDtcclxuICBsYWJlbFJlbmRlcj86ICh0aGlzOiB0aGlzLCB2YWx1ZTogSywgY29udGFpbmVyOiBTKSA9PiB2b2lkOy8vQ2hpbGQgfCBQcm9taXNlXHJcbiAgc2VsZWN0ZWQ/OiBUO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdDxUIGV4dGVuZHMgT2JqZWN0ID0gYW55LCBLIGV4dGVuZHMgc3RyIHwgbnVtID0gc3RyPiBleHRlbmRzIFNlbGVjdEJhc2U8SVNlbGVjdDxULCBLPiwgVCwgSywgeyBpbnB1dDogSzsgfSAmIFNlbGVjdEV2ZW50cz4ge1xyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pLnZhbHVlO1xyXG4gIH1cclxuICBwcm90ZWN0ZWQgb25TZXRWYWx1ZSgpIHtcclxuICAgIGxldCBtZCA9IHRoaXMuaSwgbGIgPSB0aGlzLmxhYmVsO1xyXG5cclxuICAgIGlmIChtZC52YWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgIGlmIChtZC5lbXB0eSlcclxuICAgICAgICBtZC5lbXB0eShsYik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZC5sYWJlbFJlbmRlcihtZC52YWx1ZSwgbGIpO1xyXG4gICAgfVxyXG4gICAgbWQuc2V0TWVudShtZC52YWx1ZSk7XHJcbiAgICAvL2lmIChtb2RlbC52YWx1ZSAhPSBudWxsKSB7XHJcbiAgICAvLyAgbGV0IHZpZXcgPSBtb2RlbC5sYWJlbFJlbmRlcihtb2RlbC52YWx1ZSk7XHJcblxyXG4gICAgLy8gIGlmICh2aWV3IGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgLy8gICAgaWYgKHR5cGVvZiB0aGlzLmxhYmVsID09ICdvYmplY3QnKVxyXG4gICAgLy8gICAgICB0aGlzLmxhYmVsXHJcbiAgICAvLyAgICAgICAgLnNldChuZXcgQXdhaXQoeyBzaXplOiBBY2VudFNpemUuc21hbGwgfSlcclxuICAgIC8vICAgICAgICAgIC5jb25maXJtKHZpZXcudGhlbih0aGlzLnNldExhYmVsID0gdGhpcy5zZXRMYWJlbC5iaW5kKHRoaXMpKSkpO1xyXG4gICAgLy8gICAgZWxzZSB7XHJcbiAgICAvLyAgICAgIHZpZXcudGhlbih0aGlzLnNldExhYmVsID0gdGhpcy5zZXRMYWJlbC5iaW5kKHRoaXMpKTtcclxuICAgIC8vICAgIH1cclxuXHJcbiAgICAvLyAgfSBlbHNlXHJcbiAgICAvLyAgICB0aGlzLnNldExhYmVsKHZpZXcpO1xyXG5cclxuICAgIC8vfSBlbHNlIHtcclxuICAgIC8vICBpZiAodHlwZW9mIHRoaXMubGFiZWwgPT0gJ29iamVjdCcpXHJcbiAgICAvLyAgICB0aGlzLmxhYmVsLnNldChtb2RlbC5wbGFjZWhvbGRlcik7XHJcblxyXG4gICAgLy8gIHRoaXMuZW1pdCgnaW5wdXQnLCBudWxsKTtcclxuICAgIC8vICBtb2RlbC5jaGlsZC5zZXRUYWcoZm9jdXNLZXksIG51bGwpO1xyXG4gICAgLy99XHJcbiAgfVxyXG5cclxuICB2aWV3KCkge1xyXG4gICAgbGV0XHJcbiAgICAgIG1vZGVsID0gdGhpcy5pLFxyXG4gICAgICBkaXYgPSBzdXBlci52aWV3KCksXHJcbiAgICAgIG1lbnUgPSBtb2RlbC5tZW51SXRlbXMgfHwgdGhpcy5tZW51O1xyXG5cclxuICAgIGlmICghbW9kZWwuc2V0TWVudSlcclxuICAgICAgbW9kZWwuc2V0TWVudSA9IChrZXkpID0+IHRoaXMub3B0aW9ucy5zZXRUYWcoXCJvcGVuXCIsIGtleSlcclxuXHJcblxyXG4gICAgdGhpcy5vblNldFZhbHVlKCk7XHJcbiAgICB0aGlzLm9uKChlKSA9PiB7XHJcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZSkge1xyXG4gICAgICAgIHRoaXMub25TZXRWYWx1ZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0KFwib3BlblwiLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3B0aW9ucy5iaW5kKG1lbnUsIHtcclxuICAgICAgaW5zZXJ0OiB0aGlzLmluc2VydEl0ZW0uYmluZCh0aGlzKSxcclxuICAgICAgdGFnKHMsIGFjdGl2ZSwgdGFnKSB7XHJcbiAgICAgICAgcy5jbHModGFnLCBhY3RpdmUpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgICAgICBtZW51LnZTY3JvbGwocy5wcm9wKCdvZmZzZXRUb3AnKSAtIG1lbnUucHJvcCgnY2xpZW50SGVpZ2h0JykgLyAyICsgcy5wcm9wKCdjbGllbnRIZWlnaHQnKSAvIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpdjtcclxuICB9XHJcblxyXG4gIGRlbGV0ZSgpIHtcclxuICAgIGlmICh0aGlzLmkudmFsdWUgPT0gbnVsbClcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMuc2V0VmFsdWUobnVsbCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgYmFja3NwYWNlKCkge1xyXG4gICAgaWYgKHRoaXMuaS52YWx1ZSA9PSBudWxsKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IEspIHtcclxuICAgIGlmICh0aGlzLmkudmFsdWUgIT09IHZhbHVlKSB7XHJcbiAgICAgIC8vICYmIChuZXdWYWx1ZSAhPSBudWxsIHx8ICF0aGlzLm1vZGVsLnVuY2xlYXIpXHJcbiAgICAgIHRoaXMuc2V0KHtcclxuICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMub3B0aW9ucy5ieUtleSh2YWx1ZSlcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICAvL3NldExhYmVsKGxhYmVsOiBTKSB7XHJcbiAgLy8gIHZhciBtb2RlbCA9IHRoaXMubW9kZWw7XHJcbiAgLy99XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU11bHRzZWxlY3Q8VCBleHRlbmRzIE9iamVjdCA9IGFueSwgSyBleHRlbmRzIHN0ciB8IG51bSA9IHN0cj4gZXh0ZW5kcyBJU2VsZWN0QmFzZTxULCBLPiB7XHJcbiAgdmFsdWU/OiBBbGlhczxLPjtcclxuICBlbXB0eT86IChlbXB0eTogYm9vbGVhbiwgY29udGFpbmVyPzogUykgPT4gdm9pZDtcclxuICBsYWJlbFJlbmRlcj86ICh0aGlzOiBMPEs+LCB2YWx1ZTogSywgaW5kZXg/OiBudW1iZXIsIGNvbnRhaW5lcj86IFMpID0+IHZvaWQgfCBPbmU7Ly8gQ2hpbGQgfCBQcm9taXNlO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBNdWx0c2VsZWN0PFQgZXh0ZW5kcyBPYmplY3QgPSB7IGtleTogc3RyIH0sIEsgZXh0ZW5kcyBzdHIgfCBudW0gPSBzdHI+IGV4dGVuZHMgU2VsZWN0QmFzZTxJTXVsdHNlbGVjdDxULCBLPiwgVCwgSywgeyBhZGQ6IEtbXSwgcmVtb3ZlOiBLW107IGlucHV0OiBLW10gfSAmIFNlbGVjdEV2ZW50cz4ge1xyXG4gIGNvbnN0cnVjdG9yKG1vZGVsOiBJTXVsdHNlbGVjdDxULCBLPiwgb3B0aW9ucz86IEFycmF5PFQgfCBLPikge1xyXG4gICAgc3VwZXIobW9kZWwsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5vcHRpb25zLmFkZEdyb3VwKEMuc2VsZWN0ZWQpO1xyXG4gICAgbyhtb2RlbC52YWx1ZSwge1xyXG4gICAgICBwYXJzZTogTC5kaXN0aW5jdDxLPigpXHJcbiAgICB9KTtcclxuICAgIC8vLmJpbmRUb0UodGhpcywgXCJ2YWx1ZVwiKTtcclxuICB9XHJcbiAgZ2V0IHZhbHVlKCkgeyByZXR1cm4gdGhpcy5pLnZhbHVlOyB9XHJcbiAgdmlldygpIHtcclxuICAgIGxldFxyXG4gICAgICBpID0gdGhpcy5pLFxyXG4gICAgICB2YWx1ZXMgPSBpLnZhbHVlLFxyXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxyXG4gICAgICBkaXYgPSBzdXBlci52aWV3KCksXHJcbiAgICAgIG1JdGVtcyA9IGkubWVudUl0ZW1zLFxyXG4gICAgICBtZW51ID0gaS5tZW51SXRlbXMgfHwgdGhpcy5tZW51O1xyXG5cclxuICAgIHRoaXMubGFiZWwuY3NzKCdmbGV4V3JhcCcsICd3cmFwJyk7XHJcbiAgICBvcHRpb25zLmJpbmQobWVudSwge1xyXG4gICAgICBpbnNlcnQ6IHRoaXMuaW5zZXJ0SXRlbS5iaW5kKHRoaXMpLFxyXG4gICAgICB0YWcocywgYWN0aXZlLCB0YWcpIHtcclxuICAgICAgICBzLmNscyh0YWcsIGFjdGl2ZSk7XHJcblxyXG4gICAgICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgICAgIG1lbnUudlNjcm9sbChzLmUub2Zmc2V0VG9wIC0gbWVudS5wcm9wKCdjbGllbnRIZWlnaHQnKSAvIDIgKyBzLnByb3AoJ2NsaWVudEhlaWdodCcpIC8gMik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBncm91cHM6IHtcclxuICAgICAgICBmb2N1cyhlLCBhY3RpdmUpIHsgZS5jbHMoQy5vbiwgYWN0aXZlKTsgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZhbHVlcy5iaW5kKG1lbnUsIHtcclxuICAgICAgaW5zZXJ0KGtleSkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IG9wdGlvbnMuaXRlbUluZGV4KGtleSk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9IC0xKVxyXG4gICAgICAgICAgbUl0ZW1zXHJcbiAgICAgICAgICAgIC5jaGlsZChpbmRleClcclxuICAgICAgICAgICAgLmNscyhDLm1haW4pO1xyXG4gICAgICB9LFxyXG4gICAgICByZW1vdmUoa2V5KSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gb3B0aW9ucy5pdGVtSW5kZXgoa2V5KTtcclxuICAgICAgICBpZiAoaW5kZXggIT0gLTEpXHJcbiAgICAgICAgICBtSXRlbXNcclxuICAgICAgICAgICAgLmNoaWxkKGluZGV4KVxyXG4gICAgICAgICAgICAuY2xzKEMubWFpbiwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZhbHVlcy5iaW5kKHRoaXMubGFiZWwsIHtcclxuICAgICAgaW5zZXJ0OiBpLmxhYmVsUmVuZGVyLFxyXG4gICAgICBlbXB0eTogaS5lbXB0eVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpdjtcclxuICB9XHJcblxyXG4gIGRlbGV0ZSgpIHtcclxuICAgIGxldCB2bCA9IHRoaXMuaS52YWx1ZTtcclxuICAgIGlmICghdmwubGVuZ3RoKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVWYWx1ZSh2bFswXSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgYmFja3NwYWNlKCkge1xyXG4gICAgbGV0IHZsID0gdGhpcy5pLnZhbHVlO1xyXG5cclxuICAgIGlmICghdmwubGVuZ3RoKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVWYWx1ZSh2bC56KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUoLi4udmFsdWVzOiBLW10pIHtcclxuICAgIGxldCBtZCA9IHRoaXMuaTtcclxuXHJcbiAgICAvL2xldCBsaXN0ID0gdGhpcy5tb2RlbC52YWx1ZTtcclxuICAgIGlmICh2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgIC8vbGV0IGwgPSBsaXN0Lmxlbmd0aDtcclxuICAgICAgbGV0IGluc2VydGVkOiBLW10gPSBbXTtcclxuXHJcbiAgICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xyXG4gICAgICAgIGlmIChtZC52YWx1ZS5pbmRleE9mKHZhbHVlKSA9PSAtMSkge1xyXG4gICAgICAgICAgaW5zZXJ0ZWQucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLy9tZC52YWx1ZS5wdXNoKC4uLnZhbHVlcyk7XHJcblxyXG4gICAgICBpZiAoaW5zZXJ0ZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIG1kLnZhbHVlLnB1c2goLi4uaW5zZXJ0ZWQpO1xyXG5cclxuICAgICAgICB0aGlzLmVtaXQoJ2FkZCcsIGluc2VydGVkKTtcclxuICAgICAgICB0aGlzLmVtaXQoJ2lucHV0JywgbWQudmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAobWQub3BlbiAmJiB0aGlzLiQpXHJcbiAgICAgICAgICB0aGlzLnNldE1lbnUodGhpcy4kKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVWYWx1ZSguLi52YWx1ZXM6IEtbXSkge1xyXG4gICAgbGV0XHJcbiAgICAgIG1kID0gdGhpcy5pLFxyXG4gICAgICByZW1vdmVkOiBLW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcclxuICAgICAgbGV0IGkgPSBtZC52YWx1ZS5pbmRleE9mKHZhbHVlKTtcclxuICAgICAgaWYgKGkgIT0gLTEpIHtcclxuICAgICAgICBtZC52YWx1ZS5yZW1vdmVBdChpKTtcclxuICAgICAgICByZW1vdmVkLnB1c2godmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlbW92ZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZScsIHJlbW92ZWQpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2lucHV0JywgbWQudmFsdWUpO1xyXG5cclxuICAgICAgaWYgKG1kLm9wZW4gJiYgdGhpcy4kKVxyXG4gICAgICAgIHRoaXMuc2V0TWVudSh0aGlzLiQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL3NldExhYmVsKHZhbHVlOiBUKSB7XHJcbiAgLy8gIHZhciBtb2RlbCA9IHRoaXMubW9kZWw7XHJcbiAgLy8gIHJldHVybiBtb2RlbC5tZW51UmVuZGVyKDxUPnZhbHVlKVxyXG4gIC8vICAgIC5zZXRDbGFzcyhDbHMub3B0aW9uKVxyXG4gIC8vICAgIC5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gIC8vICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAvLyAgICAgIGxldCBrID0gdmFsdWVbbW9kZWwua2V5XTtcclxuICAvLyAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIGspO1xyXG4gIC8vICAgICAgbW9kZWwuY2hpbGQuc2V0VGFnKGZvY3VzS2V5LCBrKTtcclxuICAvLyAgICB9KVxyXG4gIC8vfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9wZW5TZWxlY3Q8VCBleHRlbmRzIE9iamVjdCA9IERpYywgSyBleHRlbmRzIEtleSA9IEtleT4gZXh0ZW5kcyBJU2VsZWN0PFQsIEs+IHtcclxuICBpbnB1dD86ICd0ZXh0JyB8ICdudW1iZXInO1xyXG4gIHZhbGlkPzogKHZhbHVlOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5TZWxlY3Q8VCBleHRlbmRzIE9iamVjdCA9IERpYywgSyBleHRlbmRzIEtleSA9IEtleT4oaW5wdXQ6ICh0aGlzOiBTZWxlY3Q8VCwgSz4sIHZhbHVlKSA9PiBhbnksIGk6IElPcGVuU2VsZWN0PFQsIEs+ID0ge30pIHtcclxuICBsZXQgaXAgPSBpLmxhYmVsID0gZygnaW5wdXQnLCB7IHR5cGU6IGkuaW5wdXQgfSkub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgaW5wdXQuY2FsbChzZWxlY3QsIHRoaXMudmFsdWUpO1xyXG4gIH0pO1xyXG4gIGkubGFiZWxSZW5kZXIgPSAodmFsdWUpID0+IHtcclxuICAgIGlwLnByb3AoJ3ZhbHVlJywgPGFueT52YWx1ZSk7XHJcbiAgfVxyXG4gIGxldCBzZWxlY3QgPSBuZXcgU2VsZWN0PFQsIEs+KGkpO1xyXG4gIHJldHVybiBzZWxlY3Q7XHJcbn0iLCJpbXBvcnQgeyBHcm91cCwgTCwgVGFnIH0gZnJvbSBcIi4vb3JyYXlcIjtcclxuXHJcbnR5cGUgaW50ID0gbnVtYmVyO1xyXG50eXBlIGZsb2F0ID0gbnVtYmVyO1xyXG50eXBlIHN0ciA9IHN0cmluZztcclxudHlwZSBLZXkgPSBzdHIgfCBpbnQ7XHJcbnR5cGUgYm9vbCA9IGJvb2xlYW47XHJcblxyXG5pbnRlcmZhY2UgSVNlbGVjdG9yIHtcclxuICAvKipwaXZvdCB0YWcgKi9cclxuICB0YWc6IHN0cjtcclxuICAvKipzZWxlY3RlZCBsaXN0Ki9cclxuICBncm91cEtleT86IHN0cjtcclxufVxyXG5leHBvcnQgY29uc3QgZW51bSBTZWxlY3Rpb25UcCB7XHJcbiAgc2V0ID0gMCxcclxuICBhZGQgPSAxLFxyXG4gIHJhbmdlID0gMixcclxuICBhZGRSYW5nZSA9IGFkZCB8IHJhbmdlXHJcbn1cclxuY29uc3QgY2xhbXAgPSAodmFsdWU6IGZsb2F0LCBtaW46IGZsb2F0LCBtYXg6IGZsb2F0KSA9PiB2YWx1ZSA8IG1pbiA/IG1pbiA6IHZhbHVlID49IG1heCA/IG1heCAtIDEgOiB2YWx1ZTtcclxuZXhwb3J0IGZ1bmN0aW9uIHBpdm90KGw6IEwsIHRhZzogc3RyKSB7XHJcbiAgbGV0IHQgPSBsLmdldFRhZyh0YWcpO1xyXG4gIHJldHVybiB0ID8gdC5pbmRleCA6IDA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZDxULCBBID0gVD4obDogTDxULCBBPiwga2V5OiBzdHIsIHZhbHVlOiBUIHwgS2V5LCB0cDogU2VsZWN0aW9uVHApIHtcclxuICBsZXQgZyA9IGwuZ1trZXldO1xyXG4gIGxldFxyXG4gICAgdGFnID0gbC5nZXRUYWcoa2V5KSxcclxuICAgIG8gPSB0YWcgPyB0YWcuaW5kZXggOiAtMSxcclxuICAgIG4gPSBsLml0ZW1JbmRleCh2YWx1ZSk7XHJcblxyXG4gIGlmIChvICE9IG4pIHtcclxuICAgIC8vbC5zZXRUYWcoZ3JvdXAsIHZhbHVlKTtcclxuICAgIGwuc2V0VGFnKGtleSwgdmFsdWUpO1xyXG4gICAgaWYgKGcpXHJcbiAgICAgIHN3aXRjaCAodHApIHtcclxuICAgICAgICBjYXNlIFNlbGVjdGlvblRwLnNldDpcclxuICAgICAgICAgIGcuc2V0KFtsW25dXSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNlbGVjdGlvblRwLmFkZDpcclxuICAgICAgICAgIGcucHVzaChsW25dKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU2VsZWN0aW9uVHAucmFuZ2U6XHJcbiAgICAgICAgICBpZiAobyA+IG4pIHtcclxuICAgICAgICAgICAgbGV0IHQgPSBvO1xyXG4gICAgICAgICAgICBvID0gbjtcclxuICAgICAgICAgICAgbiA9IHRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGcuc2V0UmFuZ2Uobywgbik7XHJcbiAgICAgICAgY2FzZSBTZWxlY3Rpb25UcC5hZGRSYW5nZTpcclxuICAgICAgICAgIGlmIChvID4gbikge1xyXG4gICAgICAgICAgICBsZXQgdCA9IG87XHJcbiAgICAgICAgICAgIG8gPSBuO1xyXG4gICAgICAgICAgICBuID0gdFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZy5wdXNoUmFuZ2Uobywgbik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gIH1cclxuICByZXR1cm4gbDtcclxufVxyXG4vKipzZWxlY3QgYWxsIGVsZW1lbnRzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRBbGw8VCwgQSA9IFQ+KGw6IEw8VCwgQT4sIHRhZzogc3RyKSB7XHJcbiAgaWYgKGwubGVuZ3RoKSB7XHJcbiAgICBpZiAoIWwuZ2V0VGFnKHRhZykpXHJcbiAgICAgIGwuc2V0VGFnKHRhZywgbFswXSk7XHJcblxyXG4gICAgbC5nW3RhZ10/LnB1c2hBbGwoKTtcclxuICB9XHJcbiAgcmV0dXJuIGw7XHJcbn1cclxuLyoqIHJlbW92ZSBmb2N1cyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXI8VCwgQSA9IFQ+KGw6IEw8VCwgQT4sIHRhZzogc3RyKSB7XHJcbiAgbC5zZXRUYWcodGFnKTtcclxuICBsLmdbdGFnXT8uc2V0KCk7XHJcbiAgcmV0dXJuIGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbmNoYW5nZTxULCBBID0gVD4obDogTDxULCBBPiwgdGFnOiBzdHIsIGxpc3RlbmVyPzogKHRoaXM6IEw8VCwgQT4sIGFjdGl2ZTogVCwgc2VsZWN0ZWQ/OiBHcm91cDxUPikgPT4gdm9pZCkge1xyXG4gIGxldCBnID0gbC5nW3RhZ107XHJcbiAgZyA/IGcub24oKCkgPT4ge1xyXG4gICAgbGV0IHQgPSBsLmdldFRhZyh0YWcpO1xyXG4gICAgbGlzdGVuZXIuY2FsbChsLCB0ICYmIHQudmFsdWUsIGcpXHJcbiAgfSkgOiBsLm9udGFnKHRhZywgbGlzdGVuZXIpO1xyXG4gIHJldHVybiBsO1xyXG59XHJcbi8qKnNlbGVjdCB0eXBlICovXHJcbmV4cG9ydCBjb25zdCB0cCA9IChjb250cm9sOiBib29sLCBzaGlmdDogYm9vbCkgPT5cclxuICBjb250cm9sID9cclxuICAgIHNoaWZ0ID9cclxuICAgICAgU2VsZWN0aW9uVHAuYWRkUmFuZ2UgOlxyXG4gICAgICBTZWxlY3Rpb25UcC5yYW5nZSA6XHJcbiAgICBzaGlmdCA/XHJcbiAgICAgIFNlbGVjdGlvblRwLnJhbmdlIDpcclxuICAgICAgU2VsZWN0aW9uVHAuc2V0O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmUobDogTCwgdGFnOiBzdHIsIGRpc3RhbmNlOiBpbnQsIHRwOiBTZWxlY3Rpb25UcCkge1xyXG4gIHJldHVybiBhZGQobCwgdGFnLCBsW2NsYW1wKHBpdm90KGwsIHRhZykgKyBkaXN0YW5jZSwgMCwgbC5sZW5ndGgpXSwgdHApO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBtb3ZlUGl2b3QobDogTCwgdGFnOiBzdHIsIGRpc3RhbmNlOiBpbnQsIHJldmVydD86IGJvb2wpIHtcclxuICBsZXQgbGwgPSBsLmxlbmd0aDtcclxuICBpZiAobGwpIHtcclxuICAgIGxldCBpID0gcGl2b3QobCwgdGFnKSArIGRpc3RhbmNlO1xyXG4gICAgbC5zZXRUYWcodGFnLCBsW3JldmVydCA/XHJcbiAgICAgIGkgPCAwID8gbGwgLSAxIDogaSA+PSBsbCA/IDAgOiBpIDpcclxuICAgICAgY2xhbXAoaSwgMCwgbC5sZW5ndGgpXSk7XHJcbiAgfVxyXG4gIHJldHVybiBsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdDxULCBBID0gVD4obDogTDxULCBBPiwga2V5OiBzdHIpIHtcclxuICBsZXQgdGFnOiBUYWc8VD4sIGcgPSBsLmdba2V5XTtcclxuICByZXR1cm4gZyA/IGcuc2xpY2UoKSA6ICgodGFnID0gbC5nZXRUYWcoa2V5KSkgPyBbdGFnLnZhbHVlXSA6IFtdKTtcclxufVxyXG4gIC8vZXhwb3J0IGNsYXNzIFNlbGVjdG9yPFQsIEEgPSBUPiBpbXBsZW1lbnRzIElTZWxlY3RvciB7XHJcbiAgLy8gIHRhZzogc3RyO1xyXG4gIC8vICBncm91cEtleTogc3RyO1xyXG4gIC8vICBnOiBHcm91cDxUPjtcclxuICAvLyAgLy9nZXQgXHJcbiAgLy8gIGNvbnN0cnVjdG9yKHB1YmxpYyBsOiBMPFQsIEE+LCBpOiBJU2VsZWN0b3IgfCBzdHIpIHtcclxuICAvLyAgICBpZiAoaXNTKGkpKSBpID0geyB0YWc6IGkgfTtcclxuICAvLyAgICB0aGlzLnRhZyA9IGkudGFnO1xyXG4gIC8vICAgIHRoaXMuZyA9IGwuZ1t0aGlzLmdyb3VwS2V5ID0gaS5ncm91cEtleSB8fCBpLnRhZ107XHJcbiAgLy8gIH1cclxuXHJcbiAgLy8gIC8vIGhvbWUodHA6IFNlbGVjdFRwKSB7XHJcbiAgLy8gIC8vICAgbGV0IGwgPSB0aGlzLmw7XHJcbiAgLy8gIC8vICAgbC5sZW5ndGggJiYgdGhpcy5hZGQobFswXSwgdHApO1xyXG4gIC8vICAvLyAgIHJldHVybiB0aGlzO1xyXG4gIC8vICAvLyB9XHJcbiAgLy8gIC8vIGVuZCh0cDogU2VsZWN0VHApIHtcclxuICAvLyAgLy8gICBsZXQgbCA9IHRoaXMubDtcclxuICAvLyAgLy8gICBsLmxlbmd0aCAmJiB0aGlzLmFkZChsW2wubGVuZ3RoIC0gMV0sIHRwKTtcclxuICAvLyAgLy8gICByZXR1cm4gdGhpcztcclxuICAvLyAgLy8gfVxyXG4gIC8vICB9XHJcbiAgLy8gIC8vIHBpdm90SG9tZSgpIHsgcmV0dXJuIHRoaXMubW92ZVBpdm90KC10aGlzLmluZGV4KTsgfVxyXG4gIC8vICAvLyBwaXZvdEVuZCgpIHsgcmV0dXJuIHRoaXMubW92ZVBpdm90KHRoaXMubC5sZW5ndGgtdGhpcy5pbmRleCk7IH1cclxuXHJcblxyXG5cclxuICAvLyAgLyoqZ2V0IGxpc3Qgb2Ygc2VsZWN0ZWQgaXRlbXMgKi9cclxuXHJcbiAgLy8gIGhhc0ZvY3VzKHZhbHVlOiBUKSB7XHJcbiAgLy8gICAgbGV0IHsgZ3JvdXBLZXksIGwsIGcgfSA9IHRoaXMsIHRhZzogVGFnPFQ+O1xyXG4gIC8vICAgIHJldHVybiBnID9cclxuICAvLyAgICAgIGcuaW5kZXhPZih2YWx1ZSkgIT0gLTEgOlxyXG4gIC8vICAgICAgISEodGFnID0gbC5nZXRUYWcoZ3JvdXBLZXkpKSAmJiB0YWcudmFsdWUgPT0gdmFsdWU7XHJcbiAgLy8gIH1cclxuICAvL30iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkZvcm0gPSBleHBvcnRzLkZvcm1CYXNlID0gZXhwb3J0cy5lcnJvcnMgPSBleHBvcnRzLmJvdHMgPSBleHBvcnRzLklucHV0ID0gdm9pZCAwO1xyXG5jb25zdCBnYWxob18xID0gcmVxdWlyZShcImdhbGhvXCIpO1xyXG5jb25zdCBpbnV0aWxfMSA9IHJlcXVpcmUoXCJpbnV0aWxcIik7XHJcbmNsYXNzIElucHV0IGV4dGVuZHMgZ2FsaG9fMS5FIHtcclxuICAgIGNvbnN0cnVjdG9yKGkpIHtcclxuICAgICAgICBzdXBlcihpKTtcclxuICAgICAgICBpLnRleHQgfHwgKGkudGV4dCA9IGkua2V5KTtcclxuICAgICAgICBpbnV0aWxfMS5pc1UoaS52YWx1ZSkgJiYgKGkudmFsdWUgPSB0aGlzLmRlZik7XHJcbiAgICB9XHJcbiAgICBnZXQgdmFsdWUoKSB7IHJldHVybiB0aGlzLmkudmFsdWU7IH1cclxuICAgIGdldCBrZXkoKSB7IHJldHVybiB0aGlzLmkua2V5OyB9XHJcbiAgICBnZXQgZGVmKCkgeyByZXR1cm4gaW51dGlsXzEuZGVmKHRoaXMuaS5kZWYsIHRoaXMubnVsbFZhbHVlKTsgfVxyXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldChcInZhbHVlXCIsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGdldCBpbmxpbmUoKSB7IHJldHVybiB0aGlzLmN0eCA/IHRoaXMuY3R4LmlubGluZSA6IGZhbHNlOyB9XHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZGVmKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5udWxsVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaXNEZWYodmFsdWUgPSB0aGlzLnZhbHVlLCBkZWYgPSB0aGlzLmRlZikge1xyXG4gICAgICAgIHJldHVybiBkZWYgPT09IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgaXNOdWxsKHZhbHVlID0gdGhpcy52YWx1ZSkgeyByZXR1cm4gdGhpcy5pc0RlZih0aGlzLnZhbHVlLCB0aGlzLm51bGxWYWx1ZSk7IH1cclxuICAgIG9ic2VydmVWaXNpdGVkKGhhbmRsZXIpIHtcclxuICAgICAgICBnYWxob18xLmcodGhpcykuZm9jdXNvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnZpc2l0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBoYW5kbGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9vZmY7IH1cclxuICAgIHNldCBkaXNhYmxlZChzdGF0ZSkge1xyXG4gICAgICAgIGdhbGhvXzEuZyh0aGlzKS5hdHRyKFwiZGlzYWJsZWRcIiwgdGhpcy5fb2ZmID0gc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZXJyb3Ioc3RhdGUpIHtcclxuICAgICAgICBnYWxob18xLmcodGhpcykuY2xzKFwiX2VcIiwgc3RhdGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZ2V0IHZhbGlkKCkge1xyXG4gICAgICAgIGxldCBlID0gdGhpcy52YWxpZGF0ZSh0aGlzLnZhbHVlKTtcclxuICAgICAgICByZXR1cm4gZS5sZW5ndGggPyBlIDogbnVsbDtcclxuICAgIH1cclxuICAgIHZhbGlkYXRlKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGkgPSB0aGlzLmksIGVycnMgPSBbXTtcclxuICAgICAgICBpZiAoaS5yZXEgJiYgdGhpcy5pc051bGwodmFsdWUpKVxyXG4gICAgICAgICAgICBlcnJzLnB1c2goXCJyZXFcIik7XHJcbiAgICAgICAgcmV0dXJuIGVycnM7XHJcbiAgICB9XHJcbiAgICBzdWJtaXQoZGF0YSkge1xyXG4gICAgICAgIGRhdGFbdGhpcy5pLmtleV0gPSB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IG51bGxWYWx1ZSgpIHsgcmV0dXJuIG51bGw7IH1cclxufVxyXG5leHBvcnRzLklucHV0ID0gSW5wdXQ7XHJcbmV4cG9ydHMuYm90cyA9IHt9O1xyXG5leHBvcnRzLmVycm9ycyA9IHt9O1xyXG5jbGFzcyBGb3JtQmFzZSBleHRlbmRzIGdhbGhvXzEuRSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpLCBpbnB1dHMpIHtcclxuICAgICAgICBzdXBlcihpKTtcclxuICAgICAgICB0aGlzLmVycm9ycyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaW5wdXRzID0gaW5wdXRzLm1hcChpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgIGlucHV0Lm9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlucHV0LnZpc2l0ZWQgJiYgdGhpcy5zZXRFcnJvcnMoaW5wdXQua2V5LCBpbnB1dC52YWxpZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJpbnB1dFwiLCBpbnB1dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpbnB1dC5vYnNlcnZlVmlzaXRlZCgoKSA9PiB0aGlzLnNldEVycm9ycyhpbnB1dC5rZXksIGlucHV0LnZhbGlkKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaS5ib3RzKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBib3Qgb2YgaS5ib3RzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3JjcyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhbGMgPSAoKSA9PiBleHBvcnRzLmJvdHNbYm90LnRwXS5jYWxsKHRoaXMsIHNyY3MsIGJvdCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzcmMgb2YgYm90LnNyY3MpXHJcbiAgICAgICAgICAgICAgICAgICAgc3Jjc1tzcmNdID0gdGhpcy5nZXREYXRhKHNyYywgY2FsYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBpc0RlZigpIHtcclxuICAgICAgICBmb3IgKGxldCBpbnB1dCBvZiB0aGlzLmlucHV0cylcclxuICAgICAgICAgICAgaWYgKCFpbnB1dC5pc0RlZigpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaW5wdXQoa2V5KSB7IHJldHVybiB0aGlzLmlucHV0cy5maW5kKGYgPT4gZi5rZXkgPT0ga2V5KTsgfVxyXG4gICAgc2V0RXJyb3JzKGtleSwgZXJyb3JzKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcnNba2V5XSA9IGVycm9ycztcclxuICAgICAgICB0aGlzLmlucHV0KGtleSk/LmVycm9yKCk7XHJcbiAgICB9XHJcbiAgICB2YWxpZChvbWl0LCBmb2N1cyA9ICFvbWl0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5wdXQgb2YgdGhpcy5pbnB1dHMpIHtcclxuICAgICAgICAgICAgbGV0IHYgPSBpbnB1dC52YWxpZDtcclxuICAgICAgICAgICAgdGhpcy5zZXRFcnJvcnMoaW5wdXQua2V5LCBpbnB1dC52YWxpZCk7XHJcbiAgICAgICAgICAgIGlmICh2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9jdXMpXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuJC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZm9jdXMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5wdXQgb2YgdGhpcy5pbnB1dHMpXHJcbiAgICAgICAgICAgIGlmICghaW5wdXQuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRlZigpIHtcclxuICAgICAgICBsZXQgciA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IHsga2V5LCBkZWYgfSBvZiB0aGlzLmlucHV0cylcclxuICAgICAgICAgICAgcltrZXldID0gZGVmO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG4gICAgc2V0IGRlZih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRzLmZvckVhY2goaSA9PiBpLnNldChcImRlZlwiLCB2YWx1ZVtpLmtleV0pKTtcclxuICAgIH1cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGZpZWxkIG9mIHRoaXMuaW5wdXRzKVxyXG4gICAgICAgICAgICBmaWVsZC5yZXNldCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZmllbGQgb2YgdGhpcy5pbnB1dHMpXHJcbiAgICAgICAgICAgIGZpZWxkLmNsZWFyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBkYXRhKGVkaXRlZCwgcmVxdWlyZWQpIHtcclxuICAgICAgICBsZXQgaW5wdXRzID0gdGhpcy5pbnB1dHM7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pLmhpZGRlbik7XHJcbiAgICAgICAgZm9yIChsZXQgaW5wdXQgb2YgZWRpdGVkID8gaW5wdXRzLmZpbHRlcihpID0+IChyZXF1aXJlZCAmJiBpLmkucmVxKSB8fCAhaS5pc0RlZigpKSA6IGlucHV0cylcclxuICAgICAgICAgICAgaW5wdXQuc3VibWl0KHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBmb3JtRGF0YShlZGl0ZWQsIHJlcXVpcmVkKSB7XHJcbiAgICAgICAgbGV0IHIgPSBuZXcgRm9ybURhdGEoKSwgZGF0YSA9IHRoaXMuZGF0YShlZGl0ZWQsIHJlcXVpcmVkKTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSlcclxuICAgICAgICAgICAgci5hcHBlbmQoa2V5LCBkYXRhW2tleV0pO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YShrZXksIG9udXBkYXRlKSB7XHJcbiAgICAgICAgbGV0IGkgPSB0aGlzLmksIHRhcmdldCA9IHRoaXMuaW5wdXRzLmZpbmQoZiA9PiBmLmtleSA9PSBrZXkpO1xyXG4gICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgb251cGRhdGUgJiYgdGFyZ2V0Lm9uKG9udXBkYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaS5oaWRkZW4gJiYga2V5IGluIGkuaGlkZGVuKVxyXG4gICAgICAgICAgICB0YXJnZXQgPSBpLmhpZGRlbltrZXldO1xyXG4gICAgICAgIGVsc2UgaWYgKGkubWV0YSAmJiBrZXkgaW4gaS5tZXRhKVxyXG4gICAgICAgICAgICB0YXJnZXQgPSBpLm1ldGFba2V5XTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRhcmdldCA9IGkucGFyZW50ID8gaS5wYXJlbnQuZ2V0RGF0YShrZXksIG9udXBkYXRlKSA6IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuICAgIHJlbmRlckVycm9ycygpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXMuZXJyb3JzLCByZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdCkge1xyXG4gICAgICAgICAgICBsZXQgaSA9IHRoaXMuaW5wdXQoa2V5KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZXJyb3Igb2YgdFtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICAodHlwZW9mIGVycm9yID09IFwic3RyaW5nXCIpICYmIChlcnJvciA9IHsgdHA6IGVycm9yIH0pO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZ2FsaG9fMS5kaXYoMCwgW1xyXG4gICAgICAgICAgICAgICAgICAgIGkgJiYgW2kuaS50ZXh0LCBcIjogXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHMuZXJyb3JzW2Vycm9yLnRwXSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLmluZm8gJiYgZ2FsaG9fMS5nKFwic3ViXCIsIDAsIGVycm9yLmluZm8pLFxyXG4gICAgICAgICAgICAgICAgXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Gb3JtQmFzZSA9IEZvcm1CYXNlO1xyXG5jbGFzcyBGb3JtIGV4dGVuZHMgRm9ybUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoaSwgaW5wdXRzKSB7XHJcbiAgICAgICAgc3VwZXIoaSwgaW5wdXRzKTtcclxuICAgICAgICB0aGlzLm9uKCdpbnB1dCcsIChpbnB1dCkgPT4gc2V0VGltZW91dCgoKSA9PiBnYWxob18xLmcoaW5wdXQpLnBhcmVudCgpLnRyeShwID0+IHAuYXR0cihcImVkaXRlZFwiLCAhaW5wdXQuaXNEZWYpKSkpO1xyXG4gICAgICAgIHRoaXMuX2Vycm9yRGl2ID0gaS5lcnJvckRpdiB8fCBnYWxob18xLmRpdihcIl9lXCIpO1xyXG4gICAgfVxyXG4gICAgdmlldygpIHtcclxuICAgICAgICBsZXQgeyBpbnRlcm46IGksIGxhYmVsIH0gPSB0aGlzLmk7XHJcbiAgICAgICAgcmV0dXJuIGdhbGhvXzEuZyhpID8gJ2RpdicgOiAnZm9ybScsIFwiZm9ybVwiLCBbXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRzLm1hcChpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IGlucHV0LmksIHIsIGxiID0gZ2FsaG9fMS5nKCdsYWJlbCcsIDAsIGkudGV4dCkucHJvcHMoeyBodG1sRm9yOiBpLmtleSwgdGl0bGU6IGkudGV4dCB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChpLm91dGxpbmUpXHJcbiAgICAgICAgICAgICAgICAgICAgciA9IGdhbGhvXzEuZGl2KFwiaVwiLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxiLCBpLCBnYWxob18xLmRpdignaW5mJylcclxuICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByID0gZ2FsaG9fMS5kaXYoXCJpXCIsIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGIuY3NzKCd3aWR0aCcsIGAke2xhYmVsfSVgKSwgaSwgISFpLnJlcSAmJiBnYWxob18xLmcoJ3NwYW4nLCBcInJlcVwiLCAnKicpLFxyXG4gICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB0aGlzLl9lcnJvckRpdlxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlubGluZSgpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICBzZXRFcnJvcnMoa2V5LCBlcnJvcnMpIHtcclxuICAgICAgICBzdXBlci5zZXRFcnJvcnMoa2V5LCBlcnJvcnMpO1xyXG4gICAgICAgIHRoaXMuX2Vycm9yRGl2LnNldCh0aGlzLnJlbmRlckVycm9ycygpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkZvcm0gPSBGb3JtO1xyXG5Gb3JtLmRlZmF1bHQgPSB7XHJcbiAgICBsYWJlbDogNDBcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybS5qcy5tYXAiLCJpbXBvcnQgdGltZSwgeyBjcmVhdGUgYXMgdGltZUNyZWF0ZSB9IGZyb20gXCIuL3RpbWVcIjtcclxuaW1wb3J0IHNjYWxhciwgeyBpbkZ1bGwgfSBmcm9tIFwiLi9zY2FsYXJcIjtcclxuZXhwb3J0IHsgdGltZSwgc2NhbGFyIH07XHJcbmV4cG9ydCBsZXQgbG9jYWxlO1xyXG5leHBvcnQgbGV0IGxvY2FsZXMgPSB7fTtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsZSh2YWx1ZSkge1xyXG4gICAgZm9yIChsZXQga2V5IG9mICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gW3ZhbHVlXSA6IHZhbHVlKSlcclxuICAgICAgICBpZiAoa2V5IGluIGxvY2FsZXMpIHtcclxuICAgICAgICAgICAgbG9jYWxlID0gbG9jYWxlc1trZXldO1xyXG4gICAgICAgICAgICBpbkZ1bGwuc3BsaWNlKDAsIGluRnVsbC5sZW5ndGgsIC4uLmxvY2FsZS5pbkZ1bGwpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgdGhyb3cgYGxvY2FsZShzKSAnJHt2YWx1ZX0nIG5vdCBmb3VuZGA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShrZXksIGxvY2FsZSkge1xyXG4gICAgbG9jYWxlc1trZXldID0gbG9jYWxlO1xyXG59XHJcbmFkZExvY2FsZSgncHQnLCB7XHJcbiAgICBpbkZ1bGw6IFtcclxuICAgICAgICB7IHY6IDAsIGV4cDogKCkgPT4gJ3plcm8nIH0sXHJcbiAgICAgICAgeyB2OiAxLCBleHA6IChfLCBvKSA9PiBvLmcgPT0gJ2YnID8gJ3VtYScgOiAndW0nIH0sXHJcbiAgICAgICAgeyB2OiAyLCBleHA6IChfLCBvKSA9PiBvLmcgPT0gJ2YnID8gJ2R1YXMnIDogJ2RvaXMnIH0sXHJcbiAgICAgICAgeyB2OiAzLCBleHA6ICgpID0+ICd0csOqcycgfSxcclxuICAgICAgICB7IHY6IDQsIGV4cDogKCkgPT4gJ3F1YXRybycgfSxcclxuICAgICAgICB7IHY6IDUsIGV4cDogKCkgPT4gJ2NpbmNvJyB9LFxyXG4gICAgICAgIHsgdjogNiwgZXhwOiAoKSA9PiAnc2VpcycgfSxcclxuICAgICAgICB7IHY6IDcsIGV4cDogKCkgPT4gJ3NldGUnIH0sXHJcbiAgICAgICAgeyB2OiA4LCBleHA6ICgpID0+ICdvaXRvJyB9LFxyXG4gICAgICAgIHsgdjogOSwgZXhwOiAoKSA9PiAnbm92ZScgfSxcclxuICAgICAgICB7IHY6IDEwLCBleHA6ICgpID0+ICdkZXonIH0sXHJcbiAgICAgICAgeyB2OiAxMSwgZXhwOiAoKSA9PiAnb256ZScgfSxcclxuICAgICAgICB7IHY6IDEyLCBleHA6ICgpID0+ICdkb3plJyB9LFxyXG4gICAgICAgIHsgdjogMTMsIGV4cDogKCkgPT4gJ3RyZXplJyB9LFxyXG4gICAgICAgIHsgdjogMTQsIGV4cDogKCkgPT4gJ3F1YXRvcnplJyB9LFxyXG4gICAgICAgIHsgdjogMTUsIGV4cDogKCkgPT4gJ3F1aW56ZScgfSxcclxuICAgICAgICB7IHY6IDE2LCBleHA6ICgpID0+ICdkZXphc3NlaXMnIH0sXHJcbiAgICAgICAgeyB2OiAxNywgZXhwOiAoKSA9PiAnZGV6YXNzZXRlJyB9LFxyXG4gICAgICAgIHsgdjogMTgsIGV4cDogKCkgPT4gJ2Rlem9pdG8nIH0sXHJcbiAgICAgICAgeyB2OiAxOSwgZXhwOiAoKSA9PiAnZGV6YW5vdmUnIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2OiAyMCwgZXhwKG4sIG8sIGkpIHtcclxuICAgICAgICAgICAgICAgIGxldCByO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChNYXRoLmZsb29yKG4gLyAxMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSAndmludGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSAndHJpbnRhJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByID0gJ3F1YXJlbnRhJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByID0gJ2NpbnF1ZW50YSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgciA9ICdzZXNzZW50YSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgciA9ICdzZXRlbnRhJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByID0gJ29pdGVudGEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSAnbm92ZW50YSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHQgPSBuICUgMTA7XHJcbiAgICAgICAgICAgICAgICBpZiAodClcclxuICAgICAgICAgICAgICAgICAgICByICs9ICcgZSAnICsgby5jKHQsIG8sIGkgLSAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHY6IDEwMCwgZXhwOiAobiwgbywgaSkgPT4gbiA9PSAxMDAgPyAnY2VtJyA6ICdjZW50byBlICcgKyBvLmMobiAtIDEwMCwgbywgaSAtIDEpIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2OiAyMDAsIGV4cChuLCBvLCBpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcjtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoTWF0aC5mbG9vcihuIC8gMTAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgciA9ICdkdXplbnRvcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgciA9ICd0cmV6ZW50b3MnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSAncXVhdHJvY2VudG9zJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByID0gJ3F1aW5oZW50b3MnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSAnc2Vpc2NlbnRvJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByID0gJ3NldGVjZW50b3MnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSAnb2l0b2NlbnRvcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgciA9ICdub3ZlY2VudG9zJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgdCA9IG4gJSAxMDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodClcclxuICAgICAgICAgICAgICAgICAgICByICs9ICcgZSAnICsgby5jKHQsIG8sIGkgLSAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHY6IDEwMDAsIGV4cDogKG4sIG8sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0MSA9IE1hdGguZmxvb3IobiAvIDEwMDApLCByID0gdDEgPT0gMSA/ICdtaWwnIDogby5jKHQxLCBvLCBpIC0gMSkgKyAnIG1pbCcsIHQyID0gbiAlIDEwMDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodDIpXHJcbiAgICAgICAgICAgICAgICAgICAgciArPSAnLCAnICsgby5jKHQyLCBvLCBpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2OiAxMDAwMDAwLCBleHA6IChuLCBvLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdDEgPSBNYXRoLmZsb29yKG4gLyAxMDAwMDAwKSwgciA9IHQxID09IDEgPyAndW0gbWlsaMOjbycgOiBvLmModDEsIG8sIGkgLSAxKSArICcgbWlsaMO1ZXMnLCB0MiA9IG4gJSAxMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQyKVxyXG4gICAgICAgICAgICAgICAgICAgIHIgKz0gJywgJyArIG8uYyh0MiwgbywgaSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdjogMTAwMDAwMDAwMDAwMCwgZXhwOiAobiwgbywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHQxID0gTWF0aC5mbG9vcihuIC8gMTAwMDAwMDAwMDAwMCksIHIgPSB0MSA9PSAxID8gJ3VtIGJpbGjDo28nIDogby5jKHQxLCBvLCBpIC0gMSkgKyAnIGJpbGjDtWVzJywgdDIgPSBuICUgMTAwMDAwMDAwMDAwMDtcclxuICAgICAgICAgICAgICAgIGlmICh0MilcclxuICAgICAgICAgICAgICAgICAgICByICs9ICcsICcgKyBvLmModDIsIG8sIGkgLSAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIF1cclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZtdCh2YWx1ZSwgZXhwLCBvcHRzKSB7XHJcbiAgICBpZiAodHlwZW9mIG9wdHMgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGV4cCA9IGV4cCArIFwiO1wiICsgb3B0cztcclxuICAgICAgICBvcHRzID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZSA9PSBudWxsICYmIG9wdHMgJiYgb3B0cy5kZWYpXHJcbiAgICAgICAgcmV0dXJuIG9wdHMuZGVmO1xyXG4gICAgaWYgKGV4cCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIGxldCBzcGxpdCA9IGV4cC5zcGxpdCgnOycsIDMpLCB0eXBlID0gc3BsaXRbMF0sIGZvcm1hdCA9IHNwbGl0Lmxlbmd0aCA+IDEgPyBzcGxpdFsxXSA6IHR5cGU7XHJcbiAgICBpZiAodmFsdWUgPT0gbnVsbCAmJiBzcGxpdC5sZW5ndGggPT0gMylcclxuICAgICAgICB2YWx1ZSA9IHNwbGl0WzJdO1xyXG4gICAgaWYgKHNwbGl0Lmxlbmd0aCA9PSAxIHx8IHR5cGUgPT0gJ2EnKSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICAgICAgY2FzZSAnYmlnaW50JzpcclxuICAgICAgICAgICAgICAgIHR5cGUgPSAnbic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgICAgICAgICAgIGlmIChpc05hTih2YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICduJztcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnZCc7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICd0JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOlxyXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdkJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdib29sZWFuJzpcclxuICAgICAgICAgICAgICAgIHR5cGUgPSAnYic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHR5cGUgPSAndCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3dpdGNoIChzcGxpdFswXSkge1xyXG4gICAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICAgICAgICByZXR1cm4gdGltZUNyZWF0ZSh2YWx1ZSkuZm10KGZvcm1hdCk7XHJcbiAgICAgICAgY2FzZSAnbic6XHJcbiAgICAgICAgICAgIHJldHVybiBzY2FsYXIodmFsdWUpLmZtdChmb3JtYXQsIG9wdHMpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucXVlcnkgPSBleHBvcnRzLnF1ZXJ5SW5PYmogPSBleHBvcnRzLlF1ZXJ5QWxnb3JpdGhtID0gZXhwb3J0cy5hZGRGb3JtdWxhcyA9IGV4cG9ydHMuY29tcGlsZUV4cHJlc3Npb24gPSBleHBvcnRzLmNhbGNBbGwgPSBleHBvcnRzLnBhcnNlID0gZXhwb3J0cy5jbG9uZSA9IGV4cG9ydHMuYW5hbGl6ZSA9IGV4cG9ydHMuZGVmaW5lVHJhbnNsYXRlRnVuYyA9IGV4cG9ydHMuT2JqZWN0VmFsID0gZXhwb3J0cy5UZXh0VmFsdWUgPSBleHBvcnRzLlZhclZhbCA9IGV4cG9ydHMuTnVtYlZhbCA9IGV4cG9ydHMuQ2FsbFZhbCA9IGV4cG9ydHMuRm5WYWwgPSBleHBvcnRzLkdyb3VwVmFsID0gZXhwb3J0cy5TaWduYWxWYWwgPSBleHBvcnRzLkRpY1ZhbCA9IGV4cG9ydHMuVGVybmFyeU9wID0gZXhwb3J0cy5OdWxsZWRPcCA9IGV4cG9ydHMuUG93T3AgPSBleHBvcnRzLkdyZWF0ZXJPcCA9IGV4cG9ydHMuR3JlYXRlckVxdWFsT3AgPSBleHBvcnRzLk9yT3AgPSBleHBvcnRzLkxlc3NPcCA9IGV4cG9ydHMuRGlmT3AgPSBleHBvcnRzLkxlc0VxdWFsT3AgPSBleHBvcnRzLkNvbmNhdE9wID0gZXhwb3J0cy5BbmRPcCA9IGV4cG9ydHMuRXF1YWxPcCA9IGV4cG9ydHMuRGl2T3AgPSBleHBvcnRzLlN1Yk9wID0gZXhwb3J0cy5UaW1lT3AgPSBleHBvcnRzLlN1bU9wID0gZXhwb3J0cy5PcFZhbCA9IGV4cG9ydHMuUGFyc2VFcnJvciA9IGV4cG9ydHMuRXJyb3IgPSB2b2lkIDA7XHJcbnZhciBFcnJvcjtcclxuKGZ1bmN0aW9uIChFcnJvcikge1xyXG4gICAgRXJyb3JbRXJyb3JbXCJ2YXJOb3RGb3VuZFwiXSA9IDEwXSA9IFwidmFyTm90Rm91bmRcIjtcclxufSkoRXJyb3IgPSBleHBvcnRzLkVycm9yIHx8IChleHBvcnRzLkVycm9yID0ge30pKTtcclxuY2xhc3MgUGFyc2VFcnJvciB7XHJcbn1cclxuZXhwb3J0cy5QYXJzZUVycm9yID0gUGFyc2VFcnJvcjtcclxuY2xhc3MgT3BWYWwge1xyXG4gICAgZ2V0IG9wKCkgeyByZXR1cm4gJ29wJzsgfVxyXG4gICAgdmFsaWQoKSB7IHJldHVybiAhIXRoaXMuYjsgfVxyXG4gICAgcHVzaChleHByZXNzaW9uKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYilcclxuICAgICAgICAgICAgdGhyb3cgXCJpbnZhbGlkIGV4cHJlc3Npb25cIjtcclxuICAgICAgICB0aGlzLmIgPSBleHByZXNzaW9uO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7IHJldHVybiB0aGlzLnRvSlNPTigpOyB9XHJcbiAgICB2YXJzKHZhcnMgPSBbXSkge1xyXG4gICAgICAgIHRoaXMuYS52YXJzKHZhcnMpO1xyXG4gICAgICAgIHRoaXMuYi52YXJzKHZhcnMpO1xyXG4gICAgICAgIHJldHVybiB2YXJzO1xyXG4gICAgfVxyXG4gICAgdHJhbnNsYXRlKGRpcikge1xyXG4gICAgICAgIGxldCB0ID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykpO1xyXG4gICAgICAgIHQuYSA9IHRoaXMuYS50cmFuc2xhdGUoZGlyKTtcclxuICAgICAgICB0LmIgPSB0aGlzLmIudHJhbnNsYXRlKGRpcik7XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICBhbmFsaXplKGNoZWNrKSB7XHJcbiAgICAgICAgbGV0IHQgPSBjaGVjayh0aGlzLmEpO1xyXG4gICAgICAgIGlmICh0KVxyXG4gICAgICAgICAgICB0aGlzLmEgPSB0O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5hLmFuYWxpemUoY2hlY2spO1xyXG4gICAgICAgIGlmICh0ID0gY2hlY2sodGhpcy5iKSlcclxuICAgICAgICAgICAgdGhpcy5iID0gdDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuYi5hbmFsaXplKGNoZWNrKTtcclxuICAgIH1cclxuICAgICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcclxuICAgICAgICB5aWVsZCB0aGlzO1xyXG4gICAgICAgIHlpZWxkKiB0aGlzLmE7XHJcbiAgICAgICAgeWllbGQqIHRoaXMuYjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk9wVmFsID0gT3BWYWw7XHJcbmNsYXNzIFN1bU9wIGV4dGVuZHMgT3BWYWwge1xyXG4gICAgZ2V0IGxldmVsKCkgeyByZXR1cm4gNDsgfVxyXG4gICAgY2FsYyhvcHRzKSB7XHJcbiAgICAgICAgbGV0IGEgPSB0aGlzLmEuY2FsYyhvcHRzKSwgYiA9IHRoaXMuYi5jYWxjKG9wdHMpO1xyXG4gICAgICAgIGlmIChvcHRzLnRyeSkge1xyXG4gICAgICAgICAgICBpZiAoIWEpXHJcbiAgICAgICAgICAgICAgICBhID0gMDtcclxuICAgICAgICAgICAgaWYgKCFiKVxyXG4gICAgICAgICAgICAgICAgYiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgYSA9PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgYSA9IHBhcnNlRmxvYXQoYSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiID09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICBiID0gcGFyc2VGbG9hdChiKTtcclxuICAgICAgICByZXR1cm4gYSArIGI7XHJcbiAgICB9XHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYSArICcrJyArIHRoaXMuYjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlN1bU9wID0gU3VtT3A7XHJcblN1bU9wLm9wID0gJysnO1xyXG5jbGFzcyBUaW1lT3AgZXh0ZW5kcyBPcFZhbCB7XHJcbiAgICBnZXQgbGV2ZWwoKSB7IHJldHVybiA1OyB9XHJcbiAgICBjYWxjKG9wdHMpIHtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuYS5jYWxjKG9wdHMpLCBiID0gdGhpcy5iLmNhbGMob3B0cyk7XHJcbiAgICAgICAgaWYgKG9wdHMudHJ5KSB7XHJcbiAgICAgICAgICAgIGlmICghYSlcclxuICAgICAgICAgICAgICAgIGEgPSAwO1xyXG4gICAgICAgICAgICBpZiAoIWIpXHJcbiAgICAgICAgICAgICAgICBiID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGEgKiBiO1xyXG4gICAgfVxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmEgKyAnKicgKyB0aGlzLmI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UaW1lT3AgPSBUaW1lT3A7XHJcblRpbWVPcC5vcCA9ICcqJztcclxuY2xhc3MgU3ViT3AgZXh0ZW5kcyBPcFZhbCB7XHJcbiAgICBnZXQgbGV2ZWwoKSB7IHJldHVybiA0OyB9XHJcbiAgICBjYWxjKG9wdHMpIHtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuYS5jYWxjKG9wdHMpLCBiID0gdGhpcy5iLmNhbGMob3B0cyk7XHJcbiAgICAgICAgaWYgKG9wdHMudHJ5KSB7XHJcbiAgICAgICAgICAgIGlmICghYSlcclxuICAgICAgICAgICAgICAgIGEgPSAwO1xyXG4gICAgICAgICAgICBpZiAoIWIpXHJcbiAgICAgICAgICAgICAgICBiID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGEgLSBiO1xyXG4gICAgfVxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmEgKyAnLScgKyB0aGlzLmI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TdWJPcCA9IFN1Yk9wO1xyXG5TdWJPcC5vcCA9ICctJztcclxuY2xhc3MgRGl2T3AgZXh0ZW5kcyBPcFZhbCB7XHJcbiAgICBnZXQgbGV2ZWwoKSB7IHJldHVybiA1OyB9XHJcbiAgICBjYWxjKG9wdHMpIHtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuYS5jYWxjKG9wdHMpLCBiID0gdGhpcy5iLmNhbGMob3B0cyk7XHJcbiAgICAgICAgaWYgKG9wdHMudHJ5KSB7XHJcbiAgICAgICAgICAgIGlmICghYSlcclxuICAgICAgICAgICAgICAgIGEgPSAwO1xyXG4gICAgICAgICAgICBpZiAoIWIpXHJcbiAgICAgICAgICAgICAgICBiID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGIgPT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGEgLyBiO1xyXG4gICAgfVxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmEgKyAnLycgKyB0aGlzLmI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5EaXZPcCA9IERpdk9wO1xyXG5EaXZPcC5vcCA9ICcvJztcclxuY2xhc3MgRXF1YWxPcCBleHRlbmRzIE9wVmFsIHtcclxuICAgIGdldCBsZXZlbCgpIHsgcmV0dXJuIDI7IH1cclxuICAgIGNhbGMob3B0cykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmEuY2FsYyhvcHRzKSA9PSB0aGlzLmIuY2FsYyhvcHRzKTtcclxuICAgIH1cclxuICAgIHRvSlNPTigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hICsgJz0nICsgdGhpcy5iO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRXF1YWxPcCA9IEVxdWFsT3A7XHJcbkVxdWFsT3Aub3AgPSAnPSc7XHJcbmNsYXNzIEFuZE9wIGV4dGVuZHMgT3BWYWwge1xyXG4gICAgZ2V0IGxldmVsKCkgeyByZXR1cm4gMTsgfVxyXG4gICAgY2FsYyhvcHRzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYS5jYWxjKG9wdHMpICYmIHRoaXMuYi5jYWxjKG9wdHMpO1xyXG4gICAgfVxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmEgKyAnJiYnICsgdGhpcy5iO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQW5kT3AgPSBBbmRPcDtcclxuQW5kT3Aub3AgPSAnJiYnO1xyXG5jbGFzcyBDb25jYXRPcCBleHRlbmRzIE9wVmFsIHtcclxuICAgIGdldCBsZXZlbCgpIHsgcmV0dXJuIDM7IH1cclxuICAgIGNhbGMob3B0cykge1xyXG4gICAgICAgIGxldCBhID0gdGhpcy5hLmNhbGMob3B0cyksIGIgPSB0aGlzLmIuY2FsYyhvcHRzKTtcclxuICAgICAgICByZXR1cm4gKGEgPT0gbnVsbCA/ICcnIDogYSArICcnKSArIChiID09IG51bGwgPyAnJyA6IGIgKyAnJyk7XHJcbiAgICB9XHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYSArICcmJyArIHRoaXMuYjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvbmNhdE9wID0gQ29uY2F0T3A7XHJcbkNvbmNhdE9wLm9wID0gJyYnO1xyXG5jbGFzcyBMZXNFcXVhbE9wIGV4dGVuZHMgT3BWYWwge1xyXG4gICAgZ2V0IGxldmVsKCkgeyByZXR1cm4gMjsgfVxyXG4gICAgY2FsYyhvcHRzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYS5jYWxjKG9wdHMpIDw9IHRoaXMuYi5jYWxjKG9wdHMpO1xyXG4gICAgfVxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmEgKyAnPD0nICsgdGhpcy5iO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTGVzRXF1YWxPcCA9IExlc0VxdWFsT3A7XHJcbkxlc0VxdWFsT3Aub3AgPSAnPD0nO1xyXG5jbGFzcyBEaWZPcCBleHRlbmRzIE9wVmFsIHtcclxuICAgIGdldCBsZXZlbCgpIHsgcmV0dXJuIDI7IH1cclxuICAgIGNhbGMob3B0cykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmEuY2FsYyhvcHRzKSAhPSB0aGlzLmIuY2FsYyhvcHRzKTtcclxuICAgIH1cclxuICAgIHRvSlNPTigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hICsgJzw+JyArIHRoaXMuYjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkRpZk9wID0gRGlmT3A7XHJcbkRpZk9wLm9wID0gJzw+JztcclxuY2xhc3MgTGVzc09wIGV4dGVuZHMgT3BWYWwge1xyXG4gICAgZ2V0IGxldmVsKCkgeyByZXR1cm4gMjsgfVxyXG4gICAgY2FsYyhvcHRzKSB7XHJcbiAgICAgICAgbGV0IGEgPSB0aGlzLmEuY2FsYyhvcHRzKSwgYiA9IHRoaXMuYi5jYWxjKG9wdHMpO1xyXG4gICAgICAgIHJldHVybiBhID09IG51bGwgfHwgYiA9PSBudWxsID8gZmFsc2UgOiBhIDwgYjtcclxuICAgIH1cclxuICAgIHRvSlNPTigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hICsgJzwnICsgdGhpcy5iO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTGVzc09wID0gTGVzc09wO1xyXG5MZXNzT3Aub3AgPSAnPCc7XHJcbmNsYXNzIE9yT3AgZXh0ZW5kcyBPcFZhbCB7XHJcbiAgICBnZXQgbGV2ZWwoKSB7IHJldHVybiAxOyB9XHJcbiAgICBjYWxjKG9wdHMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hLmNhbGMob3B0cykgfHwgdGhpcy5iLmNhbGMob3B0cyk7XHJcbiAgICB9XHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYSArICd8fCcgKyB0aGlzLmI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Pck9wID0gT3JPcDtcclxuY2xhc3MgR3JlYXRlckVxdWFsT3AgZXh0ZW5kcyBPcFZhbCB7XHJcbiAgICBnZXQgbGV2ZWwoKSB7IHJldHVybiAyOyB9XHJcbiAgICBjYWxjKG9wdHMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hLmNhbGMob3B0cykgPj0gdGhpcy5iLmNhbGMob3B0cyk7XHJcbiAgICB9XHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYSArICc+PScgKyB0aGlzLmI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5HcmVhdGVyRXF1YWxPcCA9IEdyZWF0ZXJFcXVhbE9wO1xyXG5HcmVhdGVyRXF1YWxPcC5vcCA9ICc+PSc7XHJcbmNsYXNzIEdyZWF0ZXJPcCBleHRlbmRzIE9wVmFsIHtcclxuICAgIGdldCBsZXZlbCgpIHsgcmV0dXJuIDI7IH1cclxuICAgIGNhbGMob3B0cykge1xyXG4gICAgICAgIGxldCBhID0gdGhpcy5hLmNhbGMob3B0cyksIGIgPSB0aGlzLmIuY2FsYyhvcHRzKTtcclxuICAgICAgICByZXR1cm4gYSA9PSBudWxsIHx8IGIgPT0gbnVsbCA/IGZhbHNlIDogYSA+IGI7XHJcbiAgICB9XHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYSArICc+JyArIHRoaXMuYjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkdyZWF0ZXJPcCA9IEdyZWF0ZXJPcDtcclxuR3JlYXRlck9wLm9wID0gJz4nO1xyXG5jbGFzcyBQb3dPcCBleHRlbmRzIE9wVmFsIHtcclxuICAgIGdldCBsZXZlbCgpIHsgcmV0dXJuIDY7IH1cclxuICAgIGNhbGMob3B0cykge1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5hLmNhbGMob3B0cyksIGIgPSB0aGlzLmIuY2FsYyhvcHRzKTtcclxuICAgICAgICBpZiAob3B0cy50cnkpIHtcclxuICAgICAgICAgICAgaWYgKCFhKVxyXG4gICAgICAgICAgICAgICAgYSA9IDA7XHJcbiAgICAgICAgICAgIGlmICghYilcclxuICAgICAgICAgICAgICAgIGIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aC5wb3coYSwgYik7XHJcbiAgICB9XHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYSArICdeJyArIHRoaXMuYjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBvd09wID0gUG93T3A7XHJcbmNsYXNzIE51bGxlZE9wIGV4dGVuZHMgT3BWYWwge1xyXG4gICAgZ2V0IGxldmVsKCkgeyByZXR1cm4gNzsgfVxyXG4gICAgY2FsYyhvcHRzKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLmEuY2FsYyhvcHRzKSwgYiA9IHRoaXMuYi5jYWxjKG9wdHMpO1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgYSA9PSAnbnVtYmVyJyA/XHJcbiAgICAgICAgICAgIGlzTmFOKGEpID8gYiA6IGEgOlxyXG4gICAgICAgICAgICBhID09IG51bGwgPyBiIDogYTtcclxuICAgIH1cclxuICAgIHRvSlNPTigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hICsgJz8/JyArIHRoaXMuYjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk51bGxlZE9wID0gTnVsbGVkT3A7XHJcbmNsYXNzIFRlcm5hcnlPcCBleHRlbmRzIE9wVmFsIHtcclxuICAgIGdldCBsZXZlbCgpIHsgcmV0dXJuIDE7IH1cclxuICAgIGNhbGMob3B0cykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmEuY2FsYyhvcHRzKSA/XHJcbiAgICAgICAgICAgIHRoaXMuYi5jYWxjKG9wdHMpIDpcclxuICAgICAgICAgICAgdGhpcy5jLmNhbGMob3B0cyk7XHJcbiAgICB9XHJcbiAgICBwdXNoKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYilcclxuICAgICAgICAgICAgaWYgKHRoaXMuYylcclxuICAgICAgICAgICAgICAgIHRocm93IG51bGw7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYyA9IHZhbHVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5iID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB2YWxpZCgpIHsgcmV0dXJuICEhdGhpcy5jOyB9XHJcbiAgICB0b0pTT04oKSB7IHJldHVybiB0aGlzLmEgKyAnPycgKyB0aGlzLmIgKyAnOicgKyB0aGlzLmM7IH1cclxuICAgIHRvU3RyaW5nKCkgeyByZXR1cm4gdGhpcy50b0pTT04oKTsgfVxyXG4gICAgdmFycyh2YXJzID0gW10pIHtcclxuICAgICAgICB0aGlzLmEudmFycyh2YXJzKTtcclxuICAgICAgICB0aGlzLmIudmFycyh2YXJzKTtcclxuICAgICAgICB0aGlzLmMudmFycyh2YXJzKTtcclxuICAgICAgICByZXR1cm4gdmFycztcclxuICAgIH1cclxuICAgICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcclxuICAgICAgICB5aWVsZCB0aGlzO1xyXG4gICAgICAgIHlpZWxkKiB0aGlzLmE7XHJcbiAgICAgICAgeWllbGQqIHRoaXMuYjtcclxuICAgICAgICB5aWVsZCogdGhpcy5jO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVGVybmFyeU9wID0gVGVybmFyeU9wO1xyXG5jbGFzcyBEaWNWYWwge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICBnZXQgb3AoKSB7IHJldHVybiAnZGljJzsgfVxyXG4gICAgY2FsYyhvcHRzKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmRhdGEpXHJcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdGhpcy5kYXRhW2tleV0uY2FsYyhvcHRzKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgdmFsaWQoKSB7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgdHJhbnNsYXRlKGRpcikge1xyXG4gICAgICAgIGxldCBuZCA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGsgaW4gdGhpcy5kYXRhKVxyXG4gICAgICAgICAgICBuZFtrXSA9IHRoaXMuZGF0YVtrXS50cmFuc2xhdGUoZGlyKTtcclxuICAgICAgICByZXR1cm4gbmV3IERpY1ZhbCh0aGlzLmRhdGEpO1xyXG4gICAgfVxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGFuYWxpemUoY2hlY2spIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gdGhpcy5kYXRhW2tleV0sIHUgPSBjaGVjayh0KTtcclxuICAgICAgICAgICAgaWYgKHUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFba2V5XSA9IHU7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHQuYW5hbGl6ZShjaGVjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xyXG4gICAgICAgIHlpZWxkIHRoaXM7XHJcbiAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLmRhdGEpXHJcbiAgICAgICAgICAgIHlpZWxkKiB0aGlzLmRhdGFba107XHJcbiAgICB9XHJcbiAgICB2YXJzKHZhcnMpIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5kYXRhKVxyXG4gICAgICAgICAgICB0aGlzLmRhdGFba2V5XS52YXJzKHZhcnMpO1xyXG4gICAgICAgIHJldHVybiB2YXJzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRGljVmFsID0gRGljVmFsO1xyXG5jbGFzcyBTaWduYWxWYWwge1xyXG4gICAgY29uc3RydWN0b3Ioc2lnbmFsKSB7XHJcbiAgICAgICAgdGhpcy5zaWduYWwgPSBzaWduYWw7XHJcbiAgICB9XHJcbiAgICBnZXQgb3AoKSB7IHJldHVybiAnc2lnJzsgfVxyXG4gICAgY2FsYyhvcHRzKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnNpZ25hbCkge1xyXG4gICAgICAgICAgICBjYXNlIFwiLVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC10aGlzLnZhbHVlLmNhbGMob3B0cyk7XHJcbiAgICAgICAgICAgIGNhc2UgXCIhXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMudmFsdWUuY2FsYyhvcHRzKTtcclxuICAgICAgICAgICAgY2FzZSBcIitcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiArdGhpcy52YWx1ZS5jYWxjKG9wdHMpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhbGlkKCkgeyByZXR1cm4gISF0aGlzLnZhbHVlOyB9XHJcbiAgICBwdXNoKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpXHJcbiAgICAgICAgICAgIHRocm93IFwiaW52YWxpZCBleHByZXNzaW9uXCI7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7IHJldHVybiB0aGlzLnRvSlNPTigpOyB9XHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmFsICsgdGhpcy52YWx1ZTtcclxuICAgIH1cclxuICAgIHZhcnModmFycyA9IFtdKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZS52YXJzKHZhcnMpO1xyXG4gICAgICAgIHJldHVybiB2YXJzO1xyXG4gICAgfVxyXG4gICAgdHJhbnNsYXRlKGRpcikge1xyXG4gICAgICAgIGxldCB0ID0gbmV3IFNpZ25hbFZhbCh0aGlzLnNpZ25hbCk7XHJcbiAgICAgICAgdC52YWx1ZSA9IHRoaXMudmFsdWUudHJhbnNsYXRlKGRpcik7XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICBhbmFsaXplKGNoZWNrKSB7XHJcbiAgICAgICAgbGV0IHQgPSBjaGVjayh0aGlzLnZhbHVlKTtcclxuICAgICAgICBpZiAodClcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHQ7XHJcbiAgICB9XHJcbiAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XHJcbiAgICAgICAgeWllbGQgdGhpcztcclxuICAgICAgICB5aWVsZCogdGhpcy52YWx1ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNpZ25hbFZhbCA9IFNpZ25hbFZhbDtcclxuY2xhc3MgR3JvdXBWYWwge1xyXG4gICAgZ2V0IG9wKCkgeyByZXR1cm4gJ2cnOyB9XHJcbiAgICB2YWxpZCgpIHsgcmV0dXJuICEhdGhpcy52YWx1ZTsgfVxyXG4gICAgY2FsYyhvcHRzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuY2FsYyhvcHRzKTtcclxuICAgIH1cclxuICAgIHB1c2godmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZSlcclxuICAgICAgICAgICAgdGhyb3cgXCJpbnZhbGlkIGV4cHJlc3Npb25cIjtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHsgcmV0dXJuIHRoaXMudG9KU09OKCk7IH1cclxuICAgIHRvSlNPTigpIHtcclxuICAgICAgICByZXR1cm4gJygnICsgdGhpcy52YWx1ZSArICcpJztcclxuICAgIH1cclxuICAgIGFuYWxpemUoY2hlY2spIHtcclxuICAgICAgICBsZXQgdCA9IGNoZWNrKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIGlmICh0KVxyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdDtcclxuICAgIH1cclxuICAgIHZhcnModmFycyA9IFtdKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZS52YXJzKHZhcnMpO1xyXG4gICAgICAgIHJldHVybiB2YXJzO1xyXG4gICAgfVxyXG4gICAgdHJhbnNsYXRlKGRpcikge1xyXG4gICAgICAgIGxldCB0ID0gbmV3IEdyb3VwVmFsKCk7XHJcbiAgICAgICAgdC52YWx1ZSA9IHRoaXMudmFsdWUudHJhbnNsYXRlKGRpcik7XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XHJcbiAgICAgICAgeWllbGQgdGhpcztcclxuICAgICAgICB5aWVsZCogdGhpcy52YWx1ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkdyb3VwVmFsID0gR3JvdXBWYWw7XHJcbmNsYXNzIEZuVmFsIHtcclxuICAgIGNvbnN0cnVjdG9yKGFyZ3MsIGJvZHkpIHtcclxuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XHJcbiAgICB9XHJcbiAgICBnZXQgb3AoKSB7IHJldHVybiAnZm4nOyB9XHJcbiAgICB2YWxpZCgpIHsgcmV0dXJuICEhdGhpcy5ib2R5OyB9XHJcbiAgICBwdXNoKHZhbCkge1xyXG4gICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBWYXJWYWwpXHJcbiAgICAgICAgICAgIHRoaXMuYXJncy5wdXNoKHZhbC52YWx1ZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aHJvdyBudWxsO1xyXG4gICAgfVxyXG4gICAgY2FsYyhvcHRzKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzLmFyZ3M7XHJcbiAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvZHkuY2FsYyh7XHJcbiAgICAgICAgICAgICAgICBmdW5jczogb3B0cy5mdW5jcyxcclxuICAgICAgICAgICAgICAgIG9iamVjdDogb3B0cy5vYmplY3QsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25hbDogb3B0cy5vcHRpb25hbCxcclxuICAgICAgICAgICAgICAgIHRyeTogb3B0cy50cnksXHJcbiAgICAgICAgICAgICAgICB2YXJzKGZpZWxkLCBpc09iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHQuaW5kZXhPZihmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdHMudmFycylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0cy52YXJzID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRzLnZhcnMoZmllbGQsIGlzT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0cy52YXJzW2ZpZWxkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmdzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvSlNPTigpO1xyXG4gICAgfVxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICAgIHJldHVybiAnKCcgKyB0aGlzLmFyZ3Muam9pbignLCcpICsgJyk9PicgKyB0aGlzLmJvZHk7XHJcbiAgICB9XHJcbiAgICB2YXJzKHZhcnMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2R5LnZhcnModmFycyk7XHJcbiAgICB9XHJcbiAgICB0cmFuc2xhdGUoZGlyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGblZhbCh0aGlzLmFyZ3MsIHRoaXMuYm9keS50cmFuc2xhdGUoZGlyKSk7XHJcbiAgICB9XHJcbiAgICBhbmFsaXplKGNoZWNrKSB7XHJcbiAgICAgICAgbGV0IHQgPSBjaGVjayh0aGlzLmJvZHkpO1xyXG4gICAgICAgIGlmICh0KVxyXG4gICAgICAgICAgICB0aGlzLmJvZHkgPSB0O1xyXG4gICAgfVxyXG4gICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xyXG4gICAgICAgIHlpZWxkIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5GblZhbCA9IEZuVmFsO1xyXG5jbGFzcyBDYWxsVmFsIHtcclxuICAgIGNvbnN0cnVjdG9yKGZ1bmMsIGFyZ3MgPSBbXSkge1xyXG4gICAgICAgIHRoaXMuZnVuYyA9IGZ1bmM7XHJcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcclxuICAgIH1cclxuICAgIGdldCBvcCgpIHsgcmV0dXJuICdjYWxsJzsgfVxyXG4gICAgY2FsYyhvcHRzKSB7XHJcbiAgICAgICAgbGV0IGFyZ3MgPSB0aGlzLmFyZ3MubWFwKGEgPT4gYS5jYWxjKG9wdHMpKSwgbmFtZSA9IG9wdHMudW5jYXNlID8gdGhpcy5mdW5jLnRvTG93ZXJDYXNlKCkgOiB0aGlzLmZ1bmMsIGYgPSB0eXBlb2Ygb3B0cy5mdW5jcyA9PSBcImZ1bmN0aW9uXCI7XHJcbiAgICAgICAgaWYgKGYpIHtcclxuICAgICAgICAgICAgbGV0IHYgPSBvcHRzLmZ1bmNzKG5hbWUsIGFyZ3MpO1xyXG4gICAgICAgICAgICBpZiAodiAhPT0gdm9pZCAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmb3JtdWxhID0gKCFmICYmIG9wdHMuZnVuY3MpICYmIG9wdHMuZnVuY3NbbmFtZV0gfHwgKG5hbWUgaW4gZm9ybXVsYXMgPyBmb3JtdWxhc1tuYW1lXS5jYWxjIDogbnVsbCk7XHJcbiAgICAgICAgaWYgKCFmb3JtdWxhKVxyXG4gICAgICAgICAgICB0aHJvdyB7IG1zZzogXCJub3RfZm91bmRcIiwgbmFtZSB9O1xyXG4gICAgICAgIHJldHVybiBmb3JtdWxhLmFwcGx5KG9wdHMsIGFyZ3MpO1xyXG4gICAgfVxyXG4gICAgdmFsaWQoKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICBwdXNoKGV4cHJlc3Npb24pIHtcclxuICAgICAgICB0aGlzLmFyZ3MucHVzaChleHByZXNzaW9uKTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkgeyByZXR1cm4gdGhpcy50b0pTT04oKTsgfVxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZ1bmMgKyAnKCcgKyB0aGlzLmFyZ3Muam9pbignLCcpICsgJyknO1xyXG4gICAgfVxyXG4gICAgdmFycyh2YXJzID0gW10pIHtcclxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMuYXJncylcclxuICAgICAgICAgICAgcC52YXJzKHZhcnMpO1xyXG4gICAgICAgIHJldHVybiB2YXJzO1xyXG4gICAgfVxyXG4gICAgdHJhbnNsYXRlKGRpcikge1xyXG4gICAgICAgIGxldCB0ID0gbmV3IENhbGxWYWwodHJhbnNsYXRlKHRoaXMuZnVuYywgZGlyKSk7XHJcbiAgICAgICAgdC5hcmdzID0gdGhpcy5hcmdzLm1hcChhID0+IGEudHJhbnNsYXRlKGRpcikpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgYW5hbGl6ZShjaGVjaykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBhID0gdGhpcy5hcmdzOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdCA9IGFbaV0sIHUgPSBjaGVjayh0KTtcclxuICAgICAgICAgICAgaWYgKHUpXHJcbiAgICAgICAgICAgICAgICBhW2ldID0gdTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdC5hbmFsaXplKGNoZWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XHJcbiAgICAgICAgeWllbGQgdGhpcztcclxuICAgICAgICBmb3IgKGxldCB0IG9mIHRoaXMuYXJncylcclxuICAgICAgICAgICAgeWllbGQqIHQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5DYWxsVmFsID0gQ2FsbFZhbDtcclxuY2xhc3MgTnVtYlZhbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGdldCBvcCgpIHsgcmV0dXJuICduJzsgfVxyXG4gICAgYXN5bmMgY2FsY0FzeW5jKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgdmFsaWQoKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICBjYWxjKCkge1xyXG4gICAgICAgIHJldHVybiArdGhpcy52YWx1ZTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkgeyByZXR1cm4gdGhpcy50b0pTT04oKTsgfVxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICAgIHJldHVybiArdGhpcy52YWx1ZSArICcnO1xyXG4gICAgfVxyXG4gICAgdmFycyh2YXJzID0gW10pIHtcclxuICAgICAgICByZXR1cm4gdmFycztcclxuICAgIH1cclxuICAgIGFuYWxpemUoXykgeyB9XHJcbiAgICB0cmFuc2xhdGUoZGlyKSB7IHJldHVybiB0aGlzOyB9XHJcbiAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XHJcbiAgICAgICAgeWllbGQgdGhpcztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk51bWJWYWwgPSBOdW1iVmFsO1xyXG5jbGFzcyBWYXJWYWwge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgb3AoKSB7IHJldHVybiAndic7IH1cclxuICAgIHZhbGlkKCkgeyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgY2FsYyhvcHRzKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvcHRzLnZhcnMgPT0gJ2Z1bmN0aW9uJyA/IG9wdHMudmFycyh0aGlzLnZhbHVlKSA6IG9wdHMudmFyc1t0aGlzLnZhbHVlXTtcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkgeyByZXR1cm4gdGhpcy50b0pTT04oKTsgfVxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgdmFycyh2YXJzID0gW10pIHtcclxuICAgICAgICB2YXJzLnB1c2godGhpcy52YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhcnM7XHJcbiAgICB9XHJcbiAgICB0cmFuc2xhdGUoZGlyKSB7IHJldHVybiB0aGlzOyB9XHJcbiAgICBhbmFsaXplKF8pIHsgfVxyXG4gICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xyXG4gICAgICAgIHlpZWxkIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5WYXJWYWwgPSBWYXJWYWw7XHJcbmNsYXNzIFRleHRWYWx1ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgY2hhckNvZGUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5jaGFyQ29kZSA9IGNoYXJDb2RlO1xyXG4gICAgfVxyXG4gICAgZ2V0IG9wKCkgeyByZXR1cm4gJ3QnOyB9XHJcbiAgICBzdGF0aWMgY3JlYXRlKHRleHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRleHRWYWx1ZSh0ZXh0LCAnXCInLmNoYXJDb2RlQXQoMCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNoYXIoKSB7IHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMuY2hhckNvZGUpOyB9XHJcbiAgICB2YWxpZCgpIHsgcmV0dXJuIHRydWU7IH1cclxuICAgIGNhbGMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYFwiJHt0aGlzLnZhbHVlLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKX1cImA7XHJcbiAgICB9XHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIGAnJHt0aGlzLnZhbHVlLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKX0nYDtcclxuICAgIH1cclxuICAgIHZhcnModmFycyA9IFtdKSB7IHJldHVybiB2YXJzOyB9XHJcbiAgICB0cmFuc2xhdGUoZGlyKSB7IHJldHVybiB0aGlzOyB9XHJcbiAgICBhbmFsaXplKF8pIHsgfVxyXG4gICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xyXG4gICAgICAgIHlpZWxkIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UZXh0VmFsdWUgPSBUZXh0VmFsdWU7XHJcbmNsYXNzIE9iamVjdFZhbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihsZXZlbHMpIHtcclxuICAgICAgICB0aGlzLmxldmVscyA9IGxldmVscztcclxuICAgIH1cclxuICAgIGdldCBvcCgpIHsgcmV0dXJuICdvJzsgfVxyXG4gICAgdmFsaWQoKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICBjYWxjKG9wdHMpIHtcclxuICAgICAgICBsZXQgaSA9IDEsIGwgPSB0aGlzLmxldmVscywgcmVzdWx0ID0gdHlwZW9mIG9wdHMudmFycyA9PSAnZnVuY3Rpb24nID8gb3B0cy52YXJzKGxbMF0sIHRydWUpIDogb3B0cy52YXJzW2xbMF1dO1xyXG4gICAgICAgIGZvciAoOyBpIDwgbC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0W2xbaV1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7IHJldHVybiB0aGlzLnRvSlNPTigpOyB9XHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGV2ZWxzLmpvaW4oJy4nKTtcclxuICAgIH1cclxuICAgIHZhcnModmFycyA9IFtdKSB7XHJcbiAgICAgICAgdmFycy5wdXNoKHRoaXMubGV2ZWxzWzBdKTtcclxuICAgICAgICByZXR1cm4gdmFycztcclxuICAgIH1cclxuICAgIHRyYW5zbGF0ZShkaXIpIHsgcmV0dXJuIHRoaXM7IH1cclxuICAgIGFuYWxpemUoXykgeyB9XHJcbiAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XHJcbiAgICAgICAgeWllbGQgdGhpcztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk9iamVjdFZhbCA9IE9iamVjdFZhbDtcclxudmFyIHRyYW5zbGF0ZTtcclxuZnVuY3Rpb24gZGVmaW5lVHJhbnNsYXRlRnVuYyhmdW5jKSB7XHJcbiAgICB0cmFuc2xhdGUgPSBmdW5jO1xyXG59XHJcbmV4cG9ydHMuZGVmaW5lVHJhbnNsYXRlRnVuYyA9IGRlZmluZVRyYW5zbGF0ZUZ1bmM7XHJcbmZ1bmN0aW9uIGFuYWxpemUodmFsLCBjaGVjaykge1xyXG4gICAgbGV0IHQgPSBjaGVjayh2YWwpO1xyXG4gICAgaWYgKHQpXHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB2YWwuYW5hbGl6ZShjaGVjayk7XHJcbiAgICByZXR1cm4gdmFsO1xyXG59XHJcbmV4cG9ydHMuYW5hbGl6ZSA9IGFuYWxpemU7XHJcbmZ1bmN0aW9uIGNsb25lKHZhbCkge1xyXG4gICAgcmV0dXJuIG5ldyBQYXJzZXIodmFsLnRvU3RyaW5nKCkpLnBhcnNlKCk7XHJcbn1cclxuZXhwb3J0cy5jbG9uZSA9IGNsb25lO1xyXG5mdW5jdGlvbiBoYXModmFsdWUsIGNoZWNrKSB7XHJcbiAgICByZXR1cm4gKHZhbHVlICYgY2hlY2spID09PSBjaGVjaztcclxufVxyXG5jbGFzcyBQYXJzZXIge1xyXG4gICAgY29uc3RydWN0b3IoZXhwLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBbXTtcclxuICAgICAgICB0aGlzLm1vZGUgPSA4MTkzO1xyXG4gICAgICAgIGlmICghZXhwKVxyXG4gICAgICAgICAgICB0aGlzLmVycm9yKCdleHByZXNzaW9uIGlzIG51bGwnKTtcclxuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHA7XHJcbiAgICB9XHJcbiAgICBwb3BTdG9yZWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0b3JlZClcclxuICAgICAgICAgICAgdGhyb3cgXCJpbnZhbGlkIGV4cHJlc3Npb25cIjtcclxuICAgICAgICB2YXIgdGVtcCA9IHRoaXMuc3RvcmVkO1xyXG4gICAgICAgIHRoaXMuc3RvcmVkID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gdGVtcDtcclxuICAgIH1cclxuICAgIHNldFN0b3JlZCh2YWx1ZSkge1xyXG4gICAgICAgIGxldCBzID0gdGhpcy5zY29wZSwgdCA9IHNbcy5sZW5ndGggLSAxXTtcclxuICAgICAgICBpZiAodCAmJiB0IGluc3RhbmNlb2YgU2lnbmFsVmFsKSB7XHJcbiAgICAgICAgICAgIHMucG9wKCk7XHJcbiAgICAgICAgICAgIHQudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdmFsdWUgPSB0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0b3JlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0TW9kZShtb2RlKSB7XHJcbiAgICAgICAgbGV0IG9sZCA9IHRoaXMubW9kZTtcclxuICAgICAgICBpZiAoaGFzKG1vZGUsIDQwOTYpKSB7XHJcbiAgICAgICAgICAgIGlmICghaGFzKG9sZCwgMTYzODQpKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaGFzKG1vZGUsIDMyNzY4KSkge1xyXG4gICAgICAgICAgICBpZiAoIWhhcyhvbGQsIDgxOTMpICYmICFoYXMob2xkLCA0MDk2KSlcclxuICAgICAgICAgICAgICAgIHRocm93IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGhhcyhtb2RlLCA4MTkyKSkge1xyXG4gICAgICAgICAgICBpZiAoaGFzKG9sZCwgMTYzODQpKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgMztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaGFzKG1vZGUsIDE2Mzg0KSkge1xyXG4gICAgICAgICAgICBpZiAoaGFzKG9sZCwgNDA5NikgfHwgaGFzKG9sZCwgMzI3NjgpKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcclxuICAgIH1cclxuICAgIGFwcGVuZE9wKF9uZXcpIHtcclxuICAgICAgICB2YXIgcyA9IHRoaXMuc2NvcGUsIG9sZCA9IHNbcy5sZW5ndGggLSAxXSwgc3RvcmVkID0gdGhpcy5wb3BTdG9yZWQoKTtcclxuICAgICAgICBpZiAob2xkIGluc3RhbmNlb2YgT3BWYWwpIHtcclxuICAgICAgICAgICAgaWYgKF9uZXcubGV2ZWwgPiBvbGQubGV2ZWwpIHtcclxuICAgICAgICAgICAgICAgIF9uZXcuYSA9IHN0b3JlZDtcclxuICAgICAgICAgICAgICAgIHMucHVzaChfbmV3KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9sZC5iID0gc3RvcmVkO1xyXG4gICAgICAgICAgICAgICAgX25ldy5hID0gb2xkO1xyXG4gICAgICAgICAgICAgICAgc1tzLmxlbmd0aCAtIDFdID0gX25ldztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgX25ldy5hID0gc3RvcmVkO1xyXG4gICAgICAgICAgICBzLnB1c2goX25ldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGFyc2VTdHJpbmcoaSwgZXhwLCBjaGFyKSB7XHJcbiAgICAgICAgbGV0IHRlbXAxID0gXCJcIiwgbGV0dGVyID0gZXhwLmNoYXJDb2RlQXQoaSArIDEpO1xyXG4gICAgICAgIHdoaWxlIChsZXR0ZXIgIT0gY2hhciB8fCAoKGxldHRlciA9IGV4cC5jaGFyQ29kZUF0KCsraSArIDEpKSA9PSBjaGFyKSkge1xyXG4gICAgICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKGxldHRlcikpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBcImVycm9yXCI7XHJcbiAgICAgICAgICAgIHRlbXAxICs9IGV4cFtpICsgMV07XHJcbiAgICAgICAgICAgIGxldHRlciA9IGV4cC5jaGFyQ29kZUF0KCsraSArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldE1vZGUoMjQ1NzgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RvcmVkKG5ldyBUZXh0VmFsdWUodGVtcDEsIGNoYXIpKTtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgIH1cclxuICAgIHBhcnNlVmFsKGNoYXIsIGV4cCwgaSkge1xyXG4gICAgICAgIGxldCBzdG9yZWRUZXh0ID0gZXhwW2ldLCBsID0gZXhwLmxlbmd0aDtcclxuICAgICAgICBpZiAoKGNoYXIgPiA0NyAmJiBjaGFyIDwgNTgpIHx8IGNoYXIgPT0gNDYpIHtcclxuICAgICAgICAgICAgY2hhciA9IGV4cC5jaGFyQ29kZUF0KGkgKyAxKTtcclxuICAgICAgICAgICAgd2hpbGUgKCgoY2hhciA+IDQ3ICYmIGNoYXIgPCA1OCkgfHwgY2hhciA9PSA0NikgJiYgaSA8IGwpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JlZFRleHQgKz0gZXhwW2kgKyAxXTtcclxuICAgICAgICAgICAgICAgIGNoYXIgPSBleHAuY2hhckNvZGVBdCgrK2kgKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JlZChuZXcgTnVtYlZhbChzdG9yZWRUZXh0KSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TW9kZSgyNDU3Nyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKChjaGFyID4gOTYgJiYgY2hhciA8IDEyMykgfHwgKGNoYXIgPiA2NCAmJiBjaGFyIDwgOTEpIHx8IGNoYXIgPT09IDk1IHx8IGNoYXIgPT09IDY0KSB7XHJcbiAgICAgICAgICAgIGxldCBvYmo7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGNoYXIgPSBleHAuY2hhckNvZGVBdChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoKChjaGFyID4gOTYgJiYgY2hhciA8IDEyMykgfHwgKGNoYXIgPiA2NCAmJiBjaGFyIDwgOTEpIHx8IChjaGFyID4gNDcgJiYgY2hhciA8IDU4KSB8fCBjaGFyID09IDk1KSAmJiBpIDwgbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlZFRleHQgKz0gZXhwW2kgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICBjaGFyID0gZXhwLmNoYXJDb2RlQXQoKytpICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PSA0MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TW9kZSg4MTk5KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3BlLnB1c2gobmV3IENhbGxWYWwoc3RvcmVkVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09IDQ2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnB1c2goc3RvcmVkVGV4dCkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAob2JqID0gW3N0b3JlZFRleHRdKTtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZWRUZXh0ID0gZXhwW2kgKz0gMl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmoucHVzaChzdG9yZWRUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0b3JlZChuZXcgT2JqZWN0VmFsKG9iaikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TW9kZSgyNDYyNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RvcmVkKG5ldyBWYXJWYWwoc3RvcmVkVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TW9kZSgyNDU5Mik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhyb3cgYGludmFsaWQgZXhwcmVzc2lvbiBjaGFyYWN0ZXIgZm91bmQgJyR7ZXhwW2ldfSdgO1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgfVxyXG4gICAgcGFyc2VEaWMoKSB7XHJcbiAgICB9XHJcbiAgICBpc0NhbGwoZXhwLCBpKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbCA9IGV4cC5sZW5ndGggLSAzOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChleHBbaV0gPT0gJygnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoZXhwW2ldID09ICcpJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBleHBbaSArIDFdID09ICc9JyAmJiBleHBbaSArIDJdID09ICc+JztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcGFyc2VOdW1iKGV4cCwgaSkge1xyXG4gICAgICAgIGxldCByID0gJycsIGNoYXIgPSBleHAuY2hhckNvZGVBdChpKTtcclxuICAgICAgICBpZiAoY2hhciA9PSA0NSkge1xyXG4gICAgICAgICAgICByID0gJy0nO1xyXG4gICAgICAgICAgICBjaGFyID0gZXhwLmNoYXJDb2RlQXQoKytpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICg7IGkgPCBleHAubGVuZ3RoICYmICgoY2hhciA+IDQ3ICYmIGNoYXIgPCA1OCkgfHwgY2hhciA9PSA0Nik7IGNoYXIgPSBleHAuY2hhckNvZGVBdCgrK2kpKVxyXG4gICAgICAgICAgICByICs9IGV4cFtpXTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuICAgIHBhcnNlVmFyKGV4cCwgaSkge1xyXG4gICAgICAgIGxldCByID0gJyc7XHJcbiAgICAgICAgZm9yIChsZXQgY2hhciA9IGV4cC5jaGFyQ29kZUF0KGkpOyBpIDwgZXhwLmxlbmd0aCAmJiAoKGNoYXIgPiA5NiAmJiBjaGFyIDwgMTIzKSB8fCAoY2hhciA+IDY0ICYmIGNoYXIgPCA5MSkgfHwgKGNoYXIgPiA0NyAmJiBjaGFyIDwgNTgpIHx8IGNoYXIgPT0gOTUpOyBjaGFyID0gZXhwLmNoYXJDb2RlQXQoKytpKSkge1xyXG4gICAgICAgICAgICByICs9IGV4cFtpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcbiAgICBlcnJvcihlcnJvciwgaW5kZXgpIHtcclxuICAgICAgICB0aHJvdyB7XHJcbiAgICAgICAgICAgIGV4cHJlc3Npb246IHRoaXMuZXhwcmVzc2lvbixcclxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3JcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAganVtcFNwYWNlKGV4cCwgaSkge1xyXG4gICAgICAgIHdoaWxlIChleHBbaV0gPT0gJyAnKVxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICB9XHJcbiAgICBwYXJzZSgpIHtcclxuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzLnNjb3BlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLm9wdGlvbnMuZnJvbSB8fCAwLCBleHAgPSB0aGlzLmV4cHJlc3Npb247IGkgPCBleHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSBleHAuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgc3dpdGNoIChjaGFyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDMyOlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdG9yZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRPcChuZXcgU3VtT3AoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TW9kZSg0NjE0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TW9kZSgzMjc2OSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnB1c2gobmV3IFNpZ25hbFZhbChcIitcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDU6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kT3AobmV3IFN1Yk9wKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE1vZGUoNDYxOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE1vZGUoMzI3NzApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5wdXNoKG5ldyBTaWduYWxWYWwoXCItXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQyOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kT3AobmV3IFRpbWVPcCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE1vZGUoNDYyNik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ3OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kT3AobmV3IERpdk9wKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TW9kZSg0NjQyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzM6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFwiaW52YWxpZCBleHByZXNzaW9uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE1vZGUoMzI3NjkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5wdXNoKG5ldyBTaWduYWxWYWwoXCIhXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEyNDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXhwLmNoYXJDb2RlQXQoaSArIDEpID09PSAxMjQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZE9wKG5ldyBPck9wKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE1vZGUoNjE1NCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJvcGVyYXRvciBub3QgZm91bmQga25vd2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleHAuY2hhckNvZGVBdChpICsgMSkgPT09IDM4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRPcChuZXcgQW5kT3AoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TW9kZSg2MTUwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kT3AobmV3IENvbmNhdE9wKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE1vZGUoNDIyNik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxMjM6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGljID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB0aGlzLmp1bXBTcGFjZShleHAsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhwWysraV0gIT0gJ30nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHRoaXMucGFyc2VWYXIoZXhwLCBpKSB8fCB0aGlzLnBhcnNlTnVtYihleHAsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGVtcC5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoJ2Vycm9yIHBhcnNlJywgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSArPSB0ZW1wLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gdGhpcy5qdW1wU3BhY2UoZXhwLCBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhwW2krK10gIT0gJzonKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdcIjpcIiBub3QgZm91bmQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm9keSA9IG5ldyBQYXJzZXIoZXhwLCB7IGZyb206IGksIHN1YjogdHJ1ZSwgd2FybjogdGhpcy5vcHRpb25zLndhcm4gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGljW3RlbXBdID0gYm9keS5wYXJzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGkgPSBib2R5LmVuZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhwW2ldID09ICd9JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gZXhwLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcigndW5leHBlY3RlZCBlbmQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhwW2ldICE9ICcsJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcignXCIsXCIgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB0aGlzLmp1bXBTcGFjZShleHAsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0b3JlZChuZXcgRGljVmFsKGRpYykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE1vZGUoMjQ1ODQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTI1OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kID0gaSAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBleHAubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoJ21hcyBmaW0gcXVlIGluaWNpbycsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2MzpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHAuY2hhckNvZGVBdChpICsgMSkgPT09IDYzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZE9wKG5ldyBOdWxsZWRPcCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TW9kZSg2MTU0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kT3AobmV3IFRlcm5hcnlPcCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TW9kZSg0MzU4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTg6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE1vZGUoNDM2Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdG9yZWQgPSB0aGlzLnBvcFN0b3JlZCgpLCBiZWZvcmUgPSBzY29wZVtzY29wZS5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCEoYmVmb3JlIGluc3RhbmNlb2YgVGVybmFyeU9wKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmUucHVzaChzdG9yZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVkID0gYmVmb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlID0gc2NvcGVbc2NvcGUubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJlZm9yZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcImludmFsaWQgZXhwcmVzc2lvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZS5wdXNoKHN0b3JlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NhbGwoZXhwLCBpICsgMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFyZ3MgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHRoaXMuanVtcFNwYWNlKGV4cCwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHBbKytpXSAhPSAnKScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gdGhpcy5wYXJzZVZhcihleHAsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGVtcC5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoJ2Vycm9yIHBhcnNlJywgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSArPSB0ZW1wLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2godGVtcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHRoaXMuanVtcFNwYWNlKGV4cCwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4cFtpXSA9PSAnKScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHBbaV0gIT0gJywnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdcIixcIiBub3QgZm91bmQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gdGhpcy5qdW1wU3BhY2UoZXhwLCBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBib2R5ID0gbmV3IFBhcnNlcihleHAsIHsgZnJvbTogaSArPSAzLCBzdWI6IHRydWUsIHdhcm46IHRoaXMub3B0aW9ucy53YXJuIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0b3JlZChuZXcgRm5WYWwoYXJncywgYm9keS5wYXJzZSgpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TW9kZSgyNDU4MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBib2R5LmVuZCB8fCBleHAubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRNb2RlKDgxOTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5wdXNoKG5ldyBHcm91cFZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQxOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RTY29wZSA9IHNjb3BlLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhcyh0aGlzLm1vZGUsIDgxOTUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdFNjb3BlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RTY29wZS5wdXNoKHRoaXMucG9wU3RvcmVkKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5vcHRpb25zLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kID0gaSAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGV4cC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcignbWFzIGZpbSBxdWUgaW5pY2lvJywgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRNb2RlKDE2Mzg3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCEobGFzdFNjb3BlIGluc3RhbmNlb2YgQ2FsbFZhbCkgJiYgIShsYXN0U2NvcGUgaW5zdGFuY2VvZiBHcm91cFZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wMSA9IGxhc3RTY29wZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2NvcGUubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kID0gaSAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBleHAubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdtYXMgZmltIHF1ZSBpbmljaW8nLCBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsYXN0U2NvcGUgPSBzY29wZS5wb3AoKSkucHVzaCh0ZW1wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdG9yZWQobGFzdFNjb3BlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ0OlxyXG4gICAgICAgICAgICAgICAgY2FzZSA1OTpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TW9kZSg0MDk3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJlZm9yZSA9IHNjb3BlW3Njb3BlLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RvcmVkID0gdGhpcy5wb3BTdG9yZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCEoYmVmb3JlIGluc3RhbmNlb2YgQ2FsbFZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYmVmb3JlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kID0gaSAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBleHAubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0b3JlZChzdG9yZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdtYXMgZmltIHF1ZSBpbmljaW8nLCBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlLnB1c2goc3RvcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlZCA9IGJlZm9yZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZSA9IHNjb3BlW3Njb3BlLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiZWZvcmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmUucHVzaChzdG9yZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNjA6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChleHAuY2hhckNvZGVBdChpICsgMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2MTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kT3AobmV3IExlc0VxdWFsT3AoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE1vZGUoNTE0Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2MjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kT3AobmV3IERpZk9wKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRNb2RlKDUxMzQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZE9wKG5ldyBMZXNzT3AoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE1vZGUoNTEyNik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2MTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZE9wKG5ldyBFcXVhbE9wKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TW9kZSg1MTM4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNjI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cC5jaGFyQ29kZUF0KGkgKyAxKSA9PT0gNjEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZE9wKG5ldyBHcmVhdGVyRXF1YWxPcCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZE9wKG5ldyBHcmVhdGVyT3AoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRNb2RlKDUxMzApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzNDpcclxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XHJcbiAgICAgICAgICAgICAgICAgICAgaSA9IHRoaXMucGFyc2VTdHJpbmcoaSwgZXhwLCBjaGFyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgOTQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRPcChuZXcgUG93T3AoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRNb2RlKDQ2NzQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA5MTpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgOTM6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGkgPSB0aGlzLnBhcnNlVmFsKGNoYXIsIGV4cCwgaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RvcmVkICYmIHNjb3BlLmxlbmd0aClcclxuICAgICAgICAgICAgc2NvcGVbc2NvcGUubGVuZ3RoIC0gMV0ucHVzaCh0aGlzLnBvcFN0b3JlZCgpKTtcclxuICAgICAgICB3aGlsZSAoc2NvcGUubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBsZXQgbGFzdCA9IHNjb3BlLnBvcCgpO1xyXG4gICAgICAgICAgICBpZiAobGFzdCBpbnN0YW5jZW9mIE9wVmFsKVxyXG4gICAgICAgICAgICAgICAgc2NvcGVbc2NvcGUubGVuZ3RoIC0gMV0ucHVzaChsYXN0KTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJpbnZhbGlkIGV4cHJlc3Npb25cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNjb3BlLmxlbmd0aCAmJiAhKHNjb3BlWzBdIGluc3RhbmNlb2YgT3BWYWwpKVxyXG4gICAgICAgICAgICB0aHJvdyBcImludmFsaWQgZXhwcmVzc2lvblwiO1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT0gODE5MyB8fCB0aGlzLm1vZGUgPT0gMzI3NjggfHwgdGhpcy5tb2RlID09IDQwOTgpXHJcbiAgICAgICAgICAgIHRocm93IFwiaW52YWxpZCBleHByZXNzaW9uXCI7XHJcbiAgICAgICAgcmV0dXJuIHNjb3BlWzBdIHx8IHRoaXMuc3RvcmVkO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHBhcnNlKGV4cCwgb3B0aW9ucykge1xyXG4gICAgaWYgKGV4cCAmJiB0eXBlb2YgZXhwID09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgZXhwID0gbmV3IFBhcnNlcihleHAsIG9wdGlvbnMpLnBhcnNlKCk7XHJcbiAgICByZXR1cm4gZXhwO1xyXG59XHJcbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcclxuZnVuY3Rpb24gY2FsYyhleHAsIG9wdGlvbnMpIHtcclxuICAgIGlmICghZXhwKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgaWYgKHR5cGVvZiBleHAgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMub3B0aW9uYWwpXHJcbiAgICAgICAgICAgIGlmIChleHBbMF0gPT0gJz0nKVxyXG4gICAgICAgICAgICAgICAgZXhwID0gZXhwLnN1YnN0cigxKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4cDtcclxuICAgICAgICBleHAgPSBwYXJzZShleHApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV4cC5jYWxjKG9wdGlvbnMpO1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGNhbGM7XHJcbmZ1bmN0aW9uIGNhbGNBbGwoZXhwcmVzc2lvbnMsIG9wdGlvbnMpIHtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGZvciAobGV0IGtleSBpbiBleHByZXNzaW9ucylcclxuICAgICAgICByZXN1bHRba2V5XSA9IGNhbGMoZXhwcmVzc2lvbnNba2V5XSwgb3B0aW9ucyk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmV4cG9ydHMuY2FsY0FsbCA9IGNhbGNBbGw7XHJcbmZ1bmN0aW9uIGNvbXBpbGVFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcclxuICAgIHRocm93IFwidW5zZXR0ZWQ3OTdcIjtcclxufVxyXG5leHBvcnRzLmNvbXBpbGVFeHByZXNzaW9uID0gY29tcGlsZUV4cHJlc3Npb247XHJcbmNvbnN0IGZvcm11bGFzID0ge307XHJcbmZ1bmN0aW9uIGFkZEZvcm11bGFzKHZhbHVlcykge1xyXG4gICAgZm9yIChsZXQgayBpbiB2YWx1ZXMpIHtcclxuICAgICAgICBsZXQgY2FsYyA9IHZhbHVlc1trXTtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGMgPT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICB2YWx1ZXNba10gPSB7IGNhbGMgfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5hc3NpZ24oZm9ybXVsYXMsIHZhbHVlcyk7XHJcbn1cclxuZXhwb3J0cy5hZGRGb3JtdWxhcyA9IGFkZEZvcm11bGFzO1xyXG52YXIgUXVlcnlBbGdvcml0aG07XHJcbihmdW5jdGlvbiAoUXVlcnlBbGdvcml0aG0pIHtcclxuICAgIFF1ZXJ5QWxnb3JpdGhtW1F1ZXJ5QWxnb3JpdGhtW1wid29yZFwiXSA9IDBdID0gXCJ3b3JkXCI7XHJcbiAgICBRdWVyeUFsZ29yaXRobVtRdWVyeUFsZ29yaXRobVtcImxpa2VcIl0gPSAxXSA9IFwibGlrZVwiO1xyXG59KShRdWVyeUFsZ29yaXRobSA9IGV4cG9ydHMuUXVlcnlBbGdvcml0aG0gfHwgKGV4cG9ydHMuUXVlcnlBbGdvcml0aG0gPSB7fSkpO1xyXG5mdW5jdGlvbiBxdWVyeUluQXJyYXkocXVlcnksIGFycmF5LCBmaWVsZHMpIHtcclxuICAgIHZhciB3b3JkcyA9IHF1ZXJ5LnNwbGl0KCcgJyk7XHJcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKChyb3cpID0+IHF1ZXJ5SW5PYmood29yZHMsIHJvdywgZmllbGRzKSk7XHJcbn1cclxuZnVuY3Rpb24gcXVlcnlJbk9iaih3b3Jkcywgb2JqLCBmaWVsZHMpIHtcclxuICAgIGZ1bmN0aW9uIGhlbHBlcihvYmosIGZpZWxkcykge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqID09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG9iailcclxuICAgICAgICAgICAgICAgIGlmICghZmllbGRzIHx8IGZpZWxkcy5pbmRleE9mKGtleSkgPiAtMSlcclxuICAgICAgICAgICAgICAgICAgICByLnB1c2guYXBwbHkociwgaGVscGVyKG9ialtrZXldKSk7XHJcbiAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygb2JqID09IFwic3RyaW5nXCIgfHwgKHR5cGVvZiBvYmogPT0gXCJudW1iZXJcIiAmJiAob2JqID0gb2JqLnRvU3RyaW5nKCkpKSkge1xyXG4gICAgICAgICAgICB2YXIgciA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB3b3JkIG9mIHdvcmRzKVxyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5pbmRleE9mKHdvcmQpID4gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgci5wdXNoKHdvcmQpO1xyXG4gICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgbGV0IHQgPSBoZWxwZXIob2JqLCBmaWVsZHMpO1xyXG4gICAgcmV0dXJuIHdvcmRzLmV2ZXJ5KCh3b3JkKSA9PiB0LmluZGV4T2Yod29yZCkgPiAtMSk7XHJcbn1cclxuZXhwb3J0cy5xdWVyeUluT2JqID0gcXVlcnlJbk9iajtcclxuZnVuY3Rpb24gcXVlcnkocXVlcnksIGFycmF5LCBvcHRpb25zKSB7XHJcbiAgICBzd2l0Y2ggKG9wdGlvbnMudHlwZSkge1xyXG4gICAgICAgIGNhc2UgUXVlcnlBbGdvcml0aG0ud29yZDpcclxuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5SW5BcnJheShxdWVyeSwgYXJyYXksIG9wdGlvbnMuZmllbGRzKTtcclxuICAgICAgICBjYXNlIFF1ZXJ5QWxnb3JpdGhtLmxpa2U6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuZXhwb3J0cy5xdWVyeSA9IHF1ZXJ5O1xyXG5mdW5jdGlvbiBjb21wYXJlU3RyaW5nKHN0cjEsIHN0cjIpIHtcclxuICAgIHN0cjEgPSBzdHIxLnJlcGxhY2UoL1xccysvZywgJycpO1xyXG4gICAgc3RyMiA9IHN0cjIucmVwbGFjZSgvXFxzKy9nLCAnJyk7XHJcbiAgICBpZiAoIXN0cjEubGVuZ3RoICYmICFzdHIyLmxlbmd0aClcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIGlmICghc3RyMS5sZW5ndGggfHwgIXN0cjIubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgaWYgKHN0cjEgPT09IHN0cjIpXHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICBpZiAoc3RyMS5sZW5ndGggPT09IDEgJiYgc3RyMi5sZW5ndGggPT09IDEpXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICBpZiAoc3RyMS5sZW5ndGggPCAyIHx8IHN0cjIubGVuZ3RoIDwgMilcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIGxldCBmaXJzdEJpZ3JhbXMgPSBuZXcgTWFwKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cjEubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYmlncmFtID0gc3RyMS5zdWJzdHIoaSwgMik7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSBmaXJzdEJpZ3JhbXMuaGFzKGJpZ3JhbSlcclxuICAgICAgICAgICAgPyBmaXJzdEJpZ3JhbXMuZ2V0KGJpZ3JhbSkgKyAxXHJcbiAgICAgICAgICAgIDogMTtcclxuICAgICAgICBmaXJzdEJpZ3JhbXMuc2V0KGJpZ3JhbSwgY291bnQpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgbGV0IGludGVyc2VjdGlvblNpemUgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIyLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGJpZ3JhbSA9IHN0cjIuc3Vic3RyKGksIDIpO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gZmlyc3RCaWdyYW1zLmhhcyhiaWdyYW0pXHJcbiAgICAgICAgICAgID8gZmlyc3RCaWdyYW1zLmdldChiaWdyYW0pXHJcbiAgICAgICAgICAgIDogMDtcclxuICAgICAgICBpZiAoY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIGZpcnN0QmlncmFtcy5zZXQoYmlncmFtLCBjb3VudCAtIDEpO1xyXG4gICAgICAgICAgICBpbnRlcnNlY3Rpb25TaXplKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICgyLjAgKiBpbnRlcnNlY3Rpb25TaXplKSAvIChzdHIxLmxlbmd0aCArIHN0cjIubGVuZ3RoIC0gMik7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9amNhbGMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9