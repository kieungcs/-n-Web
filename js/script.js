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

    $('.pr-item').owlCarousel({
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

    var prw=$('.pr-img').width();
    $('.pr-img').height(prw);

    var cbw=$('.cms-banner-img').width();
    $('.cms-banner-img').height(cbw*1.25)

    var blogw=$('.blog-img').width();
    $('.blog-img').height(blogw/1.52);

    var similarw=$('.similar-img').width();
    $('.similar-img').height(similarw/1.52);

    var prnw=$('.pr-name').width();
    $('.pr-name').height(prnw/2.5);
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

    var prw=$('.pr-img').width();
    $('.pr-img').height(prw);

    var prnw=$('.pr-name').width();
    $('.pr-name').height(prnw/2.5);

    var cbw=$('.cms-banner-img').width();
    $('.cms-banner-img').height(cbw*1.25)

    var blogw=$('.blog-img').width();
    $('.blog-img').height(blogw/1.52);

    var similarw=$('.similar-img').width();
    $('.similar-img').height(similarw/1.52);

})

$('#btn-nav').click(function(){
    $('#menu').toggle('slide')
})
$('#btn-close-nav').click(function(){
    $('#menu').toggle('slide')
})

jQuery(function ($) {
    $('#myFlipper').flipper('init');
    $('#modalFlipper').flipper('init');
  });
  
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36251023-1']);
    _gaq.push(['_setDomainName', 'jqueryscript.net']);
    _gaq.push(['_trackPageview']);
  
    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();


