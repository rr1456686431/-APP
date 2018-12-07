$(function(){

    var couponid = getSearch('couponId');
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcouponproduct',
        datatype:'json',
        data:{
            couponid:couponid
        },
        success:function(info){
            console.log(info);
            $('.product').html(template('productTpl',info));
            $('.swiper-wrapper').html(template('bannerTpl',info));
            // 获取动态添加的id=btn
            // 添加点击事件，弹出模态框
            // $('.box').hide();
            $('.product').on('click','i',function(){
                console.log(111);
                

                $('.box').addClass('show');
                
            })
        }
    })


})