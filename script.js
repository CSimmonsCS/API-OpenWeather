var city = "San Francisco";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=874b0a6f35b911d4631ad990b79258ab",
function(data){
  console.log(data);

  var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp = data.main.temp;
  var city = data.name;
  var weather = data.weather[0].main;

  $(".icon").attr('src', icon);
  $(".temp").append(temp + "F");
  $(".city").append(city);
  $(".weather").append(weather);
});
