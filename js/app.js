$(document).ready(function() {
  var $heart = $(".heart");
  $heart.click(function() {
    $(this).toggleClass("heart-clicked fa-heart fa-heart-o");
  });

  var $btn_clicked = $(".btn_clicked");
  $btn_clicked.click(function() {
    if ($btn_clicked) {
      $(".profile__overlay-container").removeClass("profile___no_overlay");
      $(".profile__overlay-container").addClass("profile__overlay");
        console.log("closed");
    }
  });

  var $closed_btn = $(".closed_btn");
  $closed_btn.click(function() {
    if ($closed_btn) {
      $(".profile__overlay-container").removeClass("profile__overlay");
      $(".profile__overlay-container").addClass("profile___no_overlay");
        console.log("clicked");
    }
  });


});
