$(document).ready(function(){
    $(window).scroll( function() {               //滚动时触发
        var top = $(document).scrollTop();       //获取滚动条到顶部的垂直高度
        if(top > 100){                           //到一定高度显示
            var height = $(window).height();     //获得可视浏览器的高度
            $("#back-to-top").fadeIn(300).css({
                top: height-80
            });
        }
        if(top < 100){                            //小于100消失
            $("#back-to-top").fadeOut(200);
        }
    });
    /*点击回到顶部*/
    $('#back-to-top').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});//这是backtotop的js