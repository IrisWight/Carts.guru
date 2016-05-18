$(function () {

    var fullPage = false,
        fullInit = function(){
            if($('.fullpage-main').length && !fullPage) {
                $fullPage = $('#fullpage').fullpage({
                    navigation: true,
                    sectionsColor: ['#d0f5ff', '#ffeb62', '#60205a', '#191b34', '#244058', '#f6f6f6'],
                    //anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage','lastPage'],
                    //menu: '#mainMenu',
                    css3: true,
                    loopHorizontal: false,
                    scrollingSpeed: 800,

                    onLeave: function(index, nextIndex, direction) {

                        if (nextIndex == 3 || nextIndex == 4 || nextIndex == 5) {
                            $('header').addClass('white');
                        } else{
                            $('header').removeClass('white');
                        }
                    }
                });
                fullPage = true;
                console.log(fullPage);
            }
        },
        fullDest = function(){
            console.log(fullPage);
            if(fullPage) {
                $.fn.fullpage.destroy('all');
                fullPage = false;
            }
        },
        seeSize = function(winW,winH){
            if(winW >= 1220 && winH >= 630) {
                fullInit();
                $('body').removeClass('not-full');
            }else{
                fullDest();
                $('body').addClass('not-full');
            }
        };

    //  fullPage
    seeSize($(window).width(),$(window).height());

    //  PRELOADER
    $(window)
        .on('load', function () {
            var $pre = $('.preloader');
            $pre.delay(350).fadeOut('slow');
        })
    //  RESIZE FullPage
        .on('resize', function(){
            seeSize($(window).width(),$(window).height());
        });

    //      MENU__pop-up
    $('.btn-menu').on('click', function () {
        $('.main-menu').css({'display':'block'});
        $('.logo').toggleClass('white');
        $('.btn-menu').toggleClass('white');

        setTimeout(function(){
            $('.main-menu').toggleClass('open-menu');
        },300);
    });

    //      MENU__lang-select
    var selectLang = $('#lang');
    if($('.header-lang').length) {
        selectLang.select2({
            containerCssClass: 'select-lang-main',
            dropdownCssClass: 'select-lang-drop',
            showSearchBox: false,
            minimumResultsForSearch: Infinity
        });
    }




    var form = $('.form-cart');
    $('#btnSubmit').on('click', function (e) {
        e.preventDefault();
        $('.layout-cart__fail')
            .css({'z-index':'21'});
        setTimeout(function(){
            $('.layout-cart__fail')
                .delay(0)
                .animate({'opacity':'1'},250);
        },100);
        setTimeout(function(){
            form [0].reset();
        },150);
        $('.layout-cart')
            .delay(1100)
            .animate({'opacity':'0'},400);
        $('.decision-section__i')
            .delay(1200)
            .animate({'opacity':'1'},400);
        $('.moon-img')
            .delay(1300)
            .animate({'opacity':'1', 'right':'-5%'},700);
        $('.rocket-img')
            .delay(1400)
            .animate({'opacity':'1','left':'6%','bottom':'-5%'},700);
        $('.guru-img_headset')
            .delay(1850)
            .animate({'opacity':'1', 'bottom':'-60%'},800);
    });

});