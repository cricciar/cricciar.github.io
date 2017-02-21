//begin


var images = ["http://gdurl.com/CXsR","http://gdurl.com/ii0x", "http://gdurl.com/o0xM"];

$(".header").click(function() {
    var newImg = images[Math.floor(Math.random()*images.length)];
    var newBg = "url(" + newImg + ")";
$("html").css("background-image",newBg);
});



// Smooth scroll for in page links

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

