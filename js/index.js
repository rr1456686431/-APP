$(function(){

    // 1.给moreBtn注册点击事件。给他后面的兄弟添加more的类，点击切换


    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getindexmenu',
        dataType:'json',
        success:function(info){
            console.log(info);
            // 渲染模板
            var htmlStr = template('navTpl',info);
            $('.nav').html(htmlStr);
            // 给下表为7的a注册点击事件，点击切换类
            // 获取id为7的a
            var more = $('a[data-id="7"]');
            // 给所有a的父亲li添加一个move的类，让他们先隐藏起来
            more.parent().nextAll().addClass('move');
            // 点击切换
            more.on('click' ,function(){               
                $(this).parent().nextAll().toggleClass('move');
   
            })
        }

    })
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrl',
        dataType:'json',
        success:function(info){
            console.log(info)
            var htmlStr = template('productTpl',info);
            $('.product').html(htmlStr);
        }
    })








})