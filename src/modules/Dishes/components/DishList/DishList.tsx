import React from 'react';

import {Dish} from './Dish';
import {IDish} from '../../../../store/reducers/dishesReducer';

interface IPropTypes {
  dishes: Array<IDish>;
}

export const DishList: React.FC<IPropTypes> = (props) => (
  <tbody>
    {props.dishes.map(dish => (
      <Dish
        key={dish._id}
        name={dish.name}
        description={dish.description}
        size={dish.size}
        type={dish.type}
        price={dish.price}
      />
    ))}
  </tbody>
)