var currentblock;
var blockArr = [];
var index = -1;

$(".changecolor").click(function () {
    $(".changecolor").removeClass('chosen');
    $(".changecolor").addClass('unchosen');
    $(this).removeClass('unchosen');
    $(this).addClass('chosen');
});

function previousblock() {
    index--;
    if (index < blockArr.length) {
        var blockstr = "#block"+index.toString();
        $(blockstr).trigger('click');
        displayData(blockArr[index]);
    }
    else
        index++;
}

function nextblock() {
    index++;
    if (index >= 0) {
        var blockstr = "#block"+index.toString();
        $(blockstr).trigger('click');
        displayData(blockArr[index]);
    }
    else
        index--;
}

function displayData(block) {

}
