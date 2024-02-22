$(function () {
  $(".sitemap").hide();
  /* ##### Header - Trigger ##### */
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".sitemap").stop().fadeToggle();
    $("header").removeClass("active");
    $(".header_drop_down").stop().slideUp("fast");
  });
  /* ##### Header - GNB ##### */
  $(".gnb").mouseenter(function () {
    $(this).addClass("active");
    $(".header_drop_down").stop().slideDown("fast");
  });
  $(".gnb").mouseleave(function () {
    $(this).removeClass("active");
  });
  $("section").mouseenter(function () {
    $("header").removeClass("active");
    $(".header_drop_down").stop().slideUp("fast");
  });
  // GNB - Product
  $(".gnb_product").mouseenter(function () {
    $(this).parent().removeClass("smegazine product collection");
    $(this).parent().addClass("product");
    $("header").addClass("active");
    $(".header_drop_down").removeClass("active");
    $(".product_drop_down").addClass("active");
  });
  // GNB - Collection
  $(".gnb_collection").mouseenter(function () {
    $(this).parent().removeClass("smegazine product collection");
    $(this).parent().addClass("collection");
    $("header").addClass("active");
    $(".header_drop_down").removeClass("active");
    $(".collection_drop_down").addClass("active");
  });
  // GNB - SMEGazine
  $(".gnb_smegazine").mouseenter(function () {
    $(this).parent().removeClass("smegazine product collection");
    $(this).parent().addClass("smegazine");
    $("header").addClass("active");
    $(".header_drop_down").removeClass("active");
    $(".smegazine_drop_down").addClass("active");
  });
});
