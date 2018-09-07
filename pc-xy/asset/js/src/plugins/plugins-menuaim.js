(function($) {

    $.fn.menuAim = function(opts) {
        // Initialize menu-aim for all elements in jQuery collection
        this.each(function() {
            init.call(this, opts);
        });

        return this;
    };

    function init(opts) {
        var $menu = $(this),
            activeRow = null,
            mouseLocs = [],
            lastDelayLoc = null,
            timeoutId = null,
            options = $.extend({
                rowSelector: "> li",
                submenuSelector: "*",
                submenuDirection: "right",
                tolerance: 75,  // bigger = more forgivey when entering submenu
                enter: $.noop,
                exit: $.noop,
                activate: $.noop,
                deactivate: $.noop,
                exitMenu: $.noop
            }, opts);

        var MOUSE_LOCS_TRACKED = 3,  // number of past mouse locations to track
            DELAY = 300;  // ms delay when user appears to be entering submenu

        /**
         * Keep track of the last few locations of the mouse.
         */
        var mousemoveDocument = function(e) {
                mouseLocs.push({x: e.pageX, y: e.pageY});

                if (mouseLocs.length > MOUSE_LOCS_TRACKED) {
                    mouseLocs.shift();
                }
            };

        /**
         * Cancel possible row activations when leaving the menu entirely
         */
        var mouseleaveMenu = function() {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                // If exitMenu is supplied and returns true, deactivate the
                // currently active row on menu exit.
                if (options.exitMenu(this)) {
                    if (activeRow) {
                        options.deactivate(activeRow);
                    }

                    activeRow = null;
                }
            };

        /**
         * Trigger a possible row activation whenever entering a new row.
         */
        var mouseenterRow = function() {
                if (timeoutId) {
                    // Cancel any previous activation delays
                    clearTimeout(timeoutId);
                }

                options.enter(this);
                possiblyActivate(this);
            },
            mouseleaveRow = function() {
                options.exit(this);
            };

        /*
         * Immediately activate a row if the user clicks on it.
         */
        var clickRow = function() {
                activate(this);
            };

        /**
         * Activate a menu row.
         */
        var activate = function(row) {
                if (row == activeRow) {
                    return;
                }

                if (activeRow) {
                    options.deactivate(activeRow);
                }

                options.activate(row);
                activeRow = row;
            };

        var possiblyActivate = function(row) {
                var delay = activationDelay();

                if (delay) {
                    timeoutId = setTimeout(function() {
                        possiblyActivate(row);
                    }, delay);
                } else {
                    activate(row);
                }
            };
        var activationDelay = function() {
                if (!activeRow || !$(activeRow).is(options.submenuSelector)) {

                    return 0;
                }

                var offset = $menu.offset(),
                    upperLeft = {
                        x: offset.left,
                        y: offset.top - options.tolerance
                    },
                    upperRight = {
                        x: offset.left + $menu.outerWidth(),
                        y: upperLeft.y
                    },
                    lowerLeft = {
                        x: offset.left,
                        y: offset.top + $menu.outerHeight() + options.tolerance
                    },
                    lowerRight = {
                        x: offset.left + $menu.outerWidth(),
                        y: lowerLeft.y
                    },
                    loc = mouseLocs[mouseLocs.length - 1],
                    prevLoc = mouseLocs[0];

                if (!loc) {
                    return 0;
                }

                if (!prevLoc) {
                    prevLoc = loc;
                }

                if (prevLoc.x < offset.left || prevLoc.x > lowerRight.x ||
                    prevLoc.y < offset.top || prevLoc.y > lowerRight.y) {
                    // If the previous mouse location was outside of the entire
                    // menu's bounds, immediately activate.
                    return 0;
                }

                if (lastDelayLoc &&
                        loc.x == lastDelayLoc.x && loc.y == lastDelayLoc.y) {
                    // If the mouse hasn't moved since the last time we checked
                    // for activation status, immediately activate.
                    return 0;
                }

                function slope(a, b) {
                    return (b.y - a.y) / (b.x - a.x);
                };

                var decreasingCorner = upperRight,
                    increasingCorner = lowerRight;

                if (options.submenuDirection == "left") {
                    decreasingCorner = lowerLeft;
                    increasingCorner = upperLeft;
                } else if (options.submenuDirection == "below") {
                    decreasingCorner = lowerRight;
                    increasingCorner = lowerLeft;
                } else if (options.submenuDirection == "above") {
                    decreasingCorner = upperLeft;
                    increasingCorner = upperRight;
                }

                var decreasingSlope = slope(loc, decreasingCorner),
                    increasingSlope = slope(loc, increasingCorner),
                    prevDecreasingSlope = slope(prevLoc, decreasingCorner),
                    prevIncreasingSlope = slope(prevLoc, increasingCorner);

                if (decreasingSlope < prevDecreasingSlope &&
                        increasingSlope > prevIncreasingSlope) {

                    lastDelayLoc = loc;
                    return DELAY;
                }

                lastDelayLoc = null;
                return 0;
            };

        /**
         * Hook up initial menu events
         */
        $menu
            .mouseleave(mouseleaveMenu)
            .find(options.rowSelector)
                .mouseenter(mouseenterRow)
                .mouseleave(mouseleaveRow)
                .click(clickRow);

        $(document).mousemove(mousemoveDocument);

    };
})(jQuery);

~function($){
    var timer = null,
        obj = $(".xeMenu"),
        listUl = obj.find('.menuUl'),
        subMenu = obj.find('#menuSub_cons');
    var nowEvent = null;
    listUl.menuAim({
        activate : function(obj){
            _this = $(obj);
            _index = $(obj).index();
            subMenu.children().eq(_index).show().siblings().hide();
            listUl.find('li').removeClass('active');
            _this.addClass('active');
            nowEvent = obj;
            var st = $(window).scrollTop();
            var xeMenuSt = $(".xeMenu").offset().top;
            if(st>xeMenuSt){
                subMenu.stop(true,true).animate({"top":st - xeMenuSt},100)
            }else{
                subMenu.stop(true,true).animate({"top":0},100)
            }
        },
        deactivate : function(obj){
            listUl.find('li').removeClass('active');
        },
        exitMenu : function(){
            return true;
        }
    });

    obj.mouseover(function(){
        clearTimeout(timer);
        subMenu.show(true).stop(true,true).animate({
            left:219,
            opacity:1
        }, 100);
        $(nowEvent).addClass('active');
    });

    obj.mouseleave(function(event) {
        subMenu.css({"top":0});
        timer = setTimeout(function(){
            subMenu.stop(true,true).animate({
                left:240,
                opacity:0
            }, 100,function(){
                subMenu.hide();
            });
            listUl.find('li').removeClass('active')
        },30)
    });

    if($("#homepage").length == 0){
    	var t= null;
    	$("#vg-menu").mouseover(function(ev) {
    		ev.stopPropagation();
    		/* Act on the event */
    		var _this = $(this).find(".xeMenu");
    		clearTimeout(t)
            _this.show().stop(true,false).animate({
                top: 40,
                opacity: 1
            }, 100)

    	});
    	$("#vg-menu").mouseout(function(ev) {
    		ev.stopPropagation();
    		var _this = $(this).find(".xeMenu");
    		t = setTimeout(function(){
                _this.stop(true,false).animate({
                    top: 60,
                    opacity: 0
                }, 100,function(){
                    _this.hide();
                })
            },30)

    	});
    };

}(jQuery);
