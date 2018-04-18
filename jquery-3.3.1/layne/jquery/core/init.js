define([
    "../core"
], function (jQuery) {

    var init = jQuery.fn.init = function () {
    };

    init.prototype = jQuery.fn;

    return init;
});