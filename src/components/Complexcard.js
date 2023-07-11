class Complexcard extends HTMLElement {
  constructor() {
    super();
    this.weekDays = {
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
      0: "Sunday",
    };
    this.months = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
    };
    this.weatherMain = {
      sun: ["Clear"],
      cloud: ["Clouds"],
      rain: [
        "Drizzle",
        "Rain",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
      ],
      storm: ["Thunderstorm", "Tornado"],
      snow: ["Snow"],
    };
    this.template = document.createElement("template");
    this.template.innerHTML = `<link rel="stylesheet" href="./components/Complexcard.css" type="text/css" />
    <section>
<div class="complexcard-card">
  <div class="complexcard-desc-top">
     <h4 class="today">Monday</h4>
     <h4 class="max">High <br>25</h4>
  </div>
  <div class="complexcard-desc-middle">
     <img src="./images/sun.png" alt="">
     <h4 class="temp">20</h4>
  </div>
  <div class="complexcard-desc-bottom">
     <h4 class="month">June 15</h4>
     <h4 class="min">Low <br>15</h4>
  </div>
</div>
    </section>`;

    this.attachShadow({
      mode: "open",
    });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }
  static get observedAttributes() {
    return ["city", "season"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "city") {
      this.handleAPIData(JSON.parse(newValue));
    }
    if (name == "season") {
      this.handleSeason(newValue);
    }
  }
  handleSeason(season) {
    const card = this.shadowRoot.querySelector(".complexcard-card");
    if (season == "winter") {
      card.style.backgroundColor = "rgba(0, 114, 246, 0.17)";
    } else if (season == "summer") {
      card.style.backgroundColor = "rgba(10, 239, 115, 0.17)";
    } else if (season == "spring") {
      card.style.backgroundColor = "rgba(10, 239, 115, 0.17)";
    } else if (season == "autumn") {
      card.style.backgroundColor = "rgba(197, 125, 19, 0.49)";
    }
  }
  handleAPIData(data) {
    const day = new Date().getDay();
    const month = new Date().getMonth();
    const date = new Date().getDate();
    const max = this.handleTemperatureRounding(data.main.temp_max - 273);
    const temp = this.handleTemperatureRounding(data.main.temp - 273);
    const min = this.handleTemperatureRounding(data.main.temp_min - 273);
    const currentWeather = this.getWeather(data.weather[0].main);
    this.shadowRoot.querySelector(".today").textContent =
      this.getCurrentDay(day);
    this.shadowRoot.querySelector(".month").textContent =
      this.getCurrentMonth(month) + " " + date;
    this.shadowRoot.querySelector(".max").innerHTML = `High <br> ${max}`;
    this.shadowRoot.querySelector(".temp").innerHTML = `${temp}`;
    this.shadowRoot.querySelector(".min").innerHTML = `Low <br> ${min}`;
    this.shadowRoot.querySelector(
      ".complexcard-desc-middle img"
    ).src = `./images/${currentWeather}.png`;
  }

  getCurrentDay(date) {
    return this.weekDays[date];
  }
  getCurrentMonth(date) {
    return this.months[date];
  }
  handleTemperatureRounding(temp) {
    if (temp >= 0) {
      if (Math.floor(temp % 2) == 0) {
        if (temp % 2 >= 0.5) {
          return Math.ceil(temp);
        } else return Math.floor(temp);
      } else if (Math.floor(temp % 2) == 1) {
        if ((temp - 1) % 2 >= 0.5) {
          return Math.ceil(temp);
        } else return Math.floor(temp);
      }
    } else {
      temp = Math.abs(temp);
      if (Math.floor(temp % 2) == 0) {
        if (temp % 2 < 0.5) {
          return Math.ceil(-temp);
        } else return Math.floor(-temp);
      } else if (Math.floor(temp % 2) == 1) {
        if ((temp - 1) % 2 < 0.5) {
          return Math.ceil(-temp);
        } else return Math.floor(-temp);
      }
    }
  }
  getWeather(key) {
    if (this.weatherMain["sun"].includes(key)) {
      key = "sun";
      return key;
    } else if (this.weatherMain["cloud"].includes(key)) {
      key = "cloud";
      return key;
    } else if (this.weatherMain["rain"].includes(key)) {
      key = "rain";
      return key;
    } else if (this.weatherMain["storm"].includes(key)) {
      key = "storm";
      return key;
    } else if (this.weatherMain["snow"].includes(key)) {
      key = "snow";
      return key;
    } else {
      key = "sun";
      return key;
    }
  }
}

customElements.define("complex-card", Complexcard);
