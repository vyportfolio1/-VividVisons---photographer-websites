
document.addEventListener('DOMContentLoaded', function () {
     
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
            description: "A black-and-white photo capturing a towering building beneath a dramatic, expansive sky",
        },
        {
            heroImgF: "img/hero5.jpg",
            heroImgS: "img/hero6.jpg",
            des: "Unknown",
            date: "10.11.2019",
            description: "An elegant photo showcasing a vintage camera, beautifully contrasted against a sleek black backdrop",
        },
        {
            heroImgF: "img/hero7.jpg",
            heroImgS: "img/hero8.jpg",
            des: "Unknown",
            date: "08.04.2020",
            description: "A mesmerizing photo of the moon transitioning with the sun against a mysterious dark background",
        },
        {
            heroImgF: "img/hero9.jpg",
            heroImgS: "img/hero10.jpg",
            des: "Sydney",
            date: "15.01.2021",
            description: "A black-and-white image of a man walking between towering buildings on a quiet street",
        }
    ];

    let currentSlide = 0;

    
    function updateSlide(index) {
        const newSlide = slides[index];

      
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

    
        document.querySelector('.five').textContent = `${index + 1}/5`;
    }

 
    document.querySelector('.right-button').addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide(currentSlide);
    });

    document.querySelector('.left-button').addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide(currentSlide);
    });

 
    updateSlide(currentSlide);
});







window.addEventListener("load", function() {
 
    gsap.delayedCall(1.2, function() {
 
        gsap.to(".nav a", {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            stagger: 0.2
        });

        
        gsap.to(".hero-img-f, .hero-img-s", {
            filter: "none",  
            opacity: 1,
            y: 0,  
            duration: 1.8,
            ease: "power2.out",
            delay: 0.5,
        });

        
        gsap.to(".photo-t", {
            opacity: 1,
            y: 0,
            duration: 1.6,
            ease: "power2.out",
            delay: 1.0,  
        });

        gsap.to(".visual", {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power2.out",
            delay: 1.3,
        });

      
        gsap.to(".fist-part", {
            opacity: 1,
            y: 0,
            duration: 1.6,
            ease: "power2.out",
            delay: 1.5,
        });

       
        gsap.to(".choose, .des, .des-two", {
            opacity: 1,
            y: 0,
            duration: 1.6,
            ease: "power2.out",
            delay: 1.7,
            stagger: 0.3,  
        });
    });

   
    document.querySelectorAll(".hero-img-f, .hero-img-s").forEach(el => {
        el.classList.add("fully-visible");
    });
});



// about us section

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    const aboutSection = document.querySelector(".about-us");

    if (aboutSection) {
        gsap.fromTo(".about-section p", 
            { opacity: 0, y: 50 },  
            {
                scrollTrigger: {
                    trigger: ".about-us",
                    start: "top 80%", 
                    toggleActions: "play none none none",  
                    once: true,  
                },
                opacity: 1,  
                y: 0,  
                duration: 1.5,
                ease: "power3.out",
            }
        );

        gsap.fromTo(".ab h1", 
            { opacity: 0, x: -100 },
            {
                scrollTrigger: {
                    trigger: ".about-us",
                    start: "top 70%",
                    toggleActions: "play none none none",  
                    once: true,  
                },
                opacity: 1,
                x: 0, 
                duration: 1.8,
                ease: "power2.out",
            }
        );

        gsap.fromTo(".ab img", 
            { opacity: 0, x: 100 },
            {
                scrollTrigger: {
                    trigger: ".about-us",
                    start: "top 60%",
                    toggleActions: "play none none none",  
                    once: true,  
                },
                opacity: 1,
                x: 0,
                duration: 1.8,
                ease: "power2.out",
            }
        );

        gsap.fromTo(".Excepti", 
            { opacity: 0, y: 80 },
            {
                scrollTrigger: {
                    trigger: ".about-us",
                    start: "top 50%",
                    toggleActions: "play none none none",  
                    once: true,  
                },
                opacity: 1,
                y: 0,
                duration: 2,
                ease: "power2.out",
            }
        );

        gsap.fromTo(".studio", 
            { opacity: 0, y: 80 },  
            {
                scrollTrigger: {
                    trigger: ".about-us",
                    start: "top 40%",
                    toggleActions: "play none none none",  
                    once: true,  
                },
                opacity: 1,  
                y: 0,  
                duration: 2,
                ease: "power2.out",
            }
        );
    }
});


