class AppBar extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = "<h2>Notes App</h2";
  }
}
customElements.define("app-bar", AppBar);
export default AppBar;
