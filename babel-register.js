
/**
 * This file needs to Vanilla JavaScript that can be executed with the current Node LTS as Babel cannot know what
 * transformations it would need to apply before reading this file
 */

const { addPath } = require("app-module-path");

// Tell Babel to compile all JS/TS extensions
require("@babel/register")({
    extensions: [".js", ".jsx", ".ts", ".tsx"],
});

// Polyfill any ESNext libraries not available
require("@babel/polyfill");
require("isomorphic-fetch");
require("raf/polyfill");

addPath(__dirname);
