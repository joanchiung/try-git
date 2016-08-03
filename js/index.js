
//首頁第一鏡


$(function(){
  $('.header').css('height',$(window).height());
  $(window).resize(function() {
            $('.header').css('height',$(window).height());
        });
});

