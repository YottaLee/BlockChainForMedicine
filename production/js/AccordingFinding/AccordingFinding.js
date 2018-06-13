ListView();

function ListView() {

    var str = "<table id=\"datatable-fixed-header\" class=\"table table-striped table-bordered\">\n" +
        "                                    <thead>\n" +
        "                                    <tr>\n" +
        "                                        <th>产品编码</th>\n" +
        "                                        <th>产品名称</th>\n" +
        "                                        <th>生产批次</th>\n" +
        "                                        <th>采购批次</th>\n" +
        "                                        <th>采收地点</th>\n" +
        "                                        <th>加工时间</th>\n" +
        "                                        <th>加工数量</th>\n" +
        "                                        <th>单位</th>\n" +
        "                                        <th>加工工艺</th>\n" +
        "                                        <th>加工地点</th>\n" +
        "                                        <th>车间负责人</th>\n" +
        "                                        <th>销售时间</th>\n" +
        "                                        <th>销售数量</th>\n" +
        "                                        <th>单位</th>\n" +
        "                                        <th>销售地点</th>\n" +
        "                                        <th>销售负责人</th>\n" +
        "                                    </tr>\n" +
        "                                    </thead>\n" +
        "\n" +
        "\n" +
        "                                    <tbody>";
    $.ajax({
        url: "http://localhost/api/org.onechain.medicine.CollectAsset",
        type: "GET",
        dataType: "json", //指定服务器返回的数据类型
        success: function (data) {
            console.log(data);
            var result = data;
            for(var i=0;i<result.length;i++){
                str += "<tr>"
                str += "<td>"+result[i].collectId+"</td>";
                str += "<td>"+result[i].cTime+"</td>";
                str += "<td>"+result[i].cLocal+"</td>";
                str += "<td>"+result[i].temperature+"</td>";
                str += "<td>"+result[i].collectId+"</td>";
                str += "<td>"+result[i].cTime+"</td>";
                str += "<td>"+result[i].cLocal+"</td>";
                str += "<td>"+result[i].temperature+"</td>";
                str += "<td>"+result[i].collectId+"</td>";
                str += "<td>"+result[i].cTime+"</td>";
                str += "<td>"+result[i].cLocal+"</td>";
                str += "<td>"+result[i].temperature+"</td>";
                str += "<td>"+result[i].collectId+"</td>";
                str += "<td>"+result[i].cTime+"</td>";
                str += "<td>"+result[i].cLocal+"</td>";
                str += "<td>"+result[i].temperature+"</td>";
                str += "</tr>";
            }
            str += "</tbody>\n" +
                "                                </table>";
            document.getElementById("findingList").innerHTML = str;
        }
    });
}