const inputBox = document.getElementById("input-box")
const listcontainer= document.getElementById("list-container")
function addTask(){
 if(inputBox.value +++ '' ){
    alert("You must input something");
}
else {
    let li =document.createElement("li");
    li.innerHTML = inputBox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    Span.innerHTML = "\u00d7";
    li.appendChild(span); 
     }
     inputBox.value = "";
     saveData(){}
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "Li"){
        e.target.classlist.toggle("checked");
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData(){}
  }
},false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
} 
function showTask(){
    listcontainer.innerHTML = localStorage.getItem();
    
    showTask()
}
function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();
    if (task !== "") {
      var currentDate = new Date();
      var dateString = currentDate.toLocaleString();
      var li = document.createElement("li");
      li.textContent = task + " - " + dateString;
      var deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.onclick = function() {
        li.remove();
      };
      li.appendChild(deleteBtn);
      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }
  }
  