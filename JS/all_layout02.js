$(function(){
    //
    
    // var left = 1; /* 변수 */

    // function mainSlide() {
    //     $('.mainSlide').css({left:-(left*100)+"%"});
    //     left=left+1;
    //     if(left===3) {left=0}
    // }

    // setInterval(mainSlide,2000)


    $('.mainSlide').slick({
        arrows:false, //화살표의 유무.
        autoplay:true, //자동으로 돌아가게 만든다.
        autoplaySpeed:2000, //속도
        dots:true, //
    });

    $('.mainVisual .slideArrows i:first-child').on('click',function(){
        $('.mainSlide').slick('slickPrev')
    });
    $('.mainVisual .slideArrows i:last-child').on('click',function(){
        $('.mainSlide').slick('slickNext')
    });
    
});