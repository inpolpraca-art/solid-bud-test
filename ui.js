const UI = (() => {
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  function setLanguage(lang) {
    const dict = translations[lang] || translations.pl;
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(el => {
      const value = dict[el.dataset.i18n];
      if (value !== undefined) el.textContent = value;
    });
    $$("[data-i18n-html]").forEach(el => {
      const value = dict[el.dataset.i18nHtml];
      if (value !== undefined) el.innerHTML = value;
    });
    $$("[data-i18n-placeholder]").forEach(el => {
      const value = dict[el.dataset.i18nPlaceholder];
      if (value !== undefined) el.placeholder = value;
    });
    $$("[data-lang]").forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
    localStorage.setItem("solidbud-language", lang);
  }
  function initMenu() {
    const toggle = $("#menuToggle"), nav = $("#mainNav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("open", open);
    });
    $$("#mainNav a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false");
    }));
  }
  function initFilters() {
    const buttons = $$(".filter-btn"), cards = $$(".gallery-item");
    buttons.forEach(btn => btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.toggle("active", b === btn));
      cards.forEach(card => card.classList.toggle("hidden", btn.dataset.filter !== "all" && card.dataset.category !== btn.dataset.filter));
    }));
  }
  function initLightbox() {
    const box = $("#lightbox"), image = $("#lightboxImage");
    const items = $$(".gallery-item"), close = $("#lightboxClose");
    let index = 0;
    const show = i => { index = (i + items.length) % items.length; image.src = items[index].dataset.full; image.alt = items[index].querySelector("img").alt; box.classList.add("open"); box.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden"; };
    const hide = () => { box.classList.remove("open"); box.setAttribute("aria-hidden","true"); document.body.style.overflow=""; };
    items.forEach((item,i) => item.addEventListener("click", () => show(i)));
    close.addEventListener("click",hide);
    $("#lightboxPrev").addEventListener("click",()=>show(index-1));
    $("#lightboxNext").addEventListener("click",()=>show(index+1));
    box.addEventListener("click",e=>{if(e.target===box)hide();});
    document.addEventListener("keydown",e=>{if(!box.classList.contains("open"))return;if(e.key==="Escape")hide();if(e.key==="ArrowLeft")show(index-1);if(e.key==="ArrowRight")show(index+1);});
  }
  return { $, $$, setLanguage, initMenu, initFilters, initLightbox };
})();