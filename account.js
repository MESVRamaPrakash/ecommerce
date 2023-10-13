function changebg() {
    var nav = document.getElementById('nav');
    var scrollvalues = window.scrollY;
    if (scrollvalues < 70) {
        nav.classList.remove('bgcolor');
    } else {
        nav.classList.add('bgcolor');
    }
}
window.addEventListener('scroll', changebg);


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});
const hidden = document.querySelectorAll('.hidden');
hidden.forEach((el) => observer.observe(el));

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show1');
        }
        else {
            entry.target.classList.remove('show1');
        }
    });
});
const hidden1 = document.querySelectorAll('.hidden1');
hidden1.forEach((el) => observer1.observe(el));
