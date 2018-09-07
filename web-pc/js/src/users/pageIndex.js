
$(function(){
    /**
     * 毫秒转换成日期
     *
     */
    var millisecondFormat = function (time, flag) {
        if (typeof time === 'number') {
            var oDate = new Date(time);
            var year = oDate.getFullYear();
            var month = (oDate.getMonth() + 1) >= 10 ? oDate.getMonth() + 1 : '0' + (oDate.getMonth() + 1);
            var date = oDate.getDate() >= 10 ? oDate.getDate() : '0' + oDate.getDate();
            var hours = oDate.getHours() >= 10 ? oDate.getHours() : '0' + oDate.getHours();
            var minutes = oDate.getMinutes() >= 10 ? oDate.getMinutes() : '0' + oDate.getMinutes();
            var seconds = oDate.getSeconds() >= 10 ? oDate.getSeconds() : '0' + oDate.getSeconds();
            if (flag === 'ms') {
                return year + '-' +month + '-' + date + '&nbsp;&nbsp;'+ hours + ':' + minutes + ':' + seconds;
            } else {
                return year + '-' + month + '-' + date;
            }
        } else {
            return '无';
        }
    };
    var NumberBet = function () {};
    NumberBet.prototype.min = function(array) {
        //最小值
        var min = array[0];
        var len = array.length;
        for (var i = 1; i < len; i++){
            if (array[i] < min){
                min = array[i];
            }
        }
        return min;
    };
    NumberBet.prototype.max = function(array) {
        var max = array[0];
        var len = array.length;
        for (var i = 1; i < len; i++){
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    };
    var numberBetwo = new NumberBet();
    // Path取值
    var detInitConfig = {
        apiPath : $("#apiPath").val()
    };
    // 头部首页动态导航（鲜易资讯）
    $.ajax({
        url: detInitConfig.apiPath + '/pc/pccontent/selectColumn',
        type: "get",
        cache: false,
        data: {
            cmsColumnLevel: 1
        },
        dataType: "jsonp",
        timeout: 5000,
        success: function (res) {
            if (res.data.columnList && res.data.columnList[0].cmsColumnName) {
                $('#animiNav').text(res.data.columnList[0].cmsColumnName);
            }
        },
        error:function(error){
            console.log('error')
        }
    });
    var floorLoadFn = function(){};
    floorLoadFn.prototype.loadSlider = function(data) {
        // 焦点图数据
        var listData = data.contentList;
        if (listData.length > 0) {
            listData = listData.slice(0,1);
        } else {
            listData = [];
        }
        var html = template('f-slider', {
            list : listData,
            picServer : data.picServer
        });
        $("#bannerImg").html(html);
        $("#bannerImg").slide({
            titCell: "#g-fl01-stit ul",
            mainCell: "#g-fl01-spic ul",
            effect: "leftLoop",
            autoPlay: false,
            autoPage: true,
            interTime: 5000,
            delayTime: 300,
            vis : 1,
            switchLoad: "_src"
        });
    };
    floorLoadFn.prototype.indexFlor = function(data) {
        // 鲜易指数数据
        var cateMap = data.cateMap;
        var cityMap = data.cityMap;
        var html = template('xy-indexFlor', {
            cateMap : cateMap,
            cityMap : cityMap
        });
        $("#indexContent").html(html);
    };
    floorLoadFn.prototype.indexFlorList = function(el, data) {
        // 鲜易指数左侧数据
        var averageList = data.averageList;
        if (averageList && averageList.length >6) {
            averageList = averageList.slice(0, 6);
        }
        for (var i = 0, len = averageList.length; i < len; i++) {
            averageList[i].highPrice = averageList[i].highPrice ? parseFloat(averageList[i].highPrice).toFixed(2) : 0.00;
            averageList[i].lowPrice = averageList[i].lowPrice ? parseFloat(averageList[i].lowPrice).toFixed(2) : 0.00;
            averageList[i].averagePrice = averageList[i].averagePrice ? parseFloat(averageList[i].averagePrice).toFixed(2) : 0.00;
            averageList[i].upPoint = averageList[i].upPoint ? parseFloat(averageList[i].upPoint).toFixed(2) : 0.00;
        }
        var html = template('xyindexcontent', {
            averageList : averageList
        });
        if (averageList.length > 0) {
            $('#'+ el).html(html);
        } else {
            $('#'+ el).html('<div style="text-align: center;font-size: 16px;font-weight: 600;color: #999;line-height: 250px">暂无数据</div>');
        }
    };
    floorLoadFn.prototype.xynewInfor = function(data) {
        // 新闻资讯
        var contentList = data.contentList;
        var listbox = [];
        // contentList.forEach(function(item, index) {
        //     item.createDate = millisecondFormat(item.createDate, 'ms');
        //     if (index !== 0) {
        //         listbox.push(item);
        //     }
        // });
        for (var i =0,len = contentList.length; i < len;i++) {
            contentList[i].createDate = millisecondFormat(contentList[i].createDate);
            if (i !== 0 && contentList.length > 4) {
                listbox.push(contentList[i]);
            }
        }
        var html = template('flor09_art', {
            list: contentList[0],
            listbox: listbox,
            picServer: data.picServer,
        });
        $("#flor09").html(html);
    };
    var floorLoad = new floorLoadFn();
    // 焦点图-------
    $.ajax({
        url: detInitConfig.apiPath + '/pc/pccontent/getContentList',
        type: "get",
        cache: false,
        data: {
            menuGroup: 1,
            menuType: 1
        },
        dataType: "jsonp",
        timeout: 5000,
        success: function (res) {
            floorLoad.loadSlider(res.data);
        },
        error:function(){
            console.log('error')
        }
    });
    // 鲜易指数分类获取
    $.ajax({
        url: detInitConfig.apiPath + '/pc/xeexponent/getCateId',
        type: "get",
        cache: false,
        data: {},
        dataType: "jsonp",
        timeout: 5000,
        success: function (res) {
            floorLoad.indexFlor(res.data);
            $('.florR_href').on('click', '.flor_citylis', function(){
                $(this).siblings().removeClass("active").end().addClass('active');
                var cityId = $(this).attr('data-cityid');
                var cateId = $(this).parent().parent().find('.florL_tit').attr('data-catemapId');
                var indextLcontId = $(this).parent().parent().parent().find('.indextLcont').attr('id');
                var indextRcontId = $(this).parent().parent().parent().find('.indextRcont').attr('id');
                selectAverage(cityId, cateId, indextLcontId, function(data) {
                    if (data.averageList && data.averageList.length > 0) { // 默认展示右侧第一条折线图
                        lineChart(cityId, data.averageList[0].proSku, indextRcontId, function(datas) {
                            var yList = [];
                            for (var i = 0,len = datas.yList.length;i < len;i++) {
                                yList.push(Number(datas.yList[i]));
                            }
                            if (datas.xList && datas.xList[0]) {
                                $('#' + indextRcontId).parent().find('.empty').css({'display': 'none'});
                                $('#' + indextRcontId).css({'display': 'block'});
                                var MIN = numberBetwo.min(yList) - 0.5;
                                var MAX = numberBetwo.max(yList) + 0.5;
                                var myChart = echarts.init(document.getElementById(indextRcontId));
                                myChart.setOption(heichartFun(indextRcontId, datas.xList, yList, data.averageList[0].proName, MIN, MAX));
                            }
                        });
                    } else {
                        $('#' + indextRcontId).parent().find('.empty').css({'display': 'block'});
                        $('#' + indextRcontId).css({'display': 'none'});
                        lineChart(cityId, '', indextRcontId,function(data){
                            heichartFun(indextRcontId, data.xList, data.yList);
                        });
                    }
                });
            });
            // 默认加载鲜易指数 4条数据中第一条数据(左侧数据)
            if (res.data.cityMap && res.data.cityMap[0] && res.data.cateMap && res.data.cateMap[0]) {
                selectAverage(res.data.cityMap[0].id, res.data.cateMap[0].id, 'indextLcont1', function(data) {
                    if (data.averageList && data.averageList.length > 0) { // 默认展示右侧第一条折线图
                        $('#indextRcont1').parent().find('.empty').css({'display': 'none'});
                        $('#indextRcont1').css({'display': 'block'});
                        lineChart(res.data.cityMap[0].id, data.averageList[0].proSku, 'indextRcont1', function(datas) {
                            var yList = [];
                            for (var i = 0,len = datas.yList.length;i < len;i++) {
                                yList.push(Number(datas.yList[i]));
                            }
                            var myChart1 = echarts.init(document.getElementById('indextRcont1'));
                            if (datas.xList && datas.xList[0]) {
                                var MIN = numberBetwo.min(yList) - 0.5;
                                var MAX = numberBetwo.max(yList) + 0.5;
                                $('#indextLcont1').find('.indexList').eq(0).addClass('li_active');
                                myChart1.setOption(heichartFun('indextRcont1', datas.xList, yList, data.averageList[0].proName, MIN, MAX));
                            }
                        });
                    } else {
                        $('#indextRcont1').parent().find('.empty').css({'display': 'block'});
                        $('#indextRcont1').css({'display': 'none'});
                        // $('#indextRcont1').html('<div style="text-align: center;font-size: 16px;font-weight: 600;color: #999;line-height: 250px">暂无数据</div>');
                    }
                });
            }
            if (res.data.cityMap && res.data.cityMap[0] && res.data.cateMap && res.data.cateMap[1]) {
                selectAverage(res.data.cityMap[0].id, res.data.cateMap[1].id, 'indextLcont2', function(data) {
                    if (data.averageList && data.averageList.length > 0) { // 默认展示右侧第一条折线图
                        $('#indextRcont2').parent().find('.empty').css({'display': 'none'});
                        $('#indextRcont2').css({'display': 'block'});
                        lineChart(res.data.cityMap[0].id, data.averageList[0].proSku, 'indextRcont2', function(datas) {
                            var yList = [];
                            for (var i = 0,len = datas.yList.length;i < len;i++) {
                                yList.push(Number(datas.yList[i]));
                            }
                            var myChart2 = echarts.init(document.getElementById('indextRcont2'));
                            if (datas.xList && datas.xList[0]) {
                                $('#indextLcont2').find('.indexList').eq(0).addClass('li_active');
                                var MIN = numberBetwo.min(yList) - 0.5;
                                var MAX = numberBetwo.max(yList) + 0.5;
                                myChart2.setOption(heichartFun('indextRcont2', datas.xList, yList, data.averageList[0].proName, MIN, MAX));
                            }
                        });
                    } else {
                        $('#indextRcont2').parent().find('.empty').css({'display': 'block'});
                        $('#indextRcont2').css({'display': 'none'});
                    }
                });
            }
            if (res.data.cityMap && res.data.cityMap[0] && res.data.cateMap && res.data.cateMap[2]) {
                selectAverage(res.data.cityMap[0].id, res.data.cateMap[2].id, 'indextLcont3', function(data) {
                    if (data.averageList && data.averageList.length > 0) { // 默认展示右侧第一条折线图
                        $('#indextRcont3').parent().find('.empty').css({'display': 'none'});
                        $('#indextRcont3').css({'display': 'block'});
                        lineChart(res.data.cityMap[0].id, data.averageList[0].proSku, 'indextRcont3', function(datas) {
                            var yList = [];
                            for (var i = 0,len = datas.yList.length;i < len;i++) {
                                yList.push(Number(datas.yList[i]));
                            }
                            var myChart3 = echarts.init(document.getElementById('indextRcont3'));
                            if (datas.xList && datas.xList[0]) {
                                $('#indextLcont3').find('.indexList').eq(0).addClass('li_active');
                                var MIN = numberBetwo.min(yList) - 0.5;
                                var MAX = numberBetwo.max(yList) + 0.5;
                                myChart3.setOption(heichartFun('indextRcont3', datas.xList, yList, data.averageList[0].proName, MIN, MAX));
                            }
                        });
                    } else {
                        $('#indextRcont1').parent().find('.empty').css({'display': 'block'});
                        $('#indextRcont1').css({'display': 'none'});
                    }
                });
            }
            if (res.data.cityMap && res.data.cityMap[0] && res.data.cateMap && res.data.cateMap[3]) {
                selectAverage(res.data.cityMap[0].id, res.data.cateMap[3].id, 'indextLcont4', function(data) {
                    if (data.averageList && data.averageList.length > 0) { // 默认展示右侧第一条折线图
                        $('#indextRcont4').parent().find('.empty').css({'display': 'none'});
                        $('#indextRcont4').css({'display': 'block'});
                        lineChart(res.data.cityMap[0].id, data.averageList[0].proSku, 'indextRcont4', function(datas) {
                            var yList = [];
                            for (var i = 0,len = datas.yList.length;i < len;i++) {
                                yList.push(Number(datas.yList[i]));
                            }
                            var myChart4 = echarts.init(document.getElementById('indextRcont4'));
                            if (datas.xList && datas.xList[0]) {
                                $('#indextLcont4').find('.indexList').eq(0).addClass('li_active');
                                var MIN = numberBetwo.min(yList) - 0.5;
                                var MAX = numberBetwo.max(yList) + 0.5;
                                myChart4.setOption(heichartFun('indextRcont4', datas.xList, yList, data.averageList[0].proName, MIN, MAX));
                            }
                        });
                    } else {
                        $('#indextRcont1').parent().find('.empty').css({'display': 'block'});
                        $('#indextRcont1').css({'display': 'none'});
                        // $('#indextRcont4').html('<div style="text-align: center;font-size: 16px;font-weight: 600;color: #999;line-height: 250px">暂无数据</div>');
                    }
                });
            }
            /*点击每条信息展示右侧对应的折线图*/
            // $(document).on('click', '.indexroName', function(){
            //     var cityId = $(this).parent().parent().parent().parent().parent().parent().find('.active').attr('data-cityid');
            //     var proSku = $(this).attr('data-prosku');
            //     var proName = $(this).text();
            //     var indextRcontId = $(this).parent().parent().parent().parent().parent().find('.indextRcont').attr('id');
            //     lineChart(cityId, proSku, indextRcontId, function(data) {
            //         var yList = [];
            //         for (var i = 0,len = data.yList.length;i < len;i++) {
            //             yList.push(Number(data.yList[i]));
            //         }
            //         var myChart5 = echarts.init(document.getElementById(indextRcontId));
            //         if (data.xList && data.xList[0]) {
            //             myChart5.setOption(heichartFun(indextRcontId, data.xList, yList, proName));
            //         }
            //     });
            // });
            $(document).on('mouseover mouseout', '.indexListFlor  .indexList', function(event){
                var cityId = $(this).parent().parent().parent().parent().find('.active').attr('data-cityid');
                var proSku = $(this).find('.indexroName').attr('data-prosku');
                var proName = $(this).find('.indexroName').text();
                var indextRcontId = $(this).parent().parent().parent().parent().find('.indextRcont').attr('id');
                if (event.type === "mouseover") {
                    $(this).siblings().removeClass('li_active');
                    $(this).addClass('li_active');
                    lineChart(cityId, proSku, indextRcontId, function(data) {
                        var yList = [];
                        for (var i = 0,len = data.yList.length;i < len;i++) {
                            yList.push(Number(data.yList[i]));
                        }
                        var myChart5 = echarts.init(document.getElementById(indextRcontId));
                        if (data.xList && data.xList[0]) {
                            var MIN = numberBetwo.min(yList) - 0.5;
                            var MAX = numberBetwo.max(yList) + 0.5;
                            myChart5.setOption(heichartFun(indextRcontId, data.xList, yList, proName, MIN, MAX));
                        }
                    });
                }
            });
            /*鼠标滑过二维码显示对应的二维码*/
            $(document).on('mouseover mouseout', '.qr_code_hover', function(event){
                var ele = $(this).parent().find('.qr_codeImg .proSku');
                if (event.type === "mouseover") {
                    $(this).parent().find('.qr_codeImg').css({'display': 'block'});
                    var proSkuId = ele.attr('data-spu');
                    var qr_codeImg = ele.children().length;
                    if (proSkuId && !qr_codeImg) {
                        ele.qrcode({
                            width: 80, //宽度
                            height: 80, //高度
                            correctLevel: 1,
                            text: "https://wap3.xebest.com/productdetails/170927970043?prosku=" + proSkuId.split('_')[1]
                        });
                    }
                } else if (event.type === "mouseout") {
                    $(this).parent().find('.qr_codeImg').css({'display': 'none'});
                }
            });
            $(document).on('mouseover mouseout', '.qr_codeImg', function(event){
                if (event.type === "mouseover") {
                    $(this).css({'display': 'block'});
                } else if (event.type === "mouseout") {
                    $(this).css({'display': 'none'});
                }
            });
        },
        error:function(){
            console.log('error')
        }
    });
    // 鲜易指数左栏数据展示
    function selectAverage(cityId, cateId, indextLcontId, fn) {
        $.ajax({
            url: detInitConfig.apiPath + '/pc/xeexponent/selectAverage',
            type: "get",
            cache: false,
            data: {
                cityId: cityId,
                cateId: cateId
            },
            dataType: "jsonp",
            timeout: 5000,
            success: function (res) {
                floorLoad.indexFlorList(indextLcontId, res.data);
                fn && fn(res.data);
            },
            error:function(){
                console.log('error')
            }
        });
    };
    // 鲜易指数右栏折线图
    function lineChart(cityId, proSku, indextRcontId, fn) {
        if (proSku) {
            $.ajax({
                url: detInitConfig.apiPath + '/pc/xeexponent/lineChart',
                type: "get",
                cache: false,
                data: {
                    cityId: cityId,
                    proSku: proSku
                },
                dataType: "jsonp",
                timeout: 5000,
                success: function (res) {
                    // floorLoad.indexLineChart(indextRcontId, res.data);
                    fn && fn(res.data);
                },
                error:function(error){
                    console.log('error')
                }
            });
        } else {
            var obj = {
                xList: [],
                yList: []
            };
            fn && fn(obj);
        }
    };
    // 折线图
    function heichartFun(indextRcontId, xList, yList, name, min, max) {
        if (xList && xList[0]) {
            var option = {
                title: {
                    text: '鲜易价格指数',
                    left: '38%',
                    top: '3%',
                    textStyle: {
                        color: '#666',
                        fontWeight: 'normal',
                        fontSize: 14,
                        align: 'center'
                    }
                },
                color: ['#3cc0e1'],
                backgroundColor: '#f2f7ff',
                textStyle: '#666',
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '3%',
                    right: '9%',
                    bottom: '8%',
                    containLabel: true
                },
                // toolbox: {
                //     feature: {
                //         saveAsImage: {}
                //     }
                // },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: xList
                },
                yAxis: {
                    type: 'value',
                    splitNumber: 6,
                    min: min,
                    max: max
                },
                series: [
                    {
                        name: name,
                        type:'line',
                        data: yList
                    }
                ]
            };
            return option;
        }  else {
            // $('#'+ indextRcontId).find('.empty').css({'display': 'block'});
            // $('#'+ indextRcontId).html('<div style="text-align: center;font-size: 16px;font-weight: 600;color: #999;line-height: 250px">暂无数据</div>');
        }
    }
    // flor09新闻资讯
    $.ajax({
        url: detInitConfig.apiPath + '/pc/pccontent/getContentList',
        type: "get",
        cache: false,
        data: {
            menuGroup: 1,
            menuType: 2
        },
        dataType: "jsonp",
        timeout: 5000,
        success: function (res) {
            floorLoad.xynewInfor(res.data);
        },
        error:function(){
            console.log('error')
        }
    });
});
