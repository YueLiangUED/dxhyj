(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/720+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //tab切换
    function tab($selector){
        var $lis = $selector.find('li');
        $lis.on('click',function (){
            var $index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active').end().parent().parent().nextAll('div').eq($index).addClass('bg').siblings('div').removeClass('bg');
        });
    }
    $.each($('#tab'),function (){
        tab($(this));
    });
    //链接
    //1300以下
    $('#btn1-1').on('click',function () {
        window.location.href = '';
    });
    $('#btn1-2').on('click',function () {
        window.location.href = '';
    });
    $('#btn1-3').on('click',function () {
        window.location.href = '';
    });
    $('#btn1-4').on('click',function () {
        window.location.href = '';
    });
    $('#btn1-5').on('click',function () {
        window.location.href = '';
    });
    //1300-2500
    $('#btn2-1').on('click',function () {
        window.location.href = '';
    });
    $('#btn2-2').on('click',function () {
        window.location.href = '';
    });
    $('#btn2-3').on('click',function () {
        window.location.href = '';
    });
    $('#btn2-4').on('click',function () {
        window.location.href = '';
    });
    $('#btn2-5').on('click',function () {
        window.location.href = '';
    });
    //2500-5000
    $('#btn3-1').on('clcik',function () {
        window.location.href = '';
    });
    $('#btn3-2').on('clcik',function () {
        window.location.href = '';
    });
    $('#btn3-3').on('clcik',function () {
        window.location.href = '';
    });
    $('#btn3-4').on('clcik',function () {
        window.location.href = '';
    });
    $('#btn3-5').on('clcik',function () {
        window.location.href = '';
    });
    //5000以上
    $('#btn4-1').on('click',function () {
        window.location.href = '';
    });
    $('#btn4-2').on('click',function () {
        window.location.href = '';
    });
    $('#btn4-3').on('click',function () {
        window.location.href = '';
    });
    $('#btn4-4').on('click',function () {
        window.location.href = '';
    });
    $('#btn4-5').on('click',function () {
        window.location.href = '';
    });

});
