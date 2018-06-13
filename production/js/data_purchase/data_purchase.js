var myDate = new Date();

function summit() {
    var purchaseID = $('#purchaseID').val();
    var purchaseTime = $('#purchaseTime').val();
    var purchaseNumber = $('#purchaseNumber').val();
    var storagePlace = $('#storagePlace').val();
    var harvestOrder = $('#harvestOrder').val();
    var contactID =$('#contactID').val();
    var purchaseUnit = $('#purchaseUnit').val();
    var purchaseMan = $('#purchaseMan').val();
    var file ;



    $.ajax({
        url: "http://192.168.1.109:3000/api/org.onechain.medicine.AddPurchaseAsset",
        type: "POST",
        dataType: "json", //指定服务器返回的数据类型
        data: {

    // {
    //     "$class": "org.onechain.medicine.AddPurchaseAsset",
    //     "purchaseAsset": {
    //     "$class": "org.onechain.medicine.PurchaseAsset",
    //         "index": 0,
    //         "purchaseId": "string",
    //         "collectId": "string",
    //         "time": "string",
    //         "num": 0,
    //         "company": "string",
    //         "contractNO": "string",
    //         "storage": "string",
    //         "leader": "string",
    //         "operateTime": "2018-06-13T12:38:37.314Z",
    //         "transId": "string",
    //         "operater": "string"
    // },
    //     "hashIndex": 0,
    //     "transactionId": "string",
    //     "timestamp": "2018-06-13T12:38:37.314Z"
    // }

            "$class": "org.onechain.medicine.AddPurchaseAsset",
            "purchaseAsset": {
                "$class": "org.onechain.medicine.PurchaseAsset",
                index: parseInt(myDate.getTime()),
                purchaseId: purchaseID,
                collectId: harvestOrder,
                time: purchaseTime,
                num: purchaseNumber,
                company: purchaseUnit,
                contractNO: contactID,
                storage: storagePlace,
                leader: purchaseMan,
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