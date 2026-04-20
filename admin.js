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

  alert("Product added!");
}