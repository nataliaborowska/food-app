const router = require('express').Router();
let Dish = require('../models/dishes.model');

router.route('/').get((req, res) => {
  Dish.find()
    .then(dishes => res.json(dishes))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const size = Number(req.body.size);
  const type = req.body.type;
  const price = Number(req.body.price);

  const newDish = new Dish({
    name,
    description,
    size,
    type,
    price,
  });

  newDish.save()
    .then(() => res.json('Dish added'))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/:id').get((req, res) => {
  Dish.findById(req.params.id)
    .then(dish => res.json(dish))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/:id').delete((req, res) => {
  Dish.findByIdAndDelete(req.params.id)
    .then(() => res.json('Dish deleted'))
    .catch(error => res.status(400).json('Error: ' + error));
});

router.route('/update/:id').post((req, res) => {
  Dish.findById(req.params.id)
    .then((dish) => {
      dish.name = req.body.name;
      dish.description = req.body.description;
      dish.size = Number(req.body.size);
      dish.type = req.body.type;
      dish.price = Number(req.body.price);

      dish.save()
        .then(() => res.json('Dish updated'))
        .catch(error => res.status(400).json('Error: ' + error));
    })
    .catch(error => res.status(400).json('Error: ' + error));
})

module.exports = router;