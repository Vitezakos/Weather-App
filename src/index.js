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
  document
    .getElementById("City")
    .setAttribute("text", event.detail.message.name);
  document.getElementById("Date").setAttribute("text", getMonths());
  document.getElementById("Time").setAttribute("text", currentTime());
  document
    .getElementById("Time")
    .setAttribute("size", "width: 207px; height: 89px; font-size: 48px;");
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
      posOrNeg(event.detail.message.main.temp - 273) +
        " " +
        handleTemperatureRounding(event.detail.message.main.temp - 273) +
        "°" +
        "C"
    );
  document.querySelectorAll(".backgroundWhite").forEach((target) => {
    target.setAttribute("outline", "#fff");
  });
  getSeason(event.detail.message.coord.lat);
});
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
  const today = new Date().getUTCDate();
  const date = now + " " + today;
  return date;
}
function currentTime() {
  const hour = new Date().getHours();
  let min = new Date().getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  const time = hour + ":" + min;
  return time;
}
function posOrNeg(data) {
  if (data >= 0) {
    return "+";
  } else {
    return "-";
  }
}
function handleTemperatureRounding(temp) {
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
      document.querySelectorAll(".backgroundBlack").forEach((target) => {
        target.setAttribute(
          "color",
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.90) 38.02%)"
        );
      });
      document.querySelectorAll(".backgroundWhite").forEach((target) => {
        target.setAttribute(
          "color",
          "linear-gradient(180deg, rgba(143, 143, 143, 0.00) 0%, #212020 100%)"
        );
      });
    } else if (season >= 0 && season < 5) {
      document.querySelector("body").style.backgroundImage =
        'url("../images/spring.jpg")';
      complex.setAttribute("season", "spring");
      document.querySelectorAll(".backgroundBlack").forEach((target) => {
        target.setAttribute(
          "color",
          "linear-gradient(180deg, #FFF 0%, rgba(5, 192, 46, 0.00) 100%)"
        );
      });
      document.querySelectorAll(".backgroundWhite").forEach((target) => {
        target.setAttribute(
          "color",
          "linear-gradient(180deg, rgba(143, 143, 143, 0.00) 0%, #212020 100%)"
        );
      });
    } else if (season >= 5 && season < 8) {
      document.querySelector("body").style.backgroundImage =
        'url("../images/summer.jpg")';
      complex.setAttribute("season", "summer");
      document.querySelectorAll(".backgroundBlack").forEach((target) => {
        target.setAttribute(
          "color",
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(129, 215, 148, 0.90) 38.54%)"
        );
      });
      document.querySelectorAll(".backgroundWhite").forEach((target) => {
        target.setAttribute(
          "color",
          "linear-gradient(180deg, rgba(143, 143, 143, 0.00) 0%, #81D794 100%)"
        );
      });
    } else if (season >= 8 && season < 11) {
      document.querySelector("body").style.backgroundImage =
        'url("../images/autumn.jpg")';
      complex.setAttribute("season", "autumn");
      document.querySelectorAll(".backgroundBlack").forEach((target) => {
        target.setAttribute(
          "color",
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #F5D7D7 100%)"
        );
      });
      document.querySelectorAll(".backgroundWhite").forEach((target) => {
        target.setAttribute(
          "color",
          "linear-gradient(180deg, rgba(143, 143, 143, 0.00) 0%, #671919 100%)"
        );
      });
    }
  } else {
    if (season == 11 || (season >= 0 && season < 2)) {
      document.querySelector("body").style.backgroundImage =
        'url("../images/summer.jpg")';
      complex.setAttribute("season", "summer");
      document.querySelectorAll(".backgroundBlack").forEach((target) => {
        target.setAttribute(
          "color",
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(129, 215, 148, 0.90) 38.54%)"
        );
      });
      document.querySelectorAll(".backgroundWhite").forEach((target) => {
        target.setAttribute(
          "color",
          "linear-gradient(180deg, rgba(143, 143, 143, 0.00) 0%, #81D794 100%)"
        );
      });
    } else if (season >= 0 && season < 5) {
      document.querySelector("body").style.backgroundImage =
        'url("../images/autumn.jpg")';
      complex.setAttribute("season", "autumn");
    } else if (season >= 5 && season < 8) {
      document.querySelector("body").style.backgroundImage =
        'url("../images/winter.jpg")';
      complex.setAttribute("season", "winter");
      document.querySelectorAll(".backgroundBlack").forEach((target) => {
        target.setAttribute(
          "color",
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.90) 38.02%)"
        );
      });
      document.querySelectorAll(".backgroundWhite").forEach((target) => {
        target.setAttribute(
          "color",
          "linear-gradient(180deg, rgba(143, 143, 143, 0.00) 0%, #212020 100%)"
        );
      });
    } else if (season >= 8 && season < 11) {
      document.querySelector("body").style.backgroundImage =
        'url("../images/spring.jpg")';
      complex.setAttribute("season", "spring");
      document.querySelectorAll(".backgroundBlack").forEach((target) => {
        target.setAttribute(
          "color",
          "linear-gradient(180deg, #FFF 0%, rgba(5, 192, 46, 0.00) 100%)"
        );
      });
      document.querySelectorAll(".backgroundWhite").forEach((target) => {
        target.setAttribute(
          "color",
          "linear-gradient(180deg, rgba(143, 143, 143, 0.00) 0%, #212020 100%)"
        );
      });
    }
  }
}
