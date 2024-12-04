let cart = [];

function addToCart(productName, price) {
  cart.push({ productName, price });
  alert(`${productName} ha sido agregado al carrito.`);
  updateCartButton();
}

function updateCartButton() {
  const cartButton = document.querySelector('.cart button');
  cartButton.innerText = `Ver carrito (${cart.length})`;
}

function viewCart() {
  const cartModal = document.getElementById('cartModal');
  const cartItemsList = document.getElementById('cartItems');
  cartItemsList.innerHTML = '';

  let totalPrice = 0;
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerText = `${item.productName} - $${item.price}`;
    cartItemsList.appendChild(listItem);
    totalPrice += item.price;
  });

  document.getElementById('totalPrice').innerText = `Total: $${totalPrice}`;
  cartModal.style.display = 'flex';
}

function closeCart() {
  document.getElementById('cartModal').style.display = 'none';
}

function checkout() {
  alert('¡Gracias por tu compra!');
  cart = [];
  updateCartButton();
  closeCart();
}