var random_images = ["image1.png", "Image2.png", "Image3.png", "Image4.png", "Image5.png"];



//$(".images").html("images"[(Math.random()* random_images.length)]);
console.log("its working")

//function randomImg() {
   // var rnd = Math.floor(Math.random() * myImages1.length);
    //console.log("hello, its working")
    //if ( rnd == 0) {
      //  rnd= 1;
    //}
//}

//getRandomImage(random_images);</script>

//function getRandomImage() {
//var random_images = ["image1.png", "Image2.png", "Image3.png", "Image4.png", "Image5.png"];
//}
//var random_images = images[Math.floor(Math.random()*images.length)];
$(".toggle").click(function() {
    
var randomimg = random_images[Math.floor(Math.random()*random_images.length)];
console.log("hi");


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

//$("div").html(random_images);
 
/*return image;
}
 
function displayRandomImage() {
var htmlImage = document.getElementById("randomImage");
htmlImage.src = getRandomImage();
}
displayRandomImage();*/