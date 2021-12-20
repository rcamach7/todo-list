import "./style.css";

let collection = [];

class Note {
    constructor(titleIn, descriptionIn, priorityIn) {
        this.title = titleIn;
        this.description = descriptionIn;
        this.priority = priorityIn;
    }

    returnInArray() {
        return [this.title, this.description, this.priority];
    }
}

class NoteFolder {
    constructor(folderName) {
        this.folderName = folderName;
        this.myNotes = [];
    }

    addNote(Note) {
        this.myNotes.push(Note);
    }

    getNotes() {
        return this.myNotes;
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
            displayNotes(folder.getFolderName());
        });

        sidebar.appendChild(p);
    })
}

function displayNotes(folderName) {
    collection.map( (folder) => {
        // If we find the folder requested we print out its notes
        if (folder.getFolderName() === folderName) {
            // Clear current notes displayed
            const noteContainer = document.getElementById("notesContainer");
            noteContainer.innerHTML = "";

            // Start grabbing new notes to be displayed
            const currentNotes = folder.getNotes();
            currentNotes.map( (note) => {
                // Create the note "card" to display all of its contents
                const noteCard = document.createElement("div");
                noteCard.classList.add("noteCard");

                const contents = note.returnInArray();
                contents.map((key)=>{
                    const p = document.createElement("p");
                    p.textContent = key;
                    noteCard.appendChild(p);
                });
                noteContainer.appendChild(noteCard);
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
    const newNote = new Note(e.target.form.title.value, e.target.form.description.value, e.target.form.priority.value);
    
    // Find folder that user is adding note to
    collection.map( (folder) => {
        if (folder.getFolderName() === e.target.form.folder.value) {
            folder.addNote(newNote);
        }
    })

    // Display the contents of notes of selected folder
    displayNotes(e.target.form.folder.value);

    // Hides the form
    togglePopup();
});

// Create Test Data
const newNote = new Note("Get Healthy", "Take pain med and drink plenty of water", "important");
const newNoteTwo = new Note("Meditate", "Go over my goals and then silence mind", "important");

const defaultNotes = new NoteFolder("default");
const mentalHealth = new NoteFolder("mental Health");


defaultNotes.addNote(newNote);
collection.push(defaultNotes);

mentalHealth.addNote(newNoteTwo);
collection.push(mentalHealth);

// Default Startup
printSidebar();