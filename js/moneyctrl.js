$(function () {

    var pageid = 0;
    var pages;

    function render(){
        $.ajax({
        
        })
    }


    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getmoneyctrl',
        dataType: 'json',
        data: {
            pageid :pageid
        },
        success: function (info) {
            console.log(info);
            $('.product').html(template('productTpl',info));
           
        }
    })





})