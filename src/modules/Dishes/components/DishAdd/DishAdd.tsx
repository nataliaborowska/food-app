import React, {useState} from 'react';
import axios from 'axios';

import {DishesNavbar} from '../DishesNavbar';
import {NumberInput} from '../../../../common/NumberInput';
import {TextInput} from '../../../../common/TextInput';
import {Loader} from '../../../../common/Loader';

export const DishAdd: React.FC = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newDish = {
      name: e.currentTarget.inputName.value,
      description: e.currentTarget.inputDescription.value,
      size: e.currentTarget.inputSize.value,
      price: e.currentTarget.inputPrice.value,
    }

    setIsLoading(true);

    axios.post('http://localhost:5000/dishes/add', newDish)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {console.warn(error)})
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div>
      <DishesNavbar />

      <h1>Add new Dish</h1>

      {isLoading ?
        <Loader />
        :
        <form onSubmit={handleSubmit}>
          <TextInput
            inputId="inputName"
            label="Name"
            isReset={isLoading}
          />
          <TextInput
            inputId="inputDescription"
            label="Description"
            isReset={isLoading}
          />
          <NumberInput
            inputId="inputSize"
            label="Size"
            isReset={isLoading}
          />
          <NumberInput
            inputId="inputPrice"
            label="Price"
            isReset={isLoading}
          />
          <div className="mb-3">
            <button type="submit" className="btn btn-primary mb-3">Add new dish</button>
          </div>
        </form>
      }
    </div>
  );
}