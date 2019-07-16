/*import { JSDOM } from "jsdom";
var exposedProperties = ['window', 'navigator', 'document'];

const { document } = (new JSDOM(''), {url: "https://localhost/"}).window;

global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};*/

import { oneLineTrim } from "common-tags";
import { JSDOM } from "jsdom";

// Initialise JSDOM and propagate globals
// @see https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md#using-enzyme-with-jsdom
const dom = new JSDOM(
    oneLineTrim`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Title</title>
</head>
<body>
<div id="root"></div>
</body>
</html>`,
    {
        url: "https://localhost/",
    },
);

Object.assign(dom.window, {
    requestAnimationFrame,
    cancelAnimationFrame,
    matchMedia: () => {
        throw new Error("Not Implemented");
    },
});

Object.assign(global, {
    window: dom,
    document: dom.window.document,
    ...Object.entries(dom.window)
        .filter(([key]) => typeof (global)[key] === "undefined")
        .reduce(
            (acc, [key, value]) => ({
                ...acc,
                [key]: value,
            }),
            {},
        ),
    navigator: {
        userAgent: "node.js",
    },
});
