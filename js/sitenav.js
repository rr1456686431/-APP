$(function(){

    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getsitenav',
        dataType:'json',
        success:function(info){
            console.log(info);
            $('.nav').html(template('navTpl',info));
        }
    })





})