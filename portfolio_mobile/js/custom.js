$(function () {
  /* ##### GNB Include ##### */
  $("footer").load("../include/gnb.html");
  /* ##### Register - Terms CheckBox ##### */
  $("input[id=agree_all]").click(function () {
    // 전체선택 체크박스 체크시
    if ($("input[id=agree_all]").prop("checked")) {
      // 전체 체크
      $("input[name=agree]").prop("checked", true);
    } else {
      // 전체 체크 해제
      $("input[name=agree]").prop("checked", false);
    }
  });
});
