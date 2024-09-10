    // Data for images and text
    const slides = [
        {
            heroImgF: "img/hero1.jpg",
            heroImgS: "img/hero2.jpg",
            des: "London",
            date: "14.09.2017",
            description: "A striking black-and-white portrait of a woman, her gaze intense, capturing raw emotion and timeless beauty",
        },
        {
            heroImgF: "img/hero3.jpg",
            heroImgS: "img/hero4.jpg",
            des: "Paris",
            date: "22.05.2018",
            description: "A vibrant sunset illuminating the Paris skyline, capturing the essence of romance and history.",
        },
        // Add more slides as needed
    ];

    let currentSlide = 0;

    // Function to update the content
    function updateSlide(index) {
        const newSlide = slides[index];

        // Animate the images and text with GSAP
        gsap.to('.hero-img-f', {
            duration: 0.5,
            opacity: 0,
            onComplete: function () {
                document.querySelector('.hero-img-f').src = newSlide.heroImgF;
                gsap.to('.hero-img-f', { duration: 0.5, opacity: 1 });
            }
        });

        gsap.to('.hero-img-s', {
            duration: 0.5,
            opacity: 0,
            onComplete: function () {
                document.querySelector('.hero-img-s').src = newSlide.heroImgS;
                gsap.to('.hero-img-s', { duration: 0.5, opacity: 1 });
            }
        });

        gsap.to('.des', {
            duration: 0.5,
            opacity: 0,
            onComplete: function () {
                document.querySelector('.des p.r').textContent = newSlide.des;
                document.querySelector('.des p.v').textContent = newSlide.date;
                gsap.to('.des', { duration: 0.5, opacity: 1 });
            }
        });

        gsap.to('.des-two', {
            duration: 0.5,
            opacity: 0,
            onComplete: function () {
                document.querySelector('.des-two p.d').textContent = newSlide.description;
                gsap.to('.des-two', { duration: 0.5, opacity: 1 });
            }
        });
    }

    // Event listeners for buttons
    document.querySelector('.right-button').addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide(currentSlide);
    });

    document.querySelector('.left-button').addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide(currentSlide);
    });