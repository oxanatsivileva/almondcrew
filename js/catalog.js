$(document).ready(function() {
    // $('.catalog__menu li').click(function(event) {
    //     event.preventDefault()
    //     if($(this).children('ul').length !== 0) {
    //         if(!$(this).hasClass('active')) {
    //             $('.catalog__menu li').removeClass('active')
    //             $('.catalog__menu li').children('ul').slideUp(500)
    //             $(this).addClass('active')
    //             $(this).children('ul').slideDown(500)
    //         }
    //     } else {
    //         let url = $(this).children('a').attr('href')
    //         console.log($(this).children('a'))
    //         $(location).attr('href', url)
    //     }
    // })

    // sidebar
    var info;
    var catalogTimeOut;
    $('.catalog__menu-lvl1 > li').hover(function(e) {

        catalogTimeOut = setTimeout(() => {
            if(info !== e.target) {
                $(this).children('ul').slideDown(300)
            }
            
        }, 500);
    }, function() {
        clearTimeout(catalogTimeOut)
        $(this).children('ul').slideUp(300)
    })

    var info;
    var catalogTimeOut;
    $('.catalog__filter-params > li').hover(function(e) {

        catalogTimeOut = setTimeout(() => {
            if(info !== e.target) {
                $(this).children('div').slideDown(300)
            }
            
        }, 500);
    }, function() {
        clearTimeout(catalogTimeOut)
        $(this).children('div').slideUp(300)
    })

    // sort
    var sortDefText;
    // $('.catalog-sort > div').hover(function() {
    //     // $('.catalog-sort ul').slideUp(300)
    //     // clearTimeout(catalogTimeOut)
    //     $(this).find('ul').slideDown(300)
    //     if(!$(this).hasClass('active')) {
    //         $(this).addClass('active')
    //     } else {
    //         $(this).removeClass('active')
    //         $(this).find('ul').slideUp(300)
    //     }
    // }, function(e) {
    //     catalogTimeOut = setTimeout(() => {
    //         if($(this) !== e.target) {
    //             $(this).find('ul').slideUp(300)
    //         }
    //     }, 500);
    // })
    $('.catalog-sort > div').click(function() {
        // $('.catalog-sort ul').slideUp(300)
        // clearTimeout(catalogTimeOut)
        if(!$(this).hasClass('active')) {
            $(this).find('ul').slideDown(300)
            $(this).addClass('active')
        } else {
            $(this).removeClass('active')
            $(this).find('ul').slideUp(300)
        }
    })
    $('.catalog-sort li').click(function() {
        location.reload();
        // sortDefText = $(this).text()
        // $(this).parents('.catalog-sort > div').find('.catalog-sort-def').text(sortDefText)
        // $(this).parents('ul').slideUp(300)
    })
})