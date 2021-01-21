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

    $('#contact-modal').on('show.bs.modal', function () {

        var modal = $(this);

        //This loads the rest of my modal body content from a HTML string using backtick quotes
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
