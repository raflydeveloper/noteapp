import NoteApi from "../data/remote/note-app";

const templateDetailNotes = document.createElement("template");
templateDetailNotes.innerHTML = `
<div class="notes-list">
<h2></h2>
<p></p>
<p><strong>Dibuat tanggal: </strong></p>
<button class="delete-button">Hapus</button>
</div>
`;

class NotesDetail extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const noteStyle = document.createElement("style");
    noteStyle.textContent = `
        .notes-list {
            background-color: #f9f7f7;
            color: #112d4e;
            border-radius: 10px;
            padding: 10px 20px;
            box-shadow: 0px 2px rgba(0, 0, 0, 0.5);
          }
          
          .delete-button {
            font-size: 20px;
            margin-top: 10px;
            padding: 10px;
            border: none;
            border-radius: 10px;
            font-weight: bold;
            background-color: #3f72af;
            color: #fff;
            box-shadow: 0px 2px rgba(0, 0, 0, 0.5);
            cursor: pointer;
          }
        `;
    this.shadowRoot.appendChild(noteStyle);
    this.shadowRoot.appendChild(templateDetailNotes.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector("h2").innerHTML = this.getAttribute("title");
    this.shadowRoot.querySelector("p:nth-of-type(1)").innerHTML =
      this.getAttribute("body");
    this.shadowRoot.querySelector(
      "p:nth-of-type(2)"
    ).innerHTML = `Dibuat pada: ${this.getAttribute("Dibuat-pada")}`;
    const deletebutton = this.shadowRoot.querySelector(".delete-button");
    deletebutton.addEventListener("click", () => this.notesDelete());
  }

  notesDelete() {
    const idNotes = this.getAttribute("id");

    NoteApi.deleteNote(idNotes).then(() => {
      const event = new CustomEvent("deleted-notes", { detail: idNotes });
      this.dispatchEvent(event);
      this.remove();
    });
  }
}

customElements.define("notes-detail", NotesDetail);
