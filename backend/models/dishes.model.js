const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dishSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  size: {type: String, required: true},
  price: {type: String, required: true},
  type: {type: String, required: true},
}, {
  timestamps: true,
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;