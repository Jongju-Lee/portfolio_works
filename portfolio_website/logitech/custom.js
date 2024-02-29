$(function () {
  $(".gnb > li").mouseenter(function () {
    $(".mega_box").stop().fadeOut();
    $(this).children(".mega_box").stop().fadeIn();
  });
  $("nav").mouseleave(function () {
    $(".mega_box").stop().fadeOut();
  });
  $(".btn_close").click(function () {
    $(this).parent().parent().stop().fadeOut();
  });
  // $(".gnb > li").mouseleave(function () {
  //   $(this).children(".mega_box").stop().fadeOut();
  // });
});
