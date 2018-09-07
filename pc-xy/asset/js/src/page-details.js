
//放大镜插件aaa
(function(b){function c(e){for(var d=1;d<arguments.length;d++){e=e.replace("%"+(d-1),arguments[d])}return e}function a(o,s){var p=b("img",o),A,z,k=null,j=null,B=null,y=null,n=null,i,x=0,h,q,e=0,d=0,v=0,u=0,m=0,f,l,t,r,w=this,C;setTimeout(function(){if(j===null){var D=o.width();o.parent().append(c('<div style="width:%0px;position:absolute;top:75%;left:%1px;text-align:center" class="cloud-zoom-loading" >Loading&hellip;</div>',D/3,(D/2)-(D/6))).find(":last").css("opacity",0.5)}},200);var g=function(){if(n!==null){n.remove();n=null}};this.removeBits=function(){if(B){B.remove();B=null}g();b(".cloud-zoom-loading",o.parent()).remove()};this.destroy=function(){o.data("zoom",null);if(j){j.unbind().remove();j=null}if(k){k.remove();k=null}this.removeBits()};this.fadedOut=function(){if(k){k.remove();k=null}this.removeBits()};this.controlLoop=function(){if(B){var D=(t-p.offset().left-(h*0.5))>>0,E=(r-p.offset().top-(q*0.5))>>0;if(D<0){D=0}else{if(D>(p.outerWidth()-h)){D=(p.outerWidth()-h)}}if(E<0){E=0}else{if(E>(p.outerHeight()-q)){E=(p.outerHeight()-q)}}B.css({left:D,top:E});B.css("background-position",(-D)+"px "+(-E)+"px");e=(((D)/p.outerWidth())*i.width)>>0;d=(((E)/p.outerHeight())*i.height)>>0;v+=(e-v)/s.smoothMove;u+=(d-u)/s.smoothMove;k.css("background-position",(-(v>>0)+"px ")+(-(u>>0)+"px"))}x=setTimeout(function(){w.controlLoop()},30)};this.init2=function(D,E){m++;if(E===1){i=D}if(m===2){this.init()}};this.toggleActive=function(){if(l){j.attr("title","点击图片看大图");if(y){y.text("Start Zoom").parent().removeClass("active")}if(B){j.trigger("mouseleave")}}else{j.attr("title","");if(y){y.text("Stop Zoom").parent().addClass("active")}}l=l?false:true};this.init=function(){b(".cloud-zoom-loading",o.parent()).remove();j=o.parent().append(c("<div class='mousetrap' style='background-image:url(about:blank);z-index:999;position:absolute;width:%0px;height:%1px;left:%2px;top:%3px;'></div>",p.outerWidth(),p.outerHeight(),0,0)).find(":last");l=s.activeOnStart;if(s.clickToActivate){if(s.addToggle){if(b(".zoom-toggle a",o.parent()).length>0){y=b(".zoom-toggle a",o.parent())}else{y=o.parent().append('<div class="zoom-toggle"></div>').find(".zoom-toggle a").first()}if(l){y.parent().removeClass("active").addClass("active")}else{y.parent().removeClass("active")}y.bind("click",function(D){D.preventDefault();w.toggleActive()})}j.bind("click",this,function(D){w.toggleActive();if(!B){j.trigger("mousestop")}});b(".btn_dj").bind("click",this,function(D){w.toggleActive();if(!B){j.trigger("mousestop")}})}j.bind("mousemove",this,function(D){t=D.pageX;r=D.pageY;if(f){clearTimeout(f)}}).bind("mouseleave",this,function(D){if(k&&l){b(D.target).removeData("mousestop");clearTimeout(x);if(f){clearTimeout(f)}if(B){B.fadeOut(299)}k.fadeOut(300,function(){w.fadedOut()});j.css("cursor","pointer")}}).bind("mouseenter",this,function(D){t=D.pageX;r=D.pageY;C=D.data}).bind("mousemove",this,function(D){t=D.pageX;r=D.pageY;if(!k&&l){clearTimeout(f);f=setTimeout(function(){b(D.target).trigger("mousestop")},s.mousestopDelay)}}).bind("mousestop",this,function(I){if(f){clearTimeout(f)}if(k){k.stop(true,false);k.remove()}if(B){B.remove();B=null}var H=s.adjustX,D=s.adjustY,E=p.outerWidth(),L=p.outerHeight(),J=s.zoomWidth,G=s.zoomHeight;if(s.zoomWidth=="auto"){J=E}if(s.zoomHeight=="auto"){G=L}var K=o.parent();switch(s.position){case"top":D-=G;break;case"right":H+=E;break;case"bottom":D+=L;break;case"left":H-=J;break;case"inside":J=E;G=L;break;default:K=b("#"+s.position);if(!K.length){K=o;H+=E;D+=L}else{J=K.innerWidth();G=K.innerHeight()}}k=K.append(c('<div id="cloud-zoom-big" class="cloud-zoom-big" style="display:none;position:absolute;left:%0px;top:%1px;width:423px;height:%3px;background-image:url(\'%4\');z-index:9999;"></div>',H,D,J,G,i.src)).find(":last");if(p.attr("title")&&s.showTitle){k.append(c('<div class="cloud-zoom-title">%0</div>',p.attr("title"))).find(":last").css("opacity",s.titleOpacity)}if(b.browser.msie&&b.browser.version<7){n=b('<iframe frameborder="0" src="#"></iframe>').css({position:"absolute",left:H,top:D,zIndex:99,width:J,height:G}).insertBefore(k)}k.fadeIn(500);h=(p.outerWidth()/i.width)*k.width();q=(p.outerHeight()/i.height)*k.height();B=o.append(c("<div class='cloud-zoom-lens' style='display:none;z-index:98;position:absolute;width:%0px;height:%1px;'></div>",h,q)).find(":last");j.css("cursor",B.css("cursor"));var F=false;if(!F){B.css("opacity",s.lensOpacity)}if(s.position!=="inside"){B.fadeIn(500)}C.controlLoop()})};A=new Image();b(A).load(function(){w.init2(this,0)});A.src=p.attr("src");z=new Image();b(z).load(function(){w.init2(this,1)});z.src=o.attr("href");return}b.fn.CloudZoom=function(d){try{document.execCommand("BackgroundImageCache",false,true)}catch(f){}this.each(function(){b(this).css({position:"relative",display:"block"});b("img",b(this)).css({display:"block"});if(!b(this).parent().hasClass("cloud-wrap")){b(this).wrap('<div class="cloud-wrap" style="top:0;z-index:100;position:relative;"></div>')}var e=b.extend({},b.fn.CloudZoom.defaults,d);b(this).data("zoom",new a(b(this),e))});return this};b.fn.CloudZoom.defaults={zoomWidth:430,zoomHeight:"auto",position:"right",lensOpacity:0.5,smoothMove:10,showTitle:false,titleOpacity:0,adjustX:12,adjustY:-1,mousestopDelay:5,activeOnStart:true,addToggle:false,clickToActivate:false}})(jQuery);

