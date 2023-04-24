$(document).ready(function() {

    let cartPrice = document.querySelector('.cart-price')
    let beginTotal = $('.cart-amount-total')
    let sales = $('.cart-amount-sales')
    let endTotal = $('.cart-final-total')
    let price = 0;
    // function cartCalcMinus(elem) {
    //     for (let i = 0; i < elem.length; i++) {
    //         const element = elem[i];
    //         price = price - element.text()
    //         console.log(price)
    //     }
        
    // }

    $('.cart-minus').click(function() {
        let cartValue = $(this).parent().find('.cart-value').text();
        if(cartValue !== 0) {
            $(this).parent().find('.cart-value').text(--cartValue)
        }
        if(cartValue == 0) {
            $(this).parents('.cart-item').hide()
        }
    })
    $('.cart-plus').click(function() {
        let cartValue = $(this).parent().find('.cart-value').text();
        if(cartValue !== 0) {
            $(this).parent().find('.cart-value').text(++cartValue)
        }
    })    
})