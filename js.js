var menuu= 0;
var slidenum = 1;
var myVar;

function loading() {
    myVar = setTimeout(showPage, 3000);
}
$('body').on('mousewheel DOMMouseScroll', function(event){

    var delta = Math.max(-1, Math.min(1, (event.originalEvent.wheelDelta || -event.originalEvent.detail)));

    $(this).scrollLeft( $(this).scrollLeft() - ( delta * 30 ) );
    event.preventDefault();

});
function showPage() {
  document.getElementById("spinnerstart").style.display = "none";
  document.getElementById("everything").style.display = "block";
}
showSlides(slidenum);
$("#chiudi").on("click", function chiudi() {
  $("#cinema").addClass("spento");
  $("#cinema").removeClass("acceso");
})
$("#photo2").on("click", function cinema() {
  $("#cinema").addClass("acceso");
  $("#cinema").removeClass("spento");
  currentSlide(2);
})
$("#photo1").on("click", function cinema() {
  $("#cinema").addClass("acceso");
  $("#cinema").removeClass("spento");
  currentSlide(1);
})
$("#photo3").on("click", function cinema() {
  $("#cinema").addClass("acceso");
  $("#cinema").removeClass("spento");
  currentSlide(3);
})
$("#photo4").on("click", function cinema() {
  $("#cinema").addClass("acceso");
  $("#cinema").removeClass("spento");
  currentSlide(4);
})
$("#photo5").on("click", function cinema() {
  $("#cinema").addClass("acceso");
  $("#cinema").removeClass("spento");
  currentSlide(5);
})
$("#photo6").on("click", function cinema() {
  $("#cinema").addClass("acceso");
  $("#cinema").removeClass("spento");
  currentSlide(6);
})
$("#photo7").on("click", function cinema() {
  $("#cinema").addClass("acceso");
  $("#cinema").removeClass("spento");
  currentSlide(7);
})
$("#photo8").on("click", function cinema() {
  $("#cinema").addClass("acceso");
  $("#cinema").removeClass("spento");
  currentSlide(8);
})
$("#photo9").on("click", function cinema() {
  $("#cinema").addClass("acceso");
  $("#cinema").removeClass("spento");
  currentSlide(9);
})
$("#photo11").on("click", function cinema() {
  $("#cinema").addClass("acceso");
  $("#cinema").removeClass("spento");
  currentSlide(11);
})
$("#photo10").on("click", function cinema() {
  $("#cinema").addClass("acceso");
  $("#cinema").removeClass("spento");
  currentSlide(10);
})
$("#photo12").on("click", function cinema() {
  $("#cinema").addClass("acceso");
  $("#cinema").removeClass("spento");
  currentSlide(12);
})
$("#photo13").on("click", function cinema() {
  $("#cinema").addClass("acceso");
  $("#cinema").removeClass("spento");
  currentSlide(13);
})
$("#photo14").on("click", function cinema() {
  $("#cinema").addClass("acceso");
  $("#cinema").removeClass("spento");
  currentSlide(14);
})
$("#photo15").on("click", function cinema() {
  $("#cinema").addClass("acceso");
  $("#cinema").removeClass("spento");
  currentSlide(15);
})
$("#photo16").on("click", function cinema() {
  $("#cinema").addClass("acceso");
  $("#cinema").removeClass("spento");
  currentSlide(16);
})
$("#photo17").on("click", function cinema() {
  $("#cinema").addClass("acceso");
  $("#cinema").removeClass("spento");
  currentSlide(17);
})
$("#photo18").on("click", function cinema() {
  $("#cinema").addClass("acceso");
  $("#cinema").removeClass("spento");
  currentSlide(18);
})
function plusSlides(n) {
  showSlides(slidenum += n);
}
function currentSlide(n) {
  showSlides(slidenum = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slidenum = 1}
  if (n < 1) {slidenum = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slidenum-1].style.display = "block";
}
$("#home").on("click", function scrolladaisu() {
  $("html,body").animate({scrollLeft: "0px"}, 2000);
  $("#menu").removeClass("mostra");
  $("#menu").addClass("nascondi");
  $("#midstripe").removeClass("movemid");
  $("#topstripe").removeClass("x1");
  $("#botstripe").removeClass("x2");
  menuu= 0;
})
$("#titolo").on("click", function scrolladaisu2() {
  $("html,body").animate({scrollLeft: "0px"}, 2000);
  $("#menu").removeClass("mostra");
  $("#menu").addClass("nascondi");
  $("#midstripe").removeClass("movemid");
  $("#topstripe").removeClass("x1");
  $("#botstripe").removeClass("x2");
  menuu= 0;
})
$("#ole").on("click", function scrolladaisu3() {
  $("html,body").animate({scrollLeft: "620px"}, 2000);
  $("#menu").removeClass("mostra");
  $("#menu").addClass("nascondi");
  $("#midstripe").removeClass("movemid");
  $("#topstripe").removeClass("x1");
  $("#botstripe").removeClass("x2");
  menuu= 0;
})
$("#videos").on("click", function scrolladaisu4() {
  $("html,body").animate({scrollLeft: "3500px"}, 2000);
  $("#menu").removeClass("mostra");
  $("#menu").addClass("nascondi");
  $("#midstripe").removeClass("movemid");
  $("#topstripe").removeClass("x1");
  $("#botstripe").removeClass("x2");
  menuu= 0;
})
$("#graphics").on("click", function scrolladaisu4() {
  $("html,body").animate({scrollLeft: "2280px"}, 2000);
  $("#menu").removeClass("mostra");
  $("#menu").addClass("nascondi");
  $("#midstripe").removeClass("movemid");
  $("#topstripe").removeClass("x1");
  $("#botstripe").removeClass("x2");
  menuu= 0;
})
function tornaback() {
  if($("#photo1").css({'top':"+20%"})) {
    $("#photo1").animate({'top':"20%"},500,"linear",);
  }
}
function tornaback2() {
  if($("#photo2").css({'top':"+20%"})) {
    $("#photo2").animate({'top':"20%"},500,"linear",);
  }
}
function tornaback3() {
  if($("#photo3").css({'top':"+20%"})) {
    $("#photo3").animate({'top':"20%"},500,"linear",);
  }
}
function tornaback4() {
  if($("#photo4").css({'top':"+20%"})) {
    $("#photo4").animate({'top':"20%"},500,"linear",);
  }
}
function tornaback5() {
  if($("#photo5").css({'top':"+20%"})) {
    $("#photo5").animate({'top':"20%"},500,"linear",);
  }
}
function tornaback6() {
  if($("#photo6").css({'top':"+20%"})) {
    $("#photo6").animate({'top':"20%"},500,"linear",);
  }
}
function tornaback7() {
  if($("#photo7").css({'top':"+20%"})) {
    $("#photo7").animate({'top':"20%"},500,"linear",);
  }
}
function tornaback8() {
  if($("#photo8").css({'top':"+20%"})) {
    $("#photo8").animate({'top':"20%"},500,"linear",);
  }
}
function tornaback9() {
  if($("#photo9").css({'top':"+20%"})) {
    $("#photo9").animate({'top':"20%"},500,"linear",);
  }
}
function tornaback10() {
  if($("#photo10").css({'top':"+20%"})) {
    $("#photo10").animate({'top':"20%"},500,"linear",);
  }
}
function tornaback11() {
  if($("#photo11").css({'top':"+20%"})) {
    $("#photo11").animate({'top':"20%"},500,"linear",);
  }
}
function tornaback12() {
  if($("#photo12").css({'top':"+20%"})) {
    $("#photo12").animate({'top':"20%"},500,"linear",);
  }
}
function tornaback13() {
  if($("#photo13").css({'top':"+20%"})) {
    $("#photo13").animate({'top':"20%"},500,"linear",);
  }
}
function tornaback14() {
  if($("#photo14").css({'top':"+20%"})) {
    $("#photo14").animate({'top':"20%"},500,"linear",);
  }
}
function tornaback15() {
  if($("#photo15").css({'top':"+20%"})) {
    $("#photo15").animate({'top':"20%"},500,"linear",);
  }
}
function tornaback16() {
  if($("#photo16").css({'top':"+20%"})) {
    $("#photo16").animate({'top':"20%"},500,"linear",);
  }
}
function tornaback17() {
  if($("#photo17").css({'top':"+20%"})) {
    $("#photo17").animate({'top':"20%"},500,"linear",);
  }
}
function tornaback18() {
  if($("#photo18").css({'top':"+20%"})) {
    $("#photo18").animate({'top':"20%"},500,"linear",);
  }
}

