$(function(){
    //////

    // top banner : lee 22. 03. 17 M

    function topBannerHandler() {
       // $('topBanner').hide(); => display:none;
       $('.topBanner').slideUp();
    }
    $('.topBanner .container i').on('click', topBannerHandler);

    $('.visualSlide').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: '    <div class="msLeft"></div>  ',
        nextArrow: '    <div class="msRight"></div> ',
    });

    // 슬라이드 애니메이션
    $('.visualSlide figure').eq(1).addClass('oo');
    $('.visualSlide').on('afterChange', function (e,s,c){
        $('.visualSlide figure').eq(c+1).addClass('oo').siblings().removeClass('oo');
        if (c===1) {
            $('.msLeft').addClass('oo')
        } else {
            $('.msLeft').removeClass('oo')
        }
    });

 
 //동영상
    $('#bgndVideo').YTPlayer({
        videoURL:'https://youtu.be/Wc4ZIVBMvQ8',
        containment:'.movieBg',
        autoPlay:true, 
        mute:true, 
        showControls:false,
    });

    $('.btn i:nth-of-type(1)').on('click', function () {
        $('#bgndVideo').YTPPause()
    });
   // <button onclick="jQuery('#[playerID]').YTPPause()">pause</button>


   $('.btn i:nth-of-type(2)').on('click', function () {
    $('#bgndVideo').YTPPlay()
});
    //<button onclick="jQuery('#[playerID]').YTPPlay()">play</button>



    $('.eProductSlide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
    });

    $('.eventProduct i:nth-of-type(1)').on('click', function() {
        $('.eProductSlide').slick('slickPause')
    });

    $('.eventProduct i:nth-of-type(2)').on('click', function() {
        $('.eProductSlide').slick('slickPlay')
    });

    //

    $('.aproductSlide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        centerMode: true,
    });

    $('.allProduct i:first-child').on('click', function(){
        $('.aproductSlide').slick('slickPrev')
    });

    $('.allProduct i:last-child').on('click', function(){
        $('.aproductSlide').slick('slickNext')
    });


    // 숫자에 따옴표를 주면 숫자가 문자가 되어버린다.

    //어떤 일을 하는 놈들을 함수라 부른다.

    $('.tabMenu li').on('click', function() {
        var idx = $(this).index();
        $(this).addClass('xx').siblings().removeClass('xx');
        $('tabConten>div').eq(idx).addClass('xx').siblings().removeClass('xx')
    });

    $('#link').on('change', function () {
        let linksite = $(this).val();
        if (!linksite) return; //!:부정의 이미 여기서는 링크사이트의 값이 없다면이라는 뜻
        window.open(linksite)
    });

    $('.popup01 button').on('click', function () {
        $(this).parent().hide();
    });


    $('.toTop').on('click', function () {
        $('html, body').animate({
            scrollTop:0
        },500);
        return false;
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 500) {
            $('.toTop').fadeIn(1000);
        }
        else {
            $('.toTop').fadeOut(1000);
        }
    });

    //////
})

