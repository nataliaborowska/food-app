import {DishActionTypesEnum} from '../actions/actionTypesEnum';
import {DishActions} from '../actions/actionTypes';
import {statusEnum} from '../../utils/statusEnum';

export interface IDish {
  name: string;
  description: string;
  size: string;
  price: string;
  type: string;
}

export interface IDishesState {
  dishes: Array<IDish>;
  loading: boolean;
  creationStatus: statusEnum;
}

const initialState: IDishesState = {
  dishes: [],
  loading: false,
  creationStatus: statusEnum.PENDING,
}

export const dishesReducer = (state: IDishesState = initialState, action: DishActions): IDishesState => {
  switch (action.type) {
    case DishActionTypesEnum.ADD_DISH_SUCCESS:
      return {
        ...state,
        creationStatus: statusEnum.SUCCESS,
        dishes: [...state.dishes, action.payload],
      }
    case DishActionTypesEnum.ADD_DISH_END:
      return {
        ...state,
        loading: false,
      }
    case DishActionTypesEnum.ADD_DISH_FAIL:
      return {
        ...state,
        creationStatus: statusEnum.FAIL,
      }
    case DishActionTypesEnum.ADD_DISH_START:
      return {
        ...state,
        creationStatus: statusEnum.PENDING,
        loading: true,
      }
  }
  return state;
}