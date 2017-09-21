import { 
  PDLIST_FETCH, PDLIST_FETCH_SUCCESS, PDLIST_FETCH_FAIL, PDLIST_NO_TRIP,
  UPDATE_ORDER_STATUS, UPDATE_ORDER_STATUS_SUCCESS, UPDATE_ORDER_STATUS_FAIL,
  PD_UPDATE_WEIGHT_SIZE, PD_UPDATE_WEIGHT_SIZE_SUCCESS, PD_UPDATE_WEIGHT_SIZE_FAIL,
  PD_UPDATE_GROUP, PD_UPDATE_GROUP_FAIL, PD_UPDATE_GROUP_SUCCESS
} from './types';
import * as API from '../apis/MPDS';
import LocalGroup from '../libs/LocalGroup';

export const pdListFetch = () => {
  console.log('Action: pdListFetch start');
  return (dispatch, getState) => {
    dispatch({ type: PDLIST_FETCH });
    console.log(' prepare to fetch pd list');
    const { userID } = getState().auth;
    // console.log(' get state of authReducer from pdAction');
    // console.log(user);
    API.GetUserActivePds(userID)
      .then(response => {
        const json = response;
        if (json.status === 'OK') {
          pdListFetchSuccess(dispatch, json.data[0]);
        } else if (json.status === 'ERROR' && json.message === 'Không tìm thấy CĐ hoặc CĐ đã bị xóa.') {
          console.log('khong co chuyen di, json response=');
          console.log(json);
          dispatch({ type: PDLIST_NO_TRIP });
        } else {
          console.log('pdListFetch failed with response json = ');
          console.log(json);
          pdListFetchFail(dispatch, json.message);
        }
      })
      .catch(error => {
        console.log('pdListFetch failed with error = ');
        console.log(error);
        pdListFetchFail(dispatch, error.message);
      });
  };
};

export const pdListNoTrip = () => {
  return { type: PDLIST_NO_TRIP };
};

export const pdListFetchSuccess = (dispatch, data) => {
  console.log('success & prepare to update home screen');
  const payload = { pds: data, orderGroup: LocalGroup.getOrderGroups() };
  dispatch({ type: PDLIST_FETCH_SUCCESS, payload });
    // .then(() => console.log('pdlist fetch success done!'));
};

export const pdListFetchFail = (dispatch, error) => {
  dispatch({ type: PDLIST_FETCH_FAIL, payload: error });
};

export const updateOrderStatus = ({ sessionToken, pdsId, PickDeliverySessionDetailID, OrderID, PickDeliveryType, status, ClientHubID, StoringCode = '', NewDate = null, Log = '' }) => {
  //console.log(`pdAction: updateOrderStatus is called with type: ${PickDeliveryType}`);
  console.log({ 
    sessionToken, 
    pdsId, 
    OrderID, 
    PickDeliveryType, 
    status, 
    StoringCode, 
    NewDate, 
    Log 
  });

  return ((dispatch) => {
    dispatch({ type: UPDATE_ORDER_STATUS });
    API.UpdatePickDeliverySession({
      PDSID: pdsId,
      OrderInfos: [  
          {  
            PDSDetailID: PickDeliverySessionDetailID,
            OrderID,
            PDSType: PickDeliveryType,
            NextStatus: status,
            ClientHubID,
            StoringCode,
            NewDate,
            Log
          }
      ]
    })
      .then(response => {
        const json = response.data;
        console.log(json);
        if (json.status === 'OK') {
          updateOrderStatusSuccess(dispatch, 
            { OrderID, CurrentStatus: status, PickDeliveryType, ClientHubID });
        } else {
          console.log('UpdateOrderStatus failed with response json =');
          console.log(json);
          updateOrderStatusFail(dispatch);
        }
      })
      .catch(error => {
        console.log('update status failed with error=');
        console.log(error);
        updateOrderStatusFail(dispatch);
      });
  });
};

const updateOrderStatusSuccess = (dispatch, data) => {
  dispatch({
    type: UPDATE_ORDER_STATUS_SUCCESS,
    payload: data
  });
};

const updateOrderStatusFail = (dispatch) => {
  dispatch({
    type: UPDATE_ORDER_STATUS_FAIL
  });
};

export const updateWeightSize = ({
  Length, 
  Width,
  Height,
  Weight,
  ClientID,
  ClientHubID,
  OrderID,
  PDSID,
  ServiceFee
}) => {
  return async dispatch => {
    dispatch({
      type: PD_UPDATE_WEIGHT_SIZE
    });
    
    const params = {
      Length,
      Width,
      Height,
      Weight,
      ClientID,
      OrderID,
      PDSID
    };
    try {
      const response = await API.UpdateOrderWeightRDC(params);      
      const json = response.data;
      if (json.status === 'OK') {
        dispatch({
          type: PD_UPDATE_WEIGHT_SIZE_SUCCESS,
          payload: { 
            OrderID,
            ClientHubID, 
            ServiceCost: ServiceFee,
            Length,
            Width,
            Height,
            Weight
          }
        });
      } else {
        dispatch({ type: PD_UPDATE_WEIGHT_SIZE_FAIL });
        console.log('Update weight size failed with response json =');
        console.log(json);
      }
    } catch (error) {
      dispatch({ type: PD_UPDATE_WEIGHT_SIZE_FAIL });
      console.log('Update weight size failed with error =');
      console.log(error);
    }
  };
};

export const updateOrderGroup = (updateList) => {
  return {
    type: PD_UPDATE_GROUP,
    payload: updateList
  };
};
