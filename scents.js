const phoneNumber = "2348161637773";

function orderNow(product) {
  const message = `Hello, I want to order ${product}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message");

  if (name === "" || phone === "") {
    message.textContent = "Please fill all fields";
    message.style.color = "red";
    return;
  }

  if (phone.length < 10) {
    message.textContent = "Enter a valid phone number";
    message.style.color = "red";
    return;
  }

  message.textContent = "Message sent successfully!";
  message.style.color = "green";

});