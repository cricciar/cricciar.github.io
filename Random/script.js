//begin

var images = ["http://cricciar.github.io/Random/img/Image1.png","http://cricciar.github.io/Random/img/Image2.png","http://cricciar.github.io/Random/img/Image3.png", "http://cricciar.github.io/Random/img/Image4.png", "http://cricciar.github.io/Random/img/Image5.png"];

$("button").click(function() {
    var newImg = images[Math.floor(Math.random()*images.length)];
    var newBg = "url(" + newImg + ")";
$("html").css("background-image",newBg);
});

//circles

function getRandomColor() {
    var colours = ["#00c0f1", "#add036", "#ec2426", "#ffc116"];
    return colours[Math.floor(Math.random() * 4)]
}

var maxDiam = 50;
var circleNum = 200;
var container = $("#container")
var containerWidth = container.width();
var containerHeight = container.height();

$(document).ready(function() {
    for (var i = 0; i < circleNum; i++) {
        var newCircle = $("<div />")
        var d = Math.floor(Math.random() * maxDiam);
        newCircle.addClass("circle");

        newCircle.css({
            width: d,
            height: d,
            left: Math.random() * Math.max(containerWidth - d, 0),
            top: Math.random() * Math.max(containerHeight - d, 0),
            backgroundColor: getRandomColor()
        });
        container.append(newCircle);
    }
});