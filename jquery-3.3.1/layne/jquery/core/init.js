define([
    "../core",
    "../var/document",
    "../var/isFunction"
], function (jQuery, document, isFunction) {

    var rootjQuery, init = jQuery.fn.init = function (selector, context, root) {

        root = root || rootjQuery;

        if (typeof selector === "string") {
            console.log(selector);
        } else if (selector.nodeType) {
            console.log(selector);
        } else if (isFunction(selector)) {
            return root.ready !== undefined ? root.ready(selector) : selector(jQuery);
        }
    };

    init.prototype = jQuery.fn;

    rootjQuery = jQuery(document);

    return init;
});