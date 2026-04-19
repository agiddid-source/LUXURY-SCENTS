const phoneNumber = "2349154428230";

// SCROLL
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

// CART SYSTEM
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById("cartItems");
  const total = document.getElementById("total");

  cartItems.innerHTML = "";
  let sum = 0;

  cart.forEach(item => {
    sum += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₦${item.price}`;
    cartItems.appendChild(li);
  });

  total.textContent = `Total: ₦${sum}`;
}
function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  let message = "Hello, I want to order:\n";

  cart.forEach(item => {
    message += `- ${item.name} (₦${item.price})\n`;
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  message += `Total: ₦${total}`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// IMAGE SLIDER
setInterval(() => {

  document.querySelectorAll(".slider").forEach(slider => {
    const images = slider.querySelectorAll("img");
    let index = [...images].findIndex(img => img.classList.contains("active"));

    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  });
}, 3000);

// ADMIN SYSTEM
function addProduct() {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const image = document.getElementById("productImage").value;

  if (!name || !price || !image) {
    alert("Fill all fields");
    return;
  }

  const product = { name, price, image };

  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.push(product);

  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
}

function renderProducts() {
  const container = document.getElementById("productsContainer");
  const savedProducts = JSON.parse(localStorage.getItem("products")) || [];

  savedProducts.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
    <img src="${p.image}">
    <h3>${p.name}</h3>
    <p>₦${p.price}</p>
    <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
    `;

    container.appendChild(div);
  });
}

renderProducts();

// CONTACT FORM
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