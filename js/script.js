 function initMap() {
  var uluru = {lat: 50.450613, lng: 30.587262};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: uluru
  });
  var uluruOne = {lat: 50.447392, lng: 30.502872};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: uluru
  });
  var uluruTwo = {lat: 50.446771, lng: 30.545925};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
  var marker = new google.maps.Marker({
    position: uluruOne,
    map: map
  });
  var marker = new google.maps.Marker({
    position: uluruTwo,
    map: map
  });
}
