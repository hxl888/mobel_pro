/**
 * Created by zhangwen on 2017/10/12.
 */
var cityList = [{areaId:998,child:[{areaId:999,areaIdName:"999-郑州市",areaName:"郑州市"},{areaId:1012,areaName:"安阳市",areaIdName:"1012-安阳市"},{areaId:1022,areaName:"鹤壁市",areaIdName:"1022-鹤壁市"},{areaIdName:"1028-济源市",areaId:1028,areaName:"济源市"},{areaIdName:"1029-焦作市",areaId:1029,areaName:"焦作市"},{areaId:1041,areaIdName:"1041-开封市",areaName:"开封市"},{areaName:"洛阳市",areaId:1052,areaIdName:"1052-洛阳市"},{areaId:1068,areaIdName:"1068-漯河市",areaName:"漯河市"},{areaId:1074,areaName:"南阳市",areaIdName:"1074-南阳市"},{areaName:"平顶山市",areaId:1088,areaIdName:"1088-平顶山市"},{areaId:1099,areaName:"濮阳市",areaIdName:"1099-濮阳市"},{areaName:"三门峡市",areaIdName:"1106-三门峡市",areaId:1106},{areaIdName:"1113-商丘市",areaId:1113,areaName:"商丘市"},{areaName:"新乡市",areaIdName:"1123-新乡市",areaId:1123},{areaName:"信阳市",areaId:1136,areaIdName:"1136-信阳市"},{areaIdName:"1147-许昌市",areaName:"许昌市",areaId:1147},{areaName:"周口市",areaIdName:"1154-周口市",areaId:1154},{areaName:"驻马店市",areaIdName:"1165-驻马店市",areaId:1165}],areaIdName:"998-河南",areaName:"河南"},{areaId:1643,areaIdName:"1643-江苏",areaName:"江苏",child:[{areaId:1644,areaName:"南京市",areaIdName:"1644-南京市"},{areaId:1658,areaIdName:"1658-常州市",areaName:"常州市"},{areaId:1666,areaIdName:"1666-淮安市",areaName:"淮安市"},{areaName:"连云港市",areaId:1675,areaIdName:"1675-连云港市"},{areaName:"南通市",areaId:1683,areaIdName:"1683-南通市"},{areaId:1692,areaName:"苏州市",areaIdName:"1692-苏州市"},{areaIdName:"1704-宿迁市",areaName:"宿迁市",areaId:1704},{areaName:"泰州市",areaId:1710,areaIdName:"1710-泰州市"},{areaId:1717,areaName:"无锡市",areaIdName:"1717-无锡市"},{areaIdName:"1726-徐州市",areaId:1726,areaName:"徐州市"},{areaId:1738,areaIdName:"1738-盐城市",areaName:"盐城市"},{areaId:1748,areaIdName:"1748-扬州市",areaName:"扬州市"},{areaId:1756,areaName:"镇江市",areaIdName:"1756-镇江市"}]},{areaName:"山东",child:[{areaId:2183,areaName:"济南市",areaIdName:"2183-济南市"},{areaIdName:"2194-滨州市",areaName:"滨州市",areaId:2194},{areaId:2202,areaIdName:"2202-德州市",areaName:"德州市"},{areaName:"东营市",areaIdName:"2214-东营市",areaId:2214},{areaName:"菏泽市",areaIdName:"2220-菏泽市",areaId:2220},{areaIdName:"2230-济宁市",areaId:2230,areaName:"济宁市"},{areaId:2243,areaIdName:"2243-莱芜市",areaName:"莱芜市"},{areaId:2246,areaName:"聊城市",areaIdName:"2246-聊城市"},{areaIdName:"2255-临沂市",areaId:2255,areaName:"临沂市"},{areaId:2268,areaIdName:"2268-青岛市",areaName:"青岛市"},{areaIdName:"2281-日照市",areaName:"日照市",areaId:2281},{areaName:"泰安市",areaId:2286,areaIdName:"2286-泰安市"},{areaId:2293,areaName:"威海市",areaIdName:"2293-威海市"},{areaId:2298,areaName:"潍坊市",areaIdName:"2298-潍坊市"},{areaId:2311,areaIdName:"2311-烟台市",areaName:"烟台市"},{areaIdName:"2324-枣庄市",areaId:2324,areaName:"枣庄市"},{areaId:2331,areaName:"淄博市",areaIdName:"2331-淄博市"}],areaId:2182,areaIdName:"2182-山东"},{child:[{areaIdName:"815-石家庄市",areaId:815,areaName:"石家庄市"},{areaIdName:"839-保定市",areaName:"保定市",areaId:839},{areaIdName:"865-沧州市",areaId:865,areaName:"沧州市"},{areaId:882,areaIdName:"882-承德市",areaName:"承德市"},{areaIdName:"894-邯郸市",areaId:894,areaName:"邯郸市"},{areaName:"衡水市",areaIdName:"914-衡水市",areaId:914},{areaName:"廊坊市",areaId:926,areaIdName:"926-廊坊市"},{areaIdName:"937-秦皇岛市",areaName:"秦皇岛市",areaId:937},{areaId:945,areaName:"唐山市",areaIdName:"945-唐山市"},{areaId:960,areaIdName:"960-邢台市",areaName:"邢台市"},{areaId:980,areaIdName:"980-张家口市",areaName:"张家口市"}],areaId:814,areaName:"河北",areaIdName:"814-河北"},{child:[{areaIdName:"43-天津市",areaName:"天津市",areaId:43}],areaIdName:"42-天津",areaName:"天津",areaId:42},{areaIdName:"1-北京",areaId:1,areaName:"北京",child:[{areaName:"北京市",areaId:2,areaIdName:"2-北京市"}]},{child:[{areaId:22,areaName:"上海市",areaIdName:"22-上海市"}],areaIdName:"21-上海",areaId:21,areaName:"上海"},{child:[{areaIdName:"63-重庆市",areaId:63,areaName:"重庆市"}],areaName:"重庆",areaIdName:"62-重庆",areaId:62},{areaName:"安徽",areaIdName:"104-安徽",child:[{areaIdName:"105-合肥市",areaId:105,areaName:"合肥市"},{areaName:"安庆市",areaId:113,areaIdName:"113-安庆市"},{areaIdName:"125-蚌埠市",areaName:"蚌埠市",areaId:125},{areaIdName:"133-亳州市",areaName:"亳州市",areaId:133},{areaIdName:"138-巢湖市",areaName:"巢湖市",areaId:138},{areaName:"池州市",areaId:144,areaIdName:"144-池州市"},{areaName:"滁州市",areaIdName:"149-滁州市",areaId:149},{areaId:158,areaName:"阜阳市",areaIdName:"158-阜阳市"},{areaId:167,areaName:"淮北市",areaIdName:"167-淮北市"},{areaId:172,areaName:"淮南市",areaIdName:"172-淮南市"},{areaIdName:"179-黄山市",areaId:179,areaName:"黄山市"},{areaName:"六安市",areaIdName:"187-六安市",areaId:187},{areaIdName:"195-马鞍山市",areaId:195,areaName:"马鞍山市"},{areaIdName:"200-宿州市",areaId:200,areaName:"宿州市"},{areaIdName:"206-铜陵市",areaName:"铜陵市",areaId:206},{areaIdName:"211-芜湖市",areaId:211,areaName:"芜湖市"},{areaId:219,areaIdName:"219-宣城市",areaName:"宣城市"}],areaId:104},{areaId:227,areaIdName:"227-福建",areaName:"福建",child:[{areaName:"福州市",areaId:228,areaIdName:"228-福州市"},{areaIdName:"242-龙岩市",areaName:"龙岩市",areaId:242},{areaIdName:"250-南平市",areaName:"南平市",areaId:250},{areaId:261,areaIdName:"261-宁德市",areaName:"宁德市"},{areaName:"莆田市",areaId:271,areaIdName:"271-莆田市"},{areaName:"泉州市",areaIdName:"277-泉州市",areaId:277},{areaIdName:"290-三明市",areaId:290,areaName:"三明市"},{areaName:"厦门市",areaIdName:"303-厦门市",areaId:303},{areaId:310,areaName:"漳州市",areaIdName:"310-漳州市"}]},{areaIdName:"322-甘肃",areaId:322,child:[{areaIdName:"323-兰州市",areaName:"兰州市",areaId:323},{areaId:332,areaIdName:"332-白银市",areaName:"白银市"},{areaName:"定西市",areaId:338,areaIdName:"338-定西市"},{areaId:346,areaIdName:"346-甘南藏族自治州",areaName:"甘南藏族自治州"},{areaIdName:"355-嘉峪关市",areaId:355,areaName:"嘉峪关市"},{areaId:356,areaName:"金昌市",areaIdName:"356-金昌市"},{areaIdName:"359-酒泉市",areaName:"酒泉市",areaId:359},{areaName:"临夏回族自治州",areaId:367,areaIdName:"367-临夏回族自治州"},{areaId:376,areaName:"陇南市",areaIdName:"376-陇南市"},{areaIdName:"386-平凉市",areaId:386,areaName:"平凉市"},{areaName:"庆阳市",areaId:394,areaIdName:"394-庆阳市"},{areaId:403,areaName:"天水市",areaIdName:"403-天水市"},{areaId:411,areaIdName:"411-武威市",areaName:"武威市"},{areaIdName:"416-张掖市",areaName:"张掖市",areaId:416}],areaName:"甘肃"},{areaIdName:"423-广东",child:[{areaName:"广州市",areaIdName:"424-广州市",areaId:424},{areaName:"潮州市",areaIdName:"437-潮州市",areaId:437},{areaId:441,areaIdName:"441-东莞市",areaName:"东莞市"},{areaIdName:"442-佛山市",areaName:"佛山市",areaId:442},{areaName:"河源市",areaId:448,areaIdName:"448-河源市"},{areaIdName:"455-惠州市",areaName:"惠州市",areaId:455},{areaName:"江门市",areaIdName:"461-江门市",areaId:461},{areaIdName:"469-揭阳市",areaId:469,areaName:"揭阳市"},{areaIdName:"475-茂名市",areaId:475,areaName:"茂名市"},{areaName:"梅江区",areaId:482,areaIdName:"482-梅江区"},{areaIdName:"483-梅州市",areaName:"梅州市",areaId:483},{areaName:"清远市",areaIdName:"491-清远市",areaId:491},{areaName:"汕头市",areaId:500,areaIdName:"500-汕头市"},{areaId:508,areaIdName:"508-汕尾市",areaName:"汕尾市"},{areaIdName:"513-韶关市",areaName:"韶关市",areaId:513},{areaName:"深圳市",areaIdName:"524-深圳市",areaId:524},{areaIdName:"531-阳江市",areaName:"阳江市",areaId:531},{areaId:536,areaName:"云浮市",areaIdName:"536-云浮市"},{areaIdName:"542-湛江市",areaId:542,areaName:"湛江市"},{areaIdName:"552-肇庆市",areaName:"肇庆市",areaId:552},{areaIdName:"561-中山市",areaName:"中山市",areaId:561},{areaName:"珠海市",areaId:562,areaIdName:"562-珠海市"}],areaName:"广东",areaId:423},{areaIdName:"566-广西",areaId:566,areaName:"广西",child:[{areaId:567,areaName:"南宁市",areaIdName:"567-南宁市"},{areaId:580,areaIdName:"580-百色市",areaName:"百色市"},{areaIdName:"593-北海市",areaName:"北海市",areaId:593},{areaId:598,areaName:"崇左市",areaIdName:"598-崇左市"},{areaIdName:"606-防城港市",areaName:"防城港市",areaId:606},{areaName:"贵港市",areaId:611,areaIdName:"611-贵港市"},{areaIdName:"617-桂林市",areaId:617,areaName:"桂林市"},{areaId:635,areaIdName:"635-河池市",areaName:"河池市"},{areaName:"贺州市",areaId:647,areaIdName:"647-贺州市"},{areaId:652,areaName:"来宾市",areaIdName:"652-来宾市"},{areaId:659,areaIdName:"659-柳州市",areaName:"柳州市"},{areaId:670,areaName:"钦州市",areaIdName:"670-钦州市"},{areaId:675,areaIdName:"675-梧州市",areaName:"梧州市"},{areaName:"玉林市",areaIdName:"683-玉林市",areaId:683}]},{areaName:"贵州",child:[{areaName:"贵阳市",areaIdName:"691-贵阳市",areaId:691},{areaId:702,areaName:"安顺市",areaIdName:"702-安顺市"},{areaName:"毕节地区",areaId:709,areaIdName:"709-毕节地区"},{areaId:718,areaName:"六盘水市",areaIdName:"718-六盘水市"},{areaName:"黔东南苗族侗族自治州",areaIdName:"723-黔东南苗族侗族自治州",areaId:723},{areaId:740,areaName:"黔南布依族苗族自治州",areaIdName:"740-黔南布依族苗族自治州"},{areaIdName:"753-黔西南布依族苗族自治州",areaId:753,areaName:"黔西南布依族苗族自治州"},{areaId:762,areaName:"铜仁地区",areaIdName:"762-铜仁地区"},{areaIdName:"773-遵义市",areaId:773,areaName:"遵义市"}],areaId:690,areaIdName:"690-贵州"},{areaIdName:"788-海南",areaId:788,child:[{areaIdName:"789-海口市",areaName:"海口市",areaId:789},{areaId:794,areaName:"白沙黎族自治县",areaIdName:"794-白沙黎族自治县"},{areaId:795,areaName:"保亭黎族苗族自治县",areaIdName:"795-保亭黎族苗族自治县"},{areaId:796,areaName:"昌江黎族自治县",areaIdName:"796-昌江黎族自治县"},{areaId:797,areaIdName:"797-澄迈县",areaName:"澄迈县"},{areaId:798,areaIdName:"798-儋州市",areaName:"儋州市"},{areaIdName:"799-定安县",areaId:799,areaName:"定安县"},{areaIdName:"800-东方市",areaId:800,areaName:"东方市"},{areaId:801,areaName:"乐东黎族自治县",areaIdName:"801-乐东黎族自治县"},{areaIdName:"802-临高县",areaId:802,areaName:"临高县"},{areaIdName:"803-陵水黎族自治县",areaName:"陵水黎族自治县",areaId:803},{areaIdName:"804-南沙群岛",areaName:"南沙群岛",areaId:804},{areaName:"琼海市",areaId:805,areaIdName:"805-琼海市"},{areaId:806,areaIdName:"806-琼中黎族苗族自治县",areaName:"琼中黎族苗族自治县"},{areaName:"三亚市",areaId:807,areaIdName:"807-三亚市"},{areaId:808,areaIdName:"808-屯昌县",areaName:"屯昌县"},{areaIdName:"809-万宁市",areaName:"万宁市",areaId:809},{areaName:"文昌市",areaIdName:"810-文昌市",areaId:810},{areaName:"五指山市",areaIdName:"811-五指山市",areaId:811},{areaIdName:"812-西沙群岛",areaName:"西沙群岛",areaId:812},{areaId:813,areaIdName:"813-中沙群岛的岛礁及其海域",areaName:"中沙群岛的岛礁及其海域"}],areaName:"海南"},{child:[{areaName:"哈尔滨市",areaIdName:"1177-哈尔滨市",areaId:1177},{areaName:"大庆市",areaId:1197,areaIdName:"1197-大庆市"},{areaIdName:"1207-大兴安岭地区",areaName:"大兴安岭地区",areaId:1207},{areaName:"鹤岗市",areaId:1211,areaIdName:"1211-鹤岗市"},{areaId:1220,areaIdName:"1220-黑河市",areaName:"黑河市"},{areaIdName:"1227-鸡西市",areaName:"鸡西市",areaId:1227},{areaName:"佳木斯市",areaId:1237,areaIdName:"1237-佳木斯市"},{areaIdName:"1249-牡丹江市",areaName:"牡丹江市",areaId:1249},{areaName:"七台河市",areaIdName:"1260-七台河市",areaId:1260},{areaName:"齐齐哈尔市",areaId:1265,areaIdName:"1265-齐齐哈尔市"},{areaIdName:"1282-双鸭山市",areaName:"双鸭山市",areaId:1282},{areaName:"绥化市",areaIdName:"1291-绥化市",areaId:1291},{areaId:1302,areaIdName:"1302-伊春市",areaName:"伊春市"}],areaId:1176,areaIdName:"1176-黑龙江",areaName:"黑龙江"},{child:[{areaId:1321,areaIdName:"1321-武汉市",areaName:"武汉市"},{areaIdName:"1335-鄂州市",areaName:"鄂州市",areaId:1335},{areaId:1339,areaIdName:"1339-恩施土家族苗族自治州",areaName:"恩施土家族苗族自治州"},{areaIdName:"1348-黄冈市",areaName:"黄冈市",areaId:1348},{areaName:"黄石市",areaId:1359,areaIdName:"1359-黄石市"},{areaIdName:"1366-荆门市",areaName:"荆门市",areaId:1366},{areaId:1372,areaName:"荆州市",areaIdName:"1372-荆州市"},{areaId:1381,areaIdName:"1381-潜江市",areaName:"潜江市"},{areaId:1382,areaName:"神农架林区",areaIdName:"1382-神农架林区"},{areaIdName:"1383-十堰市",areaName:"十堰市",areaId:1383},{areaIdName:"1392-随州市",areaName:"随州市",areaId:1392},{areaIdName:"1395-天门市",areaName:"天门市",areaId:1395},{areaId:1396,areaName:"仙桃市",areaIdName:"1396-仙桃市"},{areaIdName:"1397-咸宁市",areaId:1397,areaName:"咸宁市"},{areaIdName:"1404-襄樊市",areaId:1404,areaName:"襄樊市"},{areaName:"孝感市",areaId:1414,areaIdName:"1414-孝感市"},{areaIdName:"1422-宜昌市",areaName:"宜昌市",areaId:1422}],areaName:"湖北",areaIdName:"1320-湖北",areaId:1320},{areaName:"湖南",areaId:1436,areaIdName:"1436-湖南",child:[{areaName:"长沙市",areaId:1437,areaIdName:"1437-长沙市"},{areaIdName:"1447-常德市",areaId:1447,areaName:"常德市"},{areaIdName:"1457-郴州市",areaName:"郴州市",areaId:1457},{areaId:1469,areaName:"衡阳市",areaIdName:"1469-衡阳市"},{areaIdName:"1482-怀化市",areaId:1482,areaName:"怀化市"},{areaIdName:"1495-娄底市",areaName:"娄底市",areaId:1495},{areaId:1501,areaName:"邵阳市",areaIdName:"1501-邵阳市"},{areaIdName:"1514-湘潭市",areaName:"湘潭市",areaId:1514},{areaName:"湘西土家族苗族自治州",areaId:1520,areaIdName:"1520-湘西土家族苗族自治州"},{areaId:1529,areaName:"益阳市",areaIdName:"1529-益阳市"},{areaIdName:"1536-永州市",areaId:1536,areaName:"永州市"},{areaId:1548,areaName:"岳阳市",areaIdName:"1548-岳阳市"},{areaIdName:"1558-张家界市",areaId:1558,areaName:"张家界市"},{areaIdName:"1563-株洲市",areaName:"株洲市",areaId:1563}]},{child:[{areaIdName:"1574-长春市",areaId:1574,areaName:"长春市"},{areaIdName:"1585-白城市",areaName:"白城市",areaId:1585},{areaIdName:"1591-白山市",areaId:1591,areaName:"白山市"},{areaIdName:"1598-吉林市",areaName:"吉林市",areaId:1598},{areaIdName:"1608-辽源市",areaId:1608,areaName:"辽源市"},{areaId:1613,areaName:"四平市",areaIdName:"1613-四平市"},{areaId:1620,areaName:"松原市",areaIdName:"1620-松原市"},{areaId:1626,areaIdName:"1626-通化市",areaName:"通化市"},{areaName:"延边朝鲜族自治州",areaIdName:"1634-延边朝鲜族自治州",areaId:1634}],areaId:1573,areaIdName:"1573-吉林",areaName:"吉林"},{areaId:1763,areaIdName:"1763-江西",child:[{areaIdName:"1764-南昌市",areaName:"南昌市",areaId:1764},{areaIdName:"1774-抚州市",areaId:1774,areaName:"抚州市"},{areaName:"赣州市",areaIdName:"1786-赣州市",areaId:1786},{areaIdName:"1805-吉安市",areaId:1805,areaName:"吉安市"},{areaName:"景德镇市",areaId:1819,areaIdName:"1819-景德镇市"},{areaId:1824,areaIdName:"1824-九江市",areaName:"九江市"},{areaId:1837,areaIdName:"1837-萍乡市",areaName:"萍乡市"},{areaIdName:"1843-上饶市",areaId:1843,areaName:"上饶市"},{areaIdName:"1856-新余市",areaName:"新余市",areaId:1856},{areaId:1859,areaName:"宜春市",areaIdName:"1859-宜春市"},{areaId:1870,areaName:"鹰潭市",areaIdName:"1870-鹰潭市"}],areaName:"江西"},{child:[{areaIdName:"1875-沈阳市",areaName:"沈阳市",areaId:1875},{areaIdName:"1889-鞍山市",areaName:"鞍山市",areaId:1889},{areaId:1897,areaIdName:"1897-本溪市",areaName:"本溪市"},{areaIdName:"1904-朝阳市",areaName:"朝阳市",areaId:1904},{areaId:1912,areaIdName:"1912-大连市",areaName:"大连市"},{areaIdName:"1923-丹东市",areaName:"丹东市",areaId:1923},{areaName:"抚顺市",areaIdName:"1930-抚顺市",areaId:1930},{areaName:"阜新市",areaId:1938,areaIdName:"1938-阜新市"},{areaName:"葫芦岛市",areaIdName:"1946-葫芦岛市",areaId:1946},{areaName:"锦州市",areaIdName:"1953-锦州市",areaId:1953},{areaIdName:"1961-辽阳市",areaName:"辽阳市",areaId:1961},{areaIdName:"1969-盘锦市",areaId:1969,areaName:"盘锦市"},{areaIdName:"1974-铁岭市",areaName:"铁岭市",areaId:1974},{areaId:1982,areaName:"营口市",areaIdName:"1982-营口市"}],areaName:"辽宁",areaIdName:"1874-辽宁",areaId:1874},{areaIdName:"1989-内蒙古",areaName:"内蒙古",areaId:1989,child:[{areaId:1990,areaIdName:"1990-呼和浩特市",areaName:"呼和浩特市"},{areaName:"阿拉善盟",areaIdName:"2000-阿拉善盟",areaId:2000},{areaName:"巴彦淖尔市",areaId:2004,areaIdName:"2004-巴彦淖尔市"},{areaName:"包头市",areaId:2012,areaIdName:"2012-包头市"},{areaName:"赤峰市",areaIdName:"2022-赤峰市",areaId:2022},{areaIdName:"2035-鄂尔多斯市",areaId:2035,areaName:"鄂尔多斯市"},{areaName:"呼伦贝尔市",areaIdName:"2044-呼伦贝尔市",areaId:2044},{areaIdName:"2058-通辽市",areaName:"通辽市",areaId:2058},{areaIdName:"2067-乌海市",areaId:2067,areaName:"乌海市"},{areaIdName:"2071-乌兰察布市",areaName:"乌兰察布市",areaId:2071},{areaName:"锡林郭勒盟",areaId:2083,areaIdName:"2083-锡林郭勒盟"},{areaId:2096,areaName:"兴安盟",areaIdName:"2096-兴安盟"}]},{areaId:2103,child:[{areaName:"银川市",areaIdName:"2104-银川市",areaId:2104},{areaIdName:"2111-固原市",areaName:"固原市",areaId:2111},{areaId:2117,areaIdName:"2117-石嘴山市",areaName:"石嘴山市"},{areaId:2121,areaIdName:"2121-吴忠市",areaName:"吴忠市"},{areaId:2126,areaName:"中卫市",areaIdName:"2126-中卫市"}],areaName:"宁夏",areaIdName:"2103-宁夏"},{areaName:"青海",areaId:2130,areaIdName:"2130-青海",child:[{areaId:2131,areaIdName:"2131-西宁市",areaName:"西宁市"},{areaName:"果洛藏族自治州",areaIdName:"2139-果洛藏族自治州",areaId:2139},{areaIdName:"2146-海北藏族自治州",areaName:"海北藏族自治州",areaId:2146},{areaName:"海东地区",areaId:2151,areaIdName:"2151-海东地区"},{areaId:2158,areaName:"海南藏族自治州",areaIdName:"2158-海南藏族自治州"},{areaIdName:"2164-海西蒙古族藏族自治州",areaId:2164,areaName:"海西蒙古族藏族自治州"},{areaIdName:"2170-黄南藏族自治州",areaName:"黄南藏族自治州",areaId:2170},{areaName:"玉树藏族自治州",areaIdName:"2175-玉树藏族自治州",areaId:2175}]},{areaIdName:"2340-山西",child:[{areaName:"太原市",areaIdName:"2341-太原市",areaId:2341},{areaIdName:"2352-长治市",areaName:"长治市",areaId:2352},{areaIdName:"2366-大同市",areaName:"大同市",areaId:2366},{areaIdName:"2378-晋城市",areaName:"晋城市",areaId:2378},{areaIdName:"2385-晋中市",areaName:"晋中市",areaId:2385},{areaIdName:"2397-临汾市",areaId:2397,areaName:"临汾市"},{areaIdName:"2415-吕梁市",areaId:2415,areaName:"吕梁市"},{areaIdName:"2429-朔州市",areaName:"朔州市",areaId:2429},{areaName:"忻州市",areaIdName:"2436-忻州市",areaId:2436},{areaName:"阳泉市",areaIdName:"2451-阳泉市",areaId:2451},{areaIdName:"2457-运城市",areaId:2457,areaName:"运城市"}],areaName:"山西",areaId:2340},{areaName:"陕西",areaId:2471,child:[{areaName:"西安市",areaIdName:"2472-西安市",areaId:2472},{areaIdName:"2486-安康市",areaName:"安康市",areaId:2486},{areaId:2497,areaIdName:"2497-宝鸡市",areaName:"宝鸡市"},{areaName:"汉中市",areaId:2510,areaIdName:"2510-汉中市"},{areaName:"商洛市",areaIdName:"2522-商洛市",areaId:2522},{areaName:"铜川市",areaIdName:"2530-铜川市",areaId:2530},{areaIdName:"2535-渭南市",areaName:"渭南市",areaId:2535},{areaIdName:"2547-咸阳市",areaId:2547,areaName:"咸阳市"},{areaId:2562,areaName:"延安市",areaIdName:"2562-延安市"},{areaId:2576,areaIdName:"2576-榆林市",areaName:"榆林市"}],areaIdName:"2471-陕西"},{areaName:"四川",areaIdName:"2589-四川",child:[{areaIdName:"2590-成都市",areaId:2590,areaName:"成都市"},{areaIdName:"2610-阿坝藏族羌族自治州",areaName:"阿坝藏族羌族自治州",areaId:2610},{areaName:"巴中市",areaIdName:"2624-巴中市",areaId:2624},{areaId:2629,areaIdName:"2629-达州市",areaName:"达州市"},{areaIdName:"2637-德阳市",areaName:"德阳市",areaId:2637},{areaIdName:"2644-甘孜藏族自治州",areaId:2644,areaName:"甘孜藏族自治州"},{areaIdName:"2663-广安市",areaName:"广安市",areaId:2663},{areaName:"广元市",areaIdName:"2669-广元市",areaId:2669},{areaName:"乐山市",areaIdName:"2677-乐山市",areaId:2677},{areaId:2689,areaIdName:"2689-凉山彝族自治州",areaName:"凉山彝族自治州"},{areaId:2707,areaIdName:"2707-泸州市",areaName:"泸州市"},{areaId:2715,areaName:"眉山市",areaIdName:"2715-眉山市"},{areaName:"绵阳市",areaId:2722,areaIdName:"2722-绵阳市"},{areaId:2732,areaIdName:"2732-内江市",areaName:"内江市"},{areaId:2738,areaIdName:"2738-南充市",areaName:"南充市"},{areaIdName:"2748-攀枝花市",areaName:"攀枝花市",areaId:2748},{areaIdName:"2754-遂宁市",areaName:"遂宁市",areaId:2754},{areaIdName:"2760-雅安市",areaName:"雅安市",areaId:2760},{areaName:"宜宾市",areaId:2769,areaIdName:"2769-宜宾市"},{areaName:"资阳市",areaId:2780,areaIdName:"2780-资阳市"},{areaId:2785,areaIdName:"2785-自贡市",areaName:"自贡市"}],areaId:2589},{areaIdName:"2792-西藏",areaId:2792,areaName:"西藏",child:[{areaId:2793,areaName:"拉萨市",areaIdName:"2793-拉萨市"},{areaId:2802,areaName:"阿里地区",areaIdName:"2802-阿里地区"},{areaName:"昌都地区",areaId:2810,areaIdName:"2810-昌都地区"},{areaName:"林芝地区",areaId:2822,areaIdName:"2822-林芝地区"},{areaId:2830,areaIdName:"2830-那曲地区",areaName:"那曲地区"},{areaId:2841,areaName:"日喀则地区",areaIdName:"2841-日喀则地区"},{areaName:"山南地区",areaIdName:"2860-山南地区",areaId:2860}]},{child:[{areaIdName:"2874-乌鲁木齐市",areaId:2874,areaName:"乌鲁木齐市"},{areaIdName:"2883-阿克苏地区",areaName:"阿克苏地区",areaId:2883},{areaName:"阿拉尔市",areaIdName:"2893-阿拉尔市",areaId:2893},{areaId:2894,areaIdName:"2894-阿勒泰地区",areaName:"阿勒泰地区"},{areaName:"巴音郭楞蒙古自治州",areaId:2902,areaIdName:"2902-巴音郭楞蒙古自治州"},{areaIdName:"2912-博尔塔拉蒙古自治州",areaName:"博尔塔拉蒙古自治州",areaId:2912},{areaName:"昌吉回族自治州",areaIdName:"2916-昌吉回族自治州",areaId:2916},{areaName:"哈密地区",areaId:2925,areaIdName:"2925-哈密地区"},{areaName:"和田地区",areaIdName:"2929-和田地区",areaId:2929},{areaId:2938,areaIdName:"2938-喀什地区",areaName:"喀什地区"},{areaId:2951,areaIdName:"2951-克拉玛依市",areaName:"克拉玛依市"},{areaName:"克孜勒苏柯尔克孜自治州",areaId:2956,areaIdName:"2956-克孜勒苏柯尔克孜自治州"},{areaIdName:"2961-石河子市",areaId:2961,areaName:"石河子市"},{areaName:"塔城地区",areaId:2962,areaIdName:"2962-塔城地区"},{areaIdName:"2970-图木舒克市",areaId:2970,areaName:"图木舒克市"},{areaId:2971,areaIdName:"2971-吐鲁番地区",areaName:"吐鲁番地区"},{areaName:"五家渠市",areaId:2975,areaIdName:"2975-五家渠市"},{areaId:2976,areaName:"伊犁哈萨克自治州",areaIdName:"2976-伊犁哈萨克自治州"}],areaName:"新疆",areaIdName:"2873-新疆",areaId:2873},{areaId:2987,areaName:"云南",child:[{areaIdName:"2988-昆明市",areaId:2988,areaName:"昆明市"},{areaName:"保山市",areaId:3003,areaIdName:"3003-保山市"},{areaName:"楚雄彝族自治州",areaId:3009,areaIdName:"3009-楚雄彝族自治州"},{areaName:"大理白族自治州",areaId:3020,areaIdName:"3020-大理白族自治州"},{areaId:3033,areaIdName:"3033-德宏傣族景颇族自治州",areaName:"德宏傣族景颇族自治州"},{areaIdName:"3039-迪庆藏族自治州",areaName:"迪庆藏族自治州",areaId:3039},{areaIdName:"3043-红河哈尼族彝族自治州",areaId:3043,areaName:"红河哈尼族彝族自治州"},{areaName:"丽江市",areaId:3057,areaIdName:"3057-丽江市"},{areaId:3063,areaName:"临沧市",areaIdName:"3063-临沧市"},{areaId:3072,areaIdName:"3072-怒江傈僳族自治州",areaName:"怒江傈僳族自治州"},{areaId:3077,areaIdName:"3077-曲靖市",areaName:"曲靖市"},{areaId:3087,areaIdName:"3087-思茅市",areaName:"思茅市"},{areaName:"文山壮族苗族自治州",areaId:3098,areaIdName:"3098-文山壮族苗族自治州"},{areaIdName:"3107-西双版纳傣族自治州",areaName:"西双版纳傣族自治州",areaId:3107},{areaId:3111,areaName:"玉溪市",areaIdName:"3111-玉溪市"},{areaName:"昭通市",areaId:3121,areaIdName:"3121-昭通市"}],areaIdName:"2987-云南"},{areaId:3133,child:[{areaIdName:"3134-杭州市",areaName:"杭州市",areaId:3134},{areaId:3148,areaName:"湖州市",areaIdName:"3148-湖州市"},{areaId:3154,areaIdName:"3154-嘉兴市",areaName:"嘉兴市"},{areaIdName:"3162-金华市",areaId:3162,areaName:"金华市"},{areaId:3172,areaIdName:"3172-丽水市",areaName:"丽水市"},{areaName:"宁波市",areaIdName:"3182-宁波市",areaId:3182},{areaIdName:"3194-衢州市",areaId:3194,areaName:"衢州市"},{areaId:3201,areaIdName:"3201-绍兴市",areaName:"绍兴市"},{areaId:3208,areaIdName:"3208-台州市",areaName:"台州市"},{areaIdName:"3218-温州市",areaId:3218,areaName:"温州市"},{areaId:3230,areaIdName:"3230-舟山市",areaName:"舟山市"}],areaIdName:"3133-浙江",areaName:"浙江"},{areaId:3235,areaIdName:"3235-香港",areaName:"香港",child:[{areaIdName:"3236-九龙",areaName:"九龙",areaId:3236},{areaIdName:"3237-香港岛",areaName:"香港岛",areaId:3237},{areaId:3238,areaIdName:"3238-新界",areaName:"新界"}]},{areaIdName:"3239-澳门",areaId:3239,areaName:"澳门",child:[{areaIdName:"3240-澳门半岛",areaName:"澳门半岛",areaId:3240},{areaId:3241,areaIdName:"3241-离岛",areaName:"离岛"}]},{child:[{areaName:"台北市",areaId:3243,areaIdName:"3243-台北市"},{areaId:3244,areaIdName:"3244-高雄市",areaName:"高雄市"},{areaId:3245,areaIdName:"3245-高雄县",areaName:"高雄县"},{areaIdName:"3246-花莲县",areaName:"花莲县",areaId:3246},{areaId:3247,areaIdName:"3247-基隆市",areaName:"基隆市"},{areaName:"嘉义市",areaIdName:"3248-嘉义市",areaId:3248},{areaId:3249,areaIdName:"3249-嘉义县",areaName:"嘉义县"},{areaIdName:"3250-金门县",areaName:"金门县",areaId:3250},{areaIdName:"3251-苗栗县",areaId:3251,areaName:"苗栗县"},{areaId:3252,areaName:"南投县",areaIdName:"3252-南投县"},{areaId:3253,areaIdName:"3253-澎湖县",areaName:"澎湖县"},{areaIdName:"3254-屏东县",areaName:"屏东县",areaId:3254},{areaId:3255,areaName:"台北县",areaIdName:"3255-台北县"},{areaIdName:"3256-台东县",areaId:3256,areaName:"台东县"},{areaIdName:"3257-台南市",areaId:3257,areaName:"台南市"},{areaName:"台南县",areaIdName:"3258-台南县",areaId:3258},{areaIdName:"3259-台中市",areaName:"台中市",areaId:3259},{areaName:"台中县",areaId:3260,areaIdName:"3260-台中县"},{areaName:"桃园县",areaIdName:"3261-桃园县",areaId:3261},{areaId:3262,areaName:"新竹市",areaIdName:"3262-新竹市"},{areaIdName:"3263-新竹县",areaId:3263,areaName:"新竹县"},{areaName:"宜兰县",areaIdName:"3264-宜兰县",areaId:3264},{areaId:3265,areaIdName:"3265-云林县",areaName:"云林县"},{areaName:"彰化县",areaId:3266,areaIdName:"3266-彰化县"}],areaIdName:"3242-台湾",areaId:3242,areaName:"台湾"}];
function loadCity(id){
    var cityStr = '<option value="">请选择</option>';
    if (id) {
        for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].areaId==id) {
                for (var k = 0; k < cityList[j].child.length; k++) {
                    cityStr += '<option value="'+cityList[j].child[k].areaId+'">'+cityList[j].child[k].areaName+'</option>';
                }
            }
        }
    }
    return cityStr;
}
$(function() {
    // Path取值
    var detInitConfig = {
        apiPath : $("#apiPath").val()
    };
    var proStr = '<option value="">请选择</option>';
    for (var i = 0; i < cityList.length; i++) {
        proStr += '<option value="'+cityList[i].areaId+'">'+cityList[i].areaName+'</option>'
    }
    $('#province').html(proStr);
    $('#province').change(function(){
        $('#city').html(loadCity($('#province').val()));
    })
    // 试用申请
    $('.heaRclose').click(function(){
        $('.userOntrial').hide(300);
    });
    var str = '';
    $('.f-tryTouses').click(function(event){
        event.preventDefault();
        $('.userOntrial').show(300);
        $.ajax({
            url: detInitConfig.apiPath + '/pc/ven/clickStr',
            type: "post",
            cache: false,
            data: {},
            dataType: "jsonp",
            timeout: 5000,
            success: function (res) {
                // console.log('test',res);
                str = res.data.token;
            },
            error:function(error){
                console.log('error')
            }
        });
    });
    $.ajax({
        url: detInitConfig.apiPath + '/pc/ven/queryProCategory',
        type: "post",
        cache: false,
        data: {
        
        },
        dataType: "jsonp",
        timeout: 5000,
        success: function (res) {
            // 1
            // console.log('test',res);
            var busyTypeStr = '';
            for (var k = 0; k < res.data.list.length; k++) {
                var item = res.data.list[k];
                busyTypeStr += '<label class="label_txt"><input name="businessType" type="checkbox" value="'+item.cateId+'" id-txt="'+item.cateName+'">&nbsp;'+item.cateName+'</label>';
            }
            $('.businessTypeBox').html(busyTypeStr);
            // businessTypeBox
        },
        error:function(error){
            console.log('error')
        }
    });
    var reg = /^1[3,4,5,7,8]\d{9}$/;
    $('.btn_sub').click(function(){
        if (!$('input[name=venName]').val().trim()) {
            alert('请填写公司名称！');
            return;
        }
        if (!$('input[name=userName]').val().trim()) {
            alert('请填写联系人姓名！');
            return;
        }
        if (!reg.test($('input[name=userPhone]').val())) {
            alert('请填写正确的手机号码');
            return;
        }
        if ($('#province').val() && $('#city').val()=='') {
            alert('请补全公司所在地');
            return;
        }
        var businessTypeNameArr = [];
        var businessTypeArr = [];
        if ($('input[name=businessType]:checked').length) {
            if ($('input[name=businessType]:checked').length>3) {
                alert('主营品类不能大于3个');
                return;
            }
            for (var i = 0; i < $('input[name=businessType]:checked').length; i++) {
                businessTypeArr.push($('input[name=businessType]:checked').eq(i).val());
                businessTypeNameArr.push($('input[name=businessType]:checked').eq(i).attr('id-txt'));
            }
        }
        $.ajax({
            url: detInitConfig.apiPath + '/pc/ven/applyVen',
            type: "post",
            cache: false,
            data: {
                token: str,
                businessTypeName: businessTypeNameArr.join(','),
                businessType: businessTypeArr.join(','),
                provinceId: 1,
                cityId: 2,
                userPhone: $('input[name=userPhone]').val(),
                userName: $('input[name=userName]').val(),
                venName: $('input[name=venName]').val(),
                venProperties: $('input[name=venProperties]:checked').val()
            },
            dataType: "jsonp",
            timeout: 5000,
            success: function (res) {
                // 1
                // console.log('test',res);
                alert(res.msg);
                $('.userOntrial').hide(300);
                $('input[name=userPhone]').val('');
                $('input[name=userName]').val('');
                $('input[name=venName]').val('');
                $('input[name=businessType]').each(function(){
                    $(this).prop('checked',false);
                });
            },
            error:function(error){
                console.log('error')
            }
        });
    })
});