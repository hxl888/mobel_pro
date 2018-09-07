
$(function(){
    // 浏览器判断-----------------
    if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0")
    {
     document.getElementsByTagName("body")[0].innerHTML="您的浏览器版本过低，请下载IE9以上版本";
    }
    // 滚动动画
    $(window).on("scroll",function(){
        if($(window).scrollTop()>10){
            $(".filex_top").css("display","block");
            $(".section1_right_ul li").eq(0).find("a").css("display","block");
            $(".section1_right_ul li").eq(1).find("a").css("display","none");
            $(".section1_right_ul li").eq(2).find("a").css("display","none");
            $(".section1_right_ul li").eq(3).find("a").css("display","none");
            $(".section1_right_ul li").eq(4).find("a").css("display","none");
        }
        if($(window).scrollTop()<=0){
            $(".filex_top").css("display","none");
            
        }

        if($(window).scrollTop()>=300){
            $(".section1_left_div1").addClass("animated bounceInLeft");
            $(".section1_left_div2").addClass("animated bounceInLeft");
            $(".section1_left_div2_ul li").addClass("animated fadeIn");
            $(".section1_left_div2_dl").addClass("animated bounceInLeft");
            $(".section1_right_ul li").eq(0).find("a").css("display","none");
            $(".section1_right_ul li").eq(1).find("a").css("display","block");
            $(".section1_right_ul li").eq(2).find("a").css("display","none");
            $(".section1_right_ul li").eq(3).find("a").css("display","none");
            $(".section1_right_ul li").eq(4).find("a").css("display","none");
        }
        if($(window).scrollTop()>=800){
            $(".section2_div_ul li").addClass("animated fadeIn");
            $(".section2_btn").addClass("animated bounceIn");
            $(".section2_div h1").addClass("animated bounceInDown");
            $(".section1_right_ul li").eq(0).find("a").css("display","none");
            $(".section1_right_ul li").eq(1).find("a").css("display","none");
            $(".section1_right_ul li").eq(2).find("a").css("display","block");
            $(".section1_right_ul li").eq(3).find("a").css("display","none");
            $(".section1_right_ul li").eq(4).find("a").css("display","none");
        }
        if($(window).scrollTop()>=1400){
           
            $(".section1_right_ul li").eq(0).find("a").css("display","none");
            $(".section1_right_ul li").eq(1).find("a").css("display","none");
            $(".section1_right_ul li").eq(2).find("a").css("display","none");
            $(".section1_right_ul li").eq(3).find("a").css("display","block");
            $(".section1_right_ul li").eq(4).find("a").css("display","none");
        }
        if($(window).scrollTop()>=1700){
            
            $(".section1_right_ul li").eq(0).find("a").css("display","none");
            $(".section1_right_ul li").eq(1).find("a").css("display","none");
            $(".section1_right_ul li").eq(2).find("a").css("display","none");
            $(".section1_right_ul li").eq(3).find("a").css("display","none");
            $(".section1_right_ul li").eq(4).find("a").css("display","block");
        }   

    })
   $(".section1_right_ul li").on("click",function(index){
       var inde=($(this).index())*590;
       $('body,html').animate({scrollTop:inde},500);  
            
   })
    $("#header_banner_div_bom_ul").on("mouseover","li",function(){
        $(this).find(".chengjing").css({"display":"block"}).end().siblings("li").find(".chengjing").css({"display":"none"});
    })
      $("#header_banner_div_bom_ul").on("mouseout","li",function(){
        $(this).find(".chengjing").css({"display":"none"});
    })
    $(".header_nav_right_ul").on("click","li:even",function(){
        $(this).addClass("onbg").siblings().removeClass("onbg");
        $(this).find("a").addClass("onbg").end().siblings("li").find("a").removeClass("onbg");
    })
    
    
   

        // 随机出现对应点的资讯
        var lis = $("#header_banner_div_bom_ul").find('li');
        var lisArr = [];
        var times = null;
        var lisObj = {
            'bom_ul00' : '商品数据统一管理',
            'bom_ul01' : '推送入库明细数据',
            'bom_ul02' : '仓储、配送温控全程可视化',
            'bom_ul03' : '及时获取实时库存量',
            'bom_ul04' : '订单快速对接',
            'bom_ul05' : '轻松获取仓储盘点结果',
            'bom_ul06' : '推送出库明细数据',
            'bom_ul07' : '配送全程监控',
            'bom_ul08' : '实时获取配送车辆位置数据',
            'bom_ul09' : '账单一目了然'
        };

        function getRandomNum(Min,Max){
            var Range = Max - Min;
            var Rand = Math.random();
            return (Min + Math.round(Rand * Range));
        }

        clearInterval(times);
        times = setInterval(function(){
            var ids = getRandomNum(1,10);
            var htmlstr = '';
            if(ids == 9){
                htmlstr = '<div class="litipsright animated fadeIn">'+lisObj['bom_ul0'+ ids]+'</div>';
            }
            else{
                htmlstr = '<div class="litips animated fadeIn">'+lisObj['bom_ul0'+ ids]+'</div>';
            }

            $("#header_banner_div_bom_ul").find('.litips,.litipsright').remove();
            $("#bom_ul0" + ids).append(htmlstr);
        },2000)
        
        
        
        
       

});
