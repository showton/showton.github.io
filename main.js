$(document).ready(function() {
  $('#nav-placeholder').load('navigation.html');
  $('#footer-placeholder').load('footer.html');

$(function() {
  $('.nav_li a[href^="/' + location.pathname.split("/")[1] + '"]').addClass(
    "active"
  );
});


});
