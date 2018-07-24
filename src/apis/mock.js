export const infoResponse = {
    "status": "OK",
    "data": [
      {
        "code": "184122056HC7B",
        "status": "NEW",
        "hubId": "1220",
        "createdById": "1006",
        "createdByName": "Nguyễn Trịnh Khánh Tường",
        "lastUpdatedById": "1006",
        "lastUpdatedByName": "Nguyễn Trịnh Khánh Tường",
        "amountCollected": 0,
        "amountCollect": 0,
        "date": "2018-04-20T07:48:00.653Z",
        "id": "5ad99b30e893788f8f000003",
        "createdTime": "2018-04-20T07:48:00.653Z",
        "lastUpdatedTime": "2018-04-20T07:48:00.653Z"
      }
    ]
  };
  
export const orderDetailResponse = {
"status": "OK",
"data": [
    {
    "tripCode": "1841416KQPRP2",
    "code": "321ABC123A",
    "type": "PICK",
    "orderDetail": {
        "externalCode": "",
        "driverId": "210030",
        "driverName": "Lê Tấn Thắng",
        "driverPhone": "0933932173",
        "moneyCollect": 0,
        "length": 1,
        "width": 1,
        "height": 1,
        "weight": 2,
        "fromDistrictId": "1488",
        "fromDistrictCode": "1A03",
        "fromDistrictName": "Quận 10",
        "toDistrictId": "1488",
        "toDistrictCode": "1A03",
        "toDistrictName": "Quận 10",
        "senderHubId": "2007960",
        "senderId": "1539",
        "senderName": "NganHTKN",
        "senderPhone": "0916863003",
        "senderAddress": "75 Tô Hiến Thành ,quận 10, Hồ Chí Minh",
        "receiverId": "",
        "receiverName": "Hồ Thị Kim Ngân",
        "receiverPhone": "01283377234",
        "receiverAddress": "address giao test",
        "clientExtraNote": "Mã SP: 9057382729348000914, Tên SP: Sách Ngược Đời Xuôi, Số lượng: 2 Quyển; ",
        "clientRequiredNote": ""
    }
    }
]
};


export const ordersResponse = {
"status": "OK",
"data": [
    {
    "code": "GHN-TEST-102",
    "tripCode": "18414164VNDP8",
    "type": "PICK",
    "status": "PICKING",
    "isUpdatedStatus": false,
    "isCancel": false,
    "isScanImport": false,
    "isOutstock": true,
    "clientId": "7071",
    "clientAddressRemoveAccent": "70 Dia chi lay test",
    "clientPhone": "01674951343",
    "isCollected": true,
    "orderId": "270327102",
    "date": "2018-04-22T01:50:58.248Z",
    "id": "5adbea82e89962bc3a00000c",
    "createdTime": "2018-04-22T01:51:02.859Z",
    "lastUpdatedTime": "2018-04-22T01:51:02.859Z",
    extraInfo: {
        moneyCollect: 20000,
        width: 20,
        length: 30,
        height: 40,
        weight: 100,
        receiverName: 'Le Nghia',
        receiverPhone: '0908345008',
        receiverAddress: '30 Địa chỉ giao test',
        senderHubId: '12',
        senderName: 'Shop Thien Thai',
        senderPhone: '0969696969',
        senderAddress: '70 Địa chỉ lấy test',
        clientName: 'Shopee',
        pickWarehouseId: 23, 
        deliverWarehouseId: 23,
        serviceName: '1h'
    }
    },
    {
    "code": "GHN-TEST-100",
    "tripCode": "18414164VNDP8",
    "type": "PICK",
    "status": "PICKED",
    "isUpdatedStatus": false,
    "isCancel": false,
    "isScanImport": false,
    "isOutstock": true,
    "clientId": "7071",
    "clientAddressRemoveAccent": "70 Dia chi lay test",
    "clientPhone": "01674951343",
    "isCollected": true,
    "orderId": "270327100",
    "date": "2018-04-22T01:50:58.248Z",
    "id": "5adbea82e89962bc3a00000a",
    "createdTime": "2018-04-22T01:51:02.852Z",
    "lastUpdatedTime": "2018-04-22T01:51:02.852Z",
    extraInfo: {
        moneyCollect: 30000,
        width: 25,
        length: 35,
        height: 45,
        weight: 200,
        receiverName: 'Le Nghia',
        receiverPhone: '0933345123',
        receiverAddress: '40 Địa chỉ giao test',
        senderHubId: '12',
        senderName: 'Shop Thien Thai',
        senderPhone: '0969696969',
        senderAddress: '70 Địa chỉ lấy test',
        clientName: 'Shopee',
        pickWarehouseId: 23, 
        deliverWarehouseId: 23,
        serviceName: '1h'
    }
    },
    {
    "code": "GHN-TEST-101",
    "tripCode": "18414164VNDP8",
    "type": "DELIVER",
    "status": "DELIVERING",
    "isUpdatedStatus": false,
    "isCancel": false,
    "isScanImport": false,
    "isOutstock": true,
    "clientId": "6000",
    "clientAddressRemoveAccent": "70 Dia chi lay test",
    "clientPhone": "01674951343",
    "isCollected": true,
    "orderId": "270327101",
    "date": "2018-04-22T01:50:58.248Z",
    "id": "5adbea82e89962bc3a000008",
    "createdTime": "2018-04-22T01:51:02.845Z",
    "lastUpdatedTime": "2018-04-22T01:51:02.845Z",
    extraInfo: {
        moneyCollect: 40000,
        receiverName: 'Le Nghia',
        receiverPhone: '0933345123',
        receiverAddress: '40 Địa chỉ giao test',
        senderHubId: '12',
        senderName: 'Shop Thien Thai',
        senderPhone: '0969696969',
        senderAddress: '70 Địa chỉ lấy test',
        serviceName: '1h'
    }
    },
],
total: 3,
"message": ""
}

