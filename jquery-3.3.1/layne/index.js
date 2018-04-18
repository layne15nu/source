define("main", [
    "../src/jquery",
    "./jquery/jquery"
], function ($, jQuery) {

    // $("body").css("background-color", "red");

    /*
      根据官方提供的API文档可知，jQuery提供了以下四种构建jQuery对象的方式
        - jQuery(expression, [context])
        - jQuery(html, [ownerDocument])
        - jQuery(elements)
        - jQuery(callback)
     */
    jQuery("body").css("background-color", "red");
    jQuery("<div><h1>Hello</h1></div>");
    jQuery("document");
    jQuery(function () {
        console.log("this is ready");
    });

});
