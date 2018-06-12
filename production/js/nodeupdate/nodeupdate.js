
function summit(){
    var companyType = $('#produceID').val();
    var companyName = $('#produceID').val();
    var creditID = $('#produceID').val();
    var contactAddress = $('#produceID').val();
    var phone = $('#produceID').val();
    var contacter =$('#produceID').val();
    var file;
    console.log(companyName);
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



