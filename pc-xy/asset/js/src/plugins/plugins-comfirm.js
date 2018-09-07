~function($,window,document,undefined){
    var xeConfirms = function(opt){
        this.defaults = {
            str : "",
            alerts : true,
            setfn : $.noop,
            canfn : $.noop,
            bgClick : false
        }
        this.options = $.extend({},this.defaults,opt);
    }

    xeConfirms.prototype = {
        creatEle : function(){
            if($("#modal_tipBox_03").length > 0){
                return;
            }
            if($(".xeConfirm_bg").length > 0){
                $("body").append('<div class="md_modal md_effect_1" id="modal_tipBox_03"></div>');
            }else{
                $("body").append('<div class="md_modal md_effect_1" id="modal_tipBox_03"></div><div class="xeConfirm_bg"></div>');
            };

        },
        xeConfirmsfn : function(){
            var html = '';
            html += '<div class="tipbox_02"><p class="tipbox_02_txt">'+this.options.str+'</p>';
            if(this.options.alerts){
                html += '<p class="tipbox_02_btn"><a class="tipbox_02_set" href="javascript:;">确定</a></p>';
            }else{
                html += '<p class="tipbox_02_btn"><a class="tipbox_02_set" href="javascript:;">确定</a><a class="tipbox_02_cancel" href="javascript:;">取消</a></p></div>';
            }
            return html;
        },
        maskHide : function(){
            $("#modal_tipBox_03").removeClass('md_show');
            $(".xeConfirm_bg").css({
                "height" : $(document).height(),
                "opacity" : 0,
                "visibility" : "hidden"
            });
        },
        bgClick : function(){
            var _this = this;
            if(this.options.bgClick){
                $(".xeConfirm_bg").on("click",function(){
                    _this.maskHide();
                })
            }
        },
        maskShow : function(){
            this.creatEle();

            var html = this.xeConfirmsfn();
            var t=null;
            $("#modal_tipBox_03").html(html);
            if($("#modal_tipBox_03").length > 0){
                clearTimeout(t);
                t = setTimeout(function(){
                    $("#modal_tipBox_03").addClass('md_show');
                    $(".xeConfirm_bg").css({
                        "height" : $(document).height(),
                        "opacity" : .8,
                        "visibility" : "visible"
                    });
                },30);
            }else{
                $("#modal_tipBox_03").addClass('md_show');
                $(".xeConfirm_bg").css({
                    "height" : $(document).height(),
                    "opacity" : .8,
                    "visibility" : "visible"
                });
            };
            this.setBtn();
            this.cancelBtn();
            this.bgClick();

        },
        setBtn : function(){
            var _this = this;
            $('.tipbox_02_set').on('click', function(event) {
                _this.options.setfn && _this.options.setfn();
                _this.maskHide();
            });
        },
        cancelBtn : function (){
            var _this = this;
            $('.tipbox_02_cancel').on('click', function(event) {
                _this.options.canfn && _this.options.canfn();
                _this.maskHide();
            });
        },
        init : function(){
            this.maskShow();
        }
    };
    $.xeConfirm = function(options){
        var xeConfirmed = new xeConfirms(options);
        xeConfirmed.init();
    };
}(jQuery,window,document);
