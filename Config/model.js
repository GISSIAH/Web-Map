var mongoose=require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');
var db = require('./connection.js');
const Schema = mongoose.Schema;
const senuSchema = new Schema({
  type:mongoose.Schema.Types.FeatureCollection,
  name:String,
  crs:Object,
  features:Array
});
const model = db.model('senu', senuSchema, 'senu');
console.log('succefully made model');
module.exports = model;