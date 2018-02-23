function updateCartQuantity() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    document.getElementById("myNumber").innerHTML = cartItems.length;
}
updateCartQuantity()