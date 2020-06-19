(function ($) {
    "use strict";


/*--
    Commons Variables
-----------------------------------*/
var windows = $(window);
var windowWidth = windows.width();
var mainWrapper = $('.main-wrapper');


/*--
    Header Cart
-----------------------------------*/
var cartToggle = $('.header-cart-toggle');
var miniCart = $('.header-mini-cart');
// Toggle Header Cart
cartToggle.on("click", function () {
    miniCart.slideToggle();
});
// Closing the Header Cart by clicking in the menu button or anywhere in the screen
$('body').on('click', function (e) {
    var target = e.target;
    if (!$(target).is('.header-cart-toggle') && !$(target).parents().is('.header-cart-toggle')) {
        miniCart.slideUp();
    }
});
// Prevent closing Header Cart upon clicking inside the Header Cart
$('.header-mini-cart').on('click', function (e) {
    e.stopPropagation();
});
    
/*--
    Mobile Menu
-----------------------------------*/
var mainMenuNav = $('.main-menu');
mainMenuNav.meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.mobile-menu',
    meanMenuClose: '<span class="menu-close"></span>',
    meanMenuOpen: '<span class="menu-bar"></span>',
    meanRevealPosition: 'right',
    meanMenuCloseSize: '0'
});

/*--
    Sliders
-----------------------------------*/
// Hero Slider
$('.hero-slider').slick({
    infinite: true,
    fade: true,
    dots: false,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
        breakpoint: 992,
            settings: {
                dots: true,
                arrows: false,
            }
        },
    ]
}); 
// Product Slider 4 Column
$('.product-slider-4').slick({
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
// Product Slider 3 Column
$('.product-slider-3').slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
// Single Product Slider
$('.single-product-slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
});
// Single Product Slider
$('.single-product-slider-syn').slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
    asNavFor: '.single-product-thumb-slider-syn',
});
// Single Product Thumbnail Slider
$('.single-product-thumb-slider-syn').each(function() {
    var $vertical = $(this).attr('data-vertical') === 'true' ? true : false;
    var $verticalPrevArrow = $(this).attr('data-vertical') === 'true' ? 'up' : 'left';
    var $verticalNextArrow = $(this).attr('data-vertical') === 'true' ? 'down' : 'right';
    $(this).slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<button class="slick-prev"><i class="fa fa-angle-'+$verticalPrevArrow+'"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-angle-'+$verticalNextArrow+'"></i></button>',
        asNavFor: '.single-product-slider-syn',
        vertical: $vertical,
        responsive: [
            {
                breakpoint: 479,
                settings: {
                    arrows: false,
                    vertical: false,
                    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
                    nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
                }
            },
        ]
    });
});
// Brand Slider
$('.brand-slider').slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
    ]
});
// Brand Slider
$('.blog-slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
});
// Testimonial Slider
$('.testimonial-image-slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev">prev</button>',
    nextArrow: '<button class="slick-next">next</button>',
    asNavFor: '.testimonial-content-slider'
});
$('.testimonial-content-slider').slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.testimonial-image-slider'
});

/*--
    Imageloaded & Masonry
-----------------------------------*/
var $masonryGird = $('.masonry-grid');
$masonryGird.imagesLoaded( function() {
    $masonryGird.masonry({
      // options
      itemSelector: '.masonry-grid > *',
    });
});

/*--
    Rellax Parallax
-----------------------------------*/
windows.on('load', function(){
    if($('.rellax').length){
        var rellax = new Rellax('.rellax');
    }
});
/*--
    Perfect Scrollbar
-----------------------------------*/
$('.custom-scroll').each(function(){
    const ps = new PerfectScrollbar($(this)[0]);
});
    
/*--
    Nice Select
-----------------------------------*/
$('.nice-select').niceSelect();
    
