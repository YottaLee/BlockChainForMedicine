


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
        url: "/data/examine",
        type: "POST",
        dataType: "json",
        data: {
            examineID: examineID,
            examineTime:examineTime,
            examineResult:examineResult,
            SO2Remain:SO2Remain,
            harvestOrder:harvestOrder,
            examineCompany:examineCompany,
            grayNumber:grayNumber,
            examineMan:examineMan
            //file not ready
        },
        success: function (data) {
            if (data.success) {
                //加积分
            }
            else {
                console.log("Error summit examine!");
            }
        },
        error: function () {
            console.log("Network warning for summiting examine!");
        }
    });

}