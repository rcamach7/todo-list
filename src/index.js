import "./style.css";

let collection = [];

class Task {
    constructor(titleIn, descriptionIn, priorityIn) {
        this.title = titleIn;
        this.description = descriptionIn;
        this.priority = priorityIn;
    }

    returnInArray() {
        return [this.title, this.description, this.priority];
    }
}

class TaskFolder {
    constructor(folderName) {
        this.folderName = folderName;
        this.myTasks = [];
    }

    addTask(Task) {
        this.myTasks.push(Task);
    }

    getTasks() {
        return this.myTasks;
    }

    getFolderName() {
        return this.folderName;
    }
}

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

function displayTasks(folderName) {
    collection.map( (folder) => {
        // If we find the folder requested we print out its notes
        if (folder.getFolderName() === folderName) {
            // Clear current notes displayed
            const taskContainer = document.getElementById("notesContainer");
            taskContainer.innerHTML = "";

            // Start grabbing new notes to be displayed
            const currentTasks = folder.getTasks();
            currentTasks.map( (note) => {
                // Create the note "card" to display all of its contents
                const taskCard = document.createElement("div");
                taskCard.classList.add("noteCard");

                const contents = note.returnInArray();
                contents.map((key)=>{
                    const p = document.createElement("p");
                    p.textContent = key;
                    taskCard.appendChild(p);
                });
                taskContainer.appendChild(taskCard);
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
    const form = document.getElementById("submitNewNoteForm");
    
    // Before we display the notes - we must add all available folders - also clears any previous options.
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
// Add new note to our array after completion of form
const btn = document.getElementById("newNote");
btn.addEventListener("click", (e) => {
    e.preventDefault(); 
    // Create New Note
    const newTask = new Task(e.target.form.title.value, e.target.form.description.value, e.target.form.priority.value);
    
    // Find folder that user is adding note to
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

// Create Test Data
const newTask = new Task("Get Healthy", "Take pain med and drink plenty of water", "important");
const newTaskTwo = new Task("Meditate", "Go over my goals and then silence mind", "important");

const defaultTasks = new TaskFolder("default");
const mentalHealth = new TaskFolder("mental Health");


defaultTasks.addTask(newTask);
collection.push(defaultTasks);

mentalHealth.addTask(newTaskTwo);
collection.push(mentalHealth);

// Default Startup
printSidebar();
displayTasks("default");