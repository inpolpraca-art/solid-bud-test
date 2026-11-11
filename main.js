document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("solidbud-language");
  UI.setLanguage(saved && translations[saved] ? saved : "pl");
  UI.$$("[data-lang]").forEach(btn => btn.addEventListener("click", () => UI.setLanguage(btn.dataset.lang)));
  UI.initMenu();
  UI.initFilters();
  UI.initLightbox();
  UI.$("#year").textContent = new Date().getFullYear();

  const form = UI.$("#contactForm");
  form.addEventListener("submit", event => {
    event.preventDefault();
    const lang = document.documentElement.lang || "pl";
    const dict = translations[lang];
    if (!form.reportValidity()) {
      UI.$("#formStatus").textContent = dict.formError;
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent("Zapytanie ze strony SolidBud");
    const body = encodeURIComponent(
      `Imię: ${data.get("name")}\nKontakt: ${data.get("reply")}\nUsługa: ${data.get("service") || "-"}\n\nOpis:\n${data.get("message") || "-"}`
    );
    UI.$("#formStatus").textContent = dict.formSuccess;
    // Zmień adres poniżej na prawdziwy adres wykonawcy.
    window.location.href = `mailto:kontakt@solidbud.pl?subject=${subject}&body=${body}`;
  });
});