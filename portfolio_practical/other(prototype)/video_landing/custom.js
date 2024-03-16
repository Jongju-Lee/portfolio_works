$(function () {
  /* ##### Trigger ##### */
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".full_modal").stop().fadeToggle();
  });
  $(".container").click(function () {
    $(".full_modal").stop().fadeOut();
  });
  /* ##### Audio Volume ##### */
  const $audio = document.querySelector("#my_audio");
  $audio.volume = 0.3; // Volume 0 ~ 1
});
