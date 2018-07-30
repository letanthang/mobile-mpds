export const DeliveryErrors = {
  'GHN-SC77A9': 'KHÔNG LIÊN LẠC ĐƯỢC',
  'GHN-SC8KA0': 'THUÊ BAO KHÔNG LIÊN LẠC ĐƯỢC',
  'GHN-SC8KA1': 'KHÁCH KHÔNG NGHE MÁY',
  'GHN-SC181B': 'KHÁCH HẸN LẠI NGÀY GIAO HÀNG',
  'GHN-SC9649': 'KHÁCH ĐỔI ĐỊA CHỈ GIAO HÀNG',
  'GHN-SCA4EB': 'NGƯỜI GỬI THAY ĐỔI THÔNG TIN GIAO HÀNG',
  'GHN-SCB45E': 'NHÂN VIÊN HẸN LẠI NGÀY GIAO',
  'GHN-SCB78E': 'KHÁCH HẸN GIAO LẠI TRONG NGÀY',
};

export const PickErrors = {
  'GHN-PC952A': 'NGƯỜI GỬI HẸN LẠI NGÀY LẤY',
  'GHN-PC8D3E': 'KHÔNG LIÊN LẠC ĐƯỢC NGƯỜI GỬI',
  'GHN-PC8KA0': 'THUÊ BAO KHÔNG LIÊN LẠC ĐƯỢC',
  'GHN-PC8KA1': 'KHÁCH KHÔNG NGHE MÁY',
  'GHN-PCA940': 'KHÔNG LẤY HÀNG KỊP',
  'GHN-PCC9T0': 'KHÁCH HÀNG MUỐN GỬI HÀNG TẠI ĐIỂM',
  'GHN-SCHO11': 'BÀN GIAO TÀI XẾ KHÁC',
};

export const ReturnErrors = {
  'GHN-RC8KA0': 'THUÊ BAO KHÔNG LIÊN LẠC ĐƯỢC',
  'GHN-RC8KA1': 'KHÁCH KHÔNG NGHE MÁY',
  // 'GHN-RC4A54': 'KHÔNG LIÊN LẠC ĐƯỢC VỚI KHÁCH',
  // 'GHN-RC8C8E': 'KHÁCH TỪ CHỐI NHẬN HÀNG',
  'GHN-RC8C8E': 'NGƯỜI GỞI KHÔNG NHẬN HÀNG TRẢ',
  'R_ANOTHERDATE': 'NGƯỜI GỬI HẸN LẠI NGÀY TRẢ',
  'LM_LATE': 'NHÂN VIÊN TRẢ KHÔNG KỊP',
  // 'GHN-RCB9DA': 'SAI THÔNG TIN NGƯỜI NHẬN HÀNG',
  // 'GHN-RC9E91': 'GIAO LẠI NHIỀU LẦN KHÔNG THÀNH CÔNG',
  // 'GHN-RCBC9F': 'SAI LỆCH TIỀN THU HỘ (COD)',
  // 'GHN-RC43CC': 'HÀNG HÓA KHÔNG ĐÚNG THÔNG TIN BÁN HÀNG',
  // 'GHN-RCA4E6': 'NGƯỜI GỬI ĐƯA NHẦM/KHÔNG ĐỦ HÀNG',
  // 'GHN-RC80BC': 'HÀNG HÓA BỊ HƯ HỎNG',
  // 'GHN-RCF3DE': 'KHÁCH CÓ YÊU CẦU VƯỢT KHẢ NĂNG ĐÁP ỨNG',
  // 'GHN-RC5B4F': 'NGƯỜI GỬI YÊU CẦU TRẢ HÀNG',
};


        
        
     
        

export const HistoryActions = {
  CREATE_TRIP: 'tạo chuyến đi',
  ADD_TO_TRIP: 'thêm đơn vào chuyến đi',
  REMOVE_FROM_TRIP: 'xóa đơn ra khỏi chuyến đi',
  UPDATE_TRIP: 'cập nhật',
  RECEIVE_AT_WAREHOUSE: 'nhân hàng ở kho',
  INPUT: 'bắn kiểm',
  OUTPUT: 'xuất kho',
  CANCEL_TRIP: 'hủy chuyến đi',
  ASSIGN_DRIVER: 'thay đổi thông tin tài xế',
  START_TRIP: 'bắt đầu chuyến đi',
  COMPLETE_TRIP: 'hoàn thành chuyến đi',
  COLLECT_MONEY: 'thu tiền',
  UPDATE_ORDER_ADDRESS: 'cập nhật địa chỉ đơn hàng',
  UPDATE_DIMENSION: 'cập nhật kích thước đơn hàng',
  SELECT_PARTNER: 'chọn đối tác',
  SELECT_SERVICE: 'chọn dịch vụ',
};

export const HistoryStatus = {
  'PICK_FAIL': 'lấy thất bại',
  'PICK_SUCCESS': 'lấy thành công',
  'RETURN_FAIL': 'trả thất bại',
  'RETURN_SUCCESS': 'trả thành công',
  'DELIVER_FAIL': 'giao thất bại',
  'DELIVER_SUCCESS': 'giao thành công',
};


