import _ from 'lodash';
import { 
  OTHER_GET_CONFIGURATION,
  OTHER_CALCULATE_FEE_SUCCESS
 } from '../actions/types';
import Utils from '../libs/Utils';

const nameInitialState = {
  configuration: null,
  ServiceFee: null
};
export default (state = nameInitialState, action) => {
  switch (action.type) {
    
    case OTHER_GET_CONFIGURATION:
      return { ...state, loading: false };
    
    case OTHER_CALCULATE_FEE_SUCCESS: {
      return {
        ...state,
        ServiceFee: action.payload
      };
    }

    default:
      return state;
  }
};