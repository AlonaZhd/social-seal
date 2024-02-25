/*=============== BRAND-CREATION ===============*/

$(document).ready(function () {
    $(".brand-creation__slider").slick({
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        variableWidth: true,
        autoplaySpeed: 5000,
        cssEase: "ease",
        pauseOnHover: true,
    });
});

/*=============== EXPERIENCE ===============*/

$(document).ready(function () {
    $(".experience__slider").slick({
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        variableWidth: true,
        autoplaySpeed: 8000,
        cssEase: "ease",
        pauseOnHover: true,
        centerMode: true,
    });
});

/*=============== TEAM ===============*/

$(document).ready(function () {
    $(".team__slider").slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        variableWidth: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
        // cssEase: "ease",
        // pauseOnHover: true,
    });
});
