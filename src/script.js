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
  //Amsterdam
  let amsterdamDateElement = document.querySelector("#amsterdam-date");
  let amsterdamTimeElement = document.querySelector("#amsterdam-time");
  let amsterdamTime = moment()
    .tz("Europe/Amsterdam")
    .format("h:mm:ss [<small>]A[</small>]");
  let amsterdamDate = moment().tz("Europe/Amsterdam").format("MMMM Do YYYY");

  if (amsterdamDateElement) {
    amsterdamDateElement.innerHTML = amsterdamDate;
    amsterdamTimeElement.innerHTML = amsterdamTime;
  }

  //johannesberg
  let johannesburgDateElement = document.querySelector("#johannesburg-date");
  let johannesburgTimeElement = document.querySelector("#johannesburg-time");
  let johannesburgTime = moment()
    .tz("Africa/Johannesburg")
    .format("h:mm:ss [<small>]A[</small>]");
  let johannesburgDate = moment()
    .tz("Africa/Johannesburg")
    .format("MMMM Do YYYY");

  if (johannesburgDateElement) {
    johannesburgDateElement.innerHTML = johannesburgDate;
    johannesburgTimeElement.innerHTML = johannesburgTime;
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
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div>
            <div class="time">${cityTime.format(
              "h:mm:ss [<small>]A[</small>]"
            )}</div>
          </div>
        </div> <a href="/">All Cities > </a>`;

  setTimeout(() => {
    updateCity(event);
  }, 1000);
}

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
