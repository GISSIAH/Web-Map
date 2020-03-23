

// require modules
var L = require('leaflet');
var $ = require('jquery');
var g = require('esri-leaflet-geocoder');



// Create the map
var map = L.map('map').setView([-13.56,34.334], 10);

// Indicate leaflet the specific location of the images folder that it needs to render the page
L.Icon.Default.imagePath = '../images/';

// Use OpenStreetMap tiles and attribution
var osmTiles = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var attribution = '© OpenStreetMap contributors';

// Create the basemap and add it to the map
L.tileLayer(osmTiles, {
    maxZoom: 18,
    attribution: attribution
}).addTo(map);
L.control.scale().addTo(map);
function whenClicked(e){
    console.log(e);
}

function onEachFeature(feature,layer){
    layer.bindPopup('<h1>'+feature.properties+'</h1>');
    
}

$.getJSON('/fetch',function(data){
    var senu =L.geoJson(data,{onEachFeature:onEachFeature}).addTo(map);
});








