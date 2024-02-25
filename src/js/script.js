import "./component/app-bar.js";
import "./component/form.js";
import "./component/note-list.js";
import "./component/footer-bar.js";
import Notes from "./data/notes.js";

const listElement = document.querySelector("note-list");
const captionButton = document.querySelector("button");
captionButton.textContent = captionButton.getAttribute("caption");

const showNote = () => {
  const result = Notes.getAll();
  displayResult(result);
};

const displayResult = (notes) => {
  const noteItems = notes.map((note) => {
    return `
        <div class="card">
            <div class="card-title">
              <h2>${note.title}</h2>
            </div>
            <div class="card-body">
              <p>${note.body}</p>
            </div>
            <div class="card-footer">
            <p>${note.createdAt}</p>
          </div>
        </div>
      `;
  });
  listElement.innerHTML = noteItems.join("");
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const id =
    "notes-" +
    Math.random().toString().substr(2, 4) +
    "-" +
    Math.random().toString(36).substr(2, 4);
  const title = document.querySelector("input").value;
  const body = document.querySelector("textarea").value;

  Notes.add({ id, title, body, archived: false });
  showNote();
  document.querySelector("form").reset();
});

showNote();
