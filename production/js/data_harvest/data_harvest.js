

function summit() {
    var harvestID = $('#harvestID').val();
    var harvestTime = $('#harvestTime').val();
    var harvestPlace = $('#harvestPlace').val();
    var harvestWeather = $('#harvestWeather').val();
    var harvestNumber = $('#harvestNumber').val();
    var harvestMan = $('#harvestMan').val();
    var harvestTemperature = $('#harvestTemperature').val();
    var fertilizer = $('#fertilizer').val();
    var harvestUnit = $('#harvestUnit').val();
    var file;


    $.ajax({
        url: "http://localhost/api/org.onechain.medicine.AddCollectAsset",
        type: "POST",
        dataType: "json", //指定服务器返回的数据类型
        data: {
            "$class": "org.onechain.medicine.AddCollectAsset",
            "collectAsset": {
                "$class": "org.onechain.medicine.CollectAsset",
                index: 1,                           // 自增量
                collectId: harvestID,                        // 采收批次
                cTime: harvestTime,                             // 采收时间
                cLocal: harvestPlace,                             // 采收地点
                temperature: harvestTemperature,                      // 采收温度
                weather: harvestWeather,                          // 采收天气
                fertilizer: fertilizer,                       // 基肥
                num: parseInt(harvestNumber),                              // 采收数量
                company: harvestUnit,                          // 采收单位
                leader: harvestMan,                           // 采收负责人
                transId: "1",
                operater: "admin"
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