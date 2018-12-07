$(function() {


    var productId = getSearch('productId');
    console.log(productId);

    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getdiscountproduct',
        data:{
            // 注意这里是i不是I
            productid:productId,
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.content').html(template('productTpl',info));
            $('.new_com').html(template('newTpl',info));
        }
    })



})