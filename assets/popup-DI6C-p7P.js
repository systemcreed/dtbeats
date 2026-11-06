var e = 2880 * 60 * 1e3;
function t(e) {
    return e.opensAt === null || e.closesAt === null ? `unscheduled` : e.serverNow < e.opensAt ? `upcoming` : e.serverNow < e.closesAt ? `open` : `closed`
}
function n(n) {
    let r = t(n);
    return r === `unscheduled` ? e : r === `closed` ? 0 : Math.max(0, (r === `upcoming` ? n.opensAt : n.closesAt) - n.serverNow)
}
function r(e) {
    let t = Math.max(0, Math.ceil(e / 1e3));
    return [Math.floor(t / 3600), Math.floor(t / 60) % 60, t % 60].map(e => String(e).padStart(2, `0`)).join(`:`)
}
export {n, r, t};
