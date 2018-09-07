$(function(){
	var YPURL=$('#imgPath').val();//图片链接
    var YPapiPath=$('#apiPath').val();//url前缀
    var YPhrefPath=$('#itemPath').val();//链接跳转地址前缀

    
//  焦点图-------------------------------------------------------------------------
	$.ajax({
		type:"get",
		url: YPapiPath+'cms/dataInfo/floorDate.shtml?menuCode=37&',
		async:true,
		dataType:'jsonp',
		success:function(data){
			var DalyBanCon=data.floorDateInfo.content[1];
			var DalyBantem='';
			if(DalyBanCon!=null && DalyBanCon.length>0){
				for(var i=0;i<DalyBanCon.length;i++){
					DalyBantem+='<li style="background-image: url('+YPURL+DalyBanCon[i].picUrl+');">'
		            DalyBantem+=   '<a href="'+DalyBanCon[i].picLinkHttp+'" target="_blank"></a>'
		            DalyBantem+='</li>'
				}
				$('#Dalidban').html(DalyBantem);
				HtmlSlidePlayer({autosize:0,fontsize:12,time:4000});
			}
		},error:function(){
		}
	});
// 每日爆款\ 每日新品 总函数调用方法设置----------------------------------------------------
	function DalyFlr(num,Selec){
		$.ajax({
			type:"get",
			url:YPapiPath+'cms/dataInfo/floorDate.shtml?menuCode='+num+'&',
			async:true,
			dataType:'jsonp',
			success:function(data){
				var DalyFlrCon=data.floorDateInfo.content[1];
				if(DalyFlrCon!=null && DalyFlrCon.length>0){
					var DalyFlrtem='';
					DalyFlrtem+='<div class="nm-Bigpic">'
					DalyFlrtem+=	'<a href="'+YPhrefPath+DalyFlrCon[0].prodCode+'.shtml" class="fl"><img src="'+YPURL+DalyFlrCon[0].picUrl+'" alt="" width="470" height="310"></a>'
					DalyFlrtem+=	'<p class="vip_p">'
					DalyFlrtem+=		'<span><span class="rmb">&yen;</span>'+DalyFlrCon[0].prodPrice.toFixed(2)+'/'+DalyFlrCon[0].units+'&nbsp;</span>'
					DalyFlrtem+=		'<i>'+DalyFlrCon[0].newPrice.toFixed(2)+'/kg</i>'
					DalyFlrtem+=	'</p>'
					DalyFlrtem+='</div>'
					for(var q=1;q<=3;q++){
	                    DalyFlrtem+='<dl class="bm-intro fl">'
	                    DalyFlrtem+=    '<dt>'
	                    DalyFlrtem+=        '<a href="'+YPhrefPath+DalyFlrCon[q].prodCode+'.shtml"><img src="'+YPURL+'product/200/200/'+DalyFlrCon[q].mainImgUrl+'" alt="" width="200" height="200"></a>'
	                    DalyFlrtem+=   '</dt>'
	                    DalyFlrtem+=    '<dd class="bm-big-cove">'
	                    DalyFlrtem+=	'<a href="'+YPhrefPath+DalyFlrCon[q].prodCode+'.shtml">'
	                    DalyFlrtem+=        '<div class="bm-side-cover">'
	                    DalyFlrtem+=            '<div class="bu-at-once">'
	                    DalyFlrtem+=                '<p>立即尝鲜</p>'
	                    DalyFlrtem+=            '</div>'
	                    DalyFlrtem+=        '</div>'
	                    DalyFlrtem+= 	'</a>'
	                    DalyFlrtem+=    '</dd>'
	                    DalyFlrtem+=    '<dd class="bu-feet"><a href="'+YPhrefPath+DalyFlrCon[q].prodCode+'.shtml">'+DalyFlrCon[q].productName+'</a></dd>'
	                    DalyFlrtem+=    '<dd class="bu-money"><a href="'+YPhrefPath+DalyFlrCon[q].prodCode+'.shtml">&yen;'+DalyFlrCon[q].prodPrice.toFixed(2)+'/'+DalyFlrCon[q].units+'<span>'+DalyFlrCon[q].newPrice.toFixed(2)+'/kg</span></a></dd>'
	                    DalyFlrtem+='</dl>'	
					}
						DalyFlrtem+='<div class="DalyBy">'
					for(var q=4;q<9;q++){
	                    DalyFlrtem+='<dl class="bm-intro fl">'
	                    DalyFlrtem+=    '<dt>'
	                    DalyFlrtem+=        '<a href="'+YPhrefPath+DalyFlrCon[q].prodCode+'.shtml"><img src="'+YPURL+'product/200/200/'+DalyFlrCon[q].mainImgUrl+'" alt="" width="200" height="200"></a>'
	                    DalyFlrtem+=   '</dt>'
	                    DalyFlrtem+=    '<dd class="bm-big-cove">'
	                    DalyFlrtem+=	'<a href="'+YPhrefPath+DalyFlrCon[q].prodCode+'.shtml">'
	                    DalyFlrtem+=        '<div class="bm-side-cover">'
	                    DalyFlrtem+=            '<div class="bu-at-once">'
	                    DalyFlrtem+=                '<p>立即尝鲜</p>'
	                    DalyFlrtem+=            '</div>'
	                    DalyFlrtem+=        '</div>'
	                    DalyFlrtem+=  	'</a>'
	                    DalyFlrtem+=    '</dd>'
	                    DalyFlrtem+=    '<dd class="bu-feet"><a href="'+YPhrefPath+DalyFlrCon[q].prodCode+'.shtml">'+DalyFlrCon[q].productName+'</a></dd>'
	                    DalyFlrtem+=    '<dd class="bu-money"><a href="'+YPhrefPath+DalyFlrCon[q].prodCode+'.shtml">&yen;'+DalyFlrCon[q].prodPrice.toFixed(2)+'/'+DalyFlrCon[q].units+'<span>'+DalyFlrCon[q].newPrice.toFixed(2)+'/kg</span></a></dd>'
	                    DalyFlrtem+='</dl>'	
					}
	                    DalyFlrtem+='</div>'
					$(Selec).html(DalyFlrtem);
			 //每日爆款、每日新品 鼠标滑上效果展示------------------------------------------------
			    $(".bm-side-cover").hide();
			    $(".bm-intro").hover(function(){
			        $(this).find(".bm-side-cover").show();
			    },function(){
			        $(this).find(".bm-side-cover").hide();
			    });
				}
			}
		});
	}
			DalyFlr(38,DalyExplo);// 每日爆款数据加载
			DalyFlr(39,DalyNew);  // 每日新品数据加载
})