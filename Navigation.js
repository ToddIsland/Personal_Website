var Navigation = (function ($) {
    var navIndex;

    var init = function () {
        // set navIndex
        navIndex = 0;

        // page 2 waypoint
        $("#page_2").waypoint(
            function (direction) {
                $(".page_2").toggleClass("about-active");

                setNav(direction);
            },
            { offset: "50px" }
        );

        // page 3 waypoint
        $("#page_3").waypoint(
            function (direction) {
                $(".navigation").toggleClass("navigation-dark");

                setNav(direction);
            },
            { offset: "300px" }
        );

        // publications waypoint
        $("#publications").waypoint(
            function (direction) {
                $(".publications").toggleClass("publications-active");

                setNav(direction);
            },
            { offset: "300px" }
        );

        // grail waypoint
        $("#grail").waypoint(
            function (direction) {
                $(".grail").toggleClass("grail-active");
                $(".navigation").toggleClass("navigation-dark");

                setNav(direction);
            },
            { offset: "300px" }
        );
    };

    var scrollTo = function (id) {
        // Stop any currently active scroll
        $("html, body").dequeue();
        // Scroll to #id offset by 90 pixels
        $("html, body").animate(
            { scrollTop: $(id).offset().top },
            1000,
            "easeOutExpo"
        );
    };

    var setNav = function (direction) {
        console.log('abc:', direction);
        navIndex = direction === "down" ? navIndex + 1 : navIndex - 1;

        $(".navigation a").removeClass("active");
        $(".navigation a").eq(navIndex).addClass("active");
    };

    return {
        init: init,
        scrollTo: scrollTo,
    };
})(jQuery);

$(function() {
    Navigation.init();
});


