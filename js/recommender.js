const recommendBtn =
document.getElementById("recommendBtn");

const result =
document.getElementById("result");

recommendBtn.addEventListener(
"click",
()=>{

const taste =
document.getElementById("taste").value;

let recommendation =
"";

switch(taste){

case "strong":
recommendation =
"☕ Espresso — Bold, rich and powerful.";
break;

case "sweet":
recommendation =
"🍫 Mocha — Chocolate lovers' favorite.";
break;

case "cold":
recommendation =
"🧊 Cold Brew — Smooth and refreshing.";
break;

case "balanced":
recommendation =
"🥛 Latte — Perfect balance of coffee and milk.";
break;

default:
recommendation =
"⚠ Please select a taste.";
}

result.innerHTML =
recommendation;

});
