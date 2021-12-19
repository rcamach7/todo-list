import "./style.css";


let notes = [];

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

// Toggle Display of adding new note
const popupForm = document.getElementById("popupForm");
popupForm.addEventListener("click", ()=> {
    togglePopup();
});

function togglePopup() {
    const form = document.getElementById("submitNewNoteForm");
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
    createNote(e.target.form);
    displayNotes();
    togglePopup();
});

function displayNotes() {
    const noteContainer = document.getElementById("notesContainer");
    noteContainer.innerHTML = "";
    notes.map( (note) => {
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

function createNote(form) {
    const newNote = new Note(form.title.value, form.description.value, form.priority.value);
    notes.push(newNote);
}

// Print array of notes for testing purposes
const printBtn = document.getElementById("printNotes");
printBtn.addEventListener("click", () => {
    console.table(notes);
});



