const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
}, {
  timestamps: true,
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;