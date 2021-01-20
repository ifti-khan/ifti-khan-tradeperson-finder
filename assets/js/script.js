function darkTheme() {
    let elementBody = document.body;
    elementBody.classList.toggle("dark-mode");

    let darkButton = document.getElementById("dark-btn");
    darkButton.classList.toggle("active-nav");
    darkButton.classList.toggle("hvr-sweep-to-bottom");

    if (darkButton.innerHTML === "Dark Mode<br> On") {
        darkButton.innerHTML = "Dark Mode<br> Off";
    } else if (darkButton.innerHTML === "Dark Mode<br> Off") {
        darkButton.innerHTML = "Dark Mode<br> On";
    } else {
        darkButton.innerHTML = "Dark Mode<br> Off";
    }
}

// When the user clicks anywhere outside of the modal box when it is open, it will refresh the page
let myModal = document.getElementById("contact-modal");
window.onclick = function (event) {
    if (event.target == myModal) {
        location.reload();
    }
};


$(document).ready(function () {

    let topButton = $('#to-top-btn');
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

    $('.contact_modal').on('click', function (e) {
        e.preventDefault();
        $('#contact-modal').modal('show').find('.modal-content').load($(this).attr('href'));
    });


    $(".contact_modal").click(function () {
        $(".contact_modal").addClass("active-nav").removeClass("hvr-pulse");
    });


});
