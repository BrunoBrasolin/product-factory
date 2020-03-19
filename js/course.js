var first = $("#course-first");
var textFirst = $("#course-text-first");

var second = $("#course-second");
var textSecond = $("#course-text-second");

var third = $("#course-third");
var textThird = $("#course-text-third");

$(
    function () {
        textFirst.hide();
        textSecond.hide();
        textThird.show();
        third.addClass("course-active");
    }
)

first.click(function () {
    first.addClass("course-active");
    textFirst.show();

    second.removeClass("course-active");
    textSecond.hide();

    third.removeClass("course-active");
    textThird.hide();
});
second.click(function () {
    first.removeClass("course-active");
    textFirst.hide();

    second.addClass("course-active");
    textSecond.show();

    third.removeClass("course-active");
    textThird.hide();
});
third.click(function () {
    first.removeClass("course-active");
    textFirst.hide();

    second.removeClass("course-active");
    textSecond.hide();

    third.addClass("course-active");
    textThird.show();
});
