import _ from 'lodash';
import { 
  PDLIST_FETCH, PDLIST_FETCH_SUCCESS, PDLIST_FETCH_FAIL,
  UPDATE_ORDER_STATUS, UPDATE_ORDER_STATUS_SUCCESS, UPDATE_ORDER_STATUS_FAIL
 } from '../actions/types';
import Utils from '../libs/Utils';

const nameInitialState = {
  pds: null,
  pdsId: null,
  currentDeliveryOrder: null,
  pickTotal: 0,
  pickComplete: 0,
  deliveryTotal: 0,
  deliveryComplete: 0,
  returnTotal: 0,
  returnComplete: 0,
  loading: false,
  error: ''
};
export default (state = nameInitialState, action) => {
  switch (action.type) {
    case PDLIST_FETCH:
      console.log('turn on spinner');
      return { ...state, loading: true };
    case PDLIST_FETCH_SUCCESS: {
      console.log('update home screen with numbers');
      // pick
      const pickGroupList = action.payload.PickReturnItems.filter(p => p.PickDeliveryType === 1);
      const pickTotal = pickGroupList.length;
      const pickComplete = pickTotal === 0 ? 0 : pickGroupList.filter(pg => {
        let isComplete = true;
        pg.PickReturnSOs.forEach(o => {
          isComplete = isComplete && Utils.checkPickComplete(o.CurrentStatus);
        });
        return isComplete;
      }).length;
      console.log(`fetch succes with pickComplete = ${pickComplete}`);

      // delivery
      const deliveryTotal = action.payload.DeliveryItems.length;
      const deliveryComplete = deliveryTotal === 0 ? 0 : action.payload.DeliveryItems.filter(o => Utils.checkDeliveryComplete(o.CurrentStatus)).length;

      // return
      const returnGroupList = action.payload.PickReturnItems.filter(p => p.PickDeliveryType === 3);
      const returnTotal = returnGroupList.length;
      const returnComplete = returnTotal === 0 ? 0 : returnGroupList.filter(pg => {
        let isComplete = true;
        pg.PickReturnSOs.forEach(o => {
          isComplete = isComplete && Utils.checkReturnComplete(o.CurrentStatus);
        });
        return isComplete;
      }).length;

      return { ...state, 
        pds: action.payload,
        pdsId: action.payload.PickDeliverySessionID, 
        loading: false,
        pickTotal,
        pickComplete,
        returnTotal,
        returnComplete,
        deliveryTotal,
        deliveryComplete
      };
    }
    case PDLIST_FETCH_FAIL:
      return { ...state, loading: false };
    
    case UPDATE_ORDER_STATUS: {
      console.log('pdReducer: UPDATE_ORDER_STATUS !!!!!!turn on spinner!!!!!');
      return {
        ...state,
        loading: true
      };
    }

    case UPDATE_ORDER_STATUS_FAIL: {
      console.log('pdReducer: UPDATE_ORDER_STATUS_FAIL');
      return {
        ...state,
        loading: false,
        error: 'update status fail'
      };
    }

    case UPDATE_ORDER_STATUS_SUCCESS: {
      const { OrderID, PickDeliveryType, CurrentStatus, ClientHubID } = action.payload;
      let order = {};
      const pds = _.cloneDeep(state.pds);
      if (PickDeliveryType === 2) {
        order = pds.DeliveryItems.find(o => o.OrderID === OrderID);
        //order.CurrentStatus = 'WaitingToFinish';
        order.CurrentStatus = CurrentStatus;
      }
      if (PickDeliveryType === 1 || PickDeliveryType === 3) {
        const pickGroup = pds.PickReturnItems.find(pg => pg.ClientHubID === ClientHubID 
          && pg.PickDeliveryType === PickDeliveryType);
        console.log(pickGroup);
        order = pickGroup.PickReturnSOs.find(o => o.OrderID === OrderID);
        order.CurrentStatus = CurrentStatus;
      }
      console.log('pdReducer: UPDATE_ORDER_STATUS_SUCCESS');
      console.log(state.pds.DeliveryItems);


      //update statistic number
      // pick
      const pickGroupList = pds.PickReturnItems.filter(p => p.PickDeliveryType === 1);
      const pickTotal = pickGroupList.length;
      const pickComplete = pickTotal === 0 ? 0 : pickGroupList.filter(pg => {
        let isComplete = true;
        pg.PickReturnSOs.forEach(o => {
          isComplete = isComplete && Utils.checkPickComplete(o.CurrentStatus);
        });
        return isComplete;
      }).length;
      console.log(`fetch succes with pickComplete = ${pickComplete}`);

      // delivery
      const deliveryTotal = pds.DeliveryItems.length;
      const deliveryComplete = deliveryTotal === 0 ? 0 : pds.DeliveryItems.filter(o => Utils.checkDeliveryComplete(o.CurrentStatus)).length;

      // return
      const returnGroupList = pds.PickReturnItems.filter(p => p.PickDeliveryType === 3);
      const returnTotal = returnGroupList.length;
      const returnComplete = returnTotal === 0 ? 0 : returnGroupList.filter(pg => {
        let isComplete = true;
        pg.PickReturnSOs.forEach(o => {
          isComplete = isComplete && Utils.checkReturnComplete(o.CurrentStatus);
        });
        return isComplete;
      }).length;

      return {
        ...state,
        loading: false,
        error: '',
        pds,
        deliveryTotal,
        deliveryComplete,
        pickTotal,
        pickComplete,
        returnTotal,
        returnComplete
      };
    }

    default:
      return state;
  }
};
