      // 57店铺首页---------------
        $('.nm-Rlist').hover(function(){
          $(this).addClass('nm-Rhov').siblings().removeClass('nm-Rhov');
          $(this).find('.nm-imhov').stop().animate({height:'27px'});
        },function(){
          $(this).removeClass('nm-Rhov');
          $(this).find('.nm-imhov').stop().animate({height:'0'});
        });
        // banner区域
        if ($('.nm-titcon').length>0) {
          $('.nm-Hcenter').hover(function(){
            $(this).find('.nm-Hcncom').stop().animate({height:"127px"}).show();
          },function(){
            $(this).find('.nm-Hcncom').stop().animate({height:"0"}).hide();
          })
        } 
        // 悬浮菜单点击样式展现形式
          $('.nm-frshow.nm-frone').css({'display':'block'})
          $('.nm-frh3').on ('click',function(){
            $(this).parent().find('.nm-frshow').css({'display':'block'}).parent().siblings().find('.nm-frshow').css({'display':"none"});
          })
        
            /*//默认 价格 箭头切换
            var num=0;
            $('.nu-mr').css({'background':'#f2423b','color':'#fff'});
            
            $('body').off('click','.nm-Hcx .u-btn');
            
            $('body').on('click','.nm-Hcx .nu-com',function(){
              $(this).parent().find('.nu-mr').find('.u-icon').css({'transform':'rotate(180deg)','top':'0px'});
            });
            $('body').on('click','.nm-Hcx .nu-mr',function(){
              $(this).find('.u-icon').css({'transform':'rotate(0deg)','top':''})
            });
            $('.nm-Hcx .u-btn').find('.u-icon01').css({'color':'#8f8f8f'});
            $('body').on('click','.nm-Hcx .u-btn',function(){
              $(this).find('.u-icon').css({'color':'#fff'}).parent().siblings('.u-btn').find('.u-icon').css({'color':'#8f8f8f'});
              ++num;
              if(num%2!==0){
                $(this).css({'background':'#f2423b','color':'#fff'}).siblings('a').css({'background':'','color':''})
              $(this).find('.u-icon01').css({'transform':'rotate(180deg)','top':'0px',});
              }else{
                $(this).css({'background':'#f2423b','color':'#fff'}).siblings('a').css({'background':'','color':''})
                $(this).find('.u-icon01').css({'transform':'rotate(0deg)','top':''});
               }
            })*/

            // 57遮盖层滑过样式设置(背景透明变不透明)
            $('.nm-imhov').hover(function(){
              $(this).find('p').css({'opacity':'1'});
            },function(){
              $(this).find('p').css({'opacity':''});
            })    