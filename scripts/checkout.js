
let uFirstname = document.getElementById("namn");
let uLastname = document.getElementById("efternamn");
let uEmail = document.getElementById("email");
let uStreetAdress = document.getElementById("gatuadress");
let uCity = document.getElementById("stad");
let uzipCode = document.getElementById("zip");
let btnSubmit = document.getElementById("btnSubmit");

let cart = document.getElementById("cart-items");
let temp = document.getElementById("temp");
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

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
    let price = document.createElement("p");
    let image = document.createElement("img");
    let quantityOutput = document.createElement("span");
    let stock = calculateQuantity(product);
    let delBtn = document.createElement("button");

    heading.innerHTML = product.productName;
    image.setAttribute("src", product.productImageUrl);
    image.setAttribute('width', '150px');
    description.innerHTML = product.productDescription;
    price.innerHTML = `${product.productPrice} SEK`;
    delBtn.innerHTML = 'sub';
    delBtn.setAttribute("id", "del-cart");

    quantityOutput.innerText = "Quantity: " + stock;

    delBtn.onclick = () => {
        stock = stock - 1;
        quantityOutput.innerText = "Quantity: " + stock;
        subItem(product.productId);
    displayTotalPrice();
    };
    displayTotalPrice();
    productCard.appendChild(heading);
    productCard.appendChild(image);
    productCard.appendChild(description);
    productCard.appendChild(price);
    productCard.appendChild(quantityOutput);
    productCard.appendChild(delBtn);
    cart.appendChild(productCard);
}


//In the below function, items in the cart items array we have loaded from localStorage
//key is the productId property we are supplying when we call the function
function removeDuplicatedProducts(items, key) {
//product: the current product being processed in the array
//index: the index of the current product being processed in the array
//items: the cart items loaded from localStorage
    return items.filter((product, index, items) => {

        console.log("This will return true 3 times, since there are three different products in the cart. " +
            "It will return false every time the same product is repeated.",
            items.map(mapObj => mapObj[key]).indexOf(product[key]) === index);

//.map will loop over all the elements in the array and perform the specified action
//on every element
        return items.map(mapObj =>
//for every product we check if the productId for the product has occurred more than
//once before. The below will return true if the productId has not occurred before and
//false for all the productId that has occurred before
            mapObj[key]).indexOf(product[key]) === index;
    });

}

function subItem (productId) {
    let i;
    for (i = 0; i < cartItems.length; i++) {
        if(cartItems[i].productId === productId){
            cartItems.splice(i,1);
            break;
            }
        }
}

function calculateQuantity(product) {
    let quantity = 0;
    let productIds = [];

    for(let item of cartItems) {
        productIds.push(item.productId);
    }
    for(let id of productIds) {
        if(product.productId === id) {
            quantity++;
        }
    }
    return quantity;
}




function loadItems() {
    let cart = document.getElementById("cart-items");
    let result = removeDuplicatedProducts(cartItems, "productId");
    if (cartItems.length === 0) {
        cart.innerHTML = `<h2>No items added!</h2>`
    } else {
        for (let item of result) {
            displayCart(item);
        }
    }
}

loadItems();




function displayTotalPrice(){
    let sum = 0;
    cartItems.forEach(function(value, index, arry){
        sum += parseFloat(value.productPrice);
    });
    temp.innerHTML = `<h2>Varukorg</h2>` + "<br>" + 'Total price is: ' + sum + ' SEK';
}

