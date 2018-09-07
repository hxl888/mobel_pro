
var proData = [{"id":"1","name":"北京"},{"id":"21","name":"上海"},{"id":"42","name":"天津"},{"id":"62","name":"重庆"},{"id":"104","name":"安徽"},{"id":"227","name":"福建"},{"id":"322","name":"甘肃"},{"id":"423","name":"广东"},{"id":"566","name":"广西"},{"id":"690","name":"贵州"},{"id":"788","name":"海南"},{"id":"814","name":"河北"},{"id":"998","name":"河南"},{"id":"1176","name":"黑龙江"},{"id":"1320","name":"湖北"},{"id":"1436","name":"湖南"},{"id":"1573","name":"吉林"},{"id":"1643","name":"江苏"},{"id":"1763","name":"江西"},{"id":"1874","name":"辽宁"},{"id":"1989","name":"内蒙古"},{"id":"2103","name":"宁夏"},{"id":"2130","name":"青海"},{"id":"2182","name":"山东"},{"id":"2340","name":"山西"},{"id":"2471","name":"陕西"},{"id":"2589","name":"四川"},{"id":"2792","name":"西藏"},{"id":"2873","name":"新疆"},{"id":"2987","name":"云南"},{"id":"3133","name":"浙江"},{"id":"3235","name":"香港"},{"id":"3239","name":"澳门"},{"id":"3242","name":"台湾"}];

