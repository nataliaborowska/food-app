import {DishActionTypesEnum} from './actionTypesEnum';
import {IDish} from '../reducers/dishesReducer';

export interface IAddDishSuccess {
  type: DishActionTypesEnum.ADD_DISH_SUCCESS;
  payload: IDish;
}

export interface IAddDishEnd {
  type: DishActionTypesEnum.ADD_DISH_END;
}

export interface IAddDishFail {
  type: DishActionTypesEnum.ADD_DISH_FAIL;
}

export interface IAddDishStart {
  type: DishActionTypesEnum.ADD_DISH_START;
}

export type DishActions = 
| IAddDishSuccess
| IAddDishEnd
| IAddDishFail
| IAddDishStart;