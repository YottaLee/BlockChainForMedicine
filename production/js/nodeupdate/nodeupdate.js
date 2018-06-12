
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
            $('#produceID').val();
        }
    }
});



