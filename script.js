let products = JSON.parse(localStorage.getItem("products")) || [];
let cart = [];
let total = 0;

// SHOW PRODUCTS
function showProducts(){
  let list = document.getElementById("productList");
  if(!list) return;
  list.innerHTML = "";
  products.forEach(p=>{
    list.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h4>${p.name}</h4>
        <p>?${p.price}</p>
        <button onclick="addToCart('${p.name}',${p.price})">Add to Cart</button>
      </div>
    `;
  });
}
showProducts();

// ADMIN ADD PRODUCT
function addProduct(){
  let p = {
    name: name.value,
    price: price.value,
    img: img.value
  };
  products.push(p);
  localStorage.setItem("products", JSON.stringify(products));
  alert("Product Added");
}

// CART
function addToCart(name, price){
  cart.push({name, price});
  total += price;
  document.getElementById("cartCount").innerText = cart.length;
  renderCart();
}

function renderCart(){
  let box = document.getElementById("cartItems");
  box.innerHTML = "";
  cart.forEach(i=>{
    box.innerHTML += <p>${i.name} - ?${i.price}</p>;
  });
  document.getElementById("total").innerText = total;
}

function toggleCart(){
  let box = document.getElementById("cartBox");
  box.style.display = box.style.display=="block"?"none":"block";
}

function checkout(){
  alert("Pay ?"+total+" via UPI");
}