import axios from 'axios';
import ShareVariables from '../libs/ShareVariables';

const DOMAIN = 'api.staging.inhubv2.ghn.vn';
// const DOMAIN = '10.10.0.16:4108';
const BASE_URL = `http://${DOMAIN}`;

const Share = new ShareVariables();
export const GetUserActivePds = (UserID) => {
  const UserID1 = 210030;
  const URL = `${BASE_URL}/pdaone/${UserID1}`;
  const LoginInfo = Share.getLoginInfo();
  console.log(`GetUserActivePds: ${URL}`);
  return axios.get(URL, {
      ...LoginInfo
    });
};

export const UpdatePickDeliverySession = ({ PDSID, OrderInfos }) => {
  const URL = `${BASE_URL}/pdaone/${PDSID}`;
  const LoginInfo = Share.getLoginInfo();
  const params = {
    ...LoginInfo,
    PDSID,
    OrderInfos
  };
  console.log(`UpdatePickDeliverySession url = ${URL}`);
  console.log(params);
  return axios.put(URL, params);
};

export const UpdateOrderWeightRDC = ({ 
  Length,
  Width,
  Height,
  Weight,
  ClientID,
  OrderID,
  PDSID }) => {  
  const URL = `${BASE_URL}/fee`;
  const LoginInfo = Share.getLoginInfo();
  return axios.put(URL, {
      ...LoginInfo,
      Length,
      Width,
      Height,
      Weight,
      ClientID,
      OrderID,
      PDSID
    });
};

export const Authenticate = ({ UserID, Password }) => {
  const BASE_URL1 = 'https://test.ghn.vn/api';
  const URL = `${BASE_URL1}/mpds/Authenticate`;
  const BaseInfo = Share.BaseInfo;
  return axios.post(URL, {
      ...BaseInfo,
      UserID,
      Password
    });
};

export const GetUserPerformance = (UserID) => {
  const URL = `${BASE_URL}/mpds/GetUserPerformance`;
  const LoginInfo = Share.getLoginInfo();
  return axios.post(URL, {
      ...LoginInfo,
      UserID
    });
};

export const GetConfiguration = (configKey = null) => {
  const URL = `${BASE_URL}/pdaconfig`;
  //const LoginInfo = Share.getLoginInfo();
  return axios.get(URL, { configKey });
};
  
export const CalculateServiceFee = (params) => {
  console.log(params);
  const URL = `${BASE_URL}/fee`;
  return axios.post(URL, params);
};
