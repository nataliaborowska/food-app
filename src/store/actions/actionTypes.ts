import {DishActionTypesEnum} from './actionTypesEnum';
import {IDish} from '../reducers/dishesReducer';

export interface IAddDishSuccess {
  type: DishActionTypesEnum.ADD_DISH_SUCCESS;
  payload: IDish;
}

export interface IAddDishEnd {
  type: DishActionTypesEnum.ADD_DISH_END;
}

export interface IAddDishStart {
  type: DishActionTypesEnum.ADD_DISH_START;
}

export type DishActions = 
| IAddDishSuccess
| IAddDishEnd
| IAddDishStart;