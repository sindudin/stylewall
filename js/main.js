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


$(document).ready(function() {
  $(".room-icon-wrap ul").on('click', 'li', function(e) {
  	//e.preventDefault();
    $(".header-cover").removeClass("opaque");

    var newImage = $(this).index();

    $(".header-cover").eq(newImage).addClass("opaque");

    $(".room-box").removeClass("selected");
    $(this).addClass("selected");
  });  
});