// random quate section 

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

     
    const quateSection = document.querySelector(".quate");

    if (quateSection) {
        
        gsap.fromTo(".quate img", 
            { opacity: 0, y: 50 },  
            {
                scrollTrigger: {
                    trigger: ".quate",
                    start: "top 80%", 
                    toggleActions: "play none none none",  
                    once: true,  
                },
                opacity: 1,  
                y: 0,  
                duration: 1.5,
                ease: "power3.out",
            }
        );

         
        gsap.fromTo(".quate h1", 
            { opacity: 0, y: -50 },  
            {
                scrollTrigger: {
                    trigger: ".quate",
                    start: "top 70%",
                    toggleActions: "play none none none",  
                    once: true,  
                },
                opacity: 1,  
                y: 0,  
                duration: 1.8,
                ease: "power2.out",
                delay: 0.3,  
            }
        );
    }
});


// Viewpoints section

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    const viewpointSection = document.querySelector(".viewpoints");

    if (viewpointSection) {
         
        gsap.fromTo(".testy h1", 
            { opacity: 0, x: -100 },   
            {
                scrollTrigger: {
                    trigger: ".viewpoints",
                    start: "top 75%",   
                    toggleActions: "play none none none",   
                    once: true,   
                },
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: "power2.out"
            }
        );

         
        gsap.fromTo(".testy p", 
            { opacity: 0, x: -100 },   
            {
                scrollTrigger: {
                    trigger: ".viewpoints",
                    start: "top 70%",  
                    toggleActions: "play none none none",   
                    once: true,   
                },
                opacity: 1,
                x: 0,
                duration: 1.8,
                ease: "power2.out"
            }
        );

       
        gsap.fromTo(".fcard", 
            { opacity: 0, y: 100 },   
            {
                scrollTrigger: {
                    trigger: ".viewpoints",
                    start: "top 65%",   
                    toggleActions: "play none none none",   
                    once: true,   
                },
                opacity: 1,
                y: 0,
                duration: 2,
                stagger: 0.3,  
                ease: "power2.out"
            }
        );
    }
});


// works section

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    const worksSection = document.querySelector(".works");

    if (worksSection) {
        
        gsap.fromTo(".works p", 
            { opacity: 0, y: 50 },   
            {
                scrollTrigger: {
                    trigger: ".works",
                    start: "top 75%",   
                    toggleActions: "play none none none",  
                    once: true   
                },
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
            }
        );

        gsap.fromTo(".works h1", 
            { opacity: 0, x: -100 },   
            {
                scrollTrigger: {
                    trigger: ".works",
                    start: "top 65%",
                    toggleActions: "play none none none",
                    once: true
                },
                opacity: 1,
                x: 0,
                duration: 1.8,
                ease: "power2.out"
            }
        );

        gsap.fromTo(".works .playfare.mt-9", 
            { opacity: 0, x: -100 },   
            {
                scrollTrigger: {
                    trigger: ".works",
                    start: "top 60%",
                    toggleActions: "play none none none",
                    once: true
                },
                opacity: 1,
                x: 0,
                duration: 1.8,
                ease: "power2.out"
            }
        );

        
        gsap.fromTo(".galley img", 
            { opacity: 0, scale: 0.8 },   
            {
                scrollTrigger: {
                    trigger: ".galley",
                    start: "top 50%",
                    toggleActions: "play none none none",   
                    once: true
                },
                opacity: 1,
                scale: 1,   
                duration: 1.5,
                stagger: 0.2,   
                ease: "power3.out"
            }
        );
    }
});


// footer animation

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    
    const clientsSection = document.querySelector(".clent");

    if (clientsSection) {
        gsap.fromTo(".clent p", 
            { opacity: 0, y: 50 },   
            {
                scrollTrigger: {
                    trigger: ".clent",
                    start: "top 75%",   
                    toggleActions: "play none none none",
                    once: true,  
                },
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
            }
        );

        gsap.fromTo(".clent h1", 
            { opacity: 0, x: -100 },   
            {
                scrollTrigger: {
                    trigger: ".clent",
                    start: "top 70%",
                    toggleActions: "play none none none",
                    once: true,
                },
                opacity: 1,
                x: 0,
                duration: 1.8,
                ease: "power2.out",
            }
        );
    }

    
    const footerSection = document.querySelector(".foot");

    if (footerSection) {
        gsap.fromTo(".footer h1", 
            { opacity: 0, x: -100 },   
            {
                scrollTrigger: {
                    trigger: ".foot",
                    start: "top 80%",   
                    toggleActions: "play none none none",
                    once: true,
                },
                opacity: 1,
                x: 0,
                duration: 1.8,
                ease: "power2.out",
            }
        );

        gsap.fromTo(".footer button", 
            { opacity: 0, scale: 0.8 },   
            {
                scrollTrigger: {
                    trigger: ".foot",
                    start: "top 75%",
                    toggleActions: "play none none none",
                    once: true,
                },
                opacity: 1,
                scale: 1,   
                duration: 1.5,
                ease: "power3.out",
            }
        );

        gsap.fromTo(".footer-two .service, .footer-two .About_us", 
            { opacity: 0, y: 50 },   
            {
                scrollTrigger: {
                    trigger: ".foot",
                    start: "top 70%",
                    toggleActions: "play none none none",
                    once: true,
                },
                opacity: 1,
                y: 0,
                duration: 1.5,
                stagger: 0.3,   
                ease: "power3.out",
            }
        );

       
        gsap.fromTo(".social-icons svg", 
            { opacity: 0, y: 50 },   
            {
                scrollTrigger: {
                    trigger: ".foot",
                    start: "top 60%",
                    toggleActions: "play none none none",
                    once: true,
                },
                opacity: 1,
                y: 0,
                duration: 1.5,
                stagger: 0.2,   
                ease: "power3.out",
            }
        );
    }
});


