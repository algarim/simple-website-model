// HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


// Make menu dissapear on scroll
let prevScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let currentScrollY = window.scrollY;

    if (window.innerWidth < 1280) {
        header.style.top = (currentScrollY > prevScrollY) ? '-100%' : '0';
    }

    prevScrollY = currentScrollY;
});


// Make nav-links highlight when over section
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if ((window.scrollY >= sectionTop - window.innerHeight * 0.25) && (window.scrollY < sectionBottom - window.innerHeight * 0.25)) {
            navLinks[index].classList.add('nav-link-active');
        }
        else {
            navLinks[index].classList.remove('nav-link-active');
        }
    });
});


// SERVICES TABS

const serviceItems = document.querySelectorAll(".services-item");

serviceItems.forEach(service => {
    const icon = service.querySelector("i");
    const description = service.querySelector(".service-description")

    icon.addEventListener("click", () => {
        icon.classList.toggle("fa-plus");
        icon.classList.toggle("fa-minus");

        description.classList.toggle("active");
    })
});


// EMAIL JS

const form = document.getElementById('contact-form');
const inputs = document.querySelectorAll('.form-input');
const error = document.querySelector(".form-error")

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let emptyFields = 0;

    for (let i = 1; i < inputs.length; i++) {
        if (inputs[i].value.trim().length === 0) {
            inputs[i].classList.add("empty");
            emptyFields++;
            error.style.display = "block";
        } else {
            inputs[i].classList.remove("empty");
        }
    };

    if (emptyFields === 0) {
        error.style.display = "none";

        form.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('contact_service', 'contact_form', form)
            .then(() => {
                console.log('Contact form sent successfully!');

                Swal.fire(
                    'Success!',
                    'Contact form sent',
                    'success'
                );
                form.reset();
                
            })
            .catch((error) => {
                console.log('FAILED...', error);
            });
    }
});