class footerBar extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
          footer {
    background-color: #a87676;
    color: #fffbda;
    padding: 15px;
    text-align: center;
    font-size:1rem;
  }
      </style>
      <footer>
      <h3>Tugas Note App || Fundamental Front-End</h3>
      </footer>
      `;
  }
}

customElements.define("footer-bar", footerBar);
