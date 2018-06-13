var currentblock;
var blockArr = [{value:23,height:0,size:"1.01M",time:"2018-06-10 12:30:45",place:"宁夏中宁宁安堡种植基地",hash:"353532e3b0c44298fc1c149afbf4c8ibt7892427ae41e4649b934ca4kybjtg7852b855"},
    {value:12,height:1,size:"2.01M",time:"2018-06-11 14:23:11",place:"宁夏中宁宁安堡种植基地",hash:"353532e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991bjbds855"},
    {value:32,height:2,size:"1.01M",time:"2018-06-12 13:04:12",place:"河南辅仁堂制药有限公司",hash:"353532e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca4kybjtg7852b855"},
    {value:55,height:3,size:"3.01M",time:"2018-06-13 12:11:23",place:"河南辅仁堂制药有限公司",hash:"353532e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca4kpokj87852b855"},
    {value:15,height:4,size:"2.23M",time:"2018-06-13 15:44:09",place:"青海诺木洪种植基地",hash:"353532e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b90o9i8kybjtg7852b855"},
    {value:17,height:5,size:"1.25M",time:"2018-06-13 15:49:45",place:"青海诺木洪种植基地",hash:"353532e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934okj9fbjtg7852b855"}
];
var index = -1;
document.getElementById("block0").click();
$(".changecolor").click(function () {

    $(".changecolor").removeClass('chosen');
    $(".changecolor").addClass('unchosen');
    $(this).removeClass('unchosen');
    $(this).addClass('chosen');
});

function change_color(current) {
    var str = current.id;
    index = parseInt(str[str.length-1]);
    console.log(index);
    console.log(blockArr[index]);
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
    document.getElementById("currentValue").innerHTML = block.value;
    document.getElementById("height").innerHTML = block.height;
    document.getElementById("size").innerHTML = block.size;
    document.getElementById("time").innerHTML = block.time;
    document.getElementById("place").innerHTML = block.place;
    document.getElementById("hash").innerHTML = block.hash;

}
