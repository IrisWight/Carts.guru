$(function () {
    //      PRELOADER

    $(window).on('load', function () {
        var $pre = $('.preloader');
        $pre.delay(350).fadeOut('slow');

        if (_wWidth <= 1370) {
            $('.main-menu').addClass('adaptive');
            $('.main-menu__w').addClass('adaptive');
        }
    });

    //      MENU__pop-up

    $('.btn-menu').on('click', function () {
        $('.main-menu').css({'display':'block'});
        $('.btn-menu').toggleClass('close-menu');
        $('.header').toggleClass('open-move');

        $('.main-menu__w').toggleClass('open-menu');
        setTimeout(function(){
            if($('.main-menu__w').hasClass('open-menu')){
                //loadedMenuScroll();
            }
            $('#fp-nav').toggleClass('hidden');
        },50);


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

    //      MENU-MEDIA
    var _wWidth = $(window).width();
    $(window).resize(function(){
        _wWidth = $(window).width();
        if (_wWidth <= 1370) {
            $('.main-menu').addClass('adaptive');
            $('.main-menu__w').addClass('adaptive');
        } else{
            $('.main-menu').removeClass('adaptive');
            $('.main-menu__w').removeClass('adaptive');
        }
        seeSize($(window).width(),$(window).height());
    });

    //    fullPage
    var fullPage = false,
        fullInit = function(){
            if($('.fullpage-main').length && !fullPage) {
                $('#fullpage').fullpage({
                    navigation: true,
                    //anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage','lastPage'],
                    //menu: '#mainMenu',
                    css3: true,
                    loopHorizontal: false,
                    scrollingSpeed: 1500,
                    afterRender: function(){

                    },

                    afterLoad: function(anchorLink, index){
                        if(index == 1) {
                            setTimeout(function(){
                                $('.guru-img').addClass('show');
                            },200);
                            setTimeout(function(){
                                $('.guru-img img').addClass('guru-fly');
                            },380);
                            $('.header-section-text').addClass('show');
                            $('.bg-cloud')
                                .delay(100)
                                .animate({'opacity':'1'},0);
                            $('.bg-city')
                                .delay(50)
                                .animate({'opacity':'1'},0);
                        }
                        //if(index == 2) {
                        //    var $bgLayoutTwo = $('.argument-section'),
                        //        argumentWidth = $bgLayoutTwo.width(),
                        //        argumentHeight= $bgLayoutTwo.height();
                        //    $(window).resize(function(){
                        //        argumentWidth = $bgLayoutTwo.width();
                        //        argumentHeight= $bgLayoutTwo.height();
                        //    });
                        //
                        //    $bgLayoutTwo.on('mousemove', function (e) {
                        //
                        //        var elementCloud = $('.bg-cloud_two'),
                        //            xPos = e.pageX,
                        //            yPos = e.pageY,
                        //            speedCloudX = 0.01,
                        //            speedCloudY = 0.025,
                        //            _width = $(this).width(),
                        //            _height= $(this).height(),
                        //            center = {
                        //                x: _width/2,
                        //                y: _height/2
                        //            },
                        //            coordsX = (center.x - xPos*speedCloudX) - center.x,
                        //            coordsY = (center.y - yPos*speedCloudY) - center.y;
                        //
                        //        elementCloud.css({
                        //            left: coordsX,
                        //            top: coordsY
                        //        });
                        //
                        //    });
                        //}
                        if(index == 3) {
                            $('.layout_three div')
                                .addClass('animate');
                            $('.layout_three')
                                .delay(0)
                                .animate({'opacity':'1'},100);
                            $('.airplane_left')
                                .delay(50)
                                .animate({'top':'27%'},100);
                            $('.airplane_right')
                                .delay(50)
                                .animate({'bottom':'14%'},100);

                            //var $bgLayoutThree = $('.transform-section'),
                            //    transformWidth = $bgLayoutThree.width(),
                            //    transformHeight= $bgLayoutThree.height();
                            //$(window).resize(function(){
                            //    transformWidth = $bgLayoutThree.width();
                            //    transformHeight= $bgLayoutThree.height();
                            //});
                            //
                            //$bgLayoutThree.on('mousemove', function (e) {
                            //
                            //    var elementCloud = $('.bg-cloud_tree'),
                            //        xPos = e.pageX,
                            //        yPos = e.pageY,
                            //        speedCloudX = 0.01,
                            //        speedCloudY = 0.025,
                            //        _width = $(this).width(),
                            //        _height= $(this).height(),
                            //        center = {
                            //            x: _width/2,
                            //            y: _height/2
                            //        },
                            //        coordsX = (center.x - xPos*speedCloudX) - center.x,
                            //        coordsY = (center.y - yPos*speedCloudY) - center.y;
                            //
                            //    elementCloud.css({
                            //        left: coordsX,
                            //        top: coordsY
                            //    });
                            //
                            //});

                        }  else{
                            $('.layout_three div')
                                .removeClass('animate');
                            $('.layout_three')
                                .delay(0)
                                .animate({'opacity':'0'},0);

                        }

                        //if(index == 4) {
                        //    var $bgLayoutFour = $('.autocontact-section'),
                        //        autocontactWidth = $bgLayoutFour.width(),
                        //        autocontactHeight= $bgLayoutFour.height();
                        //    $(window).resize(function(){
                        //        autocontactWidth = $bgLayoutFour.width();
                        //        autocontactHeight= $bgLayoutFour.height();
                        //    });
                        //
                        //    $bgLayoutFour.on('mousemove', function (e) {
                        //
                        //        var elementCloud = $('.bg-cloud_four'),
                        //            xPos = e.pageX,
                        //            yPos = e.pageY,
                        //            speedCloudX = 0.01,
                        //            speedCloudY = 0.025,
                        //            _width = $(this).width(),
                        //            _height= $(this).height(),
                        //            center = {
                        //                x: _width/2,
                        //                y: _height/2
                        //            },
                        //            coordsX = (center.x - xPos*speedCloudX) - center.x,
                        //            coordsY = (center.y - yPos*speedCloudY) - center.y;
                        //
                        //        elementCloud.css({
                        //            left: coordsX,
                        //            top: coordsY
                        //        });
                        //
                        //    });
                        //}

                        if(index == 5) {
                            $('.products-list__item').addClass('animate');
                        }
                        var fullPage = $.fn.fullpage,
                            statusScroll = 0,
                            disWheel = false;
                        if(index == 6) {
                            var formScroll = function(){
                                fullPage.setAllowScrolling(false, 'down');
                                fullPage.setKeyboardScrolling(false, 'down');
                                console.log('off');
                                if(delta = -1){
                                    console.log(delta);
                                    if(statusScroll == 0) {
                                        //$('.test-section').addClass('scroll-layout-cart');
                                        $('.layout-cart')
                                            .delay(0)
                                            .animate({'top': '55%'}, 800);
                                        $('.test-section__title')
                                            .delay(0)
                                            .animate({'opacity': '0'}, 500, function(){
                                                //$('.layout-cart').find('#nameField').focus();
                                            });
                                        statusScroll = 1;
                                    }else if(statusScroll == 1){
                                        disWheel=true;
                                    }

                                }else{
                                    disWheel=true;
                                }
                                if(disWheel){
                                    $('.section.test-section').unbind('mousewheel');
                                    $(document).unbind('keydown', function(event) {});
                                    fullPage.setAllowScrolling(true, 'down');
                                    fullPage.setKeyboardScrolling(true, 'down');
                                    console.log('on');
                                    statusScroll = 0;
                                }
                            };
                            $('.section.test-section').bind('mousewheel',function(event,delta) {
                                formScroll();
                            });
                            $(document).bind('keydown', function(event) {
                                if(event.keyCode == 40) {
                                    formScroll();
                                }
                            });

                        }else{
                            $('.section.test-section').unbind('mousewheel');
                            //$(document).unbind('keydown');
                            fullPage.setAllowScrolling(true, 'down');
                            fullPage.setKeyboardScrolling(true, 'down');
                            statusScroll = 0;
                            //$('.test-section').removeClass('scroll-layout-cart');
                        }

                        if(index == 5 || index == 6 || index == 7) {
                            $('.main-menu').addClass('white');
                            $('.logo').addClass('white');
                            $('.header-lang').addClass('white');
                            $('.call-header').addClass('white');
                            $('.btn-menu').addClass('white');
                            $('.select2-drop').css({'color':'#ffffff'});
                        } else{
                            $('.main-menu').removeClass('white');
                            $('.logo').removeClass('white');
                            $('.header-lang').removeClass('white');
                            $('.call-header').removeClass('white');
                            $('.btn-menu').removeClass('white');
                            $('.select2-drop').css({'color':'#858585'});
                        }

                        var $bgLayoutFirst = $('.header-section'),
                            headerWidth = $bgLayoutFirst.width(),
                            headerHeight= $bgLayoutFirst.height();
                        $(window).resize(function(){
                            headerWidth = $bgLayoutFirst.width();
                            headerHeight= $bgLayoutFirst.height();
                        });

                        $bgLayoutFirst.on('mousemove', function (e) {

                            var elementCloud = $('.bg-cloud'),
                                elementCityRear = $('.bg-city.rear'),
                                elementCityFront = $('.bg-city.front'),
                                xPos = e.pageX,
                                yPos = e.pageY,
                                speedCloudX = 0.01,
                                speedCloudY = 0.025,
                                speedCityRear = 0.015,
                                speedCityFront = 0.03,
                                _width = $(this).width(),
                                _height= $(this).height(),
                                center = {
                                    x: _width/2,
                                    y: _height/2
                                },
                                coordsX = (center.x - xPos*speedCloudX) - center.x,
                                coordsY = (center.y - yPos*speedCloudY) - center.y,
                                coordsRear = (center.x - xPos*speedCityRear) - center.x,
                                coordsFront = (center.x - xPos*speedCityFront) - center.x;

                            elementCloud.css({
                                left: coordsX,
                                top: coordsY
                            });
                            //elementCityRear.css({left: -coordsRear});
                            //elementCityFront.css({left: -coordsFront});

                            elementCityRear.css({'background-position': -coordsRear + '% 100%'});
                            elementCityFront.css({'background-position': -coordsFront + '% 100%'});
                        });

                    },
                    onLeave: function(index, nextIndex, direction){
                        var gradHeight = $(window).height(),
                            guruHcall = $('.guru-img_call').height(),
                            guruH2 = $('.guru-img_two').height();
                        if(nextIndex == 1){
                            $('.guru-img')
                                .delay(800)
                                .animate({'opacity':'1','top':'25%'},800);
                            $('.bg-cloud')
                                .delay(400)
                                .animate({'top':'0'},800);
                            $('.rear')
                                .delay(400)
                                .animate({'top':'0'},400);
                            $('.front')
                                .delay(500)
                                .animate({'top':'0'},400);
                            $('.header-section-text')
                                .delay(1000)
                                .animate({'opacity':'1'},250);
                            $('.gradient_first')
                                .delay(0)
                                .animate({'margin-top':'0%'},1200);
                        }
                        if(direction == 'down'){
                            $('.guru-img')
                                .delay(0)
                                .animate({'opacity':'0','top':'-100%'},800);
                            setTimeout(function(){
                                $('.guru-img')
                                    .delay(0)
                                    .animate({'top':'100%'},800);
                            },50);
                            $('.header-section-text')
                                .delay(0)
                                .animate({'opacity':'0'},350);
                            $('.bg-cloud')
                                .delay(400)
                                .animate({'top':'-100%'},800);
                            $('.rear')
                                .delay(400)
                                .animate({'top':'100%'},350);
                            $('.front')
                                .delay(500)
                                .animate({'top':'100%'},350);
                            $('.airplane_left')
                                .delay(50)
                                .animate({'top':'-50%'},800);
                            $('.airplane_right')
                                .delay(50)
                                .animate({'bottom':'100%'},800);

                        }
                        if(direction == 'up'){
                            $('.airplane_left')
                                .delay(50)
                                .animate({'top':'100%'},800);
                            $('.airplane_right')
                                .delay(50)
                                .animate({'bottom':'-50%'},800);
                        }
                        //       bg-cloud_two + guru-img_two (layout_TWO)
                        if(nextIndex == 2 && direction == 'down'){
                            $('.bg-cloud_two')
                                .delay(400)
                                .animate({'opacity':'1', 'top':'0'},800);
                            $('.argument-section-title')
                                .delay(800)
                                .animate({'opacity':'1'},400);
                            $('.argument-section-list')
                                .delay(1200)
                                .animate({'opacity':'1'},400);
                            $('.source-info')
                                .delay(1200)
                                .animate({'opacity':'1'},400);
                            $('.guru-img_two')
                                .delay(1250)
                                .animate({'opacity':'1', 'bottom': guruH2 * 0.38 },600);
                            $('.gradient_first')
                                .delay(0)
                                .animate({'margin-top':-2*gradHeight + 'px'},1200);

                        } else if(index == 2 && direction == 'up'){
                            $('.bg-cloud_two')
                                .delay(400)
                                .animate({'opacity':'0', 'top':'100%'},800);
                            $('.argument-section-title')
                                .delay(50)
                                .animate({'opacity':'0'},300);
                            $('.argument-section-list')
                                .delay(50)
                                .animate({'opacity':'0'},300);
                            $('.source-info')
                                .delay(50)
                                .animate({'opacity':'0'},300);
                            $('.guru-img_two')
                                .delay(0)
                                .animate({'opacity':'1', 'bottom':'0'},400);
                        } else  if(nextIndex == 2 && direction == 'up'){
                            $('.bg-cloud_two')
                                .delay(400)
                                .animate({'opacity':'1', 'top':'0'},800);
                            $('.argument-section-title')
                                .delay(800)
                                .animate({'opacity':'1'},400);
                            $('.argument-section-list')
                                .delay(1200)
                                .animate({'opacity':'1'},400);
                            $('.source-info')
                                .delay(1200)
                                .animate({'opacity':'1'},400);
                            $('.guru-img_two')
                                .delay(500)
                                .animate({'opacity':'1', 'bottom': guruH2 * 0.38 },400);
                            $('.gradient_first')
                                .delay(0)
                                .animate({'margin-top':-2*gradHeight + 'px'},1200);
                        }else if(nextIndex == 3 && direction == 'down'){
                            $('.guru-img_two')
                                .delay(1000)
                                .animate({'bottom':'150%'},650);
                            setTimeout(function(){
                                $('.guru-img_two')
                                    .delay(0)
                                    .animate({'opacity':'0', 'bottom':'0'},0);
                            },100);
                            $('.argument-section-title')
                                .delay(0)
                                .animate({'opacity':'0'},200);
                            $('.argument-section-list')
                                .delay(0)
                                .animate({'opacity':'0'},200);
                            $('.source-info')
                                .delay(0)
                                .animate({'opacity':'0'},200);
                            $('.bg-cloud_two')
                                .delay(400)
                                .animate({'opacity':'1', 'top':'-100%'},800);
                        }else if(index == 2 && direction == 'down'){
                            $('.bg-cloud_two')
                                .delay(400)
                                .animate({'opacity':'0', 'top':'-100%'},800);
                            $('.argument-section-title')
                                .delay(0)
                                .animate({'opacity':'0'},400);
                            $('.argument-section-list')
                                .delay(0)
                                .animate({'opacity':'0'},400);
                            $('.source-info')
                                .delay(0)
                                .animate({'opacity':'0'},400);
                            $('.guru-img_two')
                                .delay(0)
                                .animate({'bottom':'100%'},400);
                            setTimeout(function(){
                                $('.guru-img_two')
                                    .delay(0)
                                    .animate({'opacity':'0', 'bottom':'0'},0);
                            },100);
                        }

                        //       bg-cloud_tree (layout_TREE)
                        if(nextIndex == 3 && direction == 'down'){
                            $('.bg-cloud_tree')
                                .delay(400)
                                .animate({'opacity':'1', 'top':'0'},800);
                            $('.transform-section-title')
                                .delay(1400)
                                .animate({'opacity':'1'},600);
                            $('.gradient_first')
                                .delay(0)
                                .animate({'margin-top':-2*gradHeight + 'px'},1200);
                        } else if(index == 3 && direction == 'up'){
                            $('.bg-cloud_tree')
                                .delay(400)
                                .animate({'opacity':'0', 'top':'100%'},800);
                            $('.transform-section-title')
                                .delay(50)
                                .animate({'opacity':'0'},300);
                            $('.gradient_first')
                                .delay(0)
                                .animate({'margin-top':-2*gradHeight + 'px'},1200);
                        } else  if(nextIndex == 3 && direction == 'up'){
                            $('.bg-cloud_tree')
                                .delay(400)
                                .animate({'opacity':'1', 'top':'0'},800);
                            $('.transform-section-title')
                                .delay(800)
                                .animate({'opacity':'1'},400);
                            $('.gradient_first')
                                .delay(0)
                                .animate({'margin-top':-2*gradHeight + 'px'},1200);
                        }else if(index == 3 && direction == 'down'){
                            $('.bg-cloud_tree')
                                .delay(400)
                                .animate({'opacity':'0', 'top':'-100%'},800);
                            $('.transform-section-title')
                                .delay(0)
                                .animate({'opacity':'0'},400);
                        }

                        //       bg-cloud_four + guru-img_call (layout_FOUR)
                        if(nextIndex == 4 && direction == 'down'){
                            $('.bg-cloud_four')
                                .delay(400)
                                .animate({'opacity':'1', 'top':'0'},800);
                            $('.guru-img_call')
                                .delay(1100)
                                .animate({'opacity':'1', 'bottom': '55%'},800);
                            $('.autocontact-section-title')
                                .delay(1000)
                                .animate({'opacity':'1'},250);
                            $('.autocontact-section-list__item:first-child')
                                .delay(1100)
                                .animate({'opacity':'1'},400);
                            $('.autocontact-section-list__item:last-child')
                                .delay(1200)
                                .animate({'opacity':'1'},400);
                            $('.gradient_first')
                                .delay(0)
                                .animate({'margin-top':-4*gradHeight + 'px'},1200);

                        } else if(index == 4 && direction == 'up'){
                            $('.bg-cloud_four')
                                .delay(400)
                                .animate({'opacity':'0', 'top':'100%'},800);
                            $('.guru-img_call')
                                .delay(150)
                                .animate({'bottom':'150%'},400);
                            setTimeout(function(){
                                $('.guru-img_call')
                                    .delay(0)
                                    .animate({'opacity':'1','bottom':'0'},0);
                            },100);
                            $('.autocontact-section-title')
                                .delay(0)
                                .animate({'opacity':'0'},200);
                            $('.autocontact-section-list__item:first-child')
                                .delay(200)
                                .animate({'opacity':'0'},250);
                            $('.autocontact-section-list__item:last-child')
                                .delay(300)
                                .animate({'opacity':'0'},250);
                            $('.bg-gradient-first')
                                .delay(0)
                                .animate({'margin-top':-2*gradHeight + 'px'},1200);

                        } else  if(nextIndex == 4 && direction == 'up'){
                            $('.bg-cloud_four')
                                .delay(400)
                                .animate({'opacity':'1', 'top':'0'},800);
                            $('.guru-img_call')
                                .delay(450)
                                .animate({'opacity':'1', 'bottom':'55%'},800);
                            $('.autocontact-section-title')
                                .delay(1000)
                                .animate({'opacity':'1'},800);
                            $('.autocontact-section-list__item:first-child')
                                .delay(600)
                                .animate({'opacity':'1'},250);
                            $('.autocontact-section-list__item:last-child')
                                .delay(600)
                                .animate({'opacity':'1'},250);
                            $('.gradient_first')
                                .delay(0)
                                .animate({'margin-top':-4*gradHeight + 'px'},1200);

                        }else if(index == 4 && direction == 'down'){
                            $('.bg-cloud_four')
                                .delay(400)
                                .animate({'opacity':'0', 'top':'-100%'},800);
                            $('.guru-img_call')
                                .delay(150)
                                .animate({'opacity':'1', 'bottom':'150%'},400);
                            setTimeout(function(){
                                $('.guru-img_call')
                                    .delay(0)
                                    .animate({'bottom':'0'},0);
                            },100);
                            $('.autocontact-section-title')
                                .delay(0)
                                .animate({'opacity':'0'},150);
                            $('.autocontact-section-list__item:first-child')
                                .delay(0)
                                .animate({'opacity':'0'},150);
                            $('.autocontact-section-list__item:last-child')
                                .delay(0)
                                .animate({'opacity':'0'},150);

                        }

                        //       bg-cloud_five
                        if(nextIndex == 5 && direction == 'down'){
                            $('.bg-cloud_five')
                                .delay(400)
                                .animate({'opacity':'1', 'top':'0'},800);
                            $('.products-list')
                                .delay(800)
                                .animate({'opacity':'1'},800);
                            $('.bg-stars_five')
                                .delay(1000)
                                .animate({'opacity':'1'},600);
                            $('.gradient_first')
                                .delay(0)
                                .animate({'margin-top':-6*gradHeight + 'px'},1200);


                        } else if(index == 5 && direction == 'up'){
                            $('.bg-cloud_five')
                                .delay(400)
                                .animate({'opacity':'0', 'top':'100%'},800);
                            $('.products-list')
                                .delay(0)
                                .animate({'opacity':'0'},300);
                            $('.products-list__item').removeClass('animate');
                            $('.bg-stars_five')
                                .delay(0)
                                .animate({'opacity':'0'},400);

                        } else  if(nextIndex == 5 && direction == 'up'){
                            $('.bg-cloud_five')
                                .delay(400)
                                .animate({'opacity':'1', 'top':'0'},800);
                            $('.products-list')
                                .delay(800)
                                .animate({'opacity':'1'},800);
                            $('.bg-stars_five')
                                .delay(1000)
                                .animate({'opacity':'1'},600);

                        }else if(index == 5 && direction == 'down'){
                            $('.bg-cloud_five')
                                .delay(400)
                                .animate({'opacity':'0', 'top':'-100%'},800);
                            $('.products-list')
                                .delay(0)
                                .animate({'opacity':'0'},300);
                            $('.products-list__item').removeClass('animate');
                            $('.bg-stars_five')
                                .delay(0)
                                .animate({'opacity':'0'},400);

                        }

                        //       bg-cloud_six

                        if(nextIndex == 6 && direction == 'down'){
                            $('.bg-cloud_six')
                                .delay(400)
                                .animate({'opacity':'1', 'top':'0'},800);
                            $('.bg-stars_six')
                                .delay(1000)
                                .animate({'opacity':'1'},600);
                            $('.test-section__title')
                                .delay(900)
                                .animate({'opacity':'1'},400);
                            //setTimeout(function(){
                            //    $('.test-section__title')
                            //        .delay(1400)
                            //        .animate({'opacity':'0'},400);
                            //},800);
                            $('.layout-cart')
                                .delay(1900)
                                .animate({'opacity':'1', 'top':'92%'},800);
                            $('.decision-section__i')
                                .delay(0)
                                .animate({'opacity':'0'},0);
                            $('.gradient_first')
                                .delay(0)
                                .animate({'margin-top':-6*gradHeight + 'px'},1200);


                        } else if(index == 6 && direction == 'up'){
                            $('.bg-cloud_six')
                                .delay(400)
                                .animate({'opacity':'0', 'top':'100%'},800);
                            $('.bg-stars_six')
                                .delay(0)
                                .animate({'opacity':'0'},600);
                            $('.layout-cart')
                                .delay(100)
                                .animate({'opacity':'0', 'top':'100%'},800);
                            setTimeout(function(){
                                $('.layout-cart__fail')
                                    .css({'z-index':'20'});
                            },600);
                            $('.layout-cart__fail')
                                .delay(600)
                                .animate({'opacity':'0'},400);
                            $('.decision-section__i')
                                .delay(0)
                                .animate({'opacity':'0'},100);
                            $('.moon-img')
                                .delay(100)
                                .animate({'opacity':'0', 'right':'-50%'},200);
                            $('.rocket-img')
                                .delay(100)
                                .animate({'opacity':'0','left':'0','bottom':'-50%'},200);
                            $('.guru-img_headset')
                                .delay(0)
                                .animate({'opacity':'0', 'bottom':'150%'},800);
                            setTimeout(function(){
                                $('.guru-img_headset')
                                    .delay(0)
                                    .animate({'opacity':'0', 'bottom':'0'},0);
                            },100);
                        } else  if(nextIndex == 6 && direction == 'up'){
                            $('.bg-cloud_six')
                                .delay(400)
                                .animate({'opacity':'1', 'top':'0'},800);
                            $('.bg-stars_six')
                                .delay(1000)
                                .animate({'opacity':'1'},600);
                            $('.test-section__title')
                                .delay(900)
                                .animate({'opacity':'1'},400);
                            //setTimeout(function(){
                            //    $('.test-section__title')
                            //        .delay(1400)
                            //        .animate({'opacity':'0'},400);
                            //},800);
                            $('.layout-cart')
                                .delay(1900)
                                .animate({'opacity':'1', 'top':'92%'},800);
                            $('.decision-section__i')
                                .delay(0)
                                .animate({'opacity':'0'},0);

                        }else if(index == 6 && direction == 'down'){
                            $('.bg-cloud_six')
                                .delay(400)
                                .animate({'opacity':'0', 'top':'-100%'},800);
                            $('.bg-stars_six')
                                .delay(0)
                                .animate({'opacity':'0'},600);
                            $('.layout-cart')
                                .delay(0)
                                .animate({'opacity':'0'},800);
                            setTimeout(function(){
                                $('.layout-cart')
                                    .delay(0)
                                    .animate({'top':'100%'});
                                $('.layout-cart__fail')
                                    .css({'z-index':'20'});
                            },600);
                            $('.layout-cart__fail')
                                .delay(600)
                                .animate({'opacity':'0'},400);
                            $('.decision-section__i')
                                .delay(0)
                                .animate({'opacity':'0'},100);
                            $('.moon-img')
                                .delay(100)
                                .animate({'opacity':'0', 'right':'-50%'},200);
                            $('.rocket-img')
                                .delay(100)
                                .animate({'opacity':'0','left':'0','bottom':'-50%'},200);
                            $('.guru-img_headset')
                                .delay(0)
                                .animate({'opacity':'0','bottom':'150%'},800);
                            setTimeout(function(){
                                $('.guru-img_headset')
                                    .delay(0)
                                    .animate({'opacity':'0', 'bottom':'0'},0);
                            },100);
                        }

                        //       bg-cloud_seven
                        if(nextIndex == 7 && direction == 'down'){
                            $('.trial-section__title')
                                .delay(800)
                                .animate({'opacity':'1'},400);
                            $('.trial-section__i .btn-green')
                                .delay(1000)
                                .animate({'opacity':'1'},400);
                            $('.planet-img')
                                .delay(1000)
                                .animate({'left':'-12%'},400);
                            $('.guru-img_buy')
                                .delay(800)
                                .animate({'opacity':'1'},200);
                            $('.bg-stars_seven')
                                .delay(1000)
                                .animate({'opacity':'1'},600);
                            $('.layout_seven')
                                .addClass('animate');
                            $('.gradient_first')
                                .delay(0)
                                .animate({'margin-top':-6*gradHeight + 'px'},1200);

                        } else if(index == 7 && direction == 'up'){
                            $('.trial-section__title')
                                .delay(0)
                                .animate({'opacity':'0'},250);
                            $('.trial-section__i .btn-green')
                                .delay(0)
                                .animate({'opacity':'0'},250);
                            $('.planet-img')
                                .delay(0)
                                .animate({'left':'-50%'},400);
                            $('.guru-img_buy')
                                .delay(0)
                                .animate({'opacity':'0'},400);
                            $('.bg-stars_seven')
                                .delay(0)
                                .animate({'opacity':'0'},200);
                            setTimeout(function(){
                                $('.layout_seven')
                                    .removeClass('animate');
                            },200);
                        }
                    }
                });
                fullPage = true;
            }
            $('.packages-list').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded owl-center');
            $('.packages-list .owl-stage-outer').children().unwrap();
        },
        fullDest = function(){
            if(fullPage) {
                $.fn.fullpage.destroy('all');
                fullPage = false;
            }
            setTimeout(function(){
                if($('.not-full').length){
                    $('.header-section-text').addClass('animate-load');
                    $('.hed-sec-img').addClass('animate-load');
                }
            }, 500);

            $('.packages-list').owlCarousel({
                center: true,
                loop:true,
                responsive:{
                    0 : {
                        items:1,
                        margin:10,
                        stagePadding: 20
                },
                    480 : {
                        items:2,
                        margin:10,
                        stagePadding: 50
                },
                    880 : {
                        items:3,
                        margin:20,
                        stagePadding: 50
            }
                }
            });
        },
        seeSize = function(winW,winH){
            var fl = false;
            if (winW >= 1370 && winH >= 630) {
                fl = true;
            } else if($('html').hasClass('no-touch') && winW > 960 && winH >= 600) {
                fl = true;
            } else {
                fl = false;
            }
            if(fl){
                fullInit();
                $('body').removeClass('not-full');
            }else{
                fullDest();
                $('body').addClass('not-full');

                $(window).scroll(function () {
                    if ($(this).scrollTop() > 0) {
                        $('.header').addClass('move');
                    }
                    else {
                        $('.header').removeClass('move');
                    }
                });
            }
        };
    seeSize($(window).width(),$(window).height());


    //    BLOCK-ANIMATIONS-MOBILE


    $(window).on('load', function (){
        setTimeout(function(){
            if($('.not-full').length){
                $('.header-section-text').addClass('animate-load');
                $('.hed-sec-img').addClass('animate-load');
            }
        }, 500);

    });


    var timeout;
    $(window).scroll(function(){
        clearTimeout(timeout);

        timeout = setTimeout(function(){
            var wh = $(window).height(),
                scrlTop = $(window).scrollTop();

            $('.argument-section-title').each(function(){
                var el = $(this);
                var offsetTop = el.offset().top;

                if ( (scrlTop + wh) >= offsetTop) {
                    el.addClass('animate-load');
                }
            });
            $('.argument-section-list').each(function(){
                var el = $(this);
                var offsetTop = el.offset().top;

                if ( (scrlTop + wh) >= offsetTop) {
                    el.addClass('animate-load');
                }
            });
            $('.source-info').each(function(){
                var el = $(this);
                var offsetTop = el.offset().top;

                if ( (scrlTop + wh) >= offsetTop) {
                    el.addClass('animate-load');
                }
            });


            $('.transform-section').each(function(){
                var el = $(this);
                var offsetTop = el.offset().top;

                if ( (scrlTop + wh) >= offsetTop) {
                    el.find($('.transform-section-title')).addClass('animate-load');
                }
            });

            $('.autocontact-section-title').each(function(){
                var el = $(this);
                var offsetTop = el.offset().top;

                if ( (scrlTop + wh) >= offsetTop) {
                    el.find('h3').addClass('animate-load');
                }
            });
            $('.autocontact-section-list').each(function(){
                var el = $(this);
                var offsetTop = el.offset().top;

                if ( (scrlTop + wh) >= offsetTop) {
                    el.addClass('animate-load');
                }
            });
            $('.autocontact-section-title .mobile-img').each(function(){
                var el = $(this);
                var offsetTop = el.offset().top;

                if ( (scrlTop + wh) >= offsetTop) {
                    el.addClass('animate-load');
                }
            });

            $('.products-section').each(function(){
                var el = $(this);
                var offsetTop = el.offset().top;

                if ( (scrlTop + wh) >= offsetTop) {
                    el.find($('.products-list')).addClass('animate-load');
                }
            });
            $('.test-section').each(function(){
                var el = $(this);
                var offsetTop = el.offset().top;

                if ( (scrlTop + wh) >= offsetTop) {
                    el.find($('.test-section__title')).addClass('animate-load');
                    el.find($('.layout-cart')).addClass('animate-load');
                }
            });
            $('.trial-section__i').each(function(){
                var el = $(this);
                var offsetTop = el.offset().top;

                if ( (scrlTop + wh) >= offsetTop) {
                    el.find($('.trial-section__title')).addClass('animate-load');
                    el.find($('.btn-green')).addClass('animate-load');
                    el.find($('.ba-copyright')).addClass('animate-load');
                }
            });


        }, 200);

    });

    var _form = $('#homeForm'),
        guruHheadset = $('.guru-img_headset').height();
    //_form.validate({
    //    rules: {
    //        name: {
    //            required: true,
    //            minlength: 3
    //        },
    //
    //        phone: {
    //            required: true,
    //            minlength: 10,
    //            maxlength: 15,
    //            number: true
    //        }
    //    },
    //    messages: {
    //        name: {
    //            required: "Enter your name",
    //            minlength: "Minimum 3"
    //        },
    //        phone: {
    //            required: "Enter phone",
    //            minlength: "Minimum 10",
    //            maxlength: "Maximum 15",
    //            number: "Enter number"
    //        }
    //    },
    //    submitHandler: function(form) {
    //        $.post(
    //            '/wp-content/themes/twentysixteen/include/email.php',
    //            {test:_form.serializeArray()}
    //        ).done(function (data) {
    //                $('.layout-cart__fail')
    //                    .css({'z-index': '21'});
    //                setTimeout(function () {
    //                    $('.layout-cart__fail')
    //                        .delay(0)
    //                        .animate({'opacity': '1'}, 250);
    //                }, 100);
    //                setTimeout(function () {
    //                    _form[0].reset();
    //                }, 150);
    //                $('.layout-cart')
    //                    .delay(4000)
    //                    .animate({'opacity': '0'}, 400);
    //                $('.decision-section__i')
    //                    .delay(4100)
    //                    .animate({'opacity': '1'}, 400);
    //
    //                $('.not-full .layout-cart')
    //                    .delay(4000)
    //                    .animate({'opacity': '0', 'display': 'none'}, 400);
    //                $('.not-full .test-section__title')
    //                    .delay(4000)
    //                    .animate({'opacity': '0', 'display': 'none'}, 400);
    //                $('.not-full .decision-section__i')
    //                    .delay(4100)
    //                    .animate({'opacity': '1', 'top':'0'}, 400);
    //
    //                $('.moon-img')
    //                    .delay(4200)
    //                    .animate({'opacity': '1', 'right': '-5%'}, 700);
    //                $('.rocket-img')
    //                    .delay(4300)
    //                    .animate({'opacity': '1', 'left': '6%', 'bottom': '-5%'}, 700);
    //                $('.guru-img_headset')
    //                    .delay(4750)
    //                    .animate({'opacity': '1', 'bottom': guruHheadset * 0.45}, 800);
    //            }).fail(function () {
    //                // window.location.reload(true);
    //            });
    //        return false;
    //    }
    //
    //});


    //var $element = $('input[type="range"]');
    //
    //$element
    //    .rangeslider({
    //        polyfill: false
    //    });

    if($('.packages-sliders').length) {
        $(function() {
            var $document   = $(document),
                $inputRange = $('input[type="range"]'),
                smsOutput = $('.count-sms'),
                callOutput = $('.count-calls'),
                cartsOutput = $('.count-carts');

            function valueOutput(element) {
                var value = element.value,
                    output = element.parentNode.getElementsByTagName('output')[0];
                output.innerHTML = value;
                smsOutput.val(100 - (callOutput.val()));
            }
            for (var i = $inputRange.length - 1; i >= 0; i--) {
                valueOutput($inputRange[i]);
            }
            $document.on('input', 'input[type="range"]', function(e) {
                var smsPart, callPart, $count;
                valueOutput(e.target);
                smsOutput.val( 100 - (callOutput.val()));

                smsPart = (smsOutput.val())/100;
                callPart = (callOutput.val())/100;
                $count = (((cartsOutput.val() * 0.75) * 2) * callPart) + ((cartsOutput.val() * 0.75) * smsPart);
                console.log(smsPart,callPart,$count);
                if($count <= 750){
                    $('.lite').addClass('suitable-pack')
                        .siblings()
                        .removeClass('suitable-pack');
                }else if($count > 750&& $count <= 1800){
                    $('.startup').addClass('suitable-pack')
                        .siblings()
                        .removeClass('suitable-pack');
                }else if($count > 1800 && $count <= 4200){
                    $('.pro').addClass('suitable-pack')
                        .siblings()
                        .removeClass('suitable-pack');
                }else{
                    $('.business').addClass('suitable-pack')
                        .siblings()
                        .removeClass('suitable-pack');
                }
            });
            // end

            $inputRange.rangeslider({
                polyfill: false
            });
        });

    }


});