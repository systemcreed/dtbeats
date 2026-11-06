import {r as e} from "./rolldown-runtime-S-ySWqyJ.js";
import {i as t, n, r} from "./framework-CXnKph_e.js";
import {t as i} from "./createLucideIcon-DDARWCLE.js";
import {t as a} from "./arrow-up-right-CrAmFx29.js";
import {_ as o, a as s, d as c, i as l, o as u, r as d, t as f, v as p} from "./dialog-Dx6QVqT-.js";
import {t as m} from "./popup-DI6C-p7P.js";
var h = i(`move-up-right`, [[`path`, {
    d: `M13 5H19V11`,
    key: `1n1gyv`
}], [`path`, {
    d: `M19 5L5 19`,
    key: `72u4yj`
}]])
  , g = e(t(), 1)
  , _ = 1536
  , v = 1024
  , y = e => Math.max(0, Math.min(1, e))
  , b = (e, t, n) => {
    let r = y((n - e) / (t - e));
    return r * r * (3 - 2 * r)
}
;
function x(e) {
    let t = new Float32Array(28);
    for (let n = 0; n < 3; n++) {
        let r = [5.4, 5.9, 5.1][n]
          , i = (e + [.2, 2.7, 1.5][n]) % r
          , a = b(.18, .33, i) * (1 - b(.65, .98, i))
          , o = b(1.12, 1.24, i) * (1 - b(1.37, 1.67, i))
          , s = .11 + .1 * Math.sin(e * .8 + n * 2.3) + .73 * a + .18 * o;
        (n < 2 ? [.68, .025, .006, .04] : [.7, .16, .075, .22]).forEach( (e, r) => t[n * 4 + r] = e * s)
    }
    for (let n = 3; n < 7; n++) {
        let r = (e + (n - 3) * .95) % 3.8
          , i = b(.08, .19, r) * (1 - b(.37, .72, r));
        t.set([.144 * i, .09 * i, .054 * i, .12 * i], n * 4)
    }
    return t
}
function S(e) {
    let t = document.createElement(`canvas`);
    t.width = _,
    t.height = v;
    let n = t.getContext(`2d`);
    if (!n)
        throw Error(`Accent mask unavailable`);
    n.drawImage(e, 0, 0, _, v);
    let r = n.getImageData(0, 0, _, v).data
      , i = n.createImageData(_, v)
      , a = (e, t, n, r, a, o) => {
        for (let s = Math.floor(n); s <= Math.ceil(a); s++)
            for (let n = Math.floor(t); n <= Math.ceil(r); n++) {
                let t = (s * _ + n) * 4
                  , r = Math.round(y(o(n + .5, s + .5, t)) * 255);
                r < i.data[t] || (i.data[t] = r,
                i.data[t + 1] = e,
                i.data[t + 3] = 255)
            }
    }
    ;
    [[732, 500.5], [768, 498]].forEach( ([e,t], n) => {
        a(n, e - 20, t - 12, e + 20, t + 9, (n, i, a) => {
            let o = Math.exp(-.5 * (((n - e) / 10) ** 2 + ((i - t) / 1.9) ** 2))
              , s = .3 * Math.exp(-.5 * (((n - e) / 11.5) ** 2 + ((i - (t - 2.8)) / 5) ** 2))
              , c = (r[a] * .2126 + r[a + 1] * .7152 + r[a + 2] * .0722) / 255;
            return (o + s) * y((c - .18) / .35)
        }
        )
    }
    ),
    a(2, 1038, 417, 1065, 432, (e, t, n) => {
        let i = Math.exp(-.5 * (((e - 1051.5) / 8.4) ** 2 + ((t - 426.6) / 1.05) ** 2))
          , a = .45 * Math.exp(-.5 * (((e - 1051.5) / 8.4) ** 2 + ((t - 420.7) / 1) ** 2))
          , o = (r[n] * .2126 + r[n + 1] * .7152 + r[n + 2] * .0722) / 255;
        return (i + a) * b(.05, .14, o)
    }
    );
    let o = (e, t) => {
        let n = [943 + 61.7 * e, 815 - 8 * e]
          , r = [969.8 + 67.2 * e, 838.5 - 8.8 * e];
        return [n[0] * (1 - t) + r[0] * t, n[1] * (1 - t) + r[1] * t]
    }
    ;
    return [[0, 0], [0, 2], [1, 1], [2, 3]].forEach( ([e,t], r) => {
        let i = [o((t + .14) / 4, (e + .15) / 3), o((t + .86) / 4, (e + .15) / 3), o((t + .86) / 4, (e + .85) / 3), o((t + .14) / 4, (e + .85) / 3)];
        n.clearRect(0, 0, _, v),
        n.beginPath(),
        i.forEach( ([e,t], r) => r ? n.lineTo(e, t) : n.moveTo(e, t)),
        n.closePath(),
        n.fillStyle = `#fff`,
        n.fill();
        let s = n.getImageData(0, 0, _, v).data
          , c = i.map(e => e[0])
          , l = i.map(e => e[1]);
        a(r + 3, Math.min(...c) - 1, Math.min(...l) - 1, Math.max(...c) + 1, Math.max(...l) + 1, (e, t, n) => s[n + 3] / 255)
    }
    ),
    n.putImageData(i, 0, 0),
    t
}
var C = new Map
  , w = e => Math.max(0, Math.min(1, e))
  , T = (e, t, n) => {
    let r = w((n - e) / (t - e));
    return r * r * (3 - 2 * r)
}
;
function E(e, t, n, r) {
    let i = e.src
      , a = C.get(i);
    a || (a = {
        users: 0,
        render: D(e, t, n, r)
    },
    C.set(i, a));
    let o = a;
    return o.users++,
    {
        frame: o.render,
        dispose() {
            --o.users === 0 && C.delete(i)
        }
    }
}
function D(e, t, n, r) {
    let i = 960 * 640
      , a = document.createElement(`canvas`);
    a.width = 960,
    a.height = 640;
    let o = a.getContext(`2d`);
    if (!o)
        throw Error(`Weather canvas unavailable`);
    let s = e => (o.clearRect(0, 0, 960, 640),
    o.drawImage(e, 0, 0, 960, 640),
    o.getImageData(0, 0, 960, 640).data)
      , c = s(e)
      , l = s(t)
      , u = s(n)
      , d = s(r);
    o.clearRect(0, 0, 960, 640);
    let f = o.createImageData(960, 640)
      , p = f.data
      , m = new Float32Array(i)
      , h = new Float32Array(i)
      , g = new Float32Array(i)
      , _ = new Float32Array(i)
      , v = new Float32Array(i)
      , y = new Float32Array(i)
      , b = new Float32Array(i)
      , S = new Float32Array(i)
      , C = []
      , w = []
      , E = [];
    for (let e = 0; e < 640; e++)
        for (let t = 0; t < 960; t++) {
            let n = e * 960 + t
              , r = n * 4
              , i = (t + .5) / 960
              , a = (e + .5) / 640
              , o = l[r + 3] / 255
              , s = 1 - T(.048, .105, Math.hypot((i - .17) * 1.5, a - .146))
              , c = (1 - T(.025, .068, Math.abs(i - .684))) * T(.255, .285, a);
            m[n] = (1 - T(.35, .45, a)) * (1 - o) * (1 - s) * (1 - c);
            let f = Math.max(a - .578, 0)
              , x = T(0, .27, f);
            if (h[n] = T(.578, .61, a) * (1 - o) * (.18 + .82 * x),
            m[n] > 1e-4 || h[n] > 1e-4) {
                C.push(n),
                p[r + 3] = 255;
                let e = 1 / (f + .09)
                  , t = (i - .48) * e
                  , a = e * 5.2 + t * .34
                  , o = e * 8.1 - t * .43
                  , s = e * 12.7 + t * .72;
                g[n] = Math.sin(a),
                _[n] = Math.cos(a),
                v[n] = Math.sin(o),
                y[n] = Math.cos(o),
                b[n] = Math.sin(s),
                S[n] = Math.cos(s)
            }
            u[r] > 1 && o < .99 && w.push(n),
            d[r] > 0 && E.push(n)
        }
    let D = new Float32Array(640)
      , O = new Float32Array(960)
      , k = -1;
    return e => {
        let t = Math.floor(e * 30);
        if (t === k)
            return a;
        k = t;
        let n = t / 30
          , r = n * 1.35
          , i = n * 1.8
          , s = n * 2.2
          , A = Math.sin(r)
          , j = Math.cos(r)
          , M = Math.sin(i)
          , N = Math.cos(i)
          , P = Math.sin(s)
          , F = Math.cos(s);
        for (let e = 0; e < 640; e++)
            D[e] = (.028 * Math.sin(n * .28) + .008 * Math.sin(n * .43 + (e + .5) / 640 * 4)) * 960;
        for (let e = 0; e < 960; e++)
            O[e] = .006 * Math.sin((e + .5) / 960 * 5 + n * .32) * 640;
        for (let e = 0; e < C.length; e++) {
            let t = C[e]
              , n = t * 4
              , r = Math.floor(t / 960)
              , i = t - r * 960
              , a = g[t] * j + _[t] * A
              , o = v[t] * N - y[t] * M
              , s = b[t] * F + S[t] * P
              , u = i + m[t] * D[r] + h[t] * (5e-4 * a + 25e-5 * o) * 960
              , d = r + m[t] * O[i] + h[t] * (.0037 * a + .0013 * o + 55e-5 * s) * 640;
            u = Math.max(0, Math.min(958.999, u)),
            d = Math.max(0, Math.min(638.999, d));
            let f = l[(Math.round(d) * 960 + Math.round(u)) * 4 + 3] / 255;
            u = u * (1 - f) + i * f,
            d = d * (1 - f) + r * f;
            let x = Math.floor(u)
              , w = Math.floor(d)
              , E = u - x
              , k = d - w
              , I = (w * 960 + x) * 4
              , L = I + 960 * 4
              , R = (1 - E) * (1 - k)
              , z = E * (1 - k)
              , B = (1 - E) * k
              , V = E * k
              , H = c[I] * R + c[I + 4] * z + c[L] * B + c[L + 4] * V
              , U = c[I + 1] * R + c[I + 5] * z + c[L + 1] * B + c[L + 5] * V
              , W = c[I + 2] * R + c[I + 6] * z + c[L + 2] * B + c[L + 6] * V
              , G = T(.07, .34, (H * .2126 + U * .7152 + W * .0722) / 255)
              , K = _[t] * j - g[t] * A
              , q = .23 * K + .09 * (y[t] * N + v[t] * M) + .035 * (S[t] * F - b[t] * P)
              , J = (.5 + .5 * K) ** 8
              , Y = 1 + h[t] * ((.25 + .75 * G) * q + G * (.2 * J - .045));
            p[n] = H * Y,
            p[n + 1] = U * Y,
            p[n + 2] = W * Y
        }
        for (let e = 0; e < w.length; e++) {
            let t = w[e] * 4
              , r = u[t + 1] / 255
              , i = u[t + 2] / 255
              , a = 4.5 + i * 4
              , o = n + r * a
              , s = Math.floor(o / a)
              , d = o % a
              , f = Math.sin(s * 127.1 + r * 311.7) * 43758.5453
              , m = f - Math.floor(f)
              , h = T(.25, .38, d) * (1 - T(.53, .82, d))
              , g = T(.82, .94, d) * (1 - T(1.08, 1.3, d))
              , _ = .19 * Math.sin(n * (.85 + i * .55) + r * 25) + .06 * Math.sin(n * 2.7 + r * 41)
              , v = 1 + u[t] / 255 * (1 - l[t + 3] / 255) * (_ - (.18 + .1 * m) * h + .1 * g);
            p[t] = c[t] * v,
            p[t + 1] = c[t + 1] * v,
            p[t + 2] = c[t + 2] * v,
            p[t + 3] = 255
        }
        let I = x(n);
        for (let e = 0; e < E.length; e++) {
            let t = E[e]
              , n = t * 4
              , r = Math.min(6, Math.round(d[n + 1])) * 4
              , i = d[n] / 255
              , a = m[t] > 1e-4 || h[t] > 1e-4 || u[n] > 1 && l[n + 3] / 255 < .99;
            for (let e = 0; e < 3; e++) {
                let t = a ? p[n + e] : c[n + e];
                p[n + e] = t + i * (c[n + e] * I[r] + 255 * I[r + e + 1])
            }
            p[n + 3] = 255
        }
        return o.putImageData(f, 0, 0),
        a
    }
}
var O = `
attribute vec2 position;
varying vec2 screenUV;
void main() {
  screenUV = vec2(position.x * .5 + .5, .5 - position.y * .5);
  gl_Position = vec4(position, 0., 1.);
}
`
  , k = `
precision highp float;
varying vec2 screenUV;
uniform sampler2D painting;
uniform sampler2D silhouette;
uniform sampler2D cityLights;
uniform sampler2D accentLights;
uniform vec4 accentValues[7];
uniform vec2 resolution;
uniform vec2 pointer;
uniform float time;
uniform float journey;
uniform float docking;
uniform vec2 artPosition;
uniform vec4 landingView;

float ease(float x) { return x*x*x*(x*(x*6.-15.)+10.); }
float maskAt(vec2 uv) {
  if (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) return 0.;
  return texture2D(silhouette, uv).a;
}
vec3 art(vec2 uv) { return texture2D(painting, clamp(uv, .001, .999)).rgb; }

vec3 livingPainting(vec2 uv) {
  float studio = maskAt(uv);
  vec2 sampleUV = uv;
  float sky = (1.-smoothstep(.35,.45,uv.y)) * (1.-studio);
  // Leave the painted moon and the tall CN Tower anchored as clouds pass.
  float moon = 1.-smoothstep(.048,.105,length((uv-vec2(.170,.146))*vec2(1.5,1.)));
  // The guard includes the cloud sampling reach, so the tower cannot echo nearby.
  float tower = (1.-smoothstep(.025,.068,abs(uv.x-.684))) * smoothstep(.255,.285,uv.y);
  sky *= (1.-moon)*(1.-tower);
  float lake = smoothstep(.578,.61,uv.y) * (1.-studio);
  float distanceFromShore = max(uv.y-.578,0.);
  float depth = smoothstep(0.,.27,distanceFromShore);
  float waterPresence = .18+.82*depth;
  // Broad, coherent drift moves the painted cloud banks without a noisy boil.
  sampleUV.x += sky * (.028*sin(time*.28)+.008*sin(time*.43+uv.y*4.));
  sampleUV.y += sky * .006*sin(uv.x*5.+time*.32);
  // Project shallow wave fronts into the lake: tight at the horizon, broader
  // toward the foreground. Reflection movement stays predominantly vertical.
  float waterZ = 1./(distanceFromShore+.09);
  float waterX = (uv.x-.48)*waterZ;
  float swell = waterZ*5.2+waterX*.34+time*1.35;
  float crossing = waterZ*8.1-waterX*.43-time*1.8;
  float smallWave = waterZ*12.7+waterX*.72+time*2.2;
  sampleUV.x += lake*waterPresence*(.0005*sin(swell)+.00025*sin(crossing));
  sampleUV.y += lake*waterPresence*(.0037*sin(swell)+.0013*sin(crossing)
                            +.00055*sin(smallWave));
  sampleUV = mix(sampleUV,uv,maskAt(sampleUV));
  vec3 color = art(sampleUV);
  float reflection = smoothstep(.07,.34,dot(color,vec3(.2126,.7152,.0722)));
  float surfaceLight = .23*cos(swell)+.09*cos(crossing)+.035*cos(smallWave);
  float crest = pow(.5+.5*cos(swell),8.);
  // Travelling crests catch the painting's existing moonlit reflections.
  color *= 1.+lake*waterPresence*((.25+.75*reflection)*surfaceLight
                               +reflection*(.20*crest-.045));

  // Existing windows breathe softly, with occasional short, independent dips.
  // Bright roof beacons stay recognizable; the shoreline never flashes.
  vec3 lamp = texture2D(cityLights,uv).rgb;
  if (lamp.r > .002 && studio < .99) {
    float period = 4.5+lamp.b*4.;
    float clock = time+lamp.g*period;
    float cycle = floor(clock/period), beat = mod(clock,period);
    float seed = fract(sin(cycle*127.1+lamp.g*311.7)*43758.5453);
    float blink = smoothstep(.25,.38,beat)*(1.-smoothstep(.53,.82,beat));
    float settle = smoothstep(.82,.94,beat)*(1.-smoothstep(1.08,1.3,beat));
    float shimmer = .19*sin(time*(.85+lamp.b*.55)+lamp.g*25.)
                  + .06*sin(time*2.7+lamp.g*41.);
    float flicker = shimmer-(.18+.10*seed)*blink+.10*settle;
    color += art(uv)*lamp.r*(1.-studio)*flicker;
  }
  vec4 accent = texture2D(accentLights,uv);
  if (accent.r > .001) {
    vec4 level = vec4(0.);
    for (int i=0;i<7;i++) {
      if (abs(float(i)-accent.g*255.) < .5) level = accentValues[i];
    }
    color += accent.r*(art(uv)*level.x+level.yzw);
  }
  return color;
}

void main() {
  float p = ease(journey);
  float aspect = resolution.x/resolution.y;
  vec2 cover = aspect > 1.5 ? vec2(1.,1.5/aspect) : vec2(aspect/1.5,1.);
  float push = p;
  vec2 approach = mix(vec2(aspect < 1. ? .53 : .5,.49),vec2(.47,.505),push);
  vec2 destination = landingView.z > 0. ? landingView.xy : cover*.5+(vec2(1.)-cover)*artPosition;
  vec2 targetCover = landingView.z > 0. ? landingView.zw : cover;
  vec2 cameraCover = mix(cover,targetCover,docking);
  vec2 center = mix(approach,destination,docking);
  vec2 drift = vec2(sin(time*.135)*.012,cos(time*.11)*.004)*(1.-docking);
  vec2 look = pointer*vec2(.009,.005)*(1.-p*.7)*(1.-docking);
  float breathe = .013*sin(time*.16);
  float arrival = .09*exp(-time*.65)*(1.-p);
  float zoom = mix(1.045+breathe+arrival+.14*sin(p*3.14159265),1.,docking);
  vec2 uv = center + (screenUV-.5)*cameraCover/zoom + drift + look;
  // A continuous optical move through the existing window. Gentle depth
  // displacement gives mouse parallax without cutting holes in the painting.
  float depth = smoothstep(.55,.93,uv.y)*.65 + smoothstep(.66,.85,uv.x)*.35;
  uv += look * depth * .8;
  vec3 color = livingPainting(uv);
  // As the full-screen camera meets the inset hero, uncovered margins dissolve
  // into the room color instead of stretching the painting's last pixel column.
  if (landingView.z > 0.) {
    float edge = min(min(uv.x,1.-uv.x),min(uv.y,1.-uv.y));
    color = mix(vec3(.04,.027,.052),color,smoothstep(-.015,0.,edge));
  }

  // Sparse airborne dust catches the moonlight inside the studio.
  // It falls away as the camera crosses the window, without changing the art.
  if (p < .99) {
  for (int i=0; i<12; i++) {
    float fi = float(i);
    float z = fract(fi*.6180339 + time*.006 + p*.72);
    vec2 origin = vec2(fract(sin(fi*43.1)*143.7), fract(sin(fi*17.4)*139.3));
    vec2 point = (origin-.5) * (1.+p*2.4+z*.25) + .5;
    point += vec2(sin(time*.09+fi)*.015, -time*.003);
    point.y = fract(point.y);
    vec2 delta = (screenUV-point) * vec2(aspect,1.);
    float radius = mix(.0007,.0019,z);
    float dotLight = exp(-dot(delta,delta)/(radius*radius));
    color += vec3(.31,.26,.35)*dotLight*.28*(1.-p);
  }
  }
  gl_FragColor = vec4(color,1.);
}
`
  , A = [[.799, 0], [1, 0], [1, 1], [0, 1], [0, .882], [.09, .86], [.21, .835], [.339, .809], [.375, .805], [.373, .793], [.363, .784], [.358, .771], [.369, .777], [.386, .793], [.394, .806], [.411, .807], [.414, .79], [.417, .778], [.426, .762], [.433, .75], [.439, .745], [.435, .766], [.431, .791], [.446, .787], [.449, .767], [.459, .749], [.466, .742], [.479, .736], [.474, .752], [.465, .768], [.46, .789], [.475, .779], [.488, .768], [.496, .759], [.507, .757], [.524, .758], [.539, .754], [.551, .756], [.568, .762], [.586, .76], [.603, .76], [.624, .751], [.647, .748], [.647, .72], [.654, .718], [.67, .719], [.673, .728], [.67, .751], [.685, .749], [.69, .728], [.695, .711], [.7, .694], [.709, .682], [.718, .673], [.731, .665], [.738, .654], [.74, .63], [.741, .611], [.747, .59], [.758, .571], [.77, .557], [.783, .552], [.792, .553], [.799, .564]];
