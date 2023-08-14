// //set variables to target the neccessary elements in HTML doc

$("#search-form").on("submit", handleSearchSubmit);

function handleSearchSubmit(event) {
  event.preventDefault();
  var search = $("#search-box").val();
  if (!search) return;
  getWeather(search);
  console.log(search);

  localStorage.setItem("city", JSON.stringify(search));

  var searchList = localStorage.getItem("city");

  searchElement = $("<div>");
  searchInfo = $("<p>").text(searchList);

  $("#history").append(searchElement);
  $(searchElement).append(searchInfo);
}

// function createSearchList() {
//   var searchList = localStorage.getItem("city");

//   searchElement = $("<div>");
//   searchInfo = $("<p>").text(searchList);

//   $("#history").append(searchElement);
//   $(searchElement).append(searchInfo);
// }

// function setItemSearch() {
//   var searchItem = $("#search-form");
//   localStorage.setItem("city", searchItem.value);
// }

function getWeather(city) {
  var currentQueryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c1a8bbd55c4994588b63beb4cd3b412d`;

  var futureQueryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=c1a8bbd55c4994588b63beb4cd3b412d`;

  console.log(currentQueryURL);
  console.log(futureQueryURL);

  date = dayjs();
  nowDate = date.format("DD-MM-YYYY");

  addDate = date.add(1, "day");

  fetch(currentQueryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      icon = data.weather[0].icon;
      var weatherIcon = `https://openweathermap.org/img/wn/` + icon + `.png`;

      currentDiv = $("<div>");

      currentName = $("<h2>").text(data.name);
      currentTemp = $("<p>").text("Temp:  " + data.main.temp + "°C");
      currentCloud = $("<p>").text(
        "Cloud Coverage:  " + data.weather[0].description
      );
      currentWind = $("<p>").text("Wind Speed:  " + data.wind.speed);
      currentDate = $("<p>").text(nowDate);
      currentIcon = $("<img>").attr("src", weatherIcon);
      // date = dayJS();
      // currentDate = date.format("DD-MM-YYYY");

      $("#today").append(currentDiv);
      $(currentDiv).append(currentName);
      $(currentDiv).append(currentIcon);
      $(currentDiv).append(currentDate);
      $(currentDiv).append(currentTemp);
      $(currentDiv).append(currentCloud);
      $(currentDiv).append(currentWind);
    });

  fetch(futureQueryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      divContainers = [
        (futureDiv1 = $("<div>")),
        (futureDiv2 = $("<div>")),
        (futureDiv3 = $("<div>")),
        (futureDiv4 = $("<div>")),
        (futureDiv5 = $("<div>")),
      ];

      for (let i = 0; i < divContainers.length; i++) {
        $("#forecast").append(divContainers[i]);
        // futureTemp = $("<p>").text(data.list[0].temp);
        // $(divContainers[]).append(futureTemp);
        divContainers[i].addClass("future-cards");
      }
      icon = data.list[0].weather[0].icon;
      var weatherIcon = `https://openweathermap.org/img/wn/` + icon + `.png`;
      future = addDate.format("DD-MM-YYYY");

      futureDay1 = $("<h3>").text(future);
      futureIcon1 = $("<img>").attr("src", weatherIcon);
      futureTemp1 = $("<p>").text("Temp:   " + data.list[0].main.temp + "°C");
      futureCloud1 = $("<p>").text(
        "Cloud coverage:  " + data.list[0].weather[0].description
      );
      futureWind1 = $("<p>").text("Wind Speed:  " + data.list[0].wind.speed);

      $(futureDiv1).append(futureDay1);
      $(futureDiv1).append(futureIcon1);
      $(futureDiv1).append(futureTemp1);
      $(futureDiv1).append(futureCloud1);
      $(futureDiv1).append(futureWind1);

      future = addDate.add(1, "day").format("DD-MM-YYYY");
      icon2 = data.list[1].weather[0].icon;
      var weatherIcon2 = `https://openweathermap.org/img/wn/` + icon2 + `.png`;

      futureDay2 = $("<h3>").text(future);
      futureIcon2 = $("<img>").attr("src", weatherIcon2);
      futureTemp2 = $("<p>").text("Temp:   " + data.list[1].main.temp + "°C");
      futureCloud2 = $("<p>").text(
        "Cloud coverage:  " + data.list[1].weather[0].description
      );
      futureWind2 = $("<p>").text("Wind Speed:  " + data.list[1].wind.speed);

      $(futureDiv2).append(futureDay2);
      $(futureDiv2).append(futureIcon2);
      $(futureDiv2).append(futureTemp2);
      $(futureDiv2).append(futureCloud2);
      $(futureDiv2).append(futureWind2);

      future = addDate.add(2, "day").format("DD-MM-YYYY");
      icon3 = data.list[2].weather[0].icon;
      var weatherIcon3 = `https://openweathermap.org/img/wn/` + icon3 + `.png`;

      futureDay3 = $("<h3>").text(future);
      futureIcon3 = $("<img>").attr("src", weatherIcon3);
      futureTemp3 = $("<p>").text("Temp:   " + data.list[2].main.temp + "°C");
      futureCloud3 = $("<p>").text(
        "Cloud coverage:  " + data.list[2].weather[0].description
      );
      futureWind3 = $("<p>").text("Wind Speed:  " + data.list[2].wind.speed);

      $(futureDiv3).append(futureDay3);
      $(futureDiv3).append(futureIcon3);
      $(futureDiv3).append(futureTemp3);
      $(futureDiv3).append(futureCloud3);
      $(futureDiv3).append(futureWind3);

      future = addDate.add(3, "day").format("DD-MM-YYYY");
      icon4 = data.list[3].weather[0].icon;
      var weatherIcon4 = `https://openweathermap.org/img/wn/` + icon4 + `.png`;

      futureDay4 = $("<h3>").text(future);
      futureIcon4 = $("<img>").attr("src", weatherIcon4);
      futureTemp4 = $("<p>").text("Temp:   " + data.list[3].main.temp + "°C");
      futureCloud4 = $("<p>").text(
        "Cloud coverage:  " + data.list[3].weather[0].description
      );
      futureWind4 = $("<p>").text("Wind Speed:  " + data.list[3].wind.speed);

      $(futureDiv4).append(futureDay4);
      $(futureDiv4).append(futureIcon4);
      $(futureDiv4).append(futureTemp4);
      $(futureDiv4).append(futureCloud4);
      $(futureDiv4).append(futureWind4);

      future = addDate.add(4, "day").format("DD-MM-YYYY");
      icon5 = data.list[4].weather[0].icon;
      var weatherIcon5 = `https://openweathermap.org/img/wn/` + icon5 + `.png`;

      futureDay5 = $("<h3>").text(future);
      futureIcon5 = $("<img>").attr("src", weatherIcon5);
      futureTemp5 = $("<p>").text("Temp:   " + data.list[4].main.temp + "°C");
      futureCloud5 = $("<p>").text(
        "Cloud coverage:  " + data.list[4].weather[0].description
      );
      futureWind5 = $("<p>").text("Wind Speed:  " + data.list[4].wind.speed);

      $(futureDiv5).append(futureDay5);
      $(futureDiv5).append(futureIcon5);
      $(futureDiv5).append(futureTemp5);
      $(futureDiv5).append(futureCloud5);
      $(futureDiv5).append(futureWind5);

      // $("#search-button").click(function clear() {
      //   $("#today").empty();
      //   $("#forecast").empty();
      // });
    });
}

$("#search-button").click(function clear() {
  $("#today").empty();
  $("#forecast").empty();
});
