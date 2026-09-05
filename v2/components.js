/* Optional, dependency-free enhancements. Unmarked pages are untouched. */
(() => {
  "use strict";
  if (window.JehlpUI) return;
  const initialized = new WeakMap();
  let nextId = 0;
  const once = (element, name) => {
    const names = initialized.get(element) || new Set();
    if (names.has(name)) return false;
    names.add(name);
    initialized.set(element, names);
    return true;
  };
  const frame = (callback) => {
    let pending = false;
    return () => {
      if (pending) return;
      pending = true;
      window.requestAnimationFrame(() => { pending = false; callback(); });
    };
  };
  const hashTarget = (link) => {
    if (link.origin !== location.origin || link.pathname !== location.pathname || link.search !== location.search) return null;
    try { return document.getElementById(decodeURIComponent(link.hash.slice(1))); }
    catch { return null; }
  };
  const followAnchor = (event, link, target) => {
    if (event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
    event.preventDefault();
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    target.scrollIntoView({ block: "start" });
    if (location.hash !== link.hash) history.pushState(null, "", link.hash);
    return true;
  };

  function disclosure(button) {
    const region = document.getElementById(button.getAttribute("aria-controls"));
    if (!region || !once(button, "disclosure")) return;
    const narrow = window.matchMedia(button.dataset.disclosure || "(max-width: 42rem)");
    const closers = [...region.querySelectorAll("[data-disclosure-close]")];
    function setOpen(open, returnFocus = false) {
      const visible = !narrow.matches || open;
      region.hidden = !visible;
      button.setAttribute("aria-expanded", String(visible));
      if (returnFocus && narrow.matches) button.focus();
    }
    function layout() {
      const focusInside = region.contains(document.activeElement);
      const toggleFocused = document.activeElement === button;
      button.hidden = !narrow.matches;
      closers.forEach((close) => { close.hidden = !narrow.matches; });
      setOpen(false, focusInside);
      if (toggleFocused && !narrow.matches) {
        region.setAttribute("tabindex", "-1");
        region.focus({ preventScroll: true });
      }
    }
    button.addEventListener("click", () => setOpen(region.hidden));
    region.addEventListener("click", (event) => {
      if (!narrow.matches) return;
      const close = event.target.closest("[data-disclosure-close]");
      if (close) {
        setOpen(false, true);
        const target = document.getElementById(close.dataset.disclosureClose);
        if (target) { target.setAttribute("tabindex", "-1"); target.focus(); }
        return;
      }
      const link = event.target.closest("a[href]");
      const target = link && hashTarget(link);
      if (target && !event.button && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
        setOpen(false);
        followAnchor(event, link, target);
      }
    });
    const escape = (event) => {
      if (event.key === "Escape" && narrow.matches && !region.hidden) {
        event.preventDefault();
        setOpen(false, true);
      }
    };
    region.addEventListener("keydown", escape);
    button.addEventListener("keydown", escape);
    narrow.addEventListener("change", layout);
    layout();
  }

  function sectionNav(nav) {
    if (!once(nav, "nav")) return;
    const entries = [...nav.querySelectorAll("a[href]")].map((link) => ({ link, target: hashTarget(link) })).filter((entry) => entry.target);
    if (!entries.length) return;
    let active;
    const update = frame(() => {
      const offset = nav.offsetHeight + 24;
      nav.parentElement.style.setProperty("--section-offset", `${offset}px`);
      let current = entries[0];
      for (const entry of entries) if (entry.target.getBoundingClientRect().top <= offset + 8) current = entry;
      if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) current = entries.at(-1);
      for (const entry of entries) {
        if (entry === current) entry.link.setAttribute("aria-current", "location");
        else entry.link.removeAttribute("aria-current");
      }
      if (active !== current && !nav.contains(document.activeElement)) {
        const linkRect = current.link.getBoundingClientRect(), navRect = nav.getBoundingClientRect();
        if (linkRect.left < navRect.left || linkRect.right > navRect.right) nav.scrollLeft += linkRect.left - navRect.left - (nav.clientWidth - linkRect.width) / 2;
      }
      active = current;
    });
    nav.addEventListener("click", (event) => {
      const entry = entries.find(({ link }) => link === event.target.closest("a"));
      if (entry) followAnchor(event, entry.link, entry.target);
    });
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);
    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(update);
      observer.observe(nav);
      entries.forEach(({ target }) => observer.observe(target));
    }
    update();
  }

  function scrollRegion(region) {
    if (!once(region, "scroll")) return;
    const hint = document.createElement("p");
    hint.className = "ui-scroll-hint";
    hint.id = `ui-scroll-hint-${++nextId}`;
    hint.hidden = true;
    region.before(hint);
    const description = region.getAttribute("aria-describedby") || "";
    const update = frame(() => {
      const horizontal = region.scrollWidth > region.clientWidth + 2;
      const vertical = region.scrollHeight > region.clientHeight + 2;
      hint.hidden = !horizontal;
      region.dataset.overflow = String(horizontal);
      if (horizontal || vertical) {
        region.setAttribute("tabindex", "0");
        region.setAttribute("role", "region");
      } else {
        region.removeAttribute("tabindex");
        region.removeAttribute("role");
      }
      if (horizontal) {
        const left = region.scrollLeft > 2;
        const right = region.scrollLeft + region.clientWidth < region.scrollWidth - 2;
        hint.textContent = left && right ? "← More columns on either side →" : left ? "← More columns to the left" : "More columns to the right →";
        region.setAttribute("aria-describedby", `${description} ${hint.id}`.trim());
      } else if (description) region.setAttribute("aria-describedby", description);
      else region.removeAttribute("aria-describedby");
    });
    region.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    if ("ResizeObserver" in window) {
      const resize = new ResizeObserver(update);
      resize.observe(region);
      const observeChildren = () => { for (const child of region.children) resize.observe(child); update(); };
      new MutationObserver(observeChildren).observe(region, { childList: true });
      observeChildren();
    }
    update();
  }

  function dialog(element) {
    if (!once(element, "dialog")) return;
    const outside = (event) => {
      const rect = element.getBoundingClientRect();
      return event.target === element && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom);
    };
    let beganOutside = false;
    element.addEventListener("pointerdown", (event) => { beganOutside = outside(event); });
    element.addEventListener("click", (event) => {
      if (beganOutside && outside(event)) element.close();
      beganOutside = false;
    });
  }

  function copyCode(pre) {
    if (!once(pre, "copy")) return;
    const code = pre.querySelector("code");
    if (!code) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "ui-copy";
    button.textContent = "Copy";
    button.setAttribute("aria-label", "Copy code block");
    button.setAttribute("aria-live", "polite");
    let timer;
    button.addEventListener("click", async () => {
      window.clearTimeout(timer);
      try {
        await navigator.clipboard.writeText(code.textContent);
        button.textContent = "Copied";
        button.setAttribute("aria-label", "Copied code block");
      } catch {
        const range = document.createRange();
        range.selectNodeContents(code);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        button.textContent = "Select and copy";
        button.setAttribute("aria-label", "Clipboard unavailable; code selected for manual copying");
      }
      timer = window.setTimeout(() => { button.textContent = "Copy"; button.setAttribute("aria-label", "Copy code block"); }, 1800);
    });
    pre.append(button);
  }

  function enhance(root = document) {
    for (const [selector, setup] of [["[data-disclosure]", disclosure], ["[data-section-nav]", sectionNav], ["[data-scroll-region]", scrollRegion], ["dialog[data-dialog]", dialog], ["pre[data-copy-code]", copyCode]]) {
      if (root.matches?.(selector)) setup(root);
      root.querySelectorAll(selector).forEach(setup);
    }
  }
  window.JehlpUI = Object.freeze({ enhance });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => enhance(), { once: true });
  else enhance();
})();
