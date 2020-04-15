$(document).ready(function() {
  $("#nav-placeholder").load("navigation.html");
  $("#footer-placeholder").load("footer.html");

  $(function() {
    if (location.pathname.split("/")[1] !== "") {
      $('.nav_li a[href$="/' + location.pathname.split("/")[1] + '"]').addClass(
        "active"
      );
    }
  });
  console.log('test');
});
