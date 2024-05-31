class HeaderBar extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
    <style>
        header {
  background-color: #a87676;
  color: #fffbda;
  padding: 15px;
  text-align: center;
}
    </style>
    <header>
    <h1>Notes Rafly</h1>
    </header>
    `;
  }
}

customElements.define("header-bar", HeaderBar);
