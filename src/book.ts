////import * as bk from "book";
////import { c, cs, cut, hr, p, r, s, st, symb, tb, tbf, th, tr, l, ph, sep } from "book/fn";
////import { Boxes as Box, BT, ST, RLy, TAlign, TrLy, CLy, IPBox, Spans, ICol, IRow } from "book";
////import * as index from "./index";
////import { css, g, div, get, getAll } from "galho";
////import * as _ from "inutil";
////import { Ori } from "../galhui/core";

////// #region tools
////function setMediaTool() {

////}
////function printTool() {

////}
////function themeTool() {

////}
////function doubleTrileTool() {

////}
////function currencyTool() {

////}
////// #endregion


////const clienteInfo = (key = 'cliente'): Box => ({
////  tp: BT.col,
////  sc: key,
////  s: 'doc-box',
////  dt: [
////    s("nome", "strong"),
////    hr(),
////    {
////      tp: BT.table,
////      cols: [
////        { sz: 30 },
////        { sz: 70 },
////      ],
////      dt: [
////        tr(st("Código:"), s("code")),
////        tr(st("NIF:"), s("nif")),
////        tr(st("Contacto:"), s("tel?(tel&(tel_alt?'/'&tel_alt:'')):'S/N'")),
////        tr(st("Categoria:"), s("tipo")),
////        tr(st("Endereço:"), s("endereco?address(endereco):'S/N'")),
////        _.ex(tr(st("   Referência:"), s("referencia")), { vl: "referencia" }),
////        _.ex(th(hr(), st("Contrato:"), {
////          tp: BT.p, dt: [
////            { tp: ST.s, dt: "code" },
////            { dt: " Cat.: ", is: { b: true } },
////            { tp: ST.s, dt: "modelo" }
////          ]
////        }), { sc: "../contrato.contrato", vl: "contrato" }),
////        _.ex(tr(st("Endereço:"), s("address(endereco)")), { sc: "../contrato.contrato", vl: "contrato&&endereco" })
////      ]
////    }
////  ]
////})
////export const header = (): Box => _.ex(r(
////  l(symb<RLy>("doc-box"), { sz: 55 }),
////  _.ex(c(clienteInfo()), { ly: { sz: 45 }, reverse: true })
////), { vl: 'pag()=1' });
////function faturaBottom(divisor = true, ly?, sz = 20): Box {
////  let dt = <Box[]>[
////    {
////      tp: BT.row,
////      dt: [
////        _.ex(st("Inicio da carga"), { ly: { sz } }),
////        _.ex(s("inicio_de_carga?format(inicio_de_carga,'d;f'):'Data do documento'"), { ly: { sz: 100 - sz } })
////      ]
////    },
////    {
////      tp: BT.row,
////      dt: [
////        {
////          tp: BT.p,
////          dt: [{ dt: 'Local de carga' }],
////          s: "strong",
////          ly: { sz }
////        },
////        {
////          tp: BT.p,
////          dt: [{ dt: 'local_de_carga', tp: ST.s }],
////          ly: { sz: 100 - sz }
////        }
////      ]
////    },
////    {
////      tp: BT.row,
////      dt: [
////        {
////          tp: BT.p,
////          dt: [{ dt: 'Local de descarga' }],
////          s: "strong",
////          ly: { sz }
////        },
////        {
////          tp: BT.p,
////          dt: [{ dt: 'local_de_descarga', tp: ST.s }],
////          ly: { sz: 100 - sz }
////        }
////      ]
////    }
////  ];
////  if (divisor)
////    dt.unshift({ tp: BT.hr, s: "divider" });
////  return {
////    tp: BT.col,
////    vl: 'inicio_de_carga||local_de_carga||local_de_descarga',
////    dt: dt,
////    ly: ly
////  };
////};
////const userBox = () => <Box>{
////  tp: BT.p,
////  is: { al: "e" },
////  ly: { sz: 35 },
////  dt: [
////    {
////      dt: 'Op.:',
////      is: { b: true }
////    },
////    {
////      tp: ST.s,
////      dt: 'user',
////    }
////  ]
////};
////const impostos = (): Box => ({
////  tp: BT.col,
////  is: { tx: 'min' },
////  ly: { sz: 35 },
////  dt: [
////    { tp: BT.p, dt: [{ dt: 'Resumo dos impostos' }] },
////    {
////      tp: BT.table,
////      sc: '=agroup(filter(itens,(i)=>i.imposto), (p,n)=>{c:p.c,t:p.t,  i:p.i+n.unitario*n.qtd}, (i)=>i.tipo_de_imposto, (i)=>{c:i.tipo_de_imposto,t:i.imposto,  i:0})',
////      vl: "length(ctx())",
////      map: true,
////      cols: [
////        { sz: 15 },
////        { sz: 20 },
////        { sz: 33 },
////        { sz: 32 }
////      ],
////      hd: {
////        tp: BT.tr,
////        dt: [
////          { tp: BT.p, dt: [{ dt: " " }] },
////          { tp: BT.p, dt: [{ dt: 'Taxa' }] },
////          { tp: BT.p, dt: [{ dt: 'Incidencia' }] },
////          { tp: BT.p, dt: [{ dt: 'Imposto' }] }
////        ]
////      },
////      dt: [
////        {
////          tp: BT.tr,
////          dt: [
////            { tp: BT.p, dt: [{ tp: ST.s, dt: "c" }], s: "strong" },
////            { tp: BT.p, dt: [{ tp: ST.s, dt: 't', fmt: 'n;%' }] },
////            { tp: BT.p, dt: [{ tp: ST.s, dt: "i", fmt: "n;$" }] },
////            { tp: BT.p, dt: [{ tp: ST.s, dt: 'i*t', fmt: "n;$" }] }
////          ]
////        }
////      ]
////    },
////    {
////      tp: BT.col,
////      dt: [
////        {
////          tp: BT.table,
////          sc: "=get_temp('ret')",
////          vl: "length(ctx())",
////          map: true,
////          cols: [
////            { sz: 15 },
////            { sz: 20 },
////            { sz: 33 },
////            { sz: 32 }
////          ],
////          hd: {
////            tp: BT.tr,
////            dt: [
////              { tp: BT.p },
////              { tp: BT.p, dt: [{ dt: 'Taxa' }] },
////              { tp: BT.p, dt: [{ dt: 'Incidencia' }] },
////              { tp: BT.p, dt: [{ dt: 'Retenção' }] }
////            ]
////          },
////          dt: [
////            {
////              tp: BT.tr,
////              dt: [
////                { tp: BT.p, dt: [{ tp: ST.s, dt: "c" }], s: "strong" },
////                { tp: BT.p, dt: [{ tp: ST.s, dt: 't', fmt: 'n;%' }] },
////                { tp: BT.p, dt: [{ tp: ST.s, dt: "i", fmt: "n;$" }] },
////                { tp: BT.p, dt: [{ tp: ST.s, dt: 'i*t', fmt: "n;$" }] }
////              ]
////            }
////          ]
////        }
////      ]
////    },
////    {
////      tp: BT.table,
////      sc: "=distinct(filter(map(itens,(i)=>i.isencao),(i)=>i), (i)=>i.codigo)",
////      vl: "length(ctx())",
////      //vl: "length(set('isencoes', unique_items(filter(extract(itens,'isencao')),'codigo')))",
////      map: true,
////      cols: [
////        { sz: 30 },
////        { sz: 70 },
////      ],
////      hd: {
////        tp: BT.tr,
////        dt: [
////          { tp: BT.p, ly: { span: 2 }, dt: [{ dt: "Motivo de isenção" }] },
////        ]
////      },
////      dt: [
////        {
////          tp: BT.tr,
////          dt: [
////            { tp: BT.p, dt: [{ tp: ST.s, dt: "codigo" }], s: "strong" },
////            { tp: BT.p, dt: [{ tp: ST.s, dt: 'nome' }] }
////          ]
////        }
////      ]
////    }
////  ]
////});
////const bancos = (ly = { sz: 26 }) => <Box>{
////  tp: BT.col,
////  sc: "contas",
////  map: true,
////  vl: 'length(contas)',
////  is: { tx: 'min' },
////  ly: ly,

