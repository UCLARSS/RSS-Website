window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
        $('.navbar').fadeOut();
    }
    else {
        $('.navbar').fadeIn();
    }
},false);