$.fn.copyUrlOnClick = function(
    showMessage = true, 
    message = 'COPY SUCCEED!', 
    keyCode, 
    hideMessageTimeout = 5000
) {
    const copyUrlBtn = $(this)[0];
    const $template = `<div id="copy-url-message">${message}</div>`;
    const _this = $(this);

    if (showMessage) 
        $('body').append($template);
    
    if (copyUrlBtn) {
        $(this).click(function(e) {
            window.navigator.clipboard.writeText(e.target.textContent);

            if (showMessage) {

                // SHOW MESSAGE
                $('#copy-url-message').addClass('active')
    
                // HIDE MESSAGE
                setTimeout(() => {
                    $('#copy-url-message').removeClass('active')
                }, hideMessageTimeout);

            }
        });

        $(document)[0].addEventListener('keydown', event => {
            if (event.code === keyCode)
                window.navigator.clipboard.writeText(_this[0].textContent);
        })

    }
}


// $('.copyToClipBoardBtn').copyUrlOnClick(true, 'Ссылка скопирована!');