////  hd: st('Coordenadas bancarias'),
////  dt: [
////    {
////      tp: BT.table,
////      cols: [
////        { sz: 20 },
////        { sz: 80 },
////      ],
////      dt: [
////        tr(st("Bancos:"), s("banco&(moeda?' ('&moeda&')':'')")),
////        _.ex(tr(st("Conta: "), s("n_conta")), { vl: "n_conta" }),
////        tr(st("IBAN:"), s("iban"))
////      ]
////    }
////  ]
////};
////const totais = (): Box => l(tb<CLy>(null,
////  tr(p("Total sem imposto"), cs(s("base", null, "n;$"), { al: TAlign.e })),
////  tr(p("Descontos"), cs(s("desconto", null, "n;$"), { al: TAlign.e })),
////  tr(p("Valor base"), cs(s("base-desconto", null, "n;$"), { al: TAlign.e })),
////  tr(p("Total/Imposto"), cs(s("imposto", null, "n;$"), { al: TAlign.e })),
////  _.ex(tr(p("Total/documento"), cs(s("total", null, "n;$"), { al: TAlign.e })), { s: 'filled' }),

////  _.ex(tr(p("Valor retido"), cs(s("sum(map(get_temp('ret'),(r)=>r.i*r.t))", null, "n;$"), { al: TAlign.e })), { vl: "length(get_temp('ret'))" }),
////  _.ex(tr(p("Total a pagar"), cs(s("total-sum(map(get_temp('ret'),(r)=>r.i*r.t))", null, "n;$"), { al: TAlign.e })), { vl: "length(get_temp('ret'))", s: 'filled' }),

