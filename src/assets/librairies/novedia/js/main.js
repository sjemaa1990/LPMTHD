$(function(){
	var lpm = {
		arrowBindingsInitRan : false,
		init:function(){
			this.megaMenuBindings();
			this.footerSubMenuBindings();
			this.homeInit();
			this.boxFibreAppels();
			this.arrowBindings();
			this.presseYearSelector();
		},
		megaMenuBindings:function(){
			var $parentItems = $('.mainMenu').find('.mainMenuWrapper > ul > li'),
		    $parentLinks = $parentItems.children('a'),
		    $parentToggles = $('.subMenuToggle'),
			$menu = $('.mainMenu .mainMenuItems ul'),
			$menuSub = $('.mega');

			// If greater than 960px Window Width then Run this stuff 
		    $menu.css('display', 'block'); // Hide Navigation Except for MenuToggle 
		    $menuSub.css('display', 'none'); // Hide SubNav
		    $parentToggles.css('display', 'none'); // Make Sure that the Toggles Come Back if Responsive 
		    $parentToggles.unbind('click'); // Remove Click Functionality to the Toggles
		            
		    $parentItems.on('mouseenter focusin', function() {
  				$(this).addClass( "hover" );
    			$('.mega', this).addClass('active');
	  		});  
  		
		  	$parentItems.on('mouseleave focusout', function() {
    			$( this ).removeClass( "hover" );
    			$('.mega', this).removeClass('active');
		  	});
		},
		footerSubMenuBindings:function(){
			$('.footerMenu').find('.action').on('click',function(e){
				e.preventDefault();
				if($('.footerSubMenu').is(':visible')){
					$(this).removeClass('on').addClass('off');
					$('.footerSubMenu').slideUp();
				} else {
					$(this).removeClass('off').addClass('on');
					$('.footerSubMenu').slideDown();
					 $('html, body').animate({ 
					      scrollTop: $('.footerSubMenu').offset().top 
					  }, 600);
				}
			})
		},
		homeInit:function(){
			var offresSwiper = new Swiper ('.promos .swiper-container', {
				// Optional parameters
				direction: 'horizontal',
				nextButton: '.promos .swiper-button-next',
				prevButton: '.promos .swiper-button-prev',
    			pagination: '.promos .swiper-pagination',
				loop: true,
				speed:400,
				autoplay: 8000
		    })   
			var whySwiper = new Swiper ('.why .swiper-container', {
				// Optional parameters
				direction: 'horizontal',
				nextButton: '.why .swiper-button-next',
				prevButton: '.why .swiper-button-prev',
    			pagination: '.why .swiper-pagination',
				loop: true,
				speed:400,
				autoplay: 8000
		    })
		    lpm.mobileActivation();
		    window.addEventListener("orientationchange", function() {
			    lpm.mobileActivation();
			});
		},
		mobileActivation:function(){
			if (window.matchMedia("(max-width: 991px)").matches) {
				var whySwiper = new Swiper ('.favz .swiper-container', {
					// Optional parameters
					direction: 'horizontal',
    				pagination: '.favz .swiper-pagination',
					loop: true,
				    speed:600,
				    autoplay: 4000
			    })
			    $('.menuMobile').find('.buttonMenuMobile').off('click');
			    $('.menuMobile').find('.buttonMenuMobile').on('click',function(){
			    	if($('.menuMobileLayer').is(':visible')){
			    		$('.menuMobileLayer').addClass('off').removeClass('on');
			    		$('.layerMask').remove();
			    	} else {
			    		$('.menuMobileLayer').addClass('on').removeClass('off');
			    		$('body').append('<div class="layerMask"></div>');
			    		$('.menuMobile').find('.layerMask').show();
			    		$('.layerMask').one('click',function(){
				    		$('.menuMobileLayer').addClass('off').removeClass('on');
				    		$('.layerMask').remove();
			    		})
			    	}
			    })
			    $('.category > a').off('click');
			    $('.category > a').on('click',function(){
			    	if($(this).siblings('.categoryItems').is(':visible')){
			    		$('.category').find('.categoryItems').hide();
			    		$('.category').find('a').removeClass('on').addClass('off');
			    	} else {
			    		$('.category').find('.categoryItems').hide();
			    		$('.category').find('a').removeClass('on').addClass('off');
			    		$(this).removeClass('off').addClass('on').siblings('.categoryItems').show();
			    	}
			    })
			} else{
				if(whySwiper)
					whySwiper.destroy();
			    $('.menuMobile').find('.buttonMenuMobile').off('click');
			    $('.category > a').off('click');
			}
		},
		boxFibreAppels:function(){
			if (window.matchMedia("(max-width: 991px)").matches) {
			    $('.region').on('click',function(e){
			    	e.preventDefault();
			    	if($(this).next().is(':visible')){
			    		$(this).removeClass('on');
			    		$(this).next().hide();
			    	} else {
			    		$(this).addClass('on');
			    		$(this).next().css('display','block');
			    	} 
			    })

			}
			var whySwiper = new Swiper ('.tv .swiper-container', {
				// Optional parameters
				direction: 'horizontal',
				nextButton: '.tv .swiper-button-next',
				prevButton: '.tv .swiper-button-prev',
    			pagination: '.tv .swiper-pagination',
				loop: true,
				speed:600,
				autoplay: 4000
		    })
		},
		presseYearSelector:function(){
			$('.yearPicker').find('.yearSelector').on('click',function(e){
				e.preventDefault();
				$this = $(this);
				var sel = $this.html();
				$('.yearArticles').addClass('hidden').hide();
				$('.year'+sel).removeClass('hidden').show();
				$('.yearSelector').removeClass('on');
				$this.addClass('on');
			})
		},
		boxADSLFauxLiens:function(){
			$('.region').on('click',function(e){
				e.preventDefault();
			})
		},
		arrowBindingsInit:function(){
			if(!this.arrowBindingsInitRan){
				if (window.matchMedia("(max-width: 991px)").matches) {
					$('#plan .staticWrapper').find('article').addClass('close_article');
				} else {
					$('#plan .staticWrapper').find('article').removeClass('close_article');
				}

				$('.staticWrapper .content').show();
				$('.staticWrapper .close_article .content').hide();
				this.arrowBindingsInitRan = true;
			}

		},
		arrowBindings:function(){
			if(!this.arrowBindingsInitRan){
				this.arrowBindingsInit();
			}


			$('.staticWrapper article h3').on('click',function(){
				if($(this).find('.fleche').is(':visible')){
					if(!$(this).siblings('.content').is(':visible')) {
						$('.staticWrapper article').addClass('close_article');
						$('.staticWrapper article').find('.content').hide();
						$(this).parent().addClass('close_article');
						$('.staticWrapper .close_article .content').hide();
						$(this).parent().removeClass('close_article');
						$(this).siblings('.content').show();
					} else {
						$('.staticWrapper article').addClass('close_article');
						$('.staticWrapper article').find('.content').hide();
					}
				}
			})
		}
	}

	$(document).ready(function(){
		lpm.init();
	})    

	function resize_page() {
		lpm.arrowBindingsInit();
		lpm.mobileActivation();
    }

    window.addEventListener('resize', resize_page, false);
})

