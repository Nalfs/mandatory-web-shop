


function addToCart(productId) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let show = cartItems.length;

    document.getElementById("myNumber").innerHTML = show;

    let product = getProductFromId(productId);
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

}

$('.product-btn').on('click', function() {

    let productId = this.getAttribute('data-product-id');
    addToCart(productId);


});


