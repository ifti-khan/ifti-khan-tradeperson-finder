function darkTheme() {
    let element = document.body;
    element.classList.toggle("dark-mode");

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
};

// When the user clicks anywhere outside of the modal box when it is open, it will refresh the page
let myModal = document.getElementById("contact-modal");
window.onclick = function (event) {
    if (event.target == myModal) {
        location.reload();
    }
};

// Constructor function for business objects
function business(address, number, email, website, social) {
    this.address = address;
    this.number = number;
    this.email = email;
    this.website = website;
    this.social = social;
}

// Create a business object
let electrician1 = new business("123 Fake Street, St Albans", "0123456789", "1@1.com", "www.website.com", "www.facebook.com");

// Display all information in the right table element
document.getElementById("elec1-add").innerHTML = electrician1.address;
document.getElementById("elec1-num").innerHTML = electrician1.number;
document.getElementById("elec1-email").innerHTML = electrician1.email;
document.getElementById("elec1-url").innerHTML = electrician1.website;
document.getElementById("elec1-social").innerHTML = electrician1.social;

function resetLocalSearch() {
    $('#countries-list')[0].selectedIndex = 0;
    $('#city-town-list')[0].selectedIndex = 0;
    $('input[type=checkbox]').prop('checked', false);
    $('.card').hide();
}

$("#city-town-list").change(function () {
    let selectedCity = this.options[this.selectedIndex].value;
    if (selectedCity == "st_albans") {
        $('.card').hide();
    }
});


$("#electrician-local").click(function () {
    if ($("#electrician-local").is(':checked')) {
        $('.card[data-trade="electrician"]').show();
    } else {
        $('.card[data-trade="electrician"]').hide();
    }
});

$("#plumber-local").click(function () {
    if ($("#plumber-local").is(':checked')) {
        $('.card[data-trade="plumber"]').show();
    } else {
        $('.card[data-trade="plumber"]').hide();
    }
});

$("#carpenter-local").click(function () {
    if ($("#carpenter-local").is(':checked')) {
        $('.card[data-trade="carpenter"]').show();
    } else {
        $('.card[data-trade="carpenter"]').hide();
    }
});

$("#mechanic-local").click(function () {
    if ($("#mechanic-local").is(':checked')) {
        $('.card[data-trade="mechanic"]').show();
    } else {
        $('.card[data-trade="mechanic"]').hide();
    }
});

$("#plasterer-local").click(function () {
    if ($("#plasterer-local").is(':checked')) {
        $('.card[data-trade="plasterer"]').show();
    } else {
        $('.card[data-trade="plasterer"]').hide();
    }
});

$("#decorator-local").click(function () {
    if ($("#decorator-local").is(':checked')) {
        $('.card[data-trade="decorator"]').show();
    } else {
        $('.card[data-trade="decorator"]').hide();
    }
});


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

    $(".contact-me").click(function () {
        $(".contact-me").addClass("active-nav").removeClass("hvr-pulse");
    });

    $(".close").click(function () {
        location.reload();
    });

    $("#gen_question").click(function () {
        if ($("#gen_question").is(':checked')) {
            $(".gen-question-form").slideDown();
            $(".add-business-form").slideUp(200);
        }
    });

    $("#add_business").click(function () {
        if ($("#add_business").is(':checked')) {
            $(".add-business-form").slideDown();
            $(".gen-question-form").slideUp(200);
        }
    });

    $("#google-search").click(function () {
        $(".google-search").fadeIn();
        $("#google-search").addClass("active-nav");
        $("#local-search").removeClass("active-nav");
        $("#google-search").removeClass("hvr-pulse");
        $("#local-search").addClass("hvr-pulse");
        $(".local-search").fadeOut("fast");
    });

    $("#local-search").click(function () {
        $(".local-search").fadeIn();
        $("#local-search").addClass("active-nav")
        $("#google-search").removeClass("active-nav");
        $("#local-search").removeClass("hvr-pulse");
        $("#google-search").addClass("hvr-pulse");
        $(".google-search").fadeOut("fast");
    });


    //More and Less buttons
    $("#more-button-1").click(function () {
        $('#electrician-info-1').slideDown();
        $('#more-button-1').hide();
        $('#less-button-1').show();
    });

    $("#less-button-1").click(function () {
        $('#electrician-info-1').slideUp();
        $('#more-button-1').show();
        $('#less-button-1').hide();
    });

    $("#more-button-2").click(function () {
        $('#plumber-info-1').slideDown();
        $('#more-button-2').hide();
        $('#less-button-2').show();
    });

    $("#less-button-2").click(function () {
        $('#plumber-info-1').slideUp();
        $('#more-button-2').show();
        $('#less-button-2').hide();
    });

    $("#more-button-3").click(function () {
        $('#carpenter-info-1').slideDown();
        $('#more-button-3').hide();
        $('#less-button-3').show();
    });

    $("#less-button-3").click(function () {
        $('#carpenter-info-1').slideUp();
        $('#more-button-3').show();
        $('#less-button-3').hide();
    });

    $("#more-button-4").click(function () {
        $('#mechanic-info-1').slideDown();
        $('#more-button-4').hide();
        $('#less-button-4').show();
    });

    $("#less-button-4").click(function () {
        $('#mechanic-info-1').slideUp();
        $('#more-button-4').show();
        $('#less-button-4').hide();
    });

    $("#more-button-5").click(function () {
        $('#plasterer-info-1').slideDown();
        $('#more-button-5').hide();
        $('#less-button-5').show();
    });

    $("#less-button-5").click(function () {
        $('#plasterer-info-1').slideUp();
        $('#more-button-5').show();
        $('#less-button-5').hide();
    });

    $("#more-button-6").click(function () {
        $('#decorator-info-1').slideDown();
        $('#more-button-6').hide();
        $('#less-button-6').show();
    });

    $("#less-button-6").click(function () {
        $('#decorator-info-1').slideUp();
        $('#more-button-6').show();
        $('#less-button-6').hide();
    });


});
