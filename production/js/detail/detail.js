var str = window.location.href;//取地址参数部分
var arr = str.split("?");
var hash = arr[1].substr(3);
// hash = parseInt(hash);




if (hash =="2"){
    var node = "种植采收";
    var step = "种植";
    var pici = "20180424001";
    var info = "宁夏中宁宁安堡种植基地";
    document.getElementById("hash_value").innerHTML = "哈希值: " + "00fb78c6-542f-4aa4-80ff-fa3d7474f615"+hash.substr(3);
    document.getElementById("peer_name").innerHTML = node;
    document.getElementById("link_name").innerHTML = step;
    document.getElementById("batch_name").innerHTML = pici;
    document.getElementById("detail_name").innerHTML = info;
}
else if(hash =="3"){
    var node = "初加工处理";
    var step = "初加工";
    var pici = "20180523001";
    var info = "山东临沂平邑金银花初加工基地";
    document.getElementById("hash_value").innerHTML = "哈希值: " + "2dfa6562-91d5-48f7-8e44-ec529e6a26a5"+hash.substr(3);
    document.getElementById("peer_name").innerHTML = node;
    document.getElementById("link_name").innerHTML = step;
    document.getElementById("batch_name").innerHTML = pici;
    document.getElementById("detail_name").innerHTML = info;

}
else if(hash =="4"){
    var node = "抽样检验";
    var step = "抽样检验";
    var pici = "20180524003";
    var info = "山东药监局";
    document.getElementById("hash_value").innerHTML = "哈希值: " + "d346f791-05b2-42b9-a6dd-05fdadd7fb66"+hash.substr(3);
    document.getElementById("peer_name").innerHTML = node;
    document.getElementById("link_name").innerHTML = step;
    document.getElementById("batch_name").innerHTML = pici;
    document.getElementById("detail_name").innerHTML = info;

}
else if(hash =="5"){
    var node = "初加工处理";
    var step = "初加工";
    var pici = "20180523001";
    var info = "山东临沂平邑金银花初加工基地";
    document.getElementById("hash_value").innerHTML = "哈希值: " + "adc5eca8-98ba-4f7b-b70e-423a456344e0"+hash.substr(3);
    document.getElementById("peer_name").innerHTML = node;
    document.getElementById("link_name").innerHTML = step;
    document.getElementById("batch_name").innerHTML = pici;
    document.getElementById("detail_name").innerHTML = info;
}
else if(hash =="6"){
    var node = "抽样检验";
    var step = "抽样检验";
    var pici = "20180524003";
    var info = "山东药监局";
    document.getElementById("hash_value").innerHTML = "哈希值: " + "b6988e9a-2804-47f7-9884-0addd8f0c4f6"+hash.substr(3);
    document.getElementById("peer_name").innerHTML = node;
    document.getElementById("link_name").innerHTML = step;
    document.getElementById("batch_name").innerHTML = pici;
    document.getElementById("detail_name").innerHTML = info;
}
else if(hash =="6"){
    var node = "种植采收";
    var step = "种植";
    var pici = "20180424001";
    var info = "宁夏中宁宁安堡种植基地";
    document.getElementById("hash_value").innerHTML = "哈希值: " + "a6188db3-4750-4b3e-aa06-7c77c255e834"+hash.substr(3);
    document.getElementById("peer_name").innerHTML = node;
    document.getElementById("link_name").innerHTML = step;
    document.getElementById("batch_name").innerHTML = pici;
    document.getElementById("detail_name").innerHTML = info;
}
else{
    var node = "初加工处理";
    var step = "初加工";
    var pici = "20180523001";
    var info = "山东临沂平邑金银花初加工基地";
    document.getElementById("hash_value").innerHTML = "哈希值: " + "a6decd51-2cf1-45f0-9291-44ca3b99b05b"+hash.substr(3);
    document.getElementById("peer_name").innerHTML = node;
    document.getElementById("link_name").innerHTML = step;
    document.getElementById("batch_name").innerHTML = pici;
    document.getElementById("detail_name").innerHTML = info;
}