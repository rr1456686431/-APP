$(function() {
    var productId=getSearch('productId');
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getinlanddiscount',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.product').html(template('productTpl',info));
        }
    })
})
