function carouselSlideNext() {
    var activeSlide = $(".carousel-active");
    var nextSlide = activeSlide.next().length ? activeSlide.next() : $(".carousel-grid:first");
    activeSlide.stop().fadeOut(1500).removeClass("carousel-active");
    nextSlide.stop().fadeIn(1500).addClass("carousel-active");
}

function carouselSlidePrev() {
    var activeSlide = $(".carousel-active");
    var prevSlide = activeSlide.prev().length ? activeSlide.prev() : $(".carousel-grid:last");
    activeSlide.stop().fadeOut(1500).removeClass("carousel-active");
    prevSlide.stop().fadeIn(1500).addClass("carousel-active");
}

$("#button-next").click(carouselSlideNext);
$("#button-prev").click(carouselSlidePrev);

$(function () {
    $(".carousel-active").fadeIn();
    window.setInterval("carouselSlideNext()", 5000);
});