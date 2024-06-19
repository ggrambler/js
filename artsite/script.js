document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    let delta = 5; // Adjust this value to control sensitivity of scroll direction detection

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (Math.abs(lastScrollTop - scrollTop) <= delta) {
            return; // If scroll distance is less than delta, ignore
        }

        if (scrollTop > lastScrollTop) {
            // Scroll down
            navbar.classList.add('hidden');
        } else {
            // Scroll up
            navbar.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });

    // Initially show the navbar
    navbar.classList.remove('hidden');
});
