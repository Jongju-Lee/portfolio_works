$(function () {
  /* ##### Header - Trigger ##### */
  $(".trigger").click(function () {
    $(this).toggleClass("active");
  });
  /* ##### Header - GNB ##### */
  $(".gnb").mouseenter(function () {
    $(this).addClass("active");
    $("header").addClass("active");
    $(".header_drop_down").slideDown();
  });
  $(".gnb").mouseleave(function () {
    $(this).removeClass("active");
  });
  $("section").mouseenter(function () {
    $("header").removeClass("active");
  });
  // GNB - Product
  $(".gnb_product, .product_drop_down").mouseenter(function () {
    $(this).parent().addClass("product");
    $("header").addClass("active");
  });
  $(".gnb_product, .product_drop_down").mouseleave(function () {
    $(this).parent().removeClass("product");
  });
  // GNB - Collection
  $(".gnb_collection, .collection_drop_down").mouseenter(function () {
    $(this).parent().addClass("collection");
    $("header").addClass("active");
  });
  $(".gnb_collection, .collection_drop_down").mouseleave(function () {
    $(this).parent().removeClass("collection");
  });
  // GNB - SMEGazine
  $(".gnb_smegazine, .smegazine_drop_down").mouseenter(function () {
    $(this).parent().addClass("smegazine");
    $("header").addClass("active");
  });
  $(".gnb_smegazine, .smegazine_drop_down").mouseleave(function () {
    $(this).parent().removeClass("smegazine");
  });
});
