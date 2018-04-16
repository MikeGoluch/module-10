$(function(){
	console.log("DOM loaded - you can have fun");
});
//alternative declaration

var ignored = ["first", "second", "fourth"];

console.log(ignored);
var arrayId = $("span").map(function() {
    return this.id;
}).get().join();

var arrayIdString = arrayId.split(",");
console.log(arrayIdString);

console.log(arrayId);

function diffArray(array1, array2) {
    var concatArray = array1.concat(array2);
    return concatArray.filter(function(value, index, array) {
        if(array.slice(index+1).indexOf(value) === -1 && array.slice(0, index).indexOf(value) === -1) {
            return value;
        }
    });
}
console.log(diffArray(ignored, arrayIdString));
var arrayIdStringWithoutArrayIgnoredId = diffArray(ignored, arrayIdString);

console.log(arrayIdString === arrayIdStringWithoutArrayIgnoredId);
var span = $("span");
span.each(function(index, element) {
    if(arrayIdString === arrayIdStringWithoutArrayIgnoredId) {
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
