$(function(){
    var titleId = 0;
    render();
    // 导航栏
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
        dataType:'json',
        success:function(info){
            console.log(info);
            $('#wrapper ul').html(template('navTpl',info));
            $('#wrapper ul').on('click','li',function(){
                // console.log(this);
                titleId = $(this).data('titleid');
                // console.log(titleId);
               render();

            })
        }
    })

    function render(){
         // 产品坑,
        // 两个ajax是同步执行的，所以要嵌套，不然无法获取titleId
        
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
            dataType:'json',
            data:{
                titleid :titleId
            },
            success:function(info){
                console.log(info);
                $('.product').html(template('productTpl',info));
    
            }
    
        })

    }






})