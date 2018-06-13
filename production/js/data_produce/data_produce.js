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
        url: "http://localhost/api/org.onechain.medicine.AddCollectAsset",
        type: "POST",
        dataType: "json", //指定服务器返回的数据类型
        data: {
            "$class": "org.onechain.medicine.AddCollectAsset",
            "collectAsset": {
                "$class": "org.onechain.medicine.CollectAsset",
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
                leader: produceMan                       //车间负责人
            },
            hashIndex: 1,
        },
        success: function (data) {
            alert("已提交");
        },
        error: function () {

        }
    });

}