var currentblock;
var blockArr = [];
var index = -1;

$(".changecolor").click(function () {
    var id = $(this).val();
    console.log(id);
    index = parseInt(id[id.length-1]);
    change_color(this);
});

function change_color(current){
    $(".changecolor").removeClass('chosen');
    $(".changecolor").addClass('unchosen');
    $(current).removeClass('unchosen');
    $(current).addClass('chosen');
}

function previousblock() {
    index--;
    if (index < blockArr.length) {
        var blockstr = "#block"+index.toString();
        change_color(blockstr);
        displayData(blockArr[index]);
    }
    else
        index++;
}

function nextblock() {
    index++;
    if (index >= 0) {
        var blockstr = "#block"+index.toString();
        change_color(blockstr);
        displayData(blockArr[index]);
    }
    else
        index--;
}

function displayData(block) {

}
