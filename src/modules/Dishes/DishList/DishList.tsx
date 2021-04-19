import React from 'react';

import {Dish} from './Dish';

interface IPropTypes {
  dishes: Array<{
    name: string;
    description: string;
    size: number;
    price: number;
    _id: string;
  }>;
}

export const DishList: React.FC<IPropTypes> = (props) => (
  <tbody>
    {props.dishes.map(dish => (
      <Dish
        key={dish._id}
        name={dish.name}
        description={dish.description}
        size={dish.size}
        price={dish.price}
      />
    ))}
  </tbody>
)