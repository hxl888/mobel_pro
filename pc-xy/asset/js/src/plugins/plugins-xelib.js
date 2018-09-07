~function($,window,document,undefined){
    var timers,mdpt;
    $.showIndicator = function () {
        if ($('.preloader-indicator-modal')[0]) return;
        $("body").append('<div style="height:'+$(document).height()+'px;" class="preloader-indicator-overlay"></div><div class="preloader-indicator-modal"></div>');
    };

    /**
     * [throttle description]
     * @param  {Function} fn      [description]
     * @param  {[type]}   delay   [description]
     * @param  {[type]}   atleast [最少多少时间执行一次]
     * @return {[type]}           [description]
     */
    $.throttle = function (fn, delay, atleast) {
        var timer = null;
        var previous = null;
        return function () {
            var now = +new Date();
            if ( !previous ) previous = now;
            if ( atleast && now - previous > atleast ) {
                fn&&fn();
                // 重置上一次开始时间为本次结束时间
                previous = now;
                clearTimeout(timer);
            } else {
                clearTimeout(timer);
                timer = setTimeout(function() {
                    fn&&fn();
                    previous = null;
                }, delay);
            }
        }
    };

    $.scrollShow=function(obj,fn){
        var _this = this;
        var scrollTop = $(window).scrollTop();
        var scrollBottom= scrollTop + $(window).height();
        this.getPos = function(o){
            var l=0,t=0;
            while(o)
            {
                l+=o.offsetLeft;
                t+=o.offsetTop;

                o=o.offsetParent;
            }
            return {left: l, top: t};
        }
        $(obj).each(function(i,e){
            var pos = _this.getPos($(e).get(0));
            //  console.log(pos)
            if(scrollBottom < pos.top || scrollTop > pos.top + $(e).get(0).offsetHeight){
                return true;
            }else{
                if($(e).hasClass('floor-lazy-done') || $(e).hasClass('floor-loading')) return true;
                fn&&fn(e);
            }
        })
    };

    $.hideIndicator = function () {
        $('.preloader-indicator-overlay, .preloader-indicator-modal').remove();
    };

    $.loadScript = function(url, callback){
        var script = document.createElement("script")
        script.type = "text/javascript";
        if (script.readyState){ //IE
            script.onreadystatechange = function(){
                if (script.readyState == "loaded" || script.readyState == "complete"){
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others: Firefox, Safari, Chrome, and Opera
            script.onload = function(){
                callback();
            };
        }
        script.src = url;
        document.body.appendChild(script);
    };

    $.fn.Spinner = function (opts,fns) {

        var defaults = {value:1, min:1, len:3, max:99,decimal:false}
        var options = $.extend(defaults, opts)
        var keyCodes = {up:38, down:40}
        return this.each(function() {

            var a = $('<a class="minus u-icon"></a>');
            f(a,0,"Decrease","&#xe659;"); //加
            var c = $('<a class="plus u-icon"></a>'); 
            f(c,0,"Increase","&#xe658;"); //减
            var b = $('<input/>');
            f(b,1,"Amount");
            cv(0);  //值

            $(this).html("").append(a).append(b).append(c);

            if(fns && typeof fns == "function"){
                a.click(function(event){
                    event.stopPropagation();
                    var _this = this;
                    cv(-1);
                    fns($(_this));
                });
                c.click(function(event){
                    event.stopPropagation();
                    var _this = this;
                    cv(+1);
                    fns($(_this));
                });
            }else{
                a.click(function(){cv(-1);});
                c.click(function(){cv(+1)});
            }


            // a.click(function(){cv(-1)});
            // c.click(function(){cv(+1)});
            // b.keyup(function(event){
            //  if(event.keyCode == 8){
            //      return;
            //  }else{
            //      cv(0);
            //  }

            // });


            b.bind('keyup paste change',function(e){
                e.keyCode==keyCodes.up&&cv(+1);
                e.keyCode==keyCodes.down&&cv(-1);
            });

            b.on("blur",function(){
                cv(0);
            });

            function cv(n){
                if(options.decimal){
                  b.val(b.val().replace(/[^0-9.]/g,''));
                  if((b.val()||options.min).indexOf(".") < 0){
                    bv=parseFloat(b.val()||options.min) + n
                  }else{
                    bv=(parseFloat(b.val()||options.min) + n).toFixed(2);
                  }
                  bv>=parseInt(options.min)&&bv<=parseInt(options.max)&&b.val(bv);
                }else{
                  b.val(b.val().replace(/[^\d]/g,''));
                  bv=parseInt(b.val()||options.min)+n;
                  bv>=parseInt(options.min)&&bv<=parseInt(options.max)&&b.val(bv);
                };

                if(bv<=parseInt(options.min)){
                    b.val(parseInt(options.min));
                    f(a,2,"DisDe","Decrease");
                }else{
                    f(a,2,"Decrease","DisDe");
                }
                if(bv>=parseInt(options.max)){
                    b.val(options.max);
                    f(c,2,"DisIn","Increase");
                }else{
                    f(c,2,"Increase","DisIn");
                }
            }

        });

        function f(o,t,c,s){
            t==0&&o.addClass(c).attr("href","javascript:void(0)").append(s);
            t==1&&o.addClass(c).attr({"value":options.value,"autocomplete":"off","maxlength":options.len});
            t==2&&o.addClass(c).removeClass(s);
        }
    }

    $.fn.vSendTimeCount = function(option){
      var defaults = {
        ts : 0, //传入倒计时秒数
      }
      var setting = $.extend(true,defaults,option);

        return this.each(function(index, el) {
            var _this = $(el);
            if(_this.hasClass('disabled')) return;
            var t = setting.ts ? setting.ts : 60;
            _this.addClass('disabled').html("重新发送"+"("+t+")" );
            clearInterval(timers);
            timers = setInterval(function(){
                t--;
                _this.addClass('disabled').html("重新发送"+"("+t+")" );
                if (t <= 0) {
                    clearInterval(timers);
                    _this.removeClass('disabled').html("发送验证码");
                };
            },1000)
        });
    };

    $.getStrLength = function(str){
        return str.replace(/[^\x00-\xff]/g,"xx").length;
    };

    $.fn.extend({
      uploadPreview: function (opts) {
          var _self = this,
              _this = $(this);
          opts = jQuery.extend({
              Img: "ImgPr",
              Width: 100,
              Height: 100,
              ImgType: ["gif", "jpeg", "jpg", "png"],
              Callback: function () {}
          }, opts || {});
          _self.getObjectURL = function (file) {
              var url = null;
              if (window.createObjectURL != undefined) {
                  url = window.createObjectURL(file)
              } else if (window.URL != undefined) {
                  url = window.URL.createObjectURL(file)
              } else if (window.webkitURL != undefined) {
                  url = window.webkitURL.createObjectURL(file)
              }
              return url
          };
          _this.change(function () {
              var that = this;
              if (this.value) {
                  if (!RegExp("\.(" + opts.ImgType.join("|") + ")$", "i").test(this.value.toLowerCase())) {
                      $.modal({
                        text: '<div class="example"><div class="warming-str">'+ opts.ImgType.join("，") + '"中的一种</div></div>',
                        closeBtn: true,
                        extraClass : "modal-mu-warming",
                        buttons: [
                          {
                            text: '保存',
                            btnCls : 'u-btn-red'
                          }
                        ]
                      })
                      this.value = "";
                      return false
                  }
                  if (navigator.userAgent.indexOf("MSIE")!=-1) {

                      try {
                          $(that).parents(".img-upload").find("img").attr('src', _self.getObjectURL(this.files[0]))
                      } catch (e) {
                          var src = "";
                          var obj = $(that).parents(".img-upload").find("img")
                          var div = obj.parent("div")[0];
                          _self.select();
                          if (top != self) {
                              window.parent.document.body.focus()
                          } else {
                              _self.blur()
                          }
                          //var src = $(that).val();
                          var src = document.selection.createRange().text;
                          //alert(src)
                          $(that).parents(".img-upload").find("img").removeAttr('src').removeAttr('alt');
                          document.selection.empty();
                          obj.hide();
                          //obj.parent("div").removeAttr("style");
                          obj.parent("div").css({
                              'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)',
                              'width': opts.Width + 'px',
                              'height': opts.Height + 'px'
                          });
                          div.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = src;
                      }
                  } else {
                      $(that).parents(".img-upload").find("img").attr('src', _self.getObjectURL(this.files[0]))
                  }
                  opts.Callback(this);
              }
          })
      }
    });

    //MINi购物车
    //MINi购物车数量显示
    var CartPath=$('#h_cartPath').val();
      function ShopnumCou(){
        $.ajax({
          url: CartPath+'cart/qca.shtml',
          type: "GET", 
          dataType: "jsonp",
          success:function(data){
              $(".u-badge").html(data.cartNum); //MINI物品数量
              $('.carPro_total .Allcout').html(data.cartNum);
          }
        });
      }
      ShopnumCou();
    //我的进货单跳转链接设置
    $('.vm-mcts a').attr('href',CartPath+'cart/toCart.shtml');
    function showCart(){
        var _this = this;
        this.dataUrl = CartPath+'cart/miniCart.shtml';
        // console.log(this.dataUrl)
        this.hbcar = $(".vm-cart-ml");
        this.noPro = '<div class="spacer"></div><div class="smc-ets noPro"><span class="vm-nop"></span>进货单里还没有可购买商品，赶紧选购吧！</div>';
        this.noLink = '<div class="spacer"></div><div class="smc-ets noLink noNet"><span class="vm-nop"></span>加载失败，请<a href="javascript:void(0)" class="cartRload">重新加载</a></div>'
        this.init = function(){
            _this.addCon();
        };
        this.addCon = function(){
            var jqxhr = $.ajax({
                url: _this.dataUrl,
                type: "GET", // 默认为GET,你可以根据需要更改
                dataType: "jsonp", // 指定想要的数据类型
                timeout:9000
            });
            jqxhr.done(_this.sucHandler);
            jqxhr.fail(_this.failHandler);
        }
        this.failHandler = function(data){
            _this.hbcar.removeClass('smc-loading u-loading').html(_this.noLink);
            _this.reload();
        };
        this.reload = function(){
            $("body").on("click",".cartRload",function(e){
                e.preventDefault();
                $(".noLink").html('').removeClass('').addClass('smc-loading u-loading')
                // new showCart().init();
            })
        }
        this.sucHandler = function(data){
            var datas = data.carProList;
            // console.log(datas);
            //判断是否有数据  没有数据的话就显示 没有商品的界面
            if(datas!==null){
                for(var p=0;p<datas.length;p++){
                  if((datas[p].cartList==null  || datas[p].cartList.length==0 )&&(datas[p].comboList==null || datas[p].comboList.length==0)){
                     // alert()
                      _this.hbcar.removeClass('smc-loading u-loading').html(_this.noPro);
                  }
                }
            }else if(datas==null){
              _this.hbcar.html(_this.noPro);
              // $('.vm-mcts .u-badge').html(0);
            }
            var Strtit='';
            var Strend='';
            var str = "";
            var strtotal = "";
            var NoTcallprice=0;
            var Allprice=0;
            var LastAllprice=0;
            var exchangeAmount=0;
            var subAmount=0;
            var TCotalPri=0;
            var TCotalPObj=[];
            _this.totalPri = 0;

            if(datas !=null &&  datas.length>0){
                  str += '<div class="spacer"></div><div class="smt">最新加入的商品</div><div class="smc">'
                  for(var q=0;q<datas.length;q++){
                    if(!((datas[q].cartList==null  || datas[q].cartList.length==0 )&&(datas[q].comboList==null || datas[q].comboList.length==0))){
                      _this.hbcar.removeClass('smc-loading u-loading').children().remove();
                      if(datas[q].cartList !=null && datas[q].cartList.length>0){ 
                          for(var i=0;i<datas[q].cartList.length;i++){
                                   str +='<ul>'
                                   str +=       '<li class="carPro_item">'
                                   str +=            '<div class="vp-img fl">'
                                   str +=                '<a href="'+$("#itemPath").val()+(datas[q].cartList[i].selfPro==1 ? datas[q].cartList[i].proCode : datas[q].cartList[i].proSku)+'.shtml" target="_blank">'
                                   str +=                    '<img src="' + $("#imgPath").val() +'product/80/80/'+datas[q].cartList[i].proImg+'" width="50" height="50" alt="">'
                                   str +=               '</a>'
                                   str +=           '</div>'
                                   str +=           '<div class="vp-name fl">'
                                   str +=                '<a href="'+$("#itemPath").val()+(datas[q].cartList[i].selfPro==1 ? datas[q].cartList[i].proCode : datas[q].cartList[i].proSku)+'.shtml" target="_blank">'+datas[q].cartList[i].proName+'</a>'
                                   str +=            '</div>'
                                   str +=            '<div class="vp-pri fr">'
                                   if (datas[q].cartList[i].project==1||datas[q].cartList[i].project==2) {
                                     if (datas[q].cartList[i].limitSalesQuantity >= datas[q].cartList[i].quantity) {
                                        str +=                '<p><em class="f-rmb">&yen;</em>'+parseFloat(datas[q].cartList[i].flashPrice).toFixed(2)+'<span>x'+datas[q].cartList[i].quantity+'</span></p>'
                                        NoTcallprice+=(datas[q].cartList[i].flashPrice)*(datas[q].cartList[i].quantity);
                                     }else{
                                        str +=                '<p><em class="f-rmb">&yen;</em>'+parseFloat(datas[q].cartList[i].flashPrice).toFixed(2)+'<span>x'+datas[q].cartList[i].limitSalesQuantity+'</span></p>'
                                        str +=                '<p><em class="f-rmb">&yen;</em>'+parseFloat(datas[q].cartList[i].vipPrice).toFixed(2)+'<span>x'+(datas[q].cartList[i].quantity-datas[q].cartList[i].limitSalesQuantity)+'</span></p>'
                                        NoTcallprice+=(datas[q].cartList[i].flashPrice)*(datas[q].cartList[i].limitSalesQuantity)+(datas[q].cartList[i].vipPrice)*(datas[q].cartList[i].quantity-datas[q].cartList[i].limitSalesQuantity);
                                     }
                                   }else{
                                        str +=                '<p><em class="f-rmb">&yen;</em>'+parseFloat(datas[q].cartList[i].vipPrice).toFixed(2)+'<span>x'+datas[q].cartList[i].quantity+'</span></p>'
                                        NoTcallprice+=(datas[q].cartList[i].vipPrice)*(datas[q].cartList[i].quantity);
                                   }
                                   str +=                '<a class="vm-remove" href="javascript:void(0)" data-totalPri="" data-sku="'+datas[q].cartList[i].proSku+'"> 删除</a>'
                                   str +=            '</div>'
                                   str +=        '</li>'
                                   str +='</ul>'
                                   //NoTcallprice+=(datas[q].cartList[i].vipPrice)*(datas[q].cartList[i].quantity);
                          }
                      }
                      exchangeAmount+=datas[q].exchangeAmount;
                      subAmount+=datas[q].subAmount;
                        var strCombo=''
                        var smallprice=0;
                        if(datas[q].comboList!=null  &&  datas[q].comboList.length>0){
                            for(var k=0;k<datas[q].comboList.length;k++){
                                strCombo +='<div class="dtc" data-id="'+datas[q].comboList[k].id+'">'
                                strCombo +=    '<em class="fl">【套餐】</em><span class="fl">小计：<strong><i class="f-rmb">&yen;'
                                strCombo +=       parseFloat(datas[q].comboList[k].comboPrice*datas[q].comboList[k].quantity).toFixed(2);
                                strCombo +='</i></strong></span><a  class="cart_del vm-remove fr" data-totalPri="" data-comboId="'+datas[q].comboList.comboId+'" href="javascript:void(0)">删除</a>'
                                strCombo +='</div>'
                                if(datas[q].comboList[k].comDetList !=null  &&  datas[q].comboList[k].comDetList.length>0){
                                    for(var s=0;s<datas[q].comboList[k].comDetList.length;s++){
                                        strCombo +='<ul>'
                                         strCombo +=      '<li  class="carPro_item">'
                                         strCombo +=            '<div class="vp-img fl">'
                                         strCombo +=                '<a href="'+$("#itemPath").val()+datas[q].comboList[k].comDetList[s].productCode+'.shtml" target="_blank">'
                                         strCombo +=                    '<img src="' + $("#imgPath").val() +'product/80/80/'+datas[q].comboList[k].comDetList[s].mainImgUrl+'" width="50" height="50" alt="">'
                                         strCombo +=               '</a>'
                                         strCombo +=           '</div>'
                                         strCombo +=           '<div class="vp-name fl">'
                                         strCombo +=                '<a href="'+$("#itemPath").val()+datas[q].comboList[k].comDetList[s].productCode+'.shtml" target="_blank">'+datas[q].comboList[k].comDetList[s].productName+'</a>'
                                         strCombo +=            '</div>'
                                         strCombo +=            '<div class="vp-pri fr">'
                                         strCombo +=                '<p><em class="f-rmb">&yen;</em>'+datas[q].comboList[k].comDetList[s].comboPrice+'<span>x'+datas[q].comboList[k].quantity+'</span></p>'
                                         strCombo +=                '<a class="" href="'+datas[q].comboList[k].comDetList[s].productCode+'" data-totalPri="" data-sku="'+datas[q].comboList[k].comDetList[s].productSku+'"></a>'
                                         strCombo +=            '</div>'
                                         strCombo +=        '</li>'
                                         strCombo += '</ul>'
                                        TCotalPri = parseFloat(datas[q].comboList[k].comboPrice*datas[q].comboList[k].quantity).toFixed(2);
                                    }
                                }
                                      TCotalPObj.push(TCotalPri)//套餐价格集合
                            };
                        }
                          // console.log('-----------------------',TCotalPObj)
                        var strtotal='';
                           strtotal += '<div class="smb">'
                           strtotal +=        '<div class="tips">进货单里面还有<em></em>件失效商品</div>'
                           strtotal +=        '<div class="mctal carPro_total"><span><i>共<i class="Allcout"></i>件商品</i><em>共计<strong><i class="f-rmb">&yen;</i></strong></em></span><a href="'+$('#h_cartPath').val()+'/cart/toCart.shtml" class="u-btn u-btn-red xe_cybtn">去进货单结算</a></div>'
                           strtotal += '</div>'
                    } 
                  } 
            }     
                ShopnumCou();//重新计算商品数量  
                //套餐总价计算                  
                var TCoAllPri=0;
                for(var ON=0;ON<TCotalPObj.length;ON++){
                  TCoAllPri+=parseFloat(TCotalPObj[ON]);
                }
                // 总价结算
                LastAllprice=(NoTcallprice+TCoAllPri+exchangeAmount-subAmount).toFixed(2)
                _this.hbcar.append(str); //非套餐html结构
                _this.hbcar.find('.smc').append(strCombo); //套餐html结构
                if($('.smc ul').length<=0){//判断物品数量 没有商品的话移除标题
                    $('.J-dropdown .smt').remove();
                }
                _this.hbcar.append(strtotal); //总价html结构显示
                $('.carPro_total .f-rmb').html('&yen;'+LastAllprice)  //总价格
                $('.smb .tips em').html(data.nCount); //失效商品数量
                $('.carPro_total .Allcout').html($(".u-badge").text());
        }
    }           
                var cartNav = new showCart();
                var DelUrl = CartPath+'cart/delCart.shtml';
                // mini购物车物品删除设置----------------------
                $("body").on("click",".vm-remove",function(e){
                    e.preventDefault();
                    var sku = $(this).attr("data-sku");
                    var comboI = $(this).closest(".smc").find('.dtc').attr('data-id');
                    $.ajax({
                        url: DelUrl,
                        type: "GET", // 默认为GET,你可以根据需要更改
                        data:{
                            proSkus : sku,
                            comboIds : comboI
                        },
                        dataType: "jsonp", // 指定想要的数据类型
                        success:function(){
                           // location.reload();
                           // console.log('--------------------');
                            ShopnumCou();//重新计算商品数量
                            cartNav.init();
                        }
                    });
                    // $(this).closest(".carPro_item").remove();
                });
    //MINi购物车function结束-----------------------
    
    $(document).on('mouseenter','.J-drop',function(ev){
        var _this = $(this);
        var id = _this.attr("id");
        var dropDown = _this.find('.J-dropdown');
        _this.addClass('vm-drop-hover');
        if(!dropDown) return;
        if(id === 'g-miCart'){
            cartNav.init();
            dropDown.show().stop(true,false).animate({
                opacity : 1,
                top : 33
            }, 100);

            mdpt = setTimeout(function(){
                // console.log('执行Ajax操作');
            },2000)

        }else if(id === 'appdl'){
            dropDown.show().stop(true,false).animate({
                opacity : 1,
                top : 28
            }, 100);
        }else if(id === 'vm-mzs'){
            dropDown.show().stop(true,false).animate({
                opacity : 1,
                top : 34
            }, 100);
        }else{
            dropDown.show().stop(true,false).animate({
                opacity : 1,
                top : 28
            }, 100);
            dropDown.show();
        }

    }).on('mouseleave','.J-drop',function(ev){
        var _this = $(this);
        var id = _this.attr("id");
        var dropDown = _this.find('.J-dropdown');
        _this.removeClass('vm-drop-hover');
        if(!dropDown) return;

        if(id === 'g-miCart'){
            clearTimeout(mdpt);
            dropDown.stop(true,false).animate({
                opacity : 0,
                top : 23
            }, 100,function(){
                dropDown.hide();
            });
        }else if(id === 'appdl'){
            dropDown.stop(true,false).animate({
                opacity : 0,
                top : 38
            }, 100,function(){
                dropDown.hide();
            });
        }else if(id === 'vm-mzs'){
            dropDown.stop(true,false).animate({
                opacity : 0,
                top : 50
            }, 100,function(){
                dropDown.hide()
            });
        }else{
            dropDown.stop(true,false).animate({
                opacity : 0,
                top : 38
            }, 100,function(){
                dropDown.hide();
            });
            dropDown.show();
        }
    });


}(jQuery,window,document);
