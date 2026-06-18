window.addEventListener("scroll",()=>{
    const nav=document.querySelector(".navbar");
    if(nav){
        nav.style.boxShadow=window.scrollY>50
        ? "0 10px 30px rgba(0,0,0,0.3)"
        : "none";
    }
});

/* ================= SECTION REVEAL ================= */

const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
        if(e.isIntersecting){
            e.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".section")
.forEach(s=>observer.observe(s));

/* ================= FLOATING ORBS ================= */

function orb(){
    const o=document.createElement("div");
    o.className="orb";
    document.body.appendChild(o);

    const size=Math.random()*120+40;
    o.style.width=size+"px";
    o.style.height=size+"px";
    o.style.left=Math.random()*window.innerWidth+"px";
    o.style.top="100vh";

    setTimeout(()=>o.remove(),14000);
}

setInterval(orb,2500);

/* ================= STUDIO TYPE TEXT ================= */

const text="Building Games, Websites & Digital Solutions";
let i=0;

window.addEventListener("load",()=>{
    const el=document.querySelector(".hero h2");
    if(!el)return;

    el.innerHTML="";

    function type(){
        if(i<text.length){
            el.innerHTML+=text.charAt(i);
            i++;
            setTimeout(type,45);
        }
    }

    setTimeout(type,800);
});

/* ================= RIPPLE ================= */

document.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click",function(e){

        const r=document.createElement("span");
        r.classList.add("ripple");
        this.appendChild(r);

        const x=e.clientX-this.offsetLeft;
        const y=e.clientY-this.offsetTop;

        r.style.left=x+"px";
        r.style.top=y+"px";

        setTimeout(()=>r.remove(),700);
    });
});
