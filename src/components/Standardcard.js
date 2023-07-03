class Standardcard extends HTMLElement {
  constructor() {
    super();
    this.template = document.createElement("template");
    this.template.innerHTML = `<link rel="stylesheet" href="./components/Standardcard.css" type="text/css" />
    <section">
        <div class="standard-card">
            <div class="standard-details">
                <h2>Morning</h2>
                <img src="../../images/sun.png">
                <h2>20</h2>
            </div>
            <div class="standard-details">
                <h2>Afternoon</h2>
                <img src="../../images/sun.png">
                <h2>20</h2>
            </div>
            <div class="standard-details">
                <h2>Evening</h2>
                <img src="../../images/sun.png">
                <h2>20</h2>
            </div>
            <div class="standard-details">
                <h2>Overnight</h2>
                <img src="../../images/sun.png">
                <h2>20</h2>
            </div>
        </div>
      </section>
    `;
    this.attachShadow({
      mode: "open",
    });

    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }
}
customElements.define("standard-card", Standardcard);
