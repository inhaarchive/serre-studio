module.exports = {
  layout: "detail.njk",
  tags: ["notes"],
  section_label: "Research Notes",
  eleventyComputed: {
    permalink: data => data.status === "public" ? `/research-notes/${data.page.fileSlug}/index.html` : false,
    eleventyExcludeFromCollections: data => data.status !== "public"
  }
};
