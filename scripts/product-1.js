let section = document.getElementById('commentSection');
let input = document.getElementById('name');
let comment = document.getElementById('comment');
let placeholderArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

//let placeholderArray = [];

localStorage.setItem('items', JSON.stringify(placeholderArray));
const data = JSON.parse(localStorage.getItem('items'));


const addComments = (name, text) => {
    const article = document.createElement('article');
    article.textContent =  name + ' ' + text;
    section.appendChild(article);
}

$("#btnSubmit").click(function () {

    placeholderArray.push(input.value, comment.value);
    localStorage.setItem('items', JSON.stringify(placeholderArray));

    addComments(input.value, comment.value);
    comment.value = "";
    input.value = "";

});


data.forEach(item => {
    addComments(item);
});

$("#btnDel").click(function () {

    localStorage.clear();
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

});
