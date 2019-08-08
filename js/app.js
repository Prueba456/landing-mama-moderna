$(document).ready(function() {
    app.init();
});
var app = {
    init: function() {
        $(".arrow-scroll").click(function(event) {
            app.scrolling($.attr(this, "href"), 750);
            return false;
        });
        if (!isMobile.any) {
            _top_filtros = $("#mainmenu").offset().top;
            offset_filtros = _top_filtros - 0;
            $(window).scroll(function() {
                var fromTop = $(this).scrollTop();
                if (fromTop > offset_filtros) {
                    $("#mainmenu").addClass("fixed").css({
                        top: 0
                    });
                } else {
                    $("#mainmenu").removeClass("fixed").removeAttr("style");
                }
            });
        } else {
            if ($(window).width() < 768) {
                $("#main-menu li a").click(function(event) {
                    $(".nav-bar").toggleClass("collapse-movil");
                });
            }
            _top_filtros = $("#mainmenu").offset().top;
            offset_filtros = _top_filtros - 0;
            $(window).scroll(function() {
                var fromTop = $(this).scrollTop();
                if (fromTop > offset_filtros) {
                    $("#mainmenu").addClass("fixed").css({
                        top: 0
                    });
                } else {
                    $("#mainmenu").removeClass("fixed").removeAttr("style");
                }
            });

        }
        $(".lnk-menu").click(function(event) {
            event.preventDefault();
            app.scrolling($.attr(this, "href"), 750);
            event.stopPropagation();
        });
        $(".lnk-menuu").click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            $("html, body").animate({
                scrollTop: $($.attr(this, "href")).offset().top - $(".nav-bar").height()
            }, 750);
        });
        $(window).scroll(function(event) {
            var fromTop = $(this).scrollTop();
            var indice = $(".section").map(function(index, elem) {
                if (fromTop > $(this).offset().top - 110) {
                    return index;
                }
            });
            $("#mainmenu .menu li a").removeClass("active");
            $("#mainmenu .menu li a").eq(indice[indice.length - 1]).addClass("active");
        });
    },
    scrolling: function(_hash, _speed) {
        
        if ($(_hash).length > 0) {
            $("html, body").animate({
                scrollTop: $(_hash).offset().top
            }, _speed, function() {
                var item = $(".submenu li a").map(function(index, elem) {
                    if ($(this).attr("href") == _hash) {
                        return index;
                    }
                });
                $(".submenu li a").removeClass("active");
                $(".submenu li a").eq(item[0]).addClass("active");
            });
        }
        return false;
    }
};