class Complexcard extends HTMLElement {
  constructor() {
    super();
    this.template = document.createElement("template");
    this.template.innerHTML = `<link rel="stylesheet" href="./components/Complexcard.css" type="text/css" />
    <section>
<div class="complexcard-card">
  <div class="complexcard-desc-top">
     <h4>Thursday</h4>
     <h4>High <br>25</h4>
  </div>
  <div class="complexcard-desc-middle">
     <img src="../../images/sun.png" alt="">
     <h4>20</h4>
  </div>
  <div class="complexcard-desc-bottom">
     <h4>June 15</h4>
     <h4>Low <br>15</h4>
  </div>
</div>
    </section>`;

    this.attachShadow({
      mode: "open",
    });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }
}

customElements.define("complex-card", Complexcard);
