~function($,window,document,undefined){

    var xetooltips = function(opts){
        this.defaults = {
            el : null
        }
        this.setting = $.extend(true,this.defaults,opts);

    }
    xetooltips.prototype.init = function(){
        this.bindevent();
    };
    xetooltips.prototype.htmlstr = function(arr,ts){
        var source = '<div class="vm-tps" id="vm-toolbox-'+ts+'">'
                    + '<div class="vm-tarrow"></div>'
                    + '<div class="vm-tarrow-ms"></div>'
                    + '<div class="vm-tcons">'
                    +    '<div class="vm-text">'
                    +        '<%for(var i=0;i<list.length;i++) {%>'
                    +        '<p><%=list[i]%></p>'
                    +        '<%}%>'
                    +    '</div>'
                    + '</div>'
                    + '</div>';
        var render = template.compile(source);
        var html = render({
            list : arr,
            ts : ts
        });
        return html;
    }
    xetooltips.prototype.bindevent = function(){
        var _this = this;
        var ts = null;
        if(this.setting.el){
            $(this.setting.el).on("mouseenter.tooltips",function(){
                $(".vm-tps").remove();
                ts = (Math.random() + '').substring(2,12);
                var arr = $(this).attr("data-tooltext") ? $(this).attr("data-tooltext").split("|") :['暂无信息']
                var htmls = _this.htmlstr(arr,ts);
                $("body").append(htmls);
                $("#vm-toolbox-"+ts+"").width() > 190 ? $("#vm-toolbox-"+ts+"").width(190) : '';
                $("#vm-toolbox-"+ts+"").css({
                    top : $(this).offset().top + $(this).outerHeight() + 10,
                    left : $(this).offset().left + ($(this).outerWidth()/2) - $("#vm-toolbox-"+ts+"").outerWidth()/2
                }).show();

                $("#vm-toolbox-"+ts+"").stop(true,false).animate({
                    top : $(this).offset().top + $(this).outerHeight() + 2,
                    opacity:1
                }, 150);

            }).on("mouseleave.tooltipsout",function(){
                $("#vm-toolbox-"+ts+"").stop(true,false).animate({
                    top : $(this).offset().top + $(this).outerHeight() + 10,
                    opacity: 0
                }, 50,function(){
                    $("#vm-toolbox-"+ts+"").remove();
                });

            })
        }
    }

    $.fn.xetooltips = function(){
        return this.each(function(index, el) {
            var tps = new xetooltips({el:el});
            tps.init();
        });
    }

    $(function(){
        $('[data-tooltext]').xetooltips();
    })

}(jQuery,window,document);
