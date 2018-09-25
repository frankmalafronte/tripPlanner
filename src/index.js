console.log("hello")
const marker = require("./marker.js")
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken ='pk.eyJ1IjoiZnJhbmttYWwiLCJhIjoiY2ptaTcxcGp1MDF5bzNwbW84YWkwcG02ciJ9.vXxaWgSuI8ZbG8pkAp21yA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.

});



const activity = new Marker('http://i.imgur.com/WbMOfMl.png').setLngLat([]).addTo(map);
const hotel = new Marker('http://i.imgur.com/D9574Cu.png').setLngLat([]).addTo(map);
const restaurant = new Marker('http://i.imgur.com/cqR6pUI.png').setLngLat([]).addTo(map);


