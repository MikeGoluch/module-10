$(function(){

var carouselList = $("#carousel ul");
setInterval(changeSlide, 5000);


function moveFirstSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({"marginRight": 0});
}

//FUNCTION THAT BEGINS THE CAROUSEL
function changeSlide() {
    carouselList.animate({"marginRight": -400}, 0, moveFirstSlide);
}

//FUNCTION FOR CHANGING SLIDE LEFT
function previous() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    firstItem.before(lastItem);
    carouselList.css({"marginLeft": 0});

}

//FUNCTION FOR CHANGING SLIDE RIGHT
function next() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({"marginRight": 0});

}

//CREATE BUTTON AND ADD SYMBOLS FOR THEM
var previousButton = $("<button>").addClass("previous");
var previousButtonSymbol = $("<span  class='fas fa-angle-left'></span>");
previousButton.append(previousButtonSymbol);

var nextButton = $("<button>").addClass("next");
var nextButtonSymbol = $("<span  class='fas fa-angle-right'></span>");
nextButton.append(nextButtonSymbol);

//APPEND BUTTONS TO THE DIV
$("#carousel").append(previousButton);
$("#carousel").append(nextButton);

//CHANGING SLIDES LEFT - EVENTS
$(previousButton).click(function() {
    carouselList.stop().animate({"marginLeft": "-=400px"}, 0, previous);
})

//CHANGING SLIDES RIGHT - EVENTS
$(nextButton).click(function() {
    carouselList.stop().animate({"marginRight": "-=400px"}, 0, next);
})


});

