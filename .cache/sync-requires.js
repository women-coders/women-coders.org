// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-category-template-js": preferDefault(require("/Users/arwalokhandwala/personal-projects/women-coders.org/src/templates/CategoryTemplate.js")),
  "component---src-templates-post-template-js": preferDefault(require("/Users/arwalokhandwala/personal-projects/women-coders.org/src/templates/PostTemplate.js")),
  "component---src-templates-page-template-js": preferDefault(require("/Users/arwalokhandwala/personal-projects/women-coders.org/src/templates/PageTemplate.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/arwalokhandwala/personal-projects/women-coders.org/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/arwalokhandwala/personal-projects/women-coders.org/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/arwalokhandwala/personal-projects/women-coders.org/src/pages/index.js")),
  "component---src-pages-search-js": preferDefault(require("/Users/arwalokhandwala/personal-projects/women-coders.org/src/pages/search.js"))
}

