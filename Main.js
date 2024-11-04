let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
    };
});

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('activ');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.screenY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['CS Student', 'Front-end Developer', 'Penetration Tester', 'Bug Hunter'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

function toggleText() {
    const moreText = document.getElementById("more-text");
    const btnText = document.getElementById("toggle-btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.textContent = "Show less";
    } else {
        moreText.style.display = "none";
        btnText.textContent = "Read more";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');

    function changeNavbarColor() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navbarLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', changeNavbarColor);
});