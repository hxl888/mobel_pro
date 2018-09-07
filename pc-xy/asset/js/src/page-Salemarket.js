$(function(){
    
        $('.tRop_ul li').on('mouseenter',function(){
            $(this).addClass('active').siblings().removeClass('active');
            $('.nInforBox .tRcont_ul').hide().eq($(this).index()).show();
        })
        $('.theme-top li').click(function(){
            if ($(this).hasClass('active')){
                return false;
            };
            var triSmall = $(this).parent().find('.z-pointer');
            var _left = $(this).position().left+$(this).outerWidth()/2;
            var fItem = $(this).closest('.theme').find('.f-items');
            triSmall.stop().animate({
                left :  _left
            },250)
            $(this).addClass('active').siblings().removeClass('active');
            fItem.find('img.lazy').lazyLoadIndex();
        })
        
        
        
//焦点图-------------------------------------------------------
     var YPURL=$('#imgPath').val();
     var YPapiPath=$('#apiPath').val();
     var PFmainUrl=$('#mainUrl').val();
     var PFinfoPat=$('#infoPath').val();
        $.ajax({
            url: YPapiPath+'cms/dataInfo/floorDate.shtml?menuCode=22&',
            type: "GET", 
            dataType: "jsonp", 
            timeout:5000,
            success:function(data){
                var SaleBaner=data.floorDateInfo.content[1];
                if(SaleBaner !=null && SaleBaner.length>0){
                    var SaleBanTempl='';
                    for(var i=0;i<SaleBaner.length;i++){
                        SaleBanTempl +='<li style="background-image:url('+YPURL+SaleBaner[i].picUrl+');">'
                        SaleBanTempl +=   '<a href="'+SaleBaner[i].picLinkHttp+'" target="_blank"></a>'
                        SaleBanTempl +='</li>'
                    }
                    $('.SaleBaner').html(SaleBanTempl);
                    HtmlSlidePlayer({autosize:0,fontsize:12,time:4000});
                }
            },error:function(){

            }
        });
// 焦点图右侧公告-----------------------------------------------------
    function AnnounFu(URL,Selec){
        $.ajax({
            url: YPapiPath+URL,
            type:'GET',
            dataType:'jsonp',
            success:function(data){
                var announ=data;
                if(announ!=null && announ.length>0){
                    var announTem='';
                    for(var i=0;i<announ.length;i++){
                        announTem += '<li><a href="'+PFmainUrl+announ[i].id+'.shtml">'+announ[i].title+'</a></li>'
                    }
                    $(Selec).html(announTem);

                }
            },error:function(){
            }
        })
    }
    AnnounFu('cms/dataInfo/siteNoticeDate.shtml',tRcontGg);
// 焦点图右侧滚动区域显示设置------------------------------------------
        $.ajax({
            url: YPapiPath+'cms/todayQuotation/queryTodayQuotation.shtml?',
            type:'GET',
            dataType:'jsonp',
            success:function(data){
                var  SrollCon=data.todayQuotationList;
                // console.log(SrollCon)
                if(SrollCon!=null && SrollCon.length>0){
                    var SrollTem='';
                    for(var c=0;c<SrollCon.length;c++){
                        SrollTem += '<li>'
                        SrollTem +=     '<a href="">'
                        SrollTem +=         '<span class="nSpan01">'+SrollCon[c].variety+'</span>'
                        SrollTem +=           '<span class="nSpan02">'+SrollCon[c].region+'</span>'
                        SrollTem +=           '<span class="nSpan03">'+SrollCon[c].price+'</span>'
                        SrollTem +=           '<span class="nSpan04">'+SrollCon[c].createDate.slice(5,10)+'</span>'
                        SrollTem +=      '</a>'
                        SrollTem +='</li>'
                    };
                    $('.pre_godUl').html(SrollTem);
                    // 滚动区域控件调用
                    $('#marqueeT').kxbdSuperMarquee({
                        // 是否自动滚动
                        //isAuto:false,
                        distance:31,
                        time:2,
                        btnGo:{left:'#goL',right:'#goR'},
                        direction:'up'
                    });
                    $('body').on('click','.pre_godUl a',function(){
                        var Variety=$(this).find('.nSpan01').text();
                        var Region=$(this).find('.nSpan02').text();
                        $(this).attr('href',PFinfoPat+'todayQuotation/queryTodayQuotation.shtml?variety='+Variety+'&region='+Region+'&pageType=info');
                    })
                }
            },
            error:function(){}
        })
//水产批发-------------------------------------------------------------
        function FloorCon(num,Selec){
            var _this=$(this);
          $.ajax({
                url: YPapiPath+'cms/dataInfo/floorDate.shtml?menuCode='+num+'&',
                type: "GET", 
                dataType: "jsonp", 
                timeout:5000,
                success:function(data){
                    // console.log(data)
                    var AquaticPro=data.floorDateInfo.content[1];
                    var AquaticTemp='';
                    if(AquaticPro!=null && AquaticPro.length>0){
                            AquaticTemp+='<div class="apuAleft clearfix fl">'
                            AquaticTemp+='<div class="lefTimg fl">'
                            AquaticTemp+=    '<a href="'+AquaticPro[0].picLinkHttp+'"><img class="lazy" src="'+YPURL+AquaticPro[0].picUrl+'" data-original="" alt="" width="210" height="382"></a>'
                            AquaticTemp+='</div>'
                            AquaticTemp+='<div class="image-text clearfix fl">'
                        for(var q=1;q<=4;q++){
                            AquaticTemp+=    '<dl class="fl">'
                            AquaticTemp+=        '<dt><a href="'+AquaticPro[q].picLinkHttp+'"><img class="lazy" src="'+YPURL+AquaticPro[q].picUrl+'" data-original="" alt="" width="191" height="137"></a></dt>'
                            AquaticTemp+=        '<dd class="cinnamon"><a href="'+AquaticPro[q].picLinkHttp+'">'+AquaticPro[q].prodTitle+'</a></dd>'
                            AquaticTemp+=        '<dd class="maney">&yen;'+AquaticPro[q].prodPrice.toFixed(2)+'<span>/'+AquaticPro[q].prodUnit+'</span></dd>'
                            AquaticTemp+=    '</dl>'
                        }
                            AquaticTemp+='</div>'    
                            AquaticTemp+='</div>'
                            AquaticTemp+='<div class="apuAright fl">'
                            AquaticTemp+='<div class="lefTimg fl">'
                            AquaticTemp+=    '<a href="'+AquaticPro[5].picLinkHttp+'"><img class="lazy" src="'+YPURL+AquaticPro[5].picUrl+'" data-original="" alt="" width="210" height="382"></a>'
                            AquaticTemp+='</div>'
                            AquaticTemp+='<div class="image-text clearfix fl">'
                        for(var w=6;w<=9;w++){
                            AquaticTemp+=    '<dl class="fl">'
                            AquaticTemp+=        '<dt><a href="'+AquaticPro[w].picLinkHttp+'"><img class="lazy" src="'+YPURL+AquaticPro[w].picUrl+'" data-original="" alt="" width="191" height="137"></a></dt>'
                            AquaticTemp+=        '<dd class="cinnamon"><a href="'+AquaticPro[w].picLinkHttp+'">'+AquaticPro[w].prodTitle+'</a></dd>'
                            AquaticTemp+=        '<dd class="maney">&yen;'+AquaticPro[w].prodPrice.toFixed(2)+'<span>/'+AquaticPro[w].prodUnit+'</span></dd>'
                            AquaticTemp+=    '</dl>'
                        }
                            AquaticTemp+='</div>'    
                            AquaticTemp+='</div>'
                        $(Selec).html(AquaticTemp); 
                        _this.find("img.lazy").lazyLoadIndex();
                    }
                },error:function(){
                }
          })      
        };
        FloorCon(29,FreshSale);
// 主题市场---------------------------------------------------------------------
    
    $('.theme').remove();//主题市场特色市场隐藏设置==================
        function ThemMarket(num,Selec){
            var _this=$(this);
            $.ajax({
                url: YPapiPath+'cms/dataInfo/floorDate.shtml?menuCode='+num+'&',
                type: "GET", 
                dataType: "jsonp", 
                timeout:5000,
                success:function(data){
                    var MaMarket=data.floorDateInfo.content[1];
                    var MaMarktemp='';
                    if(MaMarket!=null && MaMarket.length>0){
                        MaMarktemp+='<div class="introduce fl">'
                        MaMarktemp+=    '<a href="'+MaMarket[0].picLinkHttp+'"><img class="lazy" src="'+YPURL+MaMarket[0].picUrl+'" alt="" width="474" height="320"></a>'
                        MaMarktemp+=    '<p class="reformCon">'+MaMarket[0].picDesc+'</p>'
                        MaMarktemp+='</div>'
                        for(var e=1;e<MaMarket.length;e++){
                            MaMarktemp+='<div class="intrJbloc fl">'
                            MaMarktemp+=    '<div class="intrJbloctop">'
                            MaMarktemp+=        '<a href="'+MaMarket[e].picLinkHttp+'"><img class="lazy" src="'+YPURL+MaMarket[e].picUrl+'" data-original="" alt="" width="230px" height="200"></a>'
                            MaMarktemp+=        '<p class="industry f-ellipsis">'+MaMarket[e].vendorName+'</p>'
                            MaMarktemp+=    '</div>'
                            MaMarktemp+=    '<div class="fulit">'
                            MaMarktemp+=        '<a href="'+MaMarket[e].picLinkHttp+'"><img src="'+YPURL+MaMarket[e].vendorLogUrl+'" data-original="" alt="" width="100" height="50" class="imAgesone lazy"></a>'
                            MaMarktemp+=        '<p><a href="'+MaMarket[e].picLinkHttp+'">'+MaMarket[e].vendorBusiness+'</a></p>'
                            MaMarktemp+=    '</div>'
                            MaMarktemp+='</div>'
                        }
                        $(Selec).html(MaMarktemp);
                        _this.find("img.lazy").lazyLoadIndex();
                        
                    }
                },error:function(){}
            })
        } 
        /*ThemMarket(32,TemMark);
        //鲜之达---------------------------
        $('body').on('click','.seasons_01',function(){
        	ThemMarket(32,TemMark);
        });
        //四季鲜易--------------------------
        $('body').on('click','.seasons_02',function(){
        	ThemMarket(31,TemMark);
        });*/
//广告墙-----------------------------------------------------------------------------------
		$('.switchover').remove();//广告墙隐藏设置======================
        /*$.ajax({
			url: YPapiPath+'cms/dataInfo/floorDate.shtml?menuCode=30&',
	        type: "GET", 
	        dataType: "jsonp", 
	        timeout:5000,
	        success:function(data){
	        	var LOGORecom=data.floorDateInfo.content[1];
	        	var LOGORecomtem='';
	        	if(LOGORecom!=null && LOGORecom.length>0){
	        		for(var r=0;r<LOGORecom.length;r++){
	        			LOGORecomtem+='<li>'
						LOGORecomtem+=	'<a href="'+LOGORecom[r].picLinkHttp+'"><img src="'+YPURL+LOGORecom[r].picUrl+'" alt="" width="100" height="50"></a>'
						LOGORecomtem+='</li>'
	        		}
	        		$('#marquee ul').html(LOGORecomtem);
                    // 广告墙滚动事件
                    $('#marquee').kxbdSuperMarquee({
                        // 是否自动滚动
                        //isAuto:false,
                        distance:127,
                        time:2,
                        btnGo:{left:'#goL',right:'#goR'},
                        direction:'left'
                    });
	        	}
	        },error:function(){}
		});*/
//特色市场---------------------------------------------------------------------------------------
		/*FloorCon(33,CharMarket);//默认郑州特色显示
		$('body').on('click','.CharZZ',function(){
			FloorCon(33,CharMarket);//郑州特色切换
		});
		$('body').on('click','.CharXC',function(){
			FloorCon(34,CharMarket);//许昌特色切换
		});*/
//1——6楼层总函数设置------------------------------------------------------------------------------
		function Floorfr(num,Selec){
            var _this=$(this);
			$.ajax({
				url: YPapiPath+'cms/dataInfo/floorDate.shtml?menuCode='+num+'&',
		        type: "GET", 
		        dataType: "jsonp", 
		        timeout:5000,
		        success:function(data){
		        	var FlorCon=data.floorDateInfo.content[1];
		        	var FlorTemp='';
		        	if(FlorCon !=null && FlorCon.length>0){
		        		var LisId=FlorCon[0].textTitle.split(',');
		        		// console.log("LisId",LisId);
		        		var LisTxt=FlorCon[0].textDesc.split(',');
						// console.log(LisTxt);
						//左侧内容拼接
		        		FlorTemp+='<div class="grouleft-con fl">'
						FlorTemp+=	'<a href="'+FlorCon[0].picLinkHttp+'"><img class="lazy" src="'+YPURL+FlorCon[0].picUrl+'" data-original="" alt="" width="210" height="261"></a>'
						FlorTemp+=	'<div class="ground-ul ground-ul01">'
						FlorTemp+=		'<ul class="clearfix">'
						for(var y=0;y<LisTxt.length;y++){
							FlorTemp+=	   '<li class="fl"><a href="'+$('#h_searchPath').val()+'list-s1-'+LisId[y]+'-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1.html" target="_blank">'+LisTxt[y]+'</a></li>'
							// console.log(LisTxt[y]);
						}
						FlorTemp+=		'</ul>'
						FlorTemp+=	'</div>'
						FlorTemp+='</div>'
						//中间内容拼接
						FlorTemp+='<dlv class="groundLeft clearfix fl">'
						FlorTemp+=	'<div class="fl imgAgesBox">'
						for(var u=1;u<=6;u++){
                            // console.log(FlorCon[u].picLinkHttp)
							FlorTemp+=	'<a href="'+FlorCon[u].picLinkHttp+'"><img class="lazy" src="'+YPURL+FlorCon[u].picUrl+'" data-original="" alt="" width="330" height="360"></a>'	
						}
						FlorTemp+=	'</div>'
						FlorTemp+=	'<div class="imgAges-content fl">'
						for(var o=1;o<=6;o++){
							FlorTemp+='<p>'
							FlorTemp+=	  '<img class="lazy" src="'+YPURL+FlorCon[o].vendorLogUrl+'" data-original="" alt="" width="100" height="50">'
							FlorTemp+='</p>'
						}
						FlorTemp+=		'<i class="u-icon" style="color:#f06b56">&#xe663;</i>'
						FlorTemp+=	'</div>'
						FlorTemp+='</dlv>'
						//右侧拼接
						FlorTemp+='<div class="groundRight fl clearfix">'
						FlorTemp+=	'<div class="groundall clearfix fl">'
						for(var p=7;p<=12;p++){
							FlorTemp+=		'<div class="aquaticAll fl ">'
							FlorTemp+=			'<a href="'+FlorCon[p].picLinkHttp+'">'
							FlorTemp+=				'<p>'+FlorCon[p].prodTitle+'</p>'
							FlorTemp+=				'<p class="case"><span>&yen;'+FlorCon[p].prodPrice.toFixed(2)+'</span>/'+FlorCon[p].prodUnit+'</p>'
							FlorTemp+=				'<img class="lazy" src="'+YPURL+FlorCon[p].picUrl+'" data-original="" alt="" width="172" height="120">'
							FlorTemp+=			'</a>'
							FlorTemp+=		'</div>'
						}
						FlorTemp+=	'</div>'
						FlorTemp+='</div>'
						$(Selec).html(FlorTemp);
                        _this.find("img.lazy").lazyLoadIndex();
						//中间左侧第一张图片的默认显示
						var ImgAllcou=$('.imgAgesBox img');
						var INdex=0;
						$('.imgAgesBox img').eq(0).css({'display':'block'});
						for(f=0;f<ImgAllcou.length;f++){
							INdex++;
							if(INdex%6==0){
								$('.imgAgesBox img').eq(INdex).css({'display':'block'});
							}
						}
						//中间区域点击切换事件
						// $('.imgAges-content p').on('click',function(){
						// 	var PinIndex=$(this).index();
						// 	$(this).parent().siblings('.imgAgesBox').find('img').eq(PinIndex).show().parent().siblings().find('img').hide();							
						// });
                         
                        // 中间区域小（logo）图片点击红色箭头跟随事件展示
                        $('.imgAges-content p').click(function(){
                            var pointer = $(this).siblings('.u-icon');
                            var _index = $(this).index();
                            var imgAgesBox = $(this).parents('.ground-clob').find('.imgAgesBox > a img');
                            imgAgesBox.hide().eq($(this).index()).show();//中间区域点击切换事件设置
                            pointer.stop().animate({
                                top : _index*60
                            },300)
                            // $("img.lazy").lazyLoadIndex();
                        });
		        	}
		        },error:function(){}
			})
		}
		Floorfr(28,Floor01); // 1楼 肉禽蛋类
		Floorfr(27,Floor02); // 2楼 水产类
		Floorfr(26,Floor03); // 3楼 水果蔬菜
		Floorfr(25,Floor04); // 4楼 粮油干调
		Floorfr(24,Floor05); // 5楼 酒饮茶叶进口食品
		Floorfr(23,Floor06); // 6楼 进口食品

})