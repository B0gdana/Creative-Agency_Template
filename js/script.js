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

// const hideShow = document.getElementById('more-less-items');
// document.getElementById('more-less-btn');
// hideShow.addEventListener('click', showHideContent);
// function showHideContent() {
//     if (hideShow.style.display === 'none') {
//         hideShow.style.display = 'flex';
//        document.getElementById('more-less-btn').innerText = 'View less';
        
//     }
//     else {
//         hideShow.style.display = 'none';
//         document.getElementById('more-less-btn').innerText = 'View all works';
//     }
// }
