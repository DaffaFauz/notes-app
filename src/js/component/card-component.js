class CardComponent extends HTMLElement {
    set note(note) {
        this._note = note;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="card">
                <div class="card-title">
                    <h2>${this._note.title}</h2>
                </div>
                <div class="card-body">
                    <p>${this._note.body}</p>
                </div>
                <div class="card-footer">
                    <p>${this._note.createdAt}</p>
                </div>
            </div>
        `;
    }

}

customElements.define("card-component", CardComponent);
export default CardComponent;
