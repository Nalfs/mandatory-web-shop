let section = document.getElementById('commentSection');
let input = document.getElementById('name');
let comment = document.getElementById('comment');


//saving text-section
const addComments = (name, text) => {
    const article = document.createElement('article');
    article.textContent =  name + ' ' + text;
    section.appendChild(article);
}



//Definition for an object
function Comment(txtName,txtComment){
    this.name = txtName;
    this.comment = txtComment;
}

let arrComments = [];


$("#btnSubmit").click(function () {
    //Create an object comment
    let newComment = new Comment(input.value,comment.value);

    //push in an object array
    arrComments.push(newComment);

    //convert to JSON string
    let sJSONComments = JSON.stringify(arrComments);

    //save to Storage
    localStorage.setItem("wsComments", sJSONComments);

    //retrieve comments from sessionStorage
    giveComment();

});


function giveComment() {
    //get data from Storage
    let sJSONComments = localStorage.getItem("wsComments");

    console.log("get back"+sJSONComments);
    $("#commentSection").empty();

    //convert from JSON string to object array
    let data =  JSON.parse(localStorage.getItem("wsComments"));


    //show array's content
    let i;
    let arrLength = data.length;
    for (i = 0; i < arrLength; i++){
        addComments(data[i].name, data[i].comment);
        comment.value = "";
        input.value = "";
    }
}


/*//super-secret master-click-remover
$("#btnDel").click(function () {

    localStorage.clear();
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

});
*/