export const addOrdersResponse = {
"status": "OK",
"data": [
]
};


export const configResponse = {
    "status": "OK",
    "data": [
        {
            "timeExpire": 86400000,
            "alpha": 0.2,
            "maxWeight": 500000,
            "minWeight": 1,
            "maxSize": 200,
            "minSize": 1,
            "initLoad": 0,
            "initLoadTrial": 1,
            "idsTrial": 0,
            "interval": 10000,
            "fastestInterval": 5000,
            "pushDataInterval": 300000,
            "priority": 1,
            "smallestDisplacement": 30,
            "numberOfRecord": 20,
            "endTimeTracking": 1045,
            "startTimeTracking": 500,
            "code": 0,
            // "minDurationCallLogNoAnswer": "20000",
            // "minDurationCallLogUnconnected": "5000",
            // "repeatCallNoAnswer": "3",
            // "repeatCallUnconnected": "3"
        }
    ],
    "message": ""
}

export const loginResponse = {
    "status": "OK",
    "message": "Successfull",
    "data": {
        "session": "40cf13dc238677d0c3632a5c30276c61",
        "expired": 1506671613820,
        "userInfo": {
            "fullname": "Lê Tấn Thắng",
            "email": "thanglt@ghn.vn",
            "phone": "0933932173",
            "ssoId": "210030",
            "roles": [
                {
                    "name": "PDA",
                    "description": "Quyền cho PDA",
                    "permissionList": [
                        "PDAConfig_EDIT",
                        "PDAConfig_VIEW",
                        "PDA_EDIT",
                        "PDA_VIEW"
                    ],
                    "orderNumber": 3,
                    "id": "59c21fa4bae4ba6f3d33458e",
                    "createdTime": "Sep 20, 2017 2:58:28 PM",
                    "lastUpdatedTime": "Sep 20, 2017 4:47:05 PM"
                }
            ],
            "hubIds": [
                "SGN"
            ],
            "portIds": [
                "5882d8830c28171270a6ebd6",
                "5882e1060c28171270a6ebe6",
                "5882e1550c28171270a6ebe8",
                "5882e28f0c28171270a6ebea",
                "58954a3f0c2817118cd21621",
                "58954a5b0c2817118cd21622",
                "58954a740c2817118cd21623",
                "58954a8d0c2817118cd21624",
                "58954ab50c2817118cd21625",
                "58954ac70c2817118cd21626",
                "58954ae30c2817118cd21627",
                "58954afd0c2817118cd21628",
                "58954b130c2817118cd21629",
                "58954b390c2817118cd2162a",
                "5950c47a0c28171d000cfcee"
            ],
            "secret": "ztSYIyaP59S0tA18Sd4xfPr00vds3Tq1Rplwoqi5ia3pjD3X0tO",
            "status": "ACTIVE",
            "isSupperUser": false,
            "userType": 1
        }
    }
}

