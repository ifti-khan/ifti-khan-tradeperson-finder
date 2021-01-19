function resetLocalSearch() {
    $('input[type=checkbox]').prop('checked', false);
    $('.card').fadeOut('fast');
};

let loopDivs = 6;
for (let i = 1; i <= loopDivs; i++) {

    let parentElement = document.querySelector('.dynamic-business-divs');

    let dyDiv = document.createElement('div');
    dyDiv.id = 'businessCard' + i;
    dyDiv.className = 'card col-12 col-md-6 col-lg-3';

    let busHeading = document.createElement('h1');
    busHeading.id = 'businessHead' + i;
    busHeading.className = 'heading-card';
    busHeading.innerHTML = 'Business ' + i;

    let busIcon = document.createElement('h1');
    busIcon.id = 'businessIcon' + i;
    busIcon.className = 'icon-card';
    busIcon.innerHTML = '<i class="fas fa-toolbox"></i>';

    // Now create and append to iDiv
    let innerDiv = document.createElement('div');
    innerDiv.id = 'business-info' + i;
    innerDiv.className = 'card-body info-card';
    innerDiv.innerHTML = '<table class="table-card">\
<tr>\
<td class="attrib-col1">\
<h6>Location:</h6>\
</td>\
<td class="attrib-col2">\
<h6 id="bus-location' + i + '"></h6>\
</td>\
</tr>\
<tr>\
<td class="attrib-col1">\
<h6>Trade Type:</h6>\
</td>\
<td class="attrib-col2">\
<h6 id="bus-trade' + i + '"></h6>\
</td>\
</tr>\
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
<h6>Social:</h6>\
</td>\
<td class="attrib-col2">\
<h6 id="bus-social' + i + '"></h6>\
</td>\
</tr>\
</table>'


    let busButtonMore = document.createElement('button');
    busButtonMore.id = 'businessButtonMore' + i;
    busButtonMore.className = 'btn btn-outline-dark more-btn hvr-sweep-to-bottom';
    busButtonMore.innerHTML = 'More Info...';

    let busButtonLess = document.createElement('button');
    busButtonLess.id = 'businessButtonLess' + i;
    busButtonLess.className = 'btn btn-outline-dark less-btn hvr-sweep-to-bottom';
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

//Trade Icon Variables
let elecIcon = '<i class="fas fa-bolt"></i>';
let plumIcon = '<i class="fas fa-wrench"></i>';
let carpIcon = '<i class="fas fa-screwdriver"></i>';
let mechIcon = '<i class="fas fa-car-battery"></i>';
let plastIcon = '<i class="fas fa-toolbox"></i>';
let decoIcon = '<i class="fas fa-paint-roller"></i>';

// Constructor function for business objects
function business(name, location, trade, address, number, email, social) {
    this.name = name;
    this.location = location;
    this.trade = trade;
    this.address = address;
    this.number = number;
    this.email = email;
    this.social = social;
}

// Create a business object
let electrician1 = new business("Ifti Electric", "St Albans", "Electrician", "123 Unkown Street", "0123456789", "ifti-electrician@elec.com", "www.facebook.com");

let plumber1 = new business("Ifti Plumber", "St Albans", "Plumber", "123 Unkown Street", "0123456789", "ifti-plumber@plumb.com", "www.facebook.com");

let carpenter1 = new business("Ifti Carpenter", "St Albans", "Carpenter", "123 Unkown Street", "0123456789", "ifti-carpenter@carp.com", "www.facebook.com");

let mechanic1 = new business("Ifti Mechanic", "St Albans", "Mechanic", "123 Unkown Street", "0123456789", "ifti-mechanic@mech.com", "www.facebook.com");

let plasterer1 = new business("Ifti Plasterer", "St Albans", "Plasterer", "123 Unkown Street", "0123456789", "ifti-plasterer@plast.com", "www.facebook.com");

let decorator1 = new business("Ifti Decorator", "St Albans", "Decorator", "123 Unkown Street", "0123456789", "ifti-decorator@deco.com", "www.facebook.com");

// Display all information in the right table element
document.getElementById("businessHead1").innerHTML = electrician1.name;
document.getElementById("businessIcon1").innerHTML = elecIcon;
document.getElementById("bus-location1").innerHTML = electrician1.location;
document.getElementById("bus-trade1").innerHTML = electrician1.trade;
document.getElementById("businessCard1").setAttribute("data-trade", electrician1.trade);
document.getElementById("bus-add1").innerHTML = electrician1.address;
document.getElementById("bus-num1").innerHTML = electrician1.number;
document.getElementById("bus-email1").innerHTML = electrician1.email;
document.getElementById("bus-social1").innerHTML = electrician1.social;


document.getElementById("businessHead2").innerHTML = plumber1.name;
document.getElementById("businessIcon2").innerHTML = plumIcon;
document.getElementById("bus-location2").innerHTML = plumber1.location;
document.getElementById("bus-trade2").innerHTML = plumber1.trade;
document.getElementById("businessCard2").setAttribute("data-trade", plumber1.trade);
document.getElementById("bus-add2").innerHTML = plumber1.address;
document.getElementById("bus-num2").innerHTML = plumber1.number;
document.getElementById("bus-email2").innerHTML = plumber1.email;
document.getElementById("bus-social2").innerHTML = plumber1.social;


document.getElementById("businessHead3").innerHTML = carpenter1.name;
document.getElementById("businessIcon3").innerHTML = carpIcon;
document.getElementById("bus-location3").innerHTML = carpenter1.location;
document.getElementById("bus-trade3").innerHTML = carpenter1.trade;
document.getElementById("businessCard3").setAttribute("data-trade", carpenter1.trade);
document.getElementById("bus-add3").innerHTML = carpenter1.address;
document.getElementById("bus-num3").innerHTML = carpenter1.number;
document.getElementById("bus-email3").innerHTML = carpenter1.email;
document.getElementById("bus-social3").innerHTML = carpenter1.social;


document.getElementById("businessHead4").innerHTML = mechanic1.name;
document.getElementById("businessIcon4").innerHTML = mechIcon;
document.getElementById("bus-location4").innerHTML = mechanic1.location;
document.getElementById("bus-trade4").innerHTML = mechanic1.trade;
document.getElementById("businessCard4").setAttribute("data-trade", mechanic1.trade);
document.getElementById("bus-add4").innerHTML = mechanic1.address;
document.getElementById("bus-num4").innerHTML = mechanic1.number;
document.getElementById("bus-email4").innerHTML = mechanic1.email;
document.getElementById("bus-social4").innerHTML = mechanic1.social;


document.getElementById("businessHead5").innerHTML = plasterer1.name;
document.getElementById("businessIcon5").innerHTML = plastIcon;
document.getElementById("bus-location5").innerHTML = plasterer1.location;
document.getElementById("bus-trade5").innerHTML = plasterer1.trade;
document.getElementById("businessCard5").setAttribute("data-trade", plasterer1.trade);
document.getElementById("bus-add5").innerHTML = plasterer1.address;
document.getElementById("bus-num5").innerHTML = plasterer1.number;
document.getElementById("bus-email5").innerHTML = plasterer1.email;
document.getElementById("bus-social5").innerHTML = plasterer1.social;


document.getElementById("businessHead6").innerHTML = decorator1.name;
document.getElementById("businessIcon6").innerHTML = decoIcon;
document.getElementById("bus-location6").innerHTML = decorator1.location;
document.getElementById("bus-trade6").innerHTML = decorator1.trade;
document.getElementById("businessCard6").setAttribute("data-trade", decorator1.trade);
document.getElementById("bus-add6").innerHTML = decorator1.address;
document.getElementById("bus-num6").innerHTML = decorator1.number;
document.getElementById("bus-email6").innerHTML = decorator1.email;
document.getElementById("bus-social6").innerHTML = decorator1.social;


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

    //Looks for empty cell
    $('tr').each(function () {
        $(this).find('td').each(function () {
            if ($(this).text().trim() == "") {
                $(this).closest("tr").remove();
            };
        });
    });

});
