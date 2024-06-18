document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const aniwords = document.getElementById('aniwords');
    const messages = ["Buy Art Online.", "Art by Archana"];
    let lastScrollTop = 0;
    let messageIndex = 0;

    // Function to toggle messages
    function toggleMessage() {
        messageIndex = (messageIndex + 1) % messages.length;
        aniwords.textContent = messages[messageIndex];
    }

    // Change message every 3 seconds
    setInterval(toggleMessage, 3000);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

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
