$(function() {
    $('.smooth').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 130
            }, 500);
        }
    });
});

$(document).ready(function() {
    $('.brands-carousel').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
    $('.reviews-carousel').slick({
        prevArrow: '<i class="fas fa-angle-left"></i>',
        nextArrow: '<i class="fas fa-angle-right"></i>'
    });
});


document.querySelector('.contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    fetch('form.php', {
            method: 'POST',
            body: new FormData(document.querySelector('.contact-form'))
        })
        .then(response => response.text())
        .then(html => document.querySelector('.server-response')
            .innerHTML = html);
}


const hideShow = document.getElementById('more-less-items');
document.getElementById('more-less-btn').addEventListener('click', showHideContent);

function showHideContent() {
    if (hideShow.getAttribute('class') === 'hidden') {
        // hideShow.removeAttribute('class', 'hidden');
        hideShow.setAttribute('class', 'visible');
        document.getElementById('more-less-btn').innerHTML = 'View less';

    }
    else {
        hideShow.setAttribute('class', 'hidden');
        document.getElementById('more-less-btn').innerHTML = 'View all works';
    }
};
