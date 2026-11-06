import {r as e} from "./rolldown-runtime-S-ySWqyJ.js";
import {i as t, r as n} from "./framework-CXnKph_e.js";
import {t as r} from "./createLucideIcon-DDARWCLE.js";
import {_ as i, a, c as o, d as s, f as c, g as l, h as u, i as d, l as f, m as p, n as m, o as h, p as ee, r as te, s as ne, t as g} from "./utils-BYfU-hLk.js";
var re = r(`pause`, [[`rect`, {
    x: `14`,
    y: `3`,
    width: `5`,
    height: `18`,
    rx: `1`,
    key: `kaeet6`
}], [`rect`, {
    x: `5`,
    y: `3`,
    width: `5`,
    height: `18`,
    rx: `1`,
    key: `1wsw3u`
}]])
  , ie = r(`play`, [[`path`, {
    d: `M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,
    key: `10ikf1`
}]])
  , _ = r(`x`, [[`path`, {
    d: `M18 6 6 18`,
    key: `1bl5f8`
}], [`path`, {
    d: `m6 6 12 12`,
    key: `d8bk6v`
}]])
  , v = e(t(), 1)
  , ae = Object.defineProperty
  , y = (e, t) => ae(e, `name`, {
    value: t,
    configurable: !0
});
function b(e, t) {
    if (typeof e == `function`)
        return e(t);
    e != null && (e.current = t)
}
y(b, `setRef`);
function x(...e) {
    return t => {
        let n = !1
          , r = e.map(e => {
            let r = b(e, t);
            return !n && typeof r == `function` && (n = !0),
            r
        }
        );
        if (n)
            return () => {
                for (let t = 0; t < r.length; t++) {
                    let n = r[t];
                    typeof n == `function` ? n() : b(e[t], null)
                }
            }
    }
}
y(x, `composeRefs`);
function S(...e) {
    return v.useCallback(x(...e), e)
}
y(S, `useComposedRefs`);
var oe = Object.defineProperty
  , C = (e, t) => oe(e, `name`, {
    value: t,
    configurable: !0
});
function w(e) {
    let t = v.forwardRef( (t, n) => {
        let {children: r, ...i} = t
          , a = null
          , o = !1
          , s = [];
        k(r) && typeof j == `function` && (r = j(r._payload)),
        v.Children.forEach(r, e => {
            if (O(e)) {
                o = !0;
                let t = e
                  , n = `child` in t.props ? t.props.child : t.props.children;
                k(n) && typeof j == `function` && (n = j(n._payload)),
                a = ce(t, n),
                s.push(a?.props?.children)
            } else
                s.push(e)
        }
        ),
        a ? a = v.cloneElement(a, void 0, s) : !o && v.Children.count(r) === 1 && v.isValidElement(r) && (a = r);
        let c = a ? D(a) : void 0
          , l = S(n, c);
        if (!a) {
            if (r || r === 0)
                throw Error(o ? de(e) : ue(e));
            return r
        }
        let u = E(i, a.props ?? {});
        return a.type !== v.Fragment && (u.ref = n ? l : c),
        v.cloneElement(a, u)
    }
    );
    return t.displayName = `${e}.Slot`,
    t
}
C(w, `createSlot`);
var T = Symbol.for(`radix.slottable`);
function se(e) {
    let t = C(e => `child` in e ? e.children(e.child) : e.children, `Slottable`);
    return t.displayName = `${e}.Slottable`,
    t.__radixId = T,
    t
}
C(se, `createSlottable`);
var ce = C( (e, t) => {
    if (`child` in e.props) {
        let t = e.props.child;
        return v.isValidElement(t) ? v.cloneElement(t, void 0, e.props.children(t.props.children)) : null
    }
    return v.isValidElement(t) ? t : null
}
, `getSlottableElementFromSlottable`);
function E(e, t) {
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
C(E, `mergeProps`);
function D(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get
      , n = t && `isReactWarning` in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
C(D, `getElementRef`);
function O(e) {
    return v.isValidElement(e) && typeof e.type == `function` && `__radixId` in e.type && e.type.__radixId === T
}
C(O, `isSlottable`);
var le = Symbol.for(`react.lazy`);
function k(e) {
    return typeof e == `object` && !!e && `$$typeof` in e && e.$$typeof === le && `_payload` in e && A(e._payload)
}
C(k, `isLazyComponent`);
function A(e) {
    return typeof e == `object` && !!e && `then` in e
}
C(A, `isPromiseLike`);
var ue = C(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, `createSlotError`)
  , de = C(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, `createSlottableError`)
  , j = v.use
  , M = n()
  , fe = Object.defineProperty
  , N = (e, t) => fe(e, `name`, {
    value: t,
    configurable: !0
})
  , P = `Dialog`
  , [F,pe] = l(P)
  , [me,I] = F(P)
  , L = N(e => {
    let {__scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o=!0} = e
      , c = v.useRef(null)
      , l = v.useRef(null)
      , [u,d] = ee({
        prop: r,
        defaultProp: i ?? !1,
        onChange: a,
        caller: P
    })
      , [f,p] = v.useState(0)
      , [m,h] = v.useState(0);
    return (0,
    M.jsx)(me, {
        scope: t,
        triggerRef: c,
        contentRef: l,
        contentId: s(),
        titleId: s(),
        descriptionId: s(),
        titlePresent: f > 0,
        descriptionPresent: m > 0,
        setTitleCount: p,
        setDescriptionCount: h,
        open: u,
        onOpenChange: d,
        onOpenToggle: v.useCallback( () => d(e => !e), [d]),
        modal: o,
        children: n
    })
}
, `Dialog`)
  , he = `DialogPortal`
  , [ge,R] = F(he, {
    forceMount: void 0
})
  , z = N(e => {
    let {__scopeDialog: t, forceMount: n, children: r, container: i} = e
      , a = I(he, t);
    return (0,
    M.jsx)(ge, {
        scope: t,
        forceMount: n,
        children: v.Children.map(r, e => (0,
        M.jsx)(c, {
            present: n || a.open,
            children: (0,
            M.jsx)(h, {
                asChild: !0,
                container: i,
                children: e
            })
        }))
    })
}
, `DialogPortal`)
  , B = `DialogOverlay`
  , V = v.forwardRef(N(function(e, t) {
    let n = R(B, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...i} = e
      , a = I(B, e.__scopeDialog);
    return a.modal ? (0,
    M.jsx)(c, {
        present: r || a.open,
        children: (0,
        M.jsx)(ve, {
            ...i,
            ref: t
        })
    }) : null
}, `DialogOverlay`))
  , _e = w(`DialogOverlay.RemoveScroll`)
  , ve = v.forwardRef(N(function(e, t) {
    let {__scopeDialog: n, ...r} = e
      , a = I(B, n)
      , o = S(t, f());
    return (0,
    M.jsx)(d, {
        as: _e,
        allowPinchZoom: !0,
        shards: [a.contentRef],
        children: (0,
        M.jsx)(i.div, {
            "data-state": J(a.open),
            ...r,
            ref: o,
            style: {
                pointerEvents: `auto`,
                ...r.style
            }
        })
    })
}, `DialogOverlayImpl`))
  , H = `DialogContent`
  , U = v.forwardRef(N(function(e, t) {
    let n = R(H, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...i} = e
      , a = I(H, e.__scopeDialog);
    return (0,
    M.jsx)(c, {
        present: r || a.open,
        children: a.modal ? (0,
        M.jsx)(ye, {
            ...i,
            ref: t
        }) : (0,
        M.jsx)(be, {
            ...i,
            ref: t
        })
    })
}, `DialogContent`))
  , ye = v.forwardRef(N(function(e, t) {
    let n = I(H, e.__scopeDialog)
      , r = v.useRef(null)
      , i = S(t, n.contentRef, r);
    return v.useEffect( () => {
        let e = r.current;
        if (e)
            return te(e)
    }
    , []),
    (0,
    M.jsx)(W, {
        ...e,
        ref: i,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        onCloseAutoFocus: u(e.onCloseAutoFocus, e => {
            e.preventDefault(),
            n.triggerRef.current?.focus()
        }
        ),
        onPointerDownOutside: u(e.onPointerDownOutside, e => {
            let t = e.detail.originalEvent
              , n = t.button === 0 && t.ctrlKey === !0;
            (t.button === 2 || n) && e.preventDefault()
        }
        ),
        onFocusOutside: u(e.onFocusOutside, e => e.preventDefault())
    })
}, `DialogContentModal`))
  , be = v.forwardRef(N(function(e, t) {
    let n = I(H, e.__scopeDialog)
      , r = v.useRef(!1)
      , i = v.useRef(!1);
    return (0,
    M.jsx)(W, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: t => {
            e.onCloseAutoFocus?.(t),
            t.defaultPrevented || (r.current || n.triggerRef.current?.focus(),
            t.preventDefault()),
            r.current = !1,
            i.current = !1
        }
        ,
        onInteractOutside: t => {
            e.onInteractOutside?.(t),
            t.defaultPrevented || (r.current = !0,
            t.detail.originalEvent.type === `pointerdown` && (i.current = !0));
            let a = t.target;
            n.triggerRef.current?.contains(a) && t.preventDefault(),
            t.detail.originalEvent.type === `focusin` && i.current && t.preventDefault()
        }
    })
}, `DialogContentNonModal`))
  , W = v.forwardRef(N(function(e, t) {
    let {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: s, ...c} = e
      , l = I(H, n);
    return a(),
    (0,
    M.jsx)(M.Fragment, {
        children: (0,
        M.jsx)(ne, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: i,
            onUnmountAutoFocus: s,
            children: (0,
            M.jsx)(o, {
                role: `dialog`,
                id: l.contentId,
                "aria-describedby": l.descriptionPresent ? l.descriptionId : void 0,
                "aria-labelledby": l.titlePresent ? l.titleId : void 0,
                "data-state": J(l.open),
                ...c,
                ref: t,
                deferPointerDownOutside: !0,
                onDismiss: () => l.onOpenChange(!1)
            })
        })
    })
}, `DialogContentImpl`))
  , xe = `DialogTitle`
  , G = v.forwardRef(N(function(e, t) {
    let {__scopeDialog: n, ...r} = e
      , a = I(xe, n)
      , {setTitleCount: o} = a;
    return p( () => (o(e => e + 1),
    () => o(e => e - 1)), [o]),
    (0,
    M.jsx)(i.h2, {
        id: a.titleId,
        ...r,
        ref: t
    })
}, `DialogTitle`))
  , Se = `DialogDescription`
  , K = v.forwardRef(N(function(e, t) {
    let {__scopeDialog: n, ...r} = e
      , a = I(Se, n)
      , {setDescriptionCount: o} = a;
    return p( () => (o(e => e + 1),
    () => o(e => e - 1)), [o]),
    (0,
    M.jsx)(i.p, {
        id: a.descriptionId,
        ...r,
        ref: t
    })
}, `DialogDescription`))
  , Ce = `DialogClose`
  , q = v.forwardRef(N(function(e, t) {
    let {__scopeDialog: n, ...r} = e
      , a = I(Ce, n);
    return (0,
    M.jsx)(i.button, {
        type: `button`,
        ...r,
        ref: t,
        onClick: u(e.onClick, () => a.onOpenChange(!1))
    })
}, `DialogClose`));
function J(e) {
    return e ? `open` : `closed`
}
N(J, `getState`);
var Y = e => typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e
  , X = m
  , Z = (e, t) => n => {
    if (t?.variants == null)
        return X(e, n?.class, n?.className);
    let {variants: r, defaultVariants: i} = t
      , a = Object.keys(r).map(e => {
        let t = n?.[e]
          , a = i?.[e];
        if (t === null)
            return null;
        let o = Y(t) || Y(a);
        return r[e][o]
    }
    )
      , o = n && Object.entries(n).reduce( (e, t) => {
        let[n,r] = t;
        return r === void 0 || (e[n] = r),
        e
    }
    , {});
    return X(e, a, t?.compoundVariants?.reduce( (e, t) => {
        let {class: n, className: r, ...a} = t;
        return Object.entries(a).every(e => {
            let[t,n] = e;
            return Array.isArray(n) ? n.includes({
                ...i,
                ...o
            }[t]) : {
                ...i,
                ...o
            }[t] === n
        }
        ) ? [...e, n, r] : e
    }
    , []), n?.class, n?.className)
}
  , we = Z(`inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`, {
    variants: {
        variant: {
            default: `bg-primary text-primary-foreground hover:bg-primary/90`,
            destructive: `bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40`,
            outline: `border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50`,
            secondary: `bg-secondary text-secondary-foreground hover:bg-secondary/80`,
            ghost: `hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50`,
            link: `text-primary underline-offset-4 hover:underline`
        },
        size: {
            default: `h-9 px-4 py-2 has-[>svg]:px-3`,
            xs: `h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3`,
            sm: `h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5`,
            lg: `h-10 rounded-md px-6 has-[>svg]:px-4`,
            icon: `size-9`,
            "icon-xs": `size-6 rounded-md [&_svg:not([class*='size-'])]:size-3`,
            "icon-sm": `size-8`,
            "icon-lg": `size-10`
        }
    },
    defaultVariants: {
        variant: `default`,
        size: `default`
    }
});
function Te({...e}) {
    return (0,
    M.jsx)(L, {
        "data-slot": `dialog`,
        ...e
    })
}
function Q({...e}) {
    return (0,
    M.jsx)(z, {
        "data-slot": `dialog-portal`,
        ...e
    })
}
function $({className: e, ...t}) {
    return (0,
    M.jsx)(V, {
        "data-slot": `dialog-overlay`,
        className: g(`fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0`, e),
        ...t
    })
}
function Ee({className: e, children: t, showCloseButton: n=!0, ...r}) {
    return (0,
    M.jsxs)(Q, {
        "data-slot": `dialog-portal`,
        children: [(0,
        M.jsx)($, {}), (0,
        M.jsxs)(U, {
            "data-slot": `dialog-content`,
            className: g(`fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg`, e),
            ...r,
            children: [t, n && (0,
            M.jsxs)(q, {
                "data-slot": `dialog-close`,
                className: `absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
                children: [(0,
                M.jsx)(_, {}), (0,
                M.jsx)(`span`, {
                    className: `sr-only`,
                    children: `Close`
                })]
            })]
        })]
    })
}
function De({className: e, ...t}) {
    return (0,
    M.jsx)(G, {
        "data-slot": `dialog-title`,
        className: g(`text-lg leading-none font-semibold`, e),
        ...t
    })
}
function Oe({className: e, ...t}) {
    return (0,
    M.jsx)(K, {
        "data-slot": `dialog-description`,
        className: g(`text-sm text-muted-foreground`, e),
        ...t
    })
}
export {ie as _, Q as a, Z as c, U as d, K as f, _ as g, G as h, $ as i, L as l, z as m, Ee as n, De as o, V as p, Oe as r, we as s, Te as t, q as u, re as v};
