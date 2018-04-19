define([
    "./core",

    "./core/init"
], function (jQuery) {
    "use strict";
    jQuery.fn.extend({
        css: function (elem, name, extra, styles) {
            console.log(arguments);
        }
    });
    return jQuery;
});