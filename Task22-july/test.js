let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array To Store The Tasks
let arrayOfTasks = [];
//Check if there are tasks in locaal storage
if(localStorage.getItem('tasks')){
arrayOfTasks=JSON.parse(localStorage.getItem('tasks'));
}
//Trigger GET data From Local Storage Function
getDataFromLocalStorage();


// Add Task
submit.onclick = function () {
    if (input.value !== "") {
      addTaskToArray(input.value); // Add Task To Array Of Tasks
      input.value = ""; // Empty Input Field
    }
  };

  function addTaskToArray(taskText) {
    // Task Data
    const task = {
      id: Date.now(),
      title: taskText,
      completed: false,
    };
    // Push Task To Array Of Tasks
    arrayOfTasks.push(task);
    // Add Tasks To Page
    addElementsToPageFrom(arrayOfTasks);
    // Add Tasks To Local Storage
    addDataToLocalStorageFrom(arrayOfTasks);
}



    function addElementsToPageFrom(arrayOfTasks) {
        // Empty Tasks Div
        tasksDiv.innerHTML = "";
        // Looping On Array Of Tasks
        arrayOfTasks.forEach((task) => {
          // Create Main Div
          let div = document.createElement("div");
          div.className = "task";
          // Check If Task is Done
          if (task.completed) {
            div.className = "task done";
          }
          div.setAttribute("data-id", task.id);
          div.appendChild(document.createTextNode(task.title));
          // Create Delete Button
          let span = document.createElement("span");
          span.className = "del";
          span.appendChild(document.createTextNode("Delete"));
          // Append Button To Main Div
          div.appendChild(span);
          // Add Task Div To Tasks Container
          tasksDiv.appendChild(div);
        });
      }
      
      function addDataToLocalStorageFrom(arrayOfTasks){
        window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
      }

      function getDataFromLocalStorage() {
        let data = window.localStorage.getItem("tasks");
        if(data){
            let tasks=JSON.parse(data);
           addElementsToPageFrom(tasks);
        }
      }
