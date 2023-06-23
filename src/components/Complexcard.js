class Complexcard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open",
    }).innerHTML = `<slot name="complexcard"></slot>`;
  }
  connectedCallback() {
    this.innerHTML = `<section slot ="complexcard">
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
  }
}

customElements.define("complex-card", Complexcard);
