<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" >
    <meta name="keywords" content="">
    <meta name="description" content="">
    <link rel="icon" href="${mainUrl!""}favicon.ico" mce_href="${mainUrl!""}favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="${basePath!""}css/common/bundle.min.css" type="text/css">
    <link rel="stylesheet" href="${basePath!""}css/page-index.css">
</head>
<body id="homepage">
	<!--头部 begin-->
	<!--#include virtual="./common/header.shtml" -->
	<!--头部 end-->
    <div class="g-main g-main-gray">
        <div class="g-floor g-wrap page-loading01" id="g-f01" data-code="3" data-time="${infoMap['3']}" data-code1="4" data-time1="${infoMap['4']}">
            <div class="g-fl01-con clearfix">
                <div class="g-fl01-slider fl" id="g-fl01-slider"></div>
                <div class="g-fl01-msg fr">
                    <div class="vm-msg1">
                        <a href="#" class="vs-upc">
                            <img src="${basePath!""}images/index_pic/user-pic.jpg" width="50" height="50" alt="">
                        </a>
                        <div>
                            <p class="vs-uwl">HI上午好！</p>
                            <p class="vs-uts">欢迎来到xebest.com</p>
                        </div>
                    </div>
                    <div class="vm-msg2">
                        <!-- 未登录 -->
                        <div class="vm-msg2-nl clearfix">
                            <a class="nl-a1" href="${loginPath!""}">
                                <i class="u-icon">&#xe639;</i>登录
                            </a>
                            <a class="nl-a2" href="${loginPath!""}reg/regUserByTel.shtml" target="_blank">
                                <i class="u-icon">&#xe63a;</i>注册
                            </a>
                        </div>
                        <div class="vm-msg2-ld">
                            <ul class="clearfix">
                                <li>
                                    <a href="${myPath!""}orderList/myOrder.shtml?orderStatus=1" target="_blank">
                                        <strong>0</strong>
                                        <p>待付款</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="${myPath!""}orderList/myOrder.shtml?orderStatus=3" target="_blank">
                                        <strong>0</strong>
                                        <p>待收货</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="${myPath!""}orderList/myOrder.shtml?orderStatus=5" target="_blank">
                                        <strong>0</strong>
                                        <p>待评价</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="vm-msg3 page-loading02">
                        <ul class="clearfix">
                        </ul>
                    </div>
                    <div class="vm-msg4 page-loading02">
                        <div class="msg4-tab clearfix">
                            <span><a href="javascript:void(0);">商品量</a></span>
                            <span><a href="javascript:void(0);">入驻商家</a></span>
                            <span><a href="javascript:void(0);">采购量</a></span>
                            <em class="msg4-b"></em>
                        </div>
                        <div class="msg4-tc" id='msg4-tc'>
                        </div>
                        <div class="msg4-mlp" id='msg4-mlp'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="g-floor g-wrap page-loading02" id="g-fresh" data-code="5" data-time="${infoMap['5']}"></div>

        <div class="g-floor g-wrap page-loading02" id="g-f02" data-code="6" data-time="${infoMap['6']}"></div>

        <div class="g-floor g-wrap" id="g-f03"></div>

        <div class="g-floor g-wrap page-loading01" id="g-f04" data-code="7" data-time="${infoMap['7']}"></div>

        <div class="g-floor g-wrap page-loading02 clearfix" id="g-fad1" data-code="8" data-time="${infoMap['8']}"></div>

        <div class="g-floor g-wrap g-floor-9 page-loading01 clearfix" id="g-f05" data-code="9" data-time="${infoMap['9']}"></div>

        <div class="g-floor g-wrap clearfix page-loading02" id="g-fad2" data-code="200" data-time="${infoMap['200']}"></div>

        <div class="g-floor g-wrap g-floor-10 page-loading01 clearfix" id="g-f06" data-code="10" data-time="${infoMap['10']}"></div>

        <div class="g-floor g-wrap clearfix page-loading02" id="g-fad3" data-code="201" data-time="${infoMap['201']}"></div>

        <div class="g-floor g-wrap g-floor-11 page-loading01 clearfix" id="g-f07" data-code="11" data-time="${infoMap['11']}"></div>

        <div class="g-floor g-wrap clearfix  page-loading02" id="g-fad4" data-code="202" data-time="${infoMap['202']}"></div>

        <div class="g-floor g-wrap page-loading01" id="g-f08" data-code="12" data-time="${infoMap['12']}"></div>

        <div class="g-floor g-wrap page-loading01" id="g-f09" data-code="13" data-time="${infoMap['13']}"></div>

        <div class="g-floor g-wrap page-loading01" id="g-f10" data-code="14" data-time="${infoMap['14']}"></div>

    </div>

    <script type="text/html" id="f-slider">
        <div class="g-fl01-pic" id="g-fl01-spic">
            <ul class="slider-ul">
                <%for(var i=0;i<list.length; i++){%>
                    <li>
                        <a href="<%=list[i].picLinkHttp%>">
                            <img _src="<%=pathConfig.imgPath + list[i].picUrl%>" width="714" height="390" alt="<%=list[i].picDesc%>">
                        </a>
                    </li>
                <%}%>
            </ul>
        </div>
        <div class="g-fl01-tit" id="g-fl01-stit">
            <ul></ul>
        </div>
    </script>

    <!-- 大宗 -->
    <script type="text/html" id="f-blukMsg">
        <div class="g-ft clearfix">
            <h4 class="fl">冻品专区</h4><span class="g-dzt fl">生鲜自营</span><a class="fr" href="${apiPath!""}index/indexJsonp/jsonp/getBulkProList.shtml" target="_blank">查看全部 &gt;</a>
        </div>
        <div class="g-dzpr">
            <ul>
                <%for(var i=0;i<list.length;i++) {%>
                <li>
                    <div class="p-pic">
                        <a href="${itemPath!""}<%=list[i].productCode%>.shtml" target="_blank">
                            <img src="<%=pathConfig.imgPath + 'product/200/200/' + list[i].imgurl%>" width="200" height="200" alt="">
                        </a>
                        <div class="p-psc">
                            <p class="clearfix">
                                <span class="fl">销量: <%=list[i].totalSaleStr%></span>
                                <span class="fr">起订量: <%=list[i].areaMinorderQuantity%></span>
                            </p>
                        </div>
                    </div>
                    <div class="p-name">
                        <a href="${itemPath!""}<%=list[i].productCode%>.shtml"><%=list[i].productName%></a>
                    </div>
                    <div class="p-pri">
                        <%if(list[i].isPresale == "1") {%>
                            <strong><i class="f-rmb">&yen;</i><%=list[i].presalePrice%>/<%=list[i].units%> </strong><span><%=list[i].newPrice%></span>
                        <%}else if(list[i].isEableLabber == "1"){%>
                            <strong><i class="f-rmb">&yen;</i><%=list[i].productPresaleLadder[0].ladderPrice%>/<%=list[i].units%></strong><span><%=list[i].productPresaleLadder[0].unitPrice%></span>
                        <%}else if(list[i].isEablePresaleLabber == "1"){%>
                            <strong><i class="f-rmb">&yen;</i><%=list[i].productLadder[0].ladderPrice%>/<%=list[i].units%></strong><span><%=list[i].productLadder[0].unitPrice%></span>
                        <%}else{%>
                            <strong><i class="f-rmb">&yen;</i><%=list[i].vipPrice%>/<%=list[i].units%></strong><span><%=list[i].newPrice%></span>
                        <%}%>
                    </div>
                </li>
                <%}%>
            </ul>
        </div>
    </script>

    <script type="text/html" id="f-fresh">
        <div class="g-fl01-con2">
            <ul class="clearfix">
                <%if(list1.length > 0) {%>
                    <li class="first">
                        <a href="#" title="<%=list1[0].picLinkHttp%>">
                            <img class='fresh-img' src="<%=pathConfig.imgPath + list1[0].picUrl%>" width="220" height="130" alt="<%=list1[0].picDesc%>">
                        </a>
                    </li>
                <%}else{%>
                    <li class="first">
                        <em class="u-icon">&#xe61a;</em>
                        <img src="http://qa-misc.cy.xebest.com/new_cy/images/index_pic/vl-01.jpg" width="220" height="130" alt="">
                    </li>
                <%}%>
                <%for(var k=0;k<list2.length;k++) {%>
                    <li>
                        <a href="<%=list2[k].picLinkHttp%>">
                            <span><i>立即抢购 &gt;</i></span>
                            <img src="<%=pathConfig.imgPath + list2[k].picUrl%>" width="244" height="130" alt="<%=list2[k].picDesc%>">
                        </a>
                    </li>
                <%}%>
            </ul>
        </div>
    </script>

    <script type="text/html" id="f-cmsg">
        <ul class="clearfix">
            <li class="m0">
                <%for(var i=0;i<list1.length;i++) {%>
                    <%if(i===0) {%>
                        <span><img src="<%=pathConfig.imgPath + list1[i].picUrl%>" alt="<%=list1[i].textTitle%>" width="40" height="40"></span>
                    <%}else{%>
                    <a href="<%=list1[i].textUrl%>" target="_blank"><%=list1[i].textTitle%></a>
                    <%}%>
                <%}%>
            </li>
            <li class="m1">
                <%for(var i=0;i<list2.length;i++) {%>
                    <%if(i===0) {%>
                        <span><img src="<%=pathConfig.imgPath + list2[i].picUrl%>" alt="<%=list2[i].textTitle%>" width="40" height="40"></span>
                    <%}%>
                    <a href="<%=list2[i].textUrl%>" target="_blank"><%=list1[i].textTitle%></a>
                <%}%>
            </li>
            <li class="m2">
                <%for(var i=0;i<list3.length;i++) {%>
                    <%if(i===0) {%>
                        <span><img src="<%=pathConfig.imgPath + list3[i].picUrl%>" alt="<%=list3[i].textTitle%>" width="40" height="40"></span>
                    <%}%>
                    <a href="<%=list3[i].textUrl%>" target="_blank"><%=list3[i].textTitle%></a>
                <%}%>
            </li>
            <li class="m3">
                <%for(var i=0;i<list4.length;i++) {%>
                    <%if(i===0) {%>
                        <span><img src="<%=pathConfig.imgPath + list4[i].picUrl%>" alt="<%=list4[i].textTitle%>" width="40" height="40"></span>
                    <%}%>
                    <a href="<%=list4[i].textUrl%>" target="_blank"><%=list4[i].textTitle%></a>
                <%}%>
            </li>
        </ul>
    </script>

    <script type="text/html" id="f-shops">
        <div class="g-ft clearfix">
            <h4 class="fl"><%=listDataTit%></h4><a href="${storePath!""}supplier/vendor/index/toIndex.html" class="fr" target="_blank">供应商入驻 &gt;</a>
        </div>
        <div class="g-shops clearfix">
            <div class="g-shops-left fl">
                <div class="g-smk"></div>
                <div class="g-shops-con">
                    <ul>
                        <%for(var i=0;i<list1.length; i++) {%>
                            <li>
                                <div class="p-pic">
                                    <a href="<%=list1[i].picLinkHttp%>" target="_blank">
                                        <img _src="<%=pathConfig.imgPath + list1[i].picUrl%>" width="260" height="190" alt="">
                                    </a>
                                </div>
                                <div class="p-msg">
                                    <p class="p-name"><a href="<%=list1[i].picLinkHttp%>" target="_blank"><%=list1[i].vendorName%></a></p>
                                    <p class="p-des"><%=list1[i].vendorBusiness%></p>
                                </div>
                            </li>
                        <%}%>
                    </ul>
                </div>
                <div class="g-shops-tips"><ul></ul></div>
            </div>
            <div class="g-shops-item">
                <ul class="clearfix">
                    <%for(var i=0;i<list2.length; i++) {%>
                        <li>
                            <div class="g-sit">
                                <div class="p-pic">
                                    <img src="<%=pathConfig.imgPath + list2[i].picUrl%>" width="120" height="60" alt="">
                                </div>
                                <div class="p-name">
                                    <%=list2[i].vendorName%>
                                </div>
                                <div class="p-dec">
                                    <%=list2[i].vendorBusiness%>
                                </div>
                            </div>
                            <div class="g-sib">
                                <p class="p-name"><%=list2[i].vendorBusiness%></p>
                                <a href="<%=list2[i].picLinkHttp%>" target="_blank">进入店铺 &gt;</a>
                            </div>
                        </li>
                    <%}%>
                </ul>
            </div>
        </div>
    </script>

    <script type="text/html" id="f-category">
        <div class="g-f06-sl fl">
            <div class="g-ft clearfix">
                <h4 class="fl"><%=list.menuTitle.split('-')[0]%></h4>
                <%if(list.one[1].length > 0) {%>
                <p class="fl g-ft-links">
                    <%for(var i=0;i<list.one[1].length;i++) {%>
                        <a href="<%=list.one[1][i].id%>" target="_blank"><%=list.one[1][i].name%></a><%if(i == list.one[1].length -1){%><%}else{%>/<%}%>
                    <%}%>
                </p>
                <%}%>

            </div>
            <div class="g-incol g-incol-lc clearfix">
                <div class="g-incol-l fl">
                    <div class="g-incol-b fl">
                        <%if(list.one[0].length > 0) {%>
                        <a href="<%=list.one[0][0].picLinkHttp%>" target="_blank">
                            <img src="<%=pathConfig.imgPath + list.one[0][0].picUrl%>" width="240" height="368" alt="">
                        </a>
                        <%}%>
                    </div>
                    <%if(list.menuCode == "9") {%>
                        <div class="g-incol-t g-incol-tmax fl">
                    <%}else{%>
                        <div class="g-incol-t fl">
                    <%}%>
                    <%if(list.two[0].length > 0) {%>
                        <dl class="g-incol-short">
                    <%}else{%>
                        <dl>
                    <%}%>
                            <dd>
                                <p>
                                    <%if(list.two[1].length > 0) {%>
                                        <%for(var i=0;i<list.two[1].length;i++) {%>
                                            <a href="<%=list.two[1][i].picLinkHttp%>" target="_blank"><%=list.two[1][i].proCategory%></a>
                                        <%}%>
                                    <%}%>
                                </p>
                            </dd>
                        </dl>
                        <%if(list.two[0].length > 0) {%>
                            <div class="g-incol-tpro">
                                <a href="<%=list.two[0][0].picLinkHttp%>" title="<%=list.two[0][0].picDesc%>">
                                    <img src="<%=pathConfig.imgPath + list.two[0][0].picUrl%>" height="155" width="168" alt="<%=list.two[0][0].picDesc%>">
                                </a>
                                <div class="tpro-01">
                                    <div>
                                        <a href="#" title=""><%=list.two[0][0].proCategory%></a>
                                    </div>
                                    <p>
                                        92.00/袋
                                    </p>
                                </div>
                            </div>
                        <%}%>

                    </div>
                    <div class="g-incol-o fr">
                        <ul>
                            <%if(list.three.length > 0) {%>
                                <%for(var i=0;i<list.three.length;i++) {%>
                                    <li>
                                        <a href="<%=list.three[i].picLinkHttp%>" target="_blank">
                                            <img src="<%=pathConfig.imgPath + list.three[i].picUrl%>" width="120" height="60" alt="<%=list.three[i].picDesc%>" />
                                        </a>
                                    </li>
                                <%}%>
                            <%}%>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="g-f06-sr fr">
            <div class="g-ft clearfix">
                <h4 class="fl"><%=list.menuTitle.split('-')[1]%></h4>
                <%if(list.four[1].length > 0) {%>
                <p class="fl g-ft-links">
                    <%for(var i=0;i<list.four[1].length;i++) {%>
                        <a href="<%=list.four[1][i].id%>" target="_blank"><%=list.four[1][i].name%></a><%if(i == list.four[1].length -1){%><%}else{%>/<%}%>
                    <%}%>
                </p>
                <%}%>
            </div>
            <div class="g-incol g-incol-rc clearfix">
                <div class="g-incol-l fl">
                    <div class="g-incol-b fl">
                        <%if(list.four[0].length > 0) {%>
                        <a href="<%=list.four[0][0].picLinkHttp%>" target="_blank">
                            <img src="<%=pathConfig.imgPath + list.four[0][0].picUrl%>" width="240" height="368" alt="">
                        </a>
                        <%}%>
                    </div>
                    <%if(list.menuCode == "9") {%>
                        <div class="g-incol-t g-incol-tmin fl">
                    <%}else{%>
                        <div class="g-incol-t fl">
                    <%}%>
                    <%if(list.five[0].length > 0) {%>
                        <dl class="g-incol-short">
                    <%}else{%>
                        <dl>
                    <%}%>
                            <dd>
                                <p>
                                    <%if(list.five[1].length > 0) {%>
                                        <%for(var i=0;i<list.five[1].length;i++) {%>
                                            <a href="<%=list.five[1][i].picLinkHttp%>" target="_blank"><%=list.five[1][i].proCategory%></a>
                                        <%}%>
                                    <%}%>
                                </p>
                            </dd>
                        </dl>

                        <%if(list.five[0].length > 0) {%>
                            <div class="g-incol-tpro">
                                <a href="<%=list.five[0][0].picLinkHttp%>" title="<%=list.five[0][0].picDesc%>">
                                    <img src="<%=pathConfig.imgPath + list.five[0][0].picUrl%>" height="155" width="168" alt="<%=list.five[0][0].picDesc%>">
                                </a>
                                <div class="tpro-01">
                                    <div>
                                        <a href="#" title=""><%=list.five[0][0].proCategory%></a>
                                    </div>
                                    <p>
                                        92.00/袋
                                    </p>
                                </div>
                            </div>
                        <%}%>

                    </div>
                    <div class="g-incol-o fr">
                        <ul>
                            <%if(list.six.length > 0) {%>
                                <%for(var i=0;i<list.six.length;i++) {%>
                                    <li>
                                        <a href="<%=list.six[i].picLinkHttp%>" target="_blank">
                                            <img src="<%=pathConfig.imgPath + list.six[i].picUrl%>" width="120" height="60" alt="<%=list.six[i].picDesc%>" />
                                        </a>
                                    </li>
                                <%}%>
                            <%}%>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </script>

    <script type="text/html" id="f-lenglian">
        <div class="g-ft clearfix">
            <h4 class="fl"><%=list.menuTitle%></h4><span class="fl mj-slogan"></span>
        </div>
        <div class="g-mj">
            <a href="<%=list.picLinkHttp%>" class="mj-banner">
                <img src="<%=pathConfig.imgPath + list.one[0].picUrl%>" width="1200" height="350" alt="<%=list.picDesc%>">
            </a>
            <div class="mj-adr">
                <div class="mj-adr-tab clearfix">
                    <span>车源信息</span>
                    <span>货源信息</span>
                    <span>库源信息</span>
                    <em></em>
                </div>
                <div class="mj-adr-tabcon">
                    <ul class="tabcon-div z-show">
                        <li class="clearfix"><span>始发地</span><div></div></li>
                        <li class="clearfix"><span>目的地</span><div></div></li>
                        <li class="clearfix"><span>车辆长度</span><div></div></li>
                    </ul>
                </div>
                <div class="mj-adr-btn">
                    <a href="#">搜索</a>
                </div>
            </div>
            <div class="mj-msgs">
                <div class="mj-msg-br">
                    <ul class="clearfix">
                        <li class="mj-br-01">
                            <div class="mj-br-top">
                                <p></p>
                                <span>资质认证</span>
                            </div>
                            <div class="mj-br-bot">
                                <a href="#">车辆资质</a>
                                <a href="#">运营物资</a>
                                <a href="#">冷库资质</a>
                            </div>
                        </li>
                        <li class="mj-br-02">
                            <div class="mj-br-top">
                                <p></p>
                                <span>信用评级</span>
                            </div>
                            <div class="mj-br-bot">
                                <a href="#">累计评分</a>
                                <a href="#">综合评分</a>
                                <a href="#">星级评比</a>
                            </div>
                        </li>
                        <li class="mj-br-03">
                            <div class="mj-br-top">
                                <p></p>
                                <span>在线服务</span>
                            </div>
                            <div class="mj-br-bot">
                                <a href="#">用户投诉</a>
                                <a href="#">在线留言</a>
                                <a href="#">呼叫中心</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <p class="mj-apc1">
                    <img src="${basePath!""}images/index_pic/mj-01.png" width="270" hegiht="133" alt="">
                </p>
                <p class="mj-apc2">
                    <img src="${basePath!""}images/index_pic/mj-02.png" width="92" hegiht="91" alt="">
                </p>
                <p class="mj-apc3">
                    <img src="${basePath!""}images/index_pic/mj-03.png" width="131" hegiht="118" alt="">
                </p>
            </div>
        </div>
    </script>

    <script type="text/html" id="f-finance">
        <div class="g-ft clearfix">
            <h4 class="fl"><%=list.menuTitle%></h4><span class="fl jr-slogan"></span>
        </div>
        <div class="g-jr">
            <a href="<%=list.picLinkHttp%>">
                <img src="<%=pathConfig.imgPath + list.one[0].picUrl%>" width="1200" height="350" alt="<%=list.picDesc%>">
            </a>
            <div class="g-jr-l">
                <div class="g-jrl-so"></div>
                <div class="g-jrl-item">
                    <ul class="clearfix">
                        <li>
                            <p class="u-icon">
                                <span>&#xe640;</span>
                            </p>灵活
                        </li>
                        <li>
                            <p class="u-icon">
                                <span>&#xe63f;</span>
                            </p>安全
                        </li>
                        <li>
                            <p class="u-icon">
                                <span>&#xe63e;</span>
                            </p>易用
                        </li>
                    </ul>
                </div>
                <div class="g-jrl-btn">
                    <a href="#" target="_blank">立即申请</a>
                </div>
            </div>
            <div class="g-jr-r">
                <div class="g-jr-rt">申请条件</div>
                <div class="g-jr-list">
                    <ol>
                        <li>·公司成立并有合法</li>
                        <li>·和鲜易网连续合作6个月以上</li>
                        <li>·和鲜易网近半年月均交易额30万元</li>
                    </ol>
                </div>
                <div class="g-jr-p04">
                    <img src="${basePath!""}images/index_pic/jr-04.png" width="270" height="161" alt="">
                </div>
                <div class="g-jr-p01">
                    <img src="${basePath!""}images/index_pic/jr-01.png" width="194" height="103" alt="">
                </div>
                <div class="g-jr-p02">
                    <img src="${basePath!""}images/index_pic/jr-02.png" width="25" height="24" alt="">
                </div>
                <div class="g-jr-p03">
                    <img src="${basePath!""}images/index_pic/jr-03.png" width="25" height="25" alt="">
                </div>

            </div>
        </div>
    </script>
    
    <script type="text/html" id="f-news">
        <div class="wrap-cons-news clearfix">
            <div class="news-cons-left fl">
                <div class="g-ft clearfix">
                    <h4 class="fl">行业资讯</h4>
                </div>
                <div class="news-cons clearfix">
                    <div class="news-cons01 fl">
                        <div class="cons01-pic">
                            <a href="<%=list1[0].picLinkHttp%>" target="_blank">
                                <img src="<%=pathConfig.imgPath + list1[0].picUrl%>" width="310" height="170" alt="">
                            </a>
                            <span><%=list1[0].textTitle%></span>
                        </div>
                        <div class="cons01-list">
                            <ul>
                                <%for(var i=0;i<list2.length;i++) {%>
                                <li>
                                    <a href="<%=list2[i].textUrl%>" target="_blank"><%=list2[i].textTitle%></a>
                                    <span><%=list2[i].startTime%></span>
                                </li>
                                <%}%>
                            </ul>
                        </div>
                    </div>
                    <div class="news-cons02 fr">
                        <h4 class="cons02-h4">求购信息</h4>
                        <ul>
                            <%for(var i=0;i<list3.length;i++) {%>
                            <li>
                                <em class="active"><%=i+1%></em>
                                <a href="<%=list3[i].textUrl%>" target="_blank"><%=list3[i].textTitle%></a>
                            </li>
                            <%}%>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="news-cons-right fr">
                <div class="g-ft clearfix">
                    <h4 class="fl">市场行情</h4>
                </div>
                <div class="news-cons clearfix">
                    <div class="news-cons01 fl">
                        <div class="cons01-pic">

                            <a href="<%=list4[0].picLinkHttp%>" target="_blank">
                                <img src="<%=pathConfig.imgPath + list4[0].picUrl%>" width="330" height="182" alt="">
                            </a>
                            <span><%=list4[0].textTitle%></span>
                        </div>
                        <div class="cons01-list-pic clearfix">
                            <a href="<%=list4[1].picLinkHttp%>" class="fl" target="_blank">
                                <img src="<%=pathConfig.imgPath + list4[1].picUrl%>" width="160" height="140" alt="">
                            </a>
                            <a href="<%=list4[2].picLinkHttp%>" class="fr" target="_blank">
                                <img src="<%=pathConfig.imgPath + list4[2].picUrl%>" width="160" height="140" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="news-cons03 fr">
                        <div class="quo">
                            <p class="quo_p clearfix"><span class="span01">品种</span><span class="span02">地区</span><span class="span03">单价</span><span class="span04">时间</span></p>
                            <div class="quoList">
                                <ul class="quoUl clearfix">
                                    <%for(var s=0;s<list5.length;s++) {%>
                                    <li>
                                        <a href="#" target="_blank"><span class="span01"><%=list5[s].variety%></span><span class="span02"><%=list5[s].region%></span><span class="span03"><%=list5[s].price%></span><span class="span04"><%=list5[s].createDate%></span></a>
                                    </li>
                                    <%}%>
                                </ul>
                                <p class="clearfix"><a target="_blank" href="http://info.xebest.com/todayQuotation/queryTodayQuotation.shtml" class="fr">查看更多&gt;</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </script>
    <!-- 底部begin -->
	<!--#include virtual="./common/footer.shtml" -->
	<!-- 底部end -->
    <script src="${basePath!""}js/src/xeplugins.min.js"></script>    
    <script src="${basePath!""}js/src/page-index.js"></script>
</body>
</html>
