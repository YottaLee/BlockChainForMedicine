var str = window.location.href;//取地址参数部分
var arr = str.split("?");
var hash = arr[1];
var node = "种植采收";
var step = 1;
var pici = "20180424001";
var info = "山东临沂平邑金银花种植基地";


document.getElementById("hash_value").innerHTML = "哈希值: " + "353532e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8"+hash.substr(3);
document.getElementById("peer_name").innerHTML = node;
document.getElementById("link_name").innerHTML = step;
document.getElementById("batch_name").innerHTML = pici;
document.getElementById("detail_name").innerHTML = info;

