var nodeType ="sale";


if(nodeType=="grow"){
    document.getElementById('storage').remove();
    document.getElementById('examine').remove();
    document.getElementById('purchase').remove();
    document.getElementById('produce').remove();
    document.getElementById('sale').remove();
}
else if(nodeType=="produce"){
    document.getElementById('harvest').remove();
    document.getElementById('process').remove();
    document.getElementById('storage').remove();
    document.getElementById('sale').remove();
}
else if(nodeType=="sale"){
    document.getElementById('harvest').remove();
    document.getElementById('process').remove();
    document.getElementById('storage').remove();
    document.getElementById('examine').remove();
    document.getElementById('purchase').remove();
    document.getElementById('produce').remove();
}

