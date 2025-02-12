$(document).ready(function () {
  // Smooth scrolling for internal links
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });

  // Scroll to top button visibility & logo resizing
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scrollToTopBtn").fadeIn();
    } else {
      $("#scrollToTopBtn").fadeOut();
    }

    // Toggle 'scrolled' class on body for logo resizing
    if ($(this).scrollTop() > 400) {
      $("body").addClass("scrolled");
    } else {
      $("body").removeClass("scrolled");
    }
  });

  // Scroll to top animation
  $("#scrollToTopBtn").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // Trigger welcome text animation
  setTimeout(function () {
    $("#welcomeText").addClass("animate-welcome-text");
  }, 200); // Delay the animation by 500ms (adjust as needed)

  // Ingredient section animation
  $(window).scroll(function () {
    var ingredientSection = $(".ingredient_section");
    if (ingredientSection.length) {
      var topOfSection = ingredientSection.offset().top;
      var bottomOfSection = topOfSection + ingredientSection.outerHeight();
      var windowBottom = $(window).scrollTop() + $(window).height();

      if (
        windowBottom > topOfSection &&
        $(window).scrollTop() < bottomOfSection
      ) {
        ingredientSection.find(".img-box img").addClass("animated");
      } else {
        ingredientSection.find(".img-box img").removeClass("animated");
      }
    }
  });

  // Sources popup
  $(".quellen").on("click", function (event) {
    event.preventDefault();
    $("#sourcesPopup").fadeIn();
  });

  $(".close-sources").on("click", function () {
    $(this).animate(
      {
        rotate: "90deg",
      },
      500,
      function () {
        // After the animation, hide the popup and reset the rotation
        $("#sourcesPopup").fadeOut(function () {
          $(".close-sources").css("rotate", "0deg");
        });
      }
    );
  });

  $(".close-sources").hover(
    function () {
      // Mouse enter (hover on)
      $(this).animate(
        {
          rotate: "90deg",
        },
        300
      ); // Animation duration adjusted to 300ms
    },
    function () {
      // Mouse leave (hover off)
      $(this).animate(
        {
          rotate: "0deg",
        },
        300
      ); // Return to original state
    }
  );
});
