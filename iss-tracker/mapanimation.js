//  https://open-notify-api.readthedocs.io/en/latest/iss_location.html

//  https://docs.mapbox.com/mapbox-gl-js/example/live-update-feature/

mapboxgl.accessToken = 'pk.eyJ1IjoicnVzc2VsbHByb3BlcnQiLCJhIjoiY2twcmN6aHNoMDBycjJ2bzRkY2tzYXc0bSJ9.FtaHBAoVWf0xfdn8wAu6mw';

let coordinates = []
let map;
let issMarker;
let geojson = {};

const getIssLocation = async () => {
  const url = 'http://api.open-notify.org/iss-now.json';
  const response = await fetch(url);
  const data = await response.json();
  coordinates.push([data.iss_position.longitude, data.iss_position.latitude]);
}

const initMap = async () => {
  await getIssLocation();
  console.log(coordinates[0]);
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: coordinates[0],
    zoom: 3
  });

  map.on('load', () => {
    geojson = {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
          'type': 'LineString',
          'coordinates': coordinates
        }
      }
    }
    map.addSource('lineCoordiates', geojson);

    map.addLayer({
      'id': 'ISS',
      'type': 'line',
      'source': 'lineCoordiates',
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': 'blue',
        'line-opacity': 1,
        'line-width': 4
      }
    });

  })

  issMarker = new mapboxgl.Marker().setLngLat(coordinates[0]).addTo(map);

  setInterval(updateIssLocation, 10*1000); 
}

const updateIssLocation = async () => {
  await getIssLocation();
  console.log(coordinates);
  geojson.data.geometry.coordinates = coordinates;
  issMarker.setLngLat(coordinates[coordinates.length - 1]);
  map.getSource('lineCoordiates').setData(geojson.data);
  map.panTo(coordinates[coordinates.length - 1]);

}



initMap();