// about section anim

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    
    const mainSection = document.querySelector(".mainm");

    if (mainSection) {
      
        gsap.fromTo(".h-texts h1", 
            { opacity: 0, y: 50 },  
            {
                scrollTrigger: {
                    trigger: ".mainm",
                    start: "top 80%",  
                    once: true,  
                },
                opacity: 1,  
                y: 0,  
                duration: 1.5,  
                ease: "power3.out",
            }
        );

         
        gsap.fromTo(".l-tests", 
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: ".mainm",
                    start: "top 75%",
                    once: true,
                },
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
            }
        );

        // Image animations
        gsap.fromTo(".image-sections img", 
            { opacity: 0, y: 100 },  
            {
                scrollTrigger: {
                    trigger: ".image-sections",
                    start: "top 70%",
                    once: true,
                },
                opacity: 1,
                y: 0,
                duration: 1.8,
                ease: "power3.out",
                stagger: 0.3,  
            }
        );

         
        gsap.fromTo(".insp", 
            { opacity: 0, scale: 0.8 },  
            {
                scrollTrigger: {
                    trigger: ".image-sections",
                    start: "top 60%",
                    once: true,
                },
                opacity: 1,
                scale: 1,  
                duration: 1.8,
                ease: "power3.out",
            }
        );
    }
});


// about us more

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the ABOUT US text
    gsap.fromTo(".about-uscs p", 
        { opacity: 0, y: 50 },  
        {
            scrollTrigger: {
                trigger: ".about-uscs",
                start: "top 80%", 
                once: true, // Ensures animation only happens once
            },
            opacity: 1,  
            y: 0,  
            duration: 1.5,
            ease: "power3.out",
        }
    );

    // Animation for the main heading
    gsap.fromTo(".abcs h1", 
        { opacity: 0, x: -100 },
        {
            scrollTrigger: {
                trigger: ".about-uscs",
                start: "top 70%",
                once: true, // Animation only happens once
            },
            opacity: 1,
            x: 0, 
            duration: 1.8,
            ease: "power2.out",
        }
    );

    // Animation for the first image
    gsap.fromTo(".imgcg", 
        { opacity: 0, x: 100 },
        {
            scrollTrigger: {
                trigger: ".about-uscs",
                start: "top 60%",
                once: true, // Animation only happens once
            },
            opacity: 1,
            x: 0,
            duration: 1.8,
            ease: "power2.out",
        }
    );

    // Animation for the second image (hidden in smaller screens)
    gsap.fromTo(".imgcgg", 
        { opacity: 0, scale: 0.8 },  
        {
            scrollTrigger: {
                trigger: ".about-uscs",
                start: "top 50%",
                once: true, // Animation only happens once
            },
            opacity: 1,  
            scale: 1,  
            duration: 2,
            ease: "power2.out",
        }
    );

    // Animation for the Exceptional Photography text
    gsap.fromTo(".Excepti", 
        { opacity: 0, y: 80 },
        {
            scrollTrigger: {
                trigger: ".about-uscs",
                start: "top 50%",
                once: true, // Animation only happens once
            },
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power2.out",
        }
    );

    // Animation for the paragraphs in the .studio class
    gsap.fromTo(".studio", 
        { opacity: 0, y: 80 },  
        {
            scrollTrigger: {
                trigger: ".about-uscs",
                start: "top 40%",
                once: true, // Animation only happens once
            },
            opacity: 1,  
            y: 0,  
            duration: 2,
            ease: "power2.out",
            stagger: 0.3 // Stagger the animations for each paragraph
        }
    );
});


