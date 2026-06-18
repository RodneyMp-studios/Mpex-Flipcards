// =========================
// MPRODNEY-STUDIO SCRIPT
// =========================

// NAVBAR SHADOW ON SCROLL

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
        "0 8px 25px rgba(0,0,0,0.12)";

    }
    else {

        navbar.style.boxShadow =
        "0 2px 20px rgba(0,0,0,0.08)";

    }

});

// =========================
// HERO ANIMATION
// =========================

window.addEventListener("load", () => {

    const heroTitle =
    document.querySelector(".hero h1");

    const heroSubtitle =
    document.querySelector(".hero h2");

    const heroText =
    document.querySelector(".hero p");

    heroTitle.style.opacity = "0";
    heroSubtitle.style.opacity = "0";
    heroText.style.opacity = "0";

    setTimeout(() => {

        heroTitle.style.transition =
        "1s";

        heroTitle.style.opacity = "1";

        heroTitle.style.transform =
        "translateY(0px)";

    }, 300);

    setTimeout(() => {

        heroSubtitle.style.transition =
        "1s";

        heroSubtitle.style.opacity = "1";

    }, 700);

    setTimeout(() => {

        heroText.style.transition =
        "1s";

        heroText.style.opacity = "1";

    }, 1100);

});

// =========================
// FLOATING GRADIENT ORBS
// =========================

function createOrb() {

    const orb =
    document.createElement("div");

    orb.classList.add("orb");

    document.body.appendChild(orb);

    const size =
    Math.random() * 150 + 50;

    orb.style.width =
    size + "px";

    orb.style.height =
    size + "px";

    orb.style.left =
    Math.random() * window.innerWidth + "px";

    orb.style.top =
    Math.random() * window.innerHeight + "px";

    setTimeout(() => {

        orb.remove();

    }, 12000);

}

setInterval(createOrb, 2000);

// =========================
// SECTION REVEAL
// =========================

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document
.querySelectorAll(".section")
.forEach(section=>{

observer.observe(section);

});

// =========================
// PROJECT CARD EFFECT
// =========================

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform =
"translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"translateY(0px) scale(1)";

});

});

// =========================
// STUDIO TYPEWRITER
// =========================

const studioText =
"Building Games, Websites & Digital Solutions";

let i = 0;

function typeWriter(){

const target =
document.querySelector(".hero h2");

if(!target) return;

if(i < studioText.length){

target.innerHTML +=
studioText.charAt(i);

i++;

setTimeout(typeWriter,50);

}

}

window.addEventListener("load",()=>{

const target =
document.querySelector(".hero h2");

if(target){

target.innerHTML = "";

setTimeout(typeWriter,1500);

}

});

// =========================
// BUTTON RIPPLE EFFECT
// =========================

document
.querySelectorAll(".btn-primary,.btn-secondary")
.forEach(button=>{

button.addEventListener("click",function(e){

let ripple =
document.createElement("span");

ripple.classList.add("ripple");

this.appendChild(ripple);

let x =
e.clientX -
e.target.offsetLeft;

let y =
e.clientY -
e.target.offsetTop;

ripple.style.left =
x + "px";

ripple.style.top =
y + "px";

setTimeout(()=>{

ripple.remove();

},700);

});

});

// =========================
// END
// =========================
