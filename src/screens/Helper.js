import { Alert } from 'react-native';
import { ActionSheet } from 'native-base';
import moment from 'moment';
import { DeliveryErrors } from '../components/Constant';
import Utils from '../libs/Utils';

const BUTTONS = Object.values(DeliveryErrors);
BUTTONS.push('Cancel');
export const CODES = Object.keys(DeliveryErrors);
const DESTRUCTIVE_INDEX = -1;
const CHANGE_DATE_INDEX = BUTTONS.length - 3;
const CUSTOMER_CHANGE_DATE_INDEX = 3;
const CANCEL_INDEX = BUTTONS.length - 1;


function alertMissOfCall(phoneNumber) {
  const title = 'Không đủ số cuộc gọi.';
  const message = 'Bạn không thực hiện đủ số cuộc gọi cho khách hàng. Gọi bây giờ?';
  Alert.alert(
    title,
    message,
    [
      { text: 'Gọi', onPress: () => Utils.phoneCall(phoneNumber, true) },
      { text: 'Huỷ', onPress: () => console.log('Huy pressed'), style: 'cancel' }
    ],
    { cancelable: false }
  );
}

export function getDeliveryFailOrderInfo(order, buttonIndex, newDate = null) {
  const { orderCode, type } = order;
  const noteId = CODES[buttonIndex];
  const note = BUTTONS[buttonIndex];
  const success = false;
  const willSucceeded = false;
  const nextDate = (newDate == null || newDate == 0) ? null : moment(newDate).format();
  return { orderCode, nextDate, newDate, noteId, note, type, success, willSucceeded };
}

export function getDeliveryDoneOrderInfo(order, newDate = null) {
  const { orderCode, type } = order;
  const noteId = 'POD'; 
  const note = '';
  const success = true;
  const willSucceeded = true;
  const nextDate = (newDate == null || newDate == 0) ? null : moment(newDate).format();
  return { orderCode, nextDate, newDate, noteId, note, type, success, willSucceeded };
}

export function updateOrderToFailWithReason2(phone, configuration, orderCode = null) {
  const senderPhone = phone;
  const title = orderCode ? `Chọn lý do lỗi cho đơn ${orderCode}` : `Chọn lý do lỗi cho tất cả các đơn này`;
  return new Promise((resolve, reject) => {
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        title
      },
      buttonIndex => {
        if (buttonIndex == CANCEL_INDEX || buttonIndex == DESTRUCTIVE_INDEX) {
          return resolve({ error: 'cancel', buttonIndex });
        } else if (buttonIndex == CHANGE_DATE_INDEX || buttonIndex == CUSTOMER_CHANGE_DATE_INDEX) {
          return resolve({ error: 'chooseDate', buttonIndex });
        } else if (buttonIndex == 0 || buttonIndex == 1) {
          //cannot contact
          Utils.validateCallCannotContact(phone, configuration)
          .then((result) => {
            if (result) {
              return resolve({ error: null, buttonIndex });
            } else {
              alertMissOfCall(phone);
              return resolve({ error: 'moreCall', buttonIndex });
            }
          });
        } else if (buttonIndex == 2) {
          //cannot contact
          Utils.validateCallNotHangUp(phone, configuration)
            .then((result) => {
              if (result) {
                return resolve({ error: null, buttonIndex });
              } else {
                alertMissOfCall(phone);
                return resolve({ error: 'moreCall', buttonIndex });
              }
            });
        } else {
          return resolve({ error: null, buttonIndex });
        }
      }
    );
  });
}
