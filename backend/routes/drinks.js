const router = require('express').Router();
let Drink = require('../models/drinks.model');

router.route('/').get((req, res) => {
  Drink.find()
    .then(drinks => res.json(drinks))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = Number(req.body.price);

  const newDrink = new Drink({
    name,
    description,
    price,
  });

  newDrink.save()
    .then(() => res.json('Drink added'))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/:id').get((req, res) => {
  Drink.findById(req.params.id)
    .then(drink => res.json(drink))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/:id').delete((req, res) => {
  Drink.findByIdAndDelete(req.params.id)
    .then(() => res.json('Drink deleted'))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/update/:id').post((req, res) => {
  Drink.findById(req.params.id)
    .then((drink) => {
      drink.name = req.body.name;
      drink.description = req.body.description;
      drink.price = Number(req.body.price);

      drink.save()
        .then(() => res.json('Drink updated'))
        .catch(error => res.status(400).json('Error: ' + error));
    })
    .catch(error => res.status(400).json('Error: ' + error));
})

module.exports = router;