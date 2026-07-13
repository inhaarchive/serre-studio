module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });

  eleventyConfig.addFilter("readableDate", (value) => {
    if (!value) return "";
    const date = new Date(value);
    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric", month: "2-digit", day: "2-digit"
    }).format(date);
  });

  const publicOnly = (collectionApi, tag) => collectionApi
    .getFilteredByTag(tag)
    .filter((item) => item.data.status === "public")
        .sort((a, b) => {
      const ao = Number(a.data.order ?? 9999);
      const bo = Number(b.data.order ?? 9999);
      if (ao !== bo) return ao - bo;
      return new Date(b.data.date) - new Date(a.data.date);
    });

  eleventyConfig.addCollection("publicExhibitions", api => publicOnly(api, "exhibitions"));
  eleventyConfig.addCollection("publicDictionary", api => publicOnly(api, "dictionary"));
  eleventyConfig.addCollection("publicNotes", api => publicOnly(api, "notes"));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
