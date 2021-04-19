import React from 'react';

interface IPropTypes {
  name: string;
  description: string;
  size: number;
  price: number;
}

export const Dish: React.FC<IPropTypes> = (props) => (
  <tr>
    <td>{props.name}</td>
    <td>{props.description}</td>
    <td>{props.size}</td>
    <td>{props.price}</td>
  </tr>
)