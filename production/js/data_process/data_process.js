function summit() {
    var processID = $('#processID').val();
    var processTime = $('#processTime').val();
    var processNumber = $('#processNumber').val();
    var processMan = $('#processMan').val();
    var harvestOrder = $('#harvestOrder').val();
    var weather = $('#weather').val();
    var processSkill =$('#processSkill').val();
    var processUnit = $('#processUnit').val();
    var file ;

    $.ajax({
        url: "http://localhost/api/org.onechain.medicine.AddProcessAsset",
        type: "POST",
        dataType: "json", //指定服务器返回的数据类型
        data: {
            "$class": "org.onechain.medicine.AddProcessAsset",
            "collectAsset": {
                "$class": "org.onechain.medicine.processAsset",
                index: parseInt(myDate.getTime()),                           // 自增量
                processId: processID,                        // 采收批次
                collectId: harvestOrder,                             // 采收时间
                pTime: processTime,                             // 采收地点
                weather: weather,                      // 采收温度
                process: processSkill,                          // 采收天气
                num: parseInt(processNumber),                              // 采收数量
                company: processUnit,                          // 采收单位
                leader: processMan,
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