$(function(){
console.log("DOM loaded - you can have fun");
//alternative declaration

var ignored = ["first", "second", "fourth"];

//alternative declaration

var span = $("span");
span.each(function(index, element) {
    var spanId = $(this).attr("id");
    var stringIdArray = spanId.split(",");
    console.log(stringIdArray);
        for(var i = 0; i < stringIdArray.length; i++) {
            for(var j = 0; j < ignored.length; j++) {
                if(stringIdArray[i] === ignored[j]) {
                    console.log(stringIdArray[i] === ignored[j]);
                    $(element).css("color", "red");
                }
            }
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

