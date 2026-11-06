import {r as e} from "./rolldown-runtime-S-ySWqyJ.js";
import {i as t, n, r} from "./framework-CXnKph_e.js";
var i = r()
  , a = e(n(), 1)
  , o = e(t(), 1)
  , s = Object.defineProperty
  , c = (e, t) => s(e, `name`, {
    value: t,
    configurable: !0
});
function l(e, t) {
    if (typeof e == `function`)
        return e(t);
    e != null && (e.current = t)
}
c(l, `setRef`);
function u(...e) {
    return t => {
        let n = !1
          , r = e.map(e => {
            let r = l(e, t);
            return !n && typeof r == `function` && (n = !0),
            r
        }
        );
        if (n)
            return () => {
                for (let t = 0; t < r.length; t++) {
                    let n = r[t];
                    typeof n == `function` ? n() : l(e[t], null)
                }
            }
    }
}
c(u, `composeRefs`);
function d(...e) {
    return o.useCallback(u(...e), e)
}
c(d, `useComposedRefs`);
var f = Object.defineProperty
  , p = (e, t) => f(e, `name`, {
    value: t,
    configurable: !0
});
function m(e) {
    let t = o.forwardRef( (t, n) => {
        let {children: r, ...i} = t
          , a = null
          , s = !1
          , c = [];
        x(r) && typeof T == `function` && (r = T(r._payload)),
        o.Children.forEach(r, e => {
            if (y(e)) {
                s = !0;
                let t = e
                  , n = `child` in t.props ? t.props.child : t.props.children;
                x(n) && typeof T == `function` && (n = T(n._payload)),
                a = ee(t, n),
                c.push(a?.props?.children)
            } else
                c.push(e)
        }
        ),
        a ? a = o.cloneElement(a, void 0, c) : !s && o.Children.count(r) === 1 && o.isValidElement(r) && (a = r);
        let l = a ? v(a) : void 0
          , u = d(n, l);
        if (!a) {
            if (r || r === 0)
                throw Error(s ? w(e) : C(e));
            return r
        }
        let f = _(i, a.props ?? {});
        return a.type !== o.Fragment && (f.ref = n ? u : l),
        o.cloneElement(a, f)
    }
    );
    return t.displayName = `${e}.Slot`,
    t
}
p(m, `createSlot`);
var h = Symbol.for(`radix.slottable`);
function g(e) {
    let t = p(e => `child` in e ? e.children(e.child) : e.children, `Slottable`);
    return t.displayName = `${e}.Slottable`,
    t.__radixId = h,
    t
}
p(g, `createSlottable`);
var ee = p( (e, t) => {
    if (`child` in e.props) {
        let t = e.props.child;
        return o.isValidElement(t) ? o.cloneElement(t, void 0, e.props.children(t.props.children)) : null
    }
    return o.isValidElement(t) ? t : null
}
, `getSlottableElementFromSlottable`);
function _(e, t) {
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
p(_, `mergeProps`);
function v(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get
      , n = t && `isReactWarning` in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
p(v, `getElementRef`);
function y(e) {
    return o.isValidElement(e) && typeof e.type == `function` && `__radixId` in e.type && e.type.__radixId === h
}
p(y, `isSlottable`);
var b = Symbol.for(`react.lazy`);
function x(e) {
    return typeof e == `object` && !!e && `$$typeof` in e && e.$$typeof === b && `_payload` in e && S(e._payload)
}
p(x, `isLazyComponent`);
function S(e) {
    return typeof e == `object` && !!e && `then` in e
}
p(S, `isPromiseLike`);
var C = p(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, `createSlotError`)
  , w = p(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, `createSlottableError`)
  , T = o.use
  , te = Object.defineProperty
  , E = (e, t) => te(e, `name`, {
    value: t,
    configurable: !0
})
  , ne = [`a`, `button`, `div`, `form`, `h2`, `h3`, `img`, `input`, `label`, `li`, `nav`, `ol`, `p`, `select`, `span`, `svg`, `ul`].reduce( (e, t) => {
    let n = m(`Primitive.${t}`)
      , r = o.forwardRef( (e, r) => {
        let {asChild: a, ...o} = e
          , s = a ? n : t;
        return typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
        (0,
        i.jsx)(s, {
            ...o,
            ref: r
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function re(e, t) {
    e && a.flushSync( () => e.dispatchEvent(t))
}
E(re, `dispatchDiscreteCustomEvent`);
var D = Object.defineProperty
  , O = (e, t) => D(e, `name`, {
    value: t,
    configurable: !0
});
function k(e, t) {
    let n = o.createContext(t);
    n.displayName = e + `Context`;
    let r = O(e => {
        let {children: t, ...r} = e
          , a = o.useMemo( () => r, Object.values(r));
        return (0,
        i.jsx)(n.Provider, {
            value: a,
            children: t
        })
    }
    , `Provider`);
    r.displayName = e + `Provider`;
    function a(r, i={}) {
        let {optional: a=!1} = i
          , s = o.useContext(n);
        if (s)
            return s;
        if (t !== void 0)
            return t;
        if (!a)
            throw Error(`\`${r}\` must be used within \`${e}\``)
    }
    return O(a, `useContext`),
    [r, a]
}
O(k, `createContext`);
function ie(e, t=[]) {
    let n = [];
    function r(t, r) {
        let a = o.createContext(r);
        a.displayName = t + `Context`;
        let s = n.length;
        n = [...n, r];
        let c = O(t => {
            let {scope: n, children: r, ...c} = t
              , l = n?.[e]?.[s] || a
              , u = o.useMemo( () => c, Object.values(c));
            return (0,
            i.jsx)(l.Provider, {
                value: u,
                children: r
            })
        }
        , `Provider`);
        c.displayName = t + `Provider`;
        function l(n, i, c={}) {
            let {optional: l=!1} = c
              , u = i?.[e]?.[s] || a
              , d = o.useContext(u);
            if (d)
                return d;
            if (r !== void 0)
                return r;
            if (!l)
                throw Error(`\`${n}\` must be used within \`${t}\``)
        }
        return O(l, `useContext`),
        [c, l]
    }
    O(r, `createContext`);
    let a = O( () => {
        let t = n.map(e => o.createContext(e));
        return O(function(n) {
            let r = n?.[e] || t;
            return o.useMemo( () => ({
                [`__scope${e}`]: {
                    ...n,
                    [e]: r
                }
            }), [n, r])
        }, `useScope`)
    }
    , `createScope`);
    return a.scopeName = e,
    [r, ae(a, ...t)]
}
O(ie, `createContextScope`);
function ae(...e) {
    let t = e[0];
    if (e.length === 1)
        return t;
    let n = O( () => {
        let n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
        }));
        return O(function(e) {
            let r = n.reduce( (t, {useScope: n, scopeName: r}) => {
                let i = n(e)[`__scope${r}`];
                return {
                    ...t,
                    ...i
                }
            }
            , {});
            return o.useMemo( () => ({
                [`__scope${t.scopeName}`]: r
            }), [r])
        }, `useComposedScopes`)
    }
    , `createScope`);
    return n.scopeName = t.scopeName,
    n
}
O(ae, `composeContextScopes`);
var A = Object.defineProperty
  , j = (e, t) => A(e, `name`, {
    value: t,
    configurable: !0
})
  , oe = !!(typeof window < `u` && window.document && window.document.createElement);
function M(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return j(function(r) {
        if (e?.(r),
        n === !1 || !r || !r.defaultPrevented)
            return t?.(r)
    }, `handleEvent`)
}
j(M, `composeEventHandlers`);
function se(e) {
    if (!oe)
        throw Error(`Cannot access window outside of the DOM`);
    return e?.ownerDocument?.defaultView ?? window
}
j(se, `getOwnerWindow`);
function N(e) {
    if (!oe)
        throw Error(`Cannot access document outside of the DOM`);
    return e?.ownerDocument ?? document
}
j(N, `getOwnerDocument`);
function P(e, t=!1) {
    let {activeElement: n} = N(e);
    if (!n?.nodeName)
        return null;
    if (ce(n) && n.contentDocument)
        return P(n.contentDocument.body, t);
    if (t) {
        let e = n.getAttribute(`aria-activedescendant`);
        if (e) {
            let t = N(n).getElementById(e);
            if (t)
                return t
        }
    }
    return n
}
j(P, `getActiveElement`);
function ce(e) {
    return e.tagName === `IFRAME`
}
j(ce, `isFrame`);
var F = globalThis?.document ? o.useLayoutEffect : () => {}
  , I = Object.defineProperty
  , le = (e, t) => I(e, `name`, {
    value: t,
    configurable: !0
})
  , ue = o.useEffectEvent
  , de = o.useInsertionEffect;
function fe(e) {
    if (typeof ue == `function`)
        return ue(e);
    let t = o.useRef( () => {
        throw Error(`Cannot call an event handler while rendering.`)
    }
    );
    return typeof de == `function` ? de( () => {
        t.current = e
    }
    ) : F( () => {
        t.current = e
    }
    ),
    o.useMemo( () => ( (...e) => t.current?.(...e)), [])
}
le(fe, `useEffectEvent`);
var pe = Object.defineProperty
  , me = (e, t) => pe(e, `name`, {
    value: t,
    configurable: !0
})
  , he = o.useInsertionEffect || F;
function ge({prop: e, defaultProp: t, onChange: n=me( () => {}
, `onChange`), caller: r}) {
    let[i,a,s] = _e({
        defaultProp: t,
        onChange: n
    })
      , c = e !== void 0;
    return [c ? e : i, o.useCallback(t => {
        if (c) {
            let n = ve(t) ? t(e) : t;
            n !== e && s.current?.(n)
        } else
            a(t)
    }
    , [c, e, a, s])]
}
me(ge, `useControllableState`);
function _e({defaultProp: e, onChange: t}) {
    let[n,r] = o.useState(e)
      , i = o.useRef(n)
      , a = o.useRef(t);
    return he( () => {
        a.current = t
    }
    , [t]),
    o.useEffect( () => {
        i.current !== n && (a.current?.(n),
        i.current = n)
    }
    , [n, i]),
    [n, r, a]
}
me(_e, `useUncontrolledState`);
function ve(e) {
    return typeof e == `function`
}
me(ve, `isFunction`);
var ye = Symbol(`RADIX:SYNC_STATE`);
function be(e, t, n, r) {
    let {prop: i, defaultProp: a, onChange: s, caller: c} = t
      , l = i !== void 0
      , u = fe(s)
      , d = [{
        ...n,
        state: a
    }];
    r && d.push(r);
    let[f,p] = o.useReducer( (t, n) => {
        if (n.type === ye)
            return {
                ...t,
                state: n.state
            };
        let r = e(t, n);
        return l && !Object.is(r.state, t.state) && u(r.state),
        r
    }
    , ...d)
      , m = f.state
      , h = o.useRef(m);
    o.useEffect( () => {
        h.current !== m && (h.current = m,
        l || u(m))
    }
    , [m, h, l]);
    let g = o.useMemo( () => i === void 0 ? f : {
        ...f,
        state: i
    }, [f, i]);
    return o.useEffect( () => {
        l && !Object.is(i, f.state) && p({
            type: ye,
            state: i
        })
    }
    , [i, f.state, l]),
    [g, p]
}
me(be, `useControllableStateReducer`);
var xe = Object.defineProperty
  , L = (e, t) => xe(e, `name`, {
    value: t,
    configurable: !0
});
function Se(e, t) {
    return o.useReducer( (e, n) => t[e][n] ?? e, e)
}
L(Se, `useStateMachine`);
var Ce = L(e => {
    let {present: t, children: n} = e
      , r = we(t)
      , i = typeof n == `function` ? n({
        present: r.isPresent
    }) : o.Children.only(n)
      , a = Ee(r.ref, De(i));
    return typeof n == `function` || r.isPresent ? o.cloneElement(i, {
        ref: a
    }) : null
}
, `Presence`);
function we(e) {
    let[t,n] = o.useState()
      , r = o.useRef(null)
      , i = o.useRef(e)
      , a = o.useRef(`none`)
      , s = o.useRef(void 0)
      , [c,l] = Se(e ? `mounted` : `unmounted`, {
        mounted: {
            UNMOUNT: `unmounted`,
            ANIMATION_OUT: `unmountSuspended`
        },
        unmountSuspended: {
            MOUNT: `mounted`,
            ANIMATION_END: `unmounted`
        },
        unmounted: {
            MOUNT: `mounted`
        }
    });
    return o.useEffect( () => {
        c === `mounted` ? (a.current = s.current ?? R(r.current),
        s.current = void 0) : a.current = `none`
    }
    , [c]),
    F( () => {
        let t = r.current
          , n = i.current;
        if (n !== e) {
            let r = a.current
              , o = R(t);
            e ? (s.current = o,
            l(`MOUNT`)) : o === `none` || t?.display === `none` ? l(`UNMOUNT`) : l(n && r !== o ? `ANIMATION_OUT` : `UNMOUNT`),
            i.current = e
        }
    }
    , [e, l]),
    F( () => {
        if (t) {
            let e, n = t.ownerDocument.defaultView ?? window, o = L(a => {
                let o = R(r.current).includes(CSS.escape(a.animationName));
                if (a.target === t && o && (l(`ANIMATION_END`),
                !i.current)) {
                    let r = t.style.animationFillMode;
                    t.style.animationFillMode = `forwards`,
                    e = n.setTimeout( () => {
                        t.style.animationFillMode === `forwards` && (t.style.animationFillMode = r)
                    }
                    )
                }
            }
            , `handleAnimationEnd`), s = L(e => {
                e.target === t && (a.current = R(r.current))
            }
            , `handleAnimationStart`);
            return t.addEventListener(`animationstart`, s),
            t.addEventListener(`animationcancel`, o),
            t.addEventListener(`animationend`, o),
            () => {
                n.clearTimeout(e),
                t.removeEventListener(`animationstart`, s),
                t.removeEventListener(`animationcancel`, o),
                t.removeEventListener(`animationend`, o)
            }
        } else
            l(`ANIMATION_END`)
    }
    , [t, l]),
    {
        isPresent: [`mounted`, `unmountSuspended`].includes(c),
        ref: o.useCallback(e => {
            if (e) {
                let t = getComputedStyle(e);
                r.current = t,
                s.current = R(t)
            } else
                r.current = null;
            n(e)
        }
        , [])
    }
}
L(we, `usePresence`);
function Te(e, t) {
    if (typeof e == `function`)
        return e(t);
    e != null && (e.current = t)
}
L(Te, `setRef`);
function Ee(...e) {
    let t = o.useRef(e);
    return t.current = e,
    o.useCallback(e => {
        let n = t.current
          , r = !1
          , i = n.map(t => {
            let n = Te(t, e);
            return !r && typeof n == `function` && (r = !0),
            n
        }
        );
        if (r)
            return () => {
                for (let e = 0; e < i.length; e++) {
                    let t = i[e];
                    typeof t == `function` ? t() : Te(n[e], null)
                }
            }
    }
    , [])
}
L(Ee, `useStableComposedRefs`);
function R(e) {
    return e?.animationName || `none`
}
L(R, `getAnimationName`);
function De(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get
      , n = t && `isReactWarning` in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
L(De, `getElementRef`);
var Oe = Object.defineProperty
  , ke = (e, t) => Oe(e, `name`, {
    value: t,
    configurable: !0
})
  , Ae = o.useId || ( () => void 0)
  , je = 0;
function Me(e) {
    let[t,n] = o.useState(Ae());
    return F( () => {
        e || n(e => e ?? String(je++))
    }
    , [e]),
    e || (t ? `radix-${t}` : ``)
}
ke(Me, `useId`);
var Ne = Object.defineProperty
  , Pe = (e, t) => Ne(e, `name`, {
    value: t,
    configurable: !0
});
function Fe(e, t) {
    if (typeof e == `function`)
        return e(t);
    e != null && (e.current = t)
}
Pe(Fe, `setRef`);
function Ie(...e) {
    return t => {
        let n = !1
          , r = e.map(e => {
            let r = Fe(e, t);
            return !n && typeof r == `function` && (n = !0),
            r
        }
        );
        if (n)
            return () => {
                for (let t = 0; t < r.length; t++) {
                    let n = r[t];
                    typeof n == `function` ? n() : Fe(e[t], null)
                }
            }
    }
}
Pe(Ie, `composeRefs`);
function Le(...e) {
    return o.useCallback(Ie(...e), e)
}
Pe(Le, `useComposedRefs`);
var Re = Object.defineProperty
  , ze = (e, t) => Re(e, `name`, {
    value: t,
    configurable: !0
});
function z(e) {
    let t = o.useRef(e);
    return o.useEffect( () => {
        t.current = e
    }
    ),
    o.useMemo( () => ( (...e) => t.current?.(...e)), [])
}
ze(z, `useCallbackRef`);
var Be = Object.defineProperty, B = (e, t) => Be(e, `name`, {
    value: t,
    configurable: !0
}), Ve = `dismissableLayer.update`, He = `dismissableLayer.pointerDownOutside`, Ue = `dismissableLayer.focusOutside`, We, Ge = o.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set,
    dismissableSurfaces: new Set
}), Ke = o.forwardRef(B(function(e, t) {
    let {disableOutsidePointerEvents: n=!1, deferPointerDownOutside: r=!1, onEscapeKeyDown: a, onPointerDownOutside: s, onFocusOutside: c, onInteractOutside: l, onDismiss: u, ...d} = e
      , f = o.useContext(Ge)
      , [p,m] = o.useState(null)
      , h = p?.ownerDocument ?? globalThis?.document
      , [,g] = o.useState({})
      , ee = Le(t, m)
      , _ = Array.from(f.layers)
      , [v] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1)
      , y = v ? _.indexOf(v) : -1
      , b = p ? _.indexOf(p) : -1
      , x = f.layersWithOutsidePointerEventsDisabled.size > 0
      , S = b >= y
      , C = o.useRef(!1)
      , w = Ye(e => {
        s?.(e),
        l?.(e),
        e.defaultPrevented || u?.()
    }
    , {
        ownerDocument: h,
        deferPointerDownOutside: r,
        isDeferredPointerDownOutsideRef: C,
        dismissableSurfaces: f.dismissableSurfaces,
        shouldHandlePointerDownOutside: o.useCallback(e => {
            if (!(e instanceof Node))
                return !1;
            let t = [...f.branches].some(t => t.contains(e));
            return S && !t
        }
        , [f.branches, S])
    })
      , T = Xe(e => {
        if (r && C.current)
            return;
        let t = e.target;
        [...f.branches].some(e => e.contains(t)) || (c?.(e),
        l?.(e),
        e.defaultPrevented || u?.())
    }
    , h)
      , te = p ? b === _.length - 1 : !1
      , E = z(e => {
        e.key === `Escape` && (a?.(e),
        !e.defaultPrevented && u && (e.preventDefault(),
        u()))
    }
    );
    return o.useEffect( () => {
        if (te)
            return h.addEventListener(`keydown`, E, {
                capture: !0
            }),
            () => h.removeEventListener(`keydown`, E, {
                capture: !0
            })
    }
    , [h, te, E]),
    o.useEffect( () => {
        if (p)
            return n && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (We = h.body.style.pointerEvents,
            h.body.style.pointerEvents = `none`),
            f.layersWithOutsidePointerEventsDisabled.add(p)),
            f.layers.add(p),
            Ze(),
            () => {
                n && (f.layersWithOutsidePointerEventsDisabled.delete(p),
                f.layersWithOutsidePointerEventsDisabled.size === 0 && (h.body.style.pointerEvents = We))
            }
    }
    , [p, h, n, f]),
    o.useEffect( () => () => {
        p && (f.layers.delete(p),
        f.layersWithOutsidePointerEventsDisabled.delete(p),
        Ze())
    }
    , [p, f]),
    o.useEffect( () => {
        let e = B( () => g({}), `handleUpdate`);
        return document.addEventListener(Ve, e),
        () => document.removeEventListener(Ve, e)
    }
    , []),
    (0,
    i.jsx)(ne.div, {
        ...d,
        ref: ee,
        style: {
            pointerEvents: x ? S ? `auto` : `none` : void 0,
            ...e.style
        },
        onFocusCapture: M(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: M(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: M(e.onPointerDownCapture, w.onPointerDownCapture)
    })
}, `DismissableLayer`));
function qe() {
    let e = o.useContext(Ge)
      , [t,n] = o.useState(null);
    return o.useEffect( () => {
        if (t)
            return e.dismissableSurfaces.add(t),
            () => {
                e.dismissableSurfaces.delete(t)
            }
    }
    , [t, e.dismissableSurfaces]),
    n
}
B(qe, `useDismissableLayerSurface`);
var Je = B( () => !0, `IS_TRUE`);
function Ye(e, t) {
    let {ownerDocument: n=globalThis?.document, deferPointerDownOutside: r=!1, isDeferredPointerDownOutsideRef: i, dismissableSurfaces: a, shouldHandlePointerDownOutside: s=Je} = t
      , c = z(e)
      , l = o.useRef(!1)
      , u = o.useRef(!1)
      , d = o.useRef(new Map)
      , f = o.useRef( () => {}
    );
    return o.useEffect( () => {
        function e() {
            u.current = !1,
            i.current = !1,
            d.current.clear()
        }
        B(e, `resetOutsideInteraction`);
        function t() {
            return Array.from(d.current.values()).some(Boolean)
        }
        B(t, `isOutsideInteractionIntercepted`);
        function o(e) {
            if (!u.current)
                return;
            let t = e.target;
            t instanceof Node && [...a].some(e => e.contains(t)) || d.current.set(e.type, !0),
            e.type === `click` && window.setTimeout( () => {
                u.current && f.current()
            }
            , 0)
        }
        B(o, `handleInteractionCapture`);
        function p(e) {
            u.current && d.current.set(e.type, !1)
        }
        B(p, `handleInteractionBubble`);
        let m = B(a => {
            if (a.target && !l.current) {
                let o = function() {
                    n.removeEventListener(`click`, f.current);
                    let r = t();
                    e(),
                    r || Qe(He, c, p, {
                        discrete: !0
                    })
                };
                if (B(o, `handleAndDispatchPointerDownOutsideEvent`),
                !s(a.target)) {
                    n.removeEventListener(`click`, f.current),
                    e(),
                    l.current = !1;
                    return
                }
                let p = {
                    originalEvent: a
                };
                u.current = !0,
                i.current = r && a.button === 0,
                d.current.clear(),
                !r || a.button !== 0 ? o() : (n.removeEventListener(`click`, f.current),
                f.current = o,
                n.addEventListener(`click`, f.current, {
                    once: !0
                }))
            } else
                n.removeEventListener(`click`, f.current),
                e();
            l.current = !1
        }
        , `handlePointerDown`)
          , h = [`pointerup`, `mousedown`, `mouseup`, `touchstart`, `touchend`, `click`];
        for (let e of h)
            n.addEventListener(e, o, !0),
            n.addEventListener(e, p);
        let g = window.setTimeout( () => {
            n.addEventListener(`pointerdown`, m)
        }
        , 0);
        return () => {
            window.clearTimeout(g),
            n.removeEventListener(`pointerdown`, m),
            n.removeEventListener(`click`, f.current);
            for (let e of h)
                n.removeEventListener(e, o, !0),
                n.removeEventListener(e, p)
        }
    }
    , [n, c, r, i, a, s]),
    {
        onPointerDownCapture: B( () => l.current = !0, `onPointerDownCapture`)
    }
}
B(Ye, `usePointerDownOutside`);
function Xe(e, t=globalThis?.document) {
    let n = z(e)
      , r = o.useRef(!1);
    return o.useEffect( () => {
        let e = B(e => {
            e.target && !r.current && Qe(Ue, n, {
                originalEvent: e
            }, {
                discrete: !1
            })
        }
        , `handleFocus`);
        return t.addEventListener(`focusin`, e),
        () => t.removeEventListener(`focusin`, e)
    }
    , [t, n]),
    {
        onFocusCapture: B( () => r.current = !0, `onFocusCapture`),
        onBlurCapture: B( () => r.current = !1, `onBlurCapture`)
    }
}
B(Xe, `useFocusOutside`);
function Ze() {
    let e = new CustomEvent(Ve);
    document.dispatchEvent(e)
}
B(Ze, `dispatchUpdate`);
function Qe(e, t, n, {discrete: r}) {
    let i = n.originalEvent.target
      , a = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && i.addEventListener(e, t, {
        once: !0
    }),
    r ? re(i, a) : i.dispatchEvent(a)
}
B(Qe, `handleAndDispatchCustomEvent`);
var $e = Object.defineProperty
  , et = (e, t) => $e(e, `name`, {
    value: t,
    configurable: !0
});
function tt(e, t) {
    if (typeof e == `function`)
        return e(t);
    e != null && (e.current = t)
}
et(tt, `setRef`);
function nt(...e) {
    return t => {
        let n = !1
          , r = e.map(e => {
            let r = tt(e, t);
            return !n && typeof r == `function` && (n = !0),
            r
        }
        );
        if (n)
            return () => {
                for (let t = 0; t < r.length; t++) {
                    let n = r[t];
                    typeof n == `function` ? n() : tt(e[t], null)
                }
            }
    }
}
et(nt, `composeRefs`);
function rt(...e) {
    return o.useCallback(nt(...e), e)
}
et(rt, `useComposedRefs`);
var it = Object.defineProperty
  , V = (e, t) => it(e, `name`, {
    value: t,
    configurable: !0
})
  , at = `focusScope.autoFocusOnMount`
  , ot = `focusScope.autoFocusOnUnmount`
  , st = {
    bubbles: !1,
    cancelable: !0
}
  , ct = o.forwardRef(V(function(e, t) {
    let {loop: n=!1, trapped: r=!1, onMountAutoFocus: a, onUnmountAutoFocus: s, ...c} = e
      , [l,u] = o.useState(null)
      , d = z(a)
      , f = z(s)
      , p = o.useRef(null)
      , m = rt(t, u)
      , h = o.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    o.useEffect( () => {
        if (r) {
            let e = function(e) {
                if (h.paused || !l)
                    return;
                let t = e.target;
                l.contains(t) ? p.current = t : H(p.current, {
                    select: !0
                })
            }
              , t = function(e) {
                if (h.paused || !l)
                    return;
                let t = e.relatedTarget;
                t !== null && (l.contains(t) || H(p.current, {
                    select: !0
                }))
            }
              , n = function(e) {
                if (document.activeElement === document.body)
                    for (let t of e)
                        t.removedNodes.length > 0 && H(l)
            };
            V(e, `handleFocusIn`),
            V(t, `handleFocusOut`),
            V(n, `handleMutations`),
            document.addEventListener(`focusin`, e),
            document.addEventListener(`focusout`, t);
            let r = new MutationObserver(n);
            return l && r.observe(l, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener(`focusin`, e),
                document.removeEventListener(`focusout`, t),
                r.disconnect()
            }
        }
    }
    , [r, l, h.paused]),
    o.useEffect( () => {
        if (l) {
            ht.add(h);
            let e = document.activeElement;
            if (!l.contains(e)) {
                let t = new CustomEvent(at,st);
                l.addEventListener(at, d),
                l.dispatchEvent(t),
                t.defaultPrevented || (lt(vt(dt(l)), {
                    select: !0
                }),
                document.activeElement === e && H(l))
            }
            return () => {
                l.removeEventListener(at, d),
                setTimeout( () => {
                    let t = new CustomEvent(ot,st);
                    l.addEventListener(ot, f),
                    l.dispatchEvent(t),
                    t.defaultPrevented || H(e ?? document.body, {
                        select: !0
                    }),
                    l.removeEventListener(ot, f),
                    ht.remove(h)
                }
                , 0)
            }
        }
    }
    , [l, d, f, h]);
    let g = o.useCallback(e => {
        if (!n && !r || h.paused)
            return;
        let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey
          , i = document.activeElement;
        if (t && i) {
            let t = e.currentTarget
              , [r,a] = ut(t);
            r && a ? !e.shiftKey && i === a ? (e.preventDefault(),
            n && H(r, {
                select: !0
            })) : e.shiftKey && i === r && (e.preventDefault(),
            n && H(a, {
                select: !0
            })) : i === t && e.preventDefault()
        }
    }
    , [n, r, h.paused]);
    return (0,
    i.jsx)(ne.div, {
        tabIndex: -1,
        ...c,
        ref: m,
        onKeyDown: g
    })
}, `FocusScope`));
function lt(e, {select: t=!1}={}) {
    let n = document.activeElement;
    for (let r of e)
        if (H(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
V(lt, `focusFirst`);
function ut(e) {
    let t = dt(e);
    return [ft(t, e), ft(t.reverse(), e)]
}
V(ut, `getTabbableEdges`);
function dt(e) {
    let t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: V(e => {
            let t = e.tagName === `INPUT` && e.type === `hidden`;
            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
        , `acceptNode`)
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
V(dt, `getTabbableCandidates`);
function ft(e, t) {
    let n = typeof t.checkVisibility == `function` && t.checkVisibility({
        checkVisibilityCSS: !0
    });
    for (let r of e)
        if (!(n ? !r.checkVisibility({
            checkVisibilityCSS: !0
        }) : pt(r, {
            upTo: t
        })))
            return r
}
V(ft, `findVisible`);
function pt(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === `hidden`)
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === `none`)
            return !0;
        e = e.parentElement
    }
    return !1
}
V(pt, `isHidden`);
function mt(e) {
    return e instanceof HTMLInputElement && `select` in e
}
V(mt, `isSelectableInput`);
function H(e, {select: t=!1}={}) {
    if (e && e.focus) {
        let n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && mt(e) && t && e.select()
    }
}
V(H, `focus`);
var ht = gt();
function gt() {
    let e = [];
    return {
        add(t) {
            let n = e[0];
            t !== n && n?.pause(),
            e = _t(e, t),
            e.unshift(t)
        },
        remove(t) {
            e = _t(e, t),
            e[0]?.resume()
        }
    }
}
V(gt, `createFocusScopesStack`);
function _t(e, t) {
    let n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
V(_t, `arrayRemove`);
function vt(e) {
    return e.filter(e => e.tagName !== `A`)
}
V(vt, `removeLinks`);
var yt = Object.defineProperty
  , bt = o.forwardRef(( (e, t) => yt(e, `name`, {
    value: t,
    configurable: !0
}))(function(e, t) {
    let {container: n, ...r} = e
      , [s,c] = o.useState(!1);
    F( () => c(!0), []);
    let l = n || s && globalThis?.document?.body;
    return l ? a.createPortal((0,
    i.jsx)(ne.div, {
        ...r,
        ref: t
    }), l) : null
}, `Portal`))
  , xt = Object.defineProperty
  , St = (e, t) => xt(e, `name`, {
    value: t,
    configurable: !0
})
  , Ct = 0
  , wt = null;
function Tt(e) {
    return Et(),
    e.children
}
St(Tt, `FocusGuards`);
function Et() {
    o.useEffect( () => {
        wt ||= {
            start: Dt(),
            end: Dt()
        };
        let {start: e, end: t} = wt;
        return document.body.firstElementChild !== e && document.body.insertAdjacentElement(`afterbegin`, e),
        document.body.lastElementChild !== t && document.body.insertAdjacentElement(`beforeend`, t),
        Ct++,
        () => {
            Ct === 1 && (wt?.start.remove(),
            wt?.end.remove(),
            wt = null),
            Ct = Math.max(0, Ct - 1)
        }
    }
    , [])
}
St(Et, `useFocusGuards`);
function Dt() {
    let e = document.createElement(`span`);
    return e.setAttribute(`data-radix-focus-guard`, ``),
    e.tabIndex = 0,
    e.style.outline = `none`,
    e.style.opacity = `0`,
    e.style.position = `fixed`,
    e.style.pointerEvents = `none`,
    e
}
St(Dt, `createFocusGuard`);
var U = function() {
    return U = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n],
            t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
    }
    ,
    U.apply(this, arguments)
};
function Ot(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == `function`)
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
function kt(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, i = t.length, a; r < i; r++)
            (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r),
            a[r] = t[r]);
    return e.concat(a || Array.prototype.slice.call(t))
}
var At = `right-scroll-bar-position`
  , jt = `width-before-scroll-bar`
  , Mt = `with-scroll-bars-hidden`
  , Nt = `--removed-body-scroll-bar-size`;
function Pt(e, t) {
    return typeof e == `function` ? e(t) : e && (e.current = t),
    e
}
function Ft(e, t) {
    var n = (0,
    o.useState)(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(e) {
                    var t = n.value;
                    t !== e && (n.value = e,
                    n.callback(e, t))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var It = typeof window < `u` ? o.useLayoutEffect : o.useEffect
  , Lt = new WeakMap;
function Rt(e, t) {
    var n = Ft(t || null, function(t) {
        return e.forEach(function(e) {
            return Pt(e, t)
        })
    });
    return It(function() {
        var t = Lt.get(n);
        if (t) {
            var r = new Set(t)
              , i = new Set(e)
              , a = n.current;
            r.forEach(function(e) {
                i.has(e) || Pt(e, null)
            }),
            i.forEach(function(e) {
                r.has(e) || Pt(e, a)
            })
        }
        Lt.set(n, e)
    }, [e]),
    n
}
function zt(e) {
    return e
}
function Bt(e, t) {
    t === void 0 && (t = zt);
    var n = []
      , r = !1;
    return {
        read: function() {
            if (r)
                throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(e) {
            var i = t(e, r);
            return n.push(i),
            function() {
                n = n.filter(function(e) {
                    return e !== i
                })
            }
        },
        assignSyncMedium: function(e) {
            for (r = !0; n.length; ) {
                var t = n;
                n = [],
                t.forEach(e)
            }
            n = {
                push: function(t) {
                    return e(t)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(e) {
            r = !0;
            var t = [];
            if (n.length) {
                var i = n;
                n = [],
                i.forEach(e),
                t = n
            }
            var a = function() {
                var n = t;
                t = [],
                n.forEach(e)
            }
              , o = function() {
                return Promise.resolve().then(a)
            };
            o(),
            n = {
                push: function(e) {
                    t.push(e),
                    o()
                },
                filter: function(e) {
                    return t = t.filter(e),
                    n
                }
            }
        }
    }
}
function Vt(e) {
    e === void 0 && (e = {});
    var t = Bt(null);
    return t.options = U({
        async: !0,
        ssr: !1
    }, e),
    t
}
var Ht = function(e) {
    var t = e.sideCar
      , n = Ot(e, [`sideCar`]);
    if (!t)
        throw Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw Error(`Sidecar medium not found`);
    return o.createElement(r, U({}, n))
};
Ht.isSideCarExport = !0;
function Ut(e, t) {
    return e.useMedium(t),
    Ht
}
var Wt = Vt()
  , Gt = function() {}
  , Kt = o.forwardRef(function(e, t) {
    var n = o.useRef(null)
      , r = o.useState({
        onScrollCapture: Gt,
        onWheelCapture: Gt,
        onTouchMoveCapture: Gt
    })
      , i = r[0]
      , a = r[1]
      , s = e.forwardProps
      , c = e.children
      , l = e.className
      , u = e.removeScrollBar
      , d = e.enabled
      , f = e.shards
      , p = e.sideCar
      , m = e.noRelative
      , h = e.noIsolation
      , g = e.inert
      , ee = e.allowPinchZoom
      , _ = e.as
      , v = _ === void 0 ? `div` : _
      , y = e.gapMode
      , b = Ot(e, [`forwardProps`, `children`, `className`, `removeScrollBar`, `enabled`, `shards`, `sideCar`, `noRelative`, `noIsolation`, `inert`, `allowPinchZoom`, `as`, `gapMode`])
      , x = p
      , S = Rt([n, t])
      , C = U(U({}, b), i);
    return o.createElement(o.Fragment, null, d && o.createElement(x, {
        sideCar: Wt,
        removeScrollBar: u,
        shards: f,
        noRelative: m,
        noIsolation: h,
        inert: g,
        setCallbacks: a,
        allowPinchZoom: !!ee,
        lockRef: n,
        gapMode: y
    }), s ? o.cloneElement(o.Children.only(c), U(U({}, C), {
        ref: S
    })) : o.createElement(v, U({}, C, {
        className: l,
        ref: S
    }), c))
});
Kt.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
},
Kt.classNames = {
    fullWidth: jt,
    zeroRight: At
};
var qt, Jt = function() {
    if (qt)
        return qt;
    if (typeof __webpack_nonce__ < `u`)
        return __webpack_nonce__
};
function Yt() {
    if (!document)
        return null;
    var e = document.createElement(`style`);
    e.type = `text/css`;
    var t = Jt();
    return t && e.setAttribute(`nonce`, t),
    e
}
function Xt(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function Zt(e) {
    (document.head || document.getElementsByTagName(`head`)[0]).appendChild(e)
}
var Qt = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = Yt()) && (Xt(t, n),
            Zt(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , $t = function() {
    var e = Qt();
    return function(t, n) {
        o.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , en = function() {
    var e = $t();
    return function(t) {
        var n = t.styles
          , r = t.dynamic;
        return e(n, r),
        null
    }
}
  , tn = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , nn = function(e) {
    return parseInt(e || ``, 10) || 0
}
  , rn = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === `padding` ? `paddingLeft` : `marginLeft`]
      , r = t[e === `padding` ? `paddingTop` : `marginTop`]
      , i = t[e === `padding` ? `paddingRight` : `marginRight`];
    return [nn(n), nn(r), nn(i)]
}
  , an = function(e) {
    if (e === void 0 && (e = `margin`),
    typeof window > `u`)
        return tn;
    var t = rn(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , on = en()
  , sn = `data-scroll-locked`
  , cn = function(e, t, n, r) {
    var i = e.left
      , a = e.top
      , o = e.right
      , s = e.gap;
    return n === void 0 && (n = `margin`),
    `
  .${Mt} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${sn}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[t && `position: relative ${r};`, n === `margin` && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `, n === `padding` && `padding-right: ${s}px ${r};`].filter(Boolean).join(``)}
  }
  
  .${At} {
    right: ${s}px ${r};
  }
  
  .${jt} {
    margin-right: ${s}px ${r};
  }
  
  .${At} .${At} {
    right: 0 ${r};
  }
  
  .${jt} .${jt} {
    margin-right: 0 ${r};
  }
  
  body[${sn}] {
    ${Nt}: ${s}px;
  }
`
}
  , ln = function() {
    var e = parseInt(document.body.getAttribute(`data-scroll-locked`) || `0`, 10);
    return isFinite(e) ? e : 0
}
  , un = function() {
    o.useEffect(function() {
        return document.body.setAttribute(sn, (ln() + 1).toString()),
        function() {
            var e = ln() - 1;
            e <= 0 ? document.body.removeAttribute(sn) : document.body.setAttribute(sn, e.toString())
        }
    }, [])
}
  , dn = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , i = r === void 0 ? `margin` : r;
    un();
    var a = o.useMemo(function() {
        return an(i)
    }, [i]);
    return o.createElement(on, {
        styles: cn(a, !t, i, n ? `` : `!important`)
    })
}
  , fn = !1;
if (typeof window < `u`)
    try {
        var pn = Object.defineProperty({}, `passive`, {
            get: function() {
                return fn = !0,
                !0
            }
        });
        window.addEventListener(`test`, pn, pn),
        window.removeEventListener(`test`, pn, pn)
    } catch {
        fn = !1
    }
var mn = fn ? {
    passive: !1
} : !1
  , hn = function(e) {
    return e.tagName === `TEXTAREA`
}
  , gn = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== `hidden` && !(n.overflowY === n.overflowX && !hn(e) && n[t] === `visible`)
}
  , _n = function(e) {
    return gn(e, `overflowY`)
}
  , vn = function(e) {
    return gn(e, `overflowX`)
}
  , yn = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        if (typeof ShadowRoot < `u` && r instanceof ShadowRoot && (r = r.host),
        Sn(e, r)) {
            var i = Cn(e, r);
            if (i[1] > i[2])
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , bn = function(e) {
    return [e.scrollTop, e.scrollHeight, e.clientHeight]
}
  , xn = function(e) {
    return [e.scrollLeft, e.scrollWidth, e.clientWidth]
}
  , Sn = function(e, t) {
    return e === `v` ? _n(t) : vn(t)
}
  , Cn = function(e, t) {
    return e === `v` ? bn(t) : xn(t)
}
  , wn = function(e, t) {
    return e === `h` && t === `rtl` ? -1 : 1
}
  , Tn = function(e, t, n, r, i) {
    var a = wn(e, window.getComputedStyle(t).direction)
      , o = a * r
      , s = n.target
      , c = t.contains(s)
      , l = !1
      , u = o > 0
      , d = 0
      , f = 0;
    do {
        if (!s)
            break;
        var p = Cn(e, s)
          , m = p[0]
          , h = p[1] - p[2] - a * m;
        (m || h) && Sn(e, s) && (d += h,
        f += m);
        var g = s.parentNode;
        s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g
    } while (!c && s !== document.body || c && (t.contains(s) || t === s));
    return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0),
    l
}
  , En = function(e) {
    return `changedTouches` in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , Dn = function(e) {
    return [e.deltaX, e.deltaY]
}
  , On = function(e) {
    return e && `current` in e ? e.current : e
}
  , kn = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , An = function(e) {
    return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`
}
  , jn = 0
  , Mn = [];
function Nn(e) {
    var t = o.useRef([])
      , n = o.useRef([0, 0])
      , r = o.useRef()
      , i = o.useState(jn++)[0]
      , a = o.useState(en)[0]
      , s = o.useRef(e);
    o.useEffect(function() {
        s.current = e
    }, [e]),
    o.useEffect(function() {
        if (e.inert) {
            document.body.classList.add(`block-interactivity-${i}`);
            var t = kt([e.lockRef.current], (e.shards || []).map(On), !0).filter(Boolean);
            return t.forEach(function(e) {
                return e.classList.add(`allow-interactivity-${i}`)
            }),
            function() {
                document.body.classList.remove(`block-interactivity-${i}`),
                t.forEach(function(e) {
                    return e.classList.remove(`allow-interactivity-${i}`)
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var c = o.useCallback(function(e, t) {
        if (`touches` in e && e.touches.length === 2 || e.type === `wheel` && e.ctrlKey)
            return !s.current.allowPinchZoom;
        var i = En(e), a = n.current, o = `deltaX` in e ? e.deltaX : a[0] - i[0], c = `deltaY` in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? `h` : `v`;
        if (`touches` in e && d === `h` && u.type === `range`)
            return !1;
        var f = window.getSelection()
          , p = f && f.anchorNode;
        if (p && (p === u || p.contains(u)))
            return !1;
        var m = yn(d, u);
        if (!m)
            return !0;
        if (m ? l = d : (l = d === `v` ? `h` : `v`,
        m = yn(d, u)),
        !m)
            return !1;
        if (!r.current && `changedTouches` in e && (o || c) && (r.current = l),
        !l)
            return !0;
        var h = r.current || l;
        return Tn(h, t, e, h === `h` ? o : c, !0)
    }, [])
      , l = o.useCallback(function(e) {
        var n = e;
        if (!(!Mn.length || Mn[Mn.length - 1] !== a)) {
            var r = `deltaY` in n ? Dn(n) : En(n)
              , i = t.current.filter(function(e) {
                return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && kn(e.delta, r)
            })[0];
            if (i && i.should) {
                n.cancelable && n.preventDefault();
                return
            }
            if (!i) {
                var o = (s.current.shards || []).map(On).filter(Boolean).filter(function(e) {
                    return e.contains(n.target)
                });
                (o.length > 0 ? c(n, o[0]) : !s.current.noIsolation) && n.cancelable && n.preventDefault()
            }
        }
    }, [])
      , u = o.useCallback(function(e, n, r, i) {
        var a = {
            name: e,
            delta: n,
            target: r,
            should: i,
            shadowParent: Pn(r)
        };
        t.current.push(a),
        setTimeout(function() {
            t.current = t.current.filter(function(e) {
                return e !== a
            })
        }, 1)
    }, [])
      , d = o.useCallback(function(e) {
        n.current = En(e),
        r.current = void 0
    }, [])
      , f = o.useCallback(function(t) {
        u(t.type, Dn(t), t.target, c(t, e.lockRef.current))
    }, [])
      , p = o.useCallback(function(t) {
        u(t.type, En(t), t.target, c(t, e.lockRef.current))
    }, []);
    o.useEffect(function() {
        return Mn.push(a),
        e.setCallbacks({
            onScrollCapture: f,
            onWheelCapture: f,
            onTouchMoveCapture: p
        }),
        document.addEventListener(`wheel`, l, mn),
        document.addEventListener(`touchmove`, l, mn),
        document.addEventListener(`touchstart`, d, mn),
        function() {
            Mn = Mn.filter(function(e) {
                return e !== a
            }),
            document.removeEventListener(`wheel`, l, mn),
            document.removeEventListener(`touchmove`, l, mn),
            document.removeEventListener(`touchstart`, d, mn)
        }
    }, []);
    var m = e.removeScrollBar
      , h = e.inert;
    return o.createElement(o.Fragment, null, h ? o.createElement(a, {
        styles: An(i)
    }) : null, m ? o.createElement(dn, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}
function Pn(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
var Fn = Ut(Wt, Nn)
  , In = o.forwardRef(function(e, t) {
    return o.createElement(Kt, U({}, e, {
        ref: t,
        sideCar: Fn
    }))
});
In.classNames = Kt.classNames;
var Ln = function(e) {
    return typeof document > `u` ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
}
  , Rn = new WeakMap
  , zn = new WeakMap
  , Bn = {}
  , Vn = 0
  , Hn = function(e) {
    return e && (e.host || Hn(e.parentNode))
}
  , Un = function(e, t) {
    return t.map(function(t) {
        if (e.contains(t))
            return t;
        var n = Hn(t);
        return n && e.contains(n) ? n : (console.error(`aria-hidden`, t, `in not contained inside`, e, `. Doing nothing`),
        null)
    }).filter(function(e) {
        return !!e
    })
}
  , Wn = function(e, t, n, r) {
    var i = Un(t, Array.isArray(e) ? e : [e]);
    Bn[n] || (Bn[n] = new WeakMap);
    var a = Bn[n]
      , o = []
      , s = new Set
      , c = new Set(i)
      , l = function(e) {
        !e || s.has(e) || (s.add(e),
        l(e.parentNode))
    };
    i.forEach(l);
    var u = function(e) {
        !e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
            if (s.has(e))
                u(e);
            else
                try {
                    var t = e.getAttribute(r)
                      , i = t !== null && t !== `false`
                      , c = (Rn.get(e) || 0) + 1
                      , l = (a.get(e) || 0) + 1;
                    Rn.set(e, c),
                    a.set(e, l),
                    o.push(e),
                    c === 1 && i && zn.set(e, !0),
                    l === 1 && e.setAttribute(n, `true`),
                    i || e.setAttribute(r, `true`)
                } catch (t) {
                    console.error(`aria-hidden: cannot operate on `, e, t)
                }
        })
    };
    return u(t),
    s.clear(),
    Vn++,
    function() {
        o.forEach(function(e) {
            var t = Rn.get(e) - 1
              , i = a.get(e) - 1;
            Rn.set(e, t),
            a.set(e, i),
            t || (zn.has(e) || e.removeAttribute(r),
            zn.delete(e)),
            i || e.removeAttribute(n)
        }),
        Vn--,
        Vn || (Rn = new WeakMap,
        Rn = new WeakMap,
        zn = new WeakMap,
        Bn = {})
    }
}
  , Gn = function(e, t, n) {
    n === void 0 && (n = `data-aria-hidden`);
    var r = Array.from(Array.isArray(e) ? e : [e])
      , i = t || Ln(e);
    return i ? (r.push.apply(r, Array.from(i.querySelectorAll(`[aria-live], script`))),
    Wn(r, i, n, `aria-hidden`)) : function() {
        return null
    }
};
function Kn(e) {
    var t, n, r = ``;
    if (typeof e == `string` || typeof e == `number`)
        r += e;
    else if (typeof e == `object`)
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++)
                e[t] && (n = Kn(e[t])) && (r && (r += ` `),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += ` `),
                r += n);
    return r
}
function qn() {
    for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
        (e = arguments[n]) && (t = Kn(e)) && (r && (r += ` `),
        r += t);
    return r
}
var Jn = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++)
        n[t] = e[t];
    for (let r = 0; r < t.length; r++)
        n[e.length + r] = t[r];
    return n
}
  , Yn = (e, t) => ({
    classGroupId: e,
    validator: t
})
  , Xn = (e=new Map, t=null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n
})
  , Zn = `-`
  , Qn = []
  , $n = `arbitrary..`
  , er = e => {
    let t = rr(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: e => {
            if (e.startsWith(`[`) && e.endsWith(`]`))
                return nr(e);
            let n = e.split(Zn);
            return tr(n, +(n[0] === `` && n.length > 1), t)
        }
        ,
        getConflictingClassGroupIds: (e, t) => {
            if (t) {
                let t = r[e]
                  , i = n[e];
                return t ? i ? Jn(i, t) : t : i || Qn
            }
            return n[e] || Qn
        }
    }
}
  , tr = (e, t, n) => {
    if (e.length - t === 0)
        return n.classGroupId;
    let r = e[t]
      , i = n.nextPart.get(r);
    if (i) {
        let n = tr(e, t + 1, i);
        if (n)
            return n
    }
    let a = n.validators;
    if (a === null)
        return;
    let o = t === 0 ? e.join(Zn) : e.slice(t).join(Zn)
      , s = a.length;
    for (let e = 0; e < s; e++) {
        let t = a[e];
        if (t.validator(o))
            return t.classGroupId
    }
}
  , nr = e => e.slice(1, -1).indexOf(`:`) === -1 ? void 0 : ( () => {
    let t = e.slice(1, -1)
      , n = t.indexOf(`:`)
      , r = t.slice(0, n);
    return r ? $n + r : void 0
}
)()
  , rr = e => {
    let {theme: t, classGroups: n} = e;
    return ir(n, t)
}
  , ir = (e, t) => {
    let n = Xn();
    for (let r in e) {
        let i = e[r];
        ar(i, n, r, t)
    }
    return n
}
  , ar = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
        let i = e[a];
        or(i, t, n, r)
    }
}
  , or = (e, t, n, r) => {
    if (typeof e == `string`) {
        sr(e, t, n);
        return
    }
    if (typeof e == `function`) {
        cr(e, t, n, r);
        return
    }
    lr(e, t, n, r)
}
  , sr = (e, t, n) => {
    let r = e === `` ? t : ur(t, e);
    r.classGroupId = n
}
  , cr = (e, t, n, r) => {
    if (dr(e)) {
        ar(e(r), t, n, r);
        return
    }
    t.validators === null && (t.validators = []),
    t.validators.push(Yn(n, e))
}
  , lr = (e, t, n, r) => {
    let i = Object.entries(e)
      , a = i.length;
    for (let e = 0; e < a; e++) {
        let[a,o] = i[e];
        ar(o, ur(t, a), n, r)
    }
}
  , ur = (e, t) => {
    let n = e
      , r = t.split(Zn)
      , i = r.length;
    for (let e = 0; e < i; e++) {
        let t = r[e]
          , i = n.nextPart.get(t);
        i || (i = Xn(),
        n.nextPart.set(t, i)),
        n = i
    }
    return n
}
  , dr = e => `isThemeGetter` in e && e.isThemeGetter === !0
  , fr = e => {
    if (e < 1)
        return {
            get: () => void 0,
            set: () => {}
        };
    let t = 0
      , n = Object.create(null)
      , r = Object.create(null)
      , i = (i, a) => {
        n[i] = a,
        t++,
        t > e && (t = 0,
        r = n,
        n = Object.create(null))
    }
    ;
    return {
        get(e) {
            let t = n[e];
            if (t !== void 0)
                return t;
            if ((t = r[e]) !== void 0)
                return i(e, t),
                t
        },
        set(e, t) {
            e in n ? n[e] = t : i(e, t)
        }
    }
}
  , pr = `!`
  , mr = `:`
  , hr = []
  , gr = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i
})
  , _r = e => {
    let {prefix: t, experimentalParseClassName: n} = e
      , r = e => {
        let t = [], n = 0, r = 0, i = 0, a, o = e.length;
        for (let s = 0; s < o; s++) {
            let o = e[s];
            if (n === 0 && r === 0) {
                if (o === mr) {
                    t.push(e.slice(i, s)),
                    i = s + 1;
                    continue
                }
                if (o === `/`) {
                    a = s;
                    continue
                }
            }
            o === `[` ? n++ : o === `]` ? n-- : o === `(` ? r++ : o === `)` && r--
        }
        let s = t.length === 0 ? e : e.slice(i)
          , c = s
          , l = !1;
        s.endsWith(pr) ? (c = s.slice(0, -1),
        l = !0) : s.startsWith(pr) && (c = s.slice(1),
        l = !0);
        let u = a && a > i ? a - i : void 0;
        return gr(t, l, c, u)
    }
    ;
    if (t) {
        let e = t + mr
          , n = r;
        r = t => t.startsWith(e) ? n(t.slice(e.length)) : gr(hr, !1, t, void 0, !0)
    }
    if (n) {
        let e = r;
        r = t => n({
            className: t,
            parseClassName: e
        })
    }
    return r
}
  , vr = e => {
    let t = new Map;
    return e.orderSensitiveModifiers.forEach( (e, n) => {
        t.set(e, 1e6 + n)
    }
    ),
    e => {
        let n = []
          , r = [];
        for (let i = 0; i < e.length; i++) {
            let a = e[i]
              , o = a[0] === `[`
              , s = t.has(a);
            o || s ? (r.length > 0 && (r.sort(),
            n.push(...r),
            r = []),
            n.push(a)) : r.push(a)
        }
        return r.length > 0 && (r.sort(),
        n.push(...r)),
        n
    }
}
  , yr = e => ({
    cache: fr(e.cacheSize),
    parseClassName: _r(e),
    sortModifiers: vr(e),
    postfixLookupClassGroupIds: br(e),
    ...er(e)
})
  , br = e => {
    let t = Object.create(null)
      , n = e.postfixLookupClassGroups;
    if (n)
        for (let e = 0; e < n.length; e++)
            t[n[e]] = !0;
    return t
}
  , xr = /\s+/
  , Sr = (e, t) => {
    let {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o} = t
      , s = []
      , c = e.trim().split(xr)
      , l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
        let t = c[e]
          , {isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m} = n(t);
        if (u) {
            l = t + (l.length > 0 ? ` ` + l : l);
            continue
        }
        let h = !!m, g;
        if (h) {
            g = r(p.substring(0, m));
            let e = g && o[g] ? r(p) : void 0;
            e && e !== g && (g = e,
            h = !1)
        } else
            g = r(p);
        if (!g) {
            if (!h) {
                l = t + (l.length > 0 ? ` ` + l : l);
                continue
            }
            if (g = r(p),
            !g) {
                l = t + (l.length > 0 ? ` ` + l : l);
                continue
            }
            h = !1
        }
        let ee = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`)
          , _ = f ? ee + pr : ee
          , v = _ + g;
        if (s.indexOf(v) > -1)
            continue;
        s.push(v);
        let y = i(g, h);
        for (let e = 0; e < y.length; ++e) {
            let t = y[e];
            s.push(_ + t)
        }
        l = t + (l.length > 0 ? ` ` + l : l)
    }
    return l
}
  , Cr = (...e) => {
    let t = 0, n, r, i = ``;
    for (; t < e.length; )
        (n = e[t++]) && (r = wr(n)) && (i && (i += ` `),
        i += r);
    return i
}
  , wr = e => {
    if (typeof e == `string`)
        return e;
    let t, n = ``;
    for (let r = 0; r < e.length; r++)
        e[r] && (t = wr(e[r])) && (n && (n += ` `),
        n += t);
    return n
}
  , Tr = (e, ...t) => {
    let n, r, i, a, o = o => (n = yr(t.reduce( (e, t) => t(e), e())),
    r = n.cache.get,
    i = n.cache.set,
    a = s,
    s(o)), s = e => {
        let t = r(e);
        if (t)
            return t;
        let a = Sr(e, n);
        return i(e, a),
        a
    }
    ;
    return a = o,
    (...e) => a(Cr(...e))
}
  , Er = []
  , W = e => {
    let t = t => t[e] || Er;
    return t.isThemeGetter = !0,
    t
}
  , Dr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , Or = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , kr = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/
  , Ar = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , jr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Mr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , Nr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Pr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , G = e => kr.test(e)
  , K = e => !!e && !Number.isNaN(Number(e))
  , q = e => !!e && Number.isInteger(Number(e))
  , Fr = e => e.endsWith(`%`) && K(e.slice(0, -1))
  , J = e => Ar.test(e)
  , Ir = () => !0
  , Lr = e => jr.test(e) && !Mr.test(e)
  , Rr = () => !1
  , zr = e => Nr.test(e)
  , Br = e => Pr.test(e)
  , Vr = e => !Y(e) && !Z(e)
  , Hr = e => e.startsWith(`@container`) && (e[10] === `/` && e[11] !== void 0 || e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10) || e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))
  , Ur = e => Q(e, ai, Rr)
  , Y = e => Dr.test(e)
  , X = e => Q(e, oi, Lr)
  , Wr = e => Q(e, si, K)
  , Gr = e => Q(e, li, Ir)
  , Kr = e => Q(e, ci, Rr)
  , qr = e => Q(e, ri, Rr)
  , Jr = e => Q(e, ii, Br)
  , Yr = e => Q(e, ui, zr)
  , Z = e => Or.test(e)
  , Xr = e => $(e, oi)
  , Zr = e => $(e, ci)
  , Qr = e => $(e, ri)
  , $r = e => $(e, ai)
  , ei = e => $(e, ii)
  , ti = e => $(e, ui, !0)
  , ni = e => $(e, li, !0)
  , Q = (e, t, n) => {
    let r = Dr.exec(e);
    return r ? r[1] ? t(r[1]) : n(r[2]) : !1
}
  , $ = (e, t, n=!1) => {
    let r = Or.exec(e);
    return r ? r[1] ? t(r[1]) : n : !1
}
  , ri = e => e === `position` || e === `percentage`
  , ii = e => e === `image` || e === `url`
  , ai = e => e === `length` || e === `size` || e === `bg-size`
  , oi = e => e === `length`
  , si = e => e === `number`
  , ci = e => e === `family-name`
  , li = e => e === `number` || e === `weight`
  , ui = e => e === `shadow`
  , di = Tr( () => {
    let e = W(`color`)
      , t = W(`font`)
      , n = W(`text`)
      , r = W(`font-weight`)
      , i = W(`tracking`)
      , a = W(`leading`)
      , o = W(`breakpoint`)
      , s = W(`container`)
      , c = W(`spacing`)
      , l = W(`radius`)
      , u = W(`shadow`)
      , d = W(`inset-shadow`)
      , f = W(`text-shadow`)
      , p = W(`drop-shadow`)
      , m = W(`blur`)
      , h = W(`perspective`)
      , g = W(`aspect`)
      , ee = W(`ease`)
      , _ = W(`animate`)
      , v = () => [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`]
      , y = () => [`center`, `top`, `bottom`, `left`, `right`, `top-left`, `left-top`, `top-right`, `right-top`, `bottom-right`, `right-bottom`, `bottom-left`, `left-bottom`]
      , b = () => [...y(), Z, Y]
      , x = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`]
      , S = () => [`auto`, `contain`, `none`]
      , C = () => [Z, Y, c]
      , w = () => [G, `full`, `auto`, ...C()]
      , T = () => [q, `none`, `subgrid`, Z, Y]
      , te = () => [`auto`, {
        span: [`full`, q, Z, Y]
    }, q, Z, Y]
      , E = () => [q, `auto`, Z, Y]
      , ne = () => [`auto`, `min`, `max`, `fr`, Z, Y]
      , re = () => [`start`, `end`, `center`, `between`, `around`, `evenly`, `stretch`, `baseline`, `center-safe`, `end-safe`]
      , D = () => [`start`, `end`, `center`, `stretch`, `center-safe`, `end-safe`]
      , O = () => [`auto`, ...C()]
      , k = () => [G, `auto`, `full`, `dvw`, `dvh`, `lvw`, `lvh`, `svw`, `svh`, `min`, `max`, `fit`, ...C()]
      , ie = () => [G, `screen`, `full`, `dvw`, `lvw`, `svw`, `min`, `max`, `fit`, ...C()]
      , ae = () => [G, `screen`, `full`, `lh`, `dvh`, `lvh`, `svh`, `min`, `max`, `fit`, ...C()]
      , A = () => [e, Z, Y]
      , j = () => [...y(), Qr, qr, {
        position: [Z, Y]
    }]
      , oe = () => [`no-repeat`, {
        repeat: [``, `x`, `y`, `space`, `round`]
    }]
      , M = () => [`auto`, `cover`, `contain`, $r, Ur, {
        size: [Z, Y]
    }]
      , se = () => [Fr, Xr, X]
      , N = () => [``, `none`, `full`, l, Z, Y]
      , P = () => [``, K, Xr, X]
      , ce = () => [`solid`, `dashed`, `dotted`, `double`]
      , F = () => [`normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`]
      , I = () => [K, Fr, Qr, qr]
      , le = () => [``, `none`, m, Z, Y]
      , ue = () => [`none`, K, Z, Y]
      , de = () => [`none`, K, Z, Y]
      , fe = () => [K, Z, Y]
      , pe = () => [G, `full`, ...C()];
    return {
        cacheSize: 500,
        theme: {
            animate: [`spin`, `ping`, `pulse`, `bounce`],
            aspect: [`video`],
            blur: [J],
            breakpoint: [J],
            color: [Ir],
            container: [J],
            "drop-shadow": [J],
            ease: [`in`, `out`, `in-out`],
            font: [Vr],
            "font-weight": [`thin`, `extralight`, `light`, `normal`, `medium`, `semibold`, `bold`, `extrabold`, `black`],
            "inset-shadow": [J],
            leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
            perspective: [`dramatic`, `near`, `normal`, `midrange`, `distant`, `none`],
            radius: [J],
            shadow: [J],
            spacing: [`px`, K],
            text: [J],
            "text-shadow": [J],
            tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`]
        },
        classGroups: {
            aspect: [{
                aspect: [`auto`, `square`, G, Y, Z, g]
            }],
            container: [`container`],
            "container-type": [{
                "@container": [``, `normal`, `size`, Z, Y]
            }],
            "container-named": [Hr],
            columns: [{
                columns: [K, Y, Z, s]
            }],
            "break-after": [{
                "break-after": v()
            }],
            "break-before": [{
                "break-before": v()
            }],
            "break-inside": [{
                "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`]
            }],
            "box-decoration": [{
                "box-decoration": [`slice`, `clone`]
            }],
            box: [{
                box: [`border`, `content`]
            }],
            display: [`block`, `inline-block`, `inline`, `flex`, `inline-flex`, `table`, `inline-table`, `table-caption`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row-group`, `table-row`, `flow-root`, `grid`, `inline-grid`, `contents`, `list-item`, `hidden`],
            sr: [`sr-only`, `not-sr-only`],
            float: [{
                float: [`right`, `left`, `none`, `start`, `end`]
            }],
            clear: [{
                clear: [`left`, `right`, `both`, `none`, `start`, `end`]
            }],
            isolation: [`isolate`, `isolation-auto`],
            "object-fit": [{
                object: [`contain`, `cover`, `fill`, `none`, `scale-down`]
            }],
            "object-position": [{
                object: b()
            }],
            overflow: [{
                overflow: x()
            }],
            "overflow-x": [{
                "overflow-x": x()
            }],
            "overflow-y": [{
                "overflow-y": x()
            }],
            overscroll: [{
                overscroll: S()
            }],
            "overscroll-x": [{
                "overscroll-x": S()
            }],
            "overscroll-y": [{
                "overscroll-y": S()
            }],
            position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
            inset: [{
                inset: w()
            }],
            "inset-x": [{
                "inset-x": w()
            }],
            "inset-y": [{
                "inset-y": w()
            }],
            start: [{
                "inset-s": w(),
                start: w()
            }],
            end: [{
                "inset-e": w(),
                end: w()
            }],
            "inset-bs": [{
                "inset-bs": w()
            }],
            "inset-be": [{
                "inset-be": w()
            }],
            top: [{
                top: w()
            }],
            right: [{
                right: w()
            }],
            bottom: [{
                bottom: w()
            }],
            left: [{
                left: w()
            }],
            visibility: [`visible`, `invisible`, `collapse`],
            z: [{
                z: [q, `auto`, Z, Y]
            }],
            basis: [{
                basis: [G, `full`, `auto`, s, ...C()]
            }],
            "flex-direction": [{
                flex: [`row`, `row-reverse`, `col`, `col-reverse`]
            }],
            "flex-wrap": [{
                flex: [`nowrap`, `wrap`, `wrap-reverse`]
            }],
            flex: [{
                flex: [K, G, `auto`, `initial`, `none`, Y]
            }],
            grow: [{
                grow: [``, K, Z, Y]
            }],
            shrink: [{
                shrink: [``, K, Z, Y]
            }],
            order: [{
                order: [q, `first`, `last`, `none`, Z, Y]
            }],
            "grid-cols": [{
                "grid-cols": T()
            }],
            "col-start-end": [{
                col: te()
            }],
            "col-start": [{
                "col-start": E()
            }],
            "col-end": [{
                "col-end": E()
            }],
            "grid-rows": [{
                "grid-rows": T()
            }],
            "row-start-end": [{
                row: te()
            }],
            "row-start": [{
                "row-start": E()
            }],
            "row-end": [{
                "row-end": E()
            }],
            "grid-flow": [{
                "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`]
            }],
            "auto-cols": [{
                "auto-cols": ne()
            }],
            "auto-rows": [{
                "auto-rows": ne()
            }],
            gap: [{
                gap: C()
            }],
            "gap-x": [{
                "gap-x": C()
            }],
            "gap-y": [{
                "gap-y": C()
            }],
            "justify-content": [{
                justify: [...re(), `normal`]
            }],
            "justify-items": [{
                "justify-items": [...D(), `normal`]
            }],
            "justify-self": [{
                "justify-self": [`auto`, ...D()]
            }],
            "align-content": [{
                content: [`normal`, ...re()]
            }],
            "align-items": [{
                items: [...D(), {
                    baseline: [``, `last`]
                }]
            }],
            "align-self": [{
                self: [`auto`, ...D(), {
                    baseline: [``, `last`]
                }]
            }],
            "place-content": [{
                "place-content": re()
            }],
            "place-items": [{
                "place-items": [...D(), `baseline`]
            }],
            "place-self": [{
                "place-self": [`auto`, ...D()]
            }],
            p: [{
                p: C()
            }],
            px: [{
                px: C()
            }],
            py: [{
                py: C()
            }],
            ps: [{
                ps: C()
            }],
            pe: [{
                pe: C()
            }],
            pbs: [{
                pbs: C()
            }],
            pbe: [{
                pbe: C()
            }],
            pt: [{
                pt: C()
            }],
            pr: [{
                pr: C()
            }],
            pb: [{
                pb: C()
            }],
            pl: [{
                pl: C()
            }],
            m: [{
                m: O()
            }],
            mx: [{
                mx: O()
            }],
            my: [{
                my: O()
            }],
            ms: [{
                ms: O()
            }],
            me: [{
                me: O()
            }],
            mbs: [{
                mbs: O()
            }],
            mbe: [{
                mbe: O()
            }],
            mt: [{
                mt: O()
            }],
            mr: [{
                mr: O()
            }],
            mb: [{
                mb: O()
            }],
            ml: [{
                ml: O()
            }],
            "space-x": [{
                "space-x": C()
            }],
            "space-x-reverse": [`space-x-reverse`],
            "space-y": [{
                "space-y": C()
            }],
            "space-y-reverse": [`space-y-reverse`],
            size: [{
                size: k()
            }],
            "inline-size": [{
                inline: [`auto`, ...ie()]
            }],
            "min-inline-size": [{
                "min-inline": [`auto`, ...ie()]
            }],
            "max-inline-size": [{
                "max-inline": [`none`, ...ie()]
            }],
            "block-size": [{
                block: [`auto`, ...ae()]
            }],
            "min-block-size": [{
                "min-block": [`auto`, ...ae()]
            }],
            "max-block-size": [{
                "max-block": [`none`, ...ae()]
            }],
            w: [{
                w: [s, `screen`, ...k()]
            }],
            "min-w": [{
                "min-w": [s, `screen`, `none`, ...k()]
            }],
            "max-w": [{
                "max-w": [s, `screen`, `none`, `prose`, {
                    screen: [o]
                }, ...k()]
            }],
            h: [{
                h: [`screen`, `lh`, ...k()]
            }],
            "min-h": [{
                "min-h": [`screen`, `lh`, `none`, ...k()]
            }],
            "max-h": [{
                "max-h": [`screen`, `lh`, ...k()]
            }],
            "font-size": [{
                text: [`base`, n, Xr, X]
            }],
            "font-smoothing": [`antialiased`, `subpixel-antialiased`],
            "font-style": [`italic`, `not-italic`],
            "font-weight": [{
                font: [r, ni, Gr]
            }],
            "font-stretch": [{
                "font-stretch": [`ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`, Fr, Y]
            }],
            "font-family": [{
                font: [Zr, Kr, t]
            }],
            "font-features": [{
                "font-features": [Y]
            }],
            "fvn-normal": [`normal-nums`],
            "fvn-ordinal": [`ordinal`],
            "fvn-slashed-zero": [`slashed-zero`],
            "fvn-figure": [`lining-nums`, `oldstyle-nums`],
            "fvn-spacing": [`proportional-nums`, `tabular-nums`],
            "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
            tracking: [{
                tracking: [i, Z, Y]
            }],
            "line-clamp": [{
                "line-clamp": [K, `none`, Z, Wr]
            }],
            leading: [{
                leading: [a, ...C()]
            }],
            "list-image": [{
                "list-image": [`none`, Z, Y]
            }],
            "list-style-position": [{
                list: [`inside`, `outside`]
            }],
            "list-style-type": [{
                list: [`disc`, `decimal`, `none`, Z, Y]
            }],
            "text-alignment": [{
                text: [`left`, `center`, `right`, `justify`, `start`, `end`]
            }],
            "placeholder-color": [{
                placeholder: A()
            }],
            "text-color": [{
                text: A()
            }],
            "text-decoration": [`underline`, `overline`, `line-through`, `no-underline`],
            "text-decoration-style": [{
                decoration: [...ce(), `wavy`]
            }],
            "text-decoration-thickness": [{
                decoration: [K, `from-font`, `auto`, Z, X]
            }],
            "text-decoration-color": [{
                decoration: A()
            }],
            "underline-offset": [{
                "underline-offset": [K, `auto`, Z, Y]
            }],
            "text-transform": [`uppercase`, `lowercase`, `capitalize`, `normal-case`],
            "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
            "text-wrap": [{
                text: [`wrap`, `nowrap`, `balance`, `pretty`]
            }],
            indent: [{
                indent: C()
            }],
            "tab-size": [{
                tab: [q, Z, Y]
            }],
            "vertical-align": [{
                align: [`baseline`, `top`, `middle`, `bottom`, `text-top`, `text-bottom`, `sub`, `super`, Z, Y]
            }],
            whitespace: [{
                whitespace: [`normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`]
            }],
            break: [{
                break: [`normal`, `words`, `all`, `keep`]
            }],
            wrap: [{
                wrap: [`break-word`, `anywhere`, `normal`]
            }],
            hyphens: [{
                hyphens: [`none`, `manual`, `auto`]
            }],
            content: [{
                content: [`none`, Z, Y]
            }],
            "bg-attachment": [{
                bg: [`fixed`, `local`, `scroll`]
            }],
            "bg-clip": [{
                "bg-clip": [`border`, `padding`, `content`, `text`]
            }],
            "bg-origin": [{
                "bg-origin": [`border`, `padding`, `content`]
            }],
            "bg-position": [{
                bg: j()
            }],
            "bg-repeat": [{
                bg: oe()
            }],
            "bg-size": [{
                bg: M()
            }],
            "bg-image": [{
                bg: [`none`, {
                    linear: [{
                        to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`]
                    }, q, Z, Y],
                    radial: [``, Z, Y],
                    conic: [q, Z, Y]
                }, ei, Jr]
            }],
            "bg-color": [{
                bg: A()
            }],
            "gradient-from-pos": [{
                from: se()
            }],
            "gradient-via-pos": [{
                via: se()
            }],
            "gradient-to-pos": [{
                to: se()
            }],
            "gradient-from": [{
                from: A()
            }],
            "gradient-via": [{
                via: A()
            }],
            "gradient-to": [{
                to: A()
            }],
            rounded: [{
                rounded: N()
            }],
            "rounded-s": [{
                "rounded-s": N()
            }],
            "rounded-e": [{
                "rounded-e": N()
            }],
            "rounded-t": [{
                "rounded-t": N()
            }],
            "rounded-r": [{
                "rounded-r": N()
            }],
            "rounded-b": [{
                "rounded-b": N()
            }],
            "rounded-l": [{
                "rounded-l": N()
            }],
            "rounded-ss": [{
                "rounded-ss": N()
            }],
            "rounded-se": [{
                "rounded-se": N()
            }],
            "rounded-ee": [{
                "rounded-ee": N()
            }],
            "rounded-es": [{
                "rounded-es": N()
            }],
            "rounded-tl": [{
                "rounded-tl": N()
            }],
            "rounded-tr": [{
                "rounded-tr": N()
            }],
            "rounded-br": [{
                "rounded-br": N()
            }],
            "rounded-bl": [{
                "rounded-bl": N()
            }],
            "border-w": [{
                border: P()
            }],
            "border-w-x": [{
                "border-x": P()
            }],
            "border-w-y": [{
                "border-y": P()
            }],
            "border-w-s": [{
                "border-s": P()
            }],
            "border-w-e": [{
                "border-e": P()
            }],
            "border-w-bs": [{
                "border-bs": P()
            }],
            "border-w-be": [{
                "border-be": P()
            }],
            "border-w-t": [{
                "border-t": P()
            }],
            "border-w-r": [{
                "border-r": P()
            }],
            "border-w-b": [{
                "border-b": P()
            }],
            "border-w-l": [{
                "border-l": P()
            }],
            "divide-x": [{
                "divide-x": P()
            }],
            "divide-x-reverse": [`divide-x-reverse`],
            "divide-y": [{
                "divide-y": P()
            }],
            "divide-y-reverse": [`divide-y-reverse`],
            "border-style": [{
                border: [...ce(), `hidden`, `none`]
            }],
            "divide-style": [{
                divide: [...ce(), `hidden`, `none`]
            }],
            "border-color": [{
                border: A()
            }],
            "border-color-x": [{
                "border-x": A()
            }],
            "border-color-y": [{
                "border-y": A()
            }],
            "border-color-s": [{
                "border-s": A()
            }],
            "border-color-e": [{
                "border-e": A()
            }],
            "border-color-bs": [{
                "border-bs": A()
            }],
            "border-color-be": [{
                "border-be": A()
            }],
            "border-color-t": [{
                "border-t": A()
            }],
            "border-color-r": [{
                "border-r": A()
            }],
            "border-color-b": [{
                "border-b": A()
            }],
            "border-color-l": [{
                "border-l": A()
            }],
            "divide-color": [{
                divide: A()
            }],
            "outline-style": [{
                outline: [...ce(), `none`, `hidden`]
            }],
            "outline-offset": [{
                "outline-offset": [K, Z, Y]
            }],
            "outline-w": [{
                outline: [``, K, Xr, X]
            }],
            "outline-color": [{
                outline: A()
            }],
            shadow: [{
                shadow: [``, `none`, u, ti, Yr]
            }],
            "shadow-color": [{
                shadow: A()
            }],
            "inset-shadow": [{
                "inset-shadow": [`none`, d, ti, Yr]
            }],
            "inset-shadow-color": [{
                "inset-shadow": A()
            }],
            "ring-w": [{
                ring: P()
            }],
            "ring-w-inset": [`ring-inset`],
            "ring-color": [{
                ring: A()
            }],
            "ring-offset-w": [{
                "ring-offset": [K, X]
            }],
            "ring-offset-color": [{
                "ring-offset": A()
            }],
            "inset-ring-w": [{
                "inset-ring": P()
            }],
            "inset-ring-color": [{
                "inset-ring": A()
            }],
            "text-shadow": [{
                "text-shadow": [`none`, f, ti, Yr]
            }],
            "text-shadow-color": [{
                "text-shadow": A()
            }],
            opacity: [{
                opacity: [K, Z, Y]
            }],
            "mix-blend": [{
                "mix-blend": [...F(), `plus-darker`, `plus-lighter`]
            }],
            "bg-blend": [{
                "bg-blend": F()
            }],
            "mask-clip": [{
                "mask-clip": [`border`, `padding`, `content`, `fill`, `stroke`, `view`]
            }, `mask-no-clip`],
            "mask-composite": [{
                mask: [`add`, `subtract`, `intersect`, `exclude`]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [K]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": I()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": I()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": A()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": A()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": I()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": I()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": A()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": A()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": I()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": I()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": A()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": A()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": I()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": I()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": A()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": A()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": I()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": I()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": A()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": A()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": I()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": I()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": A()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": A()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": I()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": I()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": A()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": A()
            }],
            "mask-image-radial": [{
                "mask-radial": [Z, Y]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": I()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": I()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": A()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": A()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": [`circle`, `ellipse`]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: [`side`, `corner`],
                    farthest: [`side`, `corner`]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": y()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [K]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": I()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": I()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": A()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": A()
            }],
            "mask-mode": [{
                mask: [`alpha`, `luminance`, `match`]
            }],
            "mask-origin": [{
                "mask-origin": [`border`, `padding`, `content`, `fill`, `stroke`, `view`]
            }],
            "mask-position": [{
                mask: j()
            }],
            "mask-repeat": [{
                mask: oe()
            }],
            "mask-size": [{
                mask: M()
            }],
            "mask-type": [{
                "mask-type": [`alpha`, `luminance`]
            }],
            "mask-image": [{
                mask: [`none`, Z, Y]
            }],
            filter: [{
                filter: [``, `none`, Z, Y]
            }],
            blur: [{
                blur: le()
            }],
            brightness: [{
                brightness: [K, Z, Y]
            }],
            contrast: [{
                contrast: [K, Z, Y]
            }],
            "drop-shadow": [{
                "drop-shadow": [``, `none`, p, ti, Yr]
            }],
            "drop-shadow-color": [{
                "drop-shadow": A()
            }],
            grayscale: [{
                grayscale: [``, K, Z, Y]
            }],
            "hue-rotate": [{
                "hue-rotate": [K, Z, Y]
            }],
            invert: [{
                invert: [``, K, Z, Y]
            }],
            saturate: [{
                saturate: [K, Z, Y]
            }],
            sepia: [{
                sepia: [``, K, Z, Y]
            }],
            "backdrop-filter": [{
                "backdrop-filter": [``, `none`, Z, Y]
            }],
            "backdrop-blur": [{
                "backdrop-blur": le()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [K, Z, Y]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [K, Z, Y]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [``, K, Z, Y]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [K, Z, Y]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [``, K, Z, Y]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [K, Z, Y]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [K, Z, Y]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [``, K, Z, Y]
            }],
            "border-collapse": [{
                border: [`collapse`, `separate`]
            }],
            "border-spacing": [{
                "border-spacing": C()
            }],
            "border-spacing-x": [{
                "border-spacing-x": C()
            }],
            "border-spacing-y": [{
                "border-spacing-y": C()
            }],
            "table-layout": [{
                table: [`auto`, `fixed`]
            }],
            caption: [{
                caption: [`top`, `bottom`]
            }],
            transition: [{
                transition: [``, `all`, `colors`, `opacity`, `shadow`, `transform`, `none`, Z, Y]
            }],
            "transition-behavior": [{
                transition: [`normal`, `discrete`]
            }],
            duration: [{
                duration: [K, `initial`, Z, Y]
            }],
            ease: [{
                ease: [`linear`, `initial`, ee, Z, Y]
            }],
            delay: [{
                delay: [K, Z, Y]
            }],
            animate: [{
                animate: [`none`, _, Z, Y]
            }],
            backface: [{
                backface: [`hidden`, `visible`]
            }],
            perspective: [{
                perspective: [h, Z, Y]
            }],
            "perspective-origin": [{
                "perspective-origin": b()
            }],
            rotate: [{
                rotate: ue()
            }],
            "rotate-x": [{
                "rotate-x": ue()
            }],
            "rotate-y": [{
                "rotate-y": ue()
            }],
            "rotate-z": [{
                "rotate-z": ue()
            }],
            scale: [{
                scale: de()
            }],
            "scale-x": [{
                "scale-x": de()
            }],
            "scale-y": [{
                "scale-y": de()
            }],
            "scale-z": [{
                "scale-z": de()
            }],
            "scale-3d": [`scale-3d`],
            skew: [{
                skew: fe()
            }],
            "skew-x": [{
                "skew-x": fe()
            }],
            "skew-y": [{
                "skew-y": fe()
            }],
            transform: [{
                transform: [Z, Y, ``, `none`, `gpu`, `cpu`]
            }],
            "transform-origin": [{
                origin: b()
            }],
            "transform-style": [{
                transform: [`3d`, `flat`]
            }],
            translate: [{
                translate: pe()
            }],
            "translate-x": [{
                "translate-x": pe()
            }],
            "translate-y": [{
                "translate-y": pe()
            }],
            "translate-z": [{
                "translate-z": pe()
            }],
            "translate-none": [`translate-none`],
            zoom: [{
                zoom: [q, Z, Y]
            }],
            accent: [{
                accent: A()
            }],
            appearance: [{
                appearance: [`none`, `auto`]
            }],
            "caret-color": [{
                caret: A()
            }],
            "color-scheme": [{
                scheme: [`normal`, `dark`, `light`, `light-dark`, `only-dark`, `only-light`]
            }],
            cursor: [{
                cursor: [`auto`, `default`, `pointer`, `wait`, `text`, `move`, `help`, `not-allowed`, `none`, `context-menu`, `progress`, `cell`, `crosshair`, `vertical-text`, `alias`, `copy`, `no-drop`, `grab`, `grabbing`, `all-scroll`, `col-resize`, `row-resize`, `n-resize`, `e-resize`, `s-resize`, `w-resize`, `ne-resize`, `nw-resize`, `se-resize`, `sw-resize`, `ew-resize`, `ns-resize`, `nesw-resize`, `nwse-resize`, `zoom-in`, `zoom-out`, Z, Y]
            }],
            "field-sizing": [{
                "field-sizing": [`fixed`, `content`]
            }],
            "pointer-events": [{
                "pointer-events": [`auto`, `none`]
            }],
            resize: [{
                resize: [`none`, ``, `y`, `x`]
            }],
            "scroll-behavior": [{
                scroll: [`auto`, `smooth`]
            }],
            "scrollbar-thumb-color": [{
                "scrollbar-thumb": A()
            }],
            "scrollbar-track-color": [{
                "scrollbar-track": A()
            }],
            "scrollbar-gutter": [{
                "scrollbar-gutter": [`auto`, `stable`, `both`]
            }],
            "scrollbar-w": [{
                scrollbar: [`auto`, `thin`, `none`]
            }],
            "scroll-m": [{
                "scroll-m": C()
            }],
            "scroll-mx": [{
                "scroll-mx": C()
            }],
            "scroll-my": [{
                "scroll-my": C()
            }],
            "scroll-ms": [{
                "scroll-ms": C()
            }],
            "scroll-me": [{
                "scroll-me": C()
            }],
            "scroll-mbs": [{
                "scroll-mbs": C()
            }],
            "scroll-mbe": [{
                "scroll-mbe": C()
            }],
            "scroll-mt": [{
                "scroll-mt": C()
            }],
            "scroll-mr": [{
                "scroll-mr": C()
            }],
            "scroll-mb": [{
                "scroll-mb": C()
            }],
            "scroll-ml": [{
                "scroll-ml": C()
            }],
            "scroll-p": [{
                "scroll-p": C()
            }],
            "scroll-px": [{
                "scroll-px": C()
            }],
            "scroll-py": [{
                "scroll-py": C()
            }],
            "scroll-ps": [{
                "scroll-ps": C()
            }],
            "scroll-pe": [{
                "scroll-pe": C()
            }],
            "scroll-pbs": [{
                "scroll-pbs": C()
            }],
            "scroll-pbe": [{
                "scroll-pbe": C()
            }],
            "scroll-pt": [{
                "scroll-pt": C()
            }],
            "scroll-pr": [{
                "scroll-pr": C()
            }],
            "scroll-pb": [{
                "scroll-pb": C()
            }],
            "scroll-pl": [{
                "scroll-pl": C()
            }],
            "snap-align": [{
                snap: [`start`, `end`, `center`, `align-none`]
            }],
            "snap-stop": [{
                snap: [`normal`, `always`]
            }],
            "snap-type": [{
                snap: [`none`, `x`, `y`, `both`]
            }],
            "snap-strictness": [{
                snap: [`mandatory`, `proximity`]
            }],
            touch: [{
                touch: [`auto`, `none`, `manipulation`]
            }],
            "touch-x": [{
                "touch-pan": [`x`, `left`, `right`]
            }],
            "touch-y": [{
                "touch-pan": [`y`, `up`, `down`]
            }],
            "touch-pz": [`touch-pinch-zoom`],
            select: [{
                select: [`none`, `text`, `all`, `auto`]
            }],
            "will-change": [{
                "will-change": [`auto`, `scroll`, `contents`, `transform`, Z, Y]
            }],
            fill: [{
                fill: [`none`, ...A()]
            }],
            "stroke-w": [{
                stroke: [K, Xr, X, Wr]
            }],
            stroke: [{
                stroke: [`none`, ...A()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": [`auto`, `none`]
            }]
        },
        conflictingClassGroups: {
            "container-named": [`container-type`],
            overflow: [`overflow-x`, `overflow-y`],
            overscroll: [`overscroll-x`, `overscroll-y`],
            inset: [`inset-x`, `inset-y`, `inset-bs`, `inset-be`, `start`, `end`, `top`, `right`, `bottom`, `left`],
            "inset-x": [`right`, `left`],
            "inset-y": [`top`, `bottom`],
            flex: [`basis`, `grow`, `shrink`],
            gap: [`gap-x`, `gap-y`],
            p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
            px: [`pr`, `pl`],
            py: [`pt`, `pb`],
            m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
            mx: [`mr`, `ml`],
            my: [`mt`, `mb`],
            size: [`w`, `h`],
            "font-size": [`leading`],
            "fvn-normal": [`fvn-ordinal`, `fvn-slashed-zero`, `fvn-figure`, `fvn-spacing`, `fvn-fraction`],
            "fvn-ordinal": [`fvn-normal`],
            "fvn-slashed-zero": [`fvn-normal`],
            "fvn-figure": [`fvn-normal`],
            "fvn-spacing": [`fvn-normal`],
            "fvn-fraction": [`fvn-normal`],
            "line-clamp": [`display`, `overflow`],
            rounded: [`rounded-s`, `rounded-e`, `rounded-t`, `rounded-r`, `rounded-b`, `rounded-l`, `rounded-ss`, `rounded-se`, `rounded-ee`, `rounded-es`, `rounded-tl`, `rounded-tr`, `rounded-br`, `rounded-bl`],
            "rounded-s": [`rounded-ss`, `rounded-es`],
            "rounded-e": [`rounded-se`, `rounded-ee`],
            "rounded-t": [`rounded-tl`, `rounded-tr`],
            "rounded-r": [`rounded-tr`, `rounded-br`],
            "rounded-b": [`rounded-br`, `rounded-bl`],
            "rounded-l": [`rounded-tl`, `rounded-bl`],
            "border-spacing": [`border-spacing-x`, `border-spacing-y`],
            "border-w": [`border-w-x`, `border-w-y`, `border-w-s`, `border-w-e`, `border-w-bs`, `border-w-be`, `border-w-t`, `border-w-r`, `border-w-b`, `border-w-l`],
            "border-w-x": [`border-w-r`, `border-w-l`],
            "border-w-y": [`border-w-t`, `border-w-b`],
            "border-color": [`border-color-x`, `border-color-y`, `border-color-s`, `border-color-e`, `border-color-bs`, `border-color-be`, `border-color-t`, `border-color-r`, `border-color-b`, `border-color-l`],
            "border-color-x": [`border-color-r`, `border-color-l`],
            "border-color-y": [`border-color-t`, `border-color-b`],
            translate: [`translate-x`, `translate-y`, `translate-none`],
            "translate-none": [`translate`, `translate-x`, `translate-y`, `translate-z`],
            "scroll-m": [`scroll-mx`, `scroll-my`, `scroll-ms`, `scroll-me`, `scroll-mbs`, `scroll-mbe`, `scroll-mt`, `scroll-mr`, `scroll-mb`, `scroll-ml`],
            "scroll-mx": [`scroll-mr`, `scroll-ml`],
            "scroll-my": [`scroll-mt`, `scroll-mb`],
            "scroll-p": [`scroll-px`, `scroll-py`, `scroll-ps`, `scroll-pe`, `scroll-pbs`, `scroll-pbe`, `scroll-pt`, `scroll-pr`, `scroll-pb`, `scroll-pl`],
            "scroll-px": [`scroll-pr`, `scroll-pl`],
            "scroll-py": [`scroll-pt`, `scroll-pb`],
            touch: [`touch-x`, `touch-y`, `touch-pz`],
            "touch-x": [`touch`],
            "touch-y": [`touch`],
            "touch-pz": [`touch`]
        },
        conflictingClassGroupModifiers: {
            "font-size": [`leading`]
        },
        postfixLookupClassGroups: [`container-type`],
        orderSensitiveModifiers: [`*`, `**`, `after`, `backdrop`, `before`, `details-content`, `file`, `first-letter`, `first-line`, `marker`, `placeholder`, `selection`]
    }
}
);
function fi(...e) {
    return di(qn(e))
}
export {ne as _, Et as a, Ke as c, Me as d, Ce as f, ie as g, M as h, In as i, qe as l, F as m, qn as n, bt as o, ge as p, Gn as r, ct as s, fi as t, z as u};