export const performanceResponse = {
    "status": "OK",
    "data": [
        {
            "driverId": "210030",
            "performanceDate": "Oct 12, 2017 12:00:00 AM",
            "pickSucceed": 0,
            "pickTotal": 1,
            "deliverSucceed": 0,
            "deliverTotal": 0,
            "returnSucceed": 0,
            "returnTotal": 0,
            "from": 0,
            "to": 0,
            "id": "59e5808fbae4ba33ce3c4e7c",
            "createdTime": "Oct 17, 2017 11:01:19 AM",
            "lastUpdatedTime": "Oct 17, 2017 11:01:19 AM"
        },
        {
            "driverId": "210030",
            "performanceDate": "Oct 16, 2017 12:00:00 AM",
            "pickSucceed": 6,
            "pickTotal": 10,
            "deliverSucceed": 1,
            "deliverTotal": 1,
            "returnSucceed": 0,
            "returnTotal": 0,
            "from": 0,
            "to": 0,
            "id": "59e5808fbae4ba33ce3c4e7d",
            "createdTime": "Oct 17, 2017 11:01:19 AM",
            "lastUpdatedTime": "Oct 17, 2017 11:01:19 AM"
        },
        {
            "driverId": "210030",
            "performanceDate": "Oct 17, 2017 12:00:00 AM",
            "pickSucceed": 0,
            "pickTotal": 2,
            "deliverSucceed": 0,
            "deliverTotal": 0,
            "returnSucceed": 0,
            "returnTotal": 0,
            "from": 0,
            "to": 0,
            "id": "59e6c288bae4ba32d1ef263b",
            "createdTime": "Oct 18, 2017 9:55:04 AM",
            "lastUpdatedTime": "Oct 18, 2017 9:55:04 AM"
        }
    ],
    "total": 3,
    "message": "Query performance successfully."
}

// export const updateResponse = {
//   "status": "OK",
//   "data": {
//     failed_orders: []
//   },
//   "message": "Successfull"
// }

export const updateStatusResponse = {
"status": "OK",
"data": [
    { 
    "listSuccess": [],
    "listFail": [
        {
            "code": "3DKX99HK",
            "type": "DELIVER",
            "message": "Order is not valid"
        }
    ]
    }
],
"message": "Successfull"
}

export const orderHistoryResponse = {
    "status":"OK",
    "data":[
        {
        "code":"3C5DFSAK","actionCode":"ADD_TO_PDS","userId":"210030","userName":"Lê Tấn Thắng",
        historyType: 'CREATE_TRIP', 
        createdById: 1006,
        createdByName: 'Nguyen Khanh Tuong',
        "date":"2018-03-16T04:39:42.330Z","id":"5aab4a8ee81ce73bda00004f","createdTime":"2018-03-16T04:39:42.331Z","lastUpdatedTime":"2018-03-16T04:39:42.331Z"
        },
        {
        "code":"3C5DFSAK","actionCode":"UPDATE_STATUS","userId":"206353","userName":"Nguyễn Trương Quý",
        historyType: 'ADD_TO_TRIP', 
        createdById: 210030, 
        createdByName: 'Le Tan Thang',
        "date":"2018-03-23T04:20:11.608Z","id":"5ab4807be8347c2a1c000004","createdTime":"2018-03-23T04:20:11.610Z","lastUpdatedTime":"2018-03-23T04:20:11.610Z"
        }
    ],
    "message":""
};

