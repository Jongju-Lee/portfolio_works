$(function () {
  /* ##### Top Button ##### */
  $(window).scroll(function () {
    if (window.scrollY >= 50) {
      $(".btn_top").addClass("active");
    } else if (window.scrollY <= 50) {
      $(".btn_top").removeClass("active");
    }
  });
  /* ##### Section - Donations ##### */
  const $donateInput = document.querySelector(".donate_input");
  const $firstBtn = document.querySelector(".btn_first");
  const $secondBtn = document.querySelector(".btn_second");
  const $thirdBtn = document.querySelector(".btn_third");
  const $fourthBtn = document.querySelector(".btn_fourth");
  const $fifthBtn = document.querySelector(".btn_fifth");
  const $sixthBtn = document.querySelector(".btn_sixth");
  // Event Listener
  const clickBtn = (e) => {
    // 버튼 클릭시 버튼의 value가 input의 value로 들어감.
    const btnValue = e.target.value;
    $donateInput.value = btnValue;
  };
  $firstBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clickBtn(e);
  });
  $secondBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clickBtn(e);
  });
  $thirdBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clickBtn(e);
  });
  $fourthBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clickBtn(e);
  });
  $fifthBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clickBtn(e);
  });
  $sixthBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clickBtn(e);
  });
});
