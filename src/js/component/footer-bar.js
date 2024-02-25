class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<footer>Notes App 2024 &copy;. Daffa Fauzul Hakim</footer>`;
  }
}
customElements.define("footer-bar", Footer);
export default Footer;
