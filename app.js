const token = 'pk.eyJ1IjoibmhhY2F1bHQ3IiwiYSI6ImNrd3pxMzNhYTBxaTQydnEzbDIzNHdjdXEifQ.dVzy8RExq6XPECC3t0CxOg';

let lon;
let lat;

if (!navigator.geolocation) {
  console.log('Geolocation is not supported by your browser')
} else {
  navigator.geolocation.getCurrentPosition((position) => {
    lon = position.coords.longitude;
    lat = position.coords.latitude;
    mapboxgl.accessToken = token;
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [lon, lat], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
  });
}