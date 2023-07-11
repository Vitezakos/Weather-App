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
    return ["city", "text", "color", "outline", "size", "shadow"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    const card = this.shadowRoot.querySelector(".desktop-card");
    if (name == "text") {
      card.textContent = newValue;
    }
    if (name == "color") {
      card.style.background = newValue;
    }
    if (name == "outline") {
      card.style.color = newValue;
    }
    if (name == "size") {
      card.style = newValue;
    }
    if (name == "shadow") {
      card.style.textShadow = newValue;
    }
  }
}

customElements.define("desktop-card", Desktopcard);
