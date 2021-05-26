import axios from 'axios';
import {Dispatch, ActionCreator, Action} from 'redux';
import {ThunkAction} from 'redux-thunk';

import {IDish} from '../reducers/dishesReducer';
import {DishActionTypesEnum} from './actionTypesEnum';
import {IState} from '../store';
import {DishActions} from './actionTypes';

export const addDish: ActionCreator<ThunkAction<void, IState, null, DishActions>> = (dish: IDish) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: DishActionTypesEnum.ADD_DISH_START,
    });

    return axios.post('http://localhost:5000/dishes/add', dish)
      .then(response => {
        dispatch({
          type: DishActionTypesEnum.ADD_DISH_SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: DishActionTypesEnum.ADD_DISH_FAIL,
        })
      })
      .finally(() => dispatch({
        type: DishActionTypesEnum.ADD_DISH_END,
      }));
  }
}

export const getDishes: ActionCreator<ThunkAction<void, IState, null, DishActions>> = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: DishActionTypesEnum.GET_DISHES_START,
    });

    return axios.get('http://localhost:5000/dishes')
      .then(response => {
        dispatch({
          type: DishActionTypesEnum.GET_DISHES_SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: DishActionTypesEnum.GET_DISHES_FAIL,
        })
      })
      .finally(() => dispatch({
        type: DishActionTypesEnum.GET_DISHES_END,
      }));
  }
}