// services

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the main services heading
    gsap.fromTo(".d h1", 
        { opacity: 0, y: 50 },
        {
            scrollTrigger: {
                trigger: ".services-section-m",
                start: "top 80%", 
                once: true, // Ensures the animation happens only once
            },
            opacity: 1,  
            y: 0,  
            duration: 1.5,
            ease: "power3.out",
        }
    );

    // Animation for the first image
    gsap.fromTo(".d img", 
        { opacity: 0, x: 100 },
        {
            scrollTrigger: {
                trigger: ".services-section-m",
                start: "top 70%",
                once: true, // Ensures the animation happens only once
            },
            opacity: 1,
            x: 0, 
            duration: 1.5,
            ease: "power2.out",
        }
    );

    // Animation for the videography section
    gsap.fromTo(".video", 
        { opacity: 0, y: 100 },
        {
            scrollTrigger: {
                trigger: ".services-section-m",
                start: "top 60%",
                once: true, // Ensures the animation happens only once
            },
            opacity: 1,
            y: 0,
            duration: 1.8,
            ease: "power2.out",
        }
    );

    // Animation for the event photography section
    gsap.fromTo(".vde", 
        { opacity: 0, x: -100 },
        {
            scrollTrigger: {
                trigger: ".services-section-m",
                start: "top 50%",
                once: true, // Ensures the animation happens only once
            },
            opacity: 1,
            x: 0,
            duration: 1.8,
            ease: "power2.out",
        }
    );

    // Animation for the portrait sessions section and Timeless Vision text
    gsap.fromTo(".rose", 
        { opacity: 0, y: 100 },
        {
            scrollTrigger: {
                trigger: ".services-section-m",
                start: "top 40%",
                once: true, // Ensures the animation happens only once
            },
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power2.out",
        }
    );

    // Animation for the fashion photography section
    gsap.fromTo(".vdew", 
        { opacity: 0, x: -100 },
        {
            scrollTrigger: {
                trigger: ".services-section-m",
                start: "top 30%",
                once: true, // Ensures the animation happens only once
            },
            opacity: 1,
            x: 0,
            duration: 1.8,
            ease: "power2.out",
        }
    );

    // Animation for the final image section
    gsap.fromTo(".ser-imf", 
        { opacity: 0, y: 100 },
        {
            scrollTrigger: {
                trigger: ".services-section-m",
                start: "top 20%",
                once: true, // Ensures the animation happens only once
            },
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power2.out",
        }
    );
});

// contacts

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the contact heading
    gsap.fromTo(".si", 
        { opacity: 0, y: 50 }, 
        {
            scrollTrigger: {
                trigger: ".x",
                start: "top 80%", 
                once: true, // Ensures the animation happens only once
            },
            opacity: 1, 
            y: 0, 
            duration: 1.5,
            ease: "power3.out",
        }
    );

    // Animation for the description text
    gsap.fromTo(".bw", 
        { opacity: 0, x: 100 },
        {
            scrollTrigger: {
                trigger: ".x",
                start: "top 70%",
                once: true, // Ensures the animation happens only once
            },
            opacity: 1, 
            x: 0, 
            duration: 1.5,
            ease: "power2.out",
        }
    );

    // Animation for the "Head Office" section
    gsap.fromTo(".txt-cv", 
        { opacity: 0, y: 50 },
        {
            scrollTrigger: {
                trigger: ".x",
                start: "top 60%", 
                once: true, // Ensures the animation happens only once
            },
            opacity: 1,
            y: 0,
            duration: 1.8,
            ease: "power2.out",
        }
    );

    // Animation for the office image
    gsap.fromTo(".img-f", 
        { opacity: 0, x: -100 },
        {
            scrollTrigger: {
                trigger: ".x",
                start: "top 50%", 
                once: true, // Ensures the animation happens only once
            },
            opacity: 1,
            x: 0,
            duration: 1.8,
            ease: "power2.out",
        }
    );
});

// send message

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the form heading and description
    gsap.fromTo(".l, .tr", 
        { opacity: 0, y: 50 }, 
        {
            scrollTrigger: {
                trigger: ".g", // The entire section
                start: "top 80%", 
                once: true, // Ensures animation runs only once
            },
            opacity: 1, 
            y: 0, 
            duration: 1.5,
            ease: "power3.out",
        }
    );

    // Animation for the form inputs (name, email, message)
    gsap.fromTo(".last", 
        { opacity: 0, x: -100 },
        {
            scrollTrigger: {
                trigger: ".g",
                start: "top 70%",
                once: true, // Ensures animation runs only once
            },
            opacity: 1,
            x: 0, 
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.3 // Stagger each input field
        }
    );

    // Animation for the image on the right side
    gsap.fromTo(".imgg img", 
        { opacity: 0, x: 100 },
        {
            scrollTrigger: {
                trigger: ".g",
                start: "top 60%", 
                once: true, // Ensures animation runs only once
            },
            opacity: 1,
            x: 0,
            duration: 1.8,
            ease: "power2.out",
        }
    );
});


// scroll to top
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    // Show the button when the user scrolls down 200px from the top of the page
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.classList.remove("hidden");
            scrollToTopBtn.classList.add("opacity-100");
        } else {
            scrollToTopBtn.classList.add("hidden");
            scrollToTopBtn.classList.remove("opacity-100");
        }
    });

    // Smooth scroll to top when the button is clicked
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});