'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./remark-html-directives.cjs.prod.js");
} else {
  module.exports = require("./remark-html-directives.cjs.dev.js");
}
