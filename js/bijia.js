$(function () {



    // ?categoryid=0&productid=0
    var categoryid = getSearch("categoryid");
    console.log(categoryid);
    var productid = getSearch("productid");
    console.log(productid);

    // 导航
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getproduct',
        dataType: 'json',
        data: {
            productid: productid
        },
        success: function (info) {
            console.log(info);
            var htmlStr = template('productTpl', info);
            $('.product_name').html(htmlStr);
            $('#price').html(template('price_tmp',info));
        }
    })


    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getproductcom',
        dataType: 'json',
        data: {
            productid: productid
        },
        success: function (info) {
            console.log(info);
            var htmlStr = template('comTpl', info);
            $('#com').html(htmlStr);
        }
    })


})