//Bandeau de notifications d'acceptation des cookies
function launcher(context) {
    testSiCookiePresent();

    if (!!context) context = document.body;
    context = $(context);
}

$(document).ready(launcher);

var nameCookie = 'prtCookieNotification';
function hideCookieInfo() {
	if ($("#divCookie")) {
		$("#divCookie").addClass("hidden");
		createCookie(nameCookie, "1", "0");
	}
}

function showCookieInfo() {
	if ($("#divCookie")) {
		$("#divCookie").removeClass("hidden");
	}
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

function deleteCookie() {
    if (getCookie(nameCookie)) {
        createCookie(nameCookie, "0", "1");
        showCookieInfo();
    }
}

function createCookie(name, value, expire) {
    var dateExpiration = new Date();
    if (expire = "0")
        dateExpiration.setUTCMonth(dateExpiration.getUTCMonth() + 13);
    else
        dateExpiration.setUTCMonth(dateExpiration.getUTCMonth() - 1);

    // document.cookie = name + "=" + value + ";expires=" + dateExpiration + ";domain=" + cookieDomain + ";path=/";
	// document.cookie = name + "=" + value + ";expires=" + dateExpiration + ";domain=" + cookieDomain + ";";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function testSiCookiePresent() {
    if (getCookie(nameCookie) == "") {
        createCookie(nameCookie, "0", 13);
        showCookieInfo();
    }
    else if (getCookie(nameCookie) == "0") {
        createCookie(nameCookie, "1", 13);
    }
}
//fin Bandeau de notifications d'acceptation des cookies