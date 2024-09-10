document.addEventListener("DOMContentLoaded", function () {
    const mobileButton = document.querySelector(".mobile-button");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeButton = document.querySelector(".close-button");
    const menuItems = document.querySelectorAll(".mobile-menu a");

    let isMenuOpen = false;

    if (mobileButton && mobileMenu && closeButton && menuItems) {
     
        function openMenu() {
            gsap.to(mobileMenu, {
                y: 0,  
                opacity: 1,  
                duration: 1,  
                ease: "power3.out",  
                display: "flex",  
            });

            gsap.to(menuItems, {
                opacity: 1,  
                duration: 0.8,  
                stagger: 0.2,  
                ease: "power2.out",  
            });

            isMenuOpen = true;
        }

        // Function to close the mobile menu
        function closeMenu() {
            gsap.to(menuItems, {
                opacity: 0,  
                duration: 0.5,  
                stagger: 0.1,  
                ease: "power2.in",  
            });

            gsap.to(mobileMenu, {
                y: "-100%",  
                opacity: 0,  
                duration: 1,  
                ease: "power3.in",  
                onComplete: () => {
                    mobileMenu.style.display = "none";  
                },
            });

            isMenuOpen = false;
        }

        // Toggle menu on button click
        mobileButton.addEventListener("click", function () {
            if (!isMenuOpen) {
                mobileMenu.style.display = "flex";  
                openMenu();
            }
        });

        // Close menu on close button click
        closeButton.addEventListener("click", function () {
            if (isMenuOpen) {
                closeMenu();
            }
        });
    } else {
        console.error("One or more elements are missing from the DOM.");
    }
});
