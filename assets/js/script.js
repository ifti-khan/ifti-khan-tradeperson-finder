function darkTheme() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    let darkButton = document.getElementById("dark-btn");
    darkButton.classList.toggle("active-nav");

    if (darkButton.innerHTML === "Dark Mode<br> On") {
        darkButton.innerHTML = "Dark Mode<br> Off";
    } else if (darkButton.innerHTML === "Dark Mode<br> Off") {
        darkButton.innerHTML = "Dark Mode<br> On";
    } else {
        darkButton.innerHTML = "Dark Mode<br> Off";
    }
}

$(document).ready(function () {

    var topButton = $('#to-top-btn');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            topButton.addClass('visible');
        } else {
            topButton.removeClass('visible');
        }
    });

    topButton.on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '100');
    });

    $(".result-heading-show").click(function () {
        $('.result-con').slideDown(750);
        $('.result-heading-show').hide();
        $('.result-heading-hide').show();
        $('#result').show(750, "linear");
    });

    $(".result-heading-hide").click(function () {
        $('.result-con').slideUp(750);
        $('.result-heading-show').show();
        $('.result-heading-hide').hide();
        $('#result').hide(750, "linear");
    });

});
