import "./style.css";
import {Task, TaskFolder, DefaultData} from "./objects";

let collection = [];

// Print folder names to sidebar section
function printSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.innerHTML = '';

    collection.map((folder) => {
        const p = document.createElement("p");
        p.textContent = folder.getFolderName();
        p.addEventListener("click", () => {
            displayTasks(folder.getFolderName());
        });

        sidebar.appendChild(p);
    })
}

// Display a specific folders tasks to the main container. Calls "default" folder on boot up
// and then get's recalled anytime user selects a different folder to view.
function displayTasks(folderName) {
    // This clears any currently displayed tasks that was selected on the right sidebar.
    const rightSidebar = document.getElementById("rightSidebar");
    rightSidebar.innerHTML = "";

    collection.map( (folder) => {
        // If we find the folder requested we print out its task
        if (folder.getFolderName() === folderName.toUpperCase()) {
            // Clear current task displayed
            const taskContainer = document.getElementById("tasksContainer");
            taskContainer.innerHTML = "";

            // Start grabbing new task to be displayed
            const currentTasks = folder.getTasks();
            currentTasks.map( (task) => {
                // Create the task "card" to display all of its contents
                const taskCard = document.createElement("div");
                taskCard.classList.add("taskCard");

                const contents = task.returnInArray();
                contents.map((key, index)=>{
                    const p = document.createElement("p");

                    // Means we are currently adding the "priority" section to the taskCard.
                    if(index === 1) {
                        p.classList.add("priorityKey");
                    }

                    p.textContent = key;
                    taskCard.appendChild(p);
                });

                // Add event listener, so when clicked, it's full details will be displayed in right sidebar.
                taskCard.addEventListener("click", ()=> {
                    displayDetails(folder.getFolderName(), task.getTitle());
                });

                // Add button that allows this item to be deleted.
                taskCard.appendChild(addDeleteButton(folder.getFolderName(), task.getTitle()));

                taskContainer.appendChild(taskCard);
            })
        }
    })
}

// Returns a button and when clicked on, deletes the specific task from whichever folder it belongs to.
function addDeleteButton(folderName, taskTitle) {
    const btn = document.createElement("button");
    btn.classList.add("deleteTask");
    btn.textContent = "Delete";

    btn.addEventListener("click", (e)=> {
        let indexToDelete = -1;
        collection.map( (folder)=> {
            if (folder.getFolderName() === folderName) {
                folder.getTasks().map( (task, taskIndex) => {
                    if (task.getTitle() === taskTitle) {
                        indexToDelete = taskIndex;
                    }
                })
            }
        })
        deleteTask(folderName, indexToDelete);
        displayTasks(folderName);
    })
    return btn;
}

// Helper function for task deletion method
function deleteTask(folderName, taskIndex) {
    collection.map( (folder) => {
        if (folder.getFolderName() === folderName) {
            folder.deleteTaskByIndex(taskIndex);
        }
    })
}

// Anytime a specific task is clicked on, this function displays all of its contents on the right sidebar.
function displayDetails(folderName, taskName) {
    const rightSidebar = document.getElementById("rightSidebar");
    rightSidebar.innerHTML = "";

    collection.map( (folder) => {
        if (folder.getFolderName() === folderName) {
            const folderTasks = folder.getTasks();
            folderTasks.map( (task) => {
                if(task.getTitle() === taskName) {
                    // Gotcha
                    task.returnAll().map( (key, index) => {
                        const desc = document.createElement("p");
                        desc.classList.add("detailsKeys")
                        desc.textContent = Object.keys(task)[index].toUpperCase() + ":";

                        const  p = document.createElement("p");
                        p.classList.add("taskDetails");
                        p.textContent = key;

                        rightSidebar.appendChild(desc);
                        rightSidebar.appendChild(p);
                        rightSidebar.appendChild(document.createElement("br"));
                    })
                }
            })
        }
    })
}

// Toggle display of form to submit a new one
const popupForm = document.getElementById("popupForm");
popupForm.addEventListener("click", ()=> {
    togglePopup();
});
function togglePopup() {
    const form = document.getElementById("submitNewTaskForm");
    
    // Before we display the tasks - we must add all available folders - also clears any previous options.
    const select = document.getElementById("folder");
    select.innerHTML = "";

    collection.map((folder) => {
        const option = document.createElement("option");
        option.value = folder.getFolderName();
        option.textContent = folder.getFolderName();

        select.appendChild(option);
    });

    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}
// Add new task to our array after completion of form
const btn = document.getElementById("newTask");
btn.addEventListener("click", (e) => {
    e.preventDefault(); 
    // Create New task
    const newTask = new Task(e.target.form.title.value, e.target.form.description.value, e.target.form.priority.value);
    
    // Find folder that user is adding task to
    collection.map( (folder) => {
        if (folder.getFolderName() === e.target.form.folder.value) {
            folder.addTask(newTask);
        }
    })

    // Display the contents of notes of selected folder
    displayTasks(e.target.form.folder.value);

    // Hides the form
    togglePopup();
});

// Add new folder to our collection
const newFolderBtn = document.getElementById("addFolder");
newFolderBtn.addEventListener("click", (e) => {
    const form = document.getElementById("submitNewFolder");

    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});
const submitNewFolderBtn = document.getElementById("newFolder");
submitNewFolderBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    const newFolder = new TaskFolder(e.target.form.name.value);
    collection.push(newFolder);

    printSidebar();    

    const form = document.getElementById("submitNewFolder");
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});

// Default Startup
const loadDefaultData = DefaultData.returnData();
loadDefaultData.map( (dataPoint) => {
    collection.push(dataPoint);
});
printSidebar();
displayTasks("default");