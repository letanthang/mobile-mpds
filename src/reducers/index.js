// import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import pdReducer from './pdReducer';
import OtherReducer from './OtherReducer';
import PickGroupReducer from './PickGroupReducer';
import ReturnGroupReducer from './ReturnGroupReducer';
// import OrderAddReducer from './OrderAddReducer';
import ConfigReducer from './ConfigReducer';

const appReducer = {
  auth: AuthReducer,
  pd: pdReducer,
  other: OtherReducer,
  pickGroup: PickGroupReducer,
  returnGroup: ReturnGroupReducer,
  config: ConfigReducer
};

// const rootReducer = (state, action) => {
//   if (action.type === 'LOGOUT') {
//     state = undefined;
//   }
//   return appReducer(state, action);
// }; 

export default appReducer;
