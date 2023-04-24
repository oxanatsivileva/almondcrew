$(document).ready(function() {
    /********** Появление меню навигации при нажатии на бургер **********/
    let menu_burger = $('.header__menu-logo');
    let menu_burger_div = $('.header__menu-burger div');
    let menu_nav = $('.header__menu-nav.lvl1');
    let menu_nav_link = $('.header__menu-nav.lvl1 a');
    let menu_nav_arrow = $('.header__menu-nav .arrow');
    menu_burger.click(function() {
        if(!menu_burger.hasClass('active')) {
            menu_burger.addClass('active')
            menu_nav.animate({
                'width': 'toggle',
                'opacity': '1'
            }, 300)
        } else {
            menu_burger.removeClass('active')
            menu_nav.animate({
                'width': 'toggle',
                'opacity': '0'
            }, 300)
        }
    })

    $(document).click(function (e) {
        if (!menu_nav.is(e.target) && menu_nav.has(e.target).length === 0 && !menu_burger.is(e.target) && menu_burger.has(e.target).length === 0 && $(menu_burger).hasClass('active')) {
            menu_burger.removeClass('active')
            menu_nav.animate({
                'width': 'toggle',
                'opacity': '0'
            }, 300)
        }
        // if ( !menu_nav.is(e.target) && !menu_nav_link.is(e.target) && !menu_burger.is(e.target) && !menu_burger_div.is(e.target) && !menu_nav_arrow.is(e.target) && menu_burger.hasClass('active')) {
        //     menu_burger.removeClass('active')
        //     menu_nav.animate({
        //         'width': 'toggle',
        //         'opacity': '0'
        //     }, 300)


        // };
    });

    var delay_popup = 5000;
    setTimeout ("document.getElementById('overlay').style.display='block'", delay_popup);


    // Смена языка
    $('.header__lang').click(function () {
        if (!$('.header__lang-arrow').hasClass('active')) {
            $('.header__lang-arrow').addClass('active')
            $('.header__lang-value.hidden').slideDown(200)
        } else {
            $('.header__lang-arrow').removeClass('active')
            $('.header__lang-value.hidden').slideUp(200)
        }
    })

    // slick-slider intro
    if (window.screen.width > 768){
        $('.intro-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 600,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                            ]
        
        });
    } else {
        $('.intro-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            responsive: [
            
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1
                    }
                },
            
            ]
        
        }); 
    }

    // lookbook-slider

    $('.lookbook-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }


        ]

    });


    // // Интро
    // if ($(window).width() <= 900) {
    //     $('.intro__slides .intro__slide').addClass('active')
    //     $('.intro__slides').slick({
    //         arrows: false,
    //     })
    // } else {
    //     $('.intro__slide').click(function () {
    //         setTimeout(() => {
    //             $('.intro__slide').removeClass('active')
    //             $(this).addClass('active')
    //         }, 100);
    //     })
    // }


    // slick-slider
    $('.best__items').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: `<svg class="arrow-left" width="78" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292943 7.29289C-0.0975824 7.68342 -0.0975824 8.31658 0.292943 8.70711L6.6569 15.0711C7.04743 15.4616 7.68059 15.4616 8.07112 15.0711C8.46164 14.6805 8.46164 14.0474 8.07112 13.6569L2.41427 8L8.07112 2.34315C8.46164 1.95262 8.46164 1.31946 8.07112 0.928933C7.68059 0.538408 7.04743 0.538408 6.6569 0.928933L0.292943 7.29289ZM87.0059 7L1.00005 7V9L87.0059 9V7Z" fill="black"/>
            </svg>`,
        nextArrow: `<svg class="arrow-right" width="78" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M86.7129 8.70711C87.1034 8.31658 87.1034 7.68342 86.7129 7.29289L80.3489 0.928934C79.9584 0.53841 79.3253 0.53841 78.9347 0.928934C78.5442 1.31946 78.5442 1.95262 78.9347 2.34315L84.5916 8L78.9347 13.6569C78.5442 14.0474 78.5442 14.6805 78.9347 15.0711C79.3253 15.4616 79.9584 15.4616 80.3489 15.0711L86.7129 8.70711ZM0 9L86.0058 9V7L0 7L0 9Z" fill="black"/>
            </svg>`,
        responsive: [
            {
                breakpoint: 1215,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 1,
                    centerMode: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 524,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    })


    $('.bestsellers__items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        prevArrow: `<svg class="arrow-left" width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292943 7.29289C-0.0975824 7.68342 -0.0975824 8.31658 0.292943 8.70711L6.6569 15.0711C7.04743 15.4616 7.68059 15.4616 8.07112 15.0711C8.46164 14.6805 8.46164 14.0474 8.07112 13.6569L2.41427 8L8.07112 2.34315C8.46164 1.95262 8.46164 1.31946 8.07112 0.928933C7.68059 0.538408 7.04743 0.538408 6.6569 0.928933L0.292943 7.29289ZM87.0059 7L1.00005 7V9L87.0059 9V7Z" fill="black"/>
            </svg>`,
        nextArrow: `<svg class="arrow-right" width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M86.7129 8.70711C87.1034 8.31658 87.1034 7.68342 86.7129 7.29289L80.3489 0.928934C79.9584 0.53841 79.3253 0.53841 78.9347 0.928934C78.5442 1.31946 78.5442 1.95262 78.9347 2.34315L84.5916 8L78.9347 13.6569C78.5442 14.0474 78.5442 14.6805 78.9347 15.0711C79.3253 15.4616 79.9584 15.4616 80.3489 15.0711L86.7129 8.70711ZM0 9L86.0058 9V7L0 7L0 9Z" fill="black"/>
            </svg>`,
        responsive: [{
                breakpoint: 1220,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false
                }
            },
             {
                 breakpoint: 925,
                 settings: {
                     arrows: false,
                     centerMode: false

                 }
             },
            {
                // breakpoint: 524,
                // settings: {
                //     slidesToShow: 1.5,
                //     slidesToScroll: 1,
                //     arrows: false,
                // }
            }
        ]
    })

    $('.main__instagram-items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        appendArrows: $('.main__instagram-arrows'),
        prevArrow: `<svg class="arrow-left" width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.25101C21 7.44992 20.921 7.64068 20.7803 7.78134C20.6397 7.92199 20.4489 8.00101 20.25 8.00101L2.5605 8.00101L7.281 12.72C7.42183 12.8608 7.50095 13.0518 7.50095 13.251C7.50095 13.4502 7.42183 13.6412 7.281 13.782C7.14017 13.9228 6.94916 14.002 6.75 14.002C6.55084 14.002 6.35983 13.9228 6.219 13.782L0.219 7.78201C0.149155 7.71234 0.0937405 7.62957 0.0559311 7.53846C0.0181217 7.44734 -0.00134087 7.34966 -0.00134087 7.25101C-0.00134087 7.15236 0.0181217 7.05468 0.0559311 6.96356C0.0937405 6.87244 0.149155 6.78968 0.219 6.72001L6.219 0.720008C6.35983 0.579178 6.55084 0.500061 6.75 0.500061C6.94916 0.500061 7.14017 0.579178 7.281 0.720008C7.42183 0.860838 7.50095 1.05184 7.50095 1.25101C7.50095 1.45017 7.42183 1.64118 7.281 1.78201L2.5605 6.50101L20.25 6.50101C20.4489 6.50101 20.6397 6.58002 20.7803 6.72068C20.921 6.86133 21 7.05209 21 7.25101Z" fill="#4E3E30"/>
            </svg>`,
        nextArrow: `<svg class="arrow-right" width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 7.49997C0.5 7.30106 0.579018 7.11029 0.71967 6.96964C0.860322 6.82899 1.05109 6.74997 1.25 6.74997H18.9395L14.219 2.03097C14.0782 1.89014 13.9991 1.69913 13.9991 1.49997C13.9991 1.30081 14.0782 1.1098 14.219 0.968971C14.3598 0.828141 14.5508 0.749023 14.75 0.749023C14.9492 0.749023 15.1402 0.828141 15.281 0.968971L21.281 6.96897C21.3508 7.03864 21.4063 7.1214 21.4441 7.21252C21.4819 7.30364 21.5013 7.40132 21.5013 7.49997C21.5013 7.59862 21.4819 7.6963 21.4441 7.78742C21.4063 7.87854 21.3508 7.9613 21.281 8.03097L15.281 14.031C15.1402 14.1718 14.9492 14.2509 14.75 14.2509C14.5508 14.2509 14.3598 14.1718 14.219 14.031C14.0782 13.8901 13.9991 13.6991 13.9991 13.5C13.9991 13.3008 14.0782 13.1098 14.219 12.969L18.9395 8.24997H1.25C1.05109 8.24997 0.860322 8.17095 0.71967 8.0303C0.579018 7.88965 0.5 7.69888 0.5 7.49997Z" fill="#4E3E30"/>
            </svg>`,
        responsive: [{
            breakpoint: 768,
            settings: 'unslick'
        }, ]
    })

    if ($(window).width() < 992) {
       /* $('.main__blog-items').slick({
            slidesToShow: 2.5,
            infinite: false,
            arrows: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            }, ]
        })*/
    //     $('.detail-photos-left').slick({
    //         slidesToShow: 1,
    //         infinite: false,
    //         arrows: true,
    //         appendArrows: $('.detail-photos-arrows'),
    //         prevArrow: `<svg class="arrow-left" width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.25101C21 7.44992 20.921 7.64068 20.7803 7.78134C20.6397 7.92199 20.4489 8.00101 20.25 8.00101L2.5605 8.00101L7.281 12.72C7.42183 12.8608 7.50095 13.0518 7.50095 13.251C7.50095 13.4502 7.42183 13.6412 7.281 13.782C7.14017 13.9228 6.94916 14.002 6.75 14.002C6.55084 14.002 6.35983 13.9228 6.219 13.782L0.219 7.78201C0.149155 7.71234 0.0937405 7.62957 0.0559311 7.53846C0.0181217 7.44734 -0.00134087 7.34966 -0.00134087 7.25101C-0.00134087 7.15236 0.0181217 7.05468 0.0559311 6.96356C0.0937405 6.87244 0.149155 6.78968 0.219 6.72001L6.219 0.720008C6.35983 0.579178 6.55084 0.500061 6.75 0.500061C6.94916 0.500061 7.14017 0.579178 7.281 0.720008C7.42183 0.860838 7.50095 1.05184 7.50095 1.25101C7.50095 1.45017 7.42183 1.64118 7.281 1.78201L2.5605 6.50101L20.25 6.50101C20.4489 6.50101 20.6397 6.58002 20.7803 6.72068C20.921 6.86133 21 7.05209 21 7.25101Z" fill="#4E3E30"/>
    //             </svg>`,
    //         nextArrow: `<svg class="arrow-right" width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 7.49997C0.5 7.30106 0.579018 7.11029 0.71967 6.96964C0.860322 6.82899 1.05109 6.74997 1.25 6.74997H18.9395L14.219 2.03097C14.0782 1.89014 13.9991 1.69913 13.9991 1.49997C13.9991 1.30081 14.0782 1.1098 14.219 0.968971C14.3598 0.828141 14.5508 0.749023 14.75 0.749023C14.9492 0.749023 15.1402 0.828141 15.281 0.968971L21.281 6.96897C21.3508 7.03864 21.4063 7.1214 21.4441 7.21252C21.4819 7.30364 21.5013 7.40132 21.5013 7.49997C21.5013 7.59862 21.4819 7.6963 21.4441 7.78742C21.4063 7.87854 21.3508 7.9613 21.281 8.03097L15.281 14.031C15.1402 14.1718 14.9492 14.2509 14.75 14.2509C14.5508 14.2509 14.3598 14.1718 14.219 14.031C14.0782 13.8901 13.9991 13.6991 13.9991 13.5C13.9991 13.3008 14.0782 13.1098 14.219 12.969L18.9395 8.24997H1.25C1.05109 8.24997 0.860322 8.17095 0.71967 8.0303C0.579018 7.88965 0.5 7.69888 0.5 7.49997Z" fill="#4E3E30"/>
    //             </svg>`,
    //     })
    }



    // иконка избранного
    $('.favorite__icon').click(function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active')
        } else {
            $(this).removeClass('active')
        }
    })


    // Радио кнопки
    $(document).ready(function () {
        $('.radio-item-1').click(function () {
            $('.radio-item-1 input').removeAttr('checked')
            $(this).find('input').attr('checked', 'checked')
        })
        $('.radio-item-2').click(function () {
            $('.radio-item-2 input').removeAttr('checked')
            $(this).find('input').attr('checked', 'checked')
        })
    })

    $('.intro__slide-button').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear', false);
    });


    // Круг загрузки 
    var time = 10;
    var initialOffset = '-440';
    var i = 1

    /* Need initial run as interval hasn't yet occured... */


    function progressBar() {
        $('.ready .circle_animation').css('stroke-dashoffset', initialOffset - (1 * (initialOffset / time)));
        $('.ready h2 span').text(i);
        if (i == time) {
            clearInterval(interval);
            $('.ready .item').hide()
            $('.ready .return').addClass('active')
            return;
        }
        $('.ready .circle_animation').css('stroke-dashoffset', initialOffset - ((i + 1) * (initialOffset / time)));
        i++;
    }
    $('.registration form-btn').click(function () {
        $('.ready .return').removeClass('active')
        $('.ready h2 span').text('1');
        $('.ready .item').show();
        i = 1;
        setInterval(progressBar, 1000);
    })
    $('.ready .return').click(function () {
        $('.ready .return').removeClass('active')
        $('.ready h2 span').text('1');
        $('.ready .item').show();
        i = 1;
        setInterval(progressBar, 1000);
    })


    // анимация зеленого фона на главной
    // console.log(window.location.pathname)
    // if(window.location.pathname === '/') {
    //     let greenBgPos = $('.main__blog-bg-1').offset().top;
    //     let greenBgH = $('.main__blog-bg-1').height();
    //     let fallibility = 300;
    //     switch ($(window).width()) {
    //         case 768:
    //             fallibility = 200
    //             break;
    //     }

    //     $(window).scroll(function() {
    //         console.log($(window).scrollTop())
    //         console.log($('.main__blog').offset().top)

    //         if($(window).scrollTop() >= $('.main__blog').offset().top - fallibility) {

    //             $('.main__blog-bg-1').addClass('active')
    //         } else {
    //             $('.main__blog-bg-1').removeClass('active')
    //         }
    //     })
    // }


    var infoHeader;
    var headerTimeOut;
    $('.header__menu-nav.desktop li').hover(function (e) {
        headerTimeOut = setTimeout(() => {
            if (infoHeader !== e.target) {
                $(this).children('ul').slideDown(300)
            }
        }, 500);

    }, function () {
        clearTimeout(headerTimeOut)
        $(this).children('ul').slideUp(300)
    })
    // $('.header__menu-nav.mobile li').hover(function(e) {
    //     e.preventDefault()
    // })

    $('.header__menu-nav .arrow').click(function () {
        $(this).parent().parent().children('ul').animate({
            'width': 'toggle',
            'opacity': '1'
        }, 300)
    })
    $('.header__menu-back').click(function () {
        $(this).parent().animate({
            'width': 'toggle',
            'opacity': '0'
        }, 300)
    })


    if ($(window).width() <= 992) {
        $('main').css('margin-top', $('.header__inner.mobile').height() - $('.header__top').height() + 30 + 'px')
        $('.header__inner.mobile').find('.header__menu-nav').css('margin-top', $('.header__inner.mobile').height() + 30 + 'px')
    }

    // slider main__blog
 /*  $('.main__blog-items').slick({
        dots: false,
       slidesToShow: 2,
       slidesToScroll: 1,
       centerMode: true,
      variableWidth: true,
       infinite: true,
        draggable: true
     });
   $('.main__blog-items').on('mouseenter', '.slick-slide', function() {
          $('.main__blog-items').slick('slickNext');
      });*/
  $(".main__blog-items").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        variableWidth: true,
        speed: 300,
        dots: false,
        arrow: false,
     responsive: [
            
                {
                    breakpoint: 855,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        centerMode: true,
                        variableWidth: true,


                    }
                },
            
            ]
    });
})


$('.main__blog-items').hover(() => {
    var sliderMainScroll = $('.main__blog-items .slick-slide');
    for (let i = 0; i < sliderMainScroll.length; ++i) { 
        sliderMainScroll = $('.main__blog-items .slick-slide');
        if ($(sliderMainScroll[i]).hasClass('slick-active')){ 
            console.log('has');
        } else { 
            $(sliderMainScroll[i]).on('mouseenter', () => {
                console.log('11')
                $('.main__blog-items').slick('slickNext');
            }); 
        } 
    }
})

  
//alert(document.documentElement.clientHeight);
window.onscroll = function() {
    //console.log(window.screen.width);
    //alert(document.documentElement.clientWidth);
    //console.log(window.innerWidth);
}   