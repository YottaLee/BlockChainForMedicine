var myDate = new Date();
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
        url: "http://192.168.1.109:3000/api/org.onechain.medicine.AddProcessAsset",
        type: "POST",
        dataType: "json", //指定服务器返回的数据类型
        data: {
            "$class": "org.onechain.medicine.AddProcessAsset",
            "processAsset": {
                "$class": "org.onechain.medicine.ProcessAsset",
                index: parseInt(myDate.getTime()),
                processId: processID,
                collectId: harvestOrder,
                pTime: processTime,
                weather: weather,
                process: processSkill,
                num: parseInt(processNumber),
                company: processUnit,
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
           alert("Fail");
        }
    });

}