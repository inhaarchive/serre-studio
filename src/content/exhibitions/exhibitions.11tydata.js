module.exports = {
  layout: "detail.njk",
  tags: ["exhibitions"],
  section_label: "Exhibition",
  eleventyComputed: {
    permalink: data => data.status === "public" ? `/archive/${data.page.fileSlug}/index.html` : false,
    eleventyExcludeFromCollections: data => data.status !== "public"
  }
};
