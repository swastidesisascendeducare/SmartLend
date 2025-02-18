// scripts/script.js

// Form Submission Handler
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const email = event.target.querySelector("input[type='email']").value;
    const message = event.target.querySelector("textarea").value;

    // For now, just log the data (you can later connect this with a backend or API)
    console.log("Email:", email);
    console.log("Message:", message);

    alert("Thank you for reaching out! We will get back to you shortly.");
});

// GSAP animation for the Hero section text
gsap.from(".hero h2", { opacity: 0, y: -100, duration: 1 });
gsap.from(".cta-btn", { opacity: 0, y: 100, duration: 1, delay: 0.5 });

// ScrollMagic for Scroll-triggered Animations
const controller = new ScrollMagic.Controller();

// Animation for Features section (scale-up effect)
document.querySelectorAll('.feature').forEach((feature) => {
    new ScrollMagic.Scene({
        triggerElement: feature,
        triggerHook: 0.8,
        offset: 50,
    })
    .setClassToggle(feature, "visible") // Add the "visible" class when the feature is in view
    .addTo(controller);
});

// GSAP animation for features when they become visible
gsap.from(".feature", {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    stagger: 0.3,
    ease: "back.out(1.7)",
    paused: true,
});
