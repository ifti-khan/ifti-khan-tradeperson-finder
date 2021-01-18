function resetLocalSearch() {
    $('input[type=checkbox]').prop('checked', false);
    $('.card').fadeOut('fast');
};

let loopDivs = 6;
for (let i = 1; i <= loopDivs; i++) {

    let parentElement = document.querySelector('.dynamic-business-divs');

    let dyDiv = document.createElement('div');
    dyDiv.id = 'businessCard' + i;
    dyDiv.className = 'card col-lg-4';

    let busHeading = document.createElement('h1');
    busHeading.id = 'businessHead' + i;
    busHeading.className = 'heading-card';
    busHeading.innerHTML = 'Business ' + i;

    let busIcon = document.createElement('h1');
    busIcon.id = 'businessIcon';
    busIcon.className = 'icon-card';
    busIcon.innerHTML = '<i class="fas fa-toolbox"></i>';

    // Now create and append to iDiv
    let innerDiv = document.createElement('div');
    innerDiv.id = 'business-info' + i;
    innerDiv.className = 'card-body info-card';
    innerDiv.innerHTML = '<table class="table-card">\
<tr>\
<td class="attrib-col1">\
<h6>Address:</h6>\
</td>\
<td class="attrib-col2">\
<h6 id="bus-add' + i + '"></h6>\
</td>\
</tr>\
<tr>\
<td class="attrib-col1">\
<h6>Number:</h6>\
</td>\
<td class="attrib-col2">\
<h6 id="bus-num' + i + '"></h6>\
</td>\
</tr>\
<tr>\
<td class="attrib-col1">\
<h6>Email:</h6>\
</td>\
<td class="attrib-col2">\
<h6 id="bus-email' + i + '"></h6>\
</td>\
</tr>\
<tr>\
<td class="attrib-col1">\
<h6>Website:</h6>\
</td>\
<td class="attrib-col2">\
<h6 id="bus-url' + i + '"></h6>\
</td>\
</tr>\
<tr>\
<td class="attrib-col1">\
<h6>Social:</h6>\
</td>\
<td class="attrib-col2">\
<h6 id="bus-social' + i + '"></h6>\
</td>\
</tr>\
</table>'


    let busButtonMore = document.createElement('button');
    busButtonMore.id = 'businessButtonMore' + i;
    busButtonMore.className = 'btn btn-outline-dark more-btn';
    busButtonMore.innerHTML = 'More Info...';

    let busButtonLess = document.createElement('button');
    busButtonLess.id = 'businessButtonLess' + i;
    busButtonLess.className = 'btn btn-outline-dark less-btn';
    busButtonLess.innerHTML = 'Less Info...';
    busButtonLess.style.display = "none";

    // The variable iDiv is still good... Just append to it.
    parentElement.appendChild(dyDiv)
    dyDiv.appendChild(busHeading);
    dyDiv.appendChild(busIcon);
    dyDiv.appendChild(innerDiv);
    dyDiv.appendChild(busButtonMore);
    dyDiv.appendChild(busButtonLess);


    //More and Less buttons
    $(busButtonMore).click(function () {
        $(innerDiv).slideDown();
        $(busButtonMore).hide();
        $(busButtonLess).show();
    });

    $(busButtonLess).click(function () {
        $(innerDiv).slideUp();
        $(busButtonMore).show();
        $(busButtonLess).hide();
    });

}

// Constructor function for business objects
function business(businessName, address, number, email, website, social, location, trade) {
    this.businessName = businessName;
    this.address = address;
    this.number = number;
    this.email = email;
    this.website = website;
    this.social = social;
    this.location = location;
    this.trade = trade;
}

// Create a business object
let electrician1 = new business("Ifti Electric", "123 Fake Street, St Albans", "0123456789", "1@1.com", "www.website.com", "www.facebook.com", "St Albans", "Electrician");

let plumber1 = new business("Ifti Plumbing", "123 Fake Street, St Albans", "0123456789", "1@1.com", "www.website.com", "www.facebook.com", "St Albans", "Plumber");

let carpenter1 = new business("Ifti Carpenter", "123 Fake Street, St Albans", "0123456789", "1@1.com", "www.website.com", "www.facebook.com", "St Albans", "Carpenter");

let mechanic1 = new business("Ifti Mechanic", "123 Fake Street, St Albans", "0123456789", "1@1.com", "www.website.com", "www.facebook.com", "St Albans", "Mechanic");

let plasterer1 = new business("Ifti Plasterer", "123 Fake Street, St Albans", "0123456789", "1@1.com", "www.website.com", "www.facebook.com", "St Albans", "Plasterer");

