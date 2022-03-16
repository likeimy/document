$(function(){
    /////
    // eq = nth-child
    // var : 변수

    function tapMenu() {
        var idx = $(this).index();
        $('.tabLink li').removeClass('active');
        $(this).addClass('active');
        $('.tabContent>div').removeClass('active');
        $('.tabContent>div').eq(idx).addClass('active');
        // $('.tabContent>div').eq(idx).addClass('active').siblings().removeClass('active');
    }

    $('.tapLink li').on('click', tapMenu);

    $('.xi-close').on('click', function(){
        $('.headerWrap').slideToggle();
    })
    
    /////
})