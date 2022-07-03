// scroll navbar

$(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
        $('.header').addClass('affix');
        console.log("OK");
    } 
    else {
        $('.header').removeClass('affix');
    }
});


// Counter js Section

// $(window).on("load resize",function() {

//     var counters = $(".count");
//     var countersQuantity = counters.length;
//     var counter = [];

//     for (i = 0; i < countersQuantity; i++) {
//       counter[i] = parseInt(counters[i].innerHTML);
//     }

//     var count = function(start, value, id) {
//       var localStart = start;
//       setInterval(function() {
//         if (localStart < value) {
//           localStart++;
//           counters[id].innerHTML = localStart;
//         }
//       }, 4);
//     }

//     for (j = 0; j < countersQuantity; j++) {
//       count(0, counter[j], j);
//     }
//   });



// Counter Section
  $.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};

$('#count-1').jQuerySimpleCounter({end: 20,duration: 4000});
$('#count-2').jQuerySimpleCounter({end: 20,duration: 4000});
$('#count-3').jQuerySimpleCounter({end: 20,duration: 4000});



// OwlCarousel section
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: false,
        autoplayTimeout: 4000,
        smartSpeed: 600,
        nav: false,
        responsive: {
            0: {
            items: 1
            },
            600: {
            items: 2
            },
            1024: {
            items: 4
            },
            1366: {
            items: 5
            }
        }
    });
    
});


// Progress bar
jQuery(document).ready(function(){
  
    jQuery('.progress-bar').each(function() {
      jQuery(this).find('.progress-content').animate({
        width:jQuery(this).attr('data-percentage')
      },5000);
      
      jQuery(this).find('.progress-number-mark').animate(
        {left:jQuery(this).attr('data-percentage')},
        {
         duration: 5000,
         step: function(now, fx) {
           var data = Math.round(now);
           jQuery(this).find('.percent').html(data + '%');
         }
      });  
    });
  });


// Portfolio Section

  $(window).on("load", function() {

    /*========Portfolio Isotope Setup========*/
    if ($(".portfolio-section").length) {
        var $elements = $(".portfolio-section");
        $elements.isotope();
        $(".port-filter ul li").on("click", function() {
            $(".port-filter ul li").removeClass("filter-item");
            $(this).addClass("filter-item");
            var selector = $(this).attr("data-filter");
            $(".portfolio-section").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            });
        });
    }
});


// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});

// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});