////  _.ex(tr(p("Cambio"), cs(s("format(exchange('AOA'),'n;0,0.0000 $',{currency:'AOA'})"), { al: TAlign.e })), { vl: "currency()<>'AOA'" }),
////  _.ex(tr(p("Total a pagar"), cs(s("format((total-sum(map(get_temp('ret'),(r)=>r.i*r.t)))*exchange('AOA'),'n;$',{currency:'AOA'})"), { al: TAlign.e })), { vl: "currency()<>'AOA'", s: 'filled' }),
////), { sz: 38 });
////const extenso = () => <Box>{
////  is: { al: "e", }, tp: BT.p, dt: [
////    { tp: ST.s, dt: "format((total-sum(map(get_temp('ret'),(r)=>r.i*r.t)))*exchange(system('currency')),'n;f',{s:'kwanza',ds:'cêntimo',p:'kwanzas',dp:'cêntimos'})" }//&system('currency')
////  ]
////}
////const faturaInfoBar = () => c(
////  r(_.ex(p('Os bens/serviços foram colocados à disposição do adquirente na data do documento'), { ly: { sz: 65 } }), userBox()),
////  hr("divider"),
////  _.ex(r(impostos(), bancos(), totais()), { pad: [0, 0.5, 0.5, 0] }),
////  extenso()
////);
////const transportado = () => _.ex(r(
////  l<IPBox<RLy>>(p('Total transportado'), { sz: 40 }),
////  _.ex(s("delay(()=>format(get_temp('total'),'n;$'))"), { ly: { sz: 60 }, is: { al: TAlign.end } })
////), { s: 'filled', vl: 'pag()<>1' });
////const info = () => _.ex(c(ph("info")), { ly: { start: 2 }, is: { pd: [8, 14] } });
////const items = (): Box => _.ex(c(
////  _.ex(tbf(
////    [4, 18, 40, 6, 4, 14, 8, 8, 15],
////    tr(p("#"), p("Referência"),
////      p("Descrição"), p("Qtd"),
////      p("Un."), cs(p("P/unit."), { al: TAlign.e }),
////      p("Desc"), p("Taxa"),
////      cs(p("Total"), { al: TAlign.e })),
////    tr(s("map_index()"), s("produto.referencia"),
////      s("produto.nome"), s("qtd"),
////      s("produto.unidade"), cs(s("base", null, "n;$"), { al: TAlign.e }),
////      s("desconto&&format(desconto,'n;%')||''"),
////      s("imposto?format(imposto,'n;0 %'):0 &(isencao?' ('&isencao.codigo&')':'')"),
////      cs(s("unitario*qtd"), { al: TAlign.e })),
////    tr(
////      _.ex(p<TrLy>("Total a transportar"), { pag: "(pags)=>pags>1", ly: { span: 7 } }),
////      _.ex(s<TrLy>("delay(()=>format(set_temp('total',(get_temp('total')||0)+sum(map(sheetData(),(i)=>i.total))),'n;$'))"), { is: { al: TAlign.e }, ly: { span: 2 } })
////    )
////  ), { map: true, sc: "itens" })), { ly: { grow: 2 }, is: { mg: [0, 0, 17, 0] } });
////export const docTitle = (title: Spans[], copy = true): Box[] => [r({
////  tp: BT.p,
////  ly: { sz: 85 },
////  s: 'h1',
////  dt: title
////}, copy && _.ex(s<RLy>("copy"), { ly: { sz: 15 }, is: { al: TAlign.e } })), sep()
////];
////export function docProps(rows: Dic<Spans[] | Spans>[], sizes?: number[][]) {
////  return <ICol>{
////    tp: BT.col,
////    s: 'box',
////    dt: rows.map<IRow>((p, i) => {
////      let dt: Box<RLy>[] = [], j = 0, pad = [2];
////      for (let k in p) {
////        let v = p[k];
////        dt.push({
////          tp: BT.col,
////          dt: [
////            { tp: BT.p, dt: [k.startsWith('=') ? { dt: k.slice(1), tp: ST.s } : { dt: k }], s: "strong" },
////            hr(),
////            { tp: BT.p, dt: v instanceof Array ? v : [v] }
////          ],
////          ly: { grow: 1, sz: sizes && sizes[i][j] || 1 }
////        });
////        pad.push(2);
////        j++;
////      }
////      return {
////        tp: BT.row,
////        dt: dt,
////        pad: pad
////      }
////    })
////  }
////};
////interface Doc {
////  name: str;
////  media: str;
////  o: Ori;
////  lang: str;
////  doc: bk.Book
////}
////const docs: Doc[] = [
////  {
////    name: "fatura",
////    media: "A4",
////    o: Ori.v,
////    lang: "pt",
////    doc: {
////      dt: _.ex(c(items(), info(), _.ex(c(faturaInfoBar(), faturaBottom()), { ub: true, ly: { sz: 1 } })), { ly: { fill: true } }),
////      top: _.ex(c(
////        header(),
////        ...docTitle([
////          { dt: "Factura FT " },
////          { dt: 'code', tp: ST.s },
////          { dt: "titulo?' ('&titulo&')':titulo", tp: ST.s }
////        ]),
////        _.ex(docProps([
////          {
////            "Moeda": { dt: "currency()", tp: ST.s },
////            "Condições": { dt: "pagamento", tp: ST.s },
////            "Vencimento": { dt: "vencimento", tp: ST.s, fmt: "d;d" },
////            "Entregue em": { dt: "realizado_em", tp: ST.s, fmt: 'd;d' },
////            "Registado em": { dt: "cd", tp: ST.s, fmt: 'd;f' }
////          }
////        ], [[10, 25, 20, 20, 22]]), { vl: '!proforma' }),
////        _.ex(docProps([
////          {
////            "Referente á Proforma": { dt: "'PP '&proforma.code", tp: ST.s },
////            "Moeda": { dt: "currency()", tp: ST.s },
////            "Condições": { dt: "pagamento", tp: ST.s }
////          },
////          {
////            "Vencimento": { dt: "vencimento", tp: ST.s, fmt: "d;d" },
////            "Realizado/Entregue em": { dt: "realizado_em", tp: ST.s, fmt: 'd;d' },
////            "Registado em": { dt: "cd", tp: ST.s, fmt: 'd;f' }
////          }
////        ]), { vl: 'proforma' }),
////        transportado()
////      ), { pad: [0, 12], })
////    }
////  },
////  {
////    name: "header_and_footer",
////    media: "A4",
////    o: Ori.v,
////    lang: "pt",
////    doc: {
////      hd: r(
////        c(p("Isto é um cabeçalho", "strong"), "Texto aleatorio para colocar no cabeçalho para ocupar espaço"),
////        s<RLy>("'Data actual: '&fmt(now(),'d;f')", null, null, TAlign.end)
////      ),
////      ft: r(
////        p("Isto é um rodape", "strong"),
////        s<RLy>("delay(()=>'Pag. '& pag() &' de '&pags())", null, null, TAlign.end)
////      )
////    }
////  }
////].map(v => { bk.normalize(v.doc); return v });


