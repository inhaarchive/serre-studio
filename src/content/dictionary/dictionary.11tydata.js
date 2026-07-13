module.exports = {
  layout: "detail.njk",
  tags: ["dictionary"],
  section_label: "Visual Dictionary",
  eleventyComputed: {
    permalink: data => data.status === "public" ? `/visual-dictionary/${data.page.fileSlug}/index.html` : false,
    eleventyExcludeFromCollections: data => data.status !== "public"
  }
};
