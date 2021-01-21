//This function below resets the checkboxes for the selec a trade and fades out the business cards.
function resetLocalSearch() {
    $('input[type=checkbox]').prop('checked', false);
    $('.card').fadeOut('fast');
}

//Here i have create a loop to dynamicaly create me business bootstrap cards for the local search page, at the moment it has been set to create 6 dynamic bootstrap cards.
let loopDivs = 6;
for (let i = 1; i <= loopDivs; i++) {

    //This is selecting the parent element to contain all of the dynamic bootstrap cards.
    let parentElement = document.querySelector('.dynamic-business-divs');

    //Here its creating the bootstrap card elements and setting the unique id using the var i and the bootstrap class names.
    let busCardDiv = document.createElement('div');
    busCardDiv.id = 'businessCard' + i;
    busCardDiv.className = 'card col-12 col-md-6 col-lg-4';

    //Here its creating the heading h1 elements for the bootstrap cards with a unique id using var i and setting a class name as well.
    let busHeading = document.createElement('h1');
    busHeading.id = 'businessHead' + i;
    busHeading.className = 'heading-card';

    //Here its creating another h1 element and this is for the fontawesome icons, it is also setting a unique id using var i, class name and a default icon if one can not be found on fontawesome.
    let busIcon = document.createElement('h1');
    busIcon.id = 'businessIcon' + i;
    busIcon.className = 'icon-card';
    busIcon.innerHTML = '<i class="fas fa-toolbox"></i>';

    //Here it is creating and inner div element so that all the business info can be stored into it. it is also setting a unique id using var i and two class names, one is a bootstrap class name the other is one that i have set.
    let innerDiv = document.createElement('div');
    innerDiv.id = 'business-info' + i;
    innerDiv.className = 'card-body info-card';

    //This part is the inner div html and it is the table that will store all the business info, i used backtick quotes to do this and in the table there will be two columns. the left column is for the fixed attributes names and the right column is for the business info which has a unique id so that the info from the constructor objects can be stored but getting the element id.
    innerDiv.innerHTML = `<table class="table-card">
<tr>
<td class="attrib-col1">
<h6>Location:</h6>
</td>
<td class="attrib-col2">
<h6 id="bus-location${i}"></h6>
</td>
</tr>
<tr>
<td class="attrib-col1">
<h6>Trade Type:</h6>
</td>
<td class="attrib-col2">
<h6 id="bus-trade${i}"></h6>
</td>
</tr>
<tr>
<td class="attrib-col1">
<h6>Address:</h6>
</td>
<td class="attrib-col2">
<h6 id="bus-add${i}"></h6>
</td>
</tr>
<tr>
<td class="attrib-col1">
<h6>Number:</h6>
</td>
<td class="attrib-col2">
<h6 id="bus-num${i}"></h6>
</td>
</tr>
<tr>
<td class="attrib-col1">
<h6>Email:</h6>
</td>
<td class="attrib-col2">
<h6 id="bus-email${i}"></h6>
</td>
</tr>
<tr>
<td class="attrib-col1">
<h6>Social:</h6>
</td>
<td class="attrib-col2">
<h6 id="bus-social${i}"></h6>
</td>
</tr>
</table>`;

    //Here it is creating the more info button that will show in the business card, it also has a unique id and has a bootstrap button class name.
    let busButtonMore = document.createElement('button');
    busButtonMore.id = 'businessButtonMore' + i;
    busButtonMore.className = 'btn btn-outline-dark more-btn hvr-sweep-to-bottom';
    busButtonMore.innerHTML = 'More Info...';

    //Here it is creating the less info button that will not show in the business card and will show when the more button is clicked, it also has a unique id and has a bootstrap buttom class name.
    let busButtonLess = document.createElement('button');
    busButtonLess.id = 'businessButtonLess' + i;
    busButtonLess.className = 'btn btn-outline-dark less-btn hvr-sweep-to-bottom';
    busButtonLess.innerHTML = 'Less Info...';
    busButtonLess.style.display = "none";

    //Here is where all of the created elements above are appended to there parent elements, busCardDiv is not the main overall parent but still is a parent because majority of the created elements are appending to it and the parent element is just a div with a bootstrap row class name.
    parentElement.appendChild(busCardDiv);
    busCardDiv.appendChild(busHeading);
    busCardDiv.appendChild(busIcon);
    busCardDiv.appendChild(innerDiv);
    busCardDiv.appendChild(busButtonMore);
    busCardDiv.appendChild(busButtonLess);


    //Here is a jQuery click function for more info button, if the more info button is click it will slide down the inner div table and hide itself and show the less info button.
    $(busButtonMore).click(function () {
        $(innerDiv).slideDown();
        $(busButtonMore).hide();
        $(busButtonLess).show();
    });

    //Here is a jQuery click function for less info button, if the less info button is click it will slide up the inner div table and hide itself and show the more info button.
    $(busButtonLess).click(function () {
        $(innerDiv).slideUp();
        $(busButtonMore).show();
        $(busButtonLess).hide();
    });
}

