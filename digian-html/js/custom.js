// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

let counter = document.getElementById('counter');
let limit = 300; // set your desired limit here
let interval = setInterval(() => {
  let currentValue = parseInt(counter.textContent);
  if (currentValue < limit) {
    counter.textContent = currentValue + 1;
  } else {
    clearInterval(interval);
  }
}, 20); // adjust the interval time to your liking (in milliseconds)