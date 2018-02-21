
function product(Name, Price, Description, ImageUrl) {

    this.productName = Name;
    this.productPrice = Price;
    this.productDescription = Description;
    this.productImageUrl = ImageUrl;
}

function showProductList(Name, Price, Description, ImageUrl) {
    let htmlContent = "";

    htmlContent += "<div class='productItem'>";
    htmlContent += "<span>" + Name + "</span>";
    htmlContent += "<p>" + Price + "</p>";
    htmlContent += Description + "<br>";
    htmlContent += '<img src="' + ImageUrl + '" class="product-image">' + "<br>";
    htmlContent += '<button class="product-btn">' + "KÖP";
    htmlContent += "</button>";
    htmlContent += "</p></div>";

    
    document.getElementById("dspProductList").innerHTML += htmlContent;

}

let objProduct1 = new product("Whey 100","149kr","100% Vassleisolat, av högsta kvalité","https://www.gymgrossisten.com/media/catalog/product/cache/1/image/600x/9df78eab33525d08d6e5fb8d27136e95/5/7/5790_1.png");
let objProduct2 = new product("Whey 80","129kr","Whey 80, regular, 100% gains","https://www.gymgrossisten.com/media/catalog/product/cache/1/small_image/200x200/9df78eab33525d08d6e5fb8d27136e95/5/8/585-1_1.png");
let objProduct3 = new product("Protein Isolate","139kr","Premium Isolate for any and all needs","https://www.gymgrossisten.com/media/catalog/product/cache/1/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/0/100-whey-isolate-1500g-stacker2-europe_1.png");

let arrProducts = [objProduct1,objProduct2,objProduct3];


for (let i = 0; i < arrProducts.length; i++){
    showProductList(arrProducts[i].productName,arrProducts[i].productPrice, arrProducts[i].productDescription,arrProducts[i].productImageUrl);
}


