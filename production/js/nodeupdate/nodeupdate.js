
function summit(){
    var companyType = $('#companyType').val();
    var companyName = $('#companyName').val();
    var creditID = $('#creditID').val();
    var contactAddress = $('#contactAddress').val();
    var phone = $('#phone').val();
    var contacter =$('#contacter').val();
    var file;
}


var find = "SELECT * from company where username = 'user'";
connection.query(find, function(error, results, fields){
    if (error) {
        throw error;
    }
    if (results) {
        for(var i = 0; i < results.length; i++)
        {
            console.log('%s\t%s',results[i].username,results[i].pass_word);
            switch (results[i].company_type){
                case 0: $('#companyType').val('批发市场');break;
                case 1: $('#companyType').val('种植基地');break;
                case 2: $('#companyType').val('生产企业');break;
                case 3: $('#companyType').val('连锁药店');break;
                case 4: $('#companyType').val('批发市场');break;
            }
            $('#companyName').val(results[i].company_name);
            $('#creditID').val(results[i].social_code);
            $('#contactAddress').val(results[i].address);
            $('#phone').val(results[i].phonenumber);
            $('#contacter').val(results[i].contact);
        }
    }
});



