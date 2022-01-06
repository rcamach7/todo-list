import "./style.css";
import { Task, TaskFolder, DefaultData } from "./objects";

let collection = [];

// Print folder names to sidebar section
function printSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.innerHTML = "";

  collection.map((folder) => {
    const p = document.createElement("p");
    p.textContent = folder.getFolderName();
    p.addEventListener("click", () => {
      displayTasks(folder.getFolderName());
    });

    sidebar.appendChild(p);
  });
}

// Display a specific folders tasks to the main container. Calls "default" folder on boot up
// and then get's recalled anytime user selects a different folder to view.
function displayTasks(folderName) {
  // This clears any currently displayed tasks that was selected on the right sidebar.
  const rightSidebarInfoBox = document.getElementById("infoBox");
  rightSidebarInfoBox.innerHTML = "";

  collection.map((folder) => {
    // If we find the folder requested we print out its task
    if (folder.getFolderName() === folderName.toUpperCase()) {
      // Clear current task displayed
      const taskContainer = document.getElementById("tasksContainer");
      taskContainer.innerHTML = "";

      // Start grabbing new task to be displayed
      const currentTasks = folder.getTasks();
      currentTasks.map((task) => {
        // Create the task "card" to display all of its contents
        const taskCard = document.createElement("div");
        taskCard.classList.add("taskCard");
        // For card styling reference and to be used by addPriorityStyling function.
        let priorityAttribute = "";

        const contents = task.returnInArray();
        contents.map((key, index) => {
          const p = document.createElement("p");

          // Means we are currently adding the "priority" section to the taskCard.
          if (index === 1) {
            p.classList.add("priorityKey");
            priorityAttribute = key;
          }

          p.textContent = key;
          taskCard.appendChild(p);
        });

        // Add event listener, so when clicked, it's full details will be displayed in right sidebar.
        taskCard.addEventListener("click", () => {
          displayDetails(folder.getFolderName(), task.getTitle());
        });

        // Add button that allows this item to be deleted.
        taskCard.appendChild(
          addDeleteButton(folder.getFolderName(), task.getTitle())
        );

        addPriorityStyling(taskCard, priorityAttribute);
        taskContainer.appendChild(taskCard);
      });
    }
  });
}

// Will style the task card background depending on priority.
function addPriorityStyling(taskCard, priorityAttribute) {
  if (priorityAttribute === "important") {
    taskCard.classList.add("importantPriority");
  }
}

// Returns a button and when clicked on, deletes the specific task from whichever folder it belongs to.
function addDeleteButton(folderName, taskTitle) {
  const btn = document.createElement("button");
  btn.classList.add("deleteTask");
  btn.textContent = "Delete";

  btn.addEventListener("click", (e) => {
    let indexToDelete = -1;
    collection.map((folder) => {
      if (folder.getFolderName() === folderName) {
        folder.getTasks().map((task, taskIndex) => {
          if (task.getTitle() === taskTitle) {
            indexToDelete = taskIndex;
          }
        });
      }
    });
    deleteTask(folderName, indexToDelete);
    displayTasks(folderName);
  });
  return btn;
}

// Helper function for task deletion method
function deleteTask(folderName, taskIndex) {
  collection.map((folder) => {
    if (folder.getFolderName() === folderName) {
      folder.deleteTaskByIndex(taskIndex);
    }
  });
}

// Anytime a specific task is clicked on, this function displays all of its contents on the right sidebar.
function displayDetails(folderName, taskName) {
  const rightSidebar = document.getElementById("infoBox");
  rightSidebar.innerHTML = "";

  collection.map((folder) => {
    if (folder.getFolderName() === folderName) {
      const folderTasks = folder.getTasks();
      folderTasks.map((task) => {
        if (task.getTitle() === taskName) {
          // Gotcha
          task.returnAll().map((key, index) => {
            const desc = document.createElement("p");
            desc.classList.add("detailsKeys");
            desc.textContent = Object.keys(task)[index].toUpperCase();

            const p = document.createElement("p");
            p.classList.add("taskDetails");
            p.textContent = key;

            rightSidebar.appendChild(desc);
            rightSidebar.appendChild(p);
            // Add button that allows user to modify a task.
            rightSidebar.appendChild(
              addModifyTaskButton(
                folderName,
                taskName,
                task,
                Object.keys(task)[index]
              )
            );

            rightSidebar.appendChild(document.createElement("br"));
          });
        }
      });
    }
  });
}

// Will add a modify task button that shows a form in order to update details.
function addModifyTaskButton(folderName, taskName, task, keyToUpdate) {
  const btn = document.createElement("button");
  btn.classList.add("modifyTaskButton");
  btn.textContent = "Edit";
  btn.addEventListener("click", () => {
    const newVal = prompt("Enter New Value:");
    if (keyToUpdate === "title") {
      task.setTitle(newVal);
    } else if (keyToUpdate === "description") {
      task.setDescription(newVal);
    } else if (keyToUpdate === "priority") {
      task.setPriority(newVal);
    }

    // Re-display updated task value(s)
    displayTasks(folderName);
    displayDetails(folderName, taskName);
  });

  return btn;
}

// Toggle display of form to submit a new one
const popupForm = document.getElementById("popupForm");
popupForm.addEventListener("click", () => {
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

  displayToggle(form);
}
// Add new task to our array after completion of form
const btn = document.getElementById("newTask");
btn.addEventListener("click", (e) => {
  e.preventDefault();

  // Form Validation
  if (
    e.target.form.title.value === "" ||
    e.target.form.description.value === ""
  ) {
    alert("Please fill out all fields!");
    return;
  }

  // Create New task
  const newTask = new Task(
    e.target.form.title.value,
    e.target.form.description.value,
    e.target.form.priority.value
  );

  // Find folder that user is adding task to
  collection.map((folder) => {
    if (folder.getFolderName() === e.target.form.folder.value) {
      folder.addTask(newTask);
    }
  });

  // Display the contents of notes of selected folder
  displayTasks(e.target.form.folder.value);

  // Hides the form
  togglePopup();

  // Reset form to have default values
  e.target.form.reset();
});

// Add new folder to our collection
const newFolderBtn = document.getElementById("addFolder");
newFolderBtn.addEventListener("click", (e) => {
  const form = document.getElementById("submitNewFolder");
  displayToggle(form);
});
const submitNewFolderBtn = document.getElementById("newFolder");
submitNewFolderBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Form Validation
  if (e.target.form.name.value === "") {
    alert("Please enter a folder name!");
    return;
  }

  const newFolder = new TaskFolder(e.target.form.name.value);
  collection.push(newFolder);

  printSidebar();

  // Reset form to have default values and remove it from being displayed
  const form = document.getElementById("submitNewFolder");
  displayToggle(form);
  form.reset();
});

function displayToggle(form) {
  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

// Default Startup
const loadDefaultData = DefaultData.returnData();
loadDefaultData.map((dataPoint) => {
  collection.push(dataPoint);
});
printSidebar();
displayTasks("tasks");
