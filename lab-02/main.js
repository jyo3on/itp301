// 2
$(document).ready( function() {
    // 3
    $("div").css("backgroundColor", "orange");
    // 4
    $("div.highlight").css({
        "backgroundColor" : "yellow",
        "color" : "blue",
        "fontWeight" : "bold"
    });
    // 6
    $(".change-pic").click( function() {
        $("img").attr("src", "images/istanbul.jpg");
    });
    // 7
    $(".change-title").click( function(){
       $("h1").text("I love U"); 
    });
    // 9
    $(".add-border").click( function(){
        $("h1").addClass("redborder");
    });
    // 10
    $(".remove-border").click( function(){
        $("h1").removeClass("redborder");
    });
});