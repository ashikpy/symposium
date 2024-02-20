(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) r(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const l of t.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
      t
    );
  }
  function r(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = i(e);
    fetch(e.href, t);
  }
})();
function n() {
  let s = document.querySelector(".header__bars"),
    o = document.querySelector(".moblie-nav__close"),
    i = document.querySelector(".moblie-nav__container"),
    r = document.querySelector(".header"),
    e = document.querySelector(".hero"),
    t = document.querySelector(".hero__btn");
  s.addEventListener("click", () => {
    i.classList.add("mobile-nav__toggle"),
      (r.style.visibility = "hidden"),
      (e.style.visibility = "hidden"),
      (t.style.opacity = "0");
  }),
    i.addEventListener("click", () => {
      i.classList.remove("mobile-nav__toggle"),
        (r.style.visibility = "visible"),
        (e.style.visibility = "visible"),
        (t.style.opacity = "100");
    }),
    o.addEventListener("click", () => {
      i.classList.remove("mobile-nav__toggle"),
        (r.style.visibility = "visible"),
        (e.style.visibility = "visible");
    });
}
n();
