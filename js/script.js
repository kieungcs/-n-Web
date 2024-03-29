$('.drop-pr').click(function(){
   
    $('.nav-prtab').owlCarousel({
        loop:true,
        margin:24,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    var navpr=$('.item').width();
    $('.primg').height(navpr);
    
    var npri=navpr + 110;
    $('.item').height(npri);
})

$(document).ready(function($) 
{
    var heroSlider = $('.hero_carosel');

    heroSlider.on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace) {
            return;
        }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    })
    .owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: true,
    autoplayTimeout:5000,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoHeight: false,
    mouseDrag: true,
    autoplayHoverPause: true,
    items: 1,
    navText: [
        "<i class=' owl-direction'><</i>",
        "<i class='owl-direction'>></i>"
    ]
});

$(".owl-item.active .tag").addClass('animated fadeInUp delay-1');
$(".owl-item.active h2").addClass('animated fadeInUp delay-2');
$(".owl-item.active .carsl_cnt").addClass('animated fadeInUp delay-3');
$(".owl-item.active .carsl_btn").addClass('animated fadeInUp delay-4');

$(".hero_carosel").on('change.owl.carousel', function(event) {

    var item = event.item.index - 2;
    $('.tag').removeClass('animated fadeInUp delay-1');
    $('h2').removeClass('animated fadeInUp delay-2');
    $('.carsl_cnt').removeClass('animated fadeInUp delay-3');
    $('.carsl_btn').removeClass('animated fadeInUp delay-4');
    $('.owl-item').not('.cloned').eq(item).find('.tag').addClass('animated fadeInUp delay-1');
    $('.owl-item').not('.cloned').eq(item).find('h2').addClass('animated fadeInUp delay-2');
    $('.owl-item').not('.cloned').eq(item).find('.carsl_cnt').addClass('animated fadeInUp delay-3');
    $('.owl-item').not('.cloned').eq(item).find('.carsl_btn').addClass('animated fadeInUp delay-4');
});
    $('.cat').owlCarousel({
        loop:true,
        margin:24,
        responsiveClass:true,
        autoplay: true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:3,
                nav:true
            },
            600:{
                items:4,
                nav:false
            },
            1000:{
                items:7,
                loop:false
            }
        }
    })

    $('.prtab').owlCarousel({
        loop:true,
        margin:24,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('.flash-item').owlCarousel({
        loop:true,
        margin:24,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('.blog-slide').owlCarousel({
        loop:true,
        margin:24,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $('.brand-slider').owlCarousel({
        loop:true,
        margin:50,
        nav:false,
        dots:false,
        center:true,
        autoplay:true,
        autoplayTimeout:1000,
        responsive:{
            0:{
                items: 4
            },
            600:{
                items: 6
            },
            1000:{
                items: 8
            }
        }
    })

    $('.similar-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })

    var catw=$('.cat-img').width();
    $('.cat-img').height(catw);

    var aboutw=$('.about-img').width();
    $('.about-img').height(aboutw/1.44);

    var prw=$('.pr-item').width();
    $('.pr-img').height(prw);

    var cbw=$('.cms-banner-img').width();
    $('.cms-banner-img').height(cbw*1.25)

    var blogw=$('.blog-img').width();
    $('.blog-img').height(blogw/1.52);

    var similarw=$('.similar-img').width();
    $('.similar-img').height(similarw/1.52);

    var pri=prw + 110;
    $('.pr-item').height(pri);

    var videoi=$('.video-img').width();
    $('.video-img').height(videoi/2.44)

    var sprw=$('.shop-pr').width();
    $('.spr-img').height(sprw);

    var spri=sprw + 110;
    $('.shop-pr').height(spri);
});
document.addEventListener('click',function(e){
    // Hamburger menu
    if(e.target.classList.contains('hamburger-toggle')){
      e.target.children[0].classList.toggle('active');
    }
  })  

$(window).resize(function(){
    var catw=$('.cat-img').width();
    $('.cat-img').height(catw);

    var aboutw=$('.about-img').width();
    $('.about-img').height(aboutw/1.44);

    var prw=$('.pr-item').width();
    $('.pr-img').height(prw);

    var cbw=$('.cms-banner-img').width();
    $('.cms-banner-img').height(cbw*1.25)

    var blogw=$('.blog-img').width();
    $('.blog-img').height(blogw/1.52);

    var similarw=$('.similar-img').width();
    $('.similar-img').height(similarw/1.52);

    var pri=prw + 110;
    $('.pr-item').height(pri);

    var videoi=$('.video-img').width();
    $('.video-img').height(videoi/2.44)
})

$('#btn-nav').click(function(){
    $('#menu').toggle('slide')
})
$('#btn-close-nav').click(function(){
    $('#menu').toggle('slide')
})

window.addEventListener("resize", function() {
    "use strict"; window.location.reload(); 
  });

  function makeTimer() {

	
    var endTime = new Date("30 april 2024 23:59:59 GMT+07:00");			
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days").html(days + "<span>Ngày</span>");
        $("#hours").html(hours + "<span>Giờ</span>");
        $("#minutes").html(minutes + "<span>Phút</span>");
        $("#seconds").html(seconds + "<span>Giây</span>");		

}

setInterval(function() { makeTimer(); }, 1000);


