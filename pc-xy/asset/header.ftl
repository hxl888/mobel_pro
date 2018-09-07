    <div class="g-header">
		<!--#include virtual="./header_top.shtml" -->
        <div class="g-wrap clearfix">
            <div class="vm-logo fl">
                <a href="${mainUrl!""}" class="vm-logo1">鲜易网 http://wwww.xebest.com</a>
                <span class="vm-sgn">鲜天下品 易万家味</span>
            </div>
            <div class="vm-search fl">
                <div class="vm-s-tab">
                    <span class='active' data-type="1">产品</span><em>|</em><span data-type="2">供应商</span>
                </div>
                <div class="vm-s-cons">
                    <input class="vm-s-input" id="J-search" placeholder="请输入关键词" type="text">
                    <a href="javascript:void(0);" class="u-btn u-btn-red u-btn-lg">搜索</a>
                    <div class="search_drop"></div>
                </div>
                <div class="vm-s-hot">
                    <span>热门搜索:</span>
                    <#-- <a href="javascript:void(0);" target="_blank">冷鲜肉</a>
                    <a href="javascript:void(0);" target="_blank">猪蹄</a>
                    <a href="javascript:void(0);" target="_blank">海参</a>
                    <a href="javascript:void(0);" target="_blank">大连鲍</a>
                    <a href="javascript:void(0);" target="_blank">鸡蛋</a>
                    <a href="javascript:void(0);" target="_blank">苹果</a>
                    <a href="javascript:void(0);" target="_blank">大连鲍</a>
                    <a href="javascript:void(0);" target="_blank">鸡蛋</a>
                    -->
                    
                    <a href="${searchPath!""}list-s1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1.html?keyWord=五花肉">五花肉</a>
					<a href="${searchPath!""}list-s1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1.html?keyWord=里脊">里脊</a>
					<a href="${searchPath!""}list-s1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1.html?keyWord=肋排">肋排</a>
					<a href="${searchPath!""}list-s1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1.html?keyWord=通排">通排</a>
					<a href="${searchPath!""}list-s1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1.html?keyWord=猪蹄">猪蹄</a>
					<a href="${searchPath!""}list-s1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1.html?keyWord=瘦肉丝">瘦肉丝</a>      
                </div>
            </div>

            <div class="vm-mct fr">
            	<#--广告小图--> 
            	<#if minImg??>
	                <div class="vm-tspl fl">
	                    <a href="${minImg.picLinkHttp!""}" target="_blank">
	                        <img src="${imgPath!""}${minImg.picUrl!""}" width="110" height="70" alt="">
	                    </a>
	                </div>
                </#if>
                <#--广告小图 end-->
                
                <!-- vm-mct-hover -->
                <div class="vm-mct-cart J-drop fl" id="g-miCart">
                    <div class="vm-mcts">
                        <i class="u-icon cart-icon">&#xe65b;</i>
                        <a href="javascript:void(0);">我的进货单</a>
                        <i class="u-badge">0</i>
                    </div>
                    <div class="vm-cart-ml J-dropdown">
                        <div class="spacer"></div>
                        <!-- <div class="smt">最新加入的商品</div> -->
                        <div class="smc">
                            <div class="smc-loading u-loading"></div>
                            <!-- <div class="smc-ets noPro">
                                <span class="vm-nop"></span>
                                进货单里还没有商品，赶紧选购吧！
                            </div> -->
                            <!-- <div class="smc-ets noNet">
                                <span class="vm-nop"></span>
                                加载失败，请<a href="javascript:void(0);">重新加载</a>
                            </div> -->
                            <!-- <ul>
                                <li>
                                    <div class="vp-img fl">
                                        <a href="javascript:void(0);" target="_blank">
                                            <img src="../images/pro-01.jpg" width="50" height="50" alt="">
                                        </a>
                                    </div>
                                    <div class="vp-name fl">
                                        <a href="javascript:void(0);" target="_blank">超值众品鲜肉五花肉+良五套 50KG包装</a>
                                    </div>
                                    <div class="vp-pri fr">
                                        <p><em class='f-rmb'>&yen;</em>165.8 <span>x1</span></p>
                                        <p><em class='f-rmb'>&yen;</em>165.8 <span>x1</span></p>
                                        <a href="javascript:void(0);" class="vm-remove">删除</a>
                                    </div>
                                </li>
                            </ul>
                            <div class="dtc">
                                <em class="fl">【套餐】</em><span class="fl">小计：<strong><i class="f-rmb">&yen;</i>1200</strong></span><a href="javascript:void(0);" class="vm-remove fr">删除</a>
                            </div>
                            <ul>
                                <li>
                                    <div class="vp-img fl">
                                        <a href="javascript:void(0);" target="_blank">
                                            <img src="../images/pro-01.jpg" width="50" height="50" alt="">
                                        </a>
                                    </div>
                                    <div class="vp-name fl">
                                        <a href="javascript:void(0);" target="_blank">超值众品鲜肉五花肉+良五套 50KG包装</a>
                                    </div>
                                    <div class="vp-pri fr">
                                        <p><em class='f-rmb'>&yen;</em>165.8 <span>x1</span></p>
                                    </div>
                                </li>
                            </ul> -->
                        </div>
                        <!-- <div class="smb">
                            <div class="tips">进货单里面还有<em>1</em>件失效商品</div>
                            <div class="mctal"><span><i>共2件商品</i><em>共计<strong><i class="f-rmb">&yen;</i>16785.8</strong></em></span><a href="javascript:void(0);" class="u-btn u-btn-red">去进货单结算</a></div>
                        </div> -->
                    </div>
                </div>
                
                <div class="vm-mzs J-drop fl" id="vm-mzs">
                    <span></span>
                    <div class="vm-mzs-c J-dropdown">
                        <p>扫一扫下载客户端</p><img src="${basePath!""}images/qrc-01.jpg" width="95" height="95" alt="">
                    </div>
                </div>
            </div>
        </div>
		<#-- TODO:商品分类 start  -->
        <div class="vg-mainav">
            <div class="g-wrap">
                <div class="g-mnv clearfix">
                    <div class="vg-menu" id="vg-menu">
                        <h4><span class="u-icon">&#xe632;</span>所有商品分类</h4>
                        <div class="xeMenu">
        					<ul class="menuUl">
        						<#list catelist as cate1>
									<li <#if cate1_index=0>class="menu_firli"</#if>>
                                    	<div>
	            							<h3 class="menuH3">
	            								<a href="${searchPath!""}list-s1-${cate1.id?c}-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1.html" target="_blank">
	            									<i class="u-icon">
	            										<#if cate1_index=0>&#xe646;</#if>
	            										<#if cate1_index=1>&#xe635;</#if>
	            										<#if cate1_index=2>&#xe647;</#if>
	            										<#if cate1_index=3>&#xe649;</#if>
	            										<#if cate1_index=4>&#xe669;</#if>
	            										<#if cate1_index=5>&#xe64a;</#if>
	            									</i>
	            									${cate1.name}
	            								</a>
	            							</h3>
	            							<p class="menuP">
	            								<#list cate1.cateList as cate2>
	            									<a href="${searchPath!""}list-s1-${cate2.id?c}-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1.html"  target="_blank">${cate2.name}</a>
	            								</#list>	
	            							</p>
	                                    </div>
	        						</li>
								</#list>
        					</ul>
        					<div class="menuSub_cons" id="menuSub_cons">
								<#list catelist as cate1>
									<div id="menuSub_${cate1_index+1}" class="menuSub">
									  <#list cate1.cateList as cate2>
	        					        <dl class="subDl clearfix">
	        					        	<dt><a href="${searchPath!""}list-s1-${cate2.id?c}-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1.html" target="_blank">${cate2.name}</a></dt>
	        					        	<dd>
	        					        		<#list cate2.cateList as cate3>
	        					        			<a href="${searchPath!""}list-s1-${cate3.id?c}-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1.html" target="_blank">${cate3.name}</a>	
	        					        		</#list>
	        					        	</dd>
	        					        </dl>
								  	 </#list>
	        					    </div>
								</#list>
							</div>	
						</div>		
                    </div>
					
					<#--主选项卡 -->
                    <div class="vg-mlis fl">
                    	<#if cmsList??>
			        		<#list cmsList as t>
					        	<#-- <li id="t_${t.menuCode}"><a target="_blank" <#if t_index == 0>  class="index_index" </#if> href="${t.linkHttpPath!""}">${t.menuTitle!""}</a></li> -->
					        	<a  target="_blank" href="${t.linkHttpPath!""}" <#if t_index == 0>  class="active" </#if> >${t.menuTitle!""} <#if t_index == 2> <i class="nav-new"></i></#if></a>				        	
							</#list>
				        </#if>
				        <#--
                        <a href="javascript:void(0);" class="active">首页</a>
                        <a href="javascript:void(0);">生鲜自营</a>
                        <a href="javascript:void(0);">批发市场<i class="nav-new"></i></a>
                        <a href="javascript:void(0);">大宗专区</a>
                        <a href="javascript:void(0);">冷链物流</a>
                        <a href="javascript:void(0);">金融服务</a>
                        <a href="javascript:void(0);">行业资讯</a>
                        -->
                    </div>

                    <div class="vg-phone fr">客服电话：400-662-6366</div>

                </div>
            </div>
        </div>
    </div>
