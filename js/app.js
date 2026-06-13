
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});




const contactForm =
document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

alert(
"☕ Thank you! Your message has been sent."
);

contactForm.reset();

});

}




const reveals =
document.querySelectorAll(
".menu-card,.stat-card,.timeline-item,.review-card"
);

function revealElements(){

reveals.forEach(item=>{

const top =
item.getBoundingClientRect().top;

const height =
window.innerHeight;

if(top < height - 100){

item.classList.add("active");

}

});

}

window.addEventListener(
"scroll",
revealElements
);

revealElements();




const exploreBtn =
document.querySelector(".primary-btn");

if(exploreBtn){

exploreBtn.addEventListener(
"click",
()=>{

document
.getElementById("menu")
.scrollIntoView({
behavior:"smooth"
});
window.addEventListener("load",()=>{

const loader =
document.querySelector(".loader");

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{
loader.style.display="none";
},500);

},2000);

});    

});

}
