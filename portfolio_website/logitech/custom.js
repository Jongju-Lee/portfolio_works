$(function () {
  $(".gnb > li").mouseenter(function () {
    $(this).children(".gnb_inner").stop().fadeIn();
  });
  $(".gnb > li").mouseleave(function () {
    $(this).children(".gnb_inner").stop().fadeOut();
  });
});
