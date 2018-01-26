$(document).ready( function() {
            /* 4-1. transparent */
            $(".thumbnail").css("opacity", "0.5");
            /* 4-2. mouseenter opaque */
            $(".thumbnail").on("mouseenter", function() {
                $(this).css("opacity", "1");
            });
            /* 4-3. mouseleave transparent */
            $(".thumbnail").on("mouseleave", function() {
                $(this).css("opacity", "0.5");
            });
            /* 4-4. click */
            $(".thumbnail").on("click", function() {
                /* 4-4-1&2. change photo & fade */
                var srcRelative = $(this).attr("src");
                $("#main img").attr("src", srcRelative).css("display", "none").fadeIn();
                /* 4-4-3. caption*/
                var captionRelative = $(this).attr("caption");
                $("#caption").text(captionRelative);
                /* 4-4-4. selected*/
                $(".selected").removeClass("selected");
                $(this).addClass("selected");
            })
       });