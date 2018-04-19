define([
    "../core"
], function (jQuery) {
    jQuery.fn.ready = function (fn) {
        fn.call(document, jQuery);
    };
    jQuery.extend({
        isReady: false
    });
});