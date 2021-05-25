import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer, IState} from '../store/store';

export function findByTestAttribute(wrapper: any, dataTestAttribute: string) {
  return wrapper.find(`[data-test='${dataTestAttribute}']`);
}

export function storeFactory(initialState: IState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}