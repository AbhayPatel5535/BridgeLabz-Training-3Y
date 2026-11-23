$(document).ready(function () {
  // Hide only the first banner; Show All restores every banner.
  $("#hideBanner").on("click", function () {
    $(".banner").first().stop(true, true).hide();
  });

  $("#showBanners").on("click", function () {
    $(".banner").stop(true, true).show();
  });

  // Slide effects demonstrate animated visibility changes.
  $("#slideUp").on("click", function () {
    $(".banner:visible").stop(true, true).slideUp(400);
  });

  $("#slideDown").on("click", function () {
    $(".banner").stop(true, true).slideDown(400);
  });

  // Fade buttons gradually hide or reveal the banners.
  $("#fadeOut").on("click", function () {
    $(".banner:visible").stop(true, true).fadeOut(500);
  });

  $("#fadeIn").on("click", function () {
    $(".banner").stop(true, true).fadeIn(500);
  });

  // Rotate banners every five seconds using fadeOut() and fadeIn().
  let currentBanner = 0;
  const banners = $(".banner");

  banners.hide().eq(0).show();

  setInterval(function () {
    const nextBanner = (currentBanner + 1) % banners.length;
    banners.eq(currentBanner).stop(true, true).fadeOut(400, function () {
      banners.eq(nextBanner).stop(true, true).fadeIn(400);
    });
    currentBanner = nextBanner;
  }, 5000);
});
