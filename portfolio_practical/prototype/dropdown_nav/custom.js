$(function () {
  /* ##### Banner - Close Button ##### */
  $(".btn_close").click(function () {
    $(".banner_outer").slideUp();
  });
  /* ##### GNB - Hover Dropdown ##### */
  $(".gnb li").mouseenter(function () {
    $(this).children(".drop_menu").stop().fadeIn();
  });
  $(".gnb li").mouseleave(function () {
    $(this).children(".drop_menu").stop().fadeOut();
  });
});
