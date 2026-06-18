// Smooth Scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button Click Alert
document.querySelector('.btn').addEventListener('click', () => {
    alert("Thanks for connecting! Aap yahan apna contact form link kar sakte hain.");
});