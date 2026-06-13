const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:2}
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
const input =
document.getElementById("userInput");

input.addEventListener(
"keydown",
e=>{

if(e.key==="Enter"){

const text=input.value;

let reply="";

if(text.includes("strong")){
reply="☕ Espresso";
}
else if(text.includes("sweet")){
reply="🍫 Mocha";
}
else{
reply="🥛 Latte";
}

document.querySelector(
".messages"
).innerHTML +=
"<br><br>"+reply;

input.value="";
}

});
const cursor =
document.querySelector(".cursor");

document.addEventListener(
"mousemove",
e=>{

cursor.style.left =
e.clientX + "px";

cursor.style.top =
e.clientY + "px";

});
const music=
document.getElementById("cafeAudio");

document
.getElementById("musicBtn")
.onclick=()=>{

if(music.paused){
music.play();
}
else{
music.pause();
}

};
window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  if(loader){

    loader.style.opacity = "0";

    setTimeout(() => {
      loader.remove();
    }, 1000);

  }

});
