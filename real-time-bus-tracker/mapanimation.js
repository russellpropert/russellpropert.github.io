mapboxgl.accessToken = 'pk.eyJ1IjoicnVzc2VsbHByb3BlcnQiLCJhIjoiY2twcmN6aHNoMDBycjJ2bzRkY2tzYXc0bSJ9.FtaHBAoVWf0xfdn8wAu6mw';

const marker = [];

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.096081, 42.352554],
  zoom: 13
});

const run = (data) => {
  data = data.data;
  console.log(new Date());
  console.log(data);
  console.log(marker);
  const len = Math.max(data.length, marker.length);

    for (let i = 0; i < len; i++) {
      if (!marker[i]) {
        marker[i] = new mapboxgl.Marker()
          .setLngLat([data[i].attributes.longitude, data[i].attributes.latitude])
          .addTo(map);
      } else if (i >= data.length) {
        marker[i].remove();
        marker.pop();
      } else {
        marker[i].setLngLat([data[i].attributes.longitude, data[i].attributes.latitude]);
      }
    }


  setTimeout(() => {getBuses().then((data) => run(data))}, 15000);
}

async function getBuses(){
  const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
  const response = await fetch(url);
  const data     = await response.json();
  return data;
}

getBuses().then((data) => run(data));