/*--
	MailChimp
-----------------------------------*/
$('#mc-form').ajaxChimp({
	language: 'en',
	callback: mailChimpResponse,
	// ADD YOUR MAILCHIMP URL BELOW HERE!
	url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'

});
function mailChimpResponse(resp) {
	
	if (resp.result === 'success') {
		$('.mailchimp-success').html('' + resp.msg).fadeIn(900);
		$('.mailchimp-error').fadeOut(400);
		
	} else if(resp.result === 'error') {
		$('.mailchimp-error').html('' + resp.msg).fadeIn(900);
	}  
}

/*--
	Price Range
-----------------------------------*/
$('#price-range').slider({
    range: true,
    min: 0,
    max: 300,
    values: [ 25, 225 ],
    slide: function( event, ui ) {
        $('.ui-slider-handle:eq(0)').html( '<span>' + '$' + ui.values[ 0 ] + '</span>');
        $('.ui-slider-handle:eq(1)').html( '<span>' + '$' + ui.values[ 1 ] + '</span>');
    }
});
$('.ui-slider-handle:eq(0)').html( '<span>' + '$' + $( "#price-range" ).slider( "values", 0 ) + '</span>' );
$('.ui-slider-handle:eq(1)').html( '<span>' + '$' + $( "#price-range" ).slider( "values", 1 ) + '</span>' );   
    

/*----- 
	Quantity
--------------------------------*/
$('.pro-qty').prepend('<span class="dec qtybtn">-</span>');
$('.pro-qty').append('<span class="inc qtybtn">+</span>');
$('.qtybtn').on('click', function() {
	var $button = $(this);
	var oldValue = $button.parent().find('input').val();
	if ($button.hasClass('inc')) {
	  var newVal = parseFloat(oldValue) + 1;
	} else {
	   // Don't allow decrementing below zero
	  if (oldValue > 0) {
		var newVal = parseFloat(oldValue) - 1;
		} else {
		newVal = 0;
	  }
	  }
	$button.parent().find('input').val(newVal);
});  
    
/*--
	Product View Mode
-----------------------------------*/
$('body').on('click', '.product-view-mode button', function(e) {
    e.stopPropagation();
    var $this = $(this);
    var $modeClass = $this.data('mode');
    var $productWrap = $this.closest('body').find('.shop-product-wrap');
    
    $('.product-view-mode button').removeClass('active');
    $this.addClass('active');
    
    $productWrap.removeClass('grid-3 grid-4 list').addClass($modeClass).find('.product-item').removeClass('list');
    
    if($modeClass === 'list') {
        $productWrap.find('.product-item').addClass('list');
    }
    
});
    
/*----- 
	Shipping Form Toggle
--------------------------------*/ 
$('[data-shipping]').on('click', function(){
    if( $('[data-shipping]:checked').length > 0 ) {
        $('#shipping-form').slideDown();
    } else {
        $('#shipping-form').slideUp();
    }
})
    
/*----- 
	Payment Method Select
--------------------------------*/
$('[name="payment-method"]').on('click', function(){
    
    var $value = $(this).attr('value');

    $('.single-method p').slideUp();
    $('[data-method="'+$value+'"]').slideDown();
    
})
    
/*--
	Sticky Sidebar
-----------------------------------*/
if($('.product-details-with-gallery').length) {
    var sidebar = new StickySidebar('.product-content', {
        containerSelector: '.product-details-with-gallery',
        innerWrapperSelector: '.product-content-inner',
        topSpacing: 20,
        bottomSpacing: 20,
        minWidth: 992,
    });
};
    
    
    
/*--
    Mobile Menu
------------------------*/
$('.ht-main-menu nav').meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.ht-mobile-menu',
    meanMenuClose: '<span class="menu-close"></span>',
    meanMenuOpen: '<span class="menu-bar"></span>',
    meanRevealPosition: 'right',
    meanMenuCloseSize: '0',
});

/*-- DeopDown Menu --*/
$('.sub-menu, .mega-menu').hide();
$('li').hover(
  function() {
    if( $(this).children('ul').size() > 0 && $(this).children().hasClass('sub-menu') || $(this).children().hasClass('mega-menu') ) {
        $(this).children().stop().slideDown(400);
    }
  }, function() {
    $(this).children('.sub-menu, .mega-menu').stop().slideUp(300);
  }
);
if( $(window).width() < 767 ) {
    $('.sub-menu, .mega-menu').removeClass('sub-menu mega-menu');
}


