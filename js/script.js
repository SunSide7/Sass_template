// C:\Users\User\OneDrive\Рабочий стол\prepare path project\js\script.js

// CHECK THEME COLOR
// const $theme = 
    // 'darken-theme';
    // 'darken-theme_blue-border';
    // 'darken-theme_low-contrast';

// if ($theme)
    // $('body').addClass($theme);

let standardMode = null;
switch (editorType) {
    case 'PHP_STORM':
        standardMode = false;
        break;

    
    case 'VSCODE':
        standardMode = true;
        
        break;

    

    default:
        break;
}

$('.wrapper input')[0].addEventListener('input', function () {

    const result = []
    if (standardMode) {
        const resultStringArray = event.target.value.split('\\');
    } else {
        // PHP STORM EDIT
        const resultStringArray = event.target.value.split('/');
    }
    
    resultStringArray.forEach((stringItem, index) => {
        
        if (index !== resultStringArray.length - 1) {
            console.log(stringItem);

            result.push(stringItem);

        }
        
    })

    resultStringified_1 = result.join('\\');
    resultStringified_2 = result.join('/');

    const $template = `<div class="result-string copyToClipBoardBtn">/${resultStringified_2}</div>`;
    
    $('.result').append($template)

    $('.copyToClipBoardBtn').each(function(index) {

        if (index === 0) keyCode = 'Digit4';
        
        $(this).copyUrlOnClick(false, 'Ссылка скопирована!', keyCode);
    })

    window.navigator.clipboard.writeText(`/${resultStringified_2}`);

    event.target.value = '';

    $(this)[0].blur()
})


$(document).ready(function() {
    setTimeout(() => {
        $('.wrapper input').focus();
    }, 10);

    document.onkeyup = function (e) {
        if (e.which == 82) {
            setTimeout(function () {
                location.reload();
            }, 10);
        }
    };
})