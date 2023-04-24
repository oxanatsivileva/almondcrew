$(document).ready(function() {
    // $('.detail-photo-left').click(function() {
    //     if(!$(this).hasClass('active')) {
    //         let srcImg = $(this).find('img').attr('src');
    //         let srcPicture = $(this).find('source').attr('srcset');
    //         $('.detail-photo-left').removeClass('active')
    //         $(this).addClass('active')
    //         $('.detail-target-photo').animate({
    //             opacity: 0,
    //         }, 0)
    //         console.log(srcPicture)
            
    //         console.log($('.detail-target-photo').find('img').attr('src'))
    //         setTimeout(() => {
    //             $('.detail-target-photo').find('img').attr('src', srcImg)
    //             $('.detail-target-photo').find('source').attr('srcset', srcPicture)
    //             $('.detail-target-photo').animate({
    //                 opacity: 1,
    //             }, 500)
                
    //         }, 0);
    //     }
    // })

    $('.detail-color-wrap').click(function() {
        if(!$(this).hasClass('active')) {
            $('.detail-color-wrap').removeClass('active')
            $(this).addClass('active')
        }
    })

    $('.detail-property-title').click(function() {
        if(!$(this).hasClass('active')) {
            $('.detail-property-title').removeClass('active')
            $('.detail-property-content').slideUp(500)
            $(this).parent().find('.detail-property-content').slideDown(500)
            $(this).addClass('active')
        } else {
            $(this).removeClass('active')
            $(this).parent().find('.detail-property-content').slideUp(500)
        }
    })
})