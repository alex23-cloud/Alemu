// ===================================
// 1. Smooth Scrolling for Navigation
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Select all internal links in the navigation
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor link behavior
            e.preventDefault();

            // Get the target element ID (e.g., '#profile')
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll to the target smoothly, adjusting for the fixed header height (approx 60px)
                const headerOffset = 60; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});


// ===================================
// 2. Scroll to Top Button Functionality
// ===================================

function createScrollToTopButton() {
    const btn = document.createElement('button');
    btn.id = 'scrollToTopBtn';
    btn.innerHTML = '&#8593;'; // Up arrow character
    document.body.appendChild(btn);

    // Show/Hide button based on scroll position
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    };

    // Scroll to the top when the button is clicked
    btn.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}


createScrollToTopButton();
