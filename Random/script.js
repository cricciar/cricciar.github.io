var random_images = ["Image1.png", "Image2.png", "Image3.png", "Image4.png", "Image5.png"];

$(".toggle").click(function() {
    
var randomimg = random_images[Math.floor(Math.random()*random_images.length)];


$(".images").html("<img src='img/"+ randomimg + "'>")
$(".images").html("<img src='img/"+ randomimg + "'>")
$(".images").html("<img src='img/"+ randomimg + "'>")
$(".images").html("<img src='img/"+ randomimg + "'>")
$(".images").html("<img src='img/"+ randomimg + "'>")
$(".images").html("<img src='img/"+ randomimg + "'>")
$(".images").html("<img src='img/"+ randomimg + "'>")
$(".images").html("<img src='img/"+ randomimg + "'>")
$(".images").html("<img src='img/"+ randomimg + "'>")


});
