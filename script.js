
document.querySelector("#addTask").addEventListener("click",function(){
document.querySelector("#taskList").innerHTML += "<li>" + document.querySelector("#todoInput").value + "<button id='X'>X</button></li>";
});

document.querySelector("#taskList").addEventListener("click",function(selectedLi){
if(selectedLi.target.localName == "li"){
    selectedLi.target.classList.toggle('done');
}
if(selectedLi.target.localName == "button"){
    selectedLi.target.parentElement.remove();
}
console.log(selectedLi);
});

