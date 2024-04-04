function updateTime() {
  //new york
  let newYorkDateElement = document.querySelector("#date-newyork");
  let newYorkTimeElement = document.querySelector("#time-newyork");
  let newYorkTime = moment()
    .tz("America/New_York")
    .format("h:mm:ss [<small>]A[</small>]");
  let newYorkDate = moment().tz("America/New_York").format("MMMM Do YYYY");
  if (newYorkDateElement) {
    newYorkTimeElement.innerHTML = newYorkTime;
    newYorkDateElement.innerHTML = newYorkDate;
  }
  //London
  let londonDateElement = document.querySelector("#date-london");
  let londonTimeElement = document.querySelector("#time-london");
  let londonTime = moment()
    .tz("Europe/London")
    .format("h:mm:ss [<small>]A[</small>]");
  let londonDate = moment().tz("Europe/London").format("MMMM Do YYYY");

  if (londonDateElement) {
    londonDateElement.innerHTML = londonDate;
    londonTimeElement.innerHTML = londonTime;
  }

  //Tokyo
  let tokyoDateElement = document.querySelector("#date-tokyo");
  let tokyoTimeElement = document.querySelector("#time-tokyo");
  let tokyoTime = moment()
    .tz("Asia/Tokyo")
    .format("h:mm:ss [<small>]A[</small>]");
  let tokyoDate = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");

  if (tokyoDateElement) {
    tokyoDateElement.innerHTML = tokyoDate;
    tokyoTimeElement.innerHTML = tokyoTime;
  }

  //Sydney
  let sydneyDateElement = document.querySelector("#date-sydney");
  let sydneyTimeElement = document.querySelector("#time-sydney");
  let sydneyTime = moment()
    .tz("Australia/Sydney")
    .format("h:mm:ss [<small>]A[</small>]");
  let sydneyDate = moment().tz("Australia/Sydney").format("MMMM Do YYYY");

  if (sydneyDateElement) {
    sydneyDateElement.innerHTML = sydneyDate;
    sydneyTimeElement.innerHTML = sydneyTime;
  }
}

setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === `current`) {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace(`_`, `/`).split(`/`)[1];
  let cityTime = moment().tz(`${cityTimeZone}`);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="row city">
    <div class="col-6">
      <div class="city">
        <h2>${cityName}</h2>
      </div>
    </div>
    <div class="col-6 digital-display">
      <div class="time" id="time-newyork">
        <h2>${cityTime.format("h:mm:ss [<small>]A[</small>]")}</h2>
      </div>
      <div class="date" id="date-newyork">
        ${cityTime.format("MMMM Do YYYY")}
      </div>
    </div>
  </div> </div> <a href="/">All Cities > </a>`;
  setTimeout(() => {
    updateCity(event);
  }, 1000);
}

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
