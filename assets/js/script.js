//This function is to toggle the dark mode class which changes the default background colour to black. this function also changes the dark button text from off to on when the button is clicked.
function darkTheme() {
    let elementBody = document.body;
    elementBody.classList.toggle("dark-mode");

    let darkButton = document.getElementById("dark-btn");
    darkButton.classList.toggle("active-nav");

    if (darkButton.innerHTML === "Dark Mode<br> Off") {
        darkButton.innerHTML = "Dark Mode<br> On";
    } else if (darkButton.innerHTML === "Dark Mode<br> On") {
        darkButton.innerHTML = "Dark Mode<br> Off";
    } else {
        darkButton.innerHTML = "Dark Mode<br> On";
    }
}

//This is for the modal, so when the user clicks anywhere outside of the modal box when it is open, it will refresh the page.
let myModal = document.getElementById("contact-modal");
window.onclick = function (event) {
    if (event.target == myModal) {
        location.reload();
    }
};

//This document ready function loads the DOM.
$(document).ready(function () {

    //This block of code is for floating scroll button, so when a user scrolls down a certain amount it will be visible and if they scroll up a certain amount, it will not be visible.
    let topButton = $('#to-top-btn');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            topButton.addClass('visible');
        } else {
            topButton.removeClass('visible');
        }
    });

    //This is part of the floating scroll button, so when a user clicks the button it will take the user back to the top of the page.
    topButton.on('click', function (event) {
        event.preventDefault();
        $('html, body').scrollTop(0);
    });

    //This click function is to show the google results once the show results heading is clicked.
    $(".result-heading-show").click(function () {
        $('.result-con').slideDown(750);
        $('.result-heading-show').hide();
        $('.result-heading-hide').show();
        $('#result').show(750, "linear");
    });

    //This click function is to hide the google results once the hide results heading is clicked.
    $(".result-heading-hide").click(function () {
        $('.result-con').slideUp(750);
        $('.result-heading-show').show();
        $('.result-heading-hide').hide();
        $('#result').hide(750, "linear");
    });

    //Contact Modal
    //When a user clicks the contact link it will add the css class active-nav and removes the css class hvr-pulse.
    $(".contact-me").click(function () {
        $(".contact-me").addClass("active-nav").removeClass("hvr-pulse");
    });

    //When the users clicks the time button in the contact modal, it will reload the whole page.
    $(".close").click(function () {
        location.reload();
    });

    //When a user accesses the contact model, there are two radio button and the user has to check one them to display either the general question form or add a business form.

    //This click function is for the general question form, this will make the form slide down and if the other contact form is showing, it will slide up at a speed of 200 milliseconds.
    $("#gen_question").click(function () {
        if ($("#gen_question").is(':checked')) {
            $(".gen-question-form").slideDown();
            $(".add-business-form").slideUp(200);
        }
    });

    //This click function is for the add business form, this will make the form slide down and if the other contact form is showing, it will slide up at a speed of 200 milliseconds.
    $("#add_business").click(function () {
        if ($("#add_business").is(':checked')) {
            $(".add-business-form").slideDown();
            $(".gen-question-form").slideUp(200);
        }
    });

    //This block of code is for the contact modal so that is can be accessed from any page within the project and was taken and modified from the bootstrap documentation. Originally i had duplicate code so that i could access the modal from another page, but with this block of code it allows me to reduce the code and just find the modal body once it is accessed.
    $('#contact-modal').on('show.bs.modal', function () {

        let modal = $(this);

        //This stores and loads the rest of the contact modal body from a HTML string using backtick quotes. Inside of the backticks i have both the general question form and the add business form and this makes up the contact modal body. The EmailJS API script is also in the html string below the body, it had to go there to allows users to send me emails using the contact modal.
        modal.find('.modal-body').html(`<!--General Question Contact Form-->
<div class="gen-question-form">
<form id="gen-form">
<input type="text" name="gen_fullname" id="gen_fullname" placeholder="Name" class="gen-input-fields" required><br>

<input type="email" name="gen_emailaddress" id="gen_email" placeholder="Email" class="gen-input-fields" required><br>

<input type="text" name="gen_subject" id="gen_subject" placeholder="Subject" class="gen-input-fields" required><br>

<textarea id="gen_message" name="gen_message" placeholder="Message" rows="7" class="gen-input-fields" required></textarea><br>

<!--Send Form Button-->
<button type="submit" id="sendbutton-gen" class="btn btn-outline-secondary hvr-sweep-to-bottom send-btn">send</button>

<!--Reset Form Button-->
<button type="reset" id="clear-form-gen" class="btn btn-outline-secondary hvr-sweep-to-bottom reset-btn">Clear</button>
</form>
</div>

<!--Add A Business Contact Form-->
<div class="add-business-form">
<form id="add-form">
<input type="text" name="add_fullname" id="add_fullname" placeholder="Name" class="add-input-fields" required><br>

<input type="text" name="add_number" id="add_number" placeholder="Contact Number" class="add-input-fields" required><br>

<input type="email" name="add_emailaddress" id="add_email" placeholder="Email" class="add-input-fields" required><br>

<input type="text" name="add_bussines_name" id="add_business_name" placeholder="Bussines Name" class="add-input-fields" required><br>

<input type="text" name="add_bussines_address" id="add_business_address" placeholder="Bussines Address" class="add-input-fields" required><br>

<textarea id="add_message" name="add_message" placeholder="Additional Information e.g. Business Description, Socail Media Links" rows="7" class="add-input-fields" required></textarea><br>

<!--Send Form Button-->
<button type="submit" id="sendbutton-add" class="btn btn-outline-secondary hvr-sweep-to-bottom send-btn">send</button>

<!--Reset Form Button-->
<button type="reset" id="clear-form-add" class="btn btn-outline-secondary hvr-sweep-to-bottom reset-btn">Clear</button>
</form>
</div>
<script src="assets/js/sendemail.js"></script>`);

    });

});
