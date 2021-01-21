//Here is my Send Email Script for my two modal contact forms. To create these i used a EmailJS and i came accross this in one of the code institute teaching modules.

//Here is a list of URL that helped me create this JS Script.
//https://dashboard.emailjs.com/admin/integration/browser
//https://www.emailjs.com/docs/sdk/send/
//https://jsfiddle.net/api/post/library/pure/ - This code is from the playground test features within EmailJS and might not work since you have to login with my user details.

//Creating a variable btn1 to store the send button in the general question contact form so that the inner text can be changed at certain points.
let btn1 = document.getElementById('sendbutton-gen');

//This function is for the timing event used below and it is used to change btn1 text to Send.
function changeSendBtn1Text() {
    btn1.textContent = 'Send';
}

//This function here is for the timing event below and is used to reset the general question form.
function resetFormGen() {
    document.getElementById('gen-form').reset();
}

//This block of code here is for the overall EmailJS and was taken from the testing playround of EmailJS and then modified to my needs. The top section adds an event listener to the forms submit button and once clicked it will change the button text to sending.
document.getElementById('gen-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn1.textContent = 'Sending...';

        //These two variables store two very important details and these are needed for the next part to actually send the an email with EmailJS
        let serviceID = 'ifti-khan-portfolio';
        let templateID = 'ms2-trade-template';

        //Here is a promise method, as you can see the two variables above are used and below them is the template parameters of my email template that are assigned the value of the input fields of my general question contact form.
        emailjs.send(serviceID, templateID, {
                "gen_message_type": $("#gen_question").val(),
                "gen_from_name": this.gen_fullname.value,
                "gen_from_email": this.gen_email.value,
                "gen_subject": this.gen_subject.value,
                "gen_message": this.gen_message.value,

            })
            //Here is the response object which contains the status and text properties and this will show in the console of the browser as 200 for status and OK for text. I have also added a button text change to sent once the message has been send and for an alert window to open informing users that the message has been sent. The timing event uses the function above and changes the text back to send and resets the form.
            .then((response) => {
                btn1.textContent = 'Sent';
                console.log("Message Has Been Sent", response.status, response.text);
                alert('Your message has been sent!');
                setTimeout(changeSendBtn1Text, 5000);
                setTimeout(resetFormGen, 5000);

                //Here is the error object and if there is an error it will display that in the console of the browser informing of the error. As well as changing the button text to error and opening an alert window to the user infroming them that there was an error. The timing event uses the function above and changes the text back to send and resets the form.
            }, (error) => {
                btn1.textContent = 'Error';
                console.log("Message Failed To Send", error);
                alert(`Oops something went wrong!`);
                setTimeout(changeSendBtn1Text, 5000)
                setTimeout(resetFormGen, 5000);

            });
    });


//This block of code is the same as the one above but its for the second contact form which is to add a business so the EmailJS template parameters are different but uses the same template. The reason it uses the same template is that i am using a free service and can only create two templates one is being used for my portfolio.

//Creating a variable btn2 to store the send button in the add a business contact form so that the inner text can be changed at certain points.
let btn2 = document.getElementById('sendbutton-add');

//This function is for the timing event used below and it is used to change btn2 text to Send.
function changeSendBtn2Text() {
    btn2.textContent = 'Send';
}

//This function here is for the timing event below and is used to reset the add a business form.
function resetFormAdd() {
    document.getElementById('add-form').reset();
}

document.getElementById('add-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn2.textContent = 'Sending...';

        const serviceID = 'ifti-khan-portfolio';
        const templateID = 'ms2-trade-template';

        //EmailJS template parameters with the values of my second contact form which is to add a business for my locals page.
        emailjs.send(serviceID, templateID, {
                "add_message_type": $("#add_business").val(),
                "add_from_name": this.add_fullname.value,
                "add_contact_number": this.add_number.value,
                "add_from_email": this.add_email.value,
                "add_business_name": this.add_business_name.value,
                "add_business_address": this.add_business_address.value,
                "add_message": this.add_message.value,
            })
            .then((response) => {
                btn2.textContent = 'Sent';
                console.log("Message Has Been Sent", response.status, response.text);
                alert('Your message has been sent!');
                setTimeout(changeSendBtn2Text, 5000);
                setTimeout(resetFormAdd, 5000);

            }, (error) => {
                btn2.textContent = 'Error';
                console.log("Message Failed To Send", error);
                alert(`Oops something went wrong!`);
                setTimeout(changeSendBtn2Text, 5000);
                setTimeout(resetFormAdd, 5000);

            });
    });
