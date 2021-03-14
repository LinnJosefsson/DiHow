// Confirm message after Booking

const btnSubmit = document.querySelector('.f-btn');
const form = document.querySelector('.rsvp-form');
const fullName = document.querySelector('.f-name');
const email = document.querySelector('.f-email');
const msg1 = document.querySelector('#msg1');
const msg2 = document.querySelector('#msg2');

btnSubmit.addEventListener('click', () => {

    if(fullName.value && email.value !== "") {
        msg1.textContent = "Din plats är bokad!";
        msg2.textContent = "Håll utkik i mailen efter en bekräftelse och mer information";
        form.style.display ="none";
        
      }
      if (fullName.value && email.value === "") {
        false;
        email.addEventListener("input", function (event) {
          if (email.validity.typeMismatch) {
            email.setCustomValidity("Ange en giltig email, tack!");
          }
        });
      }
    });