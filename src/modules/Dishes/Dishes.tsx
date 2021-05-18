import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {DishList} from './components/DishList';
import {DishesNavbar} from './components/DishesNavbar';

export const Dishes: React.FC = () => {
  const [dishes, setDishes] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/dishes')
      .then(response => setDishes(response.data))
      .catch(error => {console.log(error)})
      .finally(() => {
        setFetching(false)
      })
  }, []);

  if (fetching) {
    return (
      <span className="dishes__loading">Loading ...</span>
    )
  }

  return (
    <div>
      <DishesNavbar />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Size</th>
            <th scope="col">Price</th>
          </tr>
        </thead>

        {dishes ?
          <DishList dishes={dishes} />
          :
          <tbody>
            <tr>
              <td>Sorry, no dishes found</td>
            </tr>
          </tbody>
        }
      </table>
    </div>
  )
}