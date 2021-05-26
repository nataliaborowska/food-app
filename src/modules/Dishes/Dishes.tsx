import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';

import {DishList} from './components/DishList';
import {DishesNavbar} from './components/DishesNavbar';
import {Loader} from '../../common/Loader';
import {IState} from '../../store/store';
import {DishActions} from '../../store/actions/actionTypes';
import {getDishes} from '../../store/actions';
import {statusEnum} from '../../utils/statusEnum';

export const Dishes: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<IState, any, DishActions>>();
  const dishes = useSelector((state: IState) => state.dishes.dishes);
  const status = useSelector((state: IState) => state.dishes.fetchingStatus);

  useEffect(() => {
    dispatch(getDishes());
  }, []);

  return (
    <div data-test="dishes">
      <DishesNavbar />
      
      {status === statusEnum.FAIL &&
        <div data-test="dishListError" className="alert alert-danger" role="alert">
          <span>Sorry, there was a problem processing your request</span>
        </div>
      }

      {status === statusEnum.PENDING &&
        <Loader />
      }

      {status === statusEnum.SUCCESS &&
        <table className="table" data-test="dishesTable">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Size</th>
              <th scope="col">Type</th>
              <th scope="col">Price</th>
            </tr>
          </thead>

          {dishes ?
            <DishList dishes={dishes} />
            :
            <tbody>
              <tr>
                <td>Sorry, no dishes found</td>
              </tr>
            </tbody>
          }
        </table>
      }
    </div>
  )
}