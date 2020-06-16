$(document).ready(function() {
  $("#nav-placeholder").load("/navigation.html");
  $("#footer-placeholder").load("/footer.html");

  $(function() {
    if (location.pathname.split("/")[1] !== "") {
      console.log($('nav_li a[href$="/'));
      $('.nav_li a[href$="/' + location.pathname.split("/")[1] + '"]').addClass(
        "active"
      );
    }
  });

//   $(function(){
//     var current = location.pathname;
//     console.log($('.nav_li a'));
//     $('.nav_li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.addClass('active');
//         }
//     })
// })


});
