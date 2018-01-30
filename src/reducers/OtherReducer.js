import _ from 'lodash';
import { 
  OTHER_CALCULATE_FEE_SUCCESS,
  OTHER_GET_USER_PERFORMANCE_SUCCESS,
  OTHER_SET_LOADED
 } from '../actions/types';
import Utils from '../libs/Utils';

const nameInitialState = {
  ServiceFee: null,
  stats: null,
  yesterday: null,
  week: null,
  month: null,
  quarter: null,
  lastWeek: null,
  lastMonth: null,
  lastQuarter: null,
  loaded: false
};
export default (state = nameInitialState, action) => {
  switch (action.type) {
    case OTHER_CALCULATE_FEE_SUCCESS: {
      return {
        ...state,
        ServiceFee: action.payload.ServiceFee
      };
    }
    case OTHER_GET_USER_PERFORMANCE_SUCCESS: {
      const stat = action.payload.stat;
      const statType = action.payload.statType;

      const result = {};
      result[statType] = stat;
      return {
        ...state,
        ...result
      };
    }

    case OTHER_SET_LOADED:
      return {
        ...state,
        loaded: true
      };
    default:
      return state;
  }
};
