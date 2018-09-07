		<input id="h_loginPath" type="hidden" value="${loginPath!""}">
		<input id="h_myPath" type="hidden" value="${myPath!""}">
		<input id="h_searchPath" type="hidden" value="${searchPath!""}">
		<input id="h_cartPath" type="hidden" value="${cartPath!""}">
		<#-- 
		<input id="cmsImgUrl" type="hidden" value="${cmsImgUrl!""}">
		-->
		<input id="imgPath" type="hidden" value="${imgPath!""}">
		<input id="itemPath" type="hidden" value="${itemPath!""}">
		<input id="apiPath" type="hidden" value="${apiPath!""}">
		<input id="xeMainUrl" type="hidden" value="${xemainUrl!""}">
		<input id="mainUrl" type="hidden" value="${mainUrl!""}">
		<input id="infoPath" type="hidden" value="${infoPath!""}">
		<input id="basePath" type="hidden" value="${basePath!""}">
				
        <div class="m-topNav">
            <div class="g-wrap clearfix">
                <ul class="m-nt m-nav-l fl">
                    <li class="vm-nav-adr0">
                        	配送至：<span class="ac">请选择<i class="arrow"></i></span>
                    </li>
                    <li class="J-drop" id="appdl">
                        <div class="vm-nav-adr1">
                            <i class="u-icon ic">&#xe612;</i>
                            手机鲜易
                            <em class="u-icon arrow">&#xe600;</em>
                        </div>
                        <div class="dr01 J-dropdown">
                            <div class="dd-spacer"></div>
                            <div class="pqrd clearfix">
                                <h5 class="fl">
                                    <img src="${basePath!""}images/qrc-01.jpg" width="75" height="75" alt="" />
                                </h5>
                                <div class="pqrd-div fr">
                                    <p>鲜易网客户端下载</p>
                                    <p><a href="javascript:void(0);">更多优惠好礼</a></p>
                                    <div class="pqrd-col">
                                        <div class="fl pqrd-ios">
                                            <span></span>
                                            <p>iPhone</p>
                                        </div>
                                        <div class="fr pqrd-and">
                                            <span></span>
                                            <p>Android</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="vm-nav-adr2 vm-drop">
                            <i class="u-icon ic">&#xe625;</i>
                            <a id="J-afv" href="javascript:void(0);">收藏鲜易</a>
                        </div>
                    </li>
                </ul>
                <ul class="m-nt m-nav-r fr">
                    <li>
                        <div class="z-logined">
                            <span>欢迎您来到鲜易网！</span>
                            <a href="javascript:void(0);">退出</a>
                        </div>
                        <div class="z-reg">
                            <a href="javaScript:void(0);" id="login" >登录</a><a href="${loginPath!""}reg/regUserByTel.shtml" target="_blank">免费注册</a>
                        </div>
                    </li>
                    <li>
                        <div class="vm-nav-adr1">
                            <a href="${myPath!""}" target="_blank">我的鲜易</a>
                        </div>
                    </li>
                    <li class="m-nt-pipe">|</li>
                    <li>
                        <div class="vm-nav-adr1">
                        	<#-- 商户入驻 -->
                            <a class="f-myStore" href="${storePath!""}vendor/login/toLoginJsp.html" target="_blank">商家入驻</a>
                        </div>
                    </li>
                    <li class="m-nt-pipe">|</li>
                    <li class="J-drop">
                        <div class="vm-nav-adr1 vm-drop"><a href="javascript:void(0);">帮助中心</a><em class="u-icon arrow">&#xe600;</em></div>
                        <div class="J-dropdown">
                            <div class="dd-spacer"></div>
                            <div class="vm-tlst">
                                <a target="_blank" href="${mainUrl!""}authen.shtml">新手入门</a>
                                <a target="_blank" href="${mainUrl!""}supplierwarning.shtml">购物指南</a>
                                <a target="_blank" href="${mainUrl!""}send.shtml">配送方式</a>
                                <a target="_blank" href="${mainUrl!""}sellafter.shtml">售后服务</a>
                            </div>
                        </div>
                    </li>
                    <li class="m-nt-pipe">|</li>
                    <li class="J-drop">
                        <div class="vm-nav-adr1 vm-drop"><a href="javascript:void(0);">网站导航</a><em class="u-icon arrow">&#xe600;</em></div>
                        <div class="J-dropdown vm-wesite">
                            <div class="dd-spacer"></div>
                            <div class="vm-west">
                                <ul>
                                	<#if homeColumnList??>
                                		<#list homeColumnList as homeColumn>
                                			<li>
		                                        <h5>${homeColumn.title!""}</h5>
		                                        <p>
		                                        	<#-- 二级导航栏菜单 -->
		                                        	<#if homeColumn.childrenList??>
                                						<#list homeColumn.childrenList as children>
		                                            		<a href="${children.url!""}" target="_blank">${children.title!""}</a>
				                                		</#list>
				                                	</#if>
		                                        </p>
		                                    </li>
                                		</#list>
                                	</#if>
                                	<#-- 
                                    <li>
                                        <h5>特色市场</h5>
                                        <p>
                                            <a href="javascript:void(0);" target="_blank">生鲜自营</a>
                                            <a href="javascript:void(0);" target="_blank">批发市场</a>
                                            <a href="javascript:void(0);" target="_blank">生鲜自营</a>
                                            <a href="javascript:void(0);" target="_blank">生鲜自营</a>
                                            <a href="javascript:void(0);" target="_blank">生鲜自营</a>
                                            <a href="javascript:void(0);" target="_blank">生鲜自营</a>
                                            <a href="javascript:void(0);" target="_blank">生鲜自营</a>
                                        </p>
                                    </li>
                                    <li>
                                        <h5>品类</h5>
                                        <p>
                                            <a href="javascript:void(0);" target="_blank">生鲜自营</a>
                                            <a href="javascript:void(0);" target="_blank">批发市场</a>
                                            <a href="javascript:void(0);" target="_blank">生鲜自营</a>
                                            <a href="javascript:void(0);" target="_blank">生鲜自营</a>
                                            <a href="javascript:void(0);" target="_blank">生鲜自营</a>
                                            <a href="javascript:void(0);" target="_blank">生鲜自营</a>
                                            <a href="javascript:void(0);" target="_blank">生鲜自营</a>
                                        </p>
                                    </li>
                                    <li>
                                        <h5>帮助中心</h5>
                                        <p>
                                            <a href="javascript:void(0);" target="_blank">生鲜自营</a>
                                            <a href="javascript:void(0);" target="_blank">批发市场</a>
                                            <a href="javascript:void(0);" target="_blank">生鲜自营</a>
                                            <a href="javascript:void(0);" target="_blank">生鲜自营</a>
                                            <a href="javascript:void(0);" target="_blank">生鲜自营</a>
                                            <a href="javascript:void(0);" target="_blank">生鲜自营</a>
                                            <a href="javascript:void(0);" target="_blank">生鲜自营</a>
                                        </p>
                                    </li>
                                    -->
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
		<#--活动大图  start-->
		<#if maxImg??>
	        <div class="m-tbr" style='background:url(${imgPath!""}${maxImg.picUrl!""}) no-repeat top center'>
	            <div class="g-wrap"><a href="${maxImg.picLinkHttp!""}"></a><div class="m-tbr-close"><span class='u-icon'>&#xe60d;</span></div></div>
	        </div>
        </#if>
		<#-- 活动大图  end-->
