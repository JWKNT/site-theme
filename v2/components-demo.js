/* Working examples for components.html; never loaded by consumer pages. */
(() => {
  const form = document.querySelector("#component-filter");
  const entries = [...document.querySelectorAll("#component-patterns > li")];
  function filter() {
    const query = form.elements.query.value.trim().toLowerCase();
    const surface = form.elements.surface.value;
    let count = 0;
    for (const entry of entries) {
      entry.hidden = !(entry.textContent.toLowerCase().includes(query) && (surface === "all" || entry.dataset.surface === surface));
      if (!entry.hidden) count++;
    }
    document.querySelector("#component-count").textContent = `${count} of ${entries.length} patterns`;
    document.querySelector("#component-empty").hidden = count !== 0;
  }
  form.addEventListener("input", filter);
  form.addEventListener("submit", (event) => event.preventDefault());
  form.addEventListener("reset", () => window.requestAnimationFrame(filter));
  document.querySelector("#component-open-dialog").addEventListener("click", () => document.querySelector("#component-dialog").showModal());
})();
