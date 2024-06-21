document.addEventListener('DOMContentLoaded', function () {
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
});
