import { $ as ett$, bind, Bond, create, fieldTypes, GT, IBond, SelectResult } from "entity";
import { css, div, g, get } from "galho";
import { addBaseTypes, addcbFmts, cbFormats, number, radio, text } from "galhud/fields";
import { pagging, search, singleSort, table, Total, totals } from "galhud/tools";
import {style as tbStyle}from "galhud/table";
import {style as toolStyle}from "galhud/tools";
import { basic, C, theme } from "galhui/core";
import { menubar } from "galhui/menu";
import { deepSgn, ex, extend } from "inutil";
import { cssTag, init } from "./index";
ex(ett$, {
  // total(total: Total, { target }) {
  //   return target.select({
  //     tp: GT.one,
  //     fields: total.fields,
  //     groupBy: total.groupBy,
  //     where: total.where,
  //     query: total.query,
  //     queryBy: total.queryBy
  //   });
  // },
  create: (i) => extend(i, {
    insert: true,
    remove: true,
    update: true,
    select: true,
  })
})
const toolbar = (bond: Bond) => menubar(
  search(bond),
  menubar.right(),
  singleSort(bond)
);
(async function () {
  init();
  addcbFmts();
  addBaseTypes();
  console.log(fieldTypes);
  css(tbStyle(),cssTag);
  css(toolStyle(),cssTag);
  //css(crudStyle(), index.cssTag);
  const enums: Dic<str[]> = {
    gender: ["M", "F"]
  };
  var _db: IDBDatabase;
  const getdb = (): Promise<IDBDatabase> => new Promise((cb) => {
    if (_db) cb(_db);
    else {
      let r = indexedDB.open("crud");
      r.onsuccess = () => { cb(_db = r.result); }
      r.onupgradeneeded = (e) => {
        let db = r.result;
        let store = db.createObjectStore("cliente", {
          keyPath: "id",
          autoIncrement: true
        });
        store.transaction.oncomplete = function (event) {
          // Store values in the newly created objectStore.
          var store = db.transaction("cliente", "readwrite").objectStore("cliente");
          let defCostumers =/*add default data*/[
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
      }
    }
  });
  ett$.select = async function <T extends GT>(key: str, bond: IBond<T>) {
    let db = await getdb();
    return new Promise(cb => {
      let r: Dic[] = [];
      db.transaction(key).objectStore(key).openCursor().onsuccess = (e: any) => {
        if (e.target.result)
          r.push(e.target.result);
        else cb(<any>r);
      }
    });

  }
  ett$.enumView = (key, val) => enums[key][val];
  ett$.enum = (key) => enums[key];
  create("cliente", [
    text("nome", { req: true }),
    text("subre_nome", { req: true }),
    number("idade", { req: false }),
    radio("sexo", "gender")
  ]);
  let bond = await bind({
    key: "cliente",
  });
  get("#sample").replace(div("column", [
    toolbar(bond),
    table(bond, {

    }),
    menubar(g(pagging(bond, true, true, true), C.menubar), totals(bond.select(0),null)?.cls(C.menubar))
  ]));


})();