$(function(){
	// Path取值
	var detInitConfig = {
		productCode : $('#productCode').val(),
		categoryId : $('#categoryId').val(),
		units : $("#units").val(),
		imgPath: $("#imgPath").val(), // 'http://qa-pic.xebest.com/'
		myPath: $("#myPath").val(),
		basePath : $("#basePath").val(), // 'http://qa-misc.cy.xebest.com/new_cy/'
		itemPath : $("#itemPath").val(), //'http://qa-detail.xebest.com/'
		mainUrl: $("#mainUrl").val(),
		productInfoType : $("#productInfoType").val(),
		h_myPath : $("#h_myPath").val(),
		apiPath : $("#apiPath").val()
	};


	// 小图切换
	function smallPic(){
		if (!$('#carousel')[0]){
			return;
		}

		var i = 0,
			p = $('#carousel ul'),
			pList = $('#carousel ul li'),
			len = pList.length;
		var elePrev = $('#dis_prev'), eleNext = $('#dis_next');
		//var firstClick = false;
		var w = 70, num = 5;
		p.css('width',w*len);
		if (len <= num){
			eleNext.addClass('dis_gray');
		}else{
			eleNext.removeClass('dis_gray');
		}
		function prev(){
			if (elePrev.hasClass('dis_gray')) {
			//alert('已经是第一张了');
				return;
			}
			p.animate({
				marginLeft:-(--i) * w
			},500);
			if (i < len - num) {
				eleNext.removeClass('dis_gray');
			}
			if (i == 0) {
				elePrev.addClass('dis_gray');
			}
		}
		function next(){
			if (eleNext.hasClass('dis_gray')) {
				//alert('已经是最后一张了');
				return;
			}
			//p.css('margin-left',-(++i) * w);
			p.animate({
				marginLeft:-(++i) * w
			},500);
			if (i != 0) {
				elePrev.removeClass('dis_gray');
			}
			if (i == len - num) {
				eleNext.addClass('dis_gray');
			}
		}
		elePrev.bind('click',prev);
		eleNext.bind('click',next);
		pList.each(function(n,v){
			$(this).click(function(){
				if(n-i == (num-1)){
					next();
				}
				if(n-i == 0){
					prev()
				}
				$('#carousel ul li.cur').removeClass('cur');
				$(this).addClass('cur');
				//console.log(n)
				// show(n);
			})
		});
	}

	smallPic();

	// $(".items li:first").addClass("active");
	$('a.cloud-zoom').CloudZoom();
	$('.es-carousel').on("click", ".items a" ,function(e) {
		$(this).parent().addClass("active").siblings().removeClass("active")
		if ($(this).attr('href') && $(this).attr("rel")) {
			e.preventDefault();
			var mainImgSrc = $(this).attr('href'); //大图
			var zoomedImgSrc = $(this).attr("rel"); //中图
			var mainImgAlt = $(this).find('img').attr('alt');
			$('.cloud-zoom').attr('href', mainImgSrc);
			$('#main-prod-img').attr('src', zoomedImgSrc).attr('alt', mainImgAlt);
		}
		// Init cloud zoom
		$('.cloud-zoom').siblings().each(function() {
			if ($(this).hasClass('mousetrap'))
				$(this).empty().remove();
		});
		$('a.cloud-zoom').CloudZoom();
	});

	$(".details_main").css("visibility","inherit");

	var stop = $('.det_right_con').offset().top;
	$("body").delegate("#dis_tabBtn li:not('.moveli')","click",function(event){
		event.preventDefault();
		var thisWidth = $(this).outerWidth();
		var thisLeft = $(this).position().left;
		var moveBlock = $("#dis_tabBtn").find(".moveli");
		$("#dis_tabBtn li").removeClass("active")
		$(this).addClass("active")
		moveBlock.stop(true).animate({
			width : thisWidth,
			left : thisLeft
		}, 200);

		var plid = $(this).attr("data-plid");
		//$(".dis_total").addClass("details_loading_bg");
		//$(".dis_total,.pagingCons01").html("");
		new addDisContent().clickFn($(this),1,plid);

	}).delegate('.fixed_nav_ul li', 'click', function(event) {
		var index = $(".fixed_nav_ul li:not('.active_dis')").index($(this));
		//console.log(index)
		$(".fixed_nav_ul li").removeClass("active").find("span").css("border-color" ,"#fff");
		$(this).addClass("active");
		if(!(index < 0)){
			$(".det_tabFn").removeClass('show').eq(index).addClass('show');
		}else{
			$(".det_tabFn").removeClass('show')
		}
		if($(this).hasClass("active_sold")){
			$(".det_dis").hide();

			/*if($(".active_sold").attr("data-loads") == "loaded"){
				return;
			}*/

			new addSoldMsg();

		}else{
			$(".det_dis").show()
		}
		$(this).prev().find("span").css("border-color" ,"#d6d6d6");

		$(".details_main").css("visibility","visible");

		$("body,html").stop(true).animate({scrollTop: stop},400);
	});

	// 加入购物车动画
	var myinqAni = {
		myinq : function (obj){
			return $(obj);
		},
		init : function(_this,target,callback){
			var obj = this.myinq(target);
			var _that = _this;
			var myinqX = obj.offset().left + (obj.width()/2);
			var myinqY = obj.offset().top + (obj.height()/2);
			var _thisX = _that.offset().left,
				_thisY = _that.offset().top;
			var str = $("<div class='inqAni'></div>");
			var thisImg = $(".es-carousel").find('li.cur').find('img').attr("src");
			str.append("<img src='"+thisImg+"'>").css({
				"left" : _thisX,
				"top" : _thisY+20,
				"opacity":0
			}).stop(true).animate({
				"left" : _thisX,
				"top" : _thisY - (_that.outerHeight()*2),
				"opacity":.9
			},1000,'easeInOutBack',function(){
				str.stop(true).animate({
					"left" : myinqX,
					"top" : myinqY,
					"width" : 10,
					"height" : 10,
					"opacity" : .2
				},800,function(){
					str.remove();
					callback && callback();
				});
			});
			$("body").append(str);
		}
	};

	$("body").on("click",".tocart_btn:not(.det_abtn_disabled)",function(event){
		event.preventDefault();
		if($(this).attr("data-sends")=="sended"){
			return;
		};
		$(this).attr("data-sends","sended");
		myinqAni.init($(this),".vm-mct-cart",function(){});
		addCart();
	});

	// 跟随
	$(window).on("scroll",function(){
		var st = $(window).scrollTop();
		navBarFixed(st)
	});

	// 评价切换
	var detop = $(".det_fixed_nav").offset().top;

	function navBarFixed(st){
		if(st >= detop){
			$(".det_fixed_nav").css({
				position:"fixed"
			});
			$(".pri_des_show").show();
		}else{
			$(".det_fixed_nav").css({
				position : "absolute"
			});
			$(".pri_des_show").hide();
		}
	}

	$("body").on("click",".msg_error a",function(event){
		event.preventDefault();
		if(detInitConfig.productInfoType == "1"){
			new loadDetMsg();
		}else{
			new loadDetBusMsg();
		};

	});

	//加入购物车
	function addCart(comboId){
		if(!comboId) comboId = null;
		var proSku = $(".inf_gg_active").attr("data-sku");
		var quantity = $("#but_num").find("input").val();
		var url = $("#h_cartPath").val() + '/cart/addCart.shtml?';
		var urlqca = $("#h_cartPath").val() + '/cart/qca.shtml';

		var cartData = {
				'proSku' : proSku,
				'quantity' : quantity,
				'comboId' : comboId
			};
		if(detInitConfig.productInfoType === "2"){
			cartData.vendorCode = "123"
		};
		$.ajax({
			async : false,
			type : 'GET',
			data : cartData,
			dataType : "jsonp",// 数据类型为jsonp
			timeout: 5000,
			url : url,
			success : function(data) {
				if(data.code =='E_0000'){
					$.ajax({
						async : false,
						type : 'GET',
						data : {},
						dataType : "jsonp",// 数据类型为jsonp
						timeout: 5000,
						url : urlqca,
						success : function(data) {
							if(data.code =='E_0000'){
								$(".vm-mct-cart").find(".u-badge").html(data.cartNum);
								$(".tocart_btn,.comboToCart").removeAttr('data-sends');
							}
						},
						error : function(){
							$(".tocart_btn").removeAttr('data-sends');

						}
					});
				}else if(data.code == 'E_1001'){
					$.xeConfirm({str: "当前购物车已满,请删除其他商品后再次添加.",alerts:true,bgClick:false})
				}
			}
		});
	};

	//判断商品是否收藏
	function isCollect(){
		var productSku = $(".inf_gg_active").attr("data-sku");
		var url = $("#myPath").val()+'collectProduct/findProduct.shtml';
		$.ajax({
			async : false,
			type : 'GET',
			data : {
				'productSku' : productSku,
				'platType' : detInitConfig.productInfoType
			},
			dataType : "jsonp",// 数据类型为jsonp
			timeout: 5000,
			url : url,
			success : function(data) {
				if(data.code =='1'){
					$("#toCollect_btn").html('<i class="u-icon">&#xe628;</i>已收藏');
				}else if(data.code == '0' ){
					$("#toCollect_btn").html('<i class="u-icon">&#xe625;</i>收藏商品');
				}
			}
		});
	};

	//添加到货通知
	window.addArrivalNotice = function(){
		var productCode =$("#productCode").val();
		var cityId = cookieJS.getCookie('cyCityId') ? cookieJS.getCookie('cyCityId') : '';
		var cityName = cookieJS.getCookie('cyCityName') ? cookieJS.getCookie('cyCityName') : '';
		var contactsPhone = $.trim($("#contactsPhone").val());
		$("#contactsPhone").val(contactsPhone);
		var reg = /^1\d{10}$/;
		if(contactsPhone == ''){
			$(".dh_con p em").text("请输入手机号!").css({display:"inline-block"});
			return false;
		}else{
			if(!reg.test(contactsPhone)){
				$(".dh_con p em").text("手机号有误!").css({display:"inline-block"});
				return false;
			}
		}
		$.ajax({
			url :$("#apiPath").val() + "/item/productJsonp/insterArrivalNotice/"+productCode+".shtml",
			type:"GET",
			dataType:"jsonp",
			timeout:5000,
			data : {
				'productCode' : productCode,
				'cityId' : cityId,
				'cityName' : cityName,
				'contactsPhone' : contactsPhone
			},
			success : function(data){
				$(".dhtz").removeClass("md_show");
				$(".xeConfirm_bg").css({opacity:0,visibility:"hidden"})
				$.xeConfirm({str: "联系方式已提交，到货后会立刻通知您",alerts : true,bgClick : true});
			},
			error:function(){
				$(".dh_con p em").text("操作失败").css({display:"inline-block"});
			}
		});
	};

	//加入收藏
	function addCollect(event,obj){
		var productSku = $(".inf_gg_active").attr("data-sku");
		var url = $("#myPath").val() + 'collectProduct/operator.shtml';
		var url2 = $("#myPath").val() + 'collectProduct/findProduct.shtml';

		var $this = obj;
		if($this.attr("data-send") == "sended"){
			return;
		}
		$this.attr("data-send","sended");
		$.ajax({
			async : false,
			type : 'POST',
			dataType : "jsonp",//数据类型为jsonp
			jsonp: "callback",
			timeout: 5000,
			url : $("#h_loginPath").val() + '/login/checkLoginAjax.shtml',
			success : function(data) {
				if (data.code == '200')
				{

					$.ajax({
						async : false,
						type : 'GET',
						data : {
							'productSku' : productSku,
							'platType' : detInitConfig.productInfoType
						},
						dataType : "jsonp",// 数据类型为jsonp
						timeout: 5000,
						url : url2,
						success : function(data) {
							if(data.code =='1'){
								$.ajax({
									type : 'GET',
									data : {
										'productSku' : productSku,
										'platType' : detInitConfig.productInfoType
									},
									dataType : "jsonp",// 数据类型为jsonp
									timeout: 5000,
									url : url,
									success : function(data) {
										if(data.code =='1'){
											$("#toCollect_btn").html('<i class="u-icon">&#xe625;</i>收藏商品');
										}
									}
								});

							}else if(data.code == '0' ){
								$.ajax({
									type : 'GET',
									data : {
										'productSku' : productSku,
										'platType' : detInitConfig.productInfoType
									},
									dataType : "jsonp",// 数据类型为jsonp
									timeout: 5000,
									url : url,
									success : function(data) {
										if(data.code =='2'){
											$("#toCollect_btn").html('<i class="u-icon">&#xe628;</i>已收藏');
										}
									}
								});
							}
						}
					});
				}
				else
				{
					//显示登录框
					event.preventDefault();
					$('.bg-ball,.xeConfirm_bg1').show();
				}
				$this.attr("data-send","");
			},
			error : function(){
				$this.attr("data-send","");
			}
		});
	};

	// 优惠套装
	function disCountPack(sku,cityId){
		this.maxNum = 6;
	};
	disCountPack.prototype.getDisPack = function(sku,cityId){
		// 商品详情固定栏更新高度
		detop = $(".det_fixed_nav").offset().top;

		var _this = this;
		var urls = $("#apiPath").val()+'/item/productJsonp/queryComboDate/'+sku+'.shtml?cityId='+cityId+'';
		$("#disCountPack").addClass('floor-loading');
		$.ajax({
			url : urls,
			type : 'GET',
			dataType : 'jsonp',
			timeout: '5000',
			success : function(data){
				var packList = data.validList;
				$("#disCountPack").removeClass('floor-loading').addClass('floor-lazy-done');
				_this.render(packList);
			},
			error : function(data){
				//console.log("error");
			}
		})
	};
	disCountPack.prototype.htmlStr = function(packList){
		var _this = this;
		var str = '<div class="giftPacks posra">'
			+	'<ol class="gift-list clearfix">'
			+'		<%for (var n=0;n<list.length;n++) {%>'
			+			'<%if(n==0) {%>'
			+				'<li class="active"><%=list[n].comboName.length > 5 ? list[n].comboName.substr(0,5) : list[n].comboName%></li>'
			+			'<%}else{%>'
			+				'<li><%=list[n].comboName.length > 5 ? list[n].comboName.substr(0,5) : list[n].comboName%></li>'
			+			'<%}%>'
			+		'<%}%>'
			+	'</ol>'
			+'<%for (var i=0;i<list.length;i++) {%>'
			+	'<%if(i==0) {%>'
			+		'<div class="gift_items show clearfix">'
			+	'<%}else{%>'
			+		'<div class="gift_items clearfix">'
			+	'<%}%>'
			+		'<div class="gift_item fl">'
			+			'<ul class="clearfix">'
			+			'<%for (var k=0;k<list[i].comDetList.length;k++) {%>'
			+				'<%if( k == 0) {%>'
			+				'<li>'
			+					'<div class="gift_pic">'
			+						'<img class="lazy" src="'+detInitConfig.basePath+'/images/lazyPic.png" data-original="'+detInitConfig.imgPath+'/product/140/140/<%=list[i].comDetList[k].mainImgUrl%>" alt="<%=list[i].comDetList[k].productName%>" height="100" width="100">'
			+					'</div>'
			+					'<div class="gift_name"><%=list[i].comDetList[k].productName%></div>'
			+					'<div class="gift_pri s-red"><b><span>&yen;</span><%=list[i].comDetList[k].comboPrice%>/<%=list[i].comDetList[k].units%></b></div>'
			+				'</li>'
			+				'<%}else{%>'
			+				'<li>'
			+					'<div class="gift_pic">'
			+						'<a href="'+detInitConfig.imgPath+'/<%=list[i].comDetList[k].productCode%>.shtml"><img class="lazy" src="'+detInitConfig.basePath+'/images/lazyPic.png" data-original="'+detInitConfig.imgPath+'/product/140/140/<%=list[i].comDetList[k].mainImgUrl%>" alt="<%=list[i].comDetList[k].productName%>" height="100" width="100"></a>'
			+					'</div>'
			+					'<div class="gift_name"><a href="'+detInitConfig.itemPath+'/<%=list[i].comDetList[k].productCode%>.shtml"><%=list[i].comDetList[k].productName%></a></div>'
			+					'<div class="gift_pri"><b><span>&yen;</span><%=list[i].comDetList[k].comboPrice%>/<%=list[i].comDetList[k].units%></b></div>'
			+				'</li>'
			+				'<%}%>'
			+				'<%if( k == list[i].comDetList.length - 1) {%>'
			+					'<% if(list[i].comDetList.length >= maxNum) {%>'
			+						'<li class="u-icon">&#xe636;</li>'
			+					'<%}else{%>'
			+						'<li class="u-icon">&#xe655;</li>'
			+						'<%for(var s =0; s< maxNum - list[i].comDetList.length; s++) {%>'
			+							'<li><div class="gift_pic"><img class="lazy" src="'+detInitConfig.basePath+'/images/lazyPic.png" data-original="'+detInitConfig.basePath+'/images/zhanwei.gif" height="100" width="100"></div></li>'
			+							'<%if(s == (maxNum - list[i].comDetList.length) - 1) {%>'
			+								'<li class="u-icon">&#xe636;</li>'
			+							'<%}else{%>'
			+								'<li class="u-icon">&#xe655;</li>'
			+							'<%}%>'
			+						'<%}%>'
			+					'<%}%>'
			+				'<%}else{%>'
			+					'<li class="u-icon">&#xe655;</li>'
			+				'<%}%>'
			+			'<%}%>'
			+			'</ul>'
			+		'</div>'
			+		'<div class="gift_item_pri fl">'
			+			'<p>套餐价格：<span class="rmb f14 colorb7">&yen;</span><strong><%=list[i].comboPrice%></strong></p>'
			+			'<p>立即节省：<span class="rmb">&yen;</span><%=list[i].saveMoney%></p>'
			+			'<a data-comDeId = "<%=list[i].id%>" class="comboToCart" href="#">加入进货单</a>'
			+		'</div>'
			+	'</div>'
			+'<%}%>'
			+'</div>';

		var htmlrender = template.compile(str);

		var html = htmlrender({
			list : packList,
			maxNum : _this.maxNum,
			detInitConfig : detInitConfig
		});

		return html;
	}
	disCountPack.prototype.render = function(packList){
		if(packList){
			var html = this.htmlStr(packList);
			document.getElementById("disCountPack").innerHTML = html;

			// 优惠套装切换
			$('body').on("click",".gift-list li",function(e){
				e.preventDefault();
				var index = $(".gift-list li").index(this);
				$(".gift-list li").removeClass("active").eq(index).addClass("active")
				$(".gift_items").removeClass("show").eq(index).addClass("show");

				// 图片延迟加载
				$(this).parents('#disCountPack').find("img.lazy").lazyLoadIndex();
			});

			// 图片延迟加载
			$('#disCountPack').find("img.lazy").lazyLoadIndex();
		}
	};

	//优惠套装
	var disCountPack = new disCountPack();

	// 商品自营详情信息加载****
	function loadDetMsg(){
		var procode = detInitConfig.productCode;//商品code
		var cityId = cookieJS.getCookie('cyAreaId') ? cookieJS.getCookie('cyAreaId') : ''; //区ID
		var cityName = cookieJS.getCookie('cyCityName') ? cookieJS.getCookie('cyCityName') : '';//市名称
		var gradeId = cookieJS.getCookie('userGrade') ? cookieJS.getCookie('userGrade') : '';//会员等级id
		var _this = this;

		_this.dt_msg_pri = $('<div class="dt_msg_pri"></div>');
		_this.dt_msg_fw = $('<div class="dt_msg_fw"></div>');
		_this.dt_msg_ch = $('<div class="dt_msg_ch"></div>');
		_this.dt_msg_btn = $('<div class="dt_msg_btn"></div>');

		if($(".msg_error").length){
			$(".msg_error").remove();
			$(".msg_ajax").addClass("det_loading");
		}

		var url = $("#apiPath").val() + "item/productJsonp/jsonp/"+procode+".shtml";
		//var url = "http://qa-newapi.cy.xebest.com/item/productJsonp/jsonp/"+20008243+".shtml";

		$.ajax({
			url : url,
			type: "GET",
			dataType:"jsonp",
			timeout: 8000,
			data : {
				"cityId" : cityId, // cityId
				"cityName" : cityName
			},
		//	timeout:20000,
			success:function(data){
				_this.status = data.item.productStatus; //商品状态
				_this.units = data.item.units; //商品单位
				_this.totalSale = data.item.totalSale; //
				_this.QRcodeUrl = data.item.QRcodeUrl;
				_this.gradeId = data.gradeId; //
				_this.comGradeId = data.comGradeId;
				//_this.fromDateInfo_day = data.fromDateInfo.split("-")[0];
				_this.fromDateInfo_time = data.item.fromDateInfo;
				_this.toTime = parseInt(data.item.fromDate);
				_this.defaultSendCity = data.defaultSendCity;
				_this.IsDelivery = data.IsDelivery;
				_this.isBulk = data.item.isBulk;

				_this.productSkuLists = data.item.productSkuList;

				if(_this.status == 0){
					_this.init(data);
					$('#dispatText').html('支持配送');
				 }else{
				 	if(_this.status == 1){
						var productSkuLists = data.item.productSkuList;
						var productSkuList = productSkuLists[0];
						// type  (1.普通商品 2.普通阶梯价 3.普通预售商品 4.预售阶梯商品)
						var type = productSkuList.productSkuShowType;

						// ====
						_this.marPri(productSkuList,type);
						_this.vipPri(productSkuList,type);
						_this.flashMsg(productSkuList);

						//货号
						_this.productNum(productSkuList);

						// ====
						_this.sendAdr();
						_this.serviceNotice(productSkuList,type);

						// ====
						var time = null;
						if(type === "1" || type === "2" ){
							var ptimes = Math.floor(new Date().getTime());
							if(ptimes < _this.toTime){
								time = _this.toTime - ptimes;
							}else{
								time = 0;
							}
						}else{
							time = parseInt(productSkuList.presaleEndTime)
						}
						_this.spec(productSkuLists);

						var firHtml = _this.dt_msg_pri;
						var secHtml = _this.dt_msg_fw;
						var thirdHtml = _this.dt_msg_ch;

						$(".msg_ajax").append(firHtml).removeClass("det_loading");
						$(".msg_ajax").append(secHtml);
						$(".msg_ajax").append(thirdHtml);

						_this.countDown(time,type)
						_this.quantity(productSkuList);

						if(type === "3" || type === "4"){
							if(_this.isBulk == "1") {
								$(".main-prod-img").append('<img src="'+$("#basePath").val()+'images/dongping_bq.png" alt="冻品" class="img-label" width="70" height="70">');
							}else{
								$(".main-prod-img").append('<img src="'+$("#basePath").val()+'images/h-yushouR.png" alt="预售" class="img-label" width="70" height="70">')
							}
						}else{
							if(_this.isBulk == "1") {
								$(".main-prod-img").append('<img src="'+$("#basePath").val()+'images/dongping_bq.png" alt="冻品" class="img-label" width="70" height="70">');
							}
						}

						// ====
						_this.btn(productSkuList);

						// ====
						_this.getSendAddress();
				 	}else{
						// ====
						_this.marPri(data);
						_this.vipPri(data);
						//_this.flashMsg(productSkuList);
						var firHtml = _this.dt_msg_pri;

						// ====
						_this.sendAdr();

						//_this.dt_msg_fw.append("<b class='b-outsale'>该商品已下架，非常抱歉！</b>");

						$(".msg_ajax").append(firHtml).removeClass("det_loading");
						$(".msg_ajax").append(_this.dt_msg_fw);

						_this.btn(productSkuList);

						$("#dispatText").html('不支持配送')

						_this.getSendAddress();

						$(".dt_msg_btn").show();

						if(_this.isBulk == "1") {
							$(".main-prod-img").append('<img src="'+$("#basePath").val()+'images/dongping_bq.png" alt="冻品" class="img-label" width="70" height="70">');
						}
				 	}
				 	//隐藏收藏
				 	$("#toCollect_btn").hide();

					$('#dispatText').html('不支持配送');

				 };

				//收藏商品
				isCollect();

				//点击加入收藏
				$("body").delegate('#toCollect_btn','click', function(event) {
					event.preventDefault();
					addCollect(event,$(this));
				});

				//浏览记录加载
				$.scrollShow($(".rankUl_scaled"),function(){
					new loadHis();
				});

			},
			error:function(){
				$(".msg_ajax").removeClass("det_loading").html("").append('<div class="msg_error">加载失败，请点击<a href="#">重新加载</a></div>');
			}
		});
		this.init = function(data){
			var productSkuLists = data.item.productSkuList;
			var productSkuList = productSkuLists[0];
			// type  (1.普通商品 2.普通阶梯价 3.普通预售商品 4.预售阶梯商品)
			var type = productSkuList.productSkuShowType;
			// ====
			_this.marPri(productSkuList,type);
			_this.vipPri(productSkuList,type);
			_this.flashMsg(productSkuList);
			_this.Msgapp();

			// ====
			_this.sendAdr();
			_this.serviceNotice(productSkuList,type);
			//货号
			_this.productNum(productSkuList);


			// 加载闪购倒计时
			_this.flashCountTime(productSkuList);

			// ====
			var time = null;
			if(type === "1" || type === "2" ){
				var ptimes = Math.floor(new Date().getTime());
				if(ptimes < _this.toTime){
					time = _this.toTime - ptimes;
				}else{
					time = 0;
				}
			}else{
				time = parseInt(productSkuList.presaleEndTime)
			}
			_this.spec(productSkuLists);

			var firHtml = _this.dt_msg_pri;
			var secHtml = _this.dt_msg_fw;
			var thirdHtml = _this.dt_msg_ch;

			$(".msg_ajax").append(firHtml).removeClass("det_loading");
			$(".msg_ajax").append(secHtml);
			$(".msg_ajax").append(thirdHtml);

			_this.countDown(time,type)
			_this.quantity(productSkuList);

			if(type === "3" || type === "4"){
				if(_this.isBulk == "1") {
					$(".main-prod-img").append('<img src="'+$("#basePath").val()+'images/dongping_bq.png" alt="冻品" class="img-label" width="70" height="70">');
				}else{
					$(".main-prod-img").append('<img src="'+$("#basePath").val()+'images/h-yushouR.png" alt="预售" class="img-label" width="70" height="70">')
				}
			}else{
				if(_this.isBulk == "1") {
					$(".main-prod-img").append('<img src="'+$("#basePath").val()+'images/dongping_bq.png" alt="冻品" class="img-label" width="70" height="70">');
				}
			}

			// 展示货号和规格
			_this.getSkuSpec();

			// ====
			_this.btn(productSkuList);

			// ====
			_this.getSendAddress();


			function disCountFn (){
				$.scrollShow($("#disCountPack"),function(){
					if ($(".inf_gg_active").attr("data-isCombo") == "1") {
						$("#disCountPack").addClass("det_loading").css({"height":230});
						disCountPack.getDisPack($(".inf_gg_active").attr("data-sku"), cityId);
					}
				});
			};

			//促销套装在可视区时加载
			disCountFn();

			window.onscroll = $.throttle(disCountFn,200);
		}

		// 货号和规格
		this.getSkuSpec = function(){
			var _this = this;
			var codeArr = [];
			var codeObj = {};
			var product_spec = $("#product_spec_li").find('.f-ellipsis');
			var product_num = $("#product_num_li").find('.f-ellipsis');

			var num = $(".inf_gg_active").attr('data-sku');
			var spec = $(".inf_gg_active").html();
			if(spec.indexOf('>') > 0) {
				spec = $(".inf_gg_active").html().split('<')[0];
			}else{
				spec = '无';
			}
			if(_this.productSkuLists.length) {
				for(var si=0;si<_this.productSkuLists.length;si++){
					codeObj[_this.productSkuLists[si].productSku] = _this.productSkuLists[si].productNum
				};
			};
			product_spec.html(spec);
			product_num.html(codeObj[num]);
			$("#product_spec_li,#product_num_li").show();
		};
		// 默认地址
		this.getSendAddress = function(){
			var devalue = null;

			var cyProvinceName = $.cookie('cyProvinceName') ? $.cookie('cyProvinceName') : '';
		    var cyProvinceId = $.cookie('cyProvinceId') ? $.cookie('cyProvinceId') : '';
		    var cyCityName = $.cookie('cyCityName') ? $.cookie('cyCityName') : '';
		    var cyCityId = $.cookie('cyCityId') ? $.cookie('cyCityId') : '';
		    var cyAreaName = $.cookie('cyAreaName') ? $.cookie('cyAreaName') : '';
		    var cyAreaId = $.cookie('cyAreaId') ? $.cookie('cyAreaId') : '';

			if(!!cyProvinceName && !!cyProvinceId && !!cyCityName && !!cyCityId && !!cyAreaName && !!cyAreaId) {
				var arrid = [cyProvinceId,cyCityId,cyAreaId];
				var arrname = [cyProvinceName,cyCityName,cyAreaName];
				devalue = {
					deId : arrid.join("-"),
					deName : arrname.join("-")
				}
				//_this.checkIsDeliveryArea($.cookie("cyCityId"),$(".dt_msg_list .dd_gg").find(".inf_gg_active").attr("data-sku"),arrid.join("-"));

			}else{
				devalue = null
			}
			//详情页收货地址添加
			$(".selectedPlace").adrSelects({
				defaultValue : devalue,//默认回显地址
		        fn : function (cdata){
					var name = cdata.name.split('-');
	                var id = cdata.id.split('-');

	                var pName = name[0];
	                var pId = id[0];
	                var cName = name[1];
	                var cId = id[1];
	                var aName = name[2];
	                var aId = id[2];

	                $.cookie('cyProvinceName',pName,{expires:365,domain:'.xebest.com',path:'/'});
	                $.cookie('cyProvinceId',pId,{expires:365,domain:'.xebest.com',path:'/'});
	                $.cookie('cyCityName',cName,{expires:365,domain:'.xebest.com',path:'/'});
	                $.cookie('cyCityId',cId,{expires:365,domain:'.xebest.com',path:'/'});
	                $.cookie('cyAreaName',aName,{expires:365,domain:'.xebest.com',path:'/'});
	                $.cookie('cyAreaId',aId,{expires:365,domain:'.xebest.com',path:'/'});

					$(".msg_ajax").html("").addClass('det_loading');

					window.location.reload();


		            //_this.checkIsDeliveryArea($.cookie("cyCityId"),$(".details_main_promsg").find(".inf_gg_active").attr("data-sku"),$(".dstion-plugins").find(".dstion-input").attr("data-id"));
		        },// 选择区后的回调方法
		        position : "left", // 位置 默认为 "left",可选值"right" "center";
		        cookieFlag : false, // 是否写入cookie ，默认false 传入true会写COOKIE
		        usedAdr : true,
				usedAdrFn : function(adrdata){

					var name = adrdata.adrname.split('-');
	                var id = adrdata.adrid.split('-');
	                var pName = name[0];
	                var pId = id[0];
	                var cName = name[1];
	                var cId = id[1];
	                var aName = name[2];
	                var aId = id[2];

	                $.cookie('cyProvinceName',pName,{expires:365,domain:'.xebest.com',path:'/'});
	                $.cookie('cyProvinceId',pId,{expires:365,domain:'.xebest.com',path:'/'});
	                $.cookie('cyCityName',cName,{expires:365,domain:'.xebest.com',path:'/'});
	                $.cookie('cyCityId',cId,{expires:365,domain:'.xebest.com',path:'/'});
	                $.cookie('cyAreaName',aName,{expires:365,domain:'.xebest.com',path:'/'});
	                $.cookie('cyAreaId',aId,{expires:365,domain:'.xebest.com',path:'/'});

					window.location.reload();
					//_this.checkIsDeliveryArea($.cookie("cyCityId"),$(".details_main_promsg").find(".inf_gg_active").attr("data-sku"),$(".dstion-plugins").find(".dstion-input").attr("data-id"));
				}
		    });

			// if(_this.IsDelivery === "1"){
			// 	$("#dispatText").html("支持配送");
			// 	$(".dt_msg_list").find(".det_abtn").removeClass('det_abtn_disabled').attr("title","点击此按钮，到下一步确认购买信息")
			// }else{
			// 	$("#dispatText").html("暂不支持配送");
			// 	$(".dt_msg_list").find(".det_abtn").addClass('det_abtn_disabled').removeAttr('title');
			// }

			$(".dt_msg_btn").show();
		}


		// 市场价和销量
		this.marPri = function(productSkuList,type){


			// if(type === "1" || type === "3"){
			var str = '<dl class="dt_msg_priceOn">'
				str += '<dt>市场价</dt>'
				str += '<dd class="clearfix">'
				if(_this.status === 2){
					str +=	'<p class="fl line-cross"><span class="rmb">&yen;</span>'+parseFloat(productSkuList.item.price).toFixed(2)+'/'+_this.units+'</p>'
				}else{
					str +=	'<p class="fl line-cross"><span class="rmb">&yen;</span>'+parseFloat(productSkuList.price).toFixed(2)+'/'+_this.units+'</p>'
				}
				str +=	'<p class="fr saleNum">累计销量 <span class="s-orange f14"> '+ _this.totalSale +'</span></p>'
				str += '</dd></dl>'
			// }

			_this.dt_msg_pri.append(str);
		};

		//会员价
		this.vipPri = function(productSkuList,type){
			if(_this.status === 2) {
				var str = '<dl class="dt_msg_list dt_msg_price">'
					str +=	'<dt>会员价</dt>'
					str +=		'<dd>'
					str +=			'<p class="dt_pri"><em>&yen;</em><strong>'+parseFloat(productSkuList.item.vipPrice).toFixed(2)+'<i style="vertical-align:top;" class="f18">/'+_this.units+'</i></strong></p>'
					str +=			'<p class="pri_small">(<span class="rmb">&yen;</span>'+parseFloat(productSkuList.item.unitPrice).toFixed(2)+'/斤)</p>'
					str +=	   '</dd></dl>';
					_this.dt_msg_pri.append(str);
					return;
			}
			if(type === "1"){
				var price1 = null;
				var str = '<dl class="dt_msg_list dt_msg_price">'
					if(!!productSkuList.flashPrice){
						price1 = parseFloat(productSkuList.flashPrice).toFixed(2);
						str +=	'<dt>抢购价</dt>'
					}else{
						price1 = parseFloat(productSkuList.showPriceDtoList[0].price).toFixed(2);
						str +=	'<dt>会员价</dt>'
					}
					str +=		'<dd>'
					str +=			'<p class="dt_pri"><em>&yen;</em><strong>'+price1+'<i>/'+_this.units+'</i></strong></p>'
					str +=			'<p class="pri_small">(<span class="rmb">&yen;</span>'+parseFloat(productSkuList.showPriceDtoList[0].unitPrice).toFixed(2)+'/斤)</p>'
					str +=	   '</dd></dl>';
			}
			if(type === "2" || type === "4"){
				var str = '<div class="msgInfor">'
					if(productSkuList.showPriceDtoList.length  > 2){
						str +=		'<i class="bg_sprite cur-more"></i>'
					}
					str +=		'<dl class="dt_msg_list dt_msg_price">'
					// if(type === "4") {
					// 	str += '<dt style="line-height:16px;">预售<br>阶梯价</dt>'
					// }else{
					str += '<dt>阶梯价</dt>'
					// }
					str +=			'<dt class="dt_numBegin">起批量</dt>'

					str += '<dd class="clearfix">'
						for(var s=0,len=productSkuList.showPriceDtoList.length; s <len ; s++){
							if(s > 2){
								str += '<div class="dt_pricon" style="margin-top:10px">'
							}else{
								str += '<div class="dt_pricon">'
							}
							str += '<p class="dt_prip"><em>&yen;</em><strong>'+parseFloat(productSkuList.showPriceDtoList[s].price).toFixed(2)+'</strong></p>'
							if(s >= productSkuList.showPriceDtoList.length -1 ){
								str += '<p class="dt_pri_details"> &ge;'+productSkuList.showPriceDtoList[s].initialNumber+''+_this.units+' <span class="rmb">&yen;</span>'+parseFloat(productSkuList.showPriceDtoList[s].unitPrice).toFixed(2)+'/斤</p>'
							}else{
								str += '<p class="dt_pri_details">'+productSkuList.showPriceDtoList[s].initialNumber+'-'+productSkuList.showPriceDtoList[s].endNumber+''+_this.units+'  <span class="rmb">&yen;</span>'+parseFloat(productSkuList.showPriceDtoList[s].unitPrice).toFixed(2)+'/斤</p>'
							}

							str += '</div>'
						}
					str +=			'</dd>'
					str +=		'</dl>'
					str +=	'</div>'
			}
			if(type === "3"){
				var str = '<dl class="dt_msg_list dt_msg_price">'
					str +=	'<dt>预售价</dt>'
					str +=		'<dd>'
					str +=			'<p class="dt_pri"><em>&yen;</em><strong>'+parseFloat(productSkuList.showPriceDtoList[0].price).toFixed(2)+'<i style="vertical-align:top;" class="f18">/'+_this.units+'</i></strong></p>'
					str +=			'<p class="pri_small">(<span class="rmb">&yen;</span>'+parseFloat(productSkuList.showPriceDtoList[0].unitPrice).toFixed(2)+'/斤)</p>'
					str +=	   '</dd></dl>';
			}
			_this.dt_msg_pri.append(str);
		}

		// 限时抢购倒计时
		this.flashCountTime = function(productSkuList){

			clearTimeout(_this.ts_flash);

			var flashHtmlStr = '<div class="flash_time"><span class="flash_time_tit fl">限时抢购</span><div class="flash_times fr"><em class="u-icon">&#xe607;</em><span class="flash_times_text"></span></div></div>';

			if(productSkuList.flashInfoList.length && productSkuList.flashInfoList[0].endDate) {
				var nowDate = new Date().getTime();
				var endDate = parseInt(productSkuList.flashInfoList[0].endDate);

				if(nowDate >= endDate) {
					return;
				}else{
					if($('.flash_time').length > 0){
						$('.flash_time').remove();
					};

					$('.dt_msg_name').after(flashHtmlStr);
					var flashTimediff = endDate - nowDate;

					_this.ts_flash = "t"+ Math.random().toString().substring(3);

					flash_counting = function(){
		                if (flashTimediff > 1000){

		                    flashTimediff -= 1000;

		                    var nD = Math.floor(flashTimediff / (1000 * 60 * 60 * 24));
		                    var nH = Math.floor(flashTimediff / (1000 * 60 * 60)) % 24;
		                    var nM = Math.floor(flashTimediff / (1000 * 60)) % 60;
		                    var nS = Math.floor(flashTimediff / 1000) % 60;

		                    if(nD<10) nD = "0" + nD;
		                    if(nM<10) nM = "0" + nM;
		                    if(nH<10) nH = "0" + nH;
		                    if(nS<10) nS = "0" + nS;

							var strs = "活动剩余：";
							if(nD !== '00'){
								strs += '<em>'+nD+'</em>天';
							}
		                    strs += '<em>'+nH+'</em>时<em>'+nM+'</em>分<em>'+nS+'</em>秒';
		                    $(".flash_times_text").html("").append(strs);

							clearTimeout(_this.ts_flash);

		                    _this.ts_flash = setTimeout(function(){
		                        flash_counting()
		                    },1000);
		                }else {
		                	$(".flash_times_text").html("").append('限时抢购活动已结束，即将自动刷新页面！');
		                	window.location.reload();
		                }

		            };

					flash_counting();
				}
			}else{
				$(".flash_time").remove();
			}




		};

		// 促销信息
		this.flashMsg = function(productSkuList){
			if(productSkuList.flashInfoList.length){
				var zp = false;
				var str = "";
				var strs = "";
				str += '<div class="msgInfor activeInfor">'
				str +='<dl class="dt_msg_list dt_msg_flash">';
				str +='<dt class="dt_cx">促销信息</dt>';

				str += '<dd class="ino_prcon" style="line-height:28px"><div class="clearfix actInfor_title"><p class="s-red fl">以下为该商品参与的促销活动</p><p class="fr">共<span class="s-red">'+productSkuList.flashInfoList.length+'</span>项促销<i class="u-icon" style="font-size:14px;">&#xe600;</i></p></div></dd>'

				if($(".flash_Div").length){
					$(".flash_Div").remove();
				}

				for(var f=0,flen=productSkuList.flashInfoList.length;f<flen;f++){
					if(productSkuList.flashInfoList[f].proNameList || productSkuList.flashInfoList[f].type=="品类满赠"){
						var gray_str ="";
						//是否还有赠品
						var bl=(productSkuList.flashInfoList[f].proNameList!=null && productSkuList.flashInfoList[f].proNameList.length>0);
						//已售罄样式置灰
						if(!bl){
							gray_str ="class='gray_em' ";
						}
						zp = true;
						str +='<dd class="ino_prcon">';
						str +='<div class="ino_prom">';
						str +='<em '+gray_str+' >'+productSkuList.flashInfoList[f].type+'</em>'+productSkuList.flashInfoList[f].name;
						if(bl){
							str +='<span class="flashName" data="'+f+'">赠品</span>';
						}
						str +='</div>';
						str +='</dd>';
						if(bl){

							strs = '<div class="flash_Div flash_Div_'+f+'">';
							for(var a=0,alen=productSkuList.flashInfoList[f].proNameList.length;a<alen;a++){
								strs += '<p>'+productSkuList.flashInfoList[f].proNameList[a]+'</p>'
							}
							strs += '</div>';
							$("body").append(strs);
						}
					}

					if(productSkuList.flashInfoList[f].limitGradeNum != undefined){
						if(productSkuList.flashInfoList[f].limitGradeNum > 0){
							str +='<dd class="ino_prcon">';
							str +='<div class="ino_prom">';
							str +='<em>'+productSkuList.flashInfoList[f].type+'</em>'+productSkuList.flashInfoList[f].name+'，限购'+ productSkuList.flashInfoList[f].limitGradeNum + productSkuList.flashInfoList[f].units + '';
							str +='</div>';
							str +='</dd>'
						}else if(productSkuList.flashInfoList[f].limitGradeNum == 0){
							str +='<dd class="ino_prcon">';
							str +='<div class="ino_prom">';
							str +='<em class="gray_em">'+productSkuList.flashInfoList[f].type+'</em>'+productSkuList.flashInfoList[f].name+',促销商品已售罄';
							str +='</div>';
							str +='</dd>'
						}else{
							str +='<dd class="ino_prcon">';
							str +='<div class="ino_prom">';
							str +='<em>'+productSkuList.flashInfoList[f].type+'</em>'+productSkuList.flashInfoList[f].name+'';
							str +='</div>';
							str +='</dd>'
						}
					}
				}

				str +='</dl></div>';
				_this.dt_msg_pri.append(str);
			}

			$('body').on('mouseenter','.msgInfor',function(){
			   $(this).parents('.dt_msg_pri').css({'zIndex':5})
			   $(this).addClass('hoverInfor');
		   	}).on('mouseleave','.msgInfor',function(){
			   $(this).removeClass('hoverInfor');
			   $(this).parents('.dt_msg_pri').css({'zIndex':1})
		   	});

			if(zp){
				$("body").on("mouseenter",".flashName",function(){
					var left = $(this).offset().left;
					var top = $(this).offset().top;
					$(this).addClass('fln_act');
					var flash_index=$(this).attr("data");
					$(".flash_Div_"+flash_index).css({
						"left" : left - 90,
						"top" : top + $(this).height() + 7,
						"width":'auto'
					}).show();
				}).on("mouseleave",".flashName",function(){
					$(this).removeClass('fln_act');
					$(".flash_Div").hide();
				});
			};

		}

		// 商品二维码
		this.Msgapp = function(){
			if(!!_this.QRcodeUrl){

				$(".details_share").append('<span class="erma"><i class="u-icon">&#xe653;</i>手机端购买<em><img class="lazy" src="http://misc.xebest.com/images/lazyPic.png" data-original="'+ detInitConfig.imgPath+'/product/140/140/' + _this.QRcodeUrl + '" height="100" width="100" alt="二维码"></em></span>');

				$("body").on("mouseenter",".erma",function(){
					$(this).find("em").show();
					$(this).find("em").find("img").lazyLoadIndex({effect:"show"});
				}).on("mouseleave",".erma",function(){
					$(this).find("em").hide();
				})
			}
		};

		// 配送至
		this.sendAdr = function(){

			var str = '<dl class="dt_msg_list">'
				str +=		'<dt class="dt_msg_tips">配送至</dt><dd>'
				str +=			'<div class="dispatPlace">'
				str +=				'<div class="selectedPlace fl"></div>'
				str +=				'<span class="dispatText" id="dispatText"></span>'
				str +=			'</div></dd></dl>';

			_this.dt_msg_fw.append(str);
		}

		// 服务
		this.serviceNotice = function(productSkuList,type){

			if(_this.status == 2) return;

			if($(".dt_msg_ser").length){
				$(".dt_msg_ser").remove();
			}
			//var serTips = "";
			//_this.fromDateInfo_day === "1" ? serTips += "当天" : serTips += "隔天";

			var str = '<dl class="dt_msg_list dt_msg_ser">'
				str +=		'<dt class="dt_msg_tips">服务</dt><dd>'

				if(type === "1" || type === "2") {
					if(_this.isBulk == "1"){

						str += '<span><b>当天'+_this.fromDateInfo_time+'前下单，商品会在72小时内送货</b></span>'
					}else{
						str += '<span><b>当天'+_this.fromDateInfo_time+'前下单，商品会在次日送达</b></span>'
					}

				}else{

					str += '<span><b>预售商品只支持在线支付，将于'+productSkuList.deliveryDayNum+'日后统一发货</b></span>'
				}
				str +=		'</dd>'
					str +='</dl>'

			_this.dt_msg_fw.append(str);
		}
		//商品货号
		this.productNum = function (productSkuList){
			$("#product_num_tr td:eq(1)").html(productSkuList.productNum);
			$("#product_num_tr").show();
			$("#product_num_tr").parents(".gg_tabl_item").css("display","block");
		}
		// 提示服务时间
		this.countDown = function(timeDiff,type){
			if(_this.status == 2) return;
			clearTimeout(_this.ts);
			_this.ts = "t"+ Math.random().toString().substring(3);
			if($(".dt_msg_timecon").length){
				$(".dt_msg_timecon").remove();
			}
			var str = '<dl class="dt_msg_list dt_msg_timecon">';
				str += '<dt class="dt_msg_tips">温馨提示</dt><dd>'
			if(type === "1" || type === "2"){
				str += '<div class="dt_msg_time">距离当天下单结束时间还剩'
			}else{
				var times = Math.floor(new Date().getTime());
				if(times < timeDiff){
						timeDiff = timeDiff - times;
				}
				str += '<div class="dt_msg_time">距离预售结束'
			}
				str += '<span id="msTime"><em>00</em>时<em>00</em>分<em>00</em>秒</em></span></div></dd></dl>';

			_this.dt_msg_ch.prepend(str);

			counting = function(){
                if (timeDiff > 0){

                    //timeDiff -=100;
                    timeDiff -=1000;

                    var nH = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
                    var nM = Math.floor(timeDiff / (1000 * 60)) % 60;
                    var nS = Math.floor(timeDiff / 1000) % 60;
                    // var nMsec = Math.floor(timeDiff / 100) % 10;

                    if(nM<10) nM = "0" + nM;
                    if(nH<10) nH = "0" + nH;
                    if(nS<10) nS = "0" + nS;
                    // if(nMsec<10) nMsec = "0" + nMsec;

					// 变量存非预售商品时间
					if(type === "1" || type === "2"){
						_this.timeNotys = timeDiff
						var strs = "";
	                    strs += '<em>'+nH+'</em>时<em>'+nM+'</em>分<em>'+nS+'</em>秒';
	                    $("#msTime").html("").append(strs);
					}else{
						var nD = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
						if(nD<10) nD = "0" + nD;
						var strs = "";
	                    strs += '<em>'+nD+'</em>天<em>'+nH+'</em>时<em>'+nM+'</em>分<em>'+nS+'</em>秒';
	                    $("#msTime").html("").append(strs);
					}
					clearTimeout(_this.ts)
                    _this.ts = setTimeout(function(){
                        counting()
                    },1000);
                }else {

					if(type === "1" || type === "2"){
						_this.timeNotys = 0;
                    	$(".dt_msg_time").html('当前时间正在系统维护请稍后下单');
					}else{
						$(".dt_msg_time").html('当前商品预售已结束，请重新刷新页面');
					}
                }

            };

			counting();


		}


		this.spec = function(productSkuLists){
			var str = '<dl class="dt_msg_list"><dt>规格</dt><dd class="dd_gg">'
			if(productSkuLists.length <= 1 && (productSkuLists[0].specName == "" || productSkuLists[0].specName == null)){
				$(".dt_msg_name").find("h2").addClass('inf_gg_active').attr({"data-sku": productSkuLists[0].productSku,"data-isCombo" : productSkuLists[0].isCombo});
				return;
			}
			var arrspec = [];
			var isCombo = [];
			for(var i=0,len = productSkuLists.length; i<len; i++){
				if(!productSkuLists[i].specName == ""){
					arrspec.push(productSkuLists[i]);
				}
				isCombo.push(productSkuLists[i].isCombo)
			}
			for(var i=0,len = arrspec.length; i<len; i++){
				if( i === 0){
					str +='<span data-isCombo="'+isCombo[i]+'" data-sku="'+arrspec[i].productSku+'" class="inf_gg inf_gg_active">'+arrspec[i].specValue+'<i class="u-icon">&#xe610;</i></span>';
					continue;
				}
				str +='<span data-isCombo="'+isCombo[i]+'" data-sku="'+arrspec[i].productSku+'" class="inf_gg">'+arrspec[i].specValue+'<i class="u-icon">&#xe610;</i></span>';
			}

			str +='</dd></dl>';

			//console.log(str);

			_this.dt_msg_ch.append(str);


			// 加载其它规格商品
			_this.reload(productSkuLists);

		}

		this.quantity = function(productSkuList){
			if(_this.status == 2) return;
			if($("#but_num").attr("data-quantity") === "done") {
				$("#but_num").html("");
			}
			var str = '<dl class="dt_msg_list dt_quan" data-minorder="'+productSkuList.minorderQuantity+'" data-quantity="'+productSkuList.quantity+'">';
				str +='<dt>购买数量</dt><dd class="clearfix"><div class="countBtn fl" id="but_num"></div>';
				str += '<div class="but_tips fl">'
				str += '<span>库存<strong>'+productSkuList.quantity+'</strong>'+_this.units+'</span>'
				str += '<span>此货品最小起订量为<em>'+productSkuList.minorderQuantity+'</em>'+_this.units+'</span>'
				str += '</div></dd></dl>';

				if($(".dt_quan").length){
					$(".dt_quan").remove();
				}
				_this.dt_msg_ch.append(str);

				$("#but_num").Spinner({value: productSkuList.minorderQuantity, min: productSkuList.minorderQuantity,len :(productSkuList.quantity+'').length, max:productSkuList.quantity}).attr("data-quantity","done");
		};

		this.btn = function(productSkuList){

			var str = '<dl class="dt_msg_list fmb"><dd class="f0">'
			if(_this.status == 0){
				if(productSkuList.productSkuShowType === "3" || productSkuList.productSkuShowType === "4"){
					str+= '<a href="##" id="yushou_btn" class="det_abtn buy_btn" title="点击此按钮，到下一步确认购买信息">立即购买</a><a style="display:none;" href="##" class="det_abtn tocart_btn"><i class="u-icon">&#xe65b;</i>加入进货单</a>';
				}else{
					str+= '<a href="##" class="det_abtn buy_btn" title="点击此按钮，到下一步确认购买信息">立即购买</a><a href="##" class="det_abtn tocart_btn"><i class="u-icon">&#xe65b;</i>加入进货单</a>';
				}

			}else{
				str+= '<a href="##" class="det_abtn dh_btn">到货通知</a>';
				var stdh = ""
				stdh +='<div class="dhtz md_effect_1">'
				stdh +=	'<div class="md_close u-icon">&#xe60d;</div>'
				stdh +=	'<div class="dh_h3">到货通知</div>'
				stdh +=	'<div class="dh_con">'
				stdh +=		'<h4>该货品暂时缺货，请在下面输入您的手机号码，当我们有现货供应时，我们会发送短信给您！</h4>'
				stdh +=		'<p>'
				stdh +=			'<span>电话号码：</span><input type="text" maxlength="11" name="contactsPhone" id="contactsPhone" class="dh_input" placeholder="请输入手机号码"><em>手机号有误！</em>'
				stdh +=		'</p>'
				stdh +=		'<div class="dh_btnp">'
				stdh +=			'<a href="javascript:;" onclick="addArrivalNotice()" >提交</a>'
				stdh +=		'</div>'
				stdh +=	'</div>'
				stdh +='</div>'


				$("body").append(stdh);

				$("body").on("click",".dh_btn",function(ev){
					ev.preventDefault();
					$(".dhtz").addClass("md_show");
					if($(".xeConfirm_bg").length){
						$(".xeConfirm_bg").css({visibility:"visible",opacity:0.8})
					}else{
						$("body").append('<div class="xeConfirm_bg"></div>');
					 	$(".xeConfirm_bg").css({
			                "height" : $("html,body").height(),
			                "opacity" : .8,
			                "visibility" : "visible"
			            });
					};
				});



				$(".md_close").on("click",function(){
					$(this).parent().removeClass("md_show");
					$(".xeConfirm_bg").css({opacity:0,visibility:"hidden"})
				});
			}

			str+= '</dd></dl>';

			_this.dt_msg_btn.append(str);

			$(".msg_ajax").removeClass("det_loading").append(_this.dt_msg_btn);

		}

		this.reload = function(productSkuLists){
			$("body").on("click",".inf_gg",function(){
				var inf_this = $(this);
				if($(this).hasClass("inf_gg_active")){
					return;
				}
				var index = $(".inf_gg").index(this);
				var thisku = $(this).attr("data-sku");
				var gradeId = _this.gradeId;
				$(".inf_gg").removeClass("inf_gg_active").eq(index).addClass("inf_gg_active");

				isCollect();

				for(var i=0,len=productSkuLists.length;i<len;i++){
					if(thisku === productSkuLists[i].productSku){
						_this.dt_msg_pri.find(".dt_msg_priceOn,.dt_msg_price,.activeInfor,.msgInfor").remove();
						_this.marPri(productSkuLists[i],productSkuLists[i].productSkuShowType);
						_this.vipPri(productSkuLists[i],productSkuLists[i].productSkuShowType);
						_this.flashMsg(productSkuLists[i]);
						_this.serviceNotice(productSkuLists[i],productSkuLists[i].productSkuShowType);

						_this.flashCountTime(productSkuLists[i]);
						//设置货号
						_this.productNum(productSkuLists[i]);
						if(productSkuLists[i].productSkuShowType === "1" || productSkuLists[i].productSkuShowType === "2"){
							var ptimes = Math.floor(new Date().getTime());
							if(ptimes < _this.toTime){
								time = _this.toTime - ptimes;
							}else{
								time = 0;
							}
							_this.countDown(time,productSkuLists[i].productSkuShowType);
						}else{
							_this.countDown(productSkuLists[i].presaleEndTime,productSkuLists[i].productSkuShowType);
						};

						//_this.checkIsDeliveryArea($.cookie("cyCityId"),$(".dt_msg_list .dd_gg").find(".inf_gg_active").attr("data-sku"),$(".dstion-plugins").find(".dstion-input").attr("data-id"));

						_this.quantity(productSkuLists[i]);

						if(productSkuLists[i].productSkuShowType === "3" || productSkuLists[i].productSkuShowType === "4"){
							$(".main-prod-img").find(".img-label").remove();
							if(_this.isBulk == "1") {
								$(".main-prod-img").append('<img src="'+$("#basePath").val()+'images/dongping_bq.png" alt="冻品" class="img-label" width="70" height="70">');
							}else{
								$(".main-prod-img").append('<img src="'+$("#basePath").val()+'images/h-yushouR.png" alt="预售" class="img-label" width="70" height="70">');
							}
							$(".dt_msg_btn").find(".tocart_btn").hide();
							$(".dt_msg_btn").find(".buy_btn").attr("id","yushou_btn");
						}else{
							$(".main-prod-img").find(".img-label").remove();
							if(_this.isBulk == "1") {
								$(".main-prod-img").append('<img src="'+$("#basePath").val()+'images/dongping_bq.png" alt="冻品" class="img-label" width="70" height="70">');
							}
							$(".dt_msg_btn").find(".tocart_btn").show();
							$(".dt_msg_btn").find(".buy_btn").removeAttr("id");
						}

						break;
					}
				}
				// =====

				// if(data.status == 1) {
				// 	$(".unitPrice").hide();
				// }
				//
				_this.getSkuSpec();

				if(inf_this.attr("data-isCombo") == "0") {
					$("#disCountPack").children().remove();
					return;
				}

				$("#disCountPack").removeClass('floor-lazy-done');

				// 促销套装在可视区时加载
				$.scrollShow($("#disCountPack"),function(){
					if(inf_this.attr("data-isCombo") == "1") {
						disCountPack.getDisPack($(".inf_gg_active").attr("data-sku"),cityId);
					}
				});

				$(window).on("scroll resize",function(){
					$.scrollShow($("#disCountPack"),function(){
						if(inf_this.attr("data-isCombo") == "1") {
							disCountPack.getDisPack($(".inf_gg_active").attr("data-sku"),cityId);
						}
					});
				});
			});
		}

	};

	if(detInitConfig.productInfoType == "1"){
		var loadMsgfn = new loadDetMsg();
	}

	// 商品详情信息加载****


	$(window).on("scroll resize",function(){
		var t = null;
		clearTimeout(t);
		t = setTimeout(function(){

			$.scrollShow($(".rankUl"),function(){
				new loadRle();
			});
			$.scrollShow($(".rankUl_scaled"),function(){
				new loadHis();
			});
			$.scrollShow($(".dis_total"),function(){
				new addDisContent().addPercent();
			});
			$.scrollShow($(".dis_container"),function(){
				new addDisContent().addiscon();
			});
		}, 16)

	})
	$.scrollShow($(".dis_total"),function(){
		new addDisContent().addPercent();
	});
	$.scrollShow($(".dis_container"),function(){
		new addDisContent().addiscon();
	});

	//相关商品加载
	$.scrollShow($(".rankUl"),function(){
		new loadRle();
	});

	$("body").on("click",".rank_error a",function(event){
		event.preventDefault();
		var loadRlefn = new loadRle();
	});

	$("body").on("click",".rank_scaled_error a",function(event){
		event.preventDefault();
		new loadHis()
	});

	function loadRle(){
		var productCode =$("#productCode").val();
		var categoryId =$("#categoryId").val();
		var cityId = cookieJS.getCookie('cyCityId');
		var _this = this;
		if($(".rank_error").length){
			$(".rank_error").remove();
			$(".rankUl").addClass("det_loading");
		}
		var url = $("#apiPath").val() + "item/productJsonp/relationProduct/"+productCode+".shtml"
		$(".rankUl").addClass('floor-loading');

		$.ajax({
			url : url,
			type: "GET",
			dataType:"jsonp",
			timeout:5000,
			data : {
				'productCode' : productCode,
				'cityId' : cityId,
				'categoryId' : categoryId
			},
			success:function(data){
				_this.renderDom(data);
				$(".rankUl").addClass('floor-lazy-done');

			},
			error:function(){
				$(".rankUl").removeClass("det_loading").html("").append('<div class="rank_error">加载失败，请点击<a href="#">重新加载</a></div>');
			}
		});

		this.renderDom = function(data){
			var item = data.itemList;
			var str ="";
			for(var i=0,len=item.length;i<len;i++){
				str+='<li><div class="rankPic"><a href="'+$("#itemPath").val()+item[i].productCode+'.shtml" target="_blank"><img class="lazy" src="'+$("#basePath").val()+'images/lazyPic.png" data-original="'+detInitConfig.imgPath+'product/80/80/'+item[i].img+'" height="65" width="65"></a></div>';
				str+= '<div class="rankMsg"><a href="'+$("#itemPath").val()+item[i].productCode+'.shtml" target="_blank">'+item[i].productName+'</a><p>&yen;'+item[i].price.toFixed(2)+'/'+item[i].units+'</p></div></li>';
			}
			$(".rankUl").removeClass("det_loading").append(str);
			$(".rankUl").find("img").lazyLoadIndex();
		}
	}

	// 浏览记录
	function loadHis(){
		var _this = this;
		$(".rankUl_scaled").addClass('floor-loading');
		if($(".rank_error").length){
			$(".rank_error").remove();
			$(".rankUl_scaled").addClass("det_loading");
		}
		var url = $("#h_myPath").val()+"record/writeRecord.shtml";
		$.ajax({
			url : url,
			type: "GET",
			dataType:"jsonp",
			timeout:5000,
			data:{productCode:$('#productCode').val(),client_type:2},
			success:function(data){
				if (!!data.data.length) {
					_this.renderDom(data);
					$(".rankUl_scaled").addClass('floor-lazy-done');
				}else{
					$('.rankUl_scaled').remove();
				}
			},
			error:function(){
				$(".rankUl_scaled").removeClass("det_loading").html("").append('<div class="rank_scaled_error">加载失败，请点击<a href="#">重新加载</a></div>');
			}
		});

		this.renderDom = function(data){
			var item = data.data;
			var str ="";
			for(var i=0,len=item.length;i<len;i++){
				str+='<li><div class="rankPic"><a href="'+$("#itemPath").val()+item[i].productCode+'.shtml" target="_blank"><img class="lazy" src="'+$("#basePath").val()+'/images/lazyPic.png" data-original="'+detInitConfig.imgPath+'product/80/80/'+item[i].imgUrl+'" height="65" width="65"></a></div>';
				str+= '<div class="rankMsg"><a href="'+$("#itemPath").val()+item[i].productCode+'.shtml" target="_blank">'+item[i].productName+'</a><p>&yen;'+parseFloat(item[i].price).toFixed(2)+'/'+item[i].units+'</p></div></li>';

			}
			$(".rankUl_scaled").removeClass("det_loading").append(str);
			$(".lazy").lazyLoadIndex();
		}
	}

	//评论数据加载
	function addDisContent(){
		var productCode =$("#productCode").val();
		var _this = this;
		// 加载评论百分比
		this.disToatal = $(".dis_total");
		this.disToatal.addClass("floor-loading");
		this.addPercent = function(){
			$.ajax({
				url : $("#apiPath").val() + "item/productJsonp/evaluationPer/"+productCode+".shtml",
				type : "GET",
				dataType:"jsonp",
				timeout :  5000,
				success : function(data){
					_this.disToatal.removeClass("det_loading");
					var datap = data.countDto;
					_this.addPcon(datap);
					_this.disToatal.addClass("floor-lazy-done");
				},
				error : function(){

				}
			})
		};

		this.addPcon = function(data){
			var strNum = ''
			strNum += '<div class="dis_total_num fl">好评度 <strong>'+data.perHaoPing+'</strong><em>%</em></div>';
			var prsArr = ['非常不满','不满意','一般','满意','非常满意'];
			var prsta = '';
			prsta += '<div class="dis_total_scales fr">';

			for(var i=1,len=prsArr.length;i<=len;i++){
				if(data.status === i){
					prsta +='<dl class="dts_dl dts_dl_act"><dd><i class="u-icon">&#xe61b;</i></dd>'
					prsta +='<dt>'+prsArr[i-1]+'</dt></dl>';
					continue;
				}
				prsta +='<dl class="dts_dl"><dd><i class="u-icon">&#xe61b;</i></dd>'
				prsta +='<dt>'+prsArr[i-1]+'</dt></dl>';
			};
			prsta += '<div class="hr"></div></div>'

			_this.disToatal.append(strNum).append(prsta);
		};

		this.addiscon = function(){
			var productCode =$("#productCode").val();
			$(".dis_container").addClass("floor-loading");
			$.ajax({
				url: $("#apiPath").val() + 'item/productJsonp/evaluation/'+productCode+'.shtml?scorelivel=0',
				type: 'GET',
				dataType: 'jsonp',
				timeout:5000,
				success : function(data){
					$(".dis_container").removeClass("det_loading");
					_this.addFn(data.pv);

					_this.addPaging(data.pv,1);
					var dataDisNum = data.countDto;
					$("#all_dis").html(dataDisNum.chaCount + dataDisNum.haoCount + dataDisNum.middleCount)
					$("#good_dis").html(dataDisNum.haoCount)
					$("#mid_dis").html(dataDisNum.middleCount)
					$("#bad_dis").html(dataDisNum.chaCount)

					$(".dis_container").addClass("floor-lazy-done");
					//
					$("#dis_tabBtn").find(".moveli").width($("#dis_tabBtn li").eq(0).outerWidth());
				},
				error : function(){
					//console.log("error")
				}
			})

		};

		// 加载分页
		this.addPaging = function(data,index,plid){
			var pageCount = data.pageCount;
			var pageNow = data.pageNow;
			var pageStart = data.startPage;
			var str="";
			if(pageCount <= 0){
				if(plid){
					switch(plid){
						case "0":
							$(".dis_container").html("");
							$("<div class='errMsg'>本商品暂无评论！</div>").prependTo($(".dis_container"));
							break;
						case "1":
							$(".dis_container").html("");
							$("<div class='errMsg'>本商品暂无好评！</div>").prependTo($(".dis_container"));
							break;
						case "2":
							$(".dis_container").html("");
							$("<div class='errMsg'>本商品暂无中评！</div>").prependTo($(".dis_container"));
							break;
						case "3":
							$(".dis_container").html("");
							$("<div class='errMsg'>本商品暂无差评！</div>").prependTo($(".dis_container"));
							break;
					}
				}else{
					$(".dis_container").html("");
					$("<div class='errMsg'>本商品暂无评论！</div>").prependTo($(".dis_container"));
				}

				return;
			}else if(pageCount == 1){
				str += '<span class="disabled">首页</span>';
				str += '<span class="disabled">上一页</span>';
				str += '<span class="current">'+1+'</span>';
				str += '<span class="disabled">下一页</span>';
				str += '<span class="disabled">尾页</span>';
				$(".pagingCons01").html("").append(str);
				return;
			}else{
				function btnsFn(index){

					if(pageNow == 1){
						str += '<span class="disabled">首页</span>';
						str += '<span class="disabled">上一页</span>';
					}else{
						str += '<a href="javascript:;" class="gotoIndex">首页</a>';;
						str += '<a href="javascript:;" class="prevPage">上一页</a>';;
					}

					if(pageNow != 1 && pageNow >= 4 && pageCount != 4){
						str += '<a href="javascript:;" data-index="'+1+'">'+1+'</a>';
					}
					if(pageNow-2 > 2 && pageNow <= pageCount && pageCount > 5){
						str += '<span>...</span>';
					}

					//中间页码
					// if(pageNow != 1 && pageNow >= 4 && pageCount != 4){
					// 	str +='<a href="javascript:;" class="tcdNumber">'+1+'</a>';
					// }
					// if(pageNow-2 > 2 && pageNow <= pageCount && pageCount > 5){
					// 	str+='<span>...</span>';
					// 	console.log(111);
					// }
					var start = pageNow -2,end = pageNow+2;
					if((start > 1 && pageNow < 4)||pageNow == 1){
						end++;
					}
					if(pageNow > pageCount-4 && pageNow >= pageCount){
						start--;
					}
					for (;start <= end; start++) {
						if(start <= pageCount && start >= 1){
							if(start != pageNow){
								str +='<a href="javascript:;" data-index="'+start+'">'+ start +'</a>';
							}else{
								str += '<span class="current">'+ start +'</span>';
							}
						}
					}

					if(pageNow + 2 < pageCount - 1 && pageNow >= 1 && pageCount > 5){
						str += '<span>...</span>';
						//console.log(222);
					}
					if(pageNow != pageCount && pageNow < pageCount -2  && pageCount != 4){
						str += '<a href="javascript:;" data-index="'+pageCount+'">'+pageCount+'</a>';
					}
					// 下一页
					if(index == pageCount){
						str +='<span class="disabled">下一页</span>' + '<span class="disabled">末页</a>';
					}else{
						str +='<a href="javascript:;" class="nextPage">下一页</a>' + '<a href="javascript:;" class="lastPage">末页</a>';
					}
				}

				btnsFn(index);

			};


			$(".pagingCons01").get(0).innerHTML="";
			$(".pagingCons01").html(str);

			// 点击数字页
			$(".pagingCons01").delegate('a:not(".nextPage,.lastPage,.prevPage,.gotoIndex")', 'click', function(event) {
				event.preventDefault();
				var that = $(this);
				var pageIndex = parseInt(that.attr("data-index"));
				var plids = $("input[name='comment']:checked").attr("data-plid");
				_this.clickFn(that,pageIndex,plids);
				return false;
			});
			// 点击上一页
			$(".pagingCons01").delegate('.prevPage', 'click', function(event) {
				event.preventDefault();
				var that = $(this);
				var pageIndex = parseInt(that.parent().find(".current").text()) - 1 ;
				var plids = $("input[name='comment']:checked").attr("data-plid");
				_this.clickFn(that,pageIndex,plids);
				return false;
			});

			// 点击下一页
			$(".pagingCons01").delegate('.nextPage', 'click', function(event) {
				event.preventDefault();
				var that = $(this);
				var pageIndex = parseInt(that.parent().find(".current").text()) + 1 ;
				var plids = $("input[name='comment']:checked").attr("data-plid");
				_this.clickFn(that,pageIndex,plids);
				return false;
			});

			// 点击末页
			$(".pagingCons01").delegate('.lastPage', 'click', function(event) {
				event.preventDefault();
				var that = $(this);
				var pageIndex = parseInt(pageCount);
				var plids = $("input[name='comment']:checked").attr("data-plid");
				_this.clickFn(that,pageIndex,plids);
				return false;
			});

			// 点击首页
			$(".pagingCons01").delegate('.gotoIndex', 'click', function(event) {
				event.preventDefault();
				var that = $(this);
				_this.clickFn(that,1);
				return false;
			});

		};

		this.clickFn = function(that,clickIndex,plid){
			var productCode =$("#productCode").val();
			if(that.attr("data-event") == "cked"){
				return;
			}
			that.attr("data-event","cked");

			var url = null;
			if(plid){
				url = $("#apiPath").val() + "item/productJsonp/evaluation/"+productCode+".shtml?scorelivel="+plid+"&pageNow="+clickIndex+"";
			}else{
				url = $("#apiPath").val() + "item/productJsonp/evaluation/"+productCode+".shtml?scorelivel=0&pageNow="+clickIndex+"";
			}

			$.ajax({
				type : "GET",
				url : url,
				dataType : "jsonp",
				timeout : 5000,
				success : function(datas){
					that.attr("data-event","");
					_this.addFn(datas.pv);
					_this.addPaging(datas.pv,clickIndex,plid);
					//111111111111111111111111
					$("html,body").stop(true).animate({scrollTop : stop},300);
				},
				error : function(){

				}
			})
		}

		// 加载评论内容
		this.addFn = function(data){
			var records = data.records;
			var pageCount = data.pageCount;

			$(".dis_container").removeClass("det_loading");
			if(records.length == 0){
				return;
			}else{
				var str ="";
				if(pageCount >= 1){
					for(var i =0; i<records.length; i++){

						str += '<div class="dis_content">'
						str += '<div class="g-bd5 f-cb">'
						str += '<div class="g-sd51">'
						str += '<div class="dis_name_con">'
						str += '<div class="dis_una">'+records[i].loginAcc+'</div>'
						str += '<div class="dis_lev"><img src="'+$("#imgPath").val()+'product/16/16/'+records[i].userLogo+'" width="16" height="16"><span>'+records[i].gradeName+'</span></div></div></div>';
						str += 	   ' <div class="g-mn5">';
						str += 	       ' <div class="g-mn5c">'
						str += 	            '<div class="dis_text">'+records[i].commentContent+'</div>'

						if(records[i].reviewStatus == 2 && '' != records[i].reviewContent){
							str += '<div class="dis_text_replay"><span>回复：</span>'+records[i].reviewContent+'</div>'
						}

						str += 	            '<div class="dis_ggnum">'
						str += 	            	'<span>购买数量：'+records[i].nums+'</span>'
						if(records[i].specName != "" || records[i].specValue != ""){
							str += 	  '<span>'+records[i].specName+'：'+records[i].specValue+'</span>'
						}
						str += 	           ' </div>'
						str += 	        '</div>'
						str += 	    '</div>'
						str += 	    '<div class="g-sd52">'
						str += 	        '<p>'+records[i].createDateStr+'</p>'
						str += 	    '</div>'
						str += 	'</div>'
						str += '</div>'
					}
					$(".dis_container").html("").append(str);
				};
			};

		}

	};

	$("body").on("click",".active_dis",function(){
		 $.scrollShow($(".dis_total"),function(){
			new addDisContent().addPercent();
			new addDisContent().addiscon();
		});
	});

	//销售记录
	function addSoldMsg(){
		var productCode =$("#productCode").val();
		var cityId = cookieJS.getCookie('cyCityId') ? cookieJS.getCookie('cyCityId') : "";
		var _this = this;
		this.addobj = $(".tbody_sold");

		$.ajax({
			url : $("#apiPath").val() + "item/productJsonp/salesRecord/"+productCode+".shtml?cityId="+cityId,
			type:"GET",
			dataType:"jsonp",
			timeout:5000,
			success : function(data){
				_this.addSoldCon(data.pv);
				_this.addPaging(data.pv,1);
				$(".sold_total strong").html(data.sumNums);
				$(".active_sold").attr("data-loads","loaded");
			},
			error:function(){

			}
		});

		this.addSoldCon = function(data){
			var records = data.records;
			var pageCount = data.pageCount;
			if(records.length == 0){
				return;
			}else{
				var str ="";
				if(pageCount >= 1){
					for(var i=0,len=records.length;i<len;i++){
						var sp = records[i].specValue ? records[i].specValue : "无";
						str +='<tr>'
						str +=	'<td>'+records[i].loginAcc+'</td>'
						str +=	'<td>'+records[i].nums+'</td>'
						str +=	'<td>'+records[i].buyDate+'</td>'
						str +=	'<td>'+sp +'</td>'
						str +='</tr>'
					}

					_this.addobj.html("").append(str)
				}
			}

		};

		// 加载分页
		this.addPaging = function(data,index,plid){
			var pageCount = data.pageCount;
			var pageNow = data.pageNow;
			var pageStart = data.startPage;
			var str="";
			if(pageCount <= 0){
				//console.log(1)
				return;
			}else if(pageCount == 1){
				str += '<span class="disabled">首页</span>';
				str += '<span class="disabled">上一页</span>';
				str += '<span class="current">'+1+'</span>';
				str += '<span class="disabled">下一页</span>';
				str += '<span class="disabled">尾页</span>';
				$(".pagingCons02").html('').append(str);
				return;
			}else{
				function btnsFn(index){

					if(pageNow == 1){
						str += '<span class="disabled">首页</span>';
						str += '<span class="disabled">上一页</span>';
					}else{
						str += '<a href="javascript:;" class="gotoIndex">首页</a>';;
						str += '<a href="javascript:;" class="prevPage">上一页</a>';;
					}

					if(pageNow != 1 && pageNow >= 4 && pageCount != 4){
						str += '<a href="javascript:;" data-index="'+1+'">'+1+'</a>';
					}
					if(pageNow-2 > 2 && pageNow <= pageCount && pageCount > 5){
						str += '<span>...</span>';
					}

					//中间页码
					// if(pageNow != 1 && pageNow >= 4 && pageCount != 4){
					// 	str +='<a href="javascript:;" class="tcdNumber">'+1+'</a>';
					// }
					// if(pageNow-2 > 2 && pageNow <= pageCount && pageCount > 5){
					// 	str+='<span>...</span>';
					// 	console.log(111);
					// }
					var start = pageNow -2,end = pageNow+2;
					if((start > 1 && pageNow < 4)||pageNow == 1){
						end++;
					}
					if(pageNow > pageCount-4 && pageNow >= pageCount){
						start--;
					}
					for (;start <= end; start++) {
						if(start <= pageCount && start >= 1){
							if(start != pageNow){
								str +='<a href="javascript:;" data-index="'+start+'">'+ start +'</a>';
							}else{
								str += '<span class="current">'+ start +'</span>';
							}
						}
					}

					if(pageNow + 2 < pageCount - 1 && pageNow >= 1 && pageCount > 5){
						str += '<span>...</span>';
						//console.log(222);
					}
					if(pageNow != pageCount && pageNow < pageCount -2  && pageCount != 4){
						str += '<a href="javascript:;" data-index="'+pageCount+'">'+pageCount+'</a>';
					}
					// 下一页
					if(index == pageCount){
						str +='<span class="disabled">下一页</span>' + '<span class="disabled">末页</a>';
					}else{
						str +='<a href="javascript:;" class="nextPage">下一页</a>' + '<a href="javascript:;" class="lastPage">末页</a>';
					}
				}
				btnsFn(index);
			};


			$(".pagingCons02").get(0).innerHTML="";
			$(".pagingCons02").html(str);

			// 点击数字页
			$(".pagingCons02").delegate('a:not(".nextPage,.lastPage,.prevPage,.gotoIndex")', 'click', function(event) {
				event.preventDefault();
				var that = $(this);
				var pageIndex = parseInt(that.attr("data-index"));
				var plids = $("input[name='comment']:checked").attr("data-plid");
				_this.clickFn(that,pageIndex,plids);
				return false;
			});

			// 点击上一页
			$(".pagingCons02").delegate('.prevPage', 'click', function(event) {
				event.preventDefault();
				var that = $(this);
				var pageIndex = parseInt(that.parent().find(".current").text()) - 1 ;
				var plids = $("input[name='comment']:checked").attr("data-plid");
				_this.clickFn(that,pageIndex,plids);
				return false;
			});

			// 点击下一页
			$(".pagingCons02").delegate('.nextPage', 'click', function(event) {
				event.preventDefault();
				var that = $(this);
				var pageIndex = parseInt(that.parent().find(".current").text()) + 1 ;
				var plids = $("input[name='comment']:checked").attr("data-plid");
				_this.clickFn(that,pageIndex,plids);
				return false;
			});

			// 点击末页
			$(".pagingCons02").delegate('.lastPage', 'click', function(event) {
				event.preventDefault();
				var that = $(this);
				var pageIndex = parseInt(pageCount);
				var plids = $("input[name='comment']:checked").attr("data-plid");
				_this.clickFn(that,pageIndex,plids);
				return false;
			});

			// 点击首页
			$(".pagingCons02").delegate('.gotoIndex', 'click', function(event) {
				event.preventDefault();
				var that = $(this);
				_this.clickFn(that,1);
				return false;
			});

		};

		this.clickFn = function(that,clickIndex,plid){
			var productCode =$("#productCode").val();
			if(that.attr("data-event") == "cked"){
				return;
			}
			that.attr("data-event","cked");

			var url = $("#apiPath").val() + "item/productJsonp/salesRecord/"+productCode+".shtml?cityId="+cityId+"&pageNow="+clickIndex+"";

			$.ajax({
				type : "GET",
				url : url,
				dataType : "jsonp",
				timeout : 5000,
				success : function(datas){
					that.attr("data-event","");
					_this.addSoldCon(datas.pv);
					_this.addPaging(datas.pv,clickIndex,plid);
					$("html,body").stop(true).animate({scrollTop : stop},300);
				},
				error : function(){

				}
			})
		}

	}

	function showBuyNow(event,obj){

		var productSku = $(".inf_gg_active").attr("data-sku");
		var quantity = $("#but_num").find("input").val();
		var $this = obj;
		$this.html("提交中...");
		if($this.attr("data-send") == "sended"){
			return;
		}
		$this.attr("data-send","sended");
		$.ajax({
			type : 'get',
			dataType : "jsonp",//数据类型为jsonp
	        jsonp: "callback",
	        timeout: 5000,
			url : $("#h_loginPath").val() + '/login/checkLoginAjax.shtml',
			success : function(data) {
				if (data.code == '200')
				{
					var url = '';
					if(detInitConfig.productInfoType === "2"){
						url = $("#myPath").val()+'checkOrder/checkOrderAmount.shtml?vendorSkus='+productSku+'&salesNum='+quantity+'&source=2'
					}else{
						url = $("#myPath").val()+'checkOrder/checkOrderAmount.shtml?proSkus='+productSku+'&salesNum='+quantity+'&source=2'
					}
					$.ajax({
						async : false,
						type :'POST',
						dataType : 'jsonp',
						jsonp:'callback',
						timeout: 5000,
						url:url,
						success : function(data){
							if(data.code=="E_0001"){
								   $.xeConfirm({str:data.msg,alerts:true,bgClick:false})
							       return;
						    }
							var psid = $(".selectedPlace").find(".dstion-input").attr("data-id")
							if(detInitConfig.productInfoType === "2"){
								window.location.href=$("#myPath").val()+'checkOrder/order.shtml?vendorSkus='+productSku+'&salesNum='+quantity+'&source=2';
							}else{
								window.location.href=$("#myPath").val()+'checkOrder/order.shtml?proSkus='+productSku+'&salesNum='+quantity+'&source=2';
							}

						}
					});
				}
				else
				{
					//显示登录框
					event.preventDefault();
					$('.bg-ball,.xeConfirm_bg1').show();
				}
				$this.attr("data-send","");
				$this.html('立即购买');

			},
			error : function(){
				$this.attr("data-send","");
				$this.html('立即购买');
			}
		});
	}


	//立即购买
	$("body").on('click','.buy_btn:not(.det_abtn_disabled)', function(event) {
		event.preventDefault();
		var idys = $(this).attr("id");
		if(!!idys){
			var qua = parseFloat($(".dt_quan").attr("data-quantity"));
			var miniorde = parseFloat($(".dt_quan").attr("data-minorder"));
			if(qua < miniorde){
				$.xeConfirm({str : "由于库存原因，该商品暂不支持购买！",bgClick : true});
				return;
			}
		}
		showBuyNow(event,$(this));
	});

	$("body").on('click','.det_abtn_disabled', function(event) {
		event.preventDefault()
	});

	//套装加入购物车
	$("body").on('click','.comboToCart', function(event) {
		event.preventDefault();
		var id = $(this).attr("data-comdeid");
		if($(this).attr("data-sends")=="sended"){
			return;
		};
		$(this).attr("data-sends","sended");
		myinqAni.init($(this),".vm-mct-cart",function(){});
		addCart(id);
	});




	// 三方详情页信息 *****

	if(detInitConfig.productInfoType == "2") {

		detInitConfig.proSku = $("#productSku").val(); //三方时取SKU

		// 接受询价方式 0自提价，1到岸价，2前两者都有
		var distribution = null;


		var venderCodes = null;

		function loadDetBusMsg(){
			var areaId = cookieJS.getCookie('cyAreaId') ? cookieJS.getCookie('cyAreaId') : ''; //区ID
			var areaName = cookieJS.getCookie('cyAreaName') ? cookieJS.getCookie('cyAreaName') : '';//市名称
			var gradeId = cookieJS.getCookie('userGrade') ? cookieJS.getCookie('userGrade') : '';//会员等级id
			var _this = this;

			_this.dt_msg_pri = $('<div class="dt_msg_pri"></div>');
			_this.dt_msg_fw = $('<div class="dt_msg_fw"></div>');
			_this.dt_msg_ch = $('<div class="dt_msg_ch1"></div>');
			_this.dt_msg_qa = $('<div class="dt_msg_qa"></div>');
			_this.dt_msg_btn = $('<div class="dt_msg_btn"></div>');

			if($(".msg_error").length){
				$(".msg_error").remove();
				$(".msg_ajax").addClass("det_loading");
			}

			var url = $("#apiPath").val() + "item/productJsonp/jsonp/"+detInitConfig.proSku+".shtml";
			//var url = "http://qa-newapi.cy.xebest.com/item/productJsonp/jsonp/"+20008243+".shtml";

			$.ajax({
				url : url,
				type: "GET",
				dataType:"jsonp",
				timeout: 8000,
				data : {
					"cityId" : areaId, // cityId
					"cityName" : areaName
				},
				success:function(data){

					_this.priceType = data.item.priceType;//1为询报价，2为一口价
					_this.areaPrice = data.item.areaPrice;
					_this.price = data.item.areaPrice || data.item.price;
					_this.stepPriceList = data.item.stepPriceList;//无规格时阶梯价
					_this.units = data.item.unit;
					_this.speclist = data.item.specList; //规格
					_this.productSku = data.item.productSku;
					_this.minOrderQuantity = data.item.minOrderQuantity;

					_this.isUp = data.item.isup == "1" ? true : false; //是否下加，1之外都是下架

					_this.productNum = data.item.productNum;


					_this.IsQuantity2 = parseInt(data.item.isQuantity) >= 0 ? true : false;
					// 有无货
					_this.IsQuantity = parseInt(data.item.quantity) - parseInt(_this.minOrderQuantity) > 0 ? true : false;

					distribution = data.item.distribution;

					// 价格类型 1面议，2非面议
					_this.pricePattern = data.item.pricePattern;

					// 新老三方商品
					_this.inquiryType = data.item.inquiry; //1是新2是老

					_this.init(data);

					venderCodes = data.item.code;

					//收藏商品
					isCollect();

					//点击加入收藏
					$("body").delegate('#toCollect_btn','click', function(event) {
						event.preventDefault();
						addCollect(event,$(this));
					});

					//浏览记录加载
					// $.scrollShow($(".rankUl_scaled"),function(){
					// 	new loadHis();
					// });

				},
				error:function(){
					$(".msg_ajax").removeClass("det_loading").html("").append('<div class="msg_error">加载失败，请点击<a href="#">重新加载</a></div>');
				}
			});


			this.init = function(data){
				//var productSkuLists = data.item.productSkuList;
				//var productSkuList = productSkuLists[0];
				// type  (1.普通商品 2.普通阶梯价 3.普通预售商品 4.预售阶梯商品)
				//var type = productSkuList.productSkuShowType;
				// ====
				//_this.marPri(productSkuList,type);
				_this.vipPri(_this.speclist[0]);

				if(_this.priceType == "2"){
					_this.sendAdr();
				}
				//_this.flashMsg(productSkuList);
				//_this.Msgapp();

				// ====
				//_this.sendAdr();
				//_this.serviceNotice(productSkuList,type);
				//货号
				//_this.productNum(productSkuList);
				// ====
				// var time = null;
				// if(type === "1" || type === "2" ){
				// 	var ptimes = Math.floor(new Date().getTime());
				// 	if(ptimes < _this.toTime){
				// 		time = _this.toTime - ptimes;
				// 	}else{
				// 		time = 0;
				// 	}
				// }else{
				// 	time = parseInt(productSkuList.presaleEndTime)
				// }

				_this.spec();

				var firHtml = _this.dt_msg_pri;
				var secHtml = _this.dt_msg_fw;
				var thirdHtml = _this.dt_msg_ch;
				var fourHtml = _this.dt_msg_qa;

				$(".msg_ajax").append(firHtml).removeClass("det_loading");
				if(_this.priceType == "2"){
					$(".msg_ajax").append(secHtml);
				}
				if (_this.speclist.length > 0) {
					$(".msg_ajax").append(thirdHtml);
				}
				$(".msg_ajax").append(fourHtml);

				if(!_this.speclist.length){
					_this.quantity(data.item);
				}else{
					_this.quantity(_this.speclist[0]);
				}

				_this.btn(_this.speclist[0]);

				_this.getSkuSpec();

				$(".dt_msg_btn").show();

				if(_this.priceType == "2"){
					_this.getSendAddress();
				}


			};

			//会员价
			this.vipPri = function(specData){

				if(!!specData){
					// 规格有值且是阶梯价时
					if(specData.specStepList.length > 0){
						var str = '<div class="msgInfor">'

						if(specData.specStepList.length  > 2){
							str +=		'<i class="bg_sprite cur-more"></i>'
						}
						str +=		'<dl class="dt_msg_list dt_msg_price">'
						str += '<dt>阶梯价</dt>'
						str +=			'<dt class="dt_numBegin">起批量</dt>'
						str += '<dd class="clearfix">'
						for(var s=0,len=specData.specStepList.length; s <len ; s++){
							if(s > 2){
								str += '<div class="dt_pricon" style="margin-top:10px">'
							}else{
								str += '<div class="dt_pricon">'
							}
							str += '<p class="dt_prip"><em>&yen;</em><strong>'+parseFloat(specData.specStepList[s].price).toFixed(2)+'</strong></p>'

							if(s >= specData.specStepList.length -1 ){
								//str += '<p class="dt_pri_details"> &ge;'+specData.specStepList[s].startQuantity+'<span class="rmb">&yen;</span>'+parseFloat(specData.specStepList[s].endQuantity).toFixed(2)+'/斤</p>'
								str += '<p class="dt_pri_details"> &ge;'+specData.specStepList[s].startQuantity+''+_this.units+''
							}else{
								str += '<p class="dt_pri_details">'+specData.specStepList[s].startQuantity+'--'+specData.specStepList[s].endQuantity+''+_this.units+'</p>'
							}

							str += '</div>'
						}
						str +=			'</dd>'
						str +=		'</dl>'
						str +=	'</div>'

						_this.dt_msg_pri.append(str);
					}else{
						// 不是阶梯价
						if(_this.pricePattern == "1"){
							var str = '<dl class="dt_msg_list dt_msg_price">'
							str +=	'<dt>会员价</dt>'
							str +=		'<dd>'
							str +=			'<p data-pri="'+parseFloat(_this.price).toFixed(2)+'" class="dt_pri"><strong>面议</strong></p>'
							str +=	   '</dd></dl>';
						}else{
							var price = specData.areaPrice ? specData.areaPrice : specData.price
							var str = '<dl class="dt_msg_list dt_msg_price">'
								str +=	'<dt>会员价</dt>'
								str +=		'<dd>'
								str +=			'<p data-pri="'+parseFloat(price).toFixed(2)+'" class="dt_pri"><em>&yen;</em><strong>'+parseFloat(price).toFixed(2)+'<i style="vertical-align:top;" class="f18">/'+_this.units+'</i></strong></p>'
							str +=	   '</dd></dl>';
						}
							_this.dt_msg_pri.append(str);
					}
				}else{
					if(_this.stepPriceList.length > 0 ){

						var str = '<div class="msgInfor">'

						if(_this.stepPriceList.length  > 2){
							str +=		'<i class="bg_sprite cur-more"></i>'
						}
						str +=		'<dl class="dt_msg_list dt_msg_price">'
						str += '<dt>阶梯价</dt>'
						str +=			'<dt class="dt_numBegin">起批量</dt>'
						str += '<dd class="clearfix">'

						for(var s=0,len=_this.stepPriceList.length; s <len ; s++){
							if(s > 2){
								str += '<div class="dt_pricon" style="margin-top:10px">'
							}else{
								str += '<div class="dt_pricon">'
							}
							str += '<p class="dt_prip"><em>&yen;</em><strong>'+parseFloat(_this.stepPriceList[s].price).toFixed(2)+'</strong></p>'
							if(s >= _this.stepPriceList.length -1 ){
								str += '<p class="dt_pri_details"> &ge;'+_this.stepPriceList[s].startQuantity+''+_this.units+''
							}else{
								str += '<p class="dt_pri_details">'+_this.stepPriceList[s].startQuantity+'--'+_this.stepPriceList[s].endQuantity+''+_this.units+'</p>'
							}

							str += '</div>'
						}
						str +=			'</dd>'
						str +=		'</dl>'
						str +=	'</div>'

						_this.dt_msg_pri.append(str);

					}else{
						if(_this.pricePattern == "1"){
							var str = '<dl class="dt_msg_list dt_msg_price">'
							str +=	'<dt>会员价</dt>'
							str +=		'<dd>'
							str +=			'<p data-pri="'+parseFloat(_this.price).toFixed(2)+'" class="dt_pri"><strong>面议</strong></p>'
							str +=	   '</dd></dl>';
						}else{
							var str = '<dl class="dt_msg_list dt_msg_price">'
							str +=	'<dt>会员价</dt>'
							str +=		'<dd>'
							str +=			'<p data-pri="'+parseFloat(_this.price).toFixed(2)+'" class="dt_pri"><em>&yen;</em><strong>'+parseFloat(_this.price).toFixed(2)+'<i style="vertical-align:top;" class="f18">/'+_this.units+'</i></strong></p>'
							str +=	   '</dd></dl>';
						}

						_this.dt_msg_pri.append(str);
					}

				};

			};

			// 配送至
			this.sendAdr = function(){

				var str = '<dl class="dt_msg_list">'
					str +=		'<dt class="dt_msg_tips">配送至</dt><dd>'
					str +=			'<div class="dispatPlace">'
					str +=				'<div class="selectedPlace fl"></div>'
					str +=				'<span class="dispatText" id="dispatText"></span>'
					str +=			'</div></dd></dl>';

				_this.dt_msg_fw.append(str);
			}
			// 默认地址
			this.getSendAddress = function(){
				var devalue = null;

				var cyProvinceName = $.cookie('cyProvinceName') ? $.cookie('cyProvinceName') : '';
			    var cyProvinceId = $.cookie('cyProvinceId') ? $.cookie('cyProvinceId') : '';
			    var cyCityName = $.cookie('cyCityName') ? $.cookie('cyCityName') : '';
			    var cyCityId = $.cookie('cyCityId') ? $.cookie('cyCityId') : '';
			    var cyAreaName = $.cookie('cyAreaName') ? $.cookie('cyAreaName') : '';
			    var cyAreaId = $.cookie('cyAreaId') ? $.cookie('cyAreaId') : '';

				if(!!cyProvinceName && !!cyProvinceId && !!cyCityName && !!cyCityId && !!cyAreaName && !!cyAreaId) {
					var arrid = [cyProvinceId,cyCityId,cyAreaId];
					var arrname = [cyProvinceName,cyCityName,cyAreaName];
					devalue = {
						deId : arrid.join("-"),
						deName : arrname.join("-")
					}
					//_this.checkIsDeliveryArea($.cookie("cyCityId"),$(".dt_msg_list .dd_gg").find(".inf_gg_active").attr("data-sku"),arrid.join("-"));

				}else{
					devalue = null
				}
				//详情页收货地址添加
				$(".selectedPlace").adrSelects({
					defaultValue : devalue,//默认回显地址
			        fn : function (cdata){
						var name = cdata.name.split('-');
		                var id = cdata.id.split('-');
		                var pName = name[0];
		                var pId = id[0];
		                var cName = name[1];
		                var cId = id[1];
		                var aName = name[2];
		                var aId = id[2];

		                $.cookie('cyProvinceName',pName,{expires:365,domain:'.xebest.com',path:'/'});
		                $.cookie('cyProvinceId',pId,{expires:365,domain:'.xebest.com',path:'/'});
		                $.cookie('cyCityName',cName,{expires:365,domain:'.xebest.com',path:'/'});
		                $.cookie('cyCityId',cId,{expires:365,domain:'.xebest.com',path:'/'});
		                $.cookie('cyAreaName',aName,{expires:365,domain:'.xebest.com',path:'/'});
		                $.cookie('cyAreaId',aId,{expires:365,domain:'.xebest.com',path:'/'});

						$(".msg_ajax").html("").addClass('det_loading');

						window.location.reload();

			        },// 选择区后的回调方法
			        position : "left", // 位置 默认为 "left",可选值"right" "center";
			        cookieFlag : false, // 是否写入cookie ，默认false 传入true会写COOKIE
			        usedAdr : true,
					usedAdrFn : function(adrdata){
						var name = adrdata.adrname.split('-');
		                var id = adrdata.adrid.split('-');
		                var pName = name[0];
		                var pId = id[0];
		                var cName = name[1];
		                var cId = id[1];
		                var aName = name[2];
		                var aId = id[2];

		                $.cookie('cyProvinceName',pName,{expires:365,domain:'.xebest.com',path:'/'});
		                $.cookie('cyProvinceId',pId,{expires:365,domain:'.xebest.com',path:'/'});
		                $.cookie('cyCityName',cName,{expires:365,domain:'.xebest.com',path:'/'});
		                $.cookie('cyCityId',cId,{expires:365,domain:'.xebest.com',path:'/'});
		                $.cookie('cyAreaName',aName,{expires:365,domain:'.xebest.com',path:'/'});
		                $.cookie('cyAreaId',aId,{expires:365,domain:'.xebest.com',path:'/'});

						window.location.reload();
						//_this.checkIsDeliveryArea($.cookie("cyCityId"),$(".details_main_promsg").find(".inf_gg_active").attr("data-sku"),$(".dstion-plugins").find(".dstion-input").attr("data-id"));
					}
			    });

				$(".dt_msg_btn").show();
			}

			// 货号和规格
			this.getSkuSpec = function(){
				var product_spec = $("#product_spec_li").find('.f-ellipsis');
				var product_num = $("#product_num_li").find('.f-ellipsis');

				var spec = $(".inf_gg_active").html();

				if(spec.indexOf('>') > 0) {
					spec = $(".inf_gg_active").html().split('<')[0];
				}else{
					spec = '无';
				}
				product_spec.html(spec);
				product_num.html(_this.productNum);
				$("#product_spec_li,#product_num_li").show();
			};

			// 规格
			this.spec = function(){
				if(_this.speclist.length > 0) {
					var str = '<dl class="dt_msg_list"><dt>规格</dt><dd class="dd_gg">'
					for(var i=0,len = _this.speclist.length; i<len; i++){
						if( i === 0){
							str +='<span data-sku="'+_this.speclist[i].productsku+'" class="inf_gg inf_gg_active">'+_this.speclist[i].specValue+'<i class="u-icon">&#xe610;</i></span>';
							continue;
						}
						str +='<span data-sku="'+_this.speclist[i].productsku+'" class="inf_gg">'+_this.speclist[i].specValue+'<i class="u-icon">&#xe610;</i></span>';
					}

					str +='</dd></dl>';

					//console.log(str);

					_this.dt_msg_ch.append(str);


					// 加载其它规格商品
					_this.reload();
				}else{
					$(".dt_msg_name").find("h2").addClass('inf_gg_active').attr({"data-sku": _this.productSku});
				}

			};

			this.reload = function(data){
				$("body").on("click",".inf_gg",function(){
					var inf_this = $(this);
					if($(this).hasClass("inf_gg_active")){
						return;
					}
					var index = $(".inf_gg").index(this);
					var thisku = $(this).attr("data-sku");
					var gradeId = _this.gradeId;

					$(".inf_gg").removeClass("inf_gg_active").eq(index).addClass("inf_gg_active");

					isCollect();

					for(var i=0;i<_this.speclist.length;i++){
						if(thisku === _this.speclist[i].productsku) {
							_this.dt_msg_pri.find(".dt_msg_priceOn,.dt_msg_price,.activeInfor,.msgInfor").remove();
							_this.vipPri(_this.speclist[i]);
							_this.quantity(_this.speclist[i]);
							_this.btn(_this.speclist[i]);
							break;
						}
					};

					_this.getSkuSpec();

				});
			}

			this.quantity = function(datas){
				console.log(_this.IsQuantity2)
				if(!_this.IsQuantity2) {
					$(".dt_quan").remove();
					return;
				}

				if(!datas.areaPrice && _this.inquiryType != 2) {
					$(".dt_quan").remove();
					return;
				}

				if($("#but_num").attr("data-quantity") === "done") {
					$("#but_num").html("");
				};

				var str = '<dl class="dt_msg_list dt_quan">';
					str +='<dt>购买数量</dt><dd class="clearfix"><div class="countBtn fl" id="but_num"></div>';
					str += '<div class="but_tips fl">'
					str += '<span>库存<strong>'+datas.quantity+'</strong>'+_this.units+'</span>'
					str += '<span>此货品最小起订量为<em>'+_this.minOrderQuantity+'</em>'+_this.units+'</span>'
					str += '</div></dd></dl>';

					if($(".dt_quan").length){
						$(".dt_quan").remove();
					};
					_this.dt_msg_qa.append(str);
					$("#but_num").Spinner({
						value: _this.minOrderQuantity,
						min: _this.minOrderQuantity,
						len :((datas.quantity+'').length) + 1,
						max: datas.quantity,
						decimal : true //是否启用小数点
					}).attr("data-quantity","done");
			};

			this.btn = function(specData){

				var btnFlag = false;
				var str = '<dl class="dt_msg_list fmb"><dd class="f0">'
				if(!_this.isUp){
					str+= '<div class="soldOut">很抱歉，此商品已下架！</div>';
							$("#dispatText").html("商品已下架");
				}else if(specData && parseInt(specData.quantity) - parseInt(_this.minOrderQuantity) < 0){
					str+= '<a href="##" class="det_abtn dh_btn">到货通知</a>';
					btnFlag = true;
					$("#dispatText").html("无货");
				}else{
					if(_this.inquiryType == 2){
						if(!_this.IsQuantity2){
							console.log(2222);
							str+= '<a href="##" class="det_abtn dh_btn">到货通知</a>';
							btnFlag = true;
							$("#dispatText").html("无货");
						}else{
							if(_this.priceType == "2" || _this.stepPriceList.length > 0){
								str+= '<a href="##" class="det_abtn buy_btn" title="点击此按钮，到下一步确认购买信息">立即购买</a><a href="##" class="det_abtn tocart_btn"><i class="u-icon">&#xe65b;</i>加入进货单</a>';
								$("#dispatText").html("有货");
							}else{
								str+= '<a href="##" class="det_abtn toInq_btn" title="点击此按钮，加入询价单">立即询价</a><a href="##" class="det_abtn toInqList_btn "><i class="u-icon">&#xe65b;</i>加入询价单</a>';
								$("#dispatText").html("有货");
							}
						}

					}else{

						if(!!specData){
							// 规格有值且是阶梯价时
							if(specData.specStepList.length > 0){

								str+= '<a href="##" class="det_abtn buy_btn" title="点击此按钮，到下一步确认购买信息">立即购买</a><a href="##" class="det_abtn tocart_btn"><i class="u-icon">&#xe65b;</i>加入进货单</a>';
								$("#dispatText").html("有货");
							}else{
								if(!specData.areaPrice) {
									console.log(123123);
									//debugger;
									str+= '<a href="##" class="det_abtn dh_btn">到货通知</a>';
									btnFlag = true;
									$("#dispatText").html("无货");

								}else{
									str+= '<a href="##" class="det_abtn buy_btn" title="点击此按钮，到下一步确认购买信息">立即购买</a><a href="##" class="det_abtn tocart_btn"><i class="u-icon">&#xe65b;</i>加入进货单</a>';
									$("#dispatText").html("有货");
								}

							}
						}else{
							if(!_this.IsQuantity){
								console.log(345);
								str+= '<a href="##" class="det_abtn dh_btn">到货通知</a>';
								btnFlag = true;
								$("#dispatText").html("无货");
							}else{
								if(_this.stepPriceList.length > 0 ){
									str+= '<a href="##" class="det_abtn buy_btn" title="点击此按钮，到下一步确认购买信息">立即购买</a><a href="##" class="det_abtn tocart_btn"><i class="u-icon">&#xe65b;</i>加入进货单</a>';
									$("#dispatText").html("有货");

								}else{
									if(!_this.areaPrice) {
										console.log(435345);
										str+= '<a href="##" class="det_abtn dh_btn">到货通知</a>';
										btnFlag = true;
										$("#dispatText").html("无货");
									}else{
										str+= '<a href="##" class="det_abtn buy_btn" title="点击此按钮，到下一步确认购买信息">立即购买</a><a href="##" class="det_abtn tocart_btn"><i class="u-icon">&#xe65b;</i>加入进货单</a>';
										$("#dispatText").html("有货");
									}
								}

							}

						};
					}
				}
				if(btnFlag){
					var stdh = ""
					stdh +='<div class="dhtz md_effect_1">'
					stdh +=	'<div class="md_close u-icon">&#xe60d;</div>'
					stdh +=	'<div class="dh_h3">到货通知</div>'
					stdh +=	'<div class="dh_con">'
					stdh +=		'<h4>该货品暂时缺货，请在下面输入您的手机号码，当我们有现货供应时，我们会发送短信给您！</h4>'
					stdh +=		'<p>'
					stdh +=			'<span>电话号码：</span><input type="text" maxlength="11" name="contactsPhone" id="contactsPhone" class="dh_input" placeholder="请输入手机号码"><em>手机号有误！</em>'
					stdh +=		'</p>'
					stdh +=		'<div class="dh_btnp">'
					stdh +=			'<a href="javascript:;" onclick="addArrivalNotice()" >提交</a>'
					stdh +=		'</div>'
					stdh +=	'</div>'
					stdh +='</div>'

					if($(".dhtz").length > 0){
						$(".dhtz").remove();
					}
					$("body").append(stdh);

					$("body").off('click.dhtz1');
					$(".md_close").off('click.dhtz2');

					$("body").on("click.dhtz1",".dh_btn",function(ev){
						ev.preventDefault();
						$(".dhtz").addClass("md_show");
						if($(".xeConfirm_bg").length){
							$(".xeConfirm_bg").css({visibility:"visible",opacity:0.8})
						}else{
							$("body").append('<div class="xeConfirm_bg"></div>');
							$(".xeConfirm_bg").css({
								"height" : $("html,body").height(),
								"opacity" : .8,
								"visibility" : "visible"
							});
						};
					});

					$(".md_close").on("click.dhtz2",function(){
						$(this).parent().removeClass("md_show");
						$(".xeConfirm_bg").css({opacity:0,visibility:"hidden"})
					});
				}
				str+= '</dd></dl>';

				_this.dt_msg_btn.html('').append(str);

				$(".msg_ajax").removeClass("det_loading").append(_this.dt_msg_btn);

			}

		};

		var loadDetBus = new loadDetBusMsg();


		// 立即询价
		var inqHtmlstr = '<div class="inquiry-popbox">'
				       + '<div class="inquiry-close"></div>'
				       +  '<div class="inquiry-tits">发送询价</div>'
				       +  '<div class="inquiry-plist">'
				       +      '<dl class="clearfix">'
				       +          '<dt>采购数量：</dt>'
				       +          '<dd>'
				       +              '<div class="inquiry-pnum">'
				       +                  '<div class="countBtn fl" id="but_num_pop"></div>'
				       +              '</div>'

				       +          '</dd>'
				       +      '</dl>'
				        +     '<dl class="clearfix">'
				        +         '<dt>价格类型：</dt>'
				        +         '<dd>'
				        +             '<div class="inquiry-ptype">'
				        +             '</div>'
				        +         '</dd>'
				        +     '</dl>'
				        +     '<dl class="clearfix">'
				        +         '<dt>货品单价：</dt>'
				        +         '<dd>'
				        +             '<div class="inquiry-input fl">'
				         +                '<input type="text" class="input_inq" name="dj_pri">'
				        +             '</div>'
				        +             '<div class="inq-error fl">'
				        +                 '<p class="inq-error01"><span class="u-icon">&#xe623;</span>不能为空</p>'
				        +                 '<p class="inq-succ"><span class="u-icon">&#xe622;</span></p>'
				        +             '</div>'
				        +         '</dd>'
				        +     '</dl>'
				        +     '<dl class="clearfix">'
				        +         '<dt>货品总价：</dt>'
				        +         '<dd>'
				        +             '<div class="inquiry-input fl">'
				        +                 '<input type="text" class="input_inq" name="zj_pri" value="">'
				        +             '</div>'
				        +             '<div class="inq-error fl">'
				        +                 '<p class="inq-error01"><span class="u-icon">&#xe623;</span>不能为空</p>'
				        +                 '<p class="inq-succ"><span class="u-icon">&#xe622;</span></p>'
				        +             '</div>'
				        +         '</dd>'
				        +     '</dl>'
				        +     '<dl class="clearfix">'
				        +         '<dt>收货地址：</dt>'
				        +         '<dd>'
				        +             '<div class="inquiry-text">'
				        +                 '<div class="inq-defAdr">'
				        +                 '</div>'
				        +                 '<div class="inq-newAdr"><a href="'+detInitConfig.h_myPath +'conAdd/query.shtml">使用新地址</a></div>'
				        +             '</div>'
				        +         '</dd>'
				        +     '</dl>'
				        + '</div>'
				    //     + '<div class="inquiry-plist inquiry-plistadd">'

				    //     +     '<dl class="clearfix">'
				    //     +         '<dt><em>*</em>姓名：</dt>'
				    //     +         '<dd>'
				    //     +             '<div class="inquiry-input fl">'
				    //     +                 '<input type="text" class="input_inq" name="dj_pri" disabled="disabled">'
				    //     +             '</div>'
				    //     +             '<div class="inq-error fl">'
				    //     +                 '<p class="inq-error01"><span class="u-icon">&#xe623;</span>不能为空</p>'
				    //     +                 '<p class="inq-succ"><span class="u-icon">&#xe622;</span></p>'
				    //     +             '</div>'
				    //     +         '</dd>'
				    //     +     '</dl>'
				    //     +     '<dl class="clearfix">'
				    //     +         '<dt><em>*</em>手机号码：</dt>'
				    //     +         '<dd>'
				    //     +             '<div class="inquiry-input fl">'
				    //     +                 '<input type="text" class="input_inq" name="dj_pri" disabled="disabled">'
				    //     +             '</div>'
				    //     +             '<div class="inq-error fl">'
				    //     +                 '<p class="inq-error01"><span class="u-icon">&#xe623;</span>不能为空</p>'
				    //     +                 '<p class="inq-succ"><span class="u-icon">&#xe622;</span></p>'
				    //     +             '</div>'
				    //     +         '</dd>'
				    //     +     '</dl>'
				    //     +     '<dl class="clearfix">'
				    //     +         '<dt><em>*</em>收货地址：</dt>'
				    //     +         '<dd>'
				    //     +             '<div class="fl">'
				    //     +                 '<div class="inquiry-adrsel">'
				    //     +                     '<select>'
				    //     +                         '<option value="1">北京</option>'
				    //     +                     '</select>'
				    //     +                     '<select>'
				    //     +                         '<option value="2">北京</option>'
				    //     +                     '</select>'
				    //      +                '</div>'
				    //     +                 '<div class="inquiry-adrDet">'
				    //    +                      '<input class="input_inq" type="text" name="">'
				    //   +                   '</div>'
				    //   +               '</div>'
				    //   +               '<div class="inq-error fl">'
				    //   +                   '<p class="inq-error01"><span class="u-icon">&#xe623;</span>不能为空</p>'
				    //   +                  ' <p class="inq-succ"><span class="u-icon">&#xe622;</span></p>'
				    //  +               ' </div>'
				    //  +            '</dd>'
				    //  +       ' </dl>'
				    //  +        '<dl class="clearfix">'
				    //  +            '<dt>邮政编码：</dt>'
				    //  +            '<dd>'
				    //  +                '<div class="inquiry-input">'
				    //  +                    '<input type="text" class="input_inq" name="dj_pri" + disabled="disabled">'
				    //  +                '</div>'

				    //  +            '</dd>'
				    //  +        '</dl>'
				    // +         '<dl class="clearfix">'
				    // +             '<dt>固定电话：</dt>'
				    //  +            '<dd>'
				    //  +                '<div class="inquiry-input">'
				    //  +                    '<input type="text" class="input_inq" name="dj_pri" disabled="disabled">'
				    //  +                '</div>'
				    //  +            '</dd>'
				    //  +        '</dl>'
				    //  +        '<div class="inquiry-addbtn">'
				    //  +            '<a href="#" id="inquiry-addbtns" class="u-btn u-btn-blush" title="">添加</a>'
				    //  +        '</div>'
				    //  +    '</div>'
				     +    '<div class="inquiry-pbtn">'
				     +        '<a href="#" id="inquiry-pbtns" class="u-btn u-btn-blush" title="">确定</a>'
				    +     '</div>'
				    +	'<div class="inquiry-pop-loading"><p></p><div></div></div>'
				    +	'<div class="inquiry-pop-lmask"></div>'
				    + '</div>'
				    + '<div class="inquiry-mask"></div>';


		// 加入询价单
		$("body").on('click',".toInqList_btn",function(ev){
			ev.preventDefault();

			var $this = $(this);
			if($this.attr("data-send") == "sended"){
				return;
			};
			$this.attr("data-send","sended");
			$this.html("请求中...");

			$.ajax({
				type : 'get',
				dataType : "jsonp",//数据类型为jsonp
				timeout: 5000,
				url : $("#h_loginPath").val() + '/login/checkLoginAjax.shtml',
				success : function(data) {
					if (data.code == '200'){
						var proSku = $(".inf_gg_active").attr('data-sku');
						var proCount = $("#but_num").find('.Amount').val();
						$.ajax({
							url: ''+detInitConfig.apiPath+'/item/productJsonp/addSingleInquiry.shtml',
							type: 'get',
							dataType: 'jsonp',
							data : {
								proSku : proSku,
								proCount : proCount
							}
						})
						.done(function(dsa) {
							$.xeConfirm({
								str:"添加成功，请移至个人中心<span style='padding-top:10px;display:inline-block;'><a href='"+$("#h_myPath").val()+"/myis/qis.shtml' target='_blank' style='color:#e42c25; text-decoration:underline;'>询价单列表</a>查看</span>"});
						})
						.fail(function() {
							console.log("error");
						});

					}
					else{
						//显示登录框
						$('.bg-ball,.xeConfirm_bg1').show();
					}

					$this.attr("data-send","");
					$this.html('<i class="u-icon">&#xe65b;</i>加入询价单');
				},
				error : function(){
					$this.attr("data-send","");
					$this.html('<i class="u-icon">&#xe65b;</i>加入询价单');
				}
			});

		});

		$("body").on('click','.toInq_btn',function(ev){
			ev.preventDefault();
			if($(".inquiry-mask").length <= 0){
				$("body").append(inqHtmlstr);
			}
			var $this = $(this);
			if($this.attr("data-send") == "sended"){
				return;
			};
			$this.attr("data-send","sended");
			$this.html("请求中...");
			$.ajax({
				type : 'get',
				dataType : "jsonp",//数据类型为jsonp
				timeout: 5000,
				url : $("#h_loginPath").val() + '/login/checkLoginAjax.shtml',
				success : function(data) {
					if (data.code == '200'){

						var min = parseInt($('.dt_msg_qa').find('.but_tips em').text());
						var max = parseInt($('.dt_msg_qa').find('.but_tips strong').text());
						var values = parseInt($('.dt_msg_qa').find('.countBtn .Amount').val());
						var dj_pri = $('.msg_ajax').find(".dt_pri").attr("data-pri");
						console.log(values);
						$('input[name=dj_pri]').val(dj_pri);

						$("#but_num_pop").Spinner({
							value: values,
							min: min,
							len: max.length + 1,
							max: max,
							decimal : true //是否启用小数点
						});

						if(distribution == "0"){
							$(".inquiry-ptype").html('<label><input value="0" type="radio" checked="checked" name="inquiry-ptype" value="">自提价</label>')
						}else if(distribution == "1"){
							$(".inquiry-ptype").html('<label><input value="1" type="radio" checked="checked" name="inquiry-ptype" value="">配送价</label>')
						}else{
							$(".inquiry-ptype").html('<label><input value="0" type="radio" checked="checked" name="inquiry-ptype" value="">自提价</label>&nbsp;&nbsp;<label><input value="1" type="radio" name="inquiry-ptype" value="">配送价</label>')
						}

						reloadTotal();

						$(".inquiry-pop-loading").show().find("div").html('获取地址中...');
						$(".inquiry-pop-lmask").height($(".inquiry-popbox").outerHeight() - 10).show();


						// 获取地址
						$.ajax({
							url: ''+detInitConfig.apiPath+'/item/productJsonp/getAddressInfo.shtml',
							type: 'get',
							dataType: 'jsonp'
						})
						.done(function(adrData) {
							$(".inquiry-pop-loading,.inquiry-pop-lmask").hide();

							if(adrData.resultCode === "0000"){

								var str ='<ul>';
								for(var i=0,len=adrData.conaddList.length;i<len;i++){

									if(adrData.conaddList[i].defAddr === "1"){
										str+='<li><label><input value="'+adrData.conaddList[i].caId+'" checked="checked" name="inqradio" type="radio">'
									}else{
										str+='<li><label><input value="'+adrData.conaddList[i].caId+'" name="inqradio" type="radio">'
									};

									str+='<span>'+adrData.conaddList[i].provinceName+adrData.conaddList[i].cityName+adrData.conaddList[i].areaName+adrData.conaddList[i].caStreet+'</span><span>('+adrData.conaddList[i].caConsignee+'收)</span><span>'+adrData.conaddList[i].caPhone+'</span></label></li>'
								};

								str += '</ul>'

								$(".inq-defAdr").html(str);

							}
						})
						.fail(function() {
							console.log("error");
						})

						var st = $(window).scrollTop();
						$(".inquiry-mask").height($(document).height()).show().animate({
							opacity:.6
						},300);
						$(".inquiry-popbox").css({
							top : st + 50
						}).show();
					}
					else{
						//显示登录框
						$('.bg-ball,.xeConfirm_bg1').show();
					}

					$this.attr("data-send","");
					$this.html("立即询价");
				},
				error : function(){
					$this.attr("data-send","");
					$this.html("立即询价");
				}
			});



		});

		function getToTal(dj,num){
			return (parseFloat(dj) * parseFloat(num)).toFixed(2);
		};

		function reloadTotal(){
			var dj_pri = $('input[name=dj_pri]').val();
			var values = $('#but_num_pop').find('.Amount').val();
			var totalPri = getToTal(dj_pri,values);
			$("input[name=zj_pri]").val(totalPri);
		}

		$("body").on('click','#but_num_pop a',function(ev){
			ev.preventDefault();
			reloadTotal();
		});

		var phre =/^\d+(\.\d{1,2})?$/;
		$("body").on('keyup blur','input[name=dj_pri]',function(){
			var price = $(this).val();
			if((price.indexOf(".") == 0)){
				price = "0" + price;
				$(this).val(price);
			}
			if(!phre.test(price)){
				// price = price.substring(0, price.indexOf(".")+3);
				// $(this).val(price);
				// console.log(123123);
				$(this).parents('dd').find('p').hide();
				$(this).parents('dd').find('.inq-error01').html('<span class="u-icon">&#xe623;</span>请输入正确的数字').show();
				$('#inquiry-pbtns').addClass('u-btn-disabled');
				return;
			}else{
				if(price.length >= 2 && (price.indexOf("0") == 0) && (price.indexOf(".") != 1))
				{
					price = price.substring(1,price.length);
					$(this).val(price);
				}
				if(price.length >= 2 && (price.indexOf(".") == -1))
				{
					var ft = price.indexOf("0");
					if(ft == 0)
					{
						price = price.substring(1,price.length);
						$(this).val(price);
					}
				}
				$(this).parents('dd').find('p').hide();
				$(this).parents('dd').find('.inq-succ').html('<span class="u-icon">&#xe622;</span>').show();
				$('#inquiry-pbtns').removeClass('u-btn-disabled');
			}

			reloadTotal();

			var toatalPris = $('input[name=zj_pri]').val();
			if(parseFloat(toatalPris) > 10000000) {
				$('input[name=zj_pri]').parents('dd').find('p').hide();
				$('input[name=zj_pri]').parents('dd').find('.inq-error01').html('<span class="u-icon">&#xe623;</span>总价超限').show();
				$('#inquiry-pbtns').addClass('u-btn-disabled');
			}else{
				$('input[name=zj_pri]').parents('dd').find('p').hide();
				$('input[name=zj_pri]').parents('dd').find('.inq-succ').html('<span class="u-icon">&#xe622;</span>').show();
				$('#inquiry-pbtns').removeClass('u-btn-disabled');
			}
		});


		$("body").on('click','.inquiry-close',function(ev){
			ev.preventDefault();
			var _this = $(this);

			$(".inquiry-mask").height($(document).height()).animate({
				opacity:0
			},300,function(){
				$(".inquiry-mask").hide();
			});

			_this.parent().hide();
		});

		$("body").on('change','input[name=inqradio]',function(){
			$(".inq-errors").hide();
		})



		// 确定询价
		$("body").on('click','#inquiry-pbtns',function(ev){
			ev.preventDefault();
			if($(this).hasClass('u-btn-disabled')){
				return;
			}
			if($('input[name=inqradio]:checked').length > 0 ){
				$(".inquiry-pop-loading").show().find("div").html('提交中...');
				$(".inquiry-pop-lmask").height($(".inquiry-popbox").outerHeight() - 10).show();

				var datas = {
					"proSku": $(".inf_gg_active").attr('data-sku'), //商品sku
					"inqType": $("input[name=inquiry-ptype]:checked").val(), //询价类型(0自提，1到岸价)
					"caId": $('input[name=inqradio]:checked').val(), //收货地址id
					"proCount": $('#but_num_pop').find('.Amount').val(), //商品数量
					"proPrice": $('input[name=dj_pri]').val(), //商品单价
					"supCode" : venderCodes
				}
				$.ajax({
					url: ''+detInitConfig.apiPath+'/item/productJsonp/realTimeInquiry.shtml',
					type: 'get',
					dataType: 'jsonp',
					data: datas,
				})
				.done(function(data) {

					if(data.flag === "1"){
						$(".inquiry-pop-loading").find("div").html("提交成功，页面准备跳转请稍候~");
						$(".inquiry-pop-lmask").show();
						window.location.href = ""+detInitConfig.h_myPath+"/myis/qis.shtml"
					}
				})
				.fail(function() {
					console.log("error");
				})

			}else{
				if($(".inq-errors").length > 0){
					$(".inq-errors").html('请选择收货地址')
				}else{
					$(".inq-newAdr").after("<div class='inq-errors' style='color:#f2423b'>请选择收货地址</div>");
				}

			}


		})


	}


	// 三方详情页信息 *****

	// 查看手机号码
	function seePhone (bol){
		var upk = cookieJS.getCookie('_xea') && cookieJS.getCookie('xe_login_name');

		if(!upk){
			$("#seePhone").html('联系方式：'+$("#accountMobile").val()+'&nbsp;<a href="#" class="s-dBlue" id="s-dBlue-phone">查看</a>');
			if(bol) {
				$('.bg-ball,.xeConfirm_bg1').show();
			}
		}else{
			$("#seePhone").html('联系方式：'+$("#allAccountMobile").val()+'');
		}
	}
	seePhone()

	$('body').on("click","#s-dBlue-phone",function(ev){
		ev.preventDefault();
		seePhone(true)
	})

	// 店铺收藏
	function storeCollect(bol){
		var upk = cookieJS.getCookie('_xea') && cookieJS.getCookie('xe_login_name');
		var findUrl = ''+detInitConfig.apiPath+'/store/dataInfo/findIsCollect.shtml';
		var collUrl = ''+detInitConfig.apiPath+'/store/dataInfo/collectStore.shtml';
		var storeId = $("#storeId").val();
		if(!upk){
			if(bol){
				$('.bg-ball,.xeConfirm_bg1').show();
			}
		}else{
			if(!bol) {
				// 查店铺收藏
				$.ajax({
					url: findUrl,
					type: 'GET',
					dataType: 'jsonp',
					data : {
						storeId : storeId
					}
				})
				.done(function(data) {
					if(data.isCollect == "0"){
						$('.mc-detailsBtn .u-btn-gray').html('<i class="u-icon s-yellow">&#xe625;</i> 收藏店铺');
					}else{
						$('.mc-detailsBtn .u-btn-gray').html('<i class="u-icon s-yellow">&#xe628;</i> 已收藏');
					}
				})
				.fail(function() {
					$.xeConfirm({str:'收藏失败'})
				})
			}else{
				// 店铺收藏
				$.ajax({
					url: collUrl,
					type: 'get',
					dataType: 'jsonp',
					data : {
						storeId : storeId
					}
				})
				.done(function(data) {
					if(data.code == "0"){
						$.xeConfirm({str:'收藏失败'})
					}else if(data.code == "1"){
						// 收藏成功
						$('.mc-detailsBtn .u-btn-gray').html('<i class="u-icon s-yellow">&#xe628;</i> 已收藏');
					}else if(data.code == "2") {
						// 取消收藏成功
						$('.mc-detailsBtn .u-btn-gray').html('<i class="u-icon s-yellow">&#xe625;</i> 收藏店铺');
					}else{
						$('.bg-ball,.xeConfirm_bg1').show();
					}
				})
				.fail(function() {
					$.xeConfirm({str:'收藏失败'})
				})

			}
		}
	}

	storeCollect(false);

	$("body").on('click','.mc-detailsBtn .u-btn-gray',function(ev){
		ev.preventDefault();
		storeCollect(true);
	});

});
