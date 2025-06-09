const fs = require("fs");
const { Buffer } = require("node:buffer");

module.exports = function (eleventyConfig) {
  /**
   * === Asset Management ===
   * Copy static assets (e.g., CSS, images) to the output folder.
   */
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/assets/sitemap.xml": "sitemap.xml" });
  eleventyConfig.addPassthroughCopy({ "src/assets/robots.txt": "robots.txt" });

  /**
   * === Shortcodes ===
   * Add a shortcode for the current year, useful for footers or other dynamic content.
   */
  eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

  /**
   * === Layout Aliases ===
   * Define aliases for layouts to keep the front matter cleaner and more readable.
   */
  eleventyConfig.addLayoutAlias("home", "home.njk");
  eleventyConfig.addLayoutAlias("about", "about.njk");
  eleventyConfig.addLayoutAlias("work", "work.njk");
  eleventyConfig.addLayoutAlias("interests", "interests.njk");
  eleventyConfig.addLayoutAlias("connect", "connect.njk");

  /**
   * === Custom Filters ===
   * Add a Base64 encoding filter for obfuscating sensitive data (e.g., email, phone numbers).
   * This ensures encoded strings are injected into templates to be decoded client-side via JavaScript.
   */
  eleventyConfig.addFilter("base64", (value) => {
    if (typeof value !== "string") {
      throw new Error("Base64 filter expects a string input.");
    }
    return Buffer.from(value).toString("base64");
  });

  /**
   * === 404 Page Handling ===
   * Serve the custom 404.html without redirecting in BrowserSync during local development.
   */
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.existsSync("_site/404.html")
          ? fs.readFileSync("_site/404.html")
          : "404 Page Not Found";

        browserSync.addMiddleware("*", (req, res) => {
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  /**
   * === Eleventy Directories ===
   * Configure source, includes, layouts, and output directories.
   */
  return {
    dir: {
      input: "src",          // Source directory for content and templates
      includes: "_includes", // Directory for reusable template parts
      layouts: "_includes/layouts", // Directory for layouts
      output: "_site",       // Output directory for the built site
    },
    // Set Nunjucks as the templating engine for Markdown files
    // This ensures Nunjucks features (like specific filters or syntax in front matter)
    // are processed correctly before Markdown conversion.
    markdownTemplateEngine: "njk",
    // Optional: Also set for HTML files if you use Nunjucks in .html files
    // htmlTemplateEngine: "njk",
  };
};
