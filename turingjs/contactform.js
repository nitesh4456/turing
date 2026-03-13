// const scriptURL = 'https://script.google.com/macros/s/AKfycbyfAs__1bQ7Efdx2wbBZDx3XkZCMkdvubyUZ-u2nWIzWX8XZ8Hl0GfG5JLOPPSrr_em/exec';

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.forms['contact-form']; // Ensure your <form> has name="contact-form"

//   if (form) {
//     form.addEventListener('submit', e => {
//       e.preventDefault();

//       fetch(scriptURL, { 
//         method: 'POST', 
//         body: new FormData(form)
//       })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         document.getElementById('sendmessage').style.display = 'block';
//         document.getElementById('errormessage').style.display = 'none';
//         alert("Thank you! Your message has been submitted.");
//         setTimeout(() => {
//           window.location.reload();
//         }, 2000); // Allow user to see confirmation before reload
//       })
//       .catch(error => {
//         console.error('Error!', error.message);
//         document.getElementById('errormessage').innerText = "Submission failed. Please try again!";
//         document.getElementById('errormessage').style.display = 'block';
//       });
//     });
//   } else {
//     console.error("Form with name 'contact-form' not found.");
//   }
// });


const scriptURL = 'https://script.google.com/macros/s/AKfycbyfAs__1bQ7Efdx2wbBZDx3XkZCMkdvubyUZ-u2nWIzWX8XZ8Hl0GfG5JLOPPSrr_em/exec';

document.addEventListener("DOMContentLoaded", function () {

  const form = document.forms['contact-form'];

  if (!form) {
    console.error("Form with name 'contact-form' not found.");
    return;
  }

  const submitBtn = form.querySelector("button[type='submit']");

  form.addEventListener('submit', function(e) {

    e.preventDefault();
    submitBtn.disabled = true;

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {

      if (!response.ok) throw new Error("Network response failed");

      // document.getElementById('sendmessage').style.display = 'block';
      const sendMsg = document.getElementById('sendmessage');
      if(sendMsg){
        sendMsg.style.display = 'block';
      }
      document.getElementById('errormessage').style.display = 'none';

      form.reset();
      submitBtn.disabled = false;

    })
    .catch(error => {

      console.error('Error!', error.message);

      document.getElementById('errormessage').innerText =
        "Submission failed. Please try again.";

      document.getElementById('errormessage').style.display = 'block';

      submitBtn.disabled = false;

    });

  });

});
