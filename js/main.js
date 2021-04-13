$(document).ready(() => {
  //Smooth scroll on click
  $('a[href*="#"]').on("click", function(e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      1000,
      "linear"
    );
  });

  // OPEN MOBILE MENU
  $(".menu-btn").click(() => {
    $(".mobile-menu").toggleClass("active");
  });

  $(".mobile-menu li a").click(() => {
    $(".mobile-menu").removeClass("active");
  });
});
