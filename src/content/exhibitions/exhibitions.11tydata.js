module.exports = {
  layout: "detail.njk",
  tags: ["exhibitions"],
  section_label: "Exhibition",

  eleventyComputed: {
    permalink: data => {
      if (data.status !== "public") return false;

      const fileName =
        data.page?.filePathStem?.split("/").filter(Boolean).pop() ||
        data.page?.fileSlug;

      return `/archive/${fileName}/index.html`;
    },

    eleventyExcludeFromCollections: data =>
      data.status !== "public"
  }
};
