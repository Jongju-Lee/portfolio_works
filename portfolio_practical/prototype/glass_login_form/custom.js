$(function () {
  $(".input_field input").focus(function () {
    $(this).parent().addClass("active");
  });
});
