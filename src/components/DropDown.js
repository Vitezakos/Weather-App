class DropDown extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open",
    }).innerHTML = `<slot name="dropdown"></slot>`;
    this.onclick = () => {
      const dropDown = document.querySelector(".dropdown-options");
      dropDown.classList.toggle("dropdown-show");
    };
  }
  connectedCallback() {
    this.innerHTML = `<section slot="dropdown">
    <div class="dropdown">
  <button class="dropdown-btn">Budapest</button>
  <div class="dropdown-options">
    <a href="#">Dashboard</a>
    <a href="#">Setting</a>
    <a href="#">Logout</a>
  </div>
</div>
            </section>`;
  }
}

customElements.define("drop-down", DropDown);
