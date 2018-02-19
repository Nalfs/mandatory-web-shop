
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


    }if(uLastname.value === '' || uLastname.value.length < 3){
        errLast.setAttribute("style", "visibility:visible");


    }if((uEmail.value === '' || uEmail.value.length < 5 || !emailPattern.test(uEmail.value))){
        errEmail.setAttribute("style", "visibility:visible");


    }if((uStreetAdress.value === '' || uStreetAdress.value.length < 4 || !zipPattern.test(uStreetAdress.value))) {
        errGat.setAttribute("style", "visibility:visible");


    }if(uCity.value === '' || uCity.value.length < 3) {
        errCity.setAttribute("style", "visibility:visible");


    }if((uzipCode.value === '' || uzipCode.value.length < 3 || !zipPattern.test(uzipCode.value))){
            errZip.setAttribute("style", "visibility:visible");


    }else{
        document.getElementById("frmUserInfo").submit();
    }
});

