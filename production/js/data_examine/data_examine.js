


function summit() {
    var examineID = $('#examineID').val();
    var examineTime = $('#examineTime').val();
    var examineResult = $('#examineResult').val();
    var SO2Remain = $('#SO2Remain').val();
    var harvestOrder = $('#harvestOrder').val();
    var examineCompany =$('#examineCompany').val();
    var grayNumber = $('#grayNumber').val();
    var examineMan = $('#examineMan').val();
    var file ;
    $.ajax({
        url: "http://localhost/api/org.onechain.medicine.AddTestAsset",
        type: "POST",
        dataType: "json", //指定服务器返回的数据类型
        data: {
            "$class": "org.onechain.medicine.AddTestAsset",
            "testAsset": {
                "$class": "org.onechain.medicine.TestAsset",
                index: parseInt(myDate.getTime()),                           // 自增量
                testId: examineID,                        // 采收批次
                collectId: harvestOrder,                             // 采收时间
                Time: examineTime,                             // 采收地点
                company: examineCompany,                      // 采收温度
                result: examineResult,                          // 采收天气
                totalAsh: grayNumber,                              // 采收数量
                sulfurDioxide: SO2Remain,                          // 采收单位
                leader: examineMan,
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