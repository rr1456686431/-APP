// 1.获取数据渲染页面
// 2.下拉框

$(function () {
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcategorytitle',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            // 渲染模板
            var htmlStr = template('topTpl', info);
            $('#category').html(htmlStr);
            // 注册点击事件
            $('#category ').on('click', 'a', function () {
                // console.log(1);
                var id = $(this).data('id');
                console.log(id);
                var content = $(this).next();
                $(this).next().toggleClass('move');
                var son = $(this).next(son);
                // 发送请求
                $.ajax({
                    type: 'get',
                    url: 'http://127.0.0.1:9090/api/getcategory',
                    dataType: 'json',
                    data: {
                        titleid: id
                    },
                    success: function (info) {
                        console.log(info);
                        // 渲染模板

                        var htmlStr = template('cate_tmp', info);
                        $(son).html(htmlStr);
                    }
                })
            })


        }
    })

})