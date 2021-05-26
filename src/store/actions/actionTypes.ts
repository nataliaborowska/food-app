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

export interface IGetDishesSuccess {
  type: DishActionTypesEnum.GET_DISHES_SUCCESS;
  payload: Array<IDish>;
}

export interface IGetDishesEnd {
  type: DishActionTypesEnum.GET_DISHES_END;
}

export interface IGetDishesFail {
  type: DishActionTypesEnum.GET_DISHES_FAIL;
}

export interface IGetDishesStart {
  type: DishActionTypesEnum.GET_DISHES_START;
}

export type DishActions = 
| IAddDishSuccess
| IAddDishEnd
| IAddDishFail
| IAddDishStart
| IGetDishesSuccess
| IGetDishesEnd
| IGetDishesFail
| IGetDishesStart;