export const newOrdersResponse = {
    "status": "OK",
    "data": [
        {
            "hubId": "1323",
            "orderCode": "3G7LXQ51",
            "status": "READY_TO_PICK",
            "target": "PICK",
            "isReady": false,
            "actionDate": "2018-07-05T03:00:21.278Z",
            "expectedDate": "2018-07-05T03:00:21.278Z",
            "groups": [
                "1323/PICK/DISTRICT/0215",
                "1323/PICK/WARD/0215-UNDEFINED",
                "1323/PICK/CLIENT_HUB/348897"
            ],
            "id": "5b3d89c56d0d850ed491e542",
            "createdTime": "2018-07-05T03:00:21.541Z",
            "lastUpdatedTime": "2018-07-05T03:00:21.554Z"
        },
        {
            "hubId": "1323",
            "orderCode": "3G64XQRN",
            "status": "READY_TO_PICK",
            "target": "PICK",
            "isReady": false,
            "actionDate": "2018-07-05T03:07:37.221Z",
            "expectedDate": "2018-07-05T03:07:37.221Z",
            "groups": [
                "1323/PICK/DISTRICT/0215",
                "1323/PICK/WARD/0215-UNDEFINED",
                "1323/PICK/CLIENT_HUB/348897"
            ],
            "id": "5b3d8b796d0d850ed491e54b",
            "createdTime": "2018-07-05T03:07:37.401Z",
            "lastUpdatedTime": "2018-07-05T03:07:37.532Z"
        },
        {
            "hubId": "1323",
            "orderCode": "3GUSFQK4",
            "status": "READY_TO_PICK",
            "target": "PICK",
            "isReady": false,
            "actionDate": "2018-07-06T06:50:02.246Z",
            "expectedDate": "2018-07-06T06:50:02.246Z",
            "groups": [
                "1323/PICK/DISTRICT/0215",
                "1323/PICK/WARD/0215-UNDEFINED",
                "1323/PICK/CLIENT_HUB/348897"
            ],
            "id": "5b3f111a6d0d850ed491ec84",
            "createdTime": "2018-07-06T06:50:02.943Z",
            "lastUpdatedTime": "2018-07-06T07:02:21.127Z"
        },
        {
            "hubId": "1323",
            "orderCode": "3G54F9HK",
            "status": "READY_TO_PICK",
            "target": "PICK",
            "isReady": false,
            "actionDate": "2018-07-06T08:01:47.032Z",
            "expectedDate": "2018-07-06T08:01:47.032Z",
            "groups": [
                "1323/PICK/DISTRICT/0215",
                "1323/PICK/WARD/0215-UNDEFINED",
                "1323/PICK/CLIENT_HUB/348897"
            ],
            "id": "5b3f21eb6d0d850ed491edbe",
            "createdTime": "2018-07-06T08:01:47.252Z",
            "lastUpdatedTime": "2018-07-09T07:06:00.502Z"
        },
        {
            "hubId": "1323",
            "orderCode": "3GY69A4X",
            "status": "READY_TO_PICK",
            "target": "PICK",
            "isReady": false,
            "actionDate": "2018-07-06T08:08:16.518Z",
            "expectedDate": "2018-07-06T08:08:16.518Z",
            "groups": [
                "1323/PICK/DISTRICT/0215",
                "1323/PICK/WARD/0215-UNDEFINED",
                "1323/PICK/CLIENT_HUB/348897"
            ],
            "id": "5b3f23706d0d850ed491ee13",
            "createdTime": "2018-07-06T08:08:16.777Z",
            "lastUpdatedTime": "2018-07-06T08:08:16.860Z"
        },
        {
            "hubId": "1323",
            "orderCode": "3G4UXQY9",
            "status": "READY_TO_PICK",
            "target": "PICK",
            "isReady": false,
            "actionDate": "2018-07-06T08:12:31.254Z",
            "expectedDate": "2018-07-06T08:12:31.254Z",
            "groups": [
                "1323/PICK/DISTRICT/0215",
                "1323/PICK/WARD/0215-UNDEFINED",
                "1323/PICK/CLIENT_HUB/348897"
            ],
            "id": "5b3f246f6d0d850ed491ee34",
            "createdTime": "2018-07-06T08:12:31.475Z",
            "lastUpdatedTime": "2018-07-06T08:12:31.482Z"
        },
        {
            "hubId": "1323",
            "orderCode": "3GSHFQLL",
            "status": "READY_TO_PICK",
            "target": "PICK",
            "isReady": false,
            "actionDate": "2018-07-06T08:42:36.340Z",
            "expectedDate": "2018-07-06T08:42:36.340Z",
            "groups": [
                "1323/PICK/DISTRICT/0215",
                "1323/PICK/WARD/0215-UNDEFINED",
                "1323/PICK/CLIENT_HUB/348897"
            ],
            "id": "5b3f2b7c6d0d850ed491ee82",
            "createdTime": "2018-07-06T08:42:36.855Z",
            "lastUpdatedTime": "2018-07-07T03:40:18.054Z"
        }
    ],
    "total": 7,
    "message": "Query OrderItem successfully."
}


