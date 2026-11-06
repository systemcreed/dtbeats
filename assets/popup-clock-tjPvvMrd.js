import {r as e} from "./rolldown-runtime-S-ySWqyJ.js";
import {i as t, r as n} from "./framework-CXnKph_e.js";
import {t as r} from "./createLucideIcon-DDARWCLE.js";
import {n as i, r as a, t as o} from "./popup-DI6C-p7P.js";
var s = r(`clock-3`, [[`circle`, {
    cx: `12`,
    cy: `12`,
    r: `10`,
    key: `1mglay`
}], [`path`, {
    d: `M12 6v6h4`,
    key: `135r8i`
}]])
  , c = e(t(), 1)
  , l = n();
function u({initial: e, onPhaseChange: t}) {
    let[n,r] = (0,
    c.useState)(e)
      , u = o(n);
    (0,
    c.useEffect)( () => {
        t?.(u)
    }
    , [u, t]),
    (0,
    c.useEffect)( () => {
        let t = e
          , n = performance.now()
          , i = !1
          , a = !1
          , o = new AbortController
          , s = () => r({
            ...t,
            serverNow: t.serverNow + performance.now() - n
        });
        async function c() {
            if (!(i || a)) {
                a = !0;
                try {
                    let e = await fetch(`/api/popup`, {
                        cache: `no-store`,
                        signal: AbortSignal.any([o.signal, AbortSignal.timeout(1e4)])
                    });
                    if (!e.ok)
                        return;
                    let r = await e.json()
                      , a = r.opensAt === null && r.closesAt === null || Number.isFinite(r.opensAt) && Number.isFinite(r.closesAt) && r.closesAt > r.opensAt;
                    if (i || !Number.isFinite(r.serverNow) || !a)
                        return;
                    t = r,
                    n = performance.now(),
                    s()
                } catch {} finally {
                    a = !1
                }
            }
        }
        let l = () => {
            document.visibilityState === `visible` && (s(),
            c())
        }
        ;
        c();
        let u = window.setInterval(s, 1e3)
          , d = window.setInterval( () => void c(), 6e4);
        return document.addEventListener(`visibilitychange`, l),
        window.addEventListener(`pageshow`, l),
        () => {
            i = !0,
            o.abort(),
            window.clearInterval(u),
            window.clearInterval(d),
            document.removeEventListener(`visibilitychange`, l),
            window.removeEventListener(`pageshow`, l)
        }
    }
    , [e]);
    let d = {
        unscheduled: `Opening soon`,
        upcoming: `Opens in`,
        open: `Closes in`,
        closed: `Closed`
    }[u];
    return (0,
    l.jsxs)(`div`, {
        className: `popup-clock`,
        "data-phase": u,
        title: u === `unscheduled` ? `The countdown begins when the shop opens.` : void 0,
        children: [(0,
        l.jsx)(s, {
            size: 15,
            strokeWidth: 1.4,
            "aria-hidden": `true`
        }), (0,
        l.jsxs)(`div`, {
            className: `popup-clock-copy`,
            children: [(0,
            l.jsx)(`span`, {
                children: `The Pop-Up`
            }), (0,
            l.jsx)(`span`, {
                "aria-live": `polite`,
                children: d
            })]
        }), (0,
        l.jsx)(`span`, {
            className: `popup-clock-digits`,
            role: `timer`,
            "aria-live": `off`,
            "aria-label": `${d}: ${a(i(n))}`,
            children: a(i(n))
        })]
    })
}
export {u as default};
