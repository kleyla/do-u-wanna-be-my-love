$(function () {
  console.log("hi");
  $("#no").mouseover(function () {
    $("#no").text("SI");
    $("#si").text("NO");
    $("body").addClass("stars");
  });
  $("#si").mouseover(function () {
    if ($("#si").text() == "NO") {
      $("#no").text("NO");
      $("#si").text("SI");
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
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

$('.btn').click(function(){
  modal.style.display = "block";
})

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
