//begin

var random_images = ["Image1.png", "Image2.png", "Image3.png", "Image4.png", "Image5.png"];

//randomize images

$(".toggle").click(function() {
    
var randomimg = random_images[Math.floor(Math.random()*random_images.length)];


$(".images").html("<img src='img/"+ randomimg + "'>")
$(".images").html("<img src='img/"+ randomimg + "'>")
$(".images").html("<img src='img/"+ randomimg + "'>")
$(".images").html("<img src='img/"+ randomimg + "'>")
$(".images").html("<img src='img/"+ randomimg + "'>")


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