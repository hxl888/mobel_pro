$(function(){
    // 为您推荐
    $(".m-slidebase").on('mouseenter',function(){
        var len = $(".m-slidebase").find("ul li").length;
        if(len < 5) return;
        $(".m-slidebase").find('.prev').stop(true,false).animate({
            left : 0
        },100);
        $(".m-slidebase").find('.next').stop(true,false).animate({
            right : 0
        },100);
    }).on('mouseleave',function(){
        var len = $(".m-slidebase").find("ul li").length;
        if(len < 5) return;
        $(".m-slidebase").find('.prev').stop(true,false).animate({
            left : -40
        },100);
        $(".m-slidebase").find('.next').stop(true,false).animate({
            right : -40
        },100);
    });
    
    $(".m-slidebase").slide({ 
        mainCell:"ul", //滚动容器
        effect:"leftLoop",
        vis:5, //初如显示个数
        scroll:2, // 滚动个数,
        delayTime : 210,
        autoPage:true,
        switchLoad:"_src" //滚动加载图片
    });
})
