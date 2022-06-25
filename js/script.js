// C:\Users\User\OneDrive\Рабочий стол\prepare path project\js\script.js

$('.wrapper input').change(function() {
    console.log('CHANGE');
    console.log('EVENT TARGET VALUE:', event.target.value);

    const result = []
    const resultStringArray = event.target.value.split('\\');
    
    resultStringArray.forEach((stringItem, index) => {
        
        if (index !== resultStringArray.length - 1) {
            console.log(stringItem);

            result.push(stringItem);

        }
        
    })

    resultStringified_1 = result.join('\\');
    resultStringified_2 = result.join('/');

    const $template = `
    <div class="result-string copyToClipBoardBtn">${resultStringified_1}</div>
    <br>
    <br>
    <div class="result-string copyToClipBoardBtn">${resultStringified_2}</div>
    `
    
    $('.result').append($template)

    // $('.copyToClipBoardBtn').copyUrlOnClick(false, 'Ссылка скопирована!');

    event.target.value = '';
})
