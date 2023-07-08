class Daycards extends HTMLElement {
  constructor() {
    super();
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
    this.weekDays = {
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
      7: "Sunday",
    };
    this.template = document.createElement("template");
    this.template.innerHTML = `<link rel="stylesheet" href="./components/Daycards.css" type="text/css" />
    <section>
      <div class="daycards-all">
        <div class="daycards-card">
          <h2 class="daycards-title">Thursday</h2>
          <img src="../../images/sun.png" />
          <div class="daycards-details">
            <h2>Morning</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Afternoon</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Evening</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Overnight</h2>
            <h2 class="temp">20</h2>
          </div>
        </div>
        <div class="daycards-card">
          <h2 class="daycards-title">Thursday</h2>
          <img src="../../images/sun.png" />
          <div class="daycards-details">
            <h2>Morning</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Afternoon</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Evening</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Overnight</h2>
            <h2 class="temp">20</h2>
          </div>
        </div>
        <div class="daycards-card">
          <h2 class="daycards-title">Thursday</h2>
          <img src="../../images/sun.png" />
          <div class="daycards-details">
            <h2>Morning</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Afternoon</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Evening</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Overnight</h2>
            <h2 class="temp">20</h2>
          </div>
        </div>
        <div class="daycards-card">
          <h2 class="daycards-title">Thursday</h2>
          <img src="../../images/sun.png" />
          <div class="daycards-details">
            <h2>Morning</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Afternoon</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Evening</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Overnight</h2>
            <h2 class="temp">20</h2>
          </div>
        </div>
        <div class="daycards-card">
          <h2 class="daycards-title">Thursday</h2>
          <img src="../../images/sun.png" />
          <div class="daycards-details">
            <h2>Morning</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Afternoon</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Evening</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Overnight</h2>
            <h2 class="temp">20</h2>
          </div>
        </div>
        <div class="daycards-card">
          <h2 class="daycards-title">Thursday</h2>
          <img src="../../images/sun.png" />
          <div class="daycards-details">
            <h2>Morning</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Afternoon</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Evening</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Overnight</h2>
            <h2 class="temp">20</h2>
          </div>
        </div>
        <div class="daycards-card">
          <h2 class="daycards-title">Thursday</h2>
          <img src="../../images/sun.png" />
          <div class="daycards-details">
            <h2>Morning</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Afternoon</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Evening</h2>
            <h2 class="temp">20</h2>
          </div>
          <div class="daycards-details">
            <h2>Overnight</h2>
            <h2 class="temp">20</h2>
          </div>
        </div>
      </div>
    </section>
    `;
    this.attachShadow({
      mode: "open",
    });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }
  static get observedAttributes() {
    return ["city"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "city") {
      this.handleAPIData(JSON.parse(newValue));
    }
  }
  handleAPIData(data) {
    const currentWeather = this.weatherKey(data.weather[0].main);
    this.shadowRoot
      .querySelectorAll(".daycards-card img")
      .forEach((weather) => {
        weather.src = `../../images/${currentWeather}.png`;
      });
    const temp = this.handTemperatureRounding(data.main.temp - 273);
    this.shadowRoot.querySelectorAll(".temp").forEach((weather) => {
      weather.textContent = temp;
    });
    const day = this.shadowRoot.querySelectorAll(".daycards-title");
    const today = this.whatDay(new Date().getDay());
    let days = new Date().getDay();
    for (let i = 0; i < day.length; i++) {
      day[i].textContent = this.whatDay(days);
      if (days >= 6) {
        days = days % 7;
      }
      days++;
    }
  }
  whatDay(date) {
    return this.weekDays[date];
  }
  weatherKey(key) {
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
  handTemperatureRounding(temp) {
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
}

customElements.define("day-cards", Daycards);
