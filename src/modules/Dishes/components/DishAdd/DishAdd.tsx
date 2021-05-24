import React, {useEffect, useState, Dispatch} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';

import {DishesNavbar} from '../DishesNavbar';
import {NumberInput} from '../../../../common/NumberInput';
import {TextInput} from '../../../../common/TextInput';
import {Loader} from '../../../../common/Loader';
import {IDish} from '../../../../store/reducers/dishesReducer';
import {addDish} from '../../../../store/actions/index';
import {IState} from '../../../../store/store';
import {DishActions} from '../../../../store/actions/actionTypes';

export const DishAdd: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<IState, any, DishActions>>();
  
  const loading = useSelector((state: IState) => state.dishes.loading);

  const [dish, setDish] = useState<IDish>({
    name: '',
    description: '',
    size: '',
    price: '',
  });

  useEffect(() => {
    if (loading) {
     setDish({
        name: '',
        description: '',
        size: '',
        price: '',
      });
    }
  }, [loading])

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDish(state => {
      return {
        ...state,
        [event.target.name]: event.target.value,
      }
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addDish(dish));



    // axios.post('http://localhost:5000/dishes/add', newDish)
    //   .then(response => {
    //     console.log(response.data);

    //     setDish({
    //       dishName: '',
    //       dishDescription: '',
    //       dishSize: '',
    //       dishPrice: '',
    //     });
    //   })
    //   .catch(error => {console.warn(error)})
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  }

  return (
    <div data-test="dishAdd">
      <DishesNavbar />

      <h1>Add new Dish</h1>

      {loading ?
        <Loader />
        :
        <form data-test="dishAddForm" onSubmit={handleSubmit}>
          <TextInput
            inputId="name"
            label="Name"
            onChange={handleFieldChange}
            value={dish.name}
          />
          <TextInput
            inputId="description"
            label="Description"
            onChange={handleFieldChange}
            value={dish.description}
          />
          <NumberInput
            inputId="size"
            label="Size"
            onChange={handleFieldChange}
            value={dish.size}
          />
          <NumberInput
            inputId="price"
            label="Price"
            onChange={handleFieldChange}
            value={dish.price}
          />
          <div className="mb-3">
            <button type="submit" className="btn btn-primary mb-3">Add new dish</button>
          </div>
        </form>
      }
    </div>
  );
}