var cityData = [{"pId":"1","id":"2","name":"北京市"},{"pId":"21","id":"22","name":"上海市"},{"pId":"42","id":"43","name":"天津市"},{"pId":"62","id":"63","name":"重庆市"},{"pId":"104","id":"105","name":"合肥市"},{"pId":"104","id":"113","name":"安庆市"},{"pId":"104","id":"125","name":"蚌埠市"},{"pId":"104","id":"133","name":"亳州市"},{"pId":"104","id":"138","name":"巢湖市"},{"pId":"104","id":"144","name":"池州市"},{"pId":"104","id":"149","name":"滁州市"},{"pId":"104","id":"158","name":"阜阳市"},{"pId":"104","id":"167","name":"淮北市"},{"pId":"104","id":"172","name":"淮南市"},{"pId":"104","id":"179","name":"黄山市"},{"pId":"104","id":"187","name":"六安市"},{"pId":"104","id":"195","name":"马鞍山市"},{"pId":"104","id":"200","name":"宿州市"},{"pId":"104","id":"206","name":"铜陵市"},{"pId":"104","id":"211","name":"芜湖市"},{"pId":"104","id":"219","name":"宣城市"},{"pId":"227","id":"228","name":"福州市"},{"pId":"227","id":"242","name":"龙岩市"},{"pId":"227","id":"250","name":"南平市"},{"pId":"227","id":"261","name":"宁德市"},{"pId":"227","id":"271","name":"莆田市"},{"pId":"227","id":"277","name":"泉州市"},{"pId":"227","id":"290","name":"三明市"},{"pId":"227","id":"303","name":"厦门市"},{"pId":"227","id":"310","name":"漳州市"},{"pId":"322","id":"323","name":"兰州市"},{"pId":"322","id":"332","name":"白银市"},{"pId":"322","id":"338","name":"定西市"},{"pId":"322","id":"346","name":"甘南州"},{"pId":"322","id":"355","name":"嘉峪关市"},{"pId":"322","id":"356","name":"金昌市"},{"pId":"322","id":"359","name":"酒泉市"},{"pId":"322","id":"367","name":"临夏州"},{"pId":"322","id":"376","name":"陇南市"},{"pId":"322","id":"386","name":"平凉市"},{"pId":"322","id":"394","name":"庆阳市"},{"pId":"322","id":"403","name":"天水市"},{"pId":"322","id":"411","name":"武威市"},{"pId":"322","id":"416","name":"张掖市"},{"pId":"423","id":"424","name":"广州市"},{"pId":"423","id":"437","name":"潮州市"},{"pId":"423","id":"441","name":"东莞市"},{"pId":"423","id":"442","name":"佛山市"},{"pId":"423","id":"448","name":"河源市"},{"pId":"423","id":"455","name":"惠州市"},{"pId":"423","id":"461","name":"江门市"},{"pId":"423","id":"469","name":"揭阳市"},{"pId":"423","id":"475","name":"茂名市"},{"pId":"423","id":"482","name":"梅江区"},{"pId":"423","id":"483","name":"梅州市"},{"pId":"423","id":"491","name":"清远市"},{"pId":"423","id":"500","name":"汕头市"},{"pId":"423","id":"508","name":"汕尾市"},{"pId":"423","id":"513","name":"韶关市"},{"pId":"423","id":"524","name":"深圳市"},{"pId":"423","id":"531","name":"阳江市"},{"pId":"423","id":"536","name":"云浮市"},{"pId":"423","id":"542","name":"湛江市"},{"pId":"423","id":"552","name":"肇庆市"},{"pId":"423","id":"561","name":"中山市"},{"pId":"423","id":"562","name":"珠海市"},{"pId":"566","id":"567","name":"南宁市"},{"pId":"566","id":"580","name":"百色市"},{"pId":"566","id":"593","name":"北海市"},{"pId":"566","id":"598","name":"崇左市"},{"pId":"566","id":"606","name":"防城港市"},{"pId":"566","id":"611","name":"贵港市"},{"pId":"566","id":"617","name":"桂林市"},{"pId":"566","id":"635","name":"河池市"},{"pId":"566","id":"647","name":"贺州市"},{"pId":"566","id":"652","name":"来宾市"},{"pId":"566","id":"659","name":"柳州市"},{"pId":"566","id":"670","name":"钦州市"},{"pId":"566","id":"675","name":"梧州市"},{"pId":"566","id":"683","name":"玉林市"},{"pId":"690","id":"691","name":"贵阳市"},{"pId":"690","id":"702","name":"安顺市"},{"pId":"690","id":"709","name":"毕节地区"},{"pId":"690","id":"718","name":"六盘水市"},{"pId":"690","id":"723","name":"黔东南州"},{"pId":"690","id":"740","name":"黔南州"},{"pId":"690","id":"753","name":"黔西南州"},{"pId":"690","id":"762","name":"铜仁地区"},{"pId":"690","id":"773","name":"遵义市"},{"pId":"788","id":"789","name":"海口市"},{"pId":"788","id":"794","name":"白沙县"},{"pId":"788","id":"795","name":"保亭县"},{"pId":"788","id":"796","name":"昌江县"},{"pId":"788","id":"797","name":"澄迈县"},{"pId":"788","id":"798","name":"儋州市"},{"pId":"788","id":"799","name":"定安县"},{"pId":"788","id":"800","name":"东方市"},{"pId":"788","id":"801","name":"乐东县"},{"pId":"788","id":"802","name":"临高县"},{"pId":"788","id":"803","name":"陵水县"},{"pId":"788","id":"804","name":"南沙群岛"},{"pId":"788","id":"805","name":"琼海市"},{"pId":"788","id":"806","name":"琼中县"},{"pId":"788","id":"807","name":"三亚市"},{"pId":"788","id":"808","name":"屯昌县"},{"pId":"788","id":"809","name":"万宁市"},{"pId":"788","id":"810","name":"文昌市"},{"pId":"788","id":"811","name":"五指山市"},{"pId":"788","id":"812","name":"西沙群岛"},{"pId":"788","id":"813","name":"中沙群岛"},{"pId":"814","id":"815","name":"石家庄市"},{"pId":"814","id":"839","name":"保定市"},{"pId":"814","id":"865","name":"沧州市"},{"pId":"814","id":"882","name":"承德市"},{"pId":"814","id":"894","name":"邯郸市"},{"pId":"814","id":"914","name":"衡水市"},{"pId":"814","id":"926","name":"廊坊市"},{"pId":"814","id":"937","name":"秦皇岛市"},{"pId":"814","id":"945","name":"唐山市"},{"pId":"814","id":"960","name":"邢台市"},{"pId":"814","id":"980","name":"张家口市"},{"pId":"998","id":"999","name":"郑州市"},{"pId":"998","id":"1012","name":"安阳市"},{"pId":"998","id":"1022","name":"鹤壁市"},{"pId":"998","id":"1028","name":"济源市"},{"pId":"998","id":"1029","name":"焦作市"},{"pId":"998","id":"1041","name":"开封市"},{"pId":"998","id":"1052","name":"洛阳市"},{"pId":"998","id":"1068","name":"漯河市"},{"pId":"998","id":"1074","name":"南阳市"},{"pId":"998","id":"1088","name":"平顶山市"},{"pId":"998","id":"1099","name":"濮阳市"},{"pId":"998","id":"1106","name":"三门峡市"},{"pId":"998","id":"1113","name":"商丘市"},{"pId":"998","id":"1123","name":"新乡市"},{"pId":"998","id":"1136","name":"信阳市"},{"pId":"998","id":"1147","name":"许昌市"},{"pId":"998","id":"1154","name":"周口市"},{"pId":"998","id":"1165","name":"驻马店市"},{"pId":"1176","id":"1177","name":"哈尔滨市"},{"pId":"1176","id":"1197","name":"大庆市"},{"pId":"1176","id":"1207","name":"大兴安岭地区"},{"pId":"1176","id":"1211","name":"鹤岗市"},{"pId":"1176","id":"1220","name":"黑河市"},{"pId":"1176","id":"1227","name":"鸡西市"},{"pId":"1176","id":"1237","name":"佳木斯市"},{"pId":"1176","id":"1249","name":"牡丹江市"},{"pId":"1176","id":"1260","name":"七台河市"},{"pId":"1176","id":"1265","name":"齐齐哈尔市"},{"pId":"1176","id":"1282","name":"双鸭山市"},{"pId":"1176","id":"1291","name":"绥化市"},{"pId":"1176","id":"1302","name":"伊春市"},{"pId":"1320","id":"1321","name":"武汉市"},{"pId":"1320","id":"1335","name":"鄂州市"},{"pId":"1320","id":"1339","name":"恩施州"},{"pId":"1320","id":"1348","name":"黄冈市"},{"pId":"1320","id":"1359","name":"黄石市"},{"pId":"1320","id":"1366","name":"荆门市"},{"pId":"1320","id":"1372","name":"荆州市"},{"pId":"1320","id":"1381","name":"潜江市"},{"pId":"1320","id":"1382","name":"神农架林区"},{"pId":"1320","id":"1383","name":"十堰市"},{"pId":"1320","id":"1392","name":"随州市"},{"pId":"1320","id":"1395","name":"天门市"},{"pId":"1320","id":"1396","name":"仙桃市"},{"pId":"1320","id":"1397","name":"咸宁市"},{"pId":"1320","id":"1404","name":"襄樊市"},{"pId":"1320","id":"1414","name":"孝感市"},{"pId":"1320","id":"1422","name":"宜昌市"},{"pId":"1436","id":"1437","name":"长沙市"},{"pId":"1436","id":"1447","name":"常德市"},{"pId":"1436","id":"1457","name":"郴州市"},{"pId":"1436","id":"1469","name":"衡阳市"},{"pId":"1436","id":"1482","name":"怀化市"},{"pId":"1436","id":"1495","name":"娄底市"},{"pId":"1436","id":"1501","name":"邵阳市"},{"pId":"1436","id":"1514","name":"湘潭市"},{"pId":"1436","id":"1520","name":"湘西州"},{"pId":"1436","id":"1529","name":"益阳市"},{"pId":"1436","id":"1536","name":"永州市"},{"pId":"1436","id":"1548","name":"岳阳市"},{"pId":"1436","id":"1558","name":"张家界市"},{"pId":"1436","id":"1563","name":"株洲市"},{"pId":"1573","id":"1574","name":"长春市"},{"pId":"1573","id":"1585","name":"白城市"},{"pId":"1573","id":"1591","name":"白山市"},{"pId":"1573","id":"1598","name":"吉林市"},{"pId":"1573","id":"1608","name":"辽源市"},{"pId":"1573","id":"1613","name":"四平市"},{"pId":"1573","id":"1620","name":"松原市"},{"pId":"1573","id":"1626","name":"通化市"},{"pId":"1573","id":"1634","name":"延边州"},{"pId":"1643","id":"1644","name":"南京市"},{"pId":"1643","id":"1658","name":"常州市"},{"pId":"1643","id":"1666","name":"淮安市"},{"pId":"1643","id":"1675","name":"连云港市"},{"pId":"1643","id":"1683","name":"南通市"},{"pId":"1643","id":"1692","name":"苏州市"},{"pId":"1643","id":"1704","name":"宿迁市"},{"pId":"1643","id":"1710","name":"泰州市"},{"pId":"1643","id":"1717","name":"无锡市"},{"pId":"1643","id":"1726","name":"徐州市"},{"pId":"1643","id":"1738","name":"盐城市"},{"pId":"1643","id":"1748","name":"扬州市"},{"pId":"1643","id":"1756","name":"镇江市"},{"pId":"1763","id":"1764","name":"南昌市"},{"pId":"1763","id":"1774","name":"抚州市"},{"pId":"1763","id":"1786","name":"赣州市"},{"pId":"1763","id":"1805","name":"吉安市"},{"pId":"1763","id":"1819","name":"景德镇市"},{"pId":"1763","id":"1824","name":"九江市"},{"pId":"1763","id":"1837","name":"萍乡市"},{"pId":"1763","id":"1843","name":"上饶市"},{"pId":"1763","id":"1856","name":"新余市"},{"pId":"1763","id":"1859","name":"宜春市"},{"pId":"1763","id":"1870","name":"鹰潭市"},{"pId":"1874","id":"1875","name":"沈阳市"},{"pId":"1874","id":"1889","name":"鞍山市"},{"pId":"1874","id":"1897","name":"本溪市"},{"pId":"1874","id":"1904","name":"朝阳市"},{"pId":"1874","id":"1912","name":"大连市"},{"pId":"1874","id":"1923","name":"丹东市"},{"pId":"1874","id":"1930","name":"抚顺市"},{"pId":"1874","id":"1938","name":"阜新市"},{"pId":"1874","id":"1946","name":"葫芦岛市"},{"pId":"1874","id":"1953","name":"锦州市"},{"pId":"1874","id":"1961","name":"辽阳市"},{"pId":"1874","id":"1969","name":"盘锦市"},{"pId":"1874","id":"1974","name":"铁岭市"},{"pId":"1874","id":"1982","name":"营口市"},{"pId":"1989","id":"1990","name":"呼和浩特市"},{"pId":"1989","id":"2000","name":"阿拉善盟"},{"pId":"1989","id":"2004","name":"巴彦淖尔市"},{"pId":"1989","id":"2012","name":"包头市"},{"pId":"1989","id":"2022","name":"赤峰市"},{"pId":"1989","id":"2035","name":"鄂尔多斯市"},{"pId":"1989","id":"2044","name":"呼伦贝尔市"},{"pId":"1989","id":"2058","name":"通辽市"},{"pId":"1989","id":"2067","name":"乌海市"},{"pId":"1989","id":"2071","name":"乌兰察布市"},{"pId":"1989","id":"2083","name":"锡林郭勒盟"},{"pId":"1989","id":"2096","name":"兴安盟"},{"pId":"2103","id":"2104","name":"银川市"},{"pId":"2103","id":"2111","name":"固原市"},{"pId":"2103","id":"2117","name":"石嘴山市"},{"pId":"2103","id":"2121","name":"吴忠市"},{"pId":"2103","id":"2126","name":"中卫市"},{"pId":"2130","id":"2131","name":"西宁市"},{"pId":"2130","id":"2139","name":"果洛州"},{"pId":"2130","id":"2146","name":"海北州"},{"pId":"2130","id":"2151","name":"海东地区"},{"pId":"2130","id":"2158","name":"海南州"},{"pId":"2130","id":"2164","name":"海西州"},{"pId":"2130","id":"2170","name":"黄南州"},{"pId":"2130","id":"2175","name":"玉树州"},{"pId":"2182","id":"2183","name":"济南市"},{"pId":"2182","id":"2194","name":"滨州市"},{"pId":"2182","id":"2202","name":"德州市"},{"pId":"2182","id":"2214","name":"东营市"},{"pId":"2182","id":"2220","name":"菏泽市"},{"pId":"2182","id":"2230","name":"济宁市"},{"pId":"2182","id":"2243","name":"莱芜市"},{"pId":"2182","id":"2246","name":"聊城市"},{"pId":"2182","id":"2255","name":"临沂市"},{"pId":"2182","id":"2268","name":"青岛市"},{"pId":"2182","id":"2281","name":"日照市"},{"pId":"2182","id":"2286","name":"泰安市"},{"pId":"2182","id":"2293","name":"威海市"},{"pId":"2182","id":"2298","name":"潍坊市"},{"pId":"2182","id":"2311","name":"烟台市"},{"pId":"2182","id":"2324","name":"枣庄市"},{"pId":"2182","id":"2331","name":"淄博市"},{"pId":"2340","id":"2341","name":"太原市"},{"pId":"2340","id":"2352","name":"长治市"},{"pId":"2340","id":"2366","name":"大同市"},{"pId":"2340","id":"2378","name":"晋城市"},{"pId":"2340","id":"2385","name":"晋中市"},{"pId":"2340","id":"2397","name":"临汾市"},{"pId":"2340","id":"2415","name":"吕梁市"},{"pId":"2340","id":"2429","name":"朔州市"},{"pId":"2340","id":"2436","name":"忻州市"},{"pId":"2340","id":"2451","name":"阳泉市"},{"pId":"2340","id":"2457","name":"运城市"},{"pId":"2471","id":"2472","name":"西安市"},{"pId":"2471","id":"2486","name":"安康市"},{"pId":"2471","id":"2497","name":"宝鸡市"},{"pId":"2471","id":"2510","name":"汉中市"},{"pId":"2471","id":"2522","name":"商洛市"},{"pId":"2471","id":"2530","name":"铜川市"},{"pId":"2471","id":"2535","name":"渭南市"},{"pId":"2471","id":"2547","name":"咸阳市"},{"pId":"2471","id":"2562","name":"延安市"},{"pId":"2471","id":"2576","name":"榆林市"},{"pId":"2589","id":"2590","name":"成都市"},{"pId":"2589","id":"2610","name":"阿坝州"},{"pId":"2589","id":"2624","name":"巴中市"},{"pId":"2589","id":"2629","name":"达州市"},{"pId":"2589","id":"2637","name":"德阳市"},{"pId":"2589","id":"2644","name":"甘孜州"},{"pId":"2589","id":"2663","name":"广安市"},{"pId":"2589","id":"2669","name":"广元市"},{"pId":"2589","id":"2677","name":"乐山市"},{"pId":"2589","id":"2689","name":"凉山州"},{"pId":"2589","id":"2707","name":"泸州市"},{"pId":"2589","id":"2715","name":"眉山市"},{"pId":"2589","id":"2722","name":"绵阳市"},{"pId":"2589","id":"2732","name":"内江市"},{"pId":"2589","id":"2738","name":"南充市"},{"pId":"2589","id":"2748","name":"攀枝花市"},{"pId":"2589","id":"2754","name":"遂宁市"},{"pId":"2589","id":"2760","name":"雅安市"},{"pId":"2589","id":"2769","name":"宜宾市"},{"pId":"2589","id":"2780","name":"资阳市"},{"pId":"2589","id":"2785","name":"自贡市"},{"pId":"2792","id":"2793","name":"拉萨市"},{"pId":"2792","id":"2802","name":"阿里地区"},{"pId":"2792","id":"2810","name":"昌都地区"},{"pId":"2792","id":"2822","name":"林芝地区"},{"pId":"2792","id":"2830","name":"那曲地区"},{"pId":"2792","id":"2841","name":"日喀则地区"},{"pId":"2792","id":"2860","name":"山南地区"},{"pId":"2873","id":"2874","name":"乌鲁木齐市"},{"pId":"2873","id":"2883","name":"阿克苏地区"},{"pId":"2873","id":"2893","name":"阿拉尔市"},{"pId":"2873","id":"2894","name":"阿勒泰地区"},{"pId":"2873","id":"2902","name":"巴音州"},{"pId":"2873","id":"2912","name":"博尔州"},{"pId":"2873","id":"2916","name":"昌吉州"},{"pId":"2873","id":"2925","name":"哈密地区"},{"pId":"2873","id":"2929","name":"和田地区"},{"pId":"2873","id":"2938","name":"喀什地区"},{"pId":"2873","id":"2951","name":"克拉玛依市"},{"pId":"2873","id":"2956","name":"克孜勒苏州"},{"pId":"2873","id":"2961","name":"石河子市"},{"pId":"2873","id":"2962","name":"塔城地区"},{"pId":"2873","id":"2970","name":"图木舒克市"},{"pId":"2873","id":"2971","name":"吐鲁番地区"},{"pId":"2873","id":"2975","name":"五家渠市"},{"pId":"2873","id":"2976","name":"伊犁州"},{"pId":"2987","id":"2988","name":"昆明市"},{"pId":"2987","id":"3003","name":"保山市"},{"pId":"2987","id":"3009","name":"楚雄州"},{"pId":"2987","id":"3020","name":"大理州"},{"pId":"2987","id":"3033","name":"德宏州"},{"pId":"2987","id":"3039","name":"迪庆州"},{"pId":"2987","id":"3043","name":"红河州"},{"pId":"2987","id":"3057","name":"丽江市"},{"pId":"2987","id":"3063","name":"临沧市"},{"pId":"2987","id":"3072","name":"怒江州"},{"pId":"2987","id":"3077","name":"曲靖市"},{"pId":"2987","id":"3087","name":"思茅市"},{"pId":"2987","id":"3098","name":"文山州"},{"pId":"2987","id":"3107","name":"西双版纳州"},{"pId":"2987","id":"3111","name":"玉溪市"},{"pId":"2987","id":"3121","name":"昭通市"},{"pId":"3133","id":"3134","name":"杭州市"},{"pId":"3133","id":"3148","name":"湖州市"},{"pId":"3133","id":"3154","name":"嘉兴市"},{"pId":"3133","id":"3162","name":"金华市"},{"pId":"3133","id":"3172","name":"丽水市"},{"pId":"3133","id":"3182","name":"宁波市"},{"pId":"3133","id":"3194","name":"衢州市"},{"pId":"3133","id":"3201","name":"绍兴市"},{"pId":"3133","id":"3208","name":"台州市"},{"pId":"3133","id":"3218","name":"温州市"},{"pId":"3133","id":"3230","name":"舟山市"},{"pId":"3235","id":"3236","name":"九龙"},{"pId":"3235","id":"3237","name":"香港岛"},{"pId":"3235","id":"3238","name":"新界"},{"pId":"3239","id":"3240","name":"澳门半岛"},{"pId":"3239","id":"3241","name":"离岛"},{"pId":"3242","id":"3243","name":"台北市"},{"pId":"3242","id":"3244","name":"高雄市"},{"pId":"3242","id":"3245","name":"高雄县"},{"pId":"3242","id":"3246","name":"花莲县"},{"pId":"3242","id":"3247","name":"基隆市"},{"pId":"3242","id":"3248","name":"嘉义市"},{"pId":"3242","id":"3249","name":"嘉义县"},{"pId":"3242","id":"3250","name":"金门县"},{"pId":"3242","id":"3251","name":"苗栗县"},{"pId":"3242","id":"3252","name":"南投县"},{"pId":"3242","id":"3253","name":"澎湖县"},{"pId":"3242","id":"3254","name":"屏东县"},{"pId":"3242","id":"3255","name":"台北县"},{"pId":"3242","id":"3256","name":"台东县"},{"pId":"3242","id":"3257","name":"台南市"},{"pId":"3242","id":"3258","name":"台南县"},{"pId":"3242","id":"3259","name":"台中市"},{"pId":"3242","id":"3260","name":"台中县"},{"pId":"3242","id":"3261","name":"桃园县"},{"pId":"3242","id":"3262","name":"新竹市"},{"pId":"3242","id":"3263","name":"新竹县"},{"pId":"3242","id":"3264","name":"宜兰县"},{"pId":"3242","id":"3265","name":"云林县"},{"pId":"3242","id":"3266","name":"彰化县"}];