function hide() {
  if(menuu==0) {$("#menu").addClass("mostra");
  $("#menu").removeClass("nascondi");
  $("#midstripe").addClass("movemid");
  $("#topstripe").addClass("x1");
  $("#botstripe").addClass("x2");
  menuu= 1;
} else if (menuu==1) {
  $("#menu").removeClass("mostra");
  $("#menu").addClass("nascondi");
  $("#midstripe").removeClass("movemid");
  $("#topstripe").removeClass("x1");
  $("#botstripe").removeClass("x2");
  menuu= 0;
}}
$("#home").hover(function vai() {
  $("#spinner").removeClass("on");
}, function torna() {
  $("#spinner").addClass("on");
})
$("#ole").hover(function vai2() {
  $("#spinner2").removeClass("on");
}, function torna() {
  $("#spinner2").addClass("on");
})
$("#graphics").hover(function vai3() {
  $("#spinner3").removeClass("on");
}, function torna() {
  $("#spinner3").addClass("on");
})
$("#videos").hover(function vai4() {
  $("#spinner4").removeClass("on");
}, function torna() {
  $("#spinner4").addClass("on");
})
$("#facebook").hover(function socialactive() {
  if($("#facebook").hasClass("socialbut")) {
    $("#facebook").addClass("ruotabut");
  }
}, function socialoff() {
  $("#facebook").removeClass("ruotabut");
})
$("#behance").hover(function socialactive2() {
  if($("#behance").hasClass("socialbut")) {
    $("#behance").addClass("ruotabut");
  }
}, function socialoff2() {
  $("#behance").removeClass("ruotabut");
})
$("#flickr").hover(function socialactive3() {
  if($("#flickr").hasClass("socialbut")) {
    $("#flickr").addClass("ruotabut");
  }
}, function socialoff3() {
  $("#flickr").removeClass("ruotabut");
})
$("#insta").hover(function socialactive4() {
  if($("#insta").hasClass("socialbut")) {
    $("#insta").addClass("ruotabut");
  }
}, function socialoff4() {
  $("#insta").removeClass("ruotabut");
})
$("#photo1").hover(function conton() {
  if($(this).hasClass("containerz")) {
  }
}, function contoff() {
  tornaback();
})
$("#photo2").hover(function conton() {
  if($(this).hasClass("containerz")) {
  }
}, function contoff() {
  tornaback2();
})
$("#photo3").hover(function conton() {
  if($(this).hasClass("containerz")) {
  }
}, function contoff() {
  tornaback3();
})
$("#photo4").hover(function conton() {
  if($(this).hasClass("containerz")) {
  }
}, function contoff() {
  tornaback4();
})
$("#photo5").hover(function conton() {
  if($(this).hasClass("containerz")) {
  }
}, function contoff() {
  tornaback5();
})
$("#photo6").hover(function conton() {
  if($(this).hasClass("containerz")) {
  }
}, function contoff() {
  tornaback6();
})
$("#photo7").hover(function conton() {
  if($(this).hasClass("containerz")) {
  }
}, function contoff() {
  tornaback7();
})
$("#photo8").hover(function conton() {
  if($(this).hasClass("containerz")) {
  }
}, function contoff() {
  tornaback8();
})
$("#photo9").hover(function conton() {
  if($(this).hasClass("containerz")) {
  }
}, function contoff() {
  tornaback9();
})
$("#photo10").hover(function conton() {
  if($(this).hasClass("containerz")) {
  }
}, function contoff() {
  tornaback10();
})
$("#photo11").hover(function conton() {
  if($(this).hasClass("containerz")) {
  }
}, function contoff() {
  tornaback11();
})
$("#photo12").hover(function conton() {
  if($(this).hasClass("containerz")) {
  }
}, function contoff() {
  tornaback12();
})
$("#photo13").hover(function conton() {
  if($(this).hasClass("containerz")) {
  }
}, function contoff() {
  tornaback13();
})
$("#photo14").hover(function conton() {
  if($(this).hasClass("containerz")) {
  }
}, function contoff() {
  tornaback14();
})
$("#photo15").hover(function conton() {
  if($(this).hasClass("containerz")) {
  }
}, function contoff() {
  tornaback15();
})
$("#photo16").hover(function conton() {
  if($(this).hasClass("containerz")) {
  }
}, function contoff() {
  tornaback16();
})
$("#photo17").hover(function conton() {
  if($(this).hasClass("containerz")) {
  }
}, function contoff() {
  tornaback17();
})
$("#photo18").hover(function conton() {
  if($(this).hasClass("containerz")) {
  }
}, function contoff() {
  tornaback18();
})
$("#menubut").on("click", function() {
  hide();
});
