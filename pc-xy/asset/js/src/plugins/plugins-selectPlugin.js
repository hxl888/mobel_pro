~function($,window,document,undefined){

    var selects = function(element,setting){
        this.el = $(element);
        this.height = this.el.parent().outerHeight();
        this.selectBox = $('<div class="select-box">');
        this.selectText = $('<div class="select-text">');
        this.selectDrop = $('<div class="select-drop">');
        this.init();
    }

    selects.prototype.init = function(){
        this.renderDom();
        this.eventDestory();
        this.bindEvent();
    };

    selects.prototype.renderDom = function(){
        var options = this.el.children();
        var defaultText = this.el.find("option:selected").text();
        var defaultValue = this.el.val();

        if(!!options.length) {
            this.selectText.append('<span>'+defaultText+'</span><i class="select-arrow u-icon">&#xe600;</i>');
            this.selectText.css({"line-height" : (this.height -2)+ "px"})
            var str = '<ul>'

            for(var i=0,len=options.length; i<len; i++){
                var vals = $(options[i]).attr("value");
                var texts = $(options[i]).text();
                if(vals == defaultValue){
                    str += '<li data-value="'+vals+'" class="active">'+texts+'</li>'
                }else{
                    str += '<li data-value="'+vals+'">'+texts+'</li>'
                }
            };
            str += '</ul>'

            this.selectDrop.append(str);
        }

        this.selectBox.append(this.selectText,this.selectDrop);
        this.el.css({
            "opacity" : 0,
            "position" : "absolute",
            "z-index": -1
        });
        this.el.parent().append(this.selectBox);
    };

    selects.prototype.bindEvent = function(){
        var _this = this;

        _this.selectBox.on("mouseenter.boxover",function(ev){
            $(this).addClass('select-box-active');
            _this.selectDrop.stop(true).css({display: "block"}).animate({ opacity: "1" , top : (_this.height - 1)}, 80);

        }).on("mouseleave.boxout",function(ev){
            $(this).removeClass('select-box-active');
            _this.selectDrop.stop(true).animate({ opacity: "0" , top : _this.height/2 }, 80,function(){
                _this.selectDrop.css({display: "none"});
            });
        });

        this.selectDrop.on("click.dropli","li",function(ev){
            var values = $(this).attr("data-value");
            var texts = $(this).text();
            $(this).addClass('active').siblings().removeClass('active');
            _this.el.val(values).trigger('change');
            _this.selectText.find("span").html(texts);
            _this.selectDrop.stop(true).animate({ opacity: "0",top : _this.height/2}, 80,function(){
                _this.selectDrop.css({display: "none"});
            });
        });

        this.el.on("change",function(){
            // 如有回调方法可在SELECT Dom节点上加上data-selfn 传入方法名
            var fns = _this.el.attr("data-selfn");
            var val = _this.el.val();
            fns && window[fns](val)
        })

    };

    selects.prototype.eventDestory = function(){
        this.selectBox.off("mouseenter.boxover");
        this.selectBox.off("mouseleave.boxover");
        this.selectDrop.off("click.dropli");
    }



    $.fn.selectfns = function(opts){
        var defaults = {}

        var settings = $.extend(true, defaults, opts);

        return this.each(function(index, el) {
            var seMethod = new selects(el,settings);
        });
    }

    $(function(){
        $(".selectfns").selectfns();
    })

}(jQuery,window,document);
