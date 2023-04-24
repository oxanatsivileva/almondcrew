$(document).ready(function() {
    let passinput = document.querySelector('#edit-password')
    passinput.addEventListener('input', function() {
        checkPassword(passinput)
        
    })
})

function checkPassword(input, el) {
    console.log(input.value.split(''))
    var password = input.value.split(''); // Получаем пароль из формы
    var s_letters = "qwertyuiopasdfghjklzxcvbnm"; // Буквы в нижнем регистре
    var b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM"; // Буквы в верхнем регистре
    var digits = "0123456789"; // Цифры
    var specials = "!@#$%^&*()_-+=\|/.,:;[]{}"; // Спецсимволы
    var is_s = false; // Есть ли в пароле буквы в нижнем регистре
    var is_b = false; // Есть ли в пароле буквы в верхнем регистре
    var is_d = false; // Есть ли в пароле цифры
    var is_sp = false; // Есть ли в пароле спецсимволы
    for (var i = 0; i < password.length; i++) {
        /* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
        if (!is_s && s_letters.indexOf(password[i]) != -1) is_s = true;
        else if (!is_b && b_letters.indexOf(password[i]) != -1) is_b = true;
        else if (!is_d && digits.indexOf(password[i]) != -1) is_d = true;
        else if (!is_sp && specials.indexOf(password[i]) != -1) is_sp = true;
    }
    var rating = 0;
    var text = 0;
    if (is_s) rating++; // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
    if (is_b) rating++; // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
    if (is_d) rating++; // Если в пароле есть цифры, то увеличиваем рейтинг сложности
    if (is_sp) rating++; // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
    /* Далее идёт анализ длины пароля и полученного рейтинга, и на основании этого готовится текстовое описание сложности пароля */
    if (password.length < 6 && rating < 3) text = 3;
        else if (password.length < 6 && rating >= 3) text = 6;
        else if (password.length >= 8 && rating < 3) text = 6;
        else if (password.length >= 8 && rating >= 3) text = 10;
        else if (password.length >= 6 && rating == 1) text = 3;
        else if (password.length >= 6 && rating > 1 && rating < 4) text = 6;
        else if (password.length >= 6 && rating == 4) text = 10;
    
    for (let i = 0; i < $('.check-pass div').length; i++) {
        const element = $('.check-pass div')[i];
        $(element).css('background', '#FBF6F2')
        for (let j = 0; j < text; j++) {
            const subelement = $('.check-pass div')[j];
            $(subelement).css('background', '#D5B797')
        }
        
        console.log(rating)
        console.log(text)
        console.log('Граница измерений')
    }
    console.log(password)
    return false; // Форму не отправляем
}