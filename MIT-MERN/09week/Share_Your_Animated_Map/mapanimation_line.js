//  https://open-notify-api.readthedocs.io/en/latest/iss_location.html

mapboxgl.accessToken = 'pk.eyJ1IjoicnVzc2VsbHByb3BlcnQiLCJhIjoiY2twcmN6aHNoMDBycjJ2bzRkY2tzYXc0bSJ9.FtaHBAoVWf0xfdn8wAu6mw';

let coordinates = []

let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71, 40],
  zoom: 3,
});


async function getIssLocation() {
  const url = 'http://api.open-notify.org/iss-now.json';
  const response = await fetch(url);
  const data = await response.json();
  coordinates.push([data.iss_position.longitude, data.iss_position.latitude]);
}

async function createMap() {
  await getIssLocation();
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: coordinates[0],
    zoom: 3,
  });

  updateLine();
}

async function updateLine() {
  await getIssLocation();
  map.addSource('route', {
    'type': 'geojson',
    'data': {
      'type': 'Feature',
      'properties': {},
      'geometry': {
        'type': 'LineString',
        'coordinates': [coordinates]
      }
    }
  });

  map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'route',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': '#888',
      'line-width': 8
    }
  });

  setTimeout(updateLine, 10*1000);
}

createMap();
  

  // const marker = new mapboxgl.Marker()
  //   .setLngLat(coordinates)
  //   .addTo(map);







// let counter = 0;
// function move() {
//     setTimeout(() => {
//       if (counter >= busStops.length) return;
//       marker.setLngLat(busStops[counter]);
//       counter++;
//       move();
//     }, 1000)
// }