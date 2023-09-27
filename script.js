document.addEventListener("DOMContentLoaded", function(){

    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function(){

        const taskText = taskInput.value.trim();
        if(taskText !== ""){
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;
            li.querySelector(".delete").addEventListener("click", function(){
                li.remove()
            });

            taskList.appendChild(li);
            taskInput.value = "";

        }


    });

    taskInput.addEventListener("keydown", function(event){
        if(event.key == "Enter"){
            addTaskButton.click();
        }
    });


});