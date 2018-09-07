
$(function(){

    var pathConfig = {
        imgPath : $("#imgPath").val(),
        apiPath : $("#apiPath").val()
    };
    // 循环滚动bb
    function sliderLoop(obj){
        var loopTimer = null;
        var _this = this;
        this.moveFn = function(){
            var list = obj.find('li').eq(0);
            list.slideUp("slow",function(){
                list.show();
                obj.append(list);
            });
        };
        this.loopFn = function(){
            if(obj.find("li").length > 10){
                obj.hover(function(){
                    clearInterval(loopTimer);
                },function(){
                    clearInterval(loopTimer)
                    loopTimer = setInterval(function(){
                        _this.moveFn();
                    },4000)
                }).trigger('mouseleave');
            }
        };
    };

    // 首页楼层导航
    var fixedSide = function (opts){

        var defaults = {
            dz : false, //true 为显示 ，false为不显示
            ele : null, //contop element
            codearrs : null
        };
        this.settings = $.extend(true, defaults, opts);

        this.showArr = this.settings.codearrs;

        this.conTop = $(this.settings.ele).offset().top;

        this.t = null;

        this.navHtmlStr = {
            '888' : '<li><div><i class="u-icon">&#xe644;</i>冻品专区</div></li>',
            '7' : '<li><div><i class="u-icon">&#xe645;</i>优质商家</div></li>',
            '9' : '<li class="clearfix"><div class="tcdiv"><i class="u-icon">&#xe646;</i><p>肉禽<br>蛋类</p></div><div class="tcdiv"><i class="u-icon">&#xe635;</i><p>速冻<br>食品</p></div></li>',
            '10' : '<li class="clearfix"><div class="tcdiv"><i class="u-icon">&#xe647;</i><p>海鲜<br>水产</p></div><div class="tcdiv"><i class="u-icon">&#xe64a;</i><p>进口<br>食品</p></div></li>',
            '11' : '<li class="clearfix twoCol"><div class="tcdiv"><i class="u-icon">&#xe669;</i><p>酒水<br>饮品</p></div><div class="tcdiv"><i class="u-icon">&#xe649;</i><p>粮油<br>副食</p></div></li>',
            '12' : '<li><div><i class="u-icon">&#xe618;</i>冷链物流</div></li>',
            '13' : '<li><div><i class="u-icon">&#xe64b;</i>鲜易金融</div></li>',
            '14' : '<li><div><i class="u-icon">&#xe64c;</i>资讯行情</div></li>'
        }

        if(this.settings.dz) {
            this.showArr.unshift(888);
        };
    };

    fixedSide.prototype = {
        init : function(){
            this.renderDom();
            this.resetPos();
            this.smoothFn();
            this.scrtFn();
        },
        renderDom : function(){
            if($(".flSiderNav").length > 0) return;
            var str ='<div class="flSiderNav"><ul>'
                for(var i=0;i<this.showArr.length;i++){
                    str += this.navHtmlStr[this.showArr[i]];
                }
                str +='</ul></div>';
            $('body').append(str);
        },
        resetPos : function(){
            var left = (($(window).width() - 1200)/2) - 87;
            $(".flSiderNav").css({ left : left});
        },
        objLength : function(){
            var _this = this;
            var arrDis = [];
            var arrObj = []
            for(var i=0;i<_this.showArr.length; i++){
                arrObj.push($(".g-floor[data-code="+_this.showArr[i]+"]").attr('id'));
                arrDis.push(parseInt($(".g-floor[data-code="+_this.showArr[i]+"]").offset().top) - 10);
            };
            return {
                dis : arrDis,
                objs : arrObj
            };
        },
        scrollTab : function(){
            var disobj = this.objLength();
            var disnum = disobj.dis;
            var disele = disobj.objs;

            var textSt = $(window).scrollTop();

            for (var i = disnum.length-1; i >= 0; i--)
            {
                if (textSt >= $("#" + disele[i]).offset().top - 100){
                    $('.flSiderNav li').eq(i).addClass("active").siblings().removeClass('active');
                    break;
                }else{
                    $('.flSiderNav li').removeClass("active");
                }
            }
        },
        smoothFn : function(){
            var disobj = this.objLength();
            var disnum = disobj.dis;
            $('.flSiderNav li').off('click.smooth');
            $('.flSiderNav li').on('click.smooth',function() {
                var _th = $(this);
                if(_th.hasClass('active')) return;
                var index = $('.flSiderNav li').index(this);
                var hh = disnum[index];
                $("html,body").stop().animate({scrollTop: hh+'px'},300);
            });
        },
        scrtFn : function(){
            var _this = this;
            var scrt = $(window).scrollTop();
            if(scrt > _this.conTop){
                $(".flSiderNav").show(0,function(){
                    $(".flSiderNav").css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "transform": "scale(1)",
                        "opacity": "1"
                    });
                });
            }else{
                $(".flSiderNav").css({
                    "-webkit-transform": "scale(1.2)",
                    "-moz-transform": "scale(1.2)",
                    "transform": "scale(1.2)",
                    "opacity": "0"
                });
                clearTimeout(_this.t);
                _this.t = setTimeout(function(){
                   $(".flSiderNav").hide();
               },30)

            }
            /****/
            _this.scrollTab();
        }
    };

    // 楼层导航方法
    function floorNavShow (dz,userCodeArr){
        // 出现楼层导航
        var fixedSider = new fixedSide({dz:dz,ele:"#g-fresh",codearrs : userCodeArr});

        var fixw = $(window).width();

        if(fixw >= 1400) {
            fixedSider.init();
        };

        function testFn(){
            var fixw = $(window).width();
            if(fixw >= 1400) {
                fixedSider.init();
            }else{
                $(".flSiderNav").hide();
            };
        }

        window.onscroll = window.onresize = $.throttle(testFn, 100);

    };


    var floorLoadFn = function(){};

    // 初始化方法
    floorLoadFn.prototype.init = function(el){

        var _this = this;

        if($(el).hasClass('floor-loading')) return;
        $(el).addClass('floor-loading');

        var code = $(el).attr("data-code");

        if(code === "3"){
            // 焦点图楼层
            this.ajaxNet(code,$(el),function(data){
                _this.loadSlider(el,data);
            });

            // 加载焦点图右侧
            this.ajaxNet("4", $(el), function(data){
                _this.loadLookFor(el,data)
            });

            new Date().getHours() >= 12 ? $('.vs-uwl').html('HI下午好！') : '';

            // 加载商品量入驻商家数量
            this.loadProCount();

            // 登录用户取待付款等等的数量
            this.loadDaiNum();


        }else if(code === "5"){
            // 每日新品楼层
            this.ajaxNet(code,$(el),function(data){
                _this.loadNewPro(el,data);
            });
        }else if(code === "6"){
            // 首页推荐信息
            this.ajaxNet(code,$(el),function(data){
                console.log(data);
                _this.loadCmsg(el,data);
            });
        }else if(code === "7"){
            // 首页推荐信息
            this.ajaxNet(code,$(el),function(data){
                console.log(data);
                _this.loadShops(el,data);
            });
        }else if(code === "8" || code === "200" || code === "201" || code === "202"){
            this.ajaxNet(code,$(el),function(data){
                console.log(data);
                _this.loadAds(el,data);
            });
        }else if(code === "9" || code === "10" || code === "11" ) {
            this.ajaxNet(code,$(el),function(data){
                console.log('=========');
                console.log(data);
                console.log('=========');
                _this.loadCategory(el,data);
            });
        }else if(code === "12") {
            this.ajaxNet(code,$(el),function(data){
                _this.loadLenglian(el,data);
            });
        }else if(code === '13') {
            this.ajaxNet(code,$(el),function(data){
                _this.loadFinance(el,data);
            });
        }else if(code === '14') {
            this.ajaxNet(code,$(el),function(data){
                _this.loadNews(el,data);
            });
        }
    };

    //楼层ajax加载方法
    floorLoadFn.prototype.ajaxNet = function(code,el,fn){
        var _this = this;
        //console.log(code);
        _this.url = $("#apiPath").val()+'/cms/dataInfo/floorDate.shtml';

        var jqHxr = $.ajax({
            url : _this.url,
            type : 'get',
            dataType: 'jsonp',
            timeout : 8000,
            data : {
                menuCode : code
            }
        }).done(function(data){
            $(el).removeClass('floor-loading').addClass('floor-lazy-done');
            fn&&fn(data);
        }).fail(function(data){
            console.log('fail')
        });
    };

    // 加载焦点图
    floorLoadFn.prototype.loadSlider = function(el,data){
        var _this = this;
        // 焦点图数据
        var listData = data.floorDateInfo.one;
        var html = template('f-slider', {
            list : listData,
            pathConfig : pathConfig
        });
        $("#g-fl01-slider").html(html);
        $("#g-fl01-slider").slide({
            titCell: "#g-fl01-stit ul",
            mainCell: "#g-fl01-spic ul",
            effect: "leftLoop",
            autoPlay: true,
            autoPage: true,
            interTime: 5000,
            delayTime: 300,
            vis : 1,
            switchLoad: "_src"
        });
    };

    // 加载找信息
    floorLoadFn.prototype.loadLookFor = function(el,data){
        var _this = this;
        // 焦点图数据
        var listData = data.floorDateInfo.one;
        var source = '<ul class="clearfix">'
                    +   '<%for(var i=0;i<list.length;i++) {%>'
                    +       '<li><a href="<%=list[i].picLinkHttp%>" target="_blank"><img src="<%=pathConfig.imgPath + list[i].picUrl%>" width="44" height="44" alt="<%=list[i].picDesc%>"><p><%=list[i].picDesc%></p></a></li>'
                    +   '<%}%>'
                    + '</ul>';
        var render = template.compile(source);
        var html = render({
            list : listData,
            pathConfig : pathConfig
        });
        $(".vm-msg3").html(html).removeClass('page-loading02');
    };

    // 加载待信息
    floorLoadFn.prototype.loadDaiNum = function(){
        var upk = cookieJS.getCookie('_xea') && cookieJS.getCookie('xe_login_name');
        if(!!upk) {
            $(".vm-msg2").find('.vm-msg2-nl').hide();
            $(".vm-msg2").find('.vm-msg2-ld').addClass('page-loading02').show();

            $.ajax({
                url: $("#apiPath").val()+'/cms/dataInfo/queryOrderCount.shtml',
                type: 'GET',
                dataType: 'jsonp'
            })
            .done(function(data) {
                if(data.resultCode === "0000"){
                    // 待付款单
                    $("#df01").html(data.waitPayCount);
                    // 待收货
                    $("#df02").html(data.waitReceiveCount);
                    // 待评价
                    $("#df03").html(data.waitCommentCount);

                    $(".vm-msg2").find('.vm-msg2-ld').removeClass('page-loading02').find("li").show();
                }
            })
            .fail(function() {
                $(".vm-msg2").find('.vm-msg2-ld').show().html('加载失败,请重新刷新！')
            })
        };
    };

    //加载商品量入驻商家数量
    floorLoadFn.prototype.loadProCount = function(el,data){
        // 正则
        template.helper('proCountfomate',function(num,n) {
            num = num + '';

            var arr = [];
            arr.length=n;
            if(num.length < n) num = (arr.join(0) + num).slice(-n);
            var reg = /(?=(?!\b)(\d{3})+$)/g;
            var numstr = num.replace(reg, ',').split('');
            var htmlstr = ''
            for(var i=0;i<numstr.length;i++) {
                if(numstr[i] === ',') {
                    htmlstr += '<em>,</em>'
                }else{
                    htmlstr += '<span>'+numstr[i]+'</span>'
                }
            }
            return htmlstr;
        });

        var _this = this;
        _this.url = $("#apiPath").val()+'/cms/dataInfo/queryTodayQuotation.shtml';
        $.ajax({
            url : _this.url,
            type : 'get',
            dataType: 'jsonp',
            timeout : 8000
        }).done(function(data){
            $(".vm-msg4").removeClass('page-loading02');

            var source1 = '<ul>'
                        +  '<li style="display:block"><%=#proCountfomate(proCount,9)%></li>'
                        +  '<li><%=#proCountfomate(verdorCount,9)%></li>'
                        +  '<li><%=#proCountfomate(purchaserNum,9)%></li>'
                        +'</ul>';
            var source2 = '<h5>今日成交量</h5><ul class="msg4-ul">'
                            +   '<%for(var i=0;i<list.length;i++) {%>'
                            +    '<li><em><%=list[i].LOGINACCOUNT%></em><span>成交&nbsp;<i class="f-rmb">&yen;<%=toFixed(list[i].PAYAMOUT)%></i></span></li>'
                            +   '<%}%>'
                            +'</ul>'
            var render1 = template.compile(source1);
            var html1 = render1({
                proCount : data.productCount,
                verdorCount : data.vendorCount,
                purchaserNum : data.purchaserNum
            });
            if(data.doneInfoList.length > 0) {
                var render2 = template.compile(source2);
                var html2 = render2({
                    list : data.doneInfoList
                });
            }

            $("#msg4-tc").html(html1);

            $("#msg4-mlp").html(html2);

            new sliderLoop($(".msg4-ul")).loopFn();

            $('.msg4-b').css({width:$('.msg4-tab span').eq(0).outerWidth()});
            $("body").on('click','.msg4-tab span',function(ev){
                var index = $('.msg4-tab span').index(this);
                var moveEm = $('.msg4-b');

                var left = $(this).position().left;
                var width = $(this).outerWidth();

                moveEm.stop(true).animate({
                    left: left,
                    width: width
                },300);

                $("#msg4-tc li").hide().eq(index).show();

            });


        }).fail(function(data){
            console.log('fail')
        });
    };

    // 加载每日新品
    floorLoadFn.prototype.loadNewPro = function(el,data){
        var _this = this;
        var listData1 = data.floorDateInfo.one;
        var listData2 = data.floorDateInfo.two;
        var html = template('f-fresh',{
            list1 : listData1,
            list2 : listData2,
            pathConfig : pathConfig
        });
        $("#g-fresh").html(html);
    };

    // 加载首页推荐信息
    floorLoadFn.prototype.loadCmsg = function(el,data){
        var _this = this;
        var listData1 = data.floorDateInfo.one;
        var listData2 = data.floorDateInfo.two;
        var listData3 = data.floorDateInfo.three;
        var listData4 = data.floorDateInfo.four;
        var html = template('f-cmsg',{
            list1 : listData1,
            list2 : listData2,
            list3 : listData3,
            list4 : listData4,
            pathConfig : pathConfig
        });
        $("#g-f02").html(html);
    };

    // 加载优质商家
    floorLoadFn.prototype.loadShops = function(el,data){
        var _this = this;
        var listDataTit = data.floorDateInfo.menuTitle;
        var listData1 = data.floorDateInfo.one;
        var listData2 = data.floorDateInfo.two;
        var html = template('f-shops',{
            listDataTit : listDataTit,
            list1 : listData1,
            list2 : listData2,
            pathConfig : pathConfig
        });
        $("#g-f04").html(html);

        $(".g-shops-left").slide({
            titCell: ".g-shops-tips ul",
            mainCell: ".g-shops-con ul",
            effect: "leftLoop",
            autoPlay: true,
            autoPage: true,
            interTime: 5000,
            delayTime: 300,
            switchLoad: "_src"
        });

        $(".g-shops-item li").on("mouseover",function(ev){

            $(this).find('.g-sib').stop(true).animate({
                top :0
            },300)

        }).on("mouseout",function(ev){
            $(this).find('.g-sib').stop(true).animate({
                top :130
            },300)
        })
    };

    // 加载广告图
    floorLoadFn.prototype.loadAds = function(el,data){
        var _this = this;
        var listdata = data.floorDateInfo.one;
        if(!!listdata) {
            var source =   '<%for(var i=0;i<list.length;i++) {%>'
                           +    '<%if(list.length <= 1) {%>'
                           +     '<a href="<%=list[i].picLinkHttp%>">'
                           +        '<img src="<%=pathConfig.imgPath + list[i].picUrl%>" width="1200" height="100" alt="<%=list[i].picDesc%>">'
                           +    '<%}else{%>'
                           +        '<%if(i==0){%>'
                           +            '<a class="fl" href="<%=list[i].picLinkHttp%>">'
                           +        '<%}else{%>'
                           +            '<a class="fr" href="<%=list[i].picLinkHttp%>">'
                           +        '<%}%>'
                           +        '<img src="<%=pathConfig.imgPath + list[i].picUrl%>" width="593" height="100" alt="<%=list[i].picDesc%>">'
                           +    '<%}%>'

                           +     '</a>'
                           +'<%}%>';
            var render = template.compile(source);
            var html = render({
                list : listdata,
                pathConfig : pathConfig
            });
            $(el).html(html);
        }else{
            $(el).hide();
        }

    };

    // 加载分类楼层信息
    floorLoadFn.prototype.loadCategory = function(el,data){
        var _this = this;
        var code = $(el).attr('data-code');

        var listData = data.floorDateInfo;
        var html = template('f-category',{
            list : listData,
            pathConfig : pathConfig
        });
        $(".g-floor-"+code+"").html(html);

    };

    // 加载冷链马甲楼层
    floorLoadFn.prototype.loadLenglian = function(el,data){
        var _this = this;
        if(data.floorDateInfo){
            var listData = data.floorDateInfo;
            var html = template('f-lenglian',{
                list : listData,
                pathConfig : pathConfig
            });
            $("#g-f08").html(html);

            // 冷链马甲逻辑
            $("#g-f08").on("click",".mj-adr-tab span",function(ev){
                ev.preventDefault();
                var index = $(".mj-adr-tab span").index(this);
                var width = $(this).width();
                var left = $(this).position().left;

                $(this).siblings().removeClass("active").end().addClass('active');
                $(".mj-adr-tab").find("em").stop(true).animate({
                    width : width,
                    left : left
                },300);
                $(".mj-adr-tabcons").hide().eq(index).show();
            });

            $(".mj-adr-tabcons").find('.selectfns').selectfns();


            $(".mjAdrdd").adrSelects({

                fn : function (cdata){
                },
                position : "left", // 位置 默认为 "left",可选值"right" "center";
                cookieFlag : false // 是否写入cookie ，默认false 传入true会写COOKIE
            });

        }
    };

    // 加载鲜易金融
    floorLoadFn.prototype.loadFinance = function(el,data){
        var _this = this;
        if(data.floorDateInfo){
            var listData = data.floorDateInfo;
            var html = template('f-finance',{
                list : listData,
                pathConfig : pathConfig
            });
            $("#g-f09").html(html);
        };
    };

    // 加载资讯
    floorLoadFn.prototype.loadNews = function(el,data){
        var _this = this;
        if(data.floorDateInfo){
            var listData = data.floorDateInfo;

            var html = template('f-news',{
                list1 : listData.one,
                list2 : listData.two,
                list3 : listData.three,
                list4 : listData.four,
                list5 : listData.five,
                pathConfig : pathConfig
            });

            $("#g-f10").html(html);

            new sliderLoop($(".quoUl")).loopFn();
        };
    }


    //可视区加载
    var floorLoad = new floorLoadFn();

    // 加载大宗
    var loadBlukMsg = function(userCodeArr){
        var _this = this;
        _this.url = $("#apiPath").val()+'/index/indexJsonp/jsonp/getBulkProductList.shtml';

        var blukGet = $.ajax({
            url : _this.url,
            type : 'get',
            dataType: 'jsonp',
            timeout : 8000,
            data : {
                cityId : $.cookie('cyCityId') ? $.cookie('cyCityId') : ''
            }
        }).done(function(data){
            if(data.bulkProductList.length){
                _this.init(data.bulkProductList);
                // 楼层导航
                floorNavShow(true,userCodeArr);

            }else{
                $("#g-f03").remove();
                // 楼层导航
                floorNavShow(false,userCodeArr);
            };
            $.scrollShow(".g-floor",function(el){
                floorLoad.init(el);
            });

        }).fail(function(data){
            console.log('fail');
            $.scrollShow(".g-floor",function(el){
                floorLoad.init(el);
            });
            floorNavShow(false,userCodeArr);
        });

    };
    loadBlukMsg.prototype.init = function(datas){
        var html = template('f-blukMsg',{
          list : datas,
          pathConfig : pathConfig
        });
        $("#g-f03").html(html);
    };

    //禁用启用楼层
    $.ajax({
        url: $("#apiPath").val() +'/cms/dataInfo/menuCodeList.shtml',
        type: 'get',
        dataType: 'jsonp'
    })
    .done(function(data) {
        var noMenuCode = data.forbidden.forbiddenCodeList;
        var userCodes = data.menucodeList;
        var userCodeArr = [];

        if(noMenuCode.length){
            for(var i=0;i<noMenuCode.length;i++){
                $('.g-floor-' + noMenuCode[i]).remove();
            };
        }

        for(var u=0;u<userCodes.length;u++){
            if(userCodes[u].hovering == 1){
                userCodeArr.push(userCodes[u].menuCode);
            }
        };

        new loadBlukMsg(userCodeArr);

        $(window).on("scroll resize",function(){
            /* Act on the event */
            $.scrollShow(".g-floor",function(el){
                floorLoad.init(el);
            });
        });

    })
    .fail(function() {
        console.log("error");
    })
})
