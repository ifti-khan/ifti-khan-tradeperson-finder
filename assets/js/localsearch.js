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
    $('input[type=checkbox]').prop('checked', false);
    $('.card').fadeOut('fast');
};

$(document).ready(function () {

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
