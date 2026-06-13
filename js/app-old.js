// =======================
// NAVBAR SCROLL
// =======================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(navbar){

if(window.scrollY > 50){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

}

});

// =======================
// LOADER
// =======================

window.addEventListener("load", () => {

const loader =
document.querySelector(".loader");

if(loader){

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},1000);

}

});

// =======================
// PARTICLES
// =======================

if(typeof particlesJS !== "undefined"){

particlesJS("particles-js",{

particles:{

number:{
value:80
},

size:{
value:3
},

move:{
speed:2
},

line_linked:{
enable:true
}

}

});

}

// =======================
// CONTACT FORM
// =======================

const contactForm =
document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

alert(
"☕ Message Sent Successfully!"
);

contactForm.reset();

});

}

// =======================
// SCROLL REVEAL
// =======================

const reveals =
document.querySelectorAll(
".menu-card,.drink-card,.stat-card,.timeline-item,.review-card,.dashboard-card,.achievement-card"
);

function revealElements(){

reveals.forEach(item=>{

const top =
item.getBoundingClientRect().top;

const windowHeight =
window.innerHeight;

if(top < windowHeight - 100){

item.classList.add("active");

}

});

}

window.addEventListener(
"scroll",
revealElements
);

revealElements();

// =======================
// EXPLORE MENU
// =======================

const exploreBtn =
document.querySelector(".primary-btn");

if(exploreBtn){

exploreBtn.addEventListener(
"click",
()=>{

const menu =
document.getElementById("menu");

if(menu){

menu.scrollIntoView({
behavior:"smooth"
});

}

});

}

// =======================
// AI RECOMMENDER
// =======================

const recommendBtn =
document.getElementById("recommendBtn");

const result =
document.getElementById("result");

if(recommendBtn && result){

recommendBtn.addEventListener(
"click",
()=>{

const taste =
document.getElementById("taste").value;

let coffee = "";

switch(taste){

case "strong":
coffee =
"☕ Espresso — Bold & Powerful";
break;

case "sweet":
coffee =
"🍫 Mocha — Sweet Chocolate Delight";
break;

case "cold":
coffee =
"🧊 Cold Brew — Refreshing";
break;

case "balanced":
coffee =
"🥛 Latte — Perfect Balance";
break;

default:
coffee =
"Select your preference ☕";

}

result.innerHTML =
coffee;

});

}

// =======================
// AI BARISTA
// =======================

const userInput =
document.getElementById("userInput");

const messages =
document.querySelector(".messages");

if(userInput && messages){

userInput.addEventListener(
"keydown",
e=>{

if(e.key === "Enter"){

const text =
userInput.value.toLowerCase();

let reply = "";

if(text.includes("strong")){

reply =
"☕ Espresso is perfect for you.";

}
else if(text.includes("sweet")){

reply =
"🍫 Try our Mocha.";

}
else if(text.includes("cold")){

reply =
"🧊 Cold Brew recommended.";

}
else{

reply =
"🥛 Latte is always a great choice.";

}

messages.innerHTML +=
"<br><br><b>You:</b> "
+ userInput.value +
"<br><b>AI:</b> "
+ reply;

userInput.value = "";

}

});

}

// =======================
// CUSTOM CURSOR
// =======================

const cursor =
document.querySelector(".cursor");

if(cursor){

document.addEventListener(
"mousemove",
e=>{

cursor.style.left =
e.clientX + "px";

cursor.style.top =
e.clientY + "px";

});

}

// =======================
// MUSIC PLAYER
// =======================

const musicBtn =
document.getElementById("musicBtn");

const music =
document.getElementById("cafeAudio");

if(musicBtn && music){

musicBtn.addEventListener(
"click",
()=>{

if(music.paused){

music.play();

musicBtn.innerHTML =
"🔇 Stop Music";

}else{

music.pause();

musicBtn.innerHTML =
"🎵 Café Sounds";

}

});

}

// =======================
// LIVE STATS
// =======================

const cupsToday =
document.getElementById("cupsToday");

const visitors =
document.getElementById("visitors");

if(cupsToday && visitors){

setInterval(()=>{

cupsToday.innerText =
Number(cupsToday.innerText)+1;

visitors.innerText =
Number(visitors.innerText)+2;

},5000);

}
