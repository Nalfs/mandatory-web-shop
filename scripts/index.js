
let uFirstname = document.getElementById("namn");
let uLastname = document.getElementById("efternamn");
let uEmail = document.getElementById("email");
let btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click",function () {

    let errName = document.getElementById("errName");
    let errLast = document.getElementById("errLast");
    let errEmail = document.getElementById("errEmail");
    let emailPattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

    if (uFirstname.value === '' || uFirstname.value.length < 3){
        errName.setAttribute("style", "visibility:visible");

    }if(uLastname.value === '' || uLastname.value.length < 3){
        errLast.setAttribute("style", "visibility:visible");

    }if((uEmail.value === '' || uEmail.value.length < 5 || !emailPattern.test(uEmail.value))){
        errEmail.setAttribute("style", "visibility:visible");

    }else{
        document.getElementById("frmUserInfo").submit();
    }
});



/* form validation checkoutlist*/
/*
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
}());

//Checks for required attribute, if present, check for active value

function validateRequired(el) {
    if (isRequired(el)) {
        let valid = !isEmpty(el);
        if(!valid){
            setErrorMessage(el, 'Field is required');
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
*/
