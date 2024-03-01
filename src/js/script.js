import "./component/app-bar.js";
import "./component/form.js";
import "./component/note-list.js";
import "./component/note-item.js";
import "./component/footer-bar.js";
import "./component/card-component.js";
import Notes from "./data/notes.js";

const listElement = document.querySelector("note-list");
const captionButton = document.querySelector("button");
captionButton.textContent = captionButton.getAttribute("caption");

const showNote = () => {
  const result = Notes.getAll();
  displayResult(result);
};

const displayResult = (notes) => {
  listElement.innerHTML = "";
  notes.forEach((note) => {
    const noteItem = document.createElement("note-item");
    noteItem.note = note;
    listElement.appendChild(noteItem);
  });
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const bodyForm = document.getElementById("konten").value;
  const id =
    "notes-" +
    Math.random().toString().substr(2, 4) +
    "-" +
    Math.random().toString(36).substr(2, 4);

  const textArea = document.querySelector("textarea");

  let title = document.querySelector(".judul").value;
  let body = document.querySelector("#konten").value;
  if (textArea) {
    if (!title) {
      title = body.split(" ").slice(0, 2).join(", ").replace(/,/g, " ");
    }
    Notes.add({ id, title, body, archived: false });
    showNote();
    document.querySelector("form").reset();
  }
});

document.querySelector("#konten").addEventListener("invalid", () => {
  document.querySelector("#konten").setCustomValidity("Tolong isikan sesuatu!");

  document.querySelector("#pesan-error").textContent = "Konten wajib diisi.";
  document.querySelector("#pesan-error").style.color = "red";
  return;
});

showNote();
