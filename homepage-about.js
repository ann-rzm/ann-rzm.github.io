(function () {
  if (window.location.pathname !== "/") return;

  function buildWritingOverview() {
    const section = document.querySelector(
      "main .writing-screen, main .commentary-screen",
    );
    if (!section || section.querySelector(".writing-paths")) return;

    section.id = "writing";
    section.className = "screen writing-screen";
    section.setAttribute("aria-labelledby", "writing-heading");
    section.innerHTML =
      '<div class="screen-inner">' +
      '<div class="writing-intro">' +
      '<span class="eyebrow">04 · PUBLIC WRITING</span>' +
      '<h2 id="writing-heading">Writing</h2>' +
      "<p>Two complementary forms: developed public arguments and shorter notebook observations.</p>" +
      "</div>" +
      '<div class="writing-paths">' +
      '<a class="writing-path" href="/commentary/">' +
      '<span class="eyebrow">12 LONG-FORM ESSAYS</span>' +
      "<h3>Commentary</h3>" +
      "<p>Sustained essays on political life, philosophy, technology, culture, and social structure.</p>" +
      "<b>Explore commentary ↗</b>" +
      "</a>" +
      '<a class="writing-path" href="/notes/">' +
      '<span class="eyebrow">34 NOTEBOOK PIECES</span>' +
      "<h3>Notes</h3>" +
      "<p>Shorter observations where daily life, public questions, and unfinished ideas meet.</p>" +
      "<b>Explore notes ↗</b>" +
      "</a>" +
      "</div>" +
      "</div>";
  }

  function mergeHomepageIntro() {
    const hero = document.querySelector("main .hero-screen");
    if (!hero) return;

    buildWritingOverview();

    if (hero.dataset.aboutMerged === "true") return;

    hero.dataset.aboutMerged = "true";
    document.body.classList.add("homepage-about-merged");

    const eyebrow = hero.querySelector(".hero-copy .eyebrow");
    const deck = hero.querySelector(".hero-deck");
    const actions = hero.querySelector(".action-row");
    const caption = hero.querySelector(".hero-portrait figcaption");

    if (eyebrow) eyebrow.textContent = "01 · ABOUT";
    if (deck) {
      deck.textContent =
        "I examine how institutions turn human lives into categories, judgments, and public decisions.";
    }
    if (caption) caption.textContent = "BEIJING, CHINA · 2026";

    if (actions) {
      let facts = hero.querySelector(".hero-facts");
      if (!facts) {
        facts = document.createElement("div");
        facts.className = "hero-facts";
        actions.before(facts);
      }
      facts.innerHTML =
        '<div><span>Based in</span><strong>Beijing, China</strong></div>' +
        '<div><span>Fields</span><strong>Politics · Political Economy · Technology & AI · Education · Culture</strong></div>' +
        '<div><span>Contact</span><a href="mailto:rongze_rrr@outlook.com">rongze_rrr@outlook.com</a></div>';
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mergeHomepageIntro, {
      once: true,
    });
  } else {
    mergeHomepageIntro();
  }

  new MutationObserver(mergeHomepageIntro).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
