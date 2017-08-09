import axios from 'axios';
import { 
  PDLIST_FETCH, PDLIST_FETCH_SUCCESS, PDLIST_FETCH_FAIL, PDLIST_NO_TRIP,
  UPDATE_ORDER_STATUS, UPDATE_ORDER_STATUS_SUCCESS, UPDATE_ORDER_STATUS_FAIL,
  PD_UPDATE_WEIGHT_SIZE, PD_UPDATE_WEIGHT_SIZE_SUCCESS, PD_UPDATE_WEIGHT_SIZE_FAIL
} from './types';
import ShareVariables from '../libs/ShareVariables';

export const pdListFetch = (sessionToken) => {
  console.log('Action: pdListFetch start');
  console.log(sessionToken);
  return (dispatch) => {
    dispatch({ type: PDLIST_FETCH });
    console.log(' prepare to fetch pd list');

    axios.post('https://test.ghn.vn/api/mpds/GetUserActivePds', {
      ApiKey: 'MiNyd2FrbnFScWVzU3MjRw==',
      ApiSecretKey: 'QkQ1NjRCOTdGRDk2NzI3RUJEODk5NTcyOTFFMjk2MTE=',
      SessionToken: sessionToken,
      VersionCode: 60
    })
      .then(response => {
        const json = response.data;
        console.log('debug :');
        console.log(json);
        if (json.code === 1) {
          pdListFetchSuccess(dispatch, json.data);
        } else if (json.code === 4) {
          console.log('khong co chuyen di');
          dispatch({ type: PDLIST_NO_TRIP });
        } else {
          pdListFetchFail(dispatch);
        }
      })
      .catch(error => {
        console.log(error);
        pdListFetchFail(dispatch);
      });
  };
};

export const pdListFetchSuccess = (dispatch, data) => {
  console.log('success & prepare to update home screen');
  dispatch({ type: PDLIST_FETCH_SUCCESS, payload: data });
};

export const pdListFetchFail = (dispatch) => {
  dispatch({ type: PDLIST_FETCH_FAIL });
};

export const updateOrderStatus = ({ 
  sessionToken, 
  pdsId, 
  PickDeliverySessionDetailID,
  OrderID,
  PickDeliveryType,
  status,
  ClientHubID,
  StoringCode = '',
  NewDate = null,
  Log = ''
}) => {
  console.log(`pdAction: updateOrderStatus is called with type: ${PickDeliveryType}`);
  console.log({ sessionToken, pdsId, OrderID, PickDeliveryType, status, StoringCode, NewDate, Log });

  return ((dispatch) => {
    dispatch({ type: UPDATE_ORDER_STATUS });

    axios.post('https://test.ghn.vn/api/mpds/UpdatePickDeliverySession', {
      ApiKey: 'MiNyd2FrbnFScWVzU3MjRw==',
      ApiSecretKey: 'QkQ1NjRCOTdGRDk2NzI3RUJEODk5NTcyOTFFMjk2MTE=',
      SessionToken: sessionToken,
      VersionCode: 63,
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
        if (json.code === 1) {
          //pdListFetchSuccess(dispatch, responseJson.data);
          updateOrderStatusSuccess(dispatch, 
            { OrderID, CurrentStatus: status, PickDeliveryType, ClientHubID });
        } else {
          updateOrderStatusFail(dispatch);
        }
      })
      .catch(error => {
        console.log('update status failed');
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
	OrderID,
  PDSID,
  ServiceFee
}) => {
  return async dispatch => {
    dispatch({
      type: PD_UPDATE_WEIGHT_SIZE
    });
    const LoginInfo = new ShareVariables().getLoginInfo();
    const params = {
      ...LoginInfo,
      Length,
      Width,
      Height,
      Weight,
      ClientID,
      OrderID,
      PDSID
    };
    console.log(params);

    try {
      const response = await axios.post('https://test.ghn.vn/api/mpds/UpdateOrderWeightRDC', params);      
      const json = response.data;
      if (json.code === 1) {
        dispatch({
          type: PD_UPDATE_WEIGHT_SIZE_SUCCESS,
          payload: { 
            OrderID, 
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
        console.log(json.code);
      }
    } catch (error) {
      dispatch({ type: PD_UPDATE_WEIGHT_SIZE_FAIL });
      console.log('Update weight size failed with error =');
      console.log(error);
    }
  };
};
