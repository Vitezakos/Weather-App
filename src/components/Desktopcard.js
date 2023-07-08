class Desktopcard extends HTMLElement {
  constructor() {
    super();
    this.template = document.createElement("template");
    this.template.innerHTML = `<link rel="stylesheet" href="./components/Desktopcard.css" type="text/css" />
    <section>
      <div class="desktop-card">
        Something
      </div>
    </section>`;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["city", "text", "color", "outline"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "city") {
      this.handleAPIData(JSON.parse(newValue));
    }
    if (name == "text") {
      this.shadowRoot.querySelector(".desktop-card").textContent = newValue;
    }
  }
  handleAPIData(data) {
    //console.log(data);
  }
}

customElements.define("desktop-card", Desktopcard);
