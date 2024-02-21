$(function () {
  /* ##### Header - Trigger ##### */
  $(".trigger").click(function () {
    $(this).toggleClass("active");
  });
  /* ##### Header - GNB ##### */
  $(".gnb").mouseenter(function () {
    $(this).addClass("active");
    $("header").addClass("active");
  });
  $(".gnb").mouseleave(function () {
    $(this).removeClass("active");
    $("header").removeClass("active");
  });
  // GNB - Product
  $(".gnb_product, .product_drop_down").mouseenter(function () {
    $(this).parent().addClass("product");
    $(".product_drop_down").stop().fadeIn("fast");
  });
  $(".gnb_product, .product_drop_down").mouseleave(function () {
    $(this).parent().removeClass("product");
    $(".product_drop_down").stop().fadeOut("fast");
  });
  // GNB - Collection
  $(".gnb_collection, .collection_drop_down").mouseenter(function () {
    $(this).parent().addClass("collection");
    $(".collection_drop_down").stop().fadeIn("fast");
  });
  $(".gnb_collection, .collection_drop_down").mouseleave(function () {
    $(this).parent().removeClass("collection");
    $(".collection_drop_down").stop().fadeOut("fast");
  });
  // GNB - SMEGazine
  $(".gnb_smegazine, .smegazine_drop_down").mouseenter(function () {
    $(this).parent().addClass("smegazine");
    $(".smegazine_drop_down").stop().fadeIn("fast");
  });
  $(".gnb_smegazine, .smegazine_drop_down").mouseleave(function () {
    $(this).parent().removeClass("smegazine");
    $(".smegazine_drop_down").stop().fadeOut("fast");
  });
});
