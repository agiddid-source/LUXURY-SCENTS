function addProduct() {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const image = document.getElementById("productImage").value;

  if (!name || !price || !image) {
    alert("Fill all fields");
    return;
  }


  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.push({ name, price, image });

  localStorage.setItem("products", JSON.stringify(products));

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productImage").value = "";

  alert("Product added successfully!");
  renderAdminProducts();
}

function deleteProduct(index) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  renderAdminProducts();
}

function renderAdminProducts() {
  const container = document.getElementById("adminProducts");
  const products = JSON.parse(localStorage.getItem("products")) || [];

  container.innerHTML = "";

  products.forEach((p, index) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <p>${p.name} - ₦${p.price}</p>
    <button onclick="deleteProduct(${index})">Delete</button>
    `;

    container.appendChild(div);
  });
}

renderAdminProducts();