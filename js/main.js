window.onload = function() {
    $("#container").animate({
        opacity: 1
    }, 500);
    $(".loader").remove();
};

$(document).ready(function (){
  setInterval(function(){
    if ($(".texto-message").hasClass("active")) {
      $(".texto-message").removeClass("active");
    }else{
      $(".texto-message").addClass("active");
    }
}, 5000);
});

$("#slider-menu").slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  variableWidth: true,
  responsive: [
  {
    breakpoint: 1030,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: false
    }
  },
  {
    breakpoint: 760,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
        variableWidth: false

    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
        variableWidth: false
    }
  }

]
});
$(".slider-header").slick({
  dots: false,
  infinite: true,
  speed: 700,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
  {
    breakpoint: 1025,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});
$(".cont-slider").slick({
  dots: false,
  infinite: true,
  speed: 700,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

$("#mama-moderna .slider-header .item.prim-1").click(function(){
    $("#mama-moderna .section").addClass("padding-50");
    $("#mama-moderna .slider-header .item").removeClass("active");
    $(this).addClass("active");
    $("#mainmenu").addClass("active-display");
    $("#mama-moderna .fondo-contegoria").css("display", "none");
    $("#mama-moderna .fondo-contegoria.makers").css("display", "block");
    $("#slider-menu li").removeClass("active");
    $("#slider-menu li.btn-1").addClass("active");
    $(".cont-slider").slick('unslick');
    $(".cont-slider").slick({
      dots: false,
      infinite: true,
      speed: 700,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
      $("#slider-menu").slick('slickGoTo', 0);
      $("html, body").animate({
      scrollTop: $(".scroll-item").offset().top - 0
             }, 850, "easeOutQuart");
});
$("#mama-moderna .slider-header .item.prim-2").click(function(){
    $("#mama-moderna .section").addClass("padding-50");
    $("#mama-moderna .slider-header .item").removeClass("active");
    $(this).addClass("active");
    $("#mainmenu").addClass("active-display");
    $("#mama-moderna .fondo-contegoria").css("display", "none");
    $("#mama-moderna .fondo-contegoria.batidoras").css("display", "block");
    $("#slider-menu li").removeClass("active");
    $("#slider-menu li.btn-2").addClass("active");
    $(".cont-slider").slick('unslick');
  $(".cont-slider").slick({
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
    $("#slider-menu").slick('slickGoTo', 1);
    $("html, body").animate({
    scrollTop: $(".scroll-item").offset().top - 0
           }, 850, "easeOutQuart");
});
$("#mama-moderna .slider-header .item.prim-3").click(function(){
    $("#mama-moderna .section").addClass("padding-50");
    $("#mama-moderna .slider-header .item").removeClass("active");
    $(this).addClass("active");
    $("#mainmenu").addClass("active-display");
    $("#mama-moderna .fondo-contegoria").css("display", "none");
    $("#mama-moderna .fondo-contegoria.licuadora").css("display", "block");
    $("#slider-menu li").removeClass("active");
    $("#slider-menu li.btn-3").addClass("active");
    $(".cont-slider").slick('unslick');
  $(".cont-slider").slick({
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
    $("#slider-menu").slick('slickGoTo', 2);
    $("html, body").animate({
    scrollTop: $(".scroll-item").offset().top - 0
           }, 850, "easeOutQuart");
});
$("#mama-moderna .slider-header .item.prim-4").click(function(){
    $("#mama-moderna .section").addClass("padding-50");
    $("#mama-moderna .slider-header .item").removeClass("active");
    $(this).addClass("active");
    $("#mainmenu").addClass("active-display");
    $("#mama-moderna .fondo-contegoria").css("display", "none");
    $("#mama-moderna .fondo-contegoria.extractor").css("display", "block");
    $("#slider-menu li").removeClass("active");
    $("#slider-menu li.btn-4").addClass("active");
    $(".cont-slider").slick('unslick');
  $(".cont-slider").slick({
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $("#slider-menu").slick('slickGoTo', 3);
  $("html, body").animate({
  scrollTop: $(".scroll-item").offset().top - 0
         }, 850, "easeOutQuart");
});
$("#slider-menu li.btn-1 a").click(function(){

    $("#mama-moderna .section").addClass("padding-50");
    $("#mama-moderna .slider-header .item").removeClass("active");
    $("#mama-moderna .slider-header .item.prim-1").addClass("active");
    $("#mama-moderna .fondo-contegoria").css("display", "none");
    $("#mama-moderna .fondo-contegoria.makers").css("display", "block");
    $("#slider-menu li").removeClass("active");
    $("#slider-menu li.btn-1").addClass("active");
    $(".cont-slider").slick('unslick');
  $(".cont-slider").slick({
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});
$("#slider-menu li.btn-2 a").click(function(){
 
    $("#mama-moderna .section").addClass("padding-50");
    $("#mama-moderna .slider-header .item").removeClass("active");
    $("#mama-moderna .slider-header .item.prim-2").addClass("active");
    $("#mama-moderna .fondo-contegoria").css("display", "none");
    $("#mama-moderna .fondo-contegoria.batidoras").css("display", "block");
    $("#slider-menu li").removeClass("active");
    $("#slider-menu li.btn-2").addClass("active");
    $(".cont-slider").slick('unslick');
  $(".cont-slider").slick({
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});
$("#slider-menu li.btn-3 a").click(function(){
  
    $("#mama-moderna .section").addClass("padding-50");
    $("#mama-moderna .slider-header .item").removeClass("active");
    $("#mama-moderna .slider-header .item.prim-3").addClass("active");
    $("#mama-moderna .fondo-contegoria").css("display", "none");
    $("#mama-moderna .fondo-contegoria.licuadora").css("display", "block");
    $("#slider-menu li").removeClass("active");
    $("#slider-menu li.btn-3").addClass("active");
    $(".cont-slider").slick('unslick');
  $(".cont-slider").slick({
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});
$("#slider-menu li.btn-4 a").click(function(){

    $("#mama-moderna .section").addClass("padding-50");
    $("#mama-moderna .slider-header .item").removeClass("active");
    $("#mama-moderna .slider-header .item.prim-4").addClass("active");
    $("#mama-moderna .fondo-contegoria").css("display", "none");
    $("#mama-moderna .fondo-contegoria.extractor").css("display", "block");
    $("#slider-menu li").removeClass("active");
    $("#slider-menu li.btn-4").addClass("active");
    $(".cont-slider").slick('unslick');
  $(".cont-slider").slick({
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

