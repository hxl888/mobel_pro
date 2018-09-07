$(document).ready(function(){
    var href='.'+window.location.hash.substring(1);
    if(href.length>=2){
        onclick(href);
    }
        
  $(".content1 .a_title ul>li").on("click",function(a){
    var index=$(this).index();
    onclick(this,index);
  });
  // 三级目录点击事件事件local跳转设置---
  //////////
  // 1-订单接口 //
  //////////
  $('.nm-three_id').each(function(index, el){
    $(this).on('click',function(){
      var locaHost=$(el).attr('href');
      $(el).attr('href',locaHost+'?='+index);
    })
  });
  //////////
  // 2-仓储接口 //
  //////////
  $('.nm-three_id_2').each(function(index, el){   
    $(this).on('click',function(){
      var locaHost_2=$(el).attr('href');
      $(el).attr('href',locaHost_2+'?='+index);
    })
  });
  //////////
  // 3-物流接口 //
  //////////
  $('.nm-three_id_3').each(function(index, el){
    $(this).on('click',function(){
      var locaHost_3=$(el).attr('href');
      $(el).attr('href',locaHost_3+'?='+index);
    })
  });
  //////////
  // 4-结算接口 //
  //////////
  $('.nm-three_id_4').each(function(index, el){
    $(this).on('click',function(){
      var locaHost_4=$(el).attr('href');
      $(el).attr('href',locaHost_4+'?='+index);
    })
  });
  //////////
  // 5-物料接口 //
  //////////
  $('.nm-three_id_5').each(function(index, el){
    $(this).on('click',function(){
      var locaHost_5=$(el).attr('href');
      $(el).attr('href',locaHost_5+'?='+index);
    })
  });
});
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
$(window).on("scroll",function(){
    if($(window).scrollTop()>10){
        $(".filex_top").css("display","block");
    }
    if($(window).scrollTop()<=0){
        $(".filex_top").css("display","none");
        
    }
})
        
