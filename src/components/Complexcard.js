class Complexcard extends HTMLElement {
  constructor() {
    super();
    this.template = document.createElement("template");
    this.template.innerHTML = `<link rel="stylesheet" href="./components/Complexcard.css" type="text/css" />
    <section>
<div class="complexcard-card">
  <div class="complexcard-desc-top">
     <h4>1</h4>
     <h4>2</h4>
  </div>
  <div class="complexcard-desc-middle">
     <img src="" alt="">
     <h4>3</h4>
  </div>
  <div class="complexcard-desc-bottom">
     <h4>4</h4>
     <h4>5</h4>
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
