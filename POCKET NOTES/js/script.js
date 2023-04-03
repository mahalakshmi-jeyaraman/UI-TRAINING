var modal = document.getElementById("add-note-page");
var newBtns = document.querySelectorAll("#new-btn");
var closeBtns = document.querySelectorAll(".close");
var deleteAllBtns = document.querySelectorAll("#delete-all-btn");
var deleteAllModal = document.getElementById("delete-all-notes-popup-page");
var deleteBtns = document.querySelectorAll("#delete-btn");
var deleteModal = document.getElementById("delete-note-popup-page");
var editBtns = document.querySelectorAll("#edit-btn");
var editModal = document.querySelector("#edit-note-page");
var addBtn = document.querySelector("#add-btn");
var backBtn = document.querySelectorAll(".back");
const homePage = document.querySelector(".home-page");
const landingPage = document.querySelector(".landing-page");
const loadBtn = document.querySelector("#load-more");
const noteDetails = document.querySelector("#notes-detail");
const noteContainer = document.getElementById("app");
const noteTitle = document.getElementById("add-notes-title");
const noteDescription = document.getElementById("add-content-here");
const noteImageUrl = document.getElementById("add-image-url");


const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];
const notes = JSON.parse(localStorage.getItem("notes") || "[]");
newBtns.forEach(function (newBtn) {
    newBtn.onclick = function () {
        modal.style.display = "block";
    }
});
editBtns.forEach(function (editBtn) {
    editBtn.onclick = function () {
        editModal.style.display = "block";


    }
});
backBtn.forEach(function (back) {
    back.onclick = function () {
        landingPage.style.display = "block";
        noteDetails.style.display = "none";
        const contents = document.querySelectorAll(".contents");
        contents.forEach(function (content) {
            content.remove();
        });


    }
});


const colorButtons = document.querySelectorAll(".color-button");
let selectedColor = "";
colorButtons.forEach(function (colorbutton) {
    colorbutton.onclick = function () {
        event.preventDefault();
        selectedColor = colorbutton.style.backgroundColor;
    }
});


closeBtns.forEach(function (closeBtn) {
    closeBtn.onclick = function () {
        modal.style.display = "none";
        deleteAllModal.style.display = "none";
        deleteModal.style.display = "none";
        editModal.style.display = "none";


    }
});


deleteAllBtns.forEach(function (deleteAllBtn) {
    deleteAllBtn.onclick = function () {
        deleteAllModal.style.display = "block";
    }
});
deleteBtns.forEach(function (deleteBtn) {
    deleteBtn.onclick = function () {
        deleteModal.style.display = "block";
    }
});
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == deleteAllModal) {
        deleteAllModal.style.display = "none";
    }
}


function showNotes() {


    if (notes.length - 1 < 0) {
        document.getElementById("delete-all-btn").style.display = "none";
    }
    if (notes.length > 4) {
        document.getElementById("load-more").style.display = "block";
    }
    if (notes.length > 0) {
        notes.forEach((note, index) => {
            let noteDiv = `<div class="note-container" id="note-${index}" style="background-color:${note.color}">
            <div class="heading-color">
                                <h3>${note.title}</h3>
            </div>
                                <p class="noteDate">${note.date}</p>
                                <img class="note-container-image" src="${note.image}">
                                <p class="noteDescription">${note.description}</p>
                           
                      </div>`;
            noteContainer.innerHTML += noteDiv;
        });
    }
}
showNotes();
const noteContainers = document.querySelectorAll(".note-container");
noteContainers.forEach(function (note_Container) {
    note_Container.onclick = function () {
        document.querySelector(".landing-page").style.display = "none";
        document.getElementById("notes-detail").style.display = "block";


    }
});
const noteContainerAndContents = document.querySelectorAll(".note-container .contents");
noteContainers.forEach(function () {
    const img = noteContainer.querySelector('img');
    if (img && !img.getAttribute('src')) {
        img.remove();
    }
});
// Get the notes container element
const notesContainer = document.getElementById("notes-container");
notesContainer.querySelectorAll(".note-container").forEach((noteContainer) => {
    noteContainer.addEventListener("click", () => {
        const selectedNote = noteContainer.cloneNode(true);
        let nodeDiv = `<button
        class="color-button"
        style="background-color: #ebccec"
      ></button>`;
        document.querySelectorAll(".heading-color").innerHTML += nodeDiv;
        selectedNote.style.backgroundColor = "black";
        selectedNote.classList.remove("note-container");
        selectedNote.classList.add("contents");
        noteDetails.appendChild(selectedNote);
    });
});




let isUpdate = false,
    updateId;
addBtn.addEventListener("click", e => {
    e.preventDefault();
    let title = noteTitle.value.trim(),
        image = noteImageUrl.value.trim(),
        description = noteDescription.value.trim();
    color = selectedColor;
    if (title || description || image || color) {
        let currentDate = new Date(),
            month = months[currentDate.getMonth()],
            day = currentDate.getDate(),
            year = currentDate.getFullYear();
        let noteInfo = {
            title,
            image,
            description,
            date: `${month} ${day}, ${year}`,
            color
        }
        if (!isUpdate) {
            notes.push(noteInfo);
        } else {
            isUpdate = false;
            notes[updateId] = noteInfo;
        }
        localStorage.setItem("notes", JSON.stringify(notes));
        noteContainer.innerHTML = "";
        showNotes();
        noteTitle.value = '';
        noteImageUrl.value = '';
        noteDescription.value = '';
        document.querySelector(".landing-page").style.display = "block";
        location.reload();
    }
});
const confirmDeleteAllBtn = document.querySelector("#confirm-all-delete-btn");
confirmDeleteAllBtn.addEventListener("click", function () {
    localStorage.removeItem("notes");
    notes.length = 0;
    deleteAllModal.style.display = "none";
    location.reload();
    // showNotes();
});

