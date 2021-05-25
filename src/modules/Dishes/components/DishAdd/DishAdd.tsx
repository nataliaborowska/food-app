import React, {useEffect, useState} from 'react';
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
import {Select} from '../../../../common/Select';
import {statusEnum} from '../../../../utils/statusEnum';

interface IPropTypes {
  dishTypes: Array<string>;
}

export const DishAdd: React.FC<IPropTypes> = (props) => {
  const dispatch = useDispatch<ThunkDispatch<IState, any, DishActions>>();
  
  const loading = useSelector((state: IState) => state.dishes.loading);
  const status = useSelector((state: IState) => state.dishes.creationStatus);

  const [dish, setDish] = useState<IDish>({
    name: '',
    description: '',
    size: '',
    price: '',
    type: '',
  });

  useEffect(() => {
    if (loading) {
     setDish({
        name: '',
        description: '',
        size: '',
        price: '',
        type: '',
      });
    }
  }, [loading]);

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
  }

  return (
    <div data-test="dishAdd">
      <DishesNavbar />

      <h1>Add new Dish</h1>

      {status === statusEnum.SUCCESS &&
        <div data-test="dishAddSuccess" className="alert alert-success" role="alert">
          <span>You have successfully created a new dish {dish.name}.</span>
        </div>
      }

      {status === statusEnum.FAIL &&
        <div data-test="dishAddFail" className="alert alert-danger" role="alert">
          <span>Sorry, there was a problem processing your request</span>
        </div>
      }

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
          <Select
            label="Type"
            onChange={handleFieldChange}
            selectId="type"
            values={props.dishTypes}
            value={dish.type}
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