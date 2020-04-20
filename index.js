

// require modules
var L = require('leaflet');
var $ = require('jquery');
var g = require('esri-leaflet-geocoder');



// Create the map
var map = L.map('map').setView([-13.56,34.334], 10);

// Indicate leaflet the specific location of the images folder that it needs to render the page
L.Icon.Default.imagePath = '../images/';

L.control.scale().addTo(map);



function onEachFeature(feature,layer){
    layer.bindPopup('<h1>'+feature.properties.id+'</h1>');
    
}
$.getJSON('../mw.geojson',(data)=>{
    var mw = L.geoJSON(data,{
      onEachFeature:onEachFeature
    }).addTo(map);
  
  });
  