/****
    地址三级联动
****/
(function($){


    function addSeltion(setting){

        this.el = setting.elms;

        this.htmlStr = '<div class="dstion-plugins">';
        if(!setting.topNav){
            if(setting.defaultValue){
                var dvName = setting.defaultValue.deName.split("-");
                this.dvProName = dvName[0];
                this.dvCityName = dvName[1];
                this.dvAreaName = dvName[2];
                this.htmlStr += '<input type="hidden" data-id="'+setting.defaultValue.deId+'" class="dstion-input"><div class="dstion-top"><div class="dstion-t-msg">'+this.dvProName+''+this.dvCityName+''+this.dvAreaName+'</div>';
            }else{
                this.htmlStr += '<input type="hidden" class="dstion-input"><div class="dstion-top"><div class="dstion-t-msg">请选择配送区域</div>'
            }

            this.htmlStr +='<b class="u-icon">&#xe600;</b></div><div class="dstion-con dstion-con-'+setting.position+'">'

            if(setting.usedAdr){
                this.htmlStr += '<div style="display:none;" class="dstion-con-item dstion-con-default"><h4>常用地址</h4><div class="dstion-con-text"></div><h4>选择新地址</h4></div>'
            }

            this.htmlStr += '<div class="dstion-close u-icon">&#xe60d;</div><div class="dstion-con-item"><div class="dstion-con-adrs"><div class="dstion-tab"><ul class="clearfix"><li class="active"><a href="#"><em>请选择</em><b class="u-icon">&#xe600;</b></a></li><li class="hide"><a href="#"><em>请选择</em><b class="u-icon">&#xe600;</b></a></li><li class="hide"><a href="#"><em>请选择</em><b class="u-icon">&#xe600;</b></a></li></ul></div><div id="adrStion-context-province" class="dstion-tab-con show"></div><div id="adrStion-context-city" class="dstion-tab-con"></div><div id="adrStion-context-area" class="dstion-tab-con"></div></div></div></div></div>';
        }else{
            if(setting.defaultValue){
                var dvName = setting.defaultValue.deName.split("-");
                this.dvProName = dvName[0];
                this.dvCityName = dvName[1];
                this.dvAreaName = dvName[2];
            }
            this.htmlStr +='<div class="dstion-con dstion-con-topnav" style="display:block;">';
            this.htmlStr += '<div class="dstion-con-item"><div class="dstion-con-adrs"><div class="dstion-tab"><ul class="clearfix"><li class="active"><a href="#"><em>请选择</em><b class="u-icon">&#xe600;</b></a></li><li class="hide"><a href="#"><em>请选择</em><b class="u-icon">&#xe600;</b></a></li><li class="hide"><a href="#"><em>请选择</em><b class="u-icon">&#xe600;</b></a></li></ul></div><div id="adrStion-context-province" class="dstion-tab-con show"></div><div id="adrStion-context-city" class="dstion-tab-con"></div><div id="adrStion-context-area" class="dstion-tab-con"></div></div></div></div></div>'
        };

        this.fn = setting.fn;
        this.cookieFlag = setting.cookieFlag;
        this.allArea = setting.allArea;
        this.usedAdr = setting.usedAdr;
        this.usedAdrFn = setting.usedAdrFn;
    };
    addSeltion.prototype.getNameTextById = function(data,id){
        var str = null;
        for(var i =0,len=data.length; i<len; i++){
            if(data[i].id == id) {
                str = data[i].name;
                break;
            }
        }
        return str;
    }
    addSeltion.prototype.getDefaultArea = function(data){
        var _this = this;

        _this.el.find(".dstion-tab li").removeClass('hide').removeClass('active').eq(2).addClass('active');
        _this.el.find(".dstion-con-adrs .dstion-tab-con").removeClass('show').eq(2).addClass('show');

        var dvId = data.split("-");
        var proId = dvId[0];
        var cityId = dvId[1];
        var areaId = dvId[2];

        _this.el.find(".dstion-tab li").eq(0).find("em").html(_this.dvProName);
        _this.el.find(".dstion-tab li").eq(1).find("em").html(_this.dvCityName);
        _this.el.find(".dstion-tab li").eq(2).find("em").html(_this.dvAreaName);

        var cityArrs = _this.getNameById(proId);
        var cityStrs = _this.getHtmlStr(cityArrs);
        _this.el.find("#adrStion-context-city").html(cityStrs);

        _this.el.find("#adrStion-context-province").find("a[data-id="+proId+"]").addClass('active');
        _this.el.find("#adrStion-context-city").find("a[data-id="+cityId+"]").addClass('active');

        var getAreaData = {
                cityId : cityId
            };
        if(_this.allArea) {
            getAreaData.allArea = "kk"
        }

        $.ajax({
            url: $("#h_cartPath").val()+'cart/getAreaAddressByCityId.shtml',
            type: 'get',
            dataType: 'jsonp',
            data: getAreaData
        })
        .done(function(dataArea) {
            if(dataArea.data.length){
                var areaStr = _this.getHtmlStr(dataArea.data,true);
                _this.el.find("#adrStion-context-area").html(areaStr);

                var allAreas = $.cookie('allArea');

                if(allAreas == "1"){

                    _this.el.find("#adrStion-context-area").find(".allArea").addClass('active');
                }else{

                    _this.el.find("#adrStion-context-area").find("a[data-id="+areaId+"]:not('.allArea')").addClass('active');
                }

            }else{
                _this.el.find("#adrStion-context-area").html("<span class='adr-loading' style='font-size:12px;'>未找到数据.</span>").addClass("show");
            }

        })
        .fail(function() {
            console.log("error");
        })

    }
    addSeltion.prototype.getHtmlStr = function(data,bol){
        var str = '<ul class="clearfix">';
        for(var i=0; i<data.length; i++) {
            //试运行代码
            // if(data[i].id == '998' || data[i].id == '999' || bol){
            //     if(data[i].name.length > 4){
            //         str += '<li class="long-li">'
            //     }else{
            //         str += '<li>'
            //     };
            //
            //     if(!data[i].realName){
            //         str += '<a href="javascript:;" data-id="'+data[i].id+'">'+data[i].name+'</a></li>';
            //     }else{
            //         str += '<a href="javascript:;" class="allArea" data-realName="'+data[i].realName+'" data-id="'+data[i].id+'">'+data[i].name+'</a></li>';
            //     };
            // }
            // 正常代码
            if(data[i].name.length > 4){
                str += '<li class="long-li">'
            }else{
                str += '<li>'
            };

            if(!data[i].realName){
                str += '<a href="javascript:;" data-id="'+data[i].id+'">'+data[i].name+'</a></li>';
            }else{
                str += '<a href="javascript:;" class="allArea" data-realName="'+data[i].realName+'" data-id="'+data[i].id+'">'+data[i].name+'</a></li>';
            };
        };

        str += '</ul>'
        return str;
    };

    addSeltion.prototype.getNameById = function(parentId){
        var arr = [];
        for(var i=0;i<cityData.length;i++){
            if(cityData[i].pId == parentId && cityData[i].id != '138'){
                arr.push(cityData[i]);
            }
        };
        return arr;
    };

    addSeltion.prototype.getProvince = function(data){
        var _this = this;
        var str = _this.getHtmlStr(proData);
        _this.el.find("#adrStion-context-province").html(str);
    };

    addSeltion.prototype.getCity = function(parentId,name,obj){
        var _this = this;
        var cityArrs = _this.getNameById(parentId);
        var cityStrs = _this.getHtmlStr(cityArrs);
        obj.find("#adrStion-context-province").removeClass("show");
        obj.find(".dstion-tab li").eq(0).removeClass("active").find("em").html(name);
        obj.find(".dstion-tab li").eq(1).addClass("active");
        obj.find("#adrStion-context-city").html(cityStrs).addClass("show");
    };

    addSeltion.prototype.getArea = function(parentId,name,obj){
        var _this = this;
        obj.find("#adrStion-context-city").removeClass("show");
        obj.find(".dstion-tab li").eq(1).removeClass("active").find("em").html(name);
        obj.find(".dstion-tab li").eq(2).addClass("active");
        obj.find("#adrStion-context-area").html("<span class='adr-loading' style='font-size:12px;'>正在加载中....</span>").addClass("show");

        var getAreaData = {
                cityId :parentId
            };
        if(_this.allArea) {
            getAreaData.allArea = "kk"
        }

        $.ajax({
            url: $("#h_cartPath").val()+'cart/getAreaAddressByCityId.shtml',
            type: 'get',
            dataType: 'jsonp',
            data: getAreaData
        })
        .done(function(dataArea) {
            if(dataArea.data.length){
                var areaStr = _this.getHtmlStr(dataArea.data,true);
                obj.find("#adrStion-context-area").html(areaStr)
            }else{
                obj.find("#adrStion-context-area").html("<span class='adr-loading' style='font-size:12px;'>未找到数据.</span>").addClass("show");
            }

        })
        .fail(function() {
            console.log("error");
        })
    };

    //
    addSeltion.prototype.getNormalAddress = function (){
        var _this = this;
        var userId = $.cookie("xe_login_name");
        if(!!userId){
            $.ajax({
                url: $("#h_cartPath").val()+'cart/getNormalAddress.shtml',
                type: 'get',
                dataType: 'jsonp'
            })
            .done(function(datas) {
                if(datas.code === "0000" && datas.data.length){
                    var dataAdr = datas.data[0];
                    var str = '';
                    var arrid = [dataAdr.provinceId,dataAdr.cityId,dataAdr.areaId];
                    var arrname = [dataAdr.provinceName,dataAdr.cityName,dataAdr.areaName];
                    str += '<a href="#">（默认）'+arrname.join("")+'</a>';

                    _this.el.find(".dstion-con-default").show().find(".dstion-con-text").html(str);

                    $("body").on("click",".dstion-con-default .dstion-con-text a",function(ev){
                        ev.preventDefault();

                        var pars = $(this).parents(".dstion-plugins");
                        pars.find(".dstion-input").attr({
                            "data-id":arrid.join("-"),
                            "data-name":arrname.join("-")
                        });
                        pars.find(".dstion-t-msg").attr("title",arrname.join("")).html(arrname.join(""));
                        pars.removeClass('dstion-plugins-active');
                        if(_this.usedAdr) {
                            _this.usedAdrFn && _this.usedAdrFn({
                                adrname : arrname.join("-"),
                                adrid : arrid.join("-")
                            });
                        }

                    });
                }else{
                    _this.el.find(".dstion-con-default").remove();
                }

            })
            .fail(function() {
                console.log("error");
            })
        }
    }

    addSeltion.prototype.init = function(obj,fn,cookieFlag){
        var _this = this;

        _this.getProvince();

        // 点击省份
        $(obj).on("click","#adrStion-context-province a",function(ev){
            ev.preventDefault();
            $(obj).off("mouseleave");
            var parentId = $(this).attr("data-id");
            var parentName = $(this).text();
            var _par = $(this).parents(".dstion-plugins");

            _par.find("#adrStion-context-province a").removeClass("active");
            $(this).addClass("active");
            _par.find(".dstion-tab li").eq(1).removeClass('hide').addClass("show").find("em").html("请选择");
            _par.find(".dstion-tab li").eq(2).removeClass('show').addClass("hide").find('em').html("请选择");
            _this.getCity(parentId,parentName,_par);
        });

        // 点击市
        $(obj).on("click","#adrStion-context-city a",function(ev){
            ev.preventDefault();
            var _par = $(this).parents(".dstion-plugins");
            var parentId = $(this).attr("data-id");
            var parentName = $(this).text();

            $(obj).off("mouseleave");

            _par.find("#adrStion-context-city a").removeClass("active");
            _par.find(".dstion-tab li").eq(2).removeClass('hide').addClass("show").find('em').html("请选择");
            $(this).addClass("active");
            _this.getArea(parentId,parentName,_par);
        });

        // 点击区
        $(obj).on("click","#adrStion-context-area a",function(ev){
            ev.preventDefault();

            var _par = $(this).parents(".dstion-plugins");
            var parentId = $(this).attr("data-id");
            var realName = $(this).attr("data-realName");
            var parentName = realName ? realName : $(this).text();

            _par.find("#adrStion-context-area a").removeClass("active");
            $(this).addClass("active");

            if(!realName){
                $.cookie('allArea',2,{expires:365,domain:'.xebest.com',path:'/'});
            }else{
                $.cookie('allArea',1,{expires:365,domain:'.xebest.com',path:'/'});
            };

            var sheng = _par.find(".dstion-tab li").eq(0).find("em").text();
            var shi = _par.find(".dstion-tab li").eq(1).find("em").text();;

            var inputName = sheng + "-" + shi + "-" + parentName;
            _par.find(".dstion-t-msg").text(sheng + shi + $(this).text()).attr("title",sheng + shi + $(this).text());
            var inputId = _par.find("#adrStion-context-province a.active").attr("data-id")+'-'+_par.find("#adrStion-context-city a.active").attr("data-id")+'-'+ $(this).attr("data-id");
            _par.find(".dstion-input").attr({"data-id":inputId,"data-name" : inputName})
            _par.removeClass("dstion-plugins-active");

            _this.fn&&_this.fn({name : inputName ,id : inputId});

            if(_this.cookieFlag){
            	//存COOKIE方式写在这
                // alert("cookie")
            }

        });

        // 省市区切换
        $(obj).on("click",".dstion-tab li",function(ev){
            ev.preventDefault();
            var _par = $(this).parents(".dstion-plugins");
            var index = _par.find(".dstion-tab li").index(this);
            _par.find(".dstion-tab li").removeClass('active');
            $(this).addClass("active");
            _par.find(".dstion-tab-con").removeClass("show").eq(index).addClass('show')
        });

        //点击关闭
        $(obj).on("click",".dstion-close",function(ev){
            ev.preventDefault();
            var _par = $(this).parents(".dstion-plugins");
            _par.removeClass("dstion-plugins-active");
        });

    };

    $.fn.adrSelects = function(opt){

        var deft = {
            defaultValue : null,
            fn : $.noop(),
            cookieFlag : false,
            position : "left",
            usedAdr : false,
            usedAdrFn : $.noop(),
            topNav : false,
            allArea : false
        };

        var setting = $.extend(true,deft,opt);

        return this.each(function(index, el) {
            setting.elms = $(el);
            var addSeltions = new addSeltion(setting);

            $(this).append(addSeltions.htmlStr);
            addSeltions.init(this);

            if(setting.defaultValue){
                addSeltions.getDefaultArea(setting.defaultValue.deId);
            };

            if(setting.usedAdr && !setting.topNav){
                addSeltions.getNormalAddress();
            };

            if(!setting.topNav){
                $(this).on("mouseenter",function(){
                    $(this).find(".dstion-plugins").addClass("dstion-plugins-active");
                    $(this).on("mouseleave",function(){
                        $(this).find(".dstion-plugins").removeClass("dstion-plugins-active");
                    })
                });

                $(this).on("mouseleave",function(){
                    $(this).find(".dstion-plugins").removeClass("dstion-plugins-active");
                });
            }

        });
    };
})(jQuery)



