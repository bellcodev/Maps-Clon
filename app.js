mapboxgl.accessToken = 'Token MapBox';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-74.5, 40],
  zoom: 9
});

new mapboxgl.Marker()
  .setLngLat([-74.5, 40])
  .addTo(map);
