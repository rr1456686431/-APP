$(function(){

    var productId = getSearch('productId' );


    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
        dataType:'json',
        data:{
            productid :productId
        },
        success:function(info){
            console.log(info);
            $('.content').html(template('productTpl',info));
            $('.new_com').html(template('newTpl',info));
        }
    })
















})