/*--
    Testimonial Slider
--------------------------------------------*/
    
/*-- Testimonial Slider Two --*/
$('.ht-testimonial-slider-two').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScoll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
});



/*--
	Isotop with ImagesLoaded
-----------------------------------*/
var isotopFilter = $('.isotop-filter');
var isotopGrid = $('.isotop-grid');
var isotopGridItem = '.isotop-item';

isotopFilter.find('button:first-child').addClass('active');

/*-- Images Loaded --*/
isotopGrid.imagesLoaded(function () {

    /*-- init Isotope --*/
    var initial_items = isotopGrid.data('show');
    var next_items = isotopGrid.data('load');
    var loadMoreBtn = $('.load-more-toggle');

    var $grid = isotopGrid.isotope({
        itemSelector: isotopGridItem,
        layoutMode: 'masonry',
    });


    /*-- Isotop Filter Menu --*/
    isotopFilter.on('click', 'button', function () {

        var filterValue = $(this).attr('data-filter');

        isotopFilter.find('button').removeClass('active');
        $(this).addClass('active');

        // use filterFn if matches value
        $grid.isotope({filter: filterValue});
        updateFilterCounts();

    });

    /*-- Update Filter Counts --*/
    function updateFilterCounts() {

        // get filtered item elements
        var itemElems = $grid.isotope('getFilteredItemElements');

        if (isotopGridItem.hasClass('hidden')) {
            isotopGridItem.removeClass('hidden');
        }

        var index = 0;

        $(itemElems).each(function () {
            if (index >= initial_items) {
                $(this).addClass('hidden');
            }
            index++;
        });

        $grid.isotope('layout');
    }

    /*-- Function that Show items when page is loaded --*/
    function showNextItems(pagination) {

        var itemsMax = $('.hidden').length;
        var itemsCount = 0;

        $('.hidden').each(function () {
            if (itemsCount < pagination) {
                $(this).removeClass('hidden');
                itemsCount++;
            }
        });

        if (itemsCount >= itemsMax) {
            loadMoreBtn.hide();
        }

        $grid.isotope('layout');
    }

    /*-- Function that hides items when page is loaded --*/
    function hideItems(pagination) {

        var itemsMax = $(isotopGridItem).length;
        var itemsCount = 0;

        $(isotopGridItem).each(function () {
            if (itemsCount >= pagination) {
                $(this).addClass('hidden');
            }
            itemsCount++;
        });

        if (itemsCount < itemsMax || initial_items >= itemsMax) {
             loadMoreBtn.hide();
        }

        $grid.isotope('layout');
    }

    /*-- Function that Load items when Button is Click --*/
    loadMoreBtn.on('click', function (e) {
        e.preventDefault();
        showNextItems(next_items);
    });

    hideItems(initial_items);

    
    
});
    
/*--
	Tilt Hover Effects 
-----------------------------------*/  
(function() {
    var tiltSettings = [
    {},
    {
        movement: {
            imgWrapper : {
                rotation : {x: -5, y: 10, z: 0},
                reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
            },
            caption : {
                translation : {x: 20, y: 20, z: 0},
                reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
            },
            overlay : {
                translation : {x: 5, y: -5, z: 0},
                rotation : {x: 0, y: 0, z: 6},
                reverseAnimation : {duration : 1000, easing : 'easeOutQuad'}
            },
            shine : {
                translation : {x: 50, y: 50, z: 0},
                reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
            }
        }
    }];

    function init() {
        var idx = 0;
        [].slice.call(document.querySelectorAll('.tilter')).forEach(function(el, pos) { 
            idx = pos%2 === 0 ? idx+1 : idx;
            new TiltFx(el, tiltSettings[idx-1]);
        });
    }

    // Preload all images.
    $('.tilter').imagesLoaded(function () {
        init();
    });

})();


})(jQuery);	
