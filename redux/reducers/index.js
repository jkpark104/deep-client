import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import users from './userReducer';

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return combineReducers({
    users,
  })(state, action);
};

export default rootReducer;
