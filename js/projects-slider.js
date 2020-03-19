function slideNext() {
    var slideActive = $(".projects-img-active");
    var slideNext;
    var slideCount = 15;
    var countSlide;
    if (slideActive.next().length) {
        slideNext = slideActive.next();
        countSlide = slideActive.next();
        for (var i = 1; i <= 15; i++) {
            if (countSlide.next().length) {
                slideCount--;
                countSlide = countSlide.next();
            }
        }
    } else {
        slideNext = $(".projects-img:first");
        slideCount = 1;
    }
    slideActive.stop().fadeOut(1500).removeClass("projects-img-active");
    slideNext.stop().fadeIn(1500).addClass("projects-img-active");
    $(".projects-slider-counter").text(slideCount);
}

function slidePrev() {
    var slideActive = $(".projects-img-active");
    var slidePrev;
    var slideCount = 1;
    var countSlide;
    if (slideActive.prev().length) {
        slidePrev = slideActive.prev();
        countSlide = slideActive.prev();
        for (var i = 1; i <= 15; i++) {
            if (countSlide.prev().length) {
                slideCount++;
                countSlide = countSlide.prev();
            }
        }
    } else {
        slidePrev = $(".projects-img:last");
        slideCount = 15;
    }
    slideActive.stop().fadeOut(1500).removeClass("projects-img-active");
    slidePrev.stop().fadeIn(1500).addClass("projects-img-active");
    $(".projects-slider-counter").text(slideCount);
}

$("#projects-next").click(slideNext);
$("#projects-prev").click(slidePrev);
