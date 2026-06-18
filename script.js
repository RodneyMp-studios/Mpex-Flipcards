// =========================
// MPRODNEY-STUDIO SAFE SCRIPT (FIXED)
// =========================

// NAVBAR SHADOW ON SCROLL
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    navbar.style.boxShadow =
        window.scrollY > 50
        ? "0 8px 25px rgba(0,0,0,0.12)"
        : "0 2px 20px rgba(0,0,0,0.08)";
});

// =========================
// HERO ANIMATION (SAFE CHECK)
// =========================
window.addEventListener("load", () => {

    const heroTitle = document.querySelector(".hero h1");
    const heroSubtitle = document.querySelector(".hero h2");
    const heroText = document.querySelector(".hero p");

    if (!heroTitle || !heroSubtitle || !heroText) return;

    heroTitle.style.opacity = "0";
    heroSubtitle.style.opacity = "0";
    heroText.style.opacity = "0";

    setTimeout(() => {
        heroTitle.style.transition = "1s";
        heroTitle.style.opacity = "1";
    }, 300);

    setTimeout(() => {
        heroSubtitle.style.transition = "1s";
        heroSubtitle.style.opacity = "1";
    }, 700);

    setTimeout(() => {
        heroText.style.transition = "1s";
        heroText.style.opacity = "1";
    }, 1100);
});

// =========================
// FLOATING ORBS (FIXED CSS DEPENDENCY)
// =========================
function createOrb() {
    const orb = document.createElement("div");
    orb.classList.add("orb");

    document.body.appendChild(orb);

    const size = Math.random() * 120 + 40;

    orb.style.width = size + "px";
    orb.style.height = size + "px";

    orb.style.left = Math.random() * window.innerWidth + "px";
    orb.style.top = Math.random() * window.innerHeight + "px";

    setTimeout(() => orb.remove(), 12000);
}

setInterval(createOrb, 3000);

// =========================
// SECTION REVEAL (SAFE)
// =========================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".section").forEach(section => {
    observer.observe(section);
});

// =========================
// PROJECT CARD EFFECT (SAFE)
// =========================
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px) scale(1)";
    });
});
