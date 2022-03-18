$(function(){
    //////

    // top banner : lee 22. 03. 17 M

    function topBannerHandler() {
       // $('topBanner').hide(); => display:none;
       $('.topBanner').slideUp();
    }
    $('.topBanner .container i').on('click', topBannerHandler);

    $('.visualSlide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
    });

    $('.eProductSlide').slick({
        arrows: false,
        autoplay: true,
    })

    //////
})