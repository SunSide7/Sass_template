$.fn.copyUrlOnClick = function(showMessage = true, message = 'COPY SUCCEED!', hideMessageTimeout = 5000) {
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

    }
}


// $('.copyToClipBoardBtn').copyUrlOnClick(true, 'Ссылка скопирована!');