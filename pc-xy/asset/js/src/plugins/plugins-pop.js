~function($,window,document,undefined){

    var pop = function(element,setting){
        this.$element = $(element);
        this.$cls = $("." + this.$element.attr("data-popnewfor"))
        this.init();
    }

    pop.prototype = {
        init : function(){
            this.addStyle();
            this.bind();
        },
        addStyle : function(){
            var width = this.$cls.outerWidth();
            var height = this.$cls.outerHeight();
            this.$cls.css({
                marginTop : - (height/2),
                marginLeft : - (width/2)
            });
        },
        bind : function(){
            var _this = this;

            $(document).on("click.abc",function(e){
                var $target = $(e.target);
                var flag = true;
                if($target.attr('data-popnewfor')){
                    e.preventDefault();
                    $("." + $target.attr('data-popnewfor')).addClass("md_show");
                    if(!$(".xeConfirm_bg").length > 0){
                        $("body").append('<div class="xeConfirm_bg"></div>');
                    }
                    $(".xeConfirm_bg").css({
                        "height" : $(document).height(),
                        "opacity" : .8,
                        "visibility" : "visible"
                    });
                }
            });

            $(document).on("click",".m-pop-close,.m-pop-btns .btn-empty",function(ev){
                ev.preventDefault();
                _this.$cls.removeClass("md_show");
                $(".xeConfirm_bg").css({
                    "height" : $(document).height(),
                    "opacity" : 0,
                    "visibility" : "hidden"
                });
            })
        },
        unbind : function(){
            $(document).off("click.abc")
        }
    }

    $.fn.popfs = function(opts){
        var defaults = {};
        var settings = $.extend(true, defaults, opts);

        return this.each(function(index,el){
            var pops = new pop(el,settings);
        });
    }

    $(function(){
        $('[data-popnewfor]').popfs();
    })

}(jQuery,window,document);
