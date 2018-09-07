$(function(){
  var imgPath=$('#imgPath').val();
  var YPapiPath=$('#apiPath').val();
  var misPath = $('#basePath').val();

  $(".brandStreet").each(function(index,el){

      var id = $(el).attr("id").split("-")[1];
      var _this = $(this);

      $.ajax({
        url:YPapiPath+'cms/dataInfo/floorDate.shtml',
        type: 'get',
        dataType: 'jsonp',
        data : {
          menuCode : id
        },
        success : function(data){
          var BranRQ=data.floorDateInfo.content[1];
          var RranRQTeble='';
          for(var i=0;i<BranRQ.length;i++){
            RranRQTeble+='<div class="brand_list">'
            RranRQTeble+=    '<div class="brand_pic">'
            RranRQTeble+=        '<a href="'+$("#mainUrl").val()+'store/'+BranRQ[i].storeId+'.shtml"><img class="img_filter lazy" src="'+imgPath+BranRQ[i].picUrl+'" data-original="../images/brand_pic/bp_01.jpg" width="385" height="222" alt=""></a>'
            RranRQTeble+=      '</div>'
            RranRQTeble+=      '<div class="brand_msg">'
            RranRQTeble+=                 '<div class="brand_name">'
            RranRQTeble+=                      '<a href="'+$("#mainUrl").val()+'store/'+BranRQ[i].storeId+'.shtml" class="brand_a01" target="_blank">进入企业网站</a>'
            if (!imgPath+BranRQ[i].vendorLogUrl=='') {
              RranRQTeble+=                      '<a href="'+$("#mainUrl").val()+'store/'+BranRQ[i].storeId+'.shtml" class="brand_a02" target="_blank"><img class="img_filter lazy" src="'+$("#basePath").val()+'/images/lazyPic.png" data-original="'+imgPath+BranRQ[i].vendorLogUrl+'" width="150" height="100" alt="众品集团"></a>'
            }else{
              RranRQTeble+=                      '<a href="'+$("#mainUrl").val()+'store/'+BranRQ[i].storeId+'.shtml" class="brand_a02" target="_blank"><img class="img_filter lazy" src="'+$("#basePath").val()+'/images/lazyPic.png" data-original="'+$("#basePath").val()+'/images/zplogo.jpg" width="150" height="100" alt="众品集团"></a>'
            }
            RranRQTeble+=                  '</div>'
            RranRQTeble+=        '<div class="brand_adr">'
            RranRQTeble+=          '<p><a href="##">'+BranRQ[i].vendorName+'</a></p>'
            RranRQTeble+=          '<p class="clearfix">'
            RranRQTeble+=            '<span>经营范围：'+BranRQ[i].vendorBusiness+'</span> | <span>所在地区：'+BranRQ[i].vendorArea+'</span>'
            RranRQTeble+=          '</p>'
            RranRQTeble+=        '</div>'
            RranRQTeble+=      '</div>'
            RranRQTeble+= '</div>'
         }
         $("#brandStreet-" + id).find(".brand_con").html(RranRQTeble);
         if ($("#brandStreet-" + id).find(".brand_con").length==0) {
          $(this).remove();
         };
         _this.find("img.lazy").lazyLoadIndex();
         $(".brand_list").hover(function(){
              $(this).find(".brand_a01").show();
              $(this).find(".brand_a02").hide();
              // eventLazy(obj,brand_a02);
        },function(event) {
              /* Act on the event */
              $(this).find(".brand_a01").hide();
              $(this).find(".brand_a02").show();
           });
        },
        error : function(data){
          
        }
      });

  });

  
})