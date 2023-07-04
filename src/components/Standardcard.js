class Standardcard extends HTMLElement {
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
    this.template = document.createElement("template");
    this.template.innerHTML = `<link rel="stylesheet" href="./components/Standardcard.css" type="text/css" />
    <section">
        <div class="standard-card">
            <div class="standard-details">
                <h2>Morning</h2>
                <img src="../../images/sun.png">
                <h2 class ="temp">0</h2>
            </div>
            <div class="standard-details">
                <h2>Afternoon</h2>
                <img src="../../images/sun.png">
                <h2 class ="temp">0</h2>
            </div>
            <div class="standard-details">
                <h2>Evening</h2>
                <img src="../../images/sun.png">
                <h2 class ="temp">0</h2>
            </div>
            <div class="standard-details">
                <h2>Overnight</h2>
                <img src="../../images/sun.png">
                <h2 class ="temp">0</h2>
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
    console.log(data);
    const dailyTemp = this.handTemperatureRounding(data.main.temp - 273);
    const tempNum = this.shadowRoot.querySelectorAll(".temp");
    tempNum.forEach((num) => {
      num.textContent = dailyTemp.toString();
    });
    const currentWeather = this.weatherKey(data.weather[0].main);
    this.shadowRoot
      .querySelectorAll(".standard-details img")
      .forEach((weather) => {
        weather.src = `../../images/${currentWeather}.png`;
      });
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

customElements.define("standard-card", Standardcard);
