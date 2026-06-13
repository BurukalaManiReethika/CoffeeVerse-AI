const recommendBtn =
document.getElementById("recommendBtn");

const result =
document.getElementById("result");

recommendBtn.addEventListener(
"click",
()=>{

const taste =
document.getElementById("taste").value;

let coffee = "";

if(taste === "strong"){

coffee =
"☕ Espresso - Intense and bold.";

}

else if(taste === "sweet"){

coffee =
"🍫 Mocha - Sweet chocolate delight.";

}

else if(taste === "cold"){

coffee =
"🧊 Cold Brew - Smooth and refreshing.";

}

else if(taste === "balanced"){

coffee =
"🥛 Latte - Perfect balance.";

}

else{

coffee =
"Please select a preference.";

}

result.innerHTML = coffee;

});

