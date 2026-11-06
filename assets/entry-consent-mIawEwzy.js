import {r as e} from "./rolldown-runtime-S-ySWqyJ.js";
import {i as t, n, r} from "./framework-CXnKph_e.js";
import {t as i} from "./createLucideIcon-DDARWCLE.js";
import {t as a} from "./business-contact-DY6cGidj.js";
import {_ as o, a as s, c, d as l, f as u, g as d, h as f, i as p, m, o as h, p as g, r as _, s as v, t as y, u as b} from "./utils-BYfU-hLk.js";
var x = i(`check`, [[`path`, {
    d: `M20 6 9 17l-5-5`,
    key: `1gmf2c`
}]])
  , S = i(`chevron-down`, [[`path`, {
    d: `m6 9 6 6 6-6`,
    key: `qrunsl`
}]])
  , C = i(`chevron-up`, [[`path`, {
    d: `m18 15-6-6-6 6`,
    key: `153udz`
}]])
  , w = e(n(), 1)
  , T = e(t(), 1)
  , E = r()
  , D = Object.freeze({
    position: `absolute`,
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: `hidden`,
    clip: `rect(0, 0, 0, 0)`,
    whiteSpace: `nowrap`,
    wordWrap: `normal`
})
  , O = Object.defineProperty
  , k = (e, t) => O(e, `name`, {
    value: t,
    configurable: !0
});
function A(e, t) {
    if (typeof e == `function`)
        return e(t);
    e != null && (e.current = t)
}
k(A, `setRef`);
function j(...e) {
    return t => {
        let n = !1
          , r = e.map(e => {
            let r = A(e, t);
            return !n && typeof r == `function` && (n = !0),
            r
        }
        );
        if (n)
            return () => {
                for (let t = 0; t < r.length; t++) {
                    let n = r[t];
                    typeof n == `function` ? n() : A(e[t], null)
                }
            }
    }
}
k(j, `composeRefs`);
function M(...e) {
    return T.useCallback(j(...e), e)
}
k(M, `useComposedRefs`);
var ee = Object.defineProperty
  , N = (e, t) => ee(e, `name`, {
    value: t,
    configurable: !0
});
function P(e) {
    let t = T.forwardRef( (t, n) => {
        let {children: r, ...i} = t
          , a = null
          , o = !1
          , s = [];
        z(r) && typeof se == `function` && (r = se(r._payload)),
        T.Children.forEach(r, e => {
            if (R(e)) {
                o = !0;
                let t = e
                  , n = `child` in t.props ? t.props.child : t.props.children;
                z(n) && typeof se == `function` && (n = se(n._payload)),
                a = ne(t, n),
                s.push(a?.props?.children)
            } else
                s.push(e)
        }
        ),
        a ? a = T.cloneElement(a, void 0, s) : !o && T.Children.count(r) === 1 && T.isValidElement(r) && (a = r);
        let c = a ? L(a) : void 0
          , l = M(n, c);
        if (!a) {
            if (r || r === 0)
                throw Error(o ? oe(e) : ae(e));
            return r
        }
        let u = I(i, a.props ?? {});
        return a.type !== T.Fragment && (u.ref = n ? l : c),
        T.cloneElement(a, u)
    }
    );
    return t.displayName = `${e}.Slot`,
    t
}
N(P, `createSlot`);
var F = Symbol.for(`radix.slottable`);
function te(e) {
    let t = N(e => `child` in e ? e.children(e.child) : e.children, `Slottable`);
    return t.displayName = `${e}.Slottable`,
    t.__radixId = F,
    t
}
N(te, `createSlottable`);
var ne = N( (e, t) => {
    if (`child` in e.props) {
        let t = e.props.child;
        return T.isValidElement(t) ? T.cloneElement(t, void 0, e.props.children(t.props.children)) : null
    }
    return T.isValidElement(t) ? t : null
}
, `getSlottableElementFromSlottable`);
function I(e, t) {
    let n = {
        ...t
    };
    for (let r in t) {
        let i = e[r]
          , a = t[r];
        /^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
            let t = a(...e);
            return i(...e),
            t
        }
        : i && (n[r] = i) : r === `style` ? n[r] = {
            ...i,
            ...a
        } : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `))
    }
    return {
        ...e,
        ...n
    }
}
N(I, `mergeProps`);
function L(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get
      , n = t && `isReactWarning` in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
N(L, `getElementRef`);
function R(e) {
    return T.isValidElement(e) && typeof e.type == `function` && `__radixId` in e.type && e.type.__radixId === F
}
N(R, `isSlottable`);
var re = Symbol.for(`react.lazy`);
function z(e) {
    return typeof e == `object` && !!e && `$$typeof` in e && e.$$typeof === re && `_payload` in e && ie(e._payload)
}
N(z, `isLazyComponent`);
function ie(e) {
    return typeof e == `object` && !!e && `then` in e
}
N(ie, `isPromiseLike`);
var ae = N(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, `createSlotError`)
  , oe = N(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, `createSlottableError`)
  , se = T.use
  , ce = Object.defineProperty
  , B = (e, t) => ce(e, `name`, {
    value: t,
    configurable: !0
});
function le(e) {
    let t = e + `CollectionProvider`
      , [n,r] = d(t)
      , [i,a] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , o = B(e => {
        let {scope: t, children: n} = e
          , r = T.useRef(null)
          , a = T.useRef(new Map).current;
        return (0,
        E.jsx)(i, {
            scope: t,
            itemMap: a,
            collectionRef: r,
            children: n
        })
    }
    , `CollectionProvider`);
    o.displayName = t;
    let s = e + `CollectionSlot`
      , c = P(s)
      , l = T.forwardRef( (e, t) => {
        let {scope: n, children: r} = e;
        return (0,
        E.jsx)(c, {
            ref: M(t, a(s, n).collectionRef),
            children: r
        })
    }
    );
    l.displayName = s;
    let u = e + `CollectionItemSlot`
      , f = `data-radix-collection-item`
      , p = P(u)
      , m = T.forwardRef( (e, t) => {
        let {scope: n, children: r, ...i} = e
          , o = T.useRef(null)
          , s = M(t, o)
          , c = a(u, n);
        return T.useEffect( () => (c.itemMap.set(o, {
            ref: o,
            ...i
        }),
        () => void c.itemMap.delete(o))),
        (0,
        E.jsx)(p, {
            [f]: ``,
            ref: s,
            children: r
        })
    }
    );
    m.displayName = u;
    function h(t) {
        let n = a(e + `CollectionConsumer`, t);
        return T.useCallback( () => {
            let e = n.collectionRef.current;
            if (!e)
                return [];
            let t = Array.from(e.querySelectorAll(`[${f}]`));
            return Array.from(n.itemMap.values()).sort( (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
        }
        , [n.collectionRef, n.itemMap])
    }
    return B(h, `useCollection`),
    [{
        Provider: o,
        Slot: l,
        ItemSlot: m
    }, h, r]
}
B(le, `createCollection`);
var ue = new WeakMap
  , de = class e extends Map {
    static{B(this, `OrderedDict`)
    } #e;
    constructor(e) {
        super(e),
        this.#e = [...super.keys()],
        ue.set(this, !0)
    }
    set(e, t) {
        return ue.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)),
        super.set(e, t),
        this
    }
    insert(e, t, n) {
        let r = this.has(t)
          , i = this.#e.length
          , a = me(e)
          , o = a >= 0 ? a : i + a
          , s = o < 0 || o >= i ? -1 : o;
        if (s === this.size || r && s === this.size - 1 || s === -1)
            return this.set(t, n),
            this;
        let c = this.size + +!r;
        a < 0 && o++;
        let l = [...this.#e], u, d = !1;
        for (let e = o; e < c; e++)
            if (o === e) {
                let i = l[e];
                l[e] === t && (i = l[e + 1]),
                r && this.delete(t),
                u = this.get(i),
                this.set(t, n)
            } else {
                !d && l[e - 1] === t && (d = !0);
                let n = l[d ? e : e - 1]
                  , r = u;
                u = this.get(n),
                this.delete(n),
                this.set(n, r)
            }
        return this
    }
    with(t, n, r) {
        let i = new e(this);
        return i.insert(t, n, r),
        i
    }
    before(e) {
        let t = this.#e.indexOf(e) - 1;
        if (!(t < 0))
            return this.entryAt(t)
    }
    setBefore(e, t, n) {
        let r = this.#e.indexOf(e);
        return r === -1 ? this : this.insert(r, t, n)
    }
    after(e) {
        let t = this.#e.indexOf(e);
        if (t = t === -1 || t === this.size - 1 ? -1 : t + 1,
        t !== -1)
            return this.entryAt(t)
    }
    setAfter(e, t, n) {
        let r = this.#e.indexOf(e);
        return r === -1 ? this : this.insert(r + 1, t, n)
    }
    first() {
        return this.entryAt(0)
    }
    last() {
        return this.entryAt(-1)
    }
    clear() {
        return this.#e = [],
        super.clear()
    }
    delete(e) {
        let t = super.delete(e);
        return t && this.#e.splice(this.#e.indexOf(e), 1),
        t
    }
    deleteAt(e) {
        let t = this.keyAt(e);
        return t === void 0 ? !1 : this.delete(t)
    }
    at(e) {
        let t = fe(this.#e, e);
        if (t !== void 0)
            return this.get(t)
    }
    entryAt(e) {
        let t = fe(this.#e, e);
        if (t !== void 0)
            return [t, this.get(t)]
    }
    indexOf(e) {
        return this.#e.indexOf(e)
    }
    keyAt(e) {
        return fe(this.#e, e)
    }
    from(e, t) {
        let n = this.indexOf(e);
        if (n === -1)
            return;
        let r = n + t;
        return r < 0 && (r = 0),
        r >= this.size && (r = this.size - 1),
        this.at(r)
    }
    keyFrom(e, t) {
        let n = this.indexOf(e);
        if (n === -1)
            return;
        let r = n + t;
        return r < 0 && (r = 0),
        r >= this.size && (r = this.size - 1),
        this.keyAt(r)
    }
    find(e, t) {
        let n = 0;
        for (let r of this) {
            if (Reflect.apply(e, t, [r, n, this]))
                return r;
            n++
        }
    }
    findIndex(e, t) {
        let n = 0;
        for (let r of this) {
            if (Reflect.apply(e, t, [r, n, this]))
                return n;
            n++
        }
        return -1
    }
    filter(t, n) {
        let r = []
          , i = 0;
        for (let e of this)
            Reflect.apply(t, n, [e, i, this]) && r.push(e),
            i++;
        return new e(r)
    }
    map(t, n) {
        let r = []
          , i = 0;
        for (let e of this)
            r.push([e[0], Reflect.apply(t, n, [e, i, this])]),
            i++;
        return new e(r)
    }
    reduce(...e) {
        let[t,n] = e
          , r = 0
          , i = n ?? this.at(0);
        for (let n of this)
            i = r === 0 && e.length === 1 ? n : Reflect.apply(t, this, [i, n, r, this]),
            r++;
        return i
    }
    reduceRight(...e) {
        let[t,n] = e
          , r = n ?? this.at(-1);
        for (let n = this.size - 1; n >= 0; n--) {
            let i = this.at(n);
            r = n === this.size - 1 && e.length === 1 ? i : Reflect.apply(t, this, [r, i, n, this])
        }
        return r
    }
    toSorted(t) {
        return new e([...this.entries()].sort(t))
    }
    toReversed() {
        let t = new e;
        for (let e = this.size - 1; e >= 0; e--) {
            let n = this.keyAt(e)
              , r = this.get(n);
            t.set(n, r)
        }
        return t
    }
    toSpliced(...t) {
        let n = [...this.entries()];
        return n.splice(...t),
        new e(n)
    }
    slice(t, n) {
        let r = new e
          , i = this.size - 1;
        if (t === void 0)
            return r;
        t < 0 && (t += this.size),
        n !== void 0 && n > 0 && (i = n - 1);
        for (let e = t; e <= i; e++) {
            let t = this.keyAt(e)
              , n = this.get(t);
            r.set(t, n)
        }
        return r
    }
    every(e, t) {
        let n = 0;
        for (let r of this) {
            if (!Reflect.apply(e, t, [r, n, this]))
                return !1;
            n++
        }
        return !0
    }
    some(e, t) {
        let n = 0;
        for (let r of this) {
            if (Reflect.apply(e, t, [r, n, this]))
                return !0;
            n++
        }
        return !1
    }
}
;
function fe(e, t) {
    if (`at` in Array.prototype)
        return Array.prototype.at.call(e, t);
    let n = pe(e, t);
    return n === -1 ? void 0 : e[n]
}
B(fe, `at`);
function pe(e, t) {
    let n = e.length
      , r = me(t)
      , i = r >= 0 ? r : n + r;
    return i < 0 || i >= n ? -1 : i
}
B(pe, `toSafeIndex`);
function me(e) {
    return e !== e || e === 0 ? 0 : Math.trunc(e)
}
B(me, `toSafeInteger`);
function he(e) {
    let t = e + `CollectionProvider`
      , [n,r] = d(t)
      , [i,a] = n(t, {
        collectionElement: null,
        collectionRef: {
            current: null
        },
        collectionRefObject: {
            current: null
        },
        itemMap: new de,
        setItemMap: B( () => void 0, `setItemMap`)
    })
      , o = B( ({state: e, ...t}) => e ? (0,
    E.jsx)(c, {
        ...t,
        state: e
    }) : (0,
    E.jsx)(s, {
        ...t
    }), `CollectionProvider`);
    o.displayName = t;
    let s = B(e => {
        let t = g();
        return (0,
        E.jsx)(c, {
            ...e,
            state: t
        })
    }
    , `CollectionInit`);
    s.displayName = t + `Init`;
    let c = B(e => {
        let {scope: t, children: n, state: r} = e
          , a = T.useRef(null)
          , [o,s] = T.useState(null)
          , c = M(a, s)
          , [l,u] = r;
        return T.useEffect( () => {
            if (!o)
                return;
            let e = ye( () => {}
            );
            return e.observe(o, {
                childList: !0,
                subtree: !0
            }),
            () => {
                e.disconnect()
            }
        }
        , [o]),
        (0,
        E.jsx)(i, {
            scope: t,
            itemMap: l,
            setItemMap: u,
            collectionRef: c,
            collectionRefObject: a,
            collectionElement: o,
            children: n
        })
    }
    , `CollectionProviderImpl`);
    c.displayName = t + `Impl`;
    let l = e + `CollectionSlot`
      , u = P(l)
      , f = T.forwardRef( (e, t) => {
        let {scope: n, children: r} = e;
        return (0,
        E.jsx)(u, {
            ref: M(t, a(l, n).collectionRef),
            children: r
        })
    }
    );
    f.displayName = l;
    let p = e + `CollectionItemSlot`
      , m = P(p)
      , h = T.forwardRef( (e, t) => {
        let {scope: n, children: r, ...i} = e
          , o = T.useRef(null)
          , [s,c] = T.useState(null)
          , l = M(t, o, c)
          , {setItemMap: u} = a(p, n)
          , d = T.useRef(i);
        ge(d.current, i) || (d.current = i);
        let f = d.current;
        return T.useEffect( () => {
            let e = f;
            return u(t => s ? t.has(s) ? t.set(s, {
                ...e,
                element: s
            }).toSorted(ve) : (t.set(s, {
                ...e,
                element: s
            }),
            t.toSorted(ve)) : t),
            () => {
                u(e => !s || !e.has(s) ? e : (e.delete(s),
                new de(e)))
            }
        }
        , [s, f, u]),
        (0,
        E.jsx)(m, {
            "data-radix-collection-item": ``,
            ref: l,
            children: r
        })
    }
    );
    h.displayName = p;
    function g() {
        return T.useState(new de)
    }
    B(g, `useInitCollection`);
    function _(t) {
        let {itemMap: n} = a(e + `CollectionConsumer`, t);
        return n
    }
    return B(_, `useCollection`),
    [{
        Provider: o,
        Slot: f,
        ItemSlot: h
    }, {
        createCollectionScope: r,
        useCollection: _,
        useInitCollection: g
    }]
}
B(he, `createCollection`);
function ge(e, t) {
    if (e === t)
        return !0;
    if (typeof e != `object` || typeof t != `object` || e == null || t == null)
        return !1;
    let n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (let r of n)
        if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r])
            return !1;
    return !0
}
B(ge, `shallowEqual`);
function _e(e, t) {
    return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING)
}
B(_e, `isElementPreceding`);
function ve(e, t) {
    return !e[1].element || !t[1].element ? 0 : _e(e[1].element, t[1].element) ? -1 : 1
}
B(ve, `sortByDocumentPosition`);
function ye(e) {
    return new MutationObserver(t => {
        for (let n of t)
            if (n.type === `childList`) {
                e();
                return
            }
    }
    )
}
B(ye, `getChildListObserver`);
var be = Object.defineProperty
  , xe = (e, t) => be(e, `name`, {
    value: t,
    configurable: !0
})
  , Se = T.createContext(void 0);
function Ce(e) {
    let t = T.useContext(Se);
    return e || t || `ltr`
}
xe(Ce, `useDirection`);
var we = Object.defineProperty
  , Te = (e, t) => we(e, `name`, {
    value: t,
    configurable: !0
});
function Ee(e, t) {
    if (typeof e == `function`)
        return e(t);
    e != null && (e.current = t)
}
Te(Ee, `setRef`);
function De(...e) {
    return t => {
        let n = !1
          , r = e.map(e => {
            let r = Ee(e, t);
            return !n && typeof r == `function` && (n = !0),
            r
        }
        );
        if (n)
            return () => {
                for (let t = 0; t < r.length; t++) {
                    let n = r[t];
                    typeof n == `function` ? n() : Ee(e[t], null)
                }
            }
    }
}
Te(De, `composeRefs`);
function Oe(...e) {
    return T.useCallback(De(...e), e)
}
Te(Oe, `useComposedRefs`);
var ke = Object.defineProperty
  , Ae = (e, t) => ke(e, `name`, {
    value: t,
    configurable: !0
});
function je(e) {
    let[t,n] = T.useState(void 0);
    return m( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            let t = new ResizeObserver(t => {
                if (!Array.isArray(t) || !t.length)
                    return;
                let r = t[0], i, a;
                if (`borderBoxSize` in r) {
                    let e = r.borderBoxSize
                      , t = Array.isArray(e) ? e[0] : e;
                    i = t.inlineSize,
                    a = t.blockSize
                } else
                    i = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: i,
                    height: a
                })
            }
            );
            return t.observe(e, {
                box: `border-box`
            }),
            () => t.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
Ae(je, `useSize`);
var Me = Object.defineProperty
  , V = (e, t) => Me(e, `name`, {
    value: t,
    configurable: !0
})
  , Ne = `Checkbox`
  , [Pe,Fe] = d(Ne)
  , [Ie,Le] = Pe(Ne);
function Re(e) {
    let {__scopeCheckbox: t, checked: n, children: r, defaultChecked: i, disabled: a, form: o, name: s, onCheckedChange: c, required: l, value: u=`on`, internal_do_not_use_render: d} = e
      , [f,p] = g({
        prop: n,
        defaultProp: i ?? !1,
        onChange: c,
        caller: Ne
    })
      , [m,h] = T.useState(null)
      , [_,v] = T.useState(null)
      , y = T.useRef(!1)
      , [b,x] = T.useReducer(e => e + 1, 0)
      , S = m ? !!o || !!m.closest(`form`) : !0
      , C = {
        checked: f,
        disabled: a,
        setChecked: p,
        control: m,
        setControl: h,
        name: s,
        form: o,
        value: u,
        hasConsumerStoppedPropagationRef: y,
        userInteractionCount: b,
        onUserInteraction: x,
        required: l,
        defaultChecked: H(i) ? !1 : i,
        isFormControl: S,
        bubbleInput: _,
        setBubbleInput: v
    };
    return (0,
    E.jsx)(Ie, {
        scope: t,
        ...C,
        children: Ke(d) ? d(C) : r
    })
}
V(Re, `CheckboxProvider`);
var ze = `CheckboxTrigger`
  , Be = T.forwardRef(V(function({__scopeCheckbox: e, onKeyDown: t, onClick: n, ...r}, i) {
    let {control: a, value: s, disabled: c, checked: l, required: u, setControl: d, setChecked: p, hasConsumerStoppedPropagationRef: m, onUserInteraction: h, isFormControl: g, bubbleInput: _} = Le(ze, e)
      , v = Oe(i, d)
      , y = T.useRef(l);
    return T.useEffect( () => {
        let e = a?.form;
        if (e) {
            let t = V( () => p(y.current), `reset`);
            return e.addEventListener(`reset`, t),
            () => e.removeEventListener(`reset`, t)
        }
    }
    , [a, p]),
    (0,
    E.jsx)(o.button, {
        type: `button`,
        role: `checkbox`,
        "aria-checked": H(l) ? `mixed` : l,
        "aria-required": u,
        "data-state": qe(l),
        "data-disabled": c ? `` : void 0,
        disabled: c,
        value: s,
        ...r,
        ref: v,
        onKeyDown: f(t, e => {
            e.key === `Enter` && e.preventDefault()
        }
        ),
        onClick: f(n, e => {
            h(),
            p(e => H(e) ? !0 : !e),
            _ && g && (m.current = e.isPropagationStopped(),
            m.current || e.stopPropagation())
        }
        )
    })
}, `CheckboxTrigger`))
  , Ve = T.forwardRef(V(function(e, t) {
    let {__scopeCheckbox: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c, onCheckedChange: l, form: u, ...d} = e;
    return (0,
    E.jsx)(Re, {
        __scopeCheckbox: n,
        checked: i,
        defaultChecked: a,
        disabled: s,
        required: o,
        onCheckedChange: l,
        name: r,
        form: u,
        value: c,
        internal_do_not_use_render: ({isFormControl: e}) => (0,
        E.jsxs)(E.Fragment, {
            children: [(0,
            E.jsx)(Be, {
                ...d,
                ref: t,
                __scopeCheckbox: n
            }), e && (0,
            E.jsx)(Ge, {
                __scopeCheckbox: n
            })]
        })
    })
}, `Checkbox`))
  , He = `CheckboxIndicator`
  , Ue = T.forwardRef(V(function(e, t) {
    let {__scopeCheckbox: n, forceMount: r, ...i} = e
      , a = Le(He, n);
    return (0,
    E.jsx)(u, {
        present: r || H(a.checked) || a.checked === !0,
        children: (0,
        E.jsx)(o.span, {
            "data-state": qe(a.checked),
            "data-disabled": a.disabled ? `` : void 0,
            ...i,
            ref: t,
            style: {
                pointerEvents: `none`,
                ...e.style
            }
        })
    })
}, `CheckboxIndicator`))
  , We = `CheckboxBubbleInput`
  , Ge = T.forwardRef(V(function({__scopeCheckbox: e, onClick: t, ...n}, r) {
    let {control: i, hasConsumerStoppedPropagationRef: a, userInteractionCount: s, checked: c, defaultChecked: l, required: u, disabled: d, name: p, value: m, form: h, bubbleInput: g, setBubbleInput: _} = Le(We, e)
      , v = Oe(r, _)
      , y = je(i)
      , b = T.useRef(!1)
      , x = T.useRef(c)
      , S = T.useRef(s);
    T.useEffect( () => {
        let e = g;
        if (!e)
            return;
        let t = window.HTMLInputElement.prototype
          , n = Object.getOwnPropertyDescriptor(t, `checked`).set
          , r = s !== S.current;
        S.current = s;
        let i = x.current !== c;
        x.current = c;
        let o = !(r && a.current);
        if (i && n) {
            b.current = !r;
            let t = new Event(`click`,{
                bubbles: o
            });
            e.indeterminate = H(c),
            n.call(e, H(c) ? !1 : c),
            e.dispatchEvent(t),
            b.current = !1
        }
    }
    , [g, c, a, s]);
    let C = T.useRef(H(c) ? !1 : c);
    return (0,
    E.jsx)(o.input, {
        type: `checkbox`,
        "aria-hidden": !0,
        defaultChecked: l ?? C.current,
        required: u,
        disabled: d,
        name: p,
        value: m,
        form: h,
        ...n,
        tabIndex: -1,
        ref: v,
        onClick: f(t, e => {
            b.current && e.stopPropagation()
        }
        ),
        style: {
            ...n.style,
            ...y,
            position: `absolute`,
            pointerEvents: `none`,
            opacity: 0,
            margin: 0,
            transform: `translateX(-100%)`
        }
    })
}, `CheckboxBubbleInput`));
function Ke(e) {
    return typeof e == `function`
}
V(Ke, `isFunction`);
function H(e) {
    return e === `indeterminate`
}
V(H, `isIndeterminate`);
function qe(e) {
    return H(e) ? `indeterminate` : e ? `checked` : `unchecked`
}
V(qe, `getState`);
var Je = [`top`, `right`, `bottom`, `left`]
  , Ye = Math.min
  , U = Math.max
  , Xe = Math.round
  , Ze = Math.floor
  , W = e => ({
    x: e,
    y: e
})
  , Qe = {
    left: `right`,
    right: `left`,
    bottom: `top`,
    top: `bottom`
};
function $e(e, t, n) {
    return U(e, Ye(t, n))
}
function G(e, t) {
    return typeof e == `function` ? e(t) : e
}
function et(e) {
    return e.split(`-`)[0]
}
function tt(e) {
    return e.split(`-`)[1]
}
function nt(e) {
    return e === `x` ? `y` : `x`
}
function rt(e) {
    return e === `y` ? `height` : `width`
}
function K(e) {
    let t = e[0];
    return t === `t` || t === `b` ? `y` : `x`
}
function it(e) {
    return nt(K(e))
}
function at(e, t, n) {
    n === void 0 && (n = !1);
    let r = tt(e)
      , i = it(e)
      , a = rt(i)
      , o = i === `x` ? r === (n ? `end` : `start`) ? `right` : `left` : r === `start` ? `bottom` : `top`;
    return t.reference[a] > t.floating[a] && (o = mt(o)),
    [o, mt(o)]
}
function ot(e) {
    let t = mt(e);
    return [st(e), t, st(t)]
}
function st(e) {
    return e.includes(`start`) ? e.replace(`start`, `end`) : e.replace(`end`, `start`)
}
var ct = [`left`, `right`]
  , lt = [`right`, `left`]
  , ut = [`top`, `bottom`]
  , dt = [`bottom`, `top`];
function ft(e, t, n) {
    switch (e) {
    case `top`:
    case `bottom`:
        return n ? t ? lt : ct : t ? ct : lt;
    case `left`:
    case `right`:
        return t ? ut : dt;
    default:
        return []
    }
}
function pt(e, t, n, r) {
    let i = tt(e)
      , a = ft(et(e), n === `start`, r);
    return i && (a = a.map(e => e + `-` + i),
    t && (a = a.concat(a.map(st)))),
    a
}
function mt(e) {
    let t = et(e);
    return Qe[t] + e.slice(t.length)
}
function ht(e) {
    return {
        top: e.top ?? 0,
        right: e.right ?? 0,
        bottom: e.bottom ?? 0,
        left: e.left ?? 0
    }
}
function gt(e) {
    return typeof e == `number` ? {
        top: e,
        right: e,
        bottom: e,
        left: e
    } : ht(e)
}
function _t(e) {
    let {x: t, y: n, width: r, height: i} = e;
    return {
        width: r,
        height: i,
        top: n,
        left: t,
        right: t + r,
        bottom: n + i,
        x: t,
        y: n
    }
}
function vt(e, t, n) {
    let {reference: r, floating: i} = e, a = K(t), o = it(t), s = rt(o), c = et(t), l = a === `y`, u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
    switch (c) {
    case `top`:
        p = {
            x: u,
            y: r.y - i.height
        };
        break;
    case `bottom`:
        p = {
            x: u,
            y: r.y + r.height
        };
        break;
    case `right`:
        p = {
            x: r.x + r.width,
            y: d
        };
        break;
    case `left`:
        p = {
            x: r.x - i.width,
            y: d
        };
        break;
    default:
        p = {
            x: r.x,
            y: r.y
        }
    }
    let m = tt(t);
    return m && (p[o] += f * (m === `end` ? 1 : -1) * (n && l ? -1 : 1)),
    p
}
async function yt(e, t) {
    t === void 0 && (t = {});
    let {x: n, y: r, platform: i, rects: a, elements: o, strategy: s} = e
      , {boundary: c=`clippingAncestors`, rootBoundary: l=`viewport`, elementContext: u=`floating`, altBoundary: d=!1, padding: f=0} = G(t, e)
      , p = gt(f)
      , m = o[d ? u === `floating` ? `reference` : `floating` : u]
      , h = _t(await i.getClippingRect({
        element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
        boundary: c,
        rootBoundary: l,
        strategy: s
    }))
      , g = u === `floating` ? {
        x: n,
        y: r,
        width: a.floating.width,
        height: a.floating.height
    } : a.reference
      , _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating))
      , v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
        x: 1,
        y: 1
    }
      , y = _t(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: o,
        rect: g,
        offsetParent: _,
        strategy: s
    }) : g);
    return {
        top: (h.top - y.top + p.top) / v.y,
        bottom: (y.bottom - h.bottom + p.bottom) / v.y,
        left: (h.left - y.left + p.left) / v.x,
        right: (y.right - h.right + p.right) / v.x
    }
}
var bt = 50
  , xt = async (e, t, n) => {
    let {placement: r=`bottom`, strategy: i=`absolute`, middleware: a=[], platform: o} = n
      , s = o.detectOverflow ? o : {
        ...o,
        detectOverflow: yt
    }
      , c = await (o.isRTL == null ? void 0 : o.isRTL(t))
      , l = await o.getElementRects({
        reference: e,
        floating: t,
        strategy: i
    })
      , {x: u, y: d} = vt(l, r, c)
      , f = r
      , p = 0
      , m = {};
    for (let n = 0; n < a.length; n++) {
        let h = a[n];
        if (!h)
            continue;
        let {name: g, fn: _} = h
          , {x: v, y, data: b, reset: x} = await _({
            x: u,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: i,
            middlewareData: m,
            rects: l,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        u = v ?? u,
        d = y ?? d,
        m[g] = {
            ...m[g],
            ...b
        },
        x && p < bt && (p++,
        typeof x == `object` && (x.placement && (f = x.placement),
        x.rects && (l = x.rects === !0 ? await o.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }) : x.rects),
        {x: u, y: d} = vt(l, f, c)),
        n = -1)
    }
    return {
        x: u,
        y: d,
        placement: f,
        strategy: i,
        middlewareData: m
    }
}
  , St = e => ({
    name: `arrow`,
    options: e,
    async fn(t) {
        let {x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c} = t
          , {element: l, padding: u=0} = G(e, t) || {};
        if (l == null)
            return {};
        let d = gt(u)
          , f = {
            x: n,
            y: r
        }
          , p = it(i)
          , m = rt(p)
          , h = await o.getDimensions(l)
          , g = p === `y`
          , _ = g ? `top` : `left`
          , v = g ? `bottom` : `right`
          , y = g ? `clientHeight` : `clientWidth`
          , b = a.reference[m] + a.reference[p] - f[p] - a.floating[m]
          , x = f[p] - a.reference[p]
          , S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l))
          , C = S ? S[y] : 0;
        (!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
        let w = b / 2 - x / 2
          , T = C / 2 - h[m] / 2 - 1
          , E = Ye(d[_], T)
          , D = Ye(d[v], T)
          , O = C - h[m] - D
          , k = C / 2 - h[m] / 2 + w
          , A = $e(E, k, O)
          , j = !c.arrow && tt(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0
          , M = j ? k < E ? k - E : k - O : 0;
        return {
            [p]: f[p] + M,
            data: {
                [p]: A,
                centerOffset: k - A - M,
                ...j && {
                    alignmentOffset: M
                }
            },
            reset: j
        }
    }
})
  , Ct = function(e) {
    return e === void 0 && (e = {}),
    {
        name: `flip`,
        options: e,
        async fn(t) {
            var n;
            let {placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c} = t
              , {mainAxis: l=!0, crossAxis: u=!0, fallbackPlacements: d, fallbackStrategy: f=`bestFit`, fallbackAxisSideDirection: p=`none`, flipAlignment: m=!0, ...h} = G(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            let g = et(r)
              , _ = K(o)
              , v = et(o) === o
              , y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating))
              , b = d || (v || !m ? [mt(o)] : ot(o))
              , x = p !== `none`;
            !d && x && b.push(...pt(o, m, p, y));
            let S = [o, ...b]
              , C = await s.detectOverflow(t, h)
              , w = []
              , T = i.flip?.overflows || [];
            if (l && w.push(C[g]),
            u) {
                let e = at(r, a, y);
                w.push(C[e[0]], C[e[1]])
            }
            if (T = [...T, {
                placement: r,
                overflows: w
            }],
            !w.every(e => e <= 0)) {
                let e = (i.flip?.index || 0) + 1
                  , t = S[e];
                if (t && (!(u === `alignment` && _ !== K(t)) || T.every(e => K(e.placement) === _ ? e.overflows[0] > 0 : !0)))
                    return {
                        data: {
                            index: e,
                            overflows: T
                        },
                        reset: {
                            placement: t
                        }
                    };
                let n = T.filter(e => e.overflows[0] <= 0).sort( (e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
                if (!n)
                    switch (f) {
                    case `bestFit`:
                        {
                            let e = T.filter(e => {
                                if (x) {
                                    let t = K(e.placement);
                                    return t === _ || t === `y`
                                }
                                return !0
                            }
                            ).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce( (e, t) => e + t, 0)]).sort( (e, t) => e[1] - t[1])[0]?.[0];
                            e && (n = e);
                            break
                        }
                    case `initialPlacement`:
                        n = o;
                        break
                    }
                if (r !== n)
                    return {
                        reset: {
                            placement: n
                        }
                    }
            }
            return {}
        }
    }
};
function wt(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Tt(e) {
    return Je.some(t => e[t] >= 0)
}
var Et = function(e) {
    return e === void 0 && (e = {}),
    {
        name: `hide`,
        options: e,
        async fn(t) {
            let {rects: n, platform: r} = t
              , {strategy: i=`referenceHidden`, ...a} = G(e, t);
            switch (i) {
            case `referenceHidden`:
                {
                    let e = wt(await r.detectOverflow(t, {
                        ...a,
                        elementContext: `reference`
                    }), n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: e,
                            referenceHidden: Tt(e)
                        }
                    }
                }
            case `escaped`:
                {
                    let e = wt(await r.detectOverflow(t, {
                        ...a,
                        altBoundary: !0
                    }), n.floating);
                    return {
                        data: {
                            escapedOffsets: e,
                            escaped: Tt(e)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Dt = new Set([`left`, `top`]);
async function Ot(e, t) {
    let {placement: n, platform: r, elements: i} = e
      , a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating))
      , o = et(n)
      , s = tt(n)
      , c = K(n) === `y`
      , l = Dt.has(o) ? -1 : 1
      , u = a && c ? -1 : 1
      , d = G(t, e)
      , {mainAxis: f, crossAxis: p, alignmentAxis: m} = typeof d == `number` ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return s && typeof m == `number` && (p = s === `end` ? m * -1 : m),
    c ? {
        x: p * u,
        y: f * l
    } : {
        x: f * l,
        y: p * u
    }
}
var kt = function(e) {
    return e === void 0 && (e = 0),
    {
        name: `offset`,
        options: e,
        async fn(t) {
            var n;
            let {x: r, y: i, placement: a, middlewareData: o} = t
              , s = await Ot(t, e);
            return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
                x: r + s.x,
                y: i + s.y,
                data: {
                    ...s,
                    placement: a
                }
            }
        }
    }
}
  , At = function(e) {
    return e === void 0 && (e = {}),
    {
        name: `shift`,
        options: e,
        async fn(t) {
            let {x: n, y: r, placement: i, platform: a} = t
              , {mainAxis: o=!0, crossAxis: s=!1, limiter: c={
                fn: e => {
                    let {x: t, y: n} = e;
                    return {
                        x: t,
                        y: n
                    }
                }
            }, ...l} = G(e, t)
              , u = {
                x: n,
                y: r
            }
              , d = await a.detectOverflow(t, l)
              , f = K(i)
              , p = nt(f)
              , m = u[p]
              , h = u[f]
              , g = (e, t) => $e(t + d[e === `y` ? `top` : `left`], t, t - d[e === `y` ? `bottom` : `right`]);
            o && (m = g(p, m)),
            s && (h = g(f, h));
            let _ = c.fn({
                ...t,
                [p]: m,
                [f]: h
            });
            return {
                ..._,
                data: {
                    x: _.x - n,
                    y: _.y - r,
                    enabled: {
                        [p]: o,
                        [f]: s
                    }
                }
            }
        }
    }
}
  , jt = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            let {x: n, y: r, placement: i, rects: a, middlewareData: o} = t
              , {offset: s=0, mainAxis: c=!0, crossAxis: l=!0} = G(e, t)
              , u = {
                x: n,
                y: r
            }
              , d = K(i)
              , f = nt(d)
              , p = u[f]
              , m = u[d]
              , h = G(s, t)
              , g = typeof h == `number` ? {
                mainAxis: h,
                crossAxis: 0
            } : {
                mainAxis: h.mainAxis ?? 0,
                crossAxis: h.crossAxis ?? 0
            };
            if (c) {
                let e = f === `y` ? `height` : `width`
                  , t = a.reference[f] - a.floating[e] + g.mainAxis
                  , n = a.reference[f] + a.reference[e] - g.mainAxis;
                p < t ? p = t : p > n && (p = n)
            }
            if (l) {
                let e = f === `y` ? `width` : `height`
                  , t = Dt.has(et(i))
                  , n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis)
                  , r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
                m < n ? m = n : m > r && (m = r)
            }
            return {
                [f]: p,
                [d]: m
            }
        }
    }
}
  , Mt = function(e) {
    return e === void 0 && (e = {}),
    {
        name: `size`,
        options: e,
        async fn(t) {
            let {placement: n, rects: r, platform: i, elements: a} = t, {apply: o= () => {}
            , ...s} = G(e, t), c = await i.detectOverflow(t, s), l = et(n), u = tt(n), d = K(n) === `y`, {width: f, height: p} = r.floating, m, h;
            l === `top` || l === `bottom` ? (m = l,
            h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? `start` : `end`) ? `left` : `right`) : (h = l,
            m = u === `end` ? `top` : `bottom`);
            let g = p - c.top - c.bottom
              , _ = f - c.left - c.right
              , v = Ye(p - c[m], g)
              , y = Ye(f - c[h], _)
              , b = t.middlewareData.shift
              , x = !b
              , S = v
              , C = y;
            b != null && b.enabled.x && (C = _),
            b != null && b.enabled.y && (S = g),
            x && !u && (d ? C = f - 2 * U(c.left, c.right) : S = p - 2 * U(c.top, c.bottom)),
            await o({
                ...t,
                availableWidth: C,
                availableHeight: S
            });
            let w = await i.getDimensions(a.floating);
            return f !== w.width || p !== w.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Nt() {
    return typeof window < `u`
}
function Pt(e) {
    return It(e) ? (e.nodeName || ``).toLowerCase() : `#document`
}
function q(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Ft(e) {
    return ((It(e) ? e.ownerDocument : e.document) || window.document)?.documentElement
}
function It(e) {
    return Nt() ? e instanceof Node || e instanceof q(e).Node : !1
}
function J(e) {
    return Nt() ? e instanceof Element || e instanceof q(e).Element : !1
}
function Lt(e) {
    return Nt() ? e instanceof HTMLElement || e instanceof q(e).HTMLElement : !1
}
function Rt(e) {
    return !Nt() || typeof ShadowRoot > `u` ? !1 : e instanceof ShadowRoot || e instanceof q(e).ShadowRoot
}
function zt(e) {
    let {overflow: t, overflowX: n, overflowY: r, display: i} = Y(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== `inline` && i !== `contents`
}
function Bt(e) {
    return /^(table|td|th)$/.test(Pt(e))
}
function Vt(e) {
    try {
        if (e.matches(`:popover-open`))
            return !0
    } catch {}
    try {
        return e.matches(`:modal`)
    } catch {
        return !1
    }
}
var Ht = /transform|translate|scale|rotate|perspective|filter/, Ut = /paint|layout|strict|content/, Wt = e => !!e && e !== `none`, Gt;
function Kt(e) {
    let t = J(e) ? Y(e) : e;
    return Wt(t.transform) || Wt(t.translate) || Wt(t.scale) || Wt(t.rotate) || Wt(t.perspective) || !Jt() && (Wt(t.backdropFilter) || Wt(t.filter)) || Ht.test(t.willChange || ``) || Ut.test(t.contain || ``)
}
function qt(e) {
    let t = Zt(e);
    for (; Lt(t) && !Yt(t); ) {
        if (Kt(t))
            return t;
        if (Vt(t))
            return null;
        t = Zt(t)
    }
    return null
}
function Jt() {
    return Gt ??= typeof CSS < `u` && CSS.supports && CSS.supports(`-webkit-backdrop-filter`, `none`),
    Gt
}
function Yt(e) {
    return /^(html|body|#document)$/.test(Pt(e))
}
function Y(e) {
    return q(e).getComputedStyle(e)
}
function Xt(e) {
    return J(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Zt(e) {
    if (Pt(e) === `html`)
        return e;
    let t = e.assignedSlot || e.parentNode || Rt(e) && e.host || Ft(e);
    return Rt(t) ? t.host : t
}
function Qt(e) {
    let t = Zt(e);
    return Yt(t) ? (e.ownerDocument || e).body : Lt(t) && zt(t) ? t : Qt(t)
}
function $t(e, t, n) {
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    let r = Qt(e)
      , i = r === e.ownerDocument?.body
      , a = q(r);
    if (i) {
        let e = en(a);
        return t.concat(a, a.visualViewport || [], zt(r) ? r : [], e && n ? $t(e) : [])
    } else
        return t.concat(r, $t(r, [], n))
}
function en(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function tn(e) {
    let t = Y(e)
      , n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0
      , i = Lt(e)
      , a = i ? e.offsetWidth : n
      , o = i ? e.offsetHeight : r
      , s = Xe(n) !== a || Xe(r) !== o;
    return s && (n = a,
    r = o),
    {
        width: n,
        height: r,
        $: s
    }
}
function nn(e) {
    return J(e) ? e : e.contextElement
}
function rn(e) {
    let t = nn(e);
    if (!Lt(t))
        return W(1);
    let n = t.getBoundingClientRect()
      , {width: r, height: i, $: a} = tn(t)
      , o = (a ? Xe(n.width) : n.width) / r
      , s = (a ? Xe(n.height) : n.height) / i;
    return (!o || !Number.isFinite(o)) && (o = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    {
        x: o,
        y: s
    }
}
var an = W(0);
function on(e) {
    let t = q(e);
    return !Jt() || !t.visualViewport ? an : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function sn(e, t, n) {
    return t === void 0 && (t = !1),
    !!n && t && n === q(e)
}
function cn(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    let i = e.getBoundingClientRect()
      , a = nn(e)
      , o = W(1);
    t && (r ? J(r) && (o = rn(r)) : o = rn(e));
    let s = sn(a, n, r) ? on(a) : W(0)
      , c = (i.left + s.x) / o.x
      , l = (i.top + s.y) / o.y
      , u = i.width / o.x
      , d = i.height / o.y;
    if (a && r) {
        let e = q(a)
          , t = J(r) ? q(r) : r
          , n = e
          , i = en(n);
        for (; i && t !== n; ) {
            let e = rn(i)
              , t = i.getBoundingClientRect()
              , r = Y(i)
              , a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x
              , o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
            c *= e.x,
            l *= e.y,
            u *= e.x,
            d *= e.y,
            c += a,
            l += o,
            n = q(i),
            i = en(n)
        }
    }
    return _t({
        width: u,
        height: d,
        x: c,
        y: l
    })
}
function ln(e, t) {
    let n = Xt(e).scrollLeft;
    return t ? t.left + n : cn(Ft(e)).left + n
}
function un(e, t) {
    let n = e.getBoundingClientRect();
    return {
        x: n.left + t.scrollLeft - ln(e, n),
        y: n.top + t.scrollTop
    }
}
function dn(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: i} = e
      , a = i === `fixed`
      , o = Ft(r)
      , s = t ? Vt(t.floating) : !1;
    if (r === o || s && a)
        return n;
    let c = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , l = W(1)
      , u = W(0)
      , d = Lt(r);
    if ((d || !a) && ((Pt(r) !== `body` || zt(o)) && (c = Xt(r)),
    d)) {
        let e = cn(r);
        l = rn(r),
        u.x = e.x + r.clientLeft,
        u.y = e.y + r.clientTop
    }
    let f = o && !d && !a ? un(o, c) : W(0);
    return {
        width: n.width * l.x,
        height: n.height * l.y,
        x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
        y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
    }
}
function fn(e) {
    return e.getClientRects ? Array.from(e.getClientRects()) : []
}
function pn(e) {
    let t = Xt(e)
      , n = e.ownerDocument.body
      , r = U(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth)
      , i = U(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight)
      , a = -t.scrollLeft + ln(e)
      , o = -t.scrollTop;
    return Y(n).direction === `rtl` && (a += U(e.clientWidth, n.clientWidth) - r),
    {
        width: r,
        height: i,
        x: a,
        y: o
    }
}
var mn = 25;
function hn(e, t, n) {
    n === void 0 && (n = `viewport`);
    let r = n === `layoutViewport`
      , i = q(e)
      , a = Ft(e)
      , o = i.visualViewport
      , s = a.clientWidth
      , c = a.clientHeight
      , l = 0
      , u = 0;
    if (o) {
        let e = !Jt() || t === `fixed`;
        r ? e || (l = -o.offsetLeft,
        u = -o.offsetTop) : (s = o.width,
        c = o.height,
        e && (l = o.offsetLeft,
        u = o.offsetTop))
    }
    if (ln(a) <= 0) {
        let e = a.ownerDocument
          , t = e.body
          , n = getComputedStyle(t)
          , r = e.compatMode === `CSS1Compat` && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0
          , i = Math.abs(a.clientWidth - t.clientWidth - r)
          , o = getComputedStyle(a).scrollbarGutter === `stable both-edges` ? i / 2 : i;
        o <= mn && (s -= o)
    }
    return {
        width: s,
        height: c,
        x: l,
        y: u
    }
}
function gn(e, t) {
    let n = cn(e, !0, t === `fixed`)
      , r = n.top + e.clientTop
      , i = n.left + e.clientLeft
      , a = rn(e);
    return {
        width: e.clientWidth * a.x,
        height: e.clientHeight * a.y,
        x: i * a.x,
        y: r * a.y
    }
}
function _n(e, t, n) {
    let r;
    if (t === `viewport` || t === `layoutViewport`)
        r = hn(e, n, t);
    else if (t === `document`)
        r = pn(Ft(e));
    else if (J(t))
        r = gn(t, n);
    else {
        let n = on(e);
        r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
        }
    }
    return _t(r)
}
function vn(e, t) {
    let n = t.get(e);
    if (n)
        return n;
    let r = $t(e, [], !1).filter(e => J(e) && Pt(e) !== `body`)
      , i = null
      , a = Y(e).position === `fixed`
      , o = a ? Zt(e) : e;
    for (; J(o) && !Yt(o); ) {
        let e = Y(o)
          , t = Kt(o)
          , n = i ? i.position : a ? `fixed` : ``;
        !t && (n === `fixed` || n === `absolute` && e.position === `static`) ? r = r.filter(e => e !== o) : i = e,
        o = Zt(o)
    }
    return t.set(e, r),
    r
}
function yn(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: i} = e
      , a = [...n === `clippingAncestors` ? Vt(t) ? [] : vn(t, this._c) : [].concat(n), r]
      , o = _n(t, a[0], i)
      , s = o.top
      , c = o.right
      , l = o.bottom
      , u = o.left;
    for (let e = 1; e < a.length; e++) {
        let n = _n(t, a[e], i);
        s = U(n.top, s),
        c = Ye(n.right, c),
        l = Ye(n.bottom, l),
        u = U(n.left, u)
    }
    return {
        width: c - u,
        height: l - s,
        x: u,
        y: s
    }
}
function bn(e) {
    let {width: t, height: n} = tn(e);
    return {
        width: t,
        height: n
    }
}
function xn(e, t, n) {
    let r = Lt(t)
      , i = Ft(t)
      , a = n === `fixed`
      , o = cn(e, !0, a, t)
      , s = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , c = W(0);
    if ((r || !a) && ((Pt(t) !== `body` || zt(i)) && (s = Xt(t)),
    r)) {
        let e = cn(t, !0, a, t);
        c.x = e.x + t.clientLeft,
        c.y = e.y + t.clientTop
    }
    !r && i && (c.x = ln(i));
    let l = i && !r && !a ? un(i, s) : W(0);
    return {
        x: o.left + s.scrollLeft - c.x - l.x,
        y: o.top + s.scrollTop - c.y - l.y,
        width: o.width,
        height: o.height
    }
}
function Sn(e) {
    return Y(e).position === `static`
}
function Cn(e, t) {
    if (!Lt(e) || Y(e).position === `fixed`)
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return Ft(e) === n && (n = n.ownerDocument.body),
    n
}
function wn(e, t) {
    let n = q(e);
    if (Vt(e))
        return n;
    if (!Lt(e)) {
        let t = Zt(e);
        for (; t && !Yt(t); ) {
            if (J(t) && !Sn(t))
                return t;
            t = Zt(t)
        }
        return n
    }
    let r = Cn(e, t);
    for (; r && Bt(r) && Sn(r); )
        r = Cn(r, t);
    return r && Yt(r) && Sn(r) && !Kt(r) ? n : r || qt(e) || n
}
var Tn = async function(e) {
    let t = this.getOffsetParent || wn
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: xn(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function En(e) {
    return Y(e).direction === `rtl`
}
var Dn = {
    convertOffsetParentRelativeRectToViewportRelativeRect: dn,
    getDocumentElement: Ft,
    getClippingRect: yn,
    getOffsetParent: wn,
    getElementRects: Tn,
    getClientRects: fn,
    getDimensions: bn,
    getScale: rn,
    isElement: J,
    isRTL: En
};
function On(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function kn(e, t, n) {
    let r = null, i, a = Ft(e);
    function o() {
        var e;
        clearTimeout(i),
        (e = r) == null || e.disconnect(),
        r = null
    }
    function s(n, c) {
        n === void 0 && (n = !1),
        c === void 0 && (c = 1),
        o();
        let l = e.getBoundingClientRect()
          , {left: u, top: d, width: f, height: p} = l;
        if (n || t(),
        !f || !p)
            return;
        let m = Ze(d)
          , h = Ze(a.clientWidth - (u + f))
          , g = Ze(a.clientHeight - (d + p))
          , _ = Ze(u)
          , v = {
            rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
            threshold: U(0, Ye(1, c)) || 1
        }
          , y = !0;
        function b(t) {
            let n = t[0].intersectionRatio;
            if (!On(l, e.getBoundingClientRect()))
                return s();
            if (n !== c) {
                if (!y)
                    return s();
                n ? s(!1, n) : i = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            y = !1
        }
        try {
            r = new IntersectionObserver(b,{
                ...v,
                root: a.ownerDocument
            })
        } catch {
            r = new IntersectionObserver(b,v)
        }
        r.observe(e)
    }
    let c = q(e)
      , l = () => s(n);
    return c.addEventListener(`resize`, l),
    s(!0),
    () => {
        c.removeEventListener(`resize`, l),
        o()
    }
}
function An(e, t, n, r) {
    r === void 0 && (r = {});
    let {ancestorScroll: i=!0, ancestorResize: a=!0, elementResize: o=typeof ResizeObserver == `function`, layoutShift: s=typeof IntersectionObserver == `function`, animationFrame: c=!1} = r
      , l = nn(e)
      , u = i || a ? [...l ? $t(l) : [], ...t ? $t(t) : []] : [];
    u.forEach(e => {
        i && e.addEventListener(`scroll`, n),
        a && e.addEventListener(`resize`, n)
    }
    );
    let d = l && s ? kn(l, n, a) : null
      , f = -1
      , p = null;
    o && (p = new ResizeObserver(e => {
        let[r] = e;
        r && r.target === l && p && t && (p.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var e;
            (e = p) == null || e.observe(t)
        }
        )),
        n()
    }
    ),
    l && !c && p.observe(l),
    t && p.observe(t));
    let m, h = c ? cn(e) : null;
    c && g();
    function g() {
        let t = cn(e);
        h && !On(h, t) && n(),
        h = t,
        m = requestAnimationFrame(g)
    }
    return n(),
    () => {
        var e;
        u.forEach(e => {
            i && e.removeEventListener(`scroll`, n),
            a && e.removeEventListener(`resize`, n)
        }
        ),
        d?.(),
        (e = p) == null || e.disconnect(),
        p = null,
        c && cancelAnimationFrame(m)
    }
}
var jn = kt
  , Mn = At
  , Nn = Ct
  , Pn = Mt
  , Fn = Et
  , In = St
  , Ln = jt
  , Rn = (e, t, n) => {
    let r = new Map
      , i = n ?? {}
      , a = {
        ...Dn,
        ...i.platform,
        _c: r
    };
    return xt(e, t, {
        ...i,
        platform: a
    })
}
  , zn = typeof document < `u` ? T.useLayoutEffect : function() {}
;
function Bn(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == `function` && e.toString() === t.toString())
        return !0;
    let n, r, i;
    if (e && t && typeof e == `object`) {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Bn(e[r], t[r]))
                    return !1;
            return !0
        }
        if (i = Object.keys(e),
        n = i.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, i[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            let n = i[r];
            if (!(n === `_owner` && e.$$typeof) && !Bn(e[n], t[n]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Vn(e) {
    return typeof window > `u` ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Hn(e, t) {
    let n = Vn(e);
    return Math.round(t * n) / n
}
function Un(e) {
    let t = T.useRef(e);
    return zn( () => {
        t.current = e
    }
    ),
    t
}
function Wn(e) {
    e === void 0 && (e = {});
    let {placement: t=`bottom`, strategy: n=`absolute`, middleware: r=[], platform: i, elements: {reference: a, floating: o}={}, transform: s=!0, whileElementsMounted: c, open: l} = e
      , [u,d] = T.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [f,p] = T.useState(r);
    Bn(f, r) || p(r);
    let[m,h] = T.useState(null)
      , [g,_] = T.useState(null)
      , v = T.useCallback(e => {
        e !== S.current && (S.current = e,
        h(e))
    }
    , [])
      , y = T.useCallback(e => {
        e !== C.current && (C.current = e,
        _(e))
    }
    , [])
      , b = a || m
      , x = o || g
      , S = T.useRef(null)
      , C = T.useRef(null)
      , E = T.useRef(u)
      , D = c != null
      , O = Un(c)
      , k = Un(i)
      , A = Un(l)
      , j = T.useCallback( () => {
        if (!S.current || !C.current)
            return;
        let e = {
            placement: t,
            strategy: n,
            middleware: f
        };
        k.current && (e.platform = k.current),
        Rn(S.current, C.current, e).then(e => {
            let t = {
                ...e,
                isPositioned: A.current !== !1
            };
            M.current && !Bn(E.current, t) && (E.current = t,
            w.flushSync( () => {
                d(t)
            }
            ))
        }
        )
    }
    , [f, t, n, k, A]);
    zn( () => {
        l === !1 && E.current.isPositioned && (E.current.isPositioned = !1,
        d(e => ({
            ...e,
            isPositioned: !1
        })))
    }
    , [l]);
    let M = T.useRef(!1);
    zn( () => (M.current = !0,
    () => {
        M.current = !1
    }
    ), []),
    zn( () => {
        if (b && (S.current = b),
        x && (C.current = x),
        b && x) {
            if (O.current)
                return O.current(b, x, j);
            j()
        }
    }
    , [b, x, j, O, D]);
    let ee = T.useMemo( () => ({
        reference: S,
        floating: C,
        setReference: v,
        setFloating: y
    }), [v, y])
      , N = T.useMemo( () => ({
        reference: b,
        floating: x
    }), [b, x])
      , P = T.useMemo( () => {
        let e = {
            position: n,
            left: 0,
            top: 0
        };
        if (!N.floating)
            return e;
        let t = Hn(N.floating, u.x)
          , r = Hn(N.floating, u.y);
        return s ? {
            ...e,
            transform: `translate(` + t + `px, ` + r + `px)`,
            ...Vn(N.floating) >= 1.5 && {
                willChange: `transform`
            }
        } : {
            position: n,
            left: t,
            top: r
        }
    }
    , [n, s, N.floating, u.x, u.y]);
    return T.useMemo( () => ({
        ...u,
        update: j,
        refs: ee,
        elements: N,
        floatingStyles: P
    }), [u, j, ee, N, P])
}
var Gn = e => {
    function t(e) {
        return {}.hasOwnProperty.call(e, `current`)
    }
    return {
        name: `arrow`,
        options: e,
        fn(n) {
            let {element: r, padding: i} = typeof e == `function` ? e(n) : e;
            return r && t(r) ? r.current == null ? {} : In({
                element: r.current,
                padding: i
            }).fn(n) : r ? In({
                element: r,
                padding: i
            }).fn(n) : {}
        }
    }
}
  , Kn = (e, t) => {
    let n = jn(e);
    return {
        name: n.name,
        fn: n.fn,
        options: [e, t]
    }
}
  , qn = (e, t) => {
    let n = Mn(e);
    return {
        name: n.name,
        fn: n.fn,
        options: [e, t]
    }
}
  , Jn = (e, t) => ({
    fn: Ln(e).fn,
    options: [e, t]
})
  , Yn = (e, t) => {
    let n = Nn(e);
    return {
        name: n.name,
        fn: n.fn,
        options: [e, t]
    }
}
  , Xn = (e, t) => {
    let n = Pn(e);
    return {
        name: n.name,
        fn: n.fn,
        options: [e, t]
    }
}
  , Zn = (e, t) => {
    let n = Fn(e);
    return {
        name: n.name,
        fn: n.fn,
        options: [e, t]
    }
}
  , Qn = (e, t) => {
    let n = Gn(e);
    return {
        name: n.name,
        fn: n.fn,
        options: [e, t]
    }
}
  , $n = Object.defineProperty
  , er = (e, t) => $n(e, `name`, {
    value: t,
    configurable: !0
});
function tr(e, t) {
    if (typeof e == `function`)
        return e(t);
    e != null && (e.current = t)
}
er(tr, `setRef`);
function nr(...e) {
    return t => {
        let n = !1
          , r = e.map(e => {
            let r = tr(e, t);
            return !n && typeof r == `function` && (n = !0),
            r
        }
        );
        if (n)
            return () => {
                for (let t = 0; t < r.length; t++) {
                    let n = r[t];
                    typeof n == `function` ? n() : tr(e[t], null)
                }
            }
    }
}
er(nr, `composeRefs`);
function rr(...e) {
    return T.useCallback(nr(...e), e)
}
er(rr, `useComposedRefs`);
var ir = Object.defineProperty
  , ar = (e, t) => ir(e, `name`, {
    value: t,
    configurable: !0
})
  , or = `Popper`
  , [sr,cr] = d(or)
  , [lr,ur] = sr(or)
  , dr = ar(e => {
    let {__scopePopper: t, children: n} = e
      , [r,i] = T.useState(null)
      , [a,o] = T.useState(void 0);
    return (0,
    E.jsx)(lr, {
        scope: t,
        anchor: r,
        onAnchorChange: i,
        placementState: a,
        setPlacementState: o,
        children: n
    })
}
, `Popper`)
  , fr = `PopperAnchor`
  , pr = T.forwardRef(ar(function(e, t) {
    let {__scopePopper: n, virtualRef: r, ...i} = e
      , a = ur(fr, n)
      , s = T.useRef(null)
      , c = a.onAnchorChange
      , l = rr(t, T.useCallback(e => {
        s.current = e,
        e && c(e)
    }
    , [c]))
      , u = T.useRef(null);
    T.useEffect( () => {
        if (!r)
            return;
        let e = u.current;
        u.current = r.current,
        e !== u.current && c(u.current)
    }
    );
    let d = a.placementState && br(a.placementState)
      , f = d?.[0]
      , p = d?.[1];
    return r ? null : (0,
    E.jsx)(o.div, {
        "data-radix-popper-side": f,
        "data-radix-popper-align": p,
        ...i,
        ref: l
    })
}, `PopperAnchor`))
  , mr = `PopperContent`
  , [hr,gr] = sr(mr)
  , _r = T.forwardRef(ar(function(e, t) {
    let {__scopePopper: n, side: r=`bottom`, sideOffset: i=0, align: a=`center`, alignOffset: s=0, arrowPadding: c=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: d=0, sticky: f=`partial`, hideWhenDetached: p=!1, updatePositionStrategy: h=`optimized`, onPlaced: g, ..._} = e
      , v = ur(mr, n)
      , [y,x] = T.useState(null)
      , S = rr(t, x)
      , [C,w] = T.useState(null)
      , D = je(C)
      , O = D?.width ?? 0
      , k = D?.height ?? 0
      , A = r + (a === `center` ? `` : `-` + a)
      , j = typeof d == `number` ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
    }
      , M = Array.isArray(u) ? u : [u]
      , ee = M.length > 0
      , N = {
        padding: j,
        boundary: M.filter(vr),
        altBoundary: ee
    }
      , {refs: P, floatingStyles: F, placement: te, isPositioned: ne, middlewareData: I} = Wn({
        strategy: `fixed`,
        placement: A,
        whileElementsMounted: ar( (...e) => An(...e, {
            animationFrame: h === `always`
        }), `whileElementsMounted`),
        elements: {
            reference: v.anchor
        },
        middleware: [Kn({
            mainAxis: i + k,
            alignmentAxis: s
        }), l && qn({
            mainAxis: !0,
            crossAxis: !1,
            limiter: f === `partial` ? Jn() : void 0,
            ...N
        }), l && Yn({
            ...N
        }), Xn({
            ...N,
            apply: ar( ({elements: e, rects: t, availableWidth: n, availableHeight: r}) => {
                let {width: i, height: a} = t.reference
                  , o = e.floating.style;
                o.setProperty(`--radix-popper-available-width`, `${n}px`),
                o.setProperty(`--radix-popper-available-height`, `${r}px`),
                o.setProperty(`--radix-popper-anchor-width`, `${i}px`),
                o.setProperty(`--radix-popper-anchor-height`, `${a}px`)
            }
            , `apply`)
        }), C && Qn({
            element: C,
            padding: c
        }), yr({
            arrowWidth: O,
            arrowHeight: k
        }), p && Zn({
            strategy: `referenceHidden`,
            ...N,
            boundary: ee ? N.boundary : void 0
        })]
    })
      , L = v.setPlacementState;
    m( () => (L(te),
    () => {
        L(void 0)
    }
    ), [te, L]);
    let[R,re] = br(te)
      , z = b(g);
    m( () => {
        ne && z?.()
    }
    , [ne, z]);
    let ie = I.arrow?.x
      , ae = I.arrow?.y
      , oe = I.arrow?.centerOffset !== 0
      , [se,ce] = T.useState();
    return m( () => {
        y && ce(window.getComputedStyle(y).zIndex)
    }
    , [y]),
    (0,
    E.jsx)(`div`, {
        ref: P.setFloating,
        "data-radix-popper-content-wrapper": ``,
        style: {
            ...F,
            transform: ne ? F.transform : `translate(0, -200%)`,
            minWidth: `max-content`,
            zIndex: se,
            "--radix-popper-transform-origin": [I.transformOrigin?.x, I.transformOrigin?.y].join(` `),
            ...I.hide?.referenceHidden && {
                visibility: `hidden`,
                pointerEvents: `none`
            }
        },
        dir: e.dir,
        children: (0,
        E.jsx)(hr, {
            scope: n,
            placedSide: R,
            placedAlign: re,
            onArrowChange: w,
            arrowX: ie,
            arrowY: ae,
            shouldHideArrow: oe,
            children: (0,
            E.jsx)(o.div, {
                "data-side": R,
                "data-align": re,
                ..._,
                ref: S,
                style: {
                    ..._.style,
                    animation: ne ? _.style?.animation : `none`
                }
            })
        })
    })
}, `PopperContent`));
function vr(e) {
    return e !== null
}
ar(vr, `isNotNull`);
var yr = ar(e => ({
    name: `transformOrigin`,
    options: e,
    fn(t) {
        let {placement: n, rects: r, middlewareData: i} = t
          , a = i.arrow?.centerOffset !== 0
          , o = a ? 0 : e.arrowWidth
          , s = a ? 0 : e.arrowHeight
          , [c,l] = br(n)
          , u = {
            start: `0%`,
            center: `50%`,
            end: `100%`
        }[l]
          , d = (i.arrow?.x ?? 0) + o / 2
          , f = (i.arrow?.y ?? 0) + s / 2
          , p = ``
          , m = ``;
        return c === `bottom` ? (p = a ? u : `${d}px`,
        m = `${-s}px`) : c === `top` ? (p = a ? u : `${d}px`,
        m = `${r.floating.height + s}px`) : c === `right` ? (p = `${-s}px`,
        m = a ? u : `${f}px`) : c === `left` && (p = `${r.floating.width + s}px`,
        m = a ? u : `${f}px`),
        {
            data: {
                x: p,
                y: m
            }
        }
    }
}), `transformOrigin`);
function br(e) {
    let[t,n=`center`] = e.split(`-`);
    return [t, n]
}
ar(br, `getSideAndAlignFromPlacement`);
var xr = dr
  , Sr = pr
  , Cr = _r
  , wr = Object.defineProperty
  , Tr = (e, t) => wr(e, `name`, {
    value: t,
    configurable: !0
});
function Er(e) {
    let t = T.useRef({
        value: e,
        previous: e
    });
    return T.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
    t.current.value = e),
    t.current.previous), [e])
}
Tr(Er, `usePrevious`);
var Dr = Object.defineProperty
  , Or = (e, t) => Dr(e, `name`, {
    value: t,
    configurable: !0
});
function kr(e, [t,n]) {
    return Math.min(n, Math.max(t, e))
}
Or(kr, `clamp`);
var Ar = Object.defineProperty
  , jr = (e, t) => Ar(e, `name`, {
    value: t,
    configurable: !0
});
function Mr(e, t) {
    if (typeof e == `function`)
        return e(t);
    e != null && (e.current = t)
}
jr(Mr, `setRef`);
function Nr(...e) {
    return t => {
        let n = !1
          , r = e.map(e => {
            let r = Mr(e, t);
            return !n && typeof r == `function` && (n = !0),
            r
        }
        );
        if (n)
            return () => {
                for (let t = 0; t < r.length; t++) {
                    let n = r[t];
                    typeof n == `function` ? n() : Mr(e[t], null)
                }
            }
    }
}
jr(Nr, `composeRefs`);
function X(...e) {
    return T.useCallback(Nr(...e), e)
}
jr(X, `useComposedRefs`);
var Pr = Object.defineProperty
  , Z = (e, t) => Pr(e, `name`, {
    value: t,
    configurable: !0
});
function Fr(e) {
    let t = T.forwardRef( (t, n) => {
        let {children: r, ...i} = t
          , a = null
          , o = !1
          , s = [];
        Ur(r) && typeof qr == `function` && (r = qr(r._payload)),
        T.Children.forEach(r, e => {
            if (Vr(e)) {
                o = !0;
                let t = e
                  , n = `child` in t.props ? t.props.child : t.props.children;
                Ur(n) && typeof qr == `function` && (n = qr(n._payload)),
                a = Rr(t, n),
                s.push(a?.props?.children)
            } else
                s.push(e)
        }
        ),
        a ? a = T.cloneElement(a, void 0, s) : !o && T.Children.count(r) === 1 && T.isValidElement(r) && (a = r);
        let c = a ? Br(a) : void 0
          , l = X(n, c);
        if (!a) {
            if (r || r === 0)
                throw Error(o ? Kr(e) : Gr(e));
            return r
        }
        let u = zr(i, a.props ?? {});
        return a.type !== T.Fragment && (u.ref = n ? l : c),
        T.cloneElement(a, u)
    }
    );
    return t.displayName = `${e}.Slot`,
    t
}
Z(Fr, `createSlot`);
var Ir = Symbol.for(`radix.slottable`);
function Lr(e) {
    let t = Z(e => `child` in e ? e.children(e.child) : e.children, `Slottable`);
    return t.displayName = `${e}.Slottable`,
    t.__radixId = Ir,
    t
}
Z(Lr, `createSlottable`);
var Rr = Z( (e, t) => {
    if (`child` in e.props) {
        let t = e.props.child;
        return T.isValidElement(t) ? T.cloneElement(t, void 0, e.props.children(t.props.children)) : null
    }
    return T.isValidElement(t) ? t : null
}
, `getSlottableElementFromSlottable`);
function zr(e, t) {
    let n = {
        ...t
    };
    for (let r in t) {
        let i = e[r]
          , a = t[r];
        /^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
            let t = a(...e);
            return i(...e),
            t
        }
        : i && (n[r] = i) : r === `style` ? n[r] = {
            ...i,
            ...a
        } : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `))
    }
    return {
        ...e,
        ...n
    }
}
Z(zr, `mergeProps`);
function Br(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get
      , n = t && `isReactWarning` in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
Z(Br, `getElementRef`);
function Vr(e) {
    return T.isValidElement(e) && typeof e.type == `function` && `__radixId` in e.type && e.type.__radixId === Ir
}
Z(Vr, `isSlottable`);
var Hr = Symbol.for(`react.lazy`);
function Ur(e) {
    return typeof e == `object` && !!e && `$$typeof` in e && e.$$typeof === Hr && `_payload` in e && Wr(e._payload)
}
Z(Ur, `isLazyComponent`);
function Wr(e) {
    return typeof e == `object` && !!e && `then` in e
}
Z(Wr, `isPromiseLike`);
var Gr = Z(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, `createSlotError`)
  , Kr = Z(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, `createSlottableError`)
  , qr = T.use
  , Jr = Object.defineProperty
  , Q = (e, t) => Jr(e, `name`, {
    value: t,
    configurable: !0
})
  , Yr = [` `, `Enter`, `ArrowUp`, `ArrowDown`]
  , Xr = [` `, `Enter`]
  , Zr = `Select`
  , [Qr,$r,ei] = le(Zr)
  , [ti,ni] = d(Zr, [ei, cr])
  , ri = cr()
  , [ii,ai] = ti(Zr)
  , [oi,si] = ti(Zr);
function ci(e) {
    let {__scopeSelect: t, children: n, open: r, defaultOpen: i, onOpenChange: a, value: o, defaultValue: s, onValueChange: c, dir: u, name: d, autoComplete: f, disabled: p, required: m, form: h, internal_do_not_use_render: _} = e
      , v = ri(t)
      , [y,b] = T.useState(null)
      , [x,S] = T.useState(null)
      , [C,w] = T.useState(!1)
      , D = Ce(u)
      , [O,k] = g({
        prop: r,
        defaultProp: i ?? !1,
        onChange: a,
        caller: Zr
    })
      , [A,j] = g({
        prop: o,
        defaultProp: s,
        onChange: c,
        caller: Zr
    })
      , M = T.useRef(null)
      , ee = T.useRef(A);
    T.useEffect( () => {
        let e = h ? y?.ownerDocument.getElementById(h) : y?.form;
        if (e instanceof HTMLFormElement) {
            let t = Q( () => j(ee.current), `reset`);
            return e.addEventListener(`reset`, t),
            () => e.removeEventListener(`reset`, t)
        }
    }
    , [h, y, j]);
    let N = y ? !!h || !!y.closest(`form`) : !0
      , [P,F] = T.useState(new Set)
      , te = l()
      , ne = Array.from(P).map(e => e.props.value).join(`;`)
      , I = T.useCallback(e => {
        F(t => new Set(t).add(e))
    }
    , [])
      , L = T.useCallback(e => {
        F(t => {
            let n = new Set(t);
            return n.delete(e),
            n
        }
        )
    }
    , [])
      , R = {
        required: m,
        trigger: y,
        onTriggerChange: b,
        valueNode: x,
        onValueNodeChange: S,
        valueNodeHasChildren: C,
        onValueNodeHasChildrenChange: w,
        contentId: te,
        value: A,
        onValueChange: j,
        open: O,
        onOpenChange: k,
        dir: D,
        triggerPointerDownPosRef: M,
        disabled: p,
        name: d,
        autoComplete: f,
        form: h,
        nativeOptions: P,
        nativeSelectKey: ne,
        isFormControl: N
    };
    return (0,
    E.jsx)(xr, {
        ...v,
        children: (0,
        E.jsx)(ii, {
            scope: t,
            ...R,
            children: (0,
            E.jsx)(Qr.Provider, {
                scope: t,
                children: (0,
                E.jsx)(oi, {
                    scope: t,
                    onNativeOptionAdd: I,
                    onNativeOptionRemove: L,
                    children: Ji(_) ? _(R) : n
                })
            })
        })
    })
}
Q(ci, `SelectProvider`);
var li = Q(e => {
    let {__scopeSelect: t, children: n, ...r} = e;
    return (0,
    E.jsx)(ci, {
        __scopeSelect: t,
        ...r,
        internal_do_not_use_render: ({isFormControl: e}) => (0,
        E.jsxs)(E.Fragment, {
            children: [n, e ? (0,
            E.jsx)(qi, {
                __scopeSelect: t
            }) : null]
        })
    })
}
, `Select`)
  , ui = `SelectTrigger`
  , di = T.forwardRef(Q(function(e, t) {
    let {__scopeSelect: n, disabled: r=!1, ...i} = e
      , a = ri(n)
      , s = ai(ui, n)
      , c = s.disabled || r
      , l = X(t, s.onTriggerChange)
      , u = $r(n)
      , d = T.useRef(`touch`)
      , [p,m,h] = Xi(e => {
        let t = u().filter(e => !e.disabled)
          , n = Zi(t, e, t.find(e => e.value === s.value));
        n !== void 0 && s.onValueChange(n.value)
    }
    )
      , g = Q(e => {
        c || (s.onOpenChange(!0),
        h()),
        e && (s.triggerPointerDownPosRef.current = {
            x: Math.round(e.pageX),
            y: Math.round(e.pageY)
        })
    }
    , `handleOpen`);
    return (0,
    E.jsx)(Sr, {
        asChild: !0,
        ...a,
        children: (0,
        E.jsx)(o.button, {
            type: `button`,
            role: `combobox`,
            "aria-controls": s.open ? s.contentId : void 0,
            "aria-expanded": s.open,
            "aria-required": s.required,
            "aria-autocomplete": `none`,
            dir: s.dir,
            "data-state": s.open ? `open` : `closed`,
            disabled: c,
            "data-disabled": c ? `` : void 0,
            "data-placeholder": Yi(s.value) ? `` : void 0,
            ...i,
            ref: l,
            onClick: f(i.onClick, e => {
                e.currentTarget.focus(),
                d.current !== `mouse` && g(e)
            }
            ),
            onPointerDown: f(i.onPointerDown, e => {
                d.current = e.pointerType;
                let t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
                e.button === 0 && e.ctrlKey === !1 && e.pointerType === `mouse` && (g(e),
                e.preventDefault())
            }
            ),
            onKeyDown: f(i.onKeyDown, e => {
                let t = p.current !== ``;
                !(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && m(e.key),
                !(t && e.key === ` `) && Yr.includes(e.key) && (g(),
                e.preventDefault())
            }
            )
        })
    })
}, `SelectTrigger`))
  , fi = `SelectValue`
  , pi = T.forwardRef(Q(function(e, t) {
    let {__scopeSelect: n, className: r, style: i, children: a, placeholder: s=``, ...c} = e
      , l = ai(fi, n)
      , {onValueNodeHasChildrenChange: u} = l
      , d = a !== void 0
      , f = X(t, l.onValueNodeChange);
    m( () => {
        u(d)
    }
    , [u, d]);
    let p = Yi(l.value);
    return (0,
    E.jsx)(o.span, {
        ...c,
        asChild: p ? !1 : c.asChild,
        ref: f,
        style: {
            pointerEvents: `none`
        },
        children: (0,
        E.jsx)(T.Fragment, {
            children: p ? s : a
        }, p ? `placeholder` : `value`)
    })
}, `SelectValue`))
  , mi = T.forwardRef(Q(function(e, t) {
    let {__scopeSelect: n, children: r, ...i} = e;
    return (0,
    E.jsx)(o.span, {
        "aria-hidden": !0,
        ...i,
        ref: t,
        children: r || `▼`
    })
}, `SelectIcon`))
  , [hi,gi] = ti(`SelectPortal`, {
    forceMount: void 0
})
  , _i = Q(e => {
    let {__scopeSelect: t, forceMount: n, ...r} = e;
    return (0,
    E.jsx)(hi, {
        scope: e.__scopeSelect,
        forceMount: n,
        children: (0,
        E.jsx)(h, {
            asChild: !0,
            ...r
        })
    })
}
, `SelectPortal`)
  , vi = `SelectContent`
  , yi = T.forwardRef(Q(function(e, t) {
    let n = gi(vi, e.__scopeSelect)
      , {forceMount: r=n.forceMount, ...i} = e
      , a = ai(vi, e.__scopeSelect)
      , [o,s] = T.useState();
    return m( () => {
        s(new DocumentFragment)
    }
    , []),
    (0,
    E.jsx)(u, {
        present: r || a.open,
        children: ({present: e}) => e ? (0,
        E.jsx)(wi, {
            ...i,
            ref: t
        }) : (0,
        E.jsx)(bi, {
            ...i,
            fragment: o
        })
    })
}, `SelectContent`))
  , bi = T.forwardRef(Q(function(e, t) {
    let {__scopeSelect: n, children: r, fragment: i} = e;
    return i ? w.createPortal((0,
    E.jsx)(xi, {
        scope: n,
        children: (0,
        E.jsx)(Qr.Slot, {
            scope: n,
            children: (0,
            E.jsx)(`div`, {
                ref: t,
                children: r
            })
        })
    }), i) : null
}, `SelectContentFragment`))
  , $ = 10
  , [xi,Si] = ti(vi)
  , Ci = Fr(`SelectContent.RemoveScroll`)
  , wi = T.forwardRef(Q(function(e, t) {
    let {__scopeSelect: n} = e
      , {position: r=`item-aligned`, onCloseAutoFocus: i, onEscapeKeyDown: a, onPointerDownOutside: o, side: l, sideOffset: u, align: d, alignOffset: m, arrowPadding: h, collisionBoundary: g, collisionPadding: y, sticky: b, hideWhenDetached: x, avoidCollisions: S, ...C} = e
      , w = ai(vi, n)
      , [D,O] = T.useState(null)
      , [k,A] = T.useState(null)
      , j = X(t, O)
      , [M,ee] = T.useState(null)
      , [N,P] = T.useState(null)
      , F = $r(n)
      , [te,ne] = T.useState(!1)
      , I = T.useRef(!1);
    T.useEffect( () => {
        if (D)
            return _(D)
    }
    , [D]),
    s();
    let L = T.useCallback(e => {
        let[t,...n] = F().map(e => e.ref.current)
          , [r] = n.slice(-1)
          , i = document.activeElement;
        for (let n of e)
            if (n === i || (n?.scrollIntoView({
                block: `nearest`
            }),
            n === t && k && (k.scrollTop = 0),
            n === r && k && (k.scrollTop = k.scrollHeight),
            n?.focus(),
            document.activeElement !== i))
                return
    }
    , [F, k])
      , R = T.useCallback( () => L([M, D]), [L, M, D]);
    T.useEffect( () => {
        te && R()
    }
    , [te, R]);
    let {onOpenChange: re, triggerPointerDownPosRef: z} = w;
    T.useEffect( () => {
        if (D) {
            let e = {
                x: 0,
                y: 0
            }
              , t = Q(t => {
                e = {
                    x: Math.abs(Math.round(t.pageX) - (z.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (z.current?.y ?? 0))
                }
            }
            , `handlePointerMove`)
              , n = Q(n => {
                e.x <= 10 && e.y <= 10 ? n.preventDefault() : n.composedPath().includes(D) || re(!1),
                document.removeEventListener(`pointermove`, t),
                z.current = null
            }
            , `handlePointerUp`);
            return z.current !== null && (document.addEventListener(`pointermove`, t),
            document.addEventListener(`pointerup`, n, {
                capture: !0,
                once: !0
            })),
            () => {
                document.removeEventListener(`pointermove`, t),
                document.removeEventListener(`pointerup`, n, {
                    capture: !0
                })
            }
        }
    }
    , [D, re, z]),
    T.useEffect( () => {
        let e = Q( () => re(!1), `close`);
        return window.addEventListener(`blur`, e),
        window.addEventListener(`resize`, e),
        () => {
            window.removeEventListener(`blur`, e),
            window.removeEventListener(`resize`, e)
        }
    }
    , [re]);
    let[ie,ae] = Xi(e => {
        let t = F().filter(e => !e.disabled)
          , n = Zi(t, e, t.find(e => e.ref.current === document.activeElement));
        n && setTimeout( () => n.ref.current?.focus())
    }
    )
      , oe = T.useCallback( (e, t, n) => {
        let r = !I.current && !n;
        (w.value !== void 0 && w.value === t || r) && (ee(e),
        r && (I.current = !0))
    }
    , [w.value])
      , se = T.useCallback( () => D?.focus(), [D])
      , ce = T.useCallback( (e, t, n) => {
        let r = !I.current && !n;
        (w.value !== void 0 && w.value === t || r) && P(e)
    }
    , [w.value])
      , B = r === `popper` ? Ei : Ti
      , le = B === Ei ? {
        side: l,
        sideOffset: u,
        align: d,
        alignOffset: m,
        arrowPadding: h,
        collisionBoundary: g,
        collisionPadding: y,
        sticky: b,
        hideWhenDetached: x,
        avoidCollisions: S
    } : {};
    return (0,
    E.jsx)(xi, {
        scope: n,
        content: D,
        viewport: k,
        onViewportChange: A,
        itemRefCallback: oe,
        selectedItem: M,
        onItemLeave: se,
        itemTextRefCallback: ce,
        focusSelectedItem: R,
        selectedItemText: N,
        position: r,
        isPositioned: te,
        searchRef: ie,
        children: (0,
        E.jsx)(p, {
            as: Ci,
            allowPinchZoom: !0,
            children: (0,
            E.jsx)(v, {
                asChild: !0,
                trapped: w.open,
                onMountAutoFocus: e => {
                    e.preventDefault()
                }
                ,
                onUnmountAutoFocus: f(i, e => {
                    w.trigger?.focus({
                        preventScroll: !0
                    }),
                    e.preventDefault()
                }
                ),
                children: (0,
                E.jsx)(c, {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: a,
                    onPointerDownOutside: o,
                    onFocusOutside: e => e.preventDefault(),
                    onDismiss: () => w.onOpenChange(!1),
                    children: (0,
                    E.jsx)(B, {
                        role: `listbox`,
                        id: w.contentId,
                        "data-state": w.open ? `open` : `closed`,
                        dir: w.dir,
                        onContextMenu: e => e.preventDefault(),
                        ...C,
                        ...le,
                        onPlaced: () => ne(!0),
                        ref: j,
                        style: {
                            display: `flex`,
                            flexDirection: `column`,
                            outline: `none`,
                            ...C.style
                        },
                        onKeyDown: f(C.onKeyDown, e => {
                            let t = e.ctrlKey || e.altKey || e.metaKey;
                            if (e.key === `Tab` && e.preventDefault(),
                            !t && e.key.length === 1 && ae(e.key),
                            [`ArrowUp`, `ArrowDown`, `Home`, `End`].includes(e.key)) {
                                let t = F().filter(e => !e.disabled).map(e => e.ref.current);
                                if ([`ArrowUp`, `End`].includes(e.key) && (t = t.slice().reverse()),
                                [`ArrowUp`, `ArrowDown`].includes(e.key)) {
                                    let n = e.target
                                      , r = t.indexOf(n);
                                    t = t.slice(r + 1)
                                }
                                setTimeout( () => L(t)),
                                e.preventDefault()
                            }
                        }
                        )
                    })
                })
            })
        })
    })
}, `SelectContentImpl`))
  , Ti = T.forwardRef(Q(function(e, t) {
    let {__scopeSelect: n, onPlaced: r, ...i} = e
      , a = ai(vi, n)
      , s = Si(vi, n)
      , [c,l] = T.useState(null)
      , [u,d] = T.useState(null)
      , f = X(t, d)
      , p = $r(n)
      , h = T.useRef(!1)
      , g = T.useRef(!0)
      , {viewport: _, selectedItem: v, selectedItemText: y, focusSelectedItem: b} = s
      , x = T.useCallback( () => {
        if (a.trigger && a.valueNode && c && u && _ && v && y) {
            let e = a.trigger.getBoundingClientRect()
              , t = u.getBoundingClientRect()
              , n = a.valueNode.getBoundingClientRect()
              , i = y.getBoundingClientRect();
            if (a.dir !== `rtl`) {
                let r = i.left - t.left
                  , a = n.left - r
                  , o = e.left - a
                  , s = e.width + o
                  , l = Math.max(s, t.width)
                  , u = window.innerWidth - $
                  , d = kr(a, [$, Math.max($, u - l)]);
                c.style.minWidth = s + `px`,
                c.style.left = d + `px`
            } else {
                let r = t.right - i.right
                  , a = window.innerWidth - n.right - r
                  , o = window.innerWidth - e.right - a
                  , s = e.width + o
                  , l = Math.max(s, t.width)
                  , u = window.innerWidth - $
                  , d = kr(a, [$, Math.max($, u - l)]);
                c.style.minWidth = s + `px`,
                c.style.right = d + `px`
            }
            let o = p()
              , s = window.innerHeight - $ * 2
              , l = _.scrollHeight
              , d = window.getComputedStyle(u)
              , f = parseInt(d.borderTopWidth, 10)
              , m = parseInt(d.paddingTop, 10)
              , g = parseInt(d.borderBottomWidth, 10)
              , b = parseInt(d.paddingBottom, 10)
              , x = f + m + l + b + g
              , S = Math.min(v.offsetHeight * 5, x)
              , C = window.getComputedStyle(_)
              , w = parseInt(C.paddingTop, 10)
              , T = parseInt(C.paddingBottom, 10)
              , E = e.top + e.height / 2 - $
              , D = s - E
              , O = v.offsetHeight / 2
              , k = v.offsetTop + O
              , A = f + m + k
              , j = x - A;
            if (A <= E) {
                let e = o.length > 0 && v === o[o.length - 1].ref.current;
                c.style.bottom = `0px`;
                let t = u.clientHeight - _.offsetTop - _.offsetHeight
                  , n = A + Math.max(D, O + (e ? T : 0) + t + g);
                c.style.height = n + `px`
            } else {
                let e = o.length > 0 && v === o[0].ref.current;
                c.style.top = `0px`;
                let t = Math.max(E, f + _.offsetTop + (e ? w : 0) + O) + j;
                c.style.height = t + `px`,
                _.scrollTop = A - E + _.offsetTop
            }
            c.style.margin = `${$}px 0`,
            c.style.minHeight = S + `px`,
            c.style.maxHeight = s + `px`,
            r?.(),
            requestAnimationFrame( () => h.current = !0)
        }
    }
    , [p, a.trigger, a.valueNode, c, u, _, v, y, a.dir, r]);
    m( () => x(), [x]);
    let[S,C] = T.useState();
    return m( () => {
        u && C(window.getComputedStyle(u).zIndex)
    }
    , [u]),
    (0,
    E.jsx)(Di, {
        scope: n,
        contentWrapper: c,
        shouldExpandOnScrollRef: h,
        onScrollButtonChange: T.useCallback(e => {
            e && g.current === !0 && (x(),
            b?.(),
            g.current = !1)
        }
        , [x, b]),
        children: (0,
        E.jsx)(`div`, {
            ref: l,
            style: {
                display: `flex`,
                flexDirection: `column`,
                position: `fixed`,
                zIndex: S
            },
            children: (0,
            E.jsx)(o.div, {
                ...i,
                ref: f,
                style: {
                    boxSizing: `border-box`,
                    maxHeight: `100%`,
                    ...i.style
                }
            })
        })
    })
}, `SelectItemAlignedPosition`))
  , Ei = T.forwardRef(Q(function(e, t) {
    let {__scopeSelect: n, align: r=`start`, collisionPadding: i=$, ...a} = e
      , o = ri(n);
    return (0,
    E.jsx)(Cr, {
        ...o,
        ...a,
        ref: t,
        align: r,
        collisionPadding: i,
        style: {
            boxSizing: `border-box`,
            ...a.style,
            "--radix-select-content-transform-origin": `var(--radix-popper-transform-origin)`,
            "--radix-select-content-available-width": `var(--radix-popper-available-width)`,
            "--radix-select-content-available-height": `var(--radix-popper-available-height)`,
            "--radix-select-trigger-width": `var(--radix-popper-anchor-width)`,
            "--radix-select-trigger-height": `var(--radix-popper-anchor-height)`
        }
    })
}, `SelectPopperPosition`))
  , [Di,Oi] = ti(vi, {})
  , ki = `SelectViewport`
  , Ai = T.forwardRef(Q(function(e, t) {
    let {__scopeSelect: n, nonce: r, ...i} = e
      , a = Si(ki, n)
      , s = Oi(ki, n)
      , c = X(t, a.onViewportChange)
      , l = T.useRef(0);
    return (0,
    E.jsxs)(E.Fragment, {
        children: [(0,
        E.jsx)(`style`, {
            dangerouslySetInnerHTML: {
                __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
            },
            nonce: r
        }), (0,
        E.jsx)(Qr.Slot, {
            scope: n,
            children: (0,
            E.jsx)(o.div, {
                "data-radix-select-viewport": ``,
                role: `presentation`,
                ...i,
                ref: c,
                style: {
                    position: `relative`,
                    flex: 1,
                    overflow: `hidden auto`,
                    ...i.style
                },
                onScroll: f(i.onScroll, e => {
                    let t = e.currentTarget
                      , {contentWrapper: n, shouldExpandOnScrollRef: r} = s;
                    if (r?.current && n) {
                        let e = Math.abs(l.current - t.scrollTop);
                        if (e > 0) {
                            let r = window.innerHeight - $ * 2
                              , i = parseFloat(n.style.minHeight)
                              , a = parseFloat(n.style.height)
                              , o = Math.max(i, a);
                            if (o < r) {
                                let i = o + e
                                  , a = Math.min(r, i)
                                  , s = i - a;
                                n.style.height = a + `px`,
                                n.style.bottom === `0px` && (t.scrollTop = s > 0 ? s : 0,
                                n.style.justifyContent = `flex-end`)
                            }
                        }
                    }
                    l.current = t.scrollTop
                }
                )
            })
        })]
    })
}, `SelectViewport`))
  , [ji,Mi] = ti(`SelectGroup`)
  , Ni = `SelectItem`
  , [Pi,Fi] = ti(Ni)
  , Ii = T.forwardRef(Q(function(e, t) {
    let {__scopeSelect: n, value: r, disabled: i=!1, textValue: a, ...s} = e
      , c = ai(Ni, n)
      , u = Si(Ni, n)
      , d = c.value === r
      , [p,m] = T.useState(a ?? ``)
      , [h,g] = T.useState(!1)
      , _ = X(t, b(e => u.itemRefCallback?.(e, r, i)))
      , v = l()
      , y = T.useRef(`touch`)
      , x = Q( () => {
        i || (c.onValueChange(r),
        c.onOpenChange(!1))
    }
    , `handleSelect`);
    return (0,
    E.jsx)(Pi, {
        scope: n,
        value: r,
        disabled: i,
        textId: v,
        isSelected: d,
        onItemTextChange: T.useCallback(e => {
            m(t => t || (e?.textContent ?? ``).trim())
        }
        , []),
        children: (0,
        E.jsx)(Qr.ItemSlot, {
            scope: n,
            value: r,
            disabled: i,
            textValue: p,
            children: (0,
            E.jsx)(o.div, {
                role: `option`,
                "aria-labelledby": v,
                "data-highlighted": h ? `` : void 0,
                "aria-selected": d && h,
                "data-state": d ? `checked` : `unchecked`,
                "aria-disabled": i || void 0,
                "data-disabled": i ? `` : void 0,
                tabIndex: i ? void 0 : -1,
                ...s,
                ref: _,
                onFocus: f(s.onFocus, () => g(!0)),
                onBlur: f(s.onBlur, () => g(!1)),
                onClick: f(s.onClick, () => {
                    y.current !== `mouse` && x()
                }
                ),
                onPointerUp: f(s.onPointerUp, () => {
                    y.current === `mouse` && x()
                }
                ),
                onPointerDown: f(s.onPointerDown, e => {
                    y.current = e.pointerType
                }
                ),
                onPointerMove: f(s.onPointerMove, e => {
                    y.current = e.pointerType,
                    i ? u.onItemLeave?.() : y.current === `mouse` && e.currentTarget.focus({
                        preventScroll: !0
                    })
                }
                ),
                onPointerLeave: f(s.onPointerLeave, e => {
                    e.currentTarget === document.activeElement && u.onItemLeave?.()
                }
                ),
                onKeyDown: f(s.onKeyDown, e => {
                    i || e.target !== e.currentTarget || u.searchRef?.current !== `` && e.key === ` ` || (Xr.includes(e.key) && x(),
                    e.key === ` ` && e.preventDefault())
                }
                )
            })
        })
    })
}, `SelectItem`))
  , Li = `SelectItemText`
  , Ri = T.forwardRef(Q(function(e, t) {
    let {__scopeSelect: n, className: r, style: i, ...a} = e
      , s = ai(Li, n)
      , c = Si(Li, n)
      , l = Fi(Li, n)
      , u = si(Li, n)
      , [d,f] = T.useState(null)
      , p = b(e => c.itemTextRefCallback?.(e, l.value, l.disabled))
      , h = X(t, f, l.onItemTextChange, p)
      , g = d?.textContent
      , _ = T.useMemo( () => (0,
    E.jsx)(`option`, {
        value: l.value,
        disabled: l.disabled,
        children: g
    }, l.value), [l.disabled, l.value, g])
      , {onNativeOptionAdd: v, onNativeOptionRemove: y} = u;
    return m( () => (v(_),
    () => y(_)), [v, y, _]),
    (0,
    E.jsxs)(E.Fragment, {
        children: [(0,
        E.jsx)(o.span, {
            id: l.textId,
            ...a,
            ref: h
        }), l.isSelected && s.valueNode && !s.valueNodeHasChildren && !Yi(s.value) ? w.createPortal(a.children, s.valueNode) : null]
    })
}, `SelectItemText`))
  , zi = `SelectItemIndicator`
  , Bi = T.forwardRef(Q(function(e, t) {
    let {__scopeSelect: n, ...r} = e;
    return Fi(zi, n).isSelected ? (0,
    E.jsx)(o.span, {
        "aria-hidden": !0,
        ...r,
        ref: t
    }) : null
}, `SelectItemIndicator`))
  , Vi = `SelectScrollUpButton`
  , Hi = T.forwardRef(Q(function(e, t) {
    let n = Si(Vi, e.__scopeSelect)
      , r = Oi(Vi, e.__scopeSelect)
      , [i,a] = T.useState(!1)
      , o = X(t, r.onScrollButtonChange);
    return m( () => {
        if (n.viewport && n.isPositioned) {
            let e = function() {
                a(t.scrollTop > 0)
            };
            Q(e, `handleScroll`);
            let t = n.viewport;
            return e(),
            t.addEventListener(`scroll`, e),
            () => t.removeEventListener(`scroll`, e)
        }
    }
    , [n.viewport, n.isPositioned]),
    i ? (0,
    E.jsx)(Gi, {
        ...e,
        ref: o,
        onAutoScroll: () => {
            let {viewport: e, selectedItem: t} = n;
            e && t && (e.scrollTop -= t.offsetHeight)
        }
    }) : null
}, `SelectScrollUpButton`))
  , Ui = `SelectScrollDownButton`
  , Wi = T.forwardRef(Q(function(e, t) {
    let n = Si(Ui, e.__scopeSelect)
      , r = Oi(Ui, e.__scopeSelect)
      , [i,a] = T.useState(!1)
      , o = X(t, r.onScrollButtonChange);
    return m( () => {
        if (n.viewport && n.isPositioned) {
            let e = function() {
                let e = t.scrollHeight - t.clientHeight;
                a(Math.ceil(t.scrollTop) < e)
            };
            Q(e, `handleScroll`);
            let t = n.viewport;
            return e(),
            t.addEventListener(`scroll`, e),
            () => t.removeEventListener(`scroll`, e)
        }
    }
    , [n.viewport, n.isPositioned]),
    i ? (0,
    E.jsx)(Gi, {
        ...e,
        ref: o,
        onAutoScroll: () => {
            let {viewport: e, selectedItem: t} = n;
            e && t && (e.scrollTop += t.offsetHeight)
        }
    }) : null
}, `SelectScrollDownButton`))
  , Gi = T.forwardRef(Q(function(e, t) {
    let {__scopeSelect: n, onAutoScroll: r, ...i} = e
      , a = Si(`SelectScrollButton`, n)
      , s = T.useRef(null)
      , c = $r(n)
      , l = T.useCallback( () => {
        s.current !== null && (window.clearInterval(s.current),
        s.current = null)
    }
    , []);
    return T.useEffect( () => () => l(), [l]),
    m( () => {
        c().find(e => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({
            block: `nearest`
        })
    }
    , [c]),
    (0,
    E.jsx)(o.div, {
        "aria-hidden": !0,
        ...i,
        ref: t,
        style: {
            flexShrink: 0,
            ...i.style
        },
        onPointerDown: f(i.onPointerDown, () => {
            s.current === null && (s.current = window.setInterval(r, 50))
        }
        ),
        onPointerMove: f(i.onPointerMove, () => {
            a.onItemLeave?.(),
            s.current === null && (s.current = window.setInterval(r, 50))
        }
        ),
        onPointerLeave: f(i.onPointerLeave, () => {
            l()
        }
        )
    })
}, `SelectScrollButtonImpl`))
  , Ki = `SelectBubbleInput`
  , qi = T.forwardRef(Q(function({__scopeSelect: e, ...t}, n) {
    let r = ai(Ki, e)
      , {value: i, onValueChange: a, required: s, disabled: c, name: l, autoComplete: u, form: d} = r
      , {nativeOptions: f, nativeSelectKey: p} = r
      , m = T.useRef(null)
      , h = X(n, m)
      , g = i ?? ``
      , _ = Er(g)
      , v = Array.from(f).some(e => (e.props.value ?? ``) === ``);
    return T.useEffect( () => {
        let e = m.current;
        if (!e)
            return;
        let t = window.HTMLSelectElement.prototype
          , n = Object.getOwnPropertyDescriptor(t, `value`).set;
        if (_ !== g && n) {
            let t = new Event(`change`,{
                bubbles: !0
            });
            n.call(e, g),
            e.dispatchEvent(t)
        }
    }
    , [_, g]),
    (0,
    E.jsxs)(o.select, {
        "aria-hidden": !0,
        required: s,
        tabIndex: -1,
        name: l,
        autoComplete: u,
        disabled: c,
        form: d,
        onChange: e => a(e.target.value),
        ...t,
        style: {
            ...D,
            ...t.style
        },
        ref: h,
        defaultValue: g,
        children: [Yi(i) && !v ? (0,
        E.jsx)(`option`, {
            value: ``
        }) : null, Array.from(f)]
    }, p)
}, `SelectBubbleInput`));
function Ji(e) {
    return typeof e == `function`
}
Q(Ji, `isFunction`);
function Yi(e) {
    return e === `` || e === void 0
}
Q(Yi, `shouldShowPlaceholder`);
function Xi(e) {
    let t = b(e)
      , n = T.useRef(``)
      , r = T.useRef(0)
      , i = T.useCallback(e => {
        let i = n.current + e;
        t(i),
        Q((function e(t) {
            n.current = t,
            window.clearTimeout(r.current),
            t !== `` && (r.current = window.setTimeout( () => e(``), 1e3))
        }
        ), `updateSearch`)(i)
    }
    , [t])
      , a = T.useCallback( () => {
        n.current = ``,
        window.clearTimeout(r.current)
    }
    , []);
    return T.useEffect( () => () => window.clearTimeout(r.current), []),
    [n, i, a]
}
Q(Xi, `useTypeaheadSearch`);
function Zi(e, t, n) {
    let r = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t
      , i = n ? e.indexOf(n) : -1
      , a = Qi(e, Math.max(i, 0));
    r.length === 1 && (a = a.filter(e => e !== n));
    let o = a.find(e => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
    return o === n ? void 0 : o
}
Q(Zi, `findNextItem`);
function Qi(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
Q(Qi, `wrapArray`);
function $i({className: e, ...t}) {
    return (0,
    E.jsx)(Ve, {
        "data-slot": `checkbox`,
        className: y(`peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary`, e),
        ...t,
        children: (0,
        E.jsx)(Ue, {
            "data-slot": `checkbox-indicator`,
            className: `grid place-content-center text-current transition-none`,
            children: (0,
            E.jsx)(x, {
                className: `size-3.5`
            })
        })
    })
}
function ea({...e}) {
    return (0,
    E.jsx)(li, {
        "data-slot": `select`,
        ...e
    })
}
function ta({...e}) {
    return (0,
    E.jsx)(pi, {
        "data-slot": `select-value`,
        ...e
    })
}
function na({className: e, size: t=`default`, children: n, ...r}) {
    return (0,
    E.jsxs)(di, {
        "data-slot": `select-trigger`,
        "data-size": t,
        className: y(`flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground`, e),
        ...r,
        children: [n, (0,
        E.jsx)(mi, {
            asChild: !0,
            children: (0,
            E.jsx)(S, {
                className: `size-4 opacity-50`
            })
        })]
    })
}
function ra({className: e, children: t, position: n=`item-aligned`, align: r=`center`, ...i}) {
    return (0,
    E.jsx)(_i, {
        children: (0,
        E.jsxs)(yi, {
            "data-slot": `select-content`,
            className: y(`relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95`, n === `popper` && `data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`, e),
            position: n,
            align: r,
            ...i,
            children: [(0,
            E.jsx)(aa, {}), (0,
            E.jsx)(Ai, {
                className: y(`p-1`, n === `popper` && `h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1`),
                children: t
            }), (0,
            E.jsx)(oa, {})]
        })
    })
}
function ia({className: e, children: t, ...n}) {
    return (0,
    E.jsxs)(Ii, {
        "data-slot": `select-item`,
        className: y(`relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2`, e),
        ...n,
        children: [(0,
        E.jsx)(`span`, {
            "data-slot": `select-item-indicator`,
            className: `absolute right-2 flex size-3.5 items-center justify-center`,
            children: (0,
            E.jsx)(Bi, {
                children: (0,
                E.jsx)(x, {
                    className: `size-4`
                })
            })
        }), (0,
        E.jsx)(Ri, {
            children: t
        })]
    })
}
function aa({className: e, ...t}) {
    return (0,
    E.jsx)(Hi, {
        "data-slot": `select-scroll-up-button`,
        className: y(`flex cursor-default items-center justify-center py-1`, e),
        ...t,
        children: (0,
        E.jsx)(C, {
            className: `size-4`
        })
    })
}
function oa({className: e, ...t}) {
    return (0,
    E.jsx)(Wi, {
        "data-slot": `select-scroll-down-button`,
        className: y(`flex cursor-default items-center justify-center py-1`, e),
        ...t,
        children: (0,
        E.jsx)(S, {
            className: `size-4`
        })
    })
}
var sa = `DTBEATS
UNLIMITED NON-EXCLUSIVE BEAT LEASE
License version: DTB-UNLIMITED-2026-09-06

This agreement is between Soubhi Daniel Tabar, professionally known as DTBeats (the "Producer"), and the legal licensee identified in the paid order (the "Licensee"). The order contract identifies the Licensee and contact email, the Producer's public business contact, the order number, the purchased Beats and original filenames, the price and any tax, the accepted license version and the purchase date. That record forms part of this agreement. This general license text does not grant rights to someone who has not purchased or otherwise received a license from the Producer.

1. BEATS COVERED

The Producer licenses the instrumentals identified in the paid order (each a "Beat" and collectively the "Beats"). The full titles, original MP3 filenames and catalogue identifiers in the private order contract identify the Beats covered. The accompanying beat information identifies the applicable production credits and any limitations disclosed before purchase. A separate purchase covers only the Beats selected in that order.

2. PURCHASE PRICE AND DELIVERY FORMAT

The one-time lease fee is CA$100 per Beat, or CA$250 for each complete group of five distinct Beats in the same order. Additional Beats outside a complete group of five cost CA$100 each. The checkout and order contract state the exact total, including the disclosed tax treatment and any applicable tax. All amounts are in Canadian dollars. There is no subscription, automatic renewal or lease-renewal fee.

The licenses become effective once the Producer receives full payment. The purchase includes the original MP3 file for each purchased Beat and the accepted license/order record. WAV files, track stems, project files and exclusive rights are not included unless the Producer separately agrees in writing. Unless otherwise agreed in writing, the lease fee is non-refundable once the purchased files have been delivered, except where required by law. The disclosed shop refund and delivery policies also apply and do not limit mandatory legal rights.

3. LICENSE GRANTED

Upon receipt of full payment, the Producer grants the Licensee a worldwide, unlimited, non-exclusive and non-transferable license to:

- Record vocals and other original material over the Beats and create songs incorporating the Beats (the "Songs");
- Release and commercially exploit the Songs on all lawful digital streaming services, online stores, social-media platforms and other media, including physical formats;
- Release and monetize music videos, lyric videos, visualizers and other promotional content using the Songs;
- Perform and broadcast the Songs publicly, including through radio, podcasts, television and other media; and
- Generate an unlimited number of streams, sales, downloads, views, performances, music videos and monetized uses.

This license is permanent and does not expire. The Licensee is not required to renew it. This agreement does not impose a numerical cap on the Songs the Licensee creates using a purchased Beat. The license remains subject to the ownership, royalty, credit and other terms below. Unlimited use is not a transfer of ownership or a waiver of separately documented royalty or publishing rights.

4. NON-EXCLUSIVE NATURE

These are non-exclusive leases. The Producer and any other applicable rightsholders retain their ownership of the Beats and may continue to lease, license or sell them to other artists or third parties. A later exclusive sale or license of a Beat does not cancel the Licensee's properly acquired perpetual rights under this agreement.

The purchase does not transfer ownership of the underlying Beats, instrumental compositions, project files or the Producer's other intellectual property to the Licensee.

5. OWNERSHIP OF THE SONGS

The Producer and any applicable rightsholders retain ownership of the original Beats and the musical compositions embodied in them. The Licensee retains ownership of their original lyrics and vocal performances.

Ownership of each finished master recording is subject to any separate written agreement among the Licensee and any other contributors, label or distributor involved in that Song. No ownership of a Beat is transferred by payment of the lease fee.

6. ROYALTIES AND PUBLISHING

The upfront lease fee does not, by itself, determine songwriting, publishing or master-royalty splits for the Songs. This agreement does not set or waive songwriting, publishing, neighbouring-rights, mechanical, performance or master-royalty entitlements.

Before or promptly following the commercial release of each Song, the parties will confirm the songwriting and publishing percentages, actual authorship and any agreed royalty participation through a mutually signed split sheet or other written agreement. The Licensee must accurately identify and credit the Producer and the applicable writers when registering a Song and must not register their shares as the Licensee's own.

No percentage from an unrelated agreement is incorporated into this license. A blank or absent percentage is not an agreement to zero. Each party retains rights not expressly granted or waived in a signed writing.

7. PRODUCER CREDIT

The Licensee will provide appropriate credit on commercially released Songs using the Beats wherever credits are supported, substantially as "Produced by DTBeats", together with the applicable collaborators identified in the accompanying beat information. Use the credited producer names in the release metadata and descriptions where supported.

The Licensee will make reasonable efforts to correct missing or inaccurate credit after receiving written notice from the Producer.

8. CONTENT IDENTIFICATION SYSTEMS

Because these licenses are non-exclusive, the Licensee must not register an unmodified Beat by itself with YouTube Content ID, Meta Rights Manager or any similar automated copyright-claiming system.

If a completed Song is enrolled in such a system, the Licensee and their distributor must ensure that the registration does not wrongfully claim, block or monetize other authorized users of the Beat. The Licensee must promptly release incorrect claims upon notice from the Producer. Ordinary distribution and monetization of the Songs are permitted within this agreement.

9. RESTRICTIONS

The Licensee must not:

- Resell, sublicense, redistribute, lease or give away a Beat in its original or substantially similar instrumental form;
- Claim ownership or authorship of an underlying Beat;
- Sell or upload a Beat as stock music, production music or a sample-pack product;
- Transfer this license to another artist, label or third party without the Producer's written consent; or
- Use the Producer's name, image or likeness in a manner suggesting an endorsement beyond the agreed production credit.

A distributor, record label or other authorized service provider may administer and distribute a Song on the Licensee's behalf. This does not transfer ownership of the underlying Beat or convert the license into an exclusive license.

10. SAMPLES AND THIRD-PARTY MATERIAL

If the Producer informs the Licensee that a Beat contains a sample requiring clearance, the parties will cooperate in good faith regarding the necessary clearance before commercial release. Any restriction affecting the supplied Beat must be disclosed before purchase and reflected in the order's beat information. This clause does not conceal or resolve an undisclosed restriction on a supplied Beat.

Unless otherwise disclosed and agreed in writing, each party is responsible for obtaining permission for third-party material that party independently adds to a Song. The Licensee is responsible for samples, interpolations, vocals, artwork, visuals and other material added by them or on their behalf.

11. REPRESENTATIONS

The Producer represents that the Producer has authority to grant the rights described in this agreement. The Licensee represents that their lyrics, vocals and other contributions will not knowingly infringe another party's copyright, trademark, privacy, publicity or other legal rights. Each party is responsible for claims arising directly from material supplied by that party and represents that they have legal capacity and authority to enter this agreement.

12. BREACH AND OPPORTUNITY TO CURE

If either party materially breaches this agreement, the other party will provide written notice describing the breach. The breaching party has fourteen (14) days after receiving notice to correct the breach when correction is reasonably possible. If the breach is not corrected within that period, the other party may pursue remedies available under applicable law.

13. NO PARTNERSHIP

This agreement does not create a partnership, employment relationship, joint venture or agency relationship. Except for the rights expressly granted, neither party may legally bind the other.

14. GOVERNING LAW AND MANDATORY RIGHTS

This agreement is governed by the laws of Ontario and the applicable federal laws of Canada. Legal proceedings relating to it will be brought in Ontario unless the parties agree otherwise in writing or applicable law requires otherwise.

Nothing in this agreement or the shop policies excludes or limits a cancellation, refund, warranty, privacy or other right or remedy that applicable law does not permit the parties to exclude or limit.

15. ENTIRE AGREEMENT AND AMENDMENTS

This agreement, the accepted order contract and the shop policies disclosed and accepted at checkout form the agreement concerning the purchased Beat leases. They replace prior discussions concerning those purchases. The separate split sheets and royalty agreements contemplated in section 6 supplement these terms for the applicable Songs.

An amendment must be in writing and accepted by the Producer and the Licensee. A later website edit does not silently change the version accepted for a completed order. Electronic acceptance and electronically transmitted records may be used to evidence agreement. Save the order contract, accepted license, proof of payment and Beat files together with each release's split sheet.

16. REVIEW AND ACCEPTANCE

The Licensee has the opportunity to review these terms and seek independent legal advice before accepting the purchase. The recorded checkout acceptance, followed by successful payment, identifies the Licensee's acceptance of this version for the Beats in that order. The Producer's and Licensee's contact details in the order contract are used for written notices and requests relating to the agreement.
`
  , ca = `MAIN PRIZE 1 ONLY — DTBEATS COLLABORATION

In addition to two exclusive beats, the first main prize includes one Instagram collaboration post with @dtbeats and one jointly credited song release with DTBeats, using one of those two beats. These benefits form part of the CA$2,600 prize and require no additional artist fee, beat purchase or paid entry.

DTBeats and the winner will choose one song the winner creates using a prize beat and coordinate its release with both the winner and DTBeats listed as primary artists, where the distributor supports that credit. DTBeats contributes the supplied production; an additional vocal performance, recording session, mixing, mastering, video production or advertising budget is not promised. The winner supplies their original performance and materials needed for the finished release. A release cannot be completed before those materials are ready and rights-cleared.

DTBeats will arrange one Instagram collaboration post promoting the joint release through @dtbeats, inviting the winner's nominated Instagram account to collaborate. The platform's collaboration feature requires the invited account to accept. An Instagram account is not needed to enter or receive the beat licenses; if the winner cannot use that feature, DTBeats and the winner will agree an equivalent promotional post with the winner's credit at no cost. No extra posts, stories, follower minimum, endorsements or promotion of unrelated products are required from the winner.

Before distributing the song or publishing the post, the parties will confirm the selected song, final master, artist names and credits, artwork, release date, distribution responsibilities, post timing and wording, and any songwriting, publishing and master-royalty shares in writing. No percentage from another artist's agreement is imported. No advance approval for DTBeats to post personal information or unreleased music is implied by entering. The winner's permission is limited to the agreed collaboration and promotion.

The MP3s and beat-license record remain due within the draw rules' seven-day delivery period. The collaboration release and post follow the mutually agreed production and release timetable, recorded separately; they are not promised within seven days. The parties must cooperate in good faith, and DTBeats cannot add a purchase or an unrelated obligation as a condition of the promised collaboration. Choosing a timetable or finalizing splits does not let DTBeats silently remove these benefits. No streams, chart position, playlist placement or earnings are guaranteed.

The second main prize and the two-lease bonus do not include this collaboration package.`;
`${a.email}${ca}`,
`${sa}`;
var la = {
    id: `DTB-POPUP-2026-09`,
    version: `DTB-DRAW-2026-09-23-R13`,
    acceptedPurchaseVersions: [`DTB-DRAW-2026-09-06-R4`, `DTB-DRAW-2026-09-08-R5`, `DTB-DRAW-2026-09-10-R6`, `DTB-DRAW-2026-09-12-R7`, `DTB-DRAW-2026-09-14-R8`, `DTB-DRAW-2026-09-16-R9`, `DTB-DRAW-2026-09-19-R10`, `DTB-DRAW-2026-09-20-R11`, `DTB-DRAW-2026-09-21-R12`, `DTB-DRAW-2026-09-23-R13`],
    enabled: !0,
    opensAt: Date.parse(`2026-09-07T13:00:00-04:00`),
    closesAt: Date.parse(`2026-09-26T13:00:00-04:00`),
    drawAt: Date.parse(`2026-09-26T14:00:00-04:00`),
    maxFreeEntriesPerSubmission: 1,
    prizes: [{
        rank: 1,
        title: `Two exclusive beats + DTBeats collaboration`,
        kind: `exclusive`,
        beats: 2,
        valueCad: 2600,
        pool: `all`
    }, {
        rank: 2,
        title: `Five exclusive beats`,
        kind: `exclusive`,
        beats: 5,
        valueCad: 4e3,
        pool: `all`
    }, {
        rank: 3,
        title: `Two unlimited leases`,
        kind: `lease`,
        beats: 2,
        valueCad: 200,
        pool: `free`
    }]
}
  , ua = [[`AB`, `Alberta`, 18], [`BC`, `British Columbia`, 19], [`MB`, `Manitoba`, 18], [`NB`, `New Brunswick`, 19], [`NL`, `Newfoundland and Labrador`, 19], [`NS`, `Nova Scotia`, 19], [`NT`, `Northwest Territories`, 19], [`NU`, `Nunavut`, 19], [`ON`, `Ontario`, 18], [`PE`, `Prince Edward Island`, 18], [`QC`, `Quebec`, 18], [`SK`, `Saskatchewan`, 18], [`YT`, `Yukon`, 19]]
  , da = [{
    id: `organizer`,
    title: `Organizer and entry period`,
    text: `The DTBeats Pop-Up Prize Draw is organized by Soubhi Daniel Tabar, professionally known as DTBeats, at ${a.address}. Questions and accessible-entry requests: ${a.email}.\n\nSchedule extended September 23, 2026: entries opened September 7, 2026 at 1:00 p.m. and now close September 26, 2026 at 1:00 p.m., Toronto time (EDT). The shop countdown and giveaway entry deadline have both been extended to Saturday, September 26 at 1:00 p.m. Toronto time. Existing valid entries remain in the same draw; no re-entry is required. The prizes and entry weights are unchanged. The website's server clock governs receipt. No purchase or payment is necessary to enter or win. The free-entry route gives access to the same two main prizes as purchase entries, plus the free-entry bonus prize.`
}, {
    id: `eligibility`,
    title: `Who can enter`,
    text: `Open to individual legal residents of Canada who have reached the age of majority in their province or territory when they enter. The organizer, people involved in administering the draw, and their immediate family and household members are not eligible. A business or other legal entity cannot win. One person may receive only one prize. Use your own legal name, one email address and the same Instagram username (when supplied) throughout the draw; no entries on another person's behalf, false identities, scripts or automated submissions.

Draw eligibility is separate from the ability to buy a beat license. Ineligible visitors can still shop without participating. The organizer will verify an entrant's identity, Canadian residence, age and compliance before confirming a prize.`
}, {
    id: `entries`,
    title: `Purchase and free entry`,
    text: `Purchase entry: an eligible purchaser who chooses to participate and accepts these rules at checkout receives one entry per beat in a confirmed, paid order. Five beats bought as a CA$250 bundle earn five entries; additional purchased beats earn additional entries. No Instagram handle, login or Instagram ownership check is required to purchase or receive purchase entries. Participation costs nothing beyond the ordinary advertised beat-license price. Orders in test mode, unpaid orders and orders without draw participation do not earn entries. Payment must be confirmed and recorded by the shop before the entry period closes. A checkout that finishes later may still deliver the purchased beats but does not earn draw entries.

Free entry: complete the form on this page with your legal name, email, your own existing Instagram username, province or territory, eligibility confirmation and rules acceptance. The username is supplied by you and is not automatically authenticated by Instagram. For online free entries only, DTBeats can review repeated usernames and may ask selected entrants to demonstrate control of the stated account manually. No Instagram login service is connected. Providing a false or borrowed identity may lead to disqualification after review. Legitimate repeat entries using the same identity remain allowed. Each completed free submission awards exactly one entry. You may submit again during the entry period. There is no overall per-person entry limit for either route. Every entry has the same weight in the two main prize draws, regardless of entry method. You can obtain the same number of main-prize entries without buying anything. Submissions may be briefly rate-limited to protect the service; this is not a per-person contest-entry limit. Contact support promptly if you cannot use the form.

Purchasers may also use the free form; the Instagram requirement then applies only to those separate online free submissions, not to their purchases or purchase entries. All valid free entries additionally enter the two-lease bonus draw. Purchase entries alone do not enter that bonus draw. Multiple methods or transactions do not create separate identities for the same person. Re-submitting the same request after a connection error does not duplicate its entries. Save the entry reference shown after submission.

No social-media follow, tag, share or marketing subscription is required. If you do not use Instagram or cannot use the form, contact startedoffbrokeinc@gmail.com early for a manual free entry. DTBeats must verify the request, eligibility and acceptance of the current rules and record the entry before the entry period closes. Each manual entry carries the same one-entry weight in the main and bonus draws. An email alone is not a confirmed entry; keep the entry reference supplied by the organizer. No Instagram account signup or purchase is required for that route. Valid purchase entries are not withdrawn merely because the underlying purchase is later refunded; consumer refund rights remain unaffected. Entries associated with fraud, falsified identity or payment abuse may be disqualified with the reason recorded.`
}, {
    id: `prizes`,
    title: `Three prizes · CA$6,800 total`,
    text: `Main prize 1: two fully licensed exclusive DTBeats, one Instagram collaboration post with @dtbeats, and one jointly credited song release with DTBeats using one of the two prize beats; approximate retail value CA$2,600 for the complete package. Main prize 2: a separate set of five fully licensed exclusive DTBeats, approximate retail value CA$4,000. Two different people will receive the main prizes. Bonus prize: two unlimited, non-exclusive DTBeats leases, approximate retail value CA$200, for a third person selected from valid free entries. The approximate values are supplied by the organizer. Total approximate retail value: CA$6,800.

Each prize includes the full MP3 recordings and a written license identifying its beats and credits. WAV files, stems and project files are not promised. DTBeats selects the seven distinct exclusive prize beats and must have authority to grant their exclusive licenses; they are not silently converted from existing customers' leases. The bonus winner may select two available shop beats. The exclusive and unlimited prize-license terms below form part of these rules. No license purchase, renewal fee or other payment is required to claim a prize. Main prize 1 includes the collaboration described below; no additional promotional posts or endorsements are required from the winner.

Prizes are not redeemable for cash or transferable. If a promised beat cannot be supplied with the stated rights, DTBeats must provide a rights-cleared replacement of equal or greater value at no cost, subject to applicable law and the winner's agreement to any material change. Actual resale value, earnings, streams or commercial success are not guaranteed.`
}, {
    id: `collaboration`,
    title: `Main prize 1 · collaboration details`,
    text: ca
}, {
    id: `selection`,
    title: `Random selection and odds`,
    text: `The organizer will initiate the draw on September 26, 2026 at or after 2:00 p.m. Toronto time. The main prizes are selected first, one after the other, from all valid purchase and free entries. Entries are weighted equally, and every entry belonging to the first selected person is removed from consideration for the second main prize. The bonus prize is then selected from the free-entry pool, excluding both main-prize selections. This produces three different potential winners when enough eligible entrants exist.

The odds depend on the number of valid entries in the applicable pool and the entries held by each eligible person. More entries give more chances; buying is not necessary to obtain more entries. Purchase entries and free entries have equal weight for each main prize. After each selection or disqualification, the remaining pool changes. If a pool has no eligible person remaining, its prize cannot be drawn from that pool; the organizer will publish an update and resolve the unawarded prize in accordance with applicable law, without inventing a winner.

Selections are recorded and cannot be repeatedly rerun to choose a preferred winner. A replacement is selected randomly from the relevant remaining pool only when a potential winner is disqualified, declines, fails verification or does not respond within the stated deadline. The reason is recorded.`
}, {
    id: `claim`,
    title: `Verification, announcement and delivery`,
    text: `DTBeats will contact potential winners at the email address they supplied, from ${a.email}. There is no automated notification email: the organizer sends these notices. Potential winners have 48 hours from the recorded notification to respond. They must establish eligibility and that they are a different person from the other winners, correctly answer an administered, multi-step mathematical skill-testing question without assistance within three minutes, and accept the applicable prize license. Contact the organizer before the question is administered if an accessible equivalent is needed.\n\nA selected entrant is a potential winner until verification is complete. If they are ineligible, decline, do not respond within 48 hours, or do not satisfy the verification requirements, their prize will be redrawn from the remaining eligible entries. A confirmed winner is not arbitrarily replaced.\n\nDTBeats will post a draw announcement or progress update to @dtbeats Instagram Stories on September 26, 2026 at 2:00 p.m. Toronto time, one hour after entries close. Confirmed winners' public display names or handles may be announced with their consent; private legal names, email addresses, entry records and contact details are not posted. If verification is still underway, the September 26 announcement will say so and confirmation will follow. No Instagram account is required to enter, win or receive direct notification.\n\nThe organizer will provide the MP3s and completed prize agreement privately within seven days after verification and prize selection are complete. Prize delivery is arranged directly by DTBeats; the shop's normal paid-order download page is a separate delivery service. Winners never need to pay a fee, provide a full card number or share a bank password to receive a prize.`
}, {
    id: `privacy`,
    title: `Privacy and administration`,
    text: `DTBeats collects an entrant's legal name, email, Instagram username supplied through the online free-entry form, province or territory, eligibility and rules acceptance, entry method and count, timestamps and entry references. Support-assisted entries also record the organizer's request-verification reference. Instagram usernames are not published to other entrants and are not treated as authenticated accounts. The owner may open the supplied public profile and review shared handles or different handles used with the same email; a flag is a prompt for review, not proof of abuse or automatic disqualification. Purchase participation also uses the applicable order reference and accepted checkout record. The site uses a short-lived hashed network identifier for rate limiting; the application does not save the raw IP address in entry records. Hosting providers may keep their own essential security logs.\n\nThis information is used to administer and audit the draw, prevent duplicate identities and abuse, verify eligibility, contact potential winners and deliver prizes. It is not a marketing subscription and is not sold. Only the organizer and service providers needed to operate the site have access. Hosting and storage use Sites and Cloudflare and may process data outside Canada. Contact ${a.email} for access, correction, withdrawal or an accessible entry method. Withdrawal removes the person's entries from future selection; it does not change a beat license already acquired.\n\nEntry and administration records will be retained only as needed to administer the draw, resolve disputes and meet legal obligations. Winner license records are retained for the continuing license. Unneeded entry data will be deleted or anonymized. The shop privacy policy also applies.\n\nThe organizer may address documented fraud, technical failures or circumstances beyond reasonable control fairly and in accordance with applicable law, with material changes disclosed publicly. Such changes cannot secretly reduce promised prizes or favor particular entrants. Mandatory consumer, privacy and other legal rights are preserved. Ontario law and applicable federal Canadian law govern, subject to mandatory protections in an entrant's jurisdiction.\n\nThis promotion is not sponsored, endorsed, administered by or associated with Instagram or Meta. Entrants release Instagram and Meta from claims connected with the promotion to the extent permitted by law; this does not release DTBeats from its own obligations or exclude rights that cannot lawfully be excluded.`
}];
`DTBEATS POP-UP PRIZE DRAW\n${la.version}\n\n` + da.map(e => `${e.title.toUpperCase()}\n\n${e.text}`).join(`

`);
function fa({checked: e, onCheckedChange: t, region: n, onRegionChange: r, id: i, disabled: a=!1}) {
    let o = ua.find(e => e[0] === n)?.[2];
    return (0,
    E.jsxs)(`div`, {
        className: `draw-consent-fields`,
        children: [(0,
        E.jsxs)(`div`, {
            className: `draw-consent-row`,
            children: [(0,
            E.jsx)($i, {
                id: i,
                checked: e,
                onCheckedChange: e => t(e === !0),
                disabled: a
            }), (0,
            E.jsxs)(`label`, {
                htmlFor: i,
                children: [`Enter me in the draw. I’m an eligible Canadian resident`, o ? ` aged ${o} or older` : ` of the age of majority`, `, and I agree to the `, (0,
                E.jsx)(`a`, {
                    href: `/draw#rules`,
                    target: `_blank`,
                    rel: `noreferrer`,
                    children: `draw rules and prize licenses`
                }), `.`]
            })]
        }), e && (0,
        E.jsxs)(`div`, {
            className: `draw-region`,
            children: [(0,
            E.jsx)(`label`, {
                htmlFor: `${i}-region`,
                children: `Province or territory`
            }), (0,
            E.jsxs)(ea, {
                value: n,
                onValueChange: r,
                disabled: a,
                children: [(0,
                E.jsx)(na, {
                    id: `${i}-region`,
                    className: `draw-select`,
                    children: (0,
                    E.jsx)(ta, {
                        placeholder: `Choose your province or territory`
                    })
                }), (0,
                E.jsx)(ra, {
                    children: ua.map(e => (0,
                    E.jsxs)(ia, {
                        value: e[0],
                        children: [e[1], ` · `, e[2], `+`]
                    }, e[0]))
                })]
            })]
        })]
    })
}
export {Er as a, le as c, kr as i, x as l, la as n, je as o, $i as r, Ce as s, fa as t};
