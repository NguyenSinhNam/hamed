/**
 * isMobile
 * responsiveMenu
 * headerFixed
 * flatIconboxCarousel
 * blogCarousel
 * ClientCarousel
 * flatTeam
 * googleMap
 * portfolioIsotope
 * goTop
 * parallax
 */

;
(function($) {

  'use strict'

  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  // var responsiveMenu = function() {
  //   var menuType = 'desktop';

  //   $(window).on('load resize', function() {
  //     var currMenuType = 'desktop';

  //     if (matchMedia('only screen and (max-width: 1199px)').matches) {
  //       currMenuType = 'mobile';
  //     }

  //     if (currMenuType !== menuType) {
  //       menuType = currMenuType;

  //       if (currMenuType === 'mobile') {
  //         var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
  //         var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');
  //         var $account = $('.box-account').attr('class', 'box-account-mobi');

  //         $('#header').after($mobileMenu);
  //         $('#mainnav-mobi').append($account);
  //         hasChildMenu.children('ul').hide();
  //         hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
  //         $('.btn-menu').removeClass('active');
  //       } else {
  //         var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

  //         $desktopMenu.find('.submenu').removeAttr('style');
  //         $('#header').find('.nav-wrap').append($desktopMenu);
  //         $('.btn-submenu').remove();
  //         var $pcAccount = $('.box-account-mobi').attr('class', 'box-account');
  //         $('#logo').after($pcAccount);
  //       }
  //     }
  //   });

  //   $('.btn-menu').on('click', function() {
  //     $('#mainnav-mobi').slideToggle(300);
  //     $(this).toggleClass('active');
  //   });

  //   $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
  //     $(this).toggleClass('active').next('ul').slideToggle(300);
  //     e.stopImmediatePropagation()
  //   });
  // }

  // var headerFixed_s1 = function() {
  //   var nav = $('.header.bg-color');
  //   if (nav.size() !== 0) {

  //     $(window).on('load', function() {
  //       var header = $('.header.bg-color');
  //       var offsetTop = $('.header.bg-color').offset().top;
  //       var headerHeight = $('.header.bg-color').height();
  //       var buffer = $('<div>', {
  //         height: headerHeight
  //       }).insertAfter(header);
  //       buffer.hide();

  //       $(window).on('load scroll', function() {
  //         if ($(window).scrollTop() > offsetTop) {
  //           $('.header.bg-color').addClass('fixed-header');
  //           buffer.show();
  //         } else {
  //           $('.header.bg-color').removeClass('fixed-header');
  //           buffer.hide();
  //         }
  //       })

  //     }); // headerFixed style1
  //   }
  // };

  var tabLogistic = function() {
        $('.tab-container').each(function() {
            $('.menu-tab').children('li').first().addClass('active');
            $(this).children('.content-tab').children().hide();
            $(this).children('.content-tab').children().first().show();
            $(this).find('.menu-tab').children('li').on('click', function(e) {
                var liActive = $(this).index(),
                    contentActive = $(this).siblings().removeClass('active').parents('.tab-container').children('.content-tab').children().eq(liActive);

                contentActive.addClass('active').fadeIn('slow');
                contentActive.siblings().removeClass('active');
                $(this).addClass('active').parents('.tab-container').children('.content-tab').children().eq(liActive).siblings().hide();
                e.preventDefault();
            });
        });
    };

    var CheckboxShowHideAll = function(){
         // Set check or unchecked all checkboxes
    $('#chckHead').click(function () {
       var checkboxes = $('.chcktbl');
     
       if (this.checked) {
         for (var i = 0; i < checkboxes.length; i++) { 
           checkboxes[i].checked = true;
         }
       } else {
         for (var i = 0; i < checkboxes.length; i++) {
           checkboxes[i].checked = false;
         }
       }
     });

    $('#a-chckHead').click(function () {
       var checkboxes = $('.a-chcktbl');
     
       if (this.checked) {
         for (var i = 0; i < checkboxes.length; i++) { 
           checkboxes[i].checked = true;
         }
       } else {
         for (var i = 0; i < checkboxes.length; i++) {
           checkboxes[i].checked = false;
         }
       }
     });

    $('#b-chckHead').click(function () {
       var checkboxes = $('.b-chcktbl');
     
       if (this.checked) {
         for (var i = 0; i < checkboxes.length; i++) { 
           checkboxes[i].checked = true;
         }
       } else {
         for (var i = 0; i < checkboxes.length; i++) {
           checkboxes[i].checked = false;
         }
       }
     });

    $('#c-chckHead').click(function () {
       var checkboxes = $('.c-chcktbl');
     
       if (this.checked) {
         for (var i = 0; i < checkboxes.length; i++) { 
           checkboxes[i].checked = true;
         }
       } else {
         for (var i = 0; i < checkboxes.length; i++) {
           checkboxes[i].checked = false;
         }
       }
     });

    }

  var ToggleSlide = function() {
    $('.info-logistic-detail .detail-box .title .icon-down').on('click', function(){
      $(this).closest('.title').toggleClass('active');
      $(this).closest('.detail-box').children('.detail-content').slideToggle();
    })
  };

  var ShowPopup = function() {
    var popupFinish = $('.btn-confirm.finish a');
    var popupFinishClose = $('.box-confirm-order .delete');

    // Course
    popupFinish.on('click',function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).closest('.boxed').children('.box-confirm-order').addClass('open');
        $('body').append('<div class="modal-backdrop fade show"></div>');
    });
    popupFinishClose.on('click', function(){
        $(this).closest('.boxed').children('.box-confirm-order').removeClass('open');
        $('.modal-backdrop.fade.show').remove();
    });
    $('.box-confirm-order').on('click', function(e){
        e.stopPropagation();
    });

    jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});
  };

  var removePreloader = function() {
    $('.box-change-pw').hide();
    $(document).on('click', '.bt-change-pw', function() {
      $(this).toggleClass('active');
      $('.box-change-pw').slideToggle(300);
    });

    $('.sec_info_account .info-account .top-bar .box-control .notification ul').hide();
    $(document).on('click', '.notification .icon', function() {
      $(this).toggleClass('active');
      $('.sec_info_account .info-account .top-bar .box-control .notification ul').slideToggle(200);
    });

    $(window).load(function() {
      $('#preloader').css('opacity', 0);
      setTimeout(function() {
        $('#preloader').hide();
      }, 1000);
    });

  };



  // Dom Ready
  $(function() {
    tabLogistic();
    CheckboxShowHideAll();
    ToggleSlide();
    ShowPopup();
    removePreloader();
  });

})(jQuery);
 