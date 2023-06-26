class Standardcard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open",
    }).innerHTML = `<slot name="standardcard"></slot>`;
  }
  connectedCallback() {
    this.innerHTML = `<section slot="standardcard">
        <div class="standard-card">
            <div class="standard-details">
                <h2>Morning</h2>
                <img src="">
                <h2>20</h2>
            </div>
            <div class="standard-details">
                <h2>Afternoon</h2>
                <img src="">
                <h2>20</h2>
            </div>
            <div class="standard-details">
                <h2>Evening</h2>
                <img src="">
                <h2>20</h2>
            </div>
            <div class="standard-details">
                <h2>Overnight</h2>
                <img src="">
                <h2>20</h2>
            </div>
        </div>
      </section>`;
  }
}
customElements.define("standard-card", Standardcard);
