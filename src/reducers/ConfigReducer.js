import { 
  CONFIG_GET_CONFIGURATION,
  CONFIG_TOGGLE_LAYOUT
 } from '../actions/types';

const nameInitialState = {
  configuration: null,
  layoutMode: false
};
export default (state = nameInitialState, action) => {
  switch (action.type) {
    
    case CONFIG_GET_CONFIGURATION:
      return { ...state, loading: true };

    case CONFIG_TOGGLE_LAYOUT:
      return {
        ...state,
        layoutMode: !state.layoutMode
      };
    default:
      return state;
  }
};
