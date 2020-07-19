$(function () {
  console.log("hi");
  $("#no").mouseover(function () {
    $("#no").text("SI");
    $("#no").attr("href", "./pages/si.html");
    $("#si").text("NO");
    $("#si").attr("href", "./pages/no.html");
    $("body").addClass("stars");
  });
  $("#si").mouseover(function () {
    if ($("#si").text() == "NO") {
      $("#no").text("NO");
      $("#no").attr("href", "./pages/no.html");
      $("#si").text("SI");
      $("#si").attr("href", "./pages/si.html");
    }
    $("body").addClass("stars");
  });
  $("#no").mouseout(function () {
    if ($("body").hasClass("stars") && $("#no").text() == "SI") {
      $("body").removeClass("stars");
    }
  });
  $("#si").mouseout(function () {
    if ($("body").hasClass("stars") && $("#si").text() == "SI") {
      $("body").removeClass("stars");
    }
  });
});
