$(document).ready(function() {
    $('.m-menu').on('click', function() {
        $(this).toggleClass('menu-close');
    });
});

$(document).ready(function() {
    $('a[href*=\\#]:not([href=\\#])').bind('click', function(e) {
        e.preventDefault();

        var target = $(this).attr("href");
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function() {
            location.hash = target;
        });

        $('.menu li.active').removeClass('active');
        $(this).parent().addClass('active');
        $('.m-menu').removeClass('menu-close');

        return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    if ($(window).scrollTop() >= 300) {
        $('nav').addClass('fixed-header');
    } else {
        $('nav').removeClass('fixed-header');
    }
    $('header,section','#homePage').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
        	var id = $(this).attr('id');
            $('.menu li.active').removeClass('active');
            $('.menu li').eq(i).addClass('active');
        }
    });
}).scroll();


// $(document).ready(function() {
//   $(".room-icon-wrap ul").on('click', 'li', function(e) {
//   	//e.preventDefault();
//     $(".header-cover").removeClass("opaque");

//     var newImage = $(this).index();

//     $(".header-cover").eq(newImage).addClass("opaque");

//     $(".room-box").removeClass("selected");
//     $(this).addClass("selected");
//   });  
// });


$(document).ready(function(){
    
    var owl  = $('.owl-carousel');
        owl.owlCarousel({
            items: 1,
            loop: true,
            autoplayHoverPause: true,
            smartSpeed:800,
            dots: true,
            autoplay: true,
            autoWidth: true,
        nav    : false,
             
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1,
                },
                992: {
                    items: 1,
                }
            }
    });

    owl.on('changed.owl.carousel', function(event) {
        var count = event.page.index;
        $(".room-box").removeClass("selected");
        $(".room-icon-wrap ul li:eq("+ count +" )").addClass('selected')
    });
    
});