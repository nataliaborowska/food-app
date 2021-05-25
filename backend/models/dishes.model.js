const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dishSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  size: {type: Number, required: true},
  price: {type: Number, required: true},
  type: {type: String, required: true},
}, {
  timestamps: true,
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;