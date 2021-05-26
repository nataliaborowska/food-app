import {DishActionTypesEnum} from '../actions/actionTypesEnum';
import {DishActions} from '../actions/actionTypes';
import {statusEnum} from '../../utils/statusEnum';

export interface IDish {
  name: string;
  description: string;
  size: string;
  price: string;
  type: string;
  _id?: string;
}

export interface IDishesState {
  dishes: Array<IDish>;
  loading: boolean;
  creationStatus: statusEnum;
  fetchingStatus: statusEnum;
}

const initialState: IDishesState = {
  dishes: [],
  loading: false,
  creationStatus: statusEnum.PENDING,
  fetchingStatus: statusEnum.PENDING,
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
    case DishActionTypesEnum.GET_DISHES_SUCCESS:
      return {
        ...state,
        fetchingStatus: statusEnum.SUCCESS,
        dishes: action.payload,
      }
    case DishActionTypesEnum.GET_DISHES_END:
      return {
        ...state,
        loading: false,
      }
    case DishActionTypesEnum.GET_DISHES_FAIL:
      return {
        ...state,
        fetchingStatus: statusEnum.FAIL,
      }
    case DishActionTypesEnum.GET_DISHES_START:
      return {
        ...state,
        fetchingStatus: statusEnum.PENDING,
        loading: true,
      }
  }
  return state;
}