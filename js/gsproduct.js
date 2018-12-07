$(function(){

    var shopid =0;
    var areaid =0;

    render();
    // nav1
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getgsshop',
        dataType:'json',
        success:function(info){
            console.log(info);
            $('.nav_on').html(template('navTpl',info));


            // 下拉展示
            $('.jd').click(function(){
                // console.log(111);
                $('.nav_form').addClass('active');
                $('.nav_price').addClass('active');
                $('.nav_on').toggleClass('active');

                // 获取
                $('.nav_on').on('click','li',function(){
                    shopid = $(this).data('shopid');
                    // console.log(this);
                    console.log(shopid);

                    // 小勾跟上
                    $('.nav_on').find('i').hide();
                    // $(this)
                    $(this).find('i').show();

                    render();

                    // 修改a的文字
                    var txt = $(this).find("a").text();
                    console.log(txt);
                    $('.jdName').text(txt);

                })

            })
        }
    })

    // nav2
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getgsshoparea',
        dataType:'json',
        success:function(info){
            console.log(info);
            $('.nav_form').html(template('locaTpl',info));

            // 下拉展示
            $('.form').click(function(){
                // console.log(111);
                $('.nav_price').addClass('active');
                $('.nav_on').addClass('active');
                $('.nav_form').toggleClass('active');

                // 获取
                $('.nav_form').on('click','li',function(){
                    areaid = $(this).data('areaid');
                    // console.log(this);  
                    // console.log(areaid);

                     // 小勾跟上
                     $('.nav_form').find('i').hide();
                     // $(this)
                     $(this).find('i').show();

                    render();
                     // 修改a的文字
                     var txt = $(this).find("a").text();
                     console.log(txt);//华东（山东、浙江等）
                    //  需要切割
                    var res = txt.substr(0,2);

                     $('.local').text(res);
                })  

            })
        }
    })

    //nav3
    // 下拉展示
    $('.price').click(function(){
        // console.log(111);
        $('.nav_on').addClass('active');
        $('.nav_form').addClass('active');
        $('.nav_price').toggleClass('active');
    })


    // 产品,封装函数
    function render(){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getgsproduct',
            dataType:'json',
            data:{
                shopid :shopid ,
                areaid :areaid ,
            },
            success:function(info){
                console.log(info);
                $('.product').html(template('productTpl',info));
                
            }
        })

    }



})