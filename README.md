# DASHBOARD::

[GET] /api/waterMeters
"statusCode": 200;
"message": "Get all waterMeters successfully";
"data": {
"totalWaterMeters": 25;
"types": {
"pulse": 10;
"digital": 15;
}
"statusActive": 24;
"devices": [
{
"id": 1,
"name": "Đại học Bách Khoa",
"address": "268, Lý Thường Kiệt, Quận 10",
"location": {
"longtitude": 106.11662326,
"latitude": 10.132326562
};
"children": [
{
 "id": 2,
"location": {
"longtitude": 106.11662326,
"latitude": 10.132326562
}
}
];
"status": "active";
"flowRate": 768;
"waterFlowPerDay": 5;
"updatedAt": 12h12p;
}
]
}

================================================================

[POST] /api/waterMeters/line
"statusCode": 200;
"message": "Create new line successfully";
"data": null

================================================================

[DELETE] /api/waterMeters/line
"statusCode": 200
"message": "Delete line successfully";
"data": null

================================================================

[GET] /api/statistic-waterFlow/day
"statusCode": 200;
"message": "Get waterflow per day successfully";
"data": {
"minWaterflow": 10;
"maxWaterflow": 100;
"statistic": [
{
"id": 1,
"name": "Đại học Bách Khoa",
"waterFlow": [
{
"time": 1h,
"value": 12
},
{
"time": 2h,
"value": 12
}
]
},
{
"id": 2,
"name": "Đại học KHTN",
"waterFlow": [
{
"time": 1h,
"value": 21
},
{
"time": 2h,
"value": 22
}
]
}
]
}

================================================================

[GET] /api/statistic-waterFlow/week
"statusCode": 200;
"message": "Get waterflow per week successfully";
"data": {
"minWaterflow": 10;
"maxWaterflow": 100;
"statistic": [
{
"id": 1,
"name": "Đại học Bách Khoa",
"waterFlow": [
{
"time": "Monday,
"value": 12
},
{
"time": "Tuesday",
"value": 12
}
]
},
{
"id": 2,
"name": "Đại học KHTN",
"waterFlow": [
{
"time": "Monday",
"value": 21
},
{
"time": "Tuesday",
"value": 22
}
]
}
]
}

================================================================

[GET] /api/statistic-waterFlow/month
"statusCode": 200;
"message": "Get waterflow per month successfully";
"data": {
"minWaterflow": 10;
"maxWaterflow": 100;
"statistic": [
{
"id": 1,
"name": "Đại học Bách Khoa",
"waterFlow": [
{
"time": "January",
"value": 120
},
{
"time": "February",
"value": 120
}
]
},
{
"id": 2,
"name": "Đại học KHTN",
"waterFlow": [
{
"time": "January",
"value": 210
},
{
"time": "February",
"value": 220
}
]
}
]
}

================================================================

[GET] /api/statistic-waterFlow/month/top10
"statusCode": 200;
"message": "Get top 10 use waterFlow per month successfully"
"data": [
{
"id": 1,
"name": "Đại học Bách Khoa",
"address": "268, Lý Thường Kiệt, Quận 10",
"value": 1000,
"thumbnail": "abc.jpg",
"updateAt": 10/10/2023,
}
]

================================================================

[GET] /api/notifications
"statusCode": 200;
"message": "Get notifications successfully";
"data": [
{
"id": 1,
"name": "Đại học Bách Khoa",
"content": "Vượt ngưỡng tiêu thụ",
"createdAt": 10/10/2023,
},
{
"id": 2,
"name": "Đại học Bách Khoa",
"content": "Vượt ngưỡng tiêu thụ",
"createdAt": 11/10/2023,
}
]

================================================================

[DELETE] /api/notifications/:id
"statusCode": 200;
"message": "Delete notification successfully";
"data": null

================================================================

[DELETE] /api/notifications
"statusCode": 200;
"message": "Delete all notifications successfully";
"data": null

================================================================

MANAGES DEVICES
[GET] /api/waterMeters
"statusCode": 200;
"message": "Get all waterMeter successfully";
"data": [
{
"id": 1,
"name": "Đại học Bách Khoa",
"address": "268, Lý Thường Kiệt, Quận 10",
"numsOfChildren": 3,
"installationAt": "12/12/2023",
"status": "active",
"waterFlowPerDay": 10
}
]
================================================================

[GET] /api/waterMeters
"statusCode": 200;
"message": "Search waterMeter by name successfully";
"data": [
{
"id": 1,
"name": "Đại học Bách Khoa",
"address": "268, Lý Thường Kiệt, Quận 10",
"numsOfChildren": 3,
"installationAt": "12/12/2023",
"status": "active",
"waterFlowPerDay": 10
}
]

================================================================

DETAIL DEVICE
[GET] /api/waterMeters/:id
"statusCode": 200;
"message": "Get info waterMeter successfully";
"data": {
"name": "Đại học Bách Khoa",
"address": "268, Lý Thường Kiệt, Quận 10",
"numsOfChildren": 3,
"installationAt": "12/12/2023",
"status": "active",
"flowRate": 768,
"waterFlowPerDay": 10,
"waterFlowPerWeek": 60,
"waterFlowPerMonth": 120,
"threshold": 150
}

================================================================

[GET] /api/statistic-waterFlow/day/:id
"statusCode": 200;
"message": "Get waterflow per day successfully";
"data": {
"minWaterflow": 10;
"maxWaterflow": 100;
"statistic": [
{
"time": 1h,
"value": 12
},
{
"time": 2h,
"value": 12
}
]
}

================================================================

[GET] /api/statistic-waterFlow/week
"statusCode": 200;
"message": "Get waterflow per week successfully";
"data": {
"minWaterflow": 10;
"maxWaterflow": 120;
"statistic": [
{
"time": "Monday",
"value": 120
},
{
"time": "Tuesday",
"value": 120
}
]
}

================================================================

[GET] /api/statistic-waterFlow/month/:id
"statusCode": 200;
"message": "Get waterflow per month successfully";
"data": {
"minWaterflow": 100;
"maxWaterflow": 240;
"statistic": [
{
"time": "January",
"value": 210
},
{
"time": "February",
"value": 210
}
]
}

================================================================

[POST] /api/setting/change-threshold/:id
"statusCode": 200;
"message": "Get waterflow per month successfully";
"data": null

================================================================

[POST] /api/setting/change-threshold/:id
"statusCode": 200;
"message": "Get waterflow per month successfully";
"data": null


================================================================
[POST] /login
```
 "username":"",
 "password":""
```

