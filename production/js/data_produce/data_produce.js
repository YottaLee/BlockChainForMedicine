var myDate = new Date();

function summit() {
    var produceID = $('#produceID').val();
    var produceTime = $('#produceTime').val();
    var produceNumber = $('#produceNumber').val();
    var producePlace = $('#producePlace').val();
    var purchaseOrder = $('#purchaseOrder').val();
    var produceSkill = $('#produceSkill').val();
    var produceUnit = $('#produceUnit').val();
    var produceMan = $('#produceMan').val();
    var file;
    console.log(parseInt(myDate.getTime()));
    $.ajax({
        url: "http://192.168.1.109:3000/api/org.onechain.medicine.AddProductionAsset",
        type: "POST",
        dataType: "json", //指定服务器返回的数据类型
        data: {

            // {
            //     "$class": "org.onechain.medicine.AddProductionAsset",
            //     "productionAsset": {
            //     "$class": "org.onechain.medicine.ProductionAsset",
            //         "index": 0,
            //         "productCode": "string",
            //         "productName": "string",
            //         "purchaseId": "string",
            //         "productionId": "string",
            //         "time": "string",
            //         "num": 0,
            //         "productCompany": "string",
            //         "process": "string",
            //         "local": "string",
            //         "leader": "string",
            //         "operateTime": "2018-06-13T12:38:37.298Z",
            //         "transId": "string",
            //         "operater": "string"
            // },
            //     "hashIndex": 0,
            //     "transactionId": "string",
            //     "timestamp": "2018-06-13T12:38:37.298Z"
            // }

            "$class": "org.onechain.medicine.AddProductionAsset",
            "productionAsset": {
                "$class": "org.onechain.medicine.ProductionAsset",
                index: parseInt(myDate.getTime()),                           // 自增量
                productCode: produceID,                     //产品编码
                productName: produceUnit,                     //产品名称
                purchaseId: purchaseOrder,                     //采购批次
                productionId: produceID,                  //  生产批次
                time: produceTime,                          // 加工时间
                num: parseInt(produceNumber),                            // 加工数量
                productCompany: producePlace,                 // 加工单位
                process: produceSkill,                        // 加工工艺
                local: producePlace,                          //加工地点
                leader: produceMan,                       //车间负责人
                operateTime: "2018-06-13T12:38:37.298Z",
                transId: "1",
                operater: "user"
            },
            hashIndex: 1,
        },
        success: function (data) {
            alert("已提交");
        },
        error: function () {
            alert("Fail");
        }
    });

}