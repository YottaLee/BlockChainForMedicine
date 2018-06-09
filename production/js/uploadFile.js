var fileBtn = $("input[type=file]");
fileBtn.on("change", function () {
    var index = $(this).val().lastIndexOf("\\");
    var sFileName = $(this).val().substr((index + 1));
    $("#rightText").html(sFileName);
});