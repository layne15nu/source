define([], function () {

    "use strict";

    var version = "3.3.1",
        jQuery = function (selector, context) {
            return new jQuery.fn.init(selector, context);
        };

    jQuery.fn = jQuery.prototype = {
        version: version,
        constructor: jQuery
    };

    // 实现jQuery的extend方法
    jQuery.extend = jQuery.fn.extend = function () {
        var options, name, src, copy, target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // 如果参数只有一个对象，则将它与jQuery自身合并
        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    if (src === copy) {
                        continue;
                    }

                    if (deep) {

                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
    };

    return jQuery;
});