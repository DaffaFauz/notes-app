class NoteList extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `<slot></slot>`;
  }
}

customElements.define("note-list", NoteList);
export default NoteList;
