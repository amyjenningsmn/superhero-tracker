var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
  alias: {type: String, required: true, unique: true},
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  city: {type: String, required: true},
  power_name: {type: String, required: true}
})

var heroModel = mongoose.model('heroe', heroSchema);

module.exports = heroModel;
