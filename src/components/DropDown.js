class DropDown extends HTMLElement {
  constructor() {
    super();
    // DON'T FORGET TO REMOVE BEFORE PUSH!!
    this.apiKey = "";
    this.locations = {
      hu: "Budapest",
      no: "Oslo",
      uk: "London",
      ro: "Bucharest",
    };
    this.dropdownCity = this.locations["hu"];
    this.template = document.createElement("template");
    this.template.innerHTML = `<link rel="stylesheet" href="./components/DropDown.css" type="text/css" />
    <section>
      <div class="dropdown">
        <button class="dropdown-btn">${this.dropdownCity}</button>
        <div class="dropdown-options">
          <a href="#">${this.locations["hu"]}</a>
          <a href="#">${this.locations["uk"]}</a>
          <a href="#">${this.locations["no"]}</a>
          <a href="#">${this.locations["ro"]}</a>
        </div>
      </div>
    </section>`;

    this.attachShadow({
      mode: "open",
    });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    const button = this.shadowRoot.querySelector(".dropdown-btn");
    button.addEventListener("click", this.onclick);
    const swap = this.shadowRoot.querySelectorAll(".dropdown-options a");
    swap.forEach((option) => {
      option.addEventListener("click", (e) => this.citySwap(e));
    });
    function getKeyByValue(object, value) {
      return Object.keys(object).find((key) => object[key] === value);
    }
    this.fetchRequest(
      this.dropdownCity,
      getKeyByValue(this.locations, this.dropdownCity)
    );
  }

  citySwap(e) {
    const city = e.target.innerText;
    this.shadowRoot.querySelector(".dropdown-btn").innerText = city;
    function getKeyByValue(object, value) {
      return Object.keys(object).find((key) => object[key] === value);
    }
    const state = getKeyByValue(this.locations, city);
    this.fetchRequest(city, state);
  }

  static get observedAttributes() {
    return ["state"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "state" && newValue == "closed") {
      this.closeBtn();
    }
  }

  closeBtn() {
    const btn = this.shadowRoot.querySelector(".dropdown-options");
    btn.classList.remove("dropdown-show");
  }

  onclick(e) {
    const btn = this.parentElement.querySelector(".dropdown-options");
    btn.classList.add("dropdown-show");
    e.stopPropagation();
    e.preventDefault();
  }

  fetchRequest(city, state) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${state}${this.apiKey}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.dispatchEvent(
          new CustomEvent("citychanged", { detail: { message: data } })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

customElements.define("drop-down", DropDown);
