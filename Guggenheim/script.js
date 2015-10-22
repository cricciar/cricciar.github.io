//begin

var images = ["http://www.bustler.net/images/news2/james_turrell_guggenheim_01.jpg","http://nowherelimited.com/images/james_turrell-guggenheim_nyc-rotunda_rendering-3-large-2013.jpg","http://www.markorton.com/wp-content/uploads/2012/04/Kiss-12-1979-Chamberlain-web.jpg", "https://jcinnamonphotography.files.wordpress.com/2011/10/dsc_5332.jpg", "http://annex.guggenheim.org/collections/media/902/76.2553.42_ph_web.jpg"];

$("button").click(function() {
    var newImg = images[Math.floor(Math.random()*images.length)];
    var newBg = "url(" + newImg + ")";
$("html").css("background-image",newBg);
});

