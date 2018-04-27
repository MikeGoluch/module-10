$(function(){

var carouselList = $("#carousel ul");
// setInterval(changeSlide, 1000);


function moveFirstSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({"marginRight": 0});
}

function changeSlide() {
    carouselList.animate({"marginRight": -400}, 5000, moveFirstSlide);
}

var previousButton = $("<button>").addClass("previous");
var previousButtonSymbol = $("<span  class='fas fa-angle-left' aria-hidden='true' aria-hidden='true'></span>");
previousButton.append(previousButtonSymbol);
var nextButton = $("<button>").addClass("next");
var nextButtonSymbol = $("<span  class='fas fa-angle-right' aria-hidden='true' aria-hidden='true'></span>");
nextButton.append(nextButtonSymbol);
$("#carousel").append(previousButton);
$("#carousel").append(nextButton);

$(previousButton).click(function() {
    carouselList.animate({"marginRight": "+=400px"});
    moveFirstSlide();
})

$(nextButton).click(function() {
    carouselList.animate({"marginRight": "-=400px"});
    moveFirstSlide();
})


});

