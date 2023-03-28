// C:\Users\User\OneDrive\Рабочий стол\prepare path project\js\script.js

// CHECK THEME COLOR
const $theme = 'darken-theme';

if ($theme)
    $('body').addClass($theme);




$('.wrapper input').change(function() {
    console.log('CHANGE');
    console.log('EVENT TARGET VALUE:', event.target.value);

    const result = []
    const resultStringArray = event.target.value.split('\\');
    // PHP STORM EDIT
    // const resultStringArray = event.target.value.split('/');
    
    resultStringArray.forEach((stringItem, index) => {
        
        if (index !== resultStringArray.length - 1) {
            console.log(stringItem);

            result.push(stringItem);

        }
        
    })

    resultStringified_1 = result.join('\\');
    resultStringified_2 = result.join('/');

    // const $template = `
    // <div class="result-string copyToClipBoardBtn">/${resultStringified_1}</div>
    // <br>
    // <br>
    // <div class="result-string copyToClipBoardBtn">/${resultStringified_2}</div>
    // `;

    const $template = `<div class="result-string copyToClipBoardBtn">/${resultStringified_2}</div>`;

    
    
    $('.result').append($template)

    $('.copyToClipBoardBtn').each(function(index) {

        // if (index === 0) keyCode = 'Digit1';
        // if (index === 1) keyCode = 'Digit4';

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
            // if (e.ctrlKey && e.shiftKey && e.which == 70) {
            setTimeout(function () {
                location.reload();
            }, 10);
        }
    };
})