

var modal = document.getElementById("add-note-page");
var newBtns = document.querySelectorAll("#new-btn");
var closeBtns = document.querySelectorAll(".close");
var deleteAllBtns = document.querySelectorAll("#delete-all-btn");
var deleteAllModal = document.getElementById("delete-all-notes-popup-page");
var deleteBtns = document.querySelectorAll("#delete-btn");
var deleteModal = document.getElementById("delete-note-popup-page");
var editBtns = document.querySelectorAll("#edit-btn");
var editModal = document.getElementById("edit-note-page");
var addBtn = document.querySelector("#add-btn");
const homePage = document.querySelector(".home-page");
const landingPage = document.querySelector(".landing-page");
const loadBtn = document.querySelector("#load-more");
const noteDetails = document.getElementById("notes-detail");
const noteContainer = document.getElementById("app");
const noteTitle = document.getElementById("add-notes-title");
const noteDescription = document.getElementById("add-content-here");
const noteImageUrl = document.getElementById("add-image-url");
const backBtns = document.querySelector(".backbtn");


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
            let noteDiv = `<div class="note-container" id="note-${index}">
                           
                                <p>${note.title}</p>
                                <p>${note.date}</p>
                                <img src="${note.image}" alt="image">
                                <p>${note.description}</p>
                           
                      </div>`;
            noteContainer.innerHTML += noteDiv;
            const noteContent = document.createElement('div');
            noteContent.classList.add("notes-content");
            noteContent.classList.add("notes-content-${index}");
            const noteHeading = document.createElement("div");
            noteHeading.classList.add("notes-heading");
            noteHeading.classList.add("notes-heading-${index}");
            const noteDetailsTitle = document.createElement("p");
            noteDetailsTitle.classList.add("notes-heading-${index}");
            noteDetailsTitle.textContent = note.title;
            const noteDetailsDate = document.createElement("p");
            noteDetailsDate.classList.add("note-Details-date-${index}");
            noteDetailsDate.textContent = note.date;
            const noteDetailsImage = document.createElement("img")
            noteDetailsImage.classList.add("note-Details-image-${index}");
            noteDetailsImage.src = note.image;
            noteDetailsImage.alt = "image";
            const noteDetailsDescription = document.createElement("p");
            noteDetailsDescription.classList.add("note-Details-description-${index}");
            noteDetailsDescription.textContent = note.description;
            noteHeading.appendChild(noteDetailsTitle);
            noteHeading.appendChild(noteDetailsDate);
            noteContent.appendChild(noteDetailsImage);
            noteContent.appendChild(noteDetailsDescription);
            noteDetails.appendChild(noteHeading);
            noteDetails.appendChild(noteContent);
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
let isUpdate = false,
    updateId;
addBtn.addEventListener("click", e => {


    e.preventDefault();
    let title = noteTitle.value.trim(),
        image = noteImageUrl.value.trim(),
        description = noteDescription.value.trim();
    if (title || description || image) {
        let currentDate = new Date(),
            month = months[currentDate.getMonth()],
            day = currentDate.getDate(),
            year = currentDate.getFullYear();
        let noteInfo = {
            title,
            image,
            description,
            date: `${month} ${day}, ${year}`
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






