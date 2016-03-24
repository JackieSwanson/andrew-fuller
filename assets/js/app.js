/*   Hamburger to X using Awesome Fonts
$(".hamburger").click(function(){
  $(".main-menu").toggle();
  $(this).find(".fa").toggleClass("fa-bars").toggleClass("fa-times");
});   */


//****** Icon and Main Menu Toggling ******//

$(".nav-toggle").click(function() {
  $(this).toggleClass("active");
  $(".main-menu").toggle();
});
$(".arrow").click(function(){
  $("footer").toggleClass("open");
  $(".content").toggleClass("open");
  $("main").toggleClass("open");
  $(".footer-expander").toggleClass("open");
  $(".footer-wrap").toggleClass("open");
  $(".arrow i").toggleClass("fa-chevron-down");
  $(".arrow i").toggleClass("fa-chevron-up");
});

/*
$(".fa-th").click(function() {
  $(".content").toggleClass("cover").removeClass("description").removeClass("title");
});
$(".fa-align-justify").click(function() {
  $(".content").toggleClass("title").removeClass("description").removeClass("cover");
});
$(".fa-th-list").click(function() {
  $(".content").toggleClass("description").removeClass("cover").removeClass("title");
});
$(".cover-pic").click(function (event){
  event.preventDefault();
  $(this).parent().toggleClass("lightbox");
});*/
