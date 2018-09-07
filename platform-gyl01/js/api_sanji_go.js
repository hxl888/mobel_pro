function onclick(a,b){
            if(b==0){
              return false;
            }else{
              var classes=$(a).attr("class");
              var texts=$(a).html();
              $(".content1 .a_title ul>li").attr("id","");
              $(a).attr("id","highlight");
              $(".content1 .a_theme").children("p:nth-child(3)").html(texts);
              $(".content1 div[class~='public']").css({"display":"none"});
              $(".content1 div[class~="+classes+"]").css({"display":"block"});
            }
        }
        // 三级页面进入对应导航高亮切换 内容切换--------
        var thr_Id=location.search.substr(1)[1];
        $('.nm-public').eq(thr_Id).css({'display':'block'}).siblings('.nm-public').css({'display':'none'});
        $('.storage').eq(thr_Id).attr('id','highlight').siblings('.storage').attr('id','');
        // console.log('thr_Id',thr_Id)
        // 左侧导航切换--------------------------------
        $(".content1 .a_title ul>li").on("click",function(a){
          var index=$(this).index();
          onclick(this,index);
          // 切换三级页面对应的html区域展示----
          $('.nm-public').eq(index-1).css({'display':'block'}).siblings('.nm-public').css({'display':'none'});
          // var oldLocal=window.location.href.split('?')[0];
          // window.location.href=oldLocal+'?='+(index-1);
        });
        $('.storage').each(function(){
          if($(this).attr('id')=='highlight'){
            $('.n-tit-three').text($(this).text())
          }
        });
