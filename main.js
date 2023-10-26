var addToButton = document.getElementById("addToDo");
var toDoContainer = document.getElementById("toDocontainer");
var inputField = document.getElementById("inputField");

addToButton.onclick = function(){
    if(inputField.value != ""){
        var paragraph = document.createElement('p');
    }
    paragraph.innerText = inputField.value;

    toDoContainer.appendChild(paragraph);

    paragraph.classList.add('paragraph_style');

    inputField.value ="";

    paragraph.addEventListener('click',function(){
        paragraph.classList.add('paragaph_click');
    })
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.remove(paragraph)
    })
}
