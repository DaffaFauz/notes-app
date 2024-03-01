class Card extends HTMLElement {
    constructor() {
        super();
        const body = document.getElementById('konten');

        this.innerHTML = ` 
    <form>
        <div class="form-group">
          <label for="">Judul</label>
          <input
            type="text"
            id="judul"
            name="judul"
            class="judul"
            placeholder="Masukkan Judul"
          />
          <label for="">Konten</label>
          <textarea
            name=""
            id="konten"
            class="konten"
            rows="5"
            maxlength="150"
            required
            aria-describedby="pesan-error"
          ></textarea>
        </div>
        <button caption="Tambah"></button>
      </form>`;
    }
}

customElements.define("form-add", Card);
export default Card;