//These variables are storing the html for the fontawesome icons being directy taken from the fontawesome CDN.
let elecIcon = '<i class="fas fa-bolt" aria-hidden="true"></i>';
let plumIcon = '<i class="fas fa-wrench" aria-hidden="true"></i>';
let carpIcon = '<i class="fas fa-screwdriver" aria-hidden="true"></i>';
let mechIcon = '<i class="fas fa-car-battery" aria-hidden="true"></i>';
let plastIcon = '<i class="fas fa-toolbox" aria-hidden="true"></i>';
let decoIcon = '<i class="fas fa-paint-roller" aria-hidden="true"></i>';

//This is the constructor function for business objects to store the business information.
function business(name, location, trade, address, number, email, social) {
    this.name = name;
    this.location = location;
    this.trade = trade;
    this.address = address;
    this.number = number;
    this.email = email;
    this.social = social;
}

//Here i have created six dummy business object for my local search, each business represents a trade for the search checkboxes.
let electrician1 = new business("Ifti Electric", "St Albans", "Electrician", "123 Unkown Street", "0123456789", "ifti-electrician@elec.com", "www.facebook.com");

let plumber1 = new business("Ifti Plumber", "St Albans", "Plumber", "123 Unkown Street", "0123456789", "ifti-plumber@plumb.com", "www.facebook.com");

let carpenter1 = new business("Ifti Carpenter", "St Albans", "Carpenter", "123 Unkown Street", "0123456789", "ifti-carpenter@carp.com", "www.facebook.com");

let mechanic1 = new business("Ifti Mechanic", "St Albans", "Mechanic", "123 Unkown Street", "0123456789", "ifti-mechanic@mech.com", "www.facebook.com");

let plasterer1 = new business("Ifti Plasterer", "St Albans", "Plasterer", "123 Unkown Street", "0123456789", "ifti-plasterer@plast.com", "www.facebook.com");

let decorator1 = new business("Ifti Decorator", "St Albans", "Decorator", "123 Unkown Street", "0123456789", "ifti-decorator@deco.com", "www.facebook.com");

//Here i getting the dynamic right column cells using the unique ids from the table and then inserting the business object information into them along with the icon variables and setting a data-trade attribute according to the trade in the business object and this is linked to the checkbox search below and this is done for all six dummy businesses.

//Dummy Business One
document.getElementById("businessHead1").innerHTML = electrician1.name;
document.getElementById("businessIcon1").innerHTML = elecIcon;
document.getElementById("bus-location1").innerHTML = electrician1.location;
document.getElementById("bus-trade1").innerHTML = electrician1.trade;
document.getElementById("businessCard1").setAttribute("data-trade", electrician1.trade);
document.getElementById("bus-add1").innerHTML = electrician1.address;
document.getElementById("bus-num1").innerHTML = electrician1.number;
document.getElementById("bus-email1").innerHTML = electrician1.email;
document.getElementById("bus-social1").innerHTML = electrician1.social;

//Dummy Business Two
document.getElementById("businessHead2").innerHTML = plumber1.name;
document.getElementById("businessIcon2").innerHTML = plumIcon;
document.getElementById("bus-location2").innerHTML = plumber1.location;
document.getElementById("bus-trade2").innerHTML = plumber1.trade;
document.getElementById("businessCard2").setAttribute("data-trade", plumber1.trade);
document.getElementById("bus-add2").innerHTML = plumber1.address;
document.getElementById("bus-num2").innerHTML = plumber1.number;
document.getElementById("bus-email2").innerHTML = plumber1.email;
document.getElementById("bus-social2").innerHTML = plumber1.social;

//Dummy Business Three
document.getElementById("businessHead3").innerHTML = carpenter1.name;
document.getElementById("businessIcon3").innerHTML = carpIcon;
document.getElementById("bus-location3").innerHTML = carpenter1.location;
document.getElementById("bus-trade3").innerHTML = carpenter1.trade;
document.getElementById("businessCard3").setAttribute("data-trade", carpenter1.trade);
document.getElementById("bus-add3").innerHTML = carpenter1.address;
document.getElementById("bus-num3").innerHTML = carpenter1.number;
document.getElementById("bus-email3").innerHTML = carpenter1.email;
document.getElementById("bus-social3").innerHTML = carpenter1.social;

