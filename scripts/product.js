
function product(Name, Price, Description, ImageUrl, Id, link) {

    this.productName = Name;
    this.productPrice = Price;
    this.productDescription = Description;
    this.productImageUrl = ImageUrl;
    this.productId = Id;
    this.productLink = link;
}

function showProductList(Name, Price, Description, ImageUrl, Id, link) {
    let htmlContent = "";

    htmlContent += "<div class='productItem'>";
    htmlContent += "<span>" + Name + "</span>" + "<br>";
    htmlContent += "Art:" + Id + "<br>";
    htmlContent += "<p>" + Price + "</p>";
    htmlContent += Description + "<br>";
    htmlContent += "<a href='"+ link + "'><img src='" + ImageUrl + "' class='product-image'>" + "</a><br>";
    htmlContent += '<button class="product-btn" data-product-id="' + Id + '">' + "LÄGG I VARUKORG";
    htmlContent += "</button>";
    htmlContent += "</p></div>";


    document.getElementById("dspProductList").innerHTML += htmlContent;

}

let objProduct1 = new product("Book of Mormons","149kr","The gentle journey of a Mormon family","../views/images/bookOne.png", 100);
let objProduct2 = new product("The One","129kr","The one book to rule them all","../views/images/bookTwo.png", 101, "product-1.html");
let objProduct3 = new product("Stack of life","139kr","Anything & everything you need to make it","../views/images/bookThree.png", 102);
let objProduct4 = new product("Stack of life","139kr","Anything & everything you need to make it","../views/images/bookThree.png", 103);
let objProduct5 = new product("Stack of life","139kr","Anything & everything you need to make it","../views/images/bookThree.png", 103);
let objProduct6 = new product("Stack of life","139kr","Anything & everything you need to make it","../views/images/bookThree.png", 104);

let arrProducts = [objProduct1,objProduct2,objProduct3, objProduct4, objProduct5, objProduct6];


for (let i = 0; i < arrProducts.length; i++){
    showProductList(arrProducts[i].productName,arrProducts[i].productPrice, arrProducts[i].productDescription,arrProducts[i].productImageUrl, arrProducts[i].productId,arrProducts[i].productLink);
}



function getProductFromId(id) {
    for (let product of arrProducts) {
        if (product.productId == id) {
            return product;
        }
    }
}