////async function printDoc(key: str, dt: any) {
////  bk.normalize(obj);

////  let
////    bd = g("div", C.body),
////    [w, h] = bk.medias[media],
////    calc = bk.cpu(),
////    img = (path: str, args?: Dic) => `${req.host()}\\${path}?${args ? _.dta(args, (v, k) => `${k}=${v}`).join('&') : ''}`,
////    symbs: Dic<bk.Boxes> = {},
////    view = (dt) => bk.sheets({
////      dt: _.ex(dt, extra),
////      fmt, calc,
////      img, symb: (key) => symbs[key]
////    }, bd, obj, w, h);
////  ui.modal([
////    g("div", [C.head, HAlign.center, C.menubar], [
////      ui.bt("printer", gl.print, () => bk.print(bd, o, media, () => {
////        window.print();
////      }))
////    ]),
////    ui.btClose(null, true)
////  ], bd, null, { cls: [C.full] });

////  if (obj.symbs)
////    for (let symb of obj.symbs)
////      symbs[symb] = await req.rsc(symb);
////  if (obj.q)
////    for (let k in obj.q)
////      extra[k] = await req.api(`/${obj.q[k]}`);

////  for (let t of dt) {
////    t.copy = gl.original;
////    await view(t);

////    if (double) {
////      t.copy = gl.double;
////      await view(t);
////      if (triple) {
////        t.copy = gl.triple;
////        await view(t);
////      }
////    }
////  }
////  await docView(await doc(key), { dt, o: Ori.v, media: "A4" });
////}

////function book(name: str, media: str, o: Ori, lang: str) {
////  const doc = docs.find(d => d.name == name && d.media == media && d.o == o && d.lang == lang).doc;

////}
////function area(key: str) {
////  get(`#${key}>.sample`).try(e => e.replace(book(key, "A5", Ori.v, "pt")));
////}
////(function () {
////  index.init();

////  area("intro");
////  area("header_and_footer");

////})()