//Dummy Business Four
document.getElementById("businessHead4").innerHTML = mechanic1.name;
document.getElementById("businessIcon4").innerHTML = mechIcon;
document.getElementById("bus-location4").innerHTML = mechanic1.location;
document.getElementById("bus-trade4").innerHTML = mechanic1.trade;
document.getElementById("businessCard4").setAttribute("data-trade", mechanic1.trade);
document.getElementById("bus-add4").innerHTML = mechanic1.address;
document.getElementById("bus-num4").innerHTML = mechanic1.number;
document.getElementById("bus-email4").innerHTML = mechanic1.email;
document.getElementById("bus-social4").innerHTML = mechanic1.social;

//Dummy Business Five
document.getElementById("businessHead5").innerHTML = plasterer1.name;
document.getElementById("businessIcon5").innerHTML = plastIcon;
document.getElementById("bus-location5").innerHTML = plasterer1.location;
document.getElementById("bus-trade5").innerHTML = plasterer1.trade;
document.getElementById("businessCard5").setAttribute("data-trade", plasterer1.trade);
document.getElementById("bus-add5").innerHTML = plasterer1.address;
document.getElementById("bus-num5").innerHTML = plasterer1.number;
document.getElementById("bus-email5").innerHTML = plasterer1.email;
document.getElementById("bus-social5").innerHTML = plasterer1.social;

//Dummy Business Six
document.getElementById("businessHead6").innerHTML = decorator1.name;
document.getElementById("businessIcon6").innerHTML = decoIcon;
document.getElementById("bus-location6").innerHTML = decorator1.location;
document.getElementById("bus-trade6").innerHTML = decorator1.trade;
document.getElementById("businessCard6").setAttribute("data-trade", decorator1.trade);
document.getElementById("bus-add6").innerHTML = decorator1.address;
document.getElementById("bus-num6").innerHTML = decorator1.number;
document.getElementById("bus-email6").innerHTML = decorator1.email;
document.getElementById("bus-social6").innerHTML = decorator1.social;

//This document ready function loads the DOM and within it is all the jQuery click functions for my checkbox search.
$(document).ready(function () {

    //Here i have created six jQuery click function for the checkbox search for my locals page. So when a user click on the specific trade checkbox and it is checked, it will then show the user that specfic trade business card using the data-trade attribute set above for that business card and if the checkbox is then unchecked or not checked it will hide the business card.

    //Checkbox Electrician
    $("#electrician-local").click(function () {
        if ($("#electrician-local").is(':checked')) {
            $('.card[data-trade="Electrician"]').show();
        } else {
            $('.card[data-trade="Electrician"]').hide();
        }
    });

    //Checkbox Plumber
    $("#plumber-local").click(function () {
        if ($("#plumber-local").is(':checked')) {
            $('.card[data-trade="Plumber"]').show();
        } else {
            $('.card[data-trade="Plumber"]').hide();
        }
    });

    //Checkbox Carpenter
    $("#carpenter-local").click(function () {
        if ($("#carpenter-local").is(':checked')) {
            $('.card[data-trade="Carpenter"]').show();
        } else {
            $('.card[data-trade="Carpenter"]').hide();
        }
    });

    //Checkbox Mechanic
    $("#mechanic-local").click(function () {
        if ($("#mechanic-local").is(':checked')) {
            $('.card[data-trade="Mechanic"]').show();
        } else {
            $('.card[data-trade="Mechanic"]').hide();
        }
    });

    //Checkbox Plasterer
    $("#plasterer-local").click(function () {
        if ($("#plasterer-local").is(':checked')) {
            $('.card[data-trade="Plasterer"]').show();
        } else {
            $('.card[data-trade="Plasterer"]').hide();
        }
    });

    //Checkbox Decorator
    $("#decorator-local").click(function () {
        if ($("#decorator-local").is(':checked')) {
            $('.card[data-trade="Decorator"]').show();
        } else {
            $('.card[data-trade="Decorator"]').hide();
        }
    });

    //This jQuery functions looks for empty table cells within the dynamic table within the business card info and then removes the entire table row if the cell is empty. This is handy because if a tradesperson does not have certain information like a website or an address it will remove the entire row from the table if left blank.
    $('tr').each(function () {
        $(this).find('td').each(function () {
            if ($(this).text().trim() === "") {
                $(this).closest("tr").remove();
            }
        });
    });

});
