class Form extends HTMLElement {
  constructor() {
    super();
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
          <label for="konten">Konten</label>
          <textarea
            name=""
            id="konten"
            class="konten"
            rows="5"
            maxlength="150"
            aria-describedby="pesan-error"
            required
            oninvalid="this.setCustomValidity('Form ini harus diisi !!!')"
          ></textarea>
          <ul class="input-requirements">
                <li>At least 3 characters long</li>
                <li>Must only contain letters and numbers (no special characters)</li>
          </ul>   
        </div>
        <button caption="Tambah"></button>
      </form>`;
  }
}

customElements.define("form-add", Form);
export default Form;
