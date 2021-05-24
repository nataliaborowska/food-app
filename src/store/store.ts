import {Action, applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {dishesReducer, IDishesState} from './reducers/dishesReducer';
import thunk, {ThunkAction} from 'redux-thunk';

export interface IState {
  dishes: IDishesState;
}

export const rootReducer = combineReducers({
  dishes: dishesReducer,
});

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof rootReducer>;

export type AppThunk<T> = ThunkAction<T, RootStore, unknown, Action<string>>

export default store;