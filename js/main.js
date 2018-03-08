$('.international').on('click', function () {
  event.preventDefault();
  $("#international-drop").show();
  $("#politics-drop").hide();
  $("#business-drop").hide();
  $("#technology-drop").hide();
  $("#culture-drop").hide();
  $("#blogs-drop").hide();

if ($(this).hasClass("active")) {
  $("#slide-down").slideUp();
  $(this).removeClass("active");
  } else {
    $("#slide-down").slideDown();
    $("#primary-nav li").removeClass("active");
    $(this).addClass("active");
  }
});

$('.politics').on('click', function () {
  event.preventDefault();
  $("#international-drop").hide();
  $("#politics-drop").show();
  $("#business-drop").hide();
  $("#technology-drop").hide();
  $("#culture-drop").hide();
  $("#blogs-drop").hide();

if ($(this).hasClass("active")) {
  $("#slide-down").slideUp();
  $(this).removeClass("active");
  } else {
    $("#slide-down").slideDown();
    $("#primary-nav li").removeClass("active");
    $(this).addClass("active");
  }
});

$('.business').on('click', function () {
  event.preventDefault();
  $("#business-drop").show();
  $("#international-drop").hide();
  $("#politics-drop").hide();
  $("#technology-drop").hide();
  $("#culture-drop").hide();
  $("#blogs-drop").hide();

if ($(this).hasClass("active")) {
  $("#slide-down").slideUp();
  $(this).removeClass("active");
  } else {
    $("#slide-down").slideDown();
    $("#primary-nav li").removeClass("active");
    $(this).addClass("active");
  }
});

$('.technology').on('click', function () {
  event.preventDefault();
  $("#international-drop").hide();
  $("#politics-drop").hide();
  $("#business-drop").hide();
  $("#technology-drop").show();
  $("#culture-drop").hide();
  $("#blogs-drop").hide();

if ($(this).hasClass("active")) {
  $("#slide-down").slideUp();
  $(this).removeClass("active");
  } else {
    $("#slide-down").slideDown();
    $("#primary-nav li").removeClass("active");
    $(this).addClass("active");
  }
});

$('.culture').on('click', function () {
  event.preventDefault();
  $("#international-drop").hide();
  $("#politics-drop").hide();
  $("#business-drop").hide();
  $("#technology-drop").hide();
  $("#culture-drop").show();
  $("#blogs-drop").hide();

if ($(this).hasClass("active")) {
  $("#slide-down").slideUp();
  $(this).removeClass("active");
  } else {
    $("#slide-down").slideDown();
    $("#primary-nav li").removeClass("active");
    $(this).addClass("active");
  }
});

$('.blogs').on('click', function () {
  event.preventDefault();
  $("#international-drop").hide();
  $("#politics-drop").hide();
  $("#business-drop").hide();
  $("#technology-drop").hide();
  $("#culture-drop").hide();
  $("#blogs-drop").show();

if ($(this).hasClass("active")) {
  $("#slide-down").slideUp();
  $(this).removeClass("active");
  } else {
    $("#slide-down").slideDown();
    $("#primary-nav li").removeClass("active");
    $(this).addClass("active");
  }
});