let decorator1 = new business("Ifti Decorator", "123 Fake Street, St Albans", "0123456789", "1@1.com", "www.website.com", "www.facebook.com", "St Albans", "Decorator");

// Display all information in the right table element
document.getElementById("businessHead1").innerHTML = electrician1.businessName;
document.getElementById("bus-add1").innerHTML = electrician1.address;
document.getElementById("bus-num1").innerHTML = electrician1.number;
document.getElementById("bus-email1").innerHTML = electrician1.email;
document.getElementById("bus-url1").innerHTML = electrician1.website;
document.getElementById("bus-social1").innerHTML = electrician1.social;
document.getElementById("businessCard1").setAttribute("data-trade", electrician1.trade);

document.getElementById("businessHead2").innerHTML = plumber1.businessName;
document.getElementById("bus-add2").innerHTML = plumber1.address;
document.getElementById("bus-num2").innerHTML = plumber1.number;
document.getElementById("bus-email2").innerHTML = plumber1.email;
document.getElementById("bus-url2").innerHTML = plumber1.website;
document.getElementById("bus-social2").innerHTML = plumber1.social;
document.getElementById("businessCard2").setAttribute("data-trade", plumber1.trade);

document.getElementById("businessHead3").innerHTML = carpenter1.businessName;
document.getElementById("bus-add3").innerHTML = carpenter1.address;
document.getElementById("bus-num3").innerHTML = carpenter1.number;
document.getElementById("bus-email3").innerHTML = carpenter1.email;
document.getElementById("bus-url3").innerHTML = carpenter1.website;
document.getElementById("bus-social3").innerHTML = carpenter1.social;
document.getElementById("businessCard3").setAttribute("data-trade", carpenter1.trade);

document.getElementById("businessHead4").innerHTML = mechanic1.businessName;
document.getElementById("bus-add4").innerHTML = mechanic1.address;
document.getElementById("bus-num4").innerHTML = mechanic1.number;
document.getElementById("bus-email4").innerHTML = mechanic1.email;
document.getElementById("bus-url4").innerHTML = mechanic1.website;
document.getElementById("bus-social4").innerHTML = mechanic1.social;
document.getElementById("businessCard4").setAttribute("data-trade", mechanic1.trade);

document.getElementById("businessHead5").innerHTML = plasterer1.businessName;
document.getElementById("bus-add5").innerHTML = plasterer1.address;
document.getElementById("bus-num5").innerHTML = plasterer1.number;
document.getElementById("bus-email5").innerHTML = plasterer1.email;
document.getElementById("bus-url5").innerHTML = plasterer1.website;
document.getElementById("bus-social5").innerHTML = plasterer1.social;
document.getElementById("businessCard5").setAttribute("data-trade", plasterer1.trade);

document.getElementById("businessHead6").innerHTML = decorator1.businessName;
document.getElementById("bus-add6").innerHTML = decorator1.address;
document.getElementById("bus-num6").innerHTML = decorator1.number;
document.getElementById("bus-email6").innerHTML = decorator1.email;
document.getElementById("bus-url6").innerHTML = decorator1.website;
document.getElementById("bus-social6").innerHTML = decorator1.social;
document.getElementById("businessCard6").setAttribute("data-trade", decorator1.trade);

$(document).ready(function () {
    console.log("ready!");

    $("#electrician-local").click(function () {
        if ($("#electrician-local").is(':checked')) {
            $('.card[data-trade="Electrician"]').show();
        } else {
            $('.card[data-trade="Electrician"]').hide();
        }
    });

    $("#plumber-local").click(function () {
        if ($("#plumber-local").is(':checked')) {
            $('.card[data-trade="Plumber"]').show();
        } else {
            $('.card[data-trade="Plumber"]').hide();
        }
    });

    $("#carpenter-local").click(function () {
        if ($("#carpenter-local").is(':checked')) {
            $('.card[data-trade="Carpenter"]').show();
        } else {
            $('.card[data-trade="Carpenter"]').hide();
        }
    });

    $("#mechanic-local").click(function () {
        if ($("#mechanic-local").is(':checked')) {
            $('.card[data-trade="Mechanic"]').show();
        } else {
            $('.card[data-trade="Mechanic"]').hide();
        }
    });

    $("#plasterer-local").click(function () {
        if ($("#plasterer-local").is(':checked')) {
            $('.card[data-trade="Plasterer"]').show();
        } else {
            $('.card[data-trade="Plasterer"]').hide();
        }
    });

    $("#decorator-local").click(function () {
        if ($("#decorator-local").is(':checked')) {
            $('.card[data-trade="Decorator"]').show();
        } else {
            $('.card[data-trade="Decorator"]').hide();
        }
    });

});
