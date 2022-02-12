////import * as bk from "book";
////import * as index from "./index";
////import { css, g, div, get, getAll } from "galho";
////import { Ori } from "galhui"
////import * as _ from "inutil";


////type Rec<I = number> = { id?: I; } & Dic<any>;
////type Recs = Rec<Arr<num>>;
////export type Medias = "A4" | "A5" | "A3" | "A5InA4" | "thermal";

////interface IDocContext {

////}
////interface IDocEntity {

////}
////export interface DocFilter {
////    lang?: string;
////    media?: Medias;
////    o?: Ori;
////    key?: string;
////}
////export class DocVersion implements DocFilter {
////    data: bk.Book;
////    lang: string;
////    media: Medias;
////    o?: Ori;
////    key?: string;

////    match(filter: DocFilter) {
////        return 0;
////        let v = 0;
////        if (filter.key && filter.key != this.key)
////            v -= 4;
////        if (filter.lang != this.media)
////            v -= 4;
////        if (filter.media && filter.media != this.media)
////            v -= 2;
////        return v;
////    }
////    setData(data: bk.Book) {
////        this.data = data;
////        return this;
////    }
////    dataFrom(src: DocFilter | DocVersion, replace?: Dic<bk.Boxes>) {
////        //return this.ctx;
////    }
////}

////export interface IDoc {
////    name: str;
////    get?(ctx: IDocContext, ids: Recs): Promise<str | str[]>;
////    post?(ctx: IDocContext, ids: Recs): Promise<str | str[]>;
////    del?(ctx: IDocContext);
////}
////export class Doc implements IDoc {
////    name: str;
////    /**path of currency */
////    currency?: string;
////    versions: DocVersion[] = []

////    id: number;
////    title: str;
////    data: (c: IDocContext, Recs) => Promise<Rec[]>;
////    async api({ ctx, method, s }: Api) {
////        switch (method) {
////            case M.GET:
////            case M.POST:
////                throw _.notImp();

////            case M.OPTS:
////                let { bonds, versions: { a: { data } } } = this;
////                if (bonds)
////                    data.q = bonds;
////                return data;
////        }
////    }

////    async getDoc(s: Session, module: Module, doc: string) {

////    }
////    async getPrintList(s: Session, module: Module, doc: string, filter: DocFilter) {

////    }
////    async createPrint(s: Session, module: Module, doc: string, body: any) {
////        throw new Error('Method not implemented.');
////    }
////    async setDoc(s: Session, module: Module, doc: string, body: any) {
////        throw new Error('Method not implemented.');
////    }


////    client(filter: DocFilter) {
////        let max: number, id = this.def, vs = this.versions;
////        for (let i = 0; i < vs.length; i++) {
////            let v = vs[i].value(filter);
////            if (!v) {
////                id = i;
////                break;
////            }
////            if (v > max) {
////                max = v;
////                id = i;
////            }
////        }
////        return vs[id].data;
////    }

////    async post(c: Connector, req: Recs, e: Entity) {
////        let
////            dt = await this.data(c, req, e),
////            r = Array<str>(dt.l);

////        await c.exec(q.post("document", ["title", "type", "record", "data", "info"], ...dt.map((dt, i) => [
////            q.l(this.title.calc({ vars: dt })),
////            this.id, dt.id, q.l(r[i] = JSON.stringify(dt)), q.nl
////        ])));
////        return r;
////    }
////    async get(c: Connector, rec: Recs, e: Entity) {
////        let
////            id = arr(rec.id),
////            dt = <Rec[]>await c.rows(q.get("document", q.e(q.inl("record", id), `type=${this.id}`), q.as("record", "id"), "data")),
////            insert = id.filter(i => !dt.byKey(i, "id"));

////        let r = <str[]>dt.sub("data");
////        if (insert.l)
////            r.push(...await this.post(c, sgn({}, rec, { id: insert }), e));

////        return `[${r}]`;
////    }
////    //#region create
////    bind(bond?: bg.IBond) {
////        this.bond = bond;
////        return this;
////    }
////    bonds?: Dic<str>
////    addBond(key: str, val: str) {
////        (this.bonds ||= {})[key] = val;
////        return this;
////    }
////    addVersion(data: DocVersion): any {
////        this.versions.push(data);
////        data.ctx = this;
////        return this;
////    }
////    //#endregion
////}