function j() {
    let e = document.createElement(`canvas`);
    e.width = 1536,
    e.height = 1024;
    let t = e.getContext(`2d`);
    if (!t)
        throw Error(`Canvas unavailable`);
    return t.beginPath(),
    A.forEach( ([e,n], r) => r ? t.lineTo(e * 1536, n * 1024) : t.moveTo(e * 1536, n * 1024)),
    t.closePath(),
    t.fillStyle = `#fff`,
    t.shadowColor = `#fff`,
    t.shadowBlur = 18,
    t.fill(),
    t.lineWidth = 7,
    t.lineJoin = `round`,
    t.strokeStyle = `#fff`,
    t.stroke(),
    e
}
var M = [[649, 565], [702, 571], [729, 510], [731, 524], [732, 501], [732, 553], [732, 541], [759, 500], [763, 520], [764, 567], [766, 535], [767, 548], [768, 498], [811, 564], [829, 551], [868, 538], [874, 528], [874, 547], [875, 515], [903, 490], [911, 472], [921, 554], [939, 504], [1009, 504], [1062, 538], [1075, 541], [1076, 560], [1086, 566], [1093, 511], [1153, 557], [1157, 521], [1159, 485], [1161, 528], [1167, 521], [1198, 528], [1200, 547], [1201, 480], [1202, 489]];
function N(e) {
    let t = document.createElement(`canvas`);
    t.width = 1536,
    t.height = 1024;
    let n = t.getContext(`2d`);
    if (!n)
        throw Error(`Light mask unavailable`);
    n.drawImage(e, 0, 0, t.width, t.height);
    let r = n.getImageData(0, 0, t.width, t.height).data
      , i = n.createImageData(t.width, t.height);
    for (let e = 3; e < i.data.length; e += 4)
        i.data[e] = 255;
    return M.forEach( ([e,n], a) => {
        let o = Math.round((a * .61803398875 + .137) % 1 * 255)
          , s = Math.round((a * .38196601125 + .413) % 1 * 255)
          , c = e === 732 && n === 501 || e === 768 && n === 498
          , l = c ? 10 : 6
          , u = c ? 24 : 10;
        for (let a = -l; a <= l; a++)
            for (let c = -l; c <= l; c++) {
                let l = ((n + a) * t.width + e + c) * 4
                  , d = (r[l] * .2126 + r[l + 1] * .7152 + r[l + 2] * .0722) / 255
                  , f = Math.max(0, Math.min(1, (d - .19) / .24))
                  , p = Math.round(Math.exp(-(c * c + a * a) / u) * f * 255);
                p < i.data[l] || (i.data[l] = p,
                i.data[l + 1] = o,
                i.data[l + 2] = s)
            }
    }
    ),
    n.putImageData(i, 0, 0),
    t
}
function P(e, t, n=!1) {
    if (n)
        return F(e, t);
    let r = e.getContext(`webgl`, {
        alpha: !1,
        antialias: !1,
        depth: !1,
        stencil: !1,
        powerPreference: `low-power`
    });
    if (!r)
        return F(e, t);
    let i = (e, t) => {
        let n = r.createShader(e);
        if (!n)
            throw Error(`Shader unavailable`);
        if (r.shaderSource(n, t),
        r.compileShader(n),
        !r.getShaderParameter(n, r.COMPILE_STATUS)) {
            let e = r.getShaderInfoLog(n);
            throw r.deleteShader(n),
            Error(e || `Shader compilation failed`)
        }
        return n
    }
      , a = i(r.VERTEX_SHADER, O)
      , o = i(r.FRAGMENT_SHADER, k)
      , s = r.createProgram();
    if (!s)
        throw Error(`Program unavailable`);
    if (r.attachShader(s, a),
    r.attachShader(s, o),
    r.linkProgram(s),
    r.deleteShader(a),
    r.deleteShader(o),
    !r.getProgramParameter(s, r.LINK_STATUS))
        throw Error(`Scene linking failed`);
    r.useProgram(s);
    let c = r.createBuffer();
    r.bindBuffer(r.ARRAY_BUFFER, c),
    r.bufferData(r.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), r.STATIC_DRAW);
    let l = r.getAttribLocation(s, `position`);
    r.enableVertexAttribArray(l),
    r.vertexAttribPointer(l, 2, r.FLOAT, !1, 0, 0);
    let u = [];
    [t, j(), N(t), S(t)].forEach( (e, t) => {
        let n = r.createTexture();
        if (!n)
            throw Error(`Texture unavailable`);
        u.push(n),
        r.activeTexture(r.TEXTURE0 + t),
        r.bindTexture(r.TEXTURE_2D, n),
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR),
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR),
        r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, e),
        r.uniform1i(r.getUniformLocation(s, [`painting`, `silhouette`, `cityLights`, `accentLights`][t]), t)
    }
    );
    let d = {
        time: r.getUniformLocation(s, `time`),
        journey: r.getUniformLocation(s, `journey`),
        docking: r.getUniformLocation(s, `docking`),
        artPosition: r.getUniformLocation(s, `artPosition`),
        resolution: r.getUniformLocation(s, `resolution`),
        pointer: r.getUniformLocation(s, `pointer`),
        landing: r.getUniformLocation(s, `landingView`),
        accents: r.getUniformLocation(s, `accentValues[0]`)
    };
    return {
        frameRate: 60,
        draw(t) {
            r.viewport(0, 0, e.width, e.height),
            r.uniform2f(d.resolution, t.viewportWidth || e.width, t.viewportHeight || e.height),
            r.uniform1f(d.docking, t.docking || 0),
            r.uniform4f(d.landing, t.landingCenterX || 0, t.landingCenterY || 0, t.landingSpanX || 0, t.landingSpanY || 0),
            r.uniform2f(d.artPosition, t.artPositionX ?? .62, t.artPositionY ?? .48),
            r.uniform2f(d.pointer, t.pointerX, t.pointerY),
            r.uniform1f(d.time, t.time),
            r.uniform4fv(d.accents, x(t.time)),
            r.uniform1f(d.journey, t.progress),
            r.drawArrays(r.TRIANGLES, 0, 6)
        },
        dispose() {
            u.forEach(e => r.deleteTexture(e)),
            r.deleteBuffer(c),
            r.deleteProgram(s)
        }
    }
}
function F(e, t) {
    let n = e.getContext(`2d`, {
        alpha: !1
    });
    if (!n)
        throw Error(`Scene unavailable`);
    let r = E(t, j(), N(t), S(t));
    return {
        frameRate: 30,
        draw(i) {
            let a = i.progress ** 3 * (i.progress * (i.progress * 6 - 15) + 10)
              , o = a
              , s = i.docking || 0
              , c = (1.045 + .013 * Math.sin(i.time * .16) + .09 * Math.exp(-i.time * .65) * (1 - a) + .14 * Math.sin(a * Math.PI)) * (1 - s) + s
              , l = (i.viewportWidth || e.width) / (i.viewportHeight || e.height)
              , u = l > 1.5 ? 1 : l / 1.5
              , d = l > 1.5 ? 1.5 / l : 1
              , f = ((l < 1 ? .53 : .5) * (1 - o) + .47 * o + Math.sin(i.time * .135) * .012 + i.pointerX * .009) * (1 - s) + (i.landingCenterX ?? u * .5 + (1 - u) * (i.artPositionX ?? .62)) * s
              , p = (.49 * (1 - o) + .505 * o + Math.cos(i.time * .11) * .004 + i.pointerY * .005) * (1 - s) + (i.landingCenterY ?? d * .5 + (1 - d) * (i.artPositionY ?? .48)) * s
              , m = t.width * (u * (1 - s) + (i.landingSpanX ?? u) * s) / c
              , h = t.height * (d * (1 - s) + (i.landingSpanY ?? d) * s) / c;
            n.fillStyle = `#0a070d`,
            n.fillRect(0, 0, e.width, e.height),
            n.drawImage(t, f * t.width - m / 2, p * t.height - h / 2, m, h, 0, 0, e.width, e.height);
            let g = r.frame(i.time)
              , _ = g.width / t.width;
            n.drawImage(g, (f * t.width - m / 2) * _, (p * t.height - h / 2) * _, m * _, h * _, 0, 0, e.width, e.height)
        },
        dispose() {
            r.dispose()
        }
    }
}
var I = e(n(), 1)
  , L = r();
