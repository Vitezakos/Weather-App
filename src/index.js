window.addEventListener("click", () => {
  const btn = document.querySelector("drop-down");
  btn.setAttribute("state", "closed");
});

const btn = document.querySelector("drop-down");
btn.addEventListener("citychanged", (event) => {
  const standardCard = document.querySelector("standard-card");
  standardCard.setAttribute("city", JSON.stringify(event.detail.message));
  const complexCard = document.querySelector("complex-card");
  complexCard.setAttribute("city", JSON.stringify(event.detail.message));
  const dayCards = document.querySelector("day-cards");
  dayCards.setAttribute("city", JSON.stringify(event.detail.message));
  const desktopCard = document.querySelectorAll("desktop-card");
  desktopCard.forEach((card) =>
    card.setAttribute("city", JSON.stringify(event.detail.message))
  );
  document
    .getElementById("City")
    .setAttribute("text", event.detail.message.name);
  document.getElementById("Date").setAttribute("text", getMonths());
  document.getElementById("Time").setAttribute("text", currentTime());
  document
    .getElementById("Weather")
    .setAttribute("text", event.detail.message.weather[0].main);
  document
    .getElementById("Pressure")
    .setAttribute(
      "text",
      "Pressure" + " " + event.detail.message.main.pressure + "hPA"
    );
  document
    .getElementById("Temp")
    .setAttribute(
      "text",
      handTemperatureRounding(event.detail.message.main.temp - 273)
    );
  getSeason(event.detail.message.coord.lat);
});

function handTemperatureRounding(temp) {
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

function currentTime() {
  const hour = new Date().getHours();
  const min = new Date().getMinutes();
  const time = hour + ":" + min;
  return time;
}

function getMonths() {
  months = {
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
  const thisMonth = new Date().getMonth();
  const now = months[thisMonth];
  const today = new Date().getDay();
  const date = now + " " + today;
  return date;
}

function getSeason(latitude) {
  const months = {
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
  const season = new Date().getMonth();
  const thisMonth = months[season];
  const complex = document.querySelector("complex-card");
  if (latitude >= 0) {
    if (season == 11 || (season >= 0 && season < 2)) {
      document.querySelector("body").style.backgroundImage =
        'url("../images/winter.jpg")';
      complex.setAttribute("season", "winter");
    } else if (season >= 0 && season < 5) {
      document.querySelector("body").style.backgroundImage =
        'url("../images/spring.jpg")';
      complex.setAttribute("season", "spring");
    } else if (season >= 5 && season < 8) {
      document.querySelector("body").style.backgroundImage =
        'url("../images/summer.jpg")';
      complex.setAttribute("season", "summer");
    } else if (season >= 8 && season < 11) {
      document.querySelector("body").style.backgroundImage =
        'url("../images/autumn.jpg")';
      complex.setAttribute("season", "autumn");
    }
  } else {
    if (season == 11 || (season >= 0 && season < 2)) {
      document.querySelector("body").style.backgroundImage =
        'url("../images/summer.jpg")';
      complex.setAttribute("season", "summer");
    } else if (season >= 0 && season < 5) {
      document.querySelector("body").style.backgroundImage =
        'url("../images/autumn.jpg")';
      complex.setAttribute("season", "autumn");
    } else if (season >= 5 && season < 8) {
      document.querySelector("body").style.backgroundImage =
        'url("../images/winter.jpg")';
      complex.setAttribute("season", "winter");
    } else if (season >= 8 && season < 11) {
      document.querySelector("body").style.backgroundImage =
        'url("../images/spring.jpg")';
      complex.setAttribute("season", "spring");
    }
  }
}
