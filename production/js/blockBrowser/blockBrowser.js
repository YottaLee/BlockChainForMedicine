ListView();
function ListView() {
    var html =' <table id="datatable-keytable" width="100%" class="table table-striped jambo_table table-bordered">'+'<thead>\n' +
        '                            <tr>\n' +
        '                                <th class="column-title">编号<p>ID</p></th>\n' +
        '                                <th class="column-title">区块<p>block</p></th>\n' +
        '                                <th class="column-title">交易哈希值<p>Data_hash</p></th>\n' +
        '                                <th class="column-title">批次<p>batch</p></th>\n' +
        '                                <th class="column-title">环节<p>link</p></th>\n' +
        '                                <th class="column-title">提交者<p>commiter</p></th>\n' +
        '                                <th>创建时间<p>create_time</p></th>\n' +
        '                            </tr>\n' +
        '                            </thead>';

    $.ajax({
        url: "http://localhost/api/org.onechain.medicine.CollectAsset",
        type: "GET",
        dataType: "json", //指定服务器返回的数据类型
        success: function (data) {
            var list = data;
            html += '<tbody>';
            for (i=0; i<list.length; i++){
                html += '<tr>';
                html = html + '<td>' + list[i].ID +'</td>';
                html = html + '<td>' + list[i].block +'</td>';
                html = html + '<td>' + list[i].hash+"</td>";
                html = html + '<td>' + list[i].batch +'</td>';
                html = html + '<td>' + list[i].link +'</td>';
                html = html + '<td>' + list[i].commiter +'</td>';
                html = html + '<td>' + list[i].time +'</td>';
                html += '</tr>';
            }
            html += '</tbody>';
            html += '</table>';
            document.getElementById("findingList").innerHTML = html;
        }
    });


}













var list; //list
var browerTable = $('#datatable-keytable');
var html = "";
html  += '<thead>\n' +
    '                            <tr>\n' +
    '                                <th class="column-title">编号<p>ID</p></th>\n' +
    '                                <th class="column-title">区块<p>block</p></th>\n' +
    '                                <th class="column-title">交易哈希值<p>Data_hash</p></th>\n' +
    '                                <th class="column-title">前一交易哈希值<p>Previous_hash</p></th>\n' +
    '                                <th class="column-title">批次<p>batch</p></th>\n' +
    '                                <th class="column-title">环节<p>link</p></th>\n' +
    '                                <th class="column-title">提交者<p>commiter</p></th>\n' +
    '                                <th>创建时间<p>create_time</p></th>\n' +
    '                            </tr>\n' +
    '                            </thead>';
html += '<tbody>';
for (i=0; i<list.length; i++){
    html += '<tr>';
    html = html + '<td>' + list[i].ID +'</td>';
    html = html + '<td>' + list[i].block +'</td>';
    html = html + '<td><a href="'+list[i].hash.link +'">'+list[i].hash+"</a></td>";
    html = html + '<span style="word-wrap: break-word;">'+list[i].formerhash+"</span></td>";
    html = html + '<td>' + list[i].batch +'</td>';
    html = html + '<td>' + list[i].link +'</td>';
    html = html + '<td>' + list[i].commiter +'</td>';
    html = html + '<td>' + list[i].time +'</td>';
    html += '</tr>';
}
html += '</tbody>';
browerTable.html(html);

