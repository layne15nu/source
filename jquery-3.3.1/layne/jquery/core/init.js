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
            this[0] = selector;
            this.length = 1;
            return this;
        } else if (isFunction(selector)) {
            return root.ready !== undefined ? root.ready(selector) : selector(jQuery);
        }
    };

    init.prototype = jQuery.fn;

    rootjQuery = jQuery(document);

    return init;
});