$(function(){

    // 头部配送至
    var cyProvinceName = $.cookie('cyProvinceName') ? $.cookie('cyProvinceName') : '';
    var cyProvinceId = $.cookie('cyProvinceId') ? $.cookie('cyProvinceId') : '';
    var cyCityName = $.cookie('cyCityName') ? $.cookie('cyCityName') : '';
    var cyCityId = $.cookie('cyCityId') ? $.cookie('cyCityId') : '';
    var cyAreaName = $.cookie('cyAreaName') ? $.cookie('cyAreaName') : '';
    var cyAreaId = $.cookie('cyAreaId') ? $.cookie('cyAreaId') : '';

    // 判断是否是老网站过来的
    var cyDomainName = $.cookie('cyDomainName') ? $.cookie('cyDomainName') : '';

    // 无省市区COOKIE时调接定位接口
    if(!cyProvinceName || !cyProvinceId || !cyCityName || !cyCityId || !cyAreaName || !cyAreaId) {

        // 出现加载中的提示
        $.showIndicator();
        $.ajax({
            type : 'get',
            url : $("#h_cartPath").val()+'cart/getAddressLocation.shtml',
            dataType : 'jsonp',
            timeout : 15000,
            success : function(data){
                //if(data.code == '0000') {
                    $.hideIndicator();

                    $.cookie('cyProvinceName',data.provinceName,{expires:365,domain:'.xebest.com',path:'/'});
                    $.cookie('cyProvinceId',data.provinceId,{expires:365,domain:'.xebest.com',path:'/'});
                    $.cookie('cyCityName',data.cityName,{expires:365,domain:'.xebest.com',path:'/'});
                    $.cookie('cyCityId',data.cityId,{expires:365,domain:'.xebest.com',path:'/'});
                    $.cookie('cyAreaName',data.areaName,{expires:365,domain:'.xebest.com',path:'/'});
                    $.cookie('cyAreaId',data.areaId,{expires:365,domain:'.xebest.com',path:'/'});

                    $.cookie('allArea',2,{expires:365,domain:'.xebest.com',path:'/'});

                    window.location.reload();

                //}
            },
            error : function(){
                $.hideIndicator();
                console.log('地址IP接口获取失败')
            }
        })
    }else{
        $(".g-header").find(".m-topNav .ac").html(cyCityName + '<i class="arrow"></i>');
    }


    $(document).on('click.adrMnt','.m-nt .ac',function(){

        var deId = cookieJS.getCookie('cyProvinceId') + '-' + cookieJS.getCookie('cyCityId') + '-' + cookieJS.getCookie('cyAreaId');
        var deName = cookieJS.getCookie('cyProvinceName') + '-' + cookieJS.getCookie('cyCityName') + '-' + cookieJS.getCookie('cyAreaName');

        $.modal({
          text: '<div class="topnav-pop-top"><div class="topnav-pop-text"><span>'+cookieJS.getCookie('cyCityName')+'<i class="u-icon">&#xe600;</i></span></div><div class="topnav-adr-con"></div></div>',
          closeBtn : true,
          extraClass : "modal-topnav",
        });

        $(".topnav-adr-con").adrSelects({
            defaultValue : {
                "deId" : deId,
                "deName" : deName
            },//默认回显地址
            fn : function (data){
                var name = data.name.split('-');
                var id = data.id.split('-');

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

                //$(".modal-topnav").find(".modal-close").trigger('click')
            },// 选择区后的回调方法
            cookieFlag : false, // 是否写入cookie ，默认false 传入true会写COOKIE
            usedAdr : true,
            topNav : true,
            allArea : true
        });


    });

    //$(document).off('click.adrMnt');

});
