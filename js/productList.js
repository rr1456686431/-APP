$(function () {

    var str = location.search;
    str = decodeURI(str);
    str = str.slice(1);
    var key = str.split('=')[0];
    var value = str.split('=')[1];
    // console.log(key);
    // console.log(value);
    var id = value;
    var pageid = 1;
    var pages;

    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcategorybyid',
        dataType: 'json',
        data: {
            categoryid: id,

        },
        success: function (info) {
            console.log(info);
            $('.nav .left').html(template('listTpl', info))
        }
    })


    function render() {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getproductlist',
            dataType: 'json',
            data: {
                categoryid: id,
                pageid: pageid,

            },
            success: function (info) {
                console.log(info);
                pages = Math.ceil(info.totalCount / info.pagesize)

                var htmlStr = template('productTpl', info);
                $('.product').html(htmlStr);
                // $('#dropDown').html(template('pageTpl'),{
                //     pageid:pageid,
                //     pages:pages
                // })

               
            }
        })
    }
    render()

    // // 点击上一页
    // $('.page1').on('click',function(){
    //     if(pageid==1){
    //         return 
    //     }
    //     pageid--
    //     render()
    // })

    // // 点击下一页
    // $('.page2').on('click',function(){
    //     if(pageid>= pages){
    //         return
    //     }
    //     pageid++
    //     render()
    // })
    // // 下拉变化
    // $('#dropDown').on('change',function(){
    //     pageid = $(this).val()
    //     render()
    // })




})