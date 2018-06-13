var currentblock;
var blockArr = [];
var index = -1;

function test(ev) {
    console.log(ev.id)
}

$(".changecolor").click(function () {

    $(".changecolor").removeClass('chosen');
    $(".changecolor").addClass('unchosen');
    $(this).removeClass('unchosen');
    $(this).addClass('chosen');
});

function change_color(current) {
    var str = current.id;
    index = parseInt(str[str.length-1]);
    displayData(blockArr[index]);
    // var id = "#" + str;
    // console.log(id);
    // $(".changecolor").removeClass('chosen');
    // $(".changecolor").addClass('unchosen');
    // $(id).removeClass('unchosen');
    // $(id).addClass('chosen');
}

function color(current) {
    for(var i=0;i<7;i++) {
        var str = "block"+i.toString();
        document.getElementById(str).removeClass('chosen');
        document.getElementById(str).addClass('unchosen');

    }
    document.getElementById(str).removeClass('unchosen');
    document.getElementById(str).addClass('chosen');
}

function previousblock() {
    index--;
    if (index >= 0) {
        var blockstr = "#block" + index.toString();
        color(blockstr);
        displayData(blockArr[index]);
    }
    else
        index++;
}

function nextblock() {
    index++;
    if (index < 7) {
        var blockstr = "#block" + index.toString();
        console.log(blockstr);
        color(blockstr);
        displayData(blockArr[index]);
    }
    else
        index--;
}

function displayData(block) {

}
