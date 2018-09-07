$(function(){
    var cityId = cookieJS.getCookie('cyCityId') ? cookieJS.getCookie('cyCityId') : '2';
    //会员等级id
    var gradeId = cookieJS.getCookie('userGrade') ? cookieJS.getCookie('userGrade') : '';
    //加载大宗热卖
    var dzUrl = $("#apiPath").val()+'/index/indexJsonp/jsonp/getBulkProductList.shtml';
	var imgPath=$('#imgPath').val();
 	var YPapiPath=$('#apiPath').val();
 	$.ajax({
    		url: $("#apiPath").val()+'/cms/dataInfo/floorDate.shtml',
    		type: 'POST',
    		dataType: 'jsonp',
    		data : {
				menuCode : 20,
				cityId : cityId
	        },
	        success : function(data){
	        	var str = ''
	        	var _data = data.floorDateInfo[0];
	        	for (var i = 0; i < _data.length; i++) {
	        		str += '<li style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; display: list-item; background-image: url('+imgPath+_data[i].picUrl+'); background-color: #ffe739;">'
	        		str += '<a href="'+_data[i].picLinkHttp+'" target="_blank"></a></li>'
	        	};
 				$('.bannerWrap').html(str);
 				HtmlSlidePlayer({autosize:0,fontsize:12,time:4000});
	        }
 	})
    var floorCount = 1;	
    $('.ajax-floor').each(function(){
    	var dataCode = $(this).attr('data-code');
        if ($(this).hasClass('ajax-floor-false')) {
            $(this).remove();
            $('.floor-smooth'+dataCode).remove();
            return true;
        };
        $(this).find('.xet').addClass('xet_0'+floorCount);
        $(this).find('i.inflr').html(floorCount+'F');
        floorCount ++;
    	var _this = $(this);
    	$.ajax({
    		url: $("#apiPath").val()+'/cms/dataInfo/floorDate.shtml',
    		type: 'POST',
    		dataType: 'jsonp',
    		data : {
				menuCode : dataCode,
				cityId : cityId
	        },
	        success : function(data){
	        	var _data = data.floorDateInfo;
        		var str = '';
        		str += '<div class="xec_main">';
	        	for (var i = 0; i < _data[1].length; i++) {
        			str += '<div class="xec_m">';
        			str += 		'<a href="'+$("#itemPath").val()+_data[1][i].prodCode+'.shtml" target="_blank">';	
        			str += 			'<img class="lazy" src="'+$("#basePath").val()+'/images/lazyPic.png" data-original="'+imgPath+_data[1][i].picUrl+'" width="200" height="255" alt="商品图片">';
        			str += 			'<span class="top-tip01" title="'+_data[1][i].productName+'">'+_data[1][i].productName;
        			str += 			'</span>';
                    if (_data[1][i].vipPrice) {
                        str +=          '<span class="topBok">&yen;'+_data[1][i].vipPrice.toFixed(2)+'/'+_data[1][i].units+'<em>'+_data[1][i].unitPrice+'/kg</em></span>';
                    }else{
        			    str += 			'<span class="topBok">&yen;'+_data[1][i].prodPrice.toFixed(2)+'/'+_data[1][i].units+'<em>'+_data[1][i].unitPrice+'/kg</em></span>';
                    }
        			str += 		'</a>';
        			str += 		'<a href="'+$("#itemPath").val()+_data[2][i].prodCode+'.shtml" target="_blank" class="xec-mDown">';	
        			str += 			'<img class="lazy" src="'+$("#basePath").val()+'/images/lazyPic.png" data-original="'+imgPath+_data[2][i].picUrl+'" width="200" height="165" alt="商品图片">';
        			str += 			'<span class="top-tip01" title="'+_data[2][i].productName+'">'+_data[2][i].productName;
        			str += 			'</span>';
                    if (_data[2][i].vipPrice) {
                        str +=          '<span class="topBok">&yen;'+_data[2][i].vipPrice.toFixed(2)+'/'+_data[2][i].units+'<em>'+_data[2][i].unitPrice+'/kg</em></span>';
                    }else{
        			    str += 			'<span class="topBok">&yen;'+_data[2][i].prodPrice.toFixed(2)+'/'+_data[2][i].units+'<em>'+_data[2][i].unitPrice+'/kg</em></span>';
        			}
                    str += 		'</a>';
        			str += '</div>';
	        	};
	        	str += '</div>';
    			str += '<div class="xec_left">';
    			str += 		'<a href="'+$("#itemPath").val()+_data[0][0].prodCode+'.shtml" target="_blank">';
    			str += 			'<img class="lazy" src="'+$("#basePath").val()+'/images/lazyPic.png" data-original="'+imgPath+_data[0][0].picUrl+'" width="355" height="420" alt="">';
    			str += 			' <span>&yen;'+_data[0][0].prodPrice.toFixed(2)+'/'+_data[0][0].units+'<em>'+_data[0][0].unitPrice+'/kg</em></span>';
    			str += 		'</a>';
    			str += '</div>';
    			str += '<div class="xec_right">';
    			str += 		'<div class="rankList">';
    			str += 			'<h6 class="rankTit">本周热销排行榜TOP3</h6>';
    			str += 			'<div class="rankPro">';
    			str += 				'<ul class="rankUl clearfix">';
    			for (var j = 0; j < _data[4].length; j++) {
	    			str += 					'<li class="clearfix">';
	    			str += 						'<a href="'+$("#itemPath").val()+_data[4][j].prodCode+'.shtml" target="_blank">';
	    			str += 							'<img class="lazy" src="'+$("#basePath").val()+'/images/lazyPic.png" data-original="'+imgPath+_data[4][j].picUrl+'" width="47" height="47" alt="">';
	    			str += 							'<div class="rankItem">';
	    			str += 								'<h5>'+_data[4][j].productName+'</h5>';
	    			str += 								'<p>&yen;'+_data[4][j].prodPrice.toFixed(2)+'/'+_data[4][j].units+'</p>';
	    			str += 							'</div>';
	    			str += 						'</a>';
	    			str += 					'</li>';
    			};
    			str += 				'</ul>';
    			str += 			'</div>';
    			str += 		'</div>';
    			str +=		'<div class="brandList">';
    			str += 			'<a href="'+$("#itemPath").val()+_data[3][0].prodCode+'.shtml" target="_blank">';
    			str += 				'<span class="starPro01" title="'+_data[3][0].productName+'">'+_data[3][0].productName+'</span>';
    			str += 				'<img src="'+imgPath+_data[3][0].picUrl+'" height="150" width="246">';
                if (_data[3][0].vipPrice) {
                    str +=          '<span>&yen;'+_data[3][0].vipPrice.toFixed(2)+'/'+_data[3][0].units+'<em>'+_data[3][0].unitPrice+'/kg</em></span>';
                }else{
    			    str += 			'<span>&yen;'+_data[3][0].prodPrice.toFixed(2)+'/'+_data[3][0].units+'<em>'+_data[3][0].unitPrice+'/kg</em></span>';
    			}
                str += 			'</a>';
    			str += 		'</div>';
    			str += 	'</div>';
    			_this.find('.xec_foor_con').html(str);
    			_this.find("img.lazy").lazyLoadIndex();
			}
    	})
    })


    function loadingdzNormal (data){//加载非阶梯价
        var oOlstr = '';
        oOlstr += '<ol class="clearfix bulkLi bulkLi1">'
        oOlstr += '<li><p><i><span class="rmb">&yen;</span>'+toFloatPrice(data.price)+'/<b class="f14">'+data.units+'</b></i> ';
        oOlstr += '<i class="small" title="'+data.newPrice+'">'+data.newPrice+'</i></li></ol>';
        return oOlstr;
    } 
    function loadLadder(data,boolean){//加载阶梯价  
        var oOlstr1 = '';
        if (boolean) {
            var th_data = data.productPresaleLadder;//预售阶梯价 boolean  true
        }else{
             var th_data = data.productLadder;
        }
        var ladLength = th_data.length;
        oOlstr1 += '<ol class="clearfix bulkLi bulkLi'+ladLength+'">';
        if (ladLength==2) {
            for (var j = 0; j < ladLength; j++) {
                oOlstr1 += '<li><p><i><span class="rmb">&yen;</span>'+toFloatPrice(th_data[j].ladderPrice)+'</i>';
                oOlstr1 += '<i class="small" title="'+th_data[j].initialNumber+'-'+th_data[j].endNumber+data.units+'">'+th_data[j].initialNumber+'-'+th_data[j].endNumber+data.units+'</i> </p></li>';
            };
        }else{
            for (var j = 0; j < ladLength; j++) {
                if (j==ladLength-1) {
                    oOlstr1 += '<li><p><i><span class="rmb">&yen;</span>'+toFloatPrice(th_data[j].ladderPrice)+'</i>';
                    oOlstr1 += '<i class="small" title="&ge;'+th_data[j].initialNumber+data.units+'">&ge;'+th_data[j].initialNumber+data.units+'</i> </p></li>';
                    break;                 
                };
                oOlstr1 += '<li><p><i><span class="rmb">&yen;</span>'+toFloatPrice(th_data[j].ladderPrice)+'</i>';
                oOlstr1 += '<i class="small" title="'+th_data[j].initialNumber+'-'+th_data[j].endNumber+data.units+'">'+th_data[j].initialNumber+'-'+th_data[j].endNumber+data.units+'</i> </p></li>';
            };
        }
        oOlstr1 += '</ol>'
        return oOlstr1;
    }
    function toFloatPrice(price){
        price=parseFloat(price).toFixed(2);
        return price;
    }
    function toW(num){
        num>10000?num=parseFloat(num/10000).toFixed(1)+'万':num;
        return num;
    }
    
    var detailPath = $("#itemPath").val();
    $.ajax({//加载大宗热卖
        url : dzUrl,
        type : "GET",
        dataType : "jsonp",
        data : {cityId:cityId},//cityId
        timeout:5000,
        success : function(data){
            var _data = data.bulkProductList;
            if (_data.length==5) {//5个展示 小于5楼层隐藏
                var dzStr = '';
                for (var i = 0; i < _data.length; i++) { 
                    dzStr += '<li class="bulkulLi"><p class="bulkPic">';
                    dzStr += '<a href="'+detailPath+_data[i].productCode+'.shtml" target="_blank"><img src="'+imgPath+'/product/210/210/'+_data[i].imgurl+'" alt="" width="220" height="220"></a></p>';
                    if (_data[i].isEablePresaleLabber==1) {
                        dzStr += loadLadder(_data[i],true)
                    }else if(_data[i].isPresale==1){
                        dzStr += loadingdzNormal (_data[i])
                    }else if(_data[i].isEableLabber==1){
                        dzStr += loadLadder(_data[i],false)
                    }else{
                        dzStr += loadingdzNormal (_data[i]);
                    };
                    dzStr += '<p class="bulkDes ellipsis">'+_data[i].productName+'</p>';
                    dzStr += '<p class="bulkLabel"><i>生鲜自营</i> <span>起订量: '+_data[i].areaMinorderQuantity+'</span> <span>销量: '+toW(_data[i].totalSaleStr)+'</span></p></li>'
                };
                $('.bulkUl').html(dzStr);
                $('#bulkProList').attr("href",$("#apiPath").val()+"/index/indexJsonp/jsonp/getBulkProList.shtml");
                $('.smoothBulk').stop().fadeIn(300);
                $('.dzfloor .hide').removeClass('hide');
            }else{//加载失败或条件不成立
                $('.dzfloor,.smoothBulk').remove();
            }
            fixedSide();
        },
        error : function(data){
            $('.dzfloor,.smoothBulk').remove();
            fixedSide();
        }
    })
    //加载大宗热卖over
    
    var scrollTime = null;
    var itemPath = $("#itemPath").val();
    function loadingUl (id,data){
      var strList = '<ul class="cyMarList cyMarList'+id+'">';
      for (var i = 0; i < data.length; i++) {
            if (i>=5) {break};//会超过5条  停止拼接
            strList += '<li>';
            strList += '    <p class="Mar_pic"><a target="_blank" href="'+itemPath+data[i].productCode+'.shtml"><img src="'+imgPath+'product/200/200/'+data[i].mainImgUrl+'" alt="" width="220" height="220"></a></p>'
            strList += '    <p class="Mar_des"><a target="_blank" href="'+itemPath+data[i].productCode+'.shtml">'+data[i].productName+'</a></p>'
            strList += '    <p class="Mar_price">';
            if(data[i].pricingType == 1){
                strList += '    <span class="f16"><i class="rmb">&yen;</i>'+data[i].newPrice+'/kg</span>';
            }else{
                strList += '    <span class="f16"><i class="rmb">&yen;</i>'+data[i].price+'/'+data[i].units+'</span>';
            }
            strList += '        <span>'+data[i].newPrice+'/kg</span>';
            strList += '    </p>';
            strList += '</li>';
      };
      strList += '</ul>';
      return strList;
    }
    // 主题市场 Theme Market加载
    var _thisUrl = $("#apiPath").val()+'index/indexJsonp/jsonp/getCateGoryList.shtml';
    var cyMarket_thme = $('.cyMarket_thme');
    var cyMarBox = $('<div class="cyMarListBox"></div>');
    var _htmlTit = '';
  
    $.ajax({
      url : _thisUrl,
      type : "GET",
      dataType : "jsonp",
      data : {cid:"",cityId : cityId,gradeId :gradeId},
      timeout:5000,
      success : function(data){
        var _data = data.recommendList;
        _htmlTit += '<div class="floorSel">';
        if (_data.length==0) { 
          $('.floorlist').remove();
          $('.smoothTheme').remove();
          fixedSide();
          return false ;
        }
        $('.floorlist .xe').fadeIn('300');
        for (var i = 0; i < _data.length; i++) {
          _htmlTit += '<a href="javascript:;" data-categoryId='+_data[i].categoryId+'>'+_data[i].categoryName+'</a>';
        };
        _htmlTit += '</div>';
        cyMarket_thme.append(_htmlTit);
        $('.floorSel a:first').addClass('active').attr('data-loaded',true);
        cyMarBox.html(loadingUl (_data[0].categoryId,_data[0].queyrForList))
        cyMarBox.appendTo(cyMarket_thme);
        fixedSide();
      }
    })
    $('body').on('click','.floorSel a',function(){
      var _this = $(this);
      $(this).addClass('active').siblings().removeClass('active');
      $('.cyMarList').hide();
      $('.cyerror').hide();
      cyMarBox.addClass('cybg-loading');
      var dataId = $(this).attr('data-categoryid');
      if ($(this).attr('data-loaded')) {
          cyMarBox.removeClass('cybg-loading');
          $('.cyMarList'+dataId).show();
          return;
      };
      $.ajax({
        url :  $("#apiPath").val() +'index/indexJsonp/jsonp/getCateGoryProductList.shtml',
        type : "GET",
        dataType : "jsonp",
        data : {cid:dataId,cityId :cityId,gradeId :gradeId},
        timeout:5000,
        success : function(data){
          if(!$('.cyMarList'+dataId).length){
            if (!data.queyrForList) {
              cyMarBox.removeClass('cybg-loading');
              if (!$('.cyerror').length) {
                $('<p class="cyerror"><span>网络异常，</span><a href="javascript:;" class="s-red" data-id="'+dataId+'">点击重新加载。</a></p>').appendTo('.cyMarListBox');
              };
              $('.cyerror').show();
              $('.cyMarList').hide();
              return;
            };
            cyMarBox.append(loadingUl (dataId,data.queyrForList));
          }
          cyMarBox.removeClass('cybg-loading');
          $('.cyMarList'+dataId).show();
          _this.attr('data-loaded',true);
        },
        error : function(){
          cyMarBox.removeClass('cybg-loading');
          if (!$('.cyerror').length) {
            $('<p class="cyerror"><span>网络异常，</span><a href="javascript:;" class="s-red" data-id="'+dataId+'">点击重新加载。</a></p>').appendTo('.cyMarListBox');
          };
          $('.cyerror').show();
          $('.cyMarList').hide();
          return;
        }
      })
    })
    $('body').on('click','.cyerror a',function(){
      $('.floorSel a.active').click();
    })
    // 侧导航
    dataUrl = $("#h_cartPath").val()+'cart/qca.shtml';
    $.ajax({
      url: dataUrl,
      type: "GET", // 默认为GET,你可以根据需要更改
      dataType: "jsonp", // 指定想要的数据类型
      timeout:5000,
      success : function(data){
        $('.buyCart em').html(data.cartNum)
      }
    });
    function fixedSide(){
        var isIE6 = !-[1, ] && !window.XMLHttpRequest;
        var _this = this;
        this.arrLength = function(){
            var arr = [];
            for(var i=0;i<$('.floor').length; i++){
                arr.push(parseInt($('.floor').eq(i).offset().top) + 10);
            };
            return arr;
        };       
        this.scrollTab = function(){
            var Objs = $('.floor');
            var textSt = $(window).scrollTop();
            for (var i = Objs.length-1; i >= 0; i--)
            {
                if (textSt >= $(Objs[i]).offset().top - 150 ){
                    $('.fsFixedTop p.smooth').eq(i).addClass("active").siblings().removeClass('active');
                    $(Objs[i]).find('.xet').addClass("current")
                    break;
                }else{
                    $('.fsFixedTop p.smooth').removeClass("active");
                    $('.floor').find('.xet').removeClass('current');
                }
            }
        };
        this.smoothFn = function(){
            var arr = _this.arrLength();
            $('.fsFixedTop p.smooth').on('click',function() {
                var _th = $(this);
                var index = $('.fsFixedTop p.smooth').index(this);
                var hh = arr[index];
                $("html,body").stop().animate({scrollTop: hh+'px'},300);
                _th.addClass('active').siblings().removeClass('active');
            });
        };

        if(!jQuery.support.boxSizing || isIE6){
            return;
        }else{
            var conTop =  $(".floor").eq(0).offset().top;
            var conBtm = $(".floor:last").offset().top ;
            var t = null;

            $(window).scroll(function(){
                clearTimeout(t);
                t = setTimeout(scrtFn,100);
            });

            function scrtFn(){
                var scrt = $(window).scrollTop();
                if(scrt > conTop&& conBtm>scrt){
                    $(".fsFixedTopContent").show("fast",function(){
                        $(".fsFixedTop").css({
                            "-webkit-transform": "scale(1)",
                            "-moz-transform": "scale(1)",
                            "transform": "scale(1)",
                            "opacity": "1"  
                        });
                    }).css({
                        "visibility": "visible"
                    });  
                }else{
                    $(".fsFixedTop").css({
                        "-webkit-transform": "scale(1.2)",
                        "-moz-transform": "scale(1.2)",
                        "transform": "scale(1.2)",
                        "opacity": "0"  
                    });

                    $(".fsFixedTopContent").css({
                        "visibility": "hidden"
                    }); 
                }
                /****/
                _this.scrollTab();
            }

            _this.smoothFn();
            
            $('.backTotop').click(function(){
                $("html,body").stop().animate({scrollTop: 0},400);
            })      
        };
    };
})
