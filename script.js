
//1. Adding a task:
document.querySelector("#addTask").addEventListener("click",function(){


//5. Bonus: Input validation:
if(document.querySelector("#todoInput").value == null || document.querySelector("#todoInput").value == ""){
    alert("Type something First");
}
//1. Adding a task:
else{
    document.querySelector("#taskList").innerHTML += `<li class="px-1">` + document.querySelector("#todoInput").value + `<button class="bg-primary text-white m-1">X</button><br></li>`;
}
document.querySelector("#todoInput").value = null;
});


//2. Marking a task as done:
document.querySelector("#taskList").addEventListener("click",function(selectedLi){
if(selectedLi.target.localName == "li"){
    selectedLi.target.classList.toggle('done');
}
//3. Deleting a task:
if(selectedLi.target.localName == "button"){
    selectedLi.target.parentElement.remove();
}
console.log(selectedLi);
});