export const ActionLogCode = {
  TAB_PICK: 10001,
  TAB_DELIVER: 10002,
  TAB_RETURN: 10003,
  
  ICON_PICK: 10004,
  ICON_DELIVER: 10005,
  ICON_RETURN: 10006,
  ICON_ALL: 10007,
  ICON_ME: 10008,
  PULL_TO_UPDATE: 10009,

  MENU_OPEN: 10011,
  MENU_CALL_SUP: 10012,
  MENU_UPDATE: 10013,
  MENU_INFO: 10015,
  MENU_SETTINGS: 10016,
  MENU_LOGOUT: 10017,
  MENU_CLOSE: 10018,
  TAP_ADD_ONE_ORDER: 10019,
  ADD_ONE_ORDER: 10020,
  SHOP_PICK_TRUE: 11000,
  SHOP_PICK_FALSE: 11001,
  ORDER_PICK_TRUE: 11002,
  ORDER_PICK_FALSE: 11003,
  SHOP_PICK_ALL_TRUE: 11004,
  SHOP_PICK_ALL_FALSE: 11005,
  PICK_REASON_REDATE: 11006,
  PICK_REASON_FAIL_CONTACT: 11007,
  PICK_REASON_FAIL_CALL: 11008,
  PICK_REASON_NOT_PICK_CALL: 11009,
  PICK_REASON_ME_LATE: 11010,
  PICK_REASON_SEND_STATION: 11011,
  PICK_REASON_HAND_OVER: 11012,

  ORDER_DELIVER_TRUE: 12000,
  ORDER_DELIVER_FALSE: 12001,
  DELIVER_REASON_FAIL_CONTACT: 12002,
  DELIVER_REASON_NOT_PICK_CALL: 12004,
  DELIVER_REASON_REDATE: 12005,

};

export const ErrorToLogCode = {
  'GHN-PC952A': ActionLogCode.PICK_REASON_REDATE,
  'GHN-PC8D3E': ActionLogCode.PICK_REASON_FAIL_CONTACT,
  'GHN-PC8KA0': ActionLogCode.PICK_REASON_FAIL_CALL,
  'GHN-PC8KA1': ActionLogCode.PICK_REASON_NOT_PICK_CALL,
  'GHN-PCA940': ActionLogCode.PICK_REASON_ME_LATE,
  'GHN-PCC9T0': ActionLogCode.PICK_REASON_SEND_STATION,
  'GHN-SCHO11': ActionLogCode.PICK_REASON_HAND_OVER,

  'GHN-SC77A9': ActionLogCode.DELIVER_REASON_FAIL_CONTACT,
  'GHN-SC8KA0': ActionLogCode.DELIVER_REASON_FAIL_CONTACT,
  'GHN-SC8KA1': ActionLogCode.DELIVER_REASON_NOT_PICK_CALL,
  'GHN-SC181B': ActionLogCode.DELIVER_REASON_REDATE,
  'GHN-SC9649': ActionLogCode.DELIVER_REASON_FAIL_CONTACT,
  'GHN-SCA4EB': ActionLogCode.DELIVER_REASON_FAIL_CONTACT,
  'GHN-SCB45E': ActionLogCode.DELIVER_REASON_FAIL_CONTACT,
  'GHN-SCB78E': ActionLogCode.DELIVER_REASON_FAIL_CONTACT,

};

export const ScreenCode = {
  Home: 'A000',
  TripList: 'A010',
  Login: 2000,
  Drawer: 2000,
  DeliveryList: 'A020',
  DeliveryGroupCreate: 2000,
  PickGroupDetail: 'A040',
  ReturnGroupDetail: 'A040',
  PickOrder: 'A041',
  POUpdateWeightSize: 2000,
  ReturnOrder: 'A041',
  DeliveryOrder: 'A041',
  ReturnList: 'A030',
  OrderList: 2000,
  AddOrder: 2000,
  PickConfirm: 2000,
  Signature: 2000,
  GroupPick: 2000,
  BluetoothExample: 2000,
  OrderLabel: 2000,
  OrderLabelOld: 2000,
  OrderLabelNew: 2000,
  OrderLabels: 2000,
};

export const ScreenGroup = {
  A000: 'MAIN_PAGE',
  A001: 'PRIVATE',
  A002: 'PRIVATE',
  A003: 'PRIVATE',
  A004: 'PICKUP',
  A005: 'ALL_ORDER',
  A006: 'PRIVATE',
  A010: 'PICKUP',
  A011: 'PICKUP',
  A012: 'PICKUP',
  A020: 'DELIVERY',
  A021: 'DELIVERY',
  A030: 'RETURN',
  A031: 'RETURN',
  A032: 'RETURN',
  A040: 'DETAIL_SHOP',
  A041: 'DETAIL_ORDER',
  A050: 'CREATE_GROUP',
  A060: 'SEARCH',
  A061: 'SEARCH',
  A062: 'SEARCH',
};
