import React from 'react';

import {IDish} from '../../../../../store/reducers/dishesReducer';

export const Dish: React.FC<IDish> = (props) => (
  <tr data-test="dish">
    <td>{props.name}</td>
    <td>{props.description}</td>
    <td>{props.size}</td>
    <td>{props.type}</td>
    <td>{props.price}</td>
  </tr>
)