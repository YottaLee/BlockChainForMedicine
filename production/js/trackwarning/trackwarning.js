ListView();
function ListView() {
    var html ='                                <table id="datatable" class="table table-striped table-bordered">\n'+ '<thead>\n' +
        '                                    <tr>\n' +
        '                                      <th colspan="2"></th>\n' +
        '                                        <th colspan="2" bgcolor="#82FA58"><font color="#FE2E2E">种植</font></th>\n' +
        '                                        <th colspan="2" bgcolor="#FFFFDF"><font color="#080808">采收</font></th>\n' +
        '                                        <th colspan="2" bgcolor="#1ad4e0"><font color="#080808">抽样检验</font></th>\n' +
        '                                        <th colspan="5" bgcolor="#E6CAFF"><font color="#080808">加工炮制</font></th>\n' +
        '                                        <th colspan="4" bgcolor="#FE2E2E"><font color="#080808">销售管理</font></th>\n' +
        '                                    </tr>\n' +
        '                                    <tr>\n' +
        '                                        <th>产品编码</th>\n' +
        '                                        <th>产品名称</th>\n' +
        '                                        <th>种植基地</th>\n' +
        '                                        <th>农药残留</th>\n' +
        '                                        <th>采收批次</th>\n' +
        '                                        <th>采收天气</th>\n' +
        '                                        <th>抽样结果</th>\n' +
        '                                        <th>检验报告</th>\n' +
        '                                        <th>加工时间</th>\n' +
        '                                        <th>加工数量/单位</th>\n' +
        '                                        <th>加工工艺</th>\n' +
        '                                        <th>加工地点</th>\n' +
        '                                        <th>车间负责人</th>\n' +
        '                                        <th>销售时间</th>\n' +
        '                                        <th>销售数量/单位</th>\n' +
        '                                        <th>销售地点</th>\n' +
        '                                        <th>销售负责人</th>\n' +
        '                                    </tr>\n' +
        '                                    </thead>';

    $.ajax({
        url: "http://localhost/api/org.onechain.medicine.CollectAsset",
        type: "GET",
        dataType: "json", //指定服务器返回的数据类型
        success: function (data) {
            var list = data;
            html += '<tbody>';
            for (i=0; i<list.length; i++){
                html += '<tr>';
                html = html + '<td>' + list[i].productCode +'</td>';
                html = html + '<td>' + list[i].productName +'</td>';
                html = html + '<td>' + list[i].growbase +'</td>';
                html = html + '<td>' + list[i].remain +'</td>';
                html = html + '<td>' + list[i].harvestbatch +'</td>';
                html = html + '<td>' + list[i].harvetstweather +'</td>';
                html = html + '<td>' + list[i].examineresult +'</td>';
                html = html + '<td>' + list[i].examinereport +'</td>';
                html = html + '<td>' + list[i].ptime +'</td>';
                html = html + '<td>' + String(list[i].num) +'/'+list[i].productCompany+'</td>';
                html = html + '<td>' + list[i].process +'</td>';
                html = html + '<td>' + list[i].local +'</td>';
                html = html + '<td>' + list[i].leader +'</td>';
                html = html + '<td>' + list[i].saletime +'</td>';
                html = html + '<td>' + list[i].salenumber +'</td>';
                html = html + '<td>' + list[i].saleplace +'</td>';
                html = html + '<td>' + list[i].saleman +'</td>';
                html += '</tr>';
            }
            html += '</tbody>';
            html += '</table>';
            document.getElementById("findingList").innerHTML = html;
        }
    });


}




