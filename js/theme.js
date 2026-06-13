const themeBtn =
document.getElementById("themeToggle");

let darkMode = true;

themeBtn.addEventListener(
"click",
()=>{

if(darkMode){

document.documentElement.style.setProperty(
"--bg",
"#f8f8f8"
);

document.documentElement.style.setProperty(
"--card",
"#ffffff"
);

document.documentElement.style.setProperty(
"--text",
"#111111"
);

document.body.style.color =
"#111111";

themeBtn.innerHTML =
"☀️";

darkMode = false;

}else{

document.documentElement.style.setProperty(
"--bg",
"#0b0f19"
);

document.documentElement.style.setProperty(
"--card",
"#151c2c"
);

document.documentElement.style.setProperty(
"--text",
"#ffffff"
);

document.body.style.color =
"#ffffff";

themeBtn.innerHTML =
"🌙";

darkMode = true;

}

});
