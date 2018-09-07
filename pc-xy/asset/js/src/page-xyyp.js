$(function(){
    var YPURL=$('#imgPath').val();//图片链接前缀
    var YPapiPath=$('#apiPath').val();//url前缀
    var YPhrefPath=$('#itemPath').val();//链接跳转地址前缀
//焦点图展示-------------------------------------------------------------
    function YPBanner(){
        var _this = this;
        this.dataUrl = YPapiPath+'cms/dataInfo/floorDate.shtml';
        this.init = function(){
            _this.addCon();
        };
        this.addCon = function(){
            var jqxhr = $.ajax({
                url: _this.dataUrl+'?menuCode=41&',
                type: "GET", // 默认为GET,你可以根据需要更改
                dataType: "jsonp", // 指定想要的数据类型
                timeout:5000
            });
            jqxhr.done(_this.sucHandler);
            jqxhr.fail(_this.failHandler);
        }
        this.failHandler = function(data){

        };
        this.sucHandler = function(data){
            var content=data.floorDateInfo.content[1];
            // console.log(content);
            if(data==null){
                return;
            }
            // 焦点图
            var Banpic='';
            // alert(YPURL)
            if(content!=null && content.length>0){
                for(var i=0;i<content.length;i++){
                    Banpic +='<li style="background-image:url('+YPURL+content[i].picUrl+');">'
                    Banpic +=   '<a href="'+content[i].picLinkHttp+'" target="_blank"></a>'
                    Banpic +='</li>'
                } 
                $('.FreshYP .bannerWrap').append(Banpic);
            }
            HtmlSlidePlayer({autosize:0,fontsize:12,time:4000});//焦点图插件引用
        }
    }   
        var YPbanr = new YPBanner();
        YPbanr.init();

// 今日特惠--------------------------------------------------------------------------
    $.ajax({
         type: "GET",
         url: YPapiPath+'cms/dataInfo/floorDate.shtml?menuCode=42&',
         dataType: "jsonp",
         success:function(data){
            var JRth=data.floorDateInfo.content[1];
            // console.log('aaaaaaaaaaa',JRth[0]);
            $('.grid_312 img').attr('src',YPURL+JRth[0].picUrl); 
            $('.grid_312 a').attr('href',YPhrefPath+JRth[0].proSku+'.shtml'); 
            
            $('.s_list_01 a:eq(0) img').attr('src',YPURL+JRth[1].picUrl);
            $('.s_list_01 a:eq(0)').attr('href',YPhrefPath+JRth[1].proSku+'.shtml');
            
            $('.s_list_01 a:eq(1) img').attr('src',YPURL+JRth[3].picUrl);
            $('.s_list_01 a:eq(1)').attr('href',YPhrefPath+JRth[3].proSku+'.shtml');
            
            $('.s_list_02 a:eq(0) img').attr('src',YPURL+JRth[2].picUrl); 
            $('.s_list_02 a:eq(0)').attr('href',YPhrefPath+JRth[2].proSku+'.shtml');
            
            $('.s_list_02 a:eq(1) img').attr('src',YPURL+JRth[4].picUrl);
            $('.s_list_02 a:eq(1)').attr('href',YPhrefPath+JRth[4].proSku+'.shtml');
         },error:function(){

         }
    })
 // 特别推荐--------------------------------------------------------------------------
    $.ajax({
         type: "GET",
         url: YPapiPath+'cms/dataInfo/floorDate.shtml?menuCode=43&',
         dataType: "jsonp",
         success:function(data){
            var TBtj=data.floorDateInfo.content[1];
            $('.quoList img').attr('src',YPURL+TBtj[0].picUrl);
            $('.quoList a').attr('href',YPhrefPath+TBtj[0].proSku+'.shtml');
            
         },error:function(){
         }
    })   
// 新鲜快递-----------------------------------------------------------------------
    // 新鲜快递左侧tab切换样式
    $('body').on('click','.tab_txt a',function(){
        $(this).addClass('active').siblings('a').removeClass('active');
    });
    //内容切换
    function FreshEmaill(num){
        $.ajax({
             type: "GET",
             url: YPapiPath+'cms/dataInfo/floorDate.shtml?menuCode='+num+'&',
             dataType: "jsonp",
             success: function(data){
                var FreshEmsCon=data.floorDateInfo.content[1];
                var FreshEmstem='';
                if(FreshEmsCon !=null && FreshEmsCon.length>0){
                    for(var q=0;q<FreshEmsCon.length;q++){
                        FreshEmstem+='<li>'
                        FreshEmstem+=    '<p class="pro_pic">'
                        FreshEmstem+=        '<a href="'+YPhrefPath+FreshEmsCon[q].proSku+'.shtml'+'"><img class="lazy" src="'+YPURL+FreshEmsCon[q].picUrl+'" data-original="" width="140" height="140" alt=""></a>'
                        FreshEmstem+=        '<span class="tit">'+FreshEmsCon[q].vendorName+'</span>'
                        FreshEmstem+=    '</p>'
                        FreshEmstem+=    '<p class="pro_name">'
                        FreshEmstem+=        '<a href="'+YPhrefPath+FreshEmsCon[q].proSku+'.shtml">'+FreshEmsCon[q].prodTitle+'</a>'
                        FreshEmstem+=    '</p>'
                        FreshEmstem+=    '<p class="pro_pri">&yen;'
                        FreshEmstem+=        FreshEmsCon[q].prodPrice.toFixed(2);
                        FreshEmstem+=    '/'+FreshEmsCon[q].prodUnit+'</p>'
                        FreshEmstem+='</li>'
                    }
                    $('.FreshExpress').html(FreshEmstem);
                    $('.xecs_ul li').hover(function(){
                        $(this).find('.tit').stop().animate({bottom:"0"});
                    },function(){
                        $(this).find('.tit').stop().animate({bottom:"-24px"});
                    });
                    
                }
            },error:function(){
            }
        });
    }
    // 肉类蛋禽-----------
    FreshEmaill(45);//预设
    $('body').on('click','.MeatEgg',function(){
        FreshEmaill(45);
    });
    // 海鲜水产-----------
    $('body').on('click','.Seafood',function(){
        FreshEmaill(46);
    });
    // 水果蔬菜-----------
    $('body').on('click','.Fruit',function(){
        FreshEmaill(47);
    });
    // 酒水饮品-----------
    $('body').on('click','.Beverage',function(){
        FreshEmaill(48);
    });
    // 粮油副食-----------
    $('body').on('click','.NonStaple',function(){
        FreshEmaill(49);
    });


// 美食地图--------------------------------------------------------------------
   //左侧地图显示
   $.ajax({
         type: "GET",
         url: YPapiPath+'cms/dataInfo/floorDate.shtml?menuCode=44&',
         dataType: "jsonp",
         success: function(data){
            var FoodMapCon=data.floorDateInfo.content[1];
            // console.log('FoodMapCon',FoodMapCon)
            if(FoodMapCon!=null && FoodMapCon.length>0){
                var FoodMapTemp='';
                // alert(FoodMapCon.length)
                for(var w=0;w<FoodMapCon.length;w++){
                    FoodMapTemp+='<li class="citylis name_city'+w+'" data-lazy="lazyed">'
                    FoodMapTemp+=    '<p class="tab_icon super_bgs"></p>'
                    FoodMapTemp+=    '<p class="name_city">'+FoodMapCon[w].orginName+'</p>'
                    FoodMapTemp+='</li>'
                    // console.log('FoodMapCon[w]22222',FoodMapCon[w].orginName);
                }
                $('.tab_adr').html(FoodMapTemp);
                //美食地图右侧内容
                    //默认展示
                 var CitySelFir=$('.tab_adr').find('.name_city').eq(0).text();
                 // alert(CitySelFir)
                $.ajax({
                         type: "GET",
                         url: YPapiPath+'cms/dataInfo/foodMapDate.shtml?cityName='+CitySelFir,
                         dataType: "jsonp",
                         success:function(data){
                            function FoodMapFu(){
                                var FoodMapCon=data.floorDateInfo.productList;
                                var FoodMapRitem='';
                                for(var e=0;e<FoodMapCon.length;e++){
                                    FoodMapRitem+='<li>'
                                    FoodMapRitem+=     '<p class="pro_pic">'
                                    FoodMapRitem+=         '<a href="'+YPhrefPath+FoodMapCon[e].proSku+'.shtml"><img class="lazy" src="'+YPURL+'product/200/200/'+FoodMapCon[e].mainImgUrl+'" data-original="" width="140" height="140" alt=""></a>'
                                    FoodMapRitem+=         '<span class="tit">'+FoodMapCon[e].vendorName+'</span>'
                                    FoodMapRitem+=     '</p>'
                                    FoodMapRitem+=     '<p class="pro_name">'
                                    FoodMapRitem+=         '<a href="'+YPhrefPath+FoodMapCon[e].proSku+'.shtml">'+FoodMapCon[e].proCategory+'</a>'
                                    FoodMapRitem+=     '</p>'
                                    FoodMapRitem+=     '<p class="pro_pri">&yen;'
                                    FoodMapRitem+=         FoodMapCon[e].prodPrice.toFixed(2);
                                    FoodMapRitem+=     '/'+FoodMapCon[e].prodUnit+'</p>'
                                    FoodMapRitem+='</li>'
                            }
                                $('.FoodMap').html(FoodMapRitem);
                                //左侧地图对应城市，鼠标滑上效果展示 //小图标
                                $('.citylis').hover(function(){
                                    $(this).find('.super_bgs').stop().animate({top:'0'});
                                },function(){
                                    $(this).find('.super_bgs').stop().animate({top:'12px'});
                                });
                                //大图标
                                $('.citylis').hover(function(){
                                    $(this).find('.super_bg').stop().animate({top:'-10px'});
                                },function(){
                                    $(this).find('.super_bg').stop().animate({top:'0'});
                                });
                                // 鼠标移动出现的企业名称动态显示效果展示
                                $('.xecs_ul li').hover(function(){
                                    $(this).find('.tit').stop().animate({bottom:"0"});
                                },function(){
                                    $(this).find('.tit').stop().animate({bottom:"-24px"});
                                });
                                
                            }
                             FoodMapFu(FoodMapCon)
                            // console.log(FoodMapCon)
                         },error:function(){
                         }
                    })
                //点击切换内容
                 $('body').on('click','.tab_adr li',function(){
                    var CitySelec=$(this).find('.name_city').text();
                    $(this).find('.tab_icon').removeClass('super_bgs').addClass('super_bg').closest('.citylis').siblings().find('.tab_icon').removeClass('super_bg').addClass('super_bgs').stop().animate({top:'12px'});
                    $.ajax({
                         type: "GET",
                         url: YPapiPath+'cms/dataInfo/foodMapDate.shtml?cityName='+CitySelec,
                         dataType: "jsonp",
                         success:function(data){
                            function FoodMapFu(){
                                var FoodMapCon=data.floorDateInfo.productList;
                                var FoodMapRitem='';
                                for(var e=0;e<FoodMapCon.length;e++){
                                    FoodMapRitem+='<li>'
                                    FoodMapRitem+=     '<p class="pro_pic">'
                                    FoodMapRitem+=         '<a href="'+YPhrefPath+FoodMapCon[e].proSku+'.shtml"><img class="lazy" src="'+YPURL+'product/200/200/'+FoodMapCon[e].mainImgUrl+'" data-original="" width="140" height="140" alt=""></a>'
                                    FoodMapRitem+=         '<span class="tit">'+FoodMapCon[e].vendorName+'</span>'
                                    FoodMapRitem+=     '</p>'
                                    FoodMapRitem+=     '<p class="pro_name">'
                                    FoodMapRitem+=         '<a href="'+YPhrefPath+FoodMapCon[e].proSku+'.shtml">'+FoodMapCon[e].proCategory+'</a>'
                                    FoodMapRitem+=     '</p>'
                                    FoodMapRitem+=     '<p class="pro_pri">&yen;'
                                    FoodMapRitem+=         FoodMapCon[e].prodPrice.toFixed(2);
                                    FoodMapRitem+=     '/'+FoodMapCon[e].prodUnit+'</p>'
                                    FoodMapRitem+='</li>'
                            }
                                $('.FoodMap').html(FoodMapRitem);
                                $('.xecs_ul li').hover(function(){
                                    $(this).find('.tit').stop().animate({bottom:"0"});
                                },function(){
                                    $(this).find('.tit').stop().animate({bottom:"-24px"});
                                });
                            }
                             FoodMapFu(FoodMapCon);
                             // console.log(FoodMapCon)
                         },error:function(){
                         }
                    })
                })
            }
        },error:function(){
        }
    });
}) 
