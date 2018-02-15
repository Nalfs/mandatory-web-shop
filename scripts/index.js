
function Product(Name, Price, Description, ImageUrl) {

        this.productName = Name;
        this.productPrice = Price;
        this.productDescription = Description;
        this.productImageUrl = ImageUrl;
    }

function showProductList(Name, Price, Description, ImageUrl) {
        let htmlContent = "";

            htmlContent += "<p>";
        htmlContent += Name + "<br>";
        htmlContent += Price + "<br>";
        htmlContent += Description + "<br>";
        htmlContent += '<img src="' + ImageUrl + '" class="product-image">' + "<br>";
        htmlContent += "</p>";

            document.getElementById("dspProductList").innerHTML += htmlContent;
    }

let objProduct1 = new Product("Whey 100","149kr","100% vassleproteinisolat","https://www.gymgrossisten.com/media/catalog/product/cache/1/image/600x/9df78eab33525d08d6e5fb8d27136e95/5/7/5790_1.png");
let objProduct2 = new Product("Whey 80","129kr","Import from Brazil","https://www.gymgrossisten.com/media/catalog/product/cache/1/small_image/200x200/9df78eab33525d08d6e5fb8d27136e95/5/8/585-1_1.png");
let objProduct3 = new Product("Protein Isolate",30,"Made in Sweden","https://www.gymgrossisten.com/media/catalog/product/cache/1/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/0/100-whey-isolate-1500g-stacker2-europe_1.png");

let arrProducts = [objProduct1,objProduct2,objProduct3];


for (let i = 0; i < arrProducts.length; i++){
showProductList(arrProducts[i].productName,arrProducts[i].productPrice, arrProducts[i].productDescription,arrProducts[i].productImageUrl);
}


/* form validation checkoutlist*/

//set up the script
(function (){
    document.forms.register.noValidate = true;
    $('form').on('submit', function(e) {
        let elements = this.elements;
        let valid = {};
        let isValid;
        let isFormValid;

        //perform generic checks(calls functions outside the event handler)
        for (let i = 0, l = (elements.length -1); i < l; i++) {
            isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
            if (!isValid) {
                showErrorMessage(elements[i]);
            } else{
                removeErrorMessage(elements[i]);
            }
            valid[elements[i].id] = isValid;
        } //end of loop

        //Did it pass? Can I submit form?
        // Loop through valid object, if there are errors set is isFormValid to false
        for (let field in valid) {
            if (!valid[field]) {
                isFormValid = false;
                break;
            }
            isFormValid = true;
        }
        //if the form did not validate, prevent it being submitted
        if (!isFormValid) {
            e.preventDefault();
        }
    });
    ...
}());

//Checks for required attribute, if present, check for active value

function validateRequired(el) {
    if (isRequired(el)) {
        let valid = !isEmpty(el);
        if(!valid){
            setErrorMessage(el, 'Field is require');
        }
        return valid;
    }
    return true;
}

//takes an element as paramenter and checks if required attribute is present on that element.
// It returns a boolean.

function isRequired(el) {
    return ((typeof el.required ==='boolean') && el.required) ||
        (typeof el.required === 'string');
}

//takes a element as parameter to see if it has a value
function isEmpty(el) {
    return !el.value || el.value === el.placeholder;
}

//Setting Error msg with 2 parameters; element in question and message
function setErrorMessage(el, message){
    $(el).data('errorMessage', message);
}

//Show error messages.
function showErrorMessage(el) {
    let $el = $(el);
    let $errorContainer = $el.siblings('error');
    if (!$errorContainer.length){
        $errorContainer = $('<span class="error"></span>').insertAfter($el);
    }
    $errorContainer.text($(el).data('errorMessage'));
}

function validateTypes(el) {
    if (!el.value) return true;

    let type = $(el).data('type') || el.getAttribute('type');
    if (typeof validateType[type] === 'function') {
        return validateType[type](el);
    } else {
        return true;
    }
}

//validating data types using an object

let validateType = {
    email: function(el) {
        let valid = / [^@]+@[^@]+/.test(el.value);
        if (!valid) {
            setErrorMessage(el, 'Please enter a valid email');
        }
        return valid;
    },
    firstName: function(el) {

    },
    lastName: function(el) {

    }
};