function R({motion: e, onToggle: t, clock: n}) {
    let[r,i] = (0,
    g.useState)(null)
      , [a,s] = (0,
    g.useState)(null)
      , [c,l] = (0,
    g.useState)(!1)
      , [u,d] = (0,
    g.useState)(!1)
      , f = (0,
    g.useRef)(!0);
    return (0,
    g.useEffect)( () => {
        let e = document.querySelector(`.hero`)
          , t = e?.querySelector(`.hero-shade`);
        if (!e || !t)
            return;
        let n = document.createElement(`div`);
        n.className = `dt-living-hero`,
        e.insertBefore(n, t);
        let r = requestAnimationFrame( () => i(n));
        return () => {
            cancelAnimationFrame(r),
            n.remove()
        }
    }
    , []),
    (0,
    g.useEffect)( () => {
        f.current = !0
    }
    , [e]),
    (0,
    g.useEffect)( () => {
        if (!r || !a)
            return;
        let e = r.parentElement?.querySelector(`.hero-art`);
        if (!e)
            return;
        let t = !1, i = !0, o, s = 0, u = performance.now(), p = 0, m = 1, h = 1, g = .62, _ = .48, v = new Image;
        v.decoding = `async`;
        let y = () => {
            let t = e.getBoundingClientRect();
            m = Math.max(1, t.width),
            h = Math.max(1, t.height);
            let n = Math.min(devicePixelRatio || 1, 1.5, Math.sqrt(15e5 / (m * h)));
            a.width = Math.round(m * n),
            a.height = Math.round(h * n);
            let r = getComputedStyle(e)
              , i = r.objectPosition.split(` `);
            g = parseFloat(i[0]) / 100,
            _ = parseFloat(i[1] || `50%`) / 100,
            a.style.filter = r.filter,
            a.style.opacity = r.opacity,
            a.style.mixBlendMode = r.mixBlendMode,
            f.current = !0
        }
          , b = e => {
            if (t)
                return;
            s = requestAnimationFrame(b);
            let r = Math.min((e - u) / 1e3, .25);
            if (u = e,
            !o || !i || document.hidden)
                return;
            let a = n.current
              , c = document.documentElement.dataset.dtEntrance;
            c === `open` || c === `entering` && (a.progress || 0) < .28 || (a.moving && !document.documentElement.dataset.dtEntrance && (a.time += r),
            (f.current || a.moving && e - p >= 1e3 / o.frameRate - .5) && (o.draw({
                time: a.time,
                progress: 1,
                pointerX: 0,
                pointerY: 0,
                docking: 1,
                viewportWidth: m,
                viewportHeight: h,
                artPositionX: g,
                artPositionY: _
            }),
            f.current = !1,
            p = e))
        }
          , x = e => {
            e.preventDefault(),
            t || (d(!1),
            l(!0))
        }
        ;
        v.onload = () => {
            if (!t)
                try {
                    o = P(a, v, c),
                    y(),
                    o.draw({
                        time: n.current.time,
                        progress: 1,
                        pointerX: 0,
                        pointerY: 0,
                        docking: 1,
                        viewportWidth: m,
                        viewportHeight: h,
                        artPositionX: g,
                        artPositionY: _
                    }),
                    d(!0),
                    s = requestAnimationFrame(b)
                } catch {
                    c || l(!0)
                }
        }
        ,
        v.src = e.currentSrc || e.src;
        let S = new ResizeObserver(y);
        S.observe(e);
        let C = new IntersectionObserver( ([e]) => {
            i = e.isIntersecting,
            f.current = !0
        }
        );
        return C.observe(e),
        a.addEventListener(`webglcontextlost`, x),
        () => {
            t = !0,
            cancelAnimationFrame(s),
            o?.dispose(),
            S.disconnect(),
            C.disconnect(),
            v.onload = null,
            a.removeEventListener(`webglcontextlost`, x)
        }
    }
    , [r, a, c, n]),
    r ? (0,
    I.createPortal)((0,
    L.jsxs)(L.Fragment, {
        children: [(0,
        L.jsx)(`canvas`, {
            ref: s,
            className: `dt-hero-canvas`,
            "data-ready": u,
            "aria-hidden": `true`
        }, c ? `canvas` : `webgl`), u && (0,
        L.jsx)(`button`, {
            type: `button`,
            className: `dt-hero-motion`,
            onClick: t,
            "aria-label": e ? `Pause artwork motion` : `Play artwork motion`,
            title: e ? `Pause artwork motion` : `Play artwork motion`,
            "aria-pressed": e,
            children: e ? (0,
            L.jsx)(p, {
                size: 15,
                "aria-hidden": `true`
            }) : (0,
            L.jsx)(o, {
                size: 15,
                "aria-hidden": `true`
            })
        })]
    }), r) : null
}
var z = `dtbeats-world-entrance-v3-seen`
  , B = `Find the sound. Make it yours.`
  , V = 4200
  , H = e => {
    let t = Math.max(0, Math.min(1, e));
    return t * t * t * (t * (t * 6 - 15) + 10)
}
;
function U({initialPopup: e}) {
    let[t,n] = (0,
    g.useState)(!1)
      , [r,i] = (0,
    g.useState)(!1)
      , [_,v] = (0,
    g.useState)(!1)
      , [y,b] = (0,
    g.useState)(!1)
      , [x,S] = (0,
    g.useState)(!0)
      , [C,w] = (0,
    g.useState)(!1)
      , T = (0,
    g.useRef)(null)
      , [E,D] = (0,
    g.useState)(null)
      , O = (0,
    g.useRef)(null)
      , k = (0,
    g.useRef)({
        time: 0,
        progress: 0,
        pointerX: 0,
        pointerY: 0,
        targetX: 0,
        targetY: 0,
        moving: !0,
        dirty: !0,
        travelStart: null
    })
      , A = (0,
    g.useCallback)( () => {
        k.current.travelStart = null,
        document.documentElement.removeAttribute(`data-dt-entrance`),
        document.documentElement.removeAttribute(`data-dt-world`),
        i(!1),
        n(!1);
        try {
            sessionStorage.setItem(z, `1`)
        } catch {}
    }
    , []);
    (0,
    g.useEffect)( () => {
        let t = requestAnimationFrame( () => {
            let t = new URL(window.location.href)
              , r = performance.getEntriesByType(`navigation`)[0]
              , i = t.search === `?intro=1` && !t.hash;
            if (m(e) === `closed` || !i && (t.search || t.hash || r?.type === `back_forward`))
                return;
            let a = !1;
            try {
                a = sessionStorage.getItem(z) === `1`
            } catch {}
            (i || !a) && (document.documentElement.dataset.dtEntrance = `open`,
            n(!0))
        }
        );
        return () => {
            cancelAnimationFrame(t),
            document.documentElement.removeAttribute(`data-dt-entrance`),
            document.documentElement.removeAttribute(`data-dt-world`)
        }
    }
    , [e]),
    (0,
    g.useEffect)( () => {
        k.current.moving = x,
        k.current.dirty = !0
    }
    , [x]),
    (0,
    g.useEffect)( () => {
        if (!t || !E || !T.current)
            return;
        let e = T.current, n = !1, r, i = 0, a = performance.now(), o = 0, s = document.documentElement, c = new Image;
        c.decoding = `async`;
        let l = () => {
            let e = Math.min(window.devicePixelRatio || 1, 1.5)
              , t = Math.min(e, Math.sqrt(22e5 / (innerWidth * innerHeight)));
            E.width = Math.round(innerWidth * t),
            E.height = Math.round(innerHeight * t),
            r && r.draw(k.current)
        }
          , u = e => {
            e.pointerType !== `mouse` || k.current.travelStart !== null || (k.current.targetX = e.clientX / innerWidth * 2 - 1,
            k.current.targetY = e.clientY / innerHeight * 2 - 1)
        }
          , d = () => {
            k.current.targetX = 0,
            k.current.targetY = 0
        }
          , f = e => {
            e.preventDefault(),
            n || (v(!1),
            s.removeAttribute(`data-dt-world`),
            b(!0))
        }
          , p = t => {
            if (n)
                return;
            i = requestAnimationFrame(p);
            let s = Math.min((t - a) / 1e3, .25);
            if (a = t,
            document.hidden || !r)
                return;
            let c = k.current
              , l = c.travelStart !== null;
            if (c.moving) {
                c.time += s;
                let e = 1 - Math.exp(-s * 4.2);
                c.pointerX += (c.targetX - c.pointerX) * e,
                c.pointerY += (c.targetY - c.pointerY) * e
            }
            if (l) {
                c.progress = c.moving ? Math.min(1, (t - c.travelStart) / V) : 1,
                e.style.setProperty(`--dt-copy-opacity`, String(1 - H(c.progress / .18))),
                e.style.setProperty(`--dt-copy-offset`, `${H(c.progress / .2) * -24}px`);
                let n = document.querySelector(`.hero-art`);
                if (c.docking = H(c.progress / .64),
                n) {
                    let e = n.getBoundingClientRect()
                      , t = getComputedStyle(n).objectPosition.split(` `)
                      , r = e.width / e.height
                      , i = r > 1.5 ? 1 : r / 1.5
                      , a = r > 1.5 ? 1.5 / r : 1;
                    c.landingSpanX = innerWidth / e.width * i,
                    c.landingSpanY = innerHeight / e.height * a,
                    c.landingCenterX = (1 - i) * parseFloat(t[0]) / 100 + (innerWidth * .5 - e.x) / e.width * i,
                    c.landingCenterY = (1 - a) * parseFloat(t[1] || `50%`) / 100 + (innerHeight * .5 - e.y) / e.height * a
                }
                e.style.setProperty(`--dt-film-opacity`, String(1 - H((c.progress - .38) / .62))),
                e.style.setProperty(`--dt-travel`, String(c.progress))
            }
            let u = 1e3 / r.frameRate;
            (c.dirty || l || c.moving && t - o >= u - .5) && (r.draw(c),
            c.dirty = !1,
            o = t),
            l && c.progress >= 1 && A()
        }
        ;
        return c.onload = () => {
            if (!n)
                try {
                    r = P(E, c, y),
                    l(),
                    r.draw(k.current),
                    s.dataset.dtWorld = `ready`,
                    v(!0),
                    i = requestAnimationFrame(p)
                } catch {
                    y ? (w(!0),
                    s.removeAttribute(`data-dt-world`)) : b(!0)
                }
        }
        ,
        c.onerror = () => {
            n || (w(!0),
            s.removeAttribute(`data-dt-world`))
        }
        ,
        c.src = `/art/hero-towers.webp`,
        window.addEventListener(`resize`, l),
        window.addEventListener(`pointermove`, u, {
            passive: !0
        }),
        document.documentElement.addEventListener(`pointerleave`, d),
        E.addEventListener(`webglcontextlost`, f),
        () => {
            n = !0,
            cancelAnimationFrame(i),
            r?.dispose(),
            c.onload = null,
            c.onerror = null,
            window.removeEventListener(`resize`, l),
            window.removeEventListener(`pointermove`, u),
            document.documentElement.removeEventListener(`pointerleave`, d),
            E.removeEventListener(`webglcontextlost`, f)
        }
    }
    , [E, t, y, A]);
    function j(e=!0) {
        if (!e || !x || !_ || C) {
            A();
            return
        }
        k.current.travelStart === null && (k.current.targetX = 0,
        k.current.targetY = 0,
        k.current.travelStart = performance.now(),
        document.documentElement.dataset.dtEntrance = `entering`,
        i(!0))
    }
    return (0,
    L.jsxs)(L.Fragment, {
        children: [(0,
        L.jsx)(R, {
            motion: x,
            onToggle: () => S(e => !e),
            clock: k
        }), (0,
        L.jsx)(f, {
            open: t,
            onOpenChange: e => {
                e || j(!1)
            }
            ,
            children: (0,
            L.jsxs)(s, {
                children: [(0,
                L.jsx)(l, {
                    className: `dt-film-overlay`
                }), (0,
                L.jsxs)(c, {
                    ref: T,
                    className: `dt-film`,
                    "data-slot": `dialog-content`,
                    "data-entering": r,
                    "data-ready": _,
                    "data-motion": x ? `on` : `off`,
                    onOpenAutoFocus: e => {
                        e.preventDefault(),
                        O.current?.focus({
                            preventScroll: !0
                        })
                    }
                    ,
                    onCloseAutoFocus: e => {
                        e.preventDefault(),
                        document.querySelector(`#collection-title`)?.focus({
                            preventScroll: !0
                        })
                    }
                    ,
                    children: [(0,
                    L.jsx)(`div`, {
                        className: `dt-film-scene`,
                        "aria-hidden": `true`,
                        children: (0,
                        L.jsx)(`canvas`, {
                            ref: D,
                            className: `dt-world-canvas`
                        }, y ? `canvas` : `webgl`)
                    }), (0,
                    L.jsxs)(`div`, {
                        className: `dt-film-layout`,
                        children: [(0,
                        L.jsxs)(`header`, {
                            className: `dt-film-nav`,
                            children: [(0,
                            L.jsx)(`span`, {
                                className: `signature dt-film-logo`,
                                children: `DTBeats`
                            }), (0,
                            L.jsxs)(`button`, {
                                className: `dt-film-skip dt-film-glass`,
                                onClick: () => j(!1),
                                children: [`Skip intro `, (0,
                                L.jsx)(a, {
                                    size: 16,
                                    "aria-hidden": `true`
                                })]
                            })]
                        }), (0,
                        L.jsxs)(`div`, {
                            className: `dt-film-content`,
                            children: [(0,
                            L.jsxs)(`div`, {
                                className: `dt-film-copy`,
                                children: [(0,
                                L.jsxs)(`p`, {
                                    className: `dt-film-eyebrow`,
                                    children: [(0,
                                    L.jsx)(`span`, {
                                        "aria-hidden": `true`
                                    }), `DTBEATS / THE POP-UP`]
                                }), (0,
                                L.jsx)(u, {
                                    className: `dt-film-title`,
                                    children: `The Pop-Up`
                                }), (0,
                                L.jsxs)(d, {
                                    className: `dt-film-description`,
                                    children: [(0,
                                    L.jsx)(`span`, {
                                        className: `sr-only`,
                                        children: B
                                    }), (0,
                                    L.jsx)(`span`, {
                                        "aria-hidden": `true`,
                                        children: Array.from(B).map( (e, t) => (0,
                                        L.jsx)(`span`, {
                                            className: `dt-film-letter`,
                                            style: {
                                                "--letter-delay": `${550 + t * 24}ms`
                                            },
                                            children: e === ` ` ? `\xA0` : e
                                        }, t))
                                    })]
                                }), (0,
                                L.jsx)(`div`, {
                                    className: `dt-film-actions`,
                                    children: (0,
                                    L.jsxs)(`button`, {
                                        ref: O,
                                        className: `dt-film-primary`,
                                        onClick: () => j(),
                                        "aria-disabled": r,
                                        children: [(0,
                                        L.jsx)(`span`, {
                                            children: `Enter the Pop-Up`
                                        }), (0,
                                        L.jsx)(`span`, {
                                            className: `dt-film-arrow`,
                                            children: (0,
                                            L.jsx)(a, {
                                                size: 21,
                                                "aria-hidden": `true`
                                            })
                                        })]
                                    })
                                })]
                            }), (0,
                            L.jsxs)(`div`, {
                                className: `dt-film-aside`,
                                children: [(0,
                                L.jsxs)(`div`, {
                                    className: `dt-film-location`,
                                    children: [(0,
                                    L.jsx)(`span`, {
                                        children: `MISSISSAUGA, ONTARIO`
                                    }), (0,
                                    L.jsx)(`span`, {
                                        children: `43.5890° N / 79.6441° W`
                                    })]
                                }), (0,
                                L.jsxs)(`div`, {
                                    className: `dt-film-aside-controls`,
                                    children: [(0,
                                    L.jsxs)(`span`, {
                                        className: `dt-film-look`,
                                        children: [(0,
                                        L.jsx)(h, {
                                            size: 14,
                                            "aria-hidden": `true`
                                        }), `Move to look around`]
                                    }), !C && (0,
                                    L.jsxs)(`button`, {
                                        className: `dt-film-motion dt-film-glass`,
                                        onClick: () => S(e => !e),
                                        "aria-label": x ? `Pause scene motion` : `Play scene motion`,
                                        "aria-pressed": x,
                                        children: [x ? (0,
                                        L.jsx)(p, {
                                            size: 14,
                                            "aria-hidden": `true`
                                        }) : (0,
                                        L.jsx)(o, {
                                            size: 14,
                                            "aria-hidden": `true`
                                        }), (0,
                                        L.jsx)(`span`, {
                                            children: x ? `Pause motion` : `Play motion`
                                        })]
                                    })]
                                })]
                            })]
                        }), (0,
                        L.jsxs)(`div`, {
                            className: `dt-film-journey`,
                            "aria-hidden": `true`,
                            children: [(0,
                            L.jsx)(`span`, {}), (0,
                            L.jsx)(`i`, {}), (0,
                            L.jsx)(`span`, {})]
                        })]
                    }), (0,
                    L.jsx)(`p`, {
                        className: `sr-only`,
                        role: `status`,
                        children: r ? `Entering the Pop-Up.` : ``
                    })]
                })]
            })
        })]
    })
}
export {U as default};
