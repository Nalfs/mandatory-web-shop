
let uFirstname = document.getElementById("namn");
let uLastname = document.getElementById("efternamn");
let uEmail = document.getElementById("email");
let uStreetAdress = document.getElementById("gatuadress");
let uCity = document.getElementById("stad");
let uzipCode = document.getElementById("zip");
let btnSubmit = document.getElementById("btnSubmit");

let cart = document.getElementById("cart-items");


let ids = [], ocurrences = [], itemId = [],  prev;




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

function displayCart(product) {
    let productCard = document.createElement("article");
    let heading = document.createElement("h3");
    let description = document.createElement("p");
    let price = document.createElement("footer");
    let image = document.createElement("img");
    let quantityOutput = document.createElement("span");
    let quantity = 0;

    heading.innerHTML = product.productName;
    image.setAttribute("src", product.productImageUrl);
    description.innerHTML = product.productDescription;
    price.innerHTML = `${product.productPrice} SEK`;
    for(let id of ids) {
        if (id === product.productId) {
            quantity++;

        }
    }
    quantityOutput.innerText = "Quantity: " + quantity;

    productCard.appendChild(heading);
    productCard.appendChild(image);
    productCard.appendChild(description);
    productCard.appendChild(price);
    productCard.appendChild(quantityOutput);
    cart.appendChild(productCard);
}

function noOfOccurences(items) {
    for(let item of items) {
           ids.push(item.productId);
       }
       ids.sort();
    for(let i =0; i < ids.length; i++) {
        if(ids[i] !== prev) {
            itemId.push(ids[i]);
            ocurrences.push(1);
        } else {
            ocurrences[ocurrences.length-1]++;
        }
        prev = ids[i];
    }
}

function loadItems() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    noOfOccurences(cartItems)
    let display = [];

    if (cartItems === null) {
        cart.innerHTML = `<h2>Ingen varukorg!</h2>`
    } else {

        for (let id of itemId) {
            console.log(itemId)
            let arr = cartItems.filter(item => item.productId === id);
            display.push(arr);
        }
        console.log(display)
        for(let i = 0; i < display.length - 1; i++) {
            console.log(display[i][i])
            displayCart(display[i][i])
        }
    }
}

loadItems();