export const cvsData = [  
    {  
      "key":"338935",
      "senderAddress":"60a Lê Hồng Phong, Quận 10, Ho Chi Minh City, Vietnam",
      "senderHubId":"338935",
      "clientId":"92453",
      "clientName":"Shopee",
      "senderName":"test",
      "senderPhone":"01234567890",
      "displayOrder":142,
      "type":"PICK",
      "ShopOrders":[  
        {  
          "code":"3GY6LFQL",
          "tripCode":"1871323RDVDRF",
          "type":"PICK",
          "status":"PICKING",
          "isUpdatedStatus":false,
          "isReturn":false,
          "isCancel":false,
          "isScanImport":false,
          "isOutstock":true,
          "clientHubId":"338935",
          "clientId":"92453",
          "clientAddress":"60a Lê Hồng Phong, Quận 10, Ho Chi Minh City, Vietnam",
          "clientAddressRemoveAccent":"60a Le Hong Phong, Quan 10, Ho Chi Minh City, Vietnam",
          "clientPhone":"01234567890",
          "isCollected":true,
          "orderId":"446187",
          "driverId":"210030",
          "displayOrder":142,
          "date":"2018-07-23T07:56:18.838Z",
          "id":"5b558a22011b3a2508004d7d",
          "createdTime":"2018-07-24T04:04:44.686Z",
          "lastUpdatedTime":"2018-07-24T04:04:44.686Z",
          "moneyCollect":0,
          "senderName":"test",
          "senderAddress":"60a Lê Hồng Phong, Quận 10, Ho Chi Minh City, Vietnam",
          "senderPhone":"01234567890",
          "receiverAddress":"179 Tô Hiến Thành, Phường 13, District 10, Ho Chi Minh City, Vietnam",
          "receiverName":"test 2",
          "receiverPhone":"01234567890",
          "senderHubId":"338935",
          "pickWarehouseId":"1323",
          "deliverWarehouseId":"1323",
          "width":10,
          "height":10,
          "length":10,
          "weight":500,
          "serverTime":"2018-07-24T04:07:04.735Z",
          "address":"60a Lê Hồng Phong, Quận 10, Ho Chi Minh City, Vietnam",
          "done":false
        },
        {  
          "code":"3G54YRXD",
          "tripCode":"1871323RDVDRF",
          "type":"PICK",
          "status":"PICKING",
          "isUpdatedStatus":false,
          "isReturn":false,
          "isCancel":false,
          "isScanImport":false,
          "isOutstock":true,
          "clientHubId":"338935",
          "clientId":"92453",
          "clientAddress":"60a Lê Hồng Phong, Quận 10, Ho Chi Minh City, Vietnam",
          "clientAddressRemoveAccent":"60a Le Hong Phong, Quan 10, Ho Chi Minh City, Vietnam",
          "clientPhone":"01234567890",
          "isCollected":true,
          "orderId":"446179",
          "driverId":"210030",
          "displayOrder":143,
          "date":"2018-07-23T07:56:18.838Z",
          "id":"5b558a22011b3a61b3004d83",
          "createdTime":"2018-07-24T04:04:44.776Z",
          "lastUpdatedTime":"2018-07-24T04:04:44.776Z",
          "moneyCollect":0,
          "senderName":"test",
          "senderAddress":"60a Lê Hồng Phong, Quận 10, Ho Chi Minh City, Vietnam",
          "senderPhone":"01234567890",
          "receiverAddress":"179 Tô Hiến Thành, Phường 13, Quận 10, Ho Chi Minh City, Vietnam",
          "receiverName":"test 2",
          "receiverPhone":"01234567890",
          "senderHubId":"338935",
          "pickWarehouseId":"1323",
          "deliverWarehouseId":"1323",
          "width":10,
          "height":10,
          "length":10,
          "weight":500,
          "serverTime":"2018-07-24T04:07:04.741Z",
          "address":"60a Lê Hồng Phong, Quận 10, Ho Chi Minh City, Vietnam",
          "done":false
        },
        {  
          "code":"3GLFUYFH",
          "tripCode":"1871323RDVDRF",
          "type":"PICK",
          "status":"PICKING",
          "isUpdatedStatus":false,
          "isReturn":false,
          "isCancel":false,
          "isScanImport":false,
          "isOutstock":true,
          "clientHubId":"338935",
          "clientId":"92453",
          "clientAddress":"60a Lê Hồng Phong, Quận 10, Ho Chi Minh City, Vietnam",
          "clientAddressRemoveAccent":"60a Le Hong Phong, Quan 10, Ho Chi Minh City, Vietnam",
          "clientPhone":"01234567890",
          "isCollected":true,
          "orderId":"446510",
          "driverId":"210030",
          "displayOrder":146,
          "date":"2018-07-23T07:56:18.838Z",
          "id":"5b558a22011b3b3b4f004d95",
          "createdTime":"2018-07-24T04:04:45.062Z",
          "lastUpdatedTime":"2018-07-24T04:04:45.062Z",
          "moneyCollect":0,
          "senderName":"test",
          "senderAddress":"60a Lê Hồng Phong, Quận 10, Ho Chi Minh City, Vietnam",
          "senderPhone":"01234567890",
          "receiverAddress":"10 Điện Biên Phủ, Phường 15, Bình Thạnh, Ho Chi Minh City, Vietnam",
          "receiverName":"Vi test",
          "receiverPhone":"0987654321",
          "senderHubId":"338935",
          "pickWarehouseId":"1323",
          "deliverWarehouseId":"1323",
          "width":10,
          "height":10,
          "length":10,
          "weight":500,
          "serverTime":"2018-07-24T04:07:04.760Z",
          "address":"60a Lê Hồng Phong, Quận 10, Ho Chi Minh City, Vietnam",
          "done":false
        },
        {  
          "code":"3GY6LX65",
          "tripCode":"1871323RDVDRF",
          "type":"PICK",
          "status":"PICKING",
          "isUpdatedStatus":false,
          "isReturn":false,
          "isCancel":false,
          "isScanImport":false,
          "isOutstock":true,
          "clientHubId":"338935",
          "clientId":"92453",
          "clientAddress":"60a Lê Hồng Phong, Quận 10, Ho Chi Minh City, Vietnam",
          "clientAddressRemoveAccent":"60a Le Hong Phong, Quan 10, Ho Chi Minh City, Vietnam",
          "clientPhone":"01234567890",
          "isCollected":true,
          "orderId":"446509",
          "driverId":"210030",
          "displayOrder":147,
          "date":"2018-07-23T07:56:18.838Z",
          "id":"5b558a22011b3b7ebf004d9b",
          "createdTime":"2018-07-24T04:04:45.147Z",
          "lastUpdatedTime":"2018-07-24T04:04:45.147Z",
          "moneyCollect":0,
          "senderName":"test",
          "senderAddress":"60a Lê Hồng Phong, Quận 10, Ho Chi Minh City, Vietnam",
          "senderPhone":"01234567890",
          "receiverAddress":"10 Cao Thắng, phường 5, District 3, Ho Chi Minh City, Vietnam",
          "receiverName":"Test",
          "receiverPhone":"0987654321",
          "senderHubId":"338935",
          "pickWarehouseId":"1323",
          "deliverWarehouseId":"1323",
          "width":10,
          "height":10,
          "length":10,
          "weight":500,
          "serverTime":"2018-07-24T04:07:04.765Z",
          "address":"60a Lê Hồng Phong, Quận 10, Ho Chi Minh City, Vietnam",
          "done":false
        }
      ],
      "done":false,
      "shopGroupName":"Mặc định",
      "position":0,
      "sucessUnsyncedNum":0,
      "failUnsyncedNum":0,
      "totalServiceCost":0,
      "estimateTotalServiceCost":0
    },
    {  
      "key":"349052",
      "senderAddress":"10/50 đường 3/2",
      "senderHubId":"349052",
      "clientId":"18692",
      "clientName":"Lazada",
      "senderName":"HCM",
      "senderPhone":"84909526621",
      "displayOrder":144,
      "type":"PICK",
      "ShopOrders":[  
        {  
          "code":"3GUSYAR4",
          "tripCode":"1871323RDVDRF",
          "type":"PICK",
          "status":"PICKING",
          "isUpdatedStatus":false,
          "isReturn":false,
          "isCancel":false,
          "isScanImport":false,
          "isOutstock":true,
          "clientHubId":"349052",
          "clientId":"18692",
          "clientAddress":"10/50 đường 3/2",
          "clientAddressRemoveAccent":"10/50 duong 3/2",
          "clientPhone":"84909526621",
          "isCollected":false,
          "orderId":"446668",
          "driverId":"210030",
          "displayOrder":144,
          "date":"2018-07-23T07:56:18.838Z",
          "id":"5b558a22011b3a9898004d89",
          "createdTime":"2018-07-24T04:04:44.869Z",
          "lastUpdatedTime":"2018-07-24T04:04:44.869Z",
          "moneyCollect":13200,
          "senderName":"HCM",
          "senderAddress":"10/50 đường 3/2",
          "senderPhone":"84909526621",
          "receiverAddress":"20 Thành Thái",
          "receiverName":"Buyer",
          "receiverPhone":"84986254895",
          "senderHubId":"349052",
          "pickWarehouseId":"1323",
          "deliverWarehouseId":"1323",
          "width":10,
          "height":10,
          "length":10,
          "weight":50,
          "externalCode":"180720155476UX5",
          "serverTime":"2018-07-24T04:07:04.745Z",
          "address":"10/50 đường 3/2",
          "done":false
        },
        {  
          "code":"3GXN9AX6",
          "tripCode":"1871323RDVDRF",
          "type":"PICK",
          "status":"PICKING",
          "isUpdatedStatus":false,
          "isReturn":false,
          "isCancel":false,
          "isScanImport":false,
          "isOutstock":true,
          "clientHubId":"349052",
          "clientId":"18692",
          "clientAddress":"10/50 đường 3/2",
          "clientAddressRemoveAccent":"10/50 duong 3/2",
          "clientPhone":"84909526621",
          "isCollected":true,
          "orderId":"445725",
          "driverId":"210030",
          "displayOrder":141,
          "date":"2018-07-23T07:56:18.838Z",
          "id":"5b558a22011b3ac890004d77",
          "createdTime":"2018-07-24T04:04:44.583Z",
          "lastUpdatedTime":"2018-07-24T04:04:44.583Z",
          "moneyCollect":0,
          "senderName":"HCM",
          "senderAddress":"10/50 đường 3/2",
          "senderPhone":"84909526621",
          "receiverAddress":"20 Thành Thái",
          "receiverName":"Buyer",
          "receiverPhone":"84986254895",
          "senderHubId":"349052",
          "pickWarehouseId":"1323",
          "deliverWarehouseId":"1323",
          "width":10,
          "height":10,
          "length":10,
          "weight":50,
          "externalCode":"180705183176TBT",
          "serverTime":"2018-07-24T04:07:04.750Z",
          "address":"10/50 đường 3/2",
          "done":false
        },
        {  
          "code":"3G4UF4RR",
          "tripCode":"1871323RDVDRF",
          "type":"PICK",
          "status":"PICKING",
          "isUpdatedStatus":false,
          "isReturn":false,
          "isCancel":false,
          "isScanImport":false,
          "isOutstock":true,
          "clientHubId":"349052",
          "clientId":"18692",
          "clientAddress":"10/50 đường 3/2",
          "clientAddressRemoveAccent":"10/50 duong 3/2",
          "clientPhone":"84909526621",
          "isCollected":false,
          "orderId":"446667",
          "driverId":"210030",
          "displayOrder":145,
          "date":"2018-07-23T07:56:18.838Z",
          "id":"5b558a22011b3af0bd004d8f",
          "createdTime":"2018-07-24T04:04:44.962Z",
          "lastUpdatedTime":"2018-07-24T04:04:44.962Z",
          "moneyCollect":13200,
          "senderName":"HCM",
          "senderAddress":"10/50 đường 3/2",
          "senderPhone":"84909526621",
          "receiverAddress":"20 Thành Thái",
          "receiverName":"Buyer",
          "receiverPhone":"84986254895",
          "senderHubId":"349052",
          "pickWarehouseId":"1323",
          "deliverWarehouseId":"1323",
          "width":10,
          "height":10,
          "length":10,
          "weight":50,
          "externalCode":"180720155476UX6",
          "serverTime":"2018-07-24T04:07:04.755Z",
          "address":"10/50 đường 3/2",
          "done":false
        }
      ],
      "done":false,
      "shopGroupName":"Mặc định",
      "position":0,
      "sucessUnsyncedNum":0,
      "failUnsyncedNum":0,
      "totalServiceCost":0,
      "estimateTotalServiceCost":26400
    }
  ]