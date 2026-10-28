// opens off-site links in a new tab, keeps links within the site in the same tab
export const external = (href: string) =>
  href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
