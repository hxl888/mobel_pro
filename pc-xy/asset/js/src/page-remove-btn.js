// 55我的订单--------------------------------------

// tab切换
$('.nm-Tabsel .nu-tab').on('click',function(){
  $(this).addClass('ns-colred').siblings().removeClass('ns-colred');
});

// hover物流弹出
function logist(obj,num){
  var oWlfollowBox =obj.find('.nm-WLzz');
  obj.find('.logistError').hide();
  oWlfollowBox.show();
  if (obj.attr('data-added')) {
      oWlfollowBox.find('.bg_loading').hide();
      return false;
  }
  var orderId = obj.attr('data-num');
  
  if (obj.find('.bg_loading').length==0) {
      oWlfollowBox.append('<div class="bg_loading">努力加载中</div>');
  };
  $('.bg_loading').show();
  $.ajax({
      type : 'GET',
      dataType : "jsonp",// 数据类型为jsonp
      timeout: 1000,
      url : $('#h_myPath')+'/orderList/selectLogisticsDate/'+orderId+'shtml',
      success : function(data) {
          var datas = data.logisticsInfo;
          oWlfollowBox.find('.bg_loading').hide();
          var str = '';
          /* str += '<h4>订单号：'+datas.orderId+'</h4>';
          str += '<ul class="z_followStep">' */
          for (var i = 0; i < datas.logisticsItems.length; i++) {
              if (i==0) {
                  str += '<li class="active"><p class="followTip"><i></i>'+datas.logisticsItems[0].context+'</p>';
                  str += '<p class="followTime"><i></i>'+datas.logisticsItems[0].time+'</p></li>';
              }else{
                  str += '<li><p class="followTip"><i></i>'+datas.logisticsItems[i].context+'</p>';
                  str += '<p class="followTime"><i></i>'+datas.logisticsItems[i].time+'</p></li>'
              }
          };
          str += '<li><p class="followTip"><i></i>以上为最新跟踪信息，<a href="${basePath }/orderList/logistics.shtml?orderId='+orderId+'" target="_blank" class="s-orange">查看全部</a></p></li></ul>';
          oWlfollowBox.append(str);
          $(obj).attr('data-added',true)
      },
      error : function(){
          oWlfollowBox.find('.bg_loading').hide();
          if (obj.find('.logistError').length==0) {
              oWlfollowBox.append('<div class="logistError">加载失败，<a href="javascript:;" class="s-red">重新加载</a></div>')
          };
          $('.logistError').show();
      }
  });
}
$('body').on('click','.logistError a',function(){
  var obj = $(this).parents('.f-logist');
  var numId = obj.attr('data-num');
  logist(obj,numId);
})
$('.f-logist').each(function(){
  $(this).mouseenter(function(){
      var numId = $(this).attr('data-num');
      var obj =$(this);
      logist(obj,numId);
  }).mouseleave(function(){
      $(this).find('.nm-WLzz').hide();
  })
})
//物流跟踪展示
   $('.nu-WLzs').on('mouseenter',function(){
    var WLtop =$(this).offset().top;
    var WLpar=$(this).parents().offset().top;
    $(this).parent().find('.nm-WLzz').show().css({'top':WLtop-WLpar+25});
    $('.nu-WLzs').on('mouseleave',function(){
      var _this01=$(this);
      _this01.parent().find('.nm-WLzz').hide();
    })
    $('.nm-WLzz').on('mouseenter',function(){
      var _this=$(this);
      _this.show();
      _this.on('mouseleave',function(){
        //alert();
        _this.hide();
      })
    })
   })
// 59个人中心-------------------------
  $('.nm-nav li').on('click',function(){
      var wid=$(this).width();
      $(this).siblings("li").find('.ns-bored').hide();
      $(this).find('.ns-bored').show().css('width',wid);
      $(this).find('a').addClass('ns-red').parents('li').siblings().find('a').removeClass('ns-red');
  });

// 全选删除设置------------
 $(document).on('click','.opea .nu-rm', function (ev) {
      ev.preventDefault();
      var _thismodal03=$(this);
      $.modal({
        title:  '',
        text: '<div class="example nm-Malert" style="width:270px;">只能删除已取消和已完成订单，确定删除？</div>',
        afterText : '',
        closeBtn: true,
        extraClass : "modal-else",
        buttons: [
          {
            text: '确定',
            btnCls : 'u-btn-red',
            onClick: function() {

            }
          },
          {
            text: '取消',
            btnCls : 'u-btn-white'
          }
        ]
      })
  });  
// 商品订单删除设置
$(document).on('click','.open-3-modal03', function (ev) {
      ev.preventDefault();
      var _thismodal03=$(this);
      $.modal({
        title:  '',
        text: '<div class="example nm-Malert" style="width:270px;">只能删除已取消和已完成订单，确定删除？</div>',
        afterText : '',
        closeBtn: true,
        extraClass : "modal-else",
        buttons: [
          {
            text: '确定',
            btnCls : 'u-btn-red',
            onClick: function() {
                _thismodal03.parent().parent().parent().parent().parent().parent().remove();
            }
          },
          {
            text: '取消',
            btnCls : 'u-btn-white'
          }
        ]
      })
  });
// 倒计时
$(".fnTimeCountDown").each(function() {
    var endTime = $(this).attr("data-endtime");
    var orderId = $(this).attr("data-id");
    var version = $(this).attr("data-version");
    var _this = $(this);
    var sysSecond = endTime*1000;
    setInterval(function(){
        if (sysSecond > 0) {
            sysSecond -= 1000;
            var day = Math.floor((sysSecond /1000/ 3600) / 24);
            var hour = Math.floor((sysSecond /1000/ 3600) % 24);
            var minute = Math.floor((sysSecond /1000/ 60) % 60);
            var second = Math.floor(sysSecond/1000 % 60);
            //var haomiao = Math.floor(sysSecond%1000);
            //_this.find(".day").html(day);//计算天
            _this.find(".hour").html(hour<10?"0"+hour:hour);//计算小时
            _this.find(".minute").html(minute<10?"0"+minute:minute);//计算分
            _this.find(".seconds").html(second<10?"0"+second:second);// 计算秒
            //$("#haomiao").text(haomiao);// 计算秒
            var Hour=_this.find('.hour'),Mint=_this.find('.minute'),Secon=_this.find('.seconds');
        }else{
            var Hempt='';
            Hempt +='<i class="u-icon nu-ic fr open-3-modal03">&#xe605;</i>'
            _this.parent().html(Hempt);

        }
    }, 1000);
}); 
