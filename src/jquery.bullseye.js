/**
 * Bullseye by Waly Kerkeboom
 */

(function($){
    // Set empty vars here to use globally
    var bullseye = "";

    var settings = {};

    var defaults = {
        top: "",
        right: "",
        bottom: '',
        left: "",
        heading: "",
        content: "",
        orientation: "top",
// Toggling onHoverMarkAsRead does not work yet
//        onHoverMarkAsRead: true,
        color: "#ee2200"
    }

    var methods = {
        $selector: null,

        // Builds bullseye, applies neccessary styles to parent and initiates mousehandlers and markAsRead functions
        init: function($selector) {
            this.$selector = $selector;
            this.constructBullet();

            $selector.css("position", "relative");

            $selector.prepend(bullseye);

            $('.jqBullseye').on('mouseenter.bullseye', methods.tooltipMouseEnterHandler);
            $('.jqBullseye').on('mouseleave.bullseye', methods.tooltipMouseLeaveHandler);

            $('.jqBullseye').on('mouseenter.bullseye', methods.markAsRead);

        },
        // Takes settings values and uses them to construct bullet
        constructBullet: function() {

            // Set a var that checks if settings.color is a valid hex value. Returns true or false.
            var validHexColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(settings.color);

            if(validHexColor == true) {
                var color = settings.color + ";";
            } else {
                var color = defaults.color + ";";
            }

            // Get positions
            var posTop = "top:" + settings.top + "px;";
            var posRight = "right:" + settings.right + "px;";
            var posBottom = "bottom:" + settings.bottom + "px;";
            var posLeft = "left:" + settings.left + "px;";

            // Set positions into a single string
            var pos = posTop + posRight + posBottom + posLeft;

            // get orientation
            var orientation = settings.orientation;
            var orientationClass = "defaultOrientation";

            // Set orientation to top if user-entered parameter doesn't mat top, right, bottom or left
            if(orientation != "top" && orientation != "bottom" && orientation != "left" && orientation != "right") {
                orientation = defaults.orientation;
            }

            // check orientation and determine the orientationClass, which determines what direction the text bubble will appear in
            switch(orientation) {
                case "top":
                    orientationClass = "defaultOrientation"
                    break;
                case "bottom":
                    orientationClass = "bottomOrientation";
                    break;
                case "left":
                    orientationClass = "leftOrientation";
                    break;
                case "right":
                    orientationClass = "rightOrientation";
                    break;
                default:
                    orientationClass = "defaultOrientation";
            }

            // Get tooltip content
            var headContent = settings.heading;
            var content = settings.content;
            if(headContent != "") {
                headContent = "<h3>" + settings.heading + "</h3>";
            }
            if(content != "") {
                content = "<p>" + settings.content + "</p>";
            }

            bullseye = "<div class='jqBullseye' style='" + pos +"'>" +
                "<span class='bullseyeTooltip " + orientationClass +"'>"+ headContent + content +"</span>" +
                "<span class='bullseyeBody' style='background:" + color +"'></span>" +
                "<span class='bullseyePulse' style='border-color:" + color + "'></span>" +
                "</div>";
        },
        // Tooltip mouseeventhandlers
        tooltipMouseEnterHandler: function() {
            $(this).find('.bullseyeTooltip').fadeIn();
        },
        tooltipMouseLeaveHandler: function() {
            $(this).find('.bullseyeTooltip').fadeOut();
        },
        // MarkAsRead function removes animation and applies opacity to bullseye to indicate a "read" state
        markAsRead: function() {
                $(this).find('.bullseyePulse').remove();
                $(this).find('.bullseyeBody').css('opacity', '.4');
        }

    }
    $.fn.bullseye = function(options) {
        settings = defaults;
        if(options) {
            settings = $.extend(true, {}, defaults, options)
        }
        // Define var self = this to get past scope issues
        var self = this;
        return this.each(function(){
            // Replace "self" for "this" and you'll get an error. A scope issue, I assume, so I made the var self above to get around it.
            methods.init(self);
        });
    }
})(jQuery);