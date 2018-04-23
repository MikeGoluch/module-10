$(function(){
console.log("DOM loaded - you can have fun");
//alternative declaration

var ignored = ["first", "second", "fourth"];

//alternative declaration

var span = $("span");
span.each(function(index, element) {
    var spanId = $(this).attr("id");
    console.log("idSpanName", spanId);
    var indexOfId = ignored.indexOf(spanId);
    console.log("indexOfId", indexOfId);
    if (indexOfId === -1) {
        $(element).css("color", "red");
    }
});

// $("span").css("color", "red");

var paragraphs = $("p:odd");
paragraphs.each(function(index, element) {
    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
    $(element).append(button);
});

$("button").click(function() {
    alert($(this).attr("data-tmp"));
})
});




