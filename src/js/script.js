import "./component/app-bar.js";
import "./component/form.js";
// import "./component/note-list.js";
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

  const bodyForm = document.getElementById("konten").value;
  const id =
      "notes-" +
      Math.random().toString().substr(2, 4) +
      "-" +
      Math.random().toString(36).substr(2, 4);
  let title = document.querySelector("input").value;
  let body = document.querySelector("textarea");

  if (bodyForm) {
    body.value;
    if (!title){
      title = body.split(" ").slice(0, 2).join(", ").replace(/,/g, " ");
    }
    Notes.add({ id, title, body, archived: false });
    showNote();
    document.querySelector("form").reset();
  }

});

showNote();
