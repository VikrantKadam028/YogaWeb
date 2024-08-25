function sendEmail(event) {
    event.preventDefault();
  
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Send the email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      name: name,
      email: email,
      message: message
    })
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      showPopup("Form submitted successfully!");
      document.getElementById('contactForm').reset(); // Clear the form
    }, (error) => {
      console.log("FAILED...", error);
      showPopup("Failed to submit form. Please try again.");
    });
  }
  
  function showPopup(message) {
    const popup = document.getElementById('popup');
    popup.innerHTML = `${message} <span id="closePopup" style="margin-left: 20px; cursor: pointer;">&times;</span>`;
    popup.style.display = 'block';
  
    // Auto-hide popup after 10 seconds
    setTimeout(() => {
      popup.style.display = 'none';
    }, 10000);
  
    // Allow closing the popup with the close icon
    document.getElementById('closePopup').onclick = function() {
      popup.style.display = 'none';
    };
  }
  
