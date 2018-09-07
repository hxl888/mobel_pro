~function($,window,document,undefined){
    // 搜索
    var now=-1;
    var oValue=null;
    $('.vm-s-tab span').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    $("#J-search").on("focus click",function(event){
        event.stopPropagation();
        var cityId = cookieJS.getCookie('cyCityId')?cookieJS.getCookie('cyCityId'):'999';
        var areaId = cookieJS.getCookie('cyAreaId')?cookieJS.getCookie('cyAreaId'):'45';
        var allArea = cookieJS.getCookie('allArea')?cookieJS.getCookie('allArea'):'2';
        var grandId = cookieJS.getCookie('xe_use_type')?cookieJS.getCookie('xe_use_type'):'';
        var userId = cookieJS.getCookie('xe_login_name');
        if(undefined == userId || 'undefined' == userId){
            userId = '';
        }
        var keyWord = $(this).val();
        var typeUrl,delUrl;
        if ($('.vm-s-tab span.active').attr('data-type')) {
            if ($('.vm-s-tab span.active').attr('data-type')==1) {
                typeUrl = $("#h_searchPath").val()+"suggestProduct.html";
                delUrl = $("#h_searchPath").val()+"delAccountSearch.html";
                var passData = {
                    'keyWord' : oValue
                    /*'cityId' : cityId,
                    'areaId' : areaId,
                    'allArea' : allArea,
                    'accNo' : userId,
                    'grandId': grandId*/
                }
            }else{
                typeUrl = $("#h_searchPath").val()+"suggestVendor.html";
                delUrl = $("#h_searchPath").val()+"delVendorSearch.html";
                var passData = {
                    'keyWord' : oValue
                    // 'accNo' : userId
                }
            }
        }else{
            typeUrl = $("#h_searchPath").val()+"suggestProduct.html";
            delUrl = $("#h_searchPath").val()+"delAccountSearch.html";
            var passData = {
                'keyWord' : oValue
                /*'cityId' : cityId,
                'accNo' : userId,
                'grandId': grandId*/
            }
        }
        var datatype = $('.vm-s-tab span.active').attr('data-type') ? $('.vm-s-tab span.active').attr('data-type') : 1;
        $.ajax({
            type : "get",
            url : typeUrl,
            data : passData,
            dataType : "jsonp",
            success : function(data) {
                var history = data.history;
                var suggest = data.suggest;
                var searchHtml = "";
                for (var i = 0; i < history.length; i++) {
                    searchHtml += "<div class='search_item clearfix' onclick=\"searchKeyWord(\'"+history[i]["keyWord"]+"\');\">";
                    searchHtml += "<div class='seProName'><a href='javascript:void(0);'>"+history[i]["keyWord"]+"</a></div>";
                    searchHtml += "<span>搜索历史</span>";
                    searchHtml += "<em>删除</em>";
                    searchHtml += "</div>";
                }
                for (var i = 0; i < suggest.length; i++) {
                    searchHtml += "<div class='search_item clearfix' onclick=\"searchKeyWord(\'"+suggest[i]["keyWord"]+"\');\">";
                    searchHtml += "<div class='seProName'><a href='javascript:void(0);'>"+suggest[i]["keyWord"]+"</a></div>";
                    if (datatype==1) {
                        searchHtml += "<span>约"+suggest[i]["count"]+"个商品</span>";
                    }else{
                        //searchHtml += "<span>约"+suggest[i]["count"]+"个商户</span>";
                    }
                    searchHtml += "</div>";
                }
                searchHtml += "<div class='serach_close'><p>关闭</p></div>";
                $(".search_drop").html("").html(searchHtml);
                if(history.length > 0 || suggest.length > 0){
                    $(".vm-s-cons").find(".search_drop").show();
                }else{
                    $(".vm-s-cons").find(".search_drop").hide();
                }
                $(".search_item em").on("click",function(event){
                    event.stopPropagation();
                    var userId = cookieJS.getCookie('_xea');
                    if(undefined == userId || 'undefined' == userId){
                        userId = '';
                    }
                    event.stopPropagation();
                    var keyWord = $(this).parents(".search_item").find(".seProName a").html();
                    $.ajax({
                        type : "get",
                        url : delUrl,
                        data : {
                            'keyWord' : keyWord.replace(/[\\/]/g,""),
                            'accNo' : userId
                        },
                        dataType : "jsonp",
                        success : function(data) {
                            if($(".search_item").length == 1){
                                $(".serach_close").hide();
                                $(".search_drop").hide();
                            }
                        }
                    });
                    $(this).parents(".search_item").remove();
                });
            }
        });
    }).on('keyup',function(ev){
        var cityId = cookieJS.getCookie('cyCityId')?cookieJS.getCookie('cyCityId'):'999';
        var areaId = cookieJS.getCookie('cyAreaId')?cookieJS.getCookie('cyAreaId'):'45';
        var grandId = cookieJS.getCookie('xe_use_type')?cookieJS.getCookie('xe_use_type'):'';
        var userId = cookieJS.getCookie('_xea');
        if(undefined == userId || 'undefined' == userId){
            userId = '';
        }
        var oEvent = ev || window.event;
        if(oEvent.keyCode==38||oEvent.keyCode==40) return;
        oValue = $(this).val();
        now=-1;
        if ($('.vm-s-tab span.active').attr('data-type')) {
            if ($('.vm-s-tab span.active').attr('data-type')==1) {
                typeUrl = $("#h_searchPath").val()+"suggestProduct.html";
                delUrl = $("#h_searchPath").val()+"delAccountSearch.html";
                var passData = {
                    'keyWord' : oValue
                    /*'cityId' : cityId,
                    'accNo' : userId,
                    'grandId': grandId*/
                }
            }else{
                typeUrl = $("#h_searchPath").val()+"suggestVendor.html";
                delUrl = $("#h_searchPath").val()+"delVendorSearch.html";
                var passData = {
                    'keyWord' : oValue
                    //'accNo' : userId
                }
            }
        }else{
            typeUrl = $("#h_searchPath").val()+"suggestProduct.html";
            delUrl = $("#h_searchPath").val()+"delAccountSearch.html";
            var passData = {
                'keyWord' : oValue
                /*'cityId' : cityId,
                'accNo' : userId,
                'grandId': grandId*/
            }
        };
        var datatype = $('.vm-s-tab span.active').attr('data-type') ? $('.vm-s-tab span.active').attr('data-type') : 1;
        $.ajax({
            type : "get",
            url : typeUrl,
            data : passData,
            dataType : "jsonp",
            success : function(data) {
                //console.log(data);
                var history = data.history;
                var suggest = data.suggest;
                var searchHtml = "";
                for (var i = 0; i < history.length; i++) {
                    searchHtml += "<div class='search_item clearfix' onclick=\"searchKeyWord(\'"+history[i]["keyWord"]+"\');\">";
                    searchHtml += "<div class='seProName'><a href='javascript:void(0);'>"+history[i]["keyWord"]+"</a></div>";
                    searchHtml += "<span>搜索历史</span>";
                    searchHtml += "<em>删除</em>";
                    searchHtml += "</div>";
                }
                for (var i = 0; i < suggest.length; i++) {
                    searchHtml += "<div class='search_item clearfix' onclick=\"searchKeyWord(\'"+suggest[i]["keyWord"]+"\');\">";
                    searchHtml += "<div class='seProName'><a href='javascript:void(0);'>"+suggest[i]["keyWord"]+"</a></div>";
                    if (datatype==1) {
                        searchHtml += "<span>约"+suggest[i]["count"]+"个商品</span>";
                    }else{
                        //searchHtml += "<span>约"+suggest[i]["count"]+"个商户</span>";
                    }
                    searchHtml += "</div>";
                }
                searchHtml += "<div class='serach_close'><p>关闭</p></div>";
                $(".search_drop").html(searchHtml);
                if(history.length > 0 || suggest.length > 0){
                    $(".vm-s-cons").find(".search_drop").show();
                }else{
                    $(".vm-s-cons").find(".search_drop").hide();
                }

                $(".search_item em").on("click",function(event){
                    event.stopPropagation();
                    var userId = cookieJS.getCookie('_xea');
                    if(undefined == userId || 'undefined' == userId){
                        userId = '';
                    }
                    event.stopPropagation();
                    var keyWord = $(this).parents(".search_item").find(".seProName a").html();
                    $.ajax({
                        type : "get",
                        url : delUrl,
                        data : {
                            'keyWord' : keyWord.replace(/[\\/]/g,""),
                            'accNo' : userId
                        },
                        dataType : "jsonp",
                        success : function(data) {
                            if($(".search_item").length == 1){
                                $(".serach_close").hide();
                                $(".search_drop").hide();
                            }
                        }
                    });
                    $(this).parents(".search_item").remove();
                });


            }
        });
    }).on("keydown",function(ev){
        var oEvent = ev || window.event;
        _this = $(this);
        if(oEvent.keyCode == 40){
            now++
            if(now == $(".search_drop").find(".search_item").length){
                now = -1;
                _this.val(oValue)
                $(".search_item").removeClass('active');
                return false
            }else{
                getKey(now);
            }
        }else if(oEvent.keyCode == 38){
            now--;
            if(now==-1){
                _this.val(oValue);
                $(".search_item").removeClass('active');
            }else if(now <=-2){
                now = $(".search_drop").find(".search_item").length - 1;
                getKey(now);
            }else{
                getKey(now);
            }
        }


    })

    searchKeyWord = function(keyWord){
        var datatype = $('.vm-s-tab span.active').attr('data-type') ? $('.vm-s-tab span.active').attr('data-type') : 1;
        var urlCode;
        if (datatype==1) {
            urlCode = '-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1';
        }else{
            urlCode = '-0-0-0-1';
        }
        var url = $("#h_searchPath").val()+"list-s"+datatype+urlCode+".html?keyWord="+encodeURIComponent(keyWord).replace(/[\\/]/g,"");
        window.location = url;
    }

    function getKey(now){
        var item = $(".search_drop").find(".search_item");
        var text = item.eq(now).find("a").text();
        $("#J-search").val(text);
        item.removeClass('active').eq(now).addClass("active");
    }

    $("body").delegate(".search_item","mouseenter",function(){
        $(this).find("span").hide();
        $(this).find("em").show();
    }).delegate(".search_item","mouseleave",function(){
        $(this).find("span").show();
        $(this).find("em").hide();
    })
    $("body").delegate(".vm-s-cons .u-btn","click",function(){
        var datatype = $('.vm-s-tab span.active').attr('data-type') ? $('.vm-s-tab span.active').attr('data-type') : 1;
        var urlCode;
        if (datatype==1) {
            urlCode = '-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1';
        }else{
            urlCode = '-0-0-0-1';
        }
        var url = $("#h_searchPath").val()+"list-s"+datatype+urlCode+".html?keyWord="+encodeURIComponent(($("#J-search").val()).replace(/[\\/]/g,""));
        location.href =url;
    });
    //搜索框中的回车事件
    $("#J-search").keydown(function(event){
        var ev = event || window.event;
        var datatype = $('.vm-s-tab span.active').attr('data-type') ? $('.vm-s-tab span.active').attr('data-type') : 1;
        var urlCode;
        if (datatype==1) {
            urlCode = '-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1';
        }else{
            urlCode = '-0-0-0-1';
        }
        if(ev.keyCode==13) {
            var datatype = $('.vm-s-tab span.active').attr('data-type') ? $('.vm-s-tab span.active').attr('data-type') : 1;
            var url = $("#h_searchPath").val()+"list-s"+datatype+urlCode+".html?keyWord="+encodeURIComponent(($("#J-search").val()).replace(/[\\/]/g,""));
            window.location.href =url;
        }
    });

    $(document).on("click",function(event){
        $(".vm-s-cons").find(".search_drop").hide();
    })
    // 登录态切换 收藏
    $('.m-nav-l .vm-nav-adr2').on('click',function(){
        var a = "http://www.xebest.com/",b = "鲜易网";
        document.all ? window.external.AddFavorite(a, b) : window.sidebar && window.sidebar.addPanel ? window.sidebar.addPanel(b, a, "") : $.modal(
            {
              text: '<div class="example"><div class="warming-str" style="padding-top:40px">对不起，您的浏览器不支持此操作！<br/>请您使用菜单栏或Ctrl+D收藏本站。</div></div>',
              closeBtn: true,
              extraClass : "modal-mu-warming",
              buttons: [
                {
                  text: '确认',
                  btnCls : 'u-btn-red'
                }
              ]
            }
        );
    })
    var loginJS = {
        logout: function(){
            $.ajax({
                type : "GET",
                url : $("#h_loginPath").val() + "login/logoutAjax.shtml",
                cache : false,
                dataType : "jsonp",
                timeout : 5000,
                success : function(data){
                   window.location.reload();
                }
            });
        },
        checkLogin: function(){
            var upk = cookieJS.getCookie('_xea');
            var ume = cookieJS.getCookie('xe_login_name') ? cookieJS.getCookie('xe_login_name').replace(/\"/g,'') : '';
            if(upk && ume){//logined
                $('.z-logined').show();
                $('.z-reg').hide();
                $('.z-logined span').html(ume+'，欢迎您来到鲜易网！');
                $('.f-myStore').html('我的店铺');
            }else{//unlogin
                $('.z-logined').hide();
                $('.z-reg').show();
                $('.z-logined span').html('');
                $('.f-myStore').html('商家入驻');
            }
        }
    };

    loginJS.checkLogin();

    $('.z-logined a').click(function(){
        loginJS.logout();
    })
    $("#login").on("click", function(){
        var url =window.location.href;
        var path =$("#h_loginPath").val() + "?returnUrl="+url;
        window.location.href= path;
    });
    $('.m-tbr .m-tbr-close').click(function(){
        $('.m-tbr').slideUp();
    })
    // tq
     var tqLoading = {
        disY : 200,
        speed : 200,
        domEl : $('<div class="f-tqBox"></div>'),
        cartNum : function(){
            dataUrl = $('#h_cartPath').val() + 'cart/qca.shtml';
            $.ajax({
                url: dataUrl,
                type: 'GET', // 默认为GET,你可以根据需要更改
                dataType: 'jsonp', // 指定想要的数据类型
                timeout: 5000,
                success: function (data) {
                    $('.f-cartNum').html('进货单('+data.cartNum+')')
                }
            });
        },
        btnFn : function(){
            $(".f-tqBox .f-toTop").on("click",function(){
                $("body,html").stop().animate({scrollTop: 0},400);
            });
        },
        xjFn : function(){
            $(".f-tqBox .f-xjEnter").on("click",function(){
                $.ajax({
                   async : false,
                   type : 'GET',
                   dataType : "jsonp",//数据类型为jsonp
                   jsonp: "callback",
                   timeout: 5000,
                   url : $("#h_loginPath").val() + '/login/checkLoginAjax.shtml',
                   success : function(data) {
                       if (data.code == '200'){
                         window.location.href=$("#h_myPath").val() + 'myis/qis.shtml';
                       }else{
                         window.location.href=$("#h_loginPath").val()+'?returnUrl='+$("#h_myPath").val() + 'myis/qis.shtml';
                       }
                   }
               });
            });
        },
        feedFn : function(){
            $(".f-tqBox .f-feedback").on("click",function(){
                $.ajax({
                   async : false,
                   type : 'GET',
                   dataType : "jsonp",//数据类型为jsonp
                   jsonp: "callback",
                   timeout: 5000,
                   url : $("#h_loginPath").val() + '/login/checkLoginAjax.shtml',
                   success : function(data) {
                       if (data.code == '200'){
                         window.location.href=$("#h_myPath").val() + 'suggestion/toAdd.shtml';
                       }else{
                         window.location.href=$("#h_loginPath").val()+'?returnUrl='+$("#h_myPath").val() + 'suggestion/toAdd.shtml';
                       }
                   }
               });
            });
        },
        init : function(){
            var fixIcon = '<div class="tq-sever">';
                fixIcon += '<a href="'+$("#h_cartPath").val()+'/cart/toCart.shtml"><i class="u-icon">&#xe65b;</i><em class="f-cartNum">进货单(0)</em></a>';
                fixIcon += '<a href="javascript:;" class="f-xjEnter"><i class="u-icon">&#xe643;</i><em>询价单</em></a>';
                fixIcon += '<a href="javascript:;" onclick="TQKF.OpenChat(\'acd\',3);return false;"><i class="u-icon">&#xe66b;</i><em>在线咨询</em></a>';
                fixIcon += '</div>';
                fixIcon += '<div class="tq-below">';
                fixIcon += '<a href="javascript:;" class="f-feedback"><i class="u-icon">&#xe66a;</i><em>意见反馈</em></a>';
                fixIcon += '<a href="javascript:;" class="f-toTop"><i class="u-icon">&#xe66c;</i><em>返回顶部</em></a>';
                fixIcon += '</div>';

            this.domEl.html(fixIcon);
            $("body").append(this.domEl);
            this.btnFn();
            this.feedFn();
            this.xjFn();
            this.cartNum();
        }
    };

    
    if ($('body').attr('data-tq')) {
        tqLoading.init();
    };

}(jQuery,window,document);
