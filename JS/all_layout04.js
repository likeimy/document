$(function(){
    ///// $('선택').on('이벤트', 할일) /////
    ///// 일==> function 일() {} /////
    // 아래 팝업창끄기 펑션값을 $('.popUp button').on('click', 팝업창끄기); 아래에써도 무관
    
    // $(this) 나
    // $(this).선택(), 선택한 것을 가지고 와라.
    // $(this).index(), //번호
    // $(this).parent(), //부모
    // $(this).next(), //다음것
    // $(this).prev(), //이전것
    // $(this).children(), //자식
    
    function 팝업창끄기() {
        $(this).parent().hide();
        console.log($(this).parent().index())
    }


    $('.popUp button').on('click', 팝업창끄기);
    
})