import {
  v as m,
  r as d,
  j as l,
  F as g,
  T as f,
  a as t,
  B as h,
  V as p,
  H as C,
  I as N,
  N as R,
  b as L,
  c as I,
  d as j,
  e as k,
  f as E,
  R as O,
  g as V,
  C as B,
} from "./vendor.b54d7a98.js"
const D = function () {
  const o = document.createElement("link").relList

  if (o && o.supports && o.supports("modulepreload")) return
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) c(e)
  new MutationObserver((e) => {
    for (const r of e)
      if (r.type === "childList")
        for (const i of r.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && c(i)
  }).observe(document, {childList: !0, subtree: !0})
  function s(e) {
    const r = {}

    return (
      e.integrity && (r.integrity = e.integrity),
      e.referrerpolicy && (r.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    )
  }
  function c(e) {
    if (e.ep) return
    e.ep = !0
    const r = s(e)

    fetch(e.href, r)
  }
}

D()
const F = [
  {id: m(), name: "Medias", cantidad: 1},
  {id: m(), name: "caramelos", cantidad: 2},
  {id: m(), name: "Vitel Tone", cantidad: 3},
]

function H() {
  const [a, o] = d.exports.useState([]),
    [s, c] = d.exports.useState(""),
    [e, r] = d.exports.useState(""),
    [i, u] = d.exports.useState(1)

  d.exports.useEffect(() => {
    o(F)
  }, [])
  const b = () => {
      if (s.trim() === "") return r("El regalo no puede estar vacio"), !1
      for (let n of a)
        if (n.name.toLocaleLowerCase() === s.trim().toLocaleLowerCase())
          return r("El regalo ya existe"), !1

      return r(""), !0
    },
    y = (n) => {
      n.preventDefault(), b() && o([...a, {id: m(), name: s.trim(), cantidad: i}]), c(""), u(1)
    },
    x = () => {
      o([]), r(""), u(1)
    },
    S = (n) => {
      o(a.filter((w) => w.id !== n)), r(""), u(1)
    },
    v = a.map((n) =>
      l(
        g,
        {
          justifyContent: "space-between",
          w: "100%",
          children: [
            l(f, {
              children: [
                n.name,
                " ",
                t(f, {
                  as: "span",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                  children: "X",
                }),
                n.cantidad,
              ],
            }),
            t(h, {colorScheme: "red", size: "xs", onClick: () => S(n.id), children: "x"}),
          ],
        },
        n.id,
      ),
    )

  return t(g, {
    align: "center",
    justify: "center",
    minH: "100vh",
    w: "100%",
    children: l(p, {
      background: "white",
      boxShadow: "md",
      p: 4,
      w: "30%",
      children: [
        t(C, {children: "Regalos:"}),
        l(g, {
          as: "form",
          gap: 2,
          justifyContent: "flex-start",
          onSubmit: y,
          children: [
            t(N, {placeholder: "Regalo", value: s, onChange: (n) => c(n.target.value)}),
            l(R, {
              defaultValue: 1,
              min: 1,
              value: i,
              onChange: (n) => u(Number(n)),
              children: [t(L, {}), l(I, {children: [t(j, {}), t(k, {})]})],
            }),
            t(h, {colorScheme: "red", type: "submit", children: "Agregar"}),
          ],
        }),
        t(f, {color: "red", children: e}),
        t(p, {
          w: "100%",
          children:
            a.length !== 0
              ? v
              : t(f, {color: "gray.400", children: "No hay regalos Grinch!! agrega uno ."}),
        }),
        a.length !== 0 &&
          t(h, {colorScheme: "red", w: "100%", onClick: x, children: "Borrar todo"}),
      ],
    }),
  })
}
var M = "./assets/bg.6808d548.jpg",
  T = E({
    styles: {
      global: {
        body: {
          backgroundImage: `url(${M})`,
          backgroundSize: "cover",
          backgrounrRepeat: "no-repeat",
          w: "100%",
          minH: "100vh",
          fontSize: "16px",
        },
      },
    },
  })

O.render(
  t(V.StrictMode, {children: t(B, {theme: T, children: t(H, {})})}),
  document.getElementById("root"),
)
