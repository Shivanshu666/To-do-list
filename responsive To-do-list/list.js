document.getElementById("addTaskButton").addEventListener("click", function(){
  let taskInput=document.getElementById("taskInput");
  let taskValue=taskInput.value.trim();
  if(taskValue){
    let li=document.createElement("li");
    li.textContent=taskValue;
    // console.log(taskValue);
    let deleteButton=document.createElement("button");
    deleteButton.textContent="Delete";
    deleteButton.classList.add("delete");
    deleteButton.onclick=function(){
      li.remove();
    };
    li.appendChild(deleteButton);
    li.onclick=function(){
    li.classList.toggle("completed");
    };
    document.getElementById("taskList").appendChild(li);
    taskInput.value="";    
  };
});
