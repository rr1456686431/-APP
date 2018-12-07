$(function () {


    var pageId = 1;
    var pagesize = 4;
    var productid = 1;

    var img;
    var text;
    var brandtitleid = getSearch('brandTitleid');
    render();
    // 导航
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getbrand',
        dataType: 'json',
        data: {
            brandtitleid: brandtitleid
        },
        success: function (info) {
            console.log(info);

            $('.nav ul').html(template('titleTpl', info));
        }
    })

    // 内容
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getbrandproductlist',
        dataType: 'json',
        data: {
            brandtitleid: brandtitleid,
            pagesize: pagesize
        },
        success: function (info) {
            console.log(info);
            $('.content').html(template('contentTpl', info));

            // 获取文字和图片
            img = $(".content .item:eq(0) img").attr("src");
            text = $(".content .item:eq(0) .info .top").text();
            console.log(img);
            console.log(text);
            render();
        }
    })

    // 产品
    function render() {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getproductcom',
            dataType: 'json',
            data: {
                productid: productid
            },
            success: function (info) {
                if (info) {
                    var result = info.result;
                    result.forEach(function (v, i) {
                        v.text = text;
                        v.img = img;
                    })
                }
                console.log(info);
                $('.product').html(template('productTpl', info));

            }
        })

    }

})