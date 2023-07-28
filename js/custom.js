//<![CDATA[
  $(function() {
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = $('#logo').offset().top + 160;
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > stickyHeaderTop) {
        $('#logo').addClass('sticky');
        $('#finder').removeClass('navi2');
      } else {
        $('#logo').removeClass('sticky');
        $('#finder').addClass('navi2');
      }
    });
  }); //]]>

// Client Area Owl Carousel
  $("#owl-client").owlCarousel({
    pagination : false,
    center: true,
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

// Testimonial Sec Owl Carousel
$("#owl-testimonial").owlCarousel({
  pagination : false,
  center: false,
    loop:true,
    margin:0,
    nav:false,
    autoplay: false,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

// Index Main Banner Owl Carousel
$("#owl-demo").owlCarousel({
  pagination : false,
  dots: false,
    center: true,
    loop:true,
    margin:0,
    nav:false,
    autoplay: true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// Per Loader Screen Timeout
setTimeout(function(){
  $('.loader_bg').fadeToggle();
}, 1500);

// MagnificPopup
$(function() {
  $('.popup-youtube, .popup-vimeo').magnificPopup({
      disableOn: 100,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });
});