//  https://open-notify-api.readthedocs.io/en/latest/iss_location.html

mapboxgl.accessToken = 'pk.eyJ1IjoicnVzc2VsbHByb3BlcnQiLCJhIjoiY2twcmN6aHNoMDBycjJ2bzRkY2tzYXc0bSJ9.FtaHBAoVWf0xfdn8wAu6mw';


async function getIssLocation() {
  const url = 'http://api.open-notify.org/iss-now.json';
  const response = await fetch(url);
  const data = await response.json();
  const coordinates = [data.iss_position.longitude, data.iss_position.latitude];

  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: coordinates,
    zoom: 3,
  });

  const marker = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);


}

getIssLocation();
setInterval(getIssLocation, 20000);
