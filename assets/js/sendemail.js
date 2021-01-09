let btn1 = document.getElementById('sendbutton-gen');

document.getElementById('gen-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn1.textContent = 'Sending...';

        const serviceID = 'ifti-khan-portfolio';
        const templateID = 'ms2-gen-template';

        emailjs.send(serviceID, templateID, {
                "message_type": $("#gen_question").val(),
                "from_name": this.gen_fullname.value,
                "message": this.gen_message.value,
                "subject": this.gen_subject.value,
                "from_email": this.gen_email.value,
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
        const templateID = 'ms2-gen-template';

        emailjs.send(serviceID, templateID, {
                "message_type": $("#add_business").val(),
                "from_name": this.add_fullname.value,
                "contact_number": this.add_number.value,
                "from_email": this.add_email.value,
                "business_name": this.add_business_name.value,
                "business_address": this.add_business_address.value,
                "message": this.add_message.value,
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
