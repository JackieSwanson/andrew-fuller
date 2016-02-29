/*   Hamburger to X using Awesome Fonts
$(".hamburger").click(function(){
  $(".main-menu").toggle();
  $(this).find(".fa").toggleClass("fa-bars").toggleClass("fa-times");
});   */


//****** Icon and Main Menu Toggling ******//

$("#nav-toggle").click(function() {
  $(this).toggleClass("active");
  $(".main-menu").toggle();
});
