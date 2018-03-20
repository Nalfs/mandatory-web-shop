let section = document.getElementById('commentSection');
let input = document.getElementById('name');
let comment = document.getElementById('comment');
//let rating = document.getElementById('score');
let rating = document.getElementsByName("score");

//keep comments loaded
let comments = JSON.parse(localStorage.getItem("wsComments")) || [];

//Loop through localstorage, render views
for(let comment of comments) {
    const article = document.createElement('article');
    let src = "";
    switch(comment.rating){
        case "1": src = "../views/images/1stars.png";
            break;
        case "2": src = "../views/images/2stars.png";
            break;
        case "3": src = "../views/images/3stars.png";
            break;
        case "4": src = "../views/images/4stars.png";
            break;
        case "5": src = "../views/images/5stars.png";
            break;
        default: console.log("default")
    }
    let image = document.createElement("img");
    image.setAttribute("src", src);
    console.log(comment.rating);
    article.innerHTML =  '<h3 class="comment-name">' + comment.name + '</h3>' + ' ' + comment.comment;
    article.appendChild(image);
    section.appendChild(article);
}


//saving text-section
const addComments = (name, text, rating) => {
    const article = document.createElement('article');
    let src = "";
    switch(rating){
        case "1": src = "../views/images/1stars.png";
            break;
        case "2": src = "../views/images/2stars.png";
        break;
        case "3": src = "../views/images/3stars.png";
            break;
        case "4": src = "../views/images/4stars.png";
            break;
        case "5": src = "../views/images/5stars.png";
            break;
        default: console.log("default")
    }
    let image = document.createElement("img");
    image.setAttribute("src", src);
    article.innerHTML =  '<h3 class="comment-name">' + name + '</h3>' + ' ' + text;
    article.appendChild(image)
    section.appendChild(article);
};



//Definition for an object
function Comment(txtName,txtComment, rating){
    this.name = txtName;
    this.comment = txtComment;
    this.rating = rating;
}



$("#btnSubmit").click(function () {
    let newComment = {};
    for (let i = 0, length = rating.length; i < length; i++) {
        if (rating[i].checked) {
            newComment = new Comment(input.value,comment.value, rating[i].value);
            break;
        }
    }
    //Create an object comment

    //push in an object array
    comments.push(newComment);


    //save to Storage
    localStorage.setItem("wsComments", JSON.stringify(comments));

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
        addComments(data[i].name, data[i].comment , data[i].rating);
        comment.value = "";
        input.value = "";
        rating.value = "";
    }
}

