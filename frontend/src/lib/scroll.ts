export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const header = document.querySelector("header");
  const offset = (header?.getBoundingClientRect().height ?? 80) + 16;
  const top = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export function sectionIdFromHref(href: string) {
  const hash = href.includes("#") ? href.split("#")[1] : href.replace("#", "");
  return hash || "home";
}
