import "./list-detail.js";

class notesList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
      #notes {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
      
      .wrapper-notes {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 20px;
      }
      </style>
      <div class="wrapper-notes">
          <div class="notesList" id="notes"></div>
      </div>
          `;
  }
  render(notesData) {
    const listNotes = this.shadowRoot.querySelector(".notesList");
    listNotes.innerHTML = "";

    notesData.forEach((note) => {
      const noteElement = document.createElement("notes-detail");
      noteElement.setAttribute("title", note.title);
      noteElement.setAttribute("body", note.body);
      noteElement.setAttribute("Dibuat-pada", note.createdAt);
      noteElement.setAttribute("id", note.id);
      listNotes.appendChild(noteElement);
    });
  }
}

customElements.define("notes-list", notesList);
