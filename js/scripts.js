document.addEventListener('DOMContentLoaded', function () {
    const words = [
        'a valorant coach.',
        'a strategy expert.',
        'an aim practitioner.',
        'experienced in esports.',
        'a live comp player.',
        'a radiant player'
    ];

    const typed = new Typed('#typing', {
        strings: words,
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,
        onComplete: (self) => {
            const imWrapper = document.querySelector('.im-wrapper');
            imWrapper.style.transform = 'translateX(0.75em)';
        },
        preStringTyped: (arrayPos, self) => {
            const imWrapper = document.querySelector('.im-wrapper');
            imWrapper.style.transform = 'translateX(0)';
        }
    });

    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, { passive: false });

    AOS.init({
        duration: 1000,
        once: true,
    });

    window.addEventListener('load', function () {
        document.querySelector('.content-area').style.visibility = 'visible';
        document.getElementById('preloader').style.display = 'none';
    });

    document.querySelectorAll('.project-showcase, .social').forEach((el) => {
        el.style.visibility = 'visible';
        AOS.refresh();
    });

    document.querySelectorAll('.discord-button').forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const discordUsername = 'vrqdalol';
            navigator.clipboard.writeText(discordUsername).then(() => {
                const copyMessage = document.querySelector('.copy-message');
                copyMessage.classList.add('show');
                setTimeout(() => {
                    copyMessage.classList.remove('show');
                }, 2000);
            });
        });
    });
});
