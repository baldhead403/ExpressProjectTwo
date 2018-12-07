// let map, infoWindow;
// function initMap() {
    
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat:-34.749, lng:150.388},
//         zoom: 8
//     });
    
//     infoWindow = new google.maps.InfoWindow;
    
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//             console.log(pos)
//             initMap(pos)
//       let pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };
//       infoWindow.setPosition(pos);
//       infoWindow.setContent('Location found.');
//       infoWindow.open(map);
//       map.setCenter(pos);
//     }, function() {
//       handleLocationError(true, infoWindow, map.getCenter());
//     });
//   } else {
    
//     handleLocationError(false, infoWindow, map.getCenter());
//   }
  
//   function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(browserHasGeolocation ?
//       'Error: The Geolocation service failed.' :
//       'Error: Your browser doesn\'t support geolocation.');
//       infoWindow.open(map);
//     }
//   }
function initMap() {
  getLocation()
}
function displayLocation(place){
  console.log("place")

  console.log(place)
  currentPosition = {lat: place.coords.latitude, lng: place.coords.longitude}
  const map = new google.maps.Map(
  document.getElementById('map'), {zoom: 4, center: currentPosition});
  const marker = new google.maps.Marker({position: currentPosition, map: map});
}
function errorCallback(err){
  console.log("an error happened", err)
}
function getLocation() {
  
  if (navigator.geolocation) {
      console.log("inside geolocation true")
      navigator.geolocation.getCurrentPosition(displayLocation,errorCallback,{timeout:10000});
  } else {
      alert("Geolocation is not supported by this browser.")
  }
}