let btn1 = document.getElementById('sendbutton-gen');

document.getElementById('gen-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn1.textContent = 'Sending...';

        const serviceID = 'ifti-khan-portfolio';
        const templateID = 'ms2-trade-template';

        emailjs.send(serviceID, templateID, {
                "gen_message_type": $("#gen_question").val(),
                "gen_from_name": this.gen_fullname.value,
                "gen_from_email": this.gen_email.value,
                "gen_subject": this.gen_subject.value,
                "gen_message": this.gen_message.value,

            })
            .then((response) => {
                btn1.textContent = 'Sent';
                console.log("Message Has Been Sent", response);
                if (alert('Your message has been sent!')) {} else window.location.reload();
            }, (error) => {
                btn1.textContent = 'Error';
                console.log("Message Failed To Send", error);
                if (alert(`Oops something went wrong!`)) {} else
                    window.location.reload();
            });
    });

let btn2 = document.getElementById('sendbutton-add');

document.getElementById('add-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn2.textContent = 'Sending...';

        const serviceID = 'ifti-khan-portfolio';
        const templateID = 'ms2-trade-template';

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
                console.log("Message Has Been Sent", response);
                if (alert('Your message has been sent!')) {} else window.location.reload();
            }, (error) => {
                btn2.textContent = 'Error';
                console.log("Message Failed To Send", error);
                if (alert(`Oops something went wrong!`)) {} else
                    window.location.reload();
            });
    });
