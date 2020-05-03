import { combineReducers } from "redux";
import { OPEN_STATUS } from '../actions/status';

const status = (state = [], action: any) => {
  switch (action.type) {
    case OPEN_STATUS:
      return {
        ...state,
        ...action.status
      }
    default:
      return state;
  }
};

export default combineReducers({ status });

