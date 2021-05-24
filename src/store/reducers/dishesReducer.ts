import {DishActionTypesEnum} from '../actions/actionTypesEnum';
import {DishActions} from '../actions/actionTypes';

export interface IDish {
  name: string;
  description: string;
  size: string;
  price: string;
}

export interface IDishesState {
  dishes: Array<IDish>;
  loading: boolean;
}

const initialState: IDishesState = {
  dishes: [],
  loading: false,
}

export const dishesReducer = (state: IDishesState = initialState, action: DishActions): IDishesState => {
  switch (action.type) {
    case DishActionTypesEnum.ADD_DISH_SUCCESS:
      return {
        ...state,
        dishes: [...state.dishes, action.payload],
      }
    case DishActionTypesEnum.ADD_DISH_END:
      return {
        ...state,
        loading: false,
      }
    case DishActionTypesEnum.ADD_DISH_START:
      return {
        ...state,
        loading: true,
      }
  }
  return state;
}