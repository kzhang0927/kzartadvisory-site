// Site script. The cart and checkout are disabled until real checkout (Stripe)
// is ready — this file currently only handles the collection filter on the home page.
// To restore the cart, bring back src/cart.js from git history and re-add the
// Add to cart buttons, the cart nav button, and the window.SHOP data in build.mjs.
document.addEventListener("click", (e) => {
  const t = e.target;
  if (t.dataset.filter) {
    document.querySelectorAll("[data-filter]").forEach((b) => b.classList.toggle("active", b === t));
    document.querySelectorAll(".card").forEach((c) => (c.hidden = t.dataset.filter !== "all" && c.dataset.country !== t.dataset.filter));
  }
});
