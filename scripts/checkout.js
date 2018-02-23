
let uFirstname = document.getElementById("namn");
let uLastname = document.getElementById("efternamn");
let uEmail = document.getElementById("email");
let uStreetAdress = document.getElementById("gatuadress");
let uCity = document.getElementById("stad");
let uzipCode = document.getElementById("zip");
let btnSubmit = document.getElementById("btnSubmit");


btnSubmit.addEventListener("click",function () {

    let errName = document.getElementById("errName");
    let errLast = document.getElementById("errLast");
    let errEmail = document.getElementById("errEmail");
    let errGat = document.getElementById("errGat");
    let errCity = document.getElementById("errCity");
    let errZip = document.getElementById("errZip");
    let emailPattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    let zipPattern = /^[a-zA-Z0-9\s,'-]+$/;

    if (uFirstname.value === '' || uFirstname.value.length < 3){
        errName.setAttribute("style", "visibility:visible");
        uFirstname.focus();
        return false;

    }else if(uLastname.value === '' || uLastname.value.length < 3){
        errLast.setAttribute("style", "visibility:visible");
        uLastname.focus();
        return false;


    }else if((uEmail.value === '' || uEmail.value.length < 5 || !emailPattern.test(uEmail.value))){
        errEmail.setAttribute("style", "visibility:visible");
        uEmail.focus();
        return false;


    }else if((uStreetAdress.value === '' || uStreetAdress.value.length < 4 || !zipPattern.test(uStreetAdress.value))) {
        errGat.setAttribute("style", "visibility:visible");
        uStreetAdress.focus();
        return false;


    }else if(uCity.value === '' || uCity.value.length < 3) {
        errCity.setAttribute("style", "visibility:visible");
        uCity.focus();
        return false;


    }else if((uzipCode.value === '' || uzipCode.value.length < 3 || !zipPattern.test(uzipCode.value))) {
        errZip.setAttribute("style", "visibility:visible");
        uzipCode.focus();
        return false;


}else{
        document.getElementById("frmUserInfo").submit();
    }
});



function loadItems() {

    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let cart = document.getElementById("cart-items");


    if (cartItems === null) {
        cart.innerHTML = `<h2>No items added!</h2>`
    } else {
        for (let item of cartItems) {
            displayCart(item);
        }
    }


    function displayCart(product) {
        let productCard = document.createElement("article");
        let heading = document.createElement("h3");
        let description = document.createElement("p");
        let price = document.createElement("footer");
        let image = document.createElement("img");

        heading.innerHTML = product.productName;
        image.setAttribute("src", product.productImageUrl);
        description.innerHTML = product.productDescription;
        price.innerHTML = `${product.productPrice} SEK`;

        productCard.appendChild(heading);
        productCard.appendChild(image);
        productCard.appendChild(description);
        productCard.appendChild(price);
        cart.appendChild(productCard);
    }



}
loadItems();
