// Ember Page Reader — content script: page -> clean data (title, text, links, images).
(() => {
  const clone = document.body ? document.body.cloneNode(true) : null;
  if (clone) clone.querySelectorAll("script,style,noscript,svg").forEach(n => n.remove());
  const text = clone ? clone.innerText.replace(/\n{3,}/g, "\n\n").trim() : "";
  const links = [...document.querySelectorAll("a[href]")].slice(0, 200).map(a => ({ t: (a.innerText || "").trim().slice(0, 120), href: a.href }));
  const images = [...document.querySelectorAll("img")].slice(0, 100).map(i => ({ alt: i.alt || "", src: i.currentSrc || i.src || "" }));
  window.__emberPageData = { title: document.title, url: location.href, capturedAt: new Date().toISOString(), textLength: text.length, text: text.slice(0, 60000), links, images };
})();
