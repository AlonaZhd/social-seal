$(".accordion__tab").click(function () {
    $(".accordion__tab").each(function () {
        $(this).parent().removeClass("active");
        $(this).removeClass("active");
    });
    $(this).parent().addClass("active");
    $(this).addClass("active");
});
