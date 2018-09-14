/**
 * Global variables
 */
"use strict";
(function () {
  var userAgent = navigator.userAgent.toLowerCase(),
    initialDate = new Date(),

    $document = $(document),
    $window = $(window),
    $html = $("html"),
    $body = $("body"),

    isDesktop = $html.hasClass("desktop"),
    isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
    isRtl = $html.attr("dir") === "rtl",
    isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1]) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false,
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    onloadCaptchaCallback,
    isNoviBuilder = window.xMode,

    plugins = {



    };
  $(function () {
    /**
     * parallax scroll function
     */
    if($('[data-parallax-scroll]').length && !isNoviBuilder && !isMobile){
      ParallaxScroll.init();
    }
  });


}());

