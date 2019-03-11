document.querySelector('.contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    fetch('form.php', {
        method: 'POST',
        body: new FormData(document.querySelector('.contact-form'))
    })
        .then( response => response.text() )
        .then( html => document.querySelector('.server-response')
                                .innerHTML = html );
}