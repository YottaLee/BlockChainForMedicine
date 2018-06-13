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
        url: "http://localhost/api/org.onechain.medicine.AddPurchaseAsset",
        type: "POST",
        dataType: "json", //指定服务器返回的数据类型
        data: {
            "$class": "org.onechain.medicine.AddPurchaseAsset",
            "purchaseAsset": {
                "$class": "org.onechain.medicine.PurchaseAsset",
                index: parseInt(myDate.getTime()),
                purchaseId: purchaseID,
                collectId: harvestOrder,
                time: purchaseTime,
                num: purchaseNumber,
                company: purchaseUnit,
                contactNO: contactID,
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

        }
    });

}