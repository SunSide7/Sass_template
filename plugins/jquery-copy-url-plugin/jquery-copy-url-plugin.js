$.fn.copyUrlOnClick = function(showMessage = true, message = 'COPY SUCCEED!', keyCode, hideMessageTimeout = 5000) {
    const copyUrlBtn = $(this)[0];
    const $messageTemplate = `
        <div id="copy-url-message">
            ${message}
        </div>
    `;

    showMessage &&
        $('body').append($messageTemplate);
    
    if (copyUrlBtn) {
        $(this).click(function() {
            // window.navigator.clipboard.writeText(window.location.href);
            window.navigator.clipboard.writeText(event.target.textContent);

            if (showMessage) {

                // SHOW MESSAGE
                $('#copy-url-message').addClass('active')
                
    
                // HIDE MESSAGE
                setTimeout(() => {
                    $('#copy-url-message').removeClass('active')
                }, hideMessageTimeout);

            }
        });
        
        const _this = $(this);

        $(document)[0].addEventListener('keydown', event => {
            if (event.code === keyCode)
                window.navigator.clipboard.writeText(_this[0].textContent);
        })

    }
}


// $('.copyToClipBoardBtn').copyUrlOnClick(true, 'Ссылка скопирована!');