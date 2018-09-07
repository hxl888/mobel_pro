    // 主页浏览器判断start---------------------
        if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0")
        {
         document.getElementsByTagName("body")[0].innerHTML="您的浏览器版本过低，请下载IE9以上版本";
        }
    // 主页浏览器判断end---------------------
    
    //点击事件
    $("#miaodian li").on("click",function(index){
       var inde=(($(this).index())+2)*580;
       $('body,html').animate({scrollTop:inde},500);  
            
   });
    $(".tmzz_ul").on("click","li",function(){
        $(this).addClass("onbg").siblings("li").removeClass("onbg");
        $(this).find("a").addClass("onbg").end().siblings("li").find("a").removeClass("onbg");
    })
    
    //返回顶部
    $(document).ready(function(){  
        $("#go_top").hide();  
        $(function () {  
            //检测屏幕高度  
            var height=$(window).height();  

            //scroll() 方法为滚动事件  
            $(window).scroll(function(){  
                if ($(window).scrollTop()>height){  
                    $("#go_top").fadeIn(500);  
                }else{  
                    $("#go_top").fadeOut(500);  
                }  
            });  
            $("#go_top").click(function(){  
                $('body,html').animate({scrollTop:0},100);  
                return false;  
            });  
        });  
    });

    
   /* $("#s6_ul1").on("mouseover","li",function(){
        $("#s6_st1").css("display","none");
        var idX=$(this).index()*33;
        $("#s6_st1").animate({top:idX},70);
        $(this).addClass("ztbg").siblings("li").removeClass("ztbg");
    }).on("mouseout",function(){
        $("#s6_st1").css("display","none");
        $(this).removeClass("ztbg")
    })
    $("#s6_ul2").on("mouseover","li",function(){
        $("#s6_st2").css("display","block");
        var idX=$(this).index()*33;
        $("#s6_st2").animate({top:idX},70);
        $(this).find("a").addClass("ztbg").end().siblings("li").find("a").removeClass("ztbg");
    }).on("mouseout",function(){
        $("#s6_st2").css("display","none");
        $(this).find("a").removeClass("ztbg")
    })
    $("#s6_ul3").on("mouseover","li",function(){
        $("#s6_st3").css("display","block");
        var idX=$(this).index()*33;
        $("#s6_st3").animate({top:idX},70);
        $(this).find("a").addClass("ztbg").end().siblings("li").find("a").removeClass("ztbg");
    }).on("mouseout",function(){
        $("#s6_st3").css("display","none");
        $(this).find("a").removeClass("ztbg")
    })*/
    
    /*$(".s3_dl dt").on("mouseover",function(){
        $(this).find(".s3_st").css("display","none");
    }).on("mouseout",function(){
        $(this).find(".s3_st").css("display","block");
    })*/
    
    // --------banner控制区域start--------
    var toggle=0;
       setInterval(function(){
         if(toggle==0){
           $(".header div:nth-child(3)").removeClass("ld").addClass("light");toggle++;
         }else if(toggle==1){
           $(".header div:nth-child(3)").removeClass("light").addClass("dark");toggle++;
         }else if(toggle==2){
           $(".header div:nth-child(3)").removeClass("dark").addClass("dl");toggle++;
         }else if(toggle==3){
           $(".header div:nth-child(3)").removeClass("dl").addClass("ld");toggle=0;}},3000
       );

       setTimeout(function(){
         setInterval(function(){
           $(".bgp4").fadeToggle();
             setTimeout(function(){
                $(".bgp4").fadeToggle(); 
             },30);
         },2000);
       },100);
       setTimeout(function(){
         setInterval(function(){
           $(".bgp5").fadeToggle();
             setTimeout(function(){
                $(".bgp5").fadeToggle(); 
             },20);
         },3000);
       },250);
       setTimeout(function(){
         setInterval(function(){
           $(".bgp6").fadeToggle();
             setTimeout(function(){
                $(".bgp6").fadeToggle(); 
             },20);
         },4000);
       },200);
       setTimeout(function(){
         setInterval(function(){
           $(".bgp7").fadeToggle();
             setTimeout(function(){
                $(".bgp7").fadeToggle(); 
             },20);
         },5000);
       },150);

    // --------banner控制区域end--------
    
    


// --------------登陆控制-----  ///
$(".login").on("mouseover",function(){
    $(".hgzt").css("display","block");
}).on("mouseout",function(){
    $(".hgzt").css("display","none");
})
/*$(".dl_right").on("mouseover",function(){
    $(".hgzc").css("display","block");
}).on("mouseout",function(){
    $(".hgzc").css("display","none");
}) */
$(".hyn").on("mouseover",function(){
    $(".hghyn").css("display","block");
})
$(".hghyn").on("mouseover",function(){
    $(this).css("display","block");
}) 
$(".hghyn").on("mouseout",function(){
    $(this).css("display","none");
})   

$(".login").on("click",function(){
    $(".djdl").css("display","block");
})
$(".djdl").on("click","span",function(){
    $(".djdl").css("display","none");
})
    $(".login").on("mouseover",function () {
        $('.djdl').css("display","block");
    })
    $(".login").on("mouseout",function () {
        $('.djdl').css("display","none");
    })
    $(".djdl").on("mouseover",function () {
        $(this).css("display","block");
    })
$(".djdl").on("mouseout",function () {
    $(this).css("display","none");
})
$(".gb").on("click",function(){
  $(".djdl").css("display","none");
})


   /* $('.hynulli a').each(function(index, el){
        $(this).on('click',function(){
            var locaHost=$(el).attr('href');
            if(locaHost.split('?=')){
                $(el).attr('href',locaHost.split('?')[0]+'?='+index);
            }else{
                $(el).attr('href',locaHost+'?='+index);
            }
        })
    });

    //对应的登录显示
    var thr_Id=location.search.substr(1)[1];
    $('.dlz img').eq(thr_Id).css({'display':'block'}).siblings('.dlz img').css({'display':'none'});
    //对应的显示登录
    (function(){
        var loginlis;
        switch (thr_Id){
             case '0':
                 loginlis='客户登录';
              break;
             case '1':
                 loginlis='运营登录';
              break;
             case '2':
                 loginlis='伙伴登录';
               break;
        }
        $('.denglu3').text(loginlis)
    })();*/
    
    /*$('.mapTipList').each(function(){
        $(this).on('mouseover',function(){
            alert()
            var u_allCout=Number($(this).find('.u-allCout').text()),u_Num=Number($(this).find('.u_Num').text()),selWid=$(this).width();
            $(this).find('.jdtwz_1').animate({
                'width': u_Num/u_allCout*selWid
            },5000)
        })
    })*/
   
    $('.jdt_1').each(function () {
                var u_allCout=Number($(this).find('.u-allCout').text()),u_Num=Number($(this).find('.u_Num').text()),selWid=$(this).width();
                $(this).find('.jdtwz_1').css({
                    'width': u_Num/u_allCout*selWid
                },5000)
            })
    

    //验证倒计时
var wait=5;
function time(o){
    if (wait==0) {
        o.removeAttribute("disabled");    
        o.innerHTML="重新获取验证码";
        o.style.backgroundColor="#fe9900";
        wait=60;
    }else{
        o.setAttribute("disabled", true);
        o.innerHTML=wait+"秒后重新获取";
        o.style.backgroundColor="#8f8b8b";
        wait--;
        setTimeout(function(){
            time(o)
        },1000)
    }
}

$(".YZmlis1").